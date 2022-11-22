import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { awayPlayerListState } from "../AtomStore";

export default function AwayMemberTags({ number, name, index }) {
  const [playerArray, setPlayerArray] = useRecoilState(awayPlayerListState);

  const deleteTag = () => {
    const left_PlayerArray = playerArray.slice(index + 1, playerArray.length);
    const right_PlayerArray = playerArray.slice(0, index);
    const deletedPlayerArray = [...right_PlayerArray, ...left_PlayerArray];
    setPlayerArray(deletedPlayerArray);
  };
  return (
    <Box onClick={deleteTag}>
      <TagNumber>{number}</TagNumber>
      <TagName>
        {name}
        <AiOutlineCloseCircle />
      </TagName>
    </Box>
  );
}
const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto;
  height: 30px;
  color: white;
  font-weight: 700;
  background-color: #696969;
  border-radius: 5px;
  padding: 0% 3%;
  margin: 1% 1%;
  :hover {
    cursor: pointer;
    background-color: #b5b5b5;
  }
`;

const TagNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
`;

const TagName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  margin: 0% 3%;
  white-space: nowrap;
`;
