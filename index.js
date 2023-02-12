
const lienzo = document.querySelector("canvas"); // Obtiene el elemento canvas

const ctx = lienzo.getContext("2d"); // creación del contexto 

// Propiedades del canvas

lienzo.width = 1024;

lienzo.height = 576;


ctx.fillRect(0, 0, lienzo.width, lienzo.height);


// Creando personajes y enemigos

const gravity = 0.2;


class Sprite {

  constructor({position, velocity}){

    this.position = position;
    this.velocity = velocity;
    this.height = 150;
  }

  draw(){
    
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, 50, this.height);
  }

  update(){

    this.draw();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if(this.position.y + this.height + this.velocity.y >= lienzo.height){
      this.velocity.y = 0;
    }else{
      this.velocity.y += gravity;
    }
  }
}


// Instancias de Sprite

const player = new Sprite({

  position : { x : 0 , y : 0 },

  velocity : { x : 0 , y : 0 }

});


const enemy = new Sprite({

  position : { x : 400 , y : 100 },
  
  velocity : {x : 0 , y : 0 }

});



console.log(player);

const keys = {
	
  a: { pressed: false },
  d: { pressed: false } 
}


let lastKey; 



// Loop principal

function animate(){

  window.requestAnimationFrame(animate);
  //console.log("go");
  ctx.fillStyle = "black";
  ctx.fillRect(0 , 0 , lienzo.width , lienzo.height);
  player.update();
  enemy.update();

  player.velocity.x = 0;

  if(keys.a.pressed && lastKey === "a"){
    
    player.velocity.x = -1;
  }else if(keys.d.pressed && lastKey === "d"){

    player.velocity.x = 1;
  }


}





animate()



window.addEventListener("keydown", (event)=>{
  
  switch (event.key){

    case "d":
      lastKey = "d";
      keys.d.pressed = true;
    break

    case "a":
      lastKey = "a";
      keys.a.pressed = true;
    break

  }
   console.log(event.key);
  
});



window.addEventListener("keyup", (event)=>{
  
  switch (event.key){

    case "d":

      keys.d.pressed = false;
    break
     case "a":

      keys.a.pressed = false;
    break

  }
   console.log(event.key);
  
});
