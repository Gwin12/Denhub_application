// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});



//reveal effect
window.addEventListener('scroll', reveal);

function reveal() {
   var reveals = document.querySelectorAll('.reveal');

   for(var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if(revealtop < windowheight - revealpoint) {
         reveals[i].classList.add('active');
      }
      else {
         reveals[i].classList.remove('active');
      }
   }
}


//for login show password
let state = false;
function showPassword(){
   if (state) {
      document.getElementById("exampleInputPassword1").setAttribute("type", "password");
      state =false;
   }
   else {
      document.getElementById("exampleInputPassword1").setAttribute("type", "text");
      state =true;
   }
}


















const actionLog = document.querySelector(".action-log");
const comedyLog = document.querySelector(".comedy-log");
const horrorLog = document.querySelector(".horror-log");
const genre = document.querySelector(".genre-holder");


const genres = [
   {
      imgURL: "img/3.jpg",
      title: "comedy",
      genreType: "-- action",
      body: "Some quick example text to build on the Movie title and make up the bulk of the card's content.",
      modalID: "#exampleModal1"
   },
   {
      imgURL: "img/3.jpg",
      title: "horror",
      genreType: "-- horror",
      body: "Some quick example text to build on the Movie title and make up the bulk of the card's content.",
      modalID: "#exampleModal2"
   },
   {
      imgURL: "img/3.jpg",
      title: "action",      
      genreType: "-- comedy",
      body: "Some quick example text to build on the Movie title and make up the bulk of the card's content.",
      modalID: "#exampleModal3"
   },
   {
      imgURL: "img/3.jpg",
      title: "Movie title",
      genreType: "-- action",
      body: "Some quick example text to build on the Movie title and make up the bulk of the card's content.",
      modalID: "#exampleModal4"
   },
   {
      imgURL: "img/3.jpg",
      title: "Movie title",
      genreType: "-- comedy",
      body: "Some quick example text to build on the Movie title and make up the bulk of the card's content.",
      modalID: "#exampleModal5"
   },
   {
      imgURL: "img/3.jpg",
      title: "Movie title",
      genreType: "-- comedy",
      body: "Some quick example text to build on the Movie title and make up the bulk of the card's content.",
      modalID: "#exampleModal6"
   }
   
]



function addGenreChildren(root, children){
   let genreBody = "";
   
   children.map(child=>{
      const template = `<div class="col-sm-6 col-md-4 col-lg-3 card-log-padding ">
                           <div class="card card-log">
                           <img src="${child.imgURL}" class="card-img-top" alt="...">
                           <div class="card-body">
                              <h5 class="card-title movie-title-log">${child.title}</h5><span class="typeofgenre">${child.genreType}</span>
                              <p class="card-text lead card-text-log">${child.body}</p>
                              <a type="button" class="btn btn-secondary card-log-btn" data-toggle="modal"
                                 data-target="${child.modalID}">More Info <i class="fa fa-angle-up dropdown-toggle"
                                 aria-hidden="true"></i></a>
                           </div>
                           </div>
                        </div>`;
      genreBody += template;
                        
                        
   })
   root.innerHTML = genreBody;
}

addGenreChildren(genre, genres);

actionLog.addEventListener('click', ()=>{
   addGenreChildren(genre, [...genres].filter(g=>g.genreType.toLowerCase() === "-- action"));
})

comedyLog.addEventListener('click', ()=>{
   addGenreChildren(genre, [...genres].filter(g=>g.genreType.toLowerCase() === "-- comedy"));
   
})

horrorLog.addEventListener('click', ()=>{
   addGenreChildren(genre, [...genres].filter(g=>g.genreType.toLowerCase() === "-- horror"));

})


//for search
/*const searchLog = document.getElementById('search-log');
const searchAddon = document.querySelector(".search-addon");
const removeAddon = document.querySelector(".search-remove-main");
const removeAddonn = document.querySelector(".search-remove-footer");

searchLog.addEventListener('click', () => {
   searchAddon.insertAdjacentHTML('beforeend', `
   <div style="background-color: var(--clr-background);">
   <form action="" class="search-log fixed-top">
   <i class="fas fa-search search-log-search"></i>
   <input type="text" autofocus placeholder="What are you interested in?">
   <span ><i class="fas fa-times"></i></span>
   </form>
   </div>
   `)
   removeAddon.classList.add("search-blank-space")
   removeAddonn.classList.add("search-blank-space")
})*/

