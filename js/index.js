const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
    // NavBar 
let links = document.getElementsByTagName("a");
let index = 0;
for (property in siteContent.nav) {
    if (index < 6) {
        links[index].textContent = siteContent.nav[property];
        index++;
    }
}
// Beginning Content - Title and Image
let ctaText = document.getElementsByClassName("cta-text");
ctaText = ctaText[0].children;
index = 0;
for (property in siteContent.cta) {
    if (index < 2) {
        ctaText[index].textContent = siteContent.cta[property];
        index++;
    } else {
        document.getElementById("cta-img").src = siteContent.cta["img-src"];
    }
}

// Top half of content before the image 
let topContent = document.getElementsByClassName("top-content")[0].children;
// Put the text in one array
let topText = [siteContent["main-content"]["features-h4"],siteContent["main-content"]["features-content"],siteContent["main-content"]["about-h4"],siteContent["main-content"]["about-content"]];
let counter = 0;
// Iterate through both sections and its text nodes, while grabbing the text from the array
for (let i = 0; i < topContent.length; i++) {
  for (let j = 0; j < 2; j++) {
    topContent[i].children[j].textContent = topText[counter];
    counter++;
  }
}

let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];
let botContent = document.getElementsByClassName("bottom-content")[0].children;
let mainContent = siteContent["main-content"];
let botText = [];
counter = 0; 
for (property in mainContent) {
  if (counter > 4) {
    botText.push(mainContent[property]);
  }
  counter++;
}

counter = 0;
for (let i = 0; i < botContent.length; i++) {
  for (let j = 0; j < 2; j++) {
    botContent[i].children[j].textContent = botText[counter];
    counter++;
  }
}

let contact = document.getElementsByClassName("contact")[0].children;
counter = 0;
for (property in siteContent.contact) {
  contact[counter].textContent = siteContent.contact[property];
  counter++;
}
siteContent.contact.address = "123 Way 456 Street <br> Somewhere, USA";
contact[1].innerHTML = siteContent.contact.address;
let footer = document.getElementsByTagName("footer")[0].children;
footer[0].textContent = siteContent["footer"]["copyright"];

// Task 3
for (let i = 0; i < links.length; i++) {
  links[i].style.color = "green";
}
let nav = document.getElementsByTagName("nav")[0];
let newLink = document.createElement("a");
newLink.href = "http://facebook.com";
let text = document.createTextNode("Facebook");
newLink.appendChild(text);
nav.appendChild(newLink);
text = document.createTextNode("Twitter");
let newLink2 = document.createElement("a");
newLink2.href = "http://twitter.com";
newLink2.appendChild(text);
nav.prepend(newLink2);