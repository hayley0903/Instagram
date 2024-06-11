let pw = document.querySelector('.password');
let pwInput = document.querySelector('.password-input')
let pwShow = document.querySelector('.pwshow');



pw.addEventListener('keyup', function(){
  pwShow.classList.add('active');
})

pwShow.addEventListener('click', function() {
  if (pwShow.innerHTML = "비밀번호 표시") {
      pwShow.innerHTML = "숨기기";
      pwInput.type = 'text';
  } 
})



let modeBtn = document.querySelector('.mode-btn');
let count = 0;

function modeToggle () {
  let wrapper = document.querySelector('.wrapper');
  let modeTxt = modeBtn.innerHTML;
  count +=1;
  if(count % 2 ==0) {
  this.innerHTML = "Darkmode";
  wrapper.classList.remove('dark');
  } else {
    this.innerHTML = "Lightmode";
    wrapper.classList.add('dark');
  }
}

modeBtn.addEventListener('click', modeToggle);