//where to add:
const placesName = document.getElementById('places-name');
//what to be add:
const li = document.createElement('li');
li.innerText = 'Jaflong';

//add the child:
placesName.appendChild(li);


//where to add
const mainContainer = document.getElementById('main-container');

//what to be add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Kacchi';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Morog Polaw';
ul.appendChild(li3);
section.appendChild(ul);
//append the child
mainContainer.appendChild(section);
//-------------------------------------------------------
//set html directly
const sectionGame = document.createElement('section');
sectionGame.innerHTML = `
<h1>Game List</h1>
<ul>
    <li>eFootball</li>
    <li>PUBG</li>
    <li>Free Fire</li>
    <li>Cash Of Clan</li>
</ul>
`
mainContainer.appendChild(sectionGame);
//--------------------------------------------------------
//for practice:
const mainContainer2 = document.getElementById('main-container');

const newsPaper = document.createElement('section');
const h2 = document.createElement('h2');
h2.innerText = "Top 3 NewsPaper";
newsPaper.appendChild(h2);

const ul2 = document.createElement('ul')
const li4 = document.createElement('li');
li4.innerText = 'The Daily Star';
ul2.appendChild(li4);

const li5 = document.createElement('li');
li5.innerText = 'Prothom Alo';
ul2.appendChild(li5);

const li6 = document.createElement('li');
li6.innerText = 'Jugantor';
ul2.appendChild(li6);


newsPaper.appendChild(ul2)
mainContainer2.appendChild(newsPaper);

//for practice

const mainContainer3 = document.getElementById('main-container');

const sports = document.createElement('section');
const h3 = document.createElement('h1');
h3.innerText = 'Sports list';
sports.appendChild(h3);

const ul3 = document.createElement('ul');
const li7 = document.createElement('li');
li7.innerText = 'Cricket';
ul3.appendChild(li7);



const li8 = document.createElement('li');
li8.innerText = 'Football';
ul3.appendChild(li8);

const li9 = document.createElement('li');
li9.innerText = 'Car Race';
ul3.appendChild(li9);


sports.appendChild(ul3);
mainContainer3.append(sports);