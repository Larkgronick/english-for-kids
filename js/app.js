/* CARDS DATA */

const cards = [
  [
    {
      word: 'Action (set A)',
      image: 'assets/img/action_A.jpg',
    },
    {
      word: 'Action (set B)',
      image: 'assets/img/action_B.jpg',
    },
    {
      word: 'Action (set C)',
      image: 'assets/img/action_C.jpg',
    },
    {
      word: 'Adjective',
      image: 'assets/img/adjective.jpg',
    },
    {
      word: 'Animal (set A)',
      image: 'assets/img/animal_A.jpg',
    },
    {
      word: 'Animal (set B)',
      image: 'assets/img/animal_B.jpg',
    },
    {
      word: 'Clothes',
      image: 'assets/img/clothes.jpg',
    },
    {
      word: 'Emotions',
      image: 'assets/img/emotion.jpg',
    },
  ],
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'assets/img/cry.jpg',
      audioSrc: 'assets/audio/cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'assets/img/dance.jpg',
      audioSrc: 'assets/audio/dance.mp3',
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'assets/img/dive.jpg',
      audioSrc: 'assets/audio/dive.mp3',
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'assets/img/draw.jpg',
      audioSrc: 'assets/audio/draw.mp3',
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'assets/img/fishing.jpg',
      audioSrc: 'assets/audio/fish.mp3',
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'assets/img/fly.jpg',
      audioSrc: 'assets/audio/fly.mp3',
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'assets/img/hug.jpg',
      audioSrc: 'assets/audio/hug.mp3',
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'assets/img/jump.jpg',
      audioSrc: 'assets/audio/jump.mp3',
    },
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'assets/img/open.jpg',
      audioSrc: 'assets/audio/open.mp3',
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'assets/img/play.jpg',
      audioSrc: 'assets/audio/play.mp3',
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'assets/img/point.jpg',
      audioSrc: 'assets/audio/point.mp3',
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'assets/img/ride.jpg',
      audioSrc: 'assets/audio/ride.mp3',
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'assets/img/run.jpg',
      audioSrc: 'assets/audio/run.mp3',
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'assets/img/sing.jpg',
      audioSrc: 'assets/audio/sing.mp3',
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'assets/img/skip.jpg',
      audioSrc: 'assets/audio/skip.mp3',
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'assets/img/swim.jpg',
      audioSrc: 'assets/audio/swim.mp3',
    },
  ],
  [
    {
      word: 'argue',
      translation: 'спорить',
      image: 'assets/img/argue.jpg',
      audioSrc: 'assets/audio/argue.mp3',
    },
    {
      word: 'build',
      translation: 'строить',
      image: 'assets/img/build.jpg',
      audioSrc: 'assets/audio/build.mp3',
    },
    {
      word: 'carry',
      translation: 'нести',
      image: 'assets/img/carry.jpg',
      audioSrc: 'assets/audio/carry.mp3',
    },
    {
      word: 'catch',
      translation: 'ловить',
      image: 'assets/img/catch.jpg',
      audioSrc: 'assets/audio/catch.mp3',
    },
    {
      word: 'drive',
      translation: 'водить машину',
      image: 'assets/img/drive.jpg',
      audioSrc: 'assets/audio/drive.mp3',
    },
    {
      word: 'drop',
      translation: 'ловить рыбу',
      image: 'assets/img/drop.jpg',
      audioSrc: 'assets/audio/drop.mp3',
    },
    {
      word: 'pull',
      translation: 'летать',
      image: 'assets/img/pull.jpg',
      audioSrc: 'assets/audio/pull.mp3',
    },
    {
      word: 'push',
      translation: 'обнимать',
      image: 'assets/img/push.jpg',
      audioSrc: 'assets/audio/push.mp3',
    },
  ],
  [
    {
      word: 'big',
      translation: 'большой',
      image: 'assets/img/big.jpg',
      audioSrc: 'assets/audio/big.mp3',
    },
    {
      word: 'small',
      translation: 'маленький',
      image: 'assets/img/small.jpg',
      audioSrc: 'assets/audio/small.mp3',
    },
    {
      word: 'fast',
      translation: 'быстрый',
      image: 'assets/img/fast.jpg',
      audioSrc: 'assets/audio/fast.mp3',
    },
    {
      word: 'slow',
      translation: 'медленный',
      image: 'assets/img/slow.jpg',
      audioSrc: 'assets/audio/slow.mp3',
    },
    {
      word: 'friendly',
      translation: 'дружелюбный',
      image: 'assets/img/friendly.jpg',
      audioSrc: 'assets/audio/friendly.mp3',
    },
    {
      word: 'unfriendly',
      translation: 'недружелюбный',
      image: 'assets/img/unfriendly.jpg',
      audioSrc: 'assets/audio/unfriendly.mp3',
    },
    {
      word: 'young',
      translation: 'молодой',
      image: 'assets/img/young.jpg',
      audioSrc: 'assets/audio/young.mp3',
    },
    {
      word: 'old',
      translation: 'старый',
      image: 'assets/img/old.jpg',
      audioSrc: 'assets/audio/old.mp3',
    },
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'assets/img/cat.jpg',
      audioSrc: 'assets/audio/cat.mp3',
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'assets/img/chick.jpg',
      audioSrc: 'assets/audio/chick.mp3',
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'assets/img/chicken.jpg',
      audioSrc: 'assets/audio/chicken.mp3',
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'assets/img/dog.jpg',
      audioSrc: 'assets/audio/dog.mp3',
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'assets/img/horse.jpg',
      audioSrc: 'assets/audio/horse.mp3',
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'assets/img/pig.jpg',
      audioSrc: 'assets/audio/pig.mp3',
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'assets/img/rabbit.jpg',
      audioSrc: 'assets/audio/rabbit.mp3',
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'assets/img/sheep.jpg',
      audioSrc: 'assets/audio/sheep.mp3',
    },
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: 'assets/img/bird.jpg',
      audioSrc: 'assets/audio/bird.mp3',
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'assets/img/fish.jpg',
      audioSrc: 'assets/audio/fish.mp3',
    },
    {
      word: 'frog',
      translation: 'лягушка',
      image: 'assets/img/frog.jpg',
      audioSrc: 'assets/audio/frog.mp3',
    },
    {
      word: 'giraffe',
      translation: 'жираф',
      image: 'assets/img/giraffe.jpg',
      audioSrc: 'assets/audio/giraffe.mp3',
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'assets/img/lion.jpg',
      audioSrc: 'assets/audio/lion.mp3',
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'assets/img/mouse.jpg',
      audioSrc: 'assets/audio/mouse.mp3',
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'assets/img/turtle.jpg',
      audioSrc: 'assets/audio/turtle.mp3',
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'assets/img/dolphin.jpg',
      audioSrc: 'assets/audio/dolphin.mp3',
    },
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'assets/img/skirt.jpg',
      audioSrc: 'assets/audio/skirt.mp3',
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'assets/img/pants.jpg',
      audioSrc: 'assets/audio/pants.mp3',
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'assets/img/blouse.jpg',
      audioSrc: 'assets/audio/blouse.mp3',
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'assets/img/dress.jpg',
      audioSrc: 'assets/audio/dress.mp3',
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'assets/img/boot.jpg',
      audioSrc: 'assets/audio/boot.mp3',
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'assets/img/shirt.jpg',
      audioSrc: 'assets/audio/shirt.mp3',
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'assets/img/coat.jpg',
      audioSrc: 'assets/audio/coat.mp3',
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'assets/img/shoe.jpg',
      audioSrc: 'assets/audio/shoe.mp3',
    },
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'assets/img/sad.jpg',
      audioSrc: 'assets/audio/sad.mp3',
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'assets/img/angry.jpg',
      audioSrc: 'assets/audio/angry.mp3',
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'assets/img/happy.jpg',
      audioSrc: 'assets/audio/happy.mp3',
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'assets/img/tired.jpg',
      audioSrc: 'assets/audio/tired.mp3',
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'assets/img/surprised.jpg',
      audioSrc: 'assets/audio/surprised.mp3',
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'assets/img/scared.jpg',
      audioSrc: 'assets/audio/scared.mp3',
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'assets/img/smile.jpg',
      audioSrc: 'assets/audio/smile.mp3',
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'assets/img/laugh.jpg',
      audioSrc: 'assets/audio/laugh.mp3',
    },
  ],
];

