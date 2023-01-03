import React from "react";

export const Success = ({ count }) => {
    return (
        <div className="success-block">
            <img src="/assets/success.svg" als="Success" />
            <h3>Success!</h3>
            <p>An invitation has been sent to all {count} users.</p>
            <button className="send-invite-btn">Back</button>
        </div>
    );
};