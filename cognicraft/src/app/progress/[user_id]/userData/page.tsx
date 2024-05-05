"use client";
import AttemptedQuiz from "~/components/AttemptedQuiz";
import { api } from "~/trpc/react";
import { Prisma } from "@prisma/client";
import Link from "next/link";

type userProgressType = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  AttemptedQuiz: Prisma.JsonValue[];
  image: string | null;
}[];

type responseType = {
  qNumber: number;
  userAnswer: string;
  correctAnswer: number;
};

type entryType = {
  title: string;
  total: number;
  quizId: string;
  correct: number;
  response: responseType[];
};

const userData = ({
  searchParams,
}: {
  searchParams: {
    userID: string;
  };
}) => {
  const id = searchParams.userID;
  const {
    data: userProgress,
    isLoading,
    error,
  } = api.user.getProgress.useQuery({ id });
  return (
    <div className="text-white flex items-center justify-center h-auto">
      {isLoading ? (
        <h1 className="text-white">Loading</h1>
      ) : (
        <div>
          {userProgress !== null ? (
            <div className="h-auto bg-black p-10 grid flex-col lg:grid-cols-3 gap-5 md:grid-cols-2">
              {(userProgress as userProgressType)[0]?.AttemptedQuiz.map(
                (entry) => {
                  return (
                    <Link href={{
                      pathname: "./showData",
                      query: {
                        index: (userProgress as userProgressType)[0]?.AttemptedQuiz.indexOf(entry)
                      }
                    }}>
                    <AttemptedQuiz
                      quizCode={(entry as entryType).quizId}
                      quizTitle={(entry as entryType).title}
                      correct={(entry as entryType).total}
                      total={(entry as entryType).correct}
                    />
                    </Link>
                  );
                },
              )}
            </div>
          ) : (
            <h1 className="text-white">No Quiz found</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default userData;
