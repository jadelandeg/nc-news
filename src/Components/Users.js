import { useEffect, useState } from "react/cjs/react.development";
import { getAllUsers } from "../Utils/utils";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getAllUsers()
      .then((usersFromAPI) => {
        setUsers(usersFromAPI);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return (
    <div className="users">
      <h2>Users</h2>
      <ul>
        {users.map((user) => {
          return <li key={user.username}>{user.username}</li>;
        })}
      </ul>
    </div>
  );
};

export default Users;
