import { useParams, Link } from "react-router-dom";
import { DetailUser } from "../Api/MyApi";

const SingleUser = () => {
   const params = useParams();

   const { data, isLoading } = DetailUser(params.userId);

   if (isLoading) {
      return <>Loading...</>;
   }

   return (
      <>
         <Link to="/users">Go back</Link>
         {data && (
            <div className="users__card" key={data.id}>
               <p>
                  Name:
                  <span className="normal">{data.name}</span>
               </p>

               <p>
                  Email:
                  <span className="normal">{data.email}</span>
               </p>
               <p>
                  Phone:
                  <span className="normal">{data.phone}</span>
               </p>
               <p>
                  Website:
                  <span className="normal">{data.website}</span>
               </p>
            </div>
         )}
      </>
   );
};

export default SingleUser;
