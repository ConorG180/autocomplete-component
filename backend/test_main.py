from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_search():
    response = client.get("/search?query=RaDioHeAd") # Spelt with caps to ensure result is not case sensitive
    assert response.status_code == 200
    results = response.json()
    assert any("Radiohead" in result["name"] for result in results)