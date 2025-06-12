// variables to access the HTML Elements
const nextButton = document.querySelector(".next-btn")
const video = document.querySelector(".hero-video")

//This is an array of 4 videos
const movieList = ["Videos/hero-1.mp4","Videos/hero-2.mp4","Videos/hero-3.mp4","Videos/hero-4.mp4"]

//A variable to keep track of which video is being played
let index = 0;

//when the button is clicked change the video
nextButton.addEventListener("click",function(){
    index += 1 //increases the index by 1 when the btn is clicked
    video.src = movieList[index];//This changes the video source

    if (index === 3){
         index = -1;
    }
    //reset logic
    //When you reach the 4th Video set its index to -1 and go backs to th first video
})