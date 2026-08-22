/** Bản dịch tiếng Việt cho câu 66–90 của ngân hàng gốc. */
export default {
  66: {
    q: [
      'Việc gom tài liệu thành các nhóm dựa trên mức tương đồng của nội dung văn bản trong tài liệu là ví dụ của clustering.',
    ],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },

  67: {
    q: [
      'Việc gom các bệnh nhân tương tự nhau dựa trên triệu chứng và kết quả xét nghiệm là ví dụ của clustering.',
    ],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },

  68: {
    q: [
      'Việc dự đoán một người sẽ bị dị ứng ở mức nhẹ, trung bình hay nặng dựa trên chỉ số phấn hoa là ví dụ của clustering.',
    ],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },

  69: {
    q: [
      'Mô hình object detection thường trả về kết quả nào cho một tấm ảnh?',
    ],
    o: [
      'Một nhãn lớp và điểm xác suất cho cả tấm ảnh',
      'Toạ độ bounding box chỉ ra vùng ảnh chứa toàn bộ các vật thể',
      'Một nhãn lớp, một xác suất và một bounding box cho từng vật thể trong ảnh',
    ],
    e: [
      [
        'Mô hình object detection dự đoán nhãn lớp, xác suất và bounding box cho từng vật thể trong ảnh.',
      ],
    ],
  },

  70: {
    q: [
      'Mô hình object detection thường trả về kết quả nào cho một tấm ảnh?',
    ],
    o: [
      'Một nhãn lớp và điểm xác suất cho cả tấm ảnh',
      'Toạ độ bounding box chỉ ra vùng ảnh chứa toàn bộ các vật thể',
      'Một nhãn lớp, một xác suất và một bounding box cho từng vật thể trong ảnh',
    ],
    e: [
      [
        'Mô hình object detection dự đoán nhãn lớp, xác suất và bounding box cho từng vật thể trong ảnh.',
      ],
    ],
  },

  71: {
    q: [
      'Công ty "DigitalLAB" của bạn làm về số hoá thư viện và cần đọc chữ trong một tài liệu PDF lớn. Bạn dự định dùng dịch vụ Computer Vision.',
      'API nào phù hợp nhất với nhu cầu này?',
    ],
    o: ['Read API', 'OCR API', 'Recognize Text API'],
    e: [
      [
        'Read API phù hợp hơn với ảnh và tài liệu lớn. Ngoài ra nó chạy bất đồng bộ nên không chặn ứng dụng của bạn trong lúc xử lý.',
      ],
    ],
  },

  72: {
    q: [
      'Công ty "DigitalLAB" của bạn làm về số hoá thư viện và cần trích xuất chữ từ sách đã scan, sau đó dùng dịch vụ Text Analytics để phân tích phần chữ trích được. Công ty muốn lập trình viên chỉ dùng một key và một endpoint để truy cập tất cả các dịch vụ.',
      'Bạn nên tạo loại tài nguyên nào trong subscription Azure?',
    ],
    o: ['Computer Vision', 'Cognitive Services', 'Text Analytics'],
    e: [
      [
        'Tài nguyên Cognitive Services hỗ trợ cả Computer Vision để trích xuất chữ lẫn Text Analytics để phân tích văn bản.',
      ],
    ],
  },

  73: {
    q: [
      'Bạn dự định dùng dịch vụ Face để phát hiện khuôn mặt người trong ảnh. Dịch vụ chỉ ra vị trí các khuôn mặt tìm được bằng cách nào?',
    ],
    o: [
      'Một cặp toạ độ cho mỗi khuôn mặt, chỉ tâm của khuôn mặt',
      'Hai cặp toạ độ cho mỗi khuôn mặt, chỉ vị trí hai mắt',
      'Một bộ toạ độ cho mỗi khuôn mặt, xác định một bounding box hình chữ nhật bao quanh khuôn mặt',
    ],
    e: [
      [
        'Vị trí các khuôn mặt phát hiện được thể hiện bằng toạ độ của một bounding box hình chữ nhật.',
      ],
    ],
  },

  74: {
    q: [
      'Bạn đang xây dựng công cụ xử lý ảnh chụp trong cửa hàng bán lẻ để nhận diện sản phẩm của đối thủ. Giải pháp sẽ dùng một mô hình tuỳ chỉnh.',
      'Bạn nên dùng dịch vụ nào của Azure Cognitive Services?',
    ],
    o: ['Custom Vision', 'Cognitive Services', 'Computer Vision'],
  },

  75: {
    q: ['Yếu tố nào có thể làm giảm khả năng phát hiện khuôn mặt?'],
    o: ['Biểu cảm cười', 'Góc chụp cực đoan', 'Tốc độ màn trập nhanh'],
    e: [
      [
        'Kết quả tốt nhất đạt được khi khuôn mặt chụp chính diện hoặc gần chính diện nhất có thể.',
      ],
    ],
  },

  76: {
    q: [
      'Bạn muốn dùng dịch vụ Face để nhận diện những cá nhân cụ thể. Bạn phải làm gì?',
    ],
    o: [
      'Dùng dịch vụ Computer Vision',
      'Dùng Face để lấy tuổi và trạng thái cảm xúc của từng người',
      'Dùng Face để tạo một group chứa nhiều ảnh của từng cá nhân, rồi huấn luyện mô hình dựa trên group đó',
    ],
    e: [
      [
        'Tạo một group chứa nhiều ảnh của các cá nhân đã đặt tên cho phép bạn huấn luyện mô hình nhận diện khuôn mặt.',
      ],
    ],
  },

  77: {
    q: [
      'Công ty bạn đang tìm hiểu việc dùng nhận dạng giọng nói cho một thiết bị di động thông minh. Công ty cam kết tìm ra những rào cản có thể vô tình bỏ sót một số nhóm người dùng.',
      'Đây là ví dụ của nguyên tắc AI có trách nhiệm nào của Microsoft?',
    ],
    o: ['accountability', 'fairness', 'inclusiveness', 'privacy and security'],
  },

  78: {
    q: [
      'Một dự án nghiên cứu y khoa dùng tập dữ liệu lớn đã ẩn danh gồm các ảnh chụp não được phân vào những loại ung thư định sẵn. Bạn cần dùng machine learning để hỗ trợ phát hiện sớm các loại ung thư khác nhau trong ảnh, trước khi ảnh được người xem lại.',
      'Đây là ví dụ của loại machine learning nào?',
    ],
    o: ['clustering', 'regression', 'classification'],
  },

  79: {
    q: [
      'Bạn dự định dùng mô hình receipt dựng sẵn của Form Recognizer. Bạn nên tạo loại tài nguyên Azure nào?',
    ],
    o: [
      'Tài nguyên Computer Vision',
      'Tài nguyên Form Recognizer hoặc Cognitive Services',
      'Chỉ tài nguyên Form Recognizer',
    ],
    e: [
      [
        'Cả tài nguyên Form Recognizer lẫn tài nguyên Cognitive Services đều cho phép truy cập dịch vụ Form Recognizer.',
      ],
    ],
  },

  80: {
    q: [
      'Bạn đang dùng dịch vụ Form Recognizer để phân tích các hoá đơn đã scan thành ảnh JPG.',
      'Kích thước file JPG tối đa mà bạn gửi được cho mô hình receipt dựng sẵn là bao nhiêu?',
    ],
    o: ['2 MB', '50 MB', '200 MB'],
    e: [['Kích thước file tối đa cho mô hình receipt dựng sẵn là 50 MB.']],
  },

  81: {
    q: [
      'Ghép các nguyên tắc AI có trách nhiệm với yêu cầu tương ứng.',
      'Kéo nguyên tắc phù hợp ở cột bên trái sang yêu cầu ở bên phải.',
      'Mỗi nguyên tắc có thể dùng một lần, nhiều lần hoặc không dùng.',
    ],
    s: [
      {
        p: 'Dữ liệu cá nhân chỉ được hiển thị cho người đã được phê duyệt.',
        o: ['Fairness', 'Privacy and Security', 'Reliability and Safety', 'Transparency'],
      },
      {
        p: 'Hệ thống không được phân biệt đối xử theo giới tính và chủng tộc',
        o: ['Fairness', 'Privacy and Security', 'Reliability and Safety', 'Transparency'],
      },
      {
        p: 'Các quy trình ra quyết định tự động phải được ghi lại để người dùng được phê duyệt biết vì sao một quyết định được đưa ra',
        o: ['Fairness', 'Privacy and Security', 'Reliability and Safety', 'Transparency'],
      },
    ],
  },

  82: {
    q: [
      'Khi huấn luyện mô hình, vì sao bạn nên chia ngẫu nhiên các hàng thành những tập con riêng biệt?',
    ],
    o: [
      'để huấn luyện mô hình hai lần nhằm đạt độ chính xác cao hơn',
      'để huấn luyện nhiều mô hình cùng lúc nhằm đạt hiệu năng tốt hơn',
      'để kiểm tra mô hình bằng dữ liệu không dùng để huấn luyện nó',
    ],
  },

  83: {
    q: [
      'Bạn cần dự đoán lượng mưa tính bằng mm cho 10 năm tới. Bạn nên dùng loại machine learning nào?',
    ],
    o: ['classification', 'regression', 'clustering'],
    e: [
      [
        'Hiểu đơn giản nhất, regression là dự đoán một mục tiêu dạng số. Linear regression tìm quan hệ tuyến tính giữa một hoặc nhiều biến độc lập với một kết quả số (biến phụ thuộc).',
        'Bạn dùng module này để khai báo phương pháp hồi quy tuyến tính rồi huấn luyện mô hình bằng tập dữ liệu có nhãn; mô hình đã huấn luyện sau đó dùng để dự đoán.',
      ],
    ],
  },

  84: {
    q: [
      'Bạn cần dự đoán mức tăng nhiệt độ tính bằng độ do biến đổi khí hậu trong 50 năm tới. Bạn nên dùng loại machine learning nào?',
    ],
    o: ['classification', 'regression', 'clustering'],
  },

  85: {
    q: [
      'Bạn muốn dùng dịch vụ Language để xác định các ý chính trong một tài liệu văn bản. Bạn nên dùng tính năng nào của dịch vụ?',
    ],
    o: ['Sentiment analysis', 'Key phrase extraction', 'Entity detection'],
    e: [
      [
        'Sai: sentiment analysis trả về điểm số cho biết văn bản tích cực hay tiêu cực đến mức nào.',
        'Đúng: key phrase dùng để xác định các ý chính trong một tài liệu văn bản.',
        'Sai: entity detection nhận diện các loại thực thể cụ thể trong tài liệu, không phải các ý chính.',
      ],
    ],
  },

  86: {
    q: ['Những mục nào sau đây KHÔNG phải nguyên tắc AI có trách nhiệm của Microsoft?'],
    o: [
      'knowledgeability',
      'decisiveness',
      'inclusiveness',
      'fairness',
      'validity',
      'reliability and safety',
    ],
  },

  87: {
    q: [
      'Việc trả về một bounding box chỉ ra vị trí của chiếc xe trong ảnh là ví dụ của',
    ],
    o: [
      'image classification',
      'object detection',
      'optical character recognizer',
      'semantic segmentation',
    ],
  },

  88: {
    q: [
      'Automated machine learning cho phép bạn nhúng các script Python tuỳ chỉnh vào training pipeline.',
    ],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },

  89: {
    q: [
      'Automated machine learning triển khai được các giải pháp machine learning mà không cần kinh nghiệm lập trình.',
    ],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },

  90: {
    q: [
      'Automated machine learning cho phép bạn nối dataset và module một cách trực quan trên canvas tương tác.',
    ],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },
};
