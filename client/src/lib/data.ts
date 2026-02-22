// NoveLand - Thai Novel Reading Website
// Design: Dark Cinematic Novel Platform
// Primary: #405fff, Background: #0e0e0e, Font: Kanit/Sarabun/Sriracha

export interface Novel {
  id: number;
  title: string;
  author: string;
  cover: string;
  category: string;
  tags: string[];
  views: number;
  chapters: number;
  latestChapter: number;
  latestChapterTitle: string;
  description: string;
  status: 'ongoing' | 'completed';
  rating: number;
  isPremium?: boolean;
  updatedAt: string;
}

export interface Chapter {
  id: number;
  novelId: number;
  number: number;
  title: string;
  content: string;
  publishedAt: string;
  isPremium: boolean;
  price?: number;
}

export const categories = [
  { id: 1, name: 'แฟนตาซี', slug: 'fantasy', icon: '⚔️', color: '#7c3aed' },
  { id: 2, name: 'โรแมนติก', slug: 'romance', icon: '💕', color: '#ec4899' },
  { id: 3, name: 'แอคชั่น', slug: 'action', icon: '🔥', color: '#ef4444' },
  { id: 4, name: 'สยองขวัญ', slug: 'horror', icon: '👻', color: '#6b7280' },
  { id: 5, name: 'ชีวิต', slug: 'slice-of-life', icon: '🌸', color: '#10b981' },
  { id: 6, name: 'ลึกลับ', slug: 'mystery', icon: '🔍', color: '#f59e0b' },
  { id: 7, name: 'วิทยาศาสตร์', slug: 'sci-fi', icon: '🚀', color: '#3b82f6' },
  { id: 8, name: 'ประวัติศาสตร์', slug: 'historical', icon: '🏯', color: '#92400e' },
];

