import type { PlatformTargetSelectors } from '@/types'

export const YouTube: PlatformTargetSelectors = {
  chapters: ['.ytp-chapter-title.ytp-button'],
  comments: ['#comments'],
  thumbnails: ['.ytThumbnailViewModelImage'],
  timestamps: [
    '.ytp-time-display',
    '.ytp-tooltip-progress-bar-pill',
    '.ytThumbnailBottomOverlayViewModelBadgeContainer',
    '.ytPlayerStoryboardTimestamp',
  ],
  titles: ['#title h1 yt-formatted-string'],
}
