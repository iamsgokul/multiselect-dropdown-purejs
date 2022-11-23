const mulselspan = document.querySelectorAll("li span");
const selico = document.querySelector(".ddsel i");
const ulist = document.querySelector("ul");


mulselspan.forEach((licon) => {
  licon.addEventListener("click", function (e) {
    listclick(e);
  });
});

function listclick(e) {
  e.preventDefault();
  const cpy = e.target.innerText;
  const rem = e.target.parentNode;
  rem.remove();
  const link = document.createElement("span");
  link.classList.add("dwcval");
  link.innerHTML = cpy+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>';

  link.addEventListener("click", function (e) {
    removelist(e);
  });
  document.querySelector(".mulsel").appendChild(link);
}

function removelist(e) {
  e.preventDefault();
  const remadd = e.target.innerText;
  const remspn = e.target;
  remspn.remove();
  const link = document.createElement("span");
  link.classList.add("dwcval");
  link.remove('svg');
  link.innerHTML = remadd;
  const apeli = document.createElement("li");
  apeli.appendChild(link);
  apeli.addEventListener("click", function (e) {
    listclick(e);
  });
  ulist.appendChild(apeli);
}

selico.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".ddval").classList.toggle("open");
  document.querySelector(".ddsel i").classList.toggle("open");
});
