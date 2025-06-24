function handleFormSubmit(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Store user information in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    // Redirect to user information page
    window.location.href = 'user.html';
}

function displayUserInfo() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    if (username && email) {
        document.getElementById('user-info').innerHTML = `
            <h2>User Information</h2>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;
    } else {
        document.getElementById('user-info').innerHTML = '<p>No user information available.</p>';
    }
}

// Export functions for use in other files
export { handleFormSubmit, displayUserInfo };