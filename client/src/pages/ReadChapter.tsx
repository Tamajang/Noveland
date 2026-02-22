// NoveLand Chapter Reading Page
// Design: Reading-focused with font size controls, dark/light mode, navigation
// Matches landnovel.com's reading page design

import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'wouter';
import { novels, chapters } from '@/lib/data';
import { toast } from 'sonner';

const FONT_SIZES = [14, 16, 18, 20, 22, 24];
const FONT_FAMILIES = [
  { name: 'Kanit', label: 'Kanit' },
  { name: 'Sarabun', label: 'Sarabun' },
  { name: 'serif', label: 'Serif' },
];

export default function ReadChapter() {
  const params = useParams<{ novelId: string; chapter: string }>();
  const novelId = parseInt(params.novelId || '1');
  const chapterNum = parseInt(params.chapter || '1');
  const [, navigate] = useLocation();

  const novel = novels.find(n => n.id === novelId) || novels[0];
  const chapter = chapters.find(c => c.novelId === novelId && c.number === chapterNum);

  // Reading settings
  const [fontSize, setFontSize] = useState(18);
  const [fontFamily, setFontFamily] = useState('Sarabun');
  const [readingTheme, setReadingTheme] = useState<'light' | 'dark' | 'sepia'>('light');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [lineHeight, setLineHeight] = useState(1.8);

  const themeStyles: Record<string, { bg: string; text: string; contentBg: string }> = {
    light: { bg: 'rgb(233,233,233)', text: '#1a1a1a', contentBg: 'white' },
    dark: { bg: 'rgb(26,26,26)', text: '#e0e0e0', contentBg: 'rgb(37,37,37)' },
    sepia: { bg: 'rgb(240,230,210)', text: '#3d2b1f', contentBg: 'rgb(250,244,228)' },
  };

  const currentTheme = themeStyles[readingTheme];

  // Placeholder content for chapters without data
  const chapterContent = chapter?.content || `
ตอนที่ ${chapterNum} ของเรื่อง ${novel.title}

เรื่องราวดำเนินต่อไป...

ในบทนี้ตัวละครหลักต้องเผชิญกับความท้าทายใหม่ที่ไม่เคยพบมาก่อน ทุกก้าวที่เดินไปข้างหน้าล้วนเต็มไปด้วยอันตรายและความไม่แน่นอน

แต่ด้วยความมุ่งมั่นและกำลังใจจากเพื่อนร่วมทาง เขาจึงไม่ยอมแพ้ต่อโชคชะตาที่โหดร้าย

"เราจะผ่านสิ่งนี้ไปด้วยกัน" เขากล่าวด้วยน้ำเสียงมั่นคง

การผจญภัยยังคงดำเนินต่อไป และเรื่องราวยังไม่จบสิ้น...

(เนื้อหาตัวอย่าง - ในเว็บจริงจะมีเนื้อหาเต็มรูปแบบ)
  `.trim();

  const prevChapter = chapterNum > 1 ? chapterNum - 1 : null;
  const nextChapter = chapterNum < novel.chapters ? chapterNum + 1 : null;

  return (
    <div style={{
      minHeight: '100vh',
      background: currentTheme.bg,
      transition: 'background 0.3s, color 0.3s',
    }}>
      {/* ===== TOP READING BAR ===== */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: currentTheme.contentBg,
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        padding: '0.75rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}>
        {/* Back to novel */}
        <Link href={`/novel/${novel.id}`} style={{
          color: currentTheme.text,
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.9rem',
          opacity: 0.7,
          flexShrink: 0,
        }}>
          <i className="fa-solid fa-arrow-left"></i>
          <span className="hidden md:inline">กลับ</span>
        </Link>

        {/* Novel title + chapter */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div style={{
            fontSize: '0.75rem',
            opacity: 0.6,
            color: currentTheme.text,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {novel.title}
          </div>
          <div style={{
            fontSize: '0.9rem',
            fontWeight: '600',
            color: currentTheme.text,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            ตอนที่ {chapterNum}: {chapter?.title || `บทที่ ${chapterNum}`}
          </div>
        </div>

        {/* Settings button */}
        <button
          onClick={() => setSettingsOpen(!settingsOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: currentTheme.text,
            fontSize: '1.2rem',
            cursor: 'pointer',
            padding: '0.25rem',
            opacity: 0.7,
          }}
        >
          <i className="fa-solid fa-gear"></i>
        </button>
      </div>

      {/* ===== SETTINGS PANEL ===== */}
      {settingsOpen && (
        <div style={{
          position: 'sticky',
          top: '3.5rem',
          zIndex: 40,
          background: currentTheme.contentBg,
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          padding: '1rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        }}>
          <div style={{ maxWidth: '40rem', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {/* Font size */}
            <div>
              <div style={{ fontSize: '0.8rem', opacity: 0.6, color: currentTheme.text, marginBottom: '0.5rem' }}>
                ขนาดตัวอักษร
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <button
                  onClick={() => setFontSize(s => Math.max(FONT_SIZES[0], s - 2))}
                  style={{ background: 'rgba(0,0,0,0.1)', border: 'none', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', cursor: 'pointer', color: currentTheme.text, fontSize: '1rem' }}
                >A-</button>
                <span style={{ color: currentTheme.text, minWidth: '2rem', textAlign: 'center' }}>{fontSize}</span>
                <button
                  onClick={() => setFontSize(s => Math.min(FONT_SIZES[FONT_SIZES.length - 1], s + 2))}
                  style={{ background: 'rgba(0,0,0,0.1)', border: 'none', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', cursor: 'pointer', color: currentTheme.text, fontSize: '1rem' }}
                >A+</button>
              </div>
            </div>

            {/* Font family */}
            <div>
              <div style={{ fontSize: '0.8rem', opacity: 0.6, color: currentTheme.text, marginBottom: '0.5rem' }}>
                ฟอนต์
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {FONT_FAMILIES.map(f => (
                  <button
                    key={f.name}
                    onClick={() => setFontFamily(f.name)}
                    style={{
                      background: fontFamily === f.name ? '#405fff' : 'rgba(0,0,0,0.1)',
                      border: 'none',
                      borderRadius: '0.5rem',
                      padding: '0.25rem 0.75rem',
                      cursor: 'pointer',
                      color: fontFamily === f.name ? 'white' : currentTheme.text,
                      fontSize: '0.9rem',
                      fontFamily: f.name,
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Reading theme */}
            <div>
              <div style={{ fontSize: '0.8rem', opacity: 0.6, color: currentTheme.text, marginBottom: '0.5rem' }}>
                ธีม
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[
                  { key: 'light', label: '☀️ สว่าง', bg: 'white', text: '#1a1a1a' },
                  { key: 'dark', label: '🌙 มืด', bg: '#1a1a1a', text: '#e0e0e0' },
                  { key: 'sepia', label: '📜 ซีเปีย', bg: '#f5e6c8', text: '#3d2b1f' },
                ].map(t => (
                  <button
                    key={t.key}
                    onClick={() => setReadingTheme(t.key as any)}
                    style={{
                      background: t.bg,
                      border: readingTheme === t.key ? '2px solid #405fff' : '2px solid transparent',
                      borderRadius: '0.5rem',
                      padding: '0.25rem 0.75rem',
                      cursor: 'pointer',
                      color: t.text,
                      fontSize: '0.85rem',
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Line height */}
            <div>
              <div style={{ fontSize: '0.8rem', opacity: 0.6, color: currentTheme.text, marginBottom: '0.5rem' }}>
                ระยะห่างบรรทัด
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[1.5, 1.8, 2.2].map(lh => (
                  <button
                    key={lh}
                    onClick={() => setLineHeight(lh)}
                    style={{
                      background: lineHeight === lh ? '#405fff' : 'rgba(0,0,0,0.1)',
                      border: 'none',
                      borderRadius: '0.5rem',
                      padding: '0.25rem 0.75rem',
                      cursor: 'pointer',
                      color: lineHeight === lh ? 'white' : currentTheme.text,
                      fontSize: '0.85rem',
                    }}
                  >
                    {lh === 1.5 ? 'แคบ' : lh === 1.8 ? 'ปกติ' : 'กว้าง'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== CHAPTER NAVIGATION (top) ===== */}
      <div style={{ maxWidth: '50rem', margin: '1.5rem auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
          {prevChapter ? (
            <Link href={`/read/${novel.id}/${prevChapter}`} style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '0.5rem 1.25rem',
                background: 'rgba(64,95,255,0.15)',
                border: '1px solid #405fff',
                borderRadius: '0.75rem',
                color: '#405fff',
                fontFamily: "'Kanit', sans-serif",
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}>
                <i className="fa-solid fa-chevron-left" style={{ marginRight: '0.4rem' }}></i>
                ตอนก่อนหน้า
              </button>
            </Link>
          ) : <div />}

          {nextChapter ? (
            <Link href={`/read/${novel.id}/${nextChapter}`} style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '0.5rem 1.25rem',
                background: '#405fff',
                border: 'none',
                borderRadius: '0.75rem',
                color: 'white',
                fontFamily: "'Kanit', sans-serif",
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}>
                ตอนถัดไป
                <i className="fa-solid fa-chevron-right" style={{ marginLeft: '0.4rem' }}></i>
              </button>
            </Link>
          ) : <div />}
        </div>
      </div>

      {/* ===== CHAPTER CONTENT ===== */}
      <div style={{ maxWidth: '50rem', margin: '0 auto', padding: '0 1rem 2rem' }}>
        <div className="reading-content" style={{
          background: currentTheme.contentBg,
          padding: 'clamp(1.5rem, 5%, 3rem)',
          borderRadius: '1rem',
          boxShadow: '0 0 20px rgba(0,0,0,0.1)',
        }}>
          {/* Chapter title */}
          <h2 style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            fontFamily: "'Kanit', sans-serif",
            color: currentTheme.text,
            marginBottom: '2rem',
            textAlign: 'center',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
            paddingBottom: '1rem',
          }}>
            ตอนที่ {chapterNum}: {chapter?.title || `บทที่ ${chapterNum}`}
          </h2>

          {/* Story content */}
          <div
            className="story-text"
            style={{
              fontSize: `${fontSize}px`,
              fontFamily: `'${fontFamily}', sans-serif`,
              color: currentTheme.text,
              lineHeight: lineHeight,
            }}
          >
            {chapterContent.split('\n').map((para, i) => (
              para.trim() ? (
                <p key={i} style={{ marginBottom: '0.5rem' }}>{para}</p>
              ) : (
                <br key={i} />
              )
            ))}
          </div>
        </div>

        {/* ===== CHAPTER NAVIGATION (bottom) ===== */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginTop: '1.5rem' }}>
          {prevChapter ? (
            <Link href={`/read/${novel.id}/${prevChapter}`} style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '0.5rem 1.25rem',
                background: 'rgba(64,95,255,0.15)',
                border: '1px solid #405fff',
                borderRadius: '0.75rem',
                color: '#405fff',
                fontFamily: "'Kanit', sans-serif",
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}>
                <i className="fa-solid fa-chevron-left" style={{ marginRight: '0.4rem' }}></i>
                ตอนก่อนหน้า
              </button>
            </Link>
          ) : <div />}

          <Link href={`/novel/${novel.id}`} style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '0.5rem 1.25rem',
              background: 'var(--secondary)',
              border: '1px solid var(--border)',
              borderRadius: '0.75rem',
              color: 'var(--foreground)',
              fontFamily: "'Kanit', sans-serif",
              cursor: 'pointer',
              fontSize: '0.9rem',
            }}>
              <i className="fa-solid fa-list" style={{ marginRight: '0.4rem' }}></i>
              รายการตอน
            </button>
          </Link>

          {nextChapter ? (
            <Link href={`/read/${novel.id}/${nextChapter}`} style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '0.5rem 1.25rem',
                background: '#405fff',
                border: 'none',
                borderRadius: '0.75rem',
                color: 'white',
                fontFamily: "'Kanit', sans-serif",
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}>
                ตอนถัดไป
                <i className="fa-solid fa-chevron-right" style={{ marginLeft: '0.4rem' }}></i>
              </button>
            </Link>
          ) : (
            <div style={{ textAlign: 'center', opacity: 0.6, fontSize: '0.9rem', color: currentTheme.text, padding: '0.5rem' }}>
              จบตอนสุดท้ายแล้ว
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
