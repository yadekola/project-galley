let galleryImages = document.querySelector(".gallery-img");
let getLatestOpenedImg;
let windowWidth =window.innerWidth;

if(galleryImages) {
    galleryImages.forEach(function(image, index) {
       image.onclick = function() {
        let getElementCss = window-getComputedStyle(image);
        let getFullImgUrl = getElementCss.getPropertyValue("backgrround-image");
        let getImgUrlPos = getFullImgUrl.split("/img/thumbs/");
        let setNewImgUrl = getImgUrlPos[1].replace('"}', '');

        getLatestOpenedImg = index + 1;

        let container = document.boby;
        let newImgwindow = document.createElement("div");
        container.appendChild(newImgwindow);
        newImgwindow.setAttribute("class", "img-window");
        newImgwindow.setAttribute("onclick", "closeimg()")

        let newImg = document.createElement("img");
        newImgwindow.appendChild(newImgwindow);    newImgwindow.setAttribute("src", "img/" + setNewImgUrl);
        newImgwindow.appendChild(newImgwindow);    newImgwindow.setAttribute("id", "current-img");

        newImg.onload = function() {
         let imgwidth = this.width;
         let calcImgToEdge = ((windowWidth - imgwidth) / 2) - 80;

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNoode("Next");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-Next");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNoode("Prev");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";   
        }

       }
    });
}

function closeimg() {
    document.querySelector(".img-widow").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();

}


function changeImg(changeDir) {
    document.querySelector(".img-widow").remove();

    let getImgwindow = document.querySelector(".img-window");
    let newimg = document.createElement("img");
    getImgwindow.appendChild(newImg);

    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpeneding + 1;
        if(calcNewImg > galleryImages.length) {

        }
    }
    else if(changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if(calcNewImg < 1) {
            calcNewImg = galleryImages.length;
        }
    }

    newImg.setAttribute("src", "img/img" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-img");

    getLatestOpeneding = calcNewImg;

    newImg.onload = function() {
        let imgwidth = this.width;
        let calcImgToEdge = ((windowwidth - imgwidth) / 2) - 80;

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

        let prevBtn = document.querySelector(".img-btn-next");
        prevBtn.style.cssText = "right: " + calcImgToEdge + "px;";
    }
}