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
  /*actions: {
    setMissionData(name, description, date, longitude, latitude) {
      this.missionName = name;
      this.missionDescription = description;
      this.missionDate = date;
      this.missionLongitude = longitude;
      this.missionLatitude = latitude;
    }
  }*/
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
    }
  }
})
