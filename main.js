let menu = document.querySelector(".menu");
let blurBg = document.querySelector(".blurBg");
let main = document.querySelector(".map");
let schoolLoc1 = document.querySelector(".schoolLoc1");
let fizraLoc2 = document.querySelector(".fizraLoc2");
let arenaLoc3 = document.querySelector(".arenaLoc3");
let player = document.querySelector(".player");
let btnPlay = document.querySelector(".btnPlay");
let gifka = document.querySelector(".gifka");
let location1 = document.querySelector(".location1");
let dialog1 = document.querySelector(".dialog1");
let dialogName = document.querySelector(".dialogName");
let dialogText = document.querySelector(".dialogText");
let dialogAvatar = document.querySelector(".dialogAvatar");
let btncorrect = document.querySelector(".btncorrect");
let btnfalse1 = document.querySelector(".btnfalse1");
let btnfalse = document.querySelector(".btnfalse");

let btncorrect2 = document.querySelector(".btncorrect2");
let btnfalse12 = document.querySelector(".btnfalse12");
let btnfalse2 = document.querySelector(".btnfalse2");

let btncorrect3 = document.querySelector(".btncorrect3");
let btnfalse13 = document.querySelector(".btnfalse13");
let btnfalse3 = document.querySelector(".btnfalse3");

let quest1 = document.querySelector(".quest1");
let quest2 = document.querySelector(".quest2");
let quest3 = document.querySelector(".quest3");
let quest4 = document.querySelector(".quest4");

let location2 = document.querySelector(".location2");
let vremya = document.querySelector(".vremya");

let location3 = document.querySelector(".location3");



let loc1 = 0;
let loc2 = 0;
let questScore = 0;
let countTime = 0;
let score = 0;
let chance = 0;
let enemyChance = 0;
let yourScore = document.querySelector(".yourScore");
let enemyScore = document.querySelector(".enemyScore");
let ballYour = 0;
let ballEnemy = 0;
let enemyGif = document.querySelector(".enemyGif");
let yourGif = document.querySelector(".yourGif");
let easy = document.querySelector(".easy");
let normal = document.querySelector(".normal");
let hard = document.querySelector(".hard");


hard.onclick = function(){
	enemyChance = 2
}

normal.onclick = function(){
	enemyChance = 3
}

easy.onclick = function(){
	enemyChance = 5
}

btnPlay.onclick = function(){
	if (enemyChance>0) {
		menu.style.display = "none";
		main.style.display = "block";
		blurBg.style.backgroundImage = "url(map.jpg)"
		alert("Твоя цель, добыть пропуск в локации 'Класс', а также получить навык чтобы выйграть турнир! У тебя есть только одна жизнь!")
	}else{
		alert("Выбери сложность")
	}
	
}

//LOCATION1
let onLoc1234567 = function(){
	quest4.style.display = "none";
	blurBg.style.backgroundImage = "url(map.jpg)";
	main.style.display = "block";
	location1.style.display = "none";
}
let onLoc123456 = function(){

	btnfalse3.onclick = function(){
		quest3.style.display = "none";
		
		alert("Неправильно")
		if (questScore>1) {
			quest4.style.display = "block";
			setTimeout(onLoc1234567,1500)
		}else{
			alert("Ты проиграл нажмиай ctrl + R");
			blurBg.style.display = "none"
		}

	}

	btnfalse13.onclick = function(){
		quest3.style.display = "none";
		
		alert("Неправильно")
		if (questScore>1) {
			quest4.style.display = "block";
			setTimeout(onLoc1234567,1500)
		}else{
			alert("Ты проиграл нажмиай ctrl + R");
			blurBg.style.display = "none"
		}

	}

	btncorrect3.onclick = function(){
		questScore = 3;
		quest3.style.display = "none";
		
		alert("Правильно")
		if (questScore>1) {
			quest4.style.display = "block";
			setTimeout(onLoc1234567,1500)
		}else{
			alert("Ты проиграл нажмиай ctrl + R");
			blurBg.style.display = "none"
		}

	}
}

let onLoc12345 = function(){

	document.querySelector(".btnfalse2").onclick = function(){
		quest2.style.display = "none";
		quest3.style.display = "block";
		alert("Неправильно")

	}

	btnfalse12.onclick = function(){
		quest2.style.display = "none";
		quest3.style.display = "block";
		alert("Неправильно")

	}

	btncorrect2.onclick = function(){
		questScore = 2;
		quest2.style.display = "none";
		quest3.style.display = "block";
		alert("Правильно")

	}
	setTimeout(onLoc123456,0)
}

