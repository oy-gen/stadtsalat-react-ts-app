import styled from "styled-components";
import { TagsEnum } from "../../03_data-domain/get-stadtsalat-data/enums/tags.enum";

export default function Tags({ tags }: { tags: string[] }) {
  return (
    <>
      {Object.values(TagsEnum).map((tag) => (
        <Tag key={tag} active={tags.includes(tag)}>
          {tag.toUpperCase()}
        </Tag>
      ))}
    </>
  );
}

const Tag = styled.p<{ active: boolean }>`
  font-weight: 700;
  padding: 5px 10px;
  background-color: ${(props) =>
    props.active ? "mediumseagreen" : "darkgrey"};
  color: ${(props) => (props.active ? "white" : "lightgrey")};
  text-decoration: ${(props) => (props.active ? "" : "line-through")};
`;