/* MAIN PAGE GENERATION */

const MAIN_PAGE_INFO = [
  {
    category: 'Main',
    image: 'assets/img/main-side.jpg',
    sidebar_image: 'assets/img/main-side.png',
    id: 'main_side',

  },
  {
    category: 'Action (set A)',
    image: 'assets/img/action_A.jpg',
    sidebar_image: 'assets/img/action_a_side.png',
    id: 'action_a_side',

  },
  {
    category: 'Action (set B)',
    image: 'assets/img/action_B.jpg',
    sidebar_image: 'assets/img/action_b_side.png',
    id: 'action_b_side',
  },
  {
    category: 'Action (set С)',
    image: 'assets/img/action_C.jpg',
    sidebar_image: 'assets/img/action_c_side.png',
    id: 'action_c_side',
  },
  {
    category: 'Adjective',
    image: 'assets/img/adjective.jpg',
    sidebar_image: 'assets/img/adjective-side.png',
    id: 'adjective-side',
  },
  {
    category: 'Animal (set A)',
    image: 'assets/img/animal_A.jpg',
    sidebar_image: 'assets/img/animal_a_side.png',
    id: 'animal_a_side',
  },
  {
    category: 'Animal (set B)',
    image: 'assets/img/animal_B.jpg',
    sidebar_image: 'assets/img/animal_b_side.png',
    id: 'animal_b_side',
  },
  {
    category: 'Clothes',
    image: 'assets/img/clothes.jpg',
    sidebar_image: 'assets/img/clothes-side.png',
    id: 'clothes-side',
  },
  {
    category: 'Emotions',
    image: 'assets/img/emotion.jpg',
    sidebar_image: 'assets/img/emotions-side.png',
    id: 'emotions-side',
  },
];

