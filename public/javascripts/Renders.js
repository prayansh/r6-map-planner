// ==================== Rectangle Render
function RectangleRender(x, y, w, h, fill) {
    // This is a very simple and unsafe constructor. All we're doing is checking if the values exist.
    // "x || 0" just means "if there is a value for x, use that. Otherwise use 0."
    // But we aren't checking anything else! We could put "Lalala" for the value of x
    this.x = x || 0;
    this.y = y || 0;
    this.w = w || 1;
    this.h = h || 1;
    this.fill = fill || '#AAAAAA';
}

// Draws this shape to a given context
RectangleRender.prototype.draw = function (ctx) {
    ctx.fillStyle = this.fill;
    ctx.fillRect(this.x, this.y, this.w, this.h);
};

// Determine if a point is inside the shape's bounds
RectangleRender.prototype.contains = function (mx, my) {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return (this.x <= mx) && (this.x + this.w >= mx) &&
        (this.y <= my) && (this.y + this.h >= my);
};

// Icon Render
function IconRender(x, y, w, h, img) {
    // This is a very simple and unsafe constructor. All we're doing is checking if the values exist.
    // "x || 0" just means "if there is a value for x, use that. Otherwise use 0."
    // But we aren't checking anything else! We could put "Lalala" for the value of x
    this.x = x || 0;
    this.y = y || 0;
    this.w = w || 1;
    this.h = h || 1;
    this.img = img;
}

// Draws this shape to a given context
IconRender.prototype.draw = function (ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};

// Determine if a point is inside the shape's bounds
IconRender.prototype.contains = function (mx, my) {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return (this.x <= mx) && (this.x + this.w >= mx) &&
        (this.y <= my) && (this.y + this.h >= my);
};

IconRender.prototype.stroke = function (ctx, strokeStyle, strokeWidth) {
    ctx.save();
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = strokeWidth;
    ctx.strokeRect(this.x, this.y, this.w, this.h);
    // ctx.strokeRect(20, 20, 150, 100);
    ctx.restore();
};

IconRender.prototype.displace = function (dx, dy) {
    this.x += dx;
    this.y += dy;
};

// ==================== Text Render
function TextRender(fontSize, x, y, rot, text, fill) {
    this.fontSize = fontSize;
    this.x = x || 0;
    this.y = y || 0;
    this.rot = rot || 0;
    this.text = text || 'Hello World!';
    this.fill = fill || '#AAAAAA';
}

TextRender.prototype.draw = function (ctx) {
    ctx.save();
    ctx.font = this.fontSize + 'px Verdana';
    this.width = ctx.measureText(this.text).width;
    this.height = this.fontSize;
    ctx.fillStyle = this.fill;
    ctx.rotate(this.rot);
    ctx.fillText(this.text, this.x, this.y);
    ctx.restore();
};

// Determine if a point is inside the shape's bounds
TextRender.prototype.contains = function (mx, my) {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return (this.x <= mx) && (this.x + this.width >= mx) &&
        (this.y - this.height <= my) && (this.y >= my);
};

TextRender.prototype.stroke = function (ctx, strokeStyle, strokeWidth) {
    ctx.save();
    ctx.font = this.fontSize + 'px Verdana';
    this.width = ctx.measureText(this.text).width;
    this.height = this.fontSize;
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = strokeWidth;
    ctx.rotate(this.rot);
    ctx.strokeText(this.text, this.x, this.y);
    ctx.restore();
    // Maybe rectangle is better TODO decide
    // ctx.save();
    // ctx.strokeStyle = strokeStyle;
    // ctx.lineWidth = strokeWidth;
    // ctx.strokeRect(this.x, this.y, this.width, this.height);
    // ctx.restore();
};

TextRender.prototype.displace = function (dx, dy) {
    this.x += dx;
    this.y += dy;
};

// ==================== Pen Render
function PathRender(lastX, lastY, fill) {
    this.fill = fill;
    this.lastX = lastX;
    this.lastY = lastY;
    this.minX = lastX;
    this.minY = lastY;
    this.maxX = lastX;
    this.maxY = lastY;
    this.points = [];
    this.pointsNotDrawn = [];
}

