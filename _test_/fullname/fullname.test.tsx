import { givenProfileUser } from './givenProfileUser'
import { thenFindFullName } from './thenFindFullName'

test('Should find fullname', () => {
    givenProfileUser();
    thenFindFullName('Jon Wilson Colque Limachi');
})
