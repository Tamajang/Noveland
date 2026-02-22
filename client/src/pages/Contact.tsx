// NoveLand Contact Page
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('ส่งข้อความเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็ว');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '40rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>ติดต่อเรา</h1>
        <p style={{ opacity: 0.6, marginBottom: '2rem' }}>มีคำถามหรือข้อเสนอแนะ? ส่งข้อความมาหาเราได้เลย</p>

        <form onSubmit={handleSubmit}>
          {[
            { key: 'name', label: 'ชื่อ', type: 'text', placeholder: 'ชื่อของคุณ' },
            { key: 'email', label: 'อีเมล', type: 'email', placeholder: 'email@example.com' },
            { key: 'subject', label: 'หัวข้อ', type: 'text', placeholder: 'หัวข้อของข้อความ' },
          ].map(field => (
            <div key={field.key} style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '500' }}>{field.label}</label>
              <input
                type={field.type}
                value={(form as any)[field.key]}
                onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                placeholder={field.placeholder}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'var(--secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.75rem',
                  color: 'var(--foreground)',
                  fontFamily: "'Kanit', sans-serif",
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          ))}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '500' }}>ข้อความ</label>
            <textarea
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              placeholder="ข้อความของคุณ..."
              required
              rows={6}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'var(--secondary)',
                border: '1px solid var(--border)',
                borderRadius: '0.75rem',
                color: 'var(--foreground)',
                fontFamily: "'Kanit', sans-serif",
                fontSize: '0.95rem',
                outline: 'none',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '0.75rem',
            background: '#405fff',
            border: 'none',
            borderRadius: '0.75rem',
            color: 'white',
            fontSize: '1rem',
            fontFamily: "'Kanit', sans-serif",
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}>
            <i className="fa-solid fa-paper-plane" style={{ marginRight: '0.5rem' }}></i>
            ส่งข้อความ
          </button>
        </form>
      </div>
    </div>
  );
}
