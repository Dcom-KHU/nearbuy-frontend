export default function calculateDeadline(deadline: number): string {
  const ONE_DAY_MS = 24 * 60 * 60 * 1000; // 1일을 밀리초 단위로 표현

  // deadline까지 남은 시간 계산
  const timeDiff = deadline * 1000 - Date.now();

  // 남은 시간을 일 단위로 변환
  const dayDiff = Math.ceil(timeDiff / ONE_DAY_MS);

  if (dayDiff >= 0) {
    return `D-${dayDiff}`;
  } else {
    return "마감되었습니다";
  }
}
