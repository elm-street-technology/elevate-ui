

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkString = void 0;

var checkString = function checkString(colorProp) {
  if (["primary", "secondary", "tertiary"].includes(colorProp)) {
    return true;
  } else {
    return false;
  }
};

exports.checkString = checkString;