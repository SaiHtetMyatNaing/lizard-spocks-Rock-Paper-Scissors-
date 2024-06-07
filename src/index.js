

const rulesTriggerBtn        = document.querySelector('.rulesTriggerBtn');
const desktopRulesBox        = document.querySelector('.desktopRulesBox');
const mobileRulesBox         = document.querySelector('.mobileRulesBox');
const btn                    = document.querySelectorAll('.btn');
const choices                = document.querySelectorAll('.choices');
const resultImg              = document.querySelector('#resultImg');
const resultBox              = document.querySelector("#resultBox");
const choiceBox              = document.querySelector('#choiceBox');
const imgChoice              = document.querySelectorAll('#imgChoice');
const finalImg               = document.querySelector('#finalImg')
const yourChoice             = document.querySelector('#yourChoice');
const computerChoice         = document.querySelector('#computerChoice')
const judgeBox               = document.querySelector('#judgeBox');
const winCount               = document.querySelector('#winCount');
const loseCount               = document.querySelector('#loseCount');
const drawCount               = document.querySelector('#drawCount');
const score                   = document.querySelector('#score')
const playAgain               = document.querySelector('#playAgain');


let count = 0;

rulesTriggerBtn.addEventListener('click' , ()=> {
      const screenWidth     = window.innerWidth;
    if(screenWidth < 768){
        mobileRulesBox.classList.remove('hidden');
    }
    desktopRulesBox.classList.remove('hidden');
})

btn.forEach((btn)=> {
    btn.addEventListener('click' , ()=> {
      const screenWidth     = window.innerWidth;
        if(screenWidth > 768 | screenWidth < 768){
            mobileRulesBox.classList.add('hidden');
        }
        desktopRulesBox.classList.add('hidden');
    })
})

playAgain.addEventListener('click' , ()=> {
    choiceBox.classList.remove('hidden')
    choiceBox.classList.add('block');
    resultBox.classList.add('hidden');

})


const win = () => {
    winCount.classList.remove('hidden');
    loseCount.classList.add('hidden');
    drawCount.classList.add('hidden');
    judgeBox.classList.remove('hidden');
    count = +score.textContent + 1;
    return score.textContent = count;
}

const draw = () => {
    drawCount.classList.remove('hidden');
    winCount.classList.add('hidden');
    loseCount.classList.add('hidden');
    judgeBox.classList.remove('hidden');
}

const lose = () => {
    loseCount.classList.remove('hidden');
    drawCount.classList.add('hidden');
    winCount.classList.add('hidden');
    judgeBox.classList.remove('hidden');
    count = +score.textContent - 1;
    return score.textContent = count;

}

const removal = ()=> {
    yourChoice.classList.remove('border-blue-500' , 'hover:shadow-blue-500' , 'border-purple-500' , 'hover:shadow-purple-500' ,'border-red-500' , 'hover:shadow-red-500' ,'border-yellow-500' , 'hover:shadow-yellow-500' , 'border-cyan-500' , 'hover:shadow-cyan-500')
}

const removal2 = ()=> {
    computerChoice.classList.remove('border-blue-500' , 'hover:shadow-blue-500' , 'border-purple-500' , 'hover:shadow-purple-500' ,'border-red-500' , 'hover:shadow-red-500' ,'border-yellow-500' , 'hover:shadow-yellow-500' , 'border-cyan-500' , 'hover:shadow-cyan-500')
}



