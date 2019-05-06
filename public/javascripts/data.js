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