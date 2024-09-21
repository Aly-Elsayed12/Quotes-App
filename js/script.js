var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    auther: "― Oscar Wilde",
  },
  { quote: "“So many books, so little time.”", auther: "― Frank Zappa" },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    auther: "― Albert Einstein",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    auther: "― Marcus Tullius Cicero",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    auther: "― Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    auther: "― Mahatma Gandhi",
  },
];

let prev;

function newQuote() {
  var random = genrationNumber();
  while (random === prev) {
    var random = genrationNumber();
  }

  prev = random;

  displayQuote(random);
}

function genrationNumber() {
  return Math.floor(Math.random() * quotes.length);
}

function displayQuote(num) {
  document.getElementById("quote").innerHTML = `${quotes[num].quote}`;
  document.getElementById("auther").innerHTML = `${quotes[num].auther}`;
}
