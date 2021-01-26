import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  display: inline-block;
  block-size: 20%;
  inline-size: 20%;
`;

const CompanyImage = styled.img`
  object-fit: cover;
  block-size: 100%;
  inline-size: 100%;
  max-block-size: 100%;
  max-inline-size: 100%;
`;

export default function Image({ imageURL }) {
  return (
    <ImageWrapper>
      <CompanyImage alt="Company Logo" src={imageURL} />
    </ImageWrapper>
  );
}
