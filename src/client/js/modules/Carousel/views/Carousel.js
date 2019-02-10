import React from "react";
import {
  StyledCarouselSlidesWrapper,
  StyledCarouselWrapper,
  StyledCarouselArrowWrapper,
  StyledCarouselItem,
  StyledCarouselArrow,
  StyledCarouselAnimator,
  StyledCarouselHeader
} from '../styled'
import PropTypes from 'prop-types'

export default class Carousel extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  }

  constructor() {
    super()
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
    this.sliderWrapper = React.createRef()
    this.sliderAnimator = React.createRef()
  }

    state = {
      itemWidth: 210,
      nextArrow: {
        visible: true
      },
      prevArrow: {
        visible: false
      },
      initialXPosition: 0
    }

    componentDidMount() {
      if (this.props.items.length * this.state.itemWidth <= this.getSliderWrapperWidth()) {
        this.setState({
          nextArrow: {
            visible: false
          },
          prevArrow: {
            visible: false
          }
        })
      }
    }

    getSliderWrapperWidth() {
      if (this.sliderWrapper.current) {
        return this.sliderWrapper.current.clientWidth
      }
    }

    getSliderAnimator() {
      if (this.sliderAnimator.current) {
        return getComputedStyle(this.sliderAnimator.current)
      }
    }

    next() {
      const sliderAnimator = this.sliderAnimator.current
      let nextPosition = this.state.initialXPosition - this.state.itemWidth
      const remainWidthBeforeLastItem = sliderAnimator.offsetWidth + nextPosition + 10 - this.getSliderWrapperWidth()

      if (remainWidthBeforeLastItem < this.state.itemWidth) {
        nextPosition -= remainWidthBeforeLastItem
        this.setState({
          nextArrow: {
            visible: false
          }
        })
      }
      this.setTranslate(nextPosition,0,sliderAnimator)
      this.setState({
        initialXPosition: nextPosition,
        prevArrow: {
          visible: true
        }
      })
    }

    prev() {
      if (this.state.initialXPosition < 0) {
        const sliderAnimator = this.sliderAnimator.current
        let nextPosition = this.state.initialXPosition + this.state.itemWidth

        if (nextPosition === Math.abs(nextPosition)) {
          nextPosition = 0
        }
        this.setTranslate(nextPosition,0,sliderAnimator)
        this.setState({
          initialXPosition: nextPosition,
          nextArrow: {
            visible: true
          },
          prevArrow: {
            visible: nextPosition !== 0
          }
        })
      }
    }

    setTranslate(xPos, yPos,node) {
      node.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }

    renderList() {

      return this.props.items.map((item,index) => {
        return (
          <StyledCarouselItem key={index}>
            <span>{item}</span>
          </StyledCarouselItem>
        )
      })
    }

    render() {
      const { nextArrow, prevArrow } = this.state

      return (
        <React.Fragment>
          <StyledCarouselHeader>
            {this.props.title}
          </StyledCarouselHeader>
          <StyledCarouselWrapper>
            <StyledCarouselSlidesWrapper ref={this.sliderWrapper}>
              <StyledCarouselAnimator ref={this.sliderAnimator}>
                {this.renderList()}
              </StyledCarouselAnimator>
            </StyledCarouselSlidesWrapper>
            <StyledCarouselArrowWrapper
              visible={nextArrow.visible}
              onClick={this.next}
              nextArrow
            >
              <StyledCarouselArrow
                nextArrow
              />
            </StyledCarouselArrowWrapper>
            <StyledCarouselArrowWrapper
              visible={prevArrow.visible}
              prevArrow
              onClick={this.prev}
            >
              <StyledCarouselArrow
                prevArrow
              />
            </StyledCarouselArrowWrapper>
          </StyledCarouselWrapper>
        </React.Fragment>
      );
    }
}
