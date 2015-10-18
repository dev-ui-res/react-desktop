import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../Styling';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#b0b0b0',
    borderLeftColor: '#b1b1b1',
    borderRightColor: '#b1b1b1',
    boxShadow: 'inset 0 0 0 1px #f0f0f0',
    paddingTop: '4px',
    paddingBottom: '1px',
    paddingLeft: '3.5px',
    paddingRight: '3.5px',
    lineHeight: '14px',
    fontFamily: '"San Francisco", "Helvetica Neue", "Lucida Grande"',
    fontSize: '13px',

    ':focus': {
      outline: 'none',
      boxShadow: '0 0 0 3.5px #93c2f3'
    },

    ':placeholder': {
      color: '#c0c0c0'
    }
  }
};

@Styling
class TextFieldOSX extends Component {
  static propTypes = {
    style: PropTypes.object,
    form: PropTypes.any,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = { visible: props.visible !== false, display: props.display !== false };
  }

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    const { form, style, visible, display, ...props } = this.props;

    let styles = this.styles;
    if (!this.state.visible) {
      styles = mergeStyles(styles, { visibility: 'hidden' });
    } else {
      styles = mergeStyles(styles, { visibility: 'visible' });
    }

    if (!this.state.display) {
      styles = mergeStyles(styles, { display: 'none' });
    } else {
      styles = mergeStyles(styles, { display: 'block' });
    }

    return (
      <input
        ref="element"
        type="text"
        {...props}
        style={applyStyle(styles)}
      />
    );
  }
}

export default TextFieldOSX;
