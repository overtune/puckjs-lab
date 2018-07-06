var kb = require('ble_hid_keyboard');
NRF.setServices(undefined, { hid : kb.report });
kb.tap(kb.KEY[' '], kb.MODIFY.ALT);