/* header */

const header = document.createElement('header');
document.body.appendChild(header);

/* hamburger */

const button = document.createElement('button');
button.id = 'hamburger';
button.className = 'hamburger hamburger--elastic';
button.type = 'button';
header.appendChild(button);

const spanBox = document.createElement('span');
spanBox.className = 'hamburger-box';
button.appendChild(spanBox);

const spanInner = document.createElement('span');
spanInner.className = 'hamburger-inner';
spanBox.appendChild(spanInner);

/* switcher */

const label = document.createElement('label');
label.className = 'switch';
header.appendChild(label);

const input = document.createElement('input');
input.type = 'checkbox';
input.id = 'togBtn';
label.appendChild(input);

const div = document.createElement('div');
div.className = 'slider round';
label.appendChild(div);


/* set categoryNumber by page load */

let categoryNumber = 0;

/* aside categories */

const aside = document.createElement('aside');
aside.id = 'mySidenav';
aside.className = 'sidenav';
document.body.appendChild(aside);

const SIDE_LINKS = MAIN_PAGE_INFO.map((a) => a.category);
const SIDE_LINKS_ID = MAIN_PAGE_INFO.map((a) => a.id);
const SIDE_LINKS_IMG = MAIN_PAGE_INFO.map((a) => a.sidebar_image);

SIDE_LINKS.forEach((el, index) => {
  const a = document.createElement('a');
  a.id = SIDE_LINKS_ID[index];
  a.href = '#';
  aside.appendChild(a);
  const img = document.createElement('img');
  img.src = SIDE_LINKS_IMG[index];
  img.alt = a.id;
  img.innerHTML = SIDE_LINKS_IMG[index];
  a.appendChild(img);
  const span = document.createElement('span');
  span.innerHTML = SIDE_LINKS[index];
  a.appendChild(span);
});

/* cards generation */

const section = document.createElement('section');
document.body.appendChild(section);
section.id = 'cards';

const MAIN = MAIN_PAGE_INFO.slice(1);
const MAIN_IMAGES_PATH = MAIN.map((a) => a.image);
const MAIN_MENU = MAIN.map((a) => a.category);
MAIN_MENU.forEach((el, index) => {
  const flipBox = document.createElement('DIV');
  flipBox.className = 'flip-box';
  section.appendChild(flipBox);
  const flipInner = document.createElement('DIV');
  flipInner.className = 'flip-inner';
  flipBox.appendChild(flipInner);
  const cardWrapper = document.createElement('div');
  cardWrapper.className = 'card text-white bg-info mb-3';
  cardWrapper.classList.add('flip-front');
  flipInner.appendChild(cardWrapper);
  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header';
  cardWrapper.appendChild(cardHeader);
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  cardWrapper.appendChild(cardBody);
  const cardTitle = document.createElement('h4');
  cardTitle.className = 'card-title';
  cardHeader.appendChild(cardTitle);
  cardTitle.innerHTML = el;
  const categoryPicture = document.createElement('img');
  categoryPicture.className = 'category-picture';
  categoryPicture.src = MAIN_IMAGES_PATH[index];
  cardBody.appendChild(categoryPicture);
  const flipBack = cardWrapper.cloneNode(true);
  flipBack.classList.remove('bg-info');
  flipBack.classList.add('bg-success');
  flipBack.classList.add('flip-back');
  flipBox.appendChild(flipBack);
  flipBox.className = 'flip-box';
  flipInner.appendChild(flipBack);
});

