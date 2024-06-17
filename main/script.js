//more-option 버튼 추가하기

let moreOptionOpen = document.querySelectorAll('.more-option-open');
let moreOption = document.querySelector('.more-option');
let moreOptionClose = document.querySelector('.more-option-close');

moreOptionOpen.forEach((item) => {
    item.addEventListener('click', () => {
        moreOption.classList.add('active');
    } )
}
)

moreOptionClose.addEventListener('click', () => {
    moreOption.classList.remove('active');
})
    



// function OptionOpen (){
//     moreOption.classList.add('active');
// }

// function OptionClose (){
//     moreOption.classList.remove('active');
// }

// moreOptionOpen.addEventListener('click', OptionOpen);
// moreOptionClose.addEventListener('click', OptionClose);



//새 게시물 만들기

let postUpload = document.querySelector('.post-upload');
let postUploadOpen = document.querySelector('.post-upload-btn');
let postUploadClose = document.querySelector('.post-upload-close');

function uploadOpen(e){
    postUpload.classList.add('active');
    e.preventDefault();
}

function uploadClose (e){
    postUpload.classList.remove('active');
    e.preventDefault();
}

postUploadOpen.addEventListener ('click', uploadOpen);
postUploadClose.addEventListener('click', uploadClose);