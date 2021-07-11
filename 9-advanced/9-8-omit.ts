{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, 'url'| 'data'>;
  // 기존의 타입에서 좀 더 제한적인 타입을 사용할 떄 사용
  // Omit은 pick과 달리 사용하지 않은 field를 명시적으로 작성
  // Video에 없는 다른 어떤 종류의 key도 넣을 수 있음 -> pick은 안됨

  function getVideo1(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data',
    };
  }

  function getVideoMetadata1(id: string): VideoMetadata {
    return {
      id,
      title: 'title',
    };
  }
}
