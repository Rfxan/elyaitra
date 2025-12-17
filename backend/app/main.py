from fastapiimport FastAPI
from app.apiimport auth, payment, ai

app = FastAPI(
    title="elyaitra",
    description="Exam-focused syllabus AI tutor for engineering students",
    version="0.1.0"
)

@app.get("/health")
defhealth_check():
return {
"status":"ok",
"service":"elyaitra-backend"
    }

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(payment.router, prefix="/payment", tags=["payment"])
app.include_router(ai.router, prefix="/ai", tags=["ai"])

