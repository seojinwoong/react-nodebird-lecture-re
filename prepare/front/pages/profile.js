import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followerList = [{nickname: '제로초'}, {nickname: '이정식'}, {nickname: '서진웅'}];
    const followingList = [{nickname: '제로초'}, {nickname: '이정식'}, {nickname: '서진웅'}];

    return (
        <>
            <Head>
                <title>NodeBird - 내 프로필</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowList header="팔로워 목록" data={followerList}/>
            </AppLayout>
        </>
    );
};
export default Profile;