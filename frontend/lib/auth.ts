export function saveUserId(userId: number) {
  localStorage.setItem("user_id", String(userId))
}

export function getUserId(): number | null {
  const id = localStorage.getItem("user_id")
  if (!id) return null
  return Number(id)
}

export function clearUserId() {
  localStorage.removeItem("user_id")
}
