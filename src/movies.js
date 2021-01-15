// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
    const directors = array.map (function(element){
        return element.director
    })
return directors
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){
 const dramas = array.filter(function(element){
     if (element.genre.indexOf('Drama') > -1 && element.director == "Steven Spielberg") {
         return true
     }
 })
 return dramas.length
}

//console.log(dramas)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (array.length === 0) {
        return 0;
    };
    const sum = array.reduce(function(acc, value){
        return acc + value.rate
    } ,0)
    finalSum = sum / array.length
    return Number(finalSum.toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
    let totalRate = 0;
    let counter = 0;
    
    const dramaRate = moviesArray.filter(function(element){
        if (element.genre.indexOf('Drama') > -1) {
            totalRate += element.rate;
            counter ++
        }
    })
    return Number((totalRate / counter).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
const ordered = moviesArray.sort(function(a, b) {
    return a.year - b.year
})
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
