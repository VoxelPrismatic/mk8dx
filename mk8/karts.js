const V = 'mk8u';
const chars = {
    "Mario":            [6, 2, 6, 2, 2, 6, 6, 6, 6, 4, 4, 4, 4],
    "Luigi":            [6, 2, 6, 2, 2, 6, 6, 6, 6, 4, 4, 4, 4],
    "Peach":            [4, 3, 4, 3, 3, 4, 4, 4, 4, 6, 6, 6, 6],
    "Daisy":            [4, 3, 4, 3, 3, 4, 4, 4, 4, 6, 6, 6, 6],
    "Rosalina":         [8, 1, 8, 1, 1, 8, 8, 8, 8, 2, 2, 2, 2],
    "TanookiMario":     [5, 3, 6, 2, 3, 6, 6, 6, 6, 4, 4, 4, 4],
    "CatPeach":         [3, 4, 3, 3, 4, 4, 4, 4, 4, 6, 6, 6, 6],
    "Yoshi":            [4, 3, 4, 3, 3, 4, 4, 4, 4, 6, 6, 6, 6],
    "Toad":             [2, 4, 2, 4, 4, 2, 2, 2, 2, 8, 8, 8, 8],
    "Koopa":            [2, 4, 2, 4, 4, 2, 2, 2, 2, 8, 8, 8, 8],
    "ShyGuy":           [2, 4, 2, 4, 4, 2, 2, 2, 2, 8, 8, 8, 8],
    "Lakitu":           [2, 4, 2, 4, 4, 2, 2, 2, 2, 8, 8, 8, 8],
    "Toadette":         [2, 4, 2, 4, 4, 2, 2, 2, 2, 8, 8, 8, 8],
    "BabyMario":        [0, 5, 0, 5, 5, 0, 0, 0, 0, 10, 10, 10, 10],
    "BabyLuigi":        [0, 5, 0, 5, 5, 0, 0, 0, 0, 10, 10, 10, 10],
    "BabyPeach":        [0, 5, 0, 5, 5, 0, 0, 0, 0, 10, 10, 10, 10],
    "BabyDaisy":        [0, 5, 0, 5, 5, 0, 0, 0, 0, 10, 10, 10, 10],
    "BabyRosalina":     [0, 5, 0, 5, 5, 0, 0, 0, 0, 10, 10, 10, 10],
    "MetalMario":       [10, 0, 10, 0, 0, 8, 8, 8, 8, 2, 2, 2, 2],
    "GoldMario":        [10, 0, 10, 0, 0, 8, 8, 8, 8, 2, 2, 2, 2],
    "PinkGoldPeach":    [10, 0, 10, 0, 0, 8, 8, 8, 8, 2, 2, 2, 2],
    "Wario":            [10, 0, 10, 0, 0, 10, 10, 10, 10, 0, 0, 0, 0],
    "Waluigi":          [8, 1, 8, 1, 1, 8, 8, 8, 8, 2, 2, 2, 2],
    "DonkeyKong":       [8, 1, 8, 1, 1, 8, 8, 8, 8, 2, 2, 2, 2],
    "Bowser":           [10, 0, 10, 0, 0, 10, 10, 10, 10, 0, 0, 0, 0],
    "DryBowser":        [10, 0, 10, 0, 0, 10, 10, 10, 10, 0, 0, 0, 0],
    "Larry":            [2, 4, 2, 4, 4, 2, 2, 2, 2, 8, 8, 8, 8],
    "Lemmy":            [0, 5, 0, 5, 5, 0, 0, 0, 0, 10, 10, 10, 10],
    "Wendy":            [2, 4, 2, 4, 4, 2, 2, 2, 2, 8, 8, 8, 8],
    "Ludwig":           [6, 2, 6, 2, 2, 6, 6, 6, 6, 4, 4, 4, 4],
    "Iggy":             [6, 2, 6, 2, 2, 6, 6, 6, 6, 4, 4, 4, 4],
    "Morton":           [10, 0, 10, 0, 0, 10, 10, 10, 10, 0, 0, 0, 0],
    "Roy":              [8, 1, 8, 1, 1, 8, 8, 8, 8, 2, 2, 2, 2],
    "Link":             [8, 1, 8, 1, 1, 8, 8, 8, 8, 2, 2, 2, 2],
    "MaleVillager":     [5, 3, 6, 2, 3, 6, 6, 6, 6, 4, 4, 4, 4],
    "FemaleVillager":   [2, 4, 2, 4, 4, 2, 2, 2, 2, 8, 8, 8, 8],
    "Isabelle":         [3, 4, 3, 3, 4, 4, 4, 4, 4, 6, 6, 6, 6],
    "Mii":              [6, 2, 6, 2, 2, 6, 6, 6, 6, 4, 4, 4, 4]
}
const karts = {
    "StandardKart":     [2, 2, 2, 5, 3, 3, 3, 4, 2, 2, 2, 3, 1],
    "PipeFrame":        [1, 3, 1, 3, 4, 3, 4, 3, 3, 4, 4, 4, 3],
    "Mach8":            [3, 1, 3, 1, 1, 5, 4, 5, 4, 2, 2, 2, 1],
    "SteelDriver":      [4, 0, 4, 7, 0, 3, 5, 3, 2, 0, 5, 0, 0],
    "CatCruiser":       [2, 2, 2, 5, 3, 3, 3, 4, 2, 2, 2, 3, 1],
    "CircuitSpecial":   [3, 1, 3, 1, 1, 5, 4, 5, 4, 2, 2, 2, 1],
    "TriSpeeder":       [4, 0, 4, 7, 0, 3, 5, 3, 2, 0, 5, 0, 0],
    "Badwagon":         [4, 0, 4, 7, 0, 3, 5, 3, 2, 0, 5, 0, 0],
    "Prancer":          [2, 2, 2, 5, 3, 3, 3, 4, 2, 2, 2, 3, 1],
    "Biddybuggy":       [0, 7, 0, 4, 7, 0, 5, 0, 4, 4, 5, 3, 4],
    "Landship":         [0, 7, 0, 4, 7, 0, 5, 0, 4, 4, 5, 3, 4],
    "Sneeker":          [2, 2, 2, 5, 3, 3, 3, 4, 2, 2, 2, 3, 1],
    "SportsCoupe":      [3, 1, 3, 1, 1, 5, 4, 5, 4, 2, 2, 2, 1],
    "GoldStandard":     [3, 1, 3, 1, 1, 5, 4, 5, 4, 2, 2, 2, 1],
    "StandardBike":     [1, 3, 1, 3, 4, 3, 4, 3, 3, 4, 4, 4, 3],
    "Comet":            [1, 5, 1, 0, 5, 3, 3, 3, 2, 5, 5, 5, 4],
    "SportBike":        [1, 5, 1, 0, 5, 3, 3, 3, 2, 5, 5, 5, 4],
    "TheDuke":          [2, 2, 2, 5, 3, 3, 3, 4, 2, 2, 2, 3, 1],
    "FlameRider":       [1, 3, 1, 3, 4, 3, 4, 3, 3, 4, 4, 4, 3],
    "Varmint":          [1, 3, 1, 3, 4, 3, 4, 3, 3, 4, 4, 4, 3],
    "MrScooty":         [0, 7, 0, 4, 7, 0, 5, 0, 4, 4, 5, 3, 4],
    "JetBike":          [1, 5, 1, 0, 5, 3, 3, 3, 2, 5, 5, 5, 4],
    "YoshiBike":        [1, 5, 1, 0, 5, 3, 3, 3, 2, 5, 5, 5, 4],
    "StandardATV":      [4, 0, 4, 7, 0, 3, 5, 3, 2, 0, 5, 0, 0],
    "WildWiggler":      [1, 3, 1, 3, 4, 3, 4, 3, 3, 4, 4, 4, 3],
    "TeddyBuggy":       [2, 2, 2, 5, 3, 3, 3, 4, 2, 2, 2, 3, 1],
    "Benz-GLA":         [4, 0, 4, 7, 0, 3, 5, 3, 2, 0, 5, 0, 0],
    "Benz-SilverArrow": [1, 3, 1, 3, 4, 3, 4, 3, 3, 4, 4, 4, 3],
    "Benz-Roadster":    [2, 2, 2, 5, 3, 3, 3, 4, 2, 2, 2, 3, 1],
    "BlueFalcon":       [1, 3, 1, 3, 3, 4, 3, 5, 3, 2, 2, 3, 1],
    "Tanooki":          [3, 1, 4, 6, 1, 3, 5, 3, 3, 1, 5, 1, 4],
    "BDasher":          [3, 1, 3, 1, 1, 5, 4, 5, 4, 2, 2, 2, 1],
    "MasterCycle":      [2, 2, 1, 2, 3, 4, 5, 3, 4, 4, 4, 5, 4],
    "Streetle":         [1, 3, 1, 3, 3, 4, 3, 5, 3, 2, 2, 3, 1],
    "PWing":            [3, 1, 3, 1, 1, 5, 4, 5, 4, 2, 2, 2, 1],
    "CityTripper":      [1, 3, 1, 3, 4, 3, 4, 3, 3, 4, 4, 4, 3],
    "BoneRattler":      [3, 1, 4, 6, 1, 3, 5, 3, 3, 1, 5, 1, 4]
}
const wheels = {
    "Standard":         [2, 2, 2, 4, 2, 2, 4, 2, 2, 3, 3, 3, 3],
    "Monster":          [4, 0, 4, 7, 0, 2, 2, 2, 0, 0, 0, 0, 0],
    "Roller":           [0, 6, 0, 3, 6, 0, 4, 0, 4, 4, 4, 4, 4],
    "Slim":             [2, 1, 3, 2, 1, 3, 3, 3, 3, 4, 4, 4, 4],
    "Slick":            [3, 1, 3, 0, 1, 4, 0, 4, 4, 3, 3, 3, 3],
    "Metal":            [4, 0, 4, 2, 0, 3, 3, 3, 3, 3, 3, 3, 3],
    "Button":           [0, 6, 0, 3, 6, 0, 4, 0, 4, 4, 4, 4, 4],
    "OffRoad":          [2, 2, 2, 4, 2, 2, 4, 2, 2, 3, 3, 3, 3],
    "Sponge":           [1, 3, 1, 6, 3, 1, 0, 1, 3, 2, 1, 2, 3],
    "Wood":             [1, 3, 1, 6, 3, 1, 0, 1, 3, 2, 1, 2, 3],
    "Cushion":          [1, 3, 1, 6, 3, 1, 0, 1, 3, 2, 1, 2, 3],
    "BlueStandard":     [2, 2, 2, 4, 2, 2, 4, 2, 2, 3, 3, 3, 3],
    "HotMonster":       [4, 0, 4, 7, 0, 2, 2, 2, 0, 0, 0, 0, 0],
    "AzureRoller":      [0, 6, 0, 3, 6, 0, 4, 0, 4, 4, 4, 4, 4],
    "CrimsonSlim":      [2, 1, 3, 2, 1, 3, 3, 3, 3, 4, 4, 4, 4],
    "CyberSlick":       [3, 1, 3, 0, 1, 4, 0, 4, 4, 3, 3, 3, 3],
    "RetroOffRoad":     [2, 2, 2, 4, 2, 2, 4, 2, 2, 3, 3, 3, 3],
    "Gold":             [4, 0, 4, 2, 0, 3, 3, 3, 3, 3, 3, 3, 3],
    "Benz-GLA-Tires":   [2, 2, 2, 4, 2, 2, 4, 2, 2, 3, 3, 3, 3],
    "Triforce":         [2, 1, 3, 2, 1, 3, 3, 3, 3, 4, 4, 4, 4],
    "Leaf":             [0, 6, 0, 3, 6, 0, 4, 0, 4, 4, 4, 4, 4]
}
const kites = {
    "SuperGlider":      [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    "CloudGlider":      [1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    "WarioWing":        [2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    "WaddleWing":       [2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    "PeachParasol":     [2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    "Parachute":        [1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    "Parafoil":         [1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    "FlowerGlider":     [1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    "BowserKite":       [1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    "PlaneGlider":      [2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    "MKTVParafoil":     [1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    "GoldGlider":       [2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    "HylianKite":       [1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    "PaperGlider":      [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1]
}

const alts = {
    "body": [
        "StandardKart",
        "PipeFrame",
        "CircuitSpecial",
        "Biddybuggy",
        "Sneeker",
        "StandardBike",
        "SportBike",
        "StandardATV",
        "Benz-GLA",
        "CityTripper"
    ],
    "kite": [
        "SuperGlider",
        "PeachParasol"
    ]
}

function S(num) {
    return (num + 3) / 4
}
