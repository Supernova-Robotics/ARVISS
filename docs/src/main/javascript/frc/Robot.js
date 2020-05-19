/*----------------------------------------------------------------------------*/
/* Copyright (c) 2019-2020 Supernova Robotics. All Rights Reserved.           */
/* Open Source Software - may be modified and shared by FRC teams.            */
/* 版权所有 (c) 2019-2020 Supernova Robotics.                                  */
/* 开源软件 - FRC 队伍可以进行更改和分享.                                        */
/*----------------------------------------------------------------------------*/
import TimedRobot from "https://github-content-1254078456.cos.ap-beijing.myqcloud.com/ARVISS/ga/supernovarobotics/first/spilibj/TimedRobot.js";
import PWMVictorSPX from "https://github-content-1254078456.cos.ap-beijing.myqcloud.com/ARVISS/ga/supernovarobotics/first/spilibj/PWMVictorSPX.js";
import KeyboardController from "https://github-content-1254078456.cos.ap-beijing.myqcloud.com/ARVISS/ga/supernovarobotics/first/spilibj/KeyboardController.js";
import Scheduler from "https://github-content-1254078456.cos.ap-beijing.myqcloud.com/ARVISS/ga/supernovarobotics/first/spilibj/Scheduler.js";

import Chassis from "./subsystems/Chassis.js";

class Robot extends TimedRobot {
  //motor_0 = new PWMVictorSPX(0);
  //motor_1 = new PWMVictorSPX(2);

  //stick = new XboxController(0);
  stick = new KeyboardController(0);

  chassis = new Chassis();
  
  robotInit() {
    
  }

  autonomousPeriodic() {
    this.chassis.motor_left_0.set(0.7);
    this.chassis.motor_right_0.set(0.1);
  }

  
  teleopPeriodic() {
    Scheduler.getInstance().run();
    
  }
}

/* ================================================================ */
/* Below are Javascript-specific settings                           */
/* Please do not modify                                             */
/* 下方为 Javascript 设置                                            */
/* 请勿修改                                                          */
/* vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv */
export default Robot = new Robot();
var print = console.log;
