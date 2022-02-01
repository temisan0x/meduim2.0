import Header from "../../components/Header";
import { sanityClient, urlFor } from '../../sanity';
import { Post } from "../../typings";

const Post = () => {
    return ( 
        <main>
            
        </main>
    );
}

export default Post;

//prefetch all the data using getstatic path
export const getStaticPath = async () => {
    const query = `*[_type == 'post']{
        _id,
        title,
        slug,
        
        author -> {
        name,
        image
    }}`

    const posts = await sanityClient.fetch(query);
    
    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}