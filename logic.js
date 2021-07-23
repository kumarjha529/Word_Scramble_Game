console.log('logic file connected ')



const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
const score = document.querySelector('.score');

    let play = false;

    let newWords = " ";
    let randWords = " ";
    let Score = 0;


    let sWords = ['python', 'javascript', 'c++', 'php ','java','c#','html','css','reactjs','swift'];

    const createNewWords = () => {
        // Generaating random number , floor is used to trim decimal point 
        let ranNum = Math.floor(Math.random() * sWords.length);
        
        let newTempSwords = sWords[ranNum];
        return newTempSwords;

    }

    const scrambleWords = (arr) =>{
          
        console.log(arr.length);
        for ( let i = arr.length-1; i > 0; i--) {
            let temp = arr[i];
         //  console.log(temp);

            let j = Math.floor(Math.random() * (i+1));
            // console.log(i);
            // console.log(j);

            arr[i] = arr[j];
            arr[j] = temp ; 
        }
        return arr;
    }


    btn.addEventListener('click', function(){
        
        if(!play) {
            play = true;
            btn.innerHTML = 'Guess';
            guess.classList.toggle('hidden');

           newWords =  createNewWords();
           randWords =  scrambleWords(newWords.split("")).join(" ");
       
           // console.log(randWords.join(""));

           msg.innerHTML = `Guess the word -    ${randWords}`;
         
      
        } else {
            let tempWord = guess.value;
            if(tempWord === newWords){
                play = false;
                msg.innerHTML = `Awesome, It's Correct. it is ${newWords}`;

                Score = Score + 5;
                score.innerHTML = ` Score - ${Score}`;
            

                btn.innerHTML = "Start Again";
                guess.classList.toggle('hidden');
                guess.value = "";
                btn.innerHTML = "Start Again ";

            }else{
                msg.innerHTML = `Soory boss, It's Not Correct plz try again  ${randWords}`;
                if(Score != 0){
                    Score = Score - 5;
                    score.innerHTML = ` Score - ${Score}`;
                }else{
                    Score = 0;
                    score.innerHTML = ` Score - ${Score}`;
                }

            }
        }
    })
