
// Jest aktualnie 83 postacie w SWAPI

// Fetch postaci systemowej == SWAPI
// Fetch postaci danej przez usera NumerID_z_linkiem


let SWAPI = "https://swapi.dev/api/people"


const names = document.getElementById("name")
const gender = document.getElementById("gender")
const type = document.getElementById("type")
const homeworld = document.getElementById("homeworld")
const mass = document.getElementById("mass")
const movie = document.getElementById("movie")
const height = document.getElementById("height")
const hair = document.getElementById("hair")

const ListaDanych = document.getElementById("characters")

const guess = document.getElementById("guess")
const guess2 = document.getElementById("guess2")
guess2.addEventListener("click", GuessCharacter)
let Randomizer = Math.floor(Math.random() * 84)
SWAPI = "https://swapi.dev/api/people/" + Randomizer
let SWAPIguesser = "https://swapi.dev/api/people/"
let a
let ToGuess
let ToGuessLink = SWAPI

let NumerID
let NumerID_z_linkiem

const infos = document.querySelectorAll(".info");
fetch(SWAPI)
.then(response =>{
    return response.json();
})
.then(data => {
    ToGuess = data.name;
})


datalisting();









function choices(Link){

        fetch(Link)
        .then(response => {
            if (!response.ok) {
                throw new Error("fail")
            }
            return response.json();
        })
        .then(data => {

        // Imie i ewentualnie nazwisko
            names.innerHTML = data.name
            
        // Płeć
            gender.innerHTML = data.gender
        // kolor skóry
            type.innerHTML = data.skin_color
        // Sprawdzenie i wypisanie planetu z której pochodzi postać
            if(data.homeworld.includes("https")){
                fetch(data.homeworld)
                .then(response =>{
                    return response.json();
                })
                .then(data => {
                    homeworld.innerHTML = data.name
                })
            } else {
             homeworld.innerHTML = data.homeworld
            }  
            mass.innerHTML = data.mass
    // Sprawdzanie i wypisanie pierwszego filmu w którym wystąpiła postać
            let aa = data.films[0]
            if(aa.includes("https")){
                fetch(aa)
                .then(response =>{
                    return response.json();
                })
                .then(data => {
                    
                    movie.innerHTML = data.title
                })
            } else {
             console.log("lol")
            }
        // wzrost postaci
            height.innerHTML = data.height
        // kolor włosów postaci
            hair.innerHTML = data.hair_color
        })
}
  
function GuessCharacter(){
    
    console.log(ToGuess)
    
    let rep = ToGuess
    if(guess.value == ToGuess || guess.value == rep.split(" ")[0]){
        
        for(let i = 0; i<infos.length; i++){
            infos[i].style.backgroundColor = "lightgreen";
    }
    } else {
        linker(guess.value)
        for(let i = 0; i<infos.length; i++){
            infos[i].style.backgroundColor = "lightcoral";
    }
        
    }
}

// autocomplete
function datalisting(){
let SWAPI2

    for(let i=1;i<84;i++){
        if(i != 17){
        SWAPI2 = "https://swapi.dev/api/people/" + i
        fetch(SWAPI2)
        .then(response =>{
            return response.json();
        })
        .then(data => {
            let option = document.createElement('option')
            option.value = data.name
            ListaDanych.appendChild(option)
            

        })
    }
    }
}


function linker(Lookup){
    console.log("Lookup= " + Lookup)
    for(let i=1; i<84;i++){
        if(i != 17){
            let SW = "https://swapi.dev/api/people/" + i
            fetch(SW)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                
                if(Lookup == data.name){
                    console.log("funckaj="+Lookup)
                    
                    NumerID = i
                    console.log(NumerID)
                    NumerID_z_linkiem = "https://swapi.dev/api/people/" + NumerID
                    console.log(NumerID_z_linkiem)
                    choices(NumerID_z_linkiem)
                    compare(NumerID_z_linkiem)
                }else{

                }

            }

            )
      }   
    }

    

}


    //Postać dana przez usera {
        let name10
        let gender10
        let skin_color10
        let homeworld10
        let mass10
        let movie10
        let height10
        let hair_color10
    // }
    
        //Postać dana przez system {
        let name01
        let gender01
        let skin_color01
        let homeworld01
        let mass01
        let movie01
        let height01
        let hair_color01
    // }

function compare(given){
    console.log(given)


fetch(SWAPI)
.then(response =>{
    return response.json();
})
.then(data =>{
    
    name10 = data.name
    console.log("BASE "+data.name)
    gender10 = data.gender
    skin_color10 = data.skin_color
    mass10 = data.mass
    height10 = data.height
    hair_color10 = data.hair_color
    let aaa = data.films[0]
    if(aaa.includes("https")){
        fetch(aaa)
        .then(response =>{
            return response.json();
        })
        .then(film => {
            console.log(film)
            movie10 = film.title
            if(data.homeworld.includes("https")){
                fetch(data.homeworld)
                .then(response =>{
                    return response.json();
                })
                .then(world => {
                    homeworld10 = world.name
                })
            }
        })
    }

 

})



fetch(given)
.then(response =>{
    return response.json();
})
.then(data =>{
    console.log("ID"+data.name)
    name01 = data.name
    gender01 = data.gender
    skin_color01 = data.skin_color
    height01 = data.height
    hair_color01 = data.hair_color
    mass01 = data.mass

    let aaa = data.films[0]
    if(aaa.includes("https")){
        fetch(aaa)
        .then(response =>{
            return response.json();
        })
        .then(film => {
            
            movie01 = film.title
            if(data.homeworld.includes("https")){
                fetch(data.homeworld)
                .then(response =>{
                    return response.json();
                })
                .then(world => {
                    homeworld01 = world.name
                    console.log(name01)
                    compareV2()
                })
            }   
        })
    }
})

}

function compareV2(){
    if(name01 == name10){
        infos[0].style.backgroundColor = "lightgreen";
    }else{
        infos[0].style.backgroundColor = "lightcoral";
    }
    //
    if(gender01 == gender10){
        infos[1].style.backgroundColor = "lightgreen";
    }else{
        infos[1].style.backgroundColor = "lightcoral";
    }
    //
    if(skin_color01 == skin_color10){
        infos[2].style.backgroundColor = "lightgreen";
    }else{
        infos[2].style.backgroundColor = "lightcoral";
    }
    //
    if(homeworld01 == homeworld10){
        infos[3].style.backgroundColor = "lightgreen";
    }else{
        infos[3].style.backgroundColor = "lightcoral";
    }
    //
    if(mass01 == mass10){
        infos[4].style.backgroundColor = "lightgreen";
    }else{
        infos[4].style.backgroundColor = "lightcoral";
    }
    //
    if(movie01 == movie10){
        infos[5].style.backgroundColor = "lightgreen";
    }else{
        infos[5].style.backgroundColor = "lightcoral";
    }
    //
    if(height01 == height10){
        infos[6].style.backgroundColor = "lightgreen";
    }else{
        infos[6].style.backgroundColor = "lightcoral";
    }
    //
    if(hair_color01 == hair_color10){
        infos[7].style.backgroundColor = "lightgreen";
    }else{
        infos[7].style.backgroundColor = "lightcoral";
    }
    //
}