import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProductDetails } from "../../store/product/action";
import { Form, Button } from "react-bootstrap";

export default function ProductEditForm(props) {
  console.log("the props for edit form", props);

  const dispatch = useDispatch();

  const initialState = {
    id: props.data.id,
    documentName: props.data.document_name,
    nameOnInvoice: props.data.name_on_invoice,
    deviceName: props.data.device_name,
    purchaseDate: props.data.purchase_date.substring(0, 10),
    warrantyStartDate: props.data.warranty_start_date.substring(0, 10),
    warrantyEndDate: props.data.warranty_end_date.substring(0, 10),
    warrantyDocument: props.data.warranty_doc_image,
    miscellaneousImage: props.data.other_image,
    roomId: props.data.roomId
  };
  const [productData, setProductData] = useState(initialState);
  // const [loading, setLoading] = useState(false);

  // console.log("---the initial state ----", productData);
  const handleChange = e => {
    const { name, value } = e.target;
    setProductData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateProductDetails(productData));
  };
  return (
    <div className="userform">
      <Form onSubmit={handleSubmit}>
        <Form.Label>Document Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Document Name"
          name="documentName"
          value={productData.documentName}
          onChange={handleChange}
        />
        <br />
        <Form.Label>Name on Invoice *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name on Invoice"
          name="nameOnInvoice"
          value={productData.nameOnInvoice}
          onChange={handleChange}
        />
        <br />
        <Form.Label>Device Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="The device name"
          name="deviceName"
          value={productData.deviceName}
          onChange={handleChange}
        />
        <br />
        <Form.Label>Purchase Date*</Form.Label>
        <Form.Control
          type="date"
          name="purchaseDate"
          value={productData.purchaseDate}
          onChange={handleChange}
        />
        <br />
        <Form.Label>warranty start date *</Form.Label>
        <Form.Control
          type="date"
          name="warrantyStartDate"
          value={productData.warrantyStartDate}
          onChange={handleChange}
        />
        <br />
        <Form.Label>warranty end date *</Form.Label>
        <Form.Control
          type="date"
          name="warrantyEndDate"
          value={productData.warrantyEndDate}
          onChange={handleChange}
        />
        <br />
        <Button type="submit">SUBMIT</Button>
      </Form>
    </div>
  );
}
