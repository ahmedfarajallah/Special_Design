// Get Color Option From Local Storage
let mainColor = localStorage.getItem('color-option');

// Check If There Is A Value On Color Option At Local Storage 
if (mainColor !== null) {

    // Set The Main Color That We Got From Color Option On Local Storage 
    document.documentElement.style.setProperty('--main-color', mainColor);

            // Loop At All Element Have Active Class
            document.querySelectorAll(".colors-list li").forEach( element => {

                // Remove Active Class From All Li Elements
                element.classList.remove("active");

                // Add Class Active To Element That There Is In Local Storage
                if (element.dataset.color === mainColor) {
                    // Add Active Class
                    element.classList.add("active")
                };
    
            });
            
};




// Random Background Option
let backgroundOption = true ;

// Variable To Control The Interval Background 
let backgroundInterval ;



// Get Random Background Option From Local Storage
let randomBackgroundOption = localStorage.getItem("random-background");

// Check If There Is A Value In Background Option From Local Storage
if (randomBackgroundOption !== null) {
    
    if (randomBackgroundOption === 'true'){

        backgroundOption = true;

    }else {

        backgroundOption = false;

    }

    // Loop At All Element Have Active Class
    document.querySelectorAll(".random-background span").forEach( span => {

        //Remove All Active Class From All Random Background Span
        span.classList.remove("active");
    
    });

    //  Add Class Active To Element That There Is In Local Storage
    if (randomBackgroundOption === 'true' ) {
        // Add Active Class
        document.querySelector('.random-background .yes').classList.add('active');

    } else {
        document.querySelector('.random-background .no').classList.add('active');
    }

};



// Get Setting Box Element 
let settingBox = document.querySelector('.setting-box');

// Get Setting Icon-Container Element 
let settingIconContainer = document.querySelector('.icon-container');

// Get Setting Icon Element 
let settingIcon = document.querySelector('.setting-icon');

// Open Setting Box
settingIconContainer.onclick = () => {

    //Add Spin Class To Setting Icon Element
    settingIcon.classList.toggle('fa-spin');

    //Add Open Class To Setting Box Element
    settingBox.classList.toggle('open');

};




// Get li Colors Elements ( Switch Colors )
const colorsLi = document.querySelectorAll('.colors-list li');

// Loop On All List Items
colorsLi.forEach(li => {
    
    // Click On Every List Item
    li.addEventListener('click', (e) => {

        // Set Color On Root 
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        // Set Color Option On Local Storage
        localStorage.setItem('color-option', e.target.dataset.color);

        handleActive(e)

    });

});



// Get Random Background Button (Switch Background Images) 
const randomBackgroundButton = document.querySelectorAll(".random-background span");

// Loop On All Span
randomBackgroundButton.forEach((span) => {

    // Click On Random Background Items
    span.addEventListener('click', (s) => {

        handleActive(s);

        // Play Random Background
        if (s.target.dataset.background === "yes") {

            backgroundOption = true;
            randomizeBackground();

        localStorage.setItem("random-background",true);

        // Stop Random Background
        }else if(s.target.dataset.background === "no") {

            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("random-background",false);

        }

    });

});




// Select Landing Page Element
let landingPage = document.querySelector('.landing-page');

// Get Array Of Images
let imagesArray  = ["lan-01.jpg", "lan-02.jpg", "lan-03.jpg", "lan-04.jpg", "lan-05.jpg"];

function randomizeBackground() {

    if (backgroundOption === true) {

        backgroundInterval = setInterval( () => {

            //Get Random Number
            let randomNumber = Math.floor(Math.random() * imagesArray.length ) ;
        
            // Change Background Image URL
            landingPage.style.backgroundImage = "url('imgs/" + imagesArray[randomNumber] + "')" ; 
            
        }, 1000);

    };

};
randomizeBackground();



// Select Our Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop; // ارتفاع الصفحى فةق السيكشن اللي احنا عايزينه 1329

    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight; // طول السكشن نفسه

    // Window Height
    let windowHeight = this.innerHeight; // ارتفاع الويندو نفسه 923

    // Window Scroll Top
    let windowScrollTop = this.pageYOffset; // الارتفاع اثناء الاسكرول 
     
    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });

    }

};



// ############# Create Popup With The Images ############# 

// Get All Gallery Images 
let gallery = document.querySelectorAll(".gallery .imgs-box img");

