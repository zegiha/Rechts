import React from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import {Title} from "../atoms/Atomic";
import {message} from "../data/message";

const Hear = () => {
  return (
    <>
      <Header/>
      <Container>
        <Wrapper>
          <Title data-aos={"fade-up"}>다른 선생님분들의 이야기</Title>
          <Box data-aos={"fade-up"}>
            {message.map((n, i) => {
              return(
                <Item key={i}>
                  {
                    n.bool ?
                      <WithPic>
                        <Picture>{n.pic}</Picture>
                        <TextContainer>
                          <Name>{n.name}</Name>
                          <Contents bool={true}>{n.contents}</Contents>
                        </TextContainer>
                      </WithPic>:
                      <WithoutPic>
                        <TextContainer>
                          <Name>{n.name}</Name>
                          <Contents bool={false}>{n.contents}</Contents>
                        </TextContainer>
                      </WithoutPic>
                  }
                </Item>
              )
            })}
          </Box>
        </Wrapper>
      </Container>
    </>
  );
};

const WithoutPic = styled.div`
  width: 300px;
  height: 250px;
`;
const WithPic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 250px;
`;
const Contents = styled.div`
  color: var(--text-contents, #524437);
  font-family: 'Pretendard';
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: ${(props) => props.bool ? '40px' : '224px'};
  overflow: hidden;
`;

const Name = styled.div`
  color: var(--text-title);
  font-family: 'Pretendard';
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  overflow: hidden;
  height: 26px;
  width: auto;
`;
const TextContainer = styled.div`
  width: auto;
  height: 65px;
`;
const Item = styled.div`
  width: 300px;
  height: 250px;
`;
const Picture = styled.div`
  width: auto;
  height: 170px;
  background: gray;
`;
const Box = styled.div`
  border-radius: 20px;
  background: #FFF8F1;
  display: flex;
  padding: 35px;
  width: 1050px;
  gap: 40px;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  gap: 50px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 110px;
  padding-bottom: 180px;
`;
export default Hear;