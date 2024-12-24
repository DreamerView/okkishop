import Category from "./component/category";
import CategoryText from "./component/categoryText";
import Card from "./component/card";

const Main = () => {
  const category = {
    title:"Категории",
    json:[
      {title:"Burger",link:"/"}
    ]
  }
  return (
    <main className="block_animation">
      {/* <Category /> */}
      <CategoryText />
      <Card />
    </main>
  );
}

export default Main;
