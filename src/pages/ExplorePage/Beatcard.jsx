import React from 'react';
import Link from 'next/link';

import { track_ClickedPlugOnExplore } from '../../utils/mixpanel';

export default ({ plug }) => (
  <div
    className="gallery-item"
    tabIndex="0"
    key={plug.shortID}
    onClick={() => {
      track_ClickedPlugOnExplore(plug.shortID);
    }}
  >
    <Link href="/[shortID]" as={`/${plug.shortID}`}>
      <a>
        <img src={plug.imageURL} className="gallery-image" alt="" />

        <div className="gallery-item-info">
          <ul>
            <li className="gallery-item-likes">
              <span className="visually-hidden">Plays:</span>
              <i className="fas fa-play" aria-hidden="true" /> {plug.playCount}
            </li>
          </ul>
        </div>
      </a>
    </Link>
  </div>
);
