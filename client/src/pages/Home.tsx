// NoveLand Home Page
// Design: Dark Cinematic Novel Platform
// Sections: Hero banner, For You, Updated Novels, Top 10, Category Recommendations, All Novels

import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { novels, categories, formatViews, formatDate } from '@/lib/data';
import NovelCard from '@/components/NovelCard';
import NovelCardList from '@/components/NovelCardList';

const HERO_IMAGES = [
  {
    url: 'https://private-us-east-1.manuscdn.com/sessionFile/10lquV29D1FLgItfBvDPbu/sandbox/ERG408iWfSOnt76jZASdKh-img-1_1771736823000_na1fn_aGVyby1iYW5uZXItMQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMTBscXVWMjlEMUZMZ0l0ZkJ2RFBidS9zYW5kYm94L0VSRzQwOGlXZlNPbnQ3NmpaQVNkS2gtaW1nLTFfMTc3MTczNjgyMzAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEl0TVEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=u1A8-qmREdjLvwetqfMlr6Q-AQqVQ1FhZQ6AR4v5N9iKIM6PTd-D5FMAyekcF6tzpkPt7mwmCpGJbQ4GgDCf99vfUwrIo~vmKrm4kv1BrI9~kraGSCGOfkScXGqkkETDyVbgx9SNiWoRyfnkT4TXq8liEafDxpIfKRAZSen4NgsRR0jbN0-mOPA4KWNBntTylmWG0QlfXiXwQ-mWHz80-2no1w--t~R9DUS8HKKC7h~-co~CqDVIDqBkKS-aqaIqxbFYJdYeVHMuk4EMBFJYyM4znCuowOG3Er9BLqwzx8oNArmZ3HZY23cnGcW96-J-mh71HjuJbi5~OJoO6HyO4w__',
    novel: novels[0],
  },
  {
    url: 'https://private-us-east-1.manuscdn.com/sessionFile/10lquV29D1FLgItfBvDPbu/sandbox/ERG408iWfSOnt76jZASdKh-img-2_1771736818000_na1fn_aGVyby1iYW5uZXItMg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMTBscXVWMjlEMUZMZ0l0ZkJ2RFBidS9zYW5kYm94L0VSRzQwOGlXZlNPbnQ3NmpaQVNkS2gtaW1nLTJfMTc3MTczNjgxODAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEl0TWcuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IsTJpzCikWfNyQRO4Z5~yRX4rMk-MCQH4wvUQkuoS6miSSXjR8aLcMmLJgS6GfUD1PCtaEK8fARMEt60odm53s8k0EWB2VVvzjr5oDqwiQps4qk56nqDMWmpoYmOttKkQUqH7k7j-qW5zFKYGmzbgbsvDH9R388A7pHZoLAjVUBh5AqhlVmwHX3C86qDKcPBMZK1FSpXAw0y8ZHSCorHG7Da7e~S65sdFjr-LypB3ptFsNNr7hIly30e~jAt72Co~mlPJo3VMpKkfvv7LuPLzY6rYFq3AkyOth2PkuF30xH9tYqgznk2ilflaBpg5hxwNnIv7bkhd2LMfylwGdOG9w__',
    novel: novels[1],
  },
  {
    url: 'https://private-us-east-1.manuscdn.com/sessionFile/10lquV29D1FLgItfBvDPbu/sandbox/ERG408iWfSOnt76jZASdKh-img-3_1771736815000_na1fn_aGVyby1iYW5uZXItMw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMTBscXVWMjlEMUZMZ0l0ZkJ2RFBidS9zYW5kYm94L0VSRzQwOGlXZlNPbnQ3NmpaQVNkS2gtaW1nLTNfMTc3MTczNjgxNTAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEl0TXcuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jk1dbe0Y~CCD4h8NiyRBdw5lNioi~GCzg1cKjfNivj0952hyL5RWkrQHGmvZMbrzonFfr5YcJyMGhpcuczJAQQluQZ7vXVxhVymfT5Wd~STOX8FW2V33gfIObnr17y3nxyY8XkRPR2OScaSUtyvQ~mpcU2~1GQy~xzZhNo1UCsf2v~wA8S3SuM4y72atJM6ZhHDAdkmxnY75xTPo64aTIUUGDPHluKoyphr8cEX-hcpN0-JpVomiZ3Onb-iO42mG88HTq6JTMvPQjsbjvQPgYUfOnnf1tz0Z3dgYATy9L1Tu-FWcbxERMo5HD2rgt31H7x7L6ZNJtD6UT9dAsqQ7NQ__',
    novel: novels[2],
  },
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroVisible, setHeroVisible] = useState(true);
  const heroIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-rotate hero
  useEffect(() => {
    heroIntervalRef.current = setInterval(() => {
      setHeroVisible(false);
      setTimeout(() => {
        setHeroIndex(i => (i + 1) % HERO_IMAGES.length);
        setHeroVisible(true);
      }, 500);
    }, 5000);
    return () => {
      if (heroIntervalRef.current) clearInterval(heroIntervalRef.current);
    };
  }, []);

  const currentHero = HERO_IMAGES[heroIndex];
  const updatedNovels = [...novels].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  const top10Novels = [...novels].sort((a, b) => b.views - a.views).slice(0, 10);
  const fantasyNovels = novels.filter(n => n.category === 'แฟนตาซี');
  const romanceNovels = novels.filter(n => n.category === 'โรแมนติก');

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* ===== HERO SECTION ===== */}
      <div className="ln-hero">
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${currentHero.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 0.5s',
            opacity: heroVisible ? 1 : 0,
          }}
        />
        {/* Hero title overlay */}
        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: '5%',
          zIndex: 2,
          opacity: heroVisible ? 1 : 0,
          transition: 'opacity 0.5s',
        }}>
          <div style={{
            fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
            fontFamily: "'Kanit', sans-serif",
            fontWeight: '700',
            color: 'white',
            textShadow: '0 2px 15px rgba(0,0,0,0.9)',
            lineHeight: 1.2,
            maxWidth: '45%',
          }}>
            {currentHero.novel.title}
          </div>
          <div style={{
            fontSize: 'clamp(0.7rem, 1.2vw, 1rem)',
            color: 'rgba(255,255,255,0.8)',
            marginTop: '0.5rem',
            marginBottom: '0.75rem',
          }}>
            <span className="category-badge" style={{ fontSize: 'clamp(0.65rem, 1vw, 0.9rem)' }}>
              {currentHero.novel.category}
            </span>
          </div>
          <Link
            href={`/novel/${currentHero.novel.id}`}
            style={{
              display: 'inline-block',
              padding: 'clamp(0.3rem, 0.5vw, 0.5rem) clamp(1rem, 2vw, 2rem)',
              borderRadius: '0.5rem',
              background: 'rgba(14,14,14,0.9)',
              color: 'white',
              textDecoration: 'none',
              fontSize: 'clamp(0.7rem, 1.2vw, 1rem)',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#405fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'white')}
          >
            อ่านเลย
          </Link>
        </div>

        {/* Hero dots */}
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          zIndex: 2,
          display: 'flex',
          gap: '0.5rem',
        }}>
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setHeroIndex(i); setHeroVisible(true); }}
              style={{
                width: i === heroIndex ? '1.5rem' : '0.5rem',
                height: '0.5rem',
                borderRadius: '1rem',
                background: i === heroIndex ? '#405fff' : 'rgba(255,255,255,0.4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* ===== ANNOUNCEMENT BANNER ===== */}
      <div style={{
        background: 'linear-gradient(90deg, #405fff, #2b42be, #405fff)',
        backgroundSize: '200% 100%',
        padding: '0.5rem 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}>
        <div style={{
          display: 'inline-block',
          animation: 'marquee 30s linear infinite',
          color: 'white',
          fontSize: '0.85rem',
          fontWeight: '500',
        }}>
          &nbsp;&nbsp;&nbsp;📚 ยินดีต้อนรับสู่ NoveLand - แหล่งรวมนิยายออนไลน์ที่ดีที่สุด&nbsp;&nbsp;&nbsp;⚡ อัปเดตนิยายใหม่ทุกวัน&nbsp;&nbsp;&nbsp;🔥 ราชันย์แห่งความมืด ตอนใหม่มาแล้ว!&nbsp;&nbsp;&nbsp;💕 หัวใจใต้แสงจันทร์ จบแล้ว!&nbsp;&nbsp;&nbsp;🌟 สมัครสมาชิกฟรีเพื่อรับสิทธิ์พิเศษ&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;📚 ยินดีต้อนรับสู่ NoveLand - แหล่งรวมนิยายออนไลน์ที่ดีที่สุด&nbsp;&nbsp;&nbsp;⚡ อัปเดตนิยายใหม่ทุกวัน&nbsp;&nbsp;&nbsp;🔥 ราชันย์แห่งความมืด ตอนใหม่มาแล้ว!&nbsp;&nbsp;&nbsp;💕 หัวใจใต้แสงจันทร์ จบแล้ว!&nbsp;&nbsp;&nbsp;🌟 สมัครสมาชิกฟรีเพื่อรับสิทธิ์พิเศษ&nbsp;&nbsp;&nbsp;
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div style={{ marginTop: '2rem' }}>

        {/* ===== UPDATED NOVELS ===== */}
        <section style={{ marginBottom: '3rem' }}>
          <div className="container">
            <div className="section-title">อัปเดตล่าสุด</div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 32rem), 1fr))',
              gap: '0',
            }}>
              {updatedNovels.slice(0, 6).map(novel => (
                <NovelCardList key={novel.id} novel={novel} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== TOP 10 NOVELS ===== */}
        <section style={{
          marginBottom: '3rem',
          background: 'linear-gradient(106deg, rgba(20, 80, 114, 0.15) 0%, rgba(28, 4, 73, 0.1) 100%)',
          padding: '2rem 0',
        }}>
          <div className="container">
            <div className="section-title">Top 10 นิยายยอดนิยม</div>
            <div style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '0',
              paddingBottom: '1rem',
              scrollbarWidth: 'none',
            }}>
              {top10Novels.map((novel, i) => (
                <div key={novel.id} style={{
                  flexShrink: 0,
                  width: i === 0 ? '14rem' : '12rem',
                  position: 'relative',
                }}>
                  <NovelCard novel={novel} showRank={i + 1} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CATEGORY RECOMMENDATIONS ===== */}
        <section style={{ marginBottom: '3rem' }}>
          <div className="container">
            {/* Categories */}
            <div className="section-title">หมวดหมู่</div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '2.5rem',
            }}>
              {categories.map(cat => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '0.75rem',
                    background: 'var(--secondary)',
                    border: '1px solid var(--border)',
                    color: 'var(--foreground)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#405fff';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = '#405fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--secondary)';
                    e.currentTarget.style.color = 'var(--foreground)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>

            {/* Fantasy novels */}
            <div className="section-title" style={{ fontSize: '1.4rem' }}>
              <i className="fa-solid fa-dragon" style={{ color: '#405fff', marginRight: '0.5rem' }}></i>
              แฟนตาซี
            </div>
            <div style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '0',
              paddingBottom: '1rem',
              scrollbarWidth: 'none',
            }}>
              {fantasyNovels.map(novel => (
                <div key={novel.id} style={{ flexShrink: 0, width: '12rem' }}>
                  <NovelCard novel={novel} />
                </div>
              ))}
            </div>

            {/* Romance novels */}
            <div className="section-title" style={{ fontSize: '1.4rem', marginTop: '2rem' }}>
              <i className="fa-solid fa-heart" style={{ color: '#ec4899', marginRight: '0.5rem' }}></i>
              โรแมนติก
            </div>
            <div style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '0',
              paddingBottom: '1rem',
              scrollbarWidth: 'none',
            }}>
              {romanceNovels.map(novel => (
                <div key={novel.id} style={{ flexShrink: 0, width: '12rem' }}>
                  <NovelCard novel={novel} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== RECOMMENDED SECTION ===== */}
        <section style={{ marginBottom: '3rem', background: 'linear-gradient(106deg, rgba(64,95,255,0.05) 0%, rgba(28,4,73,0.05) 100%)', padding: '2rem 0' }}>
          <div className="container">
            <div className="section-title">แนะนำโดย NoveLand</div>
            <div style={{ display: 'flex', overflowX: 'auto', gap: '0', paddingBottom: '1rem', scrollbarWidth: 'none' }}>
              {[...novels].sort((a, b) => b.rating - a.rating).slice(0, 8).map(novel => (
                <div key={novel.id} style={{ flexShrink: 0, width: '12rem' }}>
                  <NovelCard novel={novel} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COMPLETED NOVELS ===== */}
        <section style={{ marginBottom: '3rem' }}>
          <div className="container">
            <div className="section-title">
              <i className="fa-solid fa-check-circle" style={{ color: '#10b981', marginRight: '0.5rem' }}></i>
              นิยายจบแล้ว
            </div>
            <div style={{ display: 'flex', overflowX: 'auto', gap: '0', paddingBottom: '1rem', scrollbarWidth: 'none' }}>
              {novels.filter(n => n.status === 'completed').map(novel => (
                <div key={novel.id} style={{ flexShrink: 0, width: '12rem' }}>
                  <NovelCard novel={novel} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ALL NOVELS ===== */}
        <section style={{ marginBottom: '3rem' }}>
          <div className="container">
            <div className="section-title">นิยายทั้งหมด</div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 11rem), 1fr))',
              gap: '0',
            }}>
              {novels.map(novel => (
                <NovelCard key={novel.id} novel={novel} />
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
