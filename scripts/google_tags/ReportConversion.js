function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof (url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-798596772/DhTaCLf1vqMcEKS95vwC',
        'event_callback': callback
    });
    return false;
}
