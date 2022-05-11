import styled from 'styled-components';
import { Colors } from '../../shared/DesignTokens';
import logo from '../../assets/images/logo.svg';

const HeaderWrapper = styled.header`
  height: 74px;
  background-color: ${Colors.HEADER};
  display: flex;
  align-items: center;
`;

const ContainerWrapper = styled.div`
  max-width: 1000px;
  width: 100%; 
  margin: 0 auto;
`

const Logo = styled.img.attrs({
  src: logo,
  alt: 'Logo do KnowUs',
})`
  width: 60px;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <ContainerWrapper>
        <Logo />
      </ContainerWrapper>
    </HeaderWrapper>
  );
}