function MyFunc1(){
  
    var thrdside = document.getElementById("thrdside1")
    var nav = document.getElementById("nav1");
    var input = document.getElementById("input")
     if(thrdside.style.display === "none"){
         input.style.top = "8%"
         nav.style.height = "100px"
         thrdside.style.display = "flex" 
         thrdside.style.transition = "0.2s"
         
    }
    else{
     thrdside.style.display = "none"
     nav.style.height = "100px"
     input.style.top = "23%"
   }
   }

   function InputShow(){
       var input = document.getElementById("input")
           if(input.style.display === "none"){
               input.style.display  = "flex";
               input.style.transition = "0.3s"
       }
       else{
           input.style.display = "none";
           input.style.transition = "0.3s"
       }
    }
  
   var slideInterval = setInterval(Carusel,4000);
   var slides = document.getElementsByClassName("slides")
   function Carusel() {

       if(slides[0].style.transform === "translate3d(0px, 0px, 0px)"){
        slides[0].style.transform = "translate3d(-1472px, 0px, 0px)"
       }
       else{
        slides[0].style.transform = "translate3d(0px, 0px, 0px)"
       }
       
   }


   var slideInterval = setInterval(Carusel2,4000);
   var slides2 = document.getElementsByClassName("slides2")
   function Carusel2() {

       if(slides2[0].style.transform === "translate3d(0px, 0px, 0px)"){
        slides2[0].style.transform = "translate3d(-872px, 0px, 0px)"
       }
       else{
        slides2[0].style.transform = "translate3d(0px, 0px, 0px)"
       }
       
   }