<?php
    if(!empty($_POST))
    {
        $host = 'mysql.hostinger.in';
        $username = 'u998161249_hblog';
        $db_password = 'hexad@123';
        $database = 'u998161249_hblog';
        $table = 'contact_form';
        $redirect_to = 'http://localhost:901/honeycomb/';
        $link = mysqli_connect($host,$username,$db_password,$database); 
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $sql = "INSERT INTO ".$table." (name,email,subject,message) VALUES ('".$name."','".$email."','".$subject."','".$message."')";
// $mail_body = '<html> <body> <table border="1"> <tr> <th colspan="2">Contact Us Details</th> </tr><tr> <td>Name</td><td>'. $name .'</td></tr><tr> <td>Email</td><td>'. $email.'</td></tr><tr> <td>Subject</td><td>'. $subject .'</td></tr><tr> <td>Message</td><td>'. $message.'</td></tr></table> </body></html>';
// sendmail('yogeshmprajapati@gmail.com','New Inquiry',$mail_body);

        $res = mysqli_query($link, $sql);
        //header("Location:".$redirect_to);
    }
function sendmail($email,$subject,$body)
    {
        require './email/PHPMailer/PHPMailerAutoload.php';
        $mail = new PHPMailer;
 
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
$mail->Username = 'social.hexad@gmail.com';
        $mail->Password = 'Hexad@2016';
        $mail->SMTPSecure = 'tls';

        $mail->From = 'info@hexad.com';
        $mail->FromName = 'hexad.tech';
        $mail->addAddress($email,$email);

        $mail->addReplyTo('no-reply@hexad.tech', 'hexad.tech');

        $mail->WordWrap = 50;
        $mail->isHTML(true);

        $mail->Subject = $subject;
        $mail->Body    = $body;

        if(!$mail->send()) 
        {
            return false;
        }
        else
        {
            return true;
        }
    }
?>