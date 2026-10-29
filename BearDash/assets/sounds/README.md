# Sound Effects & Chiptune Music

Bear Dash utilizes a high-definition real-time **Web Audio API synthesizer** (`js/audio.js`).
All sound effects and the dynamic chiptune background score are generated procedurally in code:
- Upbeat 16-bit adventure music with dynamic tempo acceleration near the finish line
- Jumps, double jumps, dashes
- Ascending pitch gem collection combo streaks
- Mystery box fanfare jingles
- Obstacle damage bear squeaks and heart breaks
- 1-life heartbeat sub-bass loop
- Elimination and victory fanfares

This eliminates external audio asset loading delays, network latency, and missing file errors.