let onLoc1234 = function(){
	dialog1.style.display = "none";
	location1.style.display = "block";

	btnfalse.onclick = function(){
		quest1.style.display = "none";
		quest2.style.display = "block";
		alert("Неправильно")

	}

	btnfalse1.onclick = function(){
		quest1.style.display = "none";
		quest2.style.display = "block";
		alert("Неправильно")

	}

	btncorrect.onclick = function(){
		questScore =  1;
		quest1.style.display = "none";
		quest2.style.display = "block";
		alert("Правильно")

	}
	setTimeout(onLoc12345,0)

	//2стадия

	
}

let onLoc123 = function(){
	dialogAvatar.src = "teacher.png";
	dialogName.innerHTML = "Айда";
	dialogName.style.color = "#af7951";
	dialogText.innerHTML = "Ура, команда в сборе, но сначало пройди тест чтобы получить пропуск.(Не спеши это не на время!)";
	setTimeout(onLoc1234,5500)
}
let onLoc12 = function(){
	dialogAvatar.src = "gg.png";
	dialogName.innerHTML = "Куроко";
	dialogName.style.color = "#bae2f8";
	dialogText.innerHTML = "Почему бы и нет?";
	setTimeout(onLoc123,2500);
}

let onLoc1 = function(){
	dialogAvatar.src = "teacher.png";
	dialogName.innerHTML = "Айда";
	dialogName.style.color = "#af7951";
	dialogText.innerHTML = "Куроко, мы тут хотим участвовать в школьном турнире, можешь ли ты участвовать?";
	dialog1.style.display = "flex";
	setTimeout(onLoc12,5000)
}

let changeLoc1 = function(){
	if (loc1==1) {
		blurBg.style.backgroundImage = "url(loc1.jpg)";
		main.style.display = "none";
		setTimeout(onLoc1,1000)
	}else{
		alert("Ты уже получил пропуск!")
	}
}
//location1END
let onLoc2234567 = function(){
	location2.style.display = "block";
	dialog1.style.display = "none";

	let proverka = function(){
		if (score==1 || score==2 || score==3|| score==4 || score==5 || score==6 || score==7) {
			chance = 4;
			alert("Ты получил низкий навык, теперь твой шанс попадания 1 к 4");
			blurBg.style.backgroundImage = "url(map.jpg)";
			main.style.display = "block";
			location2.style.display = "none";
			for (var i = 0; i < 14; i++) {
				document.querySelectorAll(".mark")[i].style.display = "none"
			}
		}

		if (score==8 || score==9 || score==10|| score==11) {
			chance = 3;
			alert("Ты получил средний навык, теперь твой шанс попадания 1 к 3");
			blurBg.style.backgroundImage = "url(map.jpg)";
			main.style.display = "block";
			location2.style.display = "none";
			for (var i = 0; i < 14; i++) {
				document.querySelectorAll(".mark")[i].style.display = "none"
			}
		}

		if (score==12 || score==13 || score==14) {
			chance = 2;
			alert("Ты получил высший навык, теперь твой шанс попадания 1 к 2");
			blurBg.style.backgroundImage = "url(map.jpg)";
			main.style.display = "block";
			location2.style.display = "none";
			for (var i = 0; i < 14; i++) {
				document.querySelectorAll(".mark")[i].style.display = "none"
			}
					}
	}

	let randomLeft = function(){
            let rand = Math.random() * 1500;
            let round = Math.round(rand);
            return round;
        }  

        let randomTop = function(){
            let rand = Math.random() * 700;
            let round = Math.round(rand);
            return round;
        } 

    let createPoint = function(){
	   let point = document.createElement('img');
	   document.body.appendChild(point);
	   point.src = "ball.png";
       point.classList.add("mark");

	   point.style.marginLeft = randomLeft() + "px";
       point.style.marginTop = randomTop() + "px";

       point.onclick = function(){
       point.style.display = "none";
       score = score + 1;
       document.querySelector(".scoreScore").innerHTML = score;

       }
    }

    let createPoints = setInterval(createPoint,700);
			setTimeout(() => { clearInterval(createPoints);}, 10000);

	let vremya1 = function() {
			countTime = countTime +10
			vremya.style.transition = "0.8s"
			vremya.style.width = countTime+"%"
		}

		let vremyaTimer = setInterval(vremya1,1000)
		setTimeout(() => { clearInterval(vremyaTimer);}, 11000);
		setTimeout(proverka,11100)	
}

