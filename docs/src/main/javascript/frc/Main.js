import CallibProcessor from "https://github-content-1254078456.cos.ap-beijing.myqcloud.com/ARVISS/ga/supernovarobotics/first/spilibj/CallibProcessor.js";
import Robot from "https://github-content-1254078456.cos.ap-beijing.myqcloud.com/ARVISS/src/main/javascript/frc/Robot.js";


/**
 * Simulation process
 */

export default class RobotSimulator {
  constructor() {
    this.pos = new Vec3D(0, 0, 0);
    this.wpos = new Vec3D(0, 0, 0);
    this.rpos = new Vec3D(0, 0, 0);
    this.vel = new Vec3D(0, 0, 0);
    this.wvel = new Vec3D(0, 0, 0);
    this.rvel = new Vec3D(0, 0, 0);
    this.acc = new Vec3D(0, 0, 0);
    this.wacc = new Vec3D(0, 0, 0);
    this.racc = new Vec3D(0, 0, 0);

    this.Robot = Robot;

    this.mass = 50;
    this.width = 0.8;
    this.k_fric_static = 0.2;
    this.k_fric_dynamic = 0.05;

    this.n_motor = 3;
    this.motor_torque = 7.23;   // 7.23 N*m
    this.wheel_radius = 0.05;      // 5cm
    this.gear_ratio = 5.35;
  }

  update(dt) {
    if (this.Robot.isDisabled()) {
      this.Robot._disabledPeriodic();
    }
    else {
      switch (this.Robot._mode) {
        case 1:
          this.Robot._autonomousPeriodic(); break;
        case 2:
          this.Robot._teleopPeriodic(); break;
        case 3:
          this.Robot._testPeriodic(); break;
        case 4:
          this.Robot._simulationPeriodic(); break;
      }  
    }
    
    

    this.updateControl();
    this.updatePhysics(dt);
  }

  getPosition() {
    return this.pos;
  }

  updateControl() {
    let force_left = 10 * CallibProcessor.getPWMDevice(0)._output - 2 * getSign(this.vel.y);
    let force_right = 10 * CallibProcessor.getPWMDevice(2)._output - 2 * getSign(this.vel.y);

    if (getSign(force_left) == getSign(this.vel.y) && this.vel.y != 0) {
      force_left = force_left / Math.max(1, (0.5 * this.vel.y));
    }
    if (getSign(force_right) == getSign(this.vel.y) && this.vel.y != 0) {
      force_right = force_right / Math.max(1, (0.5 * this.vel.y));
    }

    let rot_fric = 3 * -getSign(this.rvel.z, 0.0001);

    if (getSign(this.vel.y, 0.001) == 0) {
      this.vel.y = 0;
    }
    if (rot_fric == 0) {
      this.rvel.z = 0;
    }

    this.acc.set(0, force_left + force_right, 0);
    this.racc.set(0, 0, 2*(-force_left + force_right) + rot_fric);
    
    
    // collision detection
    if ((this.wpos.y < -7.5 && this.wvel.y < 0) ||
        (this.wpos.y >  7.5 && this.wvel.y > 0)||
        (this.wpos.x < -3.7 && this.wvel.x < 0)||
        (this.wpos.x >  3.7 && this.wvel.x > 0)) {
      this.vel.y *= -0.5;
      this.racc.set(0, 0, 0);
      this.rvel.set(0, 0, 0);
      console.log("OUT OF BOUND");
    }

  }

  updatePhysics(dt) {
    this.rvel.addv(this.racc.copy().mulf(dt));
    this.rpos.addv(this.rvel.copy().mulf(dt));
    
    let rot_mat = new Mat3D([
      -Math.sin(this.rpos.z - .5*Math.PI),  -Math.cos(this.rpos.z - .5*Math.PI), 0,
      Math.cos(this.rpos.z - .5*Math.PI), -Math.sin(this.rpos.z - .5*Math.PI), 0,
      0, 0, 1,
    ]);

    this.vel.addv(this.acc.copy().mulf(dt));
    this.wvel = this.vel.copy().matmul(rot_mat);
    this.pos.addv(this.vel.copy().mulf(dt));
    this.wpos.addv(this.wvel.copy().mulf(dt));
  }
}