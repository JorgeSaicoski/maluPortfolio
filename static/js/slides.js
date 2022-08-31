/*Slides change*/
let slidePosition = 1
let slideLength = 3
let newSlide
let oldSlide
let notFirst = false
let mouseOutSlides = true

/*Change slide every 3 seconds starts engine*/
let automaticChangeSlider = setTimeout(function() {changeSlide()}, 3000);

const changeSlide =()=>{
	if (slidePosition < slideLength){
		slidePosition += 1
		newSlide = document.getElementById(`image${slidePosition}`)
		oldSlide = document.getElementById(`image${slidePosition-1}`)
	}else{
		slidePosition = 1
		newSlide = document.getElementById(`image${slidePosition}`)
		oldSlide = document.getElementById(`image${slideLength}`)

	}
	newSlide.classList.add("top-0")
	newSlide.classList.add("left-0")
	newSlide.classList.add("w-full")
	newSlide.classList.add("h-full")
	newSlide.classList.remove("top-72")
	newSlide.classList.remove("left-72")
	newSlide.classList.remove("w-0")
	newSlide.classList.remove("h-0")
	oldSlide.classList.add("top-72")
	oldSlide.classList.add("left-72")
	oldSlide.classList.add("w-0")
	oldSlide.classList.add("h-0")
	oldSlide.classList.remove("top-0")
	oldSlide.classList.remove("left-0")
	oldSlide.classList.remove("w-full")
	oldSlide.classList.remove("h-full")

  /*Change slide every 3 seconds if mouse is not in*/

	clearTimeout(automaticChangeSlider)
  if (mouseOutSlides){
	 automaticChangeSlider = setTimeout(function() {changeSlide()}, 3000);

  }

}
/*Slides actions*/
let slidesDiv = document.getElementById(`slidesShow`)
/*on click*/
slidesDiv.onclick = function(){changeSlide()}
/*Mouse in*/


slidesDiv.onmouseenter = function(){
  mouseOutSlides = false

  clearTimeout(automaticChangeSlider)
}
slidesDiv.onmouseleave = function(){
  mouseOutSlides = true
  setTimeout(function() {changeSlide()}, 3000)

}

