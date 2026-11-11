# LNTBOOST WEB DESIGN SYSTEM & UI GUIDELINES
> **Single Source of Truth** – Bộ quy chuẩn thiết kế giao diện, typography, bảng màu, bố cục và linh kiện dùng chung cho toàn bộ dự án website LNTBOOST.
> 
> *Mọi trang và component mới hoặc khi tái cấu trúc (refactor) đều phải tuân thủ nghiêm ngặt các quy tắc trong tài liệu này để đảm bảo tính đồng bộ, chuyên nghiệp chuẩn Enterprise SaaS quốc tế.*

---

## MỤC LỤC
1. [Triết lý Thiết kế (Design Philosophy)](#1-triết-lý-thiết-kế-design-philosophy)
2. [Hệ thống Typography & Font chữ](#2-hệ-thống-typography--font-chữ)
3. [Hệ thống Bảng màu (Color Palette & Tokens)](#3-hệ-thống-bảng-màu-color-palette--tokens)
4. [Hệ thống Bố cục & Lưới (Layout & Spacing Grid)](#4-hệ-thống-bố-cục--lưới-layout--spacing-grid)
5. [Quy chuẩn Linh kiện (UI Components Specification)](#5-quy-chuẩn-linh-kiện-ui-components-specification)
   - 5.1. Capsule Badge / Tagline Pill
   - 5.2. Nút bấm CTA (Button Standards)
   - 5.3. Thẻ nội dung (Cards & Surfaces)
   - 5.4. Floating Tech Nodes & Điểm nhấn kiến trúc
   - 5.5. Modal & Overlay tương tác
6. [Quy tắc Viết mã cho Lập trình viên & AI Agents](#6-quy-tắc-viết-mã-cho-lập-trình-viên--ai-agents)

---

## 1. TRIẾT LÝ THIẾT KẾ (DESIGN PHILOSOPHY)

Website LNTBOOST được định vị là **Nền tảng Quản trị Doanh nghiệp & Chuyển đổi số Cao cấp (Tier-1 Enterprise Cloud ERP & MES)**. Thiết kế học hỏi từ các tiêu chuẩn của các hãng công nghệ đầu ngành thế giới (như Aptean, SAP, Workday, Linear, Stripe):
- **Khúc chiết & Minh bạch (Clarity & Precision):** Chữ viết rõ ràng, phân cấp thị giác mạch lạc, khoảng cách dòng thoáng đãng, không gây rối mắt.
- **Màu sắc đĩnh đạc (Executive Elegance):** Màu nền sạch sẽ, độ tương phản cao, dùng màu than chì off-black (`#121212`) cho tiêu đề thay cho đen tuyền gắt, kết hợp sắc xanh nhận diện thương hiệu LNT (`#15194f` và `#087bc1`).
- **Cân bằng thị giác (Visual Balance):** Tuyệt đối không để bố cục bị lệch (bên thừa chữ bên trơ trọi hình ảnh; thẻ con lẻ hàng rơi rớt vô lý).
- **Trải nghiệm mượt mà (Smooth Micro-interactions):** Chuyển động nhẹ nhàng (`0.2s - 0.3s`), hover tinh tế, không làm giật chiều cao trang (layout shift).

---

## 2. HỆ THỐNG TYPOGRAPHY & FONT CHỮ

### 2.1. Phông chữ chuẩn duy nhất: `Inter`
Toàn bộ dự án thống nhất dùng một font family duy nhất: **`Inter`** (hỗ trợ tiếng Việt hoàn hảo, tỷ lệ x-height tối ưu cho giao diện số và tài liệu doanh nghiệp).

- **Khai báo Google Font trong `index.html`:**
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  ```

- **Khai báo CSS Global (`src/index.css`):**
  ```css
  @theme {
    --font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-heading: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  ```

### 2.2. Thước đo Phân cấp Chữ (Typographic Hierarchy)

| Cấp bậc | Ý nghĩa sử dụng | Kích thước (Tailwind) | Trọng lượng | Line Height & Tracking | Màu sắc chuẩn |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (H1)** | Tiêu đề chính trang / Hero | `text-3xl sm:text-4xl lg:text-5xl` *(max `52px`)* | `font-bold` (700) | `leading-[1.18] tracking-tight` | `#121212` hoặc `#15194f` |
| **Section Title (H2)** | Tiêu đề khối / phân đoạn | `text-2xl sm:text-3xl lg:text-4xl` *(36-40px)* | `font-bold` (700) | `leading-snug tracking-tight` | `#121212` hoặc `#15194f` |
| **Item / Card Title (H3)** | Tiêu đề thẻ, popup, tính năng | `text-lg sm:text-xl lg:text-2xl` | `font-bold` (600-700) | `leading-snug tracking-tight` | `#15194f` |
| **Sub-item Title (H4)** | Tiêu đề bước quy trình, tab | `text-sm sm:text-base` | `font-semibold` (600) | `leading-normal` | `#15194f` |
| **Lead / Tagline Paragraph** | Đoạn giới thiệu đầu mục | `text-base sm:text-lg` | `font-normal` hoặc `font-medium` | `leading-relaxed` (1.6 - 1.7) | `text-slate-600` (`#475569`) |
| **Body Standard Text** | Nội dung đoạn văn thường | `text-sm sm:text-[15px]` | `font-normal` (400) | `leading-relaxed` | `text-slate-600` (`#475569`) |
| **Micro Text / Caption** | Chú thích số liệu, thông số | `text-xs sm:text-[13px]` | `font-medium` (500) | `leading-normal` | `text-slate-500` |
| **Pill / Capsule Label** | Nhãn danh mục, trạng thái | `text-xs` | `font-bold` (700) | `tracking-[0.2em] uppercase` | `#087bc1` |

> [!IMPORTANT]
> **Quy tắc tiêu đề H1/H2 nhiều dòng:**
> Tuyệt đối không chia tiêu đề chính thành hai thẻ `<motion.h1>` rời nhau rồi dùng khoảng cách `space-y-4` lớn làm gãy dòng vô lý. Phải gộp chung trong 1 thẻ `<h1>` duy nhất với `leading-[1.18]` hoặc `leading-[1.2]` và ngắt dòng bằng `<span className="block mt-1">`.

---

## 3. HỆ THỐNG BẢNG MÀU (COLOR PALETTE & TOKENS)

> [!IMPORTANT]
> **Quy tắc bất biến: Luôn dùng biến Token của Tailwind, tuyệt đối KHÔNG hardcode mã màu hex (như `text-[#121212]`, `text-[#087bc1]`, `text-[#15194f]`) vào các file component.**
> Toàn bộ các màu đã được khai báo tập trung trong `@theme` tại `src/index.css`. Khi cần đổi màu thương hiệu hoặc màu tiêu đề cho toàn bộ dự án, bạn **chỉ cần sửa đúng 1 chỗ trong `@theme`**, mọi trang web sẽ tự động đổi theo!

### 3.1. Các Class Màu Semantic dùng trong Tailwind:

| Biến Token trong `@theme` | Mã màu Hex | Class Tailwind tự sinh | Ý nghĩa sử dụng |
| :--- | :--- | :--- | :--- |
| `--color-title` | `#121212` | `text-title`, `bg-title`, `border-title` | Tiêu đề chính H1/H2, Nút CTA Dark Pill Aptean |
| `--color-body` | `#475569` | `text-body` | Đoạn văn mô tả (Lead / Body), dịu mắt |
| `--color-lnt-navy` | `#15194f` | `text-lnt-navy`, `bg-lnt-navy`, `border-lnt-navy` | Tiêu đề khối giải pháp H3, nền thanh điều hướng |
| `--color-lnt-blue` | `#087bc1` | `text-lnt-blue`, `bg-lnt-blue`, `border-lnt-blue` | Nút hành động chính, icon, viền hover, tag badge |
| `--color-lnt-cyan` | `#38bde8` | `text-lnt-cyan`, `bg-lnt-cyan` | Điểm nhấn highlight, vạch gradient công nghệ |
| `--color-lnt-blue-dark` | `#163d91` | `text-lnt-blue-dark`, `bg-lnt-blue-dark` | Nền gradient sâu |

### 3.2. Màu Chữ & Độ tương phản (Executive Contrast)
- **Tiêu đề chính:** `#121212` (Off-black chuẩn mực cao cấp).
- **Chữ nội dung (Body):** `#475569` (Slate 600) – Đọc êm ái trên nền trắng, không gây lóa mắt.
- **Chữ phụ (Secondary / Muted):** `#64748b` (Slate 500) hoặc `#94a3b8` (Slate 400).
- **Chữ nghịch màu trên nền tối:** `#ffffff` hoặc `#f8fafc`.

### 3.3. Màu Nền & Bề mặt (Surfaces)
- **Nền trang chính:** `#ffffff`
- **Nền Section luân phiên (Zebra Layout):** `bg-slate-50/50` hoặc `bg-[#f8fafc]` (tạo nhịp phân tách trực quan giữa các phần mà không cần đường kẻ dày).
- **Nền Card thông tin:** `#ffffff` với viền `border border-slate-200/90` hoặc `border-slate-100`.
- **Nền Tech Banner / Architecture:** Gradient từ `#15194f` qua `#0f2b66` sang `#087bc1/20`.

---

## 4. HỆ THỐNG BỐ CỤC & LƯỚI (LAYOUT & SPACING GRID)

### 4.1. Chiều rộng Container chuẩn
```html
<div class="mx-auto max-w-7xl px-6 lg:px-8">
  <!-- Toàn bộ nội dung trang nằm trong giới hạn này -->
</div>
```

### 4.2. Khoảng cách Section (Vertical Rhythm) & Chuẩn hóa Top Header Clearance

> [!IMPORTANT]
> **Quy chuẩn khoảng cách đỉnh trang (Top Clearance tránh dính Navbar):**
> Vì thanh điều hướng `Navbar` ở trạng thái cố định (`fixed inset-x-0 top-0`) có chiều cao là `h-20` (80px), **MỌI Hero Section ở đầu mỗi trang/tab** (Home, Product, Industry...) bắt buộc phải áp dụng chuẩn khoảng cách:
> - **Top Padding bắt buộc:** `pt-28 lg:pt-36` (Mobile: `112px`, Desktop: `144px`).
> - Khoảng cách này đảm bảo trừ đi 80px của Navbar thì phần nội dung (Badge, H1) luôn có khoảng thở thoáng đãng từ 32px đến 64px, tuyệt đối không bị đè hay dính sát vào Header.

- **Section Padding thông thường (Các phần bên dưới):**
  - Desktop: `py-20 lg:py-24` (khoảng cách chuẩn 80px - 96px).
  - Mobile/Tablet: `py-16` (64px).
  - Phân cách giữa các section: `border-b border-slate-100`.
- **Header của Section:**
  - Khoảng cách từ Header xuống nội dung: `mt-8` đến `mt-10`.
  - Giữa Badge và Tiêu đề: `mt-4` đến `mt-5`.
  - Giữa Tiêu đề và Mô tả: `mt-2` đến `mt-3`.

### 4.3. Nguyên tắc Cân bằng Bố cục (Layout Harmony)
- **Nguyên tắc 50/50 có hỗ trợ (Balanced 2-Tier):**
  - Khi một bên là bài viết dài và một bên là hình ảnh đơn độc, không để hình ảnh trơ trọi một mình tạo khoảng trống lớn.
  - *Giải pháp chuẩn:* Tạo bố cục 2 tầng:
    - **Tầng trên (50/50):** Tóm tắt giá trị cốt lõi + Ảnh minh họa tinh gọn.
    - **Tầng dưới (Full-width Grid):** Lưới các thẻ tính năng (2x2, 3 cột hoặc 4 cột) trải đều bên dưới.
- **Nguyên tắc chia lưới đồng đều:**
  - Ưu tiên các số chia hết cho 2 hoặc 3: Lưới 2 cột (`grid-cols-2`), lưới 3 cột (`grid-cols-3`), lưới 4 cột (`grid-cols-4`).
  - Tránh tuyệt đối việc hiển thị 5 thẻ theo kiểu "4 thẻ hàng trên, 1 thẻ rớt xuống hàng dưới đứng lẻ loi". Khi có 5 mục, hãy gom nhóm thành thanh điều hướng hoặc chia 3-2 cân đối.

---

## 5. QUY CHUẨN LINH KIỆN (UI COMPONENTS SPECIFICATION)

### 5.1. Capsule Badge / Tagline Pill
Dùng ở đầu mỗi Section hoặc đầu Hero để định danh giải pháp:
```tsx
<div className="inline-flex items-center gap-2 rounded-full border border-[#087bc1]/30 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#087bc1] shadow-xs">
  <Icon size={13} className="text-[#087bc1]" />
  <span>LNTBOOST CLOUD ERP</span>
</div>
```

### 5.2. Nút bấm CTA (Button Standards)

#### A. Nút Nền Tối Phong cách Aptean (Executive Dark Pill - Ưu tiên hàng đầu)
Nút bo tròn viên thuốc (`rounded-full`), màu than chì cao cấp `#121212`, chữ trắng, có hiệu ứng mũi tên trượt:
```tsx
<button className="group inline-flex items-center gap-2.5 rounded-full bg-[#121212] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-black transition-all">
  <span>Request a Demo</span>
  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
</button>
```

#### B. Nút Xanh Thương hiệu LNT (Primary Brand Button)
Dùng cho các hành động tương tác chính trong ứng dụng hoặc form tư vấn:
```tsx
<button className="inline-flex items-center gap-2 rounded-xl bg-[#087bc1] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0769a6] transition-all">
  <span>Khám phá Giải pháp</span>
  <ChevronRight size={16} />
</button>
```

#### C. Nút Outline / Nền kính (Secondary Button)
Dùng làm nút phụ đi kèm nút Primary:
```tsx
<button className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all">
  <span>Xem Tài liệu Kỹ thuật</span>
</button>
```

### 5.3. Thẻ Nội dung (Cards & Surfaces)
- **Thẻ Section Card chuẩn:**
  ```tsx
  <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[#087bc1]/40 hover:shadow-md transition-all duration-300">
    <div className="flex items-center gap-3 mb-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-[#087bc1]">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-bold text-[#15194f] tracking-tight">{title}</h3>
    </div>
    <p className="text-sm leading-relaxed text-slate-600">{description}</p>
  </div>
  ```

### 5.4. Floating Tech Nodes (Điểm nhấn Kiến trúc không viền thô)
Dùng khi thể hiện các module cốt lõi liên kết với nhau (ví dụ: AI Suite, Smart Planner, Smart Factory):
- Không dùng hộp chữ nhật bo viền đóng khung thô cứng.
- Sử dụng các node chữ thanh lịch với chấm đèn LED phát sáng trắng/cyan:
  ```tsx
  <div className="flex items-center gap-2.5 py-1.5 px-3 rounded-full bg-white/10 backdrop-blur-xs">
    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bde8]" />
    <span className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">{nodeName}</span>
  </div>
  ```

### 5.5. Modal & Overlay Tương tác
- Khi mở modal chi tiết (như Explore Key Capabilities):
  - Phủ mờ nền với `backdrop-blur-sm bg-slate-900/40`.
  - Không được làm dịch chuyển kích thước layout chính (Zero layout shift).
  - Animation mở: `animate-scaleUp` (`opacity 0 -> 1`, `scale 0.96 -> 1`).

---

## 6. QUY TẮC VIẾT MÃ CHO LẬP TRÌNH VIÊN & AI AGENTS

1. **Tuyệt đối không dùng mã màu tùy tiện ngoài hệ thống:**
   - Hạn chế tự chế các màu như `text-gray-900`, `text-black`, `text-blue-500` lộn xộn.
   - Luôn dùng: `#121212` cho tiêu đề đen, `#15194f` cho navy, `#087bc1` cho xanh thương hiệu, và `text-slate-600` cho mô tả.
2. **Không tự ý nhúng phông chữ thứ ba:**
   - Toàn bộ trang web chỉ dùng font **`Inter`**. Mọi heading và body đều thừa hưởng từ `font-sans` / `font-heading`.
3. **Responsive Mobile First:**
   - Mọi tiêu đề H1/H2 đều phải có 3 nấc kích thước: `text-2xl sm:text-3xl lg:text-4xl` hoặc `text-3xl sm:text-4xl lg:text-5xl`.
4. **Không tách rời Heading thành nhiều motion tag độc lập:**
   - Để tránh việc khoảng trống giữa 2 dòng bị giãn ra quá xa trên các độ phân giải màn hình khác nhau.
5. **Giữ gìn bản quyền và nhận diện LNT Soft:**
   - Luôn giữ Logo, dải màu Cyan/Navy, và các thông điệp giá trị cốt lõi nhất quán từ Header, Drawer, Body cho đến Footer.

