$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        let userName = $('#userName').val();
        let errorName = $('.errorName');
        let address = $('#address').val();
        let errorAddress = $('.errorAddress');
        let dob = $('#dob').val();
        let errorDOB = $('.errorDOB');
        let userAge = $('#userAge').val();
        let errorAge = $('.errorAge');
        let gender = $("input[name=gender]").is(":checked");
        let errorGender = $('.errorGender');
        let terms = $("#terms").is(":checked");
        let errorCheck = $('.errorCheck');
        if (userName.trim() === "") {
            errorName.text("Enter a valid name");
        }
        else {
            errorName.text("");
        }

        if (address.trim() === "") {
            errorAddress.text("Enter your address");
        }
        else {
            errorAddress.text("");
        }

        if (dob.trim() === "") {
            errorDOB.text("Enter your date of birth");
        }
        else {
            errorDOB.text("");
        }

        if (userAge === "") {
            errorAge.text("Select your age");
        }
        else {
            errorAge.text("");
        }
        if (gender != true){
            errorGender.text("Select your gender");
        }
        else{
            errorGender.text("");
        }
        

        if (terms === false) {
            errorCheck.text("Please agree to the terms and conditions");
        }
        else {
            errorCheck.text("");
        }
    });
});
