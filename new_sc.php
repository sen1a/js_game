<?
  $score = $_POST['score'];
  $link = mysqli_connect('127.0.0.1','root','newpassword','site');
  if (!$link) die("Error");
  $name = $_COOKIE["login"];
  $pass = $_COOKIE["pass"];
  $query = "UPDATE users SET score = '$score' WHERE name = '$name';";
  //$query = "INSERT INTO users VALUES('$name','$pass') on DUPLICATE KEY UPDATE score='$score';";
  if ($_COOKIE["login"] && mysqli_query($link, $query)) {
    //printf("Информация отправлена");
    setcookie("login","$name", time()+3600);
    setcookie("score","$score",time()+3600);
    header("Location: /game4");
  }
  else echo "Ошибка: ".mysqli_error($link);
  mysqli_close($link);
?>
