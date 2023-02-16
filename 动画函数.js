

// 普通动画
function animate(obj, target, callback) {
    // clearInterval(timer);
    let timer = window.setInterval(function () {
        if (obj.offsetLeft >= target) {
            clearInterval(timer);
            if (callback) callback();
        }
        obj.style.left = obj.offsetLeft + 1 + 'px';
    }, 30);
};



//缓动动画
function animate2(obj, target, callback) {
    console.log(3);
    // clearInterval(timer1);
    let timer1 = window.setInterval(function () {

        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        console.log(obj.offsetLeft);
        if (obj.offsetLeft >= target) {
            clearInterval(timer1);

            if (callback) callback();

        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30);
}

