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
