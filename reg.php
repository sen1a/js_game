<!DOCTYPE html>
<html lang=ru dir="ltr">
  <head>
    <meta charset="utf-8">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
    <style> [class*="col-"] { background-color: #eee; text-align: center; padding-top: 10px; padding-bottom: 10px; margin-bottom: 10px; font-size: 2rem; }</style>
    <title>Вход/Регистрация</title>
  </head>
  <body>
    <div class="col-xs-6">
      <form action="enter.php" method="post" name="form_ent"> <fieldset> <legend>Вход</legend>
        <p><label for="name_en">Имя</labe></p>
        <p><input id="name_en" name="name_en" onkeyup='checkParams()' placeholder="Введите имя"></p>
        <p><label for="password_en">Пароль</label></p>
        <p><input type="password" name ="password_en" id="password_en" onkeyup='checkParams()' placeholder="Введите пароль"></p>
        <p><input type='submit' id="submit_en" value="Войти" disabled></input></p>
      </form>
    </div>
    <div class="col-xs-6">
      <form action="register.php" method="post" name="form_reg"> <fieldset> <legend>Регистрация</legend>
        <p><label for="name">Имя</labe></p>
        <p><input id="name" name="name" onkeyup='checkParams2()' placeholder="Введите имя"></p>
        <p><label for="password">Пароль</label></p>
        <p><input type="password" name ="password" id="password" onkeyup='checkParams2()' placeholder="Введите пароль"></p>
        <p><input type='submit' id="submit" value="Зарегистрироваться" disabled></input></p>
      </form>
    </div>
  </body>
  <script type="text/javascript">
  function checkParams() {
  var log = $('#name_en').val();
  var pas = $('#password_en').val();

  if(log.length != 0 && pas.length != 0) {
      $('#submit_en').removeAttr('disabled');
  } else {
      $('#submit_en').attr('disabled', 'disabled');
  }
  }
  </script>
  <script type="text/javascript">
  function checkParams2() {
  var log = $('#name').val();
  var pas = $('#password').val();
  if(log.length != 0 && pas.length != 0) {
      $('#submit').removeAttr('disabled');
  } else {
      $('#submit').attr('disabled', 'disabled');
  }
  }
  </script>
</html>
