var phoneInput = document.getElementById('phone-input');

phoneInput.addEventListener('input', function (e) {
    var phoneNumber = e.target.value.replace(/\D/g, '');
    e.target.value = formatPhoneNumber(phoneNumber.substring(1));
});

function formatPhoneNumber(phoneNumber) {
    var formattedPhoneNumber = '+7';

    var areaCode = phoneNumber.substring(0, 3);
    var middlePart = phoneNumber.substring(3, 6);
    var lastPart = phoneNumber.substring(6);

    if (areaCode) {
        formattedPhoneNumber += ' (' + areaCode + ')';
    }
    if (middlePart) {
        formattedPhoneNumber += '-' + middlePart;
    }
    if (lastPart) {
        formattedPhoneNumber += '-' + lastPart.substring(0, 3) + '-' + lastPart.substring(3, 4);
    }

    return formattedPhoneNumber;
}


var price_number = document.getElementById('price_number');

price_number.addEventListener('input', function (e) {
    e.target.value = formatPriceNumber(e.target.value);
});

function formatPriceNumber(price_number) {
    if (price_number.length % 4 === 0 && price_number >= 3) {
        return price_number + '.'
    }
    return price_number
}

function formatInputNumber() {
    let input = document.getElementById('price_number')
    let value = input.value
    if (value.length > 3) {
        input.value = input.value + '.'
    }
    console.log(value)
}
