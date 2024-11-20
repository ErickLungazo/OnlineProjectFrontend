// types.ts

export type Course = {
  id: string;
  name: string;
  code: string;
  description: string;
  dateCreated: string;
};

export type Unit = {
  id: string;
  name: string;
  code: string;
  description: string;
  course: Course; // Represents the course this unit belongs to
  dateCreated: string;
};

export type Lecturer = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  url: string;
  course: Course; // The course the lecturer is associated with
  units: Unit[]; // Array of units the lecturer teaches
  createdAt: string;
};

// types.ts

export type Student = {
  id: string;
  firstName: string;
  lastName: string;
  regno: string; // Registration number
  email: string;
  phone: string;
  url: string;
  course: Course; // The course the student is enrolled in
  units: Unit[]; // Array of units the student is taking
  createdAt: string; // Date when the student record was created
};

export type AssessmentType = {
  id: string; // Unique identifier for the assessment
  name: string; // Name of the assessment
  description: string; // Description of the assessment
  startDate: string; // Start date of the assessment (ISO string format)
  endDate: string; // End date of the assessment (ISO string format)
  createdAt: string; // Date the assessment was created (ISO string format)
};
