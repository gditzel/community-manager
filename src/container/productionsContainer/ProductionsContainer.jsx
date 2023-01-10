import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductionsContainer = () => {
  const { idProduction } = useParams();
  const [imgsProduction, setImgsProduction] = useState([]);

  useEffect(() => {
    fetch("../imagesHome.json")
      .then((resp) => resp.json())
      .then((data) => setImgsProduction(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {imgsProduction
          .filter((prod) => prod.imageAlt === idProduction)
          .map((e) => (
            <img src={e.image} alt={e.imageAlt} key={e.id} />
          ))}
      </div>
    </>
  );
};

export default ProductionsContainer;
