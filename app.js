const quiz = [
    {
        question: '稲垣翼が好きなゲームは？',
        answers: [
            'Apex',
            'MineCraft',
            'Call of duty',
            'Battle field '
        ],
        correct:'Apex'
    },
    {
        question: 'ゲーム市場、最も売れたゲームは？',
        answers: [
            'famicon',
            'playstation',
            'switch',
            'ds'
        ],
        correct:'ds'
    },
    {
        question: '今後のゲーム開発の将来性は？',
        answers: [
            '明るい',
            '普通',
            '暗い',
            '暗黒'
        ],
        correct:'明るい'
    },
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;




const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの表示、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
let buttonIndex = 0;
while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
}
}

setupQuiz();


const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert('終了！あなたの正解数は'　+ score + '/' + quizLength + 'です！');
    }

};


let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handlerIndex++;
};

