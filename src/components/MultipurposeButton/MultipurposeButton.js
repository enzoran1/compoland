import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { colors } from '../../Mixins/Mixins';
import EastIcon from '@mui/icons-material/East';
import LockIcon from '@mui/icons-material/Lock';
import style from './MultipurposeButton.module.scss';

const MultipurposeButton = ({
  variant,
  backgroundColor,
  textColor,
  iconColor,
  icon,
  label,
  onClick,
  iconPosition,
  fullWidth,
  disabled,
  size,
  uppercase,
  bold,
  borderColor,
  type,
}) => {

  let iconStyle = null;
  if (iconColor) {
    iconStyle = { color: iconColor };
  }

  let buttonIcon = null;
  switch (icon) {
    case 'delete':
      buttonIcon = <DeleteIcon style={iconStyle} />;
      break;
    case 'send':
      buttonIcon = <SendIcon style={iconStyle} />;
      break;
    case 'edit':
      buttonIcon = <EditIcon style={iconStyle} />;
      break;
    case 'visibility':
      buttonIcon = <VisibilityIcon style={iconStyle} />;
      break;
    case 'east':
      buttonIcon = <EastIcon style={iconStyle} />;
      break;
    case 'lock':
      buttonIcon = <LockIcon style={iconStyle} />;
      break;
    default:
      buttonIcon = null;
  }

  const labelStyle = {
    textTransform: uppercase ? 'uppercase' : 'none',
    fontWeight: bold ? 'bold' : 'normal',
    color: textColor ? textColor : 'inherit',
  };

  const gridTemplateColumns = icon ? (iconPosition === 'left' ? 'auto 1fr'  : '1fr auto') : '1fr';

  return (
    <Button
      variant={variant}
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : colors.primary,
        borderColor: borderColor,
        color: textColor ? textColor : 'inherit',
      }}
      sx={{
        display: 'grid',
        gridTemplateColumns: gridTemplateColumns,
        alignItems: 'center',
      }}
      fullWidth={fullWidth}
      disabled={disabled}
      size={size}
      type={type}
      startIcon={iconPosition === 'left' ? buttonIcon : null}
      endIcon={iconPosition === 'right' ? buttonIcon : null}
      
    >
      <span className={style.margin_icon} style={labelStyle}>{label}</span>
    </Button>
  );
};

MultipurposeButton.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  iconColor: PropTypes.string,
  icon: PropTypes.oneOf(['delete', 'send', 'edit', 'visibility', 'east', 'lock']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  uppercase: PropTypes.bool,
  bold: PropTypes.bool,
  borderColor: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),

};

MultipurposeButton.defaultProps = {
  variant: 'contained',
  backgroundColor: null,
  textColor: null,
  iconColor: null,
  icon: null,
  onClick: () => {},
  iconPosition: 'left',
  fullWidth: null,
  disabled: null,
  size: 'medium',
  uppercase: null,
  bold: null,
  
};

export default MultipurposeButton;
