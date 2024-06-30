from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_search():
    response = client.get("/search?query=RaDioHeAd") # Spelt with caps to ensure result is not case sensitive
    assert response.status_code == 200
    results = response.json()
    # Artist check
    assert any("Radiohead" in result["name"] for result in results)
    # Album check
    assert any("The King of Limbs" in result.get("title", "") for result in results)
    assert any("OK Computer" in result.get("title", "") for result in results)
    # Song check
    assert any("Bloom" in result.get("title", "") for result in results)
    assert any("Airbag" in result.get("title", "") for result in results)