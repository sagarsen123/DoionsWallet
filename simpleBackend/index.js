const express = require('express');
const app = express();
const cors = require('cors');
const port = 8082

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

const router = express.Router();
router.post("/transfermoney", (request, response) => {

    const {mytyAcc,amt} = request.body;
    console.log(mytyAcc + " " + amt + " are the send Data")

    response.json({response:"success"});
});

router.post("/addmoney", (request, response) => {

    const {amt,camt} = request.body;
    if(amt !== camt) return response.json("Entered values Does not Matches")

    response.json({response:"Money Added Sucessfully"});
});
app.use(router);