const leftToRight = {
    "(": ")",
    "[": "]",
    "{": "}"
}

/**
 * @param {string} str 
 * @return {boolean}
 */
function isVoild(str) {
    if (!s) {
        return true;
      }
    const stack = []
    let length = str.length
    for(let i=0; i< length; i++){
        if(str[i] === '(' || str[i] === '[' || str[i] === '{') {
            stack.push(leftToRight[str[i]])
        }else{
            if(!stack.length || str[i] !== stack.pop()) return false
        }
    }

    return true
}