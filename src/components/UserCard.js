import React from "react";
import { get } from "lodash";
import Avatar from "react-avatar";
import { useHistory } from "react-router-dom";

const UserCard = ({ user, setUserDetails }) => {
  const history = useHistory();

  const NavigateToRoute = () => {
    setUserDetails && setUserDetails(user);
    history.push("/userInfo");
  };

  return (
    <div
      className="card mb-2 ml-2 bg-success"
      style={{ width: "50%" }}
      role="button"
      onClick={NavigateToRoute}
    >
      <div className="card-body">
        <div className="row">
          <div className="col-md-2">
            <Avatar
              name={get(user, "name", "Unknown")}
              size="150"
              color="white"
              fgColor="black"
              round={true}
            />
          </div>
          <div className="col-md-10 ">
            <h4 className="card-title ">{get(user, "name", "")}</h4>
            <h5 className="card-subtitle mb-2">{get(user, "email", "")}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
