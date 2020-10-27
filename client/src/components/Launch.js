import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "../test.css";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launch = (props) => {
  let { flight_number } = props.match.params;
  flight_number = parseInt(flight_number);
  return (
    <>
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          if (loading)
            return <h4 style={{ textAlign: "center" }}>Loading...</h4>;
          if (error) console.log(error);

          const {
            mission_name,
            flight_number,
            launch_year,
            launch_success,
            rocket: { rocket_id, rocket_name, rocket_type },
          } = data.launch;

          return (
            <div>
              <h1 className="display-4 my-3" style={{ textAlign: "center" }}>
                <span className="text-dark">Mission:</span> {mission_name}
              </h1>
              <h4 className="mb-3" style={{ textAlign: "center" }}>
                Launch Details
              </h4>
              <ul className="list-group mr-5 ml-5">
                <li className="list-group-item">
                  Flight Number: {flight_number}
                </li>
                <li className="list-group-item">Launch Year: {launch_year}</li>
                <li className="list-group-item">
                  Launch Successful:{" "}
                  <span
                    className={classNames({
                      "text-success": launch_success,
                      "text-danger": !launch_success,
                    })}
                  >
                    {launch_success ? "Yes" : "No"}
                  </span>
                </li>
              </ul>

              <h4 className="my-3" style={{ textAlign: "center" }}>
                Rocket Details
              </h4>
              <ul className="list-group mr-5 ml-5">
                <li className="list-group-item">Rocket ID: {rocket_id}</li>
                <li className="list-group-item">Rocket Name: {rocket_name}</li>
                <li className="list-group-item">Rocket Type: {rocket_type}</li>
              </ul>
              <div
                style={{ textAlign: "center", marginBottom: 20, marginTop: 30 }}
              >
                <Link
                  to="/"
                  className="btn btn-secondary"
                  style={{ textAlign: "center", fontSize: 23 }}
                >
                  Back
                </Link>
              </div>
            </div>
          );
        }}
      </Query>
    </>
  );
};

export default Launch;
