import { useEffect, useState } from "react";
import { getAllUsers } from "../Utils/utils";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllUsers()
      .then((usersFromAPI) => {
        setUsers(usersFromAPI);
        setIsError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return isError ? (
    <p>something went wrong...</p>
  ) : isLoading ? (
    <p>loading...</p>
  ) : (
    <div className="users">
      <h2>Users</h2>
      <ul className="list">
        {users.map((user) => {
          return (
            <li className="usernames" key={user.username}>
              {user.username}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
