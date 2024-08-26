import React, { useEffect, useState } from "react";
import { GetApi, PostApi } from "Api/Api_Calling";
import { useNavigate } from "react-router-dom";

const SearchCandidate = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Search Candidates");
  const [allStudents, setAllStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [savedCandidates, setSavedCandidates] = useState([]);
  const [loadingSaved, setLoadingSaved] = useState(false);

  const getStudents = async () => {
    try {
      const getStudents = await GetApi("api/CompanyRoutes/GetAllStudents");
      setAllStudents(getStudents?.data?.data);
      setFilteredStudents(getStudents?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getSavedCandidates = async () => {
    try {
      setLoadingSaved(true);
      const saved = await GetApi("api/companyroutes/getsavedcandidates");
      setSavedCandidates(saved?.data?.data);
      setLoadingSaved(false);
    } catch (error) {
      setLoadingSaved(false);
      console.log(error);
    }
  };

  const saveCandidate = async (student) => {
    try {
      await PostApi("api/CompanyRoutes/SaveCandidate", {
        studentId: student._id,
      });
      alert(`${student.Name} has been saved successfully!`);
      getSavedCandidates();
    } catch (error) {
      console.log(error);
      alert(`Failed to save ${student.Name}`);
    }
  };

  const removeCandidate = async (student) => {
    try {
      await PostApi("api/CompanyRoutes/removeCandidate", {
        studentId: student._id,
      });
      alert(`${student.Name} has been removed successfully!`);
      getSavedCandidates();
    } catch (error) {
      console.log(error);
      alert(`Failed to remove ${student.Name}`);
    }
  };

  useEffect(() => {
    getStudents();
    getSavedCandidates();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredStudents(allStudents);
    } else {
      const filtered = allStudents.filter((student) =>
        student.Skill_Set.some((skill) =>
          skill.Skill.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredStudents(filtered);
    }
  }, [searchTerm, allStudents]);

  const isStudentSaved = (studentId) => {
    return savedCandidates.some(
      (savedStudent) => savedStudent.id === studentId
    );
  };

  return (
    <div
      className="p-3 font-sans text-gray-800"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="mb-10 text-sm text-gray-600">
        <span className="cursor-pointer" onClick={() => navigate("/jobs")}>
          Dashboard
        </span>{" "}
        &gt;
        <span className="cursor-pointer"> Via Candidate Search</span>
      </div>
      <div className="flex justify-center gap-10 space-x-4 border-b mb-8">
        {["Search Candidates", "Saved Candidates", "Unlocked Candidates"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 border-b-2 ${
                activeTab === tab
                  ? "border-[#a2bbd0]  text-blue-700"
                  : "border-transparent text-gray-600 hover:text-blue-600 hover:scale-110"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>
      {activeTab === "Search Candidates" && (
        <div className="text-center mb-10">
          <h1 className="text-3xl font-medium text-gray-600 mb-4">
            Search Candidates
          </h1>
          <p className="text-gray-500 mb-4 text-sm">
            Search talented professionals with your specific requirements in
            seconds
          </p>

          <div className="flex justify-center my-4 px-4">
            <div className="relative z-0 w-full md:w-1/2 mb-2 group">
              <input
                type="text"
                placeholder="Node.js Developer with 5 years of experience"
                id="floating_last_name"
                className="block p-2 w-full text-center text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-blue-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </div>
          </div>


          {loading ? (
            <div>Loading...</div>
          ) : (
            searchTerm && (
              <div className="overflow-x-auto rounded">
                <table className="min-w-full bg-white rounded-lg mt-2">
                  <thead className="bg-[#a2bbd0] text-white  rounded-lg">
                    <tr>
                      <th className="p-1 font-semibold">Name</th>
                      <th className="p-1 font-semibold">Number</th>
                      <th className="p-1 font-semibold">Email</th>
                      <th className="p-1 font-semibold">Skills</th>
                      <th className="p-1 font-semibold">Exp</th>
                      <th className="p-1 font-semibold">save</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {filteredStudents.map((student) => (
                      <tr key={student.id}>
                        <td className="border p-2">{student.Name}</td>
                        <td className="border p-2">{student.Number}</td>
                        <td className="border p-2">{student.Email}</td>
                        <td className="border p-2">
                          {student.Skill_Set.map((skill) => skill.Skill).join(
                            ", "
                          )}
                        </td>
                        <td className="border p-2">{student.Experience}</td>
                        <td className="border p-2">
                          <button
                            className="text-blue-500 cursor-pointer"
                            disabled={isStudentSaved(student.id)}
                            onClick={() => saveCandidate(student)}
                          >
                            <i className="fa-solid fa-floppy-disk"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}
        </div>
      )}
      {activeTab === "Saved Candidates" && (
        <div className="text-center mb-8">
          <h1 className="text-3xl font-medium text-gray-700 mb-2">
            Saved Candidates
          </h1>
          {loadingSaved ? (
            <div>Loading...</div>
          ) : savedCandidates.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg mt-10">
                <thead className="bg-[#a2bbd0] text-white  rounded-lg">
                  <tr>
                    <th className="p-1 font-semibold">Name</th>
                    <th className="p-1 font-semibold">Number</th>
                    <th className="p-1 font-semibold">Email</th>
                    <th className="p-1 font-semibold">Skills</th>
                    <th className="p-1 font-semibold">Exp</th>
                    <th className="p-1 font-semibold">Remove</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {savedCandidates.map((student) => (
                    <tr key={student.id}>
                      <td className="border p-2">{student.Name}</td>
                      <td className="border p-2">{student.Number}</td>
                      <td className="border p-2">{student.Email}</td>
                      <td className="border p-2">
                        {student.Skill_Set.map((skill) => skill.Skill).join(
                          ", "
                        )}
                      </td>
                      <td className="border p-2">{student.Experience}</td>
                      <td className="border p-2">
                        <button
                          onClick={() => {
                            removeCandidate(student);
                          }}
                        >
                          {" "}
                          <i className="fa-regular fa-trash-can text-blue-800"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">
              You don't have any saved candidates yet.
            </p>
          )}
        </div>
      )}
      {activeTab === "Unlocked Candidates" && (
        <div className="text-center">
          <h1 className="text-3xl font-medium text-gray-700 mb-2">
            Unlocked Candidates
          </h1>
          <p className="text-gray-500">
            You don't have any unlocked candidates yet.
          </p>
        </div>
      )}
      <div className="fixed bottom-0 right-0 m-8">
        <button className="p-3 bg-blue-500 text-white rounded-full shadow-lg">
          Messaging
        </button>
      </div>
    </div>
  );
};

export default SearchCandidate;
