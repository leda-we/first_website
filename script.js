const symbols = ['🍒', '🍋', '🍉', '🔔'];
const spinButton = document.getElementById("spinButton");
const resultDiv = document.getElementById("result");
const spinSound = document.getElementById("spinSound");
const reels = document.querySelectorAll('.reel');
const betAmountSelect = document.getElementById("betAmount");
const chipCountDisplay = document.getElementById("chipCount");
const Up_balance = document.getElementById("Up_balance");
const login_button = document.getElementById("login_button");
const sign_up_button = document.getElementById("sign_up_button");
const login_word = document.getElementById("login_word");
const password_word = document.getElementById("password_word");

// sign_up_button.addEventListener("clcik", () => {
//     if (login_word == )
// });
let chipCount = 1500; // Начальное количество фишек
// function saveData() {
//     const data = document.getElementById('chipCount').value;
//     localStorage.setItem('userData', data);
//     displayData();
//     }
//     function displayData() {
//         const savedData = localStorage.getItem('userData');
//         document.getElementById('savedData').innerText = savedData;
//     }
//     displayData();
//     
Up_balance.addEventListener("click", () => {
    // Получаем выбранное количество фишек
    const betAmount = parseInt(betAmountSelect.value);
    const answer1 = prompt('Данные карты', '');
    const answer2 = prompt('Как тебя зовут?', 'Имя');

    chipCount += 100; 
    chipCountDisplay.innerText = chipCount;
    

    });

spinButton.addEventListener("click", () => {
    console.log('1')
    // Получаем выбранное количество фишек
    const betAmount = parseInt(betAmountSelect.value);
    // Проверяем, хватает ли фишек для ставки
    if (chipCount < betAmount) {
        resultDiv.innerText = "Недостаточно фишек для ставки!";
        return;
    }

    // Снимаем ставку с фондов игрока
    chipCount -= betAmount;
    chipCountDisplay.innerText = chipCount;

    resultDiv.innerText = `Вы сделали ставку: ${betAmount} фишек `;
    
    // Воспроизводим звук кручения
    spinSound.currentTime = 0; // Сбрасываем время для повторного воспроизведения
    spinSound.play();

    // Запускаем анимацию вращения
    reels.forEach(reel => {
        reel.style.transform = 'rotate(360deg)';
    });

    // Обновляем символы каждую секунду
    let spinDuration = 5000; // 5 секунд
    const updateSymbols = setInterval(() => {
        reels.forEach(reel => {
            reel.innerText = getRandomSymbol();
        });
        

    }, 1000); // Обновляем символы каждые 1 секунду
    let ZHDITE = resultDiv.innerText += `\nЖдите...`;
    // Завершаем анимацию и обновляем символы после времени кручения
    setTimeout(() => {
        clearInterval(updateSymbols); // Останавливаем обновление символов
        reels.forEach(reel => {
            reel.style.transform = 'rotate(0deg)';
            
        });
        
        // Обновляем символы в финальном состоянии
        reels.forEach(reel => {
            reel.innerText = getRandomSymbol();
            ZHDITE.slice(0, 7);
        });

        const reel1 = reels[0].innerText;
        const reel2 = reels[1].innerText;
        const reel3 = reels[2].innerText;
        checkResult(reel1, reel2, reel3, betAmount);

        // Останавливаем звук после завершения анимации
        spinSound.pause();
    }, spinDuration); // Используем 5 секунд для ожидания
});

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
};

function checkResult(reel1, reel2, reel3, betAmount) {
    if (reel1 === reel2 && reel2 === reel3) {
        const winnings = betAmount * 10;
        chipCount += winnings; // Увеличиваем количество фишек при выигрыше
        chipCountDisplay.innerText = chipCount;
        resultDiv.innerText += `\nПоздравляем! Вы выиграли ${winnings} фишек!`;
    } else {
        resultDiv.innerText += "\nПопробуйте снова!";
    }
};

