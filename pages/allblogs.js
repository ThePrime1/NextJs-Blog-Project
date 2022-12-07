import styles from '../styles/AllBlogs.module.css';
import Link from 'next/link';

const AllBlogs = ({ blogs }) => {

    return (
        <div className={styles.body}>
            {blogs.map(blog => (
                <div key={blog.id} className={styles.content}>
                    <Link href={'../blogs/' + blog.id} className={styles.a}>
                        <h1 className={styles.h1}>{blog.title}</h1>
                        <p className={styles.p}>{blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export async function getStaticProps(context) {
    const response = await fetch('https://nextjs-course-f5437-default-rtdb.firebaseio.com/blogs.json')
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

    return {
        props: {
            blogs: transformedData
        },
        revalidate: 10
    }

}

export default AllBlogs;