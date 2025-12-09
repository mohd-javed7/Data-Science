from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import fitz
import re
from docx import Document

# with open('notes.txt','r') as f:
#     text = f.read()

def load_file(path):
    path = path.lower()

    if path.endswith(".txt"):
        with open(path,'r',encoding='utf-8') as f:
            return f.read()
    
    elif path.endswith(".pdf"):
        pdf = fitz.open(path)
        return "\n".join(page.get_text() for page in pdf)
    
    elif path.endswith(".docx"):
        doc = Document(path)
        return "\n".join(p.text for p in doc.paragraphs)
    
    else:
        raise ValueError("Unsupported file format. Allowed: .txt, .pdf, .docx")


path = input("Enter the file path: ")
text = load_file(path)
def clean_text(text):
    text = text.replace("\r"," ")
    text = re.sub(r"\n+","\n",text)
    text = re.sub(r" +"," ",text)
    text = text.strip()
    return text

cleaned_text = clean_text(text)
def chunk_text(text, max_size=350):
    lines = text.split("\n")
    chunks = []
    current = ""

    for line in lines:
        line = line.strip()

        # Detect question or heading like: Q1., Q1:, Q1 xyz, Q1-xyz, Definition:, Production System:
        if re.match(r"^(Q\d+[\.\:\-]?\s.*|[A-Z][a-zA-Z ]+[:\-]$)", line) and current:
            chunks.append(current.strip())
            current = line + " "
        else:
            if len(current) + len(line) < max_size:
                current += line + " "
            else:
                chunks.append(current.strip())
                current = line + " "

    if current:
        chunks.append(current.strip())

    return chunks




chunks = chunk_text(cleaned_text)

vectorizer = TfidfVectorizer()
vectorizer.fit(chunks)
vectors = vectorizer.transform(chunks)

def inc_q(q):
    words = q.lower().split()
    return q + " " + " ".join(words)

print("💬 qna-r is ready! Type 'exit' or 'quit' to stop.\n")

while True:
    q = input("Ask: ")
    if q.lower() in ["exit","stop","quit"]:
        print("qna-r: Goodbye!")
        break
    
    q_vec = vectorizer.transform([inc_q(q)])
    scores = cosine_similarity(q_vec, vectors)
    k = min(2, len(chunks))
    top_k_idx = scores[0].argsort()[-k:][::-1]
    
    answer = "\n".join([chunks[i] for i in top_k_idx])
    print("\nqna-r:", answer, "\n")
