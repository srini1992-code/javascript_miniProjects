var quotes = [
  'Life is about making an impact, not making an income. --Kevin Kruse',
  'Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill',
  'Strive not to be a success, but rather to be of value. –Albert Einstein',

  'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  –Robert Frost',

  'I attribute my success to this: I never gave or took any excuse. –Florence Nightingale',
  'You miss 100% of the shots you don’t take. –Wayne Gretzky',

  'The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart',
  'Every strike brings me closer to the next home run. –Babe Ruth',
  'Definiteness of purpose is the starting point of all achievement. –W. Clement Stone',
  "Life isn't about getting and having, it's about giving and being. –Kevin Kruse",
  'Life is what happens to you while you’re busy making other plans. –John Lennon',
  'We become what we think about. –Earl Nightingale',

  'Life is 10% what happens to me and 90% of how I react to it. –Charles Swindoll',

  'The most common way people give up their power is by thinking they don’t have any. –Alice Walker',

  'The mind is everything. What you think you become.  –Buddha',

  'The best time to plant a tree was 20 years ago. The second best time is now. –Chinese Proverb',

  'An unexamined life is not worth living. –Socrates',

  'Eighty percent of success is showing up. –Woody Allen',

  'Your time is limited, so don’t waste it living someone else’s life. –Steve Jobs',

  'Winning isn’t everything, but wanting to win is. –Vince Lombardi',
  'I am not a product of my circumstances. I am a product of my decisions. –Stephen Covey',

  'Every child is an artist.  The problem is how to remain an artist once he grows up. –Pablo Picasso',

  'You can never cross the ocean until you have the courage to lose sight of the shore. –Christopher Columbus',
  'Either you run the day, or the day runs you. –Jim Rohn',
  'Whether you think you can or you think you can’t, you’re right. –Henry Ford',
  'The best revenge is massive success. –Frank Sinatra',
];

const getAQuote = document.querySelector('#btn');
const newQuote = document.querySelector('#newQuoteSection');
getAQuote.addEventListener('click', function () {
  var randomNumber = Math.trunc(Math.random() * quotes.length);
  console.log(randomNumber);
  newQuote.textContent = quotes[randomNumber];
  console.log(newQuote.innertext);
});
// getAQuote();
