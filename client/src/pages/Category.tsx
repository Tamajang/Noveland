// NoveLand Category Page
// Design: Dark Cinematic - shows novels filtered by category/genre

import { useState } from 'react';
import { Link, useParams } from 'wouter';
import { novels, categories } from '@/lib/data';
import NovelCard from '@/components/NovelCard';

export default function Category() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || 'fantasy';
  const [sortBy, setSortBy] = useState('views');

  const category = categories.find(c => c.slug === slug);
  const filtered = novels
    .filter(n => !category || n.category === category.name)
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
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.9rem', opacity: 0.6 }}>
          <Link href="/" style={{ color: 'var(--foreground)', textDecoration: 'none' }}>หน้าหลัก</Link>
          <span>/</span>
          <span style={{ opacity: 1 }}>{category?.name || 'หมวดหมู่'}</span>
        </div>

        {/* Category header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
            {category?.icon} {category?.name || 'หมวดหมู่'}
          </h1>
          <p style={{ opacity: 0.6 }}>พบ {filtered.length} เรื่อง</p>
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 1rem',
                borderRadius: '0.75rem',
                background: cat.slug === slug ? '#405fff' : 'var(--secondary)',
                border: `1px solid ${cat.slug === slug ? '#405fff' : 'var(--border)'}`,
                color: cat.slug === slug ? 'white' : 'var(--foreground)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.3s',
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>

        {/* Sort */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
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
        </div>

        {/* Novels grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', opacity: 0.5 }}>
            <i className="fa-solid fa-book-open" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}></i>
            <div>ยังไม่มีนิยายในหมวดหมู่นี้</div>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 11rem), 1fr))',
            gap: '0',
          }}>
            {filtered.map(novel => (
              <NovelCard key={novel.id} novel={novel} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
