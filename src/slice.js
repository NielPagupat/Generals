import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    players: {
      player1: {
        playerName: "",
        RoomCode: "",
        generalsKilled: 0,
        spiesKilled: 0,
        color: "bg-blue-200",
        tokens: [
          { type: '5-star general', position: {x:2, y:3}, skillcharge: 0, value: 13, powerup: "General’s Charge", killedEffect: null, class:"general", icon:"./src/assets/General-5.png"},
          { type: '4-star general', position: {x:1, y:5}, skillcharge: 0, value: 12, powerup: "General’s Charge", killedEffect: null, class:"general", icon:"./src/assets/General-4.png"},
          { type: '3-star general', position: {x:0, y:0}, skillcharge: 0, value: 11, powerup: "General’s Charge", killedEffect: null, class:"general", icon:"./src/assets/General-3.png"},
          { type: '2-star general', position: {x:0, y:0}, skillcharge: 0, value: 10, powerup: "General’s Charge", killedEffect: null, class:"general", icon:"./src/assets/General-2.png"},
          { type: '1-star general', position: {x:0, y:0}, skillcharge: 0, value: 9, powerup: "General’s Charge", killedEffect: null, class:"general", icon:"./src/assets/General-1.png"},
          { type: 'Colonel', position: {x:0, y:0}, skillcharge: 0, value: 8, powerup: null, killedEffect: null, class:"colonel" , icon:"./src/assets/Colonel.png"},
          { type: 'Lieutenant Colonel', position: {x:0, y:0}, skillcharge: 0, value: 7, powerup: null, killedEffect: null, class:"colonel", icon:"./src/assets/Lt-Col.png" },
          { type: 'Major', position: {x:0, y:0}, skillcharge: 0, value: 6, powerup: null, killedEffect: null, class:"major", icon:"./src/assets/Major.png"},
          { type: 'Captain', position: {x:0, y:0}, skillcharge: 0, value: 5, powerup: null, killedEffect: null, class:"captain", icon:"./src/assets/Captain.png"},
          { type: '1st lieutenant', position: {x:0, y:0}, skillcharge: 0, value: 4, powerup: null, killedEffect: null, class:"lieutenant", icon:"./src/assets/Lieut-1.png"},
          { type: '2nd lieutenant', position: {x:0, y:0}, skillcharge: 0, value: 3, powerup: null, killedEffect: null, class:"lieutenant", icon:"./src/assets/Lieut-2.png"},
          { type: 'Sergeant', position: {x:0, y:0}, IsSkillActive: false, cooldown: 0, value: 2, powerup: "Just Got Promoted", killedEffect: "No effect", class:"seargeant", icon:"./src/assets/Sergeant.png"},
          { type: 'Private-1', position: {x:0, y:0}, value: 1, powerup: null, killedEffect: "No effect", class:"private", icon:"./src/assets/Private.png"},
          { type: 'Private-2', position: {x:0, y:0}, value: 1, powerup: null, killedEffect: "No effect", class:"private", icon:"./src/assets/Private.png"},
          { type: 'Private-3', position: {x:0, y:0}, value: 1, powerup: null, killedEffect: "No effect", class:"private", icon:"./src/assets/Private.png"},
          { type: 'Private-4', position: {x:0, y:0}, value: 1, powerup: null, killedEffect: "No effect", class:"private", icon:"./src/assets/Private.png"},
          { type: 'Private-5', position: {x:0, y:0}, value: 1, powerup: null, killedEffect: "No effect", class:"private", icon:"./src/assets/Private.png"},
          { type: 'Private-6', position: {x:0, y:0}, value: 1, powerup: null, killedEffect: "No effect", class:"private", icon:"./src/assets/Private.png"},
          { type: 'Spy-1', position: {x:0, y:0}, cooldown: 0, value: 1000, powerup: null, killedEffect: "No effect", class:"spy", icon:"./src/assets/Spy.png"},
          { type: 'Spy-2', position: {x:0, y:0}, cooldown: 0, value: 1000, powerup: null, killedEffect: "No effect", class:"spy", icon:"./src/assets/Spy.png"},
          { type: 'Flag', position: {x:0, y:0}, cooldown: 0, value: 0, powerup: "Panic Switch", killedEffect: "Lose", icon:"./src/assets/Flag.png"},
        ],
      },
      player2: {
        playerName: "",
        RoomCode: "",
        generalsKilled: 0,
        spiesKilled: 0,
        color: "bg-red-200",
        tokens: [
          { type: '5-star general', position: {x:0, y:7}, skillcharge: 0, value: 13, powerup: "General’s Charge", killedEffect: null, class:"general", icon:"./src/assets/General-5.png"},
          { type: '4-star general', position: {x:7, y:7}, skillcharge: 0, value: 12, powerup: "General’s Charge", killedEffect: null, class:"general", icon:"./src/assets/General-4.png"},
          { type: '3-star general', position: {x:7, y:7}, skillcharge: 0, value: 11, powerup: "General’s Charge", killedEffect: null, class:"general", icon:"./src/assets/General-3.png"},
          { type: '2-star general', position: {x:7, y:7}, skillcharge: 0, value: 10, powerup: "General’s Charge", killedEffect: null, class:"general", icon:"./src/assets/General-2.png"},
          { type: '1-star general', position: {x:7, y:7}, skillcharge: 0, value: 9, powerup: "General’s Charge", killedEffect: null, class:"general", icon:"./src/assets/General-1.png"},
          { type: 'Colonel', position: {x:7, y:7}, skillcharge: 0, value: 8, powerup: null, killedEffect: null, class:"colonel" , icon:"./src/assets/Colonel.png"},
          { type: 'Lieutenant Colonel', position: {x:7, y:7}, skillcharge: 0, value: 7, powerup: null, killedEffect: null, class:"colonel", icon:"./src/assets/Lt-Col.png" },
          { type: 'Major', position: {x:7, y:7}, skillcharge: 0, value: 6, powerup: null, killedEffect: null, class:"major", icon:"./src/assets/Major.png"},
          { type: 'Captain', position: {x:7, y:7}, skillcharge: 0, value: 5, powerup: null, killedEffect: null, class:"captain", icon:"./src/assets/Captain.png"},
          { type: '1st lieutenant', position: {x:7, y:7}, skillcharge: 0, value: 4, powerup: null, killedEffect: null, class:"lieutenant", icon:"./src/assets/Lieut-1.png"},
          { type: '2nd lieutenant', position: {x:7, y:7}, skillcharge: 0, value: 3, powerup: null, killedEffect: null, class:"lieutenant", icon:"./src/assets/Lieut-2.png"},
          { type: 'Sergeant', position: {x:7, y:7}, IsSkillActive: false, cooldown: 0, value: 2, powerup: "Just Got Promoted", killedEffect: "No effect", class:"seargeant", icon:"./src/assets/Sergeant.png"},
          { type: 'Private-1', position: {x:7, y:7}, value: 1, powerup: null, killedEffect: "No effect", class:"private", icon:"./src/assets/Private.png"},
          { type: 'Private-2', position: {x:7, y:7}, value: 1, powerup: null, killedEffect: "No effect", class:"private", icon:"./src/assets/Private.png"},
          { type: 'Private-3', position: {x:7, y:7}, value: 1, powerup: null, killedEffect: "No effect", class:"private", icon:"./src/assets/Private.png"},
          { type: 'Private-4', position: {x:7, y:7}, value: 1, powerup: null, killedEffect: "No effect", class:"private", icon:"./src/assets/Private.png"},
          { type: 'Private-5', position: {x:7, y:7}, value: 1, powerup: null, killedEffect: "No effect", class:"private", icon:"./src/assets/Private.png"},
          { type: 'Private-6', position: {x:7, y:7}, value: 1, powerup: null, killedEffect: "No effect", class:"private", icon:"./src/assets/Private.png"},
          { type: 'Spy-1', position: {x:7, y:7}, cooldown: 0, value: 1000, powerup: null, killedEffect: "No effect", class:"spy", icon:"./src/assets/Spy.png"},
          { type: 'Spy-2', position: {x:7, y:7}, cooldown: 0, value: 1000, powerup: null, killedEffect: "No effect", class:"spy", icon:"./src/assets/Spy.png"},
          { type: 'Flag', position: {x:7, y:7}, cooldown: 0, value: 0, powerup: "Panic Switch", killedEffect: "Lose", icon:"./src/assets/Flag.png"},
        ],
      },
    },
  },
  reducers: {
    setTokenPosition: (state, action) => {
      const { player, tokenType, position } = action.payload;
      const token = state.players[player].tokens.find((t) => t.type === tokenType);
      if (token) token.position = position;
    },
    updateSkillCharge: (state, action) => {
      const { player, tokenType, skillcharge } = action.payload;
      const token = state.players[player].tokens.find((t) => t.type === tokenType);
      if (token && 'skillcharge' in token) token.skillcharge = skillcharge;
    },
    toggleSkillActive: (state, action) => {
      const { player, tokenType, isActive } = action.payload;
      const token = state.players[player].tokens.find((t) => t.type === tokenType);
      if (token && 'IsSkillActive' in token) token.IsSkillActive = isActive;
    },
    decrementCooldown: (state, action) => {
      const { player, tokenType } = action.payload;
      const token = state.players[player].tokens.find((t) => t.type === tokenType);
      if (token && 'cooldown' in token) token.cooldown += 1;
    },
    updatePlayerStats: (state, action) => {
      const { player, generalsKilled, spiesKilled } = action.payload;
      if (generalsKilled !== undefined) state.players[player].generalsKilled += generalsKilled;
      if (spiesKilled !== undefined) state.players[player].spiesKilled += spiesKilled;
    },

    setPlayerName: (state, action) => {
      const { player, playerName } = action.payload;
      state.players[player].playerName = playerName;
    },
    setRoomCode: (state, action) => {
      const { player, roomCode } = action.payload;
      state.players[player].RoomCode = roomCode;
    },
    
  },
});

export const {
  setTokenPosition,
  updateSkillCharge,
  toggleSkillActive,
  decrementCooldown,
  updatePlayerStats,
  setPlayerName,
  setRoomCode,
} = gameSlice.actions;

export default gameSlice.reducer;
