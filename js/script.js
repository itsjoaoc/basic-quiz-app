
//Sports
const sportsQuestions = [
    { question: "Which country won the UEFA Euro 2016 football championship?", options: ["Germany", "Portugal", "France", "Spain"], correctAnswer: "Portugal" },
    { question: "In which city is Wimbledon, the famous tennis tournament, held?", options: ["Manchester", "London", "Paris", "Edinburgh"], correctAnswer: "London" },
    { question: "Which football club is based in Munich, Germany?", options: ["Borussia Dortmund", "RB Leipzig", "Bayern Munich", "Schalke 04"], correctAnswer: "Bayern Munich" },
    { question: "Who won the 2023 Tour de France?", options: ["Jonas Vingegaard", "Tadej Pogačar", "Primož Roglič", "Geraint Thomas"], correctAnswer: "Jonas Vingegaard" },
    { question: "Which Italian city is home to the football club Juventus?", options: ["Milan", "Rome", "Turin", "Naples"], correctAnswer: "Turin" },
    { question: "In which sport does Rafael Nadal compete?", options: ["Golf", "Tennis", "Cycling", "Basketball"], correctAnswer: "Tennis" },
    { question: "Who won the 2023 Ballon d'Or award?", options: ["Erling Haaland", "Kylian Mbappé", "Lionel Messi", "Kevin De Bruyne"], correctAnswer: "Lionel Messi"},
    { question: "What is the national sport of Scotland?", options: ["Rugby", "Shinty", "Golf", "Football"], correctAnswer: "Shinty" },
    { question: "Which English football club has the nickname 'The Reds'?", options: ["Arsenal", "Manchester United", "Liverpool", "Chelsea"], correctAnswer: "Liverpool" },
    { question: "Who holds the record for the most Grand Slam titles in men’s tennis (as of 2024)?", options: ["Novak Djokovic", "Roger Federer", "Rafael Nadal", "Andy Murray"], correctAnswer: "Novak Djokovic" },
    { question: "Which country is famous for the biathlon sport?", options: ["Norway", "Spain", "Italy", "Greece"], correctAnswer: "Norway" },
    { question: "Which footballer is known as 'CR7'?", options: ["Cristiano Ronaldo", "Luka Modrić", "Kylian Mbappé", "Karim Benzema"], correctAnswer: "Cristiano Ronaldo" },
    { question: "Which French football club is based in Paris?", options: ["Lyon", "Marseille", "Bordeaux", "Paris Saint-Germain"], correctAnswer: "Paris Saint-Germain" },
    { question: "What is the home stadium of FC Barcelona?", options: ["Santiago Bernabéu", "Camp Nou", "Mestalla", "Wanda Metropolitano"], correctAnswer: "Camp Nou" },
    { question: "In which sport is the 'Six Nations Championship' contested?", options: ["Cricket", "Rugby Union", "Football", "Athletics"], correctAnswer: "Rugby Union" },
    { question: "Which country has won the most UEFA European Championships?", options: ["Germany", "Spain", "Italy", "France"], correctAnswer: "Germany" },
    { question: "Which famous race takes place annually in Monaco?", options: ["Le Mans 24 Hours", "Monaco Grand Prix", "Tour de France", "Dakar Rally"], correctAnswer: "Monaco Grand Prix" },
    { question: "Which city hosted the 2012 Summer Olympics?", options: ["Paris", "Berlin", "London", "Rome"], correctAnswer: "London" },
    { question: "Which football club won the 2023 UEFA Champions League?", options: ["Real Madrid", "Manchester City", "Inter Milan", "Liverpool"], correctAnswer: "Manchester City" },
    { question: "In which country was skier Petra Vlhová born?", options: ["Austria", "Switzerland", "Slovakia", "Czech Republic"], correctAnswer: "Slovakia" }
];

