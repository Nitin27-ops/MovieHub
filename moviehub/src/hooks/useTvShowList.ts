import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface TvShowResult {
    adult: boolean;
    id: number;
    original_language: string;
    original_title?: string;
    title?: string;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    name?: string;
}

const useTvShowList = () => {
    const [tvShows, setTvShows] = useState<TvShowResult[]>();

    const fetchTvShowList = async () => {
        try {
            const res = await apiClient.get('/discover/tv');
            setTvShows(res.data.results);
        } catch (error) {
            console.error("Failed to fetch TV shows", error);
        }
    };

    useEffect(() => {
        fetchTvShowList();
    }, []);

    return { tvShows };
};

export default useTvShowList;
