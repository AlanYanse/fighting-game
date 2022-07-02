
const lienzo = document.querySelector("canvas"); // Obtiene el elemento canvas

const ctx = lienzo.getContext("2d"); // creación del contexto 

// Propiedades del canvas

lienzo.width = 1024;

lienzo.height = 576;


ctx.fillRect(0, 0, lienzo.width, lienzo.height);


// Creando personajes y enemigos


class Sprite {

  constructor(position){

    this.position = position;
  }

  draw(){
    
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, 50, 150);
  }
}


// Instancias de Sprite

const player = new Sprite({x: 0, y: 0})

player.draw();

console.log(player);


