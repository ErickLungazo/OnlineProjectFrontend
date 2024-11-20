import { AssessmentType, Course, Lecturer, Unit } from "./types";

// Dummy Courses
export const dummyCourses: Course[] = [
  {
    id: "1",
    name: "Computer Science",
    code: "CS",
    description: "A course on computing concepts and programming.",
    dateCreated: "2023-01-10",
  },
  {
    id: "2",
    name: "Information Technology",
    code: "IT",
    description: "A course on IT systems and infrastructure.",
    dateCreated: "2023-02-15",
  },
  {
    id: "3",
    name: "Software Engineering",
    code: "SE",
    description: "A course on designing and building software systems.",
    dateCreated: "2023-03-20",
  },
];

// Dummy Units
export const dummyUnits: Unit[] = [
  {
    id: "1",
    name: "Introduction to Programming",
    code: "CS101",
    description: "Learn the basics of programming.",
    course: dummyCourses[0], // Reference to a Course object
    dateCreated: "2024-01-10",
  },
  {
    id: "2",
    name: "Data Structures",
    code: "CS201",
    description: "Understand the fundamental data structures.",
    course: dummyCourses[0], // Reference to a Course object
    dateCreated: "2024-02-15",
  },
  {
    id: "3",
    name: "Web Development",
    code: "CS301",
    description: "Build and design websites.",
    course: dummyCourses[2], // Reference to a Course object
    dateCreated: "2024-03-20",
  },
  {
    id: "4",
    name: "Database Systems",
    code: "CS401",
    description: "Explore relational and non-relational databases.",
    course: dummyCourses[0], // Reference to a Course object
    dateCreated: "2024-04-25",
  },
];

// Dummy Lecturers
export const dummyLecturers: Lecturer[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "1234567890",
    url: "https://mighty.tools/mockmind-api/content/human/44.jpg",
    course: dummyCourses[0], // Computer Science
    units: [dummyUnits[0], dummyUnits[1]], // Introduction to Programming, Data Structures
    createdAt: "2024-01-01",
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Smith",
    email: "janesmith@example.com",
    phone: "0987654321",
    url: "https://mighty.tools/mockmind-api/content/human/65.jpg",
    course: dummyCourses[1], // Information Technology
    units: [dummyUnits[3]], // Database Systems
    createdAt: "2024-02-10",
  },
  {
    id: "3",
    firstName: "Alice",
    lastName: "Brown",
    email: "alicebrown@example.com",
    phone: "1231231234",
    url: "https://mighty.tools/mockmind-api/content/human/23.jpg",
    course: dummyCourses[0], // Computer Science
    units: [dummyUnits[0]], // Introduction to Programming
    createdAt: "2024-02-20",
  },
  {
    id: "4",
    firstName: "Robert",
    lastName: "Johnson",
    email: "robertjohnson@example.com",
    phone: "2342342345",
    url: "https://mighty.tools/mockmind-api/content/human/12.jpg",
    course: dummyCourses[2], // Software Engineering
    units: [dummyUnits[2]], // Web Development
    createdAt: "2024-03-15",
  },
  {
    id: "5",
    firstName: "Emily",
    lastName: "Davis",
    email: "emilydavis@example.com",
    phone: "3453453456",
    url: "https://mighty.tools/mockmind-api/content/human/77.jpg",
    course: dummyCourses[1], // Information Technology
    units: [dummyUnits[3]], // Database Systems
    createdAt: "2024-04-01",
  },
  {
    id: "6",
    firstName: "Michael",
    lastName: "Wilson",
    email: "michaelwilson@example.com",
    phone: "4564564567",
    url: "https://mighty.tools/mockmind-api/content/human/38.jpg",
    course: dummyCourses[0], // Computer Science
    units: [dummyUnits[1]], // Data Structures
    createdAt: "2024-05-10",
  },
  {
    id: "7",
    firstName: "Laura",
    lastName: "Martinez",
    email: "lauramartinez@example.com",
    phone: "5675675678",
    url: "https://mighty.tools/mockmind-api/content/human/49.jpg",
    course: dummyCourses[2], // Software Engineering
    units: [dummyUnits[2], dummyUnits[3]], // Web Development, Database Systems
    createdAt: "2024-06-05",
  },
  {
    id: "8",
    firstName: "David",
    lastName: "Taylor",
    email: "davidtaylor@example.com",
    phone: "6786786789",
    url: "https://mighty.tools/mockmind-api/content/human/80.jpg",
    course: dummyCourses[1], // Information Technology
    units: [dummyUnits[0]], // Introduction to Programming
    createdAt: "2024-07-15",
  },
  {
    id: "9",
    firstName: "Sophia",
    lastName: "Anderson",
    email: "sophiaanderson@example.com",
    phone: "7897897890",
    url: "https://mighty.tools/mockmind-api/content/human/95.jpg",
    course: dummyCourses[2], // Software Engineering
    units: [dummyUnits[2]], // Web Development
    createdAt: "2024-08-01",
  },
  {
    id: "10",
    firstName: "William",
    lastName: "Thomas",
    email: "williamthomas@example.com",
    phone: "8908908901",
    url: "https://mighty.tools/mockmind-api/content/human/10.jpg",
    course: dummyCourses[0], // Computer Science
    units: [dummyUnits[0], dummyUnits[3]], // Introduction to Programming, Database Systems
    createdAt: "2024-09-01",
  },
];

