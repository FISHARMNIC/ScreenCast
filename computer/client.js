const ftp = require("basic-ftp")
var robot = require("robotjs")
var screenshot = require('desktop-screenshot');
//const screenshot = require('screenshot-desktop')

const client = new ftp.Client()
connect()

function shot() {
    screenshot("shot.jpg", {width: 600, height: 400, quality: 30}, function(error, complete) {
        if(error)
            console.log("Screenshot failed", error);
        else
            console.log("Screenshot succeeded");
      });
}

// function shot() {
//     screenshot({ filename: 'shot.jpg' })
// }



async function connect() {
    client.ftp.verbose = true
    try {
        await client.access({
            //host: "127.0.0.1",
            host: "192.168.0.162",
            user: "nico",
            password: "123",
            secure: false,
            port: 8080
        })
        //console.log(await client.list())
        while(true) {
            shot()
            await client.uploadFrom("shot.jpg", "shot.jpg")
            await client.downloadTo("data.txt", "data.txt")
        }
        //await client.uploadFrom("test.txt", "test.txt")
        //await client.downloadTo("gotten.txt", "test.txt")
    }
    catch(err) {
        console.log(err)
    }
    //client.close()
}