"use strict"

function myFunction(){
    document.addEventListener("DOMContentLoaded", function(){
        console.log("Loaded");

        document.getElementById("btn library").addEventListener("click", function(){
            console.log("Click!");
            if(document.getElementById("myContent").innerText=="Hello World!"){
                document.getElementById("myContent").innerText = "Goodbye World!";
            }
            else{
                document.getElementById("myContent").innerText = "Hello World!";
            }
        });})
}

myFunction();