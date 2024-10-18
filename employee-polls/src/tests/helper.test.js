import {formatQuestion} from '../shared/helper';

describe('function formatQuestion', () => {
    it("will format to the correct data", () => {
        var result = formatQuestion({optionOneText: 'test1', optionTwoText:'test2', author:'author'})
        expect(result.optionOne.text).toEqual('test1');
        expect(result.optionTwo.text).toEqual('test2');
        expect(result.author).toEqual('author');
    })
})
