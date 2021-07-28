/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = excuse();
  });
};

let excuse = () => {
  let pronombre = ["A", "The"];
  let sujeto = ["dog", "cat", "driver", "mouse", "policeman"];
  let accion = ["took my", "threw my", "ate my", "broke my", "stole my"];
  let posesion = ["homework", "car", "toe", "money", "bike"];
  let donde = [
    "on the street",
    "in my house",
    "in my backyard",
    "in my driveway"
  ];

  let proIndex = Math.floor(Math.random() * pronombre.length);
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let posesionIndex = Math.floor(Math.random() * posesion.length);
  let dondeIndex = Math.floor(Math.random() * donde.length);

  return (
    pronombre[proIndex] +
    " " +
    sujeto[sujetoIndex] +
    " " +
    accion[accionIndex] +
    " " +
    posesion[posesionIndex] +
    " " +
    donde[dondeIndex]
  );
};
