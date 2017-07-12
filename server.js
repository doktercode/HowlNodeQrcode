/**
 * Created by myeongsic on 2017. 7. 12..
 */
const express = require('express')
const app = express()
const QRCode = require('qrcode');

app.get('/:qrcode',(req, res) =>{

    let inputStr = req.params.qrcode;

    QRCode.toDataURL(inputStr, function (err, url) {


        let data = url.replace(/.*,/,'')
        let img = new Buffer(data,'base64')
        res.writeHead(200,{
            'Content-Type' : 'image/png',
            'Content-Length' : img.length
        })
        res.end(img)

    })


})

app.listen(3000)