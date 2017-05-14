var canvas = document.getElementById('canvas')
canvas.width = canvas.scrollWidth
canvas.height = canvas.scrollHeight
var ctx = canvas.getContext('2d')

function drawRotatedImage(ctx, image, x, y, width, height, rotation) {
  var halfWidth = width/2
  var halfHeight = height/2

  ctx.save()
  ctx.translate(x + halfWidth, y + halfHeight)
  ctx.rotate(rotation)
  ctx.drawImage(image, -halfWidth, -halfHeight, width, height)
  ctx.restore()
}

function draw(ctx, image) {
  if (!image.complete) {
    setTimeout(function(){
      draw(ctx, image)
    }, 50)
    return
  }
  ctx.drawImage(image, 20, 20, 300, 300)
  drawRotatedImage(ctx, image, 420, 20, 300, 300, Math.PI)
  drawRotatedImage(ctx, image, 20, 220, 300, 300, 0)
  drawRotatedImage(ctx, image, 420, 220, 300, 300, -Math.PI/4)
  drawRotatedImage(ctx, image, 420, 420, 300, 300, Math.PI/2)
}

var image = new Image()
image.src = 'images/images.png'


draw(ctx, image)
