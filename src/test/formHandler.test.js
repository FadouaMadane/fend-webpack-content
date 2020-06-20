import { handleSubmitArticle } from '../client/js/formHandler'

describe('Test, the function "handleSubmitArticle()" should be a function', () => {
    test('It should be a function', async() => {
        expect(typeof handleSubmitArticle).toBe("function");
    });
});