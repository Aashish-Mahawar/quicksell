import React, { useState, useEffect } from 'react';
import './styles/App.css';
import kanban from './kanban';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();

      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <kanban
        tickets={tickets}
        users={users}
        groupingOption={groupingOption}
        sortBy={sortBy}
        setGroupingOption={setGroupingOption}
        setSortBy={setSortBy}
      />
    </div>
  );
};

export default App;
