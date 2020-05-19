/**
 * TimedRobot implements the IterativeRobotBase robot program framework.
 * The TimedRobot class is intended to be subclassed by a user creating a robot program.
 * 
 * periodic() functions from the base class are called on an interval by a Notifier instance.
 */

import CallibProcessor from "./CallibProcessor.js";

export default class TimedRobot {
    kDefaultPeriod = 0.02;
    /**
     * Constructor for TimedRobot.
     * 
     * @param {double} period period - Period in seconds
     */
    constructor(period) {
        if (period == undefined || period == null) {
            period = TimedRobot.kDefaultPeriod;
        }
        this.period = period;
        this._mode = 2;             // 0: competition; 1: auto; 2: teleop; 3: test; 4: simulation;
        this._is_enabled = false;
    }

    /**
     * Provide an alternate "main loop" via startCompetition()
     */
    startCompetition() {console.error("TimedRobot.startCompetition not implemented.");}

    /**
     * Get time period between calls to Periodic() functions.
     */
    getPeriod() {console.error("TimedRobot.getPeriod not implemented.");}

    /**
     * Ends the main loop in startCompetition().
     */
    endCompetition() {console.error("TimedRobot.endCompetition not implemented.");}


    isAutonomous() {
        return this._mode == 1;
    }

    isDisabled() {
        return !this._is_enabled;
    }

    isEnabled() {
        return this._is_enabled;
    }

    isOperatorControl() {
        return this._mode == 2;
    }
    
    isReal() {
        return this._mode != 4;
    }

    isSimulation() {
        return this._mode == 4;
    }

    isTest() {
        return this._mode == 3;
    }


    /**
     * Robot-wide initialization code should go here.
     * 
     * Users should override this method for default Robot-wide initialization which will be called when the robot is first powered on. It will be called exactly one time.
     * Warning: the Driver Station "Robot Code" light and FMS "Robot Ready" indicators will be off until RobotInit() exits. Code in RobotInit() that waits for enable will cause the robot to never indicate that the code is ready, causing the robot to be bypassed in a match.
     */
    robotInit() {}
    _robotInit() {
        for (var i=0; i<CallibProcessor._subsystems.length; i+=1) {
            CallibProcessor._subsystems[i].initDefaultCommand();
        }
        this.robotInit();
    }

    /**
     * Initialization code for disabled mode should go here.
     * 
     * Users should override this method for initialization code which will be called each time the robot enters disabled mode.
     */
    disabledInit() {}
    _disabledInit() {
        this.disabledInit();
    }

    /**
     * Robot-wide simulation initialization code should go here.
     * 
     * Users should override this method for default Robot-wide simulation related initialization which will be called when the robot is first started. It will be called exactly one time after RobotInit is called only when the robot is in simulation.
     */
    simulationInit() {}
    _simulationInit() {
        this.simulationInit();
    }

    /**
     * Initialization code for autonomous mode should go here.
     * 
     * Users should override this method for initialization code which will be called each time the robot enters autonomous mode.
     */
    autonomousInit() {}
    _autonomousInit() {
        this.autonomousInit();
    }

    /**
     * Initialization code for teleop mode should go here.
     * 
     * Users should override this method for initialization code which will be called each time the robot enters teleop mode.
     */
    teleopInit() {}
    _teleopInit() {
        this.teleopInit();
    }

    /**
     * Initialization code for test mode should go here.
     * 
     * Users should override this method for initialization code which will be called each time the robot enters test mode.
     */
    testInit() {}
    _testInit() {
        this.testInit();
    }


    /**
     * Periodic code for all robot modes should go here.
     */
    robotPeriodic() {}
    _robotPeriodic() {
        this.robotPeriodic();
    }

    /**
     * Periodic simulation code should go here.
     * 
     * This function is called in a simulated robot after user code executes.
     */
    simulationPeriodic() {}
    _simulationPeriodic() {
        this.simulationPeriodic();
    }

    /**
     * Periodic code for disabled mode should go here.
     */
    disabledPeriodic() {}
    _disabledPeriodic() {
        this.disabledPeriodic();
    }

    /**
     * Periodic code for autonomous mode should go here.
     */
    autonomousPeriodic() {}
    _autonomousPeriodic() {
        this.autonomousPeriodic();
    }

    /**
     * Periodic code for teleop mode should go here.
     */
    teleopPeriodic() {}
    _teleopPeriodic() {
        this.teleopPeriodic();
    }

    /**
     * Periodic code for test mode should go here.
     */
    testPeriodic() {}
    _testPeriodic() {
        this.testPeriodic();
    }

    loopFunc() {console.error("TimedRobot.loopFunc not implemented.");}
}