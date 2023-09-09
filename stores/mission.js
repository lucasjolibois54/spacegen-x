// stores/mission.js
import { defineStore } from 'pinia'

export const useMissionStore = defineStore('mission', {
  state: () => ({
    missionName: '',
    missionDescription: '',
    missionDate: '',
    missionImages: [],
    missionLongitude: '',
    missionLatitude: ''
  }),
  actions: {
    updateMissionDetails(name, description, date) {
      this.missionName = name || this.missionName;
      this.missionDescription = description || this.missionDescription;
      this.missionDate = date || this.missionDate;
    },
    updateMissionImages(images) {
        this.missionImages = images || this.missionImages;
      },
    updateMissionCoordinates(longitude, latitude) {
      this.missionLongitude = longitude || this.missionLongitude;
      this.missionLatitude = latitude || this.missionLatitude;
    },
    resetState() {
        this.missionName = '';
        this.missionDescription = '';
        this.missionDate = '';
        this.missionImages = [];
        this.missionLongitude = '';
        this.missionLatitude = '';
      }
  }
})
