const HealthyFood = () => {
  const foods: string[] = ["Green Vegitables", "Rice", "Milk", "Salad", "Dal"];
  return (
    <>
      <h1 className="fw-bold ">healthy Foods</h1>
      <ul className="list-group">
        {foods.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
};

export default HealthyFood;
