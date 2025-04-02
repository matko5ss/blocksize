<?php
header('Content-Type: application/json');

// Spriječite cross-site zahtjeve s drugih domena (ovo se može prilagoditi ako je potrebno)
$allowed_origins = [
    'http://localhost:3000', 
    'http://localhost',
    'https://blocksize.hr',  // Zamijenite s vašom stvarnom domenom
    'https://www.blocksize.hr'
];

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($origin, $allowed_origins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}

// Podaci za slanje emaila - prilagodite svojim podacima
$admin_email = 'matko@blocksize.hr'; // Email na koji želite primati obavijesti
$site_name = 'Blocksize d.o.o.'; // Ime vaše tvrtke za email

// Spriječite direktan pristup skripti
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Zabranjen pristup']);
    exit;
}

// Spriječite spam pomoću honeypot polja
if(!empty($_POST['honeypot'])) {
    // Vjerojatno je bot, ali vraćamo uspjeh da bot misli da je uspio
    echo json_encode(['success' => true, 'message' => 'Hvala!']);
    exit;
}

// Dohvatite podatke iz forme
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
$message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';

// Logirajte podatke za debugging (može se isključiti u produkciji)
file_put_contents('form_log.txt', date('Y-m-d H:i:s') . " - Nova forma: $name, $email\n", FILE_APPEND);

// Validirajte podatke
if(empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Molimo popunite sva polja ispravno']);
    exit;
}

// Email za administratora (vas)
$to_admin = $admin_email;
$subject_admin = "Nova poruka s web stranice | $name";

// HTML verzija emaila za administratora
$message_admin_html = "
<!DOCTYPE html>
<html>
<head>
    <title>Nova poruka s web stranice</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px; }
        h2 { color: #2563eb; }
        .message { background-color: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0; }
    </style>
</head>
<body>
    <div class='container'>
        <h2>Nova poruka od korisnika $name</h2>
        <p><strong>Email korisnika:</strong> $email</p>
        <p><strong>Poruka:</strong></p>
        <div class='message'>" . nl2br($message) . "</div>
        <p>Poslano: " . date('d.m.Y. H:i') . "</p>
    </div>
</body>
</html>
";

// Tekst verzija emaila za administratora
$message_admin_text = "Nova poruka sa web stranice:\n\n";
$message_admin_text .= "Ime: $name\n";
$message_admin_text .= "Email: $email\n";
$message_admin_text .= "Poruka:\n$message\n\n";
$message_admin_text .= "Poslano: " . date('d.m.Y. H:i');

// Email za korisnika (automatski odgovor)
$to_user = $email;
$subject_user = "Hvala na poruci | $site_name";

// HTML verzija emaila za korisnika
$message_user_html = "
<!DOCTYPE html>
<html>
<head>
    <title>Potvrda primitka poruke</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px; }
        h2 { color: #2563eb; }
        .message { background-color: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0; }
    </style>
</head>
<body>
    <div class='container'>
        <h2>Hvala na vašoj poruci, $name!</h2>
        <p>Zaprimili smo vašu poruku i odgovorit ćemo vam u najkraćem mogućem roku.</p>
        <p>Sažetak vaše poruke:</p>
        <div class='message'>" . nl2br($message) . "</div>
        <p>S poštovanjem,<br>Tim $site_name</p>
    </div>
</body>
</html>
";

// Tekst verzija emaila za korisnika
$message_user_text = "Poštovani/a $name,\n\n";
$message_user_text .= "Hvala vam na poruci. Zaprimili smo vaš upit i odgovorit ćemo u najkraćem mogućem roku.\n\n";
$message_user_text .= "Sažetak vaše poruke:\n$message\n\n";
$message_user_text .= "S poštovanjem,\nTim $site_name";

// Headers za HTML email
$headers_admin = "From: $site_name <$admin_email>\r\n";
$headers_admin .= "Reply-To: $name <$email>\r\n";
$headers_admin .= "MIME-Version: 1.0\r\n";
$headers_admin .= "Content-Type: multipart/alternative; boundary=\"boundary-string\"\r\n";

$headers_user = "From: $site_name <$admin_email>\r\n";
$headers_user .= "Reply-To: $admin_email\r\n";
$headers_user .= "MIME-Version: 1.0\r\n";
$headers_user .= "Content-Type: multipart/alternative; boundary=\"boundary-string\"\r\n";

// Compose multipart email message (za administratora)
$mime_message_admin = "--boundary-string\r\n";
$mime_message_admin .= "Content-Type: text/plain; charset=utf-8\r\n";
$mime_message_admin .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$mime_message_admin .= $message_admin_text . "\r\n\r\n";
$mime_message_admin .= "--boundary-string\r\n";
$mime_message_admin .= "Content-Type: text/html; charset=utf-8\r\n";
$mime_message_admin .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$mime_message_admin .= $message_admin_html . "\r\n\r\n";
$mime_message_admin .= "--boundary-string--";

// Compose multipart email message (za korisnika)
$mime_message_user = "--boundary-string\r\n";
$mime_message_user .= "Content-Type: text/plain; charset=utf-8\r\n";
$mime_message_user .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$mime_message_user .= $message_user_text . "\r\n\r\n";
$mime_message_user .= "--boundary-string\r\n";
$mime_message_user .= "Content-Type: text/html; charset=utf-8\r\n";
$mime_message_user .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$mime_message_user .= $message_user_html . "\r\n\r\n";
$mime_message_user .= "--boundary-string--";

// Pokušaj slanja emailova
$admin_mail_sent = mail($to_admin, $subject_admin, $mime_message_admin, $headers_admin);
$user_mail_sent = mail($to_user, $subject_user, $mime_message_user, $headers_user);

// Logirajte rezultat slanja (može se isključiti u produkciji)
file_put_contents('form_log.txt', date('Y-m-d H:i:s') . " - Rezultat: Admin: " . ($admin_mail_sent ? "Poslano" : "Greška") . ", Korisnik: " . ($user_mail_sent ? "Poslano" : "Greška") . "\n", FILE_APPEND);

// Odgovorite s JSON rezultatom
if($admin_mail_sent && $user_mail_sent) {
    echo json_encode(['success' => true, 'message' => 'Hvala na poruci! Email s potvrdom poslan je na vašu adresu.']);
} elseif($admin_mail_sent) {
    // Ako samo email administratoru prođe, još uvijek je to uspjeh za korisnika
    echo json_encode(['success' => true, 'message' => 'Hvala na poruci! Kontaktirat ćemo vas u najkraćem mogućem roku.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovno ili nas kontaktirajte direktno putem telefona.']);
}
?>
