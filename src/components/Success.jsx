import React from "react";

export const Success = ({ count }) => {
    return (
        <div className="success-block">
            <img src="./assets/success.svg" als="Success" />
            <h3>Success!</h3>
            <p>An invitation has been sent to {count} users.</p>
            <button onClick={() => window.location.reload()} className="send-invite-btn">Back</button>
        </div>
    );
};