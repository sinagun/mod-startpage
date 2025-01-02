document.addEventListener('DOMContentLoaded', function () {
    console.log('date.js is loaded');
    
    function updateTimeAndDate() {
        const now = new Date();
        
        // Format the time as HH:MM:SS
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        // Format the date as Month Day, Year (e.g., January 2, 2025)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString('en-US', options);
        
        // Check if the elements exist and update them
        if (timeElement && dateElement) {
            timeElement.textContent = timeString;
            dateElement.textContent = dateString;
        } else {
            console.error('Time or Date element not found.');
        }
    }

    // Call the function once to set the initial time and date
    updateTimeAndDate();

    // Update the time every second
    setInterval(updateTimeAndDate, 0);
});

