import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { getOrder } from "../redux/order/orderAction";
import { useParams } from "react-router-dom";

const OrderCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-top: 30px;
  width: 60vw;
  transition: box-shadow 0.3s ease;
  display: flex;
  justify-content: space-between;

  &:hover {
    box-shadow: 3px 3px 5px rgba(155, 97, 97, 0.3);
  }
`;

const OrderDetails = styled.div`
  margin-bottom: 16px;
  flex: 1;
  padding: 10px;
`;

const ProductList = styled.ul`
  list-style-type: none;

  flex: 1;
  padding: 10px;
`;

const ProductItem = styled.li`
  margin-bottom: 8px;
`;

const Address = styled.div`
  flex: 1;
  padding: 10px;
`;

const Text = styled.p`
  font-weight: 200;
`;

const Title = styled.span`
  font-weight: 600;
`;

export const Order = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const orders = useSelector((state) => state.order.order);
  useEffect(() => {
    dispatch(getOrder(params.id));
  }, [dispatch, params]);
  console.log(orders);
  return (
    <>
      {orders?.map((order) => (
        <OrderCard>
          <OrderDetails>
            <h2>Order Details</h2>
            <Text>
              <Title>Order ID:</Title> {order._id}
            </Text>
            <Text>
              <Title>User ID:</Title> {order.userId}
            </Text>
            <Text>
              <Title>Amount:</Title>$ {order.amount / 100}
            </Text>
            <Text>
              <Title>Payment Status:</Title> {order.status}
            </Text>
            <Text>
              <Title>Created At:</Title> {order.createdAt}
            </Text>
            <Text>
              <Title>Updated At:</Title> {order.updatedAt}
            </Text>
          </OrderDetails>
          <hr />
          <ProductList>
            <h2>Products</h2>
            {order.products.map((product) => (
              <ProductItem key={product._id}>
                <Text>
                  <Title>Product ID:</Title> {product._id}
                </Text>
                <Text>
                  <Title>Quantity:</Title> {product.quantity}
                </Text>
              </ProductItem>
            ))}
          </ProductList>
          <hr />
          <Address>
            <h2>Address</h2>
            <Text>
              <Title>City:</Title> {order.address.address_city}
            </Text>
            <Text>
              <Title>Country:</Title> {order.address.address_country}
            </Text>
            <Text>
              <Title>Address Line 1:</Title> {order.address.address_line1}
            </Text>
            <Text>
              <Title>Address Line 2:</Title>{" "}
              {order.address.address_line2 || "N/A"}
            </Text>
            <Text>
              <Title>State:</Title> {order.address.address_state}
            </Text>
            <Text>
              <Title>Zip Code:</Title> {order.address.address_zip}
            </Text>
            <Text>
              <Title>Brand:</Title> {order.address.brand}
            </Text>
            <Text>
              <Title>Last 4 Digits:</Title> {order.address.last4}
            </Text>
            <Text>
              <Title>Name:</Title> {order.address.name}
            </Text>
          </Address>
        </OrderCard>
      ))}
    </>
  );
};

export default Order;
