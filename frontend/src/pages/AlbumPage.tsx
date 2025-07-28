import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const AlbumPage = () => {
  const { albumId } = useParams();
  const { fetchAlbumById } = useMusicStore();

  useEffect(() => {
    if (albumId) {
      fetchAlbumById(albumId);
    }
  }, [albumId, fetchAlbumById]);

  return (
    <div>
      <h1>AlbumPage {albumId}</h1>
    </div>
  );
};

export default AlbumPage;
