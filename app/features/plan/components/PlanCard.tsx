import { Card, List } from "flowbite-react";
import { FaRegDotCircle } from "react-icons/fa";
import type { PlanData } from "../types";

// PlanCard component to display each plan
const PlanCard: React.FC<PlanData> = ({ name, priceMonthly, description, features, isEnabled }) => (
  <Card className="max-w-sm w-full no-underline flex flex-col justify-center items-center rounded-lg">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <span>{priceMonthly}</span> for 1 month
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>

    <List className="space-y-2">
      {features.map((feature, idx) => (
        <List.Item key={idx} icon={() => <FaRegDotCircle className="text-orange-500 mr-2" />}>
          {feature}
        </List.Item>
      ))}
      <List.Item icon={() => <FaRegDotCircle className="text-orange-500 mr-2" />}>
        {isEnabled ? "Feature Enabled" : "Feature Disabled"}
      </List.Item>
    </List>
  </Card>
);

export default PlanCard;
