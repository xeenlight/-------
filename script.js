document.getElementById('phone-input').addEventListener('input', function(event) {
    let input = event.target.value.replace(/\D/g, ''); // Убираем все нецифровые символы
    let formatted = '';

    if (input.length > 0) {
        formatted += '(' + input.substring(0, 2);
    }
    if (input.length > 2) {
        formatted += ')' + input.substring(2, 5);
    }
    if (input.length > 5) {
        formatted += '-' + input.substring(5, 7);
    }
    if (input.length > 7) {
        formatted += '-' + input.substring(7, 9);
    }

    event.target.value = formatted;
});



function correctDate(date){ 
    if(date<=9){ 
        date= "0"+date 
    } 
    else{ 
        date 
    } 
    return date 
} 
function saleData() {
    let newData = new Date();
    let saledate = new Date(2024, 7, 25);
    let finishDate = saledate - newData;
    
    if (finishDate < 0) finishDate = 0;
    
    let day = Math.floor(finishDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor((finishDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((finishDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((finishDate % (1000 * 60)) / 1000);

    let timers = document.querySelectorAll('.sell_container');

    timers.forEach(timer => {
        let dayValue = timer.querySelectorAll('.time')[0];
        let hoursValue = timer.querySelectorAll('.time')[1];
        let minutesValue = timer.querySelectorAll('.time')[2];
        let secondsValue = timer.querySelectorAll('.time')[3];

        dayValue.innerHTML = correctDate(day);
        hoursValue.innerHTML = correctDate(hours);
        minutesValue.innerHTML = correctDate(minutes);
        secondsValue.innerHTML = correctDate(seconds);

        if (finishDate <= 0) { 
            dayValue.innerHTML = "00"; 
            hoursValue.innerHTML = "00"; 
            minutesValue.innerHTML = "00"; 
            secondsValue.innerHTML = "00"; 
            
            let sale_texts = document.querySelectorAll(".sale_text"); 
            sale_texts.forEach(sale_text => {
                sale_text.style.opacity = 1; 
            });
        } 
    });
}

saleData();
setInterval(() => {
    saleData();
}, 1000);

