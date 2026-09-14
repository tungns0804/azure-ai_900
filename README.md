# AI-900 Practice — Angular

Bản Angular của `ai900-practice.html` (file HTML 1 MB ban đầu). Giữ nguyên **toàn bộ** tính năng,
giao diện và định dạng dữ liệu lưu trữ của bản gốc, cộng thêm **99 câu hỏi bổ sung** và **giao diện
song ngữ Việt / Anh**.

**Bản chạy trực tiếp:** https://tungns0804.github.io/azure-ai_900/

## Chạy

```bash
npm install
npm start            # http://localhost:4200
npm run build        # bản production -> dist/ai900-app
npm run build:data   # sinh lại public/ai900-extra.json và public/ai900-vi.json từ data/
```

## Hai màn hình

| Màn hình | Nội dung |
|---|---|
| **Luyện thi** | Toàn bộ chức năng cũ: làm bài, chấm điểm, ⭐, lịch sử, xuất/nhập JSON… |
| **Học kiến thức** | 5 phần thi × 51 chủ đề theo đề cương chính thức, mỗi chủ đề có mô tả tổng quan + link tài liệu Microsoft, và nút **Thi phần này / Thi chủ đề này** |

Chuyển màn hình bằng hai tab ở thanh trên. Trước khi làm bài, màn **Luyện thi** mở **khung thiết lập**
(xem mục *Giao diện* bên dưới) để chọn phạm vi, chế độ, số câu và tuỳ chọn; nút **Thiết lập** trên
dải phạm vi mở lại khung này bất cứ lúc nào. Nút **Thi phần này / Thi chủ đề này** ở màn Học kiến
thức cũng dẫn vào khung thiết lập với phạm vi đã chọn sẵn.

## Câu hỏi bổ sung

Ngân hàng gốc 115 câu trích từ bộ slide PDF ra đời **trước** bản cập nhật đề thi 02/05/2025 nên
không phủ hết đề cương: không có câu nào cho Generative AI (phần nặng nhất, 20–25%), rất ít câu NLP,
và 14 chủ đề trống hoàn toàn. Ứng dụng vì thế biên soạn thêm **99 câu bổ sung** bám sát đề cương
**Skills measured**, mỗi câu đều có phần giải thích và bản dịch tiếng Việt.

### Dấu hiệu nhận biết câu bổ sung

| Nơi hiển thị | Dấu hiệu |
|---|---|
| Số hiệu câu | Câu gốc **1–115**, câu bổ sung **từ 1001 trở lên** |
| Thẻ câu hỏi | Nhãn tím **★ BỔ SUNG** cạnh số câu, viền trái tím, kèm một dòng ghi chú giải thích nguồn gốc |
| Lưới câu hỏi ở thanh bên | Ô viền **nét đứt** màu tím + góc tam giác tím (có mục trong chú thích) |
| Khung thiết lập | Nút phạm vi riêng **★ Câu bổ sung (99)** và **Câu gốc (PDF) (115)** |
| Màn hình Học kiến thức | Nhãn `★n` ở mỗi chủ đề, nhãn `n BỔ SUNG` ở mỗi phần thi, và một hộp tím tổng kết ở đầu trang |
| Dữ liệu | Trường `extra: true`, nằm ở file riêng `public/ai900-extra.json` |

### Phân bố sau khi bổ sung

| Phần thi | Tỉ trọng đề thi | Câu gốc | Bổ sung | Tổng |
|---|---|---|---|---|
| d1 — Workload AI & AI có trách nhiệm | 15–20% | 35 | 17 | 52 |
| d2 — Machine Learning | 15–20% | 47 | 16 | 63 |
| d3 — Computer Vision | 15–20% | 24 | 8 | 32 |
| d4 — NLP | 15–20% | 9 | 26 | 35 |
| d5 — Generative AI | 20–25% | 0 | 32 | 32 |
| **Tổng** | | **115** | **99** | **214** |

