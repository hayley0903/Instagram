let pw = document.querySelector('.password');
let pwInput = document.querySelector('.password-input')
let pwShow = document.querySelector('.pwshow');


pw.addEventListener('keyup', function(){
  pwShow.classList.add('active');
})

let click = 0;

function pwClick () {
  let pwShowBtn = pwShow.innerHTML;
  click += 1;
  if(click % 2 != 0) {
    this.innerHTML = "비밀번호 표시";
      pwInput.type = 'password';
  } else {
    this.innerHTML = "숨기기";
    pwInput.type = 'text';
  }
}

pwShow.addEventListener('click', pwClick);

// pwShow.addEventListener('click', function() {
//   if (pwShow.innerHTML = "비밀번호 표시") {
//       pwShow.innerHTML = "숨기기";
//       pwInput.type = 'text';
//   } else {
//       pwShow.innerHTML = "비밀번호 표시";
//       pwInput.type = 'password';
//       }
// })

//password input 요소에 접근하고
//keyup했을 때 pwshow에 active class add
//pwshow.active에 클릭했을 때 
//pwshow.innerHTML이 숨기기로 변화
//pwshow.innerHTML 숨기기를 클릭햇을 떄 
//pwshow.innerHTML이 비밀번호 표시로 변화


let modeBtn = document.querySelector('.mode-btn');
let count = 0;

function modeToggle () {
  let wrapper = document.querySelector('.wrapper');
  let modeTxt = modeBtn.innerHTML;
  let logoImg = document.querySelector('.logo > img');
  count +=1;
  if(count % 2 ==0) {
  this.innerHTML = "Darkmode";
  wrapper.classList.remove('dark');
  logoImg.setAttribute("src", "./assets/images/logo-light.png")
  } else {
    this.innerHTML = "Lightmode";
    wrapper.classList.add('dark');
    logoImg.setAttribute("src", "./assets/images/logo-dark.png")
  }
}

modeBtn.addEventListener('click', modeToggle);