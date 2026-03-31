// Base configuration for shared data across all pages
const baseConfig = {
  "@context": "https://schema.org",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Seestrasse 52",
    addressLocality: "Weggis",
    postalCode: "6353",
    addressCountry: "CH"
  },
  telephone: "+41413922727",
  email: "mail@roessli.ch",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "47.0319956",
    longitude: "8.4250487"
  },
  logo: "https://cdn.prod.website-files.com/647603ee27706cf45c087bb6/64760c5ea6f2600981f174a7_roessliweb.svg",
  sameAs: [
    "https://www.facebook.com/roessliweggis",
    "https://www.instagram.com/roessliweggis"
  ]
};

// Room configurations for accommodation listings
const roomTypes = [
  {
    "@type": "Accommodation",
    "name": "Comfort Doppelzimmer",
    "description": "Komfortable Doppelzimmer mit modernen Annehmlichkeiten",
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": 2
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Flat TV" },
      { "@type": "LocationFeatureSpecification", "name": "Minibar" },
      { "@type": "LocationFeatureSpecification", "name": "Safe" },
      { "@type": "LocationFeatureSpecification", "name": "Haartrockner" },
      { "@type": "LocationFeatureSpecification", "name": "Kostenloses WLAN" }
    ]
  },
  {
    "@type": "Accommodation",
    "name": "Superior Doppelzimmer",
    "description": "Geräumige Superior Zimmer mit enhanced Ausstattung",
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": 2
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Flat TV" },
      { "@type": "LocationFeatureSpecification", "name": "Minibar" },
      { "@type": "LocationFeatureSpecification", "name": "Airconditioning" },
      { "@type": "LocationFeatureSpecification", "name": "Safe" },
      { "@type": "LocationFeatureSpecification", "name": "Balkon" },
      { "@type": "LocationFeatureSpecification", "name": "Kostenloses WLAN" }
    ]
  },
  {
    "@type": "Accommodation",
    "name": "Junior Suite",
    "description": "Elegante Junior Suiten mit separatem Wohnbereich",
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": 3
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Flat TV" },
      { "@type": "LocationFeatureSpecification", "name": "Minibar" },
      { "@type": "LocationFeatureSpecification", "name": "Airconditioning" },
      { "@type": "LocationFeatureSpecification", "name": "Safe" },
      { "@type": "LocationFeatureSpecification", "name": "Separater Wohnbereich" },
      { "@type": "LocationFeatureSpecification", "name": "Balkon" },
      { "@type": "LocationFeatureSpecification", "name": "Kostenloses WLAN" }
    ]
  }
];

// English room configurations
const roomTypesEN = [
  {
    "@type": "Accommodation",
    "name": "Comfort Double Room",
    "description": "Comfortable double rooms with modern amenities",
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": 2
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Flat TV" },
      { "@type": "LocationFeatureSpecification", "name": "Minibar" },
      { "@type": "LocationFeatureSpecification", "name": "Safe" },
      { "@type": "LocationFeatureSpecification", "name": "Hair dryer" },
      { "@type": "LocationFeatureSpecification", "name": "Free WiFi" }
    ]
  },
  {
    "@type": "Accommodation",
    "name": "Superior Double Room",
    "description": "Spacious Superior rooms with enhanced amenities",
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": 2
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Flat TV" },
      { "@type": "LocationFeatureSpecification", "name": "Minibar" },
      { "@type": "LocationFeatureSpecification", "name": "Air conditioning" },
      { "@type": "LocationFeatureSpecification", "name": "Safe" },
      { "@type": "LocationFeatureSpecification", "name": "Balcony" },
      { "@type": "LocationFeatureSpecification", "name": "Free WiFi" }
    ]
  },
  {
    "@type": "Accommodation",
    "name": "Junior Suite",
    "description": "Elegant Junior Suites with separate living area",
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": 3
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Flat TV" },
      { "@type": "LocationFeatureSpecification", "name": "Minibar" },
      { "@type": "LocationFeatureSpecification", "name": "Air conditioning" },
      { "@type": "LocationFeatureSpecification", "name": "Safe" },
      { "@type": "LocationFeatureSpecification", "name": "Separate living area" },
      { "@type": "LocationFeatureSpecification", "name": "Balcony" },
      { "@type": "LocationFeatureSpecification", "name": "Free WiFi" }
    ]
  }
];

