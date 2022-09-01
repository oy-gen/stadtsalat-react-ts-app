import styled from "styled-components";

export default function Tags({ tags }) {
  return (
    <>
      <Tag active={tags.includes("vegan")}>Vegan</Tag>
      <Tag active={tags.includes("vegetarian")}>Vegetarian</Tag>
      <Tag active={tags.includes("lactosefree")}>Lactosefree</Tag>
      <Tag active={tags.includes("glutenfree")}>Glutenfree</Tag>
    </>
  );
}

const Tag = styled.p`
  font-weight: 700;
  padding: 5px 10px;
  background-color: ${(props) =>
    props.active ? "mediumseagreen" : "darkgrey"};
  color: ${(props) => (props.active ? "white" : "lightgrey")};
  text-decoration: ${(props) => (props.active ? "" : "line-through")};
`;
