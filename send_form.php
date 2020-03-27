<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];
// echo 'Привет, ' . $name . 'Твой номер телефона:' . $phone . 'Твой email' . $email;

// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->CharSet = "utf-8";
    $mail->SMTPDebug = 0;                     // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'evgeniy.glo.php@gmail.com';                     // SMTP username
    $mail->Password   = '18Abrakadabra';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('evgeniy.glo.php@gmail.com', 'Евгений');
    $mail->addAddress('verstkamaster@yandex.ru');     // Add a recipient
    
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}. Его email: ${userEmail}";


    //     if ($mail->send()){
    //         echo "ok";
    //     }
    //     else {
    //     echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    // }

    // }   
    //     catch (Exception $e) 
    //     { "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    // }

//     // PHPMailer version 
    $mail->send();
    header('Location: thanks.html');
}   catch (Exception $e) {
     "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}
// ------------------phpmailer version----------------- 