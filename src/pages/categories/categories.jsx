import React from 'react';
import { useLocation } from 'react-router-dom';

function Category() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const name = query.get('name');

  const categories = {
    "Travel Tips": {
      info: "Here are some tips to make your travel easier and more enjoyable. Always pack light, carry a portable charger, and keep copies of important documents.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-1.2.1&q=80&w=400"
    },
    "Activities": {
      info: "There are countless activities to do while traveling, from hiking and exploring nature to experiencing local cultures and trying new cuisines.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-1.2.1&q=80&w=400"
    }
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>{categories[name]?.info}</p>
      {categories[name]?.image && <img src={categories[name].image} alt={name} />}
    </div>
  );
}

export default Category;
