
const input = document.getElementById("input");
const btn = document.querySelector(".btn");

btn.onclick = function(){
  input.select();
  document.execCommand("Copy");

  alert("Your text is copied successfully");

};


