import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});

  const handleClick = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json"
      )
      .then((response) => {
        setData(response.data);
      });
  };

  // 데이터를 화면에 로드될 때 axios로 처리
  // https://raw.githubusercontent.com/yopy0817/data_example/master/by.json

  const [otp, setOtp] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/yopy0817/data_example/master/by.json"
      )
      .then((a) => {
        setOtp(a.data);
      });
  }, []);

  // 중첩으로 사용 해도 된다
  /*
  const handleClick2 = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json"
      )
      .then((data) => {
        console.log(1);
        axios
          .get(
            "https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json"
          )
          .then((data) => {
            console.log(3);
            axios
              .get(
                "https://raw.githubusercontent.com/yopy0817/data_example/master/by.json"
              )
              .then((data) => {
                console.log(5);
              });
          });
      });

    console.log(2);

    console.log(4);

    console.log(6);
  };
*/

  /* asunc & await -> 동기적 방식(순서대로 받는다)
  
  1. async안에서 await을 사용할 수 있다
    async function () {}
    const handleClick2 = async () => {}

  2. function에 async를 붙이면 리턴이 promise가 된다

  3. return이 promise라면 await을 사용할 수 있고, then을 생략할 수 있다

  */
  const handleClick2 = async () => {
    const result = await axios.get(
      "https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json"
    );
    console.log(result); // 1
    console.log(1);

    const result2 = await axios.get(
      "https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json"
    );
    console.log(result2); // 2
    console.log(3);

    const result3 = await axios.get(
      "https://raw.githubusercontent.com/yopy0817/data_example/master/by.json"
    );
    console.log(result3); // 3
    console.log(5);
  };

  return (
    <div>
      <h3>엑시오스 사용하기</h3>
      <button onClick={handleClick}>데이터 져오기</button>
      <button onClick={handleClick2}>어싱크 확인하기</button>
      <p>
        {data.userId}
        <br />
        {data.userPw}
        <br />
        {data.userName}
        <br />
      </p>

      <select>
        {otp.map((item) => (
          <option key={item.key} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
