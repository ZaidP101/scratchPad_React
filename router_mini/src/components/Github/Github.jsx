import React, { useEffect, useState } from "react";

function Github() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/ZaidP101")
            .then((response) => response.json())
            .then((userData) => {
                console.log(userData);
                setData(userData);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-500 text-xl">
                Loading...
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-800 text-white p-8 rounded-xl shadow-lg max-w-md mx-auto mt-10">
            <img
                src={data.avatar_url}
                alt="GitHub Avatar"
                className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-md mb-4 hover:scale-105 transform transition duration-300"
            />
            <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
            <p className="text-gray-300 text-sm mb-4">@{data.login}</p>
            <p className="text-lg">
                Followers:{" "}
                <span className="font-semibold text-orange-400">
                    {data.followers}
                </span>
            </p>
        </div>
    );
}

export default Github;