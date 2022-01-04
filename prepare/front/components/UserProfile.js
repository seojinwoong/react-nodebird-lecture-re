import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(logoutAction());
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