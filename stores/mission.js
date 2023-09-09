// stores/mission.js
import { defineStore } from 'pinia'

export const useMissionStore = defineStore('mission', {
  state: () => ({
    currentReportId: null,
    missionName: '',
    missionDescription: '',
    missionDate: '',
    missionImages: [],
    missionLongitude: '',
    missionLatitude: ''
  }),
  actions: {
    setCurrentReportId(id) {
        this.currentReportId = id;
      },
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
        this.currentReportId = null;
        this.missionName = '';
        this.missionDescription = '';
        this.missionDate = '';
        this.missionImages = [];
        this.missionLongitude = '';
        this.missionLatitude = '';
      },

      populateStoreWithReport(report) {
        this.missionName = report.missionName || '';
        this.missionDescription = report.missionDescription || '';
        this.missionDate = report.missionDate || '';
        this.missionImages = report.missionImages || [];
        this.missionLongitude = report.missionLongitude || '';
        this.missionLatitude = report.missionLatitude || '';
      }
  }
})
