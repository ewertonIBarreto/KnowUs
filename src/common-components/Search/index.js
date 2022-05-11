import styled from 'styled-components'
import { Colors } from '../../shared/DesignTokens';


const SearchInput = styled.input`
  max-width: 300px;
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${Colors.NEUTRAL_WHITE};
  opacity: 0.4;
  padding: 10px 10px 10px 0;
  color: ${Colors.NEUTRAL_WHITE};
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  background: url('../../assets/icons/search.svg') no-repeat;
`;

const SearchComponent = () => (
  <SearchInput placeholder="Digite sua pesquisa"/>
)


export default SearchComponent;