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
@app.get("/search")
def search(query: str = Query()):
    results = []
    for artist in data:
        artist_matched = False
        
        # Check for artist match
        if query.lower() in artist["name"].lower():
            results.append(artist)
            artist_matched = True

        for album in artist.get("albums", []):
            album_matched = False

            # Check for album matches
            if query.lower() in album["title"].lower():
                results.append(album)
                album_matched = True

            # Include songs if album  matched
            if album_matched:
                results.extend(album["songs"])

            # Include album and songs if artist is matched
            if artist_matched:
                results.append(album)
                results.extend(album["songs"])

            # Check for song match
            for song in album.get("songs", []):
                if query.lower() in song["title"].lower() and not artist_matched and not album_matched:
                    results.append(song)
    
    return results