Cả 51 chủ đề trong đề cương giờ đều có câu hỏi.

## Đa ngôn ngữ (Việt / Anh)

Có hai công tắc độc lập ở thanh trên:

* **VI / EN** — đổi ngôn ngữ của *toàn bộ giao diện*: nút, nhãn, thông báo, tên chủ đề và mô tả
  trong màn hình Học kiến thức. Lựa chọn được lưu cùng các thiết lập khác.
* **Song ngữ: Bật / Tắt** — hiện bản dịch tiếng Việt của *nội dung câu hỏi* ngay dưới bản tiếng Anh
  (đề thi thật ra đề bằng tiếng Anh nên phần câu hỏi luôn giữ nguyên bản gốc).

Bản dịch tiếng Việt của **cả 214 câu** (câu hỏi, đáp án, các dòng con và phần giải thích) được đóng
gói sẵn trong `public/ai900-vi.json`, nên tính năng chạy **hoàn toàn offline**, không cần mạng và
không cần API key.

> Bản trước gọi thẳng `https://api.anthropic.com/v1/messages` từ trình duyệt nên trên GitHub Pages
> luôn hỏng (CORS + không có API key). Đường gọi API vẫn còn nhưng **mặc định tắt**; ai muốn tự cắm
> proxy backend của mình thì đặt `window.AI900_TRANSLATE_ENDPOINT` trước khi ứng dụng khởi động.
> **Đừng** đặt API key trong mã chạy ở trình duyệt.

## Giao diện

Cùng bảng màu và cách bố trí bộ chọn với ứng dụng `minano_nihongo`.

**Bốn chế độ hiển thị** — nút cuối thanh trên xoay vòng *Tự động → Sáng → Tối → Đèn đêm*:

| Chế độ | Nền |
|---|---|
| Tự động | theo cài đặt sáng/tối của hệ điều hành, đổi theo ngay khi hệ điều hành đổi |
| Sáng | trắng ngà ấm, chữ xanh than |
| Tối | navy gần đen |
| Đèn đêm | giấy ngà, chữ nâu, màu nhấn cam đất — cắt ánh sáng xanh cho lúc học buổi tối |

Bảng màu nằm trong `src/base.css`: sáng/tối khai báo một lần bằng `light-dark()`, đèn đêm là khối
`:root[data-theme="night"]` riêng. Đoạn script nhỏ trong `index.html` áp tông đã lưu trước khi Angular
khởi động nên trang không chớp sai màu.

**Khung thiết lập trước khi làm bài** — mỗi nhóm một hàng, nhãn bên trái:

| Nhóm | Lựa chọn |
|---|---|
| Phạm vi ôn tập | Toàn bộ / ★ Câu bổ sung / Câu gốc (PDF), 5 thẻ phần thi, hoặc một chủ đề trong hộp chọn |
| Chế độ luyện tập | Toàn bộ / Yêu thích / Cần ôn lại / Chưa làm — kèm số câu, chế độ trống bị khoá |
| Số câu | Tất cả / 10 / 20 / 30 / 50 (chỉ hiện mức nhỏ hơn số câu trong phạm vi) |
| Tuỳ chọn | công tắc: trộn câu hỏi, trộn đáp án, tự sang câu sau khi đúng |

Lựa chọn chỉ áp dụng khi bấm **Bắt đầu**; **Quay lại bài đang làm** giữ nguyên lượt cũ. Thứ tự câu của
lượt đang làm được lưu lại, nên tải lại trang không làm đổi bộ câu đã trộn.

## Cấu trúc

