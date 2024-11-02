/// Questions handling and stuff

// Logging all questions
let all_questions = document.getElementsByClassName("question");
let all_answers = document.getElementsByClassName("multiple-choice");

let answers = [0, 4, 9, 12, 15]; // where we store the correct answers
let correct = 0;
let quiz_isfinished = false;

function findself(identity) {
    if (!quiz_isfinished) {
        for (let i=0; i<all_answers.length; i++) {
            if (identity == all_answers[i]) {
                let whole_list = identity.parentNode;
                for (let j=0; j<whole_list.childNodes.length; j++) {
                    if (whole_list.childNodes[j].nodeName == "LI") { 
                        whole_list.childNodes[j].style.backgroundColor = "transparent";
                    }
                }
                all_answers[i].style.backgroundColor = "grey";
            }
        }
    }
}
function return_answer(event) {
    findself(event.target);
}

function addClicker() {
    for (let i=0; i<all_answers.length; i++) {
        document.getElementsByClassName("multiple-choice")[i].onclick = return_answer;
    }
}

function submit_answer() {
    if (!quiz_isfinished) {
        for (let i=0; i<all_answers.length; i++) {
            if (all_answers[i].style.backgroundColor == "grey") {
                if (answers.includes(i)) {
                    correct ++;
                    all_answers[i].style.backgroundColor = "green";
                } else {
                    all_answers[i].style.backgroundColor = "red";
                }
            }
        }
        for (let i=0; i<all_answers.length; i++) {
            if (all_answers[i].style.backgroundColor != "green") {
                if (answers.includes(i)) {
                    all_answers[i].style.backgroundColor = "yellow";
                }
            }
        }
        quiz_isfinished = true;
        console.log(correct);
        if (correct == 5) {
            document.getElementById("congrats").style.display = "block";
        }
    }
}
addClicker();
document.getElementById("submit-button").onclick = submit_answer;

// DO A SYSTEM WHERE THE STUDENT MUST SELECT THE ANSWERS FIRST WITHOUT KNOWING WHETHER THEY GOT IT RIGHT.
// THEN, THERE WILL BE A SUBMIT BUTTON TO SEE HOW WELL THE STUDENT DID, WHICH WOULD BE DISPLAYED ON THE "QUIZ FOR TODAY!" SECTION.
// IF THE STUDENT GETS EVERYTHING RIGHT, THEY WILL RECEIVE A LINK TO A WEBSITE WHERE THEY COULD TYPE THEIR NAMES OR JUST SCREENSHOT TO GET HOUSEPOINTS.
// HOWEVER, IF THE STUDENT COPIES THE LINK, THERE NEEDS TO BE A CONDITION CHECKING IF THEY ACTUALLY GOT IT RIGHT.

/*
if (answers.includes(i)) {
                identity.style.backgroundColor = "grey";
            }*/