import { useParams } from "react-router-dom";

function BoardContent() {
  const { num } = useParams();
  //   console.log(num);

  return (
    <div>
      <h3>BoardContent 상세 {num} 번 페이지</h3>
    </div>
  );
}

export default BoardContent;
