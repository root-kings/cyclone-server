var opts = {
    angle: 0.15, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF', // Colors
    colorStop: '#8FC0DA', // just experiment with them
    strokeColor: '#E0E0E0', // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support

};

var opts1 = {
    angle: 0.15, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF', // Colors
    colorStop: '#8FC0DA', // just experiment with them
    strokeColor: '#E0E0E0', // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support

};


var opts2 = {
    angle: 0.15, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF', // Colors
    colorStop: '#8FC0DA', // just experiment with them
    strokeColor: '#E0E0E0', // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support

};


var opts3 = {
    angle: 0.15, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF', // Colors
    colorStop: '#8FC0DA', // just experiment with them
    strokeColor: '#E0E0E0', // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support

};


var opts4 = {
    angle: 0.15, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF', // Colors
    colorStop: '#8FC0DA', // just experiment with them
    strokeColor: '#E0E0E0', // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support

};


var target = document.getElementById('foo0'); // your canvas element
var gauge0 = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge0.maxValue = 20; // set max gauge value
gauge0.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge0.animationSpeed = 32; // set animation speed (32 is default value)
gauge0.set(5); // set actual value


var target1 = document.getElementById('foo1'); // your canvas element
var gauge1 = new Gauge(target1).setOptions(opts1); // create sexy gauge!
gauge1.maxValue = 20; // set max gauge value
gauge1.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge1.animationSpeed = 32; // set animation speed (32 is default value)
gauge1.set(5); // set actual value


var target2 = document.getElementById('foo2'); // your canvas element
var gauge2 = new Gauge(target2).setOptions(opts2); // create sexy gauge!
gauge2.maxValue = 20; // set max gauge value
gauge2.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge2.animationSpeed = 32; // set animation speed (32 is default value)
gauge2.set(5); // set actual value


var target3 = document.getElementById('foo3'); // your canvas element
var gauge3 = new Gauge(target3).setOptions(opts3); // create sexy gauge!
gauge3.maxValue = 20; // set max gauge value
gauge3.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge3.animationSpeed = 32; // set animation speed (32 is default value)
gauge3.set(5); // set actual value


var target4 = document.getElementById('foo4'); // your canvas element
var gauge4 = new Gauge(target4).setOptions(opts4); // create sexy gauge!
gauge4.maxValue = 20; // set max gauge value
gauge4.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge4.animationSpeed = 32; // set animation speed (32 is default value)
gauge4.set(5); // set actual value


function setGuage(speeds) {
    gauge0.set(speeds[0]);
    gauge1.set(speeds[1]);
    gauge2.set(speeds[2]);
    gauge3.set(speeds[3]);
    gauge4.set(speeds[4]);
}