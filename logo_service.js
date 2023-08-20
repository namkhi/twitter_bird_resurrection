const svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 170.505 140.378\" style=\"width: 40px; height: 2rem;\"><path d=\"M453.826 412.806a70.337 70.337 0 0 1-20.209 5.54c7.265-4.354 12.844-11.25 15.471-19.466a70.437 70.437 0 0 1-22.345 8.538 35.136 35.136 0 0 0-25.683-11.11c-19.431 0-35.186 15.753-35.186 35.185 0 2.757.31 5.443.911 8.018-29.243-1.467-55.17-15.475-72.525-36.764a35.019 35.019 0 0 0-4.764 17.69c0 12.207 6.212 22.977 15.653 29.287a35.047 35.047 0 0 1-15.937-4.401c-.004.146-.004.294-.004.442 0 17.048 12.13 31.268 28.226 34.503a35.224 35.224 0 0 1-15.89.603c4.478 13.978 17.472 24.151 32.87 24.434-12.043 9.438-27.214 15.064-43.7 15.064-2.84 0-5.64-.168-8.393-.493 15.571 9.985 34.067 15.81 53.937 15.81 64.72 0 100.113-53.616 100.113-100.114 0-1.526-.034-3.043-.102-4.553a71.483 71.483 0 0 0 17.556-18.213z\" style=\"fill:#2aa9e0\" transform=\"translate(-282.32 -396.307)\"></path></svg>";

// window.addEventListener('load', switchLogo);

function popupLoader(){
    console.log("Document Loaded");
    const button = document.querySelector(".toggle-button");
    button.addEventListener('click', switchLogo);
    console.log("Button Loaded");
}

function switchLogo(){
    console.log("switching logo");
    const logo_svg = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div:nth-child(1) > div.css-1dbjc4n.r-dnmrzs.r-1vvnge1 > h1 > a > div > svg")
    console.log(logo_svg);

    if (logo_svg) {
        logo_svg.outerHTML = svg;
        console.log("Switched Logo successful");
        observer.disconnect();
    }

}

const observer = new MutationObserver(switchLogo);

observer.observe(document, {childList:true, subtree: true});






