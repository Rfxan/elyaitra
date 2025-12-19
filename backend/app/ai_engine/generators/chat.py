from retriever import retrieve
from llm_client import LocalOllamaClient

# Load strict system prompt
with open("prompts/chat.txt", "r", encoding="utf-8") as f:
    PROMPT_TEMPLATE = f.read()

llm = LocalOllamaClient()

def chat(question: str) -> str:
    # 1. Retrieve syllabus chunks
    chunks = retrieve(question)

    # 2. If nothing found → Not in syllabus
    if not chunks or len(chunks) == 0:
        return "Not in syllabus"

    # 3. Build context
    context = "\n".join(chunks)

    # 4. Inject into strict prompt
    final_prompt = PROMPT_TEMPLATE.format(
        context=context,
        question=question
    )

    # 5. Generate answer
    return llm.generate(final_prompt)
