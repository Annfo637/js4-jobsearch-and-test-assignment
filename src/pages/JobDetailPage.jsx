import React from "react";
import { useParams } from "react-router";
import JobItemDetail from "../components/JobItemDetail";

export default function JobDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <JobItemDetail id={id} />
    </div>
  );
}