// FAQ data from your document
const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Gibt es Informationen zu der Anreise und Abreise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anreise: Die Zimmer sind ab 15.00 Uhr bezugsbereit. Unsere Portiers helfen Ihnen gerne beim Tragen Ihres Gepäcks. Kontaktieren Sie die Rezeption vorab.\nAbreise: Check-out ist um 11.00 Uhr. Unsere Gäste dürfen unser Hotel mit dem Wellnessbereich auch nach dem Check-out nochmals richtig auskosten. Nach Verfügbarkeit besteht die Möglichkeit, einen Late Check-out gegen einen Aufpreis zu erhalten."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich mein Gepäck im Hotel aufbewahren lassen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ihr Gepäck können Sie nach dem Check-out bei uns deponieren, und den Tag nochmals in vollen Zügen geniessen. Das Rezeptionsteam zeigt Ihnen gerne, wo unser Gepäckraum ist. Unsere Portiers helfen Ihnen gerne beim Tragen Ihres Gepäcks. Kontaktieren Sie die Rezeption vorab."
      }
    },
    {
      "@type": "Question",
      "name": "Wie sind die Zimmer ausgestattet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Auf Ihrem Zimmer finden Sie einen Flat TV sowie eine Minibar. Die Minibar beinhaltet eine kleine Auswahl an Erfrischungsgetränken, welche wir Ihnen gern offerieren. Einige unserer Hotelzimmer verfügen über Airconditioning, alle anderen Zimmer haben hinter dem Vorhang einen Lüftungsschlitz und sind mit einem Ventilator ausgestattet. All unsere Hotelzimmer verfügen über einen Safe. Wertsachen können auch in den Hotelsafe an der Rezeption gegeben werden.\nDie Badezimmer verfügen alle über einen Haartrockner sowie Shampoo und Duschgel."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich mein Essen auf das Zimmer bestellen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Täglich von 7.30 – 22.00 Uhr bietet das Hotel Zimmerservice mit einer kleinen Speisenauswahl für CHF 10.- Aufpreis an. Wählen Sie die Nummer 709 auf dem Zimmertelefon."
      }
    },
    {
      "@type": "Question",
      "name": "Wie funktioniert das Telefon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Um von Zimmer zu Zimmer zu telefonieren, können Sie direkt die Zimmernummer eingeben. Die Rezeption erreichen Sie unter der Nummer 709."
      }
    },
    {
      "@type": "Question",
      "name": "Gibt es im Hotel ein Babybett und einen Wickeltisch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Babybetten werden kostenlos auf Wunsch bereitgestellt. Ein Wickeltisch befindet sich im Erdgeschoss in der behindertengerechten Toilette."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich meine Wäsche im Hotel reinigen lassen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Klar, wir kümmern uns sehr gerne um Ihre Kleidung. Ein Formular für den Wäsche- und Bügelservice finden Sie in Ihrem Kleiderschrank."
      }
    },
    {
      "@type": "Question",
      "name": "Habe ich im Hotel eine Auswahl von Kissen und Duvets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wir bringen Ihnen gerne zusätzliche Kissen, Duvets oder Kissen mit verschiedenen Füllungen auf Ihr Zimmer. Fragen Sie an der Rezeption oder beim Housekeeping-Team."
      }
    },
    {
      "@type": "Question",
      "name": "Gibt es im Hotel Adapter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Adapter für ausländische Stromkabel sind gegen ein Depot von CHF 20.- an der Rezeption erhältlich."
      }
    },
    {
      "@type": "Question",
      "name": "Hat es im Hotel WLAN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das gesamte Hotel ist mit Wireless Internet ausgestattet. Das Passwort dazu erhalten Sie an der Rezeption. Ein Gäste-Computer steht im Erdgeschoss beim Treppenaufgang zur Verfügung."
      }
    },
    {
      "@type": "Question",
      "name": "Wo im Hotel kann ich rauchen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rauchen dürfen Sie auf Ihrem Balkon. Aschenbecher sind dementsprechend vorhanden. Alle anderen Räumlichkeiten sind rauchfrei."
      }
    },
    {
      "@type": "Question",
      "name": "Wie sind die Öffnungszeiten des Wellness- & Fitness-Bereichs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Täglich von 10.00 – 19.30 Uhr\nFitnessbereich bis 19.30 Uhr\nDas Solebad ist von 10.00 Uhr bis 18.00 Uhr für Sie geöffnet.\nZutritt ab 14 Jahren. Der Zugang zu unserem Spa-Bereich ist ab 14 Jahren gestattet. Bitte beachten Sie, dass unsere Spa-Räumlichkeiten sowie das Solebad nicht beaufsichtigt werden."
      }
    },
    {
      "@type": "Question",
      "name": "Wann hat das Restaurant geöffnet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unsere Küche verwöhnt Sie Donnerstag bis Montag von 18.00 bis 23.00 Uhr. Die Küche schliesst jeweils um 21.30 Uhr."
      }
    },
    {
      "@type": "Question",
      "name": "Ab wann kann ich im Hotel frühstücken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unser vielfältiges Büffet ist von 7.30 bis 10.00 Uhr (Samstag und Sonntag bis 11.00 Uhr) im Restaurant aufgebaut. Room Service ist auf Wunsch möglich."
      }
    },
    {
      "@type": "Question",
      "name": "Was mache ich bei Feueralarm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei Brandausbruch Ruhe bewahren und den Anweisungen des Personals sowie der Feuerwehr folgen. Benutzen Sie die markierten Fluchtwege ohne den Lift. Falls der Korridor nicht erreichbar ist, bleiben Sie im Zimmer, schliessen Sie Türen und Fenster und machen Sie sich am Fenster bemerkbar. Sammelplatz ist vor der Kapelle gegenüber des Haupteingangs."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lauten die wichtigsten Notfall-Nummern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rezeption (Zimmertelefon): 709\nPolizei: 117\nFeuerwehr: 118\nAmbulanz: 144\nREGA: 1414\nBei direkter Alarmierung bitte die Rezeption informieren."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich im Hotel meine Post aufgeben?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ihre Briefpost können Sie an der Rezeption abgeben, sie wird an den Werktagen um 9.00 Uhr vom Postboten abgeholt. Ansichtskarten und Briefmarken sind an der Rezeption erhältlich."
      }
    },
    {
      "@type": "Question",
      "name": "Zimmerschlüssel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei unseren Zimmerschlüsseln handelt es sich um eine Key-Card in Kreditkarten-Format. Die Zimmernummern sind aus Sicherheitsgründen nicht auf den einzelnen Karten vermerkt."
      }
    },
    {
      "@type": "Question",
      "name": "Reception?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Täglich von 07.00 – 23.00 Uhr steht Ihnen unser Rezeptions-Team für Wünsche und Fragen zur Verfügung. Innerhalb des Hotels erreichen Sie uns unter der Nummer 709."
      }
    },
    {
      "@type": "Question",
      "name": "Fundsachen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fundgegenstände werden sicher aufbewahrt. Bei vermissten Gegenständen melden Sie sich bitte an der Rezeption."
      }
    },
    {
      "@type": "Question",
      "name": "Geldwechsel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das Hotel kann Fremdwährungen zum aktuellen Tageskurs in Schweizer Franken wechseln."
      }
    },
    {
      "@type": "Question",
      "name": "Sind Haustiere im Hotel erlaubt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In unserem Hause sind Hunde jederzeit herzlich willkommen. Bei einem Besuch in unserem Restaurant oder im Spa- & Fitnessbereich bitten wir Sie, die Hunde auf dem Zimmer zu lassen. Im Kanton Luzern besteht Leinenpflicht in Wäldern von April bis Juli."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Parkmöglichkeiten habe ich?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vor dem Hotel steht Ihnen eine begrenzte Anzahl Parkplätze (CHF 6.- pro Tag) zur Verfügung. Reservierungen sind nicht möglich. Weitere öffentliche Parkplätze befinden sich an der Seestrasse beim Restaurant «HYG» (2 Min. Fussweg)."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich beim Hotel Rössli mein elektrisches Auto laden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unseren Hotelgästen stehen 12 Elektro-Ladestationen «easee-charge» (gegen Gebühr) zur Verfügung. Um Ihr E-Fahrzeug aufladen zu können, melden Sie sich an der Rezeption und verlangen einen Badge.\n\nTechnische Angaben: Maximale Ladeleistung: 22 kW, AC Stecker: Typ 2, Elektrischer Anschluss: Dreiphasig, 32 A"
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich im Hotel Rössli mein Fahrrad parkieren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unseren Hotelgästen steht ein eigener Velokeller zur Verfügung. E-Bikes können dort aufgeladen werden."
      }
    },
    {
      "@type": "Question",
      "name": "Was kann ich in der Umgebung Weggis erleben?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wandern an der Seepromenade oder auf die Rigi. Nordic-Walking-Stöcke sind kostenlos ausleihbar. Der Tennisplatz an der Kreuzstrasse ist reservierbar. Die Skilifte sind via Luftseilbahn oder Zahnradbahn erreichbar. Ein Vita Parcours befindet sich im «Herrenwald». Die Rezeption gibt gerne saisonale Tipps."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Familienangebote gibt es in der Region?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spielplätze in Weggis und Rigi Kaltbad. Grillplätze mit Holz in Weggis, Vitznau und auf der Rigi. Die Luftseilbahn Weggis fährt halbstündlich, die Zahnradbahn Vitznau stündlich. Busfahrpläne, Lidobusfahrplan und Schiffsfahrplan sind am Infoboard im Erdgeschoss erhältlich."
      }
    },
    {
      "@type": "Question",
      "name": "Wo finde ich die nächste Apotheke oder Drogerie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Apotheken in Küssnacht am Rigi: Holzgang Apotheke AG, 041 850 10 45. Amavita Apotheke, 058 878 11 10. Drogerie Masiello im Neubühl Center Weggis, 041 390 30 63."
      }
    },
    {
      "@type": "Question",
      "name": "Wo ist der nächste Arzt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dr. med. D. Hug, 041 390 24 34. Dr. med. U. Lang, 041 390 22 33. Notfall: 0840 61 61 61."
      }
    },
    {
      "@type": "Question",
      "name": "Ist das Hotel behindertengerecht?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Erdgeschoss-Toiletten verfügen über ein rollstuhlgerechtes WC. Restaurant-Besucher profitieren ebenfalls davon. Die Zimmer sowie der Spa- & Fitnessbereich sind leider nicht barrierefrei."
      }
    },
    {
      "@type": "Question",
      "name": "Wo befindet sich die nächste Bank / der nächste Geldautomat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Geldautomat der Luzerner Kantonalbank befindet sich gegenüber der Schiffstation neben dem Restaurant Oliv. Ein Raiffeisenbank-Automat steht im Neubühl Center Weggis. Das Hotel akzeptiert gängige Kreditkarten."
      }
    },
    {
      "@type": "Question",
      "name": "Wo kann ich Lebensmittel einkaufen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tschumi-Migrospartner und COOP Supermarkt im Neubühl Center. Volg Dorfladen an der Rigistrasse 9, neben dem Dorfschulhausplatz. Öffnungszeiten variieren je nach Saison."
      }
    },
    {
      "@type": "Question",
      "name": "Was tut das Hotel für die Umwelt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das Hotel verwendet regionale Lebensmittel und reduziert unnötige Transportwege und Verpackungen. Ein Strom-Optimierungsgerät reguliert den Stromverbrauch. Konsequente Abfalltrennung und umweltfreundliche Reinigungsprodukte «Eco Plus» werden verwendet."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich das Hahnenwasser trinken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unser Leitungswasser in Weggis ist von hervorragender Trinkwasser-Qualität. Gerne können Sie die Wasserkaraffe auf Ihrem Zimmer direkt vom Wasserhahn selbst befüllen."
      }
    }
  ]
};

