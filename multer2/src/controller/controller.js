var Todo = require("../models/schema")

var path = require("path");
var fs = require('fs');

class class1 {

    static a = async (req, res) => {

        try {

            res.render("upload")

        } catch (err) {

            console.log(err);

        }

    }

    static b = async (req, res) => {

        try {

            let bufferdata = await fs.readFileSync(path.join(__dirname, "../../public", req.file.filename));

            let data = new Todo({

                username: req.body.username,
                userimg: {
                    data: bufferdata,
                    contentType: 'image/png'
                }

            })

            await data.save();

            var imageid1 = path.join(__dirname, "../../public", req.file.filename);
            var imageid2 = path.join(__dirname, "../../public", req.body.username + ".png");

            fs.rename(imageid1, imageid2, function (err) {
                if (err) console.log('ERROR: ' + err);
            });

            res.send("file upload")

        } catch (err) {

            console.log(err);

        }

    }

    static c = async (req, res) => {

        try {

            var a = await Todo.find({});

            res.send(a)

        } catch (err) {

            console.log(err);

        }

    }

    static d = async (req, res) => {

        try {

            await Todo.find({}).deleteMany();

            res.send("data delete")

        } catch (err) {

            console.log(err);

        }

    }

    static e = async (req, res) => {

        try {

            var a = await Todo.find({});

            var array = [];

            for(var i = 0 ; i<a.length ; i++){
                array.push(a[i].userimg);
            }

            res.render("show" , { a , array })

        } catch (err) {

            console.log(err);

        }

    }

}

module.exports = { class1 };