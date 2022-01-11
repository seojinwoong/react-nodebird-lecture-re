import { useCallback, useState } from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from "antd";
import useInput from '../hooks/useInput';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST } from '../reducers/user';

const Signup = () => {
    const dispatch = useDispatch();
    const { signUpLoading } = useSelector((state) => state.user);

    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);

    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(true);

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
    }, []);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        dispatch({
            type: SIGN_UP_REQUEST,
            data: { email, password, nickname }
        })

    }, [email, password, passwordCheck, term]);

    return (
        <AppLayout>
            <Head>
                <title>NodeBird - 회원가입</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-email">이메일</label>
                    <br />
                    <Input name='user-email' type='email' value={email} onChange={onChangeEmail} required/>
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input name='user-nick' value={nickname} onChange={onChangeNickname} required/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input name='user-password' type="password" value={password} onChange={onChangePassword} required/>
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input name='user-password-chekc' type="password" value={passwordCheck} onChange={onChangePasswordCheck} required/>
                    { passwordError && <ErrorMsg>비밀번호가 일치하지 않습니다.</ErrorMsg> }
                </div> 
                <div>
                    <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
                    {termError && <ErrorMsg>약관에 동의하셔야 합니다.</ErrorMsg>}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    )
};

const ErrorMsg = styled.div`
    color: red;
`;  

export default Signup;