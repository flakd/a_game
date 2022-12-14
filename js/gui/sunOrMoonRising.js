  // when it displays, this is the modal that holds the action/activity graphic
const activityImgModal = document.getElementById("activity-image-modal");
const activityImg = document.getElementById("activity-image");
// when it actually plays, this is the action/activity audio clip
const activityAudioClip = document.createElement("audio");
// when it displays, this is the modal that holds the RAoG graphic
const RAoGImgModal = document.getElementById("RAoG-image-modal");   
const RAoGImg = document.getElementById("RAoG-image");   
// when it actually plays, this is the RAoG audio clip
const RAoGAudioClip = document.createElement("audio");  

function playActivityMedia(activityNameStr){
  let tmpName = activityNameStr.split(" ").join("-");
  let srcFileName = "images/" + tmpName + ".gif";
  activityImg.src = srcFileName;
  activityImgModal.style.display = "block";
  activityAudioClip.src = "audio/" + tmpName + ".mp3";
  activityAudioClip.play();
}

function playRAoGMedia(activityNameStr){
  let tmpName = activityNameStr.split(" ").join("-");
  let srcFileName = "images/" + tmpName + ".png";
  RAoGImg.src = srcFileName;
  RAoGImgModal.style.display = "block";
  RAoGAudioClip.src = "audio/" + tmpName + ".mp3";
  RAoGAudioClip.play();
}

//function handle_activityCompleted(sender, activity, completionDuration){
function handle_activityCompleted(sender, activity){  
  // hide stuff  
  stopActivityMedia();
}
function stopActivityMedia(){
  activityAudioClip.pause();
  activityImgModal.style.display = "none";
}  
function handle_btnCloseRAoGImgModal_click(sender){
  RAoGAudioClip.pause();
  RAoGImgModal.style.display = "none";  
}
  
  
  g.whatImDoing = class {
    constructor() {
      return (
        {}
      );
    }
    static startActivity(action) {
      //  Is a procedure that MUST perform the start of the activity if 
      //  possible.  It is possible if I am NOT BUSY doing anything else.
      //  RETURNS: a boolean if the activity started 
      g.whatImDoing.timeLeft = action.numHrs * 60;
      g.whatImDoing.activity = action;
    }
    static isBusy() {
      if (g.whatImDoing.activity !== null) {
        return true;
      } else {
        return false;
      }
    }
    static getActivityName() {
      if (g.whatImDoing.isBusy()) {
        return g.whatImDoing.activity.key;
      }
    }
    static getActivityGerund() {
      if (g.whatImDoing.isBusy()) {
        return g.whatImDoing.activity.gerund;
      }
    }
    static getBusyMessage(message) {
      if (g.whatImDoing.isBusy()) {
        return `You can't do that right now, you're busy ${g.whatImDoing.getActivityGerund()} for the next ${g.whatImDoing.getTimeLeft()} minutes`;
      } else {
        return "sure thing... you're not busy";
      }
    }
    static getTimeLeft() {
      if (g.whatImDoing.isBusy()) {
        return g.whatImDoing.timeLeft;
      } else {
        return 0;
      }
    }
  };
  g.whatImDoing.timeLeft = 0;
  g.whatImDoing.activity = null;
  g.whatImDoing.onActivityCompleted = handle_activityCompleted;
  g.whatImDoing.passMinute = function passMinute(){
    if (g.whatImDoing.activity === null) return;
    g.whatImDoing.timeLeft--;
    if (g.whatImDoing.timeLeft <= 0) {
      g.whatImDoing.onActivityCompleted(g.whatImDoing, g.whatImDoing.activity);
      g.whatImDoing.activity = null;
      g.whatImDoing.timeLeft = 0;
    }
  };



  class WhatAmIDoing {
    constructor() {
      //return (
        //{
        this._timeLeft = 0;
        //timeLeft = 0;
        this._activity = null;
        //activity = null;
        this._onActivityCompleted = handle_activityCompleted;          
        //onActivityCompleted = handle_activityCompleted;
        //}
      //);
    }
    startActivity(action) {
      //  Is a procedure that MUST perform the start of the activity if 
      //  possible.  It is possible if I am NOT BUSY doing anything else.
      //  RETURNS: a boolean if the activity started 
      this._timeLeft = action.numHrs * 60;
      this._activity = action;
    }
    isBusy() {
      if (this._activity !== null) {
        return true;
      } else {
        return false;
      }
    }
    getActivityName() {
      if (this.isBusy()) {
        return this._activity.key;
      }
    }
    getActivityGerund() {
      if (this.isBusy()) {
        return this._activity.gerund;
      }
    }
    getBusyMessage(message) {
      if (this.isBusy()) {
        return `You can't do that right now, you're busy ${this.getActivityGerund()} for the next ${this.getTimeLeft()} minutes`;
      } else {
        return "sure thing... you're not busy";
      }
    }
    get timeLeft() {
      if (this.isBusy()) {
        return this._timeLeft;
      } else {
        return 0;
      }
    }
    getTimeLeft() {
      if (this.isBusy()) {
        return this._timeLeft;
      } else {
        return 0;
      }
    }    
    passMinute(){
      if (this._activity === null) return;
      this._timeLeft--;
      if (this._timeLeft <= 0) {
        this._onActivityCompleted(this, this._activity);
        this._activity = null;
        this._timeLeft = 0;
      }
    }
  }
  //const waid = new WhatAmIDoing();

  (function(){
    g.waid = new WhatAmIDoing();
  })();
  


