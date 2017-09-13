/**
 * @author adthonb
 * @version 1.0
 * Vanilla JavaScript countdown for specified date
 */
const countDown = (date) => {
    if(Date.parse(date) == NaN) {
        return;
    }
        
    setInterval(() => {
        const targetTime = new Date(date);
        const curTime = Date.now();
        const secondsLeft = Math.round((targetTime - curTime) / 1000);

        if (secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }

        displayTime(secondsLeft);
    }, 1000);
    
    function displayTime(seconds) {
        document.querySelector('.day').textContent = Math.floor(seconds / 86400);
        document.querySelector('.hour').textContent = Math.floor((seconds % 86400) / 3600);
        document.querySelector('.minute').textContent = Math.floor((seconds % 86400) % 3600 / 60);
        document.querySelector('.second').textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
}

countDown('2017, 10, 11');