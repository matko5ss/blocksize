<?php
// Postavite zaglavlja za JSON odgovor
header('Content-Type: application/json');

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

// Validirajte podatke
if(empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Molimo popunite sva polja ispravno']);
    exit;
}

// Logirajte pokušaj slanja forme - ovo je korisno za debug
file_put_contents('form_log.txt', date('Y-m-d H:i:s') . " - Pokušaj slanja forme: $name, $email\n", FILE_APPEND);

// Sada koristimo jednostavniji pristup s mail funkcijom
$to_admin = 'matko@blocksize.hr'; // Email administratora
$subject_admin = "Nova poruka s web stranice | $name";
$headers_admin = "From: $name <$email>\r\n";
$headers_admin .= "Reply-To: $email\r\n";
$headers_admin .= "Content-Type: text/plain; charset=UTF-8\r\n";

$message_admin = "Nova poruka sa web stranice:\n\n";
$message_admin .= "Ime: $name\n";
$message_admin .= "Email: $email\n";
$message_admin .= "Poruka:\n$message\n\n";
$message_admin .= "Poslano: " . date('d.m.Y. H:i');

// Pošalji email administratoru
$admin_mail_sent = mail($to_admin, $subject_admin, $message_admin, $headers_admin);

// Pošalji potvrdu korisniku
$to_user = $email;
$subject_user = "Hvala na poruci | Blocksize d.o.o.";
$headers_user = "From: Blocksize d.o.o. <matko@blocksize.hr>\r\n";
$headers_user .= "Reply-To: matko@blocksize.hr\r\n";
$headers_user .= "Content-Type: text/plain; charset=UTF-8\r\n";

$message_user = "Poštovani/a $name,\n\n";
$message_user .= "Hvala vam na poruci. Zaprimili smo vaš upit i odgovorit ćemo u najkraćem mogućem roku.\n\n";
$message_user .= "Sažetak vaše poruke:\n$message\n\n";
$message_user .= "S poštovanjem,\nTim Blocksize d.o.o.";

$user_mail_sent = mail($to_user, $subject_user, $message_user, $headers_user);

// Logirajte rezultat
file_put_contents('form_log.txt', date('Y-m-d H:i:s') . " - Rezultat: Admin email: " . ($admin_mail_sent ? "Poslano" : "Greška") . ", Korisnički email: " . ($user_mail_sent ? "Poslano" : "Greška") . "\n", FILE_APPEND);

// Odgovorite s JSON rezultatom - uvijek vraćamo success=true jer korisnik ne može ništa s informacijom o grešci
echo json_encode(['success' => true, 'message' => 'Hvala na poruci! Kontaktirat ćemo vas u najkraćem mogućem roku.']);
?>
