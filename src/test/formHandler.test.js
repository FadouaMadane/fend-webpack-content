import { handleSubmitArticle } from '../client/js/formHandler'
/* const check = require('./handleSubmitArticle'); */
/* describe('Test handleSubmitArticle ', () => {
    it('should handleSubmitArticle is a function', () => {
        expect(handleSubmitArticle).toBeInstanceOf(Function)
    });
}); */

describe('Test, the function "handleSubmitArticle()" should be a function', () => {
    test('It should be a function', async() => {
        expect(typeof handleSubmitArticle).toBe("function");
    });
});