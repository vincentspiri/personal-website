<?php
    $FileName = $_FILES["tyisPics"]["name"];
    $TmpName=$_FILES['tyisPics']['tmp_name'];

    move_uploaded_file($TmpName, "uploads/".$FileName);
?>

