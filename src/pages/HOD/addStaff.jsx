import React, { useState } from "react";

const StaffList = () => {
  const [staff, setStaff] = useState([
    { id: 1, name: " Mr:Naveed Ahmed", department: "Software", position: "Clerk" },
    { id: 2, name: "Ms: Farhana ", department: "Software", position: "Clerk" },
    { id: 3, name: "Br: Ahsan", department: "Software", position: "Clerk" },

  ]);

  const [newStaff, setNewStaff] = useState({
    name: "",
    department: "",
    position: "",
  });

  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedStaffId, setSelectedStaffId] = useState(null);

  const handleInputChange = (e) => {
    setNewStaff({
      ...newStaff,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddStaff = () => {
    setStaff([...staff, { ...newStaff, id: staff.length + 1 }]);
    setNewStaff({ name: "", department: "", position: "" });
  };

  const handleDeleteStaff = (id) => {
    setStaff(staff.filter((staffMember) => staffMember.id !== id));
  };

  const handleUpdateStaff = () => {
    setStaff((prevStaff) =>
      prevStaff.map((staffMember) =>
        staffMember.id === selectedStaffId ? newStaff : staffMember
      )
    );
    setNewStaff({ name: "", department: "", position: "" });
    setUpdateModalOpen(false);
  };

  const openUpdateModal = (id, name, department, position) => {
    setUpdateModalOpen(true);
    setSelectedStaffId(id);
    setNewStaff({ name, department, position });
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
    setSelectedStaffId(null);
    setNewStaff({ name: "", department: "", position: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Staff List</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={newStaff.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Department:</label>
          <input
            type="text"
            name="department"
            value={newStaff.department}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Position:</label>
          <input
            type="text"
            name="position"
            value={newStaff.position}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button
          onClick={handleAddStaff}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
        >
          Add Staff
        </button>
        <table className="min-w-full mt-8 bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Department</th>
              <th className="py-2 px-4 border-b">Position</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((staffMember) => (
              <tr key={staffMember.id}>
                <td className="py-2 px-4 border-b">{staffMember.id}</td>
                <td className="py-2 px-4 border-b">{staffMember.name}</td>
                <td className="py-2 px-4 border-b">{staffMember.department}</td>
                <td className="py-2 px-4 border-b">{staffMember.position}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() =>
                      openUpdateModal(staffMember.id, staffMember.name, staffMember.department, staffMember.position)
                    }
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDeleteStaff(staffMember.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Update Staff Modal */}
      {isUpdateModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Update Staff</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={newStaff.name}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Department:</label>
              <input
                type="text"
                name="department"
                value={newStaff.department}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Position:</label>
              <input
                type="text"
                name="position"
                value={newStaff.position}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleUpdateStaff}
              >
                Update
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
                onClick={closeUpdateModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffList;
