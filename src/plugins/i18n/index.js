import  { createI18n } from 'vue-i18n';

const messages = {
  de: {
    "links": {
      "title": "Richtlinien",
      "cookie-policy": "Cookie-Richtlinie",
      "privacy-policy": "Datenschutzerklärung",
      "terms-and-conditions": "Allgemeine Geschäftsbedingungen",
      "imprint": "Impressum"
    },
    "cookiebanner": {
        "title": "Aber zuerst, Cookies!",
        "description": "Wir verwenden Cookies, um Ihre Einstellungen zu speichern, Ihnen relevante Inhalte anzuzeigen und Ihr Harry Buck Neu- und Betonbau Mallorca, S.L.-Erlebnis reibungsloser zu gestalten. Durch die Nutzung von Harry Buck Neu- und Betonbau Mallorca, S.L. stimmen Sie unserer ",
        "policyLink": "Datenschutzrichtlinie",
        "policyLinkAdon": " zu.",
        "buttonAllow": "Ja, gerne!",
        "buttonDisallow": "Nein, danke.",
        "buttonManageCookies": "Cookies verwalten",
        "manage": {
            "title": "Cookie-Einstellungen",
            "necessary_title": "Notwendig",
            "necessary_description": "Essentielle Cookies gewährleisten grundlegende Website-Funktionen wie Navigation und Sicherheitszugriff.",
            "preferences_title": "Präferenzen",
            "preferences_description": "Präferenz-Cookies speichern Daten, die das Verhalten der Website beeinflussen, wie Sprache oder Region.",
            "statistics_title": "Statistiken",
            "statistics_description": "Statistik-Cookies erfassen anonym Daten, um Website-Besitzern zu helfen, Besucherinteraktionen zu verstehen.",
            "marketing_title": "Marketing",
            "marketing_description": "Marketing-Cookies verfolgen Website-Besucher, um relevante, ansprechende Anzeigen anzuzeigen, die für Verlage und Werbetreibende wertvoll sind.",
            "buttonAllow": "Cookies zulassen",
            "buttonDisallow": "Cookies ablehnen",
            "buttonAccept": "Einstellungen akzeptieren"
        }
    },
    "imprint": {
      "title": "Impressum",
      "azm-france": "Harry Buck Neu- und Betonbau Mallorca, S.L. Frankreich",
      "address": "13 Rue de la scierie - 66340 Palau de Cerdagne, Frankreich",
      "phone": {
        "france": "Tel.: (+33) 03 52 74 03 69",
        "headquarter": "Tel.: +376 390 036"
      },
      "siret": {
        "1": "Siret: 824 654 958 000 19",
        "2": "Siret: 509 902 722 - USt-IdNr.: FR39"
      },
      "tva": "USt-IdNr.: FR62 824 654 958",
      "capital": "Harry Buck Neu- und Betonbau Mallorca, S.L. - SLU, Kapital 3 000.000 €",
      "headquarter": "Hauptsitz: Carrer Doctor Palau, N°8 AD600 Sant Julià de Loria, Andorra",
      "nrt": "NRT : L-711694-Z - Registrierungsnummer: 16585",
      "fiscal": "Steuerverantwortlicher von Harry Buck Neu- und Betonbau Mallorca, S.L. in Frankreich:",
      "nvotf": "NVOTF Group: 13 rue de la scierie - 66 340 PALAU DE CERDAGNE, Frankreich",
      "ceo": "Chefredakteur: Jérôme GUIGUET",
      "property": "Diese Website respektiert das Urheberrecht. Alle Rechte der Autoren der auf dieser Website wiedergegebenen und verbreiteten Werke sind vorbehalten. Ohne Genehmigung ist die Verwendung der Werke, außer zur Wiedergabe und individuellen, privaten Ansicht, verboten. Die Website az-machinery wird von Ionos herausgegeben und von der Firma Ionos gehostet."
    },
    "cookie-policy": {
      "title": "Cookie-Richtlinie für Harry Buck Neu- und Betonbau Mallorca, S.L. S.L.",
      "titles": {
        "introduction": "Einführung",
        "what-are-cookies": "Was sind Cookies?",
        "types": "Arten von Cookies, die wir verwenden",
        "type-1": "1. Wesentliche Cookies",
        "type-2": "2. Leistungs-Cookies",
        "type-3": "3. Funktionale Cookies",
        "type-4": "4. Zielgruppen-Cookies",
        "manage": "Verwaltung Ihrer Cookie-Einstellungen",
        "changes": "Änderungen an dieser Cookie-Richtlinie",
        "contact-info": "Kontaktinformationen"
      },
      "content": {
        "introduction": "Harry Buck Neu- und Betonbau Mallorca, S.L. S.L. verwendet Cookies und ähnliche Tracking-Technologien auf unserer Website, um Ihre Browsing-Erfahrung zu verbessern, den Traffik auf der Website zu analysieren und personalisierte Inhalte bereitzustellen. Diese Cookie-Richtlinie erklärt, was Cookies sind, wie wir sie verwenden und wie Sie Ihre Cookie-Einstellungen verwalten können.",
        "what-are-cookies": "Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie werden weit verbreitet verwendet, um Websites effizienter zu machen, Berichte zu erstellen und Ihre Erfahrung zu personalisieren.",
        "type-1": "Diese Cookies sind notwendig, damit die Website funktioniert und können in unseren Systemen nicht deaktiviert werden. Sie werden normalerweise in Reaktion auf Aktionen gesetzt, die Sie ausführen, die einer Anfrage nach Dienstleistungen entsprechen, wie z.B. die Festlegung Ihrer Datenschutzeinstellungen, das Anmelden oder das Ausfüllen von Formularen.",
        "type-2": "Diese Cookies ermöglichen es uns, Besuche und Traffikquellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie helfen uns, zu sehen, welche Seiten am meisten und am wenigsten beliebt sind und wie Besucher sich auf der Website bewegen. Alle Informationen, die diese Cookies sammeln, sind aggregiert und daher anonym.",
        "type-3": "Diese Cookies ermöglichen es der Website, erweiterte Funktionen und Personalisierung bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unsere Seiten integriert haben.",
        "type-4": "Diese Cookies können durch unsere Website von unseren Werbepartnern gesetzt werden. Sie können von diesen Unternehmen verwendet werden, um ein Profil Ihrer Interessen zu erstellen und Ihnen relevante Werbung auf anderen Seiten anzuzeigen. Sie speichern keine direkten personenbezogenen Daten, sondern basieren auf der eindeutigen Identifizierung Ihres Browsers und Ihres Internet-Geräts.",
        "manage": "Sie können Ihre Cookie-Einstellungen über die Einstellungen Ihres Browsers verwalten. Die meisten Browser ermöglichen es Ihnen, Cookies abzulehnen und zu löschen. Die Methoden dafür variieren je nach Browser und Version.",
        "changes": "Wir können unsere Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen in der Technologie oder der Gesetzgebung zu reflektieren, die die Art und Weise beeinflussen können, wie Cookies von uns verwendet werden und wie Sie als Benutzer sie verwalten können. Wir werden Sie über Änderungen informieren, indem wir die neue Richtlinie auf unserer Website veröffentlichen.",
        "contact-info": "Für Fragen oder Bedenken bezüglich unserer Cookie-Richtlinie wenden Sie sich bitte an uns unter: { email }"
      }
    },
    "privacy": {
      "title": {
        "1": "Datenschutzrichtlinie",
        "2": "Informationen, die wir sammeln",
        "3": "Cookies",
        "4": "Datenverwendung",
        "5": "Ihre Rechte",
        "6": "Kontaktieren Sie uns"
      },
      "subtitle": {
        "1": "Ihre Privatsphäre ist uns wichtig"
      },
      "content": {
        "1": "Bei Harry Buck Neu- und Betonbau Mallorca, S.L. sind wir bestrebt, Ihre Privatsphäre zu schützen. Diese Datenschutzrichtlinie erläutert, wie wir Ihre Informationen sammeln, verwenden und schützen, wenn Sie unsere Dienste nutzen.",
        "2": "Als Hersteller und Verkäufer von Laderampen sammeln wir nur die notwendigen personenbezogenen Daten für unsere Geschäftstätigkeit. Die einzigen Daten, die wir sammeln, sind durch Google Analytics und PostHog. Diese Daten helfen uns, zu verstehen, wie unsere Website genutzt wird und unsere Dienste zu verbessern.",
        "3": "Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Unser GDPR-konformes Cookie-Banner bietet Ihnen Informationen über die Cookies, die wir verwenden, und ermöglicht Ihnen, Ihre Einstellungen zu verwalten.",
        "4": "Die von uns gesammelten Daten werden ausschließlich zu Analysezwecken und zur Verbesserung unserer Produkte und Dienstleistungen verwendet. Wir verkaufen oder teilen Ihre personenbezogenen Daten nicht ohne Ihre Zustimmung an Dritte.",
        "5": "Gemäß der Datenschutz-Grundverordnung (DSGVO) haben Sie das Recht, auf Ihre personenbezogenen Daten zuzugreifen, zu berichtigen oder zu löschen. Wenn Sie Fragen oder Bedenken bezüglich Ihrer Daten haben, wenden Sie sich bitte an uns.",
        "6": "Wenn Sie Fragen zu dieser Datenschutzrichtlinie oder unseren Datenschutzpraktiken haben, wenden Sie sich bitte an uns unter:"
      },
      "email": "E-Mail: info[at]harry-buck.com",
      "phone": "Telefon: +34 613 977 931"
    },
    "terms": {
      "title": "AGB",
      "subtitle": "Willkommen auf der Website von Harry Buck Neu- und Betonbau Mallorca, S.L.. Durch den Zugriff auf diese Website erklären Sie sich mit den folgenden Nutzungsbedingungen einverstanden.",
      "content": "Diese Allgemeinen Geschäftsbedingungen regeln die Beziehung zwischen Ihnen und Harry Buck Neu- und Betonbau Mallorca, S.L.. Durch den Zugriff auf oder die Nutzung unserer Dienste stimmen Sie zu, diese Bedingungen einzuhalten.",
      "article": {
        "1": {
          "title": "1. Allgemeine Bestimmungen",
          "list": {
            "1": "Diese Website dient der Bereitstellung von Informationen über das Unternehmen und seine Dienstleistungen. Anfragen können ausschließlich über das bereitgestellte Kontaktformular oder telefonisch gestellt werden. Darüber hinaus werden keine personenbezogenen Daten gesammelt.",
          }
        },
        "2": {
          "title": "2. Urheberrecht und Nutzungsrechte",
          "list": {
            "1": "Der Inhalt dieser Website, einschließlich aller Texte, Bilder, Grafiken und Logos, ist urheberrechtlich geschützt. Jede Vervielfältigung, Verbreitung oder anderweitige Verwendung bedarf der vorherigen schriftlichen Zustimmung des Unternehmens.",
          }
        },
        "3": {
          "title": "Haftungsausschluss",
          "title1": "3.1 Inhalte der Website",
          "title2": "3.2 Verfügbarkeit der Website",
          "list": {
            "1": "Das Unternehmen bemüht sich, die Informationen auf dieser Website stets aktuell und korrekt zu halten. Dennoch können Fehler oder Unvollständigkeiten nicht vollständig ausgeschlossen werden. Das Unternehmen übernimmt keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Inhalte.",
            "2": "Das Unternehmen behält sich das Recht vor, den Betrieb der Website jederzeit ohne Ankündigung ganz oder teilweise einzustellen. Für eine ununterbrochene Verfügbarkeit der Website wird keine Gewähr übernommen."
          }
        },
        "4": {
          "title": "4. Externe Links",
          "list": {
            "1": "Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte das Unternehmen keinen Einfluss hat. Aus diesem Grund kann das Unternehmen für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich."
          }
        },
        "5": {
          "title": "5. Datenschutz",
          "list": {
            "1": "Personenbezogene Daten werden vom Unternehmen nur im notwendigen Umfang und gemäß den geltenden Datenschutzbestimmungen verarbeitet. Weitere Informationen hierzu finden Sie in unserer Datenschutzerklärung."
          }
        },
        "6": {
          "title": "6. Anwendbares Recht",
          "list": {
            "1": "Für sämtliche Rechtsbeziehungen zwischen dem Nutzer und dem Unternehmen gilt spanisches Recht unter Ausschluss des internationalen Privatrechts. Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz des Unternehmens."
          }
        },
        "7": {
          "title": "7. Kontaktinformationen",
          "list": {
            "1": "Harry Buck Neu- und Betonbau Mallorca, S.L.",
            "2": "Camí de Son Arrosa S/n Poligono,10",
            "3": "07143 Biniali",
            "4": "Telefon: +34 613 977 931",
            "5": "E-Mail: info[at]harry-buck.com",
          }
        }
      }
    }
  }
}
const i18n = createI18n(
  {
    locale: 'de',
    fallbackLocale: 'de',
    legacy: false,
    messages: messages
  }
)

export default i18n