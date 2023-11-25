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
