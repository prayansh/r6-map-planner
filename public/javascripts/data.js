/**
 * Global Variables and Constants
 */
const MAP_DATA = {
    BANK: {
        thumbnail: "bank/bank-0.jpg",
        floors: {
            basement: {
                floorNum: 0,
                img: "bank/bank-0.jpg"
            },
            first: {
                floorNum: 1,
                img: "bank/bank-1.jpg"
            },
            second: {
                floorNum: 2,
                img: "bank/bank-2.jpg"
            },
            third: {
                floorNum: 3,
                img: "bank/bank-3.jpg"
            }
        }
    },
    CHALET: {
        thumbnail: "chalet/chalet-0.jpg",
        floors: {
            basement: {
                floorNum: 0,
                img: "chalet/chalet-0.jpg"
            },
            first: {
                floorNum: 1,
                img: "chalet/chalet-1.jpg"
            },
            second: {
                floorNum: 2,
                img: "chalet/chalet-2.jpg"
            },
            third: {
                floorNum: 3,
                img: "chalet/chalet-3.jpg"
            }
        }
    },
    BORDER: {
        thumbnail: "border/border-3.jpg",
        floors: {
            first: {
                floorNum: 0,
                img: "border/border-3.jpg"
            },
            second: {
                floorNum: 1,
                img: "border/border-1.jpg"
            },
            third: {
                floorNum: 2,
                img: "border/border-2.jpg"
            }
        }
    },
    CLUBHOUSE: {
        thumbnail: "clubhouse/clubhouse-0.jpg",
        floors: {
            basement: {
                floorNum: 0,
                img: "clubhouse/clubhouse-0.jpg"
            },
            first: {
                floorNum: 1,
                img: "clubhouse/clubhouse-1.jpg"
            },
            second: {
                floorNum: 2,
                img: "clubhouse/clubhouse-2.jpg"
            },
            third: {
                floorNum: 3,
                img: "clubhouse/clubhouse-3.jpg"
            }
        }
    }
};
const OP_LIST = [
    'alibi',
    'ash',
    'bandit',
    'blackbeard',
    'blitz',
    'buck',
    'capitao',
    'castle',
    'caveira',
    'clash',
    'doc',
    'dokkaebi',
    'echo',
    'ela',
    'finka',
    'frost',
    'fuze',
    'glaz',
    'gridlock',
    'hibana',
    'iq',
    'jackal',
    'jager',
    'kaid',
    'kapkan',
    'lesion',
    'lion',
    'maestro',
    'maverick',
    'mira',
    'montagne',
    'mozzie',
    'mute',
    'nomad',
    'pulse',
    'recruit-blue',
    'recruit-green',
    'recruit-orange',
    'recruit-red',
    'recruit-yellow',
    'rook',
    'sledge',
    'smoke',
    'tachanka',
    'thatcher',
    'thermite',
    'twitch',
    'valkyrie',
    'vigil',
    'ying',
    'zofia'
];
const GADGET_DATA = {
    breach: {name: "Breach Charge"},
    claymore: {name: "Claymore"},
    smoke: {name: "Smoke Grenade"},
    frag: {name: "Frag Grenade"},
    flashbang: {name: "FlashBang"},
    drone: {name: "Drone"},
    impact: {name: "Impact Grenade"},
    deployable: {name: "Deployable"},
    bulletCam: {name: "Bulletproof Camera"},
    c4: {name: "Nitro Cell (C4)"},
    cam: {name: "Default Camera"},
    barbed: {name: "Barbed Wire"},
    barricade: {name: "Barricade"},
    reinforcement: {name: "Reinforcement"},
    mute: {name: "Mute Jammer"},
    thermite: {name: "Thermite Charge"},
    castle: {name: "Castle Barricade"},
    fuze: {name: "Fuze Charge"},
    kapkan: {name: "Kapkan Device"},
    jager: {name: "ADS"},
    bandit: {name: "Battery"},
    kaid: {name: "ElectroClaw"},
    gridlock: {name: "Trax Stinger"},
    mozzie: {name: "Pest"},
    hibana: {name: "Hibana Pellets"},
    alibi: {name: "Prisma"},
    capitaoF: {name: "Fire Bolt"},
    capitaoS: {name: "Smoke Bolt"},
    echo: {name: "Echo Drone"},
    ela: {name: "Grzmot Mine"},
    frost: {name: "Frost Trap"},
    lesion: {name: "Gu"},
    maestro: {name: "Evil Eye"},
    maverick: {name: "Blowtorch"},
    mira: {name: "Mira Window"},
    nomad: {name: "Airjab"},
    tachanka: {name: "Turret"},
    valkyrie: {name: "Black Eye"},
};
const SCREEN_WIDTH = 1920;
const SCREEN_HEIGHT = 1080;