/* audio */

const audio = document.createElement('audio');
audio.id = 'audio';
document.body.appendChild(audio);

/* audio players */
function playAudio(url) {
  new Audio(url).play();
}

function play() {
  audio.play();
}


/* MAIN MENU ACTIONS */

const HAMBURGER = document.getElementById('hamburger');
const SIDEBAR = document.getElementById('mySidenav');

/* hamburger-menu */
HAMBURGER.addEventListener('click', () => {
  HAMBURGER.classList.toggle('is-active');
  SIDEBAR.classList.toggle('view');
});


/* train-play switch */

const MODE = document.getElementById('togBtn');
const wrappers = document.querySelectorAll('.bg-info');
const statistic = document.createElement('div');
statistic.id = 'statistic';


/* CARDS UPDATE */

let images;
let newImages;

let captions;
let newCaptions;

let newTranslations;

function trainCategories(value) {
  newImages = cards[value].map((a) => a.image);
  const allImages = newImages.reduce((res, current) => res.concat([current, current]), []);

  images = document.querySelectorAll('.category-picture');
  Array.from(images).forEach((el, index) => {
    el.src = allImages[index];
  });

  newCaptions = cards[value].map((a) => a.word);
  captions = document.querySelectorAll('.bg-info');
  Array.from(captions).forEach((el, index) => {
    el.firstChild.innerHTML = newCaptions[index];
  });


  newTranslations = cards[value].map((a) => a.translation);
  captions = document.querySelectorAll('.bg-success');
  Array.from(captions).forEach((el, index) => {
    el.firstChild.innerHTML = newTranslations[index];
  });

  const cardHeaders = Array.from(document.getElementsByClassName('card-header'));
  const headersToRotate = [];
  for (let i = 0; i < cardHeaders.length; i += 2) { // take every second element
    headersToRotate.push(cardHeaders[i]);
  }

  if (document.querySelector('.rotate-holder') == null) {
    MAIN.forEach((el, index) => {
      const rotate = document.createElement('img');
      rotate.src = 'assets/img/rotate.png';
      rotate.class = 'translate';
      rotate.className = 'rotate-holder';
      headersToRotate[index].appendChild(rotate);
    });
  }
  if (categoryNumber === 0) {
    document.querySelectorAll('.rotate-holder').forEach((el) => {
      el.style.display = 'none';
    });
  } else {
    document.querySelectorAll('.rotate-holder').forEach((el) => {
      el.style.display = 'block';
    });
  }

  const rotators = document.querySelectorAll('.rotate-holder');
  rotators.forEach((el) => el.addEventListener('click', (event) => {
    event.target.closest('.flip-inner').classList.add('translate');
  }));

  rotators.forEach((el) => el.addEventListener('mouseout', (event) => {
    event.target.closest('.flip-inner').classList.remove('translate');
  }));
}


/* PLAY BUTTON */

const playButton = document.createElement('button');
playButton.className = 'press-play btn btn-danger';
playButton.id = 'play-button';
playButton.classList.add('disable');
section.appendChild(playButton);


function playCategories() {
  Array.from(wrappers).forEach((el) => {
    el.classList.add('bg-warning');
    el.firstChild.classList.toggle('disable');
  });
  document.getElementById('play-button').classList.add('play-mode');
}


/* category router */

function selectCategory(category) {
  categoryNumber = category;
  aside.style.backgroundColor = '#17a2b8';
  trainCategories(categoryNumber);
  if (MODE.checked === true) {
    aside.style.backgroundColor = '#ffc107';
    if (categoryNumber === 0) {
      trainCategories(0);
    } else {
      playCategories(categoryNumber);
    }
  }
}

