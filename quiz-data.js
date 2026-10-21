/*
  QUIZ DATA

  Each category becomes TWO questions:
    "If I were a ___, what ___ would I be?"   -> uses each option's `him` points (the man of each couple)
    "If you were a ___, what ___ would you be?" -> uses each option's `her` points (the woman of each couple)

  Points are written as two-letter couple keys followed by a number, e.g. "bb3 mg1"
  means: +3 for Belle & the Beast, +1 for Mark & Gemma.

  Keys:
    bi = Burt & Irv              (her = Irv,       him = Burt)
    mh = Mark & Helly            (her = Helly,     him = Mark, the "innie")
    mg = Mark & Gemma            (her = Gemma,     him = Mark, the "outie")
    fd = Fred & Daphne           (her = Daphne,    him = Fred)
    gl = Jim Gordon & Lee        (her = Lee,       him = Jim)
    bb = Belle & the Beast       (her = Belle,     him = the Beast)
    rf = Rapunzel & Flynn Rider  (her = Rapunzel,  him = Flynn)
    js = Jack & Sally            (her = Sally,     him = Jack)

  Burt & Irv are both men, so Irv plays "her" and Burt plays "him".
  Swap the her/him points around for those two if you'd rather.
*/
const QUIZ = [
  {
    id: "flower", emoji: "🌹", a: "a flower", what: "flower",
    options: [
      { label: "Rose",       emoji: "🌹", her: "bb3 mg1",     him: "bb3 gl1" },
      { label: "Sunflower",  emoji: "🌻", her: "rf3 fd1",     him: "fd3 mh1" },
      { label: "Lavender",   emoji: "💜", her: "mg3 fd1",     him: "bi3 mg1" },
      { label: "Tulip",      emoji: "🌷", her: "bi3 js1",     him: "bi1 mg1" },
      { label: "Wildflowers", emoji: "🌼", her: "mh3 rf1",    him: "mh3 fd1" },
      { label: "Orchid",     emoji: "🌺", her: "gl3 bb1",     him: "rf3 js1" },
      { label: "Iris",       emoji: "🌸", her: "fd3 gl1",     him: "gl3 bi1" },
      { label: "Marigold",   emoji: "🏵️", her: "js3 bi1",     him: "js3 rf1" },
      { label: "White lily", emoji: "🤍", her: "mg1 gl1",     him: "mg3 gl1" }
    ]
  },
  {
    id: "season", emoji: "🍂", a: "a season", what: "season",
    options: [
      { label: "Spring", emoji: "🌸", her: "rf3 bb3 mg1 fd1", him: "mh3 bi3 rf1 fd1" },
      { label: "Summer",                    emoji: "☀️", her: "fd3 mg3 rf1 gl1", him: "fd3 rf3 mh1 gl1" },
      { label: "Autumn",                    emoji: "🍂", her: "js3 bi3 gl1 bb1", him: "js3 gl3 bi1 mg1" },
      { label: "Winter",                    emoji: "❄️", her: "mh3 gl3 mg1 js1", him: "mg3 bb3 gl1 js1" }
    ]
  },
  {
    id: "hotdrink", emoji: "☕", a: "a hot drink", what: "hot drink",
    options: [
      { label: "Hot chocolate", emoji: "🍫", her: "rf3 bb1", him: "mh3 fd1" },
      { label: "Black coffee",  emoji: "☕", her: "gl3 mh1", him: "gl3 mg1" },
      { label: "Espresso",      emoji: "⚡", her: "mh3 gl1", him: "bb3 gl1" },
      { label: "Mocha",         emoji: "🍩", her: "bb3 mg1", him: "fd3 bb1" },
      { label: "Earl Grey tea", emoji: "🫖", her: "bi3 bb1", him: "bi3 mg1" },
      { label: "Chamomile tea", emoji: "🌼", her: "mg3 bi1", him: "mg3 bi1" },
      { label: "Hot apple cider", emoji: "🍎", her: "js3 bi1", him: "js3 mh1" },
      { label: "Hot toddy",     emoji: "🥃", her: "mh1 js1", him: "rf3 mg1" },
      { label: "Vanilla latte", emoji: "🥛", her: "fd3 rf1", him: "mh1 rf1" },
      { label: "Matcha latte",  emoji: "🍵", her: "fd1 rf1", him: "rf1 mh1" }
    ]
  },
  {
    id: "colddrink", emoji: "🧋", a: "a cold drink", what: "cold drink",
    options: [
      { label: "Iced chai latte", emoji: "🧊", her: "bi3 bb1", him: "mh3 bb1" },
      { label: "Lemonade",        emoji: "🍋", her: "rf3 fd1", him: "fd3 rf1" },
      { label: "Iced coffee",     emoji: "🥤", her: "mh3 gl1", him: "gl3 mh1" },
      { label: "Bubble tea",      emoji: "🧋", her: "fd3 js1", him: "js3 fd1" },
      { label: "Iced vanilla latte", emoji: "🥛", her: "fd3 rf1", him: "rf3 mh1" },
      { label: "Sweet iced tea",  emoji: "🍹", her: "mg3 bi1", him: "bi3 mg1" },
      { label: "Sparkling water", emoji: "🫧", her: "gl3 mh1", him: "rf3 gl1" },
      { label: "Cherry soda",     emoji: "🍒", her: "js3 rf1", him: "bb3 js1" },
      { label: "Strawberry milk", emoji: "🍓", her: "bb3 rf1", him: "js1 fd1" },
      { label: "Root beer float", emoji: "🍦", her: "mg1 js1", him: "mg3 fd1" },
      { label: "Iced green tea",  emoji: "🍃", her: "bi1 gl1", him: "bi1 mh1" }
    ]
  },
  {
    id: "transport", emoji: "🚂", a: "a form of transportation", what: "form of transportation",
    options: [
      { label: "Car",                 emoji: "🚗", her: "mg1 fd1", him: "mg3 bi1" },
      { label: "Bus",                 emoji: "🚌", her: "gl1 bi1", him: "mh1 gl1" },
      { label: "Train",               emoji: "🚂", her: "bi3 mg1", him: "bi3 gl1" },
      { label: "Plane",               emoji: "✈️", her: "fd1 rf1", him: "rf1 fd1" },
      { label: "Bicycle",             emoji: "🚲", her: "mg3 mh1", him: "mh3 fd1" },
      { label: "Van",                 emoji: "🚐", her: "fd3 mg1", him: "fd3 mh1" },
      { label: "Hot air balloon",     emoji: "🎈", her: "rf3 js1", him: "rf1 js1" },
      { label: "Horse-drawn carriage", emoji: "🐴", her: "bb3 bi1", him: "bb3 bi1" },
      { label: "Sailboat",            emoji: "⛵", her: "rf1 mh1", him: "rf3 mg1" },
      { label: "Subway",              emoji: "🚇", her: "gl3 bi1", him: "gl3 mg1" },
      { label: "Sleigh",              emoji: "🛷", her: "js3 bb1", him: "js3 bb1" },
      { label: "Walking",             emoji: "🚶", her: "mh3 bb1", him: "mg1 mh1" }
    ]
  },
  {
    id: "subject", emoji: "📚", a: "a school subject", what: "school subject",
    options: [
      { label: "Math",               emoji: "➗", her: "bi3 mh1", him: "mh3 bi1" },
      { label: "History",            emoji: "🏛️", her: "mg1 bi1", him: "mg3 bb1" },
      { label: "Science",            emoji: "🔬", her: "fd1 gl1", him: "js3 gl1" },
      { label: "English literature", emoji: "📖", her: "bb3 bi1", him: "bb3 mh1" },
      { label: "Art",                emoji: "🎨", her: "rf3 js1", him: "js1 rf1" },
      { label: "Music",              emoji: "🎵", her: "rf1 mg1", him: "bi3 rf1" },
      { label: "P.E.",               emoji: "🏃", her: "fd1 gl1", him: "fd3 rf1" },
      { label: "Geography",          emoji: "🗺️", her: "fd3 rf1", him: "fd1 rf1" },
      { label: "Drama",              emoji: "🎭", her: "js1 rf1", him: "rf3 js1" },
      { label: "Psychology",         emoji: "🧠", her: "mg3 gl1", him: "mg1 gl1" },
      { label: "Home economics",     emoji: "🧵", her: "js3 mg1", him: "bi1 fd1" },
      { label: "Philosophy",         emoji: "💭", her: "mh3 bb1", him: "mh1 mg1" },
      { label: "Biology",            emoji: "🧬", her: "gl3 mg1", him: "js1 gl1" },
      { label: "Civics",             emoji: "⚖️", her: "gl1 mh1", him: "gl3 bi1" }
    ]
  },
  {
    id: "computer", emoji: "💻", a: "a type of computer", what: "type of computer",
    options: [
      { label: "Smartphone",             emoji: "📱", her: "fd3 rf1", him: "fd3 rf1" },
      { label: "Flip phone",             emoji: "📞", her: "mg3 bi1", him: "bi3 mg1" },
      { label: "Laptop",                 emoji: "💻", her: "gl3 fd1", him: "gl3 fd1" },
      { label: "Desktop computer",       emoji: "🖥️", her: "bi1 gl1", him: "mg3 bi1" },
      { label: "Retro computer terminal", emoji: "🕹️", her: "bi3 mh1", him: "mh3 bi1" },
      { label: "iPad or tablet",         emoji: "📲", her: "rf3 bb1", him: "js1 rf1" },
      { label: "E-reader",               emoji: "📕", her: "bb3 bi1", him: "bb3 mh1" },
      { label: "Smartwatch",             emoji: "⌚", her: "fd1 gl1", him: "rf1 gl1" },
      { label: "Handheld game console",  emoji: "🎮", her: "js3 rf1", him: "rf3 fd1" },
      { label: "Raspberry Pi",           emoji: "🥧", her: "mh3 js1", him: "js3 mh1" }
    ]
  },
  {
    id: "screen", emoji: "🎬", a: "a movie or TV show", what: "movie or TV show",
    options: [
      { label: "Severance",                          emoji: "🏢", her: "bi2 mh2 mg2", him: "bi2 mh2 mg2" },
      { label: "Scooby-Doo",                         emoji: "🐶", her: "fd3 rf1",     him: "fd3 mh1" },
      { label: "Gotham",                             emoji: "🦇", her: "gl3 fd1",     him: "gl3 fd1" },
      { label: "Beauty and the Beast",               emoji: "🌹", her: "bb3 rf1",     him: "bb3 mg1" },
      { label: "Tangled",                            emoji: "🏮", her: "rf3 bb1",     him: "rf3 fd1" },
      { label: "The Nightmare Before Christmas",     emoji: "🎃", her: "js3 bb1",     him: "js3 mh1" },
      { label: "Eternal Sunshine of the Spotless Mind", emoji: "🌅", her: "mg3 mh1",  him: "mg3 gl1" },
      { label: "The Matrix",                         emoji: "💊", her: "mh3 gl1",     him: "mh3 js1" },
      { label: "Casablanca",                         emoji: "🎞️", her: "bi3 gl1",     him: "bi3 gl1" },
      { label: "Howl's Moving Castle",               emoji: "🏰", her: "bb1 rf1 js1", him: "js1 rf1 bb1" },
      { label: "Pride & Prejudice",                  emoji: "💌", her: "bb1 bi1 gl1", him: "bi1 bb1 gl1" }
    ]
  },
  {
    id: "utensil", emoji: "✒️", a: "a writing utensil", what: "writing utensil",
    options: [
      { label: "Fountain pen",  emoji: "🖋️", her: "bi3 bb1", him: "bi3 bb1" },
      { label: "Feather quill", emoji: "🪶", her: "bb3 bi1", him: "bb3 bi1" },
      { label: "Pencil",        emoji: "✏️", her: "mg3 bi1", him: "mh3 bi1" },
      { label: "Highlighter",   emoji: "🖍️", her: "fd3 rf1", him: "fd1 mh1" },
      { label: "Ballpoint pen", emoji: "🖊️", her: "gl3 mh1", him: "gl3 mg1" },
      { label: "Marker",        emoji: "🖊️", her: "mh3 fd1", him: "fd3 gl1" },
      { label: "Paintbrush",    emoji: "🖌️", her: "rf3 js1", him: "js1 rf1" },
      { label: "Charcoal",      emoji: "🖤", her: "js3 mh1", him: "js3 gl1" },
      { label: "Gel pen",       emoji: "🌈", her: "rf1 fd1", him: "rf3 mh1" },
      { label: "Crayon",        emoji: "🧡", her: "rf1 mg1", him: "fd1 mh1" },
      { label: "Chalk",         emoji: "🧑‍🏫", her: "mg1 js1", him: "mg3 mh1" }
    ]
  },
  {
    id: "time", emoji: "🌅", a: "a time of day", what: "time of day",
    options: [
      { label: "Sunrise",   emoji: "🌅", her: "rf3 mg1", him: "mh3 rf1" },
      { label: "Morning",   emoji: "☕", her: "bi3 mh1", him: "bi3 fd1" },
      { label: "Midday",    emoji: "🌞", her: "mh3 fd1", him: "fd3 mh1" },
      { label: "Afternoon", emoji: "🧺", her: "fd3 rf1", him: "gl3 bi1" },
      { label: "Evening",   emoji: "🕯️", her: "mg3 bb1", him: "bb3 bi1" },
      { label: "Sunset",    emoji: "🌇", her: "bb3 rf1", him: "rf3 bb1" },
      { label: "Night",     emoji: "🌙", her: "gl3 mh1", him: "mg3 gl1" },
      { label: "Midnight",  emoji: "🦉", her: "js3 gl1", him: "js3 mg1" }
    ]
  },
  {
    id: "landscape", emoji: "🏞️", a: "a landscape", what: "landscape", wide: true,
    options: [
      { label: "Sunrise over a quiet coastal beach",    emoji: "🏖️", her: "mg3 rf1", him: "rf3 mg1" },
      { label: "Sunset on a forest path in the mountains", emoji: "🌲", her: "mh3 fd1", him: "mg3 mh1" },
      { label: "A snowy mountain cabin at dusk",        emoji: "🏔️", her: "bb3 mg1", him: "bb3 gl1" },
      { label: "A lantern-lit lake at night",           emoji: "🏮", her: "rf3 bb1", him: "bi3 rf1" },
      { label: "A misty autumn forest at dawn",         emoji: "🍁", her: "bi3 js1", him: "mh3 bi1" },
      { label: "A moonlit pumpkin patch on a hill",     emoji: "🎃", her: "js3 bi1", him: "js3 mh1" },
      { label: "A rainy city skyline at night",         emoji: "🌃", her: "gl3 mh1", him: "gl3 js1" },
      { label: "A sunny wildflower meadow at midday",   emoji: "🌼", her: "fd3 rf1", him: "fd3 mh1" },
      { label: "Green countryside and a cozy village in the morning", emoji: "🏡", her: "bb1 bi1 fd1", him: "bi1 bb1 gl1" }
    ]
  }
];
