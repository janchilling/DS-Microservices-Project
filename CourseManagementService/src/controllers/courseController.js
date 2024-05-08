let Course = require("../models/course");
const authenticateRole = require("../middleware/authenticationRole");
const { bucket } = require("../config/firebaseConfig");

//create new course
const createCourse = async(req, res) => {
    const { CourseName, CourseCode, Description, Instructor, Price, Duration } = req.body;
    const imageFile = req.file;

    // Check if image file is provided
    if (!imageFile) {
        return res.status(400).json({ message: 'Image file is required' });
    }

    try {
        // Upload image to Firebase Storage
        const imageName = `${Date.now()}_${imageFile.originalname}`;
        const file = bucket.file(imageName);
        const fileStream = file.createWriteStream({
            metadata: {
                contentType: imageFile.mimetype
            }
        });

        fileStream.on('error', (error) => {
            console.error(error);
            res.status(500).json({ message: 'Error uploading image' });
        });

        fileStream.on('finish', async () => {
            // Image uploaded successfully, get the public URL
            const imageUrl = `https://storage.googleapis.com/${bucket.name}/${imageName}`;

            // Create new course with the image URL
            const newCourse = new Course({
                CourseName,
                CourseCode,
                Description,
                Instructor,
                Price,
                ImageUrl: imageUrl,
                Duration
            });

            // Save the course to MongoDB
            await newCourse.save();
            res.json({ message: 'Course created successfully!' });
        });

        fileStream.end(imageFile.buffer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating course' });
    }
}

//view all courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();

        // Map each course to include the image URL
        const coursesWithImageUrls = courses.map(course => {
            return {
                _id: course._id,
                CourseName: course.CourseName,
                CourseCode: course.CourseCode,
                Description: course.Description,
                Instructor: course.Instructor,
                Price: course.Price,
                ImageUrl: course.ImageUrl,
                Duration: course.Duration
            };
        });

        res.json(coursesWithImageUrls);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error fetching courses' });
    }
};


//update a course by id
const updateCourse = async (req, res) => {
    let courseId = req.params.id;
    const { CourseName, CourseCode, Description, Instructor, Price, Duration } = req.body;

    const updateCourse = {
        CourseName,
        CourseCode,
        Description,
        Instructor,
        Price,
        Duration
    }

    const update = await Course.findByIdAndUpdate(courseId, updateCourse).then(() => {
        res.status(200).send({ status: "Course successfully updated!" })
    }).catch((error) => {
        console.log(error);
        res.status(500).send({ status: "Course update unsuccessful, please try again...", error: error.message });
    })
}

//delete course by id
const deleteCourse = async (req, res) => {

    let courseId = req.params.id;

    await Course.findByIdAndDelete(courseId).then(() => {
        res.status(200).send({ status: "Course deleted!" });
    }).catch((error) => {
        console.log(error);
        res.status(500).send({ status: "Course deletion unsuccessful!", error: error.message });
    })
}

//view one specific course by id
const viewOneCourseById = async (req, res) => {
    let courseId = req.params.id;

    const course = await Course.findById(courseId).then((course) => {
        res.status(200).send({ course });
    }).catch((error) => {
        console.log(error);
        res.status(500).send({ status: "Error with fetching the course!", error: error.message });
    })
}

//search course
const searchCourse =
    async (req, resp) => {
        let result = await Course.find({
            "$or": [
                {
                    CourseName: { $regex: req.params.key }
                },
                {
                    CourseName: { $regex: req.params.key }
                },
                {
                    Instructor: { $regex: req.params.key }
                }
            ]
        });
        resp.send(result);
}

module.exports = {
    createCourse,
    getAllCourses,
    updateCourse,
    deleteCourse,
    viewOneCourseById,
    searchCourse
};