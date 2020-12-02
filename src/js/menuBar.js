console.log(document.getElementById('menuIcon'))
var menu = document.getElementById('menuIcon')
var overlay = document.getElementById('menuOverlay')
var count = 0
function animationMenu()
{
    if (count === 0 ) {
        document.getElementById('topIcon').classList.add('topIconFocus')
        document.getElementById('downIcon').classList.add('downIconFocus')
        overlay.setAttribute("style", "background: red;")
        overlay.setAttribute("style", "height:100vh;")
        
        count = 1
    }
   else
   {
       console.log("one");
       document.getElementById('topIcon').classList.remove('topIconFocus')
       document.getElementById('downIcon').classList.remove('downIconFocus')
       overlay.setAttribute("style", "background: none;")
        overlay.setAttribute("style", "height:0vh;")
       count = 0
   }
  
}