import type { UserSettingsStorage } from '@/types'

export const USER_DEFAULT_SETTINGS: UserSettingsStorage = {
  enabled: true,
  blur: 4,
  targets: {
    chapters: true,
    comments: true,
    thumbnails: false,
    timestamps: true,
    titles: false,
  },
}

export const TARGETS = [
  {
    name: 'chapters',
    description: 'Blurs chapter markers and section dividers in the video player and description.',
  },
  {
    name: 'comments',
    description: 'Blurs the comment section to prevent spoilers from other viewers.',
  },
  {
    name: 'thumbnails',
    description: 'Blurs video thumbnails in recommendations, playlists, and end screens.',
  },
  {
    name: 'timestamps',
    description: 'Blurs timestamps in the description that may reveal key moments.',
  },
  {
    name: 'titles',
    description: 'Blurs video titles across the site, including recommendations and search results.',
  },
] as const
