function sendMail(params){
		
    let tempParams = {
        from_name:document.getElementById('fromMail').value,
        to_name:document.getElementById('toName').value,
        message: document.getElementById('message').value,
    };

    emailjs.send('service_oflaneh','template_3bs6o82',tempParams)
    .then(function(res){
        console.log("success", res.status)
    })
}