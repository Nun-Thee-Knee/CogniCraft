import google.generativeai as genai
import os

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
  genai.configure(api_key="AIzaSyCJOU-Bm8RGEVEfSaBdlwEG-AhSdt4DLGM")

  model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest")

  convo = model.start_chat(history=[
  ])

  data = convo.send_message(prompt)
  data = data.candidates[0].content.parts[0].text
  with open("data", "w") as f:
    f.write(data)
  with open("data") as f:
      data = f.read()
  data = data.split("\n")
  while '' in data:
    data.remove('')
  choices = {
    "(a)": 0,
    "(b)": 1,
    "(c)": 2,
    "(d)": 3
  }
  MCQ = []
  data = data[2:]
  s = 0
  l = 6
  while l <= len(data):
    try:
      Question = data[s:l]
      question = Question[0].split(". ")[1].replace("**", "")
      options = Question[1:5]
      options = [op.strip().split(") ")[1] for op in options]
      answer = choices[str(Question[5].strip().split(": ")[1].replace("**", ""))]
      Entry = {
        "Question": question,
        "Options": options,
        "Answer": answer
      }
      MCQ.append(Entry)
    except IndexError:
      pass
    s += 6
    l += 6
    return MCQ
