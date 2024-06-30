export type Song = {
    title: string;
    length: string;
};

export type Album = {
    title: string;
    songs: Song[];
    description: string;
};

export type Artist = {
    name: string;
    albums: Album[];
};
