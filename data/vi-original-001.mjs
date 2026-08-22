/**
 * Bản dịch tiếng Việt cho câu 1–20 của ngân hàng gốc.
 * q = câu hỏi, o = đáp án (đúng thứ tự gốc), s = các dòng con, e = các khối giải thích.
 */
export default {
  1: {
    q: ['Bạn nên dùng dịch vụ AI nào để tạo một bot từ tài liệu câu hỏi thường gặp (FAQ)?'],
    o: ['QnA Maker', 'Language Understanding (LUIS)', 'Text Analytics', 'Speech Text'],
    e: [
      [
        'Language Understanding (LUIS) là dịch vụ conversational AI trên cloud, áp dụng machine learning tuỳ chỉnh lên văn bản ngôn ngữ tự nhiên của người dùng để dự đoán ý nghĩa tổng thể và rút ra thông tin chi tiết liên quan.',
        'Phiên bản mới hơn của các năng lực Language Understanding hiện nằm trong Azure Cognitive Service for Language.',
      ],
      [
        'Text analytics dùng để tìm hiểu sâu hơn, ví dụ nhận ra một mẫu hình hay xu hướng từ văn bản phi cấu trúc.',
        'Chẳng hạn, text analytics giúp hiểu vì sao trải nghiệm khách hàng hay mức độ ưa chuộng một sản phẩm sụt giảm.',
      ],
      [
        'Dịch vụ speech-to-text của Azure phân tích âm thanh theo thời gian thực hoặc theo lô để chuyển lời nói thành văn bản.',
        'Mặc định, speech to text dùng Universal Language Model làm mô hình nền, được huấn luyện bằng dữ liệu của Microsoft và phản ánh ngôn ngữ nói thông dụng.',
      ],
    ],
  },

  2: {
    q: [
      'Bạn xây dựng một mô hình machine learning bằng giao diện automated machine learning (UI).',
      'Bạn cần bảo đảm mô hình đáp ứng nguyên tắc transparency (minh bạch) trong AI có trách nhiệm của Microsoft.',
      'Bạn nên làm gì?',
    ],
    o: [
      'Đặt Validation type thành Auto.',
      'Bật Explain best model.',
      'Đặt Primary metric thành accuracy.',
      'Đặt Max concurrent iterations thành 0.',
    ],
    e: [
      [
        'Khả năng giải thích mô hình (model explainability).',
        'Phần lớn doanh nghiệp vận hành dựa trên niềm tin và khả năng mở được "hộp đen" ML, nhờ đó tăng tính minh bạch và sự tin cậy. Trong các ngành chịu quản lý chặt như y tế và ngân hàng, việc tuân thủ quy định và thông lệ tốt là bắt buộc.',
        'Một khía cạnh then chốt là hiểu quan hệ giữa biến đầu vào (feature) và đầu ra của mô hình. Biết được độ lớn và chiều ảnh hưởng của từng feature (feature importance) lên giá trị dự đoán giúp hiểu và giải thích mô hình tốt hơn. Tuỳ chọn model explainability trong automated ML cho bạn đúng thông tin đó.',
      ],
    ],
  },

  3: {
    q: ['Tình huống nào là ví dụ của một webchat bot?'],
    o: [
      'Xác định các đánh giá nhập trên website về một buổi hoà nhạc là tích cực hay tiêu cực, rồi gắn biểu tượng ngón tay lên hoặc xuống cho các đánh giá đó.',
      'Dịch sang tiếng Anh các câu hỏi mà khách nhập tại một kiosk để đúng người có thể gọi lại cho khách.',
      'Nhận câu hỏi qua email rồi chuyển email tới đúng người dựa trên nội dung thư.',
      'Từ giao diện website, trả lời các câu hỏi thường gặp về lịch sự kiện và việc mua vé cho một lễ hội âm nhạc.',
    ],
  },

  4: {
    q: [
      'Trong một quy trình machine learning, bạn nên chia dữ liệu để huấn luyện và đánh giá như thế nào?',
    ],
    o: [
      'Dùng feature để huấn luyện và label để đánh giá.',
      'Chia ngẫu nhiên dữ liệu thành các hàng dùng để huấn luyện và các hàng dùng để đánh giá.',
      'Dùng label để huấn luyện và feature để đánh giá.',
      'Chia ngẫu nhiên dữ liệu thành các cột dùng để huấn luyện và các cột dùng để đánh giá.',
    ],
    e: [
      [
        'Module Split Data đặc biệt hữu ích khi cần tách dữ liệu thành tập huấn luyện và tập kiểm tra. Dùng tuỳ chọn Split Rows nếu muốn chia dữ liệu thành hai phần.',
        'Bạn có thể chỉ định tỉ lệ phần trăm cho mỗi phần; mặc định là 50-50. Bạn cũng có thể chọn ngẫu nhiên các hàng trong mỗi nhóm và dùng lấy mẫu phân tầng (stratified sampling).',
      ],
      [
        'Stratified random sampling là phương pháp lấy mẫu bằng cách chia tổng thể thành các nhóm nhỏ hơn gọi là tầng (strata).',
      ],
    ],
  },

  5: {
    q: ['Đại lượng nào là xác suất tính được cho việc phân loại ảnh đúng?'],
    o: ['Accuracy', 'Confidence', 'Root Mean Square Error', 'Sentiment'],
  },

  6: {
    q: [
      'Bảo đảm một hệ thống AI không đưa ra dự đoán khi các trường quan trọng chứa giá trị bất thường hoặc bị thiếu là nguyên tắc ******* của AI có trách nhiệm.',
    ],
    o: [
      'inclusiveness (hoà nhập)',
      'privacy and security (riêng tư và bảo mật)',
      'reliability and safety (tin cậy và an toàn)',
      'transparency (minh bạch)',
    ],
  },

  7: {
    q: [
      'Bảo đảm các biến số trong dữ liệu huấn luyện nằm trên cùng một thang đo là ví dụ của *******',
    ],
    o: ['data ingestion', 'feature engineering', 'feature selection', 'model training'],
  },

  8: {
    q: [
      'Bạn muốn tạo mô hình dự đoán doanh số kem dựa trên dữ liệu lịch sử gồm tổng doanh số kem hằng ngày và số liệu thời tiết. Bạn nên dùng dịch vụ Azure nào?',
    ],
    o: ['Azure Machine Learning', 'Azure Bot', 'Language'],
    e: [
      [
        'Azure Machine Learning cho phép huấn luyện mô hình dự đoán từ dữ liệu sẵn có.',
        'Azure Bot Service cung cấp nền tảng cho conversational AI.',
        'Language Service dùng để hiểu, phân tích văn bản và xây các ứng dụng thông minh.',
      ],
    ],
  },

  9: {
    q: [
      'Việc trả lời tương tác các câu hỏi do người dùng nhập vào như một phần của ứng dụng là ví dụ của',
    ],
    o: [
      'anomaly detection',
      'computer vision',
      'conversational AI',
      'forecasting (dự báo)',
    ],
  },

  10: {
    q: [
      'Bạn đang thiết kế một ứng dụng AI dùng hình ảnh để phát hiện vết nứt trên ô kính của các toà nhà và cảnh báo khi một ô kính cần sửa hoặc thay.',
      'Đây là loại workload AI nào?',
    ],
    o: ['Computer Vision', 'Natural Language Processing', 'Anomaly Detection'],
    e: [
      [
        'Ảnh chụp ô kính của toà nhà có thể được phân tích bằng computer vision và phân loại theo tình trạng của ô kính.',
        'Đáp án Natural Language Processing sai: NLP dùng để hiểu, phân tích văn bản và tạo ứng dụng thông minh.',
      ],
      [
        'Đáp án Anomaly Detection sai: anomaly detection dùng để phân tích dữ liệu theo thời gian và phát hiện các thay đổi bất thường.',
      ],
    ],
  },

  11: {
    q: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    s: [
      { p: 'Bạn có thể dùng QnA Maker để truy vấn một cơ sở dữ liệu Azure SQL.', o: ['Có', 'Không'] },
      {
        p: 'Bạn nên dùng QnA Maker khi muốn một knowledge base trả cùng một câu trả lời cho nhiều người dùng gửi các câu hỏi tương tự nhau.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Dịch vụ QnA Maker có thể xác định ý định (intent) trong câu nói của người dùng.',
        o: ['Có', 'Không'],
      },
    ],
  },

  12: {
    q: [
      'Một công ty có đội ngũ nhân viên chăm sóc khách hàng hỗ trợ qua điện thoại và email. Công ty phát triển một webchat bot để tự động trả lời các câu hỏi thường gặp.',
      'Công ty nên kỳ vọng lợi ích nghiệp vụ nào từ giải pháp webchat bot này?',
    ],
    o: [
      'tăng doanh số',
      'giảm tải công việc cho nhân viên chăm sóc khách hàng',
      'nâng cao độ tin cậy của sản phẩm',
    ],
    e: [
      [
        'Sai: webchat bot chỉ trả lời các câu hỏi thường gặp — nó không làm tăng doanh số.',
        'Đúng: webchat bot chắc chắn giúp giảm tải cho nhân viên chăm sóc khách hàng.',
        'Sai: độ tin cậy của sản phẩm mà công ty bán không liên quan gì tới webchat bot.',
      ],
    ],
  },

  13: {
    q: [
      'Kéo kỹ thuật phù hợp ở cột bên trái sang phần mô tả tương ứng ở bên phải.',
      'Mỗi kỹ thuật có thể dùng một lần, nhiều lần hoặc không dùng.',
    ],
    s: [
      {
        p: 'Dự đoán một chuyến bay sẽ tới trễ bao nhiêu phút dựa trên lượng tuyết rơi tại sân bay.',
        o: ['Classification', 'Clustering', 'Regression'],
      },
      {
        p: 'Chia khách hàng thành các nhóm khác nhau để phục vụ bộ phận marketing.',
        o: ['Classification', 'Clustering', 'Regression'],
      },
      {
        p: 'Dự đoán một sinh viên có hoàn thành khoá học đại học hay không.',
        o: ['Classification', 'Clustering', 'Regression'],
      },
    ],
    e: [
      [
        'Hiểu đơn giản nhất, regression là dự đoán một mục tiêu dạng số. Linear regression tìm quan hệ tuyến tính giữa một hoặc nhiều biến độc lập với một kết quả số (biến phụ thuộc). Bạn dùng module này để khai báo phương pháp hồi quy tuyến tính rồi huấn luyện mô hình bằng tập dữ liệu có nhãn, sau đó dùng mô hình đã huấn luyện để dự đoán.',
        'Clustering trong machine learning là cách gom các điểm dữ liệu thành những cụm giống nhau, còn gọi là phân khúc (segmentation). Ví dụ, bạn có thể dùng clustering để tìm những người giống nhau theo nhân khẩu học, hoặc kết hợp với phân tích văn bản để gom các câu có chủ đề hay sắc thái tương tự.',
        'Two-class classification trả lời những câu hỏi hai lựa chọn đơn giản như Yes/No hay True/False.',
      ],
    ],
  },

  14: {
    q: [
      'Một ứng dụng dự đoán cung cấp đầu ra bằng âm thanh cho người dùng khiếm thị. Nguyên tắc AI có trách nhiệm nào được thể hiện ở đây?',
    ],
    o: ['Transparency', 'Inclusiveness', 'Fairness'],
    e: [
      [
        'Sai: Transparency nói về việc truyền đạt đầy đủ mục đích của hệ thống, cách nó hoạt động và những giới hạn có thể gặp.',
        'Đúng: Inclusiveness nói về việc AI phải mang lại lợi ích cho mọi thành phần trong xã hội, bất kể khả năng thể chất, giới tính, xu hướng tính dục, sắc tộc hay yếu tố nào khác.',
        'Sai: Fairness nói về việc phát triển mô hình và ứng dụng không mang thiên lệch theo giới tính, sắc tộc hay các yếu tố khác dẫn tới lợi thế hoặc bất lợi bất công cho một nhóm cụ thể.',
      ],
    ],
  },

  15: {
    q: [
      'Bạn đang phát triển một mô hình dự đoán sự kiện bằng classification.',
      'Bạn có một confusion matrix của mô hình chấm trên dữ liệu kiểm tra như hình bên dưới.',
      'Dùng danh sách thả xuống để chọn đáp án hoàn thiện mỗi phát biểu dựa trên thông tin trong hình.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    s: [
      { p: 'Có [đáp án] trường hợp dương tính được dự đoán đúng.', o: ['5', '11', '1033', '13951'] },
      { p: 'Có [đáp án] trường hợp false negative.', o: ['5', '11', '1033', '13951'] },
    ],
    e: [
      [
        'Trong confusion matrix, các trường hợp dương tính dự đoán đúng chính là True Positive (11).',
        'False negative là những trường hợp thực sự dương tính nhưng mô hình dự đoán là âm tính (1033).',
      ],
    ],
  },

  16: {
    q: [
      'Bạn cần xác định vị trí của các xe trong một tấm ảnh để ước lượng khoảng cách giữa chúng. Bạn nên dùng loại computer vision nào?',
    ],
    o: [
      'optical character recognition (OCR)',
      'object detection',
      'image classification',
      'face detection',
    ],
  },

  17: {
    q: [
      'Hoàn thành câu sau bằng cách chọn phương án phù hợp:',
      'Azure Machine Learning designer cho phép bạn tạo mô hình machine learning bằng cách:',
    ],
    o: [
      'thêm và nối các module trên một canvas trực quan.',
      'tự động thực hiện các tác vụ chuẩn bị dữ liệu thông thường.',
      'tự động chọn thuật toán để dựng mô hình chính xác nhất.',
      'dùng trải nghiệm notebook ưu tiên viết mã.',
    ],
  },

  18: {
    q: [
      'Công ty bạn đang tìm hiểu việc dùng công nghệ nhận dạng giọng nói trong các thiết bị nhà thông minh. Công ty muốn tìm ra những rào cản có thể vô tình bỏ sót một số nhóm người dùng.',
      'Đây là ví dụ của nguyên tắc AI có trách nhiệm nào của Microsoft?',
    ],
    o: [
      'accountability',
      'fairness',
      'inclusiveness',
      'privacy and security',
    ],
    e: [
      [
        'Từ khoá ở đây là "vô tình" (unintentionally). Thực hành thiết kế hoà nhập giúp người phát triển nhận ra và xử lý những rào cản trong sản phẩm có thể vô tình loại trừ một nhóm người.',
        'Gỡ bỏ các rào cản đó mở ra cơ hội đổi mới và thiết kế trải nghiệm tốt hơn cho tất cả mọi người.',
      ],
    ],
  },

  19: {
    q: [
      'Một đại lý bất động sản muốn dùng dữ liệu bán căn hộ trong quá khứ để huấn luyện mô hình machine learning. Mô hình phải dự đoán giá một căn hộ đã qua sử dụng dựa trên vị trí, diện tích và tuổi căn hộ.',
      'Đại lý nên dùng automated machine learning để tạo loại mô hình nào?',
    ],
    o: ['Classification', 'Regression', 'Time series forecasting'],
  },

  20: {
    q: [
      'Ba nguyên tắc AI có trách nhiệm của Microsoft là gì? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    o: [
      'knowledgeability',
      'decisiveness',
      'inclusiveness (hoà nhập)',
      'fairness (công bằng)',
      'reliability and safety (tin cậy và an toàn)',
    ],
  },
};
