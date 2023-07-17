import { Navigate, useNavigate } from "react-router-dom";

function MyPage() {
  const loginYN = false; // localStorage.getItem("token");

  //   navigate훅은 렌더링 과정에서 사용이 불가능
  //   const nav = useNavigate();
  //   if (!loginYN) {
  //     //
  //     nav("/"); // 홈으로 이동
  //   }

  // to=경로, replace=기록을 남기는 지 여부 (true인 경우 기록X)
  if (!loginYN) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div>
      <h3>마이 페이지 - 권한 있는 사람만 접근 가능</h3>
    </div>
  );
}

export default MyPage;
