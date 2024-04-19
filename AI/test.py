import pdfplumber
from Data import generate_MCQ

def pdf_to_text(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text()
    return text

# Example usage
pdf_path = "test.pdf"  # Replace with the path to your PDF file
text = pdf_to_text(pdf_path)