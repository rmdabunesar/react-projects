import React, { useEffect, useState } from "react";
import UserData from "./UserData";
import "./style.css"

const GitHubProfileFinder = () => {
  const [userName, setUserName] = useState("rmdabunesar");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchGitHubUserData() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);

      console.log(data)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit() {
    if (userName.trim() !== "") {
      fetchGitHubUserData();
    }
  }

  useEffect(() => {
    fetchGitHubUserData();
  }, []);

  if (loading) {
    return <p>Loading data, please wait!</p>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-name"
          placeholder="Search GitHub Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData !== null && !error ? <UserData user={userData} /> : null}
    </div>
  );
};

export default GitHubProfileFinder;
