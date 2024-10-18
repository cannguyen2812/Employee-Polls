import { render, screen } from "@testing-library/react"
import configureStore from "redux-mock-store"
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Login from "../components/Login";

const storeToMock = configureStore([]);
const store = storeToMock({
    listUser: [
        {
            id: 'sarahedo',
            password: 'password123',
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
        {
            id: 'tylermcginnis',
            password: 'abc321',
            name: 'Tyler McGinnis',
            avatarURL: 'https://ih1.redbubble.net/image.5119216764.2026/st,small,845x845-pad,1000x1000,f8f8f8.jpg',
            answers: {
                "vthrdm985a262al8qx3do": 'optionOne',
                "xj352vofupe1dqz9emx13r": 'optionTwo',
            },
            questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
        },
    ],
})

describe('Login page', () => {
    test('render Login page with correct user', () => {
        const testRender = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login></Login>
                </Provider>
            </MemoryRouter>
        );
        expect(testRender).toMatchSnapshot();
    })
})
