// now i have to change in ThirtyTwo

import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "react-toastify/dist/ReactToastify.css";
import { RotatingLines } from "react-loader-spinner";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Layout from "Layout";
import AttendanceHome from "pages/AttendanceHome/AttendanceHome";
import AttendanceList from "pages/AttendanceList/AttendanceList";
import JobsSummary from "pages/Jobs/JobsSummary/JobsSummary";
import JobsApplication from "pages/Jobs/JobsApplication/JobsApplication";
import JobsApplicationManager from "pages/Jobs/JobsApplicationManager/JobsApplicationManager";
import JobsReports from "pages/Jobs/JobsReports/JobsReports";
import JobSettingsApplicationForm from "pages/Jobs/JobSettings/JobSettingsApplicationForm";
import JobSettingsInterviewProcess from "pages/Jobs/JobSettings/JobSettingsInterviewProcess";
import JobSettingsScoreCard from "pages/Jobs/JobSettings/JobSettingsScoreCard";
import JobsShareandPromote from "pages/Jobs/JobsShareandPromote/JobsShareandPromote";
import JobsPublishToJobBoards from "pages/Jobs/JobsPublish/JobsPublishToJobBoards";
import JobBoardsConnect from "pages/Jobs/JobBoardsConnect/JobBoardsConnect";
import JobReceiveJobBoardApplication from "pages/Jobs/JobReceiveJobBoardApplications/JobReceiveJobBoardApplication";
import JobPublishToCollege from "pages/Jobs/JobPublishToCollege/JobPublishToCollege";
import JobPrestigeInstitue from "pages/Jobs/JobPrestigeInstitue/JobPrestigeInstitue";
import JobPrestigeReviews from "pages/Jobs/JobPrestigeInstitue/JobPrestigeReviews";
import JobPrestigeStudentReport from "pages/Jobs/JobPrestigeInstitue/JobPrestigeStudentReport";
import ReportsOverview from "pages/Reports/ReportsOverview";
import ReportsPipeline from "pages/Reports/ReportsPipeline";
import ReportsTimeToHire from "pages/Reports/ReportsTimeToHire";
import ReportsDemographics from "pages/Reports/ReportsDemographics";
import ReportsLiveSummery from "pages/Reports/ReportsLiveSummery";
import ReportsExport from "pages/Reports/ReportsExport";
import Settings from "pages/SettingsPage/Settings";
import SettingsCareer from "pages/SettingsPage/SettingsCareer";
import Login from "pages/Auth/Login";
import Signup from "pages/Auth/Signup";
import Community from "./pages/Community/index";
import JobCreateManual from "pages/Jobs/JobsCreate/JobCreateManual";
import JobEdit from "pages/Jobs/JobsCreate/EditAJobWithManual";
import JobCreateManualId from "pages/Jobs/JobsCreate/JobCreateManualId";
import Chat from "./Chat";
import FirstPage from "pages/Auth/FirstPage";
import Forget from "pages/Auth/Forget";
import SearchCandidate from "pages/Jobs/SearchCandidate/SearchCandidate";
import SmartSource from "pages/Dashboard/SmartSource";
import BulkImports from "pages/SettingsPage/BulkImports";
import ImportPreview from "pages/SettingsPage/ImportPreview";
import ImportedApplications from "components/ImportedData/ImportedApplications";
import EditProfile from "pages/Thirtytwo/EditProfile";
import Notification from "pages/Notification/Notification";
import { JobsSettings } from "pages/Jobs/JobsLinks";
import OnboardingProcess from "pages/OnboardingProcess";
const DashboardThirteen = React.lazy(() => import("pages/DashboardThirteen"));
const DashboardOne = React.lazy(() => import("pages/DashboardOne"));
const DashboardTwo = React.lazy(() => import("pages/DashboardTwo"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Twentytwo = React.lazy(() => import("pages/Twentytwo"));
const Twentythree = React.lazy(() => import("pages/Twentythree"));
const Twentysix = React.lazy(() => import("pages/Twentysix"));
const Thirtytwo = React.lazy(() => import("pages/Thirtytwo"));
const Thirtythree = React.lazy(() => import("pages/Thirtythree"));
const Thirtyfour = React.lazy(() => import("pages/Thirtyfour"));
const Thirtyfive = React.lazy(() => import("pages/Thirtyfive"));
const Thirtysix = React.lazy(() => import("pages/Thirtysix"));
const Twentyseven = React.lazy(() => import("pages/Twentyseven"));
const Fourty = React.lazy(() => import("pages/Fourty"));
const Thirtynine = React.lazy(() => import("pages/Thirtynine"));
const Thirtyeight = React.lazy(() => import("pages/Thirtyeight"));
const Thirtyseven = React.lazy(() => import("pages/Thirtyseven"));
const Fifteen = React.lazy(() => import("pages/Fifteen"));
const Wallet = React.lazy(() => import("pages/Wallets"));
const AllApplications = React.lazy(() =>
  import("pages/DashboardThirteen/AllApplications")
);

const ProjectRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const companyToken = localStorage.getItem("companyToken");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (companyToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [companyToken]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, []);

  if (loading) {
    return <div></div>;
  }
  const clientId =
    "226693163030-4ppbtc88hi6v34t2n5citajof38o21l2.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <React.Suspense
        fallback={
          <div className=" origin-center flex justify-center items-center h-screen w-screen">
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="blue" // Change the color here
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        }
      >
        {" "}
        <ToastContainer />
        <Router>
          {isAuthenticated ? (
            <Layout>
              <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/smartsourcing/:id" element={<SmartSource />} />
                <Route
                  path="/dashboardthirteen"
                  element={<DashboardThirteen />}
                />
                {/* <Route path="/chat" element={<DashboardOne />} /> */}
                <Route path="/chat" element={<Chat />} />
                <Route path="/activities" element={<DashboardTwo />} />
                <Route path="/jobs" element={<Dashboard />} />
                <Route path="/all-applications" element={<AllApplications />} />
                <Route path="/jobcreatemanual" element={<JobCreateManual />} />
                <Route path="/edit-job" element={<JobEdit />} />
                <Route
                  path="/jobcreatemanual/:id"
                  element={<JobCreateManualId />}
                />
                <Route path="/jobsSummary/:id" element={<JobsSummary />} />
                <Route
                  path="/jobsApplication/:id"
                  element={<JobsApplication />}
                />
                <Route
                  path="/jobsApplicationManager/:id"
                  element={<JobsApplicationManager />}
                />
                <Route
                  path="/jobsApplicationManager2/:id"
                  element={<DashboardTwo />}
                />
                <Route path="/jobReports/:id" element={<JobsReports />} />
                {/* <Route
                  path="/jobsSettings/:id"
                  element={<JobSettingsApplicationForm />}
                /> */}
                <Route
                  path="/jobsSettingsInterviewProcess"
                  element={<JobSettingsInterviewProcess />}
                />
                <Route
                  path="/jobsSettingsScoreCard"
                  element={<JobSettingsScoreCard />}
                />
                <Route
                  path="/jobsShareandPromote"
                  element={<JobsShareandPromote />}
                />
                <Route
                  path="/jobsPublishToJobBoards"
                  element={<JobsPublishToJobBoards />}
                />
                <Route
                  path="/jobBoardsConnect"
                  element={<JobBoardsConnect />}
                />
                <Route
                  path="/jobReceiveJobBoardApplication"
                  element={<JobReceiveJobBoardApplication />}
                />
                <Route
                  path="/jobPublishToCollege"
                  element={<JobPublishToCollege />}
                />
                <Route
                  path="/jobPrestigeInstitue"
                  element={<JobPrestigeInstitue />}
                />
                <Route
                  path="/jobPrestigeReviews"
                  element={<JobPrestigeReviews />}
                />
                <Route
                  path="/jobPrestigeStudentReport"
                  element={<JobPrestigeStudentReport />}
                />
                <Route path="/interviews" element={<Twentytwo />} />
                <Route path="/community" element={<Community />} />
                <Route
                  path="/interviews-application"
                  element={<Twentythree />}
                />
                <Route path="/onboarding" element={<Twentysix />} />
                <Route
                  path="/onboarding-process"
                  element={<OnboardingProcess />}
                />
                <Route
                  path="/new-hires-application"
                  element={<Twentyseven />}
                />
                <Route path="/reports" element={<ReportsOverview />} />
                <Route path="/reportsPipeline" element={<ReportsPipeline />} />
                <Route
                  path="/reportsTimeToHire"
                  element={<ReportsTimeToHire />}
                />
                <Route
                  path="/reportsDemographics"
                  element={<ReportsDemographics />}
                />
                <Route
                  path="/reportsLiveSummary"
                  element={<ReportsLiveSummery />}
                />
                <Route path="/reportsExport" element={<ReportsExport />} />
                <Route path="/settings" element={<Settings />} />
                <Route
                  path="/jobsSettings/:id"
                  element={<JobSettingsApplicationForm />}
                />
                <Route path="/jobsreports/:id" element={<Settings />} />
                <Route path="/bulk-imports" element={<BulkImports />} />
                <Route path="/import-preview/:id" element={<ImportPreview />} />
                <Route
                  path="/imported-applications"
                  element={<ImportedApplications />}
                />
                <Route path="/search-candidate" element={<SearchCandidate />} />
                <Route path="/settingsCareer" element={<SettingsCareer />} />
                <Route path="/company-profile" element={<Thirtytwo />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/my-team" element={<Thirtythree />} />
                <Route path="/hr-tool-box" element={<Thirtyfour />} />
                <Route path="/employeeHome" element={<Thirtyfive />} />
                <Route path="/publish-Job-Board" element={<Fifteen />} />
                <Route path="/employeeList" element={<Thirtysix />} />
                <Route path="/taskboard" element={<Thirtyseven />} />
                <Route path="/leaveManagement" element={<Thirtyeight />} />
                <Route path="/payRollHome" element={<Thirtynine />} />
                <Route path="/payRollList" element={<Fourty />} />
                <Route path="/attendanceHome" element={<AttendanceHome />} />
                <Route path="/attendanceList" element={<AttendanceList />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          ) : (
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/first" element={<FirstPage />} />
              <Route path="/forget" element={<Forget />} />
              <Route path="*" element={<Navigate to="/first" />} />
            </Routes>
          )}
        </Router>
      </React.Suspense>{" "}
    </GoogleOAuthProvider>
  );
};

export default ProjectRoutes;
