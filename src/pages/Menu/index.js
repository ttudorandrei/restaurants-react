import RestaurantCard from "../../components/RestaurantCard";
import menuData from "../../data/menu.json";

const MenuPage = () => {
  return (
    <div>
      {menuData.map((menuItem) => {
        return <RestaurantCard item={menuItem} />;
      })}
    </div>
  );
};

export default MenuPage;
