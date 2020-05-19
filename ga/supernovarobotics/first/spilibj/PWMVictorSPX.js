/**
 * Cross the Road Electronics (CTRE) Victor SPX Speed Controller with PWM control.
 * 
 * Note that the Victor SPX uses the following bounds for PWM values. These values should work reasonably well for most controllers, but if users experience issues such as asymmetric behavior around the deadband or inability to saturate the controller in either direction, calibration is recommended. The calibration procedure can be found in the Victor SPX User Manual available from CTRE.
 * - 2.004ms = full "forward"
 * - 1.520ms = the "high end" of the deadband range
 * - 1.500ms = center of the deadband range (off)
 * - 1.480ms = the "low end" of the deadband range
 * - 0.997ms = full "reverse"
 */

import PWMSpeedController from "./PWMSpeedController.js";

export default class PWMVictorSPX extends PWMSpeedController {
    /**
     * Constructor for a Victor SPX connected via PWM
     * 
     * @param {number} channel The PWM channel that the PWMVictorSPX is attached to. 0-9 are on-board, 10-19 are on the MXP port
     */
    constructor(channel) {
        super(channel);
    }
}