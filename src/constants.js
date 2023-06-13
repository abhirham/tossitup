export const [mild, spicy] = ["mild", "spicy"];

export const food = {
  appetizer: {
    title: "APPETIZER",
    image: "appetizers.jpeg",
    foods: [
      {
        name: "Chilly Paneer",
        price: "10.99",
        description:
          "Battered Paneer, wok-fried with a spicy blend of chillies, ginger, garlic, and green onions.",
        spice: [mild, spicy],
      },
      {
        name: "Chilly Chicken",
        price: "10.99",
        description:
          "Battered chicken, wok-fried with a spicy blend of chillies, ginger, garlic, and green onions.",
        spice: [mild, spicy],
      },
      {
        name: "Paneer Manchurian",
        price: "10.99",
        description: "Crispy Paneer Tossed in Manchurian Sauce.",
        spice: [mild, spicy],
      },
      {
        name: "Gobi Manchurian",
        price: "10.99",
        description:
          "Cauliflower with flour deep fried tossed in soya garlic sauce.",
        spice: [mild, spicy],
      },
      {
        name: "Paneer 65",
        price: "10.99",
        description:
          "Paneer fried with south Indian spirited flavors of curry leaves, ginger, garlic, and chillies.",
        spice: [mild, spicy],
      },
      {
        name: "Chicken 65",
        price: "10.99",
        description:
          "Chicken strips with south Indian spirited flavors of curry leaves, ginger, garlic, and chillies.",
        spice: [mild, spicy],
      },
      {
        name: "Masala Onion Rings",
        price: "6.99",
        description: "Onion rings dusted in Indian Spices.",
        spice: [mild],
      },
      {
        name: "Mozzarella Sticks",
        price: "6.99",
        description: "Breaded Mozzarella sticks deep fried (5 pcs).",
      },
      {
        name: "Samosa",
        price: "6.99",
        description:
          "Fried South Asian pastry with a savory filling, including ingredients such as Spiced Potatoes, Onions, and Peas (5 pcs)",
      },
      {
        name: "Spring Roll Veg/Chicken",
        price: "5.99 / 6.99",
        description:
          "It is a savory snack made of thin crepe pastry skin enveloping a mixture of savory fillings, consists of chopped vegetables, carrots, cabbages, and green beans.",
      },
    ],
  },
  indian_wings: {
    title: "INDIAN WINGS",
    image: "wings.jpeg",
    foods: [
      {
        name: "Butter Chicken Wings (7 pcs)",
        price: "9.99",
        description: "Wings Tossed in homemade butter chicken spice.",
        spice: [mild],
      },
      {
        name: "Masala Dusted Wings (7 pcs)",
        price: "9.99",
        description: "Wings Dusted in Homemade Dry spice masala.",
        spice: [mild],
      },
      {
        name: "Indian Chilly Wings (7pcs)",
        price: "9.99",
        description: "Wings Tossed in Chilly sauce.",
        spice: [spicy],
      },
      {
        name: "Indo Canadian Wings (7pcs)",
        price: "9.99",
        description: "Wings Tossed in chefs’ special sauce.",
        spice: [spicy],
      },
      {
        name: "Hakka Wings (7pcs)",
        price: "9.99",
        description: "Wings Tossed in Hakka sauce.",
        spice: [spicy],
      },
    ],
  },
  fries_potine: {
    title: "FRIES & POUTINE",
    image: "fries.jpeg",
    foods: [
      {
        name: "Regular Fries",
        price: "5.99",
        description: "Regular fries.",
        spice: [mild],
      },
      {
        name: "Masala Fries",
        price: "6.99",
        description: "Masala fries.",
        spice: [spicy],
      },
      {
        name: "Butter Chicken Poutine",
        price: "10.99",
        description:
          "Cheese loaded fries topped with authentic Butter chicken.",
        spice: [mild],
      },
      {
        name: "Butter Paneer Poutine",
        price: "10.99",
        description: "Cheesy Fries Topped with Butter Paneer Gravy.",
        spice: [mild],
      },
    ],
  },
  "hakka_chinese_noddle’s": {
    title: "Hakka Chinese Noodle’s",
    image: "hakkaNoodles.jpeg",
    foods: [
      {
        name: "Hot Garlic Noodles Veg/Chicken",
        price: "10.99",
        description:
          "Noodles tossed with Vegetables or Chicken with garlic sauce.",
        spice: [mild, spicy],
      },
      {
        name: "Schezwan Noodles Veg/Chicken",
        price: "10.99",
        description:
          "Noodles tossed with Vegetables or Chicken with Schezwan sauce.",
        spice: [spicy],
      },
      {
        name: "Hakka Sweet BBQ Noodles Veg/Chicken",
        price: "10.99",
        description:
          "Noodles tossed with Vegetable or Chicken in Sweet BBQ sauce.",
        spice: [spicy],
      },
    ],
  },
  hakka_fried_rice: {
    title: "HAKKA FRIED RICE",
    image: "friedRice.jpeg",
    foods: [
      {
        name: "Fried Rice Veg/Egg/Chicken",
        price: "9.99 / 10.99 / 11.99",
        description:
          "Rice tossed in Vegetables, Egg or Chicken with black pepper, salt, and garlic powder.",
        spice: [mild, spicy],
      },
      {
        name: "Manchurian Fried Rice Veg/Egg/Chicken",
        price: "9.99 / 10.99 / 11.99",
        description:
          "Rice tossed in Vegetables, Egg or Chicken with Manchurian sauce.",
        spice: [mild, spicy],
      },
      {
        name: "Schezwan Fried Rice Veg/Egg/Chicken",
        price: "9.99 / 10.99 / 11.99",
        description:
          "Rice tossed in Vegetables, Egg or Chicken with Schezwan sauce.",
        spice: [mild, spicy],
      },
    ],
  },
  biryani: {
    title: "BIRYANI",
    image: "biryani.jpeg",
    foods: [
      {
        name: "Chicken Biryani",
        price: "13.99",
        description:
          "Aromatic basmati rice flavored with fragrant spices like saffron and layered with bone-in chicken marinated in spices, yogurt, and freshly chopped mint.",
        spice: [mild],
      },
      {
        name: "Lamb Biryani",
        price: "14.99",
        description:
          "Aromatic basmati rice flavored with fragrant spices like saffron and layered with mutton (goat) in our house-made sauce and layered between biryani rice.",
        spice: [mild],
      },
      {
        name: "Veg Biryani",
        price: "12.99",
        description:
          "Aromatic basmati rice flavored with fragrant spices like saffron and layered with boneless chicken in our house-made sauce and layered between biryani rice.",
        spice: [mild],
      },
    ],
  },
  salads: {
    title: "Salads",
    image: "salad.jpeg",
    foods: [
      {
        name: "Fruit Salad",
        price: "9.99",
        description:
          "Fruit salad is a dish consisting of various kinds of fruit.",
      },
      {
        name: "Caesar Salad",
        price: "9.99",
        description:
          "Caesar salad made with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
      },
      {
        name: "Cucumber Salad",
        price: "8.99",
        description:
          "Cucumber Salad is a delicious summery blend of cucumbers, dill, and dressing.",
      },
    ],
  },
  dessert: {
    title: "DESSERT",
    image: "dessert.jpeg",
    foods: [
      {
        name: "Gulab Jam",
        description: `Gulab jamun (or Gulab Jam) is among India's most popular desserts and often referred to as "Indian doughnuts." This delicious, sweet treat consists of soft, melt-in-your-mouth, fried dumplings that are traditionally made of thickened or reduced milk and then soaked in a sugar syrup made with rose water.`,
        price: "4.99",
      },
      {
        name: "Ras Malai",
        description:
          "Rasmalai, or as it is traditionally called Rossomoloi, is a Bengali delicacy of spongy soft cheese dumplings that are cooked in sugar syrup and then soaked in creamy cardamom-saffron milk, absorbing all the lovely flavors.",
        price: "5.99",
      },
      {
        name: "Gajar kaa Halwa",
        description:
          "The traditional gajar ka halwa recipe is made with only carrots, whole (full fat) milk, ghee, and sugar.",
        price: "4.99",
      },
    ],
  },
  toss_it_up_jucies: {
    title: "TOSS IT UP JUCIES",
    image: "juice.jpeg",
    foods: [
      {
        name: "Sun Rise Surprise 12oz/16oz",
        price: "4.99 / 5.99",
        description: "Orange, grapefruit, and apple.",
      },
      {
        name: "Cholesterol Reducer 12oz/16oz",
        price: "4.99 / 5.99",
        description: "Carrot, apple, parsley, and ginger.",
      },
      {
        name: "Daylight Delight 12oz/16oz",
        price: "4.99 / 5.99",
        description: "Orange, Strawberry, and Banana.",
      },
      {
        name: "Mango Tango 12oz/16oz",
        price: "4.99 / 5.99",
        description: "Mango and Orange.",
      },
    ],
  },
  toss_it_up_smoothies: {
    title: "TOSS IT UP SMOOTHIES",
    image: "smoothies.jpg",
    foods: [
      {
        name: "Strawberry Smoothie",
        price: "5.99",
        description: "Blend of Strawberries and Cream.",
      },
      {
        name: "Mango Smoothie",
        price: "5.99",
        description: "Blend of Mango and Cream.",
      },
      {
        name: "Banana Smoothie",
        price: "5.99",
        description: "Blend of Banana and Cream.",
      },
    ],
  },
};

export const foodOrder = [
  "appetizer",
  "indian_wings",
  "fries_potine",
  "hakka_chinese_noddle’s",
  "hakka_fried_rice",
  "biryani",
  "salads",
  "dessert",
  "toss_it_up_jucies",
  "toss_it_up_smoothies",
];

let foodImageMap = {};
let prev = undefined;

foodOrder.forEach((key) => {
  let obj = {
    key,
    image: food[key].image,
    next: null,
  };

  if (prev !== undefined) obj.prev = prev;

  foodImageMap[key] = obj;

  if (prev !== undefined) foodImageMap[prev.key].next = foodImageMap[key];

  prev = foodImageMap[key];
});

foodImageMap[foodOrder[0]].prev = prev;
prev.next = foodImageMap[foodOrder[0]];

// new stuff from here
let foodImageList = [];

[foodOrder.slice(-3), foodOrder, foodOrder.slice(0, 3)].forEach((arr, idx) => {
  arr.forEach((key) =>
    foodImageList.push({
      key: `${key}${idx === 1 ? "" : "_cloned"}`,
      image: food[key].image,
    })
  );
});

export { foodImageMap, foodImageList };
