// <input type="file" id="file" />


// （1）readAsText() – 以纯文本的形式返回文件内容

var file=document.getElementById("file");

var reader = new FileReader();

reader.onload=function(e){

    var text=reader.result;

}

reader.readAsText(file);


//下载pdf
downloadPdf (item) {
    // if (!this.category) {
    //     this.$Message.warning('Please select category firstly');
    //     return false;
    // }
    console.log(item)
    let param = {
        order_id: item.order_id
    }
    let config = {
        headers:{'Content-Type':'application/json'},
        responseType: 'blob'
    };
    this.$axios.post(`${this.$BaseURL}/order/supplier/download_label`,param,config)
        .then(response=>{
            // this.download(response.data.data.file);
            console.log(response.data)
            // this.download(response.data)
            // console.log(response.data.data.file)
            let reader = new FileReader()
            reader.readAsText(response.data)
            let _this = this
            reader.onload = function (e) {
                console.log(reader.result)
                try{
                    console.log(JSON.parse(reader.result).code)
                    if (JSON.parse(reader.result).code === 10000) {
                        _this.download(JSON.parse(reader.result).data.file);
                    } else {
                        _this.$Message.warning(JSON.parse(reader.result).msg);
                    }
                }catch (e) {
                    console.log(response.data);
                    _this.$Message.warning(JSON.parse(reader.result).msg);
                }
            }

        }).catch((err) => {
        this.$Message.warning(err.data.msg);
    })
},
//处理接口返回的二进制数据
download (data) {
    if (!data) {
        return false;
    }
    let url = window.URL.createObjectURL(new Blob([data]))
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url

    link.setAttribute('download', 'content.pdf')

    document.body.appendChild(link)
    link.click();
},

