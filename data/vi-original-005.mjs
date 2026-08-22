/** Bản dịch tiếng Việt cho câu 91–115 của ngân hàng gốc. */
export default {
  91: {
    q: [
      'Một tài liệu được dịch vụ Language chấm điểm sentiment analysis là 0.99. Điểm này cho biết gì về sắc thái của tài liệu?',
    ],
    o: ['Tài liệu mang sắc thái tích cực.', 'Tài liệu trung tính.', 'Tài liệu mang sắc thái tiêu cực.'],
    e: [
      [
        'Đúng: điểm càng gần 1 thì sắc thái càng tích cực, càng gần 0 thì càng tiêu cực.',
        'Sai: tài liệu trung tính sẽ có điểm quanh 0.5.',
        'Sai: điểm càng gần 1 nghĩa là càng tích cực chứ không phải tiêu cực.',
      ],
    ],
  },

  92: {
    q: ['Bạn nên dùng dịch vụ nào để tạo knowledge base cho bot?'],
    o: ['Conversational Language Understanding', 'Question Answering', 'Azure Bot'],
  },

  93: {
    q: [
      'Bạn cần phát triển một chatbot cho website. Chatbot phải trả lời câu hỏi của người dùng dựa trên thông tin trong các tài liệu sau:',
      '• Một tài liệu hướng dẫn xử lý sự cố sản phẩm ở định dạng Microsoft Word',
      '• Một danh sách câu hỏi thường gặp (FAQ) trên trang web',
      'Bạn nên dùng dịch vụ nào để xử lý các tài liệu này?',
    ],
    o: ['Language Understanding', 'Text Analytics', 'Azure Bot Service', 'QnA Maker'],
  },

  94: {
    q: [
      'Một hệ thống ngân hàng dự đoán một khoản vay có được trả hay không là ví dụ của loại machine learning regression.',
    ],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },

  95: {
    q: [
      'Một hệ thống ngân hàng dự đoán một khoản vay có được trả hay không là ví dụ của loại machine learning classification.',
    ],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },

  96: {
    q: ['Khi nào bạn có thể thấy Language Detection trả về NaN cho phần điểm số?'],
    o: [
      'Khi điểm mà dịch vụ tính ra nằm ngoài khoảng 0 đến 1',
      'Khi ngôn ngữ chiếm ưu thế trong văn bản bị trộn lẫn với các ngôn ngữ khác',
      'Khi ngôn ngữ mơ hồ, không xác định được',
    ],
  },

  97: {
    q: [
      'Công ty bạn kinh doanh dịch vụ hỗ trợ khách hàng qua điện thoại. Trong nhiều năm, công ty đã xây dựng một tài liệu câu hỏi thường gặp (FAQ). Giờ công ty muốn tạo một knowledge base gồm các câu hỏi và câu trả lời từ tài liệu FAQ đó với công sức ít nhất có thể.',
      'Bạn nên làm gì?',
    ],
    o: [
      'Tạo knowledge base từ đầu rồi chép tay từng mục FAQ vào.',
      'Import thẳng tài liệu FAQ hiện có vào một knowledge base mới.',
      'Import một nguồn dữ liệu hội thoại định sẵn.',
    ],
  },

  98: {
    q: ['Mục nào sau đây được dùng để tạo ra thêm feature mới?'],
    o: ['Feature selection', 'Feature engineering', 'Model Evaluation', 'Model training'],
  },

  99: {
    q: [
      'Bạn cần phát hành thông cáo báo chí của công ty bằng nhiều ngôn ngữ khác nhau.',
      'Bạn nên dùng dịch vụ nào?',
    ],
    o: ['Translator Text', 'Text Analytics', 'Speech', 'Language Understanding (LUIS)'],
  },

  100: {
    q: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    s: [
      {
        p: 'Automated machine learning là quá trình tự động hoá những tác vụ lặp đi lặp lại và tốn thời gian trong việc phát triển mô hình machine learning.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Automated machine learning có thể tự suy ra dữ liệu huấn luyện từ tình huống sử dụng được mô tả.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Automated machine learning hoạt động bằng cách chạy nhiều vòng huấn luyện, rồi chấm điểm và xếp hạng theo chỉ số bạn chỉ định.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Automated machine learning cho phép bạn chỉ định một dataset và sẽ tự hiểu cần dự đoán label nào.',
        o: ['Có', 'Không'],
      },
    ],
  },

  101: {
    q: ['Các giá trị dữ liệu ảnh hưởng tới dự đoán của mô hình được gọi là gì?'],
    o: ['dependant variables', 'features', 'identifiers', 'labels'],
  },

  102: {
    q: [
      'Bạn dự định triển khai một mô hình Azure Machine Learning thành dịch vụ cho các ứng dụng khách sử dụng.',
      'Bạn phải thực hiện ba bước nào theo đúng thứ tự trước khi triển khai mô hình?',
      'Hãy chọn các bước phù hợp và sắp xếp chúng theo đúng trình tự.',
    ],
    s: [
      {
        p: 'Bước 1',
        o: [
          'Data Encryption',
          'Model retraining',
          'Model training',
          'Data Preparation',
          'Model evaluation',
        ],
      },
      {
        p: 'Bước 2',
        o: [
          'Data Encryption',
          'Model retraining',
          'Model training',
          'Data Preparation',
          'Model evaluation',
        ],
      },
      {
        p: 'Bước 3',
        o: [
          'Data Encryption',
          'Model retraining',
          'Model training',
          'Data Preparation',
          'Model evaluation',
        ],
      },
    ],
    e: [['Trình tự đúng là: Data Preparation → Model training → Model evaluation.']],
  },

  103: {
    q: [
      'Bạn đang xây dựng một ứng dụng dựa trên AI. Bạn cần bảo đảm ứng dụng tuân theo các nguyên tắc AI có trách nhiệm.',
      'Bạn nên theo hai nguyên tắc nào? Mỗi đáp án đúng là một phần của lời giải.',
    ],
    o: [
      'Áp dụng phương pháp phát triển phần mềm Agile',
      'Đưa quy trình kiểm định mô hình AI vào quy trình review phần mềm',
      'Lập hội đồng quản trị rủi ro gồm thành viên bộ phận pháp lý, thành viên bộ phận quản trị rủi ro và một cán bộ phụ trách quyền riêng tư',
      'Không tiết lộ việc sử dụng thuật toán AI cho việc ra quyết định tự động',
    ],
  },

  104: {
    q: ['Đối tượng dữ liệu JSON được dùng để chỉ ra mẫu ghi nhận (recording pattern) của dữ liệu.'],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },

  105: {
    q: [
      'Azure Cognitive Search có chấp nhận định dạng dữ liệu XML khi bạn đẩy dữ liệu vào index không?',
    ],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },

  106: {
    q: [
      'Bạn vẫn truy vấn được một search index kể cả khi thiết lập index đó mà không kèm AI skillset nào.',
    ],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },

  107: {
    q: [
      'Bạn nên dùng loại machine learning nào để dự đoán số thẻ quà tặng sẽ bán được trong tháng tới?',
    ],
    o: ['classification', 'regression', 'clustering'],
    e: [['Mẹo thi: dự đoán con số → Regression; dự đoán hạng mục → Classification.']],
  },

  108: {
    q: [
      'Fairness là nguyên tắc AI có trách nhiệm của Microsoft, nói rằng hệ thống AI không được phản ánh lại thiên lệch có trong tập dữ liệu dùng để huấn luyện hệ thống.',
    ],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },

  109: {
    q: [
      'Việc chỉ định granularity trong đối tượng dữ liệu JSON được dùng để cho biết mẫu ghi nhận (recording pattern) của dữ liệu.',
    ],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },

  110: {
    q: ['Cách giải thích nào đúng về indexer và index?'],
    o: [
      'Indexer của Azure xuất các tài liệu đầu vào thành JSON rồi đẩy JSON đó vào một index để lưu trữ.',
      'Có thể dùng indexer của Azure thay cho index nếu các file đã ở đúng định dạng.',
      'Indexer của Azure chỉ dùng để dựng knowledge store được lưu trong index.',
    ],
    e: [
      [
        'Tài liệu trong Azure blob storage được xuất sang JSON trước khi lưu vào search index.',
        'Indexer của Azure là công cụ tự động hoá quá trình xuất tài liệu đó.',
      ],
    ],
  },

  111: {
    q: [
      'Bạn có tập dữ liệu chứa thông tin về các chuyến taxi trong một khoảng thời gian. Bạn cần huấn luyện mô hình dự đoán giá cước của một chuyến taxi.',
      'Bạn nên dùng gì làm feature?',
    ],
    o: [
      'số lượng chuyến taxi trong tập dữ liệu',
      'quãng đường của từng chuyến taxi',
      'giá cước của từng chuyến taxi',
      'mã chuyến (trip ID) của từng chuyến taxi',
    ],
  },

  112: {
    q: [
      'Module Model evaluation xuất ra một confusion matrix cho biết số lượng true positive, false negative, false positive và true negative.',
    ],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },

  113: {
    q: ['Feature Selection giúp tách một ngày thành các trường tháng, ngày và năm.'],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },

  114: {
    q: [
      'Feature selection giúp chọn ra nhiệt độ và áp suất để huấn luyện một mô hình thời tiết.',
    ],
    s: [{ p: '', o: ['Có', 'Không'] }],
  },

  115: {
    q: [
      'Khi phát triển hệ thống AI cho xe tự lái, nguyên tắc AI có trách nhiệm nào của Microsoft cần được áp dụng để bảo đảm hệ thống vận hành ổn định trong những tình huống bất ngờ?',
    ],
    o: ['inclusiveness', 'fairness', 'validity', 'reliability and safety'],
  },
};
