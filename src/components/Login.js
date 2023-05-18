/**
 * login component
 */
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";

import { loginUrl, getTokenEndpoint, getTokenBody } from '../config/login';
import "./Login.css"

const Login = ({ setUser }) => {
    const [code, setCode] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        //get oAuth code
        const param = searchParams.get("code");
        if (param) {
            setCode(param);
            searchParams.delete("code")
            searchParams.delete("scope")
            searchParams.delete("authuser")
            searchParams.delete("prompt")
            setSearchParams(searchParams);
        }
    }, [searchParams])

    useEffect(() => {
        //get oAuth access token
        if (code) {
            fetch(getTokenEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `code=${code}&${getTokenBody}`,
            })
            .then((response) => response.json())
            .then((access) => {
                const { access_token } = access;
                fetch(
                    `https://www.googleapis.com/userinfo/v2/me?access_token=${access_token}`
                )
                    .then((response) => response.json())
                    .then((profile) => {
                        // console.log(profile);
                        const { email, name, picture } = profile;
                        setUser(email, name, picture );
                    })
            });
        }
    }, [code])

    return <>
        <a href={loginUrl} className="top__loginBtn">
            <img src={process.env.PUBLIC_URL + "/imgs/googleBtn.png"} alt="" />
        </a>
    </>
}

export default Login;