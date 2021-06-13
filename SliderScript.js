//Setting the Slider Counter to the first image
var slideIndex = 0;
showDivs(slideIndex);

// The function passes Slider numbers to be displayed on screen
function plusDivs(n) {
  showDivs(slideIndex += n);
}

//
function showDivs(n) {
  var i; //Counter Value
  var x = document.getElementsByClassName("mySlides"); //Fill X with HTML Items with calss [mySlides]
  if (n > x.length)
  {
    //If the counter is larger than current index value, display the slide image with inex [1]
      slideIndex = 1;
    }

  if (n < 1)
  {
    // If the counter is less than 1, jump to the next slide
      slideIndex = x.length;
    }

  for (i = 0; i < x.length; i++)
  {
    // If the index value less than the counter, display only current slider
     x[i].style.display = "none";
  }

  //Display the slider with index value of x. The Block duty is to display the value.
  x[slideIndex-1].style.display = "block";
}