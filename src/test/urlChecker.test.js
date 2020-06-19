import { checkForUrl } from '../client/js/urlChecker'
/* const check1 = require('./checkForUrl'); */
/* const uriRegEx = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
const uri = 'https://subjectguides.uwaterloo.ca/AMA'; */

describe('Test for match  urlmatch I', () => {
    it('should there is no I in url', () => {
        expect(checkForUrl('www.google.com')).not.toMatch(/I/);
    });
});

describe('Test for match  url with regex', () => {

    it('should  the link match the regex ...!!!!', () => {
        expect(checkForUrl('www.google.com')).toMatch(uriRegEx);
    });
});

describe('Test for match  url', () => {
    it(' should checking module', () => {
        expect(checkForUrl('www.google.com')).toBe(true)
        expect(checkForUrl('1.1.1.1')).toBe(false)
    });
});