let onLoc223456 = function(){
	dialogAvatar.src = "svyyyx.png";
	dialogName.innerHTML = "svyyyx";
	dialogName.style.color = "#c13224";
	dialogText.innerHTML = "ВАЖНО! От этого напрямую зависит исход матча. 1-7 низкий навык 1/4; 8-11 средний навык 1/3; 12-14 высокий навык 1/2.";
	setTimeout(onLoc2234567,9000)
}

let onLoc22345 = function(){
	dialogAvatar.src = "kagamii.png";
	dialogName.innerHTML = "Кагами";
	dialogName.style.color = "#c13224";
	dialogText.innerHTML = "Я тебе скажу как получить этот навык. Щас перед тобой появятся 14 мячей у тебя будет 10 секунд, лучше набить побольше т.к от этого напрямую зависит наша игра!";
	setTimeout(onLoc223456,8500);
}

let onLoc2234 = function(){
	dialogAvatar.src = "gg.png";
	dialogName.innerHTML = "Куроко";
	dialogName.style.color = "#bae2f8";
	dialogText.innerHTML = "Кто же мне поможет?";
	setTimeout(onLoc22345,2500);
}

let onLoc223 = function(){
	dialogAvatar.src = "kagamii.png";
	dialogName.innerHTML = "Кагами";
	dialogName.style.color = "#c13224";
	dialogText.innerHTML = "Ну тогда тебе нужно освоить броски!";
	setTimeout(onLoc2234,4000);
}

let onLoc22 = function(){
	dialogAvatar.src = "gg.png";
	dialogName.innerHTML = "Куроко";
	dialogName.style.color = "#bae2f8";
	dialogText.innerHTML = "Вроде бы да";
	setTimeout(onLoc223,1500);
}

let onLoc2 = function(){
	dialogAvatar.src = "kagamii.png";
	dialogName.innerHTML = "Кагами";
	dialogName.style.color = "#c13224";
	dialogText.innerHTML = "Курочин, я слышал что ты будешь в нашей комнаде?";
	dialog1.style.display = "flex";
	setTimeout(onLoc22,4000);
}

let changeLoc2 = function(){
	if (loc2==1) {
		blurBg.style.backgroundImage = "url(loc2.jpg)";
		main.style.display = "none";
		setTimeout(onLoc2,1000)
	}else{
		alert("Ты уже получил навык!")
	}

}
		let randomYour = function(){
            let rand = Math.random() * chance;
            let round = Math.round(rand);
            return round;
    	}  

	    let randomEnemy = function(){
	            let rand = Math.random() * enemyChance;
	            let round = Math.round(rand);
	            return round;
	    }

let onLoc323456789 = function(){
	dialog1.style.display = "none";
	menu.style.display = "block";
	btnPlay.style.display = "none";
	document.querySelector(".easy").style.display = "none";
	document.querySelector(".normal").style.display = "none";
	document.querySelector(".hard").style.display = "none";
	document.querySelector(".btnGallery").style.display = "block"
	document.querySelector(".btnGallery").onclick = function(){
		document.querySelector(".location4").style.display = "block";
		menu.style.display = "none"
	}
}

let onLoc32345678 = function(){
	location3.style.display = "none";
	blurBg.style.backgroundImage = "url(main.gif)";
	dialog1.style.display = "flex";
	dialogAvatar.src = "svyyyx.png";
	dialogName.innerHTML = "svyyyx";
	dialogName.style.color = "#c13224";
	dialogText.innerHTML = "Ты прошел игру молодец?";
	setTimeout(onLoc323456789,3000);

}


let onLoc3234567 = function(){
	dialog1.style.display = "none";
	location3.style.display = "block";

	document.querySelector(".gole").onclick = function(){

		let your = randomYour();
		let enemy = randomEnemy();
	    if (your == 1) {
	    	ballYour = ballYour + 1;
	    	yourScore.innerHTML = ballYour;
	    	yourGif.src = "plus1.gif";
	    }else{
	    	yourGif.src = "null.gif"
	    }

	    if (enemy == 1) {
	    	ballEnemy = ballEnemy + 1;
	    	enemyScore.innerHTML = ballEnemy;
	    	enemyGif.src = "plus1.gif";
	    }else{
	    	enemyGif.src = "null.gif";
	    }

	    if (ballYour == 6) {
	    	alert("Ты выйграл");
	    	setTimeout(onLoc32345678,10)
	    }

	    if(ballEnemy == 6) {
	    	alert("Ты проиграл, ctrl + r");
	    }
	}
}

