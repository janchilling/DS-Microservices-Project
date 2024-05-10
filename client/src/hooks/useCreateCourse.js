import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import firebaseConfig from "../config/firebase";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // Initialize storage with the Firebase app

const useCreateCourse = () => {
    const createCourse = async (
        UserId,
        CourseName,
        CourseCode,
        Description,
        Instructor,
        Price,
        ImageFile,
        Duration
    ) => {
        try {
            // Upload image to Firebase Storage
            const imageFileName = Date.now().toString(); // Use timestamp as file name
            const imageRef = ref(storage, `course-images/${imageFileName}`);
            await uploadBytes(imageRef, ImageFile);

            // Get download URL of the uploaded image
            const imageUrl = await getDownloadURL(imageRef);

            console.log(imageUrl);

            // Send course data along with image URL
            const response = await axios.post(
                "http://localhost:8000/CourseManagementService/course/addCourse",
                {
                    UserId,
                    CourseName,
                    CourseCode,
                    Description,
                    Instructor,
                    Price,
                    Image: imageUrl, // Use the download URL of the image
                    Duration,
                }
            );

            if (response.status === 200) {
                alert("Your Course was successfully created!");
            } else {
                alert("There was an issue creating the course, please try again...");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return { createCourse };
};

export default useCreateCourse;
