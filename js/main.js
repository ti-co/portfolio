
const source = document.getElementById('projectsTemp').innerHTML;
const template = Handlebars.compile(source);

const context = {
  featuredProjects: [
    {
      title: 'Jamming App (SPA)',
      image: "./resources/images-high/jamming.jpg",
      image2: "./resources/images-square/jamming.jpg", 
      what: "The Jamming app lets connect to Spotify and find & save the best tracks to your Spotify playlists.",
      frameworks: 'HTML, CSS, React.js, Javascript',
      how: "The user signs in to Spotify through Oauth authentification and can search for music by conncecting to the Spotify API. The user can also add tracks to a playlist, and if desired name and save this list in Spotify. The main functionality gets organised in app.js, that makes get and post requests to the Spotify API in Util/Spotify.js on the one hand, and renders the searchbar, playlist and searchresults (in turn rendering TrackList.js and Track.js) components.",
      weblink: "https://ti-co.github.io/jamming/",
      repolink: "https://github.com/ti-co/jamming",
      javascript: true
    },
    {
      title: 'Liemur Lissa - Visual Artist Portofolio Site',
      image: "./resources/images-high/liemurlissa.jpg",
      image2: "./resources/images-square/liemurlissa.jpg", 
      what: "I developed a Website for a painter and video-editor to showcase her work.",
      frameworks: 'HTML, CSS, Bootstrap, Handlebars.js, Javascript',
      how: "This website combines Bootstrap with tailor-made components and functionality in plain javascript. The main JS functionality targets the interactive content of the sliders and modal/popup, and the animation effects related to it. Additional functionality was added to extend the smooth scrolling effect to IOS devices and to ensure a tailor-made spacing and lay-out.<br><br> Initial rendering now happens with a Handlebars.js template, while the idea is to re-write the whole website in React.js and connect the front-end to an Express.js back-end.",    
      weblink: "https://ti-co.github.io/Liemur-Lissa-Art/",
      repolink: "https://github.com/ti-co/Liemur-Lissa-Art",
      javascript: true
    },
    {
      title: 'Ravenous App (SPA)',
      image: "./resources/images-high/ravenous.jpg",
      image2: "./resources/images-square/ravenous.jpg", 
      what: "The Ravenous app lets you find your favourite food places by location.",
      frameworks: 'HTML, CSS, React.js, Javascript',
      how: "The app's functioning is based around 4 React components: the searchbar passes search terms entered by the user to app.js, who in turn uses these to fetch information from the YELP API (in Yelp.js). A list of business is returned and rendered through passing the relevant information down to the BusinessList and Business components. <br><br> * please click on the Heroku CORS link in console in case the search does not render any results to activate demo permissions.",
      weblink: "https://ti-co.github.io/ravenous/",
      repolink: "https://github.com/ti-co/ravenous",
      javascript: true
    },
    {
      title: 'Boss Machine',
      image: "./resources/images-high/boss.jpg",
      image2: "./resources/images-square/boss.jpg", 
      what: "The Boss machine is a software to structure your million dollar ideas.",
      frameworks: 'HTML, CSS, React.js, Express.js, Node.js',
      how: 'The Boss Machine is a practice project to combine Routing in Express.js with React components. This app lets the user create, save, delete and update ideas and tasks. The app is working offline, and needs some fixing to connect front-end and back-end in production (Heroku).',    
      weblink: "https://fierce-plateau-61680.herokuapp.com/#/",
      repolink: "https://github.com/ti-co/boss-machine",
      javascript: false
    },
    { 
      title: 'Adhoc - bootstrap project',
      image: "./resources/images-high/adhoc.jpg",
      image2: "./resources/images-square/adhoc.jpg", 
      what: "Front-end design for a company-website offering administrative services.",
      frameworks: 'HTML, CSS, Bootstrap',
      how: "I used the Bootstrap grid system and bootstrap components and spacing shorthands.",    
      weblink: "https://ti-co.github.io/practice/adhoc/",
      repolink: "https://github.com/ti-co/practice",
      javascript: false
    }, 
    {
      title: 'Fotomatic Store',
      image: "./resources/images-high/fotomatic.jpg",
      image2: "./resources/images-square/fotomatic.jpg", 
      what: "Front-end design for a company-website selling photgraphic equipment.",
      frameworks: 'HTML, CSS',
      how: "Practice project on how to use CSS Flexbox.",    
      weblink: "https://ti-co.github.io/practice/fotomatic/",
      repolink: "https://github.com/ti-co/practice",
      javascript: false
    }, 
    {
      title: 'Local Library',
      image: "./resources/images-high/locallibrary.jpg",
      image2: "./resources/images-square/locallibrary.jpg", 
      what: "Users can create, update, delete and see information available in a local library.",
      frameworks: 'HTML, CSS, MongoDB, Node.js, Express.js',
      how: "This is a back-end practice project (tutorial by MDN) on how to build an app with Express.js. The app is connected to a database in MongoDB, and is filled with some items for the book, bookinstance, author, and genre models. Routes are build to provide for GET, POST, PUT, and DELETE requests for all models in the app.",    
      weblink: "https://github.com/ti-co/library-express-app",
      repolink: "https://guarded-beach-12591.herokuapp.com/catalog",
      javascript: false
    }
  ],

  projects: [
    {
      title: 'Local Library',
      image: "./resources/images-wide/locallibrary.jpg",
      image2: "./resources/images-square/locallibrary.jpg", 
      what: "Users can create, update, delete and see information available in a local library.",
      frameworks: 'HTML, CSS, MongoDB, Node.js, Express.js',
      how: "This is a back-end practice project (tutorial by MDN) on how to build an app with Express.js. The app is connected to a database in MongoDB, and is filled with some items for the book, bookinstance, author, and genre models. Routes are build to provide for GET, POST, PUT, and DELETE requests for all models in the app.",    
      weblink: "https://github.com/ti-co/library-express-app",
      repolink: "https://guarded-beach-12591.herokuapp.com/catalog",
      javascript: false
    },
    {
      title: 'Travel Blog - Typography',
      image: "./resources/images-wide/travelBlog.jpg",
      image2: "./resources/images-square/travelblog.jpg", 
      what: "Travel blogger Aoife Donleavy tells us about her journey through the Great Sahara.",
      frameworks: 'HTML, CSS',
      how: 'In this travelblog I experimented with typography & how to import fonts from external libraries/sources. The design is in plain HTML/CSS',    
      weblink: "https://ti-co.github.io/practice/travelblog/",
      repolink: "https://github.com/ti-co/practice",
      javascript: false
    },
    { 
      title: 'Adhoc - bootstrap project',
      image: "./resources/images-wide/adhocCards.jpg",
      image2: "./resources/images-square/adhoc.jpg", 
      what: "Front-end design for a company-website offering administrative services.",
      frameworks: 'HTML, CSS, Bootstrap',
      how: "I used the Bootstrap grid system and bootstrap components and spacing shorthands.",    
      weblink: "https://ti-co.github.io/practice/adhoc/",
      repolink: "https://github.com/ti-co/practice",
      javascript: false
    }, 
    {
      title: 'Paintstore - CSS & Colors',
      image: "./resources/images-wide/paintStore_blue.jpg",
      image2: "./resources/images-square/paintstore.jpg", 
      what: "Front-end design for a company-website selling paint materials.",
      frameworks: 'HTML, CSS',
      how: "Practice project on how to apply styles/layout and colors with CSS.",    
      weblink: "https://ti-co.github.io/practice/paintstore/",
      repolink: "https://github.com/ti-co/practice",
      javascript: false
    },
    {
      title: 'Fotomatic Store',
      image: "./resources/images-wide/fotomaticBanner.jpg",
      image2: "./resources/images-square/fotomatic.jpg", 
      what: "Front-end design for a company-website selling photgraphic equipment.",
      frameworks: 'HTML, CSS',
      how: "Practice project on how to use CSS Flexbox.",    
      weblink: "https://ti-co.github.io/practice/fotomatic/",
      repolink: "https://github.com/ti-co/practice",
      javascript: false
    },
    {
      title: 'Liemur Lissa - Visual Artist Portofolio Site',
      image: "./resources/images-wide/liemurlissa2.jpg",
      image2: "./resources/images-square/liemurlissa.jpg", 
      what: "I developed a Website for a painter and video-editor to showcase her work.",
      frameworks: 'HTML, CSS, Bootstrap, Handlebars.js, Javascript',
      how: "This website combines Bootstrap with tailor-made components and functionality in plain javascript. The main JS functionality targets the interactive content of the sliders and modal/popup, and the animation effects related to it. Additional functionality was added to extend the smooth scrolling effect to IOS devices and to ensure a tailor-made spacing and lay-out.<br><br> Initial rendering now happens with a Handlebars.js template, while the idea is to re-write the whole website in React.js and connect the front-end to an Express.js back-end.",    
      weblink: "https://ti-co.github.io/Liemur-Lissa-Art/",
      repolink: "https://github.com/ti-co/Liemur-Lissa-Art",
      javascript: true
    },
    {
      title: 'Ravenous App (SPA)',
      image: "./resources/images-wide/ravenous_1.jpg",
      image2: "./resources/images-square/ravenous.jpg", 
      what: "The Ravenous app lets you find your favourite food places by location.",
      frameworks: 'HTML, CSS, React.js, Javascript',
      how: "The app's functioning is based around 4 React components: the searchbar passes search terms entered by the user to app.js, who in turn uses these to fetch information from the YELP API (in Yelp.js). A list of business is returned and rendered through passing the relevant information down to the BusinessList and Business components. <br><br> * please click on the Heroku CORS link in console in case the search does not render any results to activate demo permissions.",
      weblink: "https://ti-co.github.io/ravenous/",
      repolink: "https://github.com/ti-co/ravenous",
      javascript: true
    },
    {
      title: 'Jamming App (SPA)',
      image: "./resources/images-wide/jamming_1.jpg",
      image2: "./resources/images-square/jamming.jpg", 
      what: "The Jamming app lets connect to Spotify and find & save the best tracks to your Spotify playlists.",
      frameworks: 'HTML, CSS, React.js, Javascript',
      how: "The user signs in to Spotify through Oauth authentification and can search for music by conncecting to the Spotify API. The user can also add tracks to a playlist, and if desired name and save this list in Spotify. The main functionality gets organised in app.js, that makes get and post requests to the Spotify API in Util/Spotify.js on the one hand, and renders the searchbar, playlist and searchresults (in turn rendering TrackList.js and Track.js) components.",
      weblink: "https://ti-co.github.io/jamming/",
      repolink: "https://github.com/ti-co/jamming",
      javascript: true
    },
    {
      title: 'Boss Machine',
      image: "./resources/images-wide/boss.jpg",
      image2: "./resources/images-square/boss.jpg", 
      what: "The Boss machine is a software to structure your million dollar ideas.",
      frameworks: 'HTML, CSS, React.js, Express.js, Node.js',
      how: 'The Boss Machine is a practice project to combine Routing in Express.js with React components. This app lets the user create, save, delete and update ideas and tasks. The app is working offline, and needs some fixing to connect front-end and back-end in production (Heroku).',    
      weblink: "https://fierce-plateau-61680.herokuapp.com/#/",
      repolink: "https://github.com/ti-co/boss-machine",
      javascript: false
    }
  ] 
};

