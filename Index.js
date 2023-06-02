setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hour + ":"
            + min + " " + am_pm;

    let digit = hour + ":"
            + min;

    let amtin = am_pm;
 
    document.querySelector(".clock")
            .innerHTML = currentTime;
    
    document.querySelector(".digit")
            .innerHTML = digit;

    document.querySelector(".am-pm")
            .innerHTML = amtin;
}
showTime();

// The code to display the formatted date
document.addEventListener("DOMContentLoaded", function() {
        // Array for mapping month numbers to month names
        const months = [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
  
        // Array for mapping weekday numbers to weekday names
        const weekdays = [
          'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
        ];
  
        // Get the current date
        const currentDate = new Date();
  
        // Extract the day, month, and date
        const weekday = weekdays[currentDate.getDay()];
        const month = months[currentDate.getMonth()];
        const date = currentDate.getDate();
  
        // Format the date string
        const formattedDate = `${weekday}, ${month} ${date}`;
  
        // Display the formatted date
        document.getElementById('date').textContent = formattedDate;
      });