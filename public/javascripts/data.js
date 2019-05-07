/**
 * Global Variables and Constants
 */
const MAP_DATA = {
    BANK: {
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
        floors: {
            first: {
                floorNum: 0,
                img: "border/border-1.jpg"
            },
            second: {
                floorNum: 1,
                img: "border/border-2.jpg"
            },
            third: {
                floorNum: 2,
                img: "border/border-3.jpg"
            }
        }
    },
    CLUBHOUSE: {
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
const SCREEN_WIDTH = 2560;
const SCREEN_HEIGHT = 1440;

let floor = 0;
let mapLayers = {};
let currentLayer = false;

// let currentCanvasCtx = false;

class MapLayer {
    constructor(floorNum, userContext, peerContext, userCanvas) {
        this.floorNum = floorNum;
        this.userContext = userContext;
        this.peerContext = peerContext;
        this.canvasState = new CanvasState(userCanvas);
    }
}