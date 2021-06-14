$(function() {
    const collect = document.querySelector("#multi-item");
    const license = document.querySelector("#multi-item-license");

    const mql1200 = window.matchMedia("(max-width: 1200px)");
    const mql768 = window.matchMedia("(max-width: 768px)");
    const mql992 = window.matchMedia("(max-width: 992px)");
    const mql425 = window.matchMedia("(max-width: 425px)");

    function handlerForMediaQueries(x) {
        if (mql425.matches) { // If media query matches
            makeCollectSlider();
            //if(mql425.matches) {
            makeLicenseSlider();
            //}
        } else {
            removeCollectSlider();
            removeLicenseSlider();
        }
    }

    function makeCollectSlider() {
        const collectList = collect.querySelectorAll('.collect-item');
        let carouselItems = collect.querySelectorAll('.carousel-item');
        let indicatorWrapper = collect.querySelector('.carousel-indicators');
        let indicators = indicatorWrapper.querySelectorAll('li');

        removeItems(carouselItems);
        removeItems(indicators);

        createCarouselRow(collectList, collect, 'multi-item');
    }

    function removeCollectSlider() {
        const collectList = collect.querySelectorAll('.collect-item');
        let carouselItems = collect.querySelectorAll('.carousel-item');
        let indicatorWrapper = collect.querySelector('.carousel-indicators');
        let indicators = indicatorWrapper.querySelectorAll('li');

        removeItems(carouselItems);
        removeItems(indicators);

        let rowList = divideArrayForRow(collectList, 3);
        createCarouselRow(rowList, collect, 'multi-item');
    }

    function makeLicenseSlider() {
        const licenseList = license.querySelectorAll('.license-item');
        let carouselItems = license.querySelectorAll('.carousel-item');
        let indicatorWrapper = license.querySelector('.carousel-indicators');
        let indicators = indicatorWrapper.querySelectorAll('li');

        removeItems(carouselItems);
        removeItems(indicators);
        console.log(licenseList);
        createCarouselRow(licenseList, license, 'multi-item-license');
    }

    function removeLicenseSlider() {
        const licenseList = license.querySelectorAll('.license-item');
        let carouselItems = license.querySelectorAll('.carousel-item');
        let indicatorWrapper = license.querySelector('.carousel-indicators');
        let indicators = indicatorWrapper.querySelectorAll('li');

        removeItems(carouselItems);
        removeItems(indicators);

        let rowList = divideArrayForRow(licenseList, 4);
        createCarouselRow(rowList, license, 'multi-item-license');
    }

    function createCarouselRow(list, mainWrapper, mainId) {
        const inner = mainWrapper.querySelector('.carousel-inner');
        let indicatorWrapper = mainWrapper.querySelector('.carousel-indicators');

        list.forEach(function (item, index) {
            item.classList.remove('d-none');
            let div = createCarouselItem(item);
            let indicator = createIndicatorForMultiSlider(mainId, index);

            if (index === 0) {
                div.classList.add('active');
                indicator.classList.add('active');
            }
            inner.appendChild(div);
            indicatorWrapper.appendChild(indicator);
        });
    }

    function createCarouselItem(innerHtml) {
        let div = document.createElement('div');
        div.classList.add('carousel-item');
        div.appendChild(innerHtml);
        return div
    }

    function removeItems(list) {
        list.forEach(function (item) {
            item.remove();
        });
    }

    function createIndicatorForMultiSlider(mainId, index) {
        let li = document.createElement('li');
        li.dataset.target = "#" + mainId;
        li.dataset.slideTo = index;

        return li;
    };

    function divideArrayForRow(list, slidesInRow) {
        let rowsList = [];
        for (let i=0; i<list.length; i=i+slidesInRow) {
            let row = document.createElement('div');
            row.className = 'row';
            for (let j=i; j<(i+slidesInRow); j++) {
                if (j>=list.length) break;
                row.appendChild(list[j]);
            }
            rowsList.push(row);
        }
        return rowsList;
    }

    //===========================================

    handlerForMediaQueries();
    mql425.addEventListener("change", () => {
        handlerForMediaQueries();
    });

});