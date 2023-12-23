// write js code here if required
function updateTimer() {
        // Get the current date and time
        var currentDate = new Date();

        // Extract date components
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1; // Months are 0-indexed
        var year = currentDate.getFullYear();

        // Extract time components
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();

        // Format the timer string
        var timerString = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

        // Display the timer in the HTML
        document.getElementById('timer').textContent = timerString;
    }

    // Update the timer every second (1000 milliseconds)
    setInterval(updateTimer, 1000);

    // Initial update to display the timer immediately
    updateTimer();