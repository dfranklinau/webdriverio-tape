module.exports = {

  /**
   * The test environment.
   */
  desiredCapabilities: {
    browserName: 'firefox'
  },

  /**
   * General options.
   */
  coloredLogs: true,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 0,

};
