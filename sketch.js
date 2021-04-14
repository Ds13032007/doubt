const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;


function preload(){
    backgroundImg = loadImage("BG.jpg")
}

function setup(){
    var canvas = createCanvas(3000,7500);
    engine = Engine.create();
    world = engine.world;

   

}