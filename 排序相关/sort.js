//冒泡排序

function bubbleSort (arr) {
    if (!(arr instanceof Array)) {
        return
    }
    for (let i = arr.length; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let item = arr[j]
                arr[j] = arr[j + 1]
                arr [j + 1] = item
            }
        }
    }
    console.log(arr)
}


//插入排序
// function insertionSort (arr) {
//     if (!(arr instanceof Array)) {
//         return
//     }
//     for (let i = 0 ;i< arr.length; i++) {
//         let temp = arr[i]
//         let j = i
//         while(arr[j] > arr[j + 1] && (j + 1) < arr.length){
//             arr[j] = arr[j + 1]
//             j++
//         }
//         arr[j] = temp
//         console.log(arr)
//     }
//     console.log(arr)
// }
function insertionSort (arr) {
    if (!(arr instanceof Array)) {
        return
    }
    let length = arr.length
    for (let i = 1;i < length; i ++) {
        let item = arr[i]
        let j = i
        while(item < arr[j -1] && (j -1) >= 0) {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = item
    }
    console.log(arr)
}
export {bubbleSort,insertionSort}