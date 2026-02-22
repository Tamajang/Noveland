// NoveLand Novel Card List (Horizontal Card)
// Wide horizontal card with cover, title, description
// Matches landnovel.com's novelcard-list design

import { Link } from 'wouter';
import { Novel, formatViews, formatDate } from '@/lib/data';

interface NovelCardListProps {
  novel: Novel;
}

export default function NovelCardList({ novel }: NovelCardListProps) {
  return (
    <Link href={`/novel/${novel.id}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '1rem' }}>
      <div className="novelcard-item">
        {/* Blurred background */}
        <div
          className="blur-bg"
          style={{ backgroundImage: `url(${novel.cover})` }}
        />

        {/* Cover */}
        <div style={{
          width: '25%',
          height: '100%',
          backgroundImage: `url(${novel.cover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          flexShrink: 0,
        }} />

        {/* Info */}
        <div style={{ padding: '0.75rem', width: '75%', zIndex: 1, overflow: 'hidden' }}>
          <div style={{
            fontWeight: '700',
            fontSize: '1rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            marginBottom: '0.25rem',
          }}>
            {novel.title}
          </div>
          <div style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '0.25rem' }}>
            <i className="fa-solid fa-pen-nib" style={{ color: '#405fff', marginRight: '0.25rem' }}></i>
            {novel.author}
          </div>
          <div style={{
            fontSize: '0.8rem',
            opacity: 0.6,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical' as const,
            lineHeight: '1.4',
          }}>
            {novel.description}
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.4rem', fontSize: '0.75rem', opacity: 0.5 }}>
            <span>
              <i className="fa-solid fa-eye" style={{ color: '#405fff', marginRight: '0.2rem' }}></i>
              {formatViews(novel.views)}
            </span>
            <span>
              <i className="fa-solid fa-book" style={{ color: '#405fff', marginRight: '0.2rem' }}></i>
              {novel.chapters} ตอน
            </span>
            <span>
              <i className="fa-solid fa-clock" style={{ color: '#405fff', marginRight: '0.2rem' }}></i>
              {formatDate(novel.updatedAt)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
