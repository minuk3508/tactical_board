import styled from "styled-components";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { awayPlayerListState } from "../AtomStore";
import AwayMemberTags from "./MemberTag_away";

export default function CreateAwayBox() {
  const [numbering, setNumbering] = useState("");
  const [naming, setNaming] = useState("");
  const [playerArray, setPlayerArray] = useRecoilState(awayPlayerListState);
  const isNumber = playerArray.map((i) => i.number);

  //add를 누르면 전역상태에 플레이어 추가
  const numberChange = (e) => {
    setNumbering(e.target.value);
  };
  const namerChange = (e) => {
    setNaming(e.target.value);
  };
  const addPlayer = async () => {
    const newPlayerArray = [
      ...playerArray,
      { number: numbering, name: naming },
    ];

    if (isNumber.includes(numbering)) {
      alert("이미 존재하는 등번호 입니다!");
    } else {
      await setPlayerArray(newPlayerArray);
      await setNumbering("");
      await setNaming("");
    }
  };

  return (
    <>
      <AwayTeamWrapper>
        <AwayTitle>AWAY</AwayTitle>
        <AddMembersBox>
          <InputMember>
            <InputNumber
              type="text"
              onChange={numberChange}
              value={numbering}
              placeholder="Number"
            />

            <InputName
              type="text"
              onChange={namerChange}
              value={naming}
              placeholder="Player Name"
            />
            <AddMemberButton onClick={addPlayer}>
              <Span>ADD PLAYER </Span>
              <AiOutlineUserAdd />
            </AddMemberButton>
          </InputMember>
        </AddMembersBox>
      </AwayTeamWrapper>
      <ViewMembers>
        {playerArray.map((i, index) =>
          i.number !== "" && i.name !== "" ? (
            <AwayMemberTags
              key={i.number}
              index={index}
              number={i.number}
              name={i.name}
            />
          ) : null
        )}
      </ViewMembers>
    </>
  );
}
const ViewMembers = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 90%;
  height: 45%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 3%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`;
const AwayTeamWrapper = styled.div`
  width: 80%;
  height: 40%;
  border-radius: 15px;
  backdrop-filter: blur(100px);
`;
const AwayTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 30px;
  font-weight: 700;
  color: white;
`;

const AddMembersBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75%;
  padding: 2% 0%;
`;
const InputMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 40%;
`;
const InputNumber = styled.input`
  width: 80%;
  height: auto;
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-left: 20px;
  padding-left: 2%;
  margin-bottom: 5%;
  background: none;
  border: 3px solid rgba(199, 199, 199, 0.5);
  border-radius: 10px;
`;
const InputName = styled.input`
  width: 80%;
  height: auto;
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-left: 20px;
  margin-bottom: 5%;
  padding-left: 2%;
  background: none;
  border: 3px solid rgba(199, 199, 199, 0.5);
  border-radius: 10px;
`;

const AddMemberButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
  margin-left: 20px;
  padding: 10px;
  font-size: 30px;
  color: black;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  :hover {
    cursor: pointer;
    color: #b3b3b3;
  }
`;
const Span = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
