import { useParams } from "react-router-dom";

// 예시 데이터
const data = {
  1: { b: "홍길동" },
  2: { b: "신사임당" },
  3: { b: "김유신" },
};

function Info() {
  // 쿼리 파라미터 값
  const obj = useParams();
  console.log(obj); // {a: '1', b: '홍길동'}, {a: '2', b: '이순신'}, {a: '3', b: '강감찬'}

  // obj값을 이용해서 서버에서는 데이터를 가져오고 state로 관리 할 수 있다
  console.log(obj.a);

  return (
    <div>
      <h3>인포 페이지</h3>
      {obj.a}에 해당하는 값은 {data[obj.a].b} 입니다.
    </div>
  );
}
export default Info;