//Literature
const literatureQuestions = [
    { question: "Who wrote the play 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Oscar Wilde"], correctAnswer: "William Shakespeare" },
    { question: "Which novel begins with the line 'Call me Ishmael'?", options: ["Moby-Dick", "The Old Man and the Sea", "The Odyssey", "Heart of Darkness"], correctAnswer: "Moby-Dick" },
    { question: "Who is the author of 'Pride and Prejudice'?", options: ["Emily Brontë", "Jane Austen", "Mary Shelley", "Charlotte Brontë"], correctAnswer: "Jane Austen" },
    { question: "In which country was the author Franz Kafka born?", options: ["Germany", "Czech Republic", "Austria", "Poland"], correctAnswer: "Czech Republic" },
    { question: "Who wrote 'The Divine Comedy'?", options: ["Homer", "Virgil", "Dante Alighieri", "Boccaccio"], correctAnswer: "Dante Alighieri" },
    { question: "Which novel features the character Jay Gatsby?", options: ["The Great Gatsby", "Of Mice and Men", "To Kill a Mockingbird", "The Catcher in the Rye"], correctAnswer: "The Great Gatsby" },
    { question: "Who wrote 'Les Misérables'?", options: ["Victor Hugo", "Alexandre Dumas", "Gustave Flaubert", "Émile Zola"], correctAnswer: "Victor Hugo" },
    { question: "What is the name of Sherlock Holmes' loyal assistant?", options: ["Dr. Watson", "Inspector Lestrade", "Mycroft Holmes", "John Carter"], correctAnswer: "Dr. Watson" },
    { question: "Who wrote 'One Hundred Years of Solitude'?", options: ["Gabriel García Márquez", "Jorge Luis Borges", "Isabel Allende", "Mario Vargas Llosa"], correctAnswer: "Gabriel García Márquez" },
    { question: "Which Shakespeare play features Rosencrantz and Guildenstern?", options: ["Macbeth", "Othello", "Hamlet", "King Lear"], correctAnswer: "Hamlet" },
    { question: "Who wrote 'The Picture of Dorian Gray'?", options: ["Oscar Wilde", "Bram Stoker", "George Bernard Shaw", "Thomas Hardy"], correctAnswer: "Oscar Wilde" },
    { question: "What is the name of the fictional town where 'To Kill a Mockingbird' is set?", options: ["Maycomb","Monroeville","Oxford","Jefferson"], correctAnswer: "Maycomb"},
    { question: "Who wrote 'The Lord of the Rings'?", options: ["C.S. Lewis", "Terry Pratchett", "J.R.R. Tolkien", "George R.R. Martin"], correctAnswer: "J.R.R. Tolkien" },
    { question: "Which poet wrote 'The Raven'?", options: ["Edgar Allan Poe", "Robert Frost", "Walt Whitman", "T.S. Eliot"], correctAnswer: "Edgar Allan Poe" },
    { question: "What is the name of the young wizard in J.K. Rowling's books?", options: ["Harry Potter", "Frodo Baggins", "Percy Jackson", "Artemis Fowl"], correctAnswer: "Harry Potter" },
    { question: "Who wrote 'The Metamorphosis'?", options: ["Franz Kafka", "Albert Camus", "Jean-Paul Sartre", "Hermann Hesse"], correctAnswer: "Franz Kafka" },
    { question: "In George Orwell’s '1984', who is the totalitarian leader?", options: ["Big Brother", "Comrade Stalin", "The Overseer", "The Director"], correctAnswer: "Big Brother" },
    { question: "Which Irish author wrote 'Ulysses'?", options: ["Samuel Beckett", "James Joyce", "Jonathan Swift", "Oscar Wilde"], correctAnswer: "James Joyce" },
    { question: "Who wrote 'The Chronicles of Narnia'?", options: ["Philip Pullman", "C.S. Lewis", "J.K. Rowling", "J.R.R. Tolkien"], correctAnswer: "C.S. Lewis" },
    { question: "What novel begins 'It was the best of times, it was the worst of times'?", options: ["A Tale of Two Cities", "Great Expectations", "Oliver Twist", "David Copperfield"], correctAnswer: "A Tale of Two Cities" }
];

