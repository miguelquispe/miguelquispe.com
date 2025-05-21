'use client';
import React from 'react';
import {
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { PostShareValues } from './types';
import styles from './Post.module.css';

const PostShare = ({ title, summary, url }: PostShareValues) => {
  return (
    <div className={styles.share}>
      <h4>Comparte este artículo: </h4>
      <TwitterShareButton
        className={styles.social}
        url={url}
        title={title}
        via="miguelquispecom"
      >
        <TwitterIcon
          size={32}
          borderRadius={16}
          bgStyle={{ fill: '#8E74FB' }}
        />
      </TwitterShareButton>
      <LinkedinShareButton
        className={styles.social}
        url={url}
        title={title}
        summary={summary}
      >
        <LinkedinIcon
          size={32}
          borderRadius={16}
          bgStyle={{ fill: '#8E74FB' }}
        />
      </LinkedinShareButton>
    </div>
  );
};

export default PostShare;
