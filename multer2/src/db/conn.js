const  mongoose = require("mongoose");

var  uri = process.env.oneDay || "mongodb+srv://user:xXTeGnpMZHCPANju@cluster.hvnh0of.mongodb.net/NikxgramDatabase?retryWrites=true&w=majority"

const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};

mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}
});