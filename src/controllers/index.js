import express from 'express';
import MailService from '../services/mailService';
import MailModel from '../models/mailModel';

let mailService = new MailService();
let router = express.Router();

/**public */
router.get("/", async (req, res) => {

	res.render("vn/index", { title: "Trang chủ" });
});

router.post("/sendmail", async (req, res) => {
	let email = new MailModel("bongthoi1111@gmail.com",req.body.email , "Eight Words Site", "Welcome to EightWord Site");
	let result = await mailService.sendMail(email);

	res.render("vn/index", { title: "Trang chủ" });
});

router.get("/explanation", async (req, res) => {
	res.render("vn/explanation", { title: "Giải trình" });
});

router.get("/explanation2", async (req, res) => {
	res.render("vn/explanation2", { title: "Giải trình" });
});


/**export */
module.exports = router;