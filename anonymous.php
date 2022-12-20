<?php
    $data=$_POST['anon-message'];
    $fp = fopen('messages.txt', 'a');
    fwrite($fp, $data);
    fwrite($fp, "\n");
    fclose($fp);
    header('Location: http://0.0.0.0:6969/index.html');
?>