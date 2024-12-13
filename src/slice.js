import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    players: {
      player1: {
        playerName: "",
        generalsKilled: 0,
        spiesKilled: 0,
        tokens: [
          { type: '5-star general', position: null, skillcharge: 0, value: 13, powerup: "General’s Charge", killedEffect: null, class:"general" },
          { type: '4-star general', position: null, skillcharge: 0, value: 12, powerup: "General’s Charge", killedEffect: null, class:"general" },
          { type: '3-star general', position: null, skillcharge: 0, value: 11, powerup: "General’s Charge", killedEffect: null, class:"general" },
          { type: '2-star general', position: null, skillcharge: 0, value: 10, powerup: "General’s Charge", killedEffect: null, class:"general" },
          { type: '1-star general', position: null, skillcharge: 0, value: 9, powerup: "General’s Charge", killedEffect: null, class:"general" },
          { type: 'Colonel', position: null, skillcharge: 0, value: 8, powerup: null, killedEffect: null, class:"colonel" },
          { type: 'Lieutenant Colonel', position: null, skillcharge: 0, value: 7, powerup: null, killedEffect: null, class:"colonel" },
          { type: 'Major', position: null, skillcharge: 0, value: 6, powerup: null, killedEffect: null, class:"major" },
          { type: 'Captain', position: null, skillcharge: 0, value: 5, powerup: null, killedEffect: null, class:"captain" },
          { type: '1st lieutenant', position: null, skillcharge: 0, value: 4, powerup: null, killedEffect: null, class:"lieutenant" },
          { type: '2nd lieutenant', position: null, skillcharge: 0, value: 3, powerup: null, killedEffect: null, class:"lieutenant" },
          { type: 'Sergeant', position: null, IsSkillActive: false, cooldown: 0, value: 2, powerup: "Just Got Promoted", killedEffect: "No effect", class:"seargeant"},
          { type: 'Private-1', position: null, value: 1, powerup: null, killedEffect: "No effect", class:"private"},
          { type: 'Private-2', position: null, value: 1, powerup: null, killedEffect: "No effect", class:"private"},
          { type: 'Private-3', position: null, value: 1, powerup: null, killedEffect: "No effect", class:"private"},
          { type: 'Private-4', position: null, value: 1, powerup: null, killedEffect: "No effect", class:"private"},
          { type: 'Private-5', position: null, value: 1, powerup: null, killedEffect: "No effect", class:"private"},
          { type: 'Private-6', position: null, value: 1, powerup: null, killedEffect: "No effect", class:"private"},
          { type: 'Spy-1', position: null, cooldown: 0, value: 1000, powerup: null, killedEffect: "No effect", class:"spy"},
          { type: 'Spy-2', position: null, cooldown: 0, value: 1000, powerup: null, killedEffect: "No effect", class:"spy"},
          { type: 'Flag', position: null, cooldown: 0, value: 0, powerup: "Panic Switch", killedEffect: "Lose" },
        ],
      },
      player2: {
        playerName: "",
        generalsKilled: 0,
        spiesKilled: 0,
        tokens: [
            { type: '5-star general', position: null, skillcharge: 1, value: 13, powerup: "General’s Charge", killedEffect: null, class:"general" },
            { type: '4-star general', position: null, skillcharge: 1, value: 12, powerup: "General’s Charge", killedEffect: null, class:"general" },
            { type: '3-star general', position: null, skillcharge: 1, value: 11, powerup: "General’s Charge", killedEffect: null, class:"general" },
            { type: '2-star general', position: null, skillcharge: 1, value: 10, powerup: "General’s Charge", killedEffect: null, class:"general" },
            { type: '1-star general', position: null, skillcharge: 1, value: 9, powerup: "General’s Charge", killedEffect: null, class:"general" },
            { type: 'Colonel', position: null, skillcharge: 0, value: 8, powerup: null, killedEffect: null, class:"colonel" },
            { type: 'Lieutenant Colonel', position: null, skillcharge: 0, value: 7, powerup: null, killedEffect: null, class:"colonel" },
            { type: 'Major', position: null, skillcharge: 0, value: 6, powerup: null, killedEffect: null, class:"major" },
            { type: 'Captain', position: null, skillcharge: 0, value: 5, powerup: null, killedEffect: null, class:"captain" },
            { type: '1st lieutenant', position: null, skillcharge: 0, value: 4, powerup: null, killedEffect: null, class:"lieutenant" },
            { type: '2nd lieutenant', position: null, skillcharge: 0, value: 3, powerup: null, killedEffect: null, class:"lieutenant" },
            { type: 'Sergeant', position: null, IsSkillActive: false, cooldown: 2, value: 2, powerup: "Just Got Promoted", killedEffect: "No effect", class:"seargeant"},
            { type: 'Private-1', position: null, value: 1, powerup: null, killedEffect: "No effect", class:"private"},
            { type: 'Private-2', position: null, value: 1, powerup: null, killedEffect: "No effect", class:"private"},
            { type: 'Private-3', position: null, value: 1, powerup: null, killedEffect: "No effect", class:"private"},
            { type: 'Private-4', position: null, value: 1, powerup: null, killedEffect: "No effect", class:"private"},
            { type: 'Private-5', position: null, value: 1, powerup: null, killedEffect: "No effect", class:"private"},
            { type: 'Private-6', position: null, value: 1, powerup: null, killedEffect: "No effect", class:"private"},
            { type: 'Spy-1', position: null, value: 1000, powerup: null, killedEffect: "No effect", class:"spy"},
            { type: 'Spy-2', position: null, value: 1000, powerup: null, killedEffect: "No effect", class:"spy"},
            { type: 'Flag', position: null, cooldown: 0, value: 0, powerup: "Panic Switch", killedEffect: "Lose" },
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
  },
});

export const {
  setTokenPosition,
  updateSkillCharge,
  toggleSkillActive,
  decrementCooldown,
  updatePlayerStats,
} = gameSlice.actions;

export default gameSlice.reducer;
