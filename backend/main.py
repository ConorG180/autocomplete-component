from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
)


with open("data.json") as f:
    data = json.load(f)



@app.get("/search")
def search(query: str = Query()):
    results = []
    for artist in data:
        if query.lower() in artist["name"].lower():
            results.append(artist)
        for album in artist.get("albums", []):
            if query.lower() in album["title"].lower():
                results.append(album)
            for song in album.get("songs", []):
                if query.lower() in song["title"].lower():
                    results.append(song)
    return results