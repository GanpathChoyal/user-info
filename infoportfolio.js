document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const projectLinks = document.getElementById('projectLinks').value;
    const description = document.getElementById('description').value;
    const profileImage = document.getElementById('profileImage').files[0];

    const reader = new FileReader();
    reader.onload = function(event) {
        const imageSrc = event.target.result;
        displayProfile(username, email, department, projectLinks, description, imageSrc);
    };
    reader.readAsDataURL(profileImage);
});

function displayProfile(username, email, department, projectLinks, description, imageSrc) {
    const profileDisplay = document.getElementById('profileDisplay');
    profileDisplay.innerHTML = `
        <h2>Profile Information</h2>
        <img src="${imageSrc}" alt="Profile Image" style="max-width: 200px; border-radius: 10px;">
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Project Links:</strong> ${projectLinks}</p>
        <p><strong>Description:</strong> ${description}</p>
    `;
}
