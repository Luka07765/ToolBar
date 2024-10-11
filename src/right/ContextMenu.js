import React from 'react';

import 'draft-js/dist/Draft.css';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import HighlightIcon from '@mui/icons-material/Highlight';
import { MenuItem } from '@mui/material';
function ContextMenu({ position, onBold, onHighlight, onClose }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        backgroundColor: 'white',
        border: '1px solid #ccc',
        zIndex: 1000,
      }}
      onMouseLeave={onClose}
    >
      <MenuItem onClick={onBold}>
        <FormatBoldIcon /> Bold
      </MenuItem>
      <MenuItem onClick={onHighlight}>
        <HighlightIcon /> Highlight
      </MenuItem>
    </div>
  );
}

export default ContextMenu;
