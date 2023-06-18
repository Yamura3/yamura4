// Function to simulate sending an email
function sendEmail(formData) {
    // Simulate sending an email
    console.log("Sending email...");
    console.log("To: marceldoethetweer.be@gmail.com");
    console.log("Subject: New Contact Message");
    console.log("Name:", formData.get("name"));
    console.log("Email:", formData.get("email"));
    console.log("Message:", formData.get("message"));
    console.log("Email sent successfully!");
}

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var formData = new FormData(event.target);

    // Simulate sending email
    sendEmail(formData);

    // Reset form fields
    event.target.reset();
});
