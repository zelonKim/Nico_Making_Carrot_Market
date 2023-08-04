/* 
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState();

  const router = useRouter();

  useEffect(() => {
    fetch("/api/users/me")
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          return router.replace("/enter");
        }
        setUser(data.profile);
      });
  }, [router]);
  return user;
} 
*/

////////////////////


import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function useUser() {
  const { data, error } = useSWR("/api/users/me");
  const router = useRouter();
  
  useEffect(()=> {
    if (data && !data.ok) {
      router.replace("/enter")
    }
  }, [data, router])

  return { user: data?.profile,  isLoading: !data && !error }
}


