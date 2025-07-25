import {
  ClientSideSuspense,
  LiveblocksProvider,
  RoomProvider,
} from '@liveblocks/react'
import { DocumentSpinner } from '../components'

const id = 'doc-1'

export function LiveBlockHoc({ children }: { children: React.ReactNode }) {
  return (
    <LiveblocksProvider
      publicApiKey={import.meta.env.VITE_LIVEBLOCKS_PUBLIC_KEY}
    >
      <RoomProvider
        id={id}
        initialPresence={{
          cursor: null,
        }}
      >
        <ClientSideSuspense fallback={<DocumentSpinner />}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  )
}
