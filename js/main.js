let menu = document.querySelector("#menu-btn");
let navbarlinks = document.querySelector("header .navbar .menu");
let head = document.querySelector("header");

menu.onclick = function(){
    menu.classList.toggle("fa-xmark");
    navbarlinks.classList.toggle("active");
}

window.onscroll = function(){
    menu.classList.remove("fa-xmark");
    navbarlinks.classList.remove("active");

    
    if(window.scrollY > 100){
        document.querySelector('header .navbar').classList.add('active');
        
    }else{
        document.querySelector('header .navbar').classList.remove('active');

    }
}

// banner heading
let home = document.querySelector('#home');


home.onmousemove = (e) =>{
    let homeImg = home.querySelector('.home-img');
    let x = (window.innerWidth - e.pageX * 2) /90;
    let y= (window.innerHeight - e.pageY * 2) /90;

    homeImg.style.transform = `translateX(${x}px) translateY(${y}px)`;
}



home.onmouseleave = () =>{
    let homeImg = home.querySelector('.home-img');
    
    homeImg.style.transform = `translateX(0px) translateY(0px)`;
}

// coundown
let dataOffset = (24*60*60*1000)*3;
let countDate = new Date().getTime() + dataOffset;

function countDown(){
    let now  = new  Date().getTime();
    let gap = countDate - now;

    let seconds = 1000;
    let minutes = seconds *60;
    let hours = minutes *60;
    let days = hours *24;

    let d = Math.floor(gap/ (days));
    let h = Math.floor((gap % (days))/ (hours));
    let m = Math.floor((gap % (hours))/ (minutes));
    let s = Math.floor((gap % (minutes))/ (seconds))

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function(){
    countDown();
},1000);




// loader -container

function loader(){
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload =fadeOut();

