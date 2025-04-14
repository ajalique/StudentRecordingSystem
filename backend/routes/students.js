const express = require("express");
const multer = require("multer");
const { body, validationResult } = require("express-validator");
const { getStudents, addStudent, updateStudent, deleteStudent } = require("../controllers/studentController");

const router = express.Router();

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
  });
  const upload = multer({ storage });  

// Get all students
router.get("/", getStudents);

// Add a new student (with validation)
router.post(
    "/",
    upload.single("image"),
    [
      body("name").isString().notEmpty().withMessage("Name is required"),
      body("course").isString().notEmpty().withMessage("Course is required")
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      addStudent(req, res); // image is in req.file
    }
  );  

router.get("/", getStudents);
router.put("/:id", upload.single("image"), updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;