const compiledHtml = template(context);
const displayFrame = document.getElementById('frame');
displayFrame.innerHTML = compiledHtml;

window.requestAnimationFrame = window.requestAnimationFrame
|| window.mozRequestAnimationFrame
|| window.webkitRequestAnimationFrame
|| window.msRequestAnimationFrame
|| function(f){return setTimeout(f, 1000/60)} // simulate calling code 60 

window.cancelAnimationFrame = window.cancelAnimationFrame
|| window.mozCancelAnimationFrame
|| function(requestID){clearTimeout(requestID)} //fall back

const frameholders = document.getElementsByClassName('frameholder');
const sliders = document.getElementsByClassName('slider');
const q = sliders.length;
const next = document.getElementsByClassName('next');
const prev = document.getElementsByClassName('prev');
const about = document.getElementById('about-me');
const footer = document.getElementById('footer');
const navBar = document.getElementById('navbar');
const closedNavHeight = navBar.offsetHeight; 

// Get the modal elements
const modal = document.getElementById("myModal");
const modalContent = document.getElementById('modal-content');
const crosses = document.getElementsByClassName("close");


const z = window.matchMedia("(min-width: 600px)");
const y = window.matchMedia("(max-width: 800px)");
const x = window.matchMedia("(min-width: 800px)");

