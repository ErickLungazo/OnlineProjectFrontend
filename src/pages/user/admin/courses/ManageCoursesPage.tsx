import { DataTable } from "./table/DataTable";
import { columns } from "./table/Columns";
import { dummyCourses } from "@/lib/data";
import useNavbarStore from "@/store/navbarStore";
import { useEffect } from "react";

const ManageCoursesPage = () => {
  const navStore = useNavbarStore();
  useEffect(() => {
    navStore.setTitle("Manage Course");
  }, []);
  return (
    <section className="">
      <DataTable data={dummyCourses} columns={columns} />
    </section>
  );
};

export default ManageCoursesPage;
