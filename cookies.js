// Cookie Consent Management
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');
    
    // Check if user has already made a choice
    const cookieConsent = getCookie('cookie-consent');
    
    if (!cookieConsent) {
        // Show banner if no choice has been made
        cookieBanner.style.display = 'block';
    }
    
    // Accept cookies
    acceptButton.addEventListener('click', function() {
        setCookie('cookie-consent', 'accepted', 365); // Store for 1 year
        cookieBanner.style.display = 'none';
        
        // Enable Google Maps iframe
        enableGoogleMaps();
    });
    
    // Reject cookies
    rejectButton.addEventListener('click', function() {
        setCookie('cookie-consent', 'rejected', 365); // Store for 1 year
        cookieBanner.style.display = 'none';
        
        // Disable Google Maps iframe
        disableGoogleMaps();
    });
    
    // If consent was previously given, enable maps
    if (cookieConsent === 'accepted') {
        enableGoogleMaps();
    } else if (cookieConsent === 'rejected') {
        disableGoogleMaps();
    }
});

// Cookie utility functions
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
}

function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
}

// Google Maps functions
function enableGoogleMaps() {
    const iframes = document.querySelectorAll('iframe[src*="google.com/maps"]');
    iframes.forEach(iframe => {
        iframe.style.display = 'block';
        if (iframe.dataset.src) {
            iframe.src = iframe.dataset.src;
            iframe.removeAttribute('data-src');
        }
    });
}

function disableGoogleMaps() {
    const iframes = document.querySelectorAll('iframe[src*="google.com/maps"]');
    iframes.forEach(iframe => {
        iframe.style.display = 'none';
    });
} 