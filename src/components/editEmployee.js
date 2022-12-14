import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '/Users/mediaoneph/reactjs/sample/src/index.css';

function EditEmployee(props) {
  const [show, setShow] = useState(false);

  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Edit</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <form
                onSubmit={(e) => {
                    handleClose();
                    e.preventDefault();
                    props.updateEmployee(props.id, name, role);
                }}
                id='form1' className="bg-white px-8"
            >
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                    Name
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2"for="role">
                    Role
                </label>
                <input 
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" 
                    type="text"
                    value={role}
                    onChange={(e) => {setRole(e.target.value)}}
                />
                </div>
                <div className="flex items-center justify-between">
                </div>
            </form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <button form="form1" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;