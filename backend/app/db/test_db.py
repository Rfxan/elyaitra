from database import get_db_connection

conn = get_db_connection()
cursor = conn.cursor()

# insert user
cursor.execute(
    "INSERT INTO users (email) VALUES (?)",
    ("test@example.com",)
)
conn.commit()

# read users
cursor.execute("SELECT * FROM users")
rows = cursor.fetchall()

for row in rows:
    print(dict(row))

conn.close()
