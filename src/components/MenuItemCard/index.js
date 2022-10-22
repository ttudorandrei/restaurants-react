const MenuItemCard = (props) => {
  // destructuring the props
  const { item } = props;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={item.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.dish}</h5>
        <p className="card-text">{item.description}</p>

        <div>
          {item.ingredient} - {item.measurement}
        </div>
        <hr />
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default MenuItemCard;
