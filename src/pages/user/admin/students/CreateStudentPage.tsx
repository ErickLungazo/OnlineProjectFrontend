import StudentForm from "@/components/forms/StudentForm";
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

const CreateStudentPage = () => {
  return (
    <section className="">
      <div className="flex items-center justify-end">
        <Link to={"/admin/students"}>
          <Button>
            <List />
            Manage Students
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-center w-full pt-3">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Create Student</CardTitle>
            <CardDescription>Student</CardDescription>
          </CardHeader>
          <CardContent>
            <StudentForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CreateStudentPage;
