console.log ("woks!")

let bottone = document.getElementById("bottone");
let refresh = document.getElementById("refresh");

bottone.addEventListener ( "click",

    function myFunction() {
        for (let i = 0; i < 100; i++) {

            if ((i % 3 === 0 ) && (i % 5 === 0 )) {
                console.log(i, 'FizzBuzz')
            } else if (i % 3 === 0) {
                console.log(i, 'Fizz')
            } else if (i % 5 === 0) {
                console.log(i, 'Buzz')
            } 
        }    
        
    }
    

)

refresh.addEventListener ( "click",
    function refreshFunction() {
        window.location.reload(true)
    }
)

