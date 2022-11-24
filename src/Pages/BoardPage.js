import styled from "styled-components";
import CreateHomeBox from "../Components/CreateHomeBox";
import CreateAwayBox from "../Components/CreateAwayBox";
import HomePlayerBlock from "../Components/HomePlayerBlock";
import AwayPlayerBlock from "../Components/AwayPlayerBlock";
import { useRef, useState } from "react";

const imgSrc = "https://ifh.cc/g/y0lsxo.png";

export default function BoardPage() {
  const [transformValue, setTransformValue] = useState(false);
  const canvas = useRef(null);
  const fullScreenMode = () => {
    setTransformValue((prev) => !prev);
  };
  return (
    <Container>
      <TopContainer transformValue={transformValue ? "100%" : "95%"}>
        <PlayerListContainer transformValue={transformValue ? "-100%" : "0%"}>
          <CreateHomeBox />
        </PlayerListContainer>
        <BoardContainer transformValue={transformValue ? "80%" : "50%"}>
          <Title transformValue={transformValue ? "-150%" : "0%"}>
            Tactical Board
          </Title>
          {/* <FullButton
            onClick={fullScreenMode}
            transformYValue={transformValue ? "-150%" : "0%"}
          >
            {transformValue ? "edit list" : "board only"}
          </FullButton> */}
          <CanvasWrapper
            ref={canvas}
            transformValue={transformValue ? "80%" : "50%"}
            transformYValue={transformValue ? "-5%" : "0%"}
          >
            <CanvasBackground src={imgSrc} alt="작전판, tactical board" />
            <HomePlayerBlock />
            <AwayPlayerBlock />
          </CanvasWrapper>
        </BoardContainer>
        <PlayerListContainer transformValue={transformValue ? "100%" : "0%"}>
          <CreateAwayBox />
        </PlayerListContainer>
      </TopContainer>
      <BottomContainer transformValue={transformValue ? "0%" : "5%"}>
        <SideEmpty />
        <CenterEmpty></CenterEmpty>
        <SideEmpty />
      </BottomContainer>
    </Container>
  );
}
const FullButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  width: 150px;
  height: 40px;
  color: rgba(0, 0, 0, 0.7);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  transform: translateY(${(props) => props.transformYValue});
  transition: all 0.3s;
  :hover {
    cursor: pointer;
  }
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 10%;
  font-size: 40px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  border: 5px solid rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  transform: translateY(${(props) => props.transformValue});
  transition: all 0.3s;
`;
const SideEmpty = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
  height: 100%;
`;
const CenterEmpty = styled.div`
  width: 50%;
  height: 100%;
`;
const BottomContainer = styled.div`
  display: flex;
  width: 100vw;
  height: ${(props) => props.transformValue};
`;
const TopContainer = styled.div`
  display: flex;
  width: 100vw;
  height: ${(props) => props.transformValue};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    -45deg,
    #815dc2,
    #3d1e75,
    #1f327a,
    #242a40,
    #5452e3
  );
  background-size: 400% 400%;
  animation: gradientBackgroundAnimation 13s ease infinite;
  @keyframes gradientBackgroundAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 1%;
  width: ${(props) => props.transformValue};
  height: 100%;
  transition: all 0.3s;
`;

const PlayerListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 1%;
  width: 25%;
  height: 100%;
  transform: translateX(${(props) => props.transformValue});
  transition: all 0.3s;
`;
const CanvasWrapper = styled.section`
  position: relative;
  overflow: hidden;
  width: 95%;
  height: auto;
  opacity: 0.9;
  transform: translateY(${(props) => props.transformYValue});
  transition: all 0.3s;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
    0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);
`;
const CanvasBackground = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  z-index: 0;
`;
