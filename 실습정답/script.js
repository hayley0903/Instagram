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
//return : 해당함수가 실행 된 후, 함수 호출한 위치로 전달되는 값
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
    //return: activeVar값이 true일때, idActive가 true
} else {
    pwActive = updateInputState(input, pwActive);
     //return: activeVar값이 true일때, pwActive가 true
}
  //idActive와 pwActive가 true일경우, 둘다 값이 있을 때,
  if(idActive && pwActive) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
}

userid.addEventListener('keyup', handleInput);
userpw.addEventListener('keyup', handleInput);

//userid or userpw에 keyup됬을 때, handleInput함수가 실행
//e.target = input으로 실행되면서, type이 text일때 id, type이 password일때 pw로 인식


//e.target 속성//
// let appTxt = document.querySelector('.app-txt');

// function btnClick(e){
//   console.log(e.target);
// }

// appTxt.addEventListener('click', btnClick);


//비밀번호 표시 == > 비밀번호 숨기기로 변경//

// let pwShow = document.querySelector('.pw-show');
// let click = 0;

// function pwShowClick (){
//   click+=1;
//   if (click % 2 != 0) {
//     pwShow.innerHTML = "숨기기";
//     userpw.type = "text";
//   } else {
//     pwShow.innerHTML = "비밀번호 표시";
//     userpw.type = "password";
//   }}

// pwShow.addEventListener('click', pwShowClick )



let pwShow = document.querySelector('.pw-show');

// userpw의 type이 password일 경우, 1,2 번 실행
// 1. 비밀번호 표시 클릭 => userpw(input) type => text로 변경
// 2. pwShow.innerHTML => 숨기기로 변경


function pwMode (){
  if(userpw.getAttribute('type') == 'password'){
    userpw.setAttribute('type', 'text');
    pwShow.innerHTML = "숨기기";
  } else {
    userpw.setAttribute('type', 'password');
    pwShow.innerHTML = "비밀번호 표시";
  }
}

pwShow.addEventListener('click', pwMode);


//Darkmode 구현//

// let modeBtn = document.querySelector('.mode-btn');

// function modeToggle (e){
//   let body = document.querySelector('body');
//   e.preventDefault();
// //1. body태그에 dark라는 class toggle
// //2. dark라는 class가 있으면 remove, 없으면 add
//   body.classList.toggle('dark');
//   //body에 dark라는 class가 있을 때, modeBtn.innerHTML을 lightmode로 변경
//   //body에 dark라는 class가 없을 때는 darkmode로
//   //classList.contains()로 클래스를 가지고 있는지 확인가능

//   if(body.classList.contains('dark')) {
//     modeBtn.innerHTML = 'Lightmode';
//   } else {
//     modeBtn.innerHTML = 'Darkmode';
//   }}


// modeBtn.addEventListener('click', modeToggle);


let modeBtn = document.querySelector('.mode-btn');

function modeToggle (e){
  let body = document.querySelector('body');
  e.preventDefault();
//1. body태그에 dark라는 class toggle
//2. dark라는 class가 있으면 remove, 없으면 add
  body.classList.toggle('dark');

  //삼항연산자
  //조건 ? 참일 때 : 거짓일 때 
  //body에 dark클래스가 있을때를 조건으로 두고 참일때 lightmode, 거짓일때 darkmode
  modeBtn.innerHTML = body.classList.contains('dark') ? 'Lightmode' : 'Darkmode';
}

modeBtn.addEventListener('click', modeToggle);