```
public/ai900-data.json      115 câu gốc (kèm ảnh slide base64) — KHÔNG chỉnh tay
public/ai900-extra.json     99 câu bổ sung          } sinh ra từ data/, đừng sửa trực tiếp
public/ai900-vi.json        bản dịch tiếng Việt 214 câu }
data/extra-*.mjs            NGUỒN song ngữ của câu bổ sung (Anh + Việt cạnh nhau)
data/vi-original-*.mjs      NGUỒN bản dịch tiếng Việt cho 115 câu gốc
tools/build-data.mjs        kiểm tra tính hợp lệ rồi sinh hai file JSON trong public/
src/app/core/categories.ts  danh mục 5 phần thi / 51 chủ đề + mô tả + link Microsoft Learn
src/app/core/categories.en.ts  bản tiếng Anh của tiêu đề và mô tả chủ đề
src/fonts.css               @font-face nhúng base64 (InterVar, PlexMono) — copy nguyên từ bản gốc
src/base.css                bảng màu 4 chế độ + CSS gốc + khung thiết lập, thanh cuộn, chuyển động
src/app/core/
  i18n.ts                   từ điển [tiếng Việt, tiếng Anh] cho toàn bộ giao diện
  i18n.service.ts           signal ngôn ngữ + hàm t() thay thế {tham số}
  models.ts                 kiểu dữ liệu câu hỏi, tiến độ, phiên, lịch sử
  theme.ts                  chế độ giao diện Tự động / Sáng / Tối / Đèn đêm
  text.util.ts              flow() nối dòng ngắt từ PDF, shuffle(), fmtDate()
  storage.service.ts        lưu trữ 3 tầng: window.storage (Claude) -> localStorage -> bộ nhớ tạm
  quiz.service.ts           toàn bộ trạng thái + chấm điểm + phiên + xuất/nhập (signals)
  translate.service.ts      tra bản dịch kèm sẵn, tuỳ chọn gọi API nếu có endpoint
  toast.service.ts          thông báo nổi
src/app/components/
  setup.ts                  khung thiết lập trước khi làm bài: phạm vi, chế độ, số câu, tuỳ chọn
  sidebar.ts                lưới câu hỏi, lịch sử, nút dữ liệu
  icon.ts                   biểu tượng SVG (nút giao diện, nút Thiết lập)
  question-card.ts          thẻ câu hỏi cho cả 5 loại + giải thích + ảnh slide + nhãn BỔ SUNG
  study.ts                  màn hình Học kiến thức
  vi-box.ts                 khối bản dịch tiếng Việt
src/app/app.ts / app.html   khung ứng dụng: thanh trên, thanh dưới, hộp thoại, phím tắt
```

### Thêm câu hỏi mới

1. Mở một file trong `data/` (hoặc tạo file `data/extra-<tên>.mjs` mới, export default một mảng).
2. Thêm câu hỏi theo mẫu song ngữ: `q/o/e` là tiếng Anh, `vq/vo/ve` là bản dịch tiếng Việt;
   câu dạng bảng dùng `subs` / `vsubs`. `id` phải từ 1001 trở lên và không trùng.
3. Chạy `npm run build:data`. Script kiểm tra id trùng, chủ đề lạ, số đáp án đúng, và số phần tử
   giữa bản Anh với bản Việt — sai ở đâu là dừng và báo rõ, không ghi file hỏng vào `public/`.

## Tương thích dữ liệu

Khoá lưu trữ giữ nguyên `ai900:data:v1` và `ai900:vi:v1`, cùng cấu trúc với bản HTML — tiến độ
đang có trên trình duyệt vẫn dùng được, và file **Xuất JSON** của hai bản thay thế được cho nhau
(phần thiết lập chỉ thêm các trường mới `lang`, `started`, `limit` và danh sách `order`, bản cũ bỏ qua
được). Tiến độ cũ chưa có `started` thì vẫn vào thẳng câu đang làm như trước; `theme` cũ `dark`/`light`
vẫn giữ nguyên.

## Triển khai

Mỗi lần đẩy lên nhánh `main`, workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
sẽ build bản production với `--base-href /azure-ai_900/` rồi đẩy thư mục `dist/ai900-app/browser`
sang nhánh `gh-pages` — đây là nhánh GitHub Pages đang phục vụ. Không cần thao tác tay.
