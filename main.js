// Get needed elements from the DOM
const loadScreen=document.querySelector(".load-screen");
const textSlide=document.querySelector(".text-overlay");
const title=document.querySelector(".title");

// Add a load event to the window
// This waits for the page to load before running any scripts inside
window.addEventListener("load", ()=>{
    //Wait another second before running scripts inside
    setTimeout(()=>{
        // Fade out the loading screen
        loadScreen.style.opacity="0";
        //Wait for fade out animation to finish
        setTimeout(()=>{
            //Hide the loading screen
            loadScreen.style.display="none";
            //Make the body scrollable again
            document.body.style.overflow="visible";
            document.body.style.paddingRight="0px";
            //Add title text animation
            textSlide.style.animation="slide 0.8s ease-in-out forwards";
            title.style.opacity="1";
        },500);
    },1000);
});

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};