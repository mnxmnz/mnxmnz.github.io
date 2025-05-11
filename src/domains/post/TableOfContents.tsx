import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const StToc = styled.nav`
  position: sticky;
  top: 10rem;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  width: 280px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const StTocItem = styled.a<{ level: number }>`
  display: block;
  margin: 0.8rem 0;
  padding-left: ${({ level }) => `${(level - 1) * 1.2}rem`};
  color: #666;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
  line-height: 1.5;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: ${({ level }) => `${(level - 2) * 1.2}rem`};
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #eaeaea;
    display: ${({ level }) => (level <= 2 ? 'none' : 'block')};
  }

  &:hover {
    color: #000;
  }

  &.active {
    color: #000;
    font-weight: bold;
  }
`;

function TableOfContents({ contentRef }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // 헤더 높이
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // URL 업데이트
      window.history.pushState(null, '', `#${id}`);

      // active 상태 즉시 업데이트
      setActiveId(id);
    }
  };

  useEffect(() => {
    if (!contentRef.current) return;

    const headings = contentRef.current.querySelectorAll(
      'h1, h2, h3, h4, h5, h6',
    );
    const items: TocItem[] = Array.from(headings).map(heading => ({
      id: heading.id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1)),
    }));
    setTocItems(items);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentId = entry.target.id;
            const currentLevel = parseInt(entry.target.tagName.charAt(1));

            // 현재 보이는 요소의 level이 더 작은(상위) heading인 경우에만 active 상태로 변경
            const currentActive = document.querySelector('.active');
            if (currentActive) {
              const currentActiveLevel = parseInt(
                currentActive.getAttribute('data-level') || '0',
              );
              if (currentLevel <= currentActiveLevel) {
                setActiveId(currentId);
              }
            } else {
              setActiveId(currentId);
            }
          }
        });
      },
      {
        rootMargin: '-100px 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      },
    );

    // 각 heading의 위치 정보를 저장
    const headingPositions = new Map();
    headings.forEach(heading => {
      const rect = heading.getBoundingClientRect();
      headingPositions.set(heading.id, rect.top + window.pageYOffset);
    });

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset + 120; // 헤더 높이 + 여유 공간

      // 현재 스크롤 위치에서 가장 가까운 heading 찾기
      let closestHeading = null;
      let minDistance = Infinity;

      headingPositions.forEach((position, id) => {
        const distance = Math.abs(position - scrollPosition);
        if (distance < minDistance) {
          minDistance = distance;
          closestHeading = id;
        }
      });

      if (closestHeading) {
        setActiveId(closestHeading);
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);
    headings.forEach(heading => observer.observe(heading));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [contentRef]);

  return (
    <StToc>
      {tocItems.map(item => (
        <StTocItem
          key={item.id}
          href={`#${item.id}`}
          level={item.level}
          className={activeId === item.id ? 'active' : ''}
          onClick={e => handleClick(e, item.id)}
          data-level={item.level}
        >
          {item.text}
        </StTocItem>
      ))}
    </StToc>
  );
}

export default TableOfContents;