let onLoc323456 = function(){
	dialogAvatar.src = "svyyyx.png";
	dialogName.innerHTML = "svyyyx";
	dialogName.style.color = "#c13224";
	dialogText.innerHTML = "У вас будет Ꝏ кол. броосков, но выйграет тот кто первее набьет 5 очков, нажимай кнопку чтобы вы кинули мяч.";
	dialog1.style.display = "flex";
	setTimeout(onLoc3234567,9000)
}


let onLoc32345 = function(){
	dialogAvatar.src = "enemy.png";
	dialogName.innerHTML = "Акаши";
	dialogName.style.color = "#c13224";
	dialogText.innerHTML = "Удачи!";
	dialog1.style.display = "flex";
	setTimeout(onLoc323456,2000)
}

let onLoc3234 = function(){
	dialogAvatar.src = "gg.png";
	dialogName.innerHTML = "Куроко";
	dialogName.style.color = "#bae2f8";
	dialogText.innerHTML = "Да, и на этот раз я тебя выйграю!";
	dialog1.style.display = "flex";
	setTimeout(onLoc32345,4500)
}

let onLoc323 = function(){
	dialogAvatar.src = "enemy.png";
	dialogName.innerHTML = "Акаши";
	dialogName.style.color = "#c13224";
	dialogText.innerHTML = "О, Куроко и ты тут?";
	dialog1.style.display = "flex";
	setTimeout(onLoc3234,3000)
}

let onLoc32 = function(){
	dialogAvatar.src = "gg.png";
	dialogName.innerHTML = "Куроко";
	dialogName.style.color = "#bae2f8";
	dialogText.innerHTML = "Ага";
	dialog1.style.display = "flex";
	setTimeout(onLoc323,1500)
}

let onLoc3 = function(){
	dialogAvatar.src = "teacher.png";
	dialogName.innerHTML = "Айда";
	dialogName.style.color = "#af7951";
	dialogText.innerHTML = "У нас получилось, мы добрались до турнира!";
	dialog1.style.display = "flex";
	setTimeout(onLoc32,4500)
}

let changeLoc3 = function(){
	if (loc1 > 0 && loc2 > 0) {
		blurBg.style.backgroundImage = "url(loc3.jpg)";
		main.style.display = "none";
		setTimeout(onLoc3,1000)
	}else{
		
		if (loc1==1) {
			alert("Ты еще не получил навык");
		}else{
			alert("Ты еще не получил пропуск");
		}
	}
	
}




schoolLoc1.onclick = function(){
	player.style.left = "10%";
	player.style.top = "40%";
	loc1 = loc1 + 1;
	setTimeout(changeLoc1,1000);

}

fizraLoc2.onclick = function(){
	player.style.left = "57%";
	player.style.top = "15%";
	loc2 = loc2 + 1;
	setTimeout(changeLoc2,1000);
	
}

arenaLoc3.onclick = function(){
	player.style.left = "70%";
	player.style.top = "75%";
	setTimeout(changeLoc3,1000);
	
}
gifka.onclick = function(){
	main.style.display = "block";
	blurBg.style.backgroundImage = "url(map.jpg)";
	menu.style.display = "none";


}












































$(document).ready(function () {

  function second_passed() {
    $('.clock').removeClass('is-off');
  }
  setTimeout(second_passed, 2000)

  $('.switcher').on('click', function(e) {
    e.preventDefault();
    $('.screen').toggleClass('glitch');
  });


  var newDate = new Date();
  newDate.setDate(newDate.getDate());

  setInterval( function() {

    var hours    = new Date().getHours();
    var seconds  = new Date().getSeconds();
    var minutes  = new Date().getMinutes();

    var realTime = ( hours < 10 ? '0' : '' ) + hours + ' : ' + ( minutes < 10 ? '0' : '' ) + minutes + ' : ' + ( seconds < 10 ? '0' : '' ) + seconds

    $('.time').html(realTime);
    $('.time').attr('data-time', realTime);

  }, 1000);
})