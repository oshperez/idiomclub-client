import { useState } from "react";

import { ReactComponent as BookmarkOutline } from "assets/icons/bookmark-outline.svg";
import { ReactComponent as BookmarkFill } from "assets/icons/bookmark-fill.svg";

const Bookmark = () => {
  const [isBookmarked, setIsBookmark] = useState();

  return (
    <div onClick={() => setIsBookmark(!isBookmarked)}>
      {isBookmarked ? <BookmarkFill /> : <BookmarkOutline />}
    </div>
  );
};

export default Bookmark;
