// Открывается приложение и человек выбирает тариф, одна из трех кнопок
// После выбора тарифа человек читает описание, вводит email и соглашается с офертой и нажимает Оплатить
// После нажатия кнопки оплатить человека перекидывает на сайт юкассы
// Приложение открывает экран о том, что нужно провести оплату и его можно закрыть
// После проведения оплаты человеку в телеграм приходит оповещение, что теперь у него есть доступ

let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

// Вытаскиваем user_id
//let usercard = document.getElementById("usercard"); //получаем блок usercard
//let userid = document.createElement('p'); //создаем еще параграф
//userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
//usercard.appendChild(userid); //добавляем

function startPayment(tariff) {
    window.location.href = "page2.html";
};

function redirectToPaySystem() {
    const email = document.getElementById('email').value;
    const agree = document.getElementById('agree').checked;

    if (email && agree) {
        window.location.href = "https://www.google.com/";
    } else {
        alert("Пожалуйста, введите email и примите соглашение.");
    }
};

// Функция для возвращения на предыдущую страницу
function goBack() {
    window.history.back();
}
