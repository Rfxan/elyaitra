import os
import chromadb
import ollama

# --------------------------------------------------
# PATH SETUP
# --------------------------------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CHROMA_PATH = os.path.join(BASE_DIR, "storage")

# --------------------------------------------------
# INIT PERSISTENT CHROMA CLIENT
# --------------------------------------------------
client = chromadb.PersistentClient(
    path=CHROMA_PATH
)

collection = client.get_collection("chemistry")

# --------------------------------------------------
# EMBEDDING FUNCTION (QUERY SIDE)
# --------------------------------------------------
def embed(text: str):
    return ollama.embeddings(
        model="nomic-embed-text",
        prompt=text
    )["embedding"]

# --------------------------------------------------
# RETRIEVAL FUNCTION
# --------------------------------------------------
def retrieve(query: str, k: int = 5):
    results = collection.query(
        query_embeddings=[embed(query)],
        n_results=k
    )

    documents = results.get("documents", [[]])[0]
    return documents
