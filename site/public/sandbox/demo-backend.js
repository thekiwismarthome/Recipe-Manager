// A tiny in-memory stand-in for the Recipe Manager integration, so the real card can run on a web page.
// It answers the same `recipe_manager/*` WebSocket commands the integration does, and emits the same events.
// Nothing here is saved: reload the page and the sample data comes back.
(function () {
  // ---- Illustrated "photos" (the demo has no real photographs) -----------------------------------
  function rng(seed) { // small deterministic random numbers, so each dish always looks the same
    var a = seed >>> 0;
    return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

  function art(spec) {
    var r = rng(hash(spec.key)), W = 800, H = 600, cx = 400, cy = 310, out = [];
    out.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '"><defs>' +
      '<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + spec.bg[0] + '"/><stop offset="1" stop-color="' + spec.bg[1] + '"/></linearGradient>' +
      '<radialGradient id="p" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="' + (spec.plate || '#E9E4DC') + '"/></radialGradient></defs>' +
      '<rect width="800" height="600" fill="url(#g)"/>');
    // soft table texture
    for (var i = 0; i < 9; i++) out.push('<rect x="-20" y="' + (i * 70 - 10) + '" width="840" height="2" fill="#000" opacity=".045"/>');
    function blob(x, y, rad, col, o) { out.push('<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + rad.toFixed(1) + '" fill="' + col + '"' + (o ? ' opacity="' + o + '"' : '') + '/>'); }
    function leaf(x, y, rot, col) { out.push('<ellipse cx="' + x + '" cy="' + y + '" rx="22" ry="9" fill="' + col + '" transform="rotate(' + rot + ' ' + x + ' ' + y + ')"/>'); }

    if (spec.kind === 'stack') { // pancakes, anzacs
      out.push('<ellipse cx="400" cy="450" rx="250" ry="52" fill="#000" opacity=".14"/>');
      out.push('<ellipse cx="400" cy="420" rx="245" ry="62" fill="url(#p)"/>');
      for (var k = 0; k < 4; k++) {
        var y = 395 - k * 46;
        out.push('<ellipse cx="400" cy="' + (y + 22) + '" rx="170" ry="40" fill="' + spec.food[1] + '"/>');
        out.push('<rect x="230" y="' + y + '" width="340" height="22" fill="' + spec.food[1] + '"/>');
        out.push('<ellipse cx="400" cy="' + y + '" rx="170" ry="40" fill="' + spec.food[0] + '"/>');
      }
      out.push('<ellipse cx="400" cy="218" rx="95" ry="22" fill="' + spec.food[2] + '" opacity=".9"/>');
      for (k = 0; k < 7; k++) blob(330 + r() * 140, 200 + r() * 36, 9 + r() * 7, spec.food[3]);
    } else if (spec.kind === 'loaf') { // banana bread
      out.push('<ellipse cx="400" cy="470" rx="290" ry="46" fill="#000" opacity=".14"/>');
      out.push('<rect x="130" y="250" width="540" height="200" rx="44" fill="' + spec.food[1] + '"/>');
      out.push('<path d="M130 300 Q130 190 270 190 L530 190 Q670 190 670 300 Z" fill="' + spec.food[0] + '"/>');
      out.push('<path d="M300 200 Q400 150 500 200" fill="none" stroke="' + spec.food[2] + '" stroke-width="12" stroke-linecap="round"/>');
      for (k = 0; k < 14; k++) blob(190 + r() * 420, 310 + r() * 110, 4 + r() * 7, spec.food[2], .55);
      out.push('<rect x="150" y="440" width="500" height="14" rx="7" fill="#fff" opacity=".35"/>');
    } else if (spec.kind === 'bowl') { // soups, oats
      out.push('<ellipse cx="400" cy="500" rx="280" ry="40" fill="#000" opacity=".14"/>');
      out.push('<path d="M120 300 Q120 500 400 500 Q680 500 680 300 Z" fill="url(#p)"/>');
      out.push('<ellipse cx="400" cy="300" rx="280" ry="86" fill="' + (spec.plate || '#E9E4DC') + '"/>');
      out.push('<ellipse cx="400" cy="304" rx="246" ry="70" fill="' + spec.food[0] + '"/>');
      for (k = 0; k < 24; k++) { var a = r() * 6.283, d = Math.sqrt(r()); blob(400 + Math.cos(a) * d * 215, 304 + Math.sin(a) * d * 52, 5 + r() * 9, spec.food[1 + (k % (spec.food.length - 1))], .85); }
      out.push('<path d="M300 290 q40 -22 80 0" stroke="#fff" stroke-width="8" fill="none" opacity=".4" stroke-linecap="round"/>');
    } else { // plate seen from above
      out.push('<circle cx="400" cy="318" r="238" fill="#000" opacity=".14"/>');
      out.push('<circle cx="400" cy="300" r="238" fill="url(#p)"/><circle cx="400" cy="300" r="184" fill="none" stroke="#000" stroke-opacity=".07" stroke-width="3"/>');
      var n = spec.count || 22;
      for (k = 0; k < n; k++) {
        var aa = r() * 6.283, dd = Math.sqrt(r()) * 150;
        blob(cx + Math.cos(aa) * dd, 300 + Math.sin(aa) * dd, 14 + r() * 26, spec.food[k % spec.food.length], .94);
      }
      if (spec.sauce) { out.push('<circle cx="400" cy="300" r="120" fill="' + spec.sauce + '" opacity=".55"/>'); for (k = 0; k < 10; k++) blob(330 + r() * 140, 250 + r() * 100, 12 + r() * 16, spec.food[k % spec.food.length]); }
    }
    (spec.green || []).forEach(function (g, i) { leaf(g[0], g[1], g[2], spec.garnish || '#3F7D3A'); });
    out.push('</svg>');
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(out.join(''));
  }

  var ART = {
    pasta:    { key: 'pasta',    kind: 'plate', bg: ['#F2D9B8', '#E7B98B'], food: ['#D8412B', '#E8624A', '#F4E3C4', '#C32E1D'], sauce: '#D8412B', count: 18, green: [[360, 250, -30], [430, 235, 20], [400, 330, 70]] },
    pancake:  { key: 'pancake',  kind: 'stack', bg: ['#EBD7C2', '#D9B896'], food: ['#E3B067', '#C98C3D', '#F3E6B8', '#7A2E2A'] },
    tikka:    { key: 'tikka',    kind: 'bowl',  bg: ['#E8C9A0', '#D1995F'], plate: '#F0EAE0', food: ['#D9692B', '#A63A17', '#F2C58B', '#6E8F3C'] },
    banana:   { key: 'banana',   kind: 'loaf',  bg: ['#E9DCC4', '#D4BE98'], food: ['#B9772F', '#D9A55C', '#8A5320'] },
    greek:    { key: 'greek',    kind: 'plate', bg: ['#D6E2EA', '#B7CCD8'], food: ['#D8412B', '#7DAA4F', '#F4F0DD', '#4D2F54', '#E7C84A'], count: 30, green: [[330, 270, 30], [470, 330, -20]] },
    taco:     { key: 'taco',     kind: 'plate', bg: ['#E4C894', '#C79C58'], food: ['#8B4A24', '#7DAA4F', '#D8412B', '#EFD36D', '#F4F0DD'], count: 28, green: [[380, 300, 10]] },
    pavlova:  { key: 'pavlova',  kind: 'plate', bg: ['#E6D6E3', '#CDB4C8'], plate: '#F2EEF1', food: ['#FFFDF8', '#F4EEE6', '#D6304F', '#7BAE4B', '#F2C230'], count: 26 },
    pumpkin:  { key: 'pumpkin',  kind: 'bowl',  bg: ['#DDC9A8', '#C6A57B'], plate: '#F4EEE3', food: ['#E88B2B', '#F3B35B', '#FFFDF5', '#6E8F3C'] },
    oats:     { key: 'oats',     kind: 'bowl',  bg: ['#DCE4EE', '#BAC8DA'], plate: '#F1F1EE', food: ['#EADFCB', '#8E2F6B', '#2F4B8A', '#F2C230', '#7BAE4B'] },
    anzac:    { key: 'anzac',    kind: 'plate', bg: ['#E3D2BD', '#CFB394'], plate: '#EDE6DA', food: ['#C98A3D', '#B2742B', '#DDA95A', '#9B6322'], count: 11 },
    salmon:   { key: 'salmon',   kind: 'plate', bg: ['#D4E2D2', '#A9C4A6'], food: ['#F08463', '#F6A58A', '#7DAA4F', '#EFD36D', '#F4F0DD'], count: 24, green: [[420, 280, 20], [360, 330, -25]] },
    prawn:    { key: 'prawn',    kind: 'plate', bg: ['#E9D5C2', '#D3AE8F'], food: ['#F08463', '#EFD36D', '#F4E9D0', '#7DAA4F'], count: 20, green: [[400, 300, 0]] }
  };
  Object.keys(ART).forEach(function (k) { ART[k] = art(ART[k]); });

  // ---- Sample recipes -----------------------------------------------------------------------------
  function ing(name, amount, unit, notes) { return { name: name, amount: amount || null, unit: unit || null, notes: notes || null }; }
  function head(name) { return { name: name, amount: null, unit: null, notes: null, is_heading: true }; }
  function nut(c, f, sf, carb, fib, sug, p, sod, chol) { return { calories: String(c), fat: String(f), saturated_fat: String(sf), carbohydrates: String(carb), fiber: String(fib), sugar: String(sug), protein: String(p), sodium: String(sod), cholesterol: String(chol) }; }

  function seedRecipes() {
    var now = Date.now(), day = 86400000;
    function ts(d) { return new Date(now - d * day).toISOString(); }
    var R = [
      { name: 'Creamy Tomato Pasta', img: 'pasta', fav: true, rating: 5, servings: 4, prep: 10, cook: 25, courses: ['Dinner'], categories: ['Italian', 'Vegetarian'], collections: ['30 Minutes', 'Weeknight'], tags: ['pasta', 'quick', 'comfort food'], cuisine: 'Italian',
        description: 'A silky tomato sauce with a splash of cream and plenty of basil. Ready in the time it takes the pasta to cook.',
        ingredients: [ing('Penne', '12', 'oz'), ing('Olive oil', '2', 'tbsp'), ing('Onion', '1', null, 'finely chopped'), ing('Garlic', '3', 'cloves', 'crushed'), ing('Crushed tomatoes', '28', 'oz', 'one large can'), ing('Thickened cream', '1/2', 'cup'), ing('Parmesan', '1/2', 'cup', 'grated, plus extra to serve'), ing('Fresh basil', '1', 'handful'), ing('Salt and pepper')],
        instructions: ['Bring a large pot of salted water to the boil and cook the penne for 11 minutes, or until al dente. Drain, keeping a mug of the pasta water.', 'While the pasta cooks, warm the olive oil in a deep frying pan over medium heat. Cook the onion for 5 minutes until soft and golden.', 'Add the garlic and stir for 30 seconds, then pour in the crushed tomatoes. Simmer for 12 minutes, stirring now and then.', 'Stir in the cream and parmesan. Season well and loosen with a splash of pasta water if it is too thick.', 'Toss the pasta through the sauce, tear in the basil and serve with extra parmesan.'],
        nutrition: nut(520, 17, 8, 74, 6, 11, 17, 610, 38), notes: 'Add a pinch of chilli flakes with the garlic for a gentle kick.', added: 40 },
      { name: 'Fluffy Buttermilk Pancakes', img: 'pancake', fav: true, rating: 5, servings: 4, prep: 10, cook: 15, courses: ['Breakfast'], categories: ['Baking', 'Vegetarian'], collections: ['Weekend'], tags: ['pancakes', 'brunch', 'sweet'], cuisine: 'American',
        description: 'Tall, soft pancakes with golden edges. The batter rests for ten minutes, which is the whole secret.',
        ingredients: [head('Dry'), ing('Plain flour', '2', 'cups'), ing('Sugar', '2', 'tbsp'), ing('Baking powder', '2', 'tsp'), ing('Baking soda', '1/2', 'tsp'), ing('Salt', '1/2', 'tsp'), head('Wet'), ing('Buttermilk', '2', 'cups'), ing('Eggs', '2'), ing('Butter', '4', 'tbsp', 'melted, plus extra for the pan'), head('To serve'), ing('Maple syrup'), ing('Fresh berries')],
        instructions: ['Whisk the dry ingredients together in a large bowl.', 'In a jug, whisk the buttermilk, eggs and melted butter. Pour into the dry mix and stir until just combined. A few lumps are fine.', 'Rest the batter for 10 minutes while you heat a non-stick pan over medium heat.', 'Butter the pan and pour in 1/4 cup of batter per pancake. Cook for 2 minutes until bubbles appear, then flip and cook for 1 minute more.', 'Stack, then top with berries and maple syrup.'],
        nutrition: nut(380, 14, 8, 51, 2, 11, 11, 760, 105), added: 33 },
      { name: 'Chicken Tikka Masala', img: 'tikka', fav: true, rating: 4, servings: 6, prep: 20, cook: 40, courses: ['Dinner'], categories: ['Indian', 'Gluten Free'], collections: ['Family Favourites'], tags: ['curry', 'chicken', 'freezer friendly'], cuisine: 'Indian',
        description: 'Tender marinated chicken in a mild, creamy tomato sauce. It tastes better the next day.',
        ingredients: [head('Marinade'), ing('Chicken thighs', '2', 'lb', 'boneless, cut in chunks'), ing('Natural yoghurt', '1', 'cup'), ing('Garam masala', '2', 'tsp'), ing('Ground cumin', '1', 'tsp'), ing('Lemon juice', '2', 'tbsp'), head('Sauce'), ing('Butter', '2', 'tbsp'), ing('Onion', '1', null, 'diced'), ing('Garlic', '4', 'cloves'), ing('Fresh ginger', '1', 'tbsp', 'grated'), ing('Tomato passata', '2', 'cups'), ing('Cream', '1/2', 'cup'), ing('Fresh coriander', '1', 'handful'), ing('Basmati rice', '2', 'cups', 'to serve')],
        instructions: ['Mix the marinade ingredients with the chicken, cover and refrigerate for at least 30 minutes.', 'Grill or pan-fry the chicken for 8 minutes, turning once, until charred at the edges. Set aside.', 'Melt the butter in a large pan and cook the onion for 6 minutes. Add the garlic and ginger and stir for 1 minute.', 'Pour in the passata and simmer for 15 minutes. Stir in the cream and the chicken and simmer for 10 minutes more.', 'Cook the rice following the packet. Serve the curry over rice with coriander.'],
        nutrition: nut(610, 28, 13, 52, 3, 9, 36, 540, 140), notes: 'Freezes well for up to 3 months.', added: 28 },
      { name: 'Banana Bread', img: 'banana', fav: false, rating: 4, servings: 10, prep: 15, cook: 60, courses: ['Snack', 'Dessert'], categories: ['Baking', 'Vegetarian'], collections: ['Weekend'], tags: ['baking', 'loaf', 'overripe bananas'], cuisine: null,
        description: 'The best use for the bananas at the bottom of the fruit bowl. Moist, not too sweet, and good toasted with butter.',
        ingredients: [ing('Ripe bananas', '3', null, 'mashed'), ing('Butter', '1/3', 'cup', 'melted'), ing('Brown sugar', '3/4', 'cup'), ing('Egg', '1'), ing('Vanilla extract', '1', 'tsp'), ing('Baking soda', '1', 'tsp'), ing('Salt', '1', 'pinch'), ing('Plain flour', '1 1/2', 'cups'), ing('Walnuts', '1/2', 'cup', 'optional')],
        instructions: ['Heat the oven to 350°F and line a loaf tin with baking paper.', 'Stir the mashed bananas into the melted butter. Mix in the sugar, egg and vanilla.', 'Sprinkle over the baking soda and salt, then fold in the flour, and the walnuts if using.', 'Pour into the tin and bake for 60 minutes. A skewer should come out clean.', 'Cool in the tin for 10 minutes, then turn out onto a rack.'],
        nutrition: nut(260, 9, 5, 42, 1, 22, 4, 190, 32), added: 21 },
      { name: 'Greek Salad', img: 'greek', fav: false, rating: 4, servings: 4, prep: 15, cook: 0, courses: ['Lunch', 'Side'], categories: ['Mediterranean', 'Vegetarian', 'Gluten Free'], collections: ['Summer', '30 Minutes'], tags: ['salad', 'no cook', 'feta'], cuisine: 'Greek',
        description: 'Chunky vegetables, salty feta and a good olive oil. No cooking, no fuss.',
        ingredients: [ing('Tomatoes', '4', null, 'cut in wedges'), ing('Cucumber', '1', null, 'thickly sliced'), ing('Red onion', '1/2', null, 'thinly sliced'), ing('Kalamata olives', '1/2', 'cup'), ing('Feta', '7', 'oz', 'one block'), ing('Extra virgin olive oil', '1/4', 'cup'), ing('Red wine vinegar', '1', 'tbsp'), ing('Dried oregano', '1', 'tsp')],
        instructions: ['Combine the tomatoes, cucumber, onion and olives in a wide bowl.', 'Whisk the oil, vinegar and oregano and pour over the salad.', 'Lay the block of feta on top, sprinkle with a little more oregano and serve straight away.'],
        nutrition: nut(290, 24, 9, 12, 3, 8, 9, 780, 40), added: 17 },
      { name: 'Beef Tacos', img: 'taco', fav: false, rating: 4, servings: 4, prep: 15, cook: 20, courses: ['Dinner'], categories: ['Mexican'], collections: ['Family Favourites', 'Weeknight'], tags: ['tacos', 'mince', 'kids love it'], cuisine: 'Mexican',
        description: 'Seasoned beef mince, crisp shells and all the toppings in little bowls so everyone builds their own.',
        ingredients: [ing('Beef mince', '1', 'lb'), ing('Onion', '1', null, 'diced'), ing('Taco seasoning', '2', 'tbsp'), ing('Tomato paste', '1', 'tbsp'), ing('Taco shells', '8'), ing('Lettuce', '2', 'cups', 'shredded'), ing('Tomato', '2', null, 'diced'), ing('Grated cheese', '1', 'cup'), ing('Sour cream', '1/2', 'cup'), ing('Lime', '1', null, 'cut in wedges')],
        instructions: ['Brown the mince and onion in a hot frying pan for 8 minutes, breaking up the lumps.', 'Stir in the taco seasoning, tomato paste and 1/2 cup of water. Simmer for 6 minutes until thick.', 'Warm the taco shells in the oven for 4 minutes.', 'Fill the shells with beef and let everyone add their own toppings.'],
        nutrition: nut(540, 29, 12, 38, 4, 5, 28, 820, 85), added: 14 },
      { name: 'Pavlova with Berries', img: 'pavlova', fav: true, rating: 5, servings: 8, prep: 20, cook: 90, courses: ['Dessert'], categories: ['Baking', 'Gluten Free', 'Vegetarian'], collections: ['Christmas', 'Kiwi Classics'], tags: ['pavlova', 'meringue', 'celebration'], cuisine: 'New Zealand',
        description: 'Crisp outside, marshmallow inside. The Christmas table is not complete without it.',
        ingredients: [ing('Egg whites', '6'), ing('Caster sugar', '1 1/2', 'cups'), ing('White vinegar', '2', 'tsp'), ing('Cornflour', '2', 'tsp'), ing('Vanilla extract', '1', 'tsp'), ing('Thickened cream', '1', 'cup', 'whipped'), ing('Strawberries', '2', 'cups', 'halved'), ing('Kiwifruit', '3', null, 'sliced'), ing('Passionfruit', '2')],
        instructions: ['Heat the oven to 250°F and draw a 9 inch circle on baking paper.', 'Beat the egg whites to soft peaks, then add the sugar a spoonful at a time. Beat for 10 minutes until thick and glossy.', 'Fold in the vinegar, cornflour and vanilla. Pile onto the circle, hollowing the middle slightly.', 'Bake for 90 minutes, then switch off the oven and leave the pavlova inside to cool completely.', 'Top with whipped cream, the fruit and the passionfruit pulp just before serving.'],
        nutrition: nut(310, 11, 7, 49, 2, 46, 4, 70, 40), notes: 'Make the base the day before. Top it at the last minute.', added: 10 },
      { name: 'Roast Pumpkin Soup', img: 'pumpkin', fav: false, rating: 4, servings: 6, prep: 15, cook: 45, courses: ['Lunch', 'Dinner'], categories: ['Soup', 'Vegetarian', 'Gluten Free'], collections: ['Winter'], tags: ['soup', 'roast', 'freezer friendly'], cuisine: null,
        description: 'Roasting the pumpkin first gives this soup real depth. Serve with buttered toast.',
        ingredients: [ing('Pumpkin', '2', 'lb', 'peeled and cubed'), ing('Olive oil', '2', 'tbsp'), ing('Onion', '1', null, 'chopped'), ing('Garlic', '2', 'cloves'), ing('Vegetable stock', '4', 'cups'), ing('Ground cumin', '1', 'tsp'), ing('Cream', '1/4', 'cup', 'to finish'), ing('Pumpkin seeds', '2', 'tbsp', 'toasted')],
        instructions: ['Heat the oven to 400°F. Toss the pumpkin in oil and roast for 30 minutes until caramelised.', 'Cook the onion and garlic in a large pot for 5 minutes, then stir in the cumin.', 'Add the roast pumpkin and stock, bring to the boil, then simmer for 10 minutes.', 'Blend until smooth, stir in the cream and season. Top with toasted pumpkin seeds.'],
        nutrition: nut(180, 8, 3, 25, 4, 8, 3, 520, 10), added: 8 },
      { name: 'Overnight Oats', img: 'oats', fav: false, rating: 3, servings: 1, prep: 5, cook: 0, courses: ['Breakfast'], categories: ['Vegetarian'], collections: ['Make Ahead', '30 Minutes'], tags: ['oats', 'meal prep', 'no cook'], cuisine: null,
        description: 'Five minutes the night before and breakfast is done. Change the fruit with the seasons.',
        ingredients: [ing('Rolled oats', '1/2', 'cup'), ing('Milk', '1/2', 'cup'), ing('Natural yoghurt', '1/4', 'cup'), ing('Chia seeds', '1', 'tsp'), ing('Honey', '1', 'tsp'), ing('Blueberries', '1/4', 'cup')],
        instructions: ['Stir the oats, milk, yoghurt, chia and honey together in a jar.', 'Cover and refrigerate for at least 6 hours, or overnight.', 'Top with blueberries in the morning.'],
        nutrition: nut(320, 9, 3, 49, 7, 16, 14, 90, 12), added: 6 },
      { name: 'ANZAC Biscuits', img: 'anzac', fav: true, rating: 5, servings: 24, prep: 15, cook: 15, courses: ['Snack', 'Dessert'], categories: ['Baking', 'Vegetarian'], collections: ['Kiwi Classics'], tags: ['biscuits', 'oats', 'golden syrup'], cuisine: 'New Zealand',
        description: 'Crunchy at the edges, chewy in the middle, and they keep for weeks. Golden syrup is the thing.',
        ingredients: [ing('Rolled oats', '1', 'cup'), ing('Plain flour', '1', 'cup'), ing('Desiccated coconut', '1', 'cup'), ing('Brown sugar', '3/4', 'cup'), ing('Butter', '4', 'oz'), ing('Golden syrup', '2', 'tbsp'), ing('Baking soda', '1', 'tsp'), ing('Boiling water', '2', 'tbsp')],
        instructions: ['Heat the oven to 320°F and line two trays with baking paper.', 'Mix the oats, flour, coconut and sugar in a bowl.', 'Melt the butter and golden syrup in a small pan. Dissolve the baking soda in the boiling water and stir it into the butter. It will foam.', 'Pour into the dry mix and stir well. Roll into 24 balls and flatten slightly on the trays.', 'Bake for 15 minutes until golden, then cool on the trays.'],
        nutrition: nut(120, 6, 4, 15, 1, 8, 1, 60, 12), added: 4 },
      { name: 'Lemon Herb Salmon', img: 'salmon', fav: false, rating: 4, servings: 2, prep: 10, cook: 15, courses: ['Dinner'], categories: ['Seafood', 'Gluten Free'], collections: ['30 Minutes', 'Weeknight'], tags: ['fish', 'oven', 'healthy'], cuisine: null,
        description: 'Baked fillets with lemon, garlic and herbs. A weeknight dinner that looks like effort.',
        ingredients: [ing('Salmon fillets', '2', null, 'skin on'), ing('Lemon', '1', null, 'half sliced, half juiced'), ing('Garlic', '2', 'cloves', 'minced'), ing('Olive oil', '2', 'tbsp'), ing('Fresh dill', '2', 'tbsp', 'chopped'), ing('Baby potatoes', '1', 'lb'), ing('Green beans', '8', 'oz')],
        instructions: ['Heat the oven to 425°F. Boil the potatoes for 10 minutes, drain and tip onto a tray.', 'Place the salmon on the tray, rub with the oil, garlic, lemon juice and dill, and lay lemon slices on top.', 'Roast for 12 minutes, until the salmon flakes easily.', 'Steam the beans for 4 minutes and serve alongside.'],
        nutrition: nut(480, 26, 5, 28, 5, 3, 36, 130, 95), added: 2 }
    ];
    return R.map(function (x, i) {
      var total = (x.prep || 0) + (x.cook || 0);
      return {
        id: 'demo-recipe-' + (i + 1), name: x.name, description: x.description, source_url: null, image_url: ART[x.img], notes: x.notes || null,
        tags: x.tags, courses: x.courses, categories: x.categories, collections: x.collections, cuisine: x.cuisine, category: null,
        prep_time: x.prep, cook_time: x.cook, total_time: total, servings: x.servings, servings_text: null,
        ingredients: x.ingredients, instructions: x.instructions, nutrition: x.nutrition, photos: [],
        rating: x.rating, is_favourite: x.fav, created_at: ts(x.added), updated_at: ts(x.added)
      };
    });
  }

  function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }

  function seedPlan() {
    var t = new Date(), n = 0;
    function e(off, meal, rid, serv, notes) { return { id: 'demo-plan-' + (++n), recipe_id: 'demo-recipe-' + rid, date: iso(addDays(t, off)), meal_type: meal, servings: serv || 4, notes: notes || null }; }
    return [e(-1, 'dinner', 6), e(0, 'breakfast', 9, 1), e(0, 'dinner', 3, 6, 'Make double and freeze half'), e(0, 'snack', 10, 2), e(1, 'breakfast', 2), e(1, 'dinner', 11, 2), e(2, 'lunch', 5), e(2, 'dinner', 1), e(3, 'dinner', 8, 6), e(4, 'dessert', 7, 8, 'Friday night at Mum and Dad\'s'), e(5, 'breakfast', 2)];
  }

  function mondayOf(s) { var d = s ? new Date(s + 'T00:00:00') : new Date(); var k = (d.getDay() + 6) % 7; d.setDate(d.getDate() - k); return d; }

  // ---- The backend --------------------------------------------------------------------------------
  window.createDemoBackend = function (opts) {
    opts = opts || {};
    var recipes, plan, timers, listeners = [], counter = 100;
    function clone(x) { return JSON.parse(JSON.stringify(x)); }
    function reset() {
      recipes = seedRecipes(); plan = seedPlan();
      timers = [{ id: 'demo-timer-1', label: 'Rice', duration: 900, start_time: Date.now() / 1000 - 240, running: true, paused_remaining: null, preset_id: null }];
      emit('recipe_manager_recipe_updated', { recipe_id: 'demo-recipe-1' });
      emit('recipe_manager_meal_plan_updated', {});
    }
    function emit(type, data) { listeners.slice().forEach(function (fn) { try { fn({ event_type: type, data: data || {} }); } catch (e) {} }); }
    function nid(p) { return p + '-' + (++counter) + '-' + Math.random().toString(36).slice(2, 7); }
    function find(id) { return recipes.filter(function (r) { return r.id === id; })[0]; }
    function err(code, message) { var e = new Error(message); e.code = code; return e; }
    function allTags() { var s = {}; recipes.forEach(function (r) { (r.tags || []).forEach(function (t) { s[t] = 1; }); }); return Object.keys(s).sort(function (a, b) { return a.toLowerCase() < b.toLowerCase() ? -1 : 1; }); }

    var H = {
      'recipe_manager/recipes/get_all': function () { return { recipes: recipes }; },
      'recipe_manager/recipes/get': function (m) { var r = find(m.recipe_id); if (!r) throw err('not_found', 'Recipe not found'); return { recipe: r }; },
      'recipe_manager/recipes/add': function (m) {
        var d = {}; Object.keys(m).forEach(function (k) { if (k !== 'type' && k !== 'id') d[k] = m[k]; });
        var now = new Date().toISOString();
        var r = Object.assign({ id: nid('demo-recipe'), name: 'Untitled', description: null, source_url: null, image_url: null, notes: null, tags: [], courses: [], categories: [], collections: [], cuisine: null, category: null, prep_time: null, cook_time: null, total_time: null, servings: null, servings_text: null, ingredients: [], instructions: [], nutrition: null, photos: [], rating: null, is_favourite: false }, d, { created_at: now, updated_at: now });
        delete r.download_image;
        recipes.push(r); emit('recipe_manager_recipe_added', { recipe_id: r.id }); return { recipe: r };
      },
      'recipe_manager/recipes/update': function (m) {
        var r = find(m.recipe_id); if (!r) throw err('not_found', 'Recipe not found');
        Object.keys(m).forEach(function (k) { if (k !== 'type' && k !== 'id' && k !== 'recipe_id') r[k] = m[k]; });
        r.updated_at = new Date().toISOString(); emit('recipe_manager_recipe_updated', { recipe_id: r.id }); return { recipe: r };
      },
      'recipe_manager/recipes/delete': function (m) {
        if (!find(m.recipe_id)) throw err('not_found', 'Recipe not found');
        recipes = recipes.filter(function (r) { return r.id !== m.recipe_id; });
        plan = plan.filter(function (p) { return p.recipe_id !== m.recipe_id; });
        emit('recipe_manager_recipe_deleted', { recipe_id: m.recipe_id }); return { deleted: true };
      },
      'recipe_manager/recipes/toggle_favourite': function (m) {
        var r = find(m.recipe_id); if (!r) throw err('not_found', 'Recipe not found');
        r.is_favourite = !r.is_favourite; r.updated_at = new Date().toISOString(); emit('recipe_manager_recipe_updated', { recipe_id: r.id }); return { recipe: r };
      },
      // The demo cannot reach other websites, so scraping always returns the same example recipe
      'recipe_manager/recipes/scrape': function (m) {
        return { recipe: {
          name: 'Garlic Butter Prawns', description: 'Demo only: the live demo cannot visit other websites, so this is a sample result. On your own Home Assistant the card reads the recipe from the page you paste.',
          source_url: m.url, image_url: ART.prawn, servings: 4, prep_time: 10, cook_time: 8,
          tags: ['seafood', 'quick'], courses: ['Dinner'], categories: ['Seafood'], collections: ['30 Minutes'],
          ingredients: [ing('Raw prawns', '1', 'lb', 'peeled'), ing('Butter', '3', 'tbsp'), ing('Garlic', '5', 'cloves', 'minced'), ing('Lemon', '1', null), ing('Parsley', '2', 'tbsp', 'chopped')],
          instructions: ['Melt the butter in a large pan over medium-high heat.', 'Cook the garlic for 30 seconds, then add the prawns and cook for 3 minutes each side.', 'Squeeze over the lemon, scatter with parsley and serve with crusty bread.'],
          nutrition: { calories: '210', fat: '12', carbohydrates: '3', protein: '22' } } };
      },
      'recipe_manager/recipes/upload_image': function (m) {
        var b = String(m.image_data || ''), url = b.indexOf('data:') === 0 ? b : 'data:image/jpeg;base64,' + b;
        var r = find(m.recipe_id); if (r) { r.image_url = url; emit('recipe_manager_recipe_updated', { recipe_id: r.id }); }
        return { image_url: url };
      },
      'recipe_manager/recipes/download_image': function (m) { return { local_url: m.image_url }; },
      'recipe_manager/tags/get_all': function () { return { tags: allTags() }; },
      'recipe_manager/meal_plan/get': function (m) {
        var out = plan;
        if (m.week_start) { var a = iso(mondayOf(m.week_start)), b = iso(addDays(mondayOf(m.week_start), 6)); out = plan.filter(function (p) { return p.date >= a && p.date <= b; }); }
        return { entries: out.map(function (p) { var r = find(p.recipe_id); return Object.assign({}, p, r ? { recipe_name: r.name, recipe_image: r.image_url } : {}); }) };
      },
      'recipe_manager/meal_plan/add': function (m) {
        if (!find(m.recipe_id)) throw err('not_found', 'Recipe not found');
        var e = { id: nid('demo-plan'), recipe_id: m.recipe_id, date: m.date, meal_type: m.meal_type, servings: m.servings || 1, notes: m.notes || null };
        plan.push(e); emit('recipe_manager_meal_plan_updated', {}); return { entry: e };
      },
      'recipe_manager/meal_plan/remove': function (m) {
        var n = plan.length; plan = plan.filter(function (p) { return p.id !== m.entry_id; });
        if (plan.length === n) throw err('not_found', 'Entry not found');
        emit('recipe_manager_meal_plan_updated', {}); return { removed: true };
      },
      'recipe_manager/meal_plan/clear': function (m) {
        var a = iso(mondayOf(m.week_start)), b = iso(addDays(mondayOf(m.week_start), 6)), n = plan.length;
        plan = plan.filter(function (p) { return p.date < a || p.date > b; });
        emit('recipe_manager_meal_plan_updated', {}); return { cleared: n - plan.length };
      },
      'recipe_manager/import/recipe_keeper': function () { throw err('demo', 'Importing is turned off in the demo. On your own Home Assistant you can bring in a whole Recipe Keeper export.'); },
      'recipe_manager/global_timers/get': function () { return { timers: timers }; },
      'recipe_manager/global_timers/add': function (m) {
        var t = { id: nid('demo-timer'), label: m.label, duration: m.duration, start_time: m.start_time, running: m.running !== false, paused_remaining: m.paused_remaining == null ? null : m.paused_remaining, preset_id: m.preset_id || null };
        timers.push(t); emit('recipe_manager_global_timer_added', t); return { timer: t };
      },
      'recipe_manager/global_timers/update': function (m) {
        var t = timers.filter(function (x) { return x.id === m.timer_id; })[0]; if (!t) throw err('not_found', 'Timer ' + m.timer_id + ' not found');
        ['running', 'start_time', 'paused_remaining'].forEach(function (k) { if (k in m) t[k] = m[k]; });
        emit('recipe_manager_global_timer_updated', t); return { timer: t };
      },
      'recipe_manager/global_timers/delete': function (m) {
        var n = timers.length; timers = timers.filter(function (x) { return x.id !== m.timer_id; });
        if (timers.length === n) throw err('not_found', 'Timer ' + m.timer_id + ' not found');
        emit('recipe_manager_global_timer_deleted', { timer_id: m.timer_id }); return { deleted: true };
      },
      'recipe_manager/get_info': function () { return { version: opts.integrationVersion || 'demo' }; },
      'recipe_manager/backup': function () { return { version: 1, recipes: recipes, meal_plans: plan }; },
      'hacs/repositories/list': function () {
        return [{ full_name: 'thekiwismarthome/Recipe-Manager', installed_version: opts.integrationVersion || 'demo' }, { full_name: 'thekiwismarthome/Recipe-Manager-Card', installed_version: opts.cardVersion || opts.integrationVersion || 'demo' }];
      }
    };

    function callWS(msg) {
      return new Promise(function (resolve, reject) {
        var h = H[msg.type];
        // Shopping List Manager is not part of this demo, so the card falls back to its own simple list
        if (!h) { reject(err('unknown_command', 'Unknown command: ' + msg.type)); return; }
        setTimeout(function () { try { resolve(clone(h(msg))); } catch (e) { reject(e); } }, 30);
      });
    }

    // A voice assistant timer, as Home Assistant would show it (sensor.vpe_timer_1)
    var finishes = new Date(Date.now() + 7.5 * 60000).toISOString();
    var states = { 'sensor.vpe_timer_1': { state: 'active', last_updated: new Date().toISOString(), attributes: { duration: '0:10:00', remaining: '0:07:30', finishes_at: finishes, display_name: 'Voice PE', timer_name: 'Pasta water' } } };

    reset();
    return {
      reset: reset,
      hass: function () {
        return {
          callWS: callWS,
          callService: function () { return Promise.resolve(); },
          connection: { subscribeMessage: function (cb) { listeners.push(cb); return Promise.resolve(function () { listeners = listeners.filter(function (f) { return f !== cb; }); }); } },
          language: 'en', locale: { language: 'en' }, themes: { darkMode: false }, user: { id: 'demo', name: 'You', is_admin: true },
          states: states, config: { unit_system: { length: 'mi' } }
        };
      },
      recipes: function () { return recipes; }
    };
  };
})();
