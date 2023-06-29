import React from "react";
import Sketch from "react-p5";
import Star from "./star"

var stars = [];

const BG = (props) => {

	const setup = (p5, canvasParentRef) => {

		p5.createCanvas(window.innerWidth, 2000).parent(canvasParentRef);

    for(var i = 0; i < 200; i++) stars.push(new Star());

	};

	const draw = (p5) => {
    p5.clear();
    
    for(var s in stars){
      stars[s].update(p5);
      stars[s].draw(p5);
    }

	};

	return <Sketch setup={setup} draw={draw} />;
};

export default BG;