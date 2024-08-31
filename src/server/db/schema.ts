// @ts-nocheck

import { sql } from "drizzle-orm";
import {
  pgTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `xanditter_${name}`);

export const users = createTable("users", {
  id: varchar("id").primaryKey(),
  username: varchar("username").unique(),
  email: varchar("email").unique(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }),
})

export const followers = createTable("followers", {
  userId: varchar("user_id").references(() => users.id),
  followerId: varchar("follower_id").references(() => users.id),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
})

// @ts-ignore
export const posts: any = createTable("posts", {
  id: varchar("id").primaryKey(),
  parentId: varchar("parent_id").references(() => posts.id),
  threadId: varchar("thread_id"),
  userId: varchar("user_id").references(() => users.id),
  content: varchar("content"),
  media: varchar("media").array().default(sql`ARRAY[]::VARCHAR[]`),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }),
})

export const likes = createTable("likes", {
  postId: varchar("post_id").references(() => posts.id),
  userId: varchar("user_id").references(() => users.id),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
})

export const retweets = createTable("retweets", {
  postId: varchar("post_id").references(() => posts.id),
  userId: varchar("user_id").references(() => users.id),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
})

