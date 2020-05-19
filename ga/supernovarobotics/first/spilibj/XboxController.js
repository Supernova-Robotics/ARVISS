import GenericHID from "./GenericHID.js";

export default class XboxController {
  constructor(port) {
    this.port = port;
    this._hw = navigator.getGamepads()[this.port];
    this._updated = false;

    var that = this;
    window.addEventListener("gamepadconnected", function(e) {
      console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index, e.gamepad.id,
        e.gamepad.buttons.length, e.gamepad.axes.length);
      
      console.log(e.gamepad.index, that.port)

      if (e.gamepad.index == that.port) {
        that._hw = e.gamepad;
      }
      
      
    });
  }
  
  _update() {
    this._hw = navigator.getGamepads()[this.port];
  }

  /**
   * Get the name of the HID.
   */
  getName() {
    this._update();
    if (this._hw == null) return "not connected";
    return this._hw.id;
  }

  /**
   * Read the value of the A button on the controller.
   */
  getAButton() {
    this._update();
    if (this._hw == null) return -1;
    return this._hw.buttons[0].value;
  }
  
  /**
   * Read the value of the B button on the controller.
   */  
  getBButton() {
    this._update();
    if (this._hw == null) return -1;
    return this._hw.buttons[1].value;
  }
  
  /**
   * Read the value of the X button on the controller.
   */ 
  getXButton() {
    this._update();
    if (this._hw == null) return -1;
    return this._hw.buttons[2].value;
  }
  
  /**
   * Read the value of the Y button on the controller.
   */ 
  getYButton() {
    this._update();
    if (this._hw == null) return -1;
    return this._hw.buttons[3].value;
  }

  /**
   * Read the value of the bumper button on the controller.
   * 
   * @param {GenericHID.Hand} hand - Side of controller whose value should be returned.
   */ 
  getBumper(hand) {
    this._update();
    if (this._hw == null) return -1;
    if (hand == GenericHID.Hand.kLeft) {
      return this._hw.buttons[4].value;
    }
    else if (hand == GenericHID.Hand.kRight) {
      return this._hw.buttons[5].value;
    }
  }

  /**
   * Read the value of the stick button on the controller.
   * 
   * @param {GenericHID.Hand} hand - Side of controller whose value should be returned.
   */ 
  getStickButton(hand) {
    this._update();
    if (this._hw == null) return -1;
    if (hand == GenericHID.Hand.kLeft) {
      return this._hw.buttons[10].value;
    }
    else if (hand == GenericHID.Hand.kRight) {
      return this._hw.buttons[11].value;
    }
  }

  /**
   * Read the value of the back button on the controller.
   */ 
  getBackButton() {
    this._update();
    if (this._hw == null) return -1;
    return this._hw.buttons[8].value;
  }

  /**
   * Read the value of the start button on the controller.
   */ 
  getStartButton() {
    this._update();
    if (this._hw == null) return -1;
    return this._hw.buttons[9].value;
  }

  /**
   * Read the value of the POV on the controller.
   */ 
  getPOV() {
    this._update();
    if (this._hw == null) return -1;
    if (this._hw.buttons[12].value) {
      return 0;
    }
    else if (this._hw.buttons[13].value) {
      return 180;
    }
    else if (this._hw.buttons[14].value) {
      return 270;
    }
    else if (this._hw.buttons[15].value) {
      return 90;
    }
    else {
      return -1
    }
  }

  /**
   * Get the X axis value of the controller.
   * 
   * @param {GenericHID.Hand} hand - Side of controller whose value should be returned.
   */ 
  getX(hand) {
    this._update();
    if (this._hw == null) return 0;
    if (hand == GenericHID.Hand.kLeft) {
      return this._hw.axes[0];
    }
    else if (hand == GenericHID.Hand.kRight) {
      return this._hw.axes[2];
    }
  }

  /**
   * Get the Y axis value of the controller.
   * 
   * @param {GenericHID.Hand} hand - Side of controller whose value should be returned.
   */ 
  getY(hand) {
    this._update();
    if (this._hw == null) return 0;
    if (hand == GenericHID.Hand.kLeft) {
      return this._hw.axes[1];
    }
    else if (hand == GenericHID.Hand.kRight) {
      return this._hw.axes[3];
    }
  }
  getTriggerAxis(hand) {
    this._update();
    if (this._hw == null) return 0;
    if (hand == GenericHID.Hand.kLeft) {
      return this._hw.buttons[6].value;
    }
    else if (hand == GenericHID.Hand.kRight) {
      return this._hw.buttons[7].value;
    }
  }
};