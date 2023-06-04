/**
 * This file was @generated using pocketbase-typegen
 */

export enum Collections {
  Conversations = 'conversations',
  Messages = 'messages',
  Users = 'users',
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
  id: RecordIdString
  created: IsoDateString
  updated: IsoDateString
  collectionId: string
  collectionName: Collections
  expand?: T
}

export type AuthSystemFields<T = never> = {
  email: string
  emailVisibility: boolean
  username: string
  verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ConversationsRecord = {
  name?: string
  members?: RecordIdString[]
}

export type MessagesRecord = {
  message?: string
  sender?: RecordIdString
  conversation?: RecordIdString
}

export type UsersRecord = {
  name?: string
  avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ConversationsResponse<Texpand = unknown> =
  Required<ConversationsRecord> & BaseSystemFields<Texpand>
export type MessagesResponse<Texpand = unknown> = Required<MessagesRecord> &
  BaseSystemFields<Texpand>
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  conversations: ConversationsRecord
  messages: MessagesRecord
  users: UsersRecord
}

export type CollectionResponses = {
  conversations: ConversationsResponse
  messages: MessagesResponse
  users: UsersResponse
}
