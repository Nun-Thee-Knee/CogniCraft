-- AlterTable
ALTER TABLE "User" ALTER COLUMN "AttemptedQuiz" SET DEFAULT '[]';

-- AlterTable
ALTER TABLE "quizSchema" ADD COLUMN     "AttemptedBy" TEXT[];
