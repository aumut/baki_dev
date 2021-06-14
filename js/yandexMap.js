ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
        center: [42.87542701, 74.58915595],
        zoom: 15,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    let balloonTempalte = "<div class=\"yBalloon\">\n" +
        "                <div class=\"yBalloon__address yBalloon--row yBalloon--mb20\">\n" +
        "                    <div class=\"yBalloon__address--country yBalloon--col\">\n" +
        "                        <span class=\"yBalloon__title country--title\">страна</span>\n" +
        "                        <span class=\"yBalloon__title yBalloon__title--bold country--name\">Кыргызстан</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"yBalloon__address--city yBalloon--col\">\n" +
        "                        <span class=\"yBalloon__title city--title\">город</span>\n" +
        "                        <span class=\"yBalloon__title yBalloon__title--bold city--name\">Бишкек</span>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"yBalloon__phone yBalloon--row yBalloon--mb20\">\n" +
        "                    <span class=\"yBalloon__title phone--title\">Наш телефон:</span>\n" +
        "                    <div class=\"phones\">\n" +
        "                        <span class=\"yBalloon__title yBalloon__title--bold phone_num\">8 (800) 123-45-67</span>\n" +
        "                        <span class=\"vert-separator\"></span>\n" +
        "                        <span class=\"yBalloon__title yBalloon__title--bold phone_num\">8 (800) 123-45-67</span>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"yBalloon__web yBalloon--row yBalloon--mb20\">\n" +
        "                    <div class=\"email yBalloon--col\">\n" +
        "                        <span class=\"yBalloon__title email--title\">Наш телефон:</span>\n" +
        "                        <span class=\"yBalloon__title yBalloon__title--bold email--name\">info@info.com</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"yBalloon__socials yBalloon--col\">\n" +
        "                        <ul class=\"social\">\n" +
        "                            <li class=\"social-li\"><a href=\"https://api.whatsapp.com/send?phone=996770402060\" class=\"btn whats_up-ic\"></a></li>\n" +
        "                            <li class=\"social-li\"><a href='' class=\"btn viber-ic\"></a></li>\n" +
        "                            <li class=\"social-li\"><a href='' class=\"btn telegram-ic\"></a></li>\n" +
        "                            <li class=\"social-li\"><a href='' class=\"btn inst-ic\"></a></li>\n" +
        "                        </ul>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";

     let placemark = new ymaps.Placemark([42.87, 74.59]);

    map.geoObjects.add(placemark);

    map.balloon.open([42.87757330, 74.57559470], balloonTempalte, {
        // Опция: не показываем кнопку закрытия.
        closeButton: false,
        maxWidth: '470px',
        maxHeight: '263px'
    });
    console.log(map.balloon.maxHeight);

}