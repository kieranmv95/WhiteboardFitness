import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "../lib/ga";

const usePageViewTracking = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      console.log(url);
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};

export default usePageViewTracking;
