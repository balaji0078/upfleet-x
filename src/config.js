import _ from 'lodash';

const config = {
 secretKey:'sample',
 algorithm: 'HS256',
  mockData: {
    login: false,
    allPermissions: false,
    dashboardStats: false,
    dashboardPrefetch: false,
    dashboardStatus: false,
    dashboardCount: false,
    dashboardMetric: false,
    dashboardDetailView: false,
    userConfig: false,
    vehicleMetaData: false,
    liveLocation: false,
    randomLatLongAdjust: false,
    vehicleLookupData: false,
    onBoardVehcileList: false,
    matchTripList: false,
    matchTripSidebar: false,
    onboardDriverList: false,
    reportList: false,
    reportTripList: false,
    showMockRoutes: false,
    gpsTraceLiveTracking: false,
    gpsTraceSingle: false,
    gpsTraceGroup: false,
    hideReportsSidebar: false,
    geofenceList: false,
    tenantList: false,
    poiList: false,
    vehicleFiltering: false,
    driverFiltering: false,
    appendAdditionalVehicleDetails: false,
    showGpsTraceSidebar: false,
    alertList: false,
    alertEventsList: false,
    alertPreload: false,
    mapSearchSuccess: false,
    mapSearchFailure: false,
    showTrackerLog: false,
    disableTracker: false,
  },
  enableTracking: false,
  showShadowOfSelectedMarker: true,
  recentAlertTimeSpan: [10, 'hours'],
  defaultPermalinkExpiryHours: 4,
  showInprogressUI: false,
  lookupMergeField: 'id',
  trackingProjectApiKey: 'd467a12c25e59d15d119e426fb536f3d',
  languageStorageKey: "preferred-language",
  applicationModeStorageKey: "application-mode",
  invalidTokenHttpCode: 405,
  loginFailureHttpCode: 482,
  maxFilterCountForDashboard: 20,
  mapStoragePrefix: 'map-st-',
  mapLayerPositioning: {
    mapLabels: 201,
    geofences: 200,
    selectedMarkerShadow: 300,
    geofenceDrawing: 200,
    gpsTraceLines: 599,
    gpsTraceDots: 599,
    markers: 600,
    geofenceEvents: 600,
    alertEventsInGpsTrace: 600,
    gpsTraceStartEndMarkers: 601,
    gpsTraceAnimationMarkers: 602,
    selectedMarker: 610,
    searchMarker: 611,
  },
  languageOptions: [
    {
      "label": "English",
      "value": "en",
      "name": "En",
    },
    {
      "label": "Tiếng Việt",
      "value": "vi",
      "name": "VI",
    },
    {
      "label": "Thai",
      "value": "th",
      "name": "TH",
    },
  ],
  defaultLanguage: "en",
  environment: { // only one config object will be available for other files ex: config.environment.baseURl
    common: {
      'baseUrlMain': 'api/telematics/backend1/',
      'baseUrlLocation': 'api/telematics/location/',
      'baseUrlReports': 'api/telematics/report/',
      'baseUrlJava': 'api/telematics/java/',
      'baseUrlNode': 'api/telematics/backend/',
    },  
    development: {      
      'rootUrl': 'https://officeride-qa.fsmppapps.com/',
      'socketLiveURL': 'https://officeride-dev.fsmppapps.com/api/telematics/backend/socket1/live-location',
      'plinksocketLiveURL': 'https://officeride-dev.fsmppapps.com/api/telematics/backend/socket1/plink',
      'plinkRouteUrl':'/api/telematics/#/permalink/livepanel',
      'mapSearchApiKey': '5b3ce3597851110001cf6248b3a70de5ee1645c4aa0d93405b409deb',
      'googleMapApiKey': 'AIzaSyBfLZ1UWsAe2Bwq2sZ10O8AiaGF_S5tZdU',
      'ga_measurement_id' : 'G-S7J89VME0V'
    },
    qa: {
      'rootUrl': 'https://officeride-qa.fsmppapps.com/',
      'plinksocketLiveURL': 'https://officeride-qa.fsmppapps.com/api/telematics/backend/socket1/plink',
      'socketLiveURL': 'https://officeride-qa.fsmppapps.com/api/telematics/backend/socket1/live-location',
      'plinkRouteUrl':'/api/telematics/#/permalink/livepanel',
      'mapSearchApiKey': '5b3ce3597851110001cf6248b3a70de5ee1645c4aa0d93405b409deb',
      'googleMapApiKey': 'AIzaSyBfLZ1UWsAe2Bwq2sZ10O8AiaGF_S5tZdU',
      'ga_measurement_id' : 'G-S7J89VME0V'
    },
    staging: {
      'rootUrl': 'https://officeride-stage.fsmstage.com/',
      'plinksocketLiveURL': 'https://officeride-stage.fsmstage.com/api/telematics/backend/socket1/plink',
      'plinkRouteUrl':'/api/telematics/#/permalink/livepanel',
      'socketLiveURL': 'https://officeride-stage.fsmstage.com/api/telematics/backend/socket1/live-location',
      'mapSearchApiKey': '5b3ce3597851110001cf6248b3a70de5ee1645c4aa0d93405b409deb',
      'googleMapApiKey': 'AIzaSyBfLZ1UWsAe2Bwq2sZ10O8AiaGF_S5tZdU',
      'ga_measurement_id' : 'G-S7J89VME0V'
    },
    production: {
      // 'rootUrl': 'https://api-officeride.officeride.in/',
      'rootUrl': 'https://api-officeride.apps.pd02.azinsouth01.caas.ford.com/',
      'plinksocketLiveURL': 'https://api-officeride.apps.pd02.azinsouth01.caas.ford.com/api/telematics/backend/socket1/plink',
      'plinkRouteUrl':'/#/permalink/livepanel',
      'socketLiveURL': 'https://api-officeride.apps.pd02.azinsouth01.caas.ford.com/api/telematics/backend/socket1/live-location',
      'mapSearchApiKey': '5b3ce3597851110001cf6248b3a70de5ee1645c4aa0d93405b409deb',
      'googleMapApiKey': 'AIzaSyAc1zjye0YZsuuZZa6jrzNbcjgmJo8wFxo',
      'ga_measurement_id' : 'G-G6LH6PKFJF'
    },
    performance: {
      'rootUrl': 'https://officeride-perf.fsmstage.com/',
      'plinksocketLiveURL': 'https://officeride-perf.fsmstage.com/api/telematics/backend/socket1/plink',
      'plinkRouteUrl':'/api/telematics/#/permalink/livepanel',
      'socketLiveURL': 'https://officeride-perf.fsmstage.com/api/telematics/backend/socket1/live-location',
      'mapSearchApiKey': '5b3ce3597851110001cf6248b3a70de5ee1645c4aa0d93405b409deb',
      'googleMapApiKey': 'AIzaSyBfLZ1UWsAe2Bwq2sZ10O8AiaGF_S5tZdU',
      'ga_measurement_id' : 'G-S7J89VME0V'
    },
  }
}

const mockAllowed = process.env.REACT_APP_MOCK_ALLOWED;
const currentEnvironment = process.env.REACT_APP_ENV;
const currentEnvironmentConfig = _.get(config, 'environment.'+currentEnvironment);
const commonEnvironmentConfig = _.get(config, 'environment.common');
config.environment = _.assign({}, commonEnvironmentConfig, currentEnvironmentConfig);
if(mockAllowed!='yes') {
    config.mockData = {};
}

export { config };