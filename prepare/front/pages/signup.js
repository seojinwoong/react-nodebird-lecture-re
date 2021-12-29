import AppLayout from "../components/AppLayout";
import Head from 'next/head';

const Signup = () => {
    return (
        <>
            <Head>
                <title>NodeBird - 회원가입</title>
            </Head>
            <AppLayout>
                <div>회원가입 페이지</div>
            </AppLayout>
        </>
    )
};
export default Signup;