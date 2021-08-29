const button = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector("form");
const container = document.getElementById("container");

 

container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-bin icon") {
    eo.target.parentElement.parentElement.remove();
  }
  
  
  
  
  else if (eo.target.className == "icon-sad icon") {
    
    eo.target.classList.add("dn");
    const heart = `<span class="icon-heart">   </span>`;



    eo.target.parentElement.parentElement
    .getElementsByClassName("task-text")[0]
    .classList.add("finish");




    
    eo.target.parentElement.innerHTML += heart;



  } else if (eo.target.className == "icon-heart") {
    
    eo.target.parentElement.parentElement
    .getElementsByClassName("task-text")[0]
    .classList.remove("finish");

eo.target.classList.add("dn")

const addAngry = `
<span class="icon-sad icon"> </span>
`


eo.target.parentElement.innerHTML += addAngry

  } else if (eo.target.className == "icon-star-full icon" ) {

eo.target.classList.add("orange")


container.prepend(eo.target.parentElement)


  } else if (eo.target.className == "icon-star-full icon orange") {

    eo.target.classList.remove("orange")


  }


});
















form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `   
  
  <div class="task">
  <span class="icon-star-full icon"> </span>
  <p lang="ar"  class="task-text">      ${input.value}     </p>

  <div>
    <span class="icon-sad icon"> </span>

    <span class="icon-bin icon"> </span>
  </div>

 </div>`

  container.innerHTML += task;

  input.value = ""

});
