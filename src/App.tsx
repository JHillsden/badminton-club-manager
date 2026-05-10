function App() {
  const sessions = [
    { id: 1, day: 'Tuesday', time: '19:00', spots: 16 },
    { id: 2, day: 'Sunday', time: '12:00', spots: 16 },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Badminton Club Manager</h1>
      <p>Upcoming Sessions</p>
      
      <div>
        {sessions.map(session => (
          <div 
            key={session.id} 
            style={{ 
              border: '1px solid #ccc', 
              padding: '15px', 
              marginBottom: '10px',
              borderRadius: '5px'
            }}
          >
            <h3>{session.day} - {session.time}</h3>
            <p>{session.spots} spots available</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;