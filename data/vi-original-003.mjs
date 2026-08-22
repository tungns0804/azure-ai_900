/** Bản dịch tiếng Việt cho câu 43–65 của ngân hàng gốc. */
export default {
  43: {
    q: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    s: [
      { p: 'Dịch vụ Face có thể dùng để nhận diện khuôn mặt nhân viên.', o: ['Có', 'Không'] },
      {
        p: 'Dịch vụ Face sẽ chính xác hơn nếu bạn cung cấp nhiều ảnh mẫu của mỗi nhân viên chụp từ nhiều góc khác nhau.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Nếu một nhân viên đeo kính râm, dịch vụ Face sẽ luôn luôn không nhận ra người đó.',
        o: ['Có', 'Không'],
      },
    ],
  },

  44: {
    q: [
      'Bạn cần phát triển ứng dụng di động cho nhân viên quét và lưu hoá đơn chi phí khi đi công tác.',
      'Bạn nên dùng loại computer vision nào?',
    ],
    o: [
      'semantic segmentation',
      'image classification',
      'object detection',
      'optical character recognition (OCR)',
    ],
  },

  45: {
    q: [
      'Bạn cần dùng Azure Machine Learning designer để dựng mô hình dự đoán giá ô tô.',
      'Bạn nên dùng những module nào để hoàn thiện mô hình? (Chọn 3)',
    ],
    o: [
      'Convert to csv',
      'K-Means clustering',
      'Linear Regression',
      'Split Data',
      'Select columns in dataset',
      'Summarize data',
    ],
    e: [
      [
        'Ba module còn thiếu trong pipeline là: Select columns in dataset, Split Data và Linear Regression.',
      ],
    ],
  },

  46: {
    q: [
      'Bạn dùng một pipeline của Azure Machine Learning designer để huấn luyện và kiểm tra mô hình phân loại nhị phân. Khi xem các chỉ số hiệu năng trong module Evaluate Model, bạn thấy AUC bằng 0.3.',
      'Bạn kết luận gì về mô hình?',
    ],
    o: [
      'Mô hình giải thích được 30% phương sai giữa nhãn thật và nhãn dự đoán.',
      'Mô hình dự đoán đúng cho 70% số trường hợp kiểm tra.',
      'Mô hình hoạt động còn tệ hơn đoán ngẫu nhiên.',
    ],
    e: [
      [
        '0.5: ngang với chọn ngẫu nhiên',
        '0.5–0.7: hiệu năng kém',
        '0.7–0.8: hiệu năng tạm được',
        'trên 0.8–0.9: hiệu năng rất tốt',
      ],
    ],
  },

  47: {
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

  48: {
    q: [
      'Bạn đang dùng Azure Machine Learning designer để tạo training pipeline cho một mô hình phân loại nhị phân. Bạn đã thêm một dataset chứa feature và label, một module Two-Class Decision Forest và một module Train Model.',
      'Bạn dự định dùng module Score Model và Evaluate Model để kiểm tra mô hình đã huấn luyện trên một phần dữ liệu không dùng để huấn luyện.',
      'Bạn còn cần thêm module nào nữa?',
    ],
    o: ['Join data', 'Split data', 'Select column in dataset'],
    e: [
      [
        'Dùng module Split Data để chia ngẫu nhiên một tập dữ liệu thành phần kiểm tra và phần kiểm định.',
      ],
    ],
  },

  49: {
    q: ['Khả năng trích xuất tạm tính và tổng tiền từ một hoá đơn bán lẻ là năng lực của'],
    o: ['custom vision', 'Form Recognizer', 'Ink Recognizer', 'Text Analytics'],
  },

  50: {
    q: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    s: [
      {
        p: 'Azure Machine Learning designer cung cấp canvas trực quan kéo–thả để xây dựng, kiểm thử và triển khai mô hình machine learning.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Azure Machine Learning designer cho phép bạn lưu tiến độ dưới dạng pipeline draft.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Azure Machine Learning designer cho phép bạn nhúng các hàm JavaScript tuỳ chỉnh.',
        o: ['Có', 'Không'],
      },
    ],
  },

  51: {
    q: [
      'Bạn có tập dữ liệu sau:',
      'Household Income | Postal Code | House Price Category',
      '20000 | 55555 | Low',
      '23000 | 20541 | Middle',
      '80000 | 87960 | High',
      'Bạn dự định dùng tập dữ liệu này để huấn luyện mô hình dự đoán hạng giá nhà.',
      'Household Income và House Price Category là gì? Hãy chọn phương án phù hợp trong vùng trả lời.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    s: [
      { p: 'Household Income', o: ['Là một feature', 'Là một label'] },
      { p: 'House Price Category', o: ['Là một feature', 'Là một label'] },
    ],
    e: [
      [
        'Label: giả sử các lớp có thể có là mèo hoặc chim. Khi đó label là lớp mà thuật toán machine learning sẽ dự đoán, ví dụ "mèo" hay "chim". Kết quả nhận được từ mô hình sau khi huấn luyện chính là label.',
        'Feature: là các hoa văn, màu sắc, hình dạng thuộc về lớp đó — như bộ lông, bộ cánh, hoặc ở mức thấp hơn là giá trị điểm ảnh. Feature là thuộc tính hay đặc tính của lớp.',
      ],
    ],
  },

  52: {
    q: [
      'Bạn đang xây dựng công cụ xử lý ảnh chụp trong cửa hàng bán lẻ để nhận diện sản phẩm của đối thủ. Giải pháp sẽ dùng một mô hình tuỳ chỉnh.',
      'Bạn nên dùng dịch vụ Azure Cognitive nào?',
    ],
    o: ['Custom Vision', 'Form Recognizer', 'Face', 'Computer Vision'],
  },

  53: {
    q: [
      'Bạn dự định dùng dịch vụ Custom Vision để huấn luyện mô hình phân loại ảnh. Bạn muốn tạo một tài nguyên chỉ dùng cho việc huấn luyện, không dùng cho dự đoán.',
      'Bạn nên tạo loại tài nguyên nào trong subscription Azure?',
    ],
    o: ['Custom Vision', 'Cognitive Services', 'Computer Vision'],
    e: [
      [
        'Đúng: khi tạo tài nguyên Custom Vision, bạn có thể chỉ định nó dùng cho training, prediction hay cả hai.',
        'Sai: tài nguyên Cognitive Services có thể được Custom Vision dùng cho cả training lẫn prediction.',
        'Sai: dịch vụ Computer Vision không hỗ trợ huấn luyện mô hình phân loại ảnh tuỳ chỉnh.',
      ],
    ],
  },

  54: {
    q: [
      'Khi bạn thiết kế hệ thống AI để đánh giá có nên duyệt khoản vay hay không, các yếu tố dẫn tới quyết định phải giải thích được.',
      'Đây là ví dụ của nguyên tắc AI có trách nhiệm nào của Microsoft?',
    ],
    o: ['transparency', 'inclusiveness', 'fairness', 'privacy and security'],
    e: [
      [
        'Đạt được tính minh bạch giúp cả nhóm hiểu được dữ liệu và thuật toán dùng để huấn luyện mô hình, logic biến đổi nào đã áp lên dữ liệu, mô hình cuối cùng cùng các tài sản đi kèm.',
        'Thông tin này cho biết mô hình được tạo ra như thế nào, nhờ đó có thể tái lập lại một cách minh bạch.',
      ],
    ],
  },

  55: {
    q: [
      'Bạn phải cung cấp thông tin gì cho lập trình viên muốn dùng mô hình phân loại ảnh?',
    ],
    o: [
      'Chỉ cần project ID.',
      'Project ID, tên mô hình, cùng key và endpoint của tài nguyên prediction',
      'Project ID, số hiệu iteration, cùng key và endpoint của tài nguyên training.',
    ],
    e: [
      [
        'Sai: chỉ riêng project ID thì chưa đủ thông tin để dùng mô hình đã publish.',
        'Đúng: để dùng một mô hình đã publish, bạn cần project ID, tên mô hình, cùng key và endpoint của tài nguyên prediction.',
        'Sai: cần tên mô hình chứ không phải số iteration; và key cùng endpoint phải là của tài nguyên prediction, không phải training.',
      ],
    ],
  },

  56: {
    q: [
      'Bạn đang thiết kế một hệ thống AI phục vụ được mọi người, kể cả người khiếm thính, khiếm thị và các dạng khuyết tật khác.',
      'Đây là ví dụ của nguyên tắc AI có trách nhiệm nào của Microsoft?',
    ],
    o: ['transparency', 'inclusiveness', 'fairness', 'privacy and security'],
  },

  57: {
    q: [
      'Bạn tổ chức một sự kiện từ thiện và đăng lên Twitter ảnh những người đeo kính râm.',
      'Bạn cần bảo đảm chỉ retweet những ảnh thoả mãn các yêu cầu sau:',
      '• Có ít nhất một khuôn mặt.',
      '• Có ít nhất một người đang đeo kính râm.',
      'Bạn nên dùng gì để phân tích các ảnh này?',
    ],
    o: [
      'thao tác Verify của dịch vụ Face',
      'thao tác Detect của dịch vụ Face',
      'thao tác Describe Image của dịch vụ Computer Vision',
      'thao tác Analyze Image của dịch vụ Computer Vision',
    ],
  },

  58: {
    q: [
      'Việc xử lý các giá trị bất thường hoặc bị thiếu đưa vào hệ thống AI là điểm cần cân nhắc của nguyên tắc AI có trách nhiệm nào của Microsoft?',
    ],
    o: [
      'transparency',
      'inclusiveness',
      'fairness',
      'privacy and security',
      'Reliability and safety',
    ],
  },

  59: {
    q: [
      'Bạn huấn luyện một mô hình phân loại ảnh nhưng các chỉ số đánh giá chưa đạt yêu cầu.',
      'Bạn có thể cải thiện bằng cách nào?',
    ],
    o: [
      'Giảm kích thước các ảnh dùng để huấn luyện mô hình.',
      'Thêm một nhãn mới cho các lớp "unknown".',
      'Bổ sung thêm ảnh vào tập huấn luyện.',
    ],
    e: [
      [
        'Sai: thay đổi kích thước ảnh khó cải thiện hiệu năng đáng kể, thậm chí giảm kích thước còn làm mất độ phân giải và khiến mô hình tệ hơn.',
        'Sai: thêm nhãn "unknown" không làm tăng độ chính xác cho những lớp bạn thực sự muốn nhận diện.',
        'Đúng: nhìn chung, bổ sung thêm ảnh vào dự án rồi huấn luyện lại thường cải thiện được hiệu năng.',
      ],
    ],
  },

  60: {
    q: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    s: [
      {
        p: 'Dự báo giá nhà dựa trên dữ liệu lịch sử là ví dụ của anomaly detection.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Phát hiện các lần đăng nhập đáng ngờ bằng cách tìm sai lệch so với mẫu thông thường là ví dụ của anomaly detection.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Dự đoán một bệnh nhân có mắc tiểu đường hay không dựa trên tiền sử bệnh án là ví dụ của anomaly detection.',
        o: ['Có', 'Không'],
      },
    ],
  },

  61: {
    q: [
      'Kéo loại workload phù hợp ở cột bên trái sang phần mô tả tương ứng ở bên phải.',
      'Mỗi loại có thể dùng một lần, nhiều lần hoặc không dùng.',
    ],
    s: [
      {
        p: 'Một cuộc trò chuyện tự động trả lời câu hỏi về hoàn tiền và đổi hàng',
        o: [
          'Anomaly detection',
          'Computer vision',
          'Conversational AI',
          'Knowledge mining',
          'Natural language processing',
        ],
      },
      {
        p: 'Xác định một tấm ảnh có chứa người hay không',
        o: [
          'Anomaly detection',
          'Computer vision',
          'Conversational AI',
          'Knowledge mining',
          'Natural language processing',
        ],
      },
      {
        p: 'Xác định một đánh giá là tích cực hay tiêu cực',
        o: [
          'Anomaly detection',
          'Computer vision',
          'Conversational AI',
          'Knowledge mining',
          'Natural language processing',
        ],
      },
    ],
  },

  62: {
    q: [
      'Việc xử lý các giá trị bất thường hoặc bị thiếu đưa vào hệ thống AI là điểm cần cân nhắc của nguyên tắc ***** trong AI có trách nhiệm của Microsoft.',
    ],
    o: [
      'transparency',
      'inclusiveness',
      'fairness',
      'privacy and security',
      'Reliability and safety',
    ],
    e: [
      [
        'Hệ thống AI phải tin cậy và an toàn thì mới được tin dùng. Điều quan trọng là hệ thống hoạt động đúng như thiết kế ban đầu và phản ứng an toàn trước các tình huống mới.',
        'Khả năng chống chịu vốn có của hệ thống phải kháng lại được cả thao túng có chủ ý lẫn ngoài ý muốn.',
      ],
    ],
  },

  63: {
    q: [
      'Khi bạn thiết kế hệ thống AI để đánh giá có nên duyệt đơn xin thẻ tín dụng hay không, các yếu tố dẫn tới quyết định phải giải thích được.',
      'Đây là ví dụ của nguyên tắc AI có trách nhiệm nào của Microsoft?',
    ],
    o: [
      'transparency',
      'inclusiveness',
      'fairness',
      'privacy and security',
      'Reliability and safety',
    ],
    e: [
      [
        'Đạt được tính minh bạch giúp cả nhóm hiểu được dữ liệu và thuật toán dùng để huấn luyện mô hình, logic biến đổi nào đã áp lên dữ liệu, mô hình cuối cùng cùng các tài sản đi kèm.',
        'Thông tin này cho biết mô hình được tạo ra như thế nào, nhờ đó có thể tái lập lại một cách minh bạch.',
      ],
    ],
  },

  64: {
    q: [
      'Bạn cần dự đoán khoảng thu nhập của một khách hàng dựa trên tập dữ liệu sau.',
      'Name Address Age Weight Education Level Income range',
      'James Sweden 35 60 High School 25k - 50k',
      'Ajay India 20 65 Graduate 30k - 45k',
      'Rohan India 40 80 Masters 40k - 75k',
      'James USA 65 70 Diploma 15k - 30k',
      'Smith Canada 50 95 Phd 50k - 75k',
      'Bạn nên dùng hai trường nào làm feature? Mỗi đáp án đúng là một lời giải trọn vẹn.',
    ],
    o: ['Name', 'Address', 'Age', 'Weight', 'Education Level', 'Income Level'],
  },

  65: {
    q: [
      'Bạn dự định dùng một bộ ảnh để huấn luyện mô hình phát hiện điện thoại di động, rồi publish mô hình thành dịch vụ dự đoán. Bạn muốn dùng một tài nguyên Azure duy nhất với cùng key và endpoint cho cả training lẫn prediction.',
      'Bạn nên tạo loại tài nguyên Azure nào?',
    ],
    o: ['Custom Vision', 'Cognitive Services', 'Computer Vision'],
    e: [['Tài nguyên Cognitive Services có thể dùng cho cả training lẫn prediction.']],
  },
};
