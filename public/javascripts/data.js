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
        thumbnail: "border/border-1.jpg",
        floors: {
            first: {
                floorNum: 0,
                img: "border/border-0.jpg"
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
    jammer: {name: "Mute Jammer", icon: "jammer.png"},
    emp: {name: "EMP Grenade", icon: "emp.png"},
    exothermic: {name: "Thermite Charge", icon: "exothermic.png"},
    bulletproofBarricade: {name: "Castle Barricade", icon: "castle.png"},
    clusterCharge: {name: "Fuze Charge", icon: "cluster.png"},
    entryDenial: {name: "Kapkan Device", icon: "edd.png"},
    activeDefenseSystem: {name: "ADS", icon: "trophy.png"},
    battery: {name: "Battery", icon: "battery.png"},
    electroclaw: {name: "ElectroClaw", icon: "electroclaw.png"},
    trax: {name: "Trax Stinger", icon: "trax.png"},
    pest: {name: "Pest", icon: "pest.png"},
    xKairos: {name: "Hibana Pellets", icon: "hibana.png"},
    prisma: {name: "Prisma", icon: "prisma.png"},
    capitaoF: {name: "Fire Bolt", icon: "fire_bolt.png"},
    // capitaoS: {name: "Smoke Bolt", icon: "smoke_bolt.png"},
    yokai: {name: "Yokai Drone", icon: "yokai.png"},
    grzmot: {name: "Grzmot Mine", icon: "grzmot.png"},
    welcomeMat: {name: "Frost Trap", icon: "bear_trap.png"},
    gu: {name: "Gu Mine", icon: "gu.png"},
    evilEye: {name: "Evil Eye", icon: "evil_eye.png"},
    blowtorch: {name: "Blowtorch", icon: "blowtorch.png"},
    blackMirror: {name: "Mira Window", icon: "black_mirror.png"},
    airjab: {name: "Airjab", icon: "airjab.png"},
    turret: {name: "Turret", icon: "turret.png"},
    blackEye: {name: "Black Eye", icon: "black_eye.png"},
};
const SCREEN_WIDTH = 1920;
const SCREEN_HEIGHT = 1080;