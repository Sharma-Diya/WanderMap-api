export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('images').del();

  const toronto = await knex('cities').where('name', 'Toronto').first();
  const vancouver = await knex('cities').where('name', 'Vancouver').first();
  const montreal = await knex('cities').where('name', 'Montreal').first();
  const calgary = await knex('cities').where('name', 'Calgary').first();
  const ottawa = await knex('cities').where('name', 'Ottawa').first();
  const quebecCity = await knex('cities').where('name', 'Quebec City').first();
  const banff = await knex('cities').where('name', 'Banff').first();
  const victoria = await knex('cities').where('name', 'Victoria').first();
  const halifax = await knex('cities').where('name', 'Halifax').first();
  const stJohns = await knex('cities').where('name', "St. John's").first();

  // Fetch attraction IDs
  const cnTower = await knex('attractions').where('name', 'CN Tower').first();
  const rom = await knex('attractions').where('name', 'Royal Ontario Museum').first();
  const distilleryDistrict = await knex('attractions').where('name', 'Distillery District').first();
  const stanleyPark = await knex('attractions').where('name', 'Stanley Park').first();
  const granvilleIsland = await knex('attractions').where('name', 'Granville Island').first();
  const capilanoBridge = await knex('attractions').where('name', 'Capilano Suspension Bridge').first();
  const notreDameBasilica = await knex('attractions').where('name', 'Notre-Dame Basilica').first();
  const mountRoyalPark = await knex('attractions').where('name', 'Mount Royal Park').first();
  const oldMontreal = await knex('attractions').where('name', 'Old Montreal').first();
  const calgaryTower = await knex('attractions').where('name', 'Calgary Tower').first();
  const calgaryZoo = await knex('attractions').where('name', 'Calgary Zoo').first();
  const heritagePark = await knex('attractions').where('name', 'Heritage Park Historical Village').first();
  const parliamentHill = await knex('attractions').where('name', 'Parliament Hill').first();
  const canadianWarMuseum = await knex('attractions').where('name', 'Canadian War Museum').first();
  const nationalGallery = await knex('attractions').where('name', 'National Gallery of Canada').first();
  const chateauFrontenac = await knex('attractions').where('name', 'Château Frontenac').first();
  const oldQuebec = await knex('attractions').where('name', 'Old Quebec (Vieux-Québec)').first();
  const plainsOfAbraham = await knex('attractions').where('name', 'Plains of Abraham').first();
  const lakeLouise = await knex('attractions').where('name', 'Lake Louise').first();
  const banffNationalPark = await knex('attractions').where('name', 'Banff National Park').first();
  const moraineLake = await knex('attractions').where('name', 'Moraine Lake').first();
  const butchartGardens = await knex('attractions').where('name', 'Butchart Gardens').first();
  const bcParliament = await knex('attractions').where('name', 'British Columbia Parliament Buildings').first();
  const royalBcMuseum = await knex('attractions').where('name', 'Royal BC Museum').first();
  const halifaxCitadel = await knex('attractions').where('name', 'Halifax Citadel National Historic Site').first();
  const peggysCove = await knex('attractions').where('name', 'Peggy\'s Cove').first();
  const waterfrontBoardwalk = await knex('attractions').where('name', 'Waterfront Boardwalk').first();
  const signalHill = await knex('attractions').where('name', 'Signal Hill').first();
  const jellybeanRow = await knex('attractions').where('name', 'Jellybean Row').first();
  const capeSpear = await knex('attractions').where('name', 'Cape Spear').first();

  // Inserts seed entries with direct references using IDs
  await knex('images').insert([
    // City images
    {
      url: '/images/city/toronto.jpg',
      alt_text: 'Toronto skyline with CN Tower',
      imageable_type: 'city',
      imageable_id: toronto.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/city/vancouver.jpg',
      alt_text: 'Vancouver skyline with mountains in background',
      imageable_type: 'city',
      imageable_id: vancouver.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/city/montreal.jpg',
      alt_text: 'Historic architecture in Montreal',
      imageable_type: 'city',
      imageable_id: montreal.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/city/calgary.jpg',
      alt_text: 'Calgary skyline with the Calgary Tower',
      imageable_type: 'city',
      imageable_id: calgary.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/city/ottawa.jpg',
      alt_text: 'Parliament Hill in Ottawa',
      imageable_type: 'city',
      imageable_id: ottawa.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/city/quebec_city.jpg',
      alt_text: 'Château Frontenac in Quebec City',
      imageable_type: 'city',
      imageable_id: quebecCity.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/city/banff.jpg',
      alt_text: 'Lake Louise in Banff National Park',
      imageable_type: 'city',
      imageable_id: banff.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/city/victoria.jpg',
      alt_text: 'Butchart Gardens in Victoria',
      imageable_type: 'city',
      imageable_id: victoria.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/city/halifax.jpg',
      alt_text: 'Waterfront in Halifax',
      imageable_type: 'city',
      imageable_id: halifax.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/city/st_johns.jpg',
      alt_text: 'Colorful houses in St. John\'s',
      imageable_type: 'city',
      imageable_id: stJohns.id,
      is_featured: true,
      display_order: 1
    },
  ]);

  await knex('images').insert([
    // Toronto attractions
    {
      url: '/images/attractions/cn_tower.jpg', // Replace with your actual URL or local path
      alt_text: 'CN Tower at sunset',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: cnTower.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/rom.jpg', // Replace with your actual URL or local path
      alt_text: 'Royal Ontario Museum building',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: rom.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/dd.jpg', // Replace with your actual URL or local path
      alt_text: 'Distillery District architecture',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: distilleryDistrict.id,
      is_featured: false,
      display_order: 1
    },

    // Vancouver attractions
    {
      url: '/images/attractions/sp.jpg', // Replace with your actual URL or local path
      alt_text: 'Stanley Park seawall',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: stanleyPark.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/gi.jpg', // Replace with your actual URL or local path
      alt_text: 'Granville Island market',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: granvilleIsland.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/cb.jpg', // Replace with your actual URL or local path
      alt_text: 'Capilano Suspension Bridge',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: capilanoBridge.id,
      is_featured: false,
      display_order: 1
    },

    // Montreal attractions
    {
      url: '/images/attractions/ndb.jpg', // Replace with your actual URL or local path
      alt_text: 'Interior of Notre-Dame Basilica',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: notreDameBasilica.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/mrp.jpg', // Replace with your actual URL or local path
      alt_text: 'View from Mount Royal Park',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: mountRoyalPark.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/old_montreal.jpg', // Replace with your actual URL or local path
      alt_text: 'Cobblestone streets of Old Montreal',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: oldMontreal.id,
      is_featured: false,
      display_order: 1
    },

    // Calgary attractions
    {
      url: '/images/attractions/calgary_tower.jpg', // Replace with your actual URL or local path
      alt_text: 'Calgary Tower at night',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: calgaryTower.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/calgary_zoo.jpg', // Replace with your actual URL or local path
      alt_text: 'Entrance to the Calgary Zoo',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: calgaryZoo.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/heritage_park.jpg', // Replace with your actual URL or local path
      alt_text: 'Heritage Park Historical Village',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: heritagePark.id,
      is_featured: false,
      display_order: 1
    },

    // Ottawa attractions
    {
      url: '/images/attractions/p_hill.jpg', // Replace with your actual URL or local path
      alt_text: 'Parliament Buildings in Ottawa',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: parliamentHill.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/war_m.jpg', // Replace with your actual URL or local path
      alt_text: 'Canadian War Museum exterior',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: canadianWarMuseum.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/national_gallery.jpg', // Replace with your actual URL or local path
      alt_text: 'National Gallery of Canada entrance',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: nationalGallery.id,
      is_featured: true,
      display_order: 1
    },

    // Quebec City Attractions
    {
      url: '/images/attractions/front.jpg', // Replace with your actual URL or local path
      alt_text: 'Château Frontenac hotel',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: chateauFrontenac.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/old_quebec.jpg', // Replace with your actual URL or local path
      alt_text: 'Street in Old Quebec',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: oldQuebec.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/abraham.jpg', // Replace with your actual URL or local path
      alt_text: 'Plains of Abraham park',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: plainsOfAbraham.id,
      is_featured: false,
      display_order: 1
    },

    // Banff Attractions
    {
      url: '/images/attractions/l_louise.jpg', // Replace with your actual URL or local path
      alt_text: 'Lake Louise with mountains',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: lakeLouise.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/bnp.jpg', // Replace with your actual URL or local path
      alt_text: 'Landscape in Banff National Park',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: banffNationalPark.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/lake_m.jpg', // Replace with your actual URL or local path
      alt_text: 'Moraine Lake and Valley of the Ten Peaks',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: moraineLake.id,
      is_featured: false,
      display_order: 1
    },

    // Victoria Attractions
    {
      url: '/images/attractions/garden.jpg', // Replace with your actual URL or local path
      alt_text: 'Floral display at Butchart Gardens',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: butchartGardens.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/parli.jpg', // Replace with your actual URL or local path
      alt_text: 'British Columbia Parliament Buildings',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: bcParliament.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/bc_m.jpg', // Replace with your actual URL or local path
      alt_text: 'Entrance to the Royal BC Museum',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: royalBcMuseum.id,
      is_featured: false,
      display_order: 1
    },

    // Halifax Attractions
    {
      url: '/images/attractions/citadel.jpg', // Replace with your actual URL or local path
      alt_text: 'Halifax Citadel Historic Site',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: halifaxCitadel.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/cove.jpg', // Replace with your actual URL or local path
      alt_text: 'Lighthouse at Peggy\'s Cove',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: peggysCove.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/boardwalk.jpg', // Replace with your actual URL or local path
      alt_text: 'Halifax Waterfront Boardwalk',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: waterfrontBoardwalk.id,
      is_featured: false,
      display_order: 1
    },

    // St. John's Attractions
    {
      url: '/images/attractions/hill.jpg', // Replace with your actual URL or local path
      alt_text: 'Signal Hill overlooking St. John\'s',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: signalHill.id,
      is_featured: true,
      display_order: 1
    },
    {
      url: '/images/attractions/row.jpg', // Replace with your actual URL or local path
      alt_text: 'Colorful houses of Jellybean Row',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: jellybeanRow.id,
      is_featured: true,
      display_order: 1
    }, {
      url: '/images/attractions/cape.jpg', // Replace with your actual URL or local path
      alt_text: 'Lighthouse at Cape Spear',
      imageable_type: 'attraction', // Or 'place'
      imageable_id: capeSpear.id,
      is_featured: false,
      display_order: 1
    },
  ]);
};