import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get, isArray } from "lodash";
import { setUserList, setUserDetails } from "../store/actions";
import UserCard from "../components/UserCard";

const UserList = ({ setUserList, list, setUserDetails }) => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setUserList(result));
  }, [setUserList]);
  return (
    <div className="row">
      {isArray(list) &&
        list.map((user) => (
          <div className="col-md-12" key={user.id}>
            <UserCard user={user} setUserDetails={setUserDetails} />
          </div>
        ))}
    </div>
  );
};

const mapDispatchToProps = { setUserList, setUserDetails };
const mapStateToProps = (state) => ({
  list: get(state, "users"),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
