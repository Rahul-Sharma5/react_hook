import React, { useContext } from "react";
import ComponentE from "./ComponentE";
import { UserContext, ChannelContext } from "../App";

const ComponentD = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <>
      {user} - {channel}
    </>
  );
};

export default ComponentD;
