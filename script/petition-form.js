const submitFormBtn = document.querySelector(".petition-form input[type='submit']");

const capitalize = (word) => {
  word = String(word);
  return word.charAt(0).toUpperCase() + word.slice(1);
}


const addSignature = (sig) => {
    
    // clear form
    const inputs = document.querySelectorAll(".petition-form input[type='text']");
    inputs.forEach(input => input.value = "");

    // select signtaure list
    const my_ul = document.querySelector(".petition-signatures");

    // create list element
    const my_li = document.createElement("li");

    // add list element with personalized signature
    let name = capitalize(sig.name);
    let hometown = capitalize(sig.hometown);
    my_li.textContent = name + " from " + hometown + " supports this.";
    my_ul.appendChild(my_li);

}


const validateForm = (event) => {

  // select all elements with type text
  const inputs = document.querySelectorAll(".petition-form input[type='text']");
  
  // store elements in signature dictionary
  const sig = {};

  // define boolean for containsErrors
  let containsErrors = false; 

  inputs.forEach(input => {
    if (input.value.length < 3){
      console.log("ougyiygi1");
      containsErrors = true;
    } 

    if (input.name == "email"){
      if (!(input.value.includes(".com") && input.value.includes("@"))) {
        console.log("ouhouhoh2");
        containsErrors = true;
      }
    }

    const name = input.name;
    const value = input.value;
    sig[name] = value;

  });

  if (containsErrors) {

    for(let i = 0; i < inputs.length; i++){
      inputs[i].style.backgroundColor = "pink";
      inputs[i].style.borderColor = "red";
    }
    console.log("huohouh");
  } else {
    for(let i = 0; i < inputs.length; i++){
      inputs[i].style.backgroundColor = "white";
      inputs[i].style.borderColor = "white";
    }
    console.log("SUBNMIT");
    addSignature(sig);
  }

  event.preventDefault();

}


submitFormBtn.addEventListener("click", validateForm);