import { handleSubmitArticle } from '../client/js/formHandler'
/* const check = require('./handleSubmitArticle'); */
/* describe('Test handleSubmitArticle ', () => {
    it('should handleSubmitArticle is a function', () => {
        expect(handleSubmitArticle).toBeInstanceOf(Function)
    });
}); */

test('Function handleSubmitArticle should be defined', () => {
    expect(handleSubmitArticle).toBeDefined();
});