function gtag_report_phone_conversion(url) {
    var callback = function () {
        if (typeof (url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-798596772/8gLICImh36McEKS95vwC',
        'value': 1.0,
        'currency': 'USD',
        'event_callback': callback
    });
    return false;
}
