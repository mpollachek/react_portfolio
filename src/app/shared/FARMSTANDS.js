import { queryByTestId } from '@testing-library/react';
import farm_animals_1 from '../assets/img/farm_animals_1.jpg';
import farm_animals_2 from '../assets/img/farm_animals_2.jpg';
import homemade_goods_1 from '../assets/img/homemade_goods_1.jpg';
import homemade_goods_2 from '../assets/img/homemade_goods_2.jpg';
import homemade_goods_3 from '../assets/img/homemade_goods_3.jpg';
import produce_market_1 from '../assets/img/produce_market_1.jpg';
import produce_market_2 from '../assets/img/produce_market_2.jpg';
import produce_market_3 from '../assets/img/produce_market_3.jpg';
import produce_market_4 from '../assets/img/produce_market_4.jpg';
import produce_market_5 from '../assets/img/produce_market_5.jpg';
import produce_market_6 from '../assets/img/produce_market_6.jpg';
import produce_market_7 from '../assets/img/produce_market_7.jpg';
import produce_market_8 from '../assets/img/produce_market_8.jpg';
import stand_1 from '../assets/img/stand_1.jpg'
import stand_2 from '../assets/img/stand_2.jpg'
import stand_3 from '../assets/img/stand_3.jpg'
import stand_4 from '../assets/img/stand_4.jpg'
import stand_5 from '../assets/img/stand_5.jpg'
import stand_6 from '../assets/img/stand_6.jpg'
import stand_7 from '../assets/img/stand_7.jpg'

export const FARMSTANDS = [
  {
    id: 0,
    name: "Jimmy Joe's",
    image: produce_market_1,
    latitude: '40.13',
    longitude: '-76.01',
    featured: false,
    description:
    "Jimmy Joe's fruits are grown right here in React County.  We specialize in strawberries and blueberries.",
    products: [
      'blueberries: $3/qt',
      'strawberries: $2/qt'
    ]
  },
  {
    id: 1,
    name: "Happy Chicks",
    image: farm_animals_2,
    latitude: '40.04',
    longitude: '-76.31',
    featured: true,
    description:
    "Happy Chicks has free range chickens and the tastiest eggs in town!",
    products: [
      'eggs: $3/doz',
    ]
  },
  {
    id: 2,
    name: "Peaceful Valley Market",
    image: produce_market_7,
    latitude: '41.05',
    longitude: '-76.39',
    featured: true,
    description:
    "Get the best selection of local growers at our weekly farmers market",
    products: [
      'rhubarb: $3/lb',
      'Spinach: $1/lb'
    ]
  },
  {
    id: 3,
    name: "Jenny's Goods",
    image: homemade_goods_1,
    latitude: '40.56',
    longitude: '-76.14',
    featured: false,
    description:
    "Produce and homemade baked goods",
    products: [
      'Blueberry Pie: $7',
      'Watermelon: $4/ea'
    ]
  }

];


