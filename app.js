let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

function startPayment() {
    window.location.href = "payment.html";
};

// Используем async/await для асинхронных вызовов
async function redirectToPaySystem() {
    const email = document.getElementById('email').value;
    const agree = document.getElementById('agree').checked;
    const userID = tg.initDataUnsafe?.user?.id;

    if (!email) {
        alert("Пожалуйста, введите ваш email.");
        return;
    }

    if (!agree) {
        alert("Необходимо принять условия использования.");
        return;
    }

    try {
//        const response = await fetch('http://localhost:3000/submit-email', {
//            method: 'POST',
//            headers: { 'Content-Type': 'application/json' },
//            body: JSON.stringify({ email: email, userID: userID })
//        });
//        const data = await response.json();
        window.location.href = 'thankyou.html';

//        if /*(data.success)*/ data {
//            window.location.href = 'thankyou.html';
//        } else {
//            alert('Ошибка при обработке вашего запроса');
//        }
    } catch (error) {
        alert('Ошибка при отправке данных');
    }
}

function goBack() {
    window.history.back();
}