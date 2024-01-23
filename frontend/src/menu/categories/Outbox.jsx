import { useContext, useEffect, useState } from "react";
import UserContext from "../../UserContext";


export default function Outbox() {
  const [mes, setMes] = useState([]);
  const { user } = useContext(UserContext)
  useEffect(() => {
    fetch("http://localhost:8200/emails/outbox/",{
      headers:{Authorization: "Bearer " + user.accessToken }
    })
      .then((f) => f.json())
      .then((data) => {
        setMes(data);
      });
  }, []);

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div>
    <div className=" flex justify-center text-2xl">inbox</div>
    {mes.map((email) => (
      <div
        key={email._id}
        className="flex justify-between border border-slate-950 p-2 h-10 hover:bg-slate-400  overflow-hidden "
      >
        {/* <div onClick={} className="flex  justify-between w-full "> */}

        <div className="flex  justify-between w-full  ">
          <div className="">{email.sender.email}</div>
          <div className="">{email.body}</div>
          <div className="flex">
            <div> {formatTime(email.date)}</div>
            <button className="ml-7 hover:bg-gray-500">🗑️</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);
}
