import React from "react";

export default function AppFeaures() {
  return (
    <div>
      <br />
      <ul>
        <h5> The App has following feaures</h5>

        <li>You can only use the app after signing up!</li>
        <li>
          After successful sign up use the credentials to login to your account
        </li>
        <li>You can make rooms to add 'rooms' to your home</li>
        <li>
          You can see a dashboard which tells you the relevant documents about
          to expire in next 30 days
        </li>
        <li>
          Rooms have appliances (You can store documents for these appliances
          along with images and important dates)
        </li>
        <li>
          Documents can be edited/deleted and 'opened' in a another window{" "}
        </li>
        <li>
          Progress bar will show the remaining days to expiry vs the total
          warranty days
        </li>
        <li>
          The 'days remaining' is color coded to aid understanding of the status
          of expiring warranties 'RED' means expiry is within 30 days from today
          and 'GREEN is for more than 30 days warranty expiration
        </li>
        <li>
          You will receive notifications about the warranty '30' days expiry by
          default
        </li>
      </ul>
    </div>
  );
}
