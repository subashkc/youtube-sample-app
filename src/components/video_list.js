import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {

	const videos_list = props.videos.map((video) => {
		return <VideoListItem onSelectVideo={props.onSelectVideo} key={video.etag} video={video} />
	});

	return (
		<ul className="col-md-4 list-group">
			{videos_list}
		</ul>
	);
};

export default VideoList;