import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gtag } from "ga-gtag";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      gtag("event", "page_view", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default Analytics;
