<?php

 
//Prefedined Variables  
$to = "checkingforms@yahoo.com";

// Email Subject
$subject = "Book appointment for consulting with Doctors";


// This IF condition is for improving security  and Prevent Direct Access to the Mail Script.
if($_POST) {

// Collect POST data from form
$firstname = stripslashes($_POST['firstname']);
$lastname = stripslashes($_POST['lastname']);
$email = stripslashes($_POST['email']);
$phone = stripslashes($_POST['phone']);
$dt = stripslashes($_POST['dt']);
$security = stripslashes($_POST['security']);
$consulting = stripslashes($_POST['consulting']);
$message= stripslashes($_POST['message']);

// Collecting all content in HTML Table
$content='<table width="100%">
<tr><td  align "center"><b>Contact Details</b></td></tr>
<tr><td>First Name:</td><td> '.$firstname.'</td></tr>
<tr><td>Last Name:</td><td> '.$lastname.'</td></tr>
<tr><td>Email:</td><td> '.$email.' </td></tr>
<tr><td>Phone:</td><td> '.$phone.'</td></tr>
<tr><td>Date:</td><td> '.$dt.'</td></tr>
<tr><td>Security Number:</td><td> '.$security.'</td></tr>
<tr><td>Select Below consulting:</td><td> '.$consulting.'</td></tr>
<tr><td>Message:</td> <td> '.$message.'</td></tr>
<tr><td>Date:</td> <td> '.date('d/m/Y').'</td></tr>
</table> ';


// Define email variables
$headers = "From:".$email."\r\n";
$headers .= "Reply-to:".$email."\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8';

if( ! empty($firstname) && ! empty($email) && ! empty($content) ) {

// Sending Email 
if( mail($to, $subject, $content, $headers) ) {
print "<p>Thank you, we will getback to you shortly</p><br>";
return true;
}
else {
print "<p>Some errors to send the mail.</p>";
return false;
}
}
else {
print "<p>Some errors to send the mail.</p>";
return false;
}
}