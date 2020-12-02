console.log(document.getElementById('menuIcon'))
var menu = document.getElementById('menuIcon')
var overlay = document.getElementById('menuOverlay')
var count = 0
var nav = 0
function animationMenu()
{
    
    if (count === 0 ) {
        document.getElementById('topIcon').classList.add('topIconFocus')
        document.getElementById('downIcon').classList.add('downIconFocus')
        overlay.setAttribute("style", "background: red;")
        overlay.setAttribute("style", "height:100vh;")
        
        if(window.scrollY < 100)
        {
            document.getElementById('jedaiLogo').src = "../assets/images/Jedai-logo-blue.png"
            document.getElementById('phoneNuber').setAttribute("style" , "color:#225a93")
        }
        document.getElementById('navbarContainer').setAttribute("style" , "box-shadow:none;");
        document.getElementById('text1_1').setAttribute("style" , "opacity:1;transition:color 0.5s , opacity 0.5s 0.7s;pointer-events:all;");
        document.getElementById('text1_1_1').setAttribute("style" , "opacity:1;transition: color 0.5s ,opacity 0.5s 0.7s;pointer-events:all;");
        
        document.getElementById('text1_2').setAttribute("style" , "opacity:1;transition:color 0.5s , opacity 0.5s 1s;pointer-events:all;");
        document.getElementById('text1_2_2').setAttribute("style" , "opacity:1;transition:color 0.5s , opacity 0.5s 1s;pointer-events:all;");
        
        document.getElementById('text1_3').setAttribute("style" , "opacity:1;transition:color 0.5s , opacity 0.5s 1.2s;pointer-events:all;");
        document.getElementById('text1_3_3').setAttribute("style" , "opacity:1;transition:color 0.5s , opacity 0.5s 1.2s;pointer-events:all;");

        document.getElementById('ftextOverlayP').setAttribute("style" , "opacity:1;transition: opacity 0.5s 1.4s;pointer-events:all;");
        document.getElementById('ftextOverlaySpan1').setAttribute("style" , "opacity:1;transition: opacity 0.1s 1.4s;pointer-events:none;");
       document.getElementById('ftextOverlaySpan2').setAttribute("style" , "opacity:1;transition: opacity 0.1s 1.4s;pointer-events:none;");

        count = 1

    }
   else
   {
       document.getElementById('topIcon').classList.remove('topIconFocus')
       document.getElementById('downIcon').classList.remove('downIconFocus')
       document.getElementById('text1_1').setAttribute("style" , "opacity:0;transition: opacity 0.5s 0.8s;pointer-events:none;");
       document.getElementById('text1_1_1').setAttribute("style" , "opacity:0;transition: opacity 0.5s 0.8s;pointer-events:none;");
       
       document.getElementById('text1_2').setAttribute("style" , "opacity:0;transition: opacity 0.5s 0.65s;pointer-events:none;");
       document.getElementById('text1_2_2').setAttribute("style" , "opacity:0;transition: opacity 0.5s 0.65s;pointer-events:none;");
        
       document.getElementById('text1_3').setAttribute("style" , "opacity:0;transition: opacity 0.5s 0.3s;pointer-events:none;");
       document.getElementById('text1_3_3').setAttribute("style" , "opacity:0;transition: opacity 0.5s 0.3s;pointer-events:none;");
       
       document.getElementById('ftextOverlayP').setAttribute("style" , "opacity:0;transition: opacity 0.1s 0.1s;pointer-events:none;");
       document.getElementById('ftextOverlaySpan1').setAttribute("style" , "opacity:0;transition: opacity 0.1s 0.1s;pointer-events:none;");
       document.getElementById('ftextOverlaySpan2').setAttribute("style" , "opacity:0;transition: opacity 0.1s 0.1s;pointer-events:none;");

       if(window.scrollY < 100)
        {
            document.getElementById('jedaiLogo').src = "../assets/images/JedaiLogo.png"
            document.getElementById('phoneNuber').setAttribute("style" , "color:white;")
            document.getElementById('downIcon').setAttribute("style" , "background-color:white ")
            document.getElementById('topIcon').setAttribute("style" , "background-color:white ")    
        }
        if (window.scrollY > 100)
        {
            document.getElementById('navbarContainer').setAttribute("style" , "background-color:rgba(255,255,255,1); transition: box-shadow 1s 1s;box-shadow:5px 5px 15px rgba(0,0,0,0.2);")
        }
       
        overlay.setAttribute("style", "background: none !important;")
        overlay.setAttribute("style", "height:0vh !important;")
       count = 0
   }
  
}

window.addEventListener('scroll' , function () 
{
    
    if (window.scrollY > 100 && count === 0 ) {
        document.getElementById('jedaiLogo').src = "../assets/images/Jedai-logo-blue.png"
        document.getElementById('navbarContainer').setAttribute("style" , "background-color:rgba(255,255,255,0.95); transition:0.5s;box-shadow:5px 5px 15px rgba(0,0,0,0.2);")
        document.getElementById('phoneNuber').setAttribute("style" , "color:#225a93")
        document.getElementById('downIcon').setAttribute("style" , "background-color:#225a93")
        document.getElementById('topIcon').setAttribute("style" , "background-color:#225a93")
    }
    else if (window.scrollY < 100 && count === 0)
    {
        document.getElementById('jedaiLogo').src = "../assets/images/JedaiLogo.png"
        document.getElementById('navbarContainer').setAttribute("style" , "background-color:none; transition:0.5s;")
        document.getElementById('phoneNuber').setAttribute("style" , "color:white")
        document.getElementById('downIcon').setAttribute("style" , "background-color:white")
        document.getElementById('topIcon').setAttribute("style" , "background-color:white")
    }
})
