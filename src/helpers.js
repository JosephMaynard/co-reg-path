/* eslint no-useless-escape: "off", no-unused-vars: "off", no-loop-func: "off" */

export function checkEmailAddress(emailAddress) {
    const pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
}

export function checkPhoneNumber(phoneNumber) {
    const pattern = new RegExp(/[0-9]{8,11}/i);
    return pattern.test(phoneNumber);
}

export function checkPostcode(postcode) {
    if(!isNaN(postcode) && postcode.toString().length >= 3 && postcode.toString().length <= 4) return true;
}

export function uniqueID() {
    return (new Date()).getTime().toString(36) + Math.round(Math.random() * 1e8).toString(36);
}

export function getUrlParameters() {
    var parameters = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        parameters[key] = value;
    });
    return parameters;
}

export function populateDays() {
    const days = [];
    for (let i = 1; i < 32; i++) {
        days.push({value:i , text: i});
    }
    return days;
}

export function populateYears() {
    let years = [],
        currentYear = (new Date()).getFullYear() - 17;

    for (let i = 0; i < 100; i++) {
        years.push({value: currentYear - i , text: currentYear - i});
    }
    return years;
}

export function preloadImages (imagePath, imageArray, callBack){
    var preloadedImages = [],
        preloadCounter = 0;

    function loadImg(url, callBack){
        var pixel = new Image();
        pixel.src = url;
        if(typeof callBack === 'function'){
            pixel.onload = callBack;
        }
    }
    for(var i = 0; i < imageArray.length; i++){
        loadImg(imagePath + imageArray[i], function(){
            preloadCounter++;
            if(preloadCounter === imageArray.length && typeof callBack === 'function') callBack();
        });
    }
}

export function replaceTemplateStrings(text, details) {
    const updatedText = text.replace(/{[^{}]+}/g, function(key){
        return details[key.replace(/[{}]+/g, '')] || '';
    });
    return updatedText;
}

export function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}