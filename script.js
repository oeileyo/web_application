ymaps.ready(init);


function init() {
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7,
        controls: ['zoomControl', 'typeSelector', 'geolocationControl']
    });
}


function makeRoute() { // Построение маршрута.
    let pointFrom = document.getElementById('adr1').value;
    let pointTo = document.getElementById('adr2').value;

    let routingMode = ''
    let radio = document.querySelectorAll('input[name="radio"]');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            routingMode = radio[i].value;
        }
    }

// По умолчанию строится автомобильный маршрут.
    if (pointFrom === '' || pointTo === '') {
        alert('Заполните поля')
    } else {
        multiRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: [pointFrom, pointTo],
            params: {
                routingMode: routingMode,
                avoidTrafficJams: true
            }
        }, {
            boundsAutoApply: true,  // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
            routeActiveStrokeWidth: 10,
            routeActiveStrokeStyle: 'solid',
            routeActiveStrokeColor: '#21ff00'
        });

// Добавление маршрута на карту.
        myMap.geoObjects.add(multiRoute);
        // multiRoute.model.events.add('requestSuccess', function(){
        //     let activeRoute = multiRoute.getActiveRoute();
        //     activeRoute.baloon.open();
        //     activeRoute.properties.get('distance').text;
        //     activeRoute.properties.get('duration').text;
        // });
    }
}


function clearMap() {
    myMap.geoObjects.removeAll();
    multiRoute && myMap.geoObjects.remove(multiRoute);
}