// function updateInputState (input, activeVar){
//     if(input.value.trim().length>0){
//         input.parentElement.classList.add('active');
//         activeVar = true;
//     } else {
//         input.parentElement.classList.remove('active');
//         activeVar = false;
//     }

//     return activeVar;
// }


// let userEmail = document.querySelector('.useremail');
// let userName = document.querySelector('.username');
// let userId = document.querySelector('.userid');
// let userPw = document.querySelector('.userpw');

//   let emailActive = false;
//   let nameActive = false;
//   let idActive = false;
//   let pwActive = false;

// let submitButton = document.querySelector('.submit-button');

// function handleInput (e){
//     let input = e.target;
//     let type = input.getAttribute('type');

//     if (type =='text'){
        // emailActive = updateInputState(input, emailActive);
        // nameActive = updateInputState(input,nameActive);
//         idActive = updateInputState(input, idActive);
//     } else {
//         pwActive = updateInputState(input, pwActive);
//     }

//     if (idActive&&pwActive){
//         submitButton.removeAttribute('disabled');
//     } else {
//         submitButton.setAttribute('disabled', true);
//     }
// }


// userEmail.addEventListener('click', handleInput);
// userName.addEventListener('click', handleInput);
// userId.addEventListener('click', handleInput);
// userPw.addEventListener('click', handleInput);

//0614수업//
let animateInput = document.querySelectorAll('.animate-input');

let submitButton = document.querySelector('.submit-button');

let emailAct = nameAct = idAct = pwAct = false;

let userEmail = document.querySelector('.useremail');
let userName = document.querySelector('.username');
let userId = document.querySelector('.userid');
let userPw = document.querySelector('.userpw');


function updateInputState(val, activeVar){
    if(val.value.trim().length > 0){
        val.parentElement.classList.add('active');
        activeVar = true;
    } else {
        val.parentElement.classList.remove('active');
        activeVar = false;
    }

    return activeVar;
}

// animateInput이라는 배열안에서 item을 고른다
animateInput.forEach((item) => {
    let input = item.querySelector('input');
    input.addEventListener('keyup', () => {
        if (input == userEmail){
            emailAct = updateInputState(input, emailAct);
        } else if (input == userName){
            nameAct = updateInputState(input, nameAct);
        } else if (input == userId) {
            idAct = updateInputState(input, idAct);
        } else if (input == userPw) {
            pwAct = updateInputState(input, pwAct);
        }

    let allTrue = emailAct && nameAct && idAct && pwAct

    if (allTrue)
         {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disalbed', true);
    }
    })
})
    

let pwBtn = document.getElementById('pw-btn');

function modeToggle () {
    let pwType = userPw.getAttribute('type') == 'password';
    userPw.setAttribute('type', pwType? 'text' : 'password');
    pwBtn.innerHTML = pwType ? '숨기기' : '비밀번호 표시';

// 삼항연산자
    // pwBtn.innerHTML = userPw.getAttribute('type', 'text')? '숨기기' : '비밀번호 표시';
}


pwBtn.addEventListener('click', modeToggle)



