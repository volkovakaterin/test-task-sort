var array = [6, 2, 3, 1, 7, 4, 8, 5]

function DrawArray(arr) {
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
    arr.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');
    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    }, 1000)
}

let newArr;

function sort(arr, func) {
    let result = [...arr];
    for (j = 0; j < result.length; j++) {
        for (i = 0; i < result.length - 1; i++) {
            if (func(result[i], result[i + 1])) {
                let temp = result[i];
                result[i] = result[i + 1];
                result[i + 1] = temp
            }
        }
    }
    newArr = result;
}

sort(array, function (a, b) { return a > b })

$(document).ready(function () {
    DrawArray(newArr);
});



