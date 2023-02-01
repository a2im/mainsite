'use client';
import React, { useEffect, useState } from "react";
import MyNavbar from './navbar';
import { Amplify, withSSRContext } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure({...awsExports, ssr: true});
import { Auth } from 'aws-amplify';
import Loading from "./loading";

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export function App({children}) {
    const [user, setUser] = useState();
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const amplifyUser = await Auth.currentAuthenticatedUser();
          setUser(amplifyUser);
        } catch (err) {
          setUser(null);
        }
      };
  
      fetchUser();
    }, []);

    if (user) {
    return (
        <>
<MyNavbar signOut={signOut}/>
{children}
</>
    )
} else {
    return <Loading/>
  };
};

export default withAuthenticator(App);

export async function getServerSideProps({ req }: {req : any}) {
    // wrap the request in a withSSRContext to use Amplify functionality serverside.
    const SSR = withSSRContext({ req });
  
    try {
      // currentAuthenticatedUser() will throw an error if the user is not signed in.
      const user = await SSR.Auth.currentAuthenticatedUser();
  
      // return all the messages from the dynamoDB
      return {
        props: {
          user: user,
        },
      };
    } catch (error) {
      // We will end up here if there is no user signed in.
      // We'll just return a list of empty messages.
      return {
        props: {
          user: [],
        },
      };
    }
  }