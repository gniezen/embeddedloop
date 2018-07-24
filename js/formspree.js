var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	var strconfirm = confirm("Ready to send?");
    if (strconfirm == true) {
        $.ajax({
    		url: '//formspree.io/info@embeddedloop.com',
    		method: 'POST',
    		data: $contactForm.serialize(),
    		dataType: 'json',
    		beforeSend: function() {
    			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
    		},
    		success: function(data) {
    			$contactForm.find('.alert--loading').hide();
    			$contactForm.append('<div class="alert alert--success">Message sent!</div>');
    		},
    		error: function(err) {
    			$contactForm.find('.alert--loading').hide();
    			$contactForm.append('<div class="alert alert--error">Oops, there was an error.</div>');
    		}
    	});
    }
});