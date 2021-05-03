document.addEventListener('DOMContentLoaded', () =>{
   const eyes =   document.querySelectorAll('.eye')
   const mask = document.querySelector('.torso')
   const robot = document.querySelector('.robot')
   const torso = document.querySelector('.torso')

    function changeeyes(){
        eyes.forEach(eye => eye.classList.toggle('blue-eye'))

    }

      mask.addEventListener('click', changeeyes)
})
