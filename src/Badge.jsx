import React from 'react';
import '../style';
import classNames from 'classnames';
class Badge extends React.Component{
  render() {
    let {
      className, prefixCls,
      children, text, size, overflowCount, dot, corner, hot, ...restProps,
    } = this.props;

    overflowCount = overflowCount;
    text = typeof text === 'number' && text > overflowCount ? `${overflowCount}+` : text;

    // dot mode don't need text
    if (dot) {
      text = '';
    }

    const scrollNumberCls = classNames({
      [`${prefixCls}-dot`]: dot,
      [`${prefixCls}-dot-large`]: dot && (size === 'large'),
      [`${prefixCls}-text`]: !dot && !corner,
      [`${prefixCls}-corner`]: corner,
      [`${prefixCls}-corner-large`]: corner && (size === 'large'),
    });

    const badgeCls = classNames({
      [className]: !!className,
      [prefixCls]: true,
      [`${prefixCls}-not-a-wrapper`]: !children,
      [`${prefixCls}-corner-wrapper`]: corner,
      [`${prefixCls}-hot`]: !!hot,
      [`${prefixCls}-corner-wrapper-large`]: corner && (size === 'large'),
    });

    return (
      <span className={badgeCls}>
        {children}
        {(text || dot) && <sup className={scrollNumberCls} {...restProps}>{text}</sup>}
      </span>
    );
  }
}
Badge.defaultProps = {
    prefixCls: 'am-badge',
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false,
};
Badge.propTypes = {
size:React.PropTypes.oneOf(['large','small']),
overflowCount: React.PropTypes.number,
corner:React.PropTypes.bool,
dot:React.PropTypes.bool,
text:React.PropTypes.any,
style:React.PropTypes.object,
/** web only */
prefixCls:React.PropTypes.string,
className:React.PropTypes.string,
hot: React.PropTypes.bool,
};
Badge.displayName = "Badge";
module.exports=Badge;