function randomArray(arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function reset() {
  Array.from(document.querySelectorAll('.bg-warning')).forEach((el) => {
    el.classList.remove('bg-warning');
    el.firstChild.classList.toggle('disable');
  });
  document.getElementById('play-button').classList.remove('play-mode');
}

/* GAME */

/* start game */

let correctAnswer;
let audioPath;
let currentAudio;
let checkList;
let currentWord;
function createGame() {
  audioPath = cards[categoryNumber].map((a) => a.audioSrc);
  currentAudio = audioPath.slice();
  checkList = currentAudio.slice();
  currentAudio = randomArray(audioPath);
  currentWord = currentAudio[currentAudio.length - 1];
  correctAnswer = checkList.indexOf(currentWord);
  audio.src = currentWord;
  play();
}

const startPlay = document.getElementById('play-button');
startPlay.addEventListener('click', () => {
  if (startPlay.className === 'btn btn-danger disable play-mode press-repeat') {
    playAudio(currentWord);
  } else {
    startPlay.classList.toggle('press-play');
    startPlay.classList.toggle('press-repeat');
    createGame();
  }
});


function startGame() {
  currentAudio.pop();
  currentWord = currentAudio[currentAudio.length - 1];
  correctAnswer = checkList.indexOf(currentWord);
  audio.src = currentWord;
  play();
}

/* game results */

function congrats() {
  const congratsImage = document.createElement('IMG');
  congratsImage.id = 'congrats';
  congratsImage.src = 'assets/img/win.png';
  section.insertBefore(congratsImage, section.firstChild);
}


function closeCongrats() {
  document.getElementById('congrats').remove();
}

function closeFail() {
  document.getElementById('fail').remove();
}

function fail() {
  const failImage = document.createElement('IMG');
  failImage.id = 'fail';
  failImage.src = 'assets/img/fail.png';
  section.insertBefore(fail, section.firstChild);
}

function resetGame() {
  document.getElementById('statistic').remove();
  document.querySelectorAll('.correct-answer').forEach((el) => el.classList.remove('correct-answer'));
  reset();
  MODE.checked = false;
  trainCategories(0);
}


/* NAVIGATION */

/* train/play switcher */

MODE.addEventListener('click', () => {
  selectCategory(categoryNumber);
  if (MODE.checked === true) {
    startPlay.classList.add('press-play');
    startPlay.classList.remove('press-repeat');
    section.insertBefore(statistic, section.firstChild);
    trainCategories(categoryNumber);
  } else {
    document.getElementById('statistic').innerHTML = '';
    document.querySelectorAll('.correct-answer').forEach((el) => el.classList.remove('correct-answer'));
    reset();
  }
});

/* sidebar navigation */

SIDEBAR.onclick = function sideBar(event) {
  const LINKS = document.querySelectorAll('a');
  const target = Array.from(LINKS).indexOf(event.target.closest('a'));
  statistic.innerHTML = '';
  document.querySelectorAll('.correct-answer').forEach((el) => el.classList.remove('correct-answer'));
  if (target === undefined) {
    return;
  }
  HAMBURGER.classList.toggle('is-active');
  SIDEBAR.classList.toggle('view');
  if (MODE.checked === true) {
    reset();
    startPlay.classList.toggle('press-play');
    startPlay.classList.toggle('press-repeat');
  }
  selectCategory(target);
};

/* section navigation */

section.onclick = function categoryCards(event) {
  const categoryImages = cards[categoryNumber].map((a) => a.image);
  if (categoryNumber === 0) {
    const CARDS_SELECT = document.querySelectorAll('.bg-info');
    const CATEGORY = event.target.closest('.bg-info');
    const target = Array.from(CARDS_SELECT).indexOf(CATEGORY) + 1;
    if (target === undefined) {
      return;
    }
    if (MODE.checked === true) {
      reset();
    }
    selectCategory(target);
  } else if (MODE.checked === false) {
    const audioSrc = cards[categoryNumber].map((a) => a.audioSrc);
    const numberImage = categoryImages.indexOf(event.target.getAttribute('src'));
    audio.src = audioSrc[numberImage];
    play();
  } else if (MODE.checked === true && startPlay.className === 'btn btn-danger disable play-mode press-repeat' && event.target.className === 'category-picture') {
    const selectedAnswer = categoryImages.indexOf(event.target.getAttribute('src'));
    if (correctAnswer === selectedAnswer) {
      playAudio('assets/audio/correct.mp3');
      const correct = document.createElement('div');
      correct.className = 'sign-correct';
      statistic.appendChild(correct);
      event.target.classList.add('correct-answer');
      startGame();
    } else {
      const correct = document.createElement('div');
      correct.className = 'sign-fail';
      correct.src = 'assets/img/wrong.png';
      statistic.appendChild(correct);
      audio.src = 'assets/audio/wrong.mp3';
      play();
    }

    if (currentAudio.length === 0 && statistic.childElementCount === 8) {
      audio.src = 'assets/audio/win.mp3';
      congrats();
      play();
      setTimeout(closeCongrats, 7000);
      setTimeout(resetGame, 7000);
      categoryNumber = 0;
    }

    if (currentAudio.length === 0 && statistic.childElementCount !== 8) {
      audio.src = 'assets/audio/fail.mp3';
      play();
      fail();
      setTimeout(closeFail, 3000);
      setTimeout(resetGame, 3000);
      categoryNumber = 0;
    }
  }
};

// export default cards;
