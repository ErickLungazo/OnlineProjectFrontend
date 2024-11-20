import { Button } from "@/components/ui/button";
import { CirclePlus, EllipsisVertical, List, Mail, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { dummyStudents } from "@/lib/data";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ManageStudentsPage = () => {
  return (
    <section className="">
      <nav className="flex flex-wrap items-center justify-between gap-2">
        <span className="font-semibold sm:text-lg">All Students</span>

        <Link to={"/admin/students/create"}>
          <Button>
            <CirclePlus />
            Add Student
          </Button>
        </Link>
      </nav>

      <main className="pt-5">
        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {dummyStudents.map((item, index) => (
            <li key={index} className="relative bg-muted">
              <div className="absolute top-2 right-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant={"ghost"}>
                      <EllipsisVertical />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Manage</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Update</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                    <DropdownMenuItem>Disable</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex flex-col items-center w-full gap-1 p-3 border rounded-xl">
                <img
                  src={item.url}
                  alt=""
                  className="object-cover w-16 h-16 rounded-full"
                />
                <span className="font-semibold">{`${item.firstName} ${item.lastName}`}</span>
                <span className="text-sm text-muted-foreground">
                  {item.course.name}{" "}
                </span>

                <div className="flex items-center justify-center gap-2 ">
                  <Button size="sm" variant={"outline"}>
                    <Phone />
                    Call
                  </Button>
                  <Button size="sm" variant={"outline"}>
                    <Mail />
                    Chat
                  </Button>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant={"outline"}>
                        <List />
                        Units
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          {item.firstName}'s Registered Units
                        </DialogTitle>
                        <DialogDescription>Registered Units</DialogDescription>
                      </DialogHeader>
                      <Table>
                        <TableBody>
                          {item.units.map(({ code, name }, index) => (
                            <TableRow key={index}>
                              <TableCell>{code}</TableCell>
                              <TableCell>{name}</TableCell>
                            </TableRow>
                          ))}{" "}
                        </TableBody>
                      </Table>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
};

export default ManageStudentsPage;
