import React, { useCallback, useMemo, useState } from "react";
import CustomButton from "../../button/button";

function DishListing() {
  const [rasagullaPrice, setRasagullaPrice] = useState(100);
  const [literDrink, setLiterDrink] = useState(100);

  const [biryaniItemsPrice, setBiryaniItems] = useState(200);

  // using useMemo and stop re-calculating here
  // useMemo runs when one of it's dependence array updated
  const priceINSweetShop = useMemo(() => {
    console.log("priceINSweetShop calculating....");
    return rasagullaPrice + literDrink; // this line is the useMemo memorized value so that's y we r using useMemo
  }, [rasagullaPrice, literDrink]);

  const priceINStore = useMemo(() => {
    console.log("priceINStore calculating....");
    return biryaniItemsPrice;
  }, [biryaniItemsPrice]);

  const rasagullaHandler = useCallback(() => {
    setRasagullaPrice(rasagullaPrice + 10);
  }, [rasagullaPrice]);

  const drinkHandler = useCallback(() => {
    setLiterDrink(literDrink + 5);
  }, [literDrink]);

  const biryaniItemsHandler = useCallback(() => {
    setBiryaniItems(biryaniItemsPrice + 20);
  }, [biryaniItemsPrice]);

  return (
    <div>
      <h1> 1kg rasagulla Price {rasagullaPrice}</h1>
      <CustomButton
        text={"Increase Rasagulla Price"}
        onPress={rasagullaHandler}
      />

      <h1> 1 literDrink Price {literDrink}</h1>
      <CustomButton text={"Increase LiterDrink Price"} onPress={drinkHandler} />

      <h3>Total Price in the Sweet Shop {priceINSweetShop}</h3>

      <h2>Biryani Item Price {biryaniItemsPrice} </h2>
      <CustomButton
        text={"Increase BiryaniPricePrice"}
        onPress={biryaniItemsHandler}
      />

      <h2>Total Price in the store {priceINStore}</h2>
    </div>
  );
}

export default DishListing;
