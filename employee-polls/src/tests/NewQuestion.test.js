import { fireEvent, render, screen } from "@testing-library/react"
import configureStore from "redux-mock-store"
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import NewQuestion from "../components/NewQuestion";

const storeToMock = configureStore([]);
const store = storeToMock({
    loggedUser : 
        {
            id: 'sarahedo',
            password:'password123',
            name: 'Sarah Edo',
            avatarURL: 'https://mrwallpaper.com/images/hd/chibi-luffy-smile-k40llx1k7m550s3y.jpg',
            answers: {
              "8xf0y6ziyjabvozdd253nd": 'optionOne',
              "6ni6ok3ym7mf1p33lnez": 'optionOne',
              "am8ehyc8byjqgar0jgpub9": 'optionTwo',
              "loxhs1bqm25b708cmbf3g": 'optionTwo'
            },
            questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
          },
})

describe('New Question page', () => {
    test("fileds are exist", () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <NewQuestion></NewQuestion>
                </Provider>
            </MemoryRouter>
        );
        expect(screen.getByTestId('optionOneId')).toBeInTheDocument();
        expect(screen.getByTestId('optionTwoId')).toBeInTheDocument();
    })

    test('will fired an event for input', () => {
         render(
            <MemoryRouter>
                <Provider store={store}>
                    <NewQuestion></NewQuestion>
                </Provider>
            </MemoryRouter>
        );
        var optionOneInput = screen.getByTestId('optionOneId');
        var optionTwoInput = screen.getByTestId('optionTwoId');

        fireEvent.change(optionOneInput, {target: { value: 'reactjs' }});
        fireEvent.change(optionTwoInput, {target: { value: 'angular' }});

        expect(screen.getByTestId('optionOneId').value).toBe('reactjs');
        expect(screen.getByTestId('optionTwoId').value).toBe('angular');

    })
})