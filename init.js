const ftp = require("basic-ftp")

connect()

async function connect() {
    const client = new ftp.Client()
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
        await client.uploadFrom("data.txt", "data.txt")
        await client.uploadFrom("shot.jpg", "shot.jpg")
    }
    catch(err) {
        console.log(err)
    }
    client.close()
}