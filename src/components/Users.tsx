import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { GetListUser } from "../Api/MyApi";
export type UserType = {
   id: number;
   name: string;
   email: string;
   phone: string;
   website: string;
};
type UsersType = Array<UserType>;

const Users = (props: any) => {
   const { isLoading, error, data } = GetListUser();
   if (isLoading) {
      return <>Loading...</>;
   }

   if (error) {
      return <>Error...</>;
   }

   return (
      <div className="users">
         <h1>All users</h1>
         <Link
            to="/users/new"
            state={{ from: "all users", userName: "Bikashweb" }}
         >
            Add a new user
         </Link>
         <div className="users__list">
            {data &&
               data.map((user: any) => (
                  //single user card
                  <div className="users__card" key={user.id}>
                     <Link to={`/users/${user.id}`}>
                        <p>
                           Name:
                           <span className="normal">{user.name}</span>
                        </p>
                     </Link>
                  </div>
               ))}
         </div>
      </div>
   );
};

export default Users;
