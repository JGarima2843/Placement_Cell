const express=require('express')
const passport=require('passport')
const router=express.Router()
const employeeController=require('../controller/employeeController')


// ---------------🚨 CREATING THE Employee DATA USING PASSPORT🚨------------------------------
router.get('/sign_up',employeeController.SignUp)
router.post('/create',employeeController.create)
router.get('/sign_in',employeeController.signIn)
router.post('/create_session',passport.authenticate(
    'local',
    {failureRedirect: '/employee/sign_in'},
),employeeController.createSession)
router.get('/logout',employeeController.logout)

// ---------------🚨 SEEING THE DETAILS ABOUT THE STUDENT INTERVIEW SESSION🚨-----------------
router.get('/add_student_toInterview',employeeController.Add_Student_To_Interview)
router.post('/add_student_to_cell',employeeController.add_interview_to_cell)
router.get('/add_interview',employeeController.add_interview)
router.post('/add_interview_to_cell',employeeController.add_student_to_cell)




module.exports=router