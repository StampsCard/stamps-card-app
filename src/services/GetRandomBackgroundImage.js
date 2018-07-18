import _ from 'lodash';

module.exports.random = () => {
    'use strict';

    const imageNumber = _.random(1, 8);
    console.log('Background changed to ', imageNumber);
    if (imageNumber === 1) {
      return require('../../resources/img/background-1-min.jpg');
    }
    if (imageNumber === 2) {
      return require('../../resources/img/background-2-min.jpg');
    }
    if (imageNumber === 3) {
      return require('../../resources/img/background-3-min.jpg');
    }
    if (imageNumber === 4) {
      return require('../../resources/img/background-4-min.jpg');
    }
    if (imageNumber === 5) {
      return require('../../resources/img/background-5-min.jpg');
    }
    if (imageNumber === 6) {
      return require('../../resources/img/background-6-min.jpg');
    }
    if (imageNumber === 7) {
      return require('../../resources/img/background-7-min.jpg');
    }
    if (imageNumber === 8) {
      return require('../../resources/img/background-8-min.jpg');
    }
};
