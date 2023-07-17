import Category from "./Category";
import NewsList from "./NewsList";

function NewsHome() {
  return (
    <div>
      <h3>뉴스 홈</h3>
      
      <Category />

      <NewsList />
    </div>
  );
}

export default NewsHome;
