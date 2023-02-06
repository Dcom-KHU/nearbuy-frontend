import styled from "styled-components";

const MainPageBlock = styled.div`
  display: flex;
  width: 90%;
  padding: 40px;
  justify-content: center;
  align-items: center;
  background: lightblue;

  #temp-pic {
    background-color: pink;
    width: 300px;
    height: 450px;
    margin: 20px;
  }

  #temp-par {
    padding: 50px;
    background-color: gold;
    width: 500px;
    height: auto;
  }
`;

export default function MainPage() {
  return (
    <>
      <MainPageBlock>
        <div id="temp-pic">Temp Picture</div>
        <div id="temp-par">
          If you're looking for random paragraphs, you've come to the right
          place. When a random word or a random sentence isn't quite enough, the
          next logical step is to find a random paragraph. We created the Random
          Paragraph Generator with you in mind. The process is quite simple.
          Choose the number of random paragraphs you'd like to see and click the
          button. Your chosen number of paragraphs will instantly appear. While
          it may not be obvious to everyone, there are a number of reasons
          creating random paragraphs can be useful. A few examples of how some
          people use this generator are listed in the following paragraphs.
        </div>
      </MainPageBlock>
    </>
  );
}
