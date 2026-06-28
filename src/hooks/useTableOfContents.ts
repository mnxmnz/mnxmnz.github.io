import { useCallback, useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';

export type TocItem = {
  id: string;
  text: string;
  level: number;
};

const HEADING_SELECTOR = 'h2, h3, h4';
const ACTIVE_OFFSET = 120;
const CLICK_LOCK_MS = 700;
const FOOTER_GAP = 48;
const TOC_SCROLL_PADDING = 24;

function slugify(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function useTableOfContents(containerId: string) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');
  const [isHidden, setIsHidden] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const headingsRef = useRef<HTMLElement[]>([]);
  const lockRef = useRef(false);
  const lockTimerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const container = document.getElementById(containerId);

    if (!container) {
      return;
    }

    const headings = Array.from(
      container.querySelectorAll<HTMLElement>(HEADING_SELECTOR),
    );

    const usedIds = new Set<string>();

    const tocItems = headings.map((heading, index) => {
      const text = heading.textContent?.trim() ?? '';
      const base = heading.id || slugify(text) || `section-${index}`;

      let id = base;
      let suffix = 1;

      while (usedIds.has(id)) {
        id = `${base}-${suffix}`;
        suffix += 1;
      }

      usedIds.add(id);
      heading.id = id;

      return { id, text, level: Number(heading.tagName[1]) };
    });

    headingsRef.current = headings;
    setItems(tocItems);
  }, [containerId]);

  useEffect(() => {
    if (items.length === 0) {
      return undefined;
    }

    const footer = document.querySelector('footer');

    const update = () => {
      if (footer && navRef.current) {
        const footerTop = footer.getBoundingClientRect().top;
        const tocBottom = navRef.current.getBoundingClientRect().bottom;

        setIsHidden(footerTop <= tocBottom + FOOTER_GAP);
      }

      if (lockRef.current) {
        return;
      }

      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (reachedBottom) {
        setActiveId(items[items.length - 1].id);

        return;
      }

      let current = items[0].id;

      for (const heading of headingsRef.current) {
        if (heading.getBoundingClientRect().top - ACTIVE_OFFSET <= 0) {
          current = heading.id;
        } else {
          break;
        }
      }

      setActiveId(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [items]);

  useEffect(() => {
    const nav = navRef.current;

    if (!nav || !activeId) {
      return;
    }

    const activeLink = nav.querySelector<HTMLElement>('[aria-current]');

    if (!activeLink) {
      return;
    }

    const offsetTop =
      activeLink.getBoundingClientRect().top - nav.getBoundingClientRect().top;
    const linkHeight = activeLink.offsetHeight;
    const viewport = nav.clientHeight;

    if (offsetTop < TOC_SCROLL_PADDING) {
      nav.scrollTop += offsetTop - TOC_SCROLL_PADDING;
    } else if (offsetTop + linkHeight > viewport - TOC_SCROLL_PADDING) {
      nav.scrollTop += offsetTop + linkHeight - viewport + TOC_SCROLL_PADDING;
    }
  }, [activeId]);

  useEffect(() => {
    if (items.length === 0 || !window.location.hash) {
      return undefined;
    }

    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = document.getElementById(id);

    if (!target) {
      return undefined;
    }

    const timer = setTimeout(() => {
      target.scrollIntoView();
      setActiveId(id);
    }, 0);

    return () => clearTimeout(timer);
  }, [items]);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, id: string) => {
      event.preventDefault();

      const target = document.getElementById(id);

      if (!target) {
        return;
      }

      setActiveId(id);

      lockRef.current = true;
      clearTimeout(lockTimerRef.current);

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });

      window.history.replaceState(null, '', `#${id}`);

      lockTimerRef.current = setTimeout(() => {
        lockRef.current = false;
      }, CLICK_LOCK_MS);
    },
    [],
  );

  return { items, activeId, isHidden, navRef, handleClick };
}

export default useTableOfContents;
