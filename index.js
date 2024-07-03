document.addEventListener('DOMContentLoaded', () => {
    const currentTimeElement = document.getElementById('current-time');
    const currentDayElement = document.getElementById('current-day');

    function updateTime() {
        const now = new Date();
        const options = { timeZone: 'Africa/Nairobi', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const timeString = now.toLocaleTimeString('en-GB', options);
        currentTimeElement.textContent = timeString;

    }

    function updateDay() {
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        currentDayElement.textContent = days[now.getUTCDay()];
    }

    updateTime();
    updateDay();
    setInterval(updateTime, 1000);
});
