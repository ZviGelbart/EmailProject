import React, { useEffect } from "react";
import axios from "axios";
export default function Inbox() {
  useEffect(() => {
    axios.get("http://localhost:8200/emails/inbox").then((req) => {
      console.log(req.data);
    });
  }, []);

  return <div></div>;
}
