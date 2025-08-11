ALTER TABLE "blogs" ALTER COLUMN "short_description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ALTER COLUMN "author" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ALTER COLUMN "content" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "title" text NOT NULL;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "custom_url" text;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "featured_image" text;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "updated_at" timestamp DEFAULT now();