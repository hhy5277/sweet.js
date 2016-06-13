"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class ASTDispatcher {
  constructor(prefix_16, errorIfMissing_17) {
    this.errorIfMissing = errorIfMissing_17;
    this.prefix = prefix_16;
  }
  dispatch(term_18) {
    let field_19 = this.prefix + term_18.type;
    if (typeof this[field_19] === "function") {
      return this[field_19](term_18);
    } else if (!this.errorIfMissing) {
      return term_18;
    }
    throw new Error(`Missing implementation for: ${ field_19 }`);
  }
}
exports.default = ASTDispatcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N3ZWV0L2FzdC1kaXNwYXRjaGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQWUsTUFBTSxhQUFOLENBQW9CO0FBQ2pDLGNBQVksU0FBWixFQUF1QixpQkFBdkIsRUFBMEM7QUFDeEMsU0FBSyxjQUFMLEdBQXNCLGlCQUF0QjtBQUNBLFNBQUssTUFBTCxHQUFjLFNBQWQ7QUFDRDtBQUNELFdBQVMsT0FBVCxFQUFrQjtBQUNoQixRQUFJLFdBQVcsS0FBSyxNQUFMLEdBQWMsUUFBUSxJQUFyQztBQUNBLFFBQUksT0FBTyxLQUFLLFFBQUwsQ0FBUCxLQUEwQixVQUE5QixFQUEwQztBQUN4QyxhQUFPLEtBQUssUUFBTCxFQUFlLE9BQWYsQ0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJLENBQUMsS0FBSyxjQUFWLEVBQTBCO0FBQy9CLGFBQU8sT0FBUDtBQUNEO0FBQ0QsVUFBTSxJQUFJLEtBQUosQ0FBVSxDQUFDLDRCQUFELEdBQStCLFFBQS9CLEVBQXdDLEFBQXhDLENBQVYsQ0FBTjtBQUNEO0FBYmdDO2tCQUFkLGEiLCJmaWxlIjoiYXN0LWRpc3BhdGNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBU1REaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IocHJlZml4XzE2LCBlcnJvcklmTWlzc2luZ18xNykge1xuICAgIHRoaXMuZXJyb3JJZk1pc3NpbmcgPSBlcnJvcklmTWlzc2luZ18xNztcbiAgICB0aGlzLnByZWZpeCA9IHByZWZpeF8xNjtcbiAgfVxuICBkaXNwYXRjaCh0ZXJtXzE4KSB7XG4gICAgbGV0IGZpZWxkXzE5ID0gdGhpcy5wcmVmaXggKyB0ZXJtXzE4LnR5cGU7XG4gICAgaWYgKHR5cGVvZiB0aGlzW2ZpZWxkXzE5XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gdGhpc1tmaWVsZF8xOV0odGVybV8xOCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5lcnJvcklmTWlzc2luZykge1xuICAgICAgcmV0dXJuIHRlcm1fMTg7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBpbXBsZW1lbnRhdGlvbiBmb3I6ICR7ZmllbGRfMTl9YCk7XG4gIH1cbn1cbiJdfQ==