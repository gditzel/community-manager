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
    <div className="flex flex-wrap justify-center">
      {imgsProduction
        .filter((prod) => prod.imageAlt === idProduction)
        .map((e) => (
          <div key={e.id}>
            <img
              src={e.image}
              alt={e.imageAlt}
              className="h-[640px] object-cover"
            />
          </div>
        ))}
    </div>
  );
};

export default ProductionsContainer;
