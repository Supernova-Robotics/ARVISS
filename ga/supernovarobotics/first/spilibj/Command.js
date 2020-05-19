/**
 * A state machine representing a complete action to be performed by the robot. Commands are run by the CommandScheduler, and can be composed into CommandGroups to allow users to build complicated multi-step actions without the need to roll the state machine logic themselves.
 * 
 * Commands are run synchronously from the main robot loop; no multithreading is used, unless specified explicitly from the command implementation.
 */

export default class Command {
    constructor() {
        this._required_subsystems = [];
        this._is_initialized = false;
    }

    requires(subsystem) {
        this._required_subsystems.push(subsystem);
    }

    /**
     * The initial subroutine of a command.
     * 
     * Called once when the command is initially scheduled.
     */
    initialize() {}
    
    /**
     * The main body of a command. 
     * 
     * Called repeatedly while the command is scheduled.
     */
    execute() {}

    /**
     * The action to take when the command ends.
     * 
     * @param {boolean} interrupted whether the command was interrupted/canceled
     */
    end(interrupted) {}

    /**
     * Whether the command has finished. 
     * 
     * Once a command finishes, the scheduler will call its end() method and un-schedule it.
     */
    isFinished() {
        return false;
    }

    /**
     * Schedules this command, defaulting to interruptible.
     */
    schedule() {}
}