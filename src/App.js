import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';

import ContextMenu from './right/ContextMenu';
const colorStyleMap = {
  RED: { color: '#ff0000' },
  GREEN: { color: '#00ff00' },
};

const highlightStyleMap = {
  YELLOW: { backgroundColor: '#00ff00' },
};

const App = () => {
  const initialContent = ContentState.createFromText(
    'This is a sample text. You can edit and format it.'
  );
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(initialContent)
  );

  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const toggleBold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    setShowContextMenu(false);
  };

  const toggleHighlight = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'YELLOW')); // Use the default highlight color
    setShowContextMenu(false);
  };

  const handleRightClick = (event) => {
    event.preventDefault(); // Prevent the default context menu
    setContextMenuPosition({ x: event.pageX, y: event.pageY });
    setShowContextMenu(true);
  };

  return (
    <div>
      <h2>Custom Text Editor with Context Menu</h2>

      {/* Editor with initial text */}
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          minHeight: '200px',
        }}
        onContextMenu={handleRightClick} // Handle right-click
      >
        <Editor
          editorState={editorState}
          onChange={handleEditorChange}
          customStyleMap={{ ...colorStyleMap, ...highlightStyleMap }}
        />
      </div>

      {/* Context Menu */}
      {showContextMenu && (
        <ContextMenu
          position={contextMenuPosition}
          onBold={toggleBold}
          onHighlight={toggleHighlight}
          onClose={() => setShowContextMenu(false)}
        />
      )}
    </div>
  );
};

export default App;
