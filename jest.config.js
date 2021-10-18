
module.exports = {
    roots: ['<rootDir>/lib'],
    testMatch: ['<rootDir>/lib/*test.js'],
    verbose: false,
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: ['<rootDir>/jest-after-env'],
};
