import { Tree, VirtualTree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import * as testing from '../utils/testing';
// import * as json from '../utils/json';

const collectionPath = path.join(__dirname, '../collection.json');

describe('dynamo-app', () => {
    let appTree: Tree;

    beforeEach(() => {
        appTree = new VirtualTree();
        appTree = testing.createEmptyWorkspace(appTree);
    });

    it('overrides angular component', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        runner.runSchematic('component', { name: 'test-component' }, appTree);

        // expect(tree.files.length).toBeGreaterThan(0);

        // const packageJson = json.readJsonInTree(tree, '/package.json');
        // expect(packageJson.dependencies['@ionic/angular']).toEqual(
        //     '4.0.0-beta.13',
        // );

        // const angularJson = json.readJsonInTree(tree, '/angular.json');
        // expect(angularJson.projects['test-app'].root).toEqual('apps/test-app/');
        // expect(angularJson.projects['test-app-e2e'].root).toEqual(
        //     'apps/test-app-e2e/',
        // );
    });
});
