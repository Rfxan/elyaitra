from fastapi import APIRouter
from pydantic import BaseModel
from app.db.database import get_db_connection

router = APIRouter(prefix="/payments", tags=["payments"])

class PaymentRequest(BaseModel):
    user_id: int
    amount: int = 50

# record payment fake success
@router.post("/record")
def record_payment(data: PaymentRequest):
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO payments (user_id, amount, status)
        VALUES (?, ?, ?)
        """,
        (data.user_id, data.amount, "success")
    )

    conn.commit()
    conn.close()

    return {
        "status": "success"
    }

# check payment status 
@router.get("/status")
def payment_status(user_id: int):
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT status FROM payments
        WHERE user_id = ? AND status = 'success'
        """,
        (user_id,)
    )

    payment = cursor.fetchone()
    conn.close()

    return {
        "paid": bool(payment)
    }
