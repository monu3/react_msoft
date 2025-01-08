import React from "react";
import Company from "../components/CompanyList";
import { Breadcrumb } from "flowbite-react";
import { breadcrumbs } from "~/common/utils/routes/breadcrumbs";
import BreadcrumbLayouts from "~/common/components/BreadcrumbLayouts";

const companyPage = () => {
  return (
    <BreadcrumbLayouts breadcrumbItems={breadcrumbs.company}>
      <Company />
    </BreadcrumbLayouts>
  );
};

export default companyPage;
