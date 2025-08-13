from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

app = FastAPI(title="FastStack Day1")

# allow frontend to call from a different origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], allow_methods=["*"], allow_headers=["*"]
)

@app.get("/health")
def health():
    return {"ok": True, "service": "backend", "status": "healthy"}
