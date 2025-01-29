import { givenTags } from "./givenTags";
import { thenFindTags } from "./thenFindTags";

describe('Tags', () => {
    test('render array tags', () => {
        givenTags(['typescript', 'javascript', 'kotlin', 'java']);
        thenFindTags(['typescript', 'javascript', 'kotlin', 'java']);
    })
})
