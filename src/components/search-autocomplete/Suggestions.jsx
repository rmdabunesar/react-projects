const Suggestions = ({ data, onSelect }) => {
  if (!data.length) return null;

  return (
    <div role="listbox" className="suggestions-container">
      <ul>
        {data.map((user) => (
          <li key={user.id} role="option" onClick={() => onSelect(user)}>
            {user.firstName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
