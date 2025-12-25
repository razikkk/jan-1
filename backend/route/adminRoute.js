import express from 'express'
import { addNews, adminLogin, createCareerListing, deleteCareerListing, deleteNews, deletePageContent, getAllCareerListings, getAllNews, getCareerApplications, getCareerListingById, getContactPage, getNewsById, getPageContent, getPdf, submitCareerApplication, trackContainer, updateCareerListing, updateContactPage, updateNews, uploadPdf, upsertPageContent } from '../controller/adminController.js'
import upload from '../middleware/upload.js'
import { adminAuth } from '../middleware/adminAuth.js'

const router = express.Router()

router.post('/login',  adminLogin)
router.post('/content',upload.single('image'),adminAuth, upsertPageContent)
router.get('/content/:page',adminAuth, getPageContent)
router.delete('/content/:page',adminAuth, deletePageContent)

router.post('/contact',adminAuth, updateContactPage)
router.get('/contact',adminAuth, getContactPage)


router.post("/pdf", upload.single("pdf"), adminAuth, uploadPdf);
router.get("/pdf/:page", adminAuth, getPdf);

router.get("/career-listings",adminAuth, getAllCareerListings);
router.get("/career-listings/:id",adminAuth, getCareerListingById);
router.post("/career-listings",adminAuth, createCareerListing);
router.put("/career-listings/:id", adminAuth, updateCareerListing);
router.delete("/career-listings/:id", adminAuth, deleteCareerListing);

router.post("/career-application",adminAuth, upload.single("cvFile"), submitCareerApplication);
router.get("/career-application",adminAuth, getCareerApplications);

router.post('/news/add', adminAuth, upload.single('image'), addNews);
router.get('/news',adminAuth,  getAllNews);
router.get('/news/:id',adminAuth, getNewsById);
router.put('/news/:id',adminAuth, upload.single('image'), updateNews);
router.delete('/news/:id',adminAuth, deleteNews);
router.get("/tracking",adminAuth, trackContainer);


export default router