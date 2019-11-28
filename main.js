<!doctype html>
<html>
<head>
<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Company Page</title>
		
	
	
	
</head>

<body>
	<script>
	$(document).ready(function() {
    $('#contact form').on('submit', function(e) {
        e.preventDefault();
        var $form = $(e.currentTarget),
            $email = $form.find('#contact-email'),
            $button = $form.find('button[type=submit]');
        
        if($email.val().indexOf('@') == -1) {
            vaca = $email.closest('form-group')
            $email.closest('.form-group').addClass('has-error');
        } else {
            $form.find('.form-group').addClass('has-success').removeClass('has-error');
            $button.attr('disabled', 'disabled');
            $button.after('<span>Message sent. We will contact you soon.</span>');
        }
    });
});

$(document).ready(function() {
    … // rest of the JavaScript code
    $('#sign-btn').on('click', function(e) {
        $(e.currentTarget).closest('ul').hide();
        $('form#signin').fadeIn('fast');
    });
});
</script>
</body>
</html>