let start; 
let dist;
const duration = 600; 
let n = [];
let m = []; 

const arrays = [context.featuredProjects, context.projects]; 
const heightRatios = [1, 0.5]
const indexes = [];


const setSlides = () => {
  for (let j = 0; j < q; j++){
    const slider = sliders[j];
    const array = arrays[j];
    const slides = slider.getElementsByClassName("slide");
    let dif = 0; 
    array.length > 4 ? dif = 10 - slides.length : dif = 1;
    indexes.push([]);
    let index = indexes[j];
    n.push(0);
    m.push(0);
    for (let i = 0; i < array.length; i++) {
      index.push(i);
      if (y.matches) {
        showSlides(i, index[i], slider, array);
      }
    };  
    if (x.matches) {
      if (dif > 0) {
        for (let p = 0; p < dif; p++) {
          let temp = slider.firstElementChild.cloneNode(true);
          sliders[j].appendChild(temp);
        };
      } else if (dif < 0) {
          for (let k = 0; k > dif; k--) {
            slider.removeChild(slider.lastElementChild); 
          } 
        }; 
    switchSlides(-1, index, slider, array);  
    };
  }
};
setSlides();

let timer;
function showSlides(slideIndex, cardIndex, slider, array) {
  const slide = slider.children[slideIndex];
  const card = array[cardIndex]; 
  slide.children[0].children[0].src = card.image;
  slide.children[1].children[0].innerHTML = `${card.title}`;
  slide.children[1].children[1].innerHTML = `Tech stack: ${card.frameworks}.`;
  slide.addEventListener("click", function() {
    modalContent.children[1].children[0].children[0].innerHTML = card.title;
    modalContent.children[1].children[0].children[1].innerHTML = card.what;
    modalContent.children[1].children[0].children[2].innerHTML = `Tech Stack: ${card.frameworks}.`;
    modalContent.children[1].children[0].children[3].innerHTML = card.how;
    modalContent.children[1].children[0].children[4].children[0].href = card.weblink;
    modalContent.children[1].children[0].children[5].children[0].href = card.repolink;
    modalContent.children[1].children[1].children[0].src = card.image2;
    modal.style.display = "flex";
  });
}

