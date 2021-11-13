"use strict";

// tabs

window.onload = function(){
  document.getElementById('btn').click();}

function changeTab(target, name){
  var tabs = document.getElementsByClassName("content");
  var tab = document.getElementById(name);
  var buttons = document.getElementsByTagName("button");

  for (var i = 0; i < tabs.length; i++) {


//  removes all tabs style
    tabs[i].style.display = "none";
    tabs[i].classList.remove("tabStyle1");
    tabs[i].classList.remove("tabStyle2");
    //  display tab
    tab.style.display = "flex";
      //  add tab style
    setTimeout(function(){
      tab.classList.add("tabStyle1");
      }, 100);




    buttons[i].classList.remove("active");
  }

    target.currentTarget.className = "active";
}

window.onload = function(){
  document.getElementById('btn').click();}


// burger

var burger = document.getElementById("burger");
var sideMenu = document.getElementById("side-menu");

burger.addEventListener("click", function() {

  sideMenu.classList.toggle("translate");

});


// Reviews



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


// formos

var vardas = document.getElementById("inputValueVardas");
var pavarde = document.getElementById("inputValuePavarde");
var tel = document.getElementById("inputValueTel");

var add = document.getElementById("add");

add.addEventListener("click", function() {
  if (vardas.value && pavarde.value && tel.value && tel.value >= 0) {


    vardas.value = "";
    pavarde.value = "";
    tel.value = "";

  } else {
    alert("Neįrašyta arba blogai įrašyta informaciją");
  }

});
var vardas = document.getElementById("inputValueVardass");
var pavarde = document.getElementById("inputValuePavardee");
var tel = document.getElementById("inputValueTell");

var add = document.getElementById("addd");

add.addEventListener("click", function() {
  if (vardas.value && pavarde.value && tel.value && tel.value >= 0) {


    vardas.value = "";
    pavarde.value = "";
    tel.value = "";

  } else {
    alert("Neįrašyta arba blogai įrašyta informaciją");
  }

});
