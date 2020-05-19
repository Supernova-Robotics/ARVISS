

export default class KeyboardController {
    constructor(port) {
      this.port = port;
      this._active_keys = [];
      let that = this;
      window.addEventListener("keydown", function(e) {
        //console.log(e);
        that._active_keys[e.keyCode] = true;
      });
      
      window.addEventListener("keyup", function(e) {
        that._active_keys[e.keyCode] = false;
      });
      
    }
    getA() {return this._active_keys[65] == true}
    getB() {return this._active_keys[66] == true}
    getC() {return this._active_keys[67] == true}
    getD() {return this._active_keys[68] == true}
    getE() {return this._active_keys[69] == true}
    getF() {return this._active_keys[70] == true}
    getG() {return this._active_keys[71] == true}
    getH() {return this._active_keys[72] == true}
    getI() {return this._active_keys[73] == true}
    getJ() {return this._active_keys[74] == true}
    getK() {return this._active_keys[75] == true}
    getL() {return this._active_keys[76] == true}
    getM() {return this._active_keys[77] == true}
    getN() {return this._active_keys[78] == true}
    getO() {return this._active_keys[79] == true}
    getP() {return this._active_keys[80] == true}
    getQ() {return this._active_keys[81] == true}
    getR() {return this._active_keys[82] == true}
    getS() {return this._active_keys[83] == true}
    getT() {return this._active_keys[84] == true}
    getU() {return this._active_keys[85] == true}
    getV() {return this._active_keys[86] == true}
    getW() {return this._active_keys[87] == true}
    getX() {return this._active_keys[88] == true}
    getY() {return this._active_keys[89] == true}
    getZ() {return this._active_keys[90] == true}
    getSpaceBar() {return this._active_keys[32] == true}
}  