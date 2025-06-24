import { pizzaData, setData, drinkData, sauceData, desertData } from '../js/product-base.js';

document.addEventListener('DOMContentLoaded', () => {
    const cardContainerPizza = document.getElementById("cardContainerPizza");
    const cardContainerSets = document.getElementById("cardContainerSets");
    const cardContainerDrinks = document.getElementById("cardContainerDrinks");
    const cardContainerSauces = document.getElementById("cardContainerSauces");
    const cardContainerDeserts = document.getElementById("cardContainerDeserts");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const basePriceElement = document.getElementById("popupPrice");

    let currentItemIndex = null;
    let currentItemType = null;
    let isPizzaSelected = false;
    let currentSizeIndex = 0;

    function openPopup(itemIndex, itemType) {
        currentItemIndex = itemIndex;
        currentItemType = itemType;
        isPizzaSelected = itemType === "pizza";

        currentSizeIndex = 0; 
        resetButtonsSelection();

        const sizeSelectDiv = document.querySelector(".size-select");
        const doughSelectDiv = document.querySelector(".dough-select");

        if (!isPizzaSelected) {
            sizeSelectDiv.style.display = "none";
            doughSelectDiv.style.display = "none";
        } else {
            sizeSelectDiv.style.display = "block";
            doughSelectDiv.style.display = "block";
        }

        switch (itemType) {
            case "pizza":
                const pizza = pizzaData[currentItemIndex];
                document.getElementById("popupImage").src = pizza.image;
                document.getElementById("popupName").innerText = pizza.name;
                document.getElementById("popupDescription").innerText = pizza.description;
                document.getElementById("popupComposition").innerText = pizza.composition;
                renderSizes(pizza.sizes);
                basePriceElement.textContent = pizza.sizes[currentSizeIndex].price + " ₽";
                break;
            case "sets":
                const sets = setData[currentItemIndex];
                document.getElementById("popupImage").src = sets.image;
                document.getElementById("popupName").innerText = sets.name;
                document.getElementById("popupDescription").innerText = sets.description;
                document.getElementById("popupComposition").innerText = sets.composition;
                basePriceElement.textContent = sets.price + " ₽";
                break;
            case "drink":
                const drinks = drinkData[currentItemIndex];
                document.getElementById("popupImage").src = drinks.image;
                document.getElementById("popupName").innerText = drinks.name;
                document.getElementById("popupDescription").innerText = drinks.description;
                document.getElementById("popupComposition").innerText = drinks.composition;
                basePriceElement.textContent = drinks.price + " ₽";
                break;
            case "sauce":
                const sauces = sauceData[currentItemIndex];
                document.getElementById("popupImage").src = sauces.image;
                document.getElementById("popupName").innerText = sauces.name;
                document.getElementById("popupDescription").innerText = sauces.description;
                document.getElementById("popupComposition").innerText = sauces.composition;
                basePriceElement.textContent = sauces.price + " ₽";
                break;
            case "desert":
                const desserts = desertData[currentItemIndex];
                document.getElementById("popupImage").src = desserts.image;
                document.getElementById("popupName").innerText = desserts.name;
                document.getElementById("popupDescription").innerText = desserts.description;
                document.getElementById("popupComposition").innerText = desserts.composition;
                basePriceElement.textContent = desserts.price + " ₽";
                break;
        }

        selectInitialOptions();

        popup.style.display = "flex";
    }

    function resetButtonsSelection() {
        document.querySelectorAll(".select-button").forEach((button) => {
            button.classList.remove("selected");
        });
    }

    function selectInitialOptions() {
        const traditionalBtn = document.querySelector("[data-type='traditional']");
        traditionalBtn && traditionalBtn.classList.add("selected");

        const firstSizeBtn = document.querySelector("#sizeContainer button[data-dia-index='0']");
        firstSizeBtn && firstSizeBtn.classList.add("selected");
    }

    function renderSizes(sizes) {
        const sizeContainer = document.getElementById("sizeContainer");
        sizeContainer.innerHTML = "";

        sizes.forEach((size, index) => {
            const button = document.createElement("button");
            button.classList.add("select-button");
            button.innerText = `${size.diameter} см`; 
            button.dataset.diaIndex = index;
            button.addEventListener("click", () => {
                selectSize(size, index);
            });
            sizeContainer.appendChild(button);
        });

        let separators = [];
        for (let i = 0; i < sizes.length - 1; i++) {
            const separator = document.createElement("div");
            separator.classList.add("separator");
            separators.push(separator);
        }

        let combinedElements = [];
        sizes.forEach((_, idx) => {
            combinedElements.push(sizeContainer.children[idx]);
            if (idx !== sizes.length - 1) {
                combinedElements.push(separators.shift());
            }
        });

        while (sizeContainer.firstChild) {
            sizeContainer.removeChild(sizeContainer.firstChild);
        }

        combinedElements.forEach((el) => sizeContainer.appendChild(el));
    }

    function selectSize(size, index) {
        document.querySelectorAll(".size-select .select-button").forEach((b) =>
            b.classList.remove("selected")
        );
        document.querySelector(`[data-dia-index='${index}']`).classList.add("selected");
        currentSizeIndex = index;

        basePriceElement.textContent = "";                   
        basePriceElement.textContent += size.price.toString(); 
        basePriceElement.textContent += " ₽";     
    }

    document.querySelectorAll(".dough-select .select-button").forEach((btn) => {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelectorAll(".dough-select .select-button").forEach((b) =>
                b.classList.remove("selected")
            );
            this.classList.add("selected");
        });
    });

    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    function initCart() {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || {};
        if (!Object.keys(cartItems).length) {
            cartItems = {};
        }
        return cartItems;
    }

    let cart = initCart();

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function generateUniqueProductID(type, index) {
        return `${type}-${index}`;
    }

    const addToCartButtonsOnCards = document.querySelectorAll('.add-to-cart');

    addToCartButtonsOnCards.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const productType = btn.dataset.itemType;
            const productIndex = parseInt(btn.dataset.itemIndex);
            openPopup(productIndex, productType); 
        });
    });

    const addToCartInPopup = document.getElementById('addToCartButton');

    if(addToCartInPopup){
        addToCartInPopup.addEventListener('click', () => {
            let productInfo; 
            if (isPizzaSelected) {
                const selectedPizza = pizzaData[currentItemIndex];
                const selectedSize = selectedPizza.sizes[currentSizeIndex];
                
                productInfo = {
                    name: selectedPizza.name,
                    description: selectedPizza.description,
                    composition: selectedPizza.composition,
                    image: selectedPizza.image,
                    size: selectedSize.diameter,
                    price: selectedSize.price
                };
            } else {
                switch (currentItemType) {
                    case 'sets':
                        productInfo = setData[currentItemIndex];
                        break;
                    case 'drink':
                        productInfo = drinkData[currentItemIndex];
                        break;
                    case 'sauce':
                        productInfo = sauceData[currentItemIndex];
                        break;
                    case 'desert':
                        productInfo = desertData[currentItemIndex];
                        break;
                    default:
                        console.error('Неверный тип текущего элемента:', currentItemType);
                        return;
                }
            }

            const uniqueID = generateUniqueProductID(currentItemType, currentItemIndex);

            if (cart.hasOwnProperty(uniqueID)) {
                cart[uniqueID].count++;
            } else {
                cart[uniqueID] = {
                    count: 1,
                    info: productInfo
                };
            }

            saveCart(cart);

            popup.style.display = "none";
        });
    }

    pizzaData.forEach((pizza, index) => {
        const card = createCard(pizza, index, "pizza");
        cardContainerPizza.appendChild(card);
    });

    setData.forEach((set, index) => {
        const card = createCard(set, index, "sets");
        cardContainerSets.appendChild(card);
    });

    drinkData.forEach((drink, index) => {
        const card = createCard(drink, index, "drink");
        cardContainerDrinks.appendChild(card);
    });

    sauceData.forEach((sauce, index) => {
        const card = createCard(sauce, index, "sauce");
        cardContainerSauces.appendChild(card);
    });

    desertData.forEach((dessert, index) => {
        const card = createCard(dessert, index, "desert");
        cardContainerDeserts.appendChild(card);
    });

    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    function createCard(data, index, type) {
        const card = document.createElement("div");
        card.classList.add("card");

        if (type === "pizza") {
            card.innerHTML = ` <img src="${data.image}" alt="${data.name}"> <h2>${data.name}</h2> <p>${data.description}</p> <div class="price">Цена: ${data.sizes[0].price} ₽</div> <button class="add-to-cart" data-item-index="${index}" data-item-type="pizza">В корзину</button> `;
        } else {
            card.innerHTML = ` <img src="${data.image}" alt="${data.name}"> <h2>${data.name}</h2> <p>${data.description}</p> <div class="price">Цена: ${data.price} ₽</div> <button class="add-to-cart" data-item-index="${index}" data-item-type="${type}">В корзину</button> `;
        }

        card.addEventListener("click", () => {
            openPopup(index, type);
        });

        return card;
    }
});
