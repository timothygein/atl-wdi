// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    if (this.millisecs >= 1000) {
      this.millisecs -= 1000;
      this.secs++;
    }
    if (this.secs >= 60) {
      this.secs -= 60;
      this.mins++;
    }
  },
  reset: function(){
    this.mins = 0;
    this.secs = 0;
    this.millisecs = 0;
    this.laps = [];
  },
  start: function(){
    if (!this.isRunning) {
      this.isRunning = true;
      this.tickClock(); // kick-start the ticking of the clock
    }
  },
  stop: function(){
    this.isRunning = false;
  
  },
  lap: function(){
    if (this.isRunning) {
      this.laps.push({
        mins: this.mins,
        secs: this.secs,
        millisecs: this.millisecs
      });
    }
  }
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    
  },
  updateLapListDisplay: function(laps){
    if (Stopwatch.isRunning) {
      Stopwatch.lap();
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    for( var i = 0; i < (length - str.length); i++){
      str = '0' + str;
    }
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  },
  handleClickStart: function() {
    if (!Stopwatch.isRunning) { Stopwatch.start(); }
  },
  },
  handleClickStopReset: function(){
    if (Stopwatch.isRunning) {
      Stopwatch.lap();
      ViewEngine.updateLapListDisplay(Stopwatch.laps);
    }
  handleClickLap: function(){
    if (Stopwatch.isRunning) {
      Stopwatch.stop();
    } else {
      Stopwatch.reset();
      ViewEngine.updateTimeDisplay(0, 0, 0);
      ViewEngine.updateLapListDisplay(Stopwatch.laps);
    }
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
};
