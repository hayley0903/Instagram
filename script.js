let pw = document.querySelector('.password');
let pwInput = document.querySelector('.password-input')
let pwShow = document.querySelector('.pwshow');



pw.addEventListener('click', function(){
    pwShow.classList.add('active');
    if (pwShow.innerHTML = "비밀번호 표시"){

      
    } else {
      pwShow.innerHTML = "숨기기";
      pwInput.type = 'text';
    }
})






let modeBtn = document.querySelector('.mode-btn');
let wrapper = document.querySelector('.wrapper');
let modeTxt = modeBtn.innerHTML;

function modeToggle () {
  if(modeTxt == 'Darkmode') {
  modeTxt = "Lightmode";
  wrapper.classList.add('dark');
  } else {
    modeTxt = "Darkmode";
    wrapper.classList.remove('dark');
  }
}

modeBtn.addEventListener('click', modeToggle);