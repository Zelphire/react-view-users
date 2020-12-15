import React, { useEffect } from "react";
import { get, isUndefined } from "lodash";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const UserDetails = ({ userDetails }) => {
  const history = useHistory();
  useEffect(() => {
    if (isUndefined(userDetails)) {
      history.push("/users");
    }
  }, [userDetails, history]);
  return (
    <>
      <div className="row ">
        <div className="col-sm-12 m-2">
          <h4 className="float-left">User Details</h4>
        </div>
      </div>
      <div className="card mb-2 ml-2 mt-4 bg-light">
        <div className="card-body text-left">
          <p class="card-text ml-3">
            <label>Name :</label> <span>{get(userDetails, "name")}</span>
          </p>
          <br />
          <p class="card-text ml-3">
            <label>Address : </label>
            <span>
              {get(userDetails, "address.suite")},
              {get(userDetails, "address.street")},
              {get(userDetails, "address.city")},
              {get(userDetails, "address.zipcode")}
            </span>
          </p>
          <br />
          <p class="card-text ml-3">
            <label>Email : </label> <span>{get(userDetails, "email")}</span>
          </p>
          <br />
          <p class="card-text ml-3">
            <label>Phone : </label> <span>{get(userDetails, "phone")}</span>
          </p>
          <br />
          <p class="card-text ml-3">
            <label>Company Name :</label>{" "}
            <span>{get(userDetails, "company.name")}</span>
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {};
const mapStateToProps = (state) => ({
  userDetails: get(state, "userDetails"),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
