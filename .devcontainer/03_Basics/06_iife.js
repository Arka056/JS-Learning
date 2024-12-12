// Immediately Invoked Function Expressions (IIFE)

( function hi() {
    // Named IIFE
    console.log("Hello guys!"); 
})(); // USING IIFE

( () => {
    // Unnamed IIFE
        console.log("Hi Guyss!!!!")
})();

( (name) => {
    // Unnamed IIFE with argument
        console.log(`Hi Guyss!!!! This is ${name}`)
})("Arka")