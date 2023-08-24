import React from "react";
import { UserContext, ChannelContext } from "../App";

const ComponentE = () => {
  return (
    <>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return <div>User Context value {user}, channel Context {channel}</div>;
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </>
  );
};

export default ComponentE;
