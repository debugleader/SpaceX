import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  return (
    <>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading)
            return <h4 style={{ textAlign: "center" }}>Loading...</h4>;
          if (error) console.log(error);
          return (
            <>
              <div className="cardo">
                <div className="my-3" style={{ marginLeft: 55 }}>
                  <p>
                    <span
                      style={{ borderRadius: 8 }}
                      className="px-3 mr-2 bg-success"
                    />{" "}
                    = Success
                  </p>
                  <p>
                    <span
                      style={{ borderRadius: 8 }}
                      className="px-3 mr-2 bg-danger"
                    />{" "}
                    = Fail
                  </p>
                </div>
              </div>
              {data.launches.map((launch) => (
                <LaunchItem key={launch.flight_number} launch={launch} />
              ))}
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Launches;
