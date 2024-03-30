import p5 from 'p5';

// Define your sketch using instance mode
var sketch = function(p) {
    // Setup function
    p.setup = function() {
        // Canvas setup
        p.createCanvas(20, 20).id('p5Canvas');;
    };

    // Draw function
    p.draw = function() {
        // Clear the background
        p.background(220);

        // Your drawing code here
        // ...

        // Example: Draw a circle
        p.ellipse(p.width / 2, p.height / 2, 100, 100);
    };
};

export default new p5(sketch);