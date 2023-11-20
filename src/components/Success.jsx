import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Done!</h3>
      <p>{`The invite was sent to ${count} ${count > 1 ? 'users' : 'user'} `}</p>
      <button
        onClick={() => window.location.reload()}
        className="send-invite-btn"
      >
        Go back
      </button>
    </div>
  )
};
