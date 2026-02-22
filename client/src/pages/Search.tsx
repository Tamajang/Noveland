// NoveLand Search Page
// Design: Dark Cinematic - search bar with live filtering, results grid
// Matches landnovel.com's search page design

import { useState, useEffect } from 'react';
import { useSearch } from 'wouter';
import { novels, categories } from '@/lib/data';
import NovelCard from '@/components/NovelCard';
import NovelCardList from '@/components/NovelCardList';

export default function Search() {
  const searchStr = useSearch();
  const params = new URLSearchParams(searchStr);
  const initialQuery = params.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [sortBy, setSortBy] = useState('views');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filtered = novels
    .filter(n => {
      const matchQuery = !query || n.title.includes(query) || n.author.includes(query) || n.tags.some(t => t.includes(query));
      const matchCat = !selectedCategory || n.category === selectedCategory;
      const matchStatus = !selectedStatus || n.status === selectedStatus;
      return matchQuery && matchCat && matchStatus;
    })
    .sort((a, b) => {
      if (sortBy === 'views') return b.views - a.views;
      if (sortBy === 'chapters') return b.chapters - a.chapters;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'updated') return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      return 0;
    });

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Search header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1rem' }}>
            ค้นหานิยาย
          </h1>

          {/* Search input */}
          <div className="search-input-wrapper" style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.75rem 1rem',
            gap: '0.75rem',
            marginBottom: '1rem',
          }}>
            <i className="fa-solid fa-magnifying-glass" style={{ color: '#405fff', fontSize: '1.1rem' }}></i>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="ค้นหาชื่อนิยาย, ผู้แต่ง, แท็ก..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--foreground)',
                fontSize: '1rem',
                fontFamily: "'Kanit', sans-serif",
              }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--muted-foreground)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>

          {/* Filters row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            {/* Category filter */}
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              style={{
                background: 'var(--secondary)',
                border: '1px solid var(--border)',
                borderRadius: '0.75rem',
                padding: '0.5rem 1rem',
                color: 'var(--foreground)',
                fontFamily: "'Kanit', sans-serif",
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              <option value="">ทุกหมวดหมู่</option>
              {categories.map(c => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>

            {/* Status filter */}
            <select
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              style={{
                background: 'var(--secondary)',
                border: '1px solid var(--border)',
                borderRadius: '0.75rem',
                padding: '0.5rem 1rem',
                color: 'var(--foreground)',
                fontFamily: "'Kanit', sans-serif",
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              <option value="">ทุกสถานะ</option>
              <option value="ongoing">กำลังดำเนินการ</option>
              <option value="completed">จบแล้ว</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              style={{
                background: 'var(--secondary)',
                border: '1px solid var(--border)',
                borderRadius: '0.75rem',
                padding: '0.5rem 1rem',
                color: 'var(--foreground)',
                fontFamily: "'Kanit', sans-serif",
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              <option value="views">ยอดนิยม</option>
              <option value="chapters">จำนวนตอน</option>
              <option value="rating">คะแนน</option>
              <option value="updated">อัปเดตล่าสุด</option>
            </select>

            {/* View mode */}
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  background: viewMode === 'grid' ? '#405fff' : 'var(--secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  color: viewMode === 'grid' ? 'white' : 'var(--foreground)',
                  cursor: 'pointer',
                }}
              >
                <i className="fa-solid fa-grip"></i>
              </button>
              <button
                onClick={() => setViewMode('list')}
                style={{
                  background: viewMode === 'list' ? '#405fff' : 'var(--secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  color: viewMode === 'list' ? 'white' : 'var(--foreground)',
                  cursor: 'pointer',
                }}
              >
                <i className="fa-solid fa-list"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div style={{ marginBottom: '1rem', opacity: 0.6, fontSize: '0.9rem' }}>
          พบ {filtered.length} เรื่อง
          {query && <span> สำหรับ "<strong style={{ opacity: 1 }}>{query}</strong>"</span>}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', opacity: 0.5 }}>
            <i className="fa-solid fa-book-open" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}></i>
            <div>ไม่พบนิยายที่ตรงกับการค้นหา</div>
          </div>
        ) : viewMode === 'grid' ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 11rem), 1fr))',
            gap: '0',
          }}>
            {filtered.map(novel => (
              <NovelCard key={novel.id} novel={novel} />
            ))}
          </div>
        ) : (
          <div>
            {filtered.map(novel => (
              <NovelCardList key={novel.id} novel={novel} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
