document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
      const timeElement = document.getElementById('time');
      const currentTime = new Date().toLocaleTimeString();
      timeElement.textContent = currentTime;
    }

    updateTime();
    setInterval(updateTime, 1000);
});