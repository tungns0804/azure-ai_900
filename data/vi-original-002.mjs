/** Bản dịch tiếng Việt cho câu 21–42 của ngân hàng gốc. */
export default {
  21: {
    q: [
      'Một ngân hàng muốn dùng lịch sử trả nợ thẻ tín dụng để xếp các đơn xin thẻ vào nhóm rủi ro thấp hay rủi ro cao, dựa trên các đặc điểm như hạn mức, thu nhập của người vay và kỳ hạn tín dụng.',
      'Ngân hàng nên dùng automated machine learning để tạo loại mô hình nào?',
    ],
    o: ['Classification', 'Regression', 'Time series forecasting'],
    e: [['Mẹo thi: dự đoán con số → Regression; dự đoán hạng mục → Classification.']],
  },

  22: {
    q: [
      'Việc trả về một bounding box chỉ ra vị trí của chiếc xe trong ảnh là ví dụ của:',
    ],
    o: [
      'image classification.',
      'object detection.',
      'optical character recognizer (OCR).',
      'semantic segmentation.',
    ],
  },

  23: {
    q: [
      'Dự đoán một nhân viên giao hàng sẽ làm thêm bao nhiêu giờ dựa trên số đơn nhận được là ví dụ của',
    ],
    o: ['classification.', 'clustering.', 'regression.'],
    e: [['Mẹo thi: dự đoán con số → Regression; dự đoán hạng mục → Classification.']],
  },

  24: {
    q: [
      'Bạn nên dùng dịch vụ nào sau đây để huấn luyện mô hình object detection bằng ảnh của chính mình?',
    ],
    o: ['Computer Vision', 'Custom Vision', 'Form Recognizer', 'Video Indexer'],
  },

  25: {
    q: [
      'Bạn đang tạo training pipeline cho một mô hình regression. Tập dữ liệu có nhiều cột số với các giá trị nằm trên những thang đo khác nhau.',
      'Bạn muốn biến đổi các cột số để mọi giá trị về cùng một thang đo, và việc co giãn phải dựa trên giá trị nhỏ nhất và lớn nhất của từng cột.',
      'Bạn nên thêm module nào vào pipeline?',
    ],
    o: ['Select Columns in a Dataset', 'Normalize Data', 'Clean Missing Data'],
  },

  26: {
    q: [
      'Hai tác vụ nào có thể thực hiện bằng dịch vụ Computer Vision? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    o: [
      'Huấn luyện một mô hình phân loại ảnh tuỳ chỉnh.',
      'Phát hiện khuôn mặt trong ảnh.',
      'Nhận dạng chữ viết tay.',
      'Dịch chữ trong ảnh sang ngôn ngữ khác.',
    ],
  },

  27: {
    q: ['****** được dùng để tạo ra thêm feature mới'],
    o: ['Feature Engineering', 'Feature selection', 'Model evaluation', 'Model training'],
  },

  28: {
    q: [
      'Bạn dùng Azure Machine Learning designer để tạo training pipeline cho một mô hình classification.',
      'Bạn phải làm gì trước khi triển khai mô hình thành dịch vụ?',
    ],
    o: [
      'Tạo một inference pipeline từ training pipeline',
      'Thêm module Evaluate Model vào training pipeline',
      'Nhân bản training pipeline với một tên khác',
    ],
  },

  29: {
    q: [
      'Bạn muốn dùng automated machine learning để huấn luyện mô hình regression có điểm R2 tốt nhất có thể.',
      'Bạn nên cấu hình thí nghiệm automated machine learning thế nào?',
    ],
    o: [
      'Đặt Primary metric là R2 score',
      'Chặn mọi thuật toán ngoài GradientBoosting',
      'Bật featurization',
    ],
    e: [
      [
        'Đúng: primary metric quyết định chỉ số dùng để đánh giá mô hình tốt nhất.',
        'Sai: việc chọn thuật toán không quyết định chỉ số dùng để đánh giá mô hình tốt nhất.',
        'Sai: bật featurization cũng không quyết định chỉ số dùng để đánh giá mô hình tốt nhất.',
      ],
    ],
  },

  30: {
    q: [
      'Bạn gửi một tấm ảnh tới Computer Vision API và nhận lại ảnh đã được chú thích như trong hình.',
      '97.90% 96.77% 98.21%',
      'Loại computer vision nào đã được dùng?',
    ],
    o: [
      'object detection',
      'semantic segmentation',
      'optical character recognition (OCR)',
      'image classification',
    ],
  },

  31: {
    q: [
      'Bạn làm việc tại một công ty du lịch. Công ty muốn dùng dịch vụ Computer Vision để phân tích ảnh các địa điểm và nhận diện những công trình nổi tiếng.',
      'Bạn nên làm gì?',
    ],
    o: [
      'Lấy về các object trong ảnh.',
      'Lấy về categories của ảnh, chỉ định domain celebrities',
      'Lấy về categories của ảnh, chỉ định domain landmarks',
    ],
    e: [
      [
        'Sai: object có thể nhận ra đó là một công trình, nhưng không xác định được đó là địa danh nổi tiếng cụ thể nào.',
        'Sai: domain celebrities dành cho người nổi tiếng, không phải công trình.',
        'Đúng: domain landmarks bao gồm rất nhiều công trình nổi tiếng trên thế giới.',
      ],
    ],
  },

  32: {
    q: ['Vì sao bạn chia dữ liệu thành tập training và tập validation?'],
    o: [
      'Chia thành hai tập để tạo hai mô hình: một mô hình từ tập training và một mô hình khác từ tập validation.',
      'Việc chia thành hai tập cho phép bạn so sánh nhãn mà mô hình dự đoán với nhãn thật đã biết trong tập dữ liệu gốc.',
      'Chỉ cần chia dữ liệu khi dùng Azure Machine Learning Designer, các tình huống machine learning khác thì không.',
    ],
    e: [
      [
        'Sai: tập validation dùng để kiểm tra mô hình được tạo từ tập training.',
        'Đúng: bạn muốn kiểm tra mô hình huấn luyện từ dữ liệu training trên dữ liệu validation để xem mô hình hoạt động ra sao với dữ liệu nó chưa từng học.',
        'Sai: chia dữ liệu thành tập training và validation là phần quan trọng trong mọi tình huống machine learning.',
      ],
    ],
  },

  33: {
    q: [
      'Hai chỉ số nào có thể dùng để đánh giá một mô hình regression? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    o: [
      'coefficient of determination (R2)',
      'F1 score',
      'root mean squared error (RMSE)',
      'area under curve (AUC)',
      'balanced accuracy',
    ],
  },

  34: {
    q: [
      'Bạn đang xử lý ảnh chụp các vận động viên trong một cuộc đua. Bạn cần đọc số in trên áo để xác định từng người trong ảnh.',
      'Bạn nên dùng loại computer vision nào?',
    ],
    o: [
      'facial recognition',
      'optical character recognition (OCR)',
      'semantic segmentation',
      'object detection',
    ],
  },

  35: {
    q: [
      'Bạn nên dùng loại machine learning nào để tìm ra các nhóm người có thói quen mua sắm tương tự nhau?',
    ],
    o: ['classification', 'regression', 'clustering'],
    e: [
      [
        'Clustering dùng để gom các mẫu dữ liệu thành những cụm có đặc điểm tương tự nhau.',
        'Clustering còn được dùng để phát hiện các mối liên hệ trong tập dữ liệu.',
      ],
    ],
  },

  36: {
    q: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    s: [
      { p: 'Dịch vụ Custom Vision có thể dùng để phát hiện vật thể trong ảnh.', o: ['Có', 'Không'] },
      {
        p: 'Dịch vụ Custom Vision yêu cầu bạn cung cấp dữ liệu của chính mình để huấn luyện mô hình.',
        o: ['Có', 'Không'],
      },
      { p: 'Dịch vụ Custom Vision có thể dùng để phân tích file video.', o: ['Có', 'Không'] },
    ],
  },

  37: {
    q: [
      'Bạn dùng Azure Machine Learning designer để publish một inference pipeline. Hai tham số nào cần dùng để gọi pipeline đó? Mỗi đáp án đúng là một phần của lời giải.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    o: ['tên mô hình', 'training endpoint', 'authentication key', 'REST endpoint'],
  },

  38: {
    q: [
      'Trong Azure Machine Learning designer, để triển khai một real-time inference pipeline thành dịch vụ cho người khác sử dụng, bạn phải triển khai mô hình lên đâu?',
    ],
    o: [
      'một web service cục bộ',
      'Azure container instances',
      'Azure Kubernetes service (AKS)',
      'Azure Machine Learning compute',
    ],
  },

  39: {
    q: [
      'Bạn nên dùng dịch vụ nào để tự động trích xuất văn bản, cặp key/value và dữ liệu bảng từ tài liệu đã scan?',
    ],
    o: ['Form Recognizer', 'Text Analytics', 'Language Understanding', 'Custom Vision'],
  },

  40: {
    q: [
      'Bạn muốn dùng dịch vụ Computer Vision để xác định vị trí của từng vật thể trong ảnh. Bạn nên lấy về tính năng nào?',
    ],
    o: ['Objects', 'Tags', 'Categories'],
    e: [
      [
        'Đúng: Computer Vision trả về các object kèm bounding box để chỉ vị trí của chúng trong ảnh.',
        'Sai: Tags cho biết trong ảnh có những gì nhưng không cho biết vị trí.',
        'Sai: Categories đưa ra gợi ý phân loại cho toàn bộ ảnh, không phải cho từng vật thể trong ảnh.',
      ],
    ],
  },

  41: {
    q: [
      'Dự đoán sẽ có bao nhiêu phương tiện đi qua một cây cầu trong một ngày nhất định là ví dụ của',
    ],
    o: ['classification', 'regression', 'clustering'],
  },

  42: {
    q: [
      'Bạn muốn dùng dịch vụ Computer Vision để phân tích ảnh và dịch vụ Language để phân tích văn bản. Yêu cầu bắt buộc là lập trình viên chỉ được dùng một key và một endpoint để truy cập tất cả các dịch vụ.',
      'Bạn nên tạo loại tài nguyên nào trong subscription Azure của mình?',
    ],
    o: ['Computer Vision', 'Cognitive Services', 'Custom Vision'],
    e: [
      [
        'Sai: loại tài nguyên này chỉ hỗ trợ phân tích ảnh. Muốn phân tích văn bản vẫn phải có tài nguyên Language riêng với key và endpoint riêng.',
        'Đúng: tài nguyên Cognitive Services hỗ trợ cả Computer Vision lẫn Language.',
        'Sai: Custom Vision dành cho phân loại ảnh và phát hiện vật thể, không hỗ trợ phân tích ảnh tổng quát hay phân tích văn bản.',
      ],
    ],
  },
};
