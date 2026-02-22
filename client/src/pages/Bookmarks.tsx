// NoveLand Bookmarks Page
import { toast } from 'sonner';

export default function Bookmarks() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '2rem' }}>
          <i className="fa-solid fa-bookmark" style={{ color: '#405fff', marginRight: '0.75rem' }}></i>
          นิยายที่ฉันติดตาม
        </h1>
        <div style={{ textAlign: 'center', padding: '4rem', opacity: 0.5 }}>
          <i className="fa-solid fa-bookmark" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}></i>
          <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>ยังไม่มีนิยายที่ติดตาม</div>
          <div style={{ fontSize: '0.9rem' }}>กรุณาเข้าสู่ระบบเพื่อติดตามนิยาย</div>
        </div>
      </div>
    </div>
  );
}
