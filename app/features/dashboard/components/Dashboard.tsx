import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { mockApi } from "~/features/model/utils/mockApi";
import { type Feature } from "~/features/model/utils/fakeData";

const Dashboard = () => {
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    mockApi.getFeatures().then(setFeatures);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6">
        This is the Dashboard where you can manage your features.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.id} className="p-4">
            <CardContent className="flex flex-col items-center text-center space-y-4">
              <img
                src={feature.icon}
                alt={feature.name}
                className="h-12 w-20"
              />
              <h2 className="text-xl font-semibold">{feature.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  feature.isEnabled
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                }`}
              >
                {feature.isEnabled ? "Active" : "Inactive"}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
