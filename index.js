const button = document.querySelector("button");
const h1= document.querySelector("h1");


button.addEventListener("click", ()=> {
  // So I can write it as document.querySelector("body")
  // and then .style etc but this way also works says my teacher.

  const newColor=  makeRandomColor();
  document.body.style.backgroundColor= newColor;
  h1.innerText=newColor;

});


function makeRandomColor(){
  // The Mat.randoms all need to be in the function so each time it is clicked
  // the numbers become new again. leaving them out makes it only run once.
  // first it was in the addEventListener section but it's best practice to run this
  // as it's own function since it is a stand alone.
  let r = Math.floor(Math.random()*255)
  let g = Math.floor(Math.random()*255)
  let b = Math.floor(Math.random()*255)
  if (r+b+g<200){
    h1.style.color="white";
  }
  else if (r+b+g >=200){
    h1.style.color="black";
  }
  return`rgb(${r},${g},${b})`

};
