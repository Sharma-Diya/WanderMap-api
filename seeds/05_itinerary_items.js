export async function seed(knex) {
  await knex.raw('TRUNCATE TABLE itinerary_items');

  const itineraries = await knex('itineraries').select('id', 'name');
  const itineraryMap = new Map(itineraries.map(itinerary => [itinerary.name, itinerary.id]));

  const cityItinerariesData = {
    "Toronto": {
      "Summer": [
        { time: "9:00 AM", activity: "Toronto Islands", description: "Take a ferry to enjoy beaches and views.", latitude: 43.6215, longitude: -79.37889 },
        { time: "11:00 AM", activity: "St. Lawrence Market", description: "Explore food stalls and shops.", latitude: 43.6500, longitude: -79.3733 },
        { time: "1:00 PM", activity: "Lunch at a patio in the Distillery District", description: "Enjoy a meal outdoors.", latitude: 43.6517, longitude: - 79.3591 },
        { time: "3:00 PM", activity: "Kensington Market", description: "Wander through this eclectic neighborhood.", latitude: 43.6568, longitude: - 79.4005 },
        { time: "6:00 PM", activity: "Dinner on Queen Street West", description: "Experience trendy dining.", latitude: 43.6485, longitude: - 79.3973 },
        { time: "8:00 PM", activity: "Outdoor concert at Budweiser Stage", description: "Enjoy Toronto's summer entertainment.", latitude: 43.6277, longitude: - 79.4194 }
      ],
      "Winter": [
        { time: "9:00 AM", activity: "Hockey Hall of Fame", description: "Explore Canada's hockey history.", latitude: 43.6435, longitude: - 79.3785 },
        { time: "11:00 AM", activity: "PATH Underground City", description: "Discover the extensive underground network.", latitude: 43.6490, longitude: -79.3805 },
        { time: "1:00 PM", activity: "Lunch at a cozy restaurant in Yorkville", description: "Warm up with a hearty meal.", latitude: 43.6707, longitude: -79.3940 },
        { time: "3:00 PM", activity: "Royal Ontario Museum", description: "Discover art, culture, and natural history.", latitude: 43.6677, longitude: -79.3948 },
        { time: "6:00 PM", activity: "Dinner in a heated patio in the Entertainment District", description: "Enjoy winter dining.", latitude: 43.6465, longitude: -79.3891 },
        { time: "8:00 PM", activity: "See a show at a theatre", description: "Enjoy Toronto's indoor entertainment.", latitude: 43.6532, longitude: -79.3805 },
      ]
    },
    "Vancouver": {
      "Summer": [
        { time: "9:00 AM", activity: "Stanley Park", description: "Bike or walk the seawall.", latitude: 49.3043, longitude: -123.1440 },
        { time: "11:00 AM", activity: "Granville Island Market", description: "Explore artisan shops and food stalls.", latitude: 49.2717, longitude: -123.1349 },
        { time: "1:00 PM", activity: "Lunch on a patio in Gastown", description: "Dine in Vancouver's historic heart.", latitude: 49.2820, longitude: -123.1063 },
        { time: "3:00 PM", activity: "English Bay Beach", description: "Relax on the beach.", latitude: 49.2850, longitude: -123.1390 },
        { time: "6:00 PM", activity: "Dinner in Yaletown", description: "Enjoy upscale dining.", latitude: 49.2730, longitude: 123.1210 },
        { time: "8:00 PM", activity: "Sunset at English Bay", description: "Relax and enjoy the view.", latitude: 49.2850, longitude: 123.1390 },
      ],
      "Winter": [
        { time: "9:00 AM", activity: "Grouse Mountain", description: "Skiing, snowboarding, or snowshoeing.", latitude: 49.4108, longitude: -123.0760 },
        { time: "1:00 PM", activity: "Lunch at Grouse Mountain Lodge", description: "Warm up with a view.", latitude: 49.4103, longitude: -123.0735 },
        { time: "3:00 PM", activity: "Vancouver Art Gallery", description: "Explore Canadian and international art.", latitude: 49.4103, longitude: -123.0735 },
        { time: "5:00 PM", activity: "Robson Street shopping", description: "Enjoy Vancouver's shopping district.", latitude: 49.2777, longitude: -123.1139 },
        { time: "7:00 PM", activity: "Dinner in a cozy restaurant in Gastown", description: "Enjoy a hearty winter meal.", latitude: 49.2835, longitude: -123.1040 },
        { time: "9:00 PM", activity: "Enjoy a drink at a Gastown pub", description: "Experience Vancouver's nightlife.", latitude: 49.28371, longitude: -123.10624 },
      ]
    },
    "Montreal": {
      "Summer": [
        { time: "9:00 AM", activity: "Old Montreal", description: "Wander the historic cobblestone streets.", latitude: 45.5088, longitude: -73.5540 },
        { time: "11:00 AM", activity: "Notre-Dame Basilica", description: "Visit this stunning architectural gem.", latitude: 45.5085, longitude: -73.5542 },
        { time: "1:00 PM", activity: "Lunch on Saint-Denis Street", description: "Savor French-Canadian cuisine.", latitude: 45.5230, longitude: -73.5613 },
        { time: "3:00 PM", activity: "Mount Royal Park", description: "Enjoy panoramic city views.", latitude: 45.5017, longitude: -73.5779 },
        { time: "6:00 PM", activity: "Dinner in the Plateau Mont-Royal", description: "Experience a vibrant neighborhood.", latitude: 45.5290, longitude: -73.5930 },
        { time: "8:00 PM", activity: "Montreal International Jazz Festival (June/July)", description: "Enjoy world-class music.", latitude: 45.4963, longitude: -73.5775 },
      ],
      "Winter": [
        { time: "9:00 AM", activity: "Montreal Museum of Fine Arts", description: "Explore art collections.", latitude: 45.4963, longitude: -73.5775 },
        { time: "11:00 AM", activity: "Underground City (RESO)", description: "Navigate the extensive underground network.", latitude: 45.4972, longitude: -73.5785 },
        { time: "1:00 PM", activity: "Lunch at a traditional Quebecois restaurant", description: "Savor hearty winter dishes.", latitude: 45.5219905, longitude: -73.5745007 },
        { time: "3:00 PM", activity: "Espace pour la Vie (Biodome, Botanical Garden)", description: "Explore indoor ecosystems.", latitude: 45.560337, longitude: -73.563538 },
        { time: "6:00 PM", activity: "Dinner in Old Montreal", description: "Enjoy a cozy dinner in a historic setting.", latitude: 45.5078, longitude: -73.5580 },
        { time: "8:00 PM", activity: "Igloofest (Jan/Feb)", description: "Experience Montreal's winter music festival.", latitude: 45.5017, longitude: -73.5540 },
      ]
    },
    "Quebec City": {
      "Summer": [
        { time: "9:00 AM", activity: "Citadelle of Quebec", description: "Explore a historic fortress.", latitude: 46.8139, longitude: -71.2048 },
        { time: "11:00 AM", activity: "Plains of Abraham", description: "Visit a historic battlefield and park.", latitude: 46.8140, longitude: -71.2082 },
        { time: "1:00 PM", activity: "Lunch in Old Quebec", description: "Dine in a charming historic setting.", latitude: 46.8139, longitude: -71.2050 },
        { time: "3:00 PM", activity: "Château Frontenac", description: "Admire the iconic hotel.", latitude: 46.8110, longitude: -731.2082 },
        { time: "6:00 PM", activity: "Dinner in Saint-Jean-Baptiste", description: "Enjoy local flavors.", latitude: 46.8107, longitude: -71.2119 },
        { time: "8:00 PM", activity: "Festival d'été de Québec (July)", description: "Enjoy a major music festival.", latitude: 46.8144, longitude: -71.2078 },
      ],
      "Winter": [
        { time: "9:00 AM", activity: "Musée de la civilisation", description: "Explore Quebec's history and culture.", latitude: 46.8133, longitude: -71.2050 },
        { time: "11:00 AM", activity: "Walk through Old Quebec", description: "Enjoy the winter charm of the historic city.", latitude: 46.8139, longitude: -71.2050 },
        { time: "1:00 PM", activity: "Lunch at a traditional sugar shack", description: "Experience a maple syrup feast.", latitude: 46.9739, longitude: -71.4644 },
        { time: "3:00 PM", activity: "Ice Hotel (Hôtel de Glace)", description: "Visit the unique ice hotel (seasonal).", latitude: 46.9950, longitude: -71.4292 },
        { time: "6:00 PM", activity: "Dinner in a cozy restaurant in Old Quebec", description: "Savor a winter meal.", latitude: 46.8140, longitude: -71.2063 },
        { time: "8:00 PM", activity: "Quebec Winter Carnival (Carnaval de Québec)", description: "Participate in winter festivities.", latitude: 46.8140, longitude: -71.2082 },
      ]
    },
    "Banff": {
      "Summer": [
        { time: "9:00 AM", activity: "Banff Gondola", description: "Ride up Sulphur Mountain for stunning views.", latitude: 51.1789, longitude: -115.5720 },
        { time: "11:00 AM", activity: "Banff Upper Hot Springs", description: "Relax in natural hot springs.", latitude: 51.1672, longitude: -115.7815 },
        { time: "1:00 PM", activity: "Lunch in Downtown Banff", description: "Enjoy a meal in the heart of Banff.", latitude: 51.1784, longitude: -115.5707 },
        { time: "3:00 PM", activity: "Lake Minnewanka", description: "Take a scenic cruise or hike.", latitude: 51.2340, longitude: -115.4935 },
        { time: "6:00 PM", activity: "Dinner in Banff", description: "Savor Canadian cuisine.", latitude: 51.1784, longitude: -115.5708 },
        { time: "8:00 PM", activity: "Stroll Banff Avenue", description: "Explore shops and nightlife.", latitude: 51.1784, longitude: -115.5707 },
      ],
      "Winter": [
        { time: "9:00 AM", activity: "Skiing at Lake Louise Ski Resort", description: "Enjoy world-class skiing.", latitude: 51.4170, longitude: -116.1861 },
        { time: "1:00 PM", activity: "Lunch at a ski lodge", description: "Warm up with a slopeside meal.", latitude: 51.4196, longitude: -116.1789 },
        { time: "3:00 PM", activity: "Ice skating on Lake Louise", description: "Enjoy a scenic skate.", latitude: 51.4140, longitude: -116.1772 },
        { time: "6:00 PM", activity: "Dinner in Banff", description: "Savor après-ski dining.", latitude: 51.1784, longitude: -115.5704 },
        { time: "8:00 PM", activity: "Relax by a fireplace in a Banff lodge", description: "Enjoy the cozy winter atmosphere.", latitude: 51.1784, longitude: -115.5704 },
      ]
    },
    "Victoria": {
      "Summer": [
        { time: "9:00 AM", activity: "Butchart Gardens", description: "Explore stunning floral displays.", latitude: 48.5650, longitude: -123.2539 },
        { time: "12:00 PM", activity: "Lunch in Downtown Victoria", description: "Enjoy a meal in the city center.", latitude: 48.4246, longitude: -123.3656 },
        { time: "2:00 PM", activity: "Kayaking in the Inner Harbour", description: "Explore the waterfront.", latitude: 48.4275, longitude: -123.3650 },
        { time: "4:00 PM", activity: "British Columbia Parliament Buildings", description: "Tour the impressive buildings.", latitude: 48.4210, longitude: -123.3656 },
        { time: "6:00 PM", activity: "Dinner on the Inner Harbour", description: "Dine with waterfront views.", latitude: 48.4275, longitude: -123.3650 },
        { time: "8:00 PM", activity: "Stroll the Inner Harbour", description: "Enjoy the lively atmosphere.", latitude: 48.4275, longitude: -123.3650 },
      ],
      "Winter": [
        { time: "10:00 AM", activity: "Royal BC Museum", description: "Discover BC's history and culture.", latitude: 48.4238, longitude: -123.3657 },
        { time: "12:00 PM", activity: "Lunch in a cozy cafe", description: "Warm up with a delicious lunch.", latitude: 48.4284, longitude: -123.3656 },
        { time: "2:00 PM", activity: "Afternoon Tea at the Empress Hotel", description: "Experience a classic Victoria tradition.", latitude: 48.4275, longitude: -123.3651 },
        { time: "4:00 PM", activity: "Explore Bastion Square", description: "Discover Victoria's historic past.", latitude: 48.4236, longitude: -123.3650 },
        { time: "6:00 PM", activity: "Dinner in a waterfront restaurant", description: "Enjoy the winter views.", latitude: 48.4263, longitude: -123.3702 },
        { time: "8:00 PM", activity: "Enjoy live music at a local pub", description: "Experience Victoria's nightlife.", latitude: 48.4262, longitude: -123.3680 },
      ]
    },
    "Calgary": {
      "Summer": [
        { time: "9:00 AM", activity: "Calgary Tower", description: "Get a bird's-eye view of the city.", latitude: 51.0447, longitude: -114.0620 },
        { time: "11:00 AM", activity: "Heritage Park Historical Village", description: "Step back in time at this living history museum.", latitude: 51.0385, longitude: -114.1376 },
        { time: "1:00 PM", activity: "Lunch in Inglewood", description: "Enjoy a meal in Calgary's oldest neighbourhood.", latitude: 51.0453, longitude: -114.0627 },
        { time: "3:00 PM", activity: "Explore Prince's Island Park", description: "Enjoy a walk in the park.", latitude: 51.0504, longitude: -114.0693 },
        { time: "6:00 PM", activity: "Dinner in Stephen Avenue Walk", description: "Dine on a pedestrian-friendly street.", latitude: 51.0444, longitude: -114.0631 },
        { time: "8:00 PM", activity: "Calgary Stampede (July)", description: "Experience the Greatest Outdoor Show on Earth.", latitude: 51.0447, longitude: -114.0719 },
      ],
      "Winter": [
        { time: "9:00 AM", activity: "Canada Olympic Park (WinSport)", description: "Enjoy skiing, snowboarding, or tubing.", latitude: 51.0784, longitude: -114.0719 },
        { time: "1:00 PM", activity: "Lunch at a ski lodge", description: "Warm up with a hearty meal.", latitude: 51.0784, longitude: -114.1986 },
        { time: "3:00 PM", activity: "Glenbow Museum", description: "Explore Western Canadian history and culture.", latitude: 51.0450, longitude: -114.0628 },
        { time: "5:00 PM", activity: "Stephen Avenue Walk shopping", description: "Enjoy Calgary's shopping district.", latitude: 51.0456, longitude: -114.0635 },
        { time: "7:00 PM", activity: "Dinner in a cozy restaurant in Kensington", description: "Enjoy a winter meal.", latitude: 51.0511, longitude: -114.0872 },
        { time: "9:00 PM", activity: "Catch a show at the Arts Commons", description: "Experience Calgary's arts scene.", latitude: 51.0453, longitude: -114.0625 },
      ]
    },
    "Ottawa": {
      "Summer": [
        { time: "9:00 AM", activity: "Parliament Hill", description: "Witness the Changing of the Guard (seasonal) and tour the Parliament Buildings.", latitude: 45.4264, longitude: -75.7000 },
        { time: "12:00 PM", activity: "Lunch in the ByWard Market", description: "Explore the vibrant market and enjoy lunch.", latitude: 45.4271, longitude: -75.6990 },
        { time: "2:00 PM", activity: "Rideau Canal boat tour", description: "Enjoy a scenic tour.", latitude: 45.4215, longitude: -75.6980 },
        { time: "4:00 PM", activity: "National Gallery of Canada", description: "Admire Canadian and international art.", latitude: 45.4290, longitude: -75.7102},
        { time: "6:00 PM", activity: "Dinner in Little Italy", description: "Enjoy authentic Italian cuisine.", latitude: 45.4047, longitude: -75.7116 },
        { time: "8:00 PM", activity: "Enjoy a sunset walk along the Ottawa River", description: "Take in the beautiful scenery.", latitude: 45.4215, longitude: -75.6972},
      ],
      "Winter": [
        { time: "9:00 AM", activity: "Canadian War Museum", description: "Discover Canada's military history.", latitude: 45.3964, longitude: -75.7000 },
        { time: "11:00 AM", activity: "Rideau Canal Skateway", description: "Skate on the world's largest skating rink.", latitude: 45.4210, longitude: -75.6990 },
        { time: "1:00 PM", activity: "Lunch at the Fairmont Château Laurier", description: "Enjoy a luxurious lunch.", latitude: 45.4260, longitude: -75.7004 },
        { time: "3:00 PM", activity: "ByWard Market", description: "Explore the shops and restaurants.", latitude: 45.4280, longitude: -75.6950 },
        { time: "6:00 PM", activity: "Dinner in the Glebe", description: "Dine in a charming neighborhood.", latitude: 45.4014, longitude: -75.6884 },
        { time: "8:00 PM", activity: "See a show at the National Arts Centre", description: "Enjoy performing arts.", latitude: 45.4236, longitude: -75.6994 },
      ]
    },
    "Halifax": {
      "Summer": [
        { time: "9:00 AM", activity: "Halifax Citadel National Historic Site", description: "Explore the star-shaped fort.", latitude: 44.6486, longitude: -63.5761 },
        { time: "11:00 AM", activity: "Halifax Public Gardens", description: "Wander through Victorian-era gardens.", latitude: 44.6425, longitude: -63.5541 },
        { time: "1:00 PM", activity: "Lunch on the Waterfront Boardwalk", description: "Enjoy fresh seafood with harbor views.", latitude: 44.6400, longitude: -63.5720 },
        { time: "3:00 PM", activity: "Harbour Hopper Tour", description: "See Halifax by land and sea.", latitude: 44.6446, longitude: -63.5734},
        { time: "6:00 PM", activity: "Dinner in the North End", description: "Experience Halifax's diverse culinary scene.", latitude: 44.6591, longitude: -63.5958 },
        { time: "8:00 PM", activity: "Enjoy live music on the Halifax Waterfront", description: "Experience Halifax's summer vibe.", latitude: 44.6415, longitude: -63.5723 },
      ],
      "Winter": [
        { time: "10:00 AM", activity: "Maritime Museum of the Atlantic", description: "Discover the region's maritime history.", latitude: 44.6415, longitude: -63.5748 },
        { time: "12:00 PM", activity: "Lunch in a cozy pub", description: "Warm up with pub fare.", latitude: 44.6488, longitude: -63.5752 },
        { time: "2:00 PM", activity: "Art Gallery of Nova Scotia", description: "Explore Nova Scotian and Canadian art.", latitude: 44.6411, longitude: -63.5744 },
        { time: "4:00 PM", activity: "Shopping in Spring Garden Road", description: "Enjoy Halifax's shopping district.", latitude: 44.6442, longitude: -63.5850 },
        { time: "6:00 PM", activity: "Dinner in a historic restaurant", description: "Savor a meal with ambiance.", latitude: 44.6429, longitude: -63.5850 },
        { time: "8:00 PM", activity: "Enjoy a performance at Neptune Theatre", description: "Experience Halifax's cultural scene.", latitude: 44.6423, longitude: -63.5747 },
      ]
    },
    "St. John's": {
      "Summer": [
        { time: "9:00 AM", activity: "Signal Hill", description: "Visit the historic site and enjoy panoramic views.", latitude: 47.5701, longitude: -52.6820},
        { time: "11:00 AM", activity: "The Rooms", description: "Explore Newfoundland and Labrador's art, culture, and history.", latitude: 47.5661, longitude: -52.7120},
        { time: "1:00 PM", activity: "Lunch on Duckworth Street", description: "Dine in a colorful and historic area.", latitude: 47.565, longitude: -52.707},
        { time: "3:00 PM", activity: "Jellybean Row", description: "Stroll past the iconic colorful houses.", latitude: 47.5668, longitude: -52.7074},
        { time: "5:00 PM", activity: "Boat tour to see whales and puffins", description: "Experience Newfoundland's marine life.", latitude: 47.5615, longitude: -52.7126},
        { time: "7:00 PM", activity: "Dinner on George Street", description: "Enjoy traditional Newfoundland cuisine and lively pubs.", latitude: 47.5617361, longitude: -52.7108028},
      ],
      "Winter": [
        { time: "10:00 AM", activity: "Johnson Geo Centre", description: "Explore the Earth's history and technology.", latitude: 47.5630, longitude: -52.7106},
        { time: "12:00 PM", activity: "Lunch in a traditional diner", description: "Enjoy a classic Newfoundland meal.", latitude: 47.5615, longitude: -52.7126},
        { time: "2:00 PM", activity: "Newfoundland and Labrador Museum", description: "Learn about the province's heritage.", latitude: 47.5615, longitude: -52.7110},
        { time: "4:00 PM", activity: "Explore local craft shops", description: "Find unique souvenirs.", latitude: 47.5615, longitude: -52.7126},
        { time: "6:00 PM", activity: "Dinner with a view of the harbour", description: "Enjoy the winter scenery.", latitude: 47.5615, longitude: -52.7126},
        { time: "8:00 PM", activity: "Enjoy live music at a traditional pub on George Street", description: "Experience Newfoundland's music scene.", latitude: 47.5615, longitude: -52.7126},
      ]
    }
  };

  for (const cityName in cityItinerariesData) {
    const seasons = cityItinerariesData[cityName];
    for (const season in seasons) {
      const seasonItineraryItems = seasons[season];
      const itineraryName = `${cityName} ${season} Itinerary`;
      const itineraryId = itineraryMap.get(itineraryName);

      if (!itineraryId) {
        console.warn(`Itinerary not found: ${itineraryName}. Skipping itinerary items for this itinerary.`);
        continue;
      }
      let order = 1;
      for (const item of seasonItineraryItems) {
        await knex('itinerary_items').insert({
          itinerary_id: itineraryId,
          time: item.time,
          activity: item.activity,
          description: item.description,
          order: order++,
          latitude: item.latitude,   
          longitude: item.longitude, 
        });
      }
    }
  }
}
