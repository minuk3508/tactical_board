import { useRecoilState } from "recoil";
import styled from "styled-components";
import { awayListSettingState, homeListSettingState } from "../AtomStore";
import CreateAwayBox from "../Components/CreateAwayBox";
import CreateHomeBox from "../Components/CreateHomeBox";

export default function CreateTeamPage() {
  const [settingAway, setSettingAway] = useRecoilState(awayListSettingState);
  const [settingHome, setSettingHome] = useRecoilState(homeListSettingState);
  const teamReset = () => {
    setSettingAway(false);
    setSettingHome(false);
  };
  return (
    <Container>
      <CreateHomeBox />
      <CreateAwayBox />
      {settingAway && settingHome && (
        <BlurContainer>
          <StartButton>Start🚩</StartButton>
          <ResetButton onClick={teamReset}>Reset🔩</ResetButton>
        </BlurContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0% 10%;
`;
const BlurContainer = styled.div`
  padding-left: inherit;
  padding-right: inherit;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
const StartButton = styled.div`
  width: auto;
  height: auto;
  font-size: 50px;
  font-weight: 700;
  color: white;
  margin: 1% 5%;
  :hover {
    cursor: pointer;
    color: #d9d9d9;
  }
`;
const ResetButton = styled.div`
  width: auto;
  height: auto;
  font-size: 50px;
  font-weight: 700;
  color: white;
  margin: 1% 5%;
  :hover {
    cursor: pointer;
    color: #d9d9d9;
  }
`;
