import { givenTags } from "./givenTags";
import { thenFindTags } from "./thenFindTags";

test('Should render tags', () => {
    givenTags(['typescript', 'javascript', 'kotlin', 'java']);
    thenFindTags(['typescript', 'javascript', 'kotlin', 'java']);
})
