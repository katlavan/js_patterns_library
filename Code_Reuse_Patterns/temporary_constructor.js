function inherit(C, P) {
    var F = function () {
    };
    F.prototype = P.prototype;
    C.prototype = new F();
}

// с сохранением соперкласса
function inherit(C, P) {
    var F = function () {
    };
    F.prototype = P.prototype;
    C.prototype = new F();
    C.uber = P.prototype;
}


// Установка указателя на конструктор
function inherit(C, P) {
    var F = function () {
    };
    F.prototype = P.prototype;
    C.prototype = new F();
    C.uber = P.prototype;
    C.prototype.constructor = C;
}