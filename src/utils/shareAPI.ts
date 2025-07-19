const SITE_CONFIG = {
  baseUrl: 'https://mnxmnz.github.io',
  messages: {
    ko: {
      copied: '링크가 클립보드에 복사되었습니다.',
      unsupported: '공유 기능이 지원되지 않는 브라우저입니다.',
      shareError: '공유 중 오류가 발생했습니다.',
      clipboardError: '클립보드 복사 중 오류가 발생했습니다.',
    },
    en: {
      copied: 'Link copied to clipboard.',
      unsupported: 'Share feature is not supported in this browser.',
      shareError: 'An error occurred while sharing.',
      clipboardError: 'An error occurred while copying to clipboard.',
    },
  },
} as const;

export interface ShareConfig {
  title: string;
  slug: string;
  baseUrl?: string;
  locale?: 'ko' | 'en';
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export interface ShareResult {
  success: boolean;
  method: 'native' | 'clipboard' | 'none';
  error?: Error;
}

async function shareAPI({
  title,
  slug,
  baseUrl = SITE_CONFIG.baseUrl,
  locale = 'ko',
  onSuccess,
  onError,
}: ShareConfig): Promise<ShareResult> {
  const messages = SITE_CONFIG.messages[locale];
  const fullUrl = `${baseUrl}${slug}`;

  try {
    if (typeof navigator !== 'undefined' && navigator.share) {
      await navigator.share({
        title,
        url: fullUrl,
      });

      onSuccess?.();
      return { success: true, method: 'native' };
    }

    if (
      typeof navigator !== 'undefined' &&
      navigator.clipboard &&
      navigator.clipboard.writeText
    ) {
      await navigator.clipboard.writeText(fullUrl);
      alert(messages.copied);

      onSuccess?.();
      return { success: true, method: 'clipboard' };
    }

    const error = new Error(messages.unsupported);
    alert(messages.unsupported);

    onError?.(error);
    return { success: false, method: 'none', error };
  } catch (err) {
    const error =
      err instanceof Error ? err : new Error('Unknown error occurred');
    const hasNativeShare = typeof navigator !== 'undefined' && navigator.share;
    const errorMessage = hasNativeShare
      ? messages.shareError
      : messages.clipboardError;

    alert(errorMessage);
    onError?.(error);

    return {
      success: false,
      method: hasNativeShare ? 'native' : 'clipboard',
      error,
    };
  }
}

function legacyShareAPI({
  title,
  slug,
}: {
  title: string;
  slug: string;
}): void {
  shareAPI({ title, slug }).catch(console.error);
}

export { shareAPI as default, legacyShareAPI };

export const shareUtils = {
  createShareFunction:
    (config: Partial<ShareConfig> = {}) =>
    (params: Pick<ShareConfig, 'title' | 'slug'>) =>
      shareAPI({ ...config, ...params }),

  isShareSupported: (): boolean => {
    if (typeof navigator === 'undefined') return false;
    return Boolean(
      navigator.share || (navigator.clipboard && navigator.clipboard.writeText),
    );
  },

  getShareMethod: (): 'native' | 'clipboard' | 'none' => {
    if (typeof navigator === 'undefined') return 'none';
    if ('share' in navigator && typeof navigator.share !== 'undefined')
      return 'native';
    if (
      'clipboard' in navigator &&
      navigator.clipboard &&
      'writeText' in navigator.clipboard
    )
      return 'clipboard';
    return 'none';
  },
};
