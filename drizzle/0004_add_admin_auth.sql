CREATE TABLE IF NOT EXISTS "admin_auth" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(100) NOT NULL,
	"password" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "admin_auth_username_unique" UNIQUE("username")
);

-- Insert default admin credentials (password: admin123)
-- Password is bcrypt hashed version of 'admin123'
INSERT INTO "admin_auth" ("username", "password") VALUES 
('admin', '$2b$10$rOOJcSBW1kpOZGpC7jKu6O8k.LS.dGd3J4xZ9K6Lh9K8Z4xJ6LKJG');