// Loop On Gallery Images 
gallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // Create Overlay-Popup 
        let overlayPopup = document.createElement("div");
        // Add Class To Overlay Element
        overlayPopup.className = "overlay-popup";
        // Add Overlay Element To The Body
        document.body.appendChild(overlayPopup);

        // Create Popup Window
        let popupBox = document.createElement("div");
        // Add Class Name To PopupBox Element
        popupBox.className = "popup-box";

        if (img.alt !== null) {
 
            // Create H3( Heading ) Fo Popup Image
            let imageTitle = document.createElement("h3");
    
            // Get ImageTitle Content From Image Alternate
            let imageTitleContent = document.createTextNode(img.alt);

            // Add Image Title Content To H3
            imageTitle.appendChild(imageTitleContent);

            // Add H3 To Popup Box
            popupBox.appendChild(imageTitle);
    
        }

        // Create The Image
        let popupImage = document.createElement("img");
        //Set Image Source
        popupImage.src = img.src;

        // Add PopupImage To PopupBox
        popupBox.appendChild(popupImage);
        // Append PopupBox To Body
        document.body.appendChild(popupBox);

        // Create Close Span
        let closeButton = document.createElement("span");

        closeButton.className = "close-button" ;

        // Create Close Span Content
        let closeButtonText = document.createTextNode("X");

        // Add Close Button Text To Close Button
        closeButton.appendChild(closeButtonText);

        // Add Close Button To Popup Box
        popupBox.appendChild(closeButton);

    });

});

// Close Gallery Image Popup 
document.addEventListener('click', (e) => {

    if (e.target.className == "close-button") {

        // Remove Current Element
        document.querySelector(".popup-box").remove();
        // Remove Overlay Popup
        document.querySelector(".overlay-popup").remove();

    }

});




// Select All Links 
const allLinks = document.querySelectorAll(".links-list .link a");

// Select All Bullets 
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Function To Scroll To The Section That Clicked On Has Link
function scrollSections(element) {

    element.forEach(ele => {

        ele.addEventListener('click', (e) => {
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
                behavior: "smooth"
    
            });
    
        });
    
    });

}

scrollSections(allLinks);
scrollSections(allBullets);

function handleActive(ev) {

            // Loop At All Element Have Active Class
            ev.target.parentElement.querySelectorAll(".active").forEach( element => {

                // Remove Active Class From All Li Elements
                element.classList.remove("active");
    
            });
    
            // Add Class Active To Element That Clicked
            ev.target.classList.add("active");

}


// Select Nav Bullets
let navBullets = document.querySelector('.nav-bullets');

// Select Display Bullets 
let bulletsSpan = document.querySelectorAll(".display-bullets span");

let bulletLocalItem = localStorage.getItem("bullet-option");

if(bulletLocalItem !== null) {

    bulletsSpan.forEach(s => {

        s.classList.remove("active");
    });

    if(bulletLocalItem === "block") {

        navBullets.style.display = 'block';

        document.querySelector(".display-bullets .yes").classList.add("active");

    } else {

        navBullets.style.display = 'none';

        document.querySelector(".display-bullets .no").classList.add("active");

    }

}

bulletsSpan.forEach(s => {

        s.addEventListener("click", (e) => {
    
            if(s.dataset.display == "show"){

                navBullets.style.display = 'block';

                localStorage.setItem("bullet-option", "block");

            }else{

                navBullets.style.display = 'none';

                localStorage.setItem("bullet-option", "none");

            }

            handleActive(e);
    
        });

});


// Reset Options
document.querySelector(".reset-options").onclick = function() {

    localStorage.removeItem("color-option");
    localStorage.removeItem("random-background");
    localStorage.removeItem("bullet-option");

    window.location.reload();

}



let toggleBtn = document.querySelector(".toggle-menu");

let tLinks = document.querySelector(".links-list");

toggleBtn.onclick = function (e) {

    e.stopPropagation();

    this.classList.toggle("menu-active");

    tLinks.classList.toggle("open");

};

document.addEventListener('click', (e)=> {

    if(e.target !== toggleBtn && e.target !== tLinks) {

        if(tLinks.classList.contains("open")) {

            toggleBtn.classList.toggle("menu-active");

            tLinks.classList.toggle("open");

        }

    }

});


tLinks.onclick = function(e) {

    e.stopPropagation();

}