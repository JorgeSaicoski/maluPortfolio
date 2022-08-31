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



