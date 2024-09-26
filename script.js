
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function updateDateTime() {
        const now = new Date();
        
        // Define options for date formatting
        const optionsDate = { month: 'numeric', day: 'numeric', year: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', optionsDate);
        
        // Get hours and minutes and format them
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
        
        // Combine date and time with line breaks
        const formattedDateTime = `${formattedDate}<br>${formattedTime}`;
        
        // Update the datetime element
        document.getElementById('datetime').innerHTML = formattedDateTime;
    }
    
    // Update the date and time immediately
    updateDateTime();
    
    // Update the date and time every minute
    setInterval(updateDateTime, 60000);
    
});

