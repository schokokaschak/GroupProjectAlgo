const imgURLInput = document.getElementById('imgURL');
const memeImage = document.querySelector('.pic img');
const submitBtn = document.querySelector('.img-upload + div button');
  
submitBtn.addEventListener('click', function() {
  const newURL = imgURLInput.value.trim();
    if(newURL) {
        memeImage.src = newURL;
      }
    });
  
const imgURLInput = document.getElementById('imgURL');
const memeImage = document.querySelector('.pic img');
const submitBtn = document.querySelector('.img-upload + div button');

submitBtn.addEventListener('click', function() {
  const newURL = imgURLInput.value.trim();
  if(newURL) {
    memeImage.src = newURL;
  }
});

const topTextInput = document.getElementById('textTop');
const bottomTextInput = document.getElementById('textBottom');

const topTextOverlay = document.querySelector('.toptextbox p');
const bottomTextOverlay = document.querySelector('.bottomtextbox p');


topTextInput.addEventListener('input', function() {
  topTextOverlay.textContent = this.value;
});

bottomTextInput.addEventListener('input', function() {
  bottomTextOverlay.textContent = this.value;
});
