import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Button, Checkbox, Popconfirm, message } from 'antd';
import UpdateProduct from './Upload';
import AddProduct from './AddShoe';
export default function ListShoe() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllProduct = async () => {
    await axios
      .get('http://localhost:3080/api/products?all=true')
      .then((res) => {
        setList(res.data);
      });
  };
  useEffect(() => {
    getAllProduct();
  }, [loading]);

  return (
    <>
      <h1>Manager Product </h1>
      <AddProduct setLoading={() => setLoading(!loading)} />

      <table
        class="table table-striped table-bordered table-hover text-center align-middle"
        style={{ border: '1px' }}
      >
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Is new</th>
            <th scope="col">Image</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((element, index) => (
              <tr key={index}>
                <td>{element.name}</td>
                <td>{element.description}</td>
                <td class="col-1">
                  <img src={element.image} class="img-fluid" alt="" />
                </td>
                <td class="col-1">{element.isNewProduct && <Checkbox checked />}</td>
                <td>
                  <UpdateProduct product={element} onRefetch={getAllProduct} />
                  <br />
                  <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={async () => {
                      await axios.delete(
                        `http://localhost:3080/api/product/${element._id}`
                      );
                      message.success('Xoa thanh cong');
                      getAllProduct();
                    }}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button danger>Delete</Button>
                  </Popconfirm>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
