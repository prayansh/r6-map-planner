/** Rectangle Render **/
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

/** Text Render **/
function TextRender(fontSize, x, y, rot, text, fill) {
    this.x = x || 0;
    this.y = y || 0;
    this.rot = rot || 0;
    this.text = text || 'Hello World!';
    this.fill = fill || '#AAAAAA';
    this.fontSize = fontSize;
}

TextRender.prototype.draw = function (ctx) {
    ctx.save();
    this.width = ctx.measureText(this.text).width;
    this.height = this.fontSize;
    ctx.fillStyle = this.fill;
    ctx.rotate(this.rot);
    ctx.translate(this.x, this.y);
    ctx.textAlign = "center";
    ctx.fillText(this.text, 0, 0);
    ctx.restore();
};

// Determine if a point is inside the shape's bounds
TextRender.prototype.contains = function (mx, my) {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return (this.x <= mx) && (this.x + this.width >= mx) &&
        (this.y <= my) && (this.x + this.height >= my);
};

function PathRenderer(fill) {
    this.fill = fill;
    this.points = [];
    this.pointsNotDrawn = [];
}

PathRenderer.prototype.draw = function (ctx) {
    while (!this.pointsNotDrawn.empty()) {
        var p = this.pointsNotDrawn.shift();
        ctx.beginPath();
        ctx.strokeStyle = this.fill;
        ctx.moveTo(p.frX, p.frY);
        ctx.lineTo(p.tX, p.tY);
        ctx.stroke();
        ctx.closePath();
    }
};

PathRenderer.prototype.addPoint = function (fromX, fromY, toX, toY) {
    this.points.push({frX: fromX, frY: fromY, tX: toX, tY: toY});
    this.pointsNotDrawn.push({frX: fromX, frY: fromY, tX: toX, tY: toY});
};