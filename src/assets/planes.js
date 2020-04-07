const planes = {
  'Citation X': {
    name: 'Citation X',
    entryImage: require(`@/assets/plane/SLT_0826-Bearbeitet.jpg`),
    coverImage: require(`@/assets/plane/citationX.jpg`),
    floorplan: require(`@/assets/plane/floorplan_citationX.png`),
    tourUrl: 'https://jetpano.eu/bairline/hub/tour.html',
    rangeMap: require(`@/assets/maps/map-citationX.gif`),
    specs: {
      height: 'Height: 5.67 ft / 1.73 m',
      width: 'Width: 5.51 ft / 1.68 m',
      length: 'Length: 29.43 ft / 8.97 m',
      range: 'Flight Range: 3.000 nm / 5.556 km'
    },
    facts: {
      passengers: 'Up to 5 passengers',
      luggage: 'Luggage Capactity: 70.63 ft³ / 2 m³',
      manufactured: 'Manufactured 2007',
      speed: 'Cruise Speed: Mach 0.92 / 1000 kph'
    },
    factSheet: '/downloads/CITX Fact Sheet.pdf',
    gallery: [
      require('@/assets/web/SLT_0728-Bearbeitet.jpg'),
      require('@/assets/web/SLT_0731-Bearbeitet.jpg'),
      require('@/assets/web/SLT_0734-Bearbeitet.jpg'),
      require('@/assets/web/SLT_0737-Bearbeitet.jpg'),
      require('@/assets/web/SLT_0740-Bearbeitet.jpg'),
      require('@/assets/web/SLT_0746-Bearbeitet.jpg')
    ]
  },
  'Citation CJ 2': {
    name: 'Citation CJ 2',
    entryImage: require(`@/assets/plane/SLT_0809-Bearbeitet.jpg`),
    floorplan: require(`@/assets/plane/floorplan_citationCJ2.png`),
    tourUrl: 'https://jetpano.eu/bairline/fux/tour.html',
    specs: {
      height: 'Height: 4.75 ft / 1.45 m',
      width: 'Width: 4.83 ft / 1.47 m',
      length: 'Length: 18.5 ft / 5.64 m',
      range: 'Flight Range: 1.300 nm / 2.407 km'
    },
    facts: {
      passengers: 'Up to 6 passengers',
      luggage: 'Luggage Capactity: 70 ft³ / 1.98 m³',
      manufactured: 'Manufactured 2007',
      speed: 'Cruise Speed: Mach 0.72 / 764 kph'
    },
    factSheet: '/downloads/Fact sheet OEFUX.pdf',
    gallery: [
      require('@/assets/plane/DSC_0351.jpeg'),
      require('@/assets/plane/DSC_0352.jpeg'),
      require('@/assets/plane/DSC_0353.jpeg')
    ]
  },
  'Gulfstream 500': {
    name: '',
    entryImage: require(`@/assets/plane/gulfstream500.jpeg`),
    coverImage: require(`@/assets/plane/citationX.jpg`),
    notAvailable: true
  }
}

export default planes
