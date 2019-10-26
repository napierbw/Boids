// Flocking
// Daniel Shiffman
// https://thecodingtrain.com

// https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html
// https://youtu.be/mhjuuHl6qHM
// https://editor.p5js.org/codingtrain/sketches/ry4XZ8OkN

const flock = [];

let alignSlider, cohesionSlider, separationSlider, perceptionSlider;

function setup() {
  createCanvas(640, 360);

  // alignSlider = document.querySelector("#BSAlignment");


  alignSlider = createSlider(0, 2, 1, 0.1);
  alignSlider.position(660, 105);
  cohesionSlider = createSlider(0, 2, 1, 0.1);
  cohesionSlider.position(660, 225);
  separationSlider = createSlider(0, 2, 1, 0.1);
  separationSlider.position(660, 345);
  //perceptionSlider = createSlider(0, 2, 100, 0.1);
  //perceptionSlider.position(660, 10);
  for (let i = 0; i < 200; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  background(51);
  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }
}
