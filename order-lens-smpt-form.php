<?php
include "classes/class.phpmailer.php"; // include the class name

define("SMTP_HOST", "smtp.yoursitetools.com"); //Hostname of the mail server
define("SMTP_PORT", "587"); //Port of the SMTP like to be 25, 80, 465 or 587
define("SMTP_UNAME", "test1@edigitaldreams.com"); //Username for SMTP authentication any valid email created in your domain
define("SMTP_PWORD", "Test1234"); //Password for SMTP authentication
// you can get your SMTP host here http://www.asif18.com/6/php/list-of-smtp-and-pop3-severs,-hosts,-ports-email-servers/

 
//Prefedined Variables  
$to = "checkingforms@yahoo.com";

// Email Subject
$subject = "Order lenses";


// This IF condition is for improving security  and Prevent Direct Access to the Mail Script.
if($_POST) {

// Collect POST data from form
$name = stripslashes($_POST['name']);
$dt = stripslashes($_POST['dt']);
$email = stripslashes($_POST['email']);
$phone = stripslashes($_POST['phone']);
$lens_type = stripslashes($_POST['lens_type']);
$lens_brand = stripslashes($_POST['lens_brand']);
$other_lens_brand = stripslashes($_POST['other_lens_brand']);
$eyes_lens = stripslashes($_POST['eyes_lens']);
$total_lens = stripslashes($_POST['total_lens']);
$message= stripslashes($_POST['message']);

// Collecting all content in HTML Table
$content='<table width="100%">
<tr><td  align "center"><b>Contact Details</b></td></tr>
<tr><td>Name:</td><td> '.$name.'</td></tr>
<tr><td>Date:</td><td> '.$dt.'</td></tr>
<tr><td>Email:</td><td> '.$email.' </td></tr>
<tr><td>Phone:</td><td> '.$phone.'</td></tr>
<tr><td>Lens type:</td><td> '.$lens_type.'</td></tr>
<tr><td>Lens brand:</td><td> '.$lens_brand.'</td></tr>
<tr><td>Specify other lens or brand:</td><td> '.$other_lens_brand.'</td></tr>
<tr><td>Which eye:</td><td> '.$eyes_lens.'</td></tr>
<tr><td>Number of lenses:</td><td> '.$total_lens.'</td></tr>
<tr><td>Message:</td> <td> '.$message.'</td></tr>
<tr><td>Date:</td> <td> '.date('d/m/Y').'</td></tr>
</table> ';


$mail = new PHPMailer; // call the class 
	$mail->IsSMTP(); 
	$mail->IsHTML(); 
	
	$mail->Host = SMTP_HOST; //Hostname of the mail server
	$mail->Port = SMTP_PORT; //Port of the SMTP like to be 25, 80, 465 or 587
	$mail->SMTPAuth = true; //Whether to use SMTP authentication
	$mail->Username = SMTP_UNAME; //Username for SMTP authentication any valid email created in your domain
	$mail->Password = SMTP_PWORD; //Password for SMTP authentication
	//$mail->AddReplyTo("reply@yourdomain.com", ""); //reply-to address
	//$mail->SetFrom("from@yourdomain.com", "SMTP Mailer"); //From address of the mail
	// put your while loop here like below,
	$mail->Subject = $subject; //Subject od your mail
	$mail->AddAddress($to, ""); //To address who will receive this email
	$mail->Body    = $content; //Put your body of the message you can place html code here
	//$mail->AddAttachment("images/asif18-logo.png"); //Attach a file here if any or comment this line,
	$mail->SMTPDebug  = 1; 
	$send = $mail->Send(); //Send the mails


// Sending Email 
if($send){
		echo '<center> style="color:#009933;">Thank you, we will getback to you shortly</center>';
	}
	else{
		echo '<center> style="color:#FF3300;">Mail error: </center>'.$mail->ErrorInfo;
	} 
}