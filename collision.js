// Create a function to determine whether or not two circles are colliding.
// You will be given the position of both circles in addition to their radii:

// If a collision is detected, return true. If not, return false.

function collision(x1, y1, radius1, x2, y2, radius2) {
  return Math.hypot(x1 - x2, y1 - y2) < radius1 + radius2 ? true : false;
}

console.log(collision(1, 1, 1, 1.1, 1.1, 0.1));
