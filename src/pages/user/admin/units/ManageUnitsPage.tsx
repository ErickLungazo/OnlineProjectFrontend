import { DataTable } from "./table/DataTable";
import { columns } from "./table/Columns";
import { dummyUnits } from "@/lib/data";

const ManageUnitsPage = () => {
  return (
    <section className="">
      <DataTable data={dummyUnits} columns={columns} />
    </section>
  );
};

export default ManageUnitsPage;
