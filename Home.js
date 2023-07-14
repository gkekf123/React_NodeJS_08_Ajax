import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>메인페이지</h3>
      {/* a는 Link로 바뀐다 */}
      <ul>
        <li>
          <Link to="/user">회원 페이지</Link>
        </li>
        <li>
          <Link to="/user?id=aaa123&name=홍길동">회원 페이지</Link>
        </li>
        <li>
          <Link to="/info/1/홍길동">인포 페이지 1</Link>
        </li>
        <li>
          <Link to="/info/2/이순신">인포 페이지 2</Link>
        </li>
        <li>
          <Link to="/info/3/강감찬">인포 페이지 3</Link>
        </li>
      </ul>
    </div>
  );
}
export default Home;
