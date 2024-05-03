function shareAPI({ title, slug }: { title: string; slug: string }) {
  if (navigator.share) {
    navigator
      .share({
        title: `${title}`,
        url: `${slug}`,
      })
      .catch(console.error);
  } else if (navigator.clipboard) {
    navigator.clipboard
      .writeText(`https://mnxmnz.github.io${slug}`)
      .then(() => {
        alert('링크가 클립보드에 복사되었습니다.');
      })
      .catch(console.error);
  } else {
    alert('공유 기능이 지원되지 않는 브라우저입니다.');
  }
}

export default shareAPI;
