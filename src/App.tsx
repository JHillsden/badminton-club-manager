import { useState } from "react";

function App() {
  const sessions = [
    { id: 1, day: 'Tuesday', time: '19:00', spots: 16 },
    { id: 2, day: 'Sunday', time: '12:00', spots: 16 },
  ];

  const [bookedSessions, setBookedSessions] = useState<number[]>([]);

  const bookSession = (sessionID: number) =>{
    setBookedSessions([...bookedSessions, sessionID]);
  };

  const isBooked = (sessionID: number) => {
    return bookedSessions.includes(sessionID);
  };

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
              borderRadius: '5px',
              backgroundColor: isBooked(session.id) ? '#e0ffe0' : 'white'
            }}
          >
            <h3>{session.day} - {session.time}</h3>
            <p>{session.spots} spots available</p>

            {isBooked(session.id) ? (
              <p style={{ color: 'green', fontWeight: 'bold' }}>✓ Booked</p>
            ) : (
              <button 
                onClick={() => bookSession(session.id)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Book Session
              </button>
            )}
          </div>
        ))}
      </div>

      {bookedSessions.length > 0 && (
        <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
          <h3>Your Bookings</h3>
          <p>You've booked {bookedSessions.length} session(s)</p>
        </div>
      )}

    </div>
  );
}

export default App;