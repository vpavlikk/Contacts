const {Router} = require('express');
const Contact = require('../models/Contact')
const router = Router();
const jwt = require('jsonwebtoken')
const {Types} = require('mongoose');


router.get('/', async (req, res) => {
    const search = req.query.search != null ? req.query.search : "";
    const page = req.query.page != null ? req.query.page : 1;
    const limit = req.query.limit != null ? req.query.limit : 4;
    try {
        if (limit <= 100) {
            let id = jwt.verify(req.cookies.tokenlogin,'123').userId
            let results = await Contact.paginate({$and: [{user_id: id} , { fullname: { $regex: search, $options: '-i' } }] },
                { page: page, limit: limit, lean: true });
            res.status(200).json({ results })
        }
        else {
            res.status(400).json({ message: 'max limit of items per page can\'t exceed 100' })
        }
    }
    catch (e) {
        res.status(500).json({ message: 'somthing went wrong, try again...  ERROR :' + e });
    }
})

router.post('/addNewContact', async (req, res) =>{
    const user_id = jwt.verify(req.cookies.tokenlogin, '123').userId
    const fullname = req.body.fullname
    const number = req.body.number
    const additional_number = req.body.adnmb
    const type = req.body.type
    const company = req.body.company
    const email = req.body.email
    let contact = new Contact({user_id, fullname, number, additional_number, type, company, email})
    contact.save()
    res.status(200).json({message: "Contact successfully created"})
})

router.put('/updateContact', async (req,res) => {
    const id = req.body.id
    const fullname = req.body.fullname
    const number = req.body.number
    const additional_number = req.body.adnmb
    const type = req.body.type
    const company = req.body.company
    const email = req.body.email
    let contact = await Contact.findOneAndUpdate({_id: id},{fullname: fullname, number:number, additional_number: additional_number, type: type, company: company, email: email})
    contact.save()
    res.status(200).json({message: "user successfully updated"})
} )





module.exports = router;
