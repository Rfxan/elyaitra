# retriever.py

from chromadb import Client
from chromadb.config import Settings

client = Client(Settings(persist_directory="./chroma"))

def retrieve_chunks(query: str, subject: str, k: int = 4):
    collection = client.get_collection(name=subject)

    results = collection.query(
        query_texts=[query],
        n_results=k
    )

    return results["documents"][0]