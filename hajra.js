var button = document.getElementById('rules');
var play = document.getElementById('play');
var choice = document.getElementsByClassName('choice');
const choicearray = Array.from(choice);
var afterchoice = document.getElementsByClassName('afterchoice');
var check = document.getElementById('check');
var paper = document.getElementById('paper');
var rock = document.getElementById('rock');
var scissors = document.getElementById('scissors');
var mychoice = document.getElementById('mychoice');
var house = document.getElementById('house');
var housechoice = document.getElementById('housechoice');
var again = document.getElementById('again');
var counter = document.getElementById('counter');
var count = 0;
var statediv = document.getElementById('statediv');
var state = document.getElementById('state');
var darkarea = document.getElementById('darkarea');


//function
//choose random
function random() {
    var arr = [];
    for (let i = 0; i < choice.length; i++) {
        arr.push(choice[i].className);
        }
    let n = Math.floor(Math.random() * 3);
    return arr[n];
}










//show rules
button.addEventListener('click', function() {
    if (button.getAttribute('data') == 'rules') {
        button.setAttribute('data', 'hide');
        button.innerHTML = 'hide';
        rulesimage.style.display = 'block';
        play.style.display = 'none';
        check.style.display = 'none';
        statediv.style.display = 'none';
    }
    else {
        button.setAttribute('data', 'rules');
        button.innerHTML = 'rules';
        rulesimage.style.display = 'none';
        play.style.display = 'grid';
        check.style.display = 'none';
        statediv.style.display = 'none';
        house.style.display = 'none';
    }
});




//play
for (let i = 0; i < choice.length; i++){
    choice[i].addEventListener('click', function() {
        play.style.display = 'none';
        check.style.display = 'flex';
        darkarea.style.display = 'inline-block';
        let choiceClass = choice[i].getAttribute('class');
        let choiceid = choice[i].getAttribute('id');
        mychoice.setAttribute('class', choiceClass);
        mychoice.setAttribute('id', choiceid);
        mychoice.innerHTML = choice[i].innerHTML;
        let houseattr = random();
        setTimeout(function(){
        housechoice.setAttribute('class', houseattr);
        let housse = document.getElementsByClassName(houseattr);
        housechoice.setAttribute('id', housse[0].getAttribute('id'));
        housechoice.innerHTML = housse[0].innerHTML; 
        darkarea.style.display = 'none';
        house.style.display = 'flex';
        whowins();} , 1000);    
    });
}

//again
again.addEventListener('click', function() {
    play.style.display = 'grid';
    check.style.display = 'none';
    darkarea.style.display = 'none';
    statediv.style.display = 'none';
    house.style.display = 'none'; 
});

//who wins
function whowins(){
     let myid = mychoice.getAttribute('id');
     let houseid = housechoice.getAttribute('id');
     let result = myid + '-' + houseid;

     switch (result) {
        case 'rock-scissors':
        case 'paper-rock':
        case 'scissors-paper':
             count = count + 1;
             counter.innerHTML = count;
             let win = 'YOU WIN';
             state.innerHTML = win;
             statediv.style.display = 'flex';
             mychoice.classList.add('winner');
             break;

        case 'rock-rock':
        case 'paper-paper':
        case 'scissors-scissors':
                let draw = 'DRAW';
                state.innerHTML = draw;
                statediv.style.display = 'flex';
                break;


         default:
             if (myid !== houseid) {
                 count = count - 1;
                 counter.innerHTML = count;
                 let lose = 'YOU LOSE';
                 state.innerHTML = lose; 
                 statediv.style.display = 'flex';
                 housechoice.classList.add('winner');
             }
             break;
     }
}


/* for media querry
 var mediaq = window.matchMedia('(max-width: 800px)');
 if (mediaq.matches) {
    check.appendChild(statedi);
}*/
















