import React from 'react';
import { GoogleOAuthProvider, googleLogout } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'universal-cookie';

function GoogleOAuth() {
    const cookies = new Cookies;
    return (
        <div>
            <GoogleOAuthProvider clientId='151986230899-j9i1uqs434sdbuc20kts1q850jg5jjpp.apps.googleusercontent.com'>

                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const credentialResponseDecode = jwtDecode(credentialResponse.credential)
                        cookies.set('email', credentialResponseDecode.email,{
                            secure: true,
                            sameSite: 'None',
                            path: '/'
                        });

                        cookies.set('nombreUsu', credentialResponseDecode.name,{
                            secure: true,
                            sameSite: 'None',
                            path: '/'
                        });

                        cookies.set('iniciado', true);

                        window.location.href = '/';
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    )
}
export default GoogleOAuth;


