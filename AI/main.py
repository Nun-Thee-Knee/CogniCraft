from flask import Flask,jsonify,request
from Data import generate_MCQ
from test import text
from Gemini import generate_MCQ

app = Flask(__name__)

@app.route("/data", methods=["POST", "GET"])
def fetchData():
    if request.method == "POST":
        body = request.get_json()
        num = body['number']
        topic = body['topic']
        MCQ = generate_MCQ(number=num, topic=topic)
        return jsonify(MCQ)

@app.route("/pdfData")
def fetchPDFData():
    MCQ = generate_MCQ(topic=text, number=10)
    return jsonify(MCQ)

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)