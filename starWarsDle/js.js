
// Jest aktualnie 83 postacie w SWAPI



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
    console.log(guess.value)
    console.log(ToGuess)
    
    let rep = ToGuess
    if(guess.value == ToGuess || guess.value == rep.split(" ")[0]){
        
        for(let i = 0; i<infos.length; i++){
            infos[i].style.backgroundColor = "lightgreen";
    }
    } else {
        
        guess.value
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