// When the user clicks on (x), close the modal
for (let i = 0; i< crosses.length; i++) {
  crosses[i].onclick = function() {
    modal.style.display = "none";    
  }
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function switchSlides(num, slindex, slider, array) {
  let slides = slider.getElementsByClassName('slide');
  const diff = slides.length - array.length;
  let sl = slindex.length;
  for (let i = 0; i < sl; i++) {
    slindex[i] += num; 
    if (slindex[i] >= sl) {slindex[i] -= sl};
    if (slindex[i] < 0) {slindex[i] += sl};
    if (y.matches || diff >= 0) {
      showSlides(i, slindex[i], slider, array);
    } 
  };
  for (let p = 0; p < diff; p++) {
    newIndex = p+array.length;
    showSlides(newIndex, slindex[p], slider, array);
  };
  if (diff < 0) {
    for (let k = 0; k < 10; k++) {
      showSlides(k, slindex[k], slider, array);
    };
  }
}; 

//section with media queries
function resetSlides() {
  if (x.matches) {
    for (let j = 0; j < q; j++) {
      let slider = sliders[j];
      const slides = slider.getElementsByClassName("slide");
      const index = indexes[j];
      let diff = 0; 
      slides.length > 4 ? diff = 10 - index.length : diff = 1;
      for (let i=0; i < index.length; i++) {
        index[i] = i;
        n[i] = 0; 
        m[i] = 0;
      }      
      if (diff > 0) {
        for (let p = 0; p < diff; p++) {
          let temp = slider.firstElementChild.cloneNode(true);
          slider.appendChild(temp);
          newIndex = p+index.length;
        }
      } else if (diff < 0) {
          for (let k = 0; k > diff; k--) {
            slider.removeChild(slider.lastElementChild); 
          };
        }
      switchSlides(-1, indexes[j], sliders[j], arrays[j]) 
    }; 
  };
};

function reswipe () {
  if (y.matches) {
    for (let i=0; i<q; i++) {
      const slindex = indexes[i];
      let slider = sliders[i];
      const slides = slider.getElementsByClassName("slide");
      const dif = slides.length - arrays[i].length;
      for (let j=0; j<dif; j++) {
        slider.removeChild(slider.lastElementChild);
      }
      for (let k = 0; k > dif; k--) {
          let temp = slider.firstElementChild.cloneNode(true);
          slider.appendChild(temp);
        };
      if (n[i] > 0) {
        slidePlus(-3,i);
      }
      switchSlides(1, slindex, slider, arrays[i]); 
    } 
  }
};

const setSliderWidth = () => {
  const windowWidth = document.documentElement.clientWidth;
  
  for (let i=0; i<q; i++) {
    let l = arrays[i].length;
    if (x.matches) {
      if (l > 4) {
        l=10
      } else if (l <= 4) 
        {l++};
      sliders[i].style.width = `${23.5*l}%`;
      } else if (z.matches) {
        sliders[i].style.width = `${32*l}%`;
        sliders[i].style.paddingRight = '45px';
        } else {
          sliders[i].style.width = `${68*l}%`;
          sliders[i].style.paddingRight = '45px';
          };  
  }

  let widthLeft = sliders[0].children[0].getBoundingClientRect().right; 
  let positionSlideFive = sliders[0].children[5].getBoundingClientRect().x;
  let widthRight = windowWidth - positionSlideFive;

  for (let i=0; i<q; i++) {
    let slideWidth = sliders[i].children[0].offsetWidth;
    let slideHeight = slideWidth*heightRatios[i];
    let cards = sliders[i].getElementsByClassName('card');
    for (let j = 0; j < cards.length; j++) {     
      cards[j].children[0].style.height = `${slideHeight}px`; 
    }

    let forwards = frameholders[i].getElementsByClassName('forwards');
    forwards[0].style.width = `${widthRight}px`;
    forwards[0].style.left = `${positionSlideFive}px`;
    let spaceRight = forwards[0].getBoundingClientRect().x;
    let margin = spaceRight - positionSlideFive; 
    forwards[0].style.left = `${positionSlideFive - margin}px`;

    let backwards = frameholders[i].getElementsByClassName('backwards');
    let spaceLeft = backwards[0].getBoundingClientRect().x;
    backwards[0].style.width = `${widthLeft}px`;
    backwards[0].style.marginLeft = `-${spaceLeft}px`;
  };
  
  if (x.matches) {
    const logo = document.getElementById('logoInNavbar');
    let spaceLeft = logo.getBoundingClientRect().x; 
    logo.style.marginLeft = `${widthLeft + 6 - spaceLeft}px`;

    const navbarNav = document.getElementById('navbar-nav');
    let spaceRight = navbarNav.getBoundingClientRect().right;
    let margin = windowWidth - spaceRight; 
    navbarNav.style.marginRight = `${widthRight - margin}px`;
    
    const sliderTitels = document.getElementsByClassName('sliderTitle');
    spaceLeft = sliderTitels[0].getBoundingClientRect().x; 
    for (let i=0; i<sliderTitels.length; i++) {
      sliderTitels[i].style.marginLeft = `${widthLeft + 6 - spaceLeft}px`;
    };

    about.style.width = `${windowWidth - widthRight - widthLeft - 12}px`;
    spaceLeft = about.getBoundingClientRect().x
    about.style.marginLeft = `${widthLeft + 6 - spaceLeft}px`; 
  }
};


function showCard() {
  if (x.matches) {
    for (let k = 0; k < q; k++) {
      sliders[k].children[0].style.visibility = 'hidden';
    }
  } else {
    for (let k = 0; k < q; k++) {
      sliders[k].children[0].style.visibility = 'visible'; 
    }
  }
};

z.addEventListener("change", (e) => {
  setSliderWidth();
});
y.addEventListener("change", (e) => {
  reswipe();
});
x.addEventListener("change", (e) => {
  resetSlides();
  showCard();
  setSliderWidth();
});
window.onresize = setSliderWidth();
showCard();


function slidePlus (num, index) {
  const slider = sliders[index];
  const array = arrays[index];
  let l = 10;
  const slindex = indexes[index];
  const prevButton = prev[index];
  if (!slider.classList.contains('sliding')) {
    setTimeout( () => {
      for (let i=0; i<sliders.length; i++) {
        sliders[i].classList.add('sliding');
      };
    }, 5) 
    if (num > 0 && n[index] > 0) {
        switchSlides(num, slindex, slider, array)
    } else if (num < 0 && n[index] === 0) {
        switchSlides(num, slindex, slider, array);
      };
    requestAnimationFrame(() => {
      if (num > 0) {
        slideRight(num);
        n[index] ++;
        m[index] ++; 
        if (m[index] === 1) { 
          const timer = setTimeout( () => {  
            prevButton.style.visibility = 'visible';    
            prev[index].style.opacity = '1';
            prev[index].style.transition = 'opacity 100ms ease-in 0ms';
          }, 550);
          frameholders[index].addEventListener('mouseout', () => {
            clearTimeout(timer);
          });  
        };
      } else {
        slideLeft(num);
        n[index] = 0;
      };    
  });
  } else {
    return
  }

  
  const easeOut = progress => Math.pow(--progress, 1) + 1; 

  function slideRight(num) {
    timestamp = new Date().getTime();
    if (start === undefined) {start = timestamp};
    const fraction = 100/l;
    if (dist === undefined) {dist = fraction*num};
    const f = Math.abs(dist/duration);
    let elapsed = timestamp - start;
    let progress = elapsed/duration;
    const easing = easeOut(progress);
    const refactor = easing*f;
    slider.style.transform = 'translateX(-' + Math.min(refactor*elapsed, dist) + "%)";
    if (elapsed < duration) {
      requestAnimationFrame(slideRight);
    } else {
      for (let i=0; i<sliders.length; i++) {
        sliders[i].classList.remove('sliding');
      }
      dist = undefined;
      start = undefined;
      slider.style.position = 'relative';
      slider.children[0].style.visibility = 'visible';
      m[index] ++;
      if (slider.children[0].children[1].tagName === 'VIDEO') {
        slider.children[5].children[1].setAttribute('controls', true);
      }
    };
  }

  function slideLeft(num) {
    timestamp = new Date().getTime();
    if (start === undefined) {start = timestamp};
    const fraction = 100/l;
    if (dist === undefined) {dist = fraction*num};
    const f = Math.abs(dist/duration);
    let elapsed = timestamp - start;
    let progress = elapsed/duration;
    const easing = easeOut(progress);
    const refactor = easing*f;
    slider.style.transform = 'translateX(' + Math.min(dist+(refactor*elapsed), 0) + "%)";
    if (elapsed < duration) {
      requestAnimationFrame(slideLeft);
    } else {
      for (let i=0; i<sliders.length; i++) {
        sliders[i].classList.remove('sliding');
      } 
      dist = undefined;
      start = undefined;
      slider.style.position = 'relative';
    }
  }
};
  

const showButtons = (j) => { 

  next[j].addEventListener('mouseenter', () => {
    next[j].style.visibility = 'visible';
    next[j].style.opacity = '1';
    m[j] > 0 ?  prev[j].style.visibility = 'visible' : 'hidden'; 
    m[j] > 0 ?  prev[j].style.opacity = '1': '0';
  });

  prev[j].addEventListener('mouseenter', () => {
    prev[j].style.visibility = 'visible';
    prev[j].style.opacity = '1';
    next[j].style.visibility = 'visible';
    next[j].style.opacity = '1'; 
  });
 
  next[j].addEventListener('mouseleave', () => {
    next[j].style.visibility = '0';
    next[j].style.opacity = '0';
    prev[j].style.visibility = '0';
    prev[j].style.opacity = '0';
  });

  prev[j].addEventListener('mouseleave', () => {
    prev[j].style.visibility = '0';
    prev[j].style.opacity = '0';
    next[j].style.visibility = '0';
    next[j].style.opacity = '0';
  });

}  

const zoomCard = (j) => {
  let i;
  let timer;
  const frameHeight = frameholders[j].offsetHeight;
  let coll = sliders[j].getElementsByClassName("card");
  for (i = 0; i < coll.length; i++) {
    let _this = coll[i];
    let content = coll[i].children[1];
    
    if (y.matches && _this.children[1].tagName === 'VIDEO') {
      const video = _this.children[1];
      video.addEventListener("playing", function() { 
      _this.children[0].classList.add('entered');
      });
    } else if (x.matches) {
        _this.addEventListener("mouseenter", function() {
        coll.length > 5 ? next[j].style.visibility = 'visible': '';
        m[j] > 0 ? prev[j].style.visibility = 'visible': 'hidden';
        next[j].style.opacity = '1';
        next[j].style.transition = 'opacity 150ms ease-in 10ms';
        prev[j].style.opacity = '1';
        if (m[j] > 1) {
          prev[j].style.transition = 'opacity 150ms ease-in 10ms';
        } else {
          prev[j].style.transition = 'opacity 650ms ease-in 100ms';
        };
        let spaceY = _this.getBoundingClientRect().y;
        const windowHeight = document.documentElement.clientHeight;  
        let bottomMarginY = windowHeight - _this.getBoundingClientRect().bottom; 
        if (spaceY > 45 && bottomMarginY > 0){
          timer = setTimeout( () => {
            zoom();    
            }, 750);
        }
        if (n[j] > 0) {
          this === coll[5] ?  this.style.transformOrigin = 'left center' : this.style.tranformOrigin = 'center center'; 
          this === coll[8] ?  this.style.transformOrigin = 'right center' : this.style.tranformOrigin = 'center center';
          this === coll[4] || this === coll[9] ? clearTimeout(timer) : setTimeout(timer);
        } else {
          this === coll[1] ?  this.style.transformOrigin = 'left center' : this.style.tranformOrigin = 'center center'; 
          this === coll[4] ?  this.style.transformOrigin = 'right center' : this.style.tranformOrigin = 'center center';
          this === coll[0] || this === coll[5] ? clearTimeout(timer) : setTimeout(timer);
        }  
      });

      const zoom = () => {
        _this.style.zIndex = '100001';
        sliders[j].style.zIndex = '100001';
        content.style.display = "block";
        _this.style.transition = 'transform 800ms ease-out 20ms';
        _this.style.transform = 'scale(1.2)';  
        let slideHeight = frameholders[j].offsetHeight;
        sliders[j].style.marginBottom = `-${Math.abs(frameHeight-slideHeight)}px`; 
        next[j].style.visibility = 'hidden';
        prev[j].style.visibility = 'hidden';
        prev[j].style.opacity = '0';
        next[j].style.opacity = '0';
      }

      _this.addEventListener("mouseleave", function() {
        clearTimeout(timer);
        content.style.display = "none";
        _this.style.transition = 'transform 100ms ease-out 20ms';
        _this.style.transform = 'scale(1)'; 
        sliders[j].style.marginBottom = '0';
        _this.style.zIndex = '0';
        sliders[j].style.zIndex = '0';
        next[j].style.visibility = 'hidden';
        prev[j].style.visibility = 'hidden';
        prev[j].style.opacity = '0';
        next[j].style.opacity = '0';
      });
    };
  }
};

for (j=0; j < sliders.length; j++) {
  let overflow = window.getComputedStyle(frameholders[j]).overflowX; 
  if (overflow !== 'scroll') {
    if (arrays[j].length > 4) {
      showButtons(j);
    };
    zoomCard(j); 
  }  
};




smoothScroll();
function smoothScroll() {
	var links = document.getElementsByTagName('a');
	for (let i = 0; i < links.length; i++) {
		const link = links[i];
		if ((link.href && link.href.indexOf('#') != -1) && ((link.pathname == location.pathname) || ('/' + link.pathname == location.pathname)) && (link.search == location.search)) {
			link.onclick = scrollAnchors;
		}
	}
}

function scrollAnchors(e, respond = null) {
  let scrollDist; 
  let progress;
  let prevTime = 0; 
  let currentLapse;
  let refactor;e
  
  var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	let distanceToTop = el => {
    if (navBar.classList.contains('sticky-top') && targetAnchor !== navBar) {
      return Math.floor(el.getBoundingClientRect().top - closedNavHeight);
    } else {
      return Math.floor(el.getBoundingClientRect().top); 
      }
  }
	e.preventDefault();
  scrollDist = distanceToTop(targetAnchor); 
  const maxScrollDist = footer.getBoundingClientRect().bottom - window.innerHeight + 35; 
  maxScrollDist < scrollDist ? scrollDist = maxScrollDist : scrollDist = scrollDist;
  window.requestAnimationFrame(() => {
    scrollSmooth()  
  });
  
  function scrollSmooth(timestamp) {
    let atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    let atTop = window.pageYOffset <= 0; 
    let arrived;
    let noMoreScroll;
    prevTime = timestamp;
    timestamp = new Date().getTime();
    if (start === undefined) {start = timestamp};
    if (dist === undefined) {
      scrollDist > 0? dist = scrollDist + closedNavHeight : dist = scrollDist - closedNavHeight;
    };
    if (progress === undefined) {progress = 0};
    const scrollDuration = Math.max(Math.abs(Math.floor(dist/2.4))+200, 300); 
    let elapsed = timestamp - start;
    prevTime? currentLapse = timestamp - prevTime : currentLapse = 15 ; 
    if (Math.abs(progress) < Math.abs(dist)) {
      let factor = dist/scrollDuration*currentLapse; 
      let progression = elapsed/scrollDuration;
      const easing = easeInOut(progression);
      refactor = factor*easing; 
    } else {
      refactor = dist/scrollDuration*15;
    }
       
    dist > 0? f = Math.min(refactor, distanceToTop(targetAnchor)) : f = Math.max(refactor, distanceToTop(targetAnchor)); 
    window.scrollBy({
      top: f,
      left: 0,
    });
    progress += f;
    dist>0? arrived = distanceToTop(targetAnchor) <= 0 : arrived = distanceToTop(targetAnchor) >= 0 ; 
    dist > 0? noMoreScroll = atBottom : noMoreScroll = atTop; 
    if (!arrived && !noMoreScroll) {
      window.requestAnimationFrame (()=>{
        scrollSmooth(timestamp);
      });   
    } else {
        dist = undefined;
        start = undefined;
        window.cancelAnimationFrame(scrollSmooth);
      }   
  }

  function easeInOut(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  }
}

const toggleNavButton = () => {
  if (y.matches) {
    const navButton = document.getElementById('navbutton'); 
    navButton.click();
  }  
}




 
