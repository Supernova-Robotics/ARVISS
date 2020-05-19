/**
 * ChassisDefault.js
 */

import Command from "/ga/supernovarobotics/first/spilibj/Command.js";

import Robot from "../Robot.js";
import OI from "../OI.js";

export default class ChassisDefault extends Command {
  constructor() {
    super();
    this.requires(Robot.chassis);
  }

  initialize() {
    console.log("init");
  }

  execute() {
    var val = OI.getDriveAxis();
    Robot.chassis.drive(val[0], val[1]);
    
    /*
    if (OI.stick_0.getSpaceBar()) {
      Robot.chassis.drive(12 * val[0], 6 * val[1]);
    }
    else {
      Robot.chassis.drive(val[0], val[1]);
    }
    */
    
    if (Robot.lift_state) {
      Robot.chassis.setRollerVel(val[0]);
    } else {
      Robot.chassis.setRollerVel(0);
    }
  }

  isFinished() {
    return false;
  }
}