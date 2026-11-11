-- Plain visit counts: one row per page per day, nothing about the visitor.
-- Additive only. Apply with: npx prisma db execute --file prisma/sql/2026-11-page-count.sql
-- (never prisma db push or migrate: this project has no migrations history).
CREATE TABLE IF NOT EXISTS "PageCount" ("path" TEXT NOT NULL, "day" DATE NOT NULL, "count" INTEGER NOT NULL DEFAULT 0, CONSTRAINT "PageCount_pkey" PRIMARY KEY ("path", "day"));