// Language detection
function getLanguage() {
  const path = window.location.pathname.toLowerCase();
  return path.includes('/en/') || path.startsWith('/en') ? 'en' : 'de';
}

// Language-specific configurations
const languageConfigs = {
  de: {
    hotel: {
      "@type": "Hotel",
      name: "Hotel Rössli Gourmet & Spa",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Seestrasse 52",
        addressLocality: "Weggis",
        postalCode: "6353",
        addressCountry: "CH"
      },
      url: "https://www.roessli.ch",
      image: "https://cdn.prod.website-files.com/647603ee27706cf45c087bb6/649c6b8bc0c864a762c76f84_hotelroesslifull.webp",
      description: "Unser 4-Sterne-Hotel Rössli in Weggis liegt an ruhiger Lage direkt an der Seepromenade. Eine Oase, geprägt von einem grosszügigen SPA-Bereich und einer exquisiten Gourmetküche.",
      starRating: {
        "@type": "Rating",
        ratingValue: "4"
      },
      checkinTime: "15:00",
      checkoutTime: "11:00",
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Equilibrium Beauty & Spa (900m2)",
          description: "Mit Dampfbad, Saunen, Aussen-Solebad, Floating Tank und Ruheraum mit Himalaya Salzwand."
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Fitnessraum",
          description: "Ausgestattet mit Technogym-Geräten."
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Massagen und Kosmetikbehandlungen"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Kostenloses WLAN"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Gourmetküche"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Elektro-Ladestationen",
          description: "12 Elektro-Ladestationen für E-Fahrzeuge"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Velokeller",
          description: "Sicherer Fahrradparkplatz mit E-Bike Lademöglichkeit"
        }
      ],
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.simplebooking.it/ibe2/hotel/5634",
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/IOSPlatform",
            "https://schema.org/AndroidPlatform"
          ]
        },
        name: "Zimmer buchen"
      }
    },

    rooms: {
      "@type": ["Hotel", "LodgingBusiness"],
      name: "Hotel Rössli Gourmet & Spa - Zimmer",
      url: "https://www.roessli.ch/de/zimmer",
      image: "https://cdn.prod.website-files.com/647603ee27706cf45c087bb6/649c6b8bc0c864a762c76f84_hotelroesslifull.webp",
      description: "Komfortable Hotelzimmer im 4-Sterne-Hotel Rössli in Weggis mit modernen Annehmlichkeiten und herrlichem Seeblick.",
      starRating: {
        "@type": "Rating",
        ratingValue: "4"
      },
      checkinTime: "15:00",
      checkoutTime: "11:00",
      accommodationCategory: "Hotel",
      accommodationFeature: roomTypes,
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.simplebooking.it/ibe2/hotel/5634",
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/IOSPlatform",
            "https://schema.org/AndroidPlatform"
          ]
        },
        name: "Zimmer buchen"
      }
    },

    restaurant: {
      "@type": "Restaurant",
      name: "Equo 1706",
      url: "https://www.roessli.ch/de/restaurant",
      image: "https://cdn.prod.website-files.com/647603ee27706cf45c087bb6/65113ade0678effa4a5e9830_roessli-garten-herbst.jpg",
      servesCuisine: "Innovative Haute Cuisine, Gourmet",
      description: "Innovative Haute Cuisine, die Tradition und Moderne verbindet. Im Hotel Rössli Gourmet & Spa.",
      parentOrganization: {
        "@type": "Hotel",
        name: "Hotel Rössli Gourmet & Spa",
        url: "https://www.roessli.ch/de/hotel",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Seestrasse 52",
          addressLocality: "Weggis",
          postalCode: "6353",
          addressCountry: "CH"
        }
      },
      acceptsReservations: true,
      menu: "https://www.roessli.ch/speisekarte.pdf",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Thursday",
            "Friday", 
            "Saturday",
            "Sunday",
            "Monday"
          ],
          opens: "18:00",
          closes: "23:00",
          description: "Küche bis 21:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Tuesday",
            "Wednesday"
          ],
          description: "Geschlossen"
        }
      ],
      award: [
        "Gault Millau Restaurantführer (gute Bewertung)",
        "Guide Michelin (Empfehlung)"
      ],
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.roessli.ch/de/restaurant#tischreservation",
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/IOSPlatform",
            "https://schema.org/AndroidPlatform"
          ]
        },
        name: "Tisch reservieren"
      }
    },

    spa: {
      "@type": "HealthAndBeautyBusiness",
      name: "Equilibrium Beauty & Spa",
      url: "https://www.roessli.ch/de/wellness-spa",
      image: "https://cdn.prod.website-files.com/647603ee27706cf45c087bb6/spa-image.webp",
      description: "900m² Wellness-Oase mit Dampfbad, Saunen, Aussen-Solebad, Floating Tank und Ruheraum mit Himalaya Salzwand.",
      parentOrganization: {
        "@type": "Hotel",
        name: "Hotel Rössli Gourmet & Spa",
        url: "https://www.roessli.ch/de/hotel",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Seestrasse 52",
          addressLocality: "Weggis",
          postalCode: "6353",
          addressCountry: "CH"
        }
      },
      openingHours: "Mo-Su 10:00-19:30",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          opens: "10:00",
          closes: "19:30"
        }
      ],
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Dampfbad"
        },
        {
          "@type": "LocationFeatureSpecification", 
          name: "Saunen"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Aussen-Solebad",
          description: "Geöffnet von 10:00 bis 18:00 Uhr"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Floating Tank"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Ruheraum mit Himalaya Salzwand"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Fitnessraum",
          description: "Ausgestattet mit Technogym-Geräten, geöffnet bis 19:30"
        }
      ]
    },

    faq: faqData
  },

  en: {
    hotel: {
      "@type": "Hotel",
      name: "Hotel Rössli Gourmet & Spa",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Seestrasse 52",
        addressLocality: "Weggis",
        postalCode: "6353",
        addressCountry: "CH"
      },
      url: "https://www.roessli.ch/en/home",
      image: "https://cdn.prod.website-files.com/647603ee27706cf45c087bb6/649c6b8bc0c864a762c76f84_hotelroesslifull.webp",
      description: "Our wonderful 4-star hotel directly on Lake Lucerne. A place characterized by a diverse spa area and exquisite gourmet cuisine.",
      starRating: {
        "@type": "Rating",
        ratingValue: "4"
      },
      checkinTime: "15:00",
      checkoutTime: "11:00",
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Equilibrium Beauty & Spa (900m2)",
          description: "With steam bath, saunas, outdoor brine bath, floating tank and relaxation room with Himalayan salt wall."
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Fitness room",
          description: "Equipped with Technogym equipment."
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Massages and cosmetic treatments"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Free WiFi"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Gourmet cuisine"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Electric charging stations",
          description: "12 electric charging stations for e-vehicles"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Bicycle storage room",
          description: "Secure bicycle parking with e-bike charging possibility"
        }
      ],
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.simplebooking.it/ibe2/hotel/5634",
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/IOSPlatform",
            "https://schema.org/AndroidPlatform"
          ]
        },
        name: "Book room"
      }
    },

    rooms: {
      "@type": ["Hotel", "LodgingBusiness"],
      name: "Hotel Rössli Gourmet & Spa - Rooms",
      url: "https://www.roessli.ch/en/hotel/rooms",
      image: "https://cdn.prod.website-files.com/647603ee27706cf45c087bb6/649c6b8bc0c864a762c76f84_hotelroesslifull.webp",
      description: "Discover our modern, building biology renovated rooms at the Hotel Rössli Gourmet & SPA. Each room with balcony and exclusive interior.",
      starRating: {
        "@type": "Rating",
        ratingValue: "4"
      },
      checkinTime: "15:00",
      checkoutTime: "11:00",
      accommodationCategory: "Hotel",
      accommodationFeature: roomTypesEN,
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.simplebooking.it/ibe2/hotel/5634",
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/IOSPlatform",
            "https://schema.org/AndroidPlatform"
          ]
        },
        name: "Book room"
      }
    },

    restaurant: {
      "@type": "Restaurant",
      name: "Equo 1706",
      url: "https://www.roessli.ch/en/restaurant",
      image: "https://cdn.prod.website-files.com/647603ee27706cf45c087bb6/65113ade0678effa4a5e9830_roessli-garten-herbst.jpg",
      servesCuisine: "Innovative Haute Cuisine, Gourmet",
      description: "Enjoy creative haute cuisine that skilfully combines tradition and modernity in the gourmet restaurant «Equo 1706» of the Hotel Rössli Gourmet & SPA.",
      parentOrganization: {
        "@type": "Hotel",
        name: "Hotel Rössli Gourmet & Spa",
        url: "https://www.roessli.ch/en/hotel",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Seestrasse 52",
          addressLocality: "Weggis",
          postalCode: "6353",
          addressCountry: "CH"
        }
      },
      acceptsReservations: true,
      menu: "https://www.roessli.ch/speisekarte.pdf",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Thursday",
            "Friday", 
            "Saturday",
            "Sunday",
            "Monday"
          ],
          opens: "18:00",
          closes: "23:00",
          description: "Kitchen open until 21:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Tuesday",
            "Wednesday"
          ],
          description: "Closed"
        }
      ],
      award: [
        "Gault Millau Restaurant Guide (good rating)",
        "Guide Michelin (recommendation)"
      ],
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.roessli.ch/en/restaurant#tischreservation",
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/IOSPlatform",
            "https://schema.org/AndroidPlatform"
          ]
        },
        name: "Reserve table"
      }
    },

    spa: {
      "@type": "HealthAndBeautyBusiness",
      name: "Equilibrium Beauty & Spa",
      url: "https://www.roessli.ch/en/wellness-spa",
      image: "https://cdn.prod.website-files.com/647603ee27706cf45c087bb6/spa-image.webp",
      description: "Experience the 900m2 wellness oasis «Equilibrium» at the Hotel Rössli. Enjoy our spa and gym for your balance and well-being.",
      parentOrganization: {
        "@type": "Hotel",
        name: "Hotel Rössli Gourmet & Spa",
        url: "https://www.roessli.ch/en/hotel",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Seestrasse 52",
          addressLocality: "Weggis",
          postalCode: "6353",
          addressCountry: "CH"
        },
      },
      openingHours: "Mo-Su 10:00-19:30",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          opens: "10:00",
          closes: "19:30"
        }
      ],
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Aroma steam bath"
        },
        {
          "@type": "LocationFeatureSpecification", 
          name: "Finnish sauna & herbal sauna"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Outdoor brine bath",
          description: "Open from 10:00 to 18:00"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Floating tank"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Relaxation room with Himalayan salt wall"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Fitness room",
          description: "Equipped with Technogym equipment, open until 19:30"
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is there information about the arrival and departure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check-in: Rooms are ready from 3:00 PM. Our porters are happy to help you carry your luggage. Contact reception in advance.\nCheck-out: Check-out is at 11:00 AM. Our guests are welcome to enjoy our hotel with the wellness area again after check-out. Subject to availability, there is the possibility of obtaining a late check-out for an additional charge."
          }
        },
        {
          "@type": "Question",
          "name": "Can I store my luggage at the hotel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can deposit your luggage with us after check-out and enjoy the day to the fullest. The reception team will be happy to show you where our luggage room is. Our porters are happy to help you carry your luggage. Contact reception in advance."
          }
        },
        {
          "@type": "Question",
          "name": "How are the rooms equipped?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In your room you will find a flat TV and a minibar. The minibar contains a small selection of complimentary refreshments. Some of our hotel rooms have air conditioning, all other rooms have a ventilation slot behind the curtain and are equipped with a fan. All our hotel rooms have a safe. Valuables can also be stored in the hotel safe at reception.\nThe bathrooms all have a hairdryer as well as shampoo and shower gel."
          }
        },
        {
          "@type": "Question",
          "name": "Can I order my food to my room?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Daily from 7:30 AM to 10:00 PM, the hotel offers room service with a small food selection for a CHF 10 surcharge. Dial 709 on your room phone."
          }
        },
        {
          "@type": "Question",
          "name": "How does the telephone work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To call from room to room, you can directly enter the room number. You can reach the reception by dialing 709."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a baby bed and a changing table in the hotel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Baby beds are provided free of charge on request. A changing table is located on the ground floor in the handicapped-accessible toilet."
          }
        },
        {
          "@type": "Question",
          "name": "Can I have my laundry cleaned at the hotel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Of course, we are happy to take care of your clothing. A form for laundry and ironing service can be found in your wardrobe."
          }
        },
        {
          "@type": "Question",
          "name": "Do I have a selection of pillows and duvets at the hotel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are happy to bring extra pillows, duvets or pillows with different fillings to your room. Ask at reception or the housekeeping team."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any adapters for the electricity outlets in the hotel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adapters for foreign power cables are available at reception for a CHF 20 deposit."
          }
        },
        {
          "@type": "Question",
          "name": "Is there WiFi internet at the hotel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The entire hotel is equipped with wireless internet. You will receive the password at reception. A guest computer is also available on the ground floor by the stairwell."
          }
        },
        {
          "@type": "Question",
          "name": "Where in the hotel can I smoke?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Smoking is permitted on your balcony. Ashtrays are provided accordingly. All other areas are non-smoking."
          }
        },
        {
          "@type": "Question",
          "name": "What are the opening hours of the wellness & fitness area?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Daily from 10:00 AM - 7:30 PM\nFitness area until 7:30 PM\nThe brine bath is open from 10:00 AM to 6:00 PM.\nAccess from 14 years. Please note that our spa facilities and the brine bath are not supervised."
          }
        },
        {
          "@type": "Question",
          "name": "What are the opening hours of the restaurant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our kitchen spoils you Thursday to Monday from 6:00 PM to 11:00 PM. The kitchen closes at 9:30 PM."
          }
        },
        {
          "@type": "Question",
          "name": "When can I have breakfast at the hotel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our varied buffet is set up in the restaurant from 7:30 AM to 10:00 AM (Saturday and Sunday until 11:00 AM). Room service is available on request."
          }
        },
        {
          "@type": "Question",
          "name": "What do I do if there is a fire alarm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Remain calm and follow the instructions of staff and the fire department. Use the marked escape routes without using the lift. If the corridor is not reachable, stay in your room, close doors and windows, and make yourself noticeable at the window. The assembly point is in front of the chapel opposite the main entrance."
          }
        },
        {
          "@type": "Question",
          "name": "What are the most important emergency numbers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reception (room phone): 709\nPolice: 117\nFire department: 118\nAmbulance: 144\nREGA: 1414\nPlease inform reception when directly alerting rescue services."
          }
        },
        {
          "@type": "Question",
          "name": "Are pets allowed in the hotel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dogs are always welcome in our house. When visiting our restaurant or the spa & fitness area, we ask you to leave the dogs in the room. In the canton of Lucerne, dogs must be kept on a leash in forests from April to July."
          }
        },
        {
          "@type": "Question",
          "name": "Can I send mail from the hotel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can drop off your mail at reception; it is collected by the postman at 9:00 AM on weekdays. Postcards and stamps are available at reception."
          }
        },
        {
          "@type": "Question",
          "name": "Reception?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our reception team is available daily from 7:00 AM to 11:00 PM for your requests and questions. Within the hotel, you can reach us by dialing 709."
          }
        },
        {
          "@type": "Question",
          "name": "Room keys?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our room keys are credit card format key cards. Room numbers are not printed on the cards for security reasons."
          }
        },
        {
          "@type": "Question",
          "name": "Lost & found?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Found objects are securely stored. If you are missing any items, please contact reception."
          }
        },
        {
          "@type": "Question",
          "name": "Currency exchange?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The hotel can exchange foreign currencies for Swiss francs at the current daily rate."
          }
        },
        {
          "@type": "Question",
          "name": "Which parking options do I have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A limited number of parking spaces are available in front of the hotel (CHF 6 per day). Reservations are not possible. Additional public parking is available on Seestrasse near the restaurant «HYG» (2-minute walk)."
          }
        },
        {
          "@type": "Question",
          "name": "Can I charge my electric car at Hotel Rössli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our hotel guests have 12 electric charging stations «easee-charge» (for a fee) at their disposal. To charge your e-vehicle, contact reception and ask for a badge.\n\nTechnical specifications: Maximum charging power: 22 kW, AC connector: Type 2, Electrical connection: Three-phase, 32 A"
          }
        },
        {
          "@type": "Question",
          "name": "Can I park my bicycle at Hotel Rössli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hotel guests have access to a dedicated bicycle storage room. E-bikes can be charged there."
          }
        },
        {
          "@type": "Question",
          "name": "What can I experience in the surroundings of Weggis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hiking on the lake promenade or up to the Rigi. Nordic walking poles are available free of charge. The tennis court on Kreuzstrasse can be reserved. Ski lifts are accessible via cable car or cog railway. A Vita Parcours fitness course is located in the «Herrenwald». Reception is happy to provide seasonal tips."
          }
        },
        {
          "@type": "Question",
          "name": "Does the region offer family activities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Playgrounds in Weggis and Rigi Kaltbad. Public barbecue areas with firewood in Weggis, Vitznau and on the Rigi. The cable car from Weggis runs every half hour, the cog railway from Vitznau runs hourly. Bus, Lidobus and ship schedules are available on the information board on the ground floor."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find the nearest pharmacy or drugstore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pharmacies in Küssnacht am Rigi: Holzgang Apotheke AG, +41 41 850 10 45. Amavita Apotheke, +41 58 878 11 10. Drugstore: Drogerie Masiello in Neubühl Center Weggis, +41 41 390 30 63."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the nearest doctor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. med. D. Hug, +41 41 390 24 34. Dr. med. U. Lang, +41 41 390 22 33. Emergency: +41 840 61 61 61."
          }
        },
        {
          "@type": "Question",
          "name": "Is the hotel accessible for disabled people?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The ground floor toilets have wheelchair-accessible facilities. Restaurant visitors also benefit from this. Unfortunately, the rooms and the spa & fitness area are not barrier-free."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the nearest bank / ATM located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Luzerner Kantonalbank ATM is located opposite the boat station near the restaurant Oliv. A Raiffeisenbank ATM is available in the Neubühl Center Weggis. The hotel accepts standard credit cards."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I buy groceries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tschumi Migrospartner and COOP supermarket in the Neubühl Center. Volg shop at Rigistrasse 9, next to the village school square. Opening hours vary by season."
          }
        },
        {
          "@type": "Question",
          "name": "What is the hotel doing for the environment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The hotel uses regional food and reduces unnecessary transport routes and packaging. A power optimization device regulates electricity consumption. Consistent waste separation and environmentally friendly «Eco Plus» cleaning products are used."
          }
        },
        {
          "@type": "Question",
          "name": "Can I drink the tap water?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our tap water in Weggis is of excellent drinking water quality. You are welcome to fill the water carafe in your room directly from the tap."
          }
        }
      ]
    }
  }
};

