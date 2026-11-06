---
title: Timers
---

# Timers

Open the **Timers** tab for every timer in one place. The red badge on the tab counts the timers that are running.

## Starting a timer

- **Tap a time in a method step.** "Bake for 25 minutes" is a link. Tap it.
- **Quick start.** In the Timers tab, tap a chip such as **+ 10 min**, or type a label and a number of minutes and press **Start**.
- **Presets.** Save the times you use most, for example *Soft eggs, 6 min*, with **+ Preset**. They then appear as chips.

Each timer has a large clock and a progress bar, and can be paused, resumed or removed. When it reaches zero a **Ready** card appears and the alarm sounds until you dismiss it.

## Three kinds of timer

| Kind | Icon | Where it lives |
|---|---|---|
| **This device** | none | In that browser. Other devices do not see it. |
| **Global** | globe | In Home Assistant. Every device shows it, and it survives closing the page. |
| **Voice PE** | microphone | Started by voice on a Home Assistant Voice Preview Edition or other ESPHome device. |

To make a timer global, switch on the **Global** chip before you start it. Pause, resume and removal on a global timer reach every device immediately.

### Voice PE timers

Recipe Manager can mirror timers started by voice. It reads template sensors named like `sensor.vpe_timer_1` whose state is `active`, `paused` or `finished`, as described in the ha-timer-card guide for Voice PE. They show up in the same list. Pause, resume and cancel work when the sensor also exposes a `timer_id` and a `control_entity`.

Turn this on or off, and change the sensor prefix, under **Settings → Advanced → Voice PE / ESPHome timers**.

## Alarm sound

Choose **Beep**, **Ding**, **Alarm** (three beeps), **Silent** or **Custom file** under **Settings → Advanced → Timer sound**, and press **Play** to hear it. Browsers only play sound after you have touched the page, so tap once on the card if a timer finishes straight after a reload.

## Sensors for your automations

The integration adds two sensors to a **Recipe Manager** device:

- **Timers** counts the timers that are running or paused. A `timers` attribute lists each one, and a `finished` attribute counts the finished ones.
- **Next timer** holds the time the soonest running timer will finish. It also carries the timer's label and ID.

Use them to flash a light when the oven timer ends, announce it on a speaker, or show the count on a dashboard. They refresh when a timer is added, changed or removed, and again at the moment the next timer finishes.

::: info In the live demo
The demo starts with a global timer called *Rice* and a Voice PE timer called *Pasta water*, so you can see both.
:::
