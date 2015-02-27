function extend(parent, child) {
    var i;
    child = child || {};
    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            child[i] = parent[i];
        }
    }
    return child;
}

var dad = {name: "Adam"};
var kid = extend(dad);
kid.name; // “Adam”

// deep copy of object with recursion
function extendDeep(parent, child) {
var i,
toStr = Object.prototype.toString,
astr = "[object Array]";
child = child || {};
for (i in parent) {
if (parent.hasOwnProperty(i)) {
if (typeof parent[i] === "object") {
child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
extendDeep(parent[i], child[i]);
    } else {
        child[i] = parent[i];
    }
}
}
    return child;
}