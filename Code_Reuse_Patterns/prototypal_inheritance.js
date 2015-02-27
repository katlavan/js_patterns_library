// объект, который наследуется
var parent = {
    name: "Papa"
};
// новый объект
var child = object(parent);
// проверка
alert(child.name); // “Papa”

function object(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}