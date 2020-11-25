module.exports = {
    transform: {
      "^.+\\.js$": "babel-jest",
      "^.+\\.vue$": "vue-jest",
    },
    snapshotSerializers: [
      "<rootDir>/node_modules/jest-serializer-vue"
    ]
  }