import React from 'react';
import useNasaAPOD from "../../hooks/useNasaAPOD";
import Sidebar from "../sidebarSectionComponent/sidebarSectionComponent";
import PostsSection from "../postsSectionComponent/postsSectionComponent";
import useRoverImages from "../../hooks/useRoverImages";

export default function Main() {
    const { pictureData, isLoading, error } = useNasaAPOD();
    const { latestImage, loading: roverLoading } = useRoverImages();

    return (
        <div className="container mx-auto flex flex-wrap py-6 px-20">
            {/* Posts Section */}
            <PostsSection pictureData={pictureData} latestRoverImage={latestImage} />

            {/* Sidebar Section */}
            <Sidebar />
        </div>
    );
}
