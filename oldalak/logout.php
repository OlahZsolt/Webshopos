<?php

session_start();
session_destroy();
header("Location: Webshop.php");
exit;

?>
