import CourseForm from "@/components/forms/CourseForm";
import LecturerForm from "@/components/forms/LecturerForm";
import UnitForm from "@/components/forms/UnitForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { List } from "lucide-react";
import { Link } from "react-router-dom";

const CreateLecturerPage = () => {
  return (
    <section className="">
      <div className="flex items-center justify-end">
        <Link to={"/admin/lecturers"}>
          <Button>
            <List />
            Manage Lecturers
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-center w-full pt-3">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Create Lecturer</CardTitle>
            <CardDescription>Lecturer</CardDescription>
          </CardHeader>
          <CardContent>
            <LecturerForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CreateLecturerPage;
