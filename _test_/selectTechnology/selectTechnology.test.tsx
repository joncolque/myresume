import { givenAHomeScreen, thenShowTechnologiesHeader, whenLoadExperience } from "./helpers";

describe('Select technology', () => {
    xtest('given home screen when load experience then show uniq technologies used', async () => {
        givenAHomeScreen()
        await whenLoadExperience()
        thenShowTechnologiesHeader()
    })
})