// Function to generate structured data for a specific page
function generateStructuredData(pageType) {
  const language = getLanguage();
  const pageConfig = languageConfigs[language][pageType];
  
  if (!pageConfig) {
    console.error(`Unknown page type: ${pageType} for language: ${language}`);
    return null;
  }

  // FAQ page doesn't need base config merger
  if (pageType === 'faq') {
    return pageConfig;
  }

  // Merge base config with page-specific config
  const structuredData = { ...baseConfig, ...pageConfig };
  
  return structuredData;
}

// Function to inject structured data into the page
function injectStructuredData(pageType) {
  const structuredData = generateStructuredData(pageType);
  if (!structuredData) return;

  // Remove existing structured data script if it exists
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Create and inject new script tag
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData, null, 2);
  document.head.appendChild(script);
}

// Auto-detect page type based on URL
function detectPageType() {
  const path = window.location.pathname.toLowerCase();
  const url = window.location.href.toLowerCase();
  
  // Restaurant detection (multiple URL patterns)
  if (path.includes('/restaurant') || url.includes('restaurant')) {
    return 'restaurant';
  } 
  // Spa/Wellness detection
  else if (path.includes('/wellness') || path.includes('/spa') || url.includes('wellness') || url.includes('spa')) {
    return 'spa';
  } 
  // Rooms detection
  else if (path.includes('/zimmer') || path.includes('/rooms') || url.includes('zimmer') || url.includes('rooms')) {
    return 'rooms';
  } 
  // FAQ detection
  else if (path.includes('/faq') || url.includes('faq')) {
    return 'faq';
  } 
  // Seminars, contact, about etc. use hotel schema
  else {
    return 'hotel'; // default to hotel for homepage and other pages
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  const pageType = detectPageType();
  const language = getLanguage();
  injectStructuredData(pageType);
  console.log(`Structured data injected for page type: ${pageType} (${language})`);
});

// Manual initialization function for specific pages
function initRoessliStructuredData(pageType) {
  injectStructuredData(pageType);
  const language = getLanguage();
  console.log(`Manually initialized structured data for: ${pageType} (${language})`);
}

// Export for manual use if needed
window.RoessliStructuredData = {
  init: initRoessliStructuredData,
  detect: detectPageType,
  generate: generateStructuredData,
  getLanguage: getLanguage
};