PathRender.prototype.draw = function (ctx) {
    while (this.pointsNotDrawn.length !== 0) {
        var p = this.pointsNotDrawn.shift();
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.fill;
        ctx.moveTo(p.frX, p.frY);
        ctx.lineTo(p.tX, p.tY);
        ctx.stroke();
        ctx.closePath();
    }
};

PathRender.prototype.addPoint = function (toX, toY) {
    var p = {frX: this.lastX, frY: this.lastY, tX: toX, tY: toY};
    this.minX = Math.min(this.minX, toX);
    this.maxX = Math.max(this.maxX, toX);
    this.minY = Math.min(this.minY, toY);
    this.maxY = Math.max(this.maxY, toY);
    this.lastX = toX;
    this.lastY = toY;
    this.points.push(p);
    this.pointsNotDrawn.push(p);
};

PathRender.prototype.displace = function (dx, dy) {
    var maxX = -Infinity;
    var minX = Infinity;
    var maxY = -Infinity;
    var minY = Infinity;
    this.points.forEach(function (p) {
        p.frX += dx;
        p.tX += dx;
        p.frY += dy;
        p.tY += dy;
        minX = Math.min(minX, p.tX);
        maxX = Math.max(maxX, p.tX);
        minY = Math.min(minY, p.tY);
        maxY = Math.max(maxY, p.tY);
    });
    this.minX = minX;
    this.maxX = maxX;
    this.minY = minY;
    this.maxY = maxY;
};

PathRender.prototype.invalidate = function () {
    this.pointsNotDrawn.length = 0;
    var pointsNotDrawn = this.pointsNotDrawn; // for closure
    this.points.forEach(function (p) {
        pointsNotDrawn.push(p);
    });
};

PathRender.prototype.contains = function (mx, my) {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return (this.minX <= mx) && (this.maxX >= mx) &&
        (this.minY <= my) && (this.maxY >= my);
};

PathRender.prototype.stroke = function (ctx, strokeStyle, strokeWidth) {
    ctx.save();
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = strokeWidth;
    ctx.strokeRect(this.minX, this.minY, this.maxX - this.minX, this.maxY - this.minY);
    ctx.restore();
};


// ==================== Canvas State
class CanvasState {
    constructor(canvas) {
        this.pathList = [];
        this.iconList = [];
        this.textList = [];
        this.valid = true; // when set to false, redraw everything
        this.dragging = false; // Keep track of when we are dragging
        this.dragStartX = 0;
        this.dragStartY = 0;
        this.selection = null;
        this.canvas = canvas;
    }

    forceDraw(ctx) {
        // draw all renders
        this.pathList.forEach(function (p) {
            p.invalidate();
            p.draw(ctx);
        });
        this.textList.forEach(function (t) {
            t.draw(ctx);
        });
        this.iconList.forEach(function (i) {
            i.draw(ctx);
        });
    };

    draw(ctx) {
        // TODO redraw
        if (!this.valid) {
            this.clear(ctx);
            this.forceDraw(ctx);

            // draw selection
            // right now this is just a stroke along the edge of the selected Shape
            if (this.selection != null) {
                var selectionColor = '#CC0000';
                var selectionWidth = 2;
                this.selection.stroke(ctx, selectionColor, selectionWidth);
            }

            // ** Add stuff you want drawn on top all the time here **
            this.valid = true;
        }
    };

    clear(ctx) {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    invalidate() {
        this.valid = false;
    };

    addPath(path) {
        this.pathList.push(path);
    };

    addIcon(icon) {
        this.iconList.push(icon);
    };

    addShape(shape) {
        this.iconList.push(shape);
    };

    addText(text) {
        this.textList.push(text);
    };

    deselect() {
        this.selection = null;
        this.valid = false; // Need to clear the old selection border
    };

    remove(obj) {
        var list;
        if (obj instanceof PathRender) {
            list = this.pathList;
        } else if (obj instanceof TextRender) {
            list = this.textList;
        } else if (obj instanceof IconRender) {
            list = this.iconList;
        }
        for (var i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                list.splice(i, 1);
                break;
            }
        }
    };
}