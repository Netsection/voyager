import React from 'react';
import { useLocation } from 'react-router-dom';

function Destination() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const place = query.get('place');

  const destinations = {
    "South America": {
      info: "South America is a continent located in the Western Hemisphere, mostly in the Southern Hemisphere, with a relatively small portion in the Northern Hemisphere. It is bordered on the west by the Pacific Ocean and on the north and east by the Atlantic Ocean; North America and the Caribbean Sea lie to the northwest.",
      image: "https://images.unsplash.com/photo-1508726227210-48a3b4a240d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-1.2.1&q=80&w=400"
    },
    "Australia": {
      info: "Australia is a country and continent surrounded by the Indian and Pacific oceans. Its major cities – Sydney, Brisbane, Melbourne, Perth, Adelaide – are coastal, but its capital, Canberra, is inland and nicknamed the 'Bush Capital'.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-1.2.1&q=80&w=400"
    },
    "Kenya": {
      info: "Kenya, officially the Republic of Kenya, is a country in Eastern Africa. At 580,367 square kilometres, Kenya is the world's 48th largest country by total area. With a population of more than 47.6 million people, Kenya is the 29th most populous country.",
      image: "https://images.unsplash.com/photo-1552641156-8addf6aacb87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-1.2.1&q=80&w=400"
    },
    "South Africa": {
      info: "South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems. Inland safari destination Kruger National Park is populated by big game. The Western Cape offers beaches, lush winelands around Stellenbosch and Paarl, craggy cliffs at the Cape of Good Hope, forest and lagoons along the Garden Route, and the city of Cape Town, beneath flat-topped Table Mountain.",
      image: "https://images.unsplash.com/photo-1570281375723-48df97edb015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-1.2.1&q=80&w=400"
    },
  };

  return (
    <div>
      <h1>{place}</h1>
      <p>{destinations[place]?.info}</p>
      {destinations[place]?.image && <img src={destinations[place].image} alt={place} />}
    </div>
  );
}

export default Destination;