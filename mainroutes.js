const express=require("express");
const router=express.Router();
const loginroute=require("./backend/loginroutes")
const homerouter=require("./backend/homeroute")
const feedback=require("./backend/feedbackroute")
const dashboard=require("./backend/dashboardroute")
const dataform=require("./backend/dataformroute")
const signup=require("./backend/signuproute")
const forgotpassword=require("./backend/forgotpasswordroute");
const college=require("./backend/collegeroute")
const counselling=require("./backend/counsellingroute")
const collegedashboard=require("./backend/college_university_dashboard_route")
const main=require("./backend/mainpageroute");
const scholarship=require("./backend/scholarshiproute")
const entrance=require("./backend/entranceroute");
const arts=require("./backend/artsroute")
const collegeprediction=require("./backend/collegeprediction");
const counsellingpart=require("./backend/counsellingpartroute")
const roadmap=require("./backend/roadmaproute")
const law=require("./backend/lawroute")
const changepassword=require("./backend/changepassword")
router.use("/",loginroute)
router.use("/",homerouter)
router.use("/",feedback)
router.use("/",dashboard)
router.use("/",dataform)
router.use("/",signup)
router.use("/",forgotpassword)
router.use("/",college)
router.use("/",counselling)
router.use("/",collegedashboard)
router.use("/",main);
router.use("/",scholarship);
router.use("/",entrance);
router.use("/",arts);
router.use("/",collegeprediction);
router.use("/",counsellingpart);
router.use("/",roadmap)
router.use("/",law)
router.use("/",changepassword)


module.exports = router;