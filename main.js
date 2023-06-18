/* ---------------start header--------------------------- */

//select Elements
let logo = document.querySelector("header img");
let env = document.querySelector("header .eye");
let ul = document.querySelector("header ul");
let liAct = document.querySelectorAll("header ul li a");
let bars = document.querySelector("header .bars");
let removeBtn = document.querySelector("header .remove");

//Go to the start of the page when you click on logo
logo.addEventListener("click",()=>window.scroll(0,0));


//Go to the end of the page when you click on eye icon
env.onclick = function(){
    window.scroll(0,10000);
}


//change active class by click on nav
liAct.forEach(function(e){
    e.onclick = function(){
        liAct.forEach((ex)=>{
        ex.classList.remove("active");
        });
        e.classList.add("active");

    };

});

//change active class by scrolling

let sections = Array.from(document.body.children);
sections.splice(1,1);
sections.splice(sections.length - 1)


window.addEventListener("scroll",()=>{
    
    sections.forEach((section,index)=>{
    
    if(section.tagName.toLowerCase() !== "footer"){
        if(window.scrollY >= section.offsetTop - 100 && window.scrollY < sections[index + 1].offsetTop - 100){
            
            liAct.forEach((li)=>{
                li.classList.remove("active")
            });
    
            liAct[index].classList.add("active");
        }
    }
    
    });
});


//show navbar
bars.onclick = function(){
ul.classList.add("show");

};

//remove navbar
removeBtn.onclick = function(){
    ul.classList.remove("show");
}


/* ---------------end header--------------------------- */

/* ---------------start skills--------------------------- */


/* ---------------end skills--------------------------- */

//select elements
let ranges = document.querySelectorAll(".skills .range span");
let imgSkills = document.querySelector(".skills img");

//get "skills" + "services" sections from header part
let skillsSection = sections[1];
let servicesSection = sections[2];

//do animate range with scrolling in big screens
if(window.innerWidth <= 991){
manageWidth(imgSkills,120);
}
else{
manageWidth(skillsSection,300);
}

// function that manage widths of ranges
function manageWidth(section,numberOf){
    window.onscroll = function(){

        if(window.scrollY >= section.offsetTop - numberOf && window.scrollY < servicesSection.offsetTop){
            ranges.forEach((range)=>{
                range.style.width = range.dataset.width;
            });
        }
        else{
            ranges.forEach((range)=>{
                range.style.width = 0;
            });
        }
        
        };
}


/* ---------------start projects--------------------------- */

//create a special project star
let specials = document.querySelectorAll(".projects .info.special");

specials.forEach((sp)=>{

sp.style.position = "relative";

let starProject = document.createElement("i");
starProject.className = "fa-solid fa-star fa-flip";
sp.appendChild(starProject);
starProject.style.cssText = "position: absolute; top: 20px; right: 20px; color: yellow; font-size: 30px";

})

/* ---------------end projects--------------------------- */

