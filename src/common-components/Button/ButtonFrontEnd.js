import styled from 'styled-components';
import {
  BorderRadiuses,
  Colors,
  FontLetterSpacings,
  FontFamilies,
  FontWeights,
  Opacity,
	FontLineHeights,
  FontSizes,
} from '../../shared/DesignTokens';

export const ButtonFrontEnd = styled.button`
	border: none;
	outline: none;
	width: 120px;
	height: 32px;
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	line-height: ${FontLineHeights.MEDIUM};
	background-color: ${Colors.BLUE_PASTEL};
	color: ${Colors.NEUTRAL_WHITE};
	border-radius: ${BorderRadiuses.TWO};
	cursor: pointer;
	transition: 200ms all ease;
  letter-spacing: ${FontLetterSpacings.MEDIUM};
	font-size: ${FontSizes.TWO};
	opacity: ${Opacity.ONE};
 
	&amp;:hover {
		background-color: ${Colors.BLUE_550};
	}
`;