choices.forEach((choice)=> {
    choice.addEventListener('click' , ()=> {
     const imgSrc = choice.querySelector('#imgContainer img').getAttribute('src')
     resultImg.src = imgSrc;

        switch(imgSrc){
            case("../images/icon-paper.svg"):
            removal();
            yourChoice.classList.toggle('border-blue-500' , 'hover:shadow-blue-500');
                break;
            case("../images/icon-lizard.svg"):
            removal();
            yourChoice.classList.add('border-purple-500' , 'hover:shadow-purple-500');
                break;
            case("../images/icon-rock.svg"):
            removal();
            yourChoice.classList.add('border-red-500' , 'hover:shadow-red-500');
                break;
            case("../images/icon-scissors.svg"):
            removal();
            yourChoice.classList.add('border-yellow-500' , 'hover:shadow-yellow-500');
                break;
            case("../images/icon-spock.svg"):
            removal();
            yourChoice.classList.add('border-cyan-500' , 'hover:shadow-cyan-500');
                break; 
        }

        choiceBox.classList.add('hidden');
        resultBox.classList.remove('hidden');

        const ranInt  = Math.floor(Math.random() * imgChoice.length)
        const finalSrc = imgChoice[ranInt].getAttribute('src');

        finalImg.src = finalSrc;
            
            switch(finalSrc){
                case("../images/icon-paper.svg"):
                    removal2();
                    computerChoice.classList.add('border-blue-500' , 'hover:shadow-blue-500');
                    break;
                case("../images/icon-lizard.svg"):
                    removal2();
                    computerChoice.classList.add('border-purple-500' , 'hover:shadow-purple-500');
                    break;
                case("../images/icon-rock.svg"):
                    removal2();
                    computerChoice.classList.add('border-red-500' , 'hover:shadow-red-500');
                    break;
                case("../images/icon-scissors.svg"):
                    removal2();
                    computerChoice.classList.add('border-yellow-500' , 'hover:shadow-yellow-500');
                    break;
                case("../images/icon-spock.svg"):
                    removal2();
                    computerChoice.classList.add('border-cyan-500' , 'hover:shadow-cyan-500');
                    break; 
            }
            

            if(imgSrc === finalSrc){
                draw();
            }
          
            if(imgSrc === "../images/icon-paper.svg" && finalSrc === '../images/icon-scissors.svg'){
               lose();
               return
            }else if ((imgSrc === "../images/icon-paper.svg" && finalSrc === '../images/icon-rock.svg')){
               win();
            }else if ((imgSrc === "../images/icon-paper.svg" && finalSrc === '../images/icon-lizard.svg')){
                lose();
            }else if ((imgSrc === "../images/icon-paper.svg" && finalSrc === '../images/icon-spock.svg')){
                win();
            }

            if(imgSrc === "../images/icon-scissors.svg" && finalSrc === '../images/icon-paper.svg'){
                win();
             }else if ((imgSrc === "../images/icon-scissors.svg" && finalSrc === '../images/icon-rock.svg')){
                lose();
             }else if ((imgSrc === "../images/icon-scissors.svg" && finalSrc === '../images/icon-lizard.svg')){
                 win();
             }else if ((imgSrc === "../images/icon-scissors.svg" && finalSrc === '../images/icon-spock.svg')){
                lose();
             }

             
            if(imgSrc === "../images/icon-rock.svg" && finalSrc === '../images/icon-paper.svg'){
                lose();
             }else if ((imgSrc === "../images/icon-rock.svg" && finalSrc === '../images/icon-scissors.svg')){
                win();
             }else if ((imgSrc === "../images/icon-rock.svg" && finalSrc === '../images/icon-lizard.svg')){
                 win();
             }else if ((imgSrc === "../images/icon-rock.svg" && finalSrc === '../images/icon-spock.svg')){
                lose();
             }

             if(imgSrc === "../images/icon-lizard.svg" && finalSrc === '../images/icon-paper.svg'){
                win();
             }else if ((imgSrc === "../images/icon-lizard.svg" && finalSrc === '../images/icon-scissor.svg')){
                lose();
             }else if ((imgSrc === "../images/icon-lizard.svg" && finalSrc === '../images/icon-rock.svg')){
                 lose();
             }else if ((imgSrc === "../images/icon-lizard.svg" && finalSrc === '../images/icon-spock.svg')){
                win();
             }

             if(imgSrc === "../images/icon-spock.svg" && finalSrc === '../images/icon-paper.svg'){
                lose();
             }else if ((imgSrc === "../images/icon-spock.svg" && finalSrc === '../images/icon-scissor.svg')){
                win();
             }else if ((imgSrc === "../images/icon-spock.svg" && finalSrc === '../images/icon-rock.svg')){
                 win();
             }else if ((imgSrc === "../images/icon-spock.svg" && finalSrc === '../images/icon-lizard.svg')){
                lose();
             }

         

            
    })
})


