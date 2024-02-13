ymaps.ready(init);

function init () {
    let myMap = new ymaps.Map("map", {
            center: [45.027661, 38.937126],
            zoom: 13,
        }),
        // Создаем метку с помощью вспомогательного класса.
        myPlacemark1 = new ymaps.Placemark([45.037127, 38.996810], {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            iconContent: '',
            balloonContent: `Спектр ЮГ<br/>
						Продажа ГОБО Проекторов для рекламы<br/>
						Пон - Пят 9.00 - 18.00<br/>
						Суб - Воск, Выходной`,
            hintContent: 'Продажа ГОБО Проекторов для рекламы'
        })


    // Добавляем все метки на карту.
    myMap.geoObjects.add(myPlacemark1)
}
