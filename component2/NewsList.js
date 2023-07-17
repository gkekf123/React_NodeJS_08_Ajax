import axios from "axios";
import { useEffect, useState } from "react";
import NewsArticle from "./NewsArticle";
import { useParams } from "react-router-dom";
import styled from "./NewsList.module.css";

function NewsList() {
  // 2. 로딩 처리
  const [loading, setLoading] = useState(false);

  // 3. 쿼리파라미터 값 처리
  const { category } = useParams();
  console.log(category);
  const query = category === undefined ? "" : "&category=" + category;

  // 1. 데이터 처리
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=dd9e9b67a32b462c9fa4843732c7d5bc`;

    (async () => {
      let {
        data: { articles },
      } = await axios.get(url);
      setData(articles);
      setLoading(true); // 데이터가 도착하면 true
    })();
  }, [query]); // 다시 실행..의존성 - 마운트 이후에 실행되고, query변수가 바뀔 때 마다 실행

  if (!loading) {
    return <div>데이터 불러오는 중..</div>;
  }

  return (
    <div>
      <h3>뉴스 리스트</h3>
      <ul className={styled.wrap}>
        {data.map((item, index) => (
          <NewsArticle item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
