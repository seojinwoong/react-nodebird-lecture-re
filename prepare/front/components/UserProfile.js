import { Card, Avatar, Button } from 'antd';
import { useCallback } from 'react';

const UserProfile = ( { setIsLoggedIn } ) => {
    const onLogout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <Card
            actions={[
                <div key='twit'>게시글 수<br />0</div>,
                <div key='following'>팔로잉<br />0</div>,
                <div key='followers'>팔로워<br />0</div>
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>ZC</Avatar>}
                title="Zerocho"
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;