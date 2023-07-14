import { useEffect, useState } from "react";

function App() {
  // 2. state 선언
  /* data는 처음에 값이 없기 떄문에 오류가 난다 */
  // 에러 피하는 방법 1
  //   const [data, setDate] = useState();

  // 에러 피하는 방법 2
  const [data, setDate] = useState();

  // 1. 이벤트 생성
  const handleClick = () => {
    fetch(
      "https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setRaw(data);
        setDate(data);
      });
  };

  const [raw, setRaw] = useState();

  // 화면 로드시 데이터 불러오기
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setRaw(data);
      });
  }, []);

  //   console.log(1);

  return (
    <div>
      <h3>fetch로 데이터 가져오기</h3>

      <p>버튼 클릭 시 데이터 가져오기</p>

      <button onClick={handleClick}>데이터 로드</button>

      {/* data는 처음에 값이 없기 떄문에 오류가 난다 */}
      {data !==
      undefined /* 처음에는 undefined이기 떄문에 화면에 아무것도 없다 */ ? (
        <p>
          {data.userId}
          <br />
          {data.userPw}
          <br />
          {data.userName}
        </p>
      ) : null}

      <p>데이터 로드 시 가져오기</p>
      {raw !==
      undefined /* 처음에는 undefined이기 떄문에 화면에 아무것도 없다 */ ? (
        <p>
          {raw.userId}
          <br />
          {raw.userPw}
          <br />
          {raw.userName}
        </p>
      ) : null}
    </div>
  );
}

export default App;
