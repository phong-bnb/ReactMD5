import React, { useState } from 'react';
import { Button, message, Modal, Upload } from 'antd';
import { useFormik } from 'formik';
import axios from 'axios';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import storage from '../../firebaseConfig';

export default function UpdateProduct({ product, onRefetch }) {
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(0);

  const formik = useFormik({
    initialValues: {
      name: product.name,
      description: product.description,
      image: product.image,
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          `http://localhost:3080/api/updateProduct/${product._id}`,
          formik.values
        );
        message.success('Update san phẩm thành công');
        onRefetch();
        setIsModalOpen(false);
        formik.resetForm();
      } catch (error) {
        console.log(error);
        message.error('Update that bai');
      }
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    formik.handleSubmit();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  async function uploadFile(file) {
    setLoading(true);
    const storageRef = ref(storage, `/files/${file.name}_${Date.now()}`);
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
        setLoading(false);
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          formik.setFieldValue('image', url);
        });
      }
    );
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        UPLOAD
      </Button>
      <Modal
        title="UPLOAD PRODUCT"
        open={isModalOpen}
        onOk={handleOk}
        okButtonProps={{
          disabled: loading,
        }}
        onCancel={handleCancel}
      >
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </label>
        <br />
        <label htmlFor="description">
          <input
            type="text"
            placeholder="description"
            name="description"
            id="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </label>
        <br />
        <input
          type="file"
          // value={formik.values.image}
          onChange={(e) => uploadFile(e.target.files[0])}
        />
        <br />
        <img src={formik.values.image} alt="" width={100} height={100} />

        {/* <Upload action={} >
          <Button icon={<UploadOutlined />} loading={loading}>
            Upload {percent}
          </Button>
        </Upload> */}
      </Modal>
    </>
  );
}
