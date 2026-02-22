// NoveLand Footer - Dark footer with links
// Matches landnovel.com's footer design (without social media and creator name)

import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="ln-footer" style={{ padding: '2rem 0', marginTop: '3rem' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between' }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Sriracha', cursive",
              fontSize: '1.5rem',
              background: 'linear-gradient(120deg, #8196ff 0%, #405fff 50%, #2b42be 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem',
            }}>
              NoveLand
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', maxWidth: '20rem' }}>
              อ่านนิยายฟรี อ่านนิยายสนุก อ่านนิยายเสียเงิน<br />
              อัปเดตทุกวัน มีนิยายให้อ่านทุกประเภท
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.75rem', color: 'white' }}>NoveLand</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem' }}>
                - หน้าหลัก
              </Link>
              <Link href="/search" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem' }}>
                - ค้นหา
              </Link>
              <Link href="/bookmarks" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem' }}>
                - นิยายที่ฉันติดตาม
              </Link>
              <Link href="/wallet" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem' }}>
                - กระเป๋าสตางค์
              </Link>
              <Link href="/topup" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem' }}>
                - เติมเงิน
              </Link>
            </div>
          </div>

          {/* About */}
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.75rem', color: 'white' }}>เกี่ยวกับเรา</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem' }}>
                - นโยบายความเป็นส่วนตัว
              </Link>
              <Link href="/terms" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem' }}>
                - ข้อตกลงการใช้งาน
              </Link>
              <Link href="/contact" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem' }}>
                - ติดต่อเรา
              </Link>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          marginTop: '1.5rem',
          paddingTop: '1rem',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.85rem',
        }}>
          Copyright © 2021-2026 NoveLand.com
        </div>
      </div>
    </footer>
  );
}
