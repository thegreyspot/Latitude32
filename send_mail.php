<?php
error_reporting(0);

$to = 'vciq@valuecentric.com';
$name = $_REQUEST['name'];
$from = $_REQUEST['from'];
$company = $_REQUEST['company'];
$phone = $_REQUEST['phone'];
$message = $_REQUEST['message'];
$location = $_REQUEST['location'];
$subject = "New message from $location";
$headers = 'From: '.$location.'<'.$to.'>' . "\r\n" . 'Reply-To: ' . $from;
$body = "Name: $name \n\nEmail: $from \n\nCompany: $company \n\nPhone Number: $phone \n\nComments:\n $message";


$send = @mail($to, $subject, $body, $headers);
return true;
?>
