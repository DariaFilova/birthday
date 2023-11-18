// Display the animation

const button = document.querySelector('button');
const textDiv = document.querySelector('.info');

button.addEventListener('click', () => {
  button.classList.add('hidden');
  textDiv.classList.remove('hidden');
  const anim = lottie.loadAnimation(options);
});

