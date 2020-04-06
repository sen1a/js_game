<!-- HTML CODE -->
<!DOCTYPE html>
<html lang=ru dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Гонки</title>
    <script>
    function enter(){
      document.location.href = "reg.php";
    }
    </script>
  </head>
  <body style="margin-left: auto; margin-right: auto; width: 672px;">
    <canvas id="game" width="672" height="460"></canvas>
    <script src="js/game.js"></script>
  </body>
</html>

<?
if ($_COOKIE["login"])
{
  echo "<p>Профиль игрока ".$_COOKIE["login"].'. Рекорд: <span name="score" id="score">'.$_COOKIE["score"]."</span>.<br></p>";
  echo "<form action='exit.php'>";
  echo "<button>Выход</button></form>";
}
else
{
  echo "<button id='enter' onclick='enter()'>Вход</button>";
}
?>
