const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";

let Word = ["python", "c++", "javascript", "ruby", "hash", "typescript", "java", "android", "ios", "swift", "kubernet", "sql", "html", "css", "seaborn", "numpy", "pyscript", "reactjs", "vuejs", "angularjs", "nodejs", "expressjs", "nextjs", "flutter", "kottlen", "reactnative"];

const createWords = () => {

    let ranNum = Math.floor(Math.random() * Word.length);
    let Newtemp = Word[ranNum];
    // console.log(Newtemp.split(""))
    return Newtemp;
}


const scrambleWords = (arr) => {

    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        // console.log(temp);
        let j = Math.floor(Math.random() * (i + 1));
    

        arr[i] = arr[j];
        arr[j] = temp;

    }
    return arr;
}




btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        
        btn.innerHTML = "Check";
        guess.classList.toggle('hidden');
        newWords = createWords();
        randWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = ` Guess the Word ${randWords}`;

    }
    else{

        let tempword = guess.value;
        if(tempword === newWords){
            play=false;
            msg.innerHTML = `Awesome Its is Correct . It is ${newWords}`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value ="";
        }
        else{
            msg.innerHTML = `Sorry Boss. Its is Incorrect . Plz try Again ${randWords}`;
        }
    }

})



