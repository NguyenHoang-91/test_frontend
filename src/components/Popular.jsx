import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TitleHolder from './TitleHolder';
import LargeNewsHolder from '../components/newsHolder/LargeNewsHolder';
import SmallNewsHolder from '../components/newsHolder/SmallNewsHolder';


const Popular = ({ fetchNewestPosts, placeHolder , title}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const newestPosts = await fetchNewestPosts();
            setPosts(newestPosts.data);
        };
        fetchData();
    }, [fetchNewestPosts]);

    const largePosts = posts.slice(0, 2);
    const smallPosts = posts.slice(2, 6);

    return (
        <div className="flex w-full gap-6">
            {/* Main Content */}
            <section className="w-4/5">
                <div className="mb-10">
                    {/* Title */}
                    <TitleHolder title={title} />

                    {/* Large News */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {largePosts.map((post) => (
                            <Link to={`/posts/${post.slug}`} key={post.id}>
                                <LargeNewsHolder post={post} placeHolder={placeHolder} />
                            </Link>
                        ))}
                    </div>

                    {/* Small News */}
                    <section className="p-6">
                        {/* First 2 small posts */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {smallPosts.slice(0, 2).map((post) => (
                                <Link to={`/posts/${post.slug}`} key={post.id}>
                                    <SmallNewsHolder post={post} placeHolder={placeHolder} />
                                </Link>
                            ))}
                        </div>

                        {/* Next 2 small posts */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {smallPosts.slice(2, 4).map((post) => (
                                <Link to={`/posts/${post.slug}`} key={post.id}>
                                    <SmallNewsHolder post={post} placeHolder={placeHolder} />
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default Popular;