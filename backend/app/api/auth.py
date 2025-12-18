from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.db.database import get_db_connection

router = APIRouter(prefix="/auth", tags=["auth"])

class LoginRequest(BaseModel):
    email: str

@router.post("/login")
def login(data: LoginRequest):
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM users WHERE email = ?",
        (data.email,)
    )
    user = cursor.fetchone()

    if not user:
        cursor.execute(
            "INSERT INTO users (email) VALUES (?)",
            (data.email,)
        )
        conn.commit()
        user_id = cursor.lastrowid
    else:
        user_id = user["id"]

    conn.close()

    return {
        "user_id": user_id,
        "email": data.email
    }
@router.get("/me")
def me(user_id: int):
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT id, email FROM users WHERE id = ?",
        (user_id,)
    )
    user = cursor.fetchone()
    conn.close()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return dict(user)
