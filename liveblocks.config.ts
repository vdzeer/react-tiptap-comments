// Define Liveblocks types for your application
// https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data
declare global {
  interface Liveblocks {
    // Each user's Presence, for useMyPresence, useOthers, etc.
    Presence: object

    // The Storage tree for the room, for useMutation, useStorage, etc.
    Storage: object

    // Custom user info set when authenticating with a secret key
    UserMeta: {
      id: string
      info: {
        name: string
        avatar: string
        type: 'internal' | 'external'
      }
    }

    // Custom events, for useBroadcastEvent, useEventListener
    RoomEvent: object
    // Example has two events, using a union
    // | { type: "PLAY" }
    // | { type: "REACTION"; emoji: "🔥" };

    // Custom metadata set on threads, for useThreads, useCreateThread, etc.
    ThreadMetadata: {
      highlightId: string
      type: 'internal' | 'external'
    }

    // Custom room info set with resolveRoomsInfo, for useRoomInfo
    RoomInfo: object
  }
}

export {}
