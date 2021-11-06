"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.get('/api', (req, res) => res.json({
  message: 'Tchau!!!'
}));
app.listen(5000, () => console.log('App running on port 5000'));