function swapSunMoon(sunMoon){
  let sun = document.getElementById("sun");
  let moon = document.getElementById("moon");
  let sunOrMoon = document.getElementById("sunOrMoon");

  if (!sun) {
    console.log("your missing the HTML element 'sun'");
    return;
  }
  if (!moon) {
    console.log("your missing the HTML element 'sun'");
    return;
  }
  if (!sunMoon) {
    console.log("ERROR:  you're missing the function's sunMoon input parameter");
    return;
  } else if (sunMoon !="sun" && sunMoon !="moon" ){
    console.log("ERROR:  sunOrMoon must be either 'sun' or 'moon' - no other values are valid");
    return;
  } else {
    if (sunMoon === "moon") {
      //moon.style.display = "none";
      //sun.style.display = "block";
      sunOrMoon.src = sun.src;
      document.querySelector("#sky-box").style.backgroundColor = "skyblue";
      //sunOrMoon = sun;      
    } else if (sunMoon === "sun"){
      //sun.style.display = "none";      
      //moon.style.display = "block";
      sunOrMoon.src = moon.src;
      document.querySelector("#sky-box").style.backgroundColor = "#7777FF";
      //sunOrMoon = moon;
    }
  }
  return sunOrMoon;
}





function moveSunOrMoon(sunOrMoon){
  let didSwapRecently = false;

  g.t.todayStart = g.t.start = Date.now();
  g.t.tick = 0;
  g.t.totalTicks = 0;
  g.t.minute = 0;
  g.t.totalMinutes = 0;
  g.t.hour = 0;
  g.t.totalHours = 0;
  g.t.day = 0;

  g.t.gameDay = 0;
  g.t.hours = 5;
  
  g.t.hours = 0;  

  
  
  updateDayUI();


  g.t.oneHr = 1500;     
  g.t.riseSetDur = 1350;
  g.t.dayStartHr = 0;   
  g.t.dayEndHr = 24;
  
  g.t.sunriseHr = 0;    g.t.sunriseStart = g.t.sunriseHr * g.t.oneHr;
                        g.t.sunriseDone = (g.t.sunriseHr * g.t.oneHr) + g.t.riseSetDur;    
  
  g.t.sunsetHr = 5;    g.t.sunsetStart = g.t.sunsetHr * g.t.oneHr;
                        g.t.sunsetDone = (g.t.sunsetHr * g.t.oneHr) + g.t.riseSetDur;    

  g.t.moonriseHr = 16;  g.t.moonriseStart = g.t.moonriseHr * g.t.oneHr;
                        g.t.moonriseDone = (g.t.moonriseHr * g.t.oneHr) + g.t.riseSetDur;    

  g.t.moonsetHr = 12;   g.t.moonsetStart = g.t.moonsetHr * g.t.oneHr;
                        g.t.moonsetDone = (g.t.moonsetHr * g.t.oneHr) + g.t.riseSetDur;
  
  g.t.sunMoonHeight = 3;
  g.t.sunMoonHeightStr = g.t.sunMoonHeight + "px";
  g.t.xSpeedInterval = 300;
  g.t.ySpeedInterval = 30;
  //g.t.xOffset = -70;
  g.t.xOffset = 0;
  //g.t.yOffset = -110; 
  g.t.yOffset = 0; 



  



  let timer = setInterval(function() {
    timerIncrementHour(10);    


    // (re)focus the cursor upong EVERY timer click/event 
    document.getElementById("command-input").focus();

    // sun RISING PHASE
    if (g.t.hour === 0 && g.t.minute === 0 && g.t.tick === 0) {
      sunOrMoon = swapSunMoon("moon");
      let overlay = document.getElementById("shadow-overlay");
      overlay.classList.remove("shadow");      

    }
    else if (g.t.hour < 1) {
      sunOrMoon.style.left = -75 + g.t.minute/2 + "px";
      sunOrMoon.style.top = 120 + g.t.minute *2.2 * -1 + "px";
      lwr(sunOrMoon.style.top, document.querySelector("#log3"));
    } 
    
    //sun MOVING across the SKY
        // sun is out there for 16 Hrs, while moon for only 8 Hrs
    else if (g.t.hour >= 1 && g.t.hour <  g.t.moonriseHr) {
      sunOrMoon.style.left = -75 + (60 * g.t.hour + g.t.minute)/2.1 + "px";
    }


    // sun SETTING PHASE
    else if (g.t.hour == g.t.moonriseHr && g.t.minute === 0 && g.t.tick ) {
      sunOrMoon = swapSunMoon("sun");
      let overlay = document.getElementById("shadow-overlay");
      overlay.classList.add("shadow");
    }

    else if (g.t.hour >  g.t.moonriseHr && g.t.hour < 24) {
      sunOrMoon.style.left = -75 + (60 * (g.t.hour - g.t.moonriseHr) + g.t.minute)/1 + "px";
    }

      updateDayUI();
      updateHourUI();

      logTimeForDebugging();      

  }, 5);


}


