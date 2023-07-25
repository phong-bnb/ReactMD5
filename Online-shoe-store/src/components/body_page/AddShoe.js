import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import storage from '../../firebaseConfig.js';
import axios from 'axios';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default function AddProduct({ setLoading }) {
  const [percent, setPercent] = useState(0);

  // Handles input change event and updates state

  const [form, setForm] = useState({
    name: '',
    description: '',
    isNew: false,
    image: '',
  });

  function handleChangeFile(event) {
    let file = event.target.files[0];

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setForm({ ...form, image: url });
        });
      }
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    axios.post('http://localhost:3080/api/products/store', form).then((res) => {
      setIsModalOpen(false);
      setLoading();
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        ADD PRODUCT
      </Button>
      <Button type="primary" style={{ margin: '20px' }} href="/home">
        HOME
      </Button>
      <Modal
        title="ADD PRODUCT"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <label htmlFor="updateName">
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
            id="updateName"
          />
        </label>
        <br />

        <label htmlFor="updateDescription">
          <input
            type="text"
            placeholder="Description"
            id="updateDescription"
            name="description"
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="updateStatus">
          <input
            type="checkbox"
            placeholder="Status"
            onChange={(e) => setForm({ ...form, isNew: e.target.checked })}
            name="isNew"
            checked={form.isNew}
            id="updateStatus"
          />
          <span style={{ marginLeft: 16 }}>Is new ?</span>
        </label>
        <br />
        <input
          type="file"
          placeholder="Image"
          id="Image"
          onChange={handleChangeFile}
        />
        <p>{percent} "% done"</p>
      </Modal>
    </>
  );
}
