import UnitForm from "@/components/forms/UnitForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useNavbarStore from "@/store/navbarStore";
import { List } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CreateUnitPage = () => {
  const navStore = useNavbarStore();
  useEffect(() => {
    navStore.setTitle("Create a Unit");
  }, []);
  return (
    <section className="">
      <div className="flex items-center justify-end">
        <Link to={"/admin/units"}>
          <Button>
            <List />
            Manage Units
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-center w-full pt-3">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Create Unit</CardTitle>
            <CardDescription>Unit</CardDescription>
          </CardHeader>
          <CardContent>
            <UnitForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CreateUnitPage;
