/*Demineur
    Cedric CHAPUIS
    Emilien PERREMANS
    Nico
    Sven
*/

//Declaration fonction
function Placement_Bombe(nb_bombe){
/*
Cette fonction permet de placer les bombes dans le différentes box.
La première boucle permet d'enlever les bombes poser du dernier tour.
La deuxième boucle permet de placer les nouvelles bombes.
*/
    for(let i = 0;i<=Tab_Bombes.length;i++){
        if(Tab_Bombes[i] == 1){
            Tab_Bombes[i] = 0;
            
        }
    }
    let nb_bombe_pose = 0;
    while(nb_bombe_pose != nb_bombe){
        let random = Math.floor(Math.random() * 26)
        if(Tab_Bombes[random] == 0){
            Tab_Bombes[random] = 1;
            nb_bombe_pose += 1;
        }
    }
}

function Set_Tour(){
/*
Cette fonction permet de changer le tour pour que ce soit a chaque fois le bon joueur qui joue
Elle prend en compte les point de vies des joueur 
Si un joueur n'en a plus alors son tour est skip
*/
    if(id_joueur == 3){
        id_joueur = 0
    }
    id_joueur += 1;
    let var_break = "";
    while(var_break != "OK"){
        if(Tab_Joueurs[id_joueur][2] != 0){
            var_break = "OK";
        }
        else{
            id_joueur += 1;
        }
    }
}

function Test_Box(id_box){
/*
Cette fonction est utilisé quand un joueur clique sur une des box
et test si la bombe est piegé, non piegé ou desarmocer
*/
    if(Tab_Bombes[id_box] == 1){
        Tab_Bombes[id_box] = 2;
        Tab_Joueurs[id_joueur][2] -= 1;
        Tab_Joueurs[id_joueur][1] += 100;
        alert("Outch ! Vous êtes tombe sur une bombe");
        Placement_Bombe(nb_bombe);
        Set_Tour();
    }
    else if(Tab_Bombes[id_box] == 0){
        Tab_Bombes[id_box] = 2;
        Tab_Joueurs[id_joueur][1] += 50;
        alert("Vous avez de la chance , cette box ne contient pas de bombe !");
        Placement_Bombe(nb_bombe);
        Set_Tour();
    }
    else if(Tab_Bombes[id_box] == 2){
        alert("Cette box a deja ete desarmoce, veuillez rejoue");
    }
}
function init(){
    document.getElementById("J1").innerHTML = Tab_Joueurs[0][0];
    document.getElementById("J2").innerHTML = Tab_Joueurs[1][0];
    document.getElementById("J3").innerHTML = Tab_Joueurs[2][0];
    document.getElementById("J4").innerHTML = Tab_Joueurs[3][0];
}
//Declaration variable
/*
Ces variables seront utilisées dans tout le programme
*/
let Tab_Bombes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
let Tab_Joueurs = [[prompt("Veuillez entre le nom du joueur 1"),0,3],
               [prompt("Veuillez entre le nom du joueur 2"),0,3],
               [prompt("Veuillez entre le nom du joueur 3"),0,3],
               [prompt("Veuillez entre le nom du joueur 4"),0,3],
                 ];
console.log(Tab_Joueurs);
let nb_bombe = Number(prompt("Veuillez choisir le nombre de bombes que vous voulez"));
let id_joueur = 0;
Placement_Bombe(nb_bombe);
