ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9,
            controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
        }, {
            searchControlProvider: 'yandex#search'
        });
		
		myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Я тащусь',
                hintContent: 'Ну давай уже тащи'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });
		
		myMap.geoObjects
        .add(new ymaps.Placemark([55.97194, 37.41389], {
            iconCaption: 'Шереметьево'
        }));
		myMap.geoObjects.add(new ymaps.Placemark([55.591531, 37.261486],{
            iconCaption: 'Внуково'
		}));
		myMap.geoObjects.add(new ymaps.Placemark([55.410307, 37.902451],{
            iconCaption: 'Домодедово'
		}));
		
		myMap.geoObjects.add(new ymaps.Placemark([55.561912, 38.118058],{	
			iconCaption: 'Жуковский'
		}));
		
		myMap.geoObjects.add(new ymaps.Placemark([55.51, 37.51],{	
            iconCaption: 'Остафьево'
		}));
		
});