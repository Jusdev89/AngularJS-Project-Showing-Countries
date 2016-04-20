(function() {
  'use strict';

  angular
      .module('eventsApi')
      .service('topCountries', top);

  /** @ngInject */
  function top() {
    var data = [
      {
        'title': 'Egypt',
        'url': 'http://www.egypt.gov.eg/english/home.aspx',
        'description': 'Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs.',
        'logo': 'egypt.svg.png'
      },
      {
        'title': 'Miami',
        'url': 'http://www.miamigov.com/home/',
        'description': 'Miami, at Florida`s southeastern tip, is a vibrant city with Cuban influence..',
        'logo': 'miami.png'
      },
      {
        'title': 'Barbados',
        'url': 'https://www.gov.bb/home/',
        'description': 'Barbados, in the eastern Caribbean, is an independent island nation within the British Commonwealth.',
        'logo': 'barbados.gif'
      },
      {
        'title': 'Canada',
        'url': 'https://www.canada.ca/en.html',
        'description': 'Canada, stretching from the U.S. in the south to the Arctic Circle in the north, is filled with vibrant cities including massive, multicultural Toronto.',
        'logo': 'canada.jpg'
      },
      {
        'title': 'Greece',
        'url': 'http://www.primeminister.gov.gr/english/',
        'description': 'Greece is a country in southeastern Europe consisting of 2 mainland peninsulas and thousands of islands throughout the Aegean and Ionian seas.',
        'logo': 'greece.jpg'
      },
      {
        'title': 'Tibet',
        'url': 'http://tibet.net/',
        'description': 'Tibet is a region on the Tibetan Plateau in Asia. It is the traditional homelanwd of the Tibetan people as well as some other ethnic groups such as Monpa.',
        'logo': 'tibet.jpg'
      }
    ];

    this.getCountries = getCountries;

    function getCountries() {
      return data;
    }
  }

})();
