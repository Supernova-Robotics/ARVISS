
/**
 * A processor class. All methods are class method.
 * 
 * Pin definition:
 *  - chassis left motor: PWM 0
 *  - chassis right motor: PWM 2
 */
class CallibProcessor {
  constructor(is_MXP_connected) {
    if (!is_MXP_connected) {
      this.PWM_COUNT = 10;
    }
    else {
      this.PWM_COUNT = 20;
    }
    this._PWM_devices = [];
    this._CAN_devices = [];
    this._subsystems = [];
  }

  getPWMDevice(channel) {
    if (channel < this._PWM_devices.length && this._PWM_devices[channel]) {
      return this._PWM_devices[channel];
    }
    return null;
  }

  getCANDevice(can_id) {
    if (port < this._CAN_devices.length && this._CAN_devices[can_id]) {
      return this._CAN_devices[can_id];
    }
    return null;
  }

  attachPWMDevice(channel, device) {
    console.log("inittt", device)
    if (channel >= this.PWM_COUNT) {
      alert("PWM Port error!");
    }
    if (this._PWM_devices[channel]) {
      alert("PWM Port already taken!");
    }
    this._PWM_devices[channel] = device;
    
  }
  attachCAN(can_id, device) {
    if (this._CAN_devices[can_id]) {
      alert("duplicate CAN ID!");
    }
    this._CAN_devices[can_id] = device;
  }

  disableAllActuators() {
    for (var i=0; i<this._PWM_devices.length; i+=1) {
      if (this._PWM_devices[i]) {
        this._PWM_devices[i].disable();
      }
    }
    for (var i=0; i<this._CAN_devices.length; i+=1) {
      if (this._CAN_devices[i]) {
        this._CAN_devices[i].disable();
      }
    }
  }
}

CallibProcessor = new CallibProcessor();
export default CallibProcessor;


class Timer {
  constructor() {
    this.is_running = true;
    this.start_time = millis();
  }
  delay(seconds) {
    alert("Timer.delay() Not Implemented");
  }
  /**
   * Get the current time from the timer.
   */
  get() {
    return millis() - this.start_time;
  }

  getFPGATimestamp() {
    return this.get();
  }

  getMatchTime() {
    alert("Timer.getMatchTime() Not Implemented");
  }

  /**
   * Check if the period specified has passed and if it has, advance the start time by that period.
   * 
   * @param {number} period period in seconds(s).
   */
  hasPeriodPassed(period) {
    period *= 1000;
    if (millis() - this.start_time > period) {
      this.start_time += period;
      return true;
    }
    return false;
  }

  /**
   * Reset the timer by setting the time to 0.
   */
  reset() {
    this.start_time = millis();
  }
  start() {
    this.is_running = true;
  }
  stop() {
    this.is_running = false;
  }
}
