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
    breach: {name: "Breach Charge", icon: "breach.png"},
    claymore: {name: "Claymore", icon: "claymore.png"},
    smoke: {name: "Smoke Grenade", icon: "smoke.png"},
    frag: {name: "Frag Grenade", icon: "frag.png"},
    flashbang: {name: "FlashBang", icon: "stun.png"},
    drone: {name: "Drone", icon: "drone.png"},
    impact: {name: "Impact Grenade", icon: "impact.png"},
    deployable: {name: "Deployable", icon: "deployable_shield.png"},
    bulletCam: {name: "Bulletproof Camera", icon: "bulletproof_cam.png"},
    c4: {name: "Nitro Cell (C4)", icon: "c4.png"},
    // cam: {name: "Default Camera", icon: "cam.png"},
    barbed: {name: "Barbed Wire", icon: "barbed.png"},
    barricade: {name: "Barricade", icon: "barricade.png"},
    reinforcement: {name: "Reinforcement", icon: "reinforcement.png"},
    hole: {name: "Hole", icon: "hole.png"},
    mute: {name: "Mute Jammer", icon: "jammer.png"},
    thatcher: {name: "EMP Grenade", icon: "emp.png"},
    thermite: {name: "Thermite Charge", icon: "exothermic.png"},
    castle: {name: "Castle Barricade", icon: "castle.png"},
    fuze: {name: "Fuze Charge", icon: "cluster.png"},
    kapkan: {name: "Kapkan Device", icon: "edd.png"},
    jager: {name: "ADS", icon: "trophy.png"},
    bandit: {name: "Battery", icon: "battery.png"},
    kaid: {name: "ElectroClaw", icon: "electroclaw.png"},
    gridlock: {name: "Trax Stinger", icon: "trax.png"},
    mozzie: {name: "Pest", icon: "pest.png"},
    hibana: {name: "Hibana Pellets", icon: "hibana.png"},
    alibi: {name: "Prisma", icon: "prisma.png"},
    capitaoF: {name: "Fire Bolt", icon: "fire_bolt.png"},
    // capitaoS: {name: "Smoke Bolt", icon: "smoke_bolt.png"},
    echo: {name: "Yokai Drone", icon: "yokai.png"},
    ela: {name: "Grzmot Mine", icon: "grzmot.png"},
    frost: {name: "Frost Trap", icon: "bear_trap.png"},
    lesion: {name: "Gu Mine", icon: "gu.png"},
    maestro: {name: "Evil Eye", icon: "evil_eye.png"},
    maverick: {name: "Blowtorch", icon: "blowtorch.png"},
    mira: {name: "Mira Window", icon: "black_mirror.png"},
    nomad: {name: "Airjab", icon: "airjab.png"},
    tachanka: {name: "Turret", icon: "turret.png"},
    valkyrie: {name: "Black Eye", icon: "black_eye.png"},
};
const SCREEN_WIDTH = 1920;
const SCREEN_HEIGHT = 1080;