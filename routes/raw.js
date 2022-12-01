import express from "express";

import raw from "./raw.json" assert {type: 'json'};

const router = express.Router();


const data = raw;

router.get('/', (req, res) => {
    
    res.send(data);
});

export default router;