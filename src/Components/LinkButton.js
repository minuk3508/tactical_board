import { AiOutlineDoubleRight } from "react-icons/ai";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { foldAndSpreadState } from "../AtomStore";

export default function LinkButton() {
  const [foldAndSpread, setFoldAndSpread] = useRecoilState(foldAndSpreadState);

  const foldAndSpreadFunction = () => {
    setFoldAndSpread((prev) => !prev);
  };

  return (
    <Container>
      <FoldButtonBox
        foldAndSpreadWidth={foldAndSpread ? "100%" : "15%"}
        foldAndSpreadHeight={foldAndSpread ? "5%" : "100%"}
        foldAndSpreadMagin={foldAndSpread ? "15%" : "0%"}
      >
        <FoldButton onClick={foldAndSpreadFunction}>
          <AiOutlineDoubleRight />
        </FoldButton>
      </FoldButtonBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const FoldButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.foldAndSpreadWidth};
  height: ${(props) => props.foldAndSpreadHeight};
  margin-bottom: ${(props) => props.foldAndSpreadMagin};
`;

const FoldButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.title_fonyColor};
  border: ${({ theme }) => theme.stlyeSet.border};
  border-radius: 0.3rem;
  :hover {
    cursor: pointer;
  }
`;
