// Открывается приложение и человек выбирает тариф, одна из трех кнопок
// После выбора тарифа человек читает описание, вводит email и соглашается с офертой и нажимает Оплатить
// После нажатия кнопки оплатить человека перекидывает на сайт юкассы
// Приложение открывает экран о том, что нужно провести оплату и его можно закрыть
// После проведения оплаты человеку в телеграм приходит оповещение, что теперь у него есть доступ

let tg = window.Telegram.WebApp;
let mainbut = tg.MainButton;

tg.expand();

mainbut.setText('Отправить данные');
mainbut.show();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

mainbut.addEventListener("click", function(){
    tg.sendData("sendTestMessage");
});