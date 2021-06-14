$(function() {
// menu mobile

    $('#btn_gamburg').click(function () {
        $('.menu-nav-wrap').show('slow');
    });
    $('#btn_close').click(function () {
        $('.menu-nav-wrap').hide();
    });

// phone field
    parameters = {
        duration: 10000
    };

    $("#phone-number").mask("+999 (999) 99-99-99");
    $('#block').hide();
    $('#block').removeClass('d-none');

    $('#show').click(function () {
        if ($("#phone-number").val() === '') {
            $('#block').show('slow');
            $("#phone-number").focus();
            return;
        }

        alert("download!!!!!!!");
        $('#block').hide(parameters);
    });


//_____range

    var isFF = true;
    var addRule = (function (style) {
        var sheet = document.head.appendChild(style).sheet;
        return function (selector, css) {
            if ( isFF ) {
                if ( sheet.cssRules.length > 0 ) {
                    sheet.deleteRule( 0 );
                }

                try {
                    sheet.insertRule(selector + "{" + css + "}", 0);
                } catch ( ex ) {
                    isFF = false;
                }
            }
        };
    })(document.createElement("style"));


// .chrome styling
    function getPercent(value, max, min) {
        max = max - min;
        value = value - min;
        return value * 100 / max;
    }
// purchase range slider
    var purcheseSlider = document.getElementById("purcheseRange");
    var range_outputs = document.querySelectorAll(".purchase_value");
    var purcheseRangeMin = document.getElementById('purcheseRangeMin');
    var purcheseRangeMax = document.getElementById('purcheseRangeMax');


    let profit_value = document.getElementById("profit_value");
    let profit12_value = document.getElementById("profit12_value");

    function formatCurrency(n){
        var s = String(n);
        var k = s.indexOf(".");
        if (k < 0) {
            k = s.length;
        } else {
            s += "00"
        }

        s = s.substr(0, k + 3);
        for (var i = k - 3, j = n < 0 ? 1 : 0; i > j; i -= 3) s = s.substr(0, i) + " " + s.substr(i);

        return s + " руб";

    }

    purcheseRangeMin.innerHTML = formatCurrency(purcheseSlider.min);
    purcheseRangeMax.innerHTML = formatCurrency(purcheseSlider.max);
    range_outputs.forEach(function (output) {
        let res = formatCurrency(purcheseSlider.value);
        output.innerHTML = output.classList.contains('profits__value') ? res : purcheseSlider.value;
    });
    purcheseSlider.style.background = 'linear-gradient(to right, #ffba00 0%, #ffba00 '+ getPercent(purcheseSlider.value, purcheseSlider.max, purcheseSlider.min) +'%, #ffffff ' + getPercent(purcheseSlider.value, purcheseSlider.max, purcheseSlider.min) + '%, #ffffff 100%)';

    purcheseSlider.oninput = function() {
        $( this ).css( 'background', 'linear-gradient(to right, #ffba00 0%, #ffba00 '+ getPercent(this.value, this.max, this.min) +'%, #ffffff ' + getPercent(this.value, this.max, this.min) + '%, #ffffff 100%)' );
        range_outputs.forEach(function (output) {
            let res = formatCurrency(purcheseSlider.value);
            output.innerHTML = output.classList.contains('profits__value') ? res : purcheseSlider.value;
            profit_value.innerHTML = formatCurrency(getMonthProfit());
            profit12_value.innerHTML = formatCurrency(get12MonthProfit());
        });
    };

// charge range slider
    var chargeSlider = document.getElementById("chargeRange");
    var charge_outputs = document.querySelectorAll(".charge_value");
    var chargeRangeMin = document.getElementById("chargeRangeMin");
    var chargeRangeMax = document.getElementById("chargeRangeMax");

    charge_outputs.forEach(function (output) {
        output.innerHTML = chargeSlider.value;
    });
    chargeSlider.style.background = 'linear-gradient(to right, #ffba00 0%, #ffba00 '+ getPercent(chargeSlider.value, chargeSlider.max, chargeSlider.min) +'%, #ffffff ' + getPercent(chargeSlider.value, chargeSlider.max, chargeSlider.min) + '%, #ffffff 100%)';

    chargeSlider.oninput = function() {
        $( this ).css( 'background', 'linear-gradient(to right, #ffba00 0%, #ffba00 '+ getPercent(this.value, this.max, this.min) +'%, #ffffff ' + getPercent(this.value, this.max, this.min) + '%, #ffffff 100%)' );
        charge_outputs.forEach(function (output) {
            output.innerHTML = chargeSlider.value;
            profit_value.innerHTML = formatCurrency(getMonthProfit());
            profit12_value.innerHTML = formatCurrency(get12MonthProfit());
        });
    };
    chargeRangeMin.innerHTML = chargeSlider.min + " %";
    chargeRangeMax.innerHTML = chargeSlider.max + " %";

    // charge range slider
    var costSlider = document.getElementById("costRange");
    var cost_outputs = document.querySelectorAll(".cost_value");

    var costRangeMin = document.getElementById("costRangeMin");
    var costRangeMax = document.getElementById("costRangeMax");

    costRangeMin.innerHTML = formatCurrency(costSlider.min);
    costRangeMax.innerHTML = formatCurrency(costSlider.max);
    cost_outputs.forEach(function (output) {
        output.innerHTML = formatCurrency(costSlider.value);
    });
    costSlider.style.background = 'linear-gradient(to right, #ffba00 0%, #ffba00 '+ getPercent(costSlider.value, costSlider.max, costSlider.min) +'%, #ffffff ' + getPercent(costSlider.value, costSlider.max, costSlider.min) + '%, #ffffff 100%)';

    costSlider.oninput = function() {
        $( this ).css( 'background', 'linear-gradient(to right, #ffba00 0%, #ffba00 '+ getPercent(this.value, this.max, this.min) +'%, #ffffff ' + getPercent(this.value, this.max, this.min) + '%, #ffffff 100%)' );
        cost_outputs.forEach(function (output) {
            output.innerHTML = costSlider.value;
            profit_value.innerHTML = formatCurrency(getMonthProfit());
            profit12_value.innerHTML = formatCurrency(get12MonthProfit());
        });
    };

    profit_value.innerHTML = formatCurrency(getMonthProfit());
    profit12_value.innerHTML = formatCurrency(get12MonthProfit());

    function getChargeVal(val, percent) {
        return val * percent / 100;
    }

    function getMonthProfit() {
        let profitVal = getChargeVal(purcheseSlider.value, chargeSlider.value);
        return  profitVal - costSlider.value;
    }

    function get12MonthProfit() {
        return  getMonthProfit() * 12;
    }
});