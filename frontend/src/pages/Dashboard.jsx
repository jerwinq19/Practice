import axiosInstance from "../utils/axios";
import { useEffect, useState } from "react";

const DashboardView = () => {
    const [dashboardData, setDashData] = useState({});
    const access_token = localStorage.getItem("access_token");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("dashboard/", {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                });
                setDashData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [access_token]);

    console.log(dashboardData.freq_category)

    return (
        <div>
            <h1>This dashboard</h1>
            <section>
                <div>
                    <h1>Total Register user.</h1>
                    {dashboardData.total_user}
                </div>
                <div>
                    <h1>Total Thread Posted user.</h1>
                    {dashboardData.thread_count}
                </div>
            </section>

        </div>
    );
};

export default DashboardView;
