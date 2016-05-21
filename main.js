var gpio = require('rpi-gpio');
var exec = require('child_process').exec;

function noop() { }

gpio.on('change', function(channel, value) {
  console.log('Channel ' + channel + ' value is now ' + value);
  exec('halt', noop);
});

gpio.setup(7, gpio.DIR_IN, gpio.EDGE_FALLING);
