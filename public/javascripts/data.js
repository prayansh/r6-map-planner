/**
 * Global Variables and Constants
 */
const SCREEN_WIDTH = 1920;
const SCREEN_HEIGHT = 1080;

const DATA = {
  "R6": {
    "MAPS": {
      "BANK": {
        "thumbnail": "r6/map/bank/bank-0.jpg",
        "floors": [
          {
            "floorNum": 0,
            "img": "r6/map/bank/bank-0.jpg"
          },
          {
            "floorNum": 1,
            "img": "r6/map/bank/bank-1.jpg"
          },
          {
            "floorNum": 2,
            "img": "r6/map/bank/bank-2.jpg"
          },
          {
            "floorNum": 3,
            "img": "r6/map/bank/bank-3.jpg"
          }
        ]
      },
      "BORDER": {
        "thumbnail": "r6/map/border/border-0.jpg",
        "floors": [
          {
            "floorNum": 0,
            "img": "r6/map/border/border-0.jpg"
          },
          {
            "floorNum": 1,
            "img": "r6/map/border/border-1.jpg"
          },
          {
            "floorNum": 2,
            "img": "r6/map/border/border-2.jpg"
          }
        ]
      },
      "CHALET": {
        "thumbnail": "r6/map/chalet/chalet-0.jpg",
        "floors": [
          {
            "floorNum": 0,
            "img": "r6/map/chalet/chalet-0.jpg"
          },
          {
            "floorNum": 1,
            "img": "r6/map/chalet/chalet-1.jpg"
          },
          {
            "floorNum": 2,
            "img": "r6/map/chalet/chalet-2.jpg"
          },
          {
            "floorNum": 3,
            "img": "r6/map/chalet/chalet-3.jpg"
          }
        ]
      },
      "CLUBHOUSE": {
        "thumbnail": "r6/map/clubhouse/clubhouse-0.jpg",
        "floors": [
          {
            "floorNum": 0,
            "img": "r6/map/clubhouse/clubhouse-0.jpg"
          },
          {
            "floorNum": 1,
            "img": "r6/map/clubhouse/clubhouse-1.jpg"
          },
          {
            "floorNum": 2,
            "img": "r6/map/clubhouse/clubhouse-2.jpg"
          },
          {
            "floorNum": 3,
            "img": "r6/map/clubhouse/clubhouse-3.jpg"
          }
        ]
      }
    },
    "OPERATORS": [
      {
        "name": "alibi",
        "icon": "r6/operator/alibi.svg"
      },
      {
        "name": "ash",
        "icon": "r6/operator/ash.svg"
      },
      {
        "name": "bandit",
        "icon": "r6/operator/bandit.svg"
      },
      {
        "name": "blackbeard",
        "icon": "r6/operator/blackbeard.svg"
      },
      {
        "name": "blitz",
        "icon": "r6/operator/blitz.svg"
      },
      {
        "name": "buck",
        "icon": "r6/operator/buck.svg"
      },
      {
        "name": "capitao",
        "icon": "r6/operator/capitao.svg"
      },
      {
        "name": "castle",
        "icon": "r6/operator/castle.svg"
      },
      {
        "name": "caveira",
        "icon": "r6/operator/caveira.svg"
      },
      {
        "name": "clash",
        "icon": "r6/operator/clash.svg"
      },
      {
        "name": "doc",
        "icon": "r6/operator/doc.svg"
      },
      {
        "name": "dokkaebi",
        "icon": "r6/operator/dokkaebi.svg"
      },
      {
        "name": "echo",
        "icon": "r6/operator/echo.svg"
      },
      {
        "name": "ela",
        "icon": "r6/operator/ela.svg"
      },
      {
        "name": "finka",
        "icon": "r6/operator/finka.svg"
      },
      {
        "name": "frost",
        "icon": "r6/operator/frost.svg"
      },
      {
        "name": "fuze",
        "icon": "r6/operator/fuze.svg"
      },
      {
        "name": "glaz",
        "icon": "r6/operator/glaz.svg"
      },
      {
        "name": "gridlock",
        "icon": "r6/operator/gridlock.svg"
      },
      {
        "name": "hibana",
        "icon": "r6/operator/hibana.svg"
      },
      {
        "name": "iq",
        "icon": "r6/operator/iq.svg"
      },
      {
        "name": "jackal",
        "icon": "r6/operator/jackal.svg"
      },
      {
        "name": "jager",
        "icon": "r6/operator/jager.svg"
      },
      {
        "name": "kaid",
        "icon": "r6/operator/kaid.svg"
      },
      {
        "name": "kapkan",
        "icon": "r6/operator/kapkan.svg"
      },
      {
        "name": "lesion",
        "icon": "r6/operator/lesion.svg"
      },
      {
        "name": "lion",
        "icon": "r6/operator/lion.svg"
      },
      {
        "name": "maestro",
        "icon": "r6/operator/maestro.svg"
      },
      {
        "name": "maverick",
        "icon": "r6/operator/maverick.svg"
      },
      {
        "name": "mira",
        "icon": "r6/operator/mira.svg"
      },
      {
        "name": "montagne",
        "icon": "r6/operator/montagne.svg"
      },
      {
        "name": "mozzie",
        "icon": "r6/operator/mozzie.svg"
      },
      {
        "name": "mute",
        "icon": "r6/operator/mute.svg"
      },
      {
        "name": "nomad",
        "icon": "r6/operator/nomad.svg"
      },
      {
        "name": "pulse",
        "icon": "r6/operator/pulse.svg"
      },
      {
        "name": "recruit-blue",
        "icon": "r6/operator/recruit-blue.svg"
      },
      {
        "name": "recruit-green",
        "icon": "r6/operator/recruit-green.svg"
      },
      {
        "name": "recruit-orange",
        "icon": "r6/operator/recruit-orange.svg"
      },
      {
        "name": "recruit-red",
        "icon": "r6/operator/recruit-red.svg"
      },
      {
        "name": "recruit-yellow",
        "icon": "r6/operator/recruit-yellow.svg"
      },
      {
        "name": "rook",
        "icon": "r6/operator/rook.svg"
      },
      {
        "name": "sledge",
        "icon": "r6/operator/sledge.svg"
      },
      {
        "name": "smoke",
        "icon": "r6/operator/smoke.svg"
      },
      {
        "name": "tachanka",
        "icon": "r6/operator/tachanka.svg"
      },
      {
        "name": "thatcher",
        "icon": "r6/operator/thatcher.svg"
      },
      {
        "name": "thermite",
        "icon": "r6/operator/thermite.svg"
      },
      {
        "name": "twitch",
        "icon": "r6/operator/twitch.svg"
      },
      {
        "name": "valkyrie",
        "icon": "r6/operator/valkyrie.svg"
      },
      {
        "name": "vigil",
        "icon": "r6/operator/vigil.svg"
      },
      {
        "name": "ying",
        "icon": "r6/operator/ying.svg"
      },
      {
        "name": "zofia",
        "icon": "r6/operator/zofia.svg"
      }
    ],
    "GADGETS": [
      {
        "name": "Ash",
        "icon": "r6/gadget/Ash.png"
      },
      {
        "name": "Blackbeard",
        "icon": "r6/gadget/Blackbeard.png"
      },
      {
        "name": "Blitz",
        "icon": "r6/gadget/Blitz.png"
      },
      {
        "name": "Buck",
        "icon": "r6/gadget/Buck.png"
      },
      {
        "name": "Caveira",
        "icon": "r6/gadget/Caveira.png"
      },
      {
        "name": "Clash",
        "icon": "r6/gadget/Clash.png"
      },
      {
        "name": "Doc",
        "icon": "r6/gadget/Doc.png"
      },
      {
        "name": "Dokkaebi",
        "icon": "r6/gadget/Dokkaebi.png"
      },
      {
        "name": "Finka",
        "icon": "r6/gadget/Finka.png"
      },
      {
        "name": "Glaz",
        "icon": "r6/gadget/Glaz.png"
      },
      {
        "name": "IQ",
        "icon": "r6/gadget/IQ.png"
      },
      {
        "name": "Jackal",
        "icon": "r6/gadget/Jackal.png"
      },
      {
        "name": "Lion",
        "icon": "r6/gadget/Lion.png"
      },
      {
        "name": "Montagne",
        "icon": "r6/gadget/Montagne.png"
      },
      {
        "name": "Obj",
        "icon": "r6/gadget/Obj.png"
      },
      {
        "name": "Rappel",
        "icon": "r6/gadget/Rappel.png"
      },
      {
        "name": "Rook",
        "icon": "r6/gadget/Rook.png"
      },
      {
        "name": "Sledge",
        "icon": "r6/gadget/Sledge.png"
      },
      {
        "name": "Twitch",
        "icon": "r6/gadget/Twitch.png"
      },
      {
        "name": "Vigil",
        "icon": "r6/gadget/Vigil.png"
      },
      {
        "name": "Ying",
        "icon": "r6/gadget/Ying.png"
      },
      {
        "name": "Zofia",
        "icon": "r6/gadget/Zofia.png"
      },
      {
        "name": "airjab",
        "icon": "r6/gadget/airjab.png"
      },
      {
        "name": "barbed",
        "icon": "r6/gadget/barbed.png"
      },
      {
        "name": "barricade",
        "icon": "r6/gadget/barricade.png"
      },
      {
        "name": "battery",
        "icon": "r6/gadget/battery.png"
      },
      {
        "name": "bear_trap",
        "icon": "r6/gadget/bear_trap.png"
      },
      {
        "name": "black_eye",
        "icon": "r6/gadget/black_eye.png"
      },
      {
        "name": "black_mirror",
        "icon": "r6/gadget/black_mirror.png"
      },
      {
        "name": "blowtorch",
        "icon": "r6/gadget/blowtorch.png"
      },
      {
        "name": "breach",
        "icon": "r6/gadget/breach.png"
      },
      {
        "name": "bulletproof_cam",
        "icon": "r6/gadget/bulletproof_cam.png"
      },
      {
        "name": "c4",
        "icon": "r6/gadget/c4.png"
      },
      {
        "name": "castle",
        "icon": "r6/gadget/castle.png"
      },
      {
        "name": "claymore",
        "icon": "r6/gadget/claymore.png"
      },
      {
        "name": "cluster",
        "icon": "r6/gadget/cluster.png"
      },
      {
        "name": "deployable_shield",
        "icon": "r6/gadget/deployable_shield.png"
      },
      {
        "name": "drone",
        "icon": "r6/gadget/drone.png"
      },
      {
        "name": "edd",
        "icon": "r6/gadget/edd.png"
      },
      {
        "name": "electroclaw",
        "icon": "r6/gadget/electroclaw.png"
      },
      {
        "name": "emp",
        "icon": "r6/gadget/emp.png"
      },
      {
        "name": "evil_eye",
        "icon": "r6/gadget/evil_eye.png"
      },
      {
        "name": "exothermic",
        "icon": "r6/gadget/exothermic.png"
      },
      {
        "name": "fire_bolt",
        "icon": "r6/gadget/fire_bolt.png"
      },
      {
        "name": "frag",
        "icon": "r6/gadget/frag.png"
      },
      {
        "name": "grzmot",
        "icon": "r6/gadget/grzmot.png"
      },
      {
        "name": "gu",
        "icon": "r6/gadget/gu.png"
      },
      {
        "name": "hibana",
        "icon": "r6/gadget/hibana.png"
      },
      {
        "name": "hole",
        "icon": "r6/gadget/hole.png"
      },
      {
        "name": "impact",
        "icon": "r6/gadget/impact.png"
      },
      {
        "name": "jammer",
        "icon": "r6/gadget/jammer.png"
      },
      {
        "name": "opIcons",
        "icon": "r6/gadget/opIcons.txt"
      },
      {
        "name": "pest",
        "icon": "r6/gadget/pest.png"
      },
      {
        "name": "prisma",
        "icon": "r6/gadget/prisma.png"
      },
      {
        "name": "reinforcement",
        "icon": "r6/gadget/reinforcement.png"
      },
      {
        "name": "smoke",
        "icon": "r6/gadget/smoke.png"
      },
      {
        "name": "stun",
        "icon": "r6/gadget/stun.png"
      },
      {
        "name": "toxic",
        "icon": "r6/gadget/toxic.png"
      },
      {
        "name": "trax",
        "icon": "r6/gadget/trax.png"
      },
      {
        "name": "trophy",
        "icon": "r6/gadget/trophy.png"
      },
      {
        "name": "turret",
        "icon": "r6/gadget/turret.png"
      },
      {
        "name": "yokai",
        "icon": "r6/gadget/yokai.png"
      }
    ]
  },
  "VALORANT": {
    "MAPS": {
      "ASCENT": {
        "thumbnail": "valorant/map/ascent/ascent-0.svg",
        "floors": [
          {
            "floorNum": 0,
            "img": "valorant/map/ascent/ascent-0.svg"
          },
          {
            "floorNum": 1,
            "img": "valorant/map/ascent/ascent-1.svg"
          }
        ]
      },
      "BIND": {
        "thumbnail": "valorant/map/bind/bind-0.svg",
        "floors": [
          {
            "floorNum": 0,
            "img": "valorant/map/bind/bind-0.svg"
          },
          {
            "floorNum": 1,
            "img": "valorant/map/bind/bind-1.svg"
          }
        ]
      },
      "HAVEN": {
        "thumbnail": "valorant/map/haven/haven-0.svg",
        "floors": [
          {
            "floorNum": 0,
            "img": "valorant/map/haven/haven-0.svg"
          },
          {
            "floorNum": 1,
            "img": "valorant/map/haven/haven-1.svg"
          }
        ]
      },
      "SPLIT": {
        "thumbnail": "valorant/map/split/split-0.svg",
        "floors": [
          {
            "floorNum": 0,
            "img": "valorant/map/split/split-0.svg"
          },
          {
            "floorNum": 1,
            "img": "valorant/map/split/split-1.svg"
          }
        ]
      }
    },
    "OPERATORS": [
      {
        "name": "breach",
        "icon": "valorant/operator/breach.png"
      },
      {
        "name": "brimstone",
        "icon": "valorant/operator/brimstone.png"
      },
      {
        "name": "cypher",
        "icon": "valorant/operator/cypher.png"
      },
      {
        "name": "jett",
        "icon": "valorant/operator/jett.png"
      },
      {
        "name": "omen",
        "icon": "valorant/operator/omen.png"
      },
      {
        "name": "phoenix",
        "icon": "valorant/operator/phoenix.png"
      },
      {
        "name": "raze",
        "icon": "valorant/operator/raze.png"
      },
      {
        "name": "reyna",
        "icon": "valorant/operator/reyna.png"
      },
      {
        "name": "sage",
        "icon": "valorant/operator/sage.png"
      },
      {
        "name": "sova",
        "icon": "valorant/operator/sova.png"
      },
      {
        "name": "viper",
        "icon": "valorant/operator/viper.png"
      }
    ],
    "GADGETS": [
      {
        "name": "aftershock",
        "icon": "valorant/gadget/aftershock.svg"
      },
      {
        "name": "barrier-orb",
        "icon": "valorant/gadget/barrier-orb.svg"
      },
      {
        "name": "blade-storm",
        "icon": "valorant/gadget/blade-storm.svg"
      },
      {
        "name": "blast-pack",
        "icon": "valorant/gadget/blast-pack.svg"
      },
      {
        "name": "blaze",
        "icon": "valorant/gadget/blaze.svg"
      },
      {
        "name": "boom-bot",
        "icon": "valorant/gadget/boom-bot.svg"
      },
      {
        "name": "cloudburst",
        "icon": "valorant/gadget/cloudburst.svg"
      },
      {
        "name": "curveball",
        "icon": "valorant/gadget/curveball.svg"
      },
      {
        "name": "cyber-cage",
        "icon": "valorant/gadget/cyber-cage.svg"
      },
      {
        "name": "dark-cover",
        "icon": "valorant/gadget/dark-cover.svg"
      },
      {
        "name": "fault-line",
        "icon": "valorant/gadget/fault-line.svg"
      },
      {
        "name": "flashpoint",
        "icon": "valorant/gadget/flashpoint.svg"
      },
      {
        "name": "from-the-shadows",
        "icon": "valorant/gadget/from-the-shadows.svg"
      },
      {
        "name": "healing-orb",
        "icon": "valorant/gadget/healing-orb.svg"
      },
      {
        "name": "hot-hands",
        "icon": "valorant/gadget/hot-hands.svg"
      },
      {
        "name": "hunters-fury",
        "icon": "valorant/gadget/hunters-fury.svg"
      },
      {
        "name": "incendiary",
        "icon": "valorant/gadget/incendiary.svg"
      },
      {
        "name": "neural-theft",
        "icon": "valorant/gadget/neural-theft.svg"
      },
      {
        "name": "orbital-strike",
        "icon": "valorant/gadget/orbital-strike.svg"
      },
      {
        "name": "owl-drone",
        "icon": "valorant/gadget/owl-drone.svg"
      },
      {
        "name": "paint-shells",
        "icon": "valorant/gadget/paint-shells.svg"
      },
      {
        "name": "paranoia",
        "icon": "valorant/gadget/paranoia.svg"
      },
      {
        "name": "poison-cloud",
        "icon": "valorant/gadget/poison-cloud.svg"
      },
      {
        "name": "recon-bolt",
        "icon": "valorant/gadget/recon-bolt.svg"
      },
      {
        "name": "resurrection",
        "icon": "valorant/gadget/resurrection.svg"
      },
      {
        "name": "rolling-thunder",
        "icon": "valorant/gadget/rolling-thunder.svg"
      },
      {
        "name": "run-it-back",
        "icon": "valorant/gadget/run-it-back.svg"
      },
      {
        "name": "shock-bolt",
        "icon": "valorant/gadget/shock-bolt.svg"
      },
      {
        "name": "showstopper",
        "icon": "valorant/gadget/showstopper.svg"
      },
      {
        "name": "shrouded-step",
        "icon": "valorant/gadget/shrouded-step.svg"
      },
      {
        "name": "sky-smoke",
        "icon": "valorant/gadget/sky-smoke.svg"
      },
      {
        "name": "slow-orb",
        "icon": "valorant/gadget/slow-orb.svg"
      },
      {
        "name": "snake-bite",
        "icon": "valorant/gadget/snake-bite.svg"
      },
      {
        "name": "spycam",
        "icon": "valorant/gadget/spycam.svg"
      },
      {
        "name": "stim-beacon",
        "icon": "valorant/gadget/stim-beacon.svg"
      },
      {
        "name": "tailwind",
        "icon": "valorant/gadget/tailwind.svg"
      },
      {
        "name": "toxic-screen",
        "icon": "valorant/gadget/toxic-screen.svg"
      },
      {
        "name": "trapwire",
        "icon": "valorant/gadget/trapwire.svg"
      },
      {
        "name": "updraft",
        "icon": "valorant/gadget/updraft.svg"
      },
      {
        "name": "vipers-pit",
        "icon": "valorant/gadget/vipers-pit.svg"
      }
    ]
  }
};