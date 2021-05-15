const myName= document.querySelector("#myName")
const myClock= document.querySelector("#myClock")

const person= prompt("Adınızı giriniz")

if(person.length){
    myName.innerHTML += person
}

let time=setInterval(showTime,1000)


function showTime(){
    let date= new Date()
    
    let days=["Pazar","Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma","Cumartesi"]
    let dayName = days[date.getDay()];

    myClock.innerHTML= `${date.toLocaleTimeString()}, ${dayName}`;
}

