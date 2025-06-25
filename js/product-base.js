export const pizzaData = [
    {
        name: "Пицца Пепперони",
        description: "Пицца с колбасой пепперони и сыром. ",
        composition: "Тесто, томаты, моцарелла, пепперони. ",
        sizes: [
            { diameter: 25, price: 559 },
            { diameter: 30, price: 599 },
            { diameter: 35, price: 659 },
        ],
        image: "../src/pictures/pizzas/pepperoni.webp"
    },
        {
        name: "Пицца Четыре сыра",
        description: "Однажды четыре сыра так сдружились, что решили стать частью одного блюда.",
        composition: "Сыр Моцарелла, Сыр Чеддер, Дор-блю, Сыр сливочный, Сыр пармезан, Чеснок, Соус сливочный",
        sizes: [
            { diameter: 25, price: 499 },
            { diameter: 30, price: 529 },
            { diameter: 35, price: 539 },
        ],
        image: "../src/pictures/pizzas/fourchees.webp"
    },
            {
        name: "Пицца Фермерская",
        description: "Эта домашняя пицца создана специально для тех, кто ценит натуральный вкус продуктов.",
        composition: "Тесто домашней выпечки, натуральный домашний томатный соус, свежий молодой моцарелла ручной работы, полукопчёная свиная грудинка домашнего приготовления, домашняя варено-копченая колбаса из собственного хозяйства, свежие ломтики молодого огурчика, кусочки сладкого болгарского перца, листья рукколы, крупно нарубленный чеснок, морская соль, свежая зелень укропа или петрушки для украшения.",
        sizes: [
            { diameter: 25, price: 429 },
            { diameter: 30, price: 469 },
            { diameter: 35, price: 479 },
        ],
        image: "../src/pictures/pizzas/farm.webp"
    },
            {
        name: "Пицца Маргарита",
        description: "В мире, где вкусы смешиваются, а рецепты усложняются, есть место классике.",
        composition: "Классическое тонкое тесто, Помидоры, Сыр Моцарелла, Томатный соус.",
        sizes: [
            { diameter: 25, price: 489 },
            { diameter: 30, price: 529 },
            { diameter: 35, price: 539 },
        ],
        image: "../src/pictures/pizzas/margarita.webp"
    },
            {
        name: "Пицца Карбонара",
        description: "Классика, проверенная временем.",
        composition: "Классическое тонкое тесто, Бекон, Сыр пармезан, Сыр Моцарелла, Соус сливочный, Чеснок.",
        sizes: [
            { diameter: 25, price: 479 },
            { diameter: 30, price: 509 },
            { diameter: 35, price: 519 },
        ],
        image: "../src/pictures/pizzas/carbonara.webp"
    },

];

export const setData = [
    {
        name: "Набор Отличный",
        description: "Отличный выбор — для отличной компании!",
        composition: "Пицца Пепперони, Пицца Маргарита, Пицца Мясная, Пицца Классика, Пицца Барбекю, Пицца Гавайская, Пицца Карбонара.",
        price: 1459,
        image: "../src/pictures/test-set.webp"
    },
    {
        name: "Набор Десяточка",
        description: "Набор для большой компании.",
        composition: "Десять вкуснейших пицц. Пицца Карбонара, Пицца Гавайская, Пицца Классика, Пицца Пепперони, Пицца Барбекю, Пицца Марсельеза, Пицца Шаверма, Пицца Фермерская, Пицца 4 сыра, Пицца Деревенская",
        price: 2119,
        image: "../src/pictures/sets/tens.webp"
    },
    {
        name: "Набор Сила Восьми",
        description: "8 пицц, 8 уникальных вкусов, 8 разных поводов для праздника!",
        composition: "Пиццы: Мясная 25 см, Классика 25 см, Марсельеза 25 см, Деревенская 25 см, Четыре сыра 35 см, Пепперони 35 см, Карбонара 35 см",
        price: 1579,
        image: "../src/pictures/sets/sila8.webp"
    }
];

export const drinkData = [
    {
        name: "Кола 0,5 л",
        description: "Газированный напиток с освежающим вкусом лимона и лайма.",
        composition: "Вода, сахар, лимонная кислота, кофеин.",
        price: 159,
        image: "../src/pictures/drinks/cola.webp"
    },
    {
        name: "Апельсиновый сок 0,4 л",
        description: "Натуральный свежевыжатый апельсиновый сок.",
        composition: "Свежие апельсины.",
        price: 149,
        image: "../src/pictures/drinks/orange-juice.webp"
    },
    {
        name: "Морс из клюквы 0,4 л",
        description: "Яркий вкус свежевыжатой клюквы в каждом глотке морса утолит жажду и зарядит витаминами.",
        composition: "Натуральный продукт без искусственных добавок и консервантов - польза для детей и взрослых.",
        price: 149,
        image: "../src/pictures/drinks/cranberry-juice.webp"
    }
];

export const sauceData = [
    {
        name: "Соус Томатный",
        description: "Томатный соус",
        composition: "Томаты, специи.",
        price: 35,
        image: "../src/pictures/test-sauce.webp"
    },
    {
        name: "Соус Соевый",
        description: "Универсальный соус для ценителей японской кухни.",
        composition: "Соевые бобы, кукуруза, пшеница, соль, сахар, уксус.",
        price: 30,
        image: "../src/pictures/sauces/soy-sauce.webp"
    },
    {
        name: "Соус Сырный",
        description: "Мы говорим только на языке фактов: сырный соус + картофель = любовь навсегда!",
        composition: "Сливочное масло, мука, чеддер, молотый чили.",
        price: 40,
        image: "../src/pictures/sauces/cheese-sauce.webp"
    }
];

export const desertData = [
    {
        name: "Пирожок Лесные ягоды",
        description: "Слышите хруст? Это все наш пирожок с лесными ягодами.",
        composition: "Тесто для пирожков, начинка из лесных ягод.",
        price: 139,
        image: "../src/pictures/test-desert.webp"
    },
    {
        name: "Брауни",
        description: "Самый шоколадный десерт на свете, не иначе.",
        composition: "Песочное ореховое тесто, Фундук, Шоколадный бисквит.",
        price: 299,
        image: "../src/pictures/desserts/brauni.webp"
    }
];