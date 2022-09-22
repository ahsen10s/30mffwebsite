console.log("Hello fellow coder")

// declaring all variables
let home = document.getElementById("home");
let movie = document.getElementById("movie");
let feedback = document.getElementById("feedback");
let crew = document.getElementById("crew");



// adding event listeners for mouse entering the html element and mouse leaving to decide when to change tab colors
home.addEventListener('mouseenter', () => {
    home.style.color="orange"
})
home.addEventListener('mouseleave', () => {
    home.style.color="black"
})

movie.addEventListener('mouseenter', () => {
    movie.style.color="orange"
})
movie.addEventListener('mouseleave', () => {
    movie.style.color="black"
})

feedback.addEventListener('mouseenter', () => {
    feedback.style.color="orange"
})
feedback.addEventListener('mouseleave', () => {
    feedback.style.color="black"
})

crew.addEventListener('mouseenter', () => {
    crew.style.color="orange"
})
crew.addEventListener('mouseleave', () => {
    crew.style.color="black"
})