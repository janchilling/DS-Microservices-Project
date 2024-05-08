import { useContext } from "react";
import Main from "../../components/mainComponent/mainComponent";
import Features from "../../components/featuresComponent/featuresComponent";
import Testimonial from "../../components/testimonialComponent/testimonialComponent";
import CallToAction from "../../components/callToActionComponent/callToActionComponent";
import InstructorMain from "../../components/instructorMainComponent/instructorMain";
import UserContext from '../../ContextComponent/ContextComponent';


export default function Home() {

    const { user } = useContext(UserContext);

    // Check if user is an instructor
    const isInstructor = user && user.Type === "instructor";

    return (
        <>
            {isInstructor ? (
                <InstructorMain />
            ) : (
                <>
                    <Main/>
                    <Features/>
                    <Testimonial/>
                    <CallToAction/>
                </>
            )}
        </>
    );
}
