// 处理接口返回的二进制数据
download (data, name) {
    if (!data) {
        return false;
    }
    let url = window.URL.createObjectURL(new Blob([data]));
    let link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.setAttribute('download', name || 'resellers.xls');

    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(url);
},
// 下载VIP
downloadVIP () {
    let config = {
        headers: {'Content-Type': 'application/json'},
        responseType: 'blob'
    };
    this.loading = true;
    this.$axios.post(`${this.$BaseURL}/admin/vip_download`, {}, config)
        .then(response => {
            this.loading = false;
            console.log(response.data);
            let reader = new FileReader();
            reader.readAsText(response.data);
            let _this = this;
            reader.onload = function (e) {
                console.log(reader.result);
                try {
                    console.log(JSON.parse(reader.result).code);
                    _this.$Message.warning(JSON.parse(reader.result).msg);
                    if (JSON.parse(reader.result).code === 1000) {
                        _this.$router.replace({
                            path: '/Mlogin'
                        });
                        // this.$router.red
                    }
                } catch (e) {
                    console.log(response.data);
                    _this.download(response.data);
                }
            };
            // if (response.data.code === 10000) {
            //     console.log(response.data);
            //     this.download(response.data);
            // } else {
            //     this.$Message.warning('Download failed');
            // }

            // if (response.data.code === 10000) {
            //
            // }
        }).catch((err) => {
        this.$Message.warning(err.data.msg);
    });
},