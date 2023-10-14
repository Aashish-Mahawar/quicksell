import React from 'react';

const ticketcard = ({ ticket, users }) => {
  const user = users.find(user => user.id === ticket.userId);

  return (
    <div style={styles.card}>
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Assigned to: {user ? user.name : 'Unassigned'}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '8px 0',
  },
};

export default ticketcard;
