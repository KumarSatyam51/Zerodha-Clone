require('dotenv').config();

const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const bodyParser= require("body-parser");
const cors = require("cors");

const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require('./model/PositionsModel');
const UserModel = require('./model/UserModel');

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

console.log(PORT)
const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(bodyParser.json());
// app.get('/addHoldings', async (req, res) => {
//   console.log('hii there from the addHoldings');

//   const tempHoldings = [
//     { name: 'BHARTIARTL', qty: 2, avg: 538.05, price: 541.15, net: '+0.58%', day: '+2.99%' },
//     { name: 'HDFCBANK', qty: 2, avg: 1383.4, price: 1522.35, net: '+10.04%', day: '+0.11%' },
//     { name: 'HINDUNILVR', qty: 1, avg: 2335.85, price: 2417.4, net: '+3.49%', day: '+0.21%' },
//     { name: 'INFY', qty: 1, avg: 1350.5, price: 1555.45, net: '+15.18%', day: '-1.60%', isLoss: true },
//     { name: 'ITC', qty: 5, avg: 202.0, price: 207.9, net: '+2.92%', day: '+0.80%' },
//     { name: 'KPITTECH', qty: 5, avg: 250.3, price: 266.45, net: '+6.45%', day: '+3.54%' },
//     { name: 'M&M', qty: 2, avg: 809.9, price: 779.8, net: '-3.72%', day: '-0.01%', isLoss: true },
//     { name: 'RELIANCE', qty: 1, avg: 2193.7, price: 2112.4, net: '-3.71%', day: '+1.44%' },
//     { name: 'SBIN', qty: 4, avg: 324.35, price: 430.2, net: '+32.63%', day: '-0.34%', isLoss: true },
//     { name: 'SGBMAY29', qty: 2, avg: 4727.0, price: 4719.0, net: '-0.17%', day: '+0.15%' },
//     { name: 'TATAPOWER', qty: 5, avg: 104.2, price: 124.15, net: '+19.15%', day: '-0.24%', isLoss: true },
//     { name: 'TCS', qty: 1, avg: 3041.7, price: 3194.8, net: '+5.03%', day: '-0.25%', isLoss: true },
//     { name: 'WIPRO', qty: 4, avg: 489.3, price: 577.75, net: '+18.08%', day: '+0.32%' },
//   ];

//   try {
//     for (const item of tempHoldings) {
//       const newHolding = new HoldingsModel({
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//       });
//       await newHolding.save();
//     }
//     return res.send('Done!');
//   } catch (err) {
//     console.error('Error saving holdings:', err);
//     return res.status(500).send('Error');
//   }
// });

// app.get("/addPositions",async (req, res) =>
// {
//     const tempPositions=[
//      {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
//     ];
//      try {
//     for (const item of tempPositions) {
//       const newPosition = new PositionsModel({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,
//       });
//       await newPosition.save();
//     }
//     return res.send('Done!');
//   } catch (err) {
//     console.error('Error saving positions:', err);
//     return res.status(500).send('Error');
//   }
// });

app.get('/allHoldings',async(req,res)=>{
    try{
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
    }
     catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).send("Error fetching holdings");
  }
});

app.get('/allPositions',async(req,res)=>{
    try{
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
    }
     catch (err) {
    console.error("Error fetching Positions:", err);
    res.status(500).send("Error fetching Positions");
  }
});




app.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword } = req.body;
        
        if (!email || !password || !firstName || !lastName || !confirmPassword) {
            return res.status(400).json({ 
                msg: "All fields are required!" 
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                msg: "Password and Confirm Password do not match."
            });
        }
        
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ 
                msg: "User already exists!" 
            });
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newUser = new UserModel({
            firstName: firstName, 
            lastName: lastName,   
            email: email,
            password: hashedPassword 
        });

        await newUser.save();

        return res.status(201).json({ 
            msg: "User successfully registered!",
            user: {
                id: newUser._id,
                email: newUser.email,
                firstName: newUser.firstName
            }
        });

    } catch (e) {
        console.error("Signup error:", e.stack); 
        
        if (e.name === 'ValidationError') {
            return res.status(400).json({ msg: e.message });
        }
        
        return res.status(500).json({
            msg: "Internal server error during registration."
        });
    }
});

app.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                msg: "Email and password are required."
            });
        }

        const user = await UserModel.findOne({ email }).select('+password'); 

        if (!user) {
            return res.status(401).json({
                msg: "Invalid credentials."
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                msg: "Invalid credentials."
            });
        }

        return res.status(200).json({
            msg: "Login successful!",
            user: {
                id: user._id,
                email: user.email,
                firstName: user.firstName,
            }
        });

    } catch (e) {
        console.error("Login error:", e.stack);
        return res.status(500).json({
            msg: "Internal server error during login."
        });
    }
});


async function start() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('DB connected!');
    app.listen(PORT, () => console.log(`App started on port ${PORT}`));
  } catch (err) {
    console.error('Failed to connect to DB', err);
    process.exit(1);
  }
}

start();

app.listen(PORT);


