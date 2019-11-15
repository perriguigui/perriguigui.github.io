let sendBtn = document.querySelector('#sendMailBtn'); 
let form  = document.querySelector('.zform'); 

sendBtn.addEventListener('click', function() {
        let object = document.querySelector("#object").value;
        let body = document.querySelector("#message").value;
        form.setAttribute("action",`mailto:tom.per@orange.fr?subject=${object}&body=${body}`)
        form.submit();
    });