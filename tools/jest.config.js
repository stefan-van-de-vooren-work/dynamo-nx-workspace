module.exports = {
    roots: [ 'schematics' ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ]
};
