import { useEffect, useState, useCallback } from "react";
import Suggestions from "./Suggestions";
import "./style.css";

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterUsers, setFilterUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
  
      if (data?.users?.length) {
        setUsers(data.users);
        setError(null);
      }
    } catch (err) {
      setError("Failed to fetch users. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchListOfUsers();
  }, []);
  

  const handleDropdown = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filterData = users.filter((user) =>
        user.firstName.toLowerCase().includes(query)
      );
      setFilterUsers(filterData);
      setShowDropdown(filterData.length > 0);
    } else {
      setShowDropdown(false);
    }
  };

  const handleSelectUser = (user) => {
    setSearchParam(user.firstName);
    setSelectedUser(user);
    setShowDropdown(false);
  };

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <p>Loading data, please wait!</p>
      ) : (
        <>
          <input
            type="text"
            name="search-user"
            placeholder="Search Users..."
            value={searchParam}
            onChange={handleDropdown}
          />
          {error && <p className="error-message">{error}</p>}
          {showDropdown && <Suggestions data={filterUsers} onSelect={handleSelectUser} />}
          {selectedUser && (
            <div className="user-details">
              <h3>User Details</h3>
              <p><strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchAutocomplete;
