//import ImageResizer from "react-native-image-resizer";
//import RNFetchBlob from "react-native-fetch-blob"

export default function compressImage(base64) {
    return new Promise((resolve, reject) => {
        (base64) => resolve({...photo, data: { ...photo.data, userPhoto: data}}).catch(
            error => reject(`base64:error: ${error}`)
        )
    })
}

// export default function compressImage(uri) {
//     return new Promise((resolve, reject) => {
//         ImageResizer.createResizedImage(uri, 200, 200, "JPEG", 100, 0).then(resized => {
//             RNFetchBlob.fs.readFile(`${resized}`, "base64").then( data => {
//                 resolve({...photo, data: { ...photo.data, userPhoto: data}})
//             }).catch(
//                 error => reject(`readFile:error: ${error}`)
//             )
//         }, (error) => reject(`createResizedImage:error: ${error}`))
//     })
// }
