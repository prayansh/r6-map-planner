/**
 * Global Variables and Constants
 */
const MAP_DATA = {
    BANK: {
        floors: {
            basement: {
                img: "bank/bank-0.jpg"
            },
            first: {
                img: "bank/bank-1.jpg"
            },
            second: {
                img: "bank/bank-2.jpg"
            },
            third: {
                img: "bank/bank-3.jpg"
            }
        }
    }
};
let floor = 0;
let canvases = [];
let currentCanvasCtx = false;

class MapLayer {
    constructor(floorNum, userContext, peerContext) {
        this.floorNum = floorNum;
        this.userContext = userContext;
        this.peerContext = peerContext;
    }
}