import type { PlatformTargetSelectors } from '@/types'

export const YouTube: PlatformTargetSelectors = {
  chapters: ['.ytp-chapter-title.ytp-button'],
  comments: ['#comments'],
  thumbnails: ['#thumbnail.ytd-thumbnail', '.ytThumbnailViewModelImage', '.ytp-tooltip-progress-bar-pill'],
  timestamps: [
    '.ytp-time-contents',
    '.ytPlayerStoryboardTimestamp',
    '.ytp-tooltip-progress-bar-pill',
    'badge-shape.ytBadgeShapeThumbnailBadge',
  ],
  titles: [
    '#video-title',
    'h1.ytd-watch-metadata',
    '.ytLockupMetadataViewModelTitle',
    '.shortsLockupViewModelHostOutsideMetadataEndpoint',
  ],
}
