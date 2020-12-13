const imgAddress = "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=612920558,1023770072&fm=26&gp=0.jpg"

const imgPromise = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = url
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            reject(new Error('图片出现加载错误'))
        }
    })

}
imgPromise(imgAddress)
    .then(img => {
        document.appendChild(img)
    })
    .catch(err => {
        doucument.body.innerHTML = err
    })
)