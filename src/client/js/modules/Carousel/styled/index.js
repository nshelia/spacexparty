import styled, { css } from "styled-components";
import { Box } from 'shared/styled/Box'
import rightArrow from 'right-arrow.svg'
import leftArrow from 'left-arrow.svg'

export const StyledCarouselSlidesWrapper = styled.div`
	display:flex;
	flex-wrap:nowrap;
	overflow-x: hidden;
	position:relative;
	margin-bottom:10px;
	padding:5px;
	border-radius:5px;
`

export const StyledCarouselWrapper = styled.div`
	position:relative;
`

export const StyledCarouselItem = styled.div`
	width:200px;
	height:100px;
	transition: all 0.5s;
	background:${(props) => props.theme.lightText};
	border-radius:5px;
	flex: 0 0 auto;
	max-width: inherit;
	margin-right:10px;
	display:flex;
	align-items:center;
	justify-content:center;
	color:white;
	box-shadow: 0px 2px 3px ${(props) => props.theme.boxShadowLight};
	&:last-child {
		margin:0;
	}
`

export const StyledCarouselHeader = styled(Box)`
	margin-bottom:10px;
	background: transparent;
`

export const StyledCarouselAnimator = styled.div`
	display:flex;
	transform: translate3d(0,0,0);
	will-change: transform;
	transition: all 0.5s;
`

export const StyledCarouselArrowWrapper = styled.button`
	position: absolute;
	top: 0;
	bottom: 0;
	padding:0;
	display:flex;
	align-items:center;
	height:100%;
	border:none;
	background:none;
	z-index:2;
	${(props) => !props.visible && css`
			display:none;
		`
}
	${(props) => props.nextArrow && css`
		right:-30px;
	`}
	${(props) => props.prevArrow && css`
		left:-30px;
	`}
`

export const StyledCarouselArrow = styled.div`
	height:25px;
	width:25px;
	${(props) => props.nextArrow && css`
		background: url(${rightArrow}) no-repeat;
	`}
	${(props) => props.prevArrow && css`
		background: url(${leftArrow}) no-repeat;
	`}
`