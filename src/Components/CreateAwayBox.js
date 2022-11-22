import styled from "styled-components";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { awayListSettingState, awayPlayerListState } from "../AtomStore";
import AwayMemberTags from "./MemberTag_away";

export default function CreateAwayBox() {
  const [isSet, setIsSet] = useRecoilState(awayListSettingState);
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
  const teamSetting = () => {
    setIsSet((prev) => !prev);
  };
  return (
    <AwayTeamWrapper>
      <AwayTitle>AWAY</AwayTitle>
      <AwayTeam>
        <AddMembersBox>
          {isSet && <Covering />}
          <InputMember>
            <InputLabel>
              등번호 :
              <InputNumber
                type="text"
                onChange={numberChange}
                value={numbering}
              />
            </InputLabel>
            <InputLabel>
              이름 :
              <InputName type="text" onChange={namerChange} value={naming} />
            </InputLabel>
          </InputMember>
          <AddMemberButtonBox>
            <AddMemberButton onClick={addPlayer}>
              <AiOutlineUserAdd />
            </AddMemberButton>
            ADD
          </AddMemberButtonBox>
        </AddMembersBox>
        <ViewMembers>
          {isSet && <Covering />}
          {playerArray.map((i, index) =>
            i.number !== "" && i.name !== "" ? (
              <AwayMemberTags
                key={index}
                index={index}
                number={i.number}
                name={i.name}
              />
            ) : null
          )}
        </ViewMembers>
        <ConfirmButtonBox>
          <ConfirmButton onClick={teamSetting}>구성 완료</ConfirmButton>
        </ConfirmButtonBox>
      </AwayTeam>
    </AwayTeamWrapper>
  );
}

const ViewMembers = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  height: 50%;
  border-top: 1px solid rgba(199, 199, 199, 0.5);
  border-bottom: 1px solid rgba(199, 199, 199, 0.5);
  padding: 3%;
`;
const Covering = styled.div`
  padding-left: inherit;
  padding-right: inherit;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const ConfirmButton = styled.button`
  width: 30%;
  height: 50%;
  border: none;
  font-weight: 700;
  color: white;
  background-color: #5dc76d;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    background-color: #88e396;
  }
`;
const AddMemberButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 60%;
  color: rgba(199, 199, 199, 0.8);
  font-weight: 700;
`;
const AddMemberButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  font-size: 40px;
  color: rgba(199, 199, 199, 0.8);
  :hover {
    cursor: pointer;
    color: black;
  }
`;
const InputMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  height: 100%;
`;
const InputLabel = styled.label`
  font-size: 20px;
  font-weight: 500;
`;
const InputNumber = styled.input`
  width: 30%;
  height: auto;
  font-size: 25px;
  font-weight: 700;
  margin-left: 20px;
  outline: none;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 0.1rem solid rgba(199, 199, 199, 0.5);
`;
const InputName = styled.input`
  width: 60%;
  height: auto;
  font-size: 20px;
  font-weight: 700;
  margin-left: 20px;
  outline: none;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 0.1rem solid rgba(199, 199, 199, 0.5);
`;

const AddMembersBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  padding: 5% 5%;
`;
const ConfirmButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
`;

const AwayTeamWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 550px;
`;
const AwayTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  font-size: 30px;
  font-weight: 700;
`;
const AwayTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  border-radius: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`;
