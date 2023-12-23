import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import GoogleLogin from './GoogleLogin';
import { useAuth } from '@/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const authContext = useAuth();
  const navigate = useNavigate();

  if (!authContext) {
    // Handle when context is not available
    return <div>Loading...</div>;
  }

  const { setUser, googleJWT, setAuthed, setRefreshToken, user } = authContext;

  function onSubmit() {
    const requestData = {
      IdToken: googleJWT, // Replace with your actual token value
    };

    const loginRequest = axios({
      method: 'post',
      url: 'https://api.direct-r.com/api/identity/login/google',
      data: requestData,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const detailsRequest = loginRequest.then((loginResponse) => {
      const { AccessToken } = loginResponse.data;
      axios.defaults.headers.common['Authorization'] = `Bearer ${AccessToken}`;
      return axios({
        method: 'get',
        url: 'https://api.direct-r.com/api/account/details',
        data: requestData,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    });

    axios
      .all([loginRequest, detailsRequest])
      .then(
        axios.spread((loginResponse, detailsResponse) => {
          console.log('Login Response:', loginResponse);
          console.log('Details Response:', detailsResponse);
          setRefreshToken(loginResponse.data['RefreshToken']);
          setUser(detailsResponse.data);
          setAuthed(true);
          console.log(user);
          navigate('/home');
        })
      )
      .catch((error) => {
        console.error('API Error:', error);
      });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-normal font-nhgdp m-1 bg-white border-blue-800 border text-blue-800 rounded-full px-5 hover:text-white">
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] font-nhgdp text-base">
        <DialogHeader>
          <DialogTitle>Log In to Direct'r</DialogTitle>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        <hr className="w-full max-w-screen-xl border-gray-200 sm:mx-auto dark:border-gray-700" />
        <GoogleLogin />
        <DialogFooter className="mt-2">
          <Button
            className="font-normal mx-1 mt-2 bg-blue-800 rounded-full px-5"
            type="submit"
            onClick={onSubmit}
          >
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
