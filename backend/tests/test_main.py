from fastapi.testclient import TestClient
from main import app
from src.database import SessionLocal, get_db

client = TestClient(app)


def override_get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


app.dependency_overrides[get_db] = override_get_db


def test_register_user():
    response = client.post("/register/", json={
        "name": "Test User",
        "email": "test@example.com",
        "password": "testpassword",
        "url_profile_picture": "https://example.com/profile.jpg"
    })
    assert response.status_code == 200
    assert "id" in response.json()
    assert response.json()["email"] == "test@example.com"


def test_register_existing_user():
    client.post("/register/", json={"name": "Test User",
                                    "email": "test@example.com",
                                    "password": "testpassword"})
    response = client.post("/register/", json={"name": "Test User",
                                               "email": "test@example.com",
                                               "password": "testpassword"})
    assert response.status_code == 400
    assert response.json()["detail"] == "User already registered."


def test_login_user():
    client.post("/register/", json={"name": "Test User",
                                    "email": "test@example.com",
                                    "password": "testpassword"})
    response = client.post("/login/", json={"email": "test@example.com",
                                            "password": "testpassword"})
    assert response.status_code == 200
    assert "access_token" in response.json()
    assert response.json()["token_type"] == "bearer"


def test_login_wrong_credentials():
    response = client.post("/login/", json={"email": "wrong@example.com",
                                            "password": "wrongpassword"})
    assert response.status_code == 400
    assert response.json()["detail"] == "Wrong credentials."
