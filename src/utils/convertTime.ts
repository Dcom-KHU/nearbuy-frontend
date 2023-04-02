const now = new Date();

export default function convertTime({ time }: { time: number }): string {
  const date = new Date(time);
  const diffInSeconds = (now.getTime() - date.getTime()) / 1000;
  const diffInMinutes = Math.floor(diffInSeconds / 60);

  if (diffInMinutes < 1) {
    return "방금 전";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInMinutes < 1440) {
    return `${Math.floor(diffInMinutes / 60)}시간 전`;
  } else {
    return `${Math.floor(diffInMinutes / 1440)}일 전`;
  }
}
