const {Router} = require('express');
const Contact = require('../models/Contact')
const router = Router();
const jwt = require('jsonwebtoken')
const {Types} = require('mongoose');

router.get('/', async (req, res) => {
    const search = req.query.search != null ? req.query.search : "";
    const page = req.query.page != null ? req.query.page : 1;
    const limit = req.query.limit != null ? req.query.limit : 5;
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
    const additional_number = req.body.add_number
    const type = req.body.type
    const company = req.body.company
    const email = req.body.email
    const ava_src = req.body.ava_src
    let contact = new Contact({user_id, fullname, number, additional_number, type, company, email, ava_src})
    contact.save()
    res.status(200).json({id: contact._id, message: "Contact has been successfully created"})
})

router.put('/updateContact', async (req,res) => {
    const id = req.body.id
    const fullname = req.body.fullname
    const number = req.body.number
    const additional_number = req.body.add_number
    const type = req.body.type
    const company = req.body.company
    const email = req.body.email
    let contact = await Contact.findOneAndUpdate({_id: id},{fullname: fullname, number:number, additional_number: additional_number, type: type, company: company, email: email})
    contact.save()
    res.status(200).json({message: "Contact has been successfully updated"})
})

  router.delete('/deleteContact', async (req, res) => {
    try{
      let id = jwt.verify(req.cookies.tokenlogin,'123').userId
      let contactid = req.query.id
      Contact.deleteOne({user_id: id, _id: contactid}, async (err)=>{
           if(err){
                  res.status(500).json({err})
          }
        else{
          res.status(200).json({message: "successfully removed"});
        }
      })
    }
    catch (e){
      res.status(500).json({err: e})
    }
  })

module.exports = router;
