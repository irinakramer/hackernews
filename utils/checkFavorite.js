// check if favorite exists in favorites array.

export default function checkFavorite(favorites, story) {
    return favorites.some(favorite => favorite.id === story.id);
}