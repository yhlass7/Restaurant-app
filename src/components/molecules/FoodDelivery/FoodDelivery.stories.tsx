import { FoodDelivery } from "@/components/molecules/FoodDelivery/FoodDelivery";

export const Default = {
  args: {
    supTitle: "Delivery",
    title: "A Moments Of Delivered On Right Time & Place",
    text:
      "Food Khan is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon's Exmouth Market." +
      " With glazed frontage on two sides of the building, overlooking the market and a bustling London inteon.",
  },
};

const foodDeliveryConfig = {
  title: "Molecules/FoodDelivery",
  component: FoodDelivery,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default foodDeliveryConfig;