// Dummy Students
export const dummyStudents = [
  {
    id: "1",
    firstName: "William",
    lastName: "Thomas",
    email: "williamthomas@example.com",
    phone: "8908908901",
    url: "https://mighty.tools/mockmind-api/content/human/10.jpg",
    course: dummyCourses[0], // Computer Science
    units: [dummyUnits[0], dummyUnits[3]], // Introduction to Programming, Database Systems
    createdAt: "2024-09-01",
  },
  {
    id: "2",
    firstName: "Emma",
    lastName: "Smith",
    email: "emmasmith@example.com",
    phone: "8908908902",
    url: "https://mighty.tools/mockmind-api/content/human/20.jpg",
    course: dummyCourses[1], // Information Technology
    units: [dummyUnits[1], dummyUnits[2]], // Data Structures, Web Development
    createdAt: "2024-08-15",
  },
  {
    id: "3",
    firstName: "Lucas",
    lastName: "Johnson",
    email: "lucasjohnson@example.com",
    phone: "8908908903",
    url: "https://mighty.tools/mockmind-api/content/human/30.jpg",
    course: dummyCourses[2], // Software Engineering
    units: [dummyUnits[2], dummyUnits[3]], // Web Development, Database Systems
    createdAt: "2024-07-10",
  },
  {
    id: "4",
    firstName: "Olivia",
    lastName: "Brown",
    email: "oliviabrown@example.com",
    phone: "8908908904",
    url: "https://mighty.tools/mockmind-api/content/human/40.jpg",
    course: dummyCourses[0], // Computer Science
    units: [dummyUnits[0], dummyUnits[1]], // Introduction to Programming, Data Structures
    createdAt: "2024-06-05",
  },
  {
    id: "5",
    firstName: "Liam",
    lastName: "Williams",
    email: "liamwilliams@example.com",
    phone: "8908908905",
    url: "https://mighty.tools/mockmind-api/content/human/50.jpg",
    course: dummyCourses[1], // Information Technology
    units: [dummyUnits[1], dummyUnits[3]], // Data Structures, Database Systems
    createdAt: "2024-05-18",
  },
  {
    id: "6",
    firstName: "Sophia",
    lastName: "Davis",
    email: "sophiadavis@example.com",
    phone: "8908908906",
    url: "https://mighty.tools/mockmind-api/content/human/60.jpg",
    course: dummyCourses[2], // Software Engineering
    units: [dummyUnits[0], dummyUnits[2]], // Introduction to Programming, Web Development
    createdAt: "2024-04-22",
  },
  {
    id: "7",
    firstName: "Mason",
    lastName: "Martinez",
    email: "masonmartinez@example.com",
    phone: "8908908907",
    url: "https://mighty.tools/mockmind-api/content/human/70.jpg",
    course: dummyCourses[0], // Computer Science
    units: [dummyUnits[2], dummyUnits[3]], // Web Development, Database Systems
    createdAt: "2024-03-30",
  },
  {
    id: "8",
    firstName: "Isabella",
    lastName: "Garcia",
    email: "isabellagarcia@example.com",
    phone: "8908908908",
    url: "https://mighty.tools/mockmind-api/content/human/80.jpg",
    course: dummyCourses[1], // Information Technology
    units: [dummyUnits[0], dummyUnits[1]], // Introduction to Programming, Data Structures
    createdAt: "2024-02-25",
  },
  {
    id: "9",
    firstName: "James",
    lastName: "Rodriguez",
    email: "jamesrodriguez@example.com",
    phone: "8908908909",
    url: "https://mighty.tools/mockmind-api/content/human/90.jpg",
    course: dummyCourses[2], // Software Engineering
    units: [dummyUnits[1], dummyUnits[3]], // Data Structures, Database Systems
    createdAt: "2024-01-12",
  },
  {
    id: "10",
    firstName: "Charlotte",
    lastName: "Lee",
    email: "charlottelee@example.com",
    phone: "8908908910",
    url: "https://mighty.tools/mockmind-api/content/human/100.jpg",
    course: dummyCourses[0], // Computer Science
    units: [dummyUnits[0], dummyUnits[2]], // Introduction to Programming, Web Development
    createdAt: "2023-12-05",
  },
];

export const dummyAssessments: AssessmentType[] = [
  {
    id: "1",
    name: "ContinuousAssessment",
    description:
      "Ongoing assessments throughout the term to track student progress.",
    startDate: "2024-10-01T00:00:00Z",
    endDate: "2024-10-30T23:59:59Z",
    createdAt: "2024-09-01T10:00:00Z",
  },
  {
    id: "2",
    name: "EndOfTerm",
    description: "End of term exams to evaluate students' overall performance.",
    startDate: "2024-12-01T00:00:00Z",
    endDate: "2024-12-10T23:59:59Z",
    createdAt: "2024-09-15T12:00:00Z",
  },
  {
    id: "3",
    name: "MainExam",
    description:
      "The final main exam of the course to determine student grades.",
    startDate: "2025-05-10T00:00:00Z",
    endDate: "2025-05-15T23:59:59Z",
    createdAt: "2024-10-20T14:30:00Z",
  },
  {
    id: "4",
    name: "MidTermAssessment",
    description:
      "Mid-term exams to assess the progress halfway through the term.",
    startDate: "2025-03-01T00:00:00Z",
    endDate: "2025-03-07T23:59:59Z",
    createdAt: "2024-11-10T09:00:00Z",
  },
  {
    id: "5",
    name: "PracticalExam",
    description:
      "Practical exams focused on hands-on skills and real-world applications.",
    startDate: "2025-04-01T00:00:00Z",
    endDate: "2025-04-05T23:59:59Z",
    createdAt: "2024-12-01T11:45:00Z",
  },
];
