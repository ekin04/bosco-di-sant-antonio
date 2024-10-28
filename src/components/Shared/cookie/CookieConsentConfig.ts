import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom right',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/it/" target="_blank">Google Analytics 4</a>',
          onAccept: () => {
            console.log('ga4 accepted');
            // TODO: load ga4
          },
          onReject: () => {
            console.log('ga4 rejected');
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
      },
    },
  },
  language: {
    default: 'it',
    translations: {
      it: {
        consentModal: {
          title: "Lo vuoi un biscotto? - Cookie Consent",
          description:
            "Navigando sul nostro sito, accetti l'uso dei cookie per offrirti contenuti personalizzati e analizzare il traffico per soli fine statistico, vi promettiamo che non vi manderemo immagini di gattini",
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Rifiuta',
          showPreferencesBtn: 'Gestisci preferenze',
          footer:
            '<a href="/privacy_policy">Privacy Policy</a>\n<a href="/cookie_policy">Cookie Policy</a>',
        },
        preferencesModal: {
          title: 'Gestisci le preferenze dei cookie',
          acceptAllBtn: 'Accetta tutto',
          acceptNecessaryBtn: 'Rifiuta',
          savePreferencesBtn: 'Salva le preferenze',
          closeIconLabel: 'Chiudi modal',
          serviceCounterLabel: 'Servizio|Servizi',
          sections: [
            {
              title: 'Cookie utilizzati',
              description:
                'Da questa schermata puoi rimuovere o accettare i cookie che utilizziamo per offrirti la migliore esperienza di navigazione',
            },
            {
              title:
                'Cookie Tecnici <span class="pm__badge">Sempre attivo</span>',
              description:
                'Sono dei piccoli frammenti di codice che vengono salvati sul tuo dispositivo, hanno la possibilità di aiutarci a migliorare la tua esperienza di navigazione. Es. se chiudi questo popup, questo frammento di codice ci permette di sapere se hai accettato o meno i cookie e quindi il messaggio non comparirà di nuovo',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics Cookies',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              linkedCategory: 'analytics',
            },
            {
              title: 'Altre informazioni',
              description:
                'Per qualsiasi domanda in relazione alla mia politica sui cookie per favore <a class="cc__link" href="mailto:info@maiellaescursioni.it">Contattami</a>.',
            },
          ],
        },
      },
    },
  },
};