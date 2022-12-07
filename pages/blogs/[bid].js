import path from 'path';

const BlogDetails = (props) => {
    const {loadedBlogs} = props;

    const blogs = [];
    for (const key in loadedBlogs) {
        blogs.push({
            id: key,
            author: loadedBlogs[key].author,
            title: loadedBlogs[key].title,
            description: loadedBlogs[key].description
        })
    }
    
    return (
        <div>
            {blogs && blogs.map((blog) => (
                <div key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>{blog.author}</p>
                    <p>{blog.description}</p>
                </div>
            ))}
        </div>
    );
}

async function getData() {
    const response = await fetch('https://nextjs-course-f5437-default-rtdb.firebaseio.com/blogs.json');
    const data = await response.json();

    const transformedData = [];
    for (const key in data) {
        transformedData.push({
            id: key,
            author: data[key].author,
            title: data[key].title,
            description: data[key].description
        })
    }

    return transformedData;
}

export async function getStaticProps(context) {
    const { params } = context;
    const blogId = params.bid;

    const data = await getData();
    const blogs = data.find((blog) => blog.id === blogId);
    return {
        props: {
            loadedBlogs: blogs
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    const data = await getData();

    const ids = data.map(d => ({
        params: {bid: d.id.toString()}
    }));

    return {
        paths: ids,
        fallback: false
    }
}
 
export default BlogDetails;