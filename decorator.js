function d1(target, name, descriptor) {
    return descriptor
}

class T1 {
    constructor() {
        this.a = 'a'
        this.b = 'b'
        this.f = function ff(params) {
            console.log(params)
        }
    }
    
}

const t = new T1()

for(var o in t)
    console.log(o)
