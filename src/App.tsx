import { LiveBlockHoc } from './hocs'
import AppContent from './AppContent.tsx'
import './globals.css'
import './text-editor.css'
import '@liveblocks/react-ui/styles.css'
import '@liveblocks/react-ui/styles/dark/attributes.css'
import '@liveblocks/react-tiptap/styles.css'

export default function App() {
  return (
    <LiveBlockHoc>
      <AppContent />
    </LiveBlockHoc>
  )
}
