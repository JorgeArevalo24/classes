class Game {
    constructor(seconds, maxCities) {
        this._seconds = seconds
        this._maxCities = maxCities
        this._endTime = new Date
        this._coastalCities = 1
        this._inlandCities = 1
        this._cities = ['']
    }

}
const starDate = new Date
Game.getDetails = function () {

    return "Quedan" + this._coastalCities + "ciudades costeras" + this._inlandCities + "ciudades de interior"
}
Game.getDeadline = function () {
    return "La partida terminara"
}
Game.showCitiesInfo = function () {

    this._cities.forEach(element => console.log(element));
}

class City {
    constructor(population, meters) {
        this._population = population
        this._area = meters
    }
}

City.getDetails = function () {

    return "Ciudad de tipo" + this._type + "con" + this._population + "habitantes"
}
City.setEpidemic(num) = function () {

    setEpidemic(num) = this._population - num

}
City.setBabyBoom(num) = function () {

    etBabyBoom(num) = this._population + num

}



function Coastal(beaches, coast, population, meters) {
    City.call(this, population, meters)
    this._beaches = beaches
    this._type = coast

}
function Inland(skyScrapperses, indoor, population, meters) {
    City.call(this, population, meters)
    this._skyScrapperses = skyScrapperses
    this._type = indoor

}



// Descomentar tras desarrollar el sistema para simular una partida

const game = new Game(60, 3)
game.init()
console.log('---Inicio del juego---')
game.showCitiesInfo()
console.log('---Movimiento 1---')
console.log(game._cities[0].getDetails())
game._cities[0].setEpidemic(100)
console.log(game._cities[0].getDetails())
game._cities[0].setBabyBoom(40)
console.log(game._cities[0].getDetails())
console.log('---Movimiento 2---')
console.log(game._cities[1].getDetails())
game._cities[1].setEpidemic(85)
console.log(game._cities[1].getDetails())
game._cities[1].setBabyBoom(48)
console.log(game._cities[1].getDetails())
