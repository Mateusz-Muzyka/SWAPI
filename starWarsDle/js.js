
// Jest aktualnie 83 postacie w SWAPI



let SWAPI = "https://swapi.dev/api/people"
console.log(SWAPI)

const names = document.getElementById("name")
const gender = document.getElementById("gender")
const type = document.getElementById("type")
const homeworld = document.getElementById("homeworld")
const mass = document.getElementById("mass")
const movie = document.getElementById("movie")
const height = document.getElementById("height")
const hair = document.getElementById("hair")

const guess = document.getElementById("guess")
guess.addEventListener("input", GuessCharacter)
let Randomizer = Math.floor(Math.random() * 84)
SWAPI = "https://swapi.dev/api/people/" + Randomizer

let ToGuess


const infos = document.querySelectorAll(".info");
        
        fetch(SWAPI)
        .then(response => {
            if (!response.ok) {
                throw new Error("fail")
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            console.log(data.name)
            console.log(data.gender)
        // Imie i ewentualnie nazwisko
            names.innerHTML = data.name
            ToGuess = data.name;
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
                    console.log(data)
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
    
  
function GuessCharacter(){
    console.log(guess.value)
    let rep = ToGuess
    if(guess.value == ToGuess || guess.value == rep.split(" ")[0]){
        for(let i = 0; i<infos.length; i++){
            infos[i].style.backgroundColor = "lightgreen";
    }} 
}