function updateDayUI() {
  let dayStr = g.t.day.toString().padStart(3, "0");
  lwrDay(`DAY:${dayStr}`);
  //return dayStr;
}

function updateHourUI() {
  let hrStr = g.t.hour.toString().padStart(2, "0");
  lwrTime(`${hrStr}Hrs`);
}

function timerIncrementHour(numticks) {
  g.timePaused = false;
  if (!timePaused) {
    g.t.tick++;
    g.t.totalTicks++;
  }
  if (g.t.tick > numticks) { // TimerInterval = 50ms right now
    g.t.tick = 0;
    g.t.minute++;
    /*       let wasIbusy = g.whatImDoing.isBusy();
     */ 
    
    //g.whatImDoing.passMinute();
    //g.waid = new WhatAmIDoing();
    g.waid.passMinute();
    //WhatAmIDoing.passMinute();
    
    /*       if (g.whatImDoing.isBusy()===false && wasIbusy===true) {
            stopActivityMedia();
          } */
    g.t.totalMinutes++;
    if (g.t.minute > 59) {
      g.t.minute = 0;
      g.t.hour++;
      g.t.totalHours++;
      if (g.t.hour > 23) {
        g.t.hour = 0;
        g.t.day++;
      }
    }
  }
}

function logTimeForDebugging() {
  g.t.passed = Date.now() - g.t.start;
  lwr((
    `MINUTE: ${g.t.minute}<br>\n` +
    `HOUR: ${g.t.hour}<br>\n` +
    `DAY: ${g.t.day}<br>\n` +

    `TIME PASSED: ${g.t.passed}<br>\n` +
    `totMINUTEs: ${g.t.totalMinutes}<br>\n` +
    `totHOURs: ${g.t.totalHours}<br>\n`

  ), document.querySelector("#log2")
  );
}


