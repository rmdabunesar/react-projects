import React from "react";

const GitHubProfileFinder = () => {
  return (
    <div className="githun-profile-container">
      <div className="inpur-wrapper">
        <input
          type="text"
          name="search-by-name"
          placeholder="Search GitHub Username..."
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default GitHubProfileFinder;
