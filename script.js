var leftOffset = 200;
var topOffset = 0;
var leftOffset2 = -200;
var topOffset2 = 80;



function r() {
    if (document.getElementById('moveBack').src = 'Bogmini.png')
    {
        document.getElementById('moveBack').src = 'bogdanforward.png';
    } 
    else
    {    
        document.getElementById('moveBack').src = 'Bogmini.png'; 
    }
}

var moveHeading = function () {
    $('#moveBack').offset({
        left: leftOffset,
        top: topOffset
    });

    if (leftOffset < 1000 && topOffset <= 0 ) {
        leftOffset = leftOffset + 8;
    } else if (topOffset < 250 && leftOffset >= 150) {
        topOffset = topOffset + 10
        leftOffset = leftOffset +3;
    } else if (topOffset < 480 && leftOffset >= 150) {
        topOffset = topOffset + 10
        leftOffset = leftOffset -4;
        document.getElementById('moveBack').src = 'Bogmini.png';
    }
     else if (leftOffset > 160 && topOffset >250) {
        leftOffset = leftOffset - 8;
    }
    else if (leftOffset > 40 && topOffset >130) {
        leftOffset = leftOffset - 8;
        topOffset = topOffset - 10;
    }
    else if (leftOffset <=200 && topOffset !=0 ) {
        document.getElementById('moveBack').src = 'bogdanforward.png';
        topOffset = topOffset - 10;
        // levo = function() {
            leftOffset = leftOffset + 8;
        // }
        // setTimeout(levo,50);
    }
};
setInterval(moveHeading,1);

var moveVozrast = function () {
    $('#vozrast').offset({
        left: leftOffset2,
        top: topOffset2,
    });

    if (leftOffset2 < 1100 && topOffset2 == 80) {
        leftOffset2 = leftOffset2 + 8;
    } else if (topOffset2 < 580 && leftOffset2 >= 150) {
        topOffset2 = topOffset2 + 18
        leftOffset2 = leftOffset2 -1;
    } else if (leftOffset2 > 20 && topOffset2 ==580) {
        leftOffset2 = leftOffset2 - 8;
    } else if (topOffset2 !=30) {
        topOffset2 = topOffset2 - 10;    
    }
};

setInterval(moveVozrast, 1);