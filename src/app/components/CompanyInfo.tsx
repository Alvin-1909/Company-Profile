import React from "react";

interface CompanyInfoProps {
  description: string;
  contact: string;
  address: string;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  description,
  contact,
  address,
}) => (
  <section>
    <p>{description}</p>
    <p>
      <strong>Contact:</strong> {contact}
    </p>
    <p>
      <strong>Address:</strong> {address}
    </p>
  </section>
);

export default CompanyInfo;
