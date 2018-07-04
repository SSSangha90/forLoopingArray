// Task 5 - Create an array variable with 10 elements and using a for loop  display each element on the webpage. 

var countries = ["England", "France", "Italy", "Mexico", 
"Poland", "Russia", "China", "Greece", "Egypt", "India"];

var listCountries = document.getElementById("looparray").addEventListener('click', forLoopingCountries);

var arrayLength = (countries).length;

function forLoopingCountries(){
    
    for(var i = 0; i < 1; i++){
        document.write(countries);
    }
}

console.log(countries.length);
