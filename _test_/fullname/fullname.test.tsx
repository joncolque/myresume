import { givenProfileUser } from './givenProfileUser'
import { thenFindFullName } from './thenFindFullName'

test('Should find fullname', () => {
    const rendered = givenProfileUser()
    thenFindFullName(rendered, 'Jon Wilson Colque Limachi')
})
