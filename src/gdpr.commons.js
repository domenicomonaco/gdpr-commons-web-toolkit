/** AUTHOR: Tecnologie per Persone di Domenico Monaco - LICENSE: MIT - LINK: https://www.gdprcommons.it */

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function setCookie(name, value, days) {
    value = JSON.stringify(value);
    var expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            let out = c.substring(nameEQ.length, c.length);
            return JSON.parse(out);
        }
    }
    return null;
}

const config = {
    text: {
        cookieDaysExp: 20,
        cookieName: 'GDPRCommons-cookie',
        linkPrivacyPolicy: "http://www.gdprcommons.it",
        textTitleModal: "Informativa Cookie",
        textAbstractModal: "Questo sito utilizza esclusivamente cookie e/o altri strumenti di tracciamento di tipo tecnico o analitici al solo scopo di analisi statistica del traffico senza risalire all'identità del singolo utente. In oltre, non raccoglie informazioni personali in modo automatico senza esplicito consenso. In alcuni casi sono utilizzate risorse esterne. Ai fini legislativi, a scopo informativo si chiede la consultazione della Privacy Policy e proseguire cliccando su \'Ho capito\'",
        textButtonAccept: "Ho capito",
        textButtonOpenPolicy: "Leggi l\'informativa",
        textAccepted: "Accettato",
        textNotAccepted: "Non accettato",
        textNotPresent: "Nessun dato",
        textButtonResetCookie: "Resetta preferenze",
    },

    modal: {
        showOnPageLoad: 'cookie',
    },

    fixedicon: {
        show: true
    }
};

window.onload = function () {

    const GDPRCOMMONS = document.getElementById("GDPR_Commons");
    GDPRCOMMONS.innerHTML = `
  <div id="gdpr-commons-fixedicon">
    <a href="#GDPRCommons-dialog" id="gdpr-commons-button-fixedicon" class="fixedicon" aria-label="Open Cookie Notice">
      <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/>
      </svg>
    </a>
  </div><div id="gdpr-commons-modal-overlay"></div>
  <div id="gdpr-commons-modal">
    <div class="gdpr-commons-modal-header">
      <div class="gdpr-commons-modal-title">
        <h3>${config.text.textTitleModal}</h3>
      </div>
    </div>
    <div class="gdpr-commons-modal-content">
      <p>
        ${config.text.textAbstractModal}
      </p>
    </div>

    <div class="gdpr-commons-modal-middle">
      <div>
      <span id="last-consent-state"></span> <em><span id="last-consent-date"></span></em>
      </div>
      <a href="${GDPRCOMMONS.getAttribute('data-urlpolicy')}">${config.text.textButtonOpenPolicy}</a>
    </div>

      <div class="gdpr-commons-modal-footer">
        <button id="gdpr-commons-button-reset" class="buttons">${config.text.textButtonResetCookie}</button>
         <button id="gdpr-commons-button-accept" class="buttons">${config.text.textButtonAccept}</button>
    </div>
    <div id="gdpr-commons-modal-credits">
        <span>Proudly <a title="GDPR Commons: Open Source GDPR Tookit" target="_blank" href="https://www.gdprcommons.it">GDPR Commons: Open Source GDPR Tookit</a></spans>
    </div>
  </div>

  </div>`;

    let cookieValue = {
        date: null,
        accepted: false,
    };

    let cookie = getCookie(config.text.cookieName);

    document.getElementById("gdpr-commons-button-accept").addEventListener('click', function () {
        cookieValue = {
            date: Date(),
            accepted: true,
        };
        setCookie(config.text.cookieName, cookieValue, config.text.cookieDaysExp);
        console.log('Accepted');
        document.getElementById("gdpr-commons-modal-overlay").classList.add('fadeOUT-display');
        document.getElementById("gdpr-commons-modal").classList.add('fadeOUT-display');

        document.getElementById("gdpr-commons-modal-overlay").classList.remove('fadeIN-display');
        document.getElementById("gdpr-commons-modal").classList.remove('fadeIN-display');
    });

    document.getElementById("gdpr-commons-button-reset").addEventListener('click', function () {
        cookieValue = {
            date: Date(),
            accepted: false,
        };
        console.log('Reset');
        setCookie(config.text.cookieName, cookieValue, config.text.cookieDaysExp);
        location.reload();
    });

    document.getElementById("gdpr-commons-button-fixedicon").addEventListener('click',
        function () {
            console.log('open');
            document.getElementById("gdpr-commons-modal-overlay").classList.remove('fadeOUT-display');
            document.getElementById("gdpr-commons-modal").classList.remove('fadeOUT-display');
            document.getElementById("gdpr-commons-modal-overlay").classList.add('fadeIN-display');
            document.getElementById("gdpr-commons-modal").classList.add('fadeIN-display');
        });

    setTimeout(function () {
        if (cookie == null) {
            document.getElementById("gdpr-commons-modal-overlay").classList.remove('fadeOUT-display');
            document.getElementById("gdpr-commons-modal").classList.remove('fadeOUT-display');
            document.getElementById("gdpr-commons-modal-overlay").classList.add('fadeIN-display');
            document.getElementById("gdpr-commons-modal").classList.add('fadeIN-display');
        } else {
            if (cookie.accepted != null && cookie.accepted == true) {
                document.getElementById("last-consent-state").innerHTML = config.text.textAccepted;
            } else {
                document.getElementById("last-consent-state").innerHTML = config.text.textNotAccepted;
                document.getElementById("gdpr-commons-modal-overlay").classList.remove('fadeOUT-display');
                document.getElementById("gdpr-commons-modal").classList.remove('fadeOUT-display');
                document.getElementById("gdpr-commons-modal-overlay").classList.add('fadeIN-display');
                document.getElementById("gdpr-commons-modal").classList.add('fadeIN-display');
            }
            if (cookie.date != null) {
                document.getElementById("last-consent-date").innerHTML = new Date(cookie.date).toDateString();
            } else {
                document.getElementById("last-consent-date").innerHTML = '0:00:00'
            }
        }
    }, 2000);
};