/**
 * Common base class for all PWM Speed Controllers.
 */

import CallibProcessor from "./CallibProcessor.js";

export default class PWMSpeedController {
    /**
     * Constructor.
     * 
     * @param {int} channel The PWM channel that the controller is attached to. 0-9 are on-board, 10-19 are on the MXP port
     */
    constructor(channel) {
        if (channel >= 20) {
            let msg = "PWM Port #"+channel+": Invalid PWM port!";
            console.error(msg);
            alert(msg)
        }
        this._channel = channel;
        this._is_enabled = true;
        this._is_inverted = false;
        this._output = 0;
        CallibProcessor.attachPWMDevice(channel, this);
    }

    /**
     * 
     */
    getDescription() {console.error("PWMSpeedController.getDescription not implemented.");}

    /**
     * Set the PWM value.
     * The PWM value is set using a range of -1.0 to 1.0, appropriately scaling the value for the FPGA.
     * 
     * @param {float} speed The speed value between -1.0 and 1.0 to set
     */
    set(speed) {
        this._output = speed;
    }
    
    /**
     * Get the recently set value of the PWM.
     * 
     * @returns The most recently set value for the PWM between -1.0 and 1.0
     */
    get() {
        return this._output;
    }

    /**
     * Common interface for inverting direction of a speed controller.
     * 
     * @param {boolean} is_inverted The state of inversion, true is inverted
     */
    setInverted(is_inverted) {
        this._is_inverted = is_inverted;
    }

    /**
     * Disable the speed controller.
     */
    disable() {
        this._is_enabled = false;
    }

    /**
     * Write out the PID value as seen in the PIDOutput base object.
     */
    pidWrite() {console.error("PWMSpeedController.pidWrite not implemented.");}

    /**
     * Initializes this Sendable object.
     */
    initSendable() {console.error("PWMSpeedController.initSendable not implemented.");}
}