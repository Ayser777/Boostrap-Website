"use strict"




// Galerya

var mainDiv = document.getElementById("mainDiv")

function myfunction(){
    mainDiv.style.display = "block"
}


// -----------

var mainDiv1 = document.getElementById("mainDiv1")

function myfunction2(){
    mainDiv1.style.display = "block"
}


// ---------

var mainDiv2 = document.getElementById("mainDiv2")

function myfunction3(){
    mainDiv2.style.display = "block"
}

// -------
var mainDiv3 = document.getElementById("mainDiv3")

function myfunction4(){
    mainDiv3.style.display = "block"
}


var mainDiv4 = document.getElementById("mainDiv4")

function myfunction5(){
    mainDiv4.style.display = "block"
}


var mainDiv5 = document.getElementById("mainDiv5")

function myfunction6(){
    mainDiv5.style.display = "block"
}

var mainDiv6 = document.getElementById("mainDiv6")

function myfunction7(){
    mainDiv6.style.display = "block"
}


var mainDiv7 = document.getElementById("mainDiv7")

function myfunction8(){
    mainDiv7.style.display = "block"
}


var mainDiv8 = document.getElementById("mainDiv8")

function myfunction9(){
    mainDiv8.style.display = "block"
}

// Vidio-----------

var vdDiv = document.getElementById("vdDiv")

function vdfunction(){
    vdDiv.style.display = "block"
}

var vdclos = document.getElementById("vdclos")

function closfunction(){
 vdDiv.style.display = "none"
}


// TOP ------------

var a = document.getElementById("top")

function topFunction(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
 }



//  --------- Light Function

var btn = document.getElementById("btn")
var isDarkMode = true

function toggleBtn(){
    if(isDarkMode){
        btn.classList.toggle("active")
        var f = document.querySelectorAll("section")
        f[0].style.background = "#8DA399"
        f[1].style.background = "#8DA399"
        var d = document.getElementById("intro")
        d.style.background = "#8DA399"
        var e = document.getElementById("getintouch")
        e.style.background = "#8DA399"
        var text = document.getElementById("text")    
        text.style.color = "black"  
        var text1 = document.getElementById("text1")
        text1.style.color = "black"
        var text2 = document.getElementById("text2") 
        text2.style.color = "black"
        var text3 = document.getElementById("text3")
        text3.style.color = "black"
        var number = document.getElementById("number")  
        number.style.color = "#6B8E23"
        var number1 = document.getElementById("number1")
        number1.style.color = "#6B8E23"
        var number2 = document.getElementById("number2")
        number2.style.color = "#6B8E23"
        var number3 = document.getElementById("number3")
        number3.style.color = "#6B8E23"
        var texth3 = document.getElementById("texth3")
        texth3.style.color = "#6B8E23"
        var timcook = document.getElementById("timcook")
        timcook.style.color = "#6B8E23"
        var sunder = document.getElementById("sunder")
        sunder.style.color = "#6B8E23"
        var p1 = document.getElementById("p1")
        p1.style.color = "black"
        var p2 = document.getElementById("p2")
        p2.style.color = "black"
        var geth3 = document.getElementById("geth3")
        geth3.style.color = "#6B8E23"
        var text4 = document.getElementById("text4")
        text4.style.color = "black"
        var texth4 = document.getElementById("texth4")
        texth4.style.color = "#6B8E23"
        var texth41 = document.getElementById("texth41")
        texth41.style.color = "#6B8E23"
        var texth42 = document.getElementById("texth42")
        texth42.style.color = "#6B8E23"
        var backtop = document.getElementById("backtop")
        backtop.style.border = "1px solid #6B8E23"
        var svg = document.getElementById("svg")
        svg.style.fill = "#6B8E23"
        var buton = document.getElementById("buton")
        buton.style.backgroundColor = "#6B8E23"
        var svg1 = document.getElementById("svg1")
        svg1.style.fill = "#6B8E23"
        var svg2 = document.getElementById("svg2")
        svg2.style.fill = "#6B8E23"
        var svg3 = document.getElementById("svg3")
        svg3.style.fill = "#6B8E23"
        var svg4 = document.getElementById("svg4")
        svg4.style.fill = "#6B8E23"
        var svg5 = document.getElementById("svg5")
        svg5.style.fill = "#6B8E23"
        var svg6 = document.getElementById("svg6")
        svg6.style.fill = "#6B8E23"
        isDarkMode = false
    }else{
        btn.classList.toggle("active")
        var f = document.querySelectorAll("section")
        f[0].style.background = "#1F9388"
        f[1].style.background = "#090909"
        var d = document.getElementById("intro")
        d.style.background = "rgb(19, 19, 19)"
        var e = document.getElementById("getintouch")
        e.style.background = "black"
        var text = document.getElementById("text")    
        text.style.color = "#8A8A8B"  
        var text1 = document.getElementById("text1")
        text1.style.color = "#8A8A8B"
        var text2 = document.getElementById("text2") 
        text2.style.color = "#8A8A8B"
        var text3 = document.getElementById("text3")
        text3.style.color = "#8A8A8B"
        var number = document.getElementById("number")  
        number.style.color = "#24A89B"
        var number1 = document.getElementById("number1")
        number1.style.color = "#24A89B"
        var number2 = document.getElementById("number2")
        number2.style.color = "#24A89B"
        var number3 = document.getElementById("number3")
        number3.style.color = "#24A89B"
        var texth3 = document.getElementById("texth3")
        texth3.style.color = "#24A89B"
        var timcook = document.getElementById("timcook")
        timcook.style.color = "#24A89B"
        var sunder = document.getElementById("sunder")
        sunder.style.color = "#24A89B"
        var p1 = document.getElementById("p1")
        p1.style.color = "#8A8A8B"
        var p2 = document.getElementById("p2")
        p2.style.color = "#8A8A8B"
        var geth3 = document.getElementById("geth3")
        geth3.style.color = "#24A89B"
        var text4 = document.getElementById("text4")
        text4.style.color = "#8A8A8B"
        var texth4 = document.getElementById("texth4")
        texth4.style.color = "#717373"
        var texth41 = document.getElementById("texth41")
        texth41.style.color = "#717373"
        var texth42 = document.getElementById("texth42")
        texth42.style.color = "#717373"
        var backtop = document.getElementById("backtop")
        backtop.style.border = "1px solid #24A89B"
        var svg = document.getElementById("svg")
        svg.style.fill = "#24A89B"
        var buton = document.getElementById("buton")
        buton.style.backgroundColor = "#24A89B"
        var svg1 = document.getElementById("svg1")
        svg1.style.fill = "gray"
        var svg2 = document.getElementById("svg2")
        svg2.style.fill = "gray"
        var svg3 = document.getElementById("svg3")
        svg3.style.fill = "gray"
        var svg4 = document.getElementById("svg4")
        svg4.style.fill = "gray"
        var svg5 = document.getElementById("svg5")
        svg5.style.fill = "gray"
        var svg6 = document.getElementById("svg6")
        svg6.style.fill = "gray"
        isDarkMode = true
    }
}


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(a => {
      a.classList.remove('highlight');
      if (a.getAttribute('href').slice(1) === current) {
        a.classList.add('highlight');
      }
    });
  });




// MUSIC


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let musicPlay = document.querySelector('#musicPlay');
const music = new Audio('music.mp3');
let musicPause = true
musicPlay.addEventListener("click",function(){
    if(musicPause ){
       
        music.play()
        musicPause  = false
    }else{
        music.pause()
        musicPause  = true
    }
   
})








