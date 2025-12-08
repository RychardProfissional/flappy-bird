/**
 * Utility functions for Flappy Bird
 */

function checkCollision(bird, pipePair, pipeConfig) {
  const birdHead = bird.y;
  const birdFoot = bird.y + bird.height;
  const birdLeft = bird.x;
  const birdRight = bird.x + bird.width;

  const pipeLeft = pipePair.x;
  const pipeRight = pipePair.x + pipeConfig.width;
  const topPipeBottom = pipePair.y + pipeConfig.height;
  const bottomPipeTop = pipePair.y + pipeConfig.height + pipeConfig.gap;

  const hitTopPipe = birdHead < topPipeBottom;
  const hitBottomPipe = birdFoot > bottomPipeTop;

  if (
    birdRight > pipeLeft &&
    birdLeft < pipeRight &&
    (hitTopPipe || hitBottomPipe)
  ) {
    return true;
  }
  return false;
}

function checkFloorCollision(bird, floor, canvasHeight) {
  const birdFoot = bird.y + bird.height;
  const floorY = canvasHeight - floor.height;

  if (birdFoot >= floorY) {
    return true;
  }
  return false;
}
