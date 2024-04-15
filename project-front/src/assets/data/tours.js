import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";


const tours = [
  {
    id: "01",
    title: "Yumthang Valley",
    city: "Sikkim",
    distance: 300,
    address:"North Sikkim, Sikkim, India",
    price: "60,000",
    money:60000,
    maxGroupSize: 60,
    desc: "Yumthang Valley in Sikkim is a picturesque paradise nestled amidst the Eastern Himalayas, known for its breathtaking landscapes and vibrant flora. As a part of the Yumthang Valley of Flowers Sanctuary, it boasts an array of alpine flowers, making it a haven for nature lovers and botanists alike. The valley is also home to the Shingba Rhododendron Sanctuary, where various species of rhododendrons bloom in vibrant hues during the spring season, creating a mesmerizing sight. Visitors can indulge in trekking adventures to explore the valley's hidden gems, including hot springs renowned for their therapeutic properties. The pristine Lachung River meanders through the valley, adding to its serene charm and offering opportunities for picnics by the riverside. Yumthang Valley's tranquil ambiance and stunning vistas make it a must-visit destination for those seeking tranquility and natural beauty in the heart of the Himalayas. ",
    avgRating: 4.6,
    photo: tourImg01,
  },
  {
    id: "02",
    title: "Majuli",
    city: "Assam",
    distance: 400,
    address: "Brahmaputra River, Assam, India",
   price: "55,000",
    money:55000,
    maxGroupSize: 38,
    desc: "Majuli, located in Assam, is the world's largest river island, nestled amidst the mighty Brahmaputra River's meandering channels. This unique island is not only a geographical marvel but also a cultural and spiritual hub of Assam. Majuli is renowned for its vibrant Vaishnavite culture, with numerous satras (monasteries) showcasing traditional dance, music, and art forms. The island's scenic beauty, with lush greenery and expansive river views, adds to its allure as a tourist destination. Visitors can immerse themselves in the island's rich heritage by exploring ancient satras like Kamalabari Satra and Auniati Satra, known for their architectural splendor and religious significance. Majuli also offers opportunities for birdwatching, as it is a haven for migratory birds, especially during the winter months. A trip to Majuli promises a unique blend of cultural immersion, natural beauty, and spiritual enlightenment.",
    avgRating: 3.8,
    photo: tourImg02,
    
  },
  {
    id: "03",
    title: "Hogenakkal Falls",
    city: "Tamil Nadu",
    distance: 180,
    address:"Dharmapuri district, Tamil Nadu, India",
    price: "25,000",
    money:25000,
    maxGroupSize: 28,
    desc: `Hogenakkal Falls in Tamil Nadu is often referred to as the "Niagara of India" due to its majestic cascades and scenic beauty. Situated on the Kaveri River, the falls are formed by the river's turbulent flow over rocky terrain, creating a series of breathtaking waterfalls. The name "Hogenakkal" translates to "smoking rocks," aptly describing the misty spray that surrounds the area, adding to its mystical ambiance. Visitors can experience the falls' grandeur by taking boat rides along the river, offering panoramic views of the cascading waters and rocky cliffs. The surrounding forests and lush greenery enhance the falls' natural charm, making it a popular spot for picnics and nature enthusiasts. Hogenakkal Falls is not only a scenic marvel but also holds cultural significance, with nearby villages showcasing traditional livelihoods and cultural practices. A visit to Hogenakkal promises an unforgettable encounter with nature's raw beauty and a glimpse into Tamil Nadu's rich cultural heritage.`,
    avgRating: 4.2,
    photo: tourImg03,
   
  },
  {
    id: "04",
    title: "Living Root",
    city: "Meghalaya",
    distance: 500,
    address:" Cherrapunji and Mawlynnong areas: East Khasi Hills district, Meghalaya, India ",
    price: "65,000",
    money:65000,
    maxGroupSize: 28,
    desc: "The Living Root Bridges of Meghalaya are a testament to nature's ingenuity and human collaboration with the environment. Found in the dense forests of Meghalaya, these unique bridges are crafted by weaving the aerial roots of the Ficus elastica tree species over several decades, creating sturdy and durable pathways across rivers and streams. The most famous among these bridges is the Double Decker Living Root Bridge in Cherrapunji, known for its intricate structure and breathtaking surroundings. These living bridges are not only functional but also blend seamlessly into the surrounding natural environment, showcasing the harmonious relationship between humans and nature. Trekking through the lush forests to witness these marvels is a memorable experience, offering glimpses of Meghalaya's rich biodiversity and traditional knowledge of sustainable living practices. The Living Root Bridges stand as a symbol of ecological resilience and cultural heritage, drawing visitors from around the world to marvel at their natural beauty and engineering marvel.",
    avgRating: 4.2,
    photo: tourImg04,
    
  },
  {
    id: "05",
    title: "Nelliampathy",
    city: "Kerala",
    distance: 500,
    address:"Nelliampathy, Palakkad Kerala",
    price: "28,000",
    money:28000,
    maxGroupSize: 38,
    desc:`Nelliampathy in Palakkad is one of the top 15 offbeat places to visit in Kerala. The cloud-caressed peaks settled at heights from 467 m to 1572 m are a sight to behold. The journey to Nelliampathy is breathtaking as there are viewpoints from where one can enjoy picturesque views.
En route, those interested in bio-farming can stop and look closely at the farms and vast expanses of tea estates. The hills of Nelliampathi are also well known for their orange cultivation. Over 200 species of birds and 90 species of butterflies inhabit the beautiful forests. Enjoy natural bliss and the unique ecology; the offbeat place offers a lovely holiday.`,
    avgRating: 4.7,
    photo: tourImg05,
   
  },
  {
    id: "06",
    title: "Shettihalli Rosary Church",
    city: "Karnataka",
    distance: 500,
    address: "Shettihalli, Tumakuru, Karnataka, India",
    price: "30,000",
    money:30000,
    maxGroupSize: 38,
    desc: " The Shettihalli Rosary Church in Karnataka is a captivating architectural marvel submerged in the waters of Hemavathi River, creating a surreal and picturesque sight. Built in the 19th century by French missionaries, the church's Gothic architecture and serene surroundings make it a popular destination for history enthusiasts and photographers. During the monsoon season, when the river water levels rise, the partially submerged church becomes a stunning spectacle, attracting visitors from far and wide. The church's elegant arches, pillars, and intricate details stand in contrast to the surrounding water, creating a serene yet dramatic setting for exploration and contemplation. The Shettihalli Rosary Church is not only a historical landmark but also a symbol of resilience, as it continues to captivate and inspire visitors with its timeless beauty and intriguing history.",
    avgRating: 3.5,
    photo: tourImg06,
    
  },
  {
    id: "07",
    title: "Loktak Lake and Phumdis",
    city: "Manipur",
    distance: 500,
    address: "Loktak Lake,Moirang, Bishnupur district, Manipur, India",
    price: "40,000",
    money:40000,
    maxGroupSize: 48,
    desc: "Loktak Lake and Phumdis in Manipur offer a unique and enchanting experience amidst the natural wonders of northeastern India. Loktak Lake is renowned for being the largest freshwater lake in northeastern India, dotted with floating islands known as Phumdis, which are made of organic materials like vegetation and soil. The Phumdis serve as unique ecosystems, hosting diverse flora and fauna, including the endangered Sangai deer, making the lake a biodiversity hotspot. Visitors can explore the lake's beauty by taking boat rides to witness the floating islands up close and marvel at the picturesque surroundings. The Keibul Lamjao National Park, located within the lake, is home to the Sangai deer and offers opportunities for wildlife spotting and birdwatching. Loktak Lake and its Phumdis not only showcase nature's beauty but also highlight the importance of conservation and sustainable tourism in preserving fragile ecosystems for future generations to cherish and enjoy.",
    avgRating: 4.8,
    photo: tourImg07,
   
  },
  {
    id: "08",
    title: "Nanda Devi Sanctuary",
    city: "Uttarakhand",
    distance: 500,
    address:" Chamoli district, Uttarakhand, India",
    price: "50,000",
    money:50000,
    maxGroupSize: 28, 
    desc: "The Nanda Devi Sanctuary in Uttarakhand is a mesmerizing wilderness sanctuary nestled amidst the majestic peaks of the Himalayas, offering a haven for adventure seekers and nature enthusiasts. Named after the towering Nanda Devi peak, the sanctuary is a UNESCO World Heritage Site known for its rich biodiversity and pristine landscapes. Visitors can embark on trekking expeditions to explore the sanctuary's rugged terrain, alpine meadows, and glacial lakes, with breathtaking views of snow-capped peaks at every turn. The sanctuary is home to a variety of wildlife, including snow leopards, Himalayan musk deer, and numerous bird species, making it a paradise for wildlife enthusiasts and photographers. The tranquil ambiance, dramatic landscapes, and spiritual aura of the Nanda Devi Sanctuary make it a must-visit destination for those seeking adventure, serenity, and a deep connection with nature in the heart of the Himalayas.",
    avgRating: 4.7,
    photo: tourImg08,
   
  },
];

export default tours;
