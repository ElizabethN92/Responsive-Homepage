const menuWithInnerLinks = document.querySelectorAll(".hidden_dropdown_menu")
const dropdownContent = document.querySelectorAll(".dropdown")
const downArrowIcon = document.querySelectorAll(".down_arrow_icon")
const upArrowIcon = document.querySelectorAll(".up_arrow_icon")

//let dropdownMenu = Array.from(dropdownContent) //turn it into an array



//Navigation Desktop Version
menuWithInnerLinks.forEach((item, i)=>{
      //dropdownContent.forEach(e=> e.classList.remove('active'))
    item.addEventListener('click', function(){

       if (i == 1){
        dropdownContent[0].classList.remove('active')
        upArrowIcon[0].classList.remove('active')
        downArrowIcon[0].classList.add('active')

        //Dropdown Container
       dropdownContent[i].classList.toggle('active')  

       //Arrows
       downArrowIcon[i].classList.toggle('active')
       upArrowIcon[i].classList.toggle('active')

       } else{
        dropdownContent[1].classList.remove('active')
        upArrowIcon[1].classList.remove('active')
        downArrowIcon[1].classList.add('active')

        //Dropdown Container
       dropdownContent[i].classList.toggle('active')  

       //Arrows
       downArrowIcon[i].classList.toggle('active')
       upArrowIcon[i].classList.toggle('active')
       }
       
    })
})



//Navigation Mobile Version
const hiddenMenu = document.querySelector('nav')
const overlay = document.querySelector('.background_color_overlay')
const hamburgerMenu = document.querySelector(".menu_icon");
const exitMenuIcon = document.querySelector('.close_menu_icon')

function openHiddenMenu(){
   hiddenMenu.classList.add('active')
   overlay.classList.add('active')
}
function closeHiddenMenu(){
   hiddenMenu.classList.remove('active')
   overlay.classList.remove('active')
}

hamburgerMenu.addEventListener('click', openHiddenMenu)
exitMenuIcon.addEventListener('click', closeHiddenMenu)

