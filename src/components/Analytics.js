import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageview } from "ga-gtag";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      pageview(location.pathname + location.search);
    }
  }, [location]);

  return null;
};

export default Analytics;
