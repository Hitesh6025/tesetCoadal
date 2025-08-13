import { integer, pgTable, serial, text, varchar, json, timestamp, uuid } from "drizzle-orm/pg-core";

export const blogTable = pgTable("blogs", {
  id: serial().primaryKey(),
  title: text().notNull(),
  // url_title: text(), // This will be the slug/URL
  custom_url: text(), // Optional custom URL
  short_description: text().notNull(), // metaDescription
  tags: varchar({ length: 50 }).array(),
  author: varchar({ length: 50 }).notNull(), // authorName
  category: varchar({ length: 50 }).array(),
  content: json().$type<Array<{ image: string; paragraph: string }>>().notNull(),
  thumbnail: text(), // featuredImage URL or base64
  created_at: timestamp().defaultNow(),
  updated_at: timestamp().defaultNow()
});

export const contactSubmissionsTable = pgTable("contact_submissions", {
  id: uuid().defaultRandom().primaryKey(),
  firstName: varchar("firstName", { length: 255 }).notNull(),
  lastName: varchar("lastName", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  company: varchar("company", { length: 255 }),
  service: varchar("service", { length: 255 }).notNull(),
  budget: varchar("budget", { length: 100 }).notNull(),
  description: text("description").notNull(),
  submittedAt: timestamp("submittedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull()
});

export const adminAuthTable = pgTable("admin_auth", {
  id: serial().primaryKey(),
  username: varchar("username", { length: 100 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(), // This will store hashed password
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull()
});

// Export types for TypeScript
export type Blog = typeof blogTable.$inferSelect;
export type NewBlog = typeof blogTable.$inferInsert;

export type ContactSubmission = typeof contactSubmissionsTable.$inferSelect;
export type NewContactSubmission = typeof contactSubmissionsTable.$inferInsert;

export type AdminAuth = typeof adminAuthTable.$inferSelect;
export type NewAdminAuth = typeof adminAuthTable.$inferInsert;
