from app.ai_engine.generators.chat import generate_chat_response

print(generate_chat_response(
    "What is a sensor?",
    subject="chemistry"
))
