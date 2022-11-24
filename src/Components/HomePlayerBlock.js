import styled from "styled-components";
import Draggable from "react-draggable";
import { homePlayerListState } from "../AtomStore";
import { useRecoilState } from "recoil";

export default function HomePlayerBlock() {
  const [playerArray] = useRecoilState(homePlayerListState);

  return (
    <>
      {playerArray.map((i, index) =>
        i.number !== "" && i.name !== "" ? (
          <PlayerPoint key={i.number} point={`60px`} toppoint={`100px`}>
            <Draggable>
              <Div>
                <Player>{i.number}</Player>
                <PlayerName>{i.name}</PlayerName>
              </Div>
            </Draggable>
          </PlayerPoint>
        ) : null
      )}
    </>
  );
}
const Div = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  font-size: 15px;
  font-weight: 700;
  color: white;
  border-radius: 30px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 1;
`;
const PlayerName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 20px;
  font-size: 15px;
  font-weight: 700;
  color: white;
  white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 1;
`;
const Player = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 15px;
  font-weight: 700;
  color: white;
  background-color: #ff0400;
  border-radius: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 1;
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: #ff7c70;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const PlayerPoint = styled.div`
  position: relative;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1px;
  height: 1px;
  top: ${(props) => props.toppoint};
  left: ${(props) => props.point};
  background-color: #3ba13b;
  border-radius: 30px;
  z-index: 1;
`;