//Music
const musicQuestions = [
    { question: "Which band recorded 'Hey Jude'?", options: ["The Rolling Stones", "The Beatles", "The Who", "Queen"], correctAnswer: "The Beatles" },
    { question: "Who is known as the 'King of Pop'?", options: ["Elvis Presley", "Michael Jackson", "Prince", "Justin Timberlake"], correctAnswer: "Michael Jackson" },
    { question: "Which composer wrote the 'Fifth Symphony'?", options: ["Mozart", "Beethoven", "Bach", "Tchaikovsky"], correctAnswer: "Beethoven" },
    { question: "What country did ABBA come from?", options: ["Denmark", "Sweden", "Norway", "Finland"], correctAnswer: "Sweden" },
    { question: "Who sang 'Someone Like You'?", options: ["Adele", "Beyoncé", "Rihanna", "Taylor Swift"], correctAnswer: "Adele" },
    { question: "Which instrument has keys, pedals, and strings?", options: ["Piano", "Violin", "Guitar", "Harp"], correctAnswer: "Piano" },
    { question: "Who is the lead singer of U2?", options: ["Bono", "Sting", "Mick Jagger", "Freddie Mercury"], correctAnswer: "Bono" },
    { question: "Which classical composer became deaf later in life?", options: ["Beethoven", "Chopin", "Mozart", "Liszt"], correctAnswer: "Beethoven" },
    { question: "What is the national anthem of France?", options: ["La Marseillaise", "God Save the King", "Ode to Joy", "Bella Ciao"], correctAnswer: "La Marseillaise" },
    { question: "Who wrote the opera 'The Magic Flute'?", options: ["Mozart", "Verdi", "Puccini", "Handel"], correctAnswer: "Mozart" },
    { question: "Which British singer released 'Shape of You'?", options: ["Ed Sheeran", "Sam Smith", "Harry Styles", "Adele"], correctAnswer: "Ed Sheeran" },
    { question: "Which instrument does Yo-Yo Ma play?", options: ["Cello", "Violin", "Piano", "Flute"], correctAnswer: "Cello" },
    { question: "Who was the lead singer of Queen?", options: ["Freddie Mercury", "David Bowie", "Elton John", "Rod Stewart"], correctAnswer: "Freddie Mercury" },
    { question: "Which composer wrote 'The Four Seasons'?", options: ["Vivaldi", "Handel", "Haydn", "Bach"], correctAnswer: "Vivaldi" },
    { question: "Which festival is held annually in Glastonbury, UK?", options: ["Glastonbury Festival", "Tomorrowland", "Woodstock", "Isle of Wight"], correctAnswer: "Glastonbury Festival" },
    { question: "Who sang 'Bohemian Rhapsody'?", options: ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"], correctAnswer: "Queen" },
    { question: "Which pop group sang 'Dancing Queen'?", options: ["ABBA", "Boney M.", "Bee Gees", "The Supremes"], correctAnswer: "ABBA" },
    { question: "Which instrument does a drummer play?", options: ["Drums", "Guitar", "Piano", "Trumpet"], correctAnswer: "Drums" },
    { question: "What is the real name of the artist known as 'Elton John'?", options: ["Reginald Kenneth Dwight", "David Robert Jones", "Gordon Matthew Thomas Sumner", "George Michael"], correctAnswer: "Reginald Kenneth Dwight" },
    { question: "Who won Eurovision 2023?", options: ["Sweden", "Finland", "Ukraine", "Norway"], correctAnswer: "Sweden" }
];

//Cinema
const cinemaQuestions = [
    { question: "Who directed 'Inception'?", options: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Ridley Scott"], correctAnswer: "Christopher Nolan" },
    { question: "Which movie features the line 'I'll be back'?", options: ["Terminator", "Rambo", "Predator", "Die Hard"], correctAnswer: "Terminator" },
    { question: "Who played Jack in 'Titanic'?", options: ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", "Johnny Depp"], correctAnswer: "Leonardo DiCaprio" },
    { question: "Which country hosts the Cannes Film Festival?", options: ["France", "Italy", "Spain", "Germany"], correctAnswer: "France" },
    { question: "Who directed 'Pulp Fiction'?", options: ["Quentin Tarantino", "Martin Scorsese", "Guy Ritchie", "David Fincher"], correctAnswer: "Quentin Tarantino" },
    { question: "Which movie won Best Picture at the 2020 Oscars?", options: ["Parasite", "1917", "Joker", "Ford v Ferrari"], correctAnswer: "Parasite" },
    { question: "Who played Harry Potter?", options: ["Daniel Radcliffe", "Rupert Grint", "Elijah Wood", "Tom Felton"], correctAnswer: "Daniel Radcliffe" },
    { question: "What is the name of the hobbit played by Elijah Wood?", options: ["Frodo", "Bilbo", "Sam", "Pippin"], correctAnswer: "Frodo" },
    { question: "Which director created 'Jurassic Park'?", options: ["Steven Spielberg", "James Cameron", "Peter Jackson", "Ridley Scott"], correctAnswer: "Steven Spielberg" },
    { question: "In which film does Heath Ledger play the Joker?", options: ["The Dark Knight", "Batman Begins", "Joker", "Suicide Squad"], correctAnswer: "The Dark Knight" },
    { question: "Which actress played Hermione Granger?", options: ["Emma Watson", "Keira Knightley", "Natalie Portman", "Anne Hathaway"], correctAnswer: "Emma Watson" },
    { question: "Which movie features the quote 'May the Force be with you'?", options: ["Star Wars", "Star Trek", "Avatar", "The Matrix"], correctAnswer: "Star Wars" },
    { question: "Who directed 'Avatar'?", options: ["James Cameron", "Steven Spielberg", "George Lucas", "Ridley Scott"], correctAnswer: "James Cameron" },
    { question: "Which film series features the character James Bond?", options: ["007", "Mission: Impossible", "Bourne", "Kingsman"], correctAnswer: "007" },
    { question: "Which actor starred in 'Gladiator'?", options: ["Russell Crowe", "Tom Hanks", "Hugh Jackman", "Matt Damon"], correctAnswer: "Russell Crowe" },
    { question: "Who directed 'The Lord of the Rings' trilogy?", options: ["Peter Jackson", "Christopher Nolan", "George Lucas", "Ron Howard"], correctAnswer: "Peter Jackson" },
    { question: "Which animated film features Elsa and Anna?", options: ["Frozen", "Moana", "Tangled", "Encanto"], correctAnswer: "Frozen" },
    { question: "Which movie features a clown named Pennywise?", options: ["It", "Joker", "The Nun", "Scream"], correctAnswer: "It" },
    { question: "Who directed 'The Godfather'?", options: ["Francis Ford Coppola", "Martin Scorsese", "Brian De Palma", "Ridley Scott"], correctAnswer: "Francis Ford Coppola" },
    { question: "What is the first name of the Pixar robot in 'WALL-E'?", options: ["WALL-E", "EVE", "R2D2", "BB-8"], correctAnswer: "WALL-E" }
];


//Geography
const geographyQuestions = [
    { question: "What is the capital of France?", options: ["Paris", "Lyon", "Marseille", "Nice"], correctAnswer: "Paris" },
    { question: "Which continent is Italy in?", options: ["Europe", "Asia", "Africa", "South America"], correctAnswer: "Europe" },
    { question: "Which river flows through London?", options: ["Thames", "Seine", "Danube", "Rhine"], correctAnswer: "Thames" },
    { question: "What is the largest desert in the world?", options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"], correctAnswer: "Antarctic Desert"},
    { question: "Mount Vesuvius overlooks which Italian city?", options: ["Naples", "Rome", "Florence", "Milan"], correctAnswer: "Naples" },
    { question: "Which ocean borders Portugal?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], correctAnswer: "Atlantic" },
    { question: "What is the capital of Spain?", options: ["Madrid", "Barcelona", "Seville", "Valencia"], correctAnswer: "Madrid" },
    { question: "Which European country has fjords?", options: ["Norway", "Sweden", "Denmark", "Finland"], correctAnswer: "Norway" },
    { question: "Which is the smallest country in the world?", options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"], correctAnswer: "Vatican City" },
    { question: "What is the highest mountain in Europe?", options: ["Mont Blanc", "Matterhorn", "Elbrus", "Ben Nevis"], correctAnswer: "Elbrus" },
    { question: "What is the capital of Germany?", options: ["Berlin", "Munich", "Frankfurt", "Hamburg"], correctAnswer: "Berlin" },
    { question: "Which river runs through Paris?", options: ["Seine", "Rhine", "Danube", "Loire"], correctAnswer: "Seine" },
    { question: "Which country is known as the Land of Fire and Ice?", options: ["Iceland", "Norway", "Greenland", "Finland"], correctAnswer: "Iceland" },
    { question: "Which country has the city of Prague?", options: ["Czech Republic", "Poland", "Slovakia", "Austria"], correctAnswer: "Czech Republic" },
    { question: "What is the capital of Greece?", options: ["Athens", "Thessaloniki", "Patras", "Heraklion"], correctAnswer: "Athens" },
    { question: "Which country has the most islands in the world?", options: ["Sweden", "Indonesia", "Philippines", "Canada"], correctAnswer: "Sweden" },
    { question: "The Pyrenees Mountains separate France from which country?", options: ["Spain", "Italy", "Switzerland", "Germany"], correctAnswer: "Spain" },
    { question: "What is the longest river in Europe?", options: ["Volga", "Danube", "Rhine", "Elbe"], correctAnswer: "Volga" },
    { question: "Which sea lies between Europe and Africa?", options: ["Mediterranean Sea", "Baltic Sea", "Black Sea", "Caspian Sea"], correctAnswer: "Mediterranean Sea" },
    { question: "What is the capital of Norway?", options: ["Oslo", "Stockholm", "Copenhagen", "Helsinki"], correctAnswer: "Oslo" }
];

// --- Combine & shuffle ---
const allQuestions = [
    ...sportsQuestions,
    ...literatureQuestions,
    ...musicQuestions,
    ...cinemaQuestions,
    ...geographyQuestions
];

let quiz = shuffle(allQuestions);

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const restartBtn = document.getElementById("restart-btn");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

window.addEventListener("load", () => {
    restartBtn.style.display = "none"
    showQuestion();
});

// --- Quiz logic ---
let current = 0;
let score = `${current} / ${quiz.length}`;
let gameOver = false;

restartBtn.addEventListener('click', function () {
    restartQuiz();
});

function showQuestion() {
    nextBtn.disabled = true;
    optionsEl.innerHTML = "";
    const q = quiz[current];
    questionEl.textContent = `${q.question}`;
    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "btn btn-lg btn-option mb-3";
        btn.onclick = () => selectAnswer(btn, q.correctAnswer);
        optionsEl.appendChild(btn);
    });
    updateScore();
}

function selectAnswer(btn, correct) {
    const allBtns = document.querySelectorAll(".btn-option");
    allBtns.forEach(function (b) { if (b !== btn) { b.disabled = true } });

    if (gameOver) return;

    if (btn.textContent === correct) {
        btn.classList.remove("btn-option");
        btn.classList.add("btn-success");
        nextBtn.disabled = false;
    } else {
        gameOver = true;
        btn.classList.remove("btn-option");
        btn.classList.add("btn-danger");
        nextBtn.disabled = true;
        allBtns.forEach(function (bt) {
            if (bt.textContent === correct) {
                bt.disabled = false;
                bt.classList.remove("btn-option");
                bt.classList.add("btn-success");
            }
        });

        current = 0;
        restartBtn.style.display = "block";
    }
}

nextBtn.addEventListener("click", () => {

    if (nextBtn.disabled) return;

    if (current < quiz.length) {
        showQuestion();
    } else {
        endQuiz();
    }
});

function updateScore() {
    current++;
    score = `${current} / ${quiz.length}`;
    document.getElementById("score").textContent = score;
}

function endQuiz() {
    nextBtn.disabled = true;
}

function restartQuiz() {
    current = 0;
    gameOver = false;
    quiz = shuffle(allQuestions);
    showQuestion();
    nextBtn.disabled = true;
    restartBtn.style.display = "none";
}