export const novels: Novel[] = [
  {
    id: 1,
    title: 'ราชันย์แห่งความมืด',
    author: 'นักเขียนนิรนาม',
    cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&h=400&fit=crop',
    category: 'แฟนตาซี',
    tags: ['แฟนตาซี', 'แอคชั่น', 'ผจญภัย'],
    views: 1250000,
    chapters: 245,
    latestChapter: 245,
    latestChapterTitle: 'การตัดสินครั้งสุดท้าย',
    description: 'เรื่องราวของเจ้าชายผู้ถูกสาปให้กลายเป็นราชันย์แห่งความมืด ต้องต่อสู้กับโชคชะตาและค้นหาความจริงที่ซ่อนอยู่ในอาณาจักรโบราณ ท่ามกลางการสมคบคิดของเหล่าเทพและปีศาจ',
    status: 'ongoing',
    rating: 4.8,
    isPremium: false,
    updatedAt: '2026-02-22',
  },
  {
    id: 2,
    title: 'หัวใจใต้แสงจันทร์',
    author: 'กุลสตรีนักเขียน',
    cover: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=400&fit=crop',
    category: 'โรแมนติก',
    tags: ['โรแมนติก', 'ชีวิต', 'หวาน'],
    views: 980000,
    chapters: 180,
    latestChapter: 180,
    latestChapterTitle: 'คืนที่ดาวตก',
    description: 'ความรักที่ผิดเวลาของสองหัวใจที่พบกันในคืนที่พระจันทร์เต็มดวง เรื่องราวที่จะทำให้คุณหัวเราะและน้ำตาไหลไปพร้อมกัน',
    status: 'completed',
    rating: 4.9,
    isPremium: false,
    updatedAt: '2026-02-20',
  },
  {
    id: 3,
    title: 'นักสืบเงา',
    author: 'มือปืนนักเขียน',
    cover: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=400&fit=crop',
    category: 'ลึกลับ',
    tags: ['ลึกลับ', 'ระทึก', 'สืบสวน'],
    views: 750000,
    chapters: 120,
    latestChapter: 120,
    latestChapterTitle: 'ปริศนาสุดท้าย',
    description: 'นักสืบผู้มีพลังพิเศษในการมองเห็นเงาของความจริง ต้องไขปริศนาการฆาตกรรมที่เชื่อมโยงกับอดีตอันมืดหม่นของตัวเอง',
    status: 'ongoing',
    rating: 4.7,
    isPremium: true,
    updatedAt: '2026-02-21',
  },
  {
    id: 4,
    title: 'ดาบแห่งพระอาทิตย์',
    author: 'นักรบนักเขียน',
    cover: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=400&fit=crop',
    category: 'แฟนตาซี',
    tags: ['แฟนตาซี', 'แอคชั่น', 'ดาบ'],
    views: 1100000,
    chapters: 300,
    latestChapter: 300,
    latestChapterTitle: 'รุ่งอรุณแห่งยุคใหม่',
    description: 'นักรบหนุ่มที่ได้รับดาบศักดิ์สิทธิ์จากพระอาทิตย์ต้องเดินทางข้ามโลกเพื่อปกป้องอาณาจักรจากกองทัพแห่งความมืด',
    status: 'completed',
    rating: 4.6,
    isPremium: false,
    updatedAt: '2026-02-15',
  },
  {
    id: 5,
    title: 'เมืองแห่งฝัน',
    author: 'นักฝันนักเขียน',
    cover: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=400&fit=crop',
    category: 'วิทยาศาสตร์',
    tags: ['ไซไฟ', 'ดิสโทเปีย', 'ผจญภัย'],
    views: 620000,
    chapters: 95,
    latestChapter: 95,
    latestChapterTitle: 'ความจริงที่ซ่อนอยู่',
    description: 'ในโลกอนาคตที่มนุษย์อาศัยอยู่ในเมืองเสมือนจริง เด็กสาวคนหนึ่งค้นพบว่าความฝันที่เธอเห็นทุกคืนคือความจริงที่ถูกซ่อนไว้',
    status: 'ongoing',
    rating: 4.5,
    isPremium: true,
    updatedAt: '2026-02-22',
  },
  {
    id: 6,
    title: 'รักข้ามภพ',
    author: 'นักเขียนโรแมนติก',
    cover: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=300&h=400&fit=crop',
    category: 'โรแมนติก',
    tags: ['โรแมนติก', 'ย้อนยุค', 'ชะตากรรม'],
    views: 890000,
    chapters: 210,
    latestChapter: 210,
    latestChapterTitle: 'สุดท้ายแห่งชีวิต',
    description: 'ความรักที่ข้ามผ่านกาลเวลาและภพชาติ เรื่องราวของสองวิญญาณที่ถูกกำหนดให้พบกันในทุกชาติ แต่ต้องเผชิญกับโชคชะตาที่โหดร้าย',
    status: 'completed',
    rating: 4.8,
    isPremium: false,
    updatedAt: '2026-02-18',
  },
  {
    id: 7,
    title: 'ปีศาจในเมือง',
    author: 'นักเขียนสยอง',
    cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&h=400&fit=crop&sat=-100',
    category: 'สยองขวัญ',
    tags: ['สยองขวัญ', 'ระทึก', 'เหนือธรรมชาติ'],
    views: 540000,
    chapters: 75,
    latestChapter: 75,
    latestChapterTitle: 'คืนสุดท้าย',
    description: 'เมื่อปีศาจโบราณตื่นขึ้นในเมืองใหญ่ นักสืบหนุ่มต้องต่อสู้กับสิ่งที่มองไม่เห็นเพื่อปกป้องผู้คนที่เขารัก',
    status: 'ongoing',
    rating: 4.4,
    isPremium: false,
    updatedAt: '2026-02-21',
  },
  {
    id: 8,
    title: 'จักรพรรดิ์แห่งทะเลทราย',
    author: 'นักเขียนประวัติ',
    cover: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=300&h=400&fit=crop',
    category: 'ประวัติศาสตร์',
    tags: ['ประวัติศาสตร์', 'แฟนตาซี', 'สงคราม'],
    views: 720000,
    chapters: 160,
    latestChapter: 160,
    latestChapterTitle: 'จักรวรรดิ์ใหม่',
    description: 'เรื่องราวของจักรพรรดิ์หนุ่มที่ต้องรวบรวมอาณาจักรที่แตกแยก ต่อสู้กับศัตรูทั้งภายในและภายนอก เพื่อสร้างจักรวรรดิ์ที่ยิ่งใหญ่ที่สุดในประวัติศาสตร์',
    status: 'ongoing',
    rating: 4.7,
    isPremium: true,
    updatedAt: '2026-02-20',
  },
  {
    id: 9,
    title: 'สาวน้อยกับมังกร',
    author: 'นักเขียนเด็ก',
    cover: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=300&h=400&fit=crop',
    category: 'แฟนตาซี',
    tags: ['แฟนตาซี', 'น่ารัก', 'ผจญภัย'],
    views: 430000,
    chapters: 88,
    latestChapter: 88,
    latestChapterTitle: 'มิตรภาพนิรันดร์',
    description: 'เรื่องราวอบอุ่นหัวใจของเด็กสาวผู้กล้าหาญที่ผูกมิตรกับมังกรน้อยที่ถูกทอดทิ้ง ทั้งคู่ต้องช่วยกันปกป้องป่าศักดิ์สิทธิ์จากผู้ที่ต้องการทำลายมัน',
    status: 'ongoing',
    rating: 4.6,
    isPremium: false,
    updatedAt: '2026-02-19',
  },
  {
    id: 10,
    title: 'โลกคู่ขนาน',
    author: 'นักเขียนไซไฟ',
    cover: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=300&h=400&fit=crop',
    category: 'วิทยาศาสตร์',
    tags: ['ไซไฟ', 'มิติ', 'ผจญภัย'],
    views: 580000,
    chapters: 130,
    latestChapter: 130,
    latestChapterTitle: 'จุดบรรจบ',
    description: 'นักฟิสิกส์หนุ่มค้นพบประตูสู่โลกคู่ขนานที่ทุกอย่างเหมือนกันแต่ต่างกันอย่างสิ้นเชิง เขาต้องเลือกระหว่างสองโลกก่อนที่ทั้งสองจะพังทลาย',
    status: 'ongoing',
    rating: 4.5,
    isPremium: false,
    updatedAt: '2026-02-22',
  },
  {
    id: 11,
    title: 'เพลงรักในสายลม',
    author: 'นักเขียนดนตรี',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=400&fit=crop',
    category: 'โรแมนติก',
    tags: ['โรแมนติก', 'ดนตรี', 'ชีวิต'],
    views: 670000,
    chapters: 145,
    latestChapter: 145,
    latestChapterTitle: 'บทเพลงสุดท้าย',
    description: 'นักดนตรีหนุ่มที่สูญเสียความสามารถในการได้ยินพบรักกับนักร้องสาวที่ช่วยให้เขาค้นพบดนตรีในแบบใหม่',
    status: 'completed',
    rating: 4.9,
    isPremium: false,
    updatedAt: '2026-02-10',
  },
  {
    id: 12,
    title: 'ราชินีแห่งน้ำแข็ง',
    author: 'นักเขียนหนาว',
    cover: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=300&h=400&fit=crop',
    category: 'แฟนตาซี',
    tags: ['แฟนตาซี', 'โรแมนติก', 'เวทมนตร์'],
    views: 820000,
    chapters: 190,
    latestChapter: 190,
    latestChapterTitle: 'ละลายใจ',
    description: 'ราชินีผู้มีหัวใจเย็นชาเหมือนน้ำแข็งต้องเผชิญกับนักรบหนุ่มที่เป็นคนเดียวที่สามารถทำให้หัวใจเธอละลายได้',
    status: 'ongoing',
    rating: 4.7,
    isPremium: true,
    updatedAt: '2026-02-22',
  },
];

export const chapters: Chapter[] = [
  {
    id: 1,
    novelId: 1,
    number: 1,
    title: 'จุดเริ่มต้นแห่งโชคชะตา',
    content: `ในคืนที่ดาวตกพาดผ่านท้องฟ้า เจ้าชายอาร์เธอร์ยืนอยู่บนยอดหอคอยสูง มองดูอาณาจักรที่เขาจะต้องปกครองในอนาคต

แต่เขาไม่รู้ว่าในคืนนั้น ชะตากรรมของเขากำลังจะเปลี่ยนแปลงไปตลอดกาล

"เจ้าชาย" เสียงของอัศวินผู้ซื่อสัตย์ดังขึ้นจากเบื้องหลัง "มีข่าวจากชายแดนทางเหนือ"

อาร์เธอร์หันมามองโดยไม่แสดงอารมณ์ใดๆ บนใบหน้าอันหล่อเหลาของเขา "ว่าอย่างไร?"

"กองทัพแห่งความมืดกำลังเคลื่อนพล พวกเขาข้ามพรมแดนมาแล้ว"

เขาหายใจลึกๆ แล้วมองขึ้นไปบนท้องฟ้า ดาวตกดวงสุดท้ายกำลังจะลับหายไปในขอบฟ้า

"เตรียมกองทัพ" เขาพูดด้วยน้ำเสียงเย็นชา "เราจะออกรบในรุ่งเช้า"

อัศวินก้มหัวและถอยออกไป ทิ้งให้อาร์เธอร์อยู่กับความคิดของตัวเองในคืนที่เงียบสงัด

เขาไม่รู้ว่าการรบครั้งนี้จะเปลี่ยนชีวิตเขาไปตลอดกาล และเขาจะต้องเผชิญกับสิ่งที่น่ากลัวกว่าศัตรูใดๆ ที่เขาเคยพบมา

นั่นคือความจริงเกี่ยวกับตัวเขาเอง`,
    publishedAt: '2025-01-01',
    isPremium: false,
  },
  {
    id: 2,
    novelId: 1,
    number: 2,
    title: 'สมรภูมิแห่งเลือด',
    content: `รุ่งอรุณของวันใหม่นำมาซึ่งเสียงกลองรบที่ดังสนั่นหวั่นไหว

กองทัพของอาร์เธอร์เรียงแถวอยู่บนสันเขา มองลงไปยังกองทัพแห่งความมืดที่เต็มไปหมดในหุบเขาเบื้องล่าง

"พวกมันมากกว่าที่คาดไว้สามเท่า" นายพลผู้ชราพูดด้วยน้ำเสียงกังวล

"ไม่สำคัญ" อาร์เธอร์ตอบ ขณะที่เขาสวมหมวกเกราะเข้ากับหัว "เราต้องปกป้องอาณาจักร"

เขาชักดาบออกจากฝัก แสงอาทิตย์สะท้อนบนใบดาบที่เปล่งประกาย

"เพื่ออาณาจักร!" เขาตะโกน

"เพื่ออาณาจักร!" เสียงตอบสนองดังกึกก้องจากทหารหลายพันคน

และแล้วการรบก็เริ่มต้นขึ้น`,
    publishedAt: '2025-01-03',
    isPremium: false,
  },
  {
    id: 3,
    novelId: 1,
    number: 3,
    title: 'ความลับแห่งดาบ',
    content: `หลังจากการรบที่ดุเดือด อาร์เธอร์พบว่าตัวเองยืนอยู่กลางสมรภูมิที่เต็มไปด้วยซากปรักหักพัง

แต่สิ่งที่น่าแปลกใจที่สุดคือดาบของเขา มันเริ่มเปล่งแสงสีน้ำเงินที่ไม่เคยเห็นมาก่อน

"ดาบนี้..." เขาพูดกับตัวเอง

เสียงหนึ่งดังขึ้นในหัวของเขา เสียงที่ไม่ใช่ของเขา

"ท่านคือผู้ที่ถูกเลือก เจ้าชายอาร์เธอร์"

เขาหันมองรอบๆ แต่ไม่มีใครอยู่ใกล้ๆ

"ใคร? ใครพูด?"

"ฉันคือวิญญาณของดาบ ฉันรอคอยท่านมาหลายร้อยปีแล้ว"

อาร์เธอร์รู้สึกว่าโลกของเขากำลังจะพลิกคว่ำ...`,
    publishedAt: '2025-01-05',
    isPremium: false,
  },
  {
    id: 4,
    novelId: 1,
    number: 4,
    title: 'พันธมิตรที่ไม่คาดคิด',
    content: `ในคืนถัดมา อาร์เธอร์ได้พบกับผู้หญิงลึกลับที่อ้างว่าตัวเองเป็นสายลับจากอาณาจักรศัตรู

แต่เธอมาพร้อมกับข้อมูลที่อาจเปลี่ยนแปลงทุกอย่าง...`,
    publishedAt: '2025-01-07',
    isPremium: true,
    price: 5,
  },
  {
    id: 5,
    novelId: 1,
    number: 5,
    title: 'การทรยศ',
    content: `ความจริงที่น่าเจ็บปวดที่สุดในชีวิตของอาร์เธอร์กำลังจะถูกเปิดเผย...`,
    publishedAt: '2025-01-10',
    isPremium: true,
    price: 5,
  },
];

export function formatViews(views: number): string {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M';
  }
  if (views >= 1000) {
    return (views / 1000).toFixed(0) + 'K';
  }
  return views.toString();
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days === 0) return 'วันนี้';
  if (days === 1) return 'เมื่อวาน';
  if (days < 7) return `${days} วันที่แล้ว`;
  if (days < 30) return `${Math.floor(days / 7)} สัปดาห์ที่แล้ว`;
  return `${Math.floor(days / 30)} เดือนที่แล้ว`;
}
