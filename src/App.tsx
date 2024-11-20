import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import MainLayout from "./layout/MainLayout";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import DashboardLayout from "./layout/DashboardLayout";
import { DashboardPage } from "./pages/user/DashboardPage";
import ManageLecturersPage from "./pages/user/admin/lecturers/ManageLecturersPage";
import CreateLecturerPage from "./pages/user/admin/lecturers/CreateLecturerPage";
import CreateCoursePage from "./pages/user/admin/courses/CreateCoursePage";
import ManageCoursesPage from "./pages/user/admin/courses/ManageCoursesPage";
import ManageUnitsPage from "./pages/user/admin/units/ManageUnitsPage";
import CreateUnitPage from "./pages/user/admin/units/CreateUnitPage";
import ManageStudentsPage from "./pages/user/admin/students/ManageStudentsPage";
import CreateStudentPage from "./pages/user/admin/students/CreateStudentPage";
import ManageAssessments from "./pages/user/admin/assessments/ManageAssessments";
import SingleAssessment from "./pages/user/admin/assessments/SingleAssessment";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />

            {/* Courses */}
            <Route path="/admin/courses" element={<ManageCoursesPage />} />
            <Route
              path="/admin/courses/create"
              element={<CreateCoursePage />}
            />

            {/* units */}
            <Route path="/admin/units" element={<ManageUnitsPage />} />
            <Route path="/admin/units/create" element={<CreateUnitPage />} />

            {/* Lecturers */}
            <Route path="/admin/lecturers" element={<ManageLecturersPage />} />
            <Route
              path="/admin/lecturers/create"
              element={<CreateLecturerPage />}
            />

            {/* Students */}
            <Route path="/admin/students" element={<ManageStudentsPage />} />
            <Route
              path="/admin/students/create"
              element={<CreateStudentPage />}
            />

            {/* Assessments */}
            <Route path="/admin/assessments" element={<ManageAssessments />} />

            <Route
              path="/admin/assessments/:slug"
              element={<SingleAssessment />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
