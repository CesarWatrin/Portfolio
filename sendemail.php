<?php

try {
   $to = 'cesar.watrin@hotmail.com';
   $from = $_POST['email'];
   $fromName = $_POST['nom'];
   $subject = $_POST['sujet'];
   $headers = 'From: '.$fromName.'<'.$from.'>' . "\r\n";
   $headers .= "MIME-Version: 1.0" . "\r\n";
   $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
   $headers .= "\r\n";
   $message = $_POST['message'];
   mail($to, $subject, $message, $headers);
} catch (Exception $e) {
   echo "Message could not be sent.";
}
