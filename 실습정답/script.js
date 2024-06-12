function updateInputState(input, activeVar){
  //trim() 공백을 제거
  //공백제거한 value값의 길이가 0보다 클 때 
  if(input.value.trim().length > 0) {
    input.parentElement.classList.add('active');
    activeVar = true;
  } else {
    // value 값의 길이가 없을 때 
    input.parentElement.classList.remove('active');
    activeVar = false;
  }

  return activeVar;
}

// //userid 의 자식이 input 요소 가져오기
// let userid = document.getElementById('userid');
// let useridInput = userid.querySelector('input');


// let userpw = document.getElementById('userpw');
// let userpwInput = userpw.querySelector('input');


let userid = document.getElementById('userid');
let userpw = document.getElementById('userpw');

let idActive = false;
let pwActive = false;

let submitBtn = document.getElementById('submit-btn');

function handleInput (e){
  //매개변수.target => 이벤트가 일어나는 대상
  let input = e.target;
  let type = input.getAttribute("type");
  
  if (type == "text"){
    idActive = updateInputState(input, idActive);
} else {
    pwActive = updateInputState(input, pwActive);
}

  if(idActive && pwActive) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
}

userid.addEventListener('keyup', handleInput);
userpw.addEventListener('keyup', handleInput);