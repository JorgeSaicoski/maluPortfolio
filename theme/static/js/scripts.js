/*Nav Bar function*/

let isOpen = false
const changeOpen =()=> {
    const menuIcon = document.getElementById('menuIcon')
    const navBarFlex = document.getElementById("navFlex")
    const itemNavFlex = document.getElementById("itemNavFlex")
    const logoFlex = document.getElementById("logoFlex")
    if (isOpen) {
      isOpen = false


      menuIcon.classList.remove("opacity-0")
      navBarFlex.classList.remove("opacity-100")
      navBarFlex.classList.add("opacity-0")
      navBarFlex.classList.remove("h-[100vh]")
      navBarFlex.classList.add("h-0")
      itemNavFlex.classList.remove("h-1/2")
      itemNavFlex.classList.add("h-0")
      logoFlex.classList.remove("opacity-25")
      navBarFlex.classList.add("duration-75")
      navBarFlex.classList.remove("duration-500")



    }else{
      isOpen = true


      menuIcon.classList.add("opacity-0")
      
      navBarFlex.classList.remove("duration-75")
      navBarFlex.classList.add("duration-500")
      navBarFlex.classList.remove("opacity-0")    
      navBarFlex.classList.add("opacity-100")
      navBarFlex.classList.remove("h-0")
      navBarFlex.classList.add("h-full")
      navBarFlex.classList.add("w-full")
      itemNavFlex.classList.add("h-1/2")
      itemNavFlex.classList.remove("h-0")
      logoFlex.classList.add("opacity-25")



    }
  }

/*Nav Bar clicks*/
document.getElementById(`menuIcon`).onclick = function(){changeOpen()}
document.getElementById(`logoFlex`).onclick = function(){changeOpen()}


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


