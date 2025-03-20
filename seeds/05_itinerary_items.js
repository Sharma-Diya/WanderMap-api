// db/seeds/04_itinerary_items.js
export async function seed(knex) {
    // Truncate table
    await knex.raw('TRUNCATE TABLE itinerary_items');
  
    // Get itinerary IDs and city IDs
    const itineraries = await knex('itineraries').select('id', 'name');
    const itineraryMap = new Map(itineraries.map(itinerary => [itinerary.name, itinerary.id]));
  
    const cityItinerariesData = {
      "Toronto": {
        "Summer": [
          { time: "9:00 AM", activity: "Toronto Islands", description: "Take a ferry to enjoy beaches and views." },
          { time: "11:00 AM", activity: "St. Lawrence Market", description: "Explore food stalls and shops." },
          { time: "1:00 PM", activity: "Lunch at a patio in the Distillery District", description: "Enjoy a meal outdoors." },
          { time: "3:00 PM", activity: "Kensington Market", description: "Wander through this eclectic neighborhood." },
          { time: "6:00 PM", activity: "Dinner on Queen Street West", description: "Experience trendy dining." },
          { time: "8:00 PM", activity: "Outdoor concert at Budweiser Stage", description: "Enjoy Toronto's summer entertainment." },
        ],
        "Winter": [
          { time: "9:00 AM", activity: "Hockey Hall of Fame", description: "Explore Canada's hockey history." },
          { time: "11:00 AM", activity: "PATH Underground City", description: "Discover the extensive underground network." },
          { time: "1:00 PM", activity: "Lunch at a cozy restaurant in Yorkville", description: "Warm up with a hearty meal." },
          { time: "3:00 PM", activity: "Royal Ontario Museum", description: "Discover art, culture, and natural history." },
          { time: "6:00 PM", activity: "Dinner in a heated patio in the Entertainment District", description: "Enjoy winter dining." },
          { time: "8:00 PM", activity: "See a show at a theatre", description: "Enjoy Toronto's indoor entertainment." },
        ]
      },
      "Vancouver": {
        "Summer": [
          { time: "9:00 AM", activity: "Stanley Park", description: "Bike or walk the seawall." },
          { time: "11:00 AM", activity: "Granville Island Market", description: "Explore artisan shops and food stalls." },
          { time: "1:00 PM", activity: "Lunch on a patio in Gastown", description: "Dine in Vancouver's historic heart." },
          { time: "3:00 PM", activity: "English Bay Beach", description: "Relax on the beach." },
          { time: "6:00 PM", activity: "Dinner in Yaletown", description: "Enjoy upscale dining." },
          { time: "8:00 PM", activity: "Sunset at English Bay", description: "Relax and enjoy the view." },
        ],
        "Winter": [
          { time: "9:00 AM", activity: "Grouse Mountain", description: "Skiing, snowboarding, or snowshoeing." },
          { time: "1:00 PM", activity: "Lunch at Grouse Mountain Lodge", description: "Warm up with a view." },
          { time: "3:00 PM", activity: "Vancouver Art Gallery", description: "Explore Canadian and international art." },
          { time: "5:00 PM", activity: "Robson Street shopping", description: "Enjoy Vancouver's shopping district." },
          { time: "7:00 PM", activity: "Dinner in a cozy restaurant in Gastown", description: "Enjoy a hearty winter meal." },
          { time: "9:00 PM", activity: "Enjoy a drink at a Gastown pub", description: "Experience Vancouver's nightlife." },
        ]
      },
      "Montreal": {
        "Summer": [
          { time: "9:00 AM", activity: "Old Montreal", description: "Wander the historic cobblestone streets." },
          { time: "11:00 AM", activity: "Notre-Dame Basilica", description: "Visit this stunning architectural gem." },
          { time: "1:00 PM", activity: "Lunch on Saint-Denis Street", description: "Savor French-Canadian cuisine." },
          { time: "3:00 PM", activity: "Mount Royal Park", description: "Enjoy panoramic city views." },
          { time: "6:00 PM", activity: "Dinner in the Plateau Mont-Royal", description: "Experience a vibrant neighborhood." },
          { time: "8:00 PM", activity: "Montreal International Jazz Festival (June/July)", description: "Enjoy world-class music." },
        ],
        "Winter": [
          { time: "9:00 AM", activity: "Montreal Museum of Fine Arts", description: "Explore art collections." },
          { time: "11:00 AM", activity: "Underground City (RESO)", description: "Navigate the extensive underground network." },
          { time: "1:00 PM", activity: "Lunch at a traditional Quebecois restaurant", description: "Savor hearty winter dishes." },
          { time: "3:00 PM", activity: "Espace pour la Vie (Biodome, Botanical Garden)", description: "Explore indoor ecosystems." },
          { time: "6:00 PM", activity: "Dinner in Old Montreal", description: "Enjoy a cozy dinner in a historic setting." },
          { time: "8:00 PM", activity: "Igloofest (Jan/Feb)", description: "Experience Montreal's winter music festival." },
        ]
      },
      "Quebec City": {
        "Summer": [
          { time: "9:00 AM", activity: "Citadelle of Quebec", description: "Explore a historic fortress." },
          { time: "11:00 AM", activity: "Plains of Abraham", description: "Visit a historic battlefield and park." },
          { time: "1:00 PM", activity: "Lunch in Old Quebec", description: "Dine in a charming historic setting." },
          { time: "3:00 PM", activity: "Château Frontenac", description: "Admire the iconic hotel." },
          { time: "6:00 PM", activity: "Dinner in Saint-Jean-Baptiste", description: "Enjoy local flavors." },
          { time: "8:00 PM", activity: "Festival d'été de Québec (July)", description: "Enjoy a major music festival." },
        ],
        "Winter": [
          { time: "9:00 AM", activity: "Musée de la civilisation", description: "Explore Quebec's history and culture." },
          { time: "11:00 AM", activity: "Walk through Old Quebec", description: "Enjoy the winter charm of the historic city." },
          { time: "1:00 PM", activity: "Lunch at a traditional sugar shack", description: "Experience a maple syrup feast." },
          { time: "3:00 PM", activity: "Ice Hotel (Hôtel de Glace)", description: "Visit the unique ice hotel (seasonal)." },
          { time: "6:00 PM", activity: "Dinner in a cozy restaurant in Old Quebec", description: "Savor a winter meal." },
          { time: "8:00 PM", activity: "Quebec Winter Carnival (Carnaval de Québec)", description: "Participate in winter festivities." },
        ]
      },
      "Banff": {
        "Summer": [
          { time: "9:00 AM", activity: "Banff Gondola", description: "Ride up Sulphur Mountain for stunning views." },
          { time: "11:00 AM", activity: "Banff Upper Hot Springs", description: "Relax in natural hot springs." },
          { time: "1:00 PM", activity: "Lunch in Downtown Banff", description: "Enjoy a meal in the heart of Banff." },
          { time: "3:00 PM", activity: "Lake Minnewanka", description: "Take a scenic cruise or hike." },
          { time: "6:00 PM", activity: "Dinner in Banff", description: "Savor Canadian cuisine." },
          { time: "8:00 PM", activity: "Stroll Banff Avenue", description: "Explore shops and nightlife." },
        ],
        "Winter": [
          { time: "9:00 AM", activity: "Skiing at Lake Louise Ski Resort", description: "Enjoy world-class skiing." },
          { time: "1:00 PM", activity: "Lunch at a ski lodge", description: "Warm up with a slopeside meal." },
          { time: "3:00 PM", activity: "Ice skating on Lake Louise", description: "Enjoy a scenic skate." },
          { time: "6:00 PM", activity: "Dinner in Banff", description: "Savor après-ski dining." },
          { time: "8:00 PM", activity: "Relax by a fireplace in a Banff lodge", description: "Enjoy the cozy winter atmosphere." },
        ]
      },
      "Victoria": {
        "Summer": [
          { time: "9:00 AM", activity: "Butchart Gardens", description: "Explore stunning floral displays." },
          { time: "12:00 PM", activity: "Lunch in Downtown Victoria", description: "Enjoy a meal in the city center." },
          { time: "2:00 PM", activity: "Kayaking in the Inner Harbour", description: "Explore the waterfront." },
          { time: "4:00 PM", activity: "British Columbia Parliament Buildings", description: "Tour the impressive buildings." },
          { time: "6:00 PM", activity: "Dinner on the Inner Harbour", description: "Dine with waterfront views." },
          { time: "8:00 PM", activity: "Stroll the Inner Harbour", description: "Enjoy the lively atmosphere." },
        ],
        "Winter": [
          { time: "10:00 AM", activity: "Royal BC Museum", description: "Discover BC's history and culture." },
          { time: "12:00 PM", activity: "Lunch in a cozy cafe", description: "Warm up with a delicious lunch." },
          { time: "2:00 PM", activity: "Afternoon Tea at the Empress Hotel", description: "Experience a classic Victoria tradition." },
          { time: "4:00 PM", activity: "Explore Bastion Square", description: "Discover Victoria's historic past." },
          { time: "6:00 PM", activity: "Dinner in a waterfront restaurant", description: "Enjoy the winter views." },
          { time: "8:00 PM", activity: "Enjoy live music at a local pub", description: "Experience Victoria's nightlife." },
        ]
      },
      "Calgary": {
        "Summer": [
          { time: "9:00 AM", activity: "Calgary Tower", description: "Get a bird's-eye view of the city." },
          { time: "11:00 AM", activity: "Heritage Park Historical Village", description: "Step back in time at this living history museum." },
          { time: "1:00 PM", activity: "Lunch in Inglewood", description: "Enjoy a meal in Calgary's oldest neighbourhood." },
          { time: "3:00 PM", activity: "Explore Prince's Island Park", description: "Enjoy a walk in the park." },
          { time: "6:00 PM", activity: "Dinner in Stephen Avenue Walk", description: "Dine on a pedestrian-friendly street." },
          { time: "8:00 PM", activity: "Calgary Stampede (July)", description: "Experience the Greatest Outdoor Show on Earth." },
        ],
        "Winter": [
          { time: "9:00 AM", activity: "Canada Olympic Park (WinSport)", description: "Enjoy skiing, snowboarding, or tubing." },
          { time: "1:00 PM", activity: "Lunch at a ski lodge", description: "Warm up with a hearty meal." },
          { time: "3:00 PM", activity: "Glenbow Museum", description: "Explore Western Canadian history and culture." },
          { time: "5:00 PM", activity: "Stephen Avenue Walk shopping", description: "Enjoy Calgary's shopping district." },
          { time: "7:00 PM", activity: "Dinner in a cozy restaurant in Kensington", description: "Enjoy a winter meal." },
          { time: "9:00 PM", activity: "Catch a show at the Arts Commons", description: "Experience Calgary's arts scene." },
        ]
      },
      "Ottawa": {
        "Summer": [
          { time: "9:00 AM", activity: "Parliament Hill", description: "Witness the Changing of the Guard (seasonal) and tour the Parliament Buildings." },
          { time: "12:00 PM", activity: "Lunch in the ByWard Market", description: "Explore the vibrant market and enjoy lunch." },
          { time: "2:00 PM", activity: "Rideau Canal boat tour", description: "Enjoy a scenic tour." },
          { time: "4:00 PM", activity: "National Gallery of Canada", description: "Admire Canadian and international art." },
          { time: "6:00 PM", activity: "Dinner in Little Italy", description: "Enjoy authentic Italian cuisine." },
          { time: "8:00 PM", activity: "Enjoy a sunset walk along the Ottawa River", description: "Take in the beautiful scenery." },
        ],
        "Winter": [
          { time: "9:00 AM", activity: "Canadian War Museum", description: "Discover Canada's military history." },
          { time: "11:00 AM", activity: "Rideau Canal Skateway", description: "Skate on the world's largest skating rink." },
          { time: "1:00 PM", activity: "Lunch at the Fairmont Château Laurier", description: "Enjoy a luxurious lunch." },
          { time: "3:00 PM", activity: "ByWard Market", description: "Explore the shops and restaurants." },
          { time: "6:00 PM", activity: "Dinner in the Glebe", description: "Dine in a charming neighborhood." },
          { time: "8:00 PM", activity: "See a show at the National Arts Centre", description: "Enjoy performing arts." },
        ]
      },
      "Halifax": {
        "Summer": [
          { time: "9:00 AM", activity: "Halifax Citadel National Historic Site", description: "Explore the star-shaped fort." },
          { time: "11:00 AM", activity: "Halifax Public Gardens", description: "Wander through Victorian-era gardens." },
          { time: "1:00 PM", activity: "Lunch on the Waterfront Boardwalk", description: "Enjoy fresh seafood with harbor views." },
          { time: "3:00 PM", activity: "Harbour Hopper Tour", description: "See Halifax by land and sea." },
          { time: "6:00 PM", activity: "Dinner in the North End", description: "Experience Halifax's diverse culinary scene." },
          { time: "8:00 PM", activity: "Enjoy live music on the Halifax Waterfront", description: "Experience Halifax's summer vibe." },
        ],
        "Winter": [
          { time: "10:00 AM", activity: "Maritime Museum of the Atlantic", description: "Discover the region's maritime history." },
          { time: "12:00 PM", activity: "Lunch in a cozy pub", description: "Warm up with pub fare." },
          { time: "2:00 PM", activity: "Art Gallery of Nova Scotia", description: "Explore Nova Scotian and Canadian art." },
          { time: "4:00 PM", activity: "Shopping in Spring Garden Road", description: "Enjoy Halifax's shopping district." },
          { time: "6:00 PM", activity: "Dinner in a historic restaurant", description: "Savor a meal with ambiance." },
          { time: "8:00 PM", activity: "Enjoy a performance at Neptune Theatre", description: "Experience Halifax's cultural scene." },
        ]
      },
      "St. John's": {
        "Summer": [
          { time: "9:00 AM", activity: "Signal Hill", description: "Visit the historic site and enjoy panoramic views." },
          { time: "11:00 AM", activity: "The Rooms", description: "Explore Newfoundland and Labrador's art, culture, and history." },
          { time: "1:00 PM", activity: "Lunch on Duckworth Street", description: "Dine in a colorful and historic area." },
          { time: "3:00 PM", activity: "Jellybean Row", description: "Stroll past the iconic colorful houses." },
          { time: "5:00 PM", activity: "Boat tour to see whales and puffins", description: "Experience Newfoundland's marine life." },
          { time: "7:00 PM", activity: "Dinner on George Street", description: "Enjoy traditional Newfoundland cuisine and lively pubs." },
        ],
        "Winter": [
          { time: "10:00 AM", activity: "Johnson Geo Centre", description: "Explore the Earth's history and technology." },
          { time: "12:00 PM", activity: "Lunch in a traditional diner", description: "Enjoy a classic Newfoundland meal." },
          { time: "2:00 PM", activity: "Newfoundland and Labrador Museum", description: "Learn about the province's heritage." },
          { time: "4:00 PM", activity: "Explore local craft shops", description: "Find unique souvenirs." },
          { time: "6:00 PM", activity: "Dinner with a view of the harbour", description: "Enjoy the winter scenery." },
          { time: "8:00 PM", activity: "Enjoy live music at a traditional pub on George Street", description: "Experience Newfoundland's music scene." },
        ]
      }
    };
  
    // const itineraries = await knex('itineraries').select('id', 'name');
    // const itineraryMap = new Map(itineraries.map(itinerary => [itinerary.name, itinerary.id]));
  
  
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
          });
        }
      }
    }
  }
  