import { dummyAssessments, dummyCourses, dummyUnits } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ManageAssessments = () => {
  return (
    <section className="">
      <Accordion type="single" collapsible className="flex flex-col gap-3">
        {dummyAssessments.map((item, index) => (
          <React.Fragment key={index}>
            <AccordionItem value={`item-${index}`}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {item.name}
                    <AccordionTrigger></AccordionTrigger>
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <AccordionContent>
                    <div className="">
                      <Accordion type="single" collapsible>
                        {dummyCourses.map((course, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{course.name}</AccordionTrigger>
                            <AccordionContent>
                              <Table>
                                <TableCaption>
                                  A list of your recent invoices.
                                </TableCaption>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>SNo</TableHead>
                                    <TableHead>Code</TableHead>
                                    <TableHead>Name</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {dummyUnits.map((unit, index) => (
                                    <TableRow>
                                      <TableCell>{index + 1}</TableCell>
                                      <TableCell>{unit.code}</TableCell>
                                      <TableCell>{unit.name}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </AccordionContent>
                </CardContent>
                <CardFooter>
                  <p>{item.createdAt}</p>
                </CardFooter>
              </Card>
            </AccordionItem>
          </React.Fragment>
        ))}
      </Accordion>
    </section>
  );
};

export default ManageAssessments;
