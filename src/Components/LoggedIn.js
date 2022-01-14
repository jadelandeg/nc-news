const LoggedIn = ({ user }) => {
  return (
    <div>
      <span className="logged-in">Currently logged in as: {user}</span>
    </div>
  );
};

export default LoggedIn;
