// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC0FrC_dG84i8EZ6Yhep98UJhtSw7v3-1Y",
    authDomain: "anjalie-game.firebaseapp.com",
    databaseURL: "https://anjalie-game.firebaseio.com",
    projectId: "anjalie-game",
    storageBucket: "anjalie-game.appspot.com",
    messagingSenderId: "269257548767",
    appId: "1:269257548767:web:f8e346ecc31b2859"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
let x
let y
let a
let j
let direction_h 
let direction_v 
let score;
let n=[5,70,300,698,211]
let p=[11,90,225,173,600]
let direction_h1 
let direction_v1 
let enemy
let level
let time
let dot = document.getElementById("dot")
let scoreboard = {  }
let emoji = [3]
let pizza
let chickens = [ ]


 
function setup() {
  createCanvas(windowWidth, windowHeight);
  x=200
  y=30
  a=200
  j=90
  direction_h = 1
  direction_v= 1
  direction_h1= [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  direction_v1= [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  score=0
  enemy=2
  level=1
  time=200
  emoji = createImg("jamaica-1.gif")
  pizza=createImg("cat.gif")
 for (i=0; i<enemy; i=i+1) {
 chickens.push(createImg("chicken.gif"))
}


 
  
}

 function draw() {
   if(time > 0) {
    background(255,204,229);
     emoji.size(2*40, 2*40)
  emoji.position((x - emoji.width/2),y- emoji.height/2)

    fill(255,204,229)
    stroke(255,204,229)
    circle(x,y,40)
    if (keyIsDown(LEFT_ARROW)) {
      x = x - 10
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x= x + 10

    } if (keyIsDown(UP_ARROW)) {
        y = y - 10
      }
      if (keyIsDown(DOWN_ARROW)) {
        y = y + 10
      }
       pizza.size(2*30, 2*30)
  pizza.position((a - pizza.width/2),j- pizza.height/2)
      fill(255,204,229)
      circle(a,j,30)
      a = a + 3*direction_h
      j = j + 2*direction_v

      if (a > width || a < 0) {
      direction_h = direction_h * -1
    }
    if (j > height || j < 0) {
      direction_v = direction_v * -1
    }
   
    for (i=0; i<enemy; i=i+1) {
       chickens[i].size(2*45, 2*45)
  chickens[i].position((n[i] - chickens[i].width/2), p[i] - chickens[i].height/2)

     fill(255,204,229)
     circle(n[i],p[i],45)
     n[i] = n[i] + 6*direction_h1[i]
     p[i] = p[i] + 3*direction_v1[i]

    if (n[i] > width || n[i] < 0) {
      direction_h1[i] = direction_h1[i] * -1
    }
    if (p[i] > height || p[i] < 0) {
      direction_v1[i] = direction_v1[i] * -1
    } 
    if (dist(x,y,n[i],p[i]) < 20 + 60 ) {
	    score = score - 1
    }    
  }
   
  textSize(40)
 fill(255,0,127)
 text("Score:"+score,50,50)
 text("Time:"+time,50,90)
  if (dist(x,y,a,j) < 20 + 40 ) {
	score = score + 2
  }
  
  time = time - 1
   
if (score > 20 && level == 1) {
    enemy = enemy + 2
   for (i=2; i<4; i=i+1) {
    chickens.push(createImg("chicken.gif"))
    }
    level = 2
      n.push.apply(n, [50, 73])
      p.push.apply(p, [30, 90])

}
   if (score > 60 && level == 2) {
    enemy = enemy + 4
      for (i=4; i<8; i=i+1) {
 chickens.push(createImg("chicken.gif"))
}
    level = 3
      n.push.apply(n, [50,73,35,90])
      p.push.apply(p, [30,90,18,62])

}
   if (score > 100 && level == 3) {
    enemy = enemy + 6
      for (i=8; i<16; i=i+1) {
 chickens.push(createImg("chicken.gif"))
}
    level = 4
      n.push.apply(n, [50,73,35,90,120,505])
      p.push.apply(p, [30,90,18,62,820,102])
   }
   if (score > 140 && level == 4) {
    enemy = enemy + 8
      for (i=16; i<32; i=i+1) {
 chickens.push(createImg("chicken.gif"))
}
    level = 5
      n.push.apply(n, [50,73,35,90,707,920,18,48])
      p.push.apply(p, [30,90,18,602,199,182,122,33])
   }
  if (score > 180 && level == 5) {
    enemy = enemy + 10
     for (i=32; i<64; i=i+1) {
 chickens.push(createImg("chicken.gif"))
}
    level = 6
      n.push.apply(n, [50,730,305,90,77,92,18,48,2040,100])
      p.push.apply(p, [30,90,18,62,199,18200,122,303,50,1900])
  }
   
   if (score > 220 && level == 6) {
    enemy = enemy + 12
      for (i=64; i<128; i=i+1) {
 chickens.push(createImg("chicken.gif"))
}
    level = 7
      n.push.apply(n, [50,73,35,90,77,9002,18,48,707,62,13,56])
      p.push.apply(p, [30,90,18,62,199,182,122,330,90,55,2009,180])
 }
      if (score > 260 && level == 7) {
    enemy = enemy + 14
         for (i=128; i<256; i=i+1) {
 chickens.push(createImg("chicken.gif"))
}
    level = 8
      n.push.apply(n, [50,7003,3005,90,77,92,18,48,77,62,13,56,2,760])
      p.push.apply(p, [3000,90,18,62,199,182,122,330,90,55,209,180,900,476])
 }
      if (score > 300 && level == 8) {
    enemy = enemy + 16
         for (i=256; i<512; i=i+1) {
 chickens.push(createImg("chicken.gif"))
}
    level = 9
      n.push.apply(n, [50,73,35,9000,77,92,18,4008,77,62,13,56,289,765,298,106])
      p.push.apply(p, [30,90,18,62,199,1802,122,330,90,55,209,180,435,87,519,243])
 }
      if (score > 340 && level == 9) {
    enemy = enemy + 18
         for (i=512; i<1024; i=i+1) {
 chickens.push(createImg("chicken.gif"))
}
    level = 10
      n.push.apply(n, [50,73,35,90,77,92,18,48,77,62,13,56,778,921,650,9,0,162])
      p.push.apply(p, [30,90,18,62,199,182,122,330,90,55,209,180,44,222,632,899,1090,595])
 }
   }
    else {
      dot.innerHTML = "Name? <input id=dog><button onclick='restart()'>Restart</button>"
      noLoop()

}



}
function restart() { 
let dog = document.getElementById("dog")
		name = dog.value 
		if (name != "") { 
			scoreboard[name] = score
		}
alert("Scoreboard: " +JSON.stringify(scoreboard,null,1)) 
		time = 200
		score = 0
        level= 1
        enemy= 2
		loop()
		dot.innerHTML = ""
        generate_leaderboard()
}
function generate_leaderboard() {
  scores = Object.values(scoreboard)
  names = Object.keys(scoreboard)
  
  if (scores.length >= 3) {
    let leaderboard = { }
    for (i=0; i<3; i=i+1) {
      max = Math.max(...scores)
      index = scores.indexOf(max)
      leaderboard[names[index]] = max
      names.splice(index,1)
      scores.splice(index,1)
    }
    alert("Leaderboard: " + JSON.stringify(leaderboard,null,1))
  }
}

