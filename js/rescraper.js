jQuery.post( 'https://graph.facebook.com', 
	{
		id: window.location.href,
		scrape: true
	}, 
	function(response) {});