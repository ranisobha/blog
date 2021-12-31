
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from './components/PostList';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddPost from './components/AddPost';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
     <Route path="/" exact={true} element={<PostList />} />
     <Route path="/post" element={<AddPost />} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
