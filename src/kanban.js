import React from 'react';
import ticketcard from './ticketcard';
import './styles/kanban.css';

const kanban = ({ tickets, users, groupingOption, sortBy, setGroupingOption, setSortBy }) => {

  let groupedTickets;

  if (groupingOption === 'status') {

    groupedTickets = tickets.reduce((acc, ticket) => {
      const status = ticket.status;
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(ticket);
      return acc;
    }, {});
  } else if (groupingOption === 'user') {

    groupedTickets = tickets.reduce((acc, ticket) => {
      const userId = ticket.userId;
      if (!acc[userId]) {
        acc[userId] = [];
      }
      acc[userId].push(ticket);
      return acc;
    }, {});
  } else if (groupingOption === 'priority') {

    groupedTickets = tickets.reduce((acc, ticket) => {
      const priority = ticket.priority;
      if (!acc[priority]) {
        acc[priority] = [];
      }
      acc[priority].push(ticket);
      return acc;
    }, {});
  }


  Object.keys(groupedTickets).forEach(key => {
    groupedTickets[key].sort((a, b) => {
      if (sortBy === 'priority') {
        return b.priority - a.priority;
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  });

  return (
    <div>
      <div>
        <button onClick={() => setGroupingOption('status')}>Group by Status</button>
        <button onClick={() => setGroupingOption('user')}>Group by User</button>
        <button onClick={() => setGroupingOption('priority')}>Group by Priority</button>
      </div>
      <div>
        <button onClick={() => setSortBy('priority')}>ordering Priority</button>
        <button onClick={() => setSortBy('title')}>ordering Title</button>
      </div>
      <div>
        {Object.keys(groupedTickets).map(groupKey => (
          <div key={groupKey}>
            <h2>{groupKey}</h2>
            {groupedTickets[groupKey].map(ticket => (
              <ticketcard key={ticket.id} ticket={ticket} users={users} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default kanban;
