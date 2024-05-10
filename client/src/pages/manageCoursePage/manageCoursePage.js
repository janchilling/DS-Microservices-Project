import ManageCourse from '../../components/ManageCourseComponent/manageCourse';

export default function manageCoursePage() {
    return (
        <section className="py-8 bg-white md:py-16">
            <h2 className="text-xl font-semibold sm:text-2xl">Manage all Courses</h2>
                <div className="mt-6">
                    <ManageCourse/>
                </div>
        </section>
    )
}