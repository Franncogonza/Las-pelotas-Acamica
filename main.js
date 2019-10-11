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

  Ball.prototype.draw = function() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
  }