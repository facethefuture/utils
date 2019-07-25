//此方法用于将对象key 首字母大写  key是双单词的  将单词分开  大写之后再拼接再一起

let progressDetail = function(obj) {
    let newObj = {}
    for(let item in obj) {
        let key = []
        item.split('_').forEach((element,index) => {
            let arr = element.split('')
            let firstWord = element.slice(0,1).toUpperCase()
            arr[0] = firstWord

            key[index] = arr.join('')
        })
        newObj[key.join(' ')] = obj[item]
    }
    return newObj
}
export {progressDetail}