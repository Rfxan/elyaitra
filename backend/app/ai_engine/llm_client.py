import ollama

class LocalOllamaClient:
    def generate(self, prompt: str) -> str:
        response = ollama.generate(
            model="llama3:8b",
            prompt=prompt
        )
        return response["response"]
