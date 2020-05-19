/**
 * OI.js 
 * for creating joystick objects and assigning buttons to different commands.
 * 在此处初始化控制手柄，并将手柄按键对应到机器人任务 (command) 上面。
 */

import KeyboardController from "https://github-content-1254078456.cos.ap-beijing.myqcloud.com/ARVISS/ga/supernovarobotics/first/spilibj/KeyboardController.js";
import XboxController from "https://github-content-1254078456.cos.ap-beijing.myqcloud.com/ARVISS/ga/supernovarobotics/first/spilibj/XboxController.js";
import GenericHID from "https://github-content-1254078456.cos.ap-beijing.myqcloud.com/ARVISS/ga/supernovarobotics/first/spilibj/GenericHID.js";

class OI {
  /* initialize two Xbox controller with id 0 and 1 on DS */
  stick_0 = new XboxController(0);
  keyboard_0 = new KeyboardController(0);

  joystick_threshold = 0.15;

  /* create button objects, the last number is the id of the button, starting from 1 */
  /* 创建按钮对象，最后一个数字对应着 DS 上显示的按钮 ID ，从 1 开始 */
  /*
  stick_0_A = new JoystickButton(stick_0, 1);
  stick_0_B = new JoystickButton(stick_0, 2);
  stick_0_X = new JoystickButton(stick_0, 3);
  stick_0_Y = new JoystickButton(stick_0, 4);
  stick_0_LBumper = new JoystickButton(stick_0, 5);
  stick_0_RBumper = new JoystickButton(stick_0, 6);
  stick_0_back = new JoystickButton(stick_0, 7);
  stick_0_start = new JoystickButton(stick_0, 8);
  stick_0_stickBt = new JoystickButton(stick_0, 9);
  stick_0_UP = new XboxPOV(stick_0, 0);
  stick_0_DOWN = new XboxPOV(stick_0, 180);
  

  stick_1_A = new JoystickButton(stick_1, 1);
  stick_1_B = new JoystickButton(stick_1, 2);
  stick_1_X = new JoystickButton(stick_1, 3);
  stick_1_Y = new JoystickButton(stick_1, 4);
  stick_1_UP = new XboxPOV(stick_1, 0);
  stick_1_RIGHT = new XboxPOV(stick_1, 90);
  stick_1_DOWN = new XboxPOV(stick_1, 180);
  

  constructor() {
    /* binding buttons to commands *
    /* 将任务 (command) 绑定到按钮 *
    // stick_0_A.whenPressed(new SupportOut());
    // stick_0_B.whenPressed(new SupportIn());
    // stick_0_X.whenPressed(new IntakeLiftTo(3924));
    // stick_0_Y.whenPressed(new IntakeLiftTo(3850));
    
    this.stick_0_UP.whenPressed(new SupportIn());
    this.stick_0_DOWN.whileHeld(new SupportOut());
    this.stick_0_back.whenPressed(new OneButtonClimbUp());
    
    this.stick_0_start.whileHeld(new ChassisChangeSpeed(1)); // slow mode
    this.stick_0_stickBt.whileHeld(new ChassisChangeSpeed(2)); // fast mode

    this.stick_0_LBumper.whileHeld(new ClimbAdvance());

    this.stick_1_UP.whenPressed(new ToTop());
    this.stick_1_RIGHT.whenPressed(new ToMiddle());
    this.stick_1_DOWN.whenPressed(new ToCollect());
    
    this.stick_1_A.whileHeld(new IntakeCollect());
    this.stick_1_B.whileHeld(new IntakeShoot());
    this.stick_1_X.toggleWhenPressed(new HookToggle());
    this.stick_1_Y.toggleWhenPressed(new ExtensionToggle());
  }
  */

  unify(val) {
    if (Math.abs(val) < this.joystick_threshold) {
      val = 0;
    }
    return val;
  }
  
  getDriveAxis() {
    var result = [
      this.unify(-this.stick_0.getY(GenericHID.Hand.kLeft)), 
      this.unify(this.stick_0.getTriggerAxis(GenericHID.Hand.kLeft) - this.stick_0.getTriggerAxis(GenericHID.Hand.kRight))
    ];
    if (this.keyboard_0.getW()) {
      result[0] = 1;
    }
    else if (this.keyboard_0.getS()) {
      result[0] = -1;
    }
    if (this.keyboard_0.getA()) {
      result[1] = .5;
    }
    else if (this.keyboard_0.getD()) {
      result[1] = -.5;
    }
    return result;
  }

  getIntakeAxis() {
    return unify(-this.stick_0.getY(Hand.kRight));
  }

  getClawAxis() {
    return unify(-this.stick_1.getY(Hand.kRight));
  }

  getArmAxis() {
    return unify(-this.stick_1.getY(Hand.kLeft));
  }
}

export default OI = new OI();