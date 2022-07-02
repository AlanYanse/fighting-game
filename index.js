
const lienzo = document.querySelector("canvas"); // Obtiene el elemento canvas

const ctx = lienzo.getContext("2d"); // creación del contexto 

// Propiedades del canvas

lienzo.width = 1024;

lienzo.height = 576;


ctx.fillRect(0, 0, lienzo.width, lienzo.height);


// Creando personajes y enemigos


class Sprite {

  constructor({position, velocity}){

    this.position = position;
    this.velocity = velocity;
  }

  draw(){
    
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, 50, 150);
  }

  update(){

    this.draw();
    this.position.y += this.velocity.y;
  }
}


// Instancias de Sprite

const player = new Sprite({

  position : { x : 0 , y : 0 },

  velocity : { x : 0 , y : 5 }

});


const enemy = new Sprite({

  position : { x : 400 , y : 100 },
  
  velocity : {x : 0 , y : 0 }

});



console.log(player);


// Loop principal

function animate(){

  window.requestAnimationFrame(animate);
  console.log("go");
  ctx.fillStyle = "black";
  ctx.fillRect(0 , 0 , lienzo.width , lienzo.height);
  player.update();
  enemy.update();


}

































animate()
