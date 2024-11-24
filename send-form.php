<?php

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    var_dump($_POST);die();
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    // Email address where you want to receive the form submissions
    $to = "arnoa69@gmail.com";
    
    // Email subject
    $subject = "Nueva reserva de mesa";
    
    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "E-Mail: $email\n\n";
    $email_content .= "Telefon: $phone\n\n";
    $email_content .= "Betreff: $subject\n\n";
    $email_content .= "Nachricht:\n$message\n";
    
    // Email headers
    $headers = "From: $name <$email>";
    
    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        // Email sent successfully
        echo "Vielen Dank. Ihre Nachricht wurde gesendet.";
    } else {
        // Error sending email
        echo "Es tut uns leid, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.";
    }
} else {
    // If the form is not submitted, redirect to the homepage or display an error message
    echo "Fehler beim Absenden des Formulars. Bitte versuchen Sie es erneut.";
}
