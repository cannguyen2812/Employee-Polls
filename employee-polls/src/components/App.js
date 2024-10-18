import { useEffect } from 'react';
import '../styles/App.css';
import Login from './Login';
import { Route, Routes } from "react-router-dom";
import { handleGetInitialData } from '../actions/init';
import { connect } from "react-redux";
import Home from './Home';
import QuestionDetail from './QuestionDetail';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import PageLayout from './PageLayout';
import NotFoundPage from './NotFound';

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleGetInitialData())
  }, [])
  return (
    <div>
      {props.loading.loading === true ? (
        <h1>LOADING</h1>
      ) : (
          <div>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path='/leaderboard' element={<LeaderBoard />} />
                <Route path='/add' element={<NewQuestion />} />
                <Route path='/questions/:id' element={<QuestionDetail />}/>
                <Route path='/404' element={<NotFoundPage />}/>
              </Route>
            </Routes>
          </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,

});

export default connect(mapStateToProps)(App);

