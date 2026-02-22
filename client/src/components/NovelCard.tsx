// NoveLand Novel Card Component
// Vertical card with cover image, title, author, views, chapters
// Matches landnovel.com's novel card design

import { Link } from 'wouter';
import { Novel, formatViews } from '@/lib/data';

interface NovelCardProps {
  novel: Novel;
  showRank?: number;
}

export default function NovelCard({ novel, showRank }: NovelCardProps) {
  return (
    <div className="novel-card" style={{ padding: '0.5rem' }}>
      <Link href={`/novel/${novel.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        {/* Cover image */}
        <div
          className="novel-cover"
          style={{ backgroundImage: `url(${novel.cover})` }}
        >
          {/* Ranking number overlay */}
          {showRank !== undefined && (
            <div className="ranking-number" style={{
              fontSize: showRank === 10 ? '7rem' : '10rem',
              top: showRank === 10 ? '-1.5rem' : '-2rem',
              left: showRank === 10 ? '-2.5rem' : '-3rem',
            }}>
              {showRank}
            </div>
          )}

          {/* Status badge */}
          {novel.status === 'completed' && (
            <div className="novel-badge">จบแล้ว</div>
          )}

          {/* Latest chapter badge */}
          <div className="novel-ep-badge">
            ตอนที่ {novel.latestChapter}
          </div>

          {/* Hover overlay */}
          <div className="backdrop-icon">
            <i className="fa-solid fa-book-open"></i>
          </div>
        </div>

        {/* Info */}
        <div style={{ marginTop: '0.5rem' }}>
          <div style={{
            fontSize: '0.95rem',
            fontWeight: '600',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '100%',
          }}>
            {novel.title}
          </div>
          <div style={{
            fontSize: '0.8rem',
            opacity: 0.65,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            marginLeft: '0.1rem',
          }}>
            <i className="fa-solid fa-pen-nib" style={{ color: '#405fff', marginRight: '0.25rem', fontSize: '0.7rem' }}></i>
            {novel.author}
          </div>
          <div style={{ display: 'flex', opacity: 0.5, fontSize: '0.8rem', marginTop: '0.1rem' }}>
            <div style={{ width: '50%' }}>
              <i className="fa-solid fa-eye" style={{ color: '#405fff', marginRight: '0.2rem', fontSize: '0.7rem' }}></i>
              {formatViews(novel.views)}
            </div>
            <div style={{ width: '50%' }}>
              <i className="fa-solid fa-book" style={{ color: '#405fff', marginRight: '0.2rem', fontSize: '0.7rem' }}></i>
              {novel.chapters} ตอน
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
