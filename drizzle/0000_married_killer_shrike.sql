CREATE TABLE IF NOT EXISTS "xanditter_followers" (
	"user_id" varchar,
	"follower_id" varchar,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "xanditter_likes" (
	"post_id" varchar,
	"user_id" varchar,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "xanditter_posts" (
	"id" varchar PRIMARY KEY NOT NULL,
	"parent_id" varchar,
	"thread_id" varchar,
	"user_id" varchar,
	"content" varchar,
	"media" varchar[] DEFAULT ARRAY[]::VARCHAR[],
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "xanditter_retweets" (
	"post_id" varchar,
	"user_id" varchar,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "xanditter_users" (
	"id" varchar PRIMARY KEY NOT NULL,
	"username" varchar,
	"email" varchar,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	CONSTRAINT "xanditter_users_username_unique" UNIQUE("username"),
	CONSTRAINT "xanditter_users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "xanditter_followers" ADD CONSTRAINT "xanditter_followers_user_id_xanditter_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."xanditter_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "xanditter_followers" ADD CONSTRAINT "xanditter_followers_follower_id_xanditter_users_id_fk" FOREIGN KEY ("follower_id") REFERENCES "public"."xanditter_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "xanditter_likes" ADD CONSTRAINT "xanditter_likes_post_id_xanditter_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."xanditter_posts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "xanditter_likes" ADD CONSTRAINT "xanditter_likes_user_id_xanditter_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."xanditter_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "xanditter_posts" ADD CONSTRAINT "xanditter_posts_parent_id_xanditter_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."xanditter_posts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "xanditter_posts" ADD CONSTRAINT "xanditter_posts_user_id_xanditter_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."xanditter_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "xanditter_retweets" ADD CONSTRAINT "xanditter_retweets_post_id_xanditter_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."xanditter_posts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "xanditter_retweets" ADD CONSTRAINT "xanditter_retweets_user_id_xanditter_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."xanditter_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
