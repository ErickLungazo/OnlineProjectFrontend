import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

// Schema for validation
const UnitSchema = z.object({
  name: z.string().min(2, "Unit name must be at least 2 characters."),
  code: z.string().min(3, "Unit code must be at least 3 characters."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters.")
    .max(500, "Description must not exceed 500 characters."),
  course: z.string().min(1, "Please select a course."),
  lecturer: z.string().min(1, "Please select a lecturer."),
});

const UnitForm = () => {
  const form = useForm({
    resolver: zodResolver(UnitSchema),
    defaultValues: {
      name: "",
      code: "",
      description: "",
      course: "",
      lecturer: "",
    },
  });

  // Dummy data for select fields
  const courses = [
    { id: "1", name: "Computer Science" },
    { id: "2", name: "Information Technology" },
    { id: "3", name: "Business Management" },
  ];
  const lecturers = [
    { id: "1", name: "Dr. Jane Doe" },
    { id: "2", name: "Prof. John Smith" },
    { id: "3", name: "Ms. Anna Brown" },
  ];

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Unit Data:", data);
    // Add logic to submit unit data (e.g., API call)
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter unit name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Code Field */}
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter unit code (e.g., IT101)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description Field */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit Description</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Provide a brief description of the unit"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Course Field */}
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course.id} value={course.name}>
                        {course.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Lecturer Field */}
        <FormField
          control={form.control}
          name="lecturer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lecturer</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a lecturer" />
                  </SelectTrigger>
                  <SelectContent>
                    {lecturers.map((lecturer) => (
                      <SelectItem key={lecturer.id} value={lecturer.name}>
                        {lecturer.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Create Unit
        </Button>
      </form>
    </Form>
  );
};

export default UnitForm;
