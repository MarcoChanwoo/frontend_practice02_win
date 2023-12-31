import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import GuestPage from './pages/GuestPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<PostListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/guest" element={<GuestPage />} />
            <Route path="/:@username">
                <Route index element={<PostListPage />} />
                <Route path=":postId" element={<PostPage />} />
            </Route>
        </Routes>
    );
};

export default App;
