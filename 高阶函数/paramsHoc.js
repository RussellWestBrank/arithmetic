function paramsHoc(callback) {
    return (setState) => {
        function setStatePlus(...args) {
            setState('plus')
            setState(...args)
        }
        return callback(setStatePlus)
    }
}

function create(callback){
    const setState = (state) => {
        console.log(state);
    }
    callback(setState);
}

create(paramsHoc((setState) => {
    setState('Hello');
    setState('World');
    setState('!');
}))

