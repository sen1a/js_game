// JAVASCRIPT CODE //
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

const p = 32;

const men = new Image();
men.src = "img/person.png";

const wood = new Image();
wood.src = "img/wood.jpg";

const _fin = new Image();
_fin.src = "img/finish.png";

const men2 = new Image();
men2.src = "img/person2.png";

const grass = new Image();
grass.src = "img/weed.png"

const derevo = new Image();
derevo.src = "img/tree.png";

const _coin = new Image();
_coin.src = "img/coin1.png"

const stump = new Image();
stump.src = "img/stump.png";

const heart = new Image();
heart.src = "img/heart.png"

let frames = 0;

const coin = {
  draw : function() {
    ctx.drawImage(_coin, 0, 0, 32, 32, 630, 423, 32, 32);
  }
}

const hearts = {
  w : 32,
  h : 32,
  draw : function(c) {
    switch (c) {
      case 5:
        ctx.drawImage(heart, 0, 0, 32, 32, 10, 423, this.w, this.h);
        ctx.drawImage(heart, 0, 0, 32, 32, 47, 423, this.w, this.h);
        ctx.drawImage(heart, 0, 0, 32, 32, 84, 423, this.w, this.h);
        ctx.drawImage(heart, 0, 0, 32, 32, 121, 423, this.w, this.h);
        ctx.drawImage(heart, 0, 0, 32, 32, 158, 423, this.w, this.h);
        break;
      case 4:
        ctx.drawImage(heart, 0, 0, 32, 32, 10, 423, this.w, this.h);
        ctx.drawImage(heart, 0, 0, 32, 32, 47, 423, this.w, this.h);
        ctx.drawImage(heart, 0, 0, 32, 32, 84, 423, this.w, this.h);
        ctx.drawImage(heart, 0, 0, 32, 32, 121, 423, this.w, this.h);
        break;
      case 3:
        ctx.drawImage(heart, 0, 0, 32, 32, 10, 423, this.w, this.h);
        ctx.drawImage(heart, 0, 0, 32, 32, 47, 423, this.w, this.h);
        ctx.drawImage(heart, 0, 0, 32, 32, 84, 423, this.w, this.h);
        break;
      case 2:
        ctx.drawImage(heart, 0, 0, 32, 32, 10, 423, this.w, this.h);
        ctx.drawImage(heart, 0, 0, 32, 32, 47, 423, this.w, this.h);
        break;
      case 1:
        ctx.drawImage(heart, 0, 0, 32, 32, 10, 423, this.w, this.h);
        break;
      default:

    }
  }
}

const score = {
  draw : function() {
    ctx.drawImage(wood, 0, 0, 672, 40, 0 , 420, 672, 40);
  }
}

const player = {
  sX : 32,
  sY : 14,
  w : 96,
  h : 96,
  draw : function(x, y) {
    if (schet_a > 0){
      ctx.drawImage(men, 0, 0, 96, 96, x, y, this.w, this.h);
    } else {
      ctx.drawImage(men2, 0, 0, 96, 96, x, y, this.w, this.h);
    }
  }
}

const fin = {
  draw : function() {
    ctx.drawImage(_fin, 0, 0, 288, 288, 10, 172, 288, 288);
  }
}

const tree = {
  sX : 36,
  sY : 16,
  w : 96,
  h : 96,
  draw : function(x, y, broken) {
    if (broken == false){
      ctx.drawImage(stump, 0, 0, 96, 96, x, y, this.w, this.h);
    } else {
       ctx.drawImage(derevo, 0, 0, 96, 96, x, y, this.w, this.h);
      }
  }
}

document.onkeydown = checkKey;

r = 1;

schet_a = 0;

sc = 0;

damage = 0;

c = 5;

function checkKey(e){
  if (e.keyCode=="37")
    move_l();
  else if (e.keyCode=="39")
    move_r();
    else if (e.keyCode=="32")
      if (schet_a == 0)
        if (speed == 10)
          schet_a = p * 5;
        else if (speed == 5)
          schet_a = p * 3;
        else
          schet_a = p * 2;
}


function move_l() {
  if (r==1||r==2)
    r--;
    damage = 0;
    schet_a = 0;
}

function move_r() {
  if(r==0||r==1)
    r++;
    damage = 0;
    schet_a = 0;
}

function Random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var c0 = {
  x:p*9,
  y:314,
  s:1
};

var c1 = {
  b:true,
  x:0,
  y:0,
  s:0
};

var c2 = {
  b:true,
  x:0,
  y:0,
  s:0
};

