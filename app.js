function moverPosicionRandoom(elm) {  /* elm --> elemento */
  elm.style.position = 'absolute';
  elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
  elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandoom(e.target) });

btnSi.addEventListener('click', function(e) {
  alert('Sabía que dirías que SI mi amor xD, casémonos ya y tengamos hijos. Te amoooo!!');

  divModoSexo.style.display = 'block'; /* display: puede ser block, hidden o none */
  const cancion = new Audio('modo_hot.mp3');
  cancion.play;
});