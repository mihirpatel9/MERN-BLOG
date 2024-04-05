import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DashProfile from "../components/DashProfile";
import DashSidebar from "../components/DashSidebar";
import DashPosts from "../components/DashPosts";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/*Profile...*/}
      {tab === "profile" && <DashProfile />}
      {/* posts... */}
      {tab === "posts" && <DashPosts />}
    </div>
  );
}
