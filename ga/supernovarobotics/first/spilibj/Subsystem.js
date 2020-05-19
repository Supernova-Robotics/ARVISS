import CallibProcessor from "./CallibProcessor.js";
import Scheduler from "./Scheduler.js"

export default class Subsystem {
    constructor(name) {
        this.name = "";
        if (name) {
            this.name = name;
        }
        this._default_command = null;
        this._current_command = null;

        CallibProcessor._subsystems.push(this);
    }
    /**
     * Returns the command which currently claims this subsystem.
     */
    getCurrentCommand() {
        return this._current_command;
    }

    /**
     * Sets the default command. If this is not called or is called with null, then there will be no default command for the subsystem.
     * 
     * WARNING: This should NOT be called in a constructor if the subsystem is a singleton.
     * 
     * @param {Command} command 
     */
    setDefaultCommand(command) {
        this._default_command = command;

        // TODO: delete this
        this._current_command = this._default_command;
        Scheduler.add(this._default_command);
    }

    /**
     * Initialize the default command for a subsystem By default subsystems have no default command, but if they do, the default command is set with this method. It is called on all Subsystems by CommandBase in the users program after all the Subsystems are created.
     */
    initDefaultCommand() {}

    /**
     * Returns the default command (or null if there is none).
     */
    getDefaultCommand() {
        return this._default_command;
    }

    /**
     * When the run method of the scheduler is called this method will be called.
     */
    periodic() {}
}