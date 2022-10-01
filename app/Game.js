const Scorecard = require('./Scorecard');

class Game {
  constructor(scorecard) {
    this.scorecard = scorecard;
    this.currentFrame = null;
    // referring to current frame:
    this.frameScore = null;
    this.frameThrow1 = null;
    this.frameThrow2 = null;
    this.frameThrow3 = null;
    this.frameBonusType = null;
  }

  setCurrentFrame(frame) {
    this.currentFrame = frame;
  }
  
  // should this immediately update the frame instance?
  throw1(pins) {
    this.frameThrow1 = pins;
  }

  throw2(pins) {
    this.frameThrow2 = pins;
  }

  throw3(pins) {
    this.frameThrow3 = pins;
  }

  // without frame 10 scoring logic
  // might not need the if statement block
  // if inserting the throw1 and throw2 scores to frame instance
  setThrowsTotalScore() {
    this.frameScore = this.frameThrow1 + this.frameThrow2;

    if (this.currentFrame === 1) {
      this.scorecard.frame1.score = this.frameScore;
    } else if (this.currentFrame === 2) {
      this.scorecard.frame2.score = this.frameScore;
    } else if (this.currentFrame === 3) {
      this.scorecard.frame3.score = this.frameScore;
    } else if (this.currentFrame === 4) {
      this.scorecard.frame4.score = this.frameScore;
    } else if (this.currentFrame === 5) {
      this.scorecard.frame5.score = this.frameScore;
    } else if (this.currentFrame === 6) {
      this.scorecard.frame6.score = this.frameScore;
    } else if (this.currentFrame === 7) {
      this.scorecard.frame7.score = this.frameScore;
    } else if (this.currentFrame === 8) {
      this.scorecard.frame8.score = this.frameScore;
    } else if (this.currentFrame === 9) {
      this.scorecard.frame9.score = this.frameScore;
    }
  }

  // for use when bonus points awarded?
  updateFrameScore(points) {
    this.frameScore = points;
  }

  setFrameBonusType() {
    if (this.frameThrow1 === 10) {
      this.frameBonusType = 'strike';
    } else if (this.frameThrow1 + this.frameThrow2 === 10) {
      this.frameBonusType = 'spare';
    } else if (this.frameThrow1 + this.frameThrow2 < 10) {
      this.frameBonusType = 'none';
    };
  }
};

module.exports = Game;
