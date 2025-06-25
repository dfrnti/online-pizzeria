// // Получаем элементы
//     const cards = document.querySelectorAll('.card');
//     const popup = document.getElementById('popup');
//     const closePopup = document.getElementById('closePopup');

//     // Открытие поп-апа
//     cards.forEach(card => {
//         card.addEventListener('click', () => {
//             const name = card.getAttribute('data-name');
//             const description = card.getAttribute('data-description');
//             const composition = card.getAttribute('data-composition');
//             const price = card.getAttribute('data-price');
//             const image = card.getAttribute('data-image');

//             document.getElementById('popupName').innerText = name;
//             document.getElementById('popupDescription').innerText = description;
//             document.getElementById('popupComposition').innerText = composition;

//              // Изначальная цена (цена пиццы размером 30 см)
//              document.getElementById('popupPrice').innerText = price;

//              // Сохраняем изначальную цену в атрибуте
//              document.getElementById('addToCartButton').setAttribute('data-base-price', price);
             
//              document.getElementById('popupImage').src = image;

//              popup.style.display = 'flex'; // Показываем поп-ап
//         });
//     });

//     // Закрытие поп-апа
//     closePopup.addEventListener('click', () => {
//         popup.style.display = 'none'; // Скрываем поп-ап
//     });

//     // Закрытие поп-апа при клике вне его
//     window.addEventListener('click', (event) => {
//         if (event.target === popup) {
//             popup.style.display = 'none';
//         }
//     });

//     // Обработка нажатий на кнопки выбора
//     const selectButtons = document.querySelectorAll('.select-button');

//     selectButtons.forEach(button => {
//         button.addEventListener('click', () => {
            
//            // Получаем родительский элемент (блок типа основы или размера)
//            const parentContainer = button.closest('.select-container');
//            const buttonsInContainer = parentContainer.querySelectorAll('.select-button');

//            // Сбрасываем выделение всех кнопок в контейнере
//            buttonsInContainer.forEach(btn => {
//                btn.classList.remove('selected'); // Убираем класс выбранной кнопки
//            });

//            // Выделяем нажатую кнопку
//            button.classList.add('selected'); // Добавляем класс выбранной кнопки

//            // Перерасчет цены в зависимости от размера пиццы
//            const basePrice = parseFloat(document.getElementById('addToCartButton').getAttribute('data-base-price'));
//            let newPrice = basePrice;

//            if (document.getElementById('size25cm').classList.contains('selected')) {
//                newPrice *= 0.95; // Уменьшение на 5%
//            } else if (document.getElementById('size30cm').classList.contains('selected')) {
//                newPrice *= 1.00; // Оставляем без изменений
//            } else if (document.getElementById('size35cm').classList.contains('selected')) {
//                newPrice *= 1.05; // Увеличение на 5%
//            } else if (document.getElementById('size40cm').classList.contains('selected')) {
//                newPrice *= 1.08; // Увеличение на 8%
//            }

//            // Обновляем отображение цены
//            document.getElementById('popupPrice').innerText = Math.round(newPrice); // Округляем до целого числа
           
//            // Обновляем текст кнопки "Добавить за"
//         //    document.getElementById('addToCartButton').innerHTML = Добавить за ${Math.round(newPrice)} ₽;
//            document.getElementById('addToCartButton').innerHTML = 'Добавить за ' + Math.round(newPrice) + ' ₽';
           
//        });
//     });


// Получаем элементы
const cards = document.querySelectorAll('.card');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Открытие поп-апа
cards.forEach(card => {
    card.addEventListener('click', () => {
        const name = card.getAttribute('data-name');
        const description = card.getAttribute('data-description');
        const composition = card.getAttribute('data-composition');
        const price = card.getAttribute('data-price');
        const image = card.getAttribute('data-image');

        document.getElementById('popupName').innerText = name;
        document.getElementById('popupDescription').innerText = description;
        document.getElementById('popupComposition').innerText = composition;

            // Изначальная цена (цена пиццы размером по умолчанию)
            document.getElementById('popupPrice').innerText = price;

            // Сохраняем изначальную цену в атрибуте
            document.getElementById('addToCartButton').setAttribute('data-base-price', price);
            
            document.getElementById('popupImage').src = image;

            popup.style.display = 'flex'; // Показываем поп-ап
            
            resetSelection(); // Сбрасываем выделение при открытии поп-апа
            updatePrice(); // Обновляем цену при открытии
    });
});

// Закрытие поп-апа
closePopup.addEventListener('click', () => {
    popup.style.display = 'none'; // Скрываем поп-ап
});

// Закрытие поп-апа при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

// Обработка нажатий на кнопки выбора
const selectButtons = document.querySelectorAll('.select-button');

selectButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        // Получаем родительский элемент (блок типа основы или размера)
        const parentContainer = button.closest('.select-container');
        const buttonsInContainer = parentContainer.querySelectorAll('.select-button');

        // Сбрасываем выделение всех кнопок в контейнере
        buttonsInContainer.forEach(btn => {
            btn.classList.remove('selected'); // Убираем класс выбранной кнопки
        });

        // Выделяем нажатую кнопку
        button.classList.add('selected'); // Добавляем класс выбранной кнопки

        updatePrice(); // Обновляем цену после выбора
    });
});

function updatePrice() {
    const basePrice = parseFloat(document.getElementById('addToCartButton').getAttribute('data-base-price'));
    let newPrice = basePrice;

    if (document.getElementById('size25cm').classList.contains('selected')) {
        newPrice *= 0.95; // Уменьшение на 5%
    } else if (document.getElementById('size30cm').classList.contains('selected')) {
        newPrice *= 1.00; // Оставляем без изменений
    } else if (document.getElementById('size35cm').classList.contains('selected')) {
        newPrice *= 1.05; // Увеличение на 5%
    } else if (document.getElementById('size40cm').classList.contains('selected')) {
        newPrice *= 1.08; // Увеличение на 8%
    }

    // Обновляем отображение цены
    document.getElementById('popupPrice').innerText = Math.round(newPrice); // Округляем до целого числа
    
    // Обновляем текст кнопки "Добавить за"
    // document.getElementById('addToCartButton').innerHTML = `Добавить за ${Math.round(newPrice)} ₽`;
    document.getElementById('addToCartButton').innerHTML = 'Добавить за ' + Math.round(newPrice) + ' ₽';
}

function resetSelection() {
    // Сбрасываем выделение всех кнопок
    document.querySelectorAll('.select-button').forEach(btn => btn.classList.remove('selected'));
    
    // Выбираем размер по умолчанию (30 см)
    document.getElementById('size30cm').classList.add('selected');
    document.getElementById('doughTraditional').classList.add('selected'); // Устанавливаем тип основы по умолчанию
}














