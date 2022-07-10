# [GDPR COMMONS CODE](https://www.gdprcommons.it)

![GDPR Commons Logo](https://github.com/domenicomonaco/gdpr-commons/tree/main/_icon/logologo-gdpr-commons-64.png?raw=true)

[info@gdprcommons.it](mailto:info@gdprcommons.it)

### Sponsored by
[<img align="left" style="margin:5px" src="http://cdn.tecnologieperpersone.it/img/dmonaco_happy_hacking.png" height="64" />](https://blog.domenicomonaco.it)

[<img style="margin:5px;" src="http://cdn.tecnologieperpersone.it/img/tecnologie-per-persone-logo.png" height="64" />](https://tecnologieperpersone.it)

## Cos'è "GDPR Commons"

[GDPR COMMONS](https://www.gdprcommons.it) ha l'obiettivo di favorire la diffusione di modelli di Informative GPDR e Privacy Policy semplificate e comprensibili liberamente riutilizzabili attravero le licence Creative Commons.

### GRPD Commones Code

GRPD Commones Code contiene alcune parti JavaScript e HTML utilizzabili nel proprio sito web utili ad implementare gli avvisi richiesti dal GDPR.


### DEMO

[DEMO](https://www.cdn.gdprcommons.it/latest/)

### Libreria

* CDN Pubblica: [https://www.cdn.gdprcommons.it/
](https://www.cdn.gdprcommons.it/)
* NPM Module: [https://www.npmjs.com/package/gdpr-commons-js-plug-in](https://www.npmjs.com/package/gdpr-commons-js-plug-in)


## Installazione modulo NODE 

1. installa modulo
	
	npm i --save-dev gdpr-commons-js-plug-in

2. importa css e js

	"use strict";
	import { cookieAlert } from './cookieAlert.js';

3. Aggiunti al tuo codice HTML i seguenti due div

    	<div class="gdprcommons-fixedicon"></div>
    	<div class="gdprcommons-notice"></div>


4. configura e lancia script

		const config = {
			text: {
				linkPrivacyPolicy: "http://www.gdprcommons.it",
				textTitleModal: "Informativa Cookie",
				textAbstractModal: "Questo sito utilizza esclusivamente cookie e/o altri strumenti di tracciamento di tipo tecnico o analitici al solo scopo di analisi statistica del traffico senza risalire all'identità del singolo utente. In oltre, non raccoglie informazioni personali in modo automatico senza esplicito consenso. In alcuni casi sono utilizzate risorse esterne. Ai fini legislativi, a scopo informativo si chiede la consultazione della Privacy Policy e proseguire cliccando su \'Ho capito\'",
				textButtonAccept: "Ho capito",
				textButtonOpenPolicy: "Leggi l\'informativa",
				textButtonResetCookie: "elimina",
			},

			modal: {
				showOnPageLoad: 'cookie',
			},

			fixedicon: {
				show: true
			}
		};

		window.onload = function() {
			cookieAlert(config);
		};
	

## Ouput

![Screen shot Modal](screenshot-0.0.8.png)

## GDPR Code

* Node package:
[https://www.npmjs.com/package/gdpr-commons-js-plug-in](https://www.npmjs.com/package/gdpr-commons-js-plug-in)

* Source code:
[https://github.com/domenicomonaco/gdpr-commons/](https://github.com/domenicomonaco/gdpr-commons/)

## MIT License

Il codice di "GDPR COMMONS CODE" è distribuito attraverso licenza MIT.
Copyright (c) 2022 Tecnologie per Persone di Domenico Monaco <domenico@tecnologieperpersone.it>