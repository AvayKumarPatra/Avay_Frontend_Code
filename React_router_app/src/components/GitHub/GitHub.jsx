import { useEffect, useState } from "react";

const GitHub = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://github.com/AvayKpatra")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-cnter m-4 bg-gray-600 text-white p-4 text-3xl">
      GitHub Followers :
    </div>
  );
};

export default GitHub;
