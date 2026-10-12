import React from 'react';
import { FiChevronDown, FiList } from 'react-icons/fi';

import { POST_CONTENT_ID } from './Content';
import { MobileToc, TocLink, TocList, TocNav } from './Toc.style';

import useTableOfContents from '@/hooks/useTableOfContents';

function Toc() {
  const { items, activeId, isHidden, navRef, handleClick } =
    useTableOfContents(POST_CONTENT_ID);

  if (items.length < 2) {
    return null;
  }

  const minLevel = Math.min(...items.map(item => item.level));

  const list = (
    <TocList>
      {items.map(item => (
        <li key={item.id}>
          <TocLink
            href={`#${item.id}`}
            depth={item.level - minLevel}
            active={item.id === activeId}
            aria-current={item.id === activeId ? 'location' : undefined}
            onClick={event => handleClick(event, item.id)}
          >
            {item.text}
          </TocLink>
        </li>
      ))}
    </TocList>
  );

  return (
    <>
      <MobileToc>
        <summary>
          <FiList aria-hidden="true" />
          <span>목차</span>
          <FiChevronDown className="toc-chevron" aria-hidden="true" />
        </summary>
        <nav aria-label="목차">{list}</nav>
      </MobileToc>
      <TocNav
        ref={navRef}
        aria-label="목차"
        faded={isHidden}
        aria-hidden={isHidden || undefined}
      >
        {list}
      </TocNav>
    </>
  );
}

export default Toc;
