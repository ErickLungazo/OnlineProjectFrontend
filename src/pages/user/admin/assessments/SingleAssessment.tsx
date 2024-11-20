import { dummyAssessments, dummyCourses } from "@/lib/data";
import { AssessmentType, Course } from "@/lib/types";
import React from "react";
import { useParams } from "react-router-dom";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { format } from "date-fns";

const SingleAssessment = () => {
  const { slug } = useParams();
  const assessment: AssessmentType = dummyAssessments[Number.parseInt(slug)];

  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full gap-3">
        <span className="text-xl font-semibold tracking-wide">
          {assessment.name}
        </span>
        <p className="text-center text-muted-foreground">
          {assessment.description}
        </p>

        <Table className="mx-auto w-fit">
          <TableBody>
            <TableRow>
              <TableCell>Start Date:</TableCell>
              <TableCell>
                {format(new Date(assessment.startDate), "yyyy-MM-dd")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>End Date:</TableCell>
              <TableCell>
                {format(new Date(assessment.startDate), "yyyy-MM-dd")}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default SingleAssessment;
