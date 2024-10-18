import {_saveQuestion,_saveQuestionAnswer} from '../shared/_DATA.js';

describe('_saveQuestion', () => {
    it('will save question successfully', async () => {
        var result = await _saveQuestion({optionOneText: 'Reactjs', optionTwoText: 'Angular' , author: 'sarahedo'})
        expect(result.optionOne.text).toEqual('Reactjs');
        expect(result.optionTwo.text).toEqual('Angular');
        expect(result.author).toEqual('sarahedo');
    });

    it('will fail to save question', async () => {
        await expect(_saveQuestion({optionOneText: 'Reactjs', author: 'sarahedo'})).rejects.toBe("Please provide optionOneText, optionTwoText, and author");
    })
})

describe('_saveQuestionAnswer', () => {
    it('will save question successfully', async () => {
        var result = await _saveQuestionAnswer({authedUser: 'tylermcginnis', qid: 'loxhs1bqm25b708cmbf3g' , answer: 'optionOne'})
        expect(result).toEqual(true);
    });

    it('will fail to save question', async () => {
        await expect(_saveQuestionAnswer({authedUser: 'tylermcginnis', qid: 'loxhs1bqm25b708cmbf3g'})).rejects.toBe("Please provide authedUser, qid, and answer");
    })
})