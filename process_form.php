<?php
// Retrieve form data
$first_name = $_POST['Voornaam'];
$last_name = $_POST['Achternaam'];
$email = $_POST['Email'];
$message = $_POST['Bericht'];

// Send email
$to = 'marceldoethetweer.be@gmail.com';
$subject = 'Form Submission from Yamura4 Portfolio';
$body = "First Name: $first_name\nLast Name: $last_name\nEmail: $email\n\n$message";
$headers = "From: $email";

if (mail($to, $subject, $body, $headers)) {
  echo 'Email sent successfully!';
} else {
  echo 'Error sending email.';
}
?>
  
