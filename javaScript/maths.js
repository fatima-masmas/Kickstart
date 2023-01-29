// Variables and Maths -------------

/* 1.
Calculate the volume of a cylinder given the radius and height.
Create two variables, one for the radius and one for the height of the cylinder. Then
use the formula for the volume of a cylinder to calculate the result.
*/
let radius = 7;
let height = 14;
const pi = Math.PI;
let volume = pi * radius * radius * height;
console.log("Das Volumen des Zylinders ist= " + volume);

/* 2.
Calculate the surface area of a sphere given its radius.
Create a variable for the radius of the sphere, then use the formula for the surface area of a
sphere to calculate the result.
*/

let radius_Kugel = 5;
const ma = Math.PI;
let surfaceArea = 4 * ma * radius_Kugel * radius_Kugel;
console.log("Die Oberfläche der Kugel beträgt= " + surfaceArea);

/* 3.
Calculate the distance between two points in 2D space given the coordinates of each
point.
Use the distance formula ((x2-x1)^2 + (y2-y1)^2)^(1/2) to calculate the distance between the
two points.
*/ 

let point1 = {x: 3, y: 4};
let point2 = {x: 6, y: 8};
let xDistance = point2.x - point1.x;
let yDistance = point2.y - point1.y;
let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
console.log("Die Entfernung zwischen den beiden Punkten beträgt " + distance);

