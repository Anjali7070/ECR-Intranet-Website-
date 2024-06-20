// Clear user session data
function clearSession() {
    // Example for clearing local storage/session storage
    localStorage.removeItem('userToken');
    sessionStorage.removeItem('userToken');

    // If you are using cookies for sessions, you can clear cookies like this:
    document.cookie.split(";").forEach(function(c) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
}

// Apply fade-out effect before redirecting
function fadeOutAndRedirect() {
    const logoutContainer = document.getElementById('logoutContainer');
    logoutContainer.classList.add('fade-out');

    // Wait for the fade-out effect to complete before redirecting
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000); // Duration of the fade-out effect in milliseconds
}

// Event listener for login button
document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = 'login.html';
});

// Call clearSession function to perform the logout process
clearSession();

// Start the fade-out effect and redirect after a delay
fadeOutAndRedirect();
