document.body.style.margin = "0px";
const container = document.createElement("div");
document.body.appendChild(container);
function choose(x){
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.padding = "0px";
  container.style.margin = "0px";
  for (let i = 0; i < (x * x); i++){
    const newDiv = document.createElement("div");
    newDiv.id = "div-" + (i + 1);
    newDiv.style.border = "0.1px solid black";
    container.appendChild(newDiv);
    newDiv.style.padding = "42px";
    newDiv.addEventListener("mouseover", () => {
      let x = Math.random();
      if (Math.floor(x * 10) == 1){
        newDiv.style.backgroundColor = "red";
      }
      if (Math.floor(x * 10) == 2){
        newDiv.style.backgroundColor = "orange";
      }
      if (Math.floor(x * 10) == 3){
        newDiv.style.backgroundColor = "yellow";
      }
      if (Math.floor(x * 10) == 4){
        newDiv.style.backgroundColor = "green";
      }
      if (Math.floor(x * 10) == 5){
        newDiv.style.backgroundColor = "blue";
      }
      if (Math.floor(x * 10) == 6){
        newDiv.style.backgroundColor = "red";
      }
      if (Math.floor(x * 10) == 7){
        newDiv.style.backgroundColor = "purple";
      }
      if (Math.floor(x * 10) == 8){
        newDiv.style.backgroundColor = "pink";
      }
      if (Math.floor(x * 10) == 9){
        newDiv.style.backgroundColor = "magenta";
      }
    });

    newDiv.addEventListener("mouseleave", () => {
      newDiv.style.backgroundColor = "white";
    });


  }
}

but.addEventListener("click", () => {
  container.innerHTML = "";
  choose(prompt("how many squares?"));
});

