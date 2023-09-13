import { givenTags } from "./givenTags";
import { givenTagsWithBackgroundColor } from "./givenTagsWithBackgroundColor";
import { thenFindTags } from "./thenFindTags";
import { thenFindTagsWithBackgroundColor } from "./thenFindTagsWithColor";

describe('Tags', () => {

    test('render array tags', () => {
        givenTags(['typescript', 'javascript', 'kotlin', 'java']);
        thenFindTags(['typescript', 'javascript', 'kotlin', 'java']);
    })

    test('render array with colors', () => {
        givenTagsWithBackgroundColor(['typescript', 'javascript', 'kotlin', 'java'], '#2E8B57');
        thenFindTagsWithBackgroundColor(['typescript', 'javascript', 'kotlin', 'java'], '#2E8B57');
    })

})
