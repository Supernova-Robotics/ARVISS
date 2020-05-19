/**
 * Chassis.js
 * contains motors on the chassis and a gyro for navigation.
 * 定义了底盘电机和一个陀螺仪。
 */

import Subsystem from "/ga/supernovarobotics/first/spilibj/Subsystem.js";
import PWMVictorSPX from "/ga/supernovarobotics/first/spilibj/PWMVictorSPX.js";

import ChassisDefault from "../commands/ChassisDefault.js";

export default class Chassis extends Subsystem {
  motor_left_0 = new PWMVictorSPX(0);
  motor_right_0 = new PWMVictorSPX(2);
  //lift_up = new Solenoid(0);
  
  constructor() {
    super();
  
    /* using the 'default FRC gyro' */
    /* 使用的是默认的插在RIO上的陀螺仪 */
    // private ADXRS450_Gyro gyro = new ADXRS450_Gyro();
  
    /* the coefficient for the speed of the chassis motor */
    /* 电机速度系数，用来控制全局电机最大转速 */
  
    var speed_mode = 0;
    
    /* correct the direction of motor: forward is positive */
    /* 修正电机方向，向前为正 */
    this.motor_left_0.setInverted(false);
    this.motor_right_0.setInverted(true);
  }
  

  max(val) {
    if (val > 1) {
      val = 1;
    }
    return val;
  }

  /**
   * method for driving the chassis.
   * @param y: forward is positive
   * @param z: CCW is positive
   */
  drive(y, z) {
    this.motor_left_0.set(0.4 * y - 0.3 * z);
    this.motor_right_0.set(0.4 * y + 0.3 * z);
  }

  toggleLift(state) {
    this.lift_up.set(state);
  }

  setRollerVel(vel) {
    //this.motor_roller.set(vel);
  }

  log() {
  }

 initDefaultCommand() {
    /* the default command of this subsystem is to drive according
    to joystick input. */
    this.setDefaultCommand(new ChassisDefault());
  }
}