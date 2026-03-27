import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Navbars/Navbar/Navbar";
import { useUser } from '../../Contexts/ContextProvider';
import apiClient from '../../../api/apiClient';
import { API_ENDPOINTS } from '../../../api/endpoints';
import IndividualHomeBlogDisplayer from '../../OutsideDisplayer/IndividualHomeBlogDisplayer/IndividualHomeBlogDisplayer';
import './MyBlogs.css';

const MyBlogs = () => {
    const { userId, loading } = useUser();
    const [blogs, setblogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            return;
        }
        if (!userId) {
            navigate("/login");
            return;
        }
        const fetchBlogs = async () => {
            try {
                const response = await apiClient.get(API_ENDPOINTS.BLOGS.GET_BY_USER, { params: { userId } });
                setblogs(response.data.blogs);
            }
            catch (error) {
                console.log("Error occured", error);
            }
        }
        fetchBlogs();
    }, [userId, loading,navigate])

    return (
        <div className="my-blogs-container">
            <Navbar />
            <div className="my-blogs-content">
                <h1>Blogs</h1>
                <div className="posts-grid">
                    {blogs.map((blog) => (
                        <IndividualHomeBlogDisplayer key={blog.blog_id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyBlogs;