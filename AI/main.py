from flask import Flask, jsonify, request, render_template
from OpenAI import generate_MCQ
from OCR import pdf_to_text
from flask_cors import CORS
import Gemini
app = Flask(__name__)
CORS(app)

@app.route("/data", methods=["POST", "GET"])
def fetchData():
    if request.method == "POST":
        body = request.get_json()
        num = body['number']
        topic = body['topic']
        MCQ = generate_MCQ(number=num, topic=topic)
        return jsonify(MCQ)


@app.route("/", methods=["POST", "GET"])
def uploadPDF():
    if request.method == "POST":
        if 'pdf_file' not in request.files:
            return jsonify({"Error": "No file part"})

        file = request.files["pdf_file"]
        num = request.form["number"]

        if file.filename == '':
            return jsonify({"Error": "No selected file"})

        file.save("uploads/" + file.filename)
        text = pdf_to_text("uploads/" + file.filename)
        if text == "":
            return jsonify({"message": "Failed to fetch MCQs as the text of the pdf was not able to be read"})
        MCQ = Gemini.generate_MCQ(topic=text, number=num)
        if not MCQ:
            return jsonify({"message": "Failed to fetch MCQs"})
        return jsonify(MCQ)

    return render_template("index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
