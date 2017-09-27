
$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 10) { // use any value lower than the navbar height, [20] is an example

            $('.navbar').css({ // reducing the vertical padding from 15px to 10px
                'padding-top': '5px',
                'padding-bottom': '5px'
            });

        } else {

            $('.navbar').css({ 
                'padding-top': '15px',
                'padding-bottom': '15px'
            });

        }
    });

    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please enter your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please enter your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your email address'
                    },
                    emailAddress: {
                        message: 'Please enter a valid email address'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 5,
                        max: 750,
                        message:'Please enter a description of your project. (Max 750 characters)'
                    },
                    notEmpty: {
                        message: 'Please enter a description of your project. (Max 750 characters)'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

