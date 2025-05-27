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
      "name": "Sind Haustiere im Hotel erlaubt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In unserem Hause sind Hunde jederzeit herzlich willkommen. Bei einem Besuch in unserem Restaurant bitten wir Sie, die Hunde auf dem Zimmer zu lassen. Sollte dies nicht möglich sein, hat die Direktion immer ein freies Plätzchen im Büro."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich beim Hotel Rössli mein elektrisches Auto laden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unseren Hotelgästen stehen 12 Elektro-Ladestationen «easee-charge» (gegen Gebühr) zur Verfügung. Um Ihr E-Fahrzeug aufladen zu können, melden Sie sich an der Rezeption und verlangen einen Badge.\n\nTechnische Angaben: Maximale Ladeleistung: 22 kW, AC Stecker: Typ 2, Elektrischer Anschluss: Dreiphasig, 32 A"
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
        url: "https://www.roessli.ch/de/hotel"
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
        url: "https://www.roessli.ch/de/hotel"
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
        url: "https://www.roessli.ch/en/hotel"
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
        url: "https://www.roessli.ch/en/hotel"
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
          "name": "What are the check-in and check-out times?",
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
            "text": "You can deposit your luggage with us after check-out and enjoy the day to the fullest. The reception team will be happy to show you where our luggage room is. Our porters are happy to help you carry your luggage."
          }
        },
        {
          "@type": "Question",
          "name": "How are the rooms equipped?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In your room you will find a flat TV and a minibar. The minibar contains a small selection of refreshments. Some of our hotel rooms have air conditioning, all other rooms have a ventilation slot behind the curtain and are equipped with a fan. All our hotel rooms have a safe. The bathrooms all have a hairdryer as well as shampoo and shower gel."
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
          "name": "When is the restaurant open?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our kitchen spoils you Thursday to Monday from 6:00 PM to 11:00 PM. The kitchen closes at 9:30 PM."
          }
        },
        {
          "@type": "Question",
          "name": "Are pets allowed in the hotel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dogs are always welcome in our house. When visiting our restaurant, we ask you to leave the dogs in the room. If this is not possible, the management always has a free spot in the office."
          }
        },
        {
          "@type": "Question",
          "name": "Can I charge my electric car at Hotel Rössli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our hotel guests have 12 electric charging stations «easee-charge» (for a fee) at their disposal. To charge your e-vehicle, contact reception and ask for a badge.\n\nTechnical specifications: Maximum charging power: 22 kW, AC connector: Type 2, Electrical connection: Three-phase, 32 A"
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