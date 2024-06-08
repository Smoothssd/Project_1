
$(function () {

    $("section.contact-w3ls input,section.contact-w3ls textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            $('.alert-mo-text').text('Submitted successfully!')
            alertMo.show(1000)


            timeOut = setTimeout(() => {
                clearTimeout(timeOut)
                alertMo.hide(1000)
            }, 2500);

        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
    $('#success').html('');
});
