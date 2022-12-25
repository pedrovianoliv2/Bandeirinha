


tela1 = document.querySelector("canvas1");
tela1 = document.getElementById("canvas1");
pincel1 = tela1.getContext("2d");

tela_cores=["green","white","red"];
pos_x = 0;
pos_y = 0;
pos_width  = 200;
pos_height = 400;


for(pos_x;pos_x<3;pos_x++){
    
    cor = tela_cores[pos_x];
    pincel1 .fillStyle = cor;
    pincel1.fillRect(pos_x * pos_width,pos_y,pos_width,pos_height);

}
pincel1.fillStyle = "lightgray";
pincel1.fillRect(0,0,1,400)
pincel1.fillStyle = "lightgray";
pincel1.fillRect(0,0,600,1)
pincel1.fillStyle = "lightgray";
pincel1.fillRect(599,0,1,400);
pincel1.fillStyle = "lightgray";
pincel1.fillRect(0,399,600,1);



tela2 = document.querySelector("canvas2");
tela2 = document.getElementById("canvas2");
pincel2 = tela2.getContext("2d");

tela_cores = ["blue","white","red"]
pos_x = 0;
pos_y = 0;
pos_width  = 200;
pos_height = 400;

for(pos_x;pos_x<3;pos_x++){
        cor = tela_cores[pos_x];

        pincel2.fillStyle = cor;
        pincel2.fillRect(pos_x * pos_width,pos_y,pos_width,pos_height);


}
pincel2.fillStyle = "lightgray";
pincel2.fillRect(0,0,1,400)
pincel2.fillStyle = "lightgray";
pincel2.fillRect(0,0,600,1)
pincel2.fillStyle = "lightgray";
pincel2.fillRect(599,0,1,400);
pincel2.fillStyle = "lightgray";
pincel2.fillRect(0,399,600,1);






tela3 = document.querySelector("canvas3");
tela3 = document.getElementById("canvas3");
pincel3 = tela3.getContext("2d");


tela_cores=["green","white","orange"]
pos_x = 0;
pos_y = 0;
pos_width  = 200;
pos_height = 400;


for(pos_x;pos_x<3;pos_x++){

    cor = tela_cores[pos_x];
    pincel3.fillStyle = cor;
    pincel3.fillRect(pos_x * pos_width,pos_y,pos_width,pos_height);  
}


pincel3.fillStyle = "lightgray";
pincel3.fillRect(0,0,1,400)
pincel3.fillStyle = "lightgray";
pincel3.fillRect(0,0,600,1)
pincel3.fillStyle = "lightgray";
pincel3.fillRect(599,0,1,400);
pincel3.fillStyle = "lightgray";
pincel3.fillRect(0,399,600,1);




// tela4 = document.querySelector("canvas4");  AMANHA FAZER DO BRASIL.
// tela4 = document.getElementById("canvas4");
// pincel4 = tela4.getContext("2d");

// pincel4.fillStyle = "lightgray";
// pincel4.fillRect(0,0,1,400)
// pincel4.fillStyle = "lightgray";
// pincel4.fillRect(0,0,600,1)
// pincel4.fillStyle = "lightgray";
// pincel4.fillRect(599,0,1,400);
// pincel4.fillStyle = "lightgray";
// pincel4.fillRect(0,399,600,1);