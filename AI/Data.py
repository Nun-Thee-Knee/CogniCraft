from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()
client = OpenAI(api_key=os.getenv("OPEN_AI_KEY"))

def generate_MCQ(number, topic):
    number = number
    topic = topic
    format = """
    1. Question
    (a) Option 
    (b) Option
    (c) Option
    (d) Option
    Answer: Option
    """
    prompt = f"Generate {number} mcqs on {topic} along with the answer in the format {format}"

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "assistant",
                "content": prompt
            }
        ],
    )

    with open("data", "w") as f:
        f.write(response.choices[0].message.content)
    with open("data") as f:
        data = f.read()

    data = data.split("\n\n")

    MCQ = []

    for n in range(len(data)):
        try:
            question = data[n]
            question = question.split("\n")
            options = question[1:5]
            answer = question[5]
            question = question[0]
            question = question.split(".")[1].strip()
            options = [x.split(") ")[1] for x in options]
            answer = answer.split(") ")[1]
            answer = options.index(answer)
            Entry = {
                "Question": question,
                "Options": options,
                "Answer": answer
            }
            MCQ.append(Entry)
        except IndexError:
            pass
    return MCQ