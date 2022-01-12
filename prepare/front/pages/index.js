import AppLayout from "../components/AppLayout";
import { useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from '../components/PostCard';

const Home = () => {
    const { me } = useSelector(state => state.user);
    // 또는 ,,, 이렇게도 가능 => const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    const { mainPosts } = useSelector(state => state.post);
    // 또는 ,,, 이렇게도 가능 => const mainPosts = useSelector(state => state.post.mainPosts);

    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post, index) => <PostCard key={post.id} post={post}/>)}
        </AppLayout>
    )
}

export default Home;