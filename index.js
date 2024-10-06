const mongoose = require('mongoose');

main()
.then(() =>{
    console.log("connection succesfull");
})
.catch((err) => {
    console.log(err)
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({
//     name:"deepak",
//     email:"deepak@yahoo.in",
//     age:21,
// });

// user1
// .save()

// User.findById("659679f30350628ed414bdce")

// User.insertMany({
//     name:"rahul", age:30, gmail:"rahul@gamil.com"
// },{
//     name:"kumar", age:20, gmail:"kumar@gamil.com"
// },{
//     name:"verma", age:25, gmail:"verma@gamil.com"
// })

// User.insertMany(
//     {name:"ravi", age:23, gmail:"ravi@gmail.com"},
//     {name:"kumar", age:25, gmail:"kumar@gmail.com"},
//     {name:"shahi", age:28, gmail:"shahi@gmail.com"},
// )

User.findByIdAndDelete("659683ed7b1517f9471f9165")

.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
