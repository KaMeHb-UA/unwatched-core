function submitter(){
    function _(name){
        return document.getElementsByName(name)[0].value;
    }
    var l = _('length') * 1,
        sb = _('speed-boat') * 1,
        sh = _('speed-human') * 1,
        sbc = _('speed-boat-coeffitient') * 1,
        pl = 500, // длина "дорожки" в пикселях
        rtc = _('realtime-coeffitient') * 40, /* Real-time coeffitient (коэффициент отношения реального времени к виртуальному, умноженным на 25. 200 - реальное время идёт в 10000 раз быстрее;
        (1/500000) - реальное время - в 10000 раз медленнее). 25 - это значение кол-ва милисеккунд, через которые будет происходить апдейт состояния.
        Современные браузеры значение ниже 8~14 мс не воспринимают вообще, т.е. 1 - то же самое, что и мин. воспринимаемое. */
        pixelHumanSpeed = (((pl * 2) / (l / sh)) / rtc), /* кол-во пикселей, проходимое за час человеком с коэффициентом реального времени (как и два значения ниже) */
        pixelBoatSpeedUp = (((pl * 2) / (l / (sb + sbc))) / rtc), // кол-во пикселей, проходимое за час лодкой за течением
        pixelBoatSpeedDown = (((pl * 2) / (l / (sb - sbc))) / rtc), // кол-во пикселей, проходимое за час лодкой против течения
        /*  также, храним (почти) абсолютные позиции человека и лодки, т.к. при использовании значения с экрана относительная ошибка будет огромная:
            пиксель нельзя делить на более мелкие составляющие; а вот обычное число - запросто. Максимальная точность вычисислений в
            JavaScript - 20 знаков (лабораторные условия), а значит, ошибка будет присутствовать, хоть и незначительная. Нужно будет произвести округление. */
        absoluteHumanPos = 0,
        absoluteBoatPos = 0,
        asideH = false, // направление (чисто переменная, чтобы понимать, в какую сторону двигаться)
        asideB = false; // то же самое, только для лодки
    setInterval(function(){
        var boat = document.getElementById("boat"),
            human = document.getElementById("human");
        if(!asideB){
            if (absoluteBoatPos < pl) absoluteBoatPos += (pixelBoatSpeedUp); else {
                asideB = true;
                absoluteBoatPos -= ((pixelBoatSpeedUp) + (pixelBoatSpeedDown));
                boat.setAttribute('class', 'reverse');
            }
        } else {
            if (absoluteBoatPos >= 0) absoluteBoatPos -= (pixelBoatSpeedDown); else boat.removeAttribute('class');
        }
        if(!asideH){
            if (absoluteHumanPos < pl) absoluteHumanPos += (pixelHumanSpeed); else {
                asideH = true;
                absoluteHumanPos -= (pixelHumanSpeed) * 2;
                human.setAttribute('class', 'reverse');
            }
        } else {
            if (absoluteHumanPos >= 0) absoluteHumanPos -= (pixelHumanSpeed); else human.removeAttribute('class');
        }
        boat.style.marginLeft = absoluteBoatPos + "px";
        human.style.marginLeft = absoluteHumanPos + "px";
    }, 25);
}
(() => {
    var checkedOnce = false;
    check_reload = function(){
        if (!checkedOnce) checkedOnce = true; else location.href = location.href;
    }
})()