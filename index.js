const homeEl = document.getElementById('home');
const visitorEl = document.getElementById('visitor');

const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');

const btnOne_vis = document.getElementById('btn-vis-one');
const btnTwo_vis = document.getElementById('btn-vis-two');
const btnThree_vis = document.getElementById('btn-vis-three');

let homeScore = 0;
let visitorScore = 0;

homeEl.textContent = homeScore;
visitorEl.textContent = visitorScore;


function updateHomeScore(points) {
    homeScore += points;
    homeEl.textContent = homeScore;
    
    whoIsWinning();
    
    if(homeScore >= 1) {
        btnOne.disabled = false;
    } else {
        btnOne.disabled = true;
    };
    
    if(homeScore >= 2) {
        btnTwo.disabled = false;
    } else {
        btnTwo.disabled = true;
    }
    
    if(homeScore >= 3) {
        btnThree.disabled = false;
    } else {
        btnThree.disabled = true;
    }
};

//VISITOR SCORE

function updateVisitorScore(points) {
    visitorScore += points;
    visitorEl.textContent = visitorScore;
    
    whoIsWinning();
    
    if(visitorScore >= 1) {
        btnOne_vis.disabled = false;
    } else {
        btnOne_vis.disabled = true;
    };
    
    if(visitorScore >= 2) {
        btnTwo_vis.disabled = false;
    } else {
        btnTwo_vis.disabled = true;
    }
    
    if(visitorScore >= 3) {
        btnThree_vis.disabled = false;
    } else {
        btnThree_vis.disabled = true;
    }
}

//RESET SCORE

function reset() {
    homeScore = 0;
    homeEl.textContent = 0;
    homeEl.classList.remove("winning");
    
    visitorScore = 0;
    visitorEl.textContent = 0;
    visitorEl.classList.remove("winning");
}

// WHO'S WINNING (GREEN BORDER)

function whoIsWinning() {
    if(homeScore > visitorScore) {
        visitorEl.classList.remove("winning");
        homeEl.classList.add("winning");
        console.log('winning HOME', typeof(homeScore))
    } else if(visitorScore > homeScore) {
        homeEl.classList.remove("winning");
        visitorEl.classList.add("winning");
        console.log('winning VISITOR')
    } else {
        homeEl.classList.remove("winning");
        visitorEl.classList.remove("winning");
    }
}