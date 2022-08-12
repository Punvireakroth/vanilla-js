// Get Quote From API

let apiQuote = [];

// New quote

function newQuote() {
  // pick random quote from API quote array
  const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
  console.log(quote);
}

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuote = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error here like exception
  }
}

// On Load

getQuotes();
