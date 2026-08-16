# NSPanel Pro 120 — Keep the View Assist app running

A Home Assistant automation that watches the foreground app on a **Sonoff
NSPanel Pro 120** and, if the **View Assist / Home Assistant Companion** app
isn't the app currently running, relaunches it automatically over ADB.

> ℹ️ This is a config example, not part of the Recipe Manager integration —
> it just lives in this repo's `examples/` folder. Copy the automation into
> your own Home Assistant instance.

## How it works

1. A **time-pattern trigger** polls every couple of minutes (plus an extra
   trigger that fires the moment the screen wakes).
2. It checks the NSPanel Pro's `media_player` entity's **`app_id`** attribute,
   which the Android Debug Bridge integration sets to the package name of the
   app currently in the foreground.
3. If `app_id` is **not** the companion app package, it runs an ADB
   `monkey ... LAUNCHER` command to bring the app back to the foreground
   (cold-starting it if it was killed).

## Prerequisites

### 1. Enable ADB on the NSPanel Pro

On the panel: **Settings → About → tap the build/version number 7 times** to
unlock Developer options, then **Settings → Developer options → enable USB /
Network ADB debugging**. Note the panel's IP address.

### 2. Add the Android Debug Bridge integration

In Home Assistant: **Settings → Devices & Services → Add Integration →
Android Debug Bridge**.

- **Device type:** Android
- **Host:** the NSPanel Pro's IP address (port `5555`)
- Approve the "Allow USB/Network debugging?" prompt that pops up **on the panel
  screen** the first time HA connects (tick "always allow from this computer").

This creates a `media_player.*` entity for the panel. Rename it if you like,
then use that entity id in the automation.

### 3. Tell the integration which apps to track (so `app_id` populates)

Open the integration's **Configure** dialog and add the companion app to the
**Applications** list so the `app_id` attribute reports it, e.g.:

```
io.homeassistant.companion.android = Home Assistant / View Assist
```

## Install the automation

1. Copy [`nspanel_view_assist_watchdog.yaml`](./nspanel_view_assist_watchdog.yaml)
   into your automations (paste it in **Settings → Automations → ⋮ → Edit in
   YAML**, or append it under your `automation:` config).
2. **Find-and-replace the two placeholders** throughout the file:
   - `media_player.nspanel_pro_120` → your panel's `media_player` entity id
   - `io.homeassistant.companion.android` → the app package you want kept alive
3. Reload automations (**Developer Tools → YAML → Automations**) or restart HA.

## Finding the correct app package name

If you aren't using the stock HA Companion app (some View Assist builds use a
different launcher/package), find the real package name from
**Developer Tools → Template** while the app is open on the panel:

```jinja
{{ state_attr('media_player.nspanel_pro_120', 'app_id') }}
```

Or list every package installed on the panel via ADB
(**Developer Tools → Actions → `androidtv.adb_command`**):

```
pm list packages
```

Use whatever package the View Assist app reports, then plug it into the
automation.

## Tuning

- **Check interval** — change `minutes: "/2"` in the time-pattern trigger
  (`"/5"` for every 5 minutes, etc.).
- **Force it on even from standby** — delete the `condition: not` block so the
  watchdog relaunches the app (and wakes the screen) regardless of panel state.
- **Notify on relaunch** — add a `notify.*` action after the `androidtv.adb_command`
  step if you want a heads-up whenever the app had to be restarted.
