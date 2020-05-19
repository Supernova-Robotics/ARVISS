
  class Mat3D {
    constructor(arr) {
      this.dim = [3, 3];
      if (arr.length != 9) {
        console.log("Error");
        alert("Matrix size error");
      }
      this.arr = arr;
    }
    matmul(mat2) {
  
    }
  }
  
  class Matrix3D {
    
  }

  class Vec3D {
    constructor(x, y, z) {
      this.dim = 3;
      this.x = x;
      this.y = y;
      this.z = z;
    }
    set(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    }
    getArray() {
      return [this.x, this.y, this.z];
    }
    copy(x, y, z) {
      return new Vec3D(this.x, this.y, this.z);
    }
    magnitude() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    }
    addv(vec) {
      this.x += vec.x;
      this.y += vec.y;
      this.z += vec.z;
      return this;
    }
    addf(scalar) {
      this.x += scalar;
      this.y += scalar;
      this.z += scalar;
      return this;
    }
    mulv(vec) {
      this.x *= vec.x;
      this.y *= vec.y;
      this.z *= vec.z;
      return this;
    }
    mulf(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      return this;
    }
    dot(vec) {
      return this.x * vec.x + this.y * vec.y + this.z * vec.z;
    }
    cross(vec) {
      let x = this.y * vec.z - this.z * vec.y;
      let y = this.z * vec.x - this.x * vec.z;
      let z = this.x * vec.y - this.y * vec.x;
      this.set(x, y, z);
      return this;
    }
    matmul(mat) {
      let x = mat.arr[0] * this.x + mat.arr[1] * this.y + mat.arr[2] * this.z;
      let y = mat.arr[3] * this.x + mat.arr[4] * this.y + mat.arr[5] * this.z;
      let z = mat.arr[6] * this.x + mat.arr[7] * this.y + mat.arr[8] * this.z;
      this.set(x, y, z);
      return this;
    }
  }