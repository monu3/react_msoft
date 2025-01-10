import React from "react";
import { Table } from "flowbite-react";
import BreadcrumbLayouts from "~/common/components/BreadcrumbLayouts";
import { breadcrumbs } from "~/common/utils/routes/breadcrumbs";
import { planRequestsJson } from "../planRequestsFakeJsonData";

const PlanRequestDisplay = () => {
  return (
    <BreadcrumbLayouts breadcrumbItems={breadcrumbs.planRequest}>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>NAME</Table.HeadCell>
            <Table.HeadCell>PLAN NAME</Table.HeadCell>
            <Table.HeadCell>TOTAL EMPLOYEE</Table.HeadCell>
            <Table.HeadCell>TOTAL CLIENT</Table.HeadCell>
            <Table.HeadCell>DURATION</Table.HeadCell>
            <Table.HeadCell>DATE</Table.HeadCell>
            <Table.HeadCell>ACTION</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {planRequestsJson.map((request) => (
              <Table.Row
                key={request.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {request.name}
                </Table.Cell>
                <Table.Cell>{request.planName}</Table.Cell>
                <Table.Cell>{request.totalEmployee}</Table.Cell>
                <Table.Cell>{request.totalClient}</Table.Cell>
                <Table.Cell>{request.duration}</Table.Cell>
                <Table.Cell>{request.date}</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </BreadcrumbLayouts>
  );
};

export default PlanRequestDisplay;
