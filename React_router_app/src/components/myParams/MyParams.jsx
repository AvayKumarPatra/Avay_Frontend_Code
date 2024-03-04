import { useParams } from "react-router-dom";

const MyParams = () => {
  const { UserId } = useParams();
  return (
    <h1 className="text-center  text-yellow-600 font-bold bg-slate-500">
      User :{UserId}
    </h1>
  );
};

export default MyParams;