var c3 = {
  b:true,
  x:0,
  y:0,
  s:0
};

var c4 = {
  b:true,
  x:0,
  y:0,
  s:0
};
speed = 1;

reg = false;

function draw() {
  var pattern = ctx.createPattern(grass, "no-repeat");
                  ctx.fillStyle = pattern;
                  ctx.fillRect(0,0,cvs.width,cvs.height);
                  ctx.strokeRect(0,0,cvs.width,cvs.height);

  rnd(c1,c2,c3,c4,frames);

  tree.draw(c1.x,c1.y, c1.b);
  broke(c0, c1);
  if (frames >= 160){
    tree.draw(c2.x,c2.y, c2.b);
    broke(c0, c2);
  }
  if (frames >= 320) {
    tree.draw(c3.x,c3.y, c3.b);
    broke(c0, c3);
  }
  if (frames >= 480){
    tree.draw(c4.x, c4.y, c4.b);
    broke(c0, c4);
  }

  move(c1, speed);
  move(c2, speed);
  move(c3, speed);
  move(c4, speed);

  frames+=speed;

  if (frames > 19999)
    speed = 10;
  else if (frames > 7999)
    speed = 5;
  else if (frames > 999)
    speed = 2;

  player.draw(c0.x,c0.y);
  if (schet_a > 0){
    schet_a--;
  }

  if (damage > 0)
    damage -= speed;

  turn(c0, r);

  score.draw();
  hearts.draw(c);
  coin.draw();

  ctx.textAlign = "right";
  ctx.strokeStyle = "yellow";
  ctx.font = 'bold 30px sans-serif';
  ctx.strokeText(sc, 620, 449);



  elements = document.querySelectorAll('span');
  for (let elem of elements) {
    _score = elem.innerHTML;
    reg = true;
    if (sc > _score){
      elem.innerHTML = sc;
    }
  }


  if (c == 0) {
    fin.draw();
    ctx.textAlign = "left";
    ctx.strokeStyle = "red";
    ctx.font = 'bold 100px sans-serif';
    ctx.strokeText("THE", 308, 172);
    ctx.strokeText("END", 308, 300);
    if (reg == true){
    let form = document.createElement('form');
    form.action = 'new_sc.php';
    form.method = 'POST';

    form.innerHTML = '<input name="score" value="'+_score+'">';

    // перед отправкой формы, её нужно вставить в документ
    document.body.append(form);
    setTimeout(() => form.submit(), 3000);
  } else{
    setTimeout(() => document.location.href = 'index.php', 3000);
  }
  }
  else {
    requestAnimationFrame(draw)
  }
}

function move(c, speed){
  c.y = c.y + speed;
}

function rnd(c1,c2, c3, c4, frames) {
  if (frames%640==0)
  {
    c1.s = Random(1,3);
    while ((c1.s == c4.s + 1)) {
      c1.s = Random(1,3);
    }
    spawn(c1);
  }
  if (frames%640==160)
  {
    c2.s = Random(1,3);
    while ((c2.s == c1.s + 1)) {
      c2.s = Random(1,3);
    }
    spawn(c2);
  }
  if (frames%640==320)
  {
    c3.s = Random(1,3);
    while ((c3.s == c2.s + 1)) {
      c3.s = Random(1,3);
    }
    spawn(c3);
  }
  if (frames%640==480)
  {
    c4.s = Random(1,3);
    while ((c3.s + 1 == c4.s)) {
      c4.s = Random(1,3);
    }
    spawn(c4);
  }
}

function broke(car1, car2){
  if (car2.y > 218 && car2.y < 410)
    if (r == car2.s)
      if (schet_a > 0 && car2.b == true) {
        car2.b = false;
        sc++;
        schet_a = 0;
      } else if (schet_a == 0 && car2.b == true) {
          if (damage > 0) { } else {
            c--;
            damage = 192;
          }
      }
}

function spawn(c) {
  c.b = true;
  switch (c.s) {
    case 1:
      c.x = p*2;
      c.y = -96;
      c.s = 0;
      break;
    case 2:
      c.x = p*9;
      c.y = -96;
      c.s = 1;
      break;
    case 3:
      c.x = p*16;
      c.y = -96;
      c.s = 2;
      break;
    default:
  }
}

function turn(car, r) {
  switch (r) {
    case 0:
      car.x = p*2;
      car.s = 0;
      break;
    case 1:
      car.x = p*9;
      car.s = 1;
      break;
    case 2:
      car.x = p*16;
      car.s = 2;
      break;
    default:
  }
}

draw();
