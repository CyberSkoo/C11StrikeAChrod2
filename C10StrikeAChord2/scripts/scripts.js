/*
Author: [Kevin Flores]
File Name: script.js
Date: [Today's Date]
*/

// Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}