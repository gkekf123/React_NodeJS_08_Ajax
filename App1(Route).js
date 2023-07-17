import { Route, Routes } from "react-router-dom";
import Home from "./conponent/Home";
import User from "./conponent/User";
import Info from "./conponent/Info";
import Board from "./conponent/Board";
import BoardContent from "./conponent/BoardContent";
import Header from "./layout/Header";
import MyPage from "./conponent/MyPage";

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        {/* 3개를 묶음 */}
        <Route path="/" element={<Home />} />

        {/* 쿼리 스트링 */}
        <Route path="/user" element={<User />} />

        {/* 쿼리 파라미터 - 추가설정 */}
        <Route path="/info/:a/:b" element={<Info />} />
      </Route>

      {/* Board, BoardContent분기 */}
      {/* <Route path="/board" element={<Board />} />
      <Route path="/board/:num" element={<BoardContent />} /> */}

      {/* Board의 자식 BoardContent 중첩 라우터 */}
      {/* Outlet컴포넌트 추가 */}
      <Route path="/board" element={<Board />}>
        <Route path=":num" element={<BoardContent />} />
      </Route>

      {/* 마이 페이지 - 권한이 있어야 된다 */}
      <Route path="mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
