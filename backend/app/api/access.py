from fastapi import APIRouter
from app.db.database import get_db_connection

router = APIRouter(prefix="/access", tags=["access"])


@router.get("/subjects")
def can_access_subjects(user_id: int):
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT 1 FROM payments WHERE user_id = ? LIMIT 1",
        (user_id,)
    )
    payment = cursor.fetchone()

    conn.close()

    return {
        "allowed": payment is not None
    }
