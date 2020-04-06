<?php

  $name = $_POST['name_en'];
  $password = $_POST['password_en'];
  $link = mysqli_connect('127.0.0.1','root','newpassword','site');
  if (!$link) die("Error");
  $query = "SELECT score, pass FROM users WHERE name = '".$name."' AND pass = '".$password."'";
  $result = mysqli_query($link, $query);
  $count = mysqli_num_rows($result);
  if($count==1) {
    setcookie("login","$name", time()+3600);
    $row = mysqli_fetch_row($result);
    setcookie("score","$row[0]", time()+3600);
    setcookie("pass","$row[1]", time()+3600);
    header("Location: /game4");
  }
  else {
    echo "<script type='text/javascript'>alert('Неверный логин или пароль'); document.location.href = 'reg.php';</script>";
  }
  mysqli_close($link);
?>
