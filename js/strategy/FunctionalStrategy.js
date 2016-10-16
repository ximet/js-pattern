var Figure = function (strategy) {
    this.strategy = strategy;
};

Figure.prototype.draw = function () {
    return this.strategy();
};

var circle = function () {
    console.log('I am a circle')
};

var lineBuzier = function () {
    console.log('I am a lineBuzier')
};

var triangle = function () {
    console.log('I am a triangle')
};

var figureCircle = new Figure(circle);
figureCircle.draw();
