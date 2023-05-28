import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';


const OpenIconSpeedDial = ({
  mainIcon,
  mainIconHover,
  mainIconColor, // Nouvelle propriété
  mainIconHoverColor, // Nouvelle propriété
  secondaryIcons,
  secondaryOnClicks,
  secondaryTooltips,
  backgroundColor,
  secondaryIconColor,
  secondaryIconBackgroundColor,
  position,
  direction,
  onMainIconClick,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMainIconClick = () => {
    if (onMainIconClick) {
      onMainIconClick();
    }
  };

  const handleAction = (icon) => {
    const index = secondaryIcons.indexOf(icon);
    if (index !== -1 && secondaryOnClicks && secondaryOnClicks[index]) {
      secondaryOnClicks[index]();
    }
  };

  const getPositionStyle = () => {
    switch (position) {
      case 'top-left':
        return { top: 16, left: 16 };
      case 'top-right':
        return { top: 16, right: 16 };
      case 'bottom-left':
        return { bottom: 16, left: 16 };
      case 'bottom-right':
        return { bottom: 16, right: 16 };
      default:
        return { bottom: 16, right: 16 };
    }
  };

  const getMainIcon = () => {
    if (typeof mainIcon === 'string') {
      return null;
    } else {
      return React.cloneElement(mainIcon, { style: { color: mainIconColor } });
    }
  };

  const getMainIconHover = () => {
    if (typeof mainIconHover === 'string') {
      return null;
    } else {
      return React.cloneElement(mainIconHover, { style: { color: mainIconHoverColor } });
    }
  };

  const getIconElement = (icon) => {
    if (typeof icon === 'string') {
      switch (icon) {
        case 'copy':
          return <FileCopyIcon style={{ color: secondaryIconColor }} />;
        case 'save':
          return <SaveIcon style={{ color: secondaryIconColor }} />;
        case 'print':
          return <PrintIcon style={{ color: secondaryIconColor }} />;
        case 'share':
          return <ShareIcon style={{ color: secondaryIconColor }} />;
        default:
          return null;
      }
    } else {
      return React.cloneElement(icon, { style: { color: secondaryIconColor } });
    }
  };

  return (
    <Box sx={{ position: 'fixed', ...getPositionStyle() }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        icon={
          <SpeedDialIcon
            icon={getMainIcon()}
            openIcon={getMainIconHover()}
            onClick={handleMainIconClick}
            style={{ backgroundColor: backgroundColor }}
          />
        }
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        direction={direction}
        FabProps={{
          style: {
            backgroundColor: backgroundColor ? backgroundColor : undefined,
          },
        }}
        ButtonProps={{
          style: {
            backgroundColor: secondaryIconBackgroundColor ? secondaryIconBackgroundColor : undefined,
          },
        }}
      >
        {secondaryIcons.map((icon, index) => (
          <SpeedDialAction
            key={index}
            icon={getIconElement(icon)}
            tooltipTitle={secondaryTooltips[index] || icon}
            onClick={() => handleAction(icon)}
            FabProps={{
              style: {
                backgroundColor: secondaryIconBackgroundColor ? secondaryIconBackgroundColor : undefined,
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default OpenIconSpeedDial;
