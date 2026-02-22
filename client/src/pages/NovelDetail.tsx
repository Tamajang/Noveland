// NoveLand Novel Detail Page
// Design: Dark Cinematic - shows cover, description, tags, chapter list
// Matches landnovel.com's novel detail page layout

import { useState } from 'react';
import { Link, useParams } from 'wouter';
import { novels, chapters, categories, formatViews, formatDate } from '@/lib/data';
import { toast } from 'sonner';

export default function NovelDetail() {
  const params = useParams<{ id: string }>();
  const novelId = parseInt(params.id || '1');
  const novel = novels.find(n => n.id === novelId) || novels[0];
  const novelChapters = chapters.filter(c => c.novelId === novel.id);
  const [bookmarked, setBookmarked] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(true);

  // Related novels
  const related = novels.filter(n => n.id !== novel.id && n.category === novel.category).slice(0, 6);
  const otherNovels = novels.filter(n => n.id !== novel.id && n.category !== novel.category).slice(0, 6);

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    toast.success(bookmarked ? 'ยกเลิกการติดตามแล้ว' : 'ติดตามนิยายแล้ว');
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.9rem', opacity: 0.6 }}>
          <Link href="/" style={{ color: 'var(--foreground)', textDecoration: 'none' }}>หน้าหลัก</Link>
          <span>/</span>
          <Link href={`/category/${categories.find(c => c.name === novel.category)?.slug || 'fantasy'}`}
            style={{ color: 'var(--foreground)', textDecoration: 'none' }}>
            {novel.category}
          </Link>
          <span>/</span>
          <span style={{ opacity: 1 }}>{novel.title}</span>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {/* ===== LEFT: Cover + Actions ===== */}
          <div style={{ flexShrink: 0, width: 'clamp(10rem, 20%, 16rem)' }}>
            <div style={{
              width: '100%',
              aspectRatio: '3/4',
              borderRadius: '1rem',
              backgroundImage: `url(${novel.cover})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              marginBottom: '1rem',
            }} />

            {/* Action buttons */}
            <Link href={`/read/${novel.id}/1`} style={{ display: 'block', textDecoration: 'none', marginBottom: '0.5rem' }}>
              <button style={{
                width: '100%',
                padding: '0.6rem',
                background: '#405fff',
                border: 'none',
                borderRadius: '0.75rem',
                color: 'white',
                fontSize: '1rem',
                fontFamily: "'Kanit', sans-serif",
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}>
                <i className="fa-solid fa-book-open" style={{ marginRight: '0.5rem' }}></i>
                อ่านตอนแรก
              </button>
            </Link>

            <Link href={`/read/${novel.id}/${novel.latestChapter}`} style={{ display: 'block', textDecoration: 'none', marginBottom: '0.5rem' }}>
              <button style={{
                width: '100%',
                padding: '0.6rem',
                background: 'var(--secondary)',
                border: '1px solid var(--border)',
                borderRadius: '0.75rem',
                color: 'var(--foreground)',
                fontSize: '1rem',
                fontFamily: "'Kanit', sans-serif",
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}>
                <i className="fa-solid fa-forward" style={{ marginRight: '0.5rem' }}></i>
                ตอนล่าสุด
              </button>
            </Link>

            <button
              onClick={handleBookmark}
              style={{
                width: '100%',
                padding: '0.6rem',
                background: bookmarked ? 'rgba(64,95,255,0.2)' : 'var(--secondary)',
                border: `1px solid ${bookmarked ? '#405fff' : 'var(--border)'}`,
                borderRadius: '0.75rem',
                color: bookmarked ? '#405fff' : 'var(--foreground)',
                fontSize: '1rem',
                fontFamily: "'Kanit', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              <i className={`fa-${bookmarked ? 'solid' : 'regular'} fa-bookmark`} style={{ marginRight: '0.5rem' }}></i>
              {bookmarked ? 'ติดตามแล้ว' : 'ติดตาม'}
            </button>
          </div>

          {/* ===== RIGHT: Info ===== */}
          <div style={{ flex: 1, minWidth: '0' }}>
            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: '700',
              fontFamily: "'Kanit', sans-serif",
              marginBottom: '0.5rem',
              lineHeight: 1.2,
            }}>
              {novel.title}
            </h1>

            {/* Author */}
            <div style={{ marginBottom: '0.75rem', opacity: 0.7 }}>
              <i className="fa-solid fa-pen-nib" style={{ color: '#405fff', marginRight: '0.5rem' }}></i>
              <span style={{ fontSize: '1rem' }}>{novel.author}</span>
            </div>

            {/* Stats row */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '1rem',
              fontSize: '0.9rem',
              opacity: 0.7,
            }}>
              <span>
                <i className="fa-solid fa-eye" style={{ color: '#405fff', marginRight: '0.3rem' }}></i>
                {formatViews(novel.views)} ครั้ง
              </span>
              <span>
                <i className="fa-solid fa-book" style={{ color: '#405fff', marginRight: '0.3rem' }}></i>
                {novel.chapters} ตอน
              </span>
              <span>
                <i className="fa-solid fa-star" style={{ color: '#ffd650', marginRight: '0.3rem' }}></i>
                {novel.rating}
              </span>
              <span>
                <i className="fa-solid fa-clock" style={{ color: '#405fff', marginRight: '0.3rem' }}></i>
                อัปเดต {formatDate(novel.updatedAt)}
              </span>
              <span style={{
                padding: '0.15rem 0.75rem',
                borderRadius: '0.5rem',
                background: novel.status === 'completed' ? 'rgba(16,185,129,0.2)' : 'rgba(64,95,255,0.2)',
                color: novel.status === 'completed' ? '#10b981' : '#405fff',
                fontSize: '0.85rem',
              }}>
                {novel.status === 'completed' ? 'จบแล้ว' : 'กำลังดำเนินการ'}
              </span>
            </div>

            {/* Category + Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span className="category-badge">{novel.category}</span>
              {novel.tags.map(tag => (
                <span key={tag} className="novel-tag">{tag}</span>
              ))}
            </div>

            {/* Description */}
            <div style={{
              background: 'var(--secondary)',
              borderRadius: '1rem',
              padding: '1.25rem',
              marginBottom: '1.5rem',
              lineHeight: '1.8',
              fontSize: '0.95rem',
            }}>
              {novel.description}
            </div>

            {/* Latest chapter info */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem 1rem',
              background: 'var(--secondary)',
              borderRadius: '0.75rem',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
            }}>
              <i className="fa-solid fa-book-open" style={{ color: '#405fff' }}></i>
              <div>
                <div style={{ opacity: 0.6, fontSize: '0.8rem' }}>ตอนล่าสุด</div>
                <div style={{ fontWeight: '600' }}>ตอนที่ {novel.latestChapter}: {novel.latestChapterTitle}</div>
              </div>
              <div style={{ marginLeft: 'auto', opacity: 0.5, fontSize: '0.8rem' }}>
                {formatDate(novel.updatedAt)}
              </div>
            </div>

            {/* Chapter list accordion */}
            <div>
              <button
                className={`ln-accordion-header ${accordionOpen ? 'open' : ''}`}
                onClick={() => setAccordionOpen(!accordionOpen)}
                style={{ width: '100%' }}
              >
                <i className="fa-solid fa-list" style={{ color: '#405fff' }}></i>
                <span style={{ flex: 1, textAlign: 'left' }}>รายการตอน ({novel.chapters} ตอน)</span>
                <i className={`fa-solid fa-chevron-${accordionOpen ? 'up' : 'down'}`} style={{ opacity: 0.5 }}></i>
              </button>

              {accordionOpen && (
                <div style={{
                  border: '1px solid var(--border)',
                  borderTop: 'none',
                  borderRadius: '0 0 0.5rem 0.5rem',
                  overflow: 'hidden',
                  marginBottom: '1rem',
                }}>
                  {novelChapters.length > 0 ? (
                    novelChapters.map(ch => (
                      <Link
                        key={ch.id}
                        href={ch.isPremium ? '#' : `/read/${novel.id}/${ch.number}`}
                        className="chapter-item"
                        onClick={ch.isPremium ? (e) => { e.preventDefault(); toast.info('ตอนนี้ต้องใช้เหรียญในการอ่าน'); } : undefined}
                      >
                        <div style={{ flex: 1 }}>
                          <span style={{ opacity: 0.6, marginRight: '0.5rem', fontSize: '0.85rem' }}>
                            ตอนที่ {ch.number}
                          </span>
                          <span style={{ fontSize: '0.95rem' }}>{ch.title}</span>
                        </div>
                        {ch.isPremium && (
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            color: '#ffd650',
                            fontSize: '0.85rem',
                          }}>
                            <i className="fa-solid fa-coins"></i>
                            {ch.price}
                          </span>
                        )}
                      </Link>
                    ))
                  ) : (
                    // Generate placeholder chapters for novels without chapter data
                    Array.from({ length: Math.min(novel.chapters, 20) }, (_, i) => (
                      <Link
                        key={i}
                        href={i < 3 ? `/read/${novel.id}/${i + 1}` : '#'}
                        className="chapter-item"
                        onClick={i >= 3 ? (e) => { e.preventDefault(); toast.info('ตอนนี้ต้องใช้เหรียญในการอ่าน'); } : undefined}
                      >
                        <div style={{ flex: 1 }}>
                          <span style={{ opacity: 0.6, marginRight: '0.5rem', fontSize: '0.85rem' }}>
                            ตอนที่ {i + 1}
                          </span>
                          <span style={{ fontSize: '0.95rem' }}>บทที่ {i + 1}</span>
                        </div>
                        {i >= 3 && (
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            color: '#ffd650',
                            fontSize: '0.85rem',
                          }}>
                            <i className="fa-solid fa-coins"></i>
                            5
                          </span>
                        )}
                      </Link>
                    ))
                  )}
                  {novel.chapters > 20 && (
                    <div style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'center',
                      opacity: 0.5,
                      fontSize: '0.85rem',
                    }}>
                      และอีก {novel.chapters - 20} ตอน...
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ===== RELATED NOVELS ===== */}
        {related.length > 0 && (
          <section style={{ marginTop: '3rem' }}>
            <div className="section-title">นิยายที่เกี่ยวข้อง</div>
            <div style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '0',
              paddingBottom: '1rem',
              scrollbarWidth: 'none',
            }}>
              {related.map(n => (
                <div key={n.id} style={{ flexShrink: 0, width: '12rem' }}>
                  <div className="novel-card" style={{ padding: '0.5rem' }}>
                    <Link href={`/novel/${n.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div
                        className="novel-cover"
                        style={{ backgroundImage: `url(${n.cover})` }}
                      >
                        <div className="backdrop-icon"><i className="fa-solid fa-book-open"></i></div>
                      </div>
                      <div style={{ marginTop: '0.5rem' }}>
                        <div style={{ fontSize: '0.95rem', fontWeight: '600', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {n.title}
                        </div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{n.author}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== OTHER NOVELS ===== */}
        {otherNovels.length > 0 && (
          <section style={{ marginTop: '2rem' }}>
            <div className="section-title">นิยายอื่นๆ ที่น่าสนใจ</div>
            <div style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '0',
              paddingBottom: '1rem',
              scrollbarWidth: 'none',
            }}>
              {otherNovels.map(n => (
                <div key={n.id} style={{ flexShrink: 0, width: '12rem' }}>
                  <div className="novel-card" style={{ padding: '0.5rem' }}>
                    <Link href={`/novel/${n.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div
                        className="novel-cover"
                        style={{ backgroundImage: `url(${n.cover})` }}
                      >
                        <div className="backdrop-icon"><i className="fa-solid fa-book-open"></i></div>
                      </div>
                      <div style={{ marginTop: '0.5rem' }}>
                        <div style={{ fontSize: '0.95rem', fontWeight: '600', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {n.title}
                        </div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{n.author}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
