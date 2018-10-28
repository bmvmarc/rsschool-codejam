module.exports =

function make(...args) {
    let fn = function(...x) {
        if (x[0] instanceof Function) {
            return args.length===0 ? undefined : args.reduce(x[0]);
        }
        for (let i = 0; i < x.length; i++) {
            args.push(x[i]);
        }
        return make.apply(this, args);
    }
    return fn;
}