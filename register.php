<?php

  $name = $_POST['name'];
  $password = $_POST['password'];
  $link = mysqli_connect('127.0.0.1','root','newpassword','site');
  if (!$link) die("Error");
  $query = "INSERT INTO users (name, pass, score) VALUE ('$name', '$password', '0')";
  if (mysqli_query($link, $query)) {
    //printf("Информация отправлена");
    setcookie("login","$name",time()+3600);
    setcookie("score","0",time()+3600);
    setcookie("pass","$password", time()+3600);
    header("Location: /game4");
  }
  else echo "Ошибка: ".mysqli_error($link);
  mysqli_close($link);
?>
