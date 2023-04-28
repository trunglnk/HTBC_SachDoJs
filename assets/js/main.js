// side menu
const siListBtn = document.querySelectorAll(".side-list-title");
const sideIconRol = document.querySelectorAll(".side-list-title i");
const listUl = document.querySelectorAll(".list-ul");

for (let i = 0; i < siListBtn.length; i++) {
    siListBtn[i].addEventListener("click", function () {
        sideIconRol[i].classList.toggle("ro-90");
        listUl[i].classList.toggle("active");
    });
}

