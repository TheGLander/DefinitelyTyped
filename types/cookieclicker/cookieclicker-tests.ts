// Building with base art
new Game.Object(
    'Example building',
    'Example building|Example buildings|exampled|[X] more example|[X] more examples',
    'Hi',
    5,
    7,
    { base: 'artBase' },
    12345,
    () => 123,
    () => {},
);

// Building with baseless art
new Game.Object(
    'Example building',
    'Example building|Example buildings|exampled|[X] more example|[X] more examples',
    'Hi',
    5,
    7,
    { bg: 'artBackground', pic: 'artPicture' },
    12345,
    () => 123,
    () => {},
);

// Building with semi-implemented art (error)
new Game.Object(
    'Example building',
    'Example building|Example buildings|exampled|[X] more example|[X] more examples',
    'Hi',
    5,
    7,
    // $ExpectError
    { bg: 'artBackground' },
    12345,
    () => 123,
    () => {},
);

new Game.Upgrade('Example upgrade', 'Does <b>nothing</b>.', 456, [1, 2]);
// Custom icon source
new Game.Upgrade('Example upgrade', 'Does <b>nothing</b>.', 456, [1, 2, 'https://example.com/icons.png']);

// Invalid tier type
// $ExpectError
Game.SynergyUpgrade('Example synergy', 'Example', 'Cursor', 'Grandma', { hello: 'there' });

Game.GrandmaSynergy('Example grandmas', 'A nice example', 'Example building');

// Loader

// Loads asset "Hi"
Game.Loader.Load(['Hi']);

// Loads assets "H" and "i", unintended
// $ExpectError
Game.Loader.Load('Hi');

// Some achievements

Game.BankAchievement('Example bank');

Game.CpsAchievement('Example Cps');

// Minigames

const GardenMG = Game.Objects.Farm.minigame;

GardenMG.getCost(GardenMG.plantsById[3]);

GardenMG.canPlant(GardenMG.plants.queenbeet);

const PantheonMG = Game.Objects.Temple.minigame;

PantheonMG.godTooltip(3);

// $ExpectError
PantheonMG.slotGod(PantheonMG.godsById[2], 3);

const GrimoireMG = Game.Objects['Wizard tower'].minigame;

GrimoireMG.castSpell(GrimoireMG.spellsById[7], { cost: 123 });

// $ExpectError
GrimoireMG.getFailChance('conjure baked goods');

const StocksMG = Game.Objects.Bank.minigame;

StocksMG.buyGood(9, 36);

// $ExpectError
StocksMG.tradeTooltip(StocksMG.goodsById[13], 46);

// Mod api

Game.registerMod('example', { init: () => {} });

Game.registerHook('ticker', () => ['hi']);
<<<<<<< HEAD

Game.WriteSave();

Game.LoadSave();
=======
>>>>>>> 18030ba3bed0bb357fae98b7ffc39f146cb3f307
