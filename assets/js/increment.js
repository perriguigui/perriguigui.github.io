function animateResultCount(number, target, elem) {
    if(number < target) {
        let interval = setInterval(function() {
            $(elem).text(number);
            if (number >= target) {
                clearInterval(interval);
                return;
            }
            number++;
        }, 30);
    }
    if(target < number) {
        let interval = setInterval(function() {
            $(elem).text(number);
            if (target >= number) {
                clearInterval(interval);
                return;
            }
            number--;
        }, 30);
    }
}

success: function(response) {
    $('div#results').html(response.html);
    animateResultCount($('#rescount').html(),response.newcount,'#rescount');
}