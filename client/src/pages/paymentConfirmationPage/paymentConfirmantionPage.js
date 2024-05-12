import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import usePayment from "../../hooks/usePayment";
import useViewCourseById from "../../hooks/useViewCourseById";
import LoadingSpinner from "../../components/loadingSpinnerComponent/loadingSpinnerComponent";

export default function PaymentConfirmationPage() {
    const location = useLocation();
    const courseId = new URLSearchParams(location.search).get("courseId");
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    const {updatePayment, updateEnrollment} = usePayment();
    const {course, loading, error, viewOneCourseById} = useViewCourseById();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (courseId) {
                // Fetch course details based on courseId
                viewOneCourseById(courseId);
                console.log("Course data fetched:", course);
            }
            try {
                console.log("Hi1")
                if (courseId) {
                    if (course && user) {
                        const paymentProduct = {
                            courseId: course._id,
                            price: course.Price,
                            courseCode: course.CourseCode,
                            userId: user._id
                        };
                        console.log(paymentProduct)
                        const enrollmentProduct = {
                            userId: user._id,
                            courseId: course._id
                        };
                        console.log(enrollmentProduct)
                        await updatePayment(paymentProduct, token);
                        console.log("3")
                        await updateEnrollment(enrollmentProduct, token);
                        console.log("4")
                        navigate(`/coursePage/${courseId}`);
                    }
                }
            } catch (error) {
                console.error("Error handling payment and enrollment:", error);
            }
        };

        fetchData();

    }, [courseId]);


    return <LoadingSpinner/>;
}
