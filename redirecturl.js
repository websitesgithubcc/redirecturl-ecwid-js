<script>

window.ec = window.ec || Object();

window.ec.config = window.ec.config || Object();

window.ec.config.custom_redirect_map = {

    'social': 'https://store.californiaconcierge.com/product/Social-Media-Management-Package',



};

function redirectToThankYouPage(social) {

    if (window.ec.config.custom_redirect_map && window.ec.config.custom_redirect_map[social]) {

        window.location.href = window.ec.config.custom_redirect_map[social];

    } else {

        window.location.href = 'http://login-module.californiaconcierge.com/';

    }

}

  </script>