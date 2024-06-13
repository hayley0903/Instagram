function updateInputState (input, activeVar){
    if(input.value.trim().length>0){
        input.parentElement.classList.add('active');
        activeVar = true;
    } else {
        input.parentElement.classList.remove('active');
        activeVar = false;
    }

    return activeVar;
}


let userEmail = document.querySelector('.useremail');
let userName = document.querySelector('.username');
let userId = document.querySelector('.userid');
let userPw = document.querySelector('.userpw');

//   let emailActive = false;
//   let nameActive = false;
  let idActive = false;
  let pwActive = false;

let submitButton = document.querySelector('.submit-button');

function handleInput (e){
    let input = e.target;
    let type = input.getAttribute('type');

    if (type =='text'){
        // emailActive = updateInputState(input, emailActive);
        // nameActive = updateInputState(input,nameActive);
        idActive = updateInputState(input, idActive);
    } else {
        pwActive = updateInputState(input, pwActive);
    }

    if (idActive&&pwActive){
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', true);
    }
}





userEmail.addEventListener('click', handleInput);
userName.addEventListener('click', handleInput);
userId.addEventListener('click', handleInput);
userPw.addEventListener('click', handleInput);