'use strict';

import {onEvent,getElement,selectAll,print,sleep,randomNumber,filterArray,create} from './utility.js';

/**color selector */

// rule to make change the image when the color is changed
const colorSelector = getElement('color');
const colorOptions = selectAll('option', colorSelector);
const image = getElement('image');

function changeImage() {
    const selectedColor = colorSelector.value;
    const imagePath = `../media/img/details-images/${selectedColor}.png`;
    image.src = imagePath;
}

colorOptions.forEach(option => {
    onEvent('change', option, changeImage);
});
