import { useQuery } from "@tanstack/react-query";

const GetListUser = () => {
   const result = useQuery({
      queryKey: ["GetListUser"],
      queryFn: () =>
         fetch(`https://jsonplaceholder.typicode.com/users`).then((res) =>
            res.json()
         ),
      staleTime: Infinity,
   });
   return result;
};

const DetailUser = (id: any) => {
   const result = useQuery({
      queryKey: ["todos", id],
      queryFn: () =>
         fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
            res.json()
         ),
      staleTime: Infinity,
   });
   return result;
};
export { DetailUser, GetListUser };
