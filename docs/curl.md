curl -X POST "http://localhost:3001/game/roll" \
     -H "Content-Type: application/json" \
     -d '{"roll": "1", "player": "bob"}'