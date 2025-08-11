CREATE TABLE "blogs" (
	"id" serial PRIMARY KEY NOT NULL,
	"url_title" text,
	"short_description" text,
	"tags" varchar(50)[],
	"author" varchar(50),
	"category" varchar(50)[],
	"content" json
);
