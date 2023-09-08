// stores/mission.js
import { defineStore } from 'pinia'

export const useMissionStore = defineStore('mission', {
  state: () => ({
    missionName: '',
    missionDescription: '',
    missionDate: ''
  }),
  actions: {
    setMissionData(name, description, date) {
      this.missionName = name;
      this.missionDescription = description;
      this.missionDate = date;
    }
  }
})
