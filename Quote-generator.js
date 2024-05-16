

let author = document.getElementById("author")
let quote = document.getElementById("quote")
let button = document.getElementById("randoms")



let multiple_quotes = [
    {
        'author': ' Jim Rohn',
        'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {
        'author': ' Frank Zappa',
        'quote': 'So many books, so little time.'
    },
    {
        'author': ' Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },
    {
        'author': ' Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {
        'author': ' Oscar Wilde',
        'quote': 'To live is the rarest thing in the world. Most people exist, that is all.'
    },
    {
        'author': ' Elbert Hubbard',
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {
        'author': ' Marcus Tullius Cicero',
        'quote': 'A room without books is like a body without a soul.'
    }
];

// code with repeat:
// function showQuote() {
//     let random_quotes = Math.floor(Math.random() * multiple_quotes.length)

//             quote.textContent = `\"${multiple_quotes[random_quotes].quote}\"`;
//             author.innerHTML = `--${multiple_quotes[random_quotes].author}`;
//             filtering.push(multiple_quotes[random_quotes]);

//             return (filtering);
//     };

// button.addEventListener('click', showQuote);



/*<-- code without repitition: --> */ 

let filtering = []

function showQuote() {
    let random_quotes = Math.floor(Math.random() * multiple_quotes.length)


        if (filtering.includes(multiple_quotes[random_quotes])) {
            filtering.splice(showQuote(), 1);
            return (filtering);


        } else {
            quote.textContent = `\"${multiple_quotes[random_quotes].quote}\"`;
            author.innerHTML = `--${multiple_quotes[random_quotes].author}`;
            filtering.push(multiple_quotes[random_quotes])
            return (filtering);
        }
    };

button.addEventListener('click', showQuote);



