from app.ai_engine.llm_client import LocalOllamaClient
from app.ai_engine.retriever import retrieve_chunks

def generate_chat_response(question: str, subject: str) -> str:
    chunks = retrieve_chunks(question, subject)

    if not chunks:
        return "Not in syllabus"

    context = "\n\n".join(chunks)

    with open("app/ai_engine/prompts/chat.txt") as f:
        prompt_template = f.read()

    prompt = prompt_template.format(
        context=context,
        question=question
    )

    llm = LocalOllamaClient()
    answer = llm.generate(prompt)

    return answer.strip()
