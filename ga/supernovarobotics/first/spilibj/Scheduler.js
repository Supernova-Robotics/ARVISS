/**
 * The Scheduler is a singleton which holds the top-level running commands. It is in charge of both calling the command's run() method and to make sure that there are no two commands with conflicting requirements running.
 * 
 * It is fine if teams wish to take control of the Scheduler themselves, all that needs to be done is to call Scheduler.getInstance().run() often to have Commands function correctly. However, this is already done for you if you use the CommandBased Robot template.
 */

import CallibProcessor from "./CallibProcessor.js";

class Scheduler {
    _subsystems = [];
    _commands = [];
    
    /**
     * Returns the Scheduler, creating it if one does not exist.
     */
    getInstance() {
        return this;
    }

    /**
     * close in interface AutoCloseable
     */
    close() {console.error("Scheduler.close not implemented.");}

    /**
     * Adds the command to the Scheduler. This will not add the Command immediately, but will instead wait for the proper time in the run() loop before doing so. The command returns immediately and does nothing if given null.
     * Adding a Command to the Scheduler involves the Scheduler removing any Command which has shared requirements.
     */
    add(command) {
        this._commands.push(command);
    }

    /**
     * Adds a button to the Scheduler. The Scheduler will poll the button during its run().
     */
    addButton(button) {console.error("Scheduler.addButton not implemented.");}

    /**
     * Runs a single iteration of the loop. This method should be called often in order to have a functioning Command system. The loop has five stages:
     * 1. Poll the Buttons
     * 2. Execute/Remove the Commands
     * 3. Send values to SmartDashboard
     * 4. Add Commands
     * 5. Add Defaults
     */
    run() {
        // Execute/Remove the Commands
        for (var i=0; i<this._commands.length; i+=1) {
            if (this._commands[i]._is_initialized == false) {
                this._commands[i].initialize();
                this._commands[i]._is_initialized = true;
            }
            this._commands[i].execute();
        }
    }
    
    /**
     * Removes all commands.
     */
    removeAll() {console.error("Scheduler.removeAll not implemented.");}

    /**
     * Disable the command scheduler.
     */
    disable() {console.error("Scheduler.disable not implemented.");}
     
    /**
     * Enable the command scheduler.
     */
    enable() {console.error("Scheduler.enable not implemented.");}

    /**
     * Description copied from interface: Sendable
     * Initializes this Sendable object.
     */
    initSendable() {console.error("Scheduler.initSendable not implemented.");}
}

Scheduler = new Scheduler();
export default Scheduler;