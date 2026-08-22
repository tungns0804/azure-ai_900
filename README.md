# AI-900 Practice — Angular

Bản Angular của `ai900-practice.html` (file HTML 1 MB ban đầu). Giữ nguyên **toàn bộ** tính năng,
giao diện và định dạng dữ liệu lưu trữ của bản gốc.

**Bản chạy trực tiếp:** https://tungns0804.github.io/azure-ai_900/

## Chạy

```bash
npm install
npm start            # http://localhost:4200
npm run build        # bản production -> dist/ai900-app
```

## Hai màn hình

| Màn hình | Nội dung |
|---|---|
| **Luyện thi** | Toàn bộ chức năng cũ: làm bài, chấm điểm, ⭐, lịch sử, xuất/nhập JSON… |
| **Học kiến thức** | 5 phần thi × 51 chủ đề theo đề cương chính thức, mỗi chủ đề có mô tả tổng quan + link tài liệu Microsoft, và nút **Thi phần này / Thi chủ đề này** |

Chuyển màn hình bằng hai tab ở thanh trên. Ngoài ra có ô **Phạm vi ôn tập** ở thanh bên để lọc câu
hỏi theo phần thi hoặc theo chủ đề — bộ lọc này kết hợp được với các chế độ sẵn có
(Yêu thích / Cần ôn lại / Chưa làm).

## Phân loại câu hỏi

115 câu đã được gán `domain` (d1–d5) và `topic` theo đề cương **Skills measured** chính thức
(bản 02/05/2025). Phân loại làm thủ công từng câu, không đoán bằng từ khoá. Phân bố thực tế:

| Phần thi | Tỉ trọng đề thi | Số câu trong bank |
|---|---|---|
| d1 — Workload AI & AI có trách nhiệm | 15–20% | 35 (30.4%) |
| d2 — Machine Learning | 15–20% | 47 (40.9%) |
| d3 — Computer Vision | 15–20% | 24 (20.9%) |
| d4 — NLP | 15–20% | 9 (7.8%) |
| d5 — Generative AI | 20–25% | **0** |

Ngân hàng câu hỏi này ra đời trước bản cập nhật đề thi 02/05/2025 nên **không có câu nào cho phần
Generative AI** (phần chiếm tỉ trọng lớn nhất) và rất ít câu NLP. Màn hình Học kiến thức hiển thị
cảnh báo này ngay trên phần d5 để bạn biết phải tự học qua link tài liệu.

## Cấu trúc

```
public/ai900-data.json     115 câu hỏi (kèm ảnh slide base64, có domain + topic) — tải lúc khởi động
src/app/core/categories.ts danh mục 5 phần thi / 51 chủ đề + mô tả + link Microsoft Learn
src/fonts.css              @font-face nhúng base64 (InterVar, PlexMono) — copy nguyên từ bản gốc
src/base.css               CSS gốc + lớp tinh chỉnh: thanh cuộn, chiều sâu, chuyển động
src/app/core/
  models.ts                kiểu dữ liệu câu hỏi, tiến độ, phiên, lịch sử
  text.util.ts             flow() nối dòng ngắt từ PDF, shuffle(), fmtDate()
  storage.service.ts       lưu trữ 3 tầng: window.storage (Claude) -> localStorage -> bộ nhớ tạm
  quiz.service.ts          toàn bộ trạng thái + chấm điểm + phiên + xuất/nhập (signals)
  translate.service.ts     dịch tiếng Việt qua Anthropic API
  toast.service.ts         thông báo nổi
src/app/components/
  sidebar.ts               phạm vi ôn tập, chế độ, tuỳ chọn, lưới câu hỏi, lịch sử, nút dữ liệu
  question-card.ts         thẻ câu hỏi cho cả 5 loại + giải thích + ảnh slide
  study.ts                 màn hình Học kiến thức
  vi-box.ts                khối bản dịch tiếng Việt
src/app/app.ts / app.html  khung ứng dụng: thanh trên, thanh dưới, hộp thoại, phím tắt
```

## Tương thích dữ liệu

Khoá lưu trữ giữ nguyên `ai900:data:v1` và `ai900:vi:v1`, cùng cấu trúc với bản HTML — tiến độ
đang có trên trình duyệt vẫn dùng được, và file **Xuất JSON** của hai bản thay thế được cho nhau.

## Lưu ý về tính năng dịch tiếng Việt

Nút **VI** gọi thẳng `https://api.anthropic.com/v1/messages` từ trình duyệt, y hệt bản HTML gốc —
nên nó chỉ chạy được khi trang được mở trong giao diện Claude.ai (nơi request được proxy sẵn).
Chạy ở localhost sẽ bị CORS chặn và ứng dụng hiển thị đúng thông báo lỗi như bản gốc.

Muốn dùng ở môi trường khác thì trỏ `VI_API.endpoint` trong
[`src/app/core/translate.service.ts`](src/app/core/translate.service.ts) sang proxy backend của bạn
(nơi giữ API key). **Đừng** đặt API key trong mã chạy ở trình duyệt.

## Triển khai

Mỗi lần đẩy lên nhánh `main`, workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
sẽ build bản production với `--base-href /azure-ai_900/` rồi đẩy thư mục `dist/ai900-app/browser`
sang nhánh `gh-pages` — đây là nhánh GitHub Pages đang phục vụ. Không cần thao tác tay.
