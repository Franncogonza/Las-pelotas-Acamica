  // setup canvas

  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');

  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;

  // function to generate random number

  function random(min, max) {
      var num = Math.floor(Math.random() * (max - min)) + min;
      return num;
  }

  function Ball(x, y, velX, velY, color, size) {
    this.x = x; //posición horizontal
    this.y = y; //posición vertical
    this.velX = velX; //velocidad horizontal
    this.velY = velY; //velocidad vertical
    this.color = color; //color
    this.size = size; //tamaño
}

