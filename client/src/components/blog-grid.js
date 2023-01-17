import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogGrid from './blog-components/blog-grid';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const BlogGridPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog Grid" />
        <BlogGrid />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default BlogGridPage

