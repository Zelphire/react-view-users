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

  const returnBack = () => {
    history.push("/users");
  };
  return (
    <>
      <div className="row ">
        <div className="col-sm-12 m-2">
          <h4 className="float-left">User Information</h4>
        </div>
      </div>
      <div className="card mb-2 ml-2 mt-4 bg-light">
        <div className="card-body text-left">
          <p class="card-text ml-3">
            <label>Address : </label>
            <span className="ml-3">
              {get(userDetails, "address.suite")},
              {get(userDetails, "address.street")},
              {get(userDetails, "address.city")},
              {get(userDetails, "address.zipcode")}
            </span>
          </p>
          <br />
          <p class="card-text ml-3">
            <label>Phone : </label>{" "}
            <span className="ml-3">
              {get(userDetails, "phone", "unavailable")}
            </span>
          </p>
          <br />
          <p class="card-text ml-3">
            <label>Email : </label>{" "}
            <span className="ml-3">
              {get(userDetails, "email", "unavailable")}
            </span>
          </p>
          <br />

          <p class="card-text ml-3">
            <label>Company Name :</label>{" "}
            <span className="ml-3">
              {get(userDetails, "company.name", "unavailable")}
            </span>
          </p>
          <br />
          <p class="card-text ml-3">
            <label>Website :</label>{" "}
            <span className="ml-3">
              {get(userDetails, "website", "unavailable")}
            </span>
          </p>
          <br />
        </div>
        <div class="card-footer ">
          <button
            type="button"
            class="btn btn-secondary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
            onClick={returnBack}
          >
            Back
          </button>
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
