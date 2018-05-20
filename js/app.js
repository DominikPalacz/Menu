document.addEventListener("DOMContentLoaded", function () { // console.log('DOM ok');

    var elAll = document.querySelectorAll('.nav > ul > li'); //console.log(elAll);
    var el1 = document.querySelector('.nav > ul > li:nth-child(1)'); //console.warn(el1);
    var el2 = document.querySelector('.nav > ul > li:nth-child(2)'); //console.warn(el2);
    var el3 = document.querySelector('.nav > ul > li:nth-child(3)'); //console.warn(el3);
    var el4 = document.querySelector('.nav > ul > li:nth-child(4)'); //console.warn(el4);

    /*for (var i = 0; i < elAll.length; i++) {
        console.log(elAll[i]);
    }*/

    el1.addEventListener('mouseover', function () {
        el1.querySelector('ul') ? el1.querySelector('ul').style.display = 'block' : null;
    });
    el1.addEventListener('mouseout', function () {
        el1.querySelector('ul') ? el1.querySelector('ul').style.display = 'none' : null;
    });
    el2.addEventListener('mouseover', function () {
        el2.querySelector('ul') ? el2.querySelector('ul').style.display = 'block' : null;
    });
    el2.addEventListener('mouseout', function () {
        el2.querySelector('ul') ? el2.querySelector('ul').style.display = 'none' : null;
    });
    el3.addEventListener('mouseover', function () {
        el3.querySelector('ul') ? el3.querySelector('ul').style.display = 'block' : null;
    });
    el3.addEventListener('mouseout', function () {
        el3.querySelector('ul') ? el3.querySelector('ul').style.display = 'none' : null;
    });
    el4.addEventListener('mouseover', function () {
        el4.querySelector('ul') ? el4.querySelector('ul').style.display = 'block' : null;
    });
    el4.addEventListener('mouseout', function () {
        el4.querySelector('ul') ? el4.querySelector('ul').style.display = 'none' : null;
    });

});

// Lista działa.