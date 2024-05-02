-- AlterTable
ALTER TABLE "User" ADD COLUMN     "AttemptedQuiz" JSONB NOT NULL DEFAULT '{}';
