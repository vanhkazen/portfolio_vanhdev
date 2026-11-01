# VanhCodes - Vanh Love IT

Website hồ sơ cá nhân một trang của **Trần Việt Anh**, giới thiệu thương hiệu VanhCodes, dịch vụ thiết kế website và sản phẩm số, đồng thời cung cấp các liên kết liên hệ và mạng xã hội.

- **Tác giả:** Trần Việt Anh
- **Công nghệ:** HTML5, CSS3 và JavaScript thuần
- **Phông chữ:** Roboto từ Google Fonts (có font dự phòng)

## Repository và Live Demo

- **Source Code Repository:** [github.com/vanhkazen/portfolio_vanhdev](https://github.com/vanhkazen/portfolio_vanhdev)
- **Live Website:** [portfoliovanhdev.vercel.app](https://portfoliovanhdev.vercel.app)

Repository công khai đã được xác minh; nhánh mặc định là `main`. Không tìm thấy URL trong trường homepage của repository và GitHub Pages API không trả về cấu hình Pages.

## Giới thiệu sản phẩm

Đây là website one-page để khách truy cập xem hồ sơ và phần giới thiệu của Trần Việt Anh, liên hệ qua Zalo, sao chép số điện thoại, mở kho source code và truy cập các hồ sơ mạng xã hội. Trang cũng có nút điều khiển phát/tạm dừng nhạc nền.

Các khu vực chính gồm hồ sơ (avatar, khung, huy hiệu xác nhận và giới thiệu), liên hệ Zalo, liên kết kho source code/mạng xã hội và nút nhạc nền.

## Công nghệ sử dụng

- **HTML5:** cấu trúc nội dung và liên kết.
- **CSS3:** bố cục profile, giao diện thích ứng theo kích thước màn hình và trạng thái giảm chuyển động.
- **JavaScript thuần:** sao chép số điện thoại, trạng thái/thông báo điều khiển nhạc và cập nhật năm ở chân trang.
- **Roboto:** tải từ Google Fonts; cần Internet để tải nếu chưa được cache. Khi không tải được, trang dùng Arial hoặc font sans-serif của hệ thống.
- **Tài nguyên ngoài:** Google Fonts. Dự án không sử dụng framework hoặc thư viện JavaScript bên ngoài.

## Cấu trúc thư mục

```text
contact_vanhdev/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── avatar.jpg
    ├── frame.png
    ├── music.mp3
    └── verified.png
```

- `index.html`: nội dung hồ sơ, nút liên hệ, liên kết và phần tử âm thanh.
- `style.css`: giao diện, bố cục responsive và kiểu hiển thị khi giảm chuyển động.
- `script.js`: chức năng sao chép số Zalo, điều khiển nhạc, thông báo trạng thái và năm bản quyền.
- `assets/`: ảnh đại diện, khung avatar, huy hiệu xác nhận và file nhạc nền.

Không có thư mục backup hoặc thư mục minh chứng trong cấu trúc dự án hiện tại.

## Chạy website trên máy tính

### Cách 1: Mở trực tiếp

1. Clone repository hoặc tải source code về máy:

   ```bash
   git clone https://github.com/vanhkazen/portfolio_vanhdev.git
   ```

2. Nếu tải repository dưới dạng file ZIP, hãy giải nén.
3. Mở thư mục dự án.
4. Mở `index.html` bằng trình duyệt.

### Cách 2: VS Code và Live Server

1. Mở thư mục dự án bằng VS Code.
2. Cài extension **Live Server** nếu máy chưa có.
3. Nhấn chuột phải vào `index.html`, sau đó chọn **Open with Live Server**.
4. Mở địa chỉ local mà Live Server hiển thị trong trình duyệt.

Không cần cài Node.js/npm, framework hoặc chạy lệnh build. Cần kết nối Internet để tải Roboto từ Google Fonts; nếu không, trình duyệt dùng font dự phòng.

## Hướng dẫn kiểm tra sản phẩm

Các mục dưới đây là checklist để người đánh giá tự kiểm tra trên trình duyệt; đây không phải xác nhận rằng các liên kết bên ngoài hoặc việc phát nhạc đã được kiểm thử trên mọi thiết bị.

### A. Giao diện hồ sơ

- [ ] Avatar hiển thị đúng.
- [ ] Khung avatar (`frame.png`) hiển thị đúng.
- [ ] Huy hiệu xác nhận (`verified.png`) hiển thị cạnh tên.
- [ ] Tên **Trần Việt Anh** và thương hiệu **VanhCodes · Vanh Love IT** hiển thị đúng.
- [ ] Đọc phần giới thiệu và kiểm tra nội dung không bị cắt hoặc tràn khỏi thẻ hồ sơ.

### B. Liên hệ Zalo

- [ ] Kiểm tra số **0388838940** hiển thị trên nút liên hệ.
- [ ] Nhấn nút Zalo và xác nhận trang mở đúng địa chỉ [zalo.me/0388838940](https://zalo.me/0388838940).
- [ ] Nhấn **Sao chép số**, sau đó dán vào một trường văn bản để xác nhận số đã được sao chép.
- [ ] Kiểm tra thông báo thành công; nếu sao chép thất bại, trang hiển thị thông báo lỗi.

### C. Liên kết kho source code và mạng xã hội

Mở từng liên kết và xác nhận đúng trang đích:

- [ ] [Kho Source Code 24/7](https://vanhkazen2711.pythonanywhere.com)
- [ ] [TikTok](https://www.tiktok.com/@vanh.love.it_11)
- [ ] [Facebook](https://www.facebook.com/vanhloveit.page)
- [ ] [Telegram](https://t.me/vietanhtran)
- [ ] [GitHub](https://github.com/vanhkazen)

### D. Điều khiển nhạc

- [ ] Nhấn nút nhạc để bắt đầu phát; trang không tự phát nhạc khi mới mở.
- [ ] Khi nhạc đang phát, xác nhận nút chuyển sang trạng thái tạm dừng và nhãn nút thay đổi.
- [ ] Nhấn lần nữa để tạm dừng và xác nhận trạng thái/nút trở về **Phát nhạc nền**.
- [ ] Nếu `assets/music.mp3` không tải được hoặc trình duyệt không phát được, xác nhận trang hiển thị thông báo lỗi thay vì báo đang phát.

### E. Responsive

Mở Developer Tools hoặc dùng công cụ responsive của trình duyệt để kiểm tra các chiều rộng sau:

- [ ] Mobile: **360px**
- [ ] Mobile: **390px**
- [ ] Tablet: **768px**
- [ ] Desktop: **1366px**

Ở mỗi kích thước, kiểm tra nội dung không tràn màn hình, không xuất hiện thanh cuộn ngang ngoài ý muốn, các nút dễ thao tác, avatar/thẻ hồ sơ hiển thị đúng và các liên kết không làm vỡ bố cục.

## Nguồn xuất bản

- **Nền tảng:** Chưa xác định được từ thông tin repository hiện có.
- **Repository nguồn:** [vanhkazen/portfolio_vanhdev](https://github.com/vanhkazen/portfolio_vanhdev)
- **Nhánh mặc định:** `main` (đã xác minh); nhánh triển khai chưa xác định.
- **URL website:** [portfoliovanhdev.vercel.app](https://portfoliovanhdev.vercel.app)

## Hồ sơ tác giả và minh chứng

### Hồ sơ tác giả

- **GitHub:** [github.com/vanhkazen](https://github.com/vanhkazen)

### Minh chứng sản phẩm

- **Repository:** [github.com/vanhkazen/portfolio_vanhdev](https://github.com/vanhkazen/portfolio_vanhdev)
- **Website đã xuất bản:** [portfoliovanhdev.vercel.app](https://portfoliovanhdev.vercel.app)
- **Ảnh chụp giao diện hoặc tài liệu minh chứng:** Chưa tìm thấy trong các file và thư mục hiện có của repository.

## Tác giả và thương hiệu

- **Author:** Trần Việt Anh
- **Brand:** VanhCodes - Vanh Love IT
