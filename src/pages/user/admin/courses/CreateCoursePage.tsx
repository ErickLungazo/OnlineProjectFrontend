import CourseForm from "@/components/forms/CourseForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Payment } from "@/lib/types";
import useNavbarStore from "@/store/navbarStore";
import { List } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CreateCoursePage = () => {
  const navStore = useNavbarStore();
  useEffect(() => {
    navStore.setTitle("Create A Course");
  }, []);

  return (
    <section className="">
      <div className="flex items-center justify-end">
        <Link to={"/admin/courses"}>
          <Button>
            <List />
            Manage Courses
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-center w-full pt-3">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Create Course</CardTitle>
            <CardDescription>Course</CardDescription>
          </CardHeader>
          <CardContent>
            <CourseForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CreateCoursePage;
