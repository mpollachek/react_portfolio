import { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavoriteButton = () => {

  const [user, setUser] = useState(null);
  const [favorite, setFavorite] = useState(() => user.isFavorite ?? false)

  const toggle = () => setFavorite(!favorite)

  //use effect from nextjs example
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, [])

  console.log("This is the user saved in local storage:", user)

  if (user) {
    return(
      if (user.isFavorite) {
        <FavoriteIcon
        color='warning'
        fontSize='large'
        />
      }
      else {
        <FavoriteBorderIcon
        color='warning'
        fontSize='large'
        />
      }
    )
  }

}

export default FavoriteButton;