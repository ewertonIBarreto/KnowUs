import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Colors } from '../../shared/DesignTokens';
import defaultAvatar from '../../assets/images/defaultAvatar.png';

export const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;

export const SearchWrapper = styled.section`
  background-color: ${Colors.WRAPPER};
  width: 100%;
  padding-top: 40px;
`;


export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: ${Colors.NEUTRAL_WHITE};
  font-size: 60px;
  font-weight: 900;
`;


export const CardWrapper = styled.section`
  display: flex;
  margin-top: 70px;
  flex-wrap: wrap;
`;

export const Card = styled.article`
  width: 280px;
  color: ${Colors.NEUTRAL_WHITE};
  background-color: ${Colors.CARD};
  border-radius: 12px;
  margin: 20px 20px;
`;

export const CardImage = styled.div`
  width: 100%;
  background-image: url('${props => props.avatar || defaultAvatar}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  height: 150px;
  border-radius: 12px 12px 0 0;
`;

export const CardDevName = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 300;
  margin-top: 10px;
  padding-left: 20px;

  & strong {
    font-weight: 400;
  }
`
export const CardStateName = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 300;
  padding-left: 20px;

`

export const TagWrapper = styled.section`
  display: flex;
  margin-top: 20px;
  padding-left: 20px;
  margin-bottom: 40px;
`;

export const Tag = styled.div`
  width: 80px;
  height: 20px;
  background-color: ${props => props.skill === 'Front-end' ? Colors.BLUE_PASTEL 
  : props.skill === 'Back-end' ? Colors.PURPLE_PASTEL : Colors.GREEN_PASTEL};
  border-radius: 30px;
  align-items: center;
  display: flex;
  justify-content: center;

  &:first-of-type {
    margin-right: 20px;
  }
`

export const ButtonCard = styled(Link)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.06em;

  color: rgba(255, 255, 255, 0.8);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  height: 52px;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 30px;
  cursor: pointer;
`;
