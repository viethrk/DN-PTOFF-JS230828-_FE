import { useEffect } from "react";
import styled from "styled-components";
import { getListUser } from "../../api/user.api";

const ProductList = (props) => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getListUser();
    if (data) {
      alert("Success");
    } else {
      alert("Error");
    }
  };

  return <Root>List product</Root>;
};

const Root = styled.div``;

export default ProductList;
