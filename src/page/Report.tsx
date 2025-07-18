import React, {Fragment} from 'react';
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import {Title} from "../atoms/Atomic";
import mbcLogo from "../assets/Report/mbcLogo.svg"
import sbsLogo from "../assets/Report/sbsLogo.svg"
import kbsLogo from "../assets/Report/kbsLogo.svg"

const newsData = [
  {
    key: "mbc",
    img: mbcLogo,
    clickLink: "https://news.imbc.com/more/report/",
    link: ["https://news.imbc.com/", "more/report/"],
    mail: "mbcjebo@mbc.co.kr",
    phone: "02-784-4000",
  },
  {
    key: "sbs",
    img: sbsLogo,
    clickLink: "https://news.sbs.co.kr/news/inform.do",
    link: ["https://news.sbs.co.kr/", "news/inform.do"],
    mail: "sbs8news@sbs.co.kr",
    phone: "02-2113-6000",
  },
  {
    key: "kbs",
    img: kbsLogo,
    clickLink: "https://news.imbc.com/more/report/",
    link: ["https://news.imbc.com/more/report/", "reportWrite.do"],
    mail: "kbs1234@kbs.co.kr",
    phone: "02-781-1234, 4444",
  },
]

const Report = () => {
  return (
    <>
      <Header isNotHome={true}/>
      <Container>
        <Wrapper>
          <Title data-aos={"fade-up"}>언론 제보로 더욱 알리기</Title>
          <Box data-aos={"fade-up"}>
            {
              newsData.map((data, i) => (
                <Item key={data.key}>
                  <Top>
                    <MbcLogo src={data.img}/>
                    <Line/>
                  </Top>
                  <Texts>
                    <GoToPage href={data.clickLink} target={'_blank'}>
                      <SubTitle>홈페이지</SubTitle>
                      {data.link.map((n, i) => {
                        return(
                          <Fragment key={i}>
                            {n}
                            <br/>
                          </Fragment>
                        );
                      })}
                    </GoToPage>
                    <Text>
                      <SubTitle>이메일</SubTitle>
                      {data.mail}
                    </Text>
                    <Text>
                      <SubTitle>전화번호</SubTitle>
                      {data.phone}
                    </Text>
                  </Texts>
                </Item>
              ))
            }
          </Box>
        </Wrapper>
      </Container>
      <Footer/>
    </>
  );
};

const KbsLogo = styled.img`
  width: 201px;
  height: 64px;
  margin-bottom: 28px;
`;
const SbsLogo = styled.img`
  width: 134px;
  height: 51px;
  margin-bottom: 40px;
`;
const GoToPage = styled.a`
  padding: 10px 15px;
  color: var(--text-contents, #524437);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 436px;
  width: max-content;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background: #ececec;
  }
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
;
`;
const MbcLogo = styled.img`
  width: 178px;
  height: 51px;
  margin-bottom: 41px;
`;
const SubTitle = styled.div`
  color: var(--text-contents, #524437);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Text = styled.div`
  padding: 10px 15px;
  color: var(--text-contents, #524437);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 436px;
  width: max-content;
`;
const Line = styled.div`
  width: 436px;
  height: 1px;
  background: #B0B0B0;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
  width: 436px;
  padding: 40px 20px;
  border: 2px solid var(rgba(0, 0, 0, 0.10));
  border-radius: 10px;
`;
const Box = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3vw;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1800px;
  gap: 70px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
  margin-bottom: 180px;
  min-height: 70vh;
`;
export default Report;
