const icons = ['🌟','🚀','🍕','🎧','🐱','🍄','🪐','🦄'];
let cardValues = [...icons, ...icons]; // Duplicate for pairs
let flippedCards = [];
let matchedCards = 0;
let score = 0;

const board = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const resetBtn = document.getElementById('reset-btn');

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function createCard(value) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.value = value;

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${value}</div>
      <div class="card-back">❓</div>
    </div>
  `;

  card.addEventListener('click', () => flipCard(card));
  return card;
}

function flipCard(card) {
  if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.value === card2.dataset.value) {
    score += 10;
    matchedCards += 2;
    flippedCards = [];

    if (matchedCards === cardValues.length) {
      setTimeout(() => alert('🎉 You matched all the cards!'), 500);
    }
  } else {
    score -= 2;
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      flippedCards = [];
    }, 1000);
  }

  updateScore();
}

function updateScore() {
  scoreDisplay.textContent = `Score: ${score}`;
}

function startGame() {
  board.innerHTML = '';
  score = 0;
  matchedCards = 0;
  updateScore();
  shuffle(cardValues);
  cardValues.forEach(value => {
    const card = createCard(value);
    board.appendChild(card);
  });
}

resetBtn.addEventListener('click', startGame);

// Launch game on load
startGame();