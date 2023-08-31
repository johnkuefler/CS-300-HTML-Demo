const memeTexts = [
  'Why so serious?',
  'One does not simply walk into Mordor',
  'This is Sparta!',
  'Brace yourselves, X is coming',
  'I can haz cheezburger?',
  'Such wow!',
  'Very X, much Y',
  'Am I the only one around here',
  'Keep calm and X on',
  'That escalated quickly',
  'X, X everywhere',
  'I don’t always X, but when I do, Y',
  'X be like…',
  'What if I told you',
  'Y U NO X?',
  "Ain't nobody got time for that",
  'You had one job',
  'Ermahgerd!',
  'Bad Luck Brian does X, gets Y',
  'Success Kid',
  'I should buy a boat',
  'Conspiracy Keanu',
  'Awkward Penguin',
  'Confession Bear',
  'First World Problems',
  'Futurama Fry',
  'The Most Interesting Man in the World',
  'Overly Attached Girlfriend',
  'Good Guy Greg',
  'Scumbag Steve',
  'Grumpy Cat',
  'Philosoraptor',
  'Pepe the Frog',
  'Two Buttons',
  'Mocking SpongeBob',
  'This is fine',
  'Dank Memes',
  'Harambe',
  'Dat Boi',
  'Me and the boys',
  'OK Boomer',
  'Karen',
  'How do you do, fellow kids?',
  'Big Brain',
  'To be continued...',
  "It's a trap!",
  "Wait, that's illegal",
  'Why are you like this?',
  'Say sike right now',
  'Ight Imma head out',
  "I'm in danger",
  'Is this a pigeon?',
  "Here's Johnny!",
  'Who killed Hannibal?',
  'They had us in the first half, not gonna lie',
  "You can't defeat me",
  "Why can't I hold all these limes?",
  'You underestimate my power',
  "I'm sorry, little one",
  'Visible confusion',
  'You guys are getting paid?',
  'Not stonks',
  'I fear no man',
  "It's over 9000!",
  'Do it for her',
  'I see this as an absolute win',
  'Minecraft good, Fortnite bad',
  'No, this is Patrick',
  "He's too dangerous to be left alive",
  'Reality is often disappointing',
  "I'm the captain now",
  "It ain't much but it's honest work",
  'FBI, open up!',
  'Well yes, but actually no',
  'I guide others to a treasure I cannot possess',
  "I'm inevitable",
  'Impossible, perhaps the archives are incomplete',
  'I was not expecting that',
  'Get out of my swamp!',
  "I'll take your entire stock",
  'I have several questions',
  "You weren't supposed to do that",
  'Press F to pay respects',
  "I've won, but at what cost?",
  'Who are you so wise in the ways of science?',
  'You dare oppose me mortal',
  'I time travel, but to what year?',
  "That's a lot of damage!",
  'Now this looks like a job for me',
  "I don't know who you are, but I will find you and I will kill you",
  'Are you not entertained?',
  'You either die a hero, or live long enough to see yourself become the villain',
  'I have spoken',
  "Who's gonna tell him?",
  'What are you doing step-bro?',
];

document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('generate-button');
  generateButton.addEventListener('click', generateMeme);
});

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function fetchRandomMemeImage() {
  const res = await fetch('https://api.imgflip.com/get_memes');
  const data = await res.json();
  const randomMeme = getRandomItem(data.data.memes);
  return randomMeme.url;
}

async function generateMeme() {
  const memeImage = document.getElementById('meme-image');
  const memeText = document.getElementById('meme-text');

  const randomImage = await fetchRandomMemeImage();
  const randomText = getRandomItem(memeTexts);

  memeImage.src = randomImage;
  memeText.innerText = randomText;
}
