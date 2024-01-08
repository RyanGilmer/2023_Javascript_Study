// Gain Access to form elements
const submitButton = document.getElementById('submit');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// Add event listener to submit button
submitButton.addEventListener('click', checkForm);


function checkForm(){
    /*
        In this method check whether name, email, and phone number have input.
        If they are blank turn the fields red.  Otherwise do nothing.
     */

    if(name.value === ""){
        name.style.backgroundColor = "red";
    }else{
        name.style.backgroundColor = "white";
    }



}