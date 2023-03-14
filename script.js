//your code here

const bands = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'The Who'];

// Function to strip articles from the beginning of a string
function stripArticle(str) {
  return str.replace(/^(a |an |the )/i, '').trim();
}

// Sort the array in lexicographic order excluding articles
const sortedBands = bands.sort((a, b) => stripArticle(a) > stripArticle(b) ? 1 : -1);

// Get the ul element and populate it with li elements containing the sorted band names
const ul = document.querySelector('#bands');
ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
