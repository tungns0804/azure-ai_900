/**
 * Câu hỏi BỔ SUNG — phần thi d3 (Computer vision on Azure).
 */
export default [
  {
    id: 1034,
    topic: 'cv-classification',
    type: 'single',
    q: [
      'A mobile app takes a photograph of a single piece of fruit and reports whether it is an apple, a banana or an orange. The app does not need to know where in the picture the fruit is.',
      'Which computer vision solution does this describe?',
    ],
    o: [
      ['Image classification', true],
      ['Object detection', false],
      ['Optical character recognition', false],
      ['Semantic segmentation', false],
    ],
    e: [
      [
        'Image classification assigns one label to the whole image together with a confidence score, and says nothing about position.',
        'Object detection would also return a bounding box, which the app does not need.',
      ],
    ],
    vq: [
      'Một ứng dụng di động chụp ảnh một loại quả và cho biết đó là táo, chuối hay cam. Ứng dụng không cần biết quả nằm ở đâu trong ảnh.',
      'Đây là giải pháp computer vision nào?',
    ],
    vo: [
      'Image classification',
      'Object detection',
      'Optical character recognition',
      'Semantic segmentation',
    ],
    ve: [
      [
        'Image classification gán một nhãn cho toàn bộ ảnh kèm điểm tin cậy, và không nói gì về vị trí.',
        'Object detection còn trả về bounding box — thứ mà ứng dụng này không cần.',
      ],
    ],
  },

  {
    id: 1035,
    topic: 'cv-classification',
    type: 'yesno_table',
    q: [
      'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'An image classification model returns a confidence score between 0 and 1 alongside the predicted label.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'An image classification model returns the coordinates of each object it recognises.',
        o: ['Yes', 'No'],
        a: 1,
      },
      {
        p: 'Adding more training images is a valid way to improve a weak image classification model.',
        o: ['Yes', 'No'],
        a: 0,
      },
    ],
    e: [
      [
        'Classification returns a label plus a confidence value, but no coordinates — coordinates come from object detection.',
        'When a classification model performs poorly, the standard first remedy is to supply more, and more varied, training images.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      {
        p: 'Mô hình image classification trả về điểm tin cậy từ 0 đến 1 kèm theo nhãn dự đoán.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Mô hình image classification trả về toạ độ của từng vật thể mà nó nhận ra.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Bổ sung thêm ảnh huấn luyện là cách hợp lý để cải thiện mô hình image classification còn yếu.',
        o: ['Có', 'Không'],
      },
    ],
    ve: [
      [
        'Classification trả về nhãn kèm điểm tin cậy nhưng không có toạ độ — toạ độ là của object detection.',
        'Khi mô hình classification cho kết quả kém, cách xử lý đầu tiên theo chuẩn là bổ sung thêm ảnh huấn luyện và đa dạng hơn.',
      ],
    ],
  },

  {
    id: 1036,
    topic: 'cv-ocr',
    type: 'single',
    q: [
      'You need to extract the text of a 200-page scanned PDF document so that it can be indexed.',
      'Which Azure AI Vision capability should you use?',
    ],
    o: [
      ['The Read API', true],
      ['Image tagging', false],
      ['Face detection', false],
      ['Thumbnail generation', false],
    ],
    e: [
      [
        'The Read API is designed for text-heavy and multi-page documents, including PDFs, and runs asynchronously.',
        'The older OCR API is aimed at small amounts of text in a single image.',
      ],
    ],
    vq: [
      'Bạn cần trích xuất nội dung chữ của một file PDF scan dài 200 trang để đưa vào chỉ mục.',
      'Bạn nên dùng năng lực nào của Azure AI Vision?',
    ],
    vo: ['Read API', 'Image tagging', 'Face detection', 'Thumbnail generation'],
    ve: [
      [
        'Read API được thiết kế cho tài liệu nhiều chữ, nhiều trang, kể cả PDF, và chạy bất đồng bộ.',
        'OCR API cũ hướng tới lượng chữ nhỏ trong một tấm ảnh đơn lẻ.',
      ],
    ],
  },

  {
    id: 1037,
    topic: 'cv-ocr',
    type: 'yesno',
    q: [
      'Optical character recognition can extract handwritten text as well as printed text from an image.',
    ],
    subs: [{ o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'Azure AI Vision OCR reads both printed and handwritten text, which is why it is used for forms, notes and cheques as well as documents.',
      ],
    ],
    vq: [
      'Optical character recognition có thể trích xuất cả chữ viết tay lẫn chữ in từ một tấm ảnh.',
    ],
    vsubs: [{ o: ['Có', 'Không'] }],
    ve: [
      [
        'OCR của Azure AI Vision đọc được cả chữ in lẫn chữ viết tay, nên nó được dùng cho biểu mẫu, ghi chú và séc chứ không chỉ tài liệu.',
      ],
    ],
  },

  {
    id: 1038,
    topic: 'cv-vision-service',
    type: 'single',
    q: [
      'You need to identify famous buildings and monuments in tourist photographs without training a model of your own.',
      'Which Azure AI Vision feature should you use?',
    ],
    o: [
      ['Categories with the landmarks domain model', true],
      ['Custom Vision object detection', false],
      ['The Read API', false],
      ['Speaker recognition', false],
    ],
    e: [
      [
        'Azure AI Vision ships domain-specific models; the landmarks domain recognises well-known places, and the celebrities domain recognises well-known people.',
        'Custom Vision would require you to gather and label your own training images.',
      ],
    ],
    vq: [
      'Bạn cần nhận diện các công trình và địa danh nổi tiếng trong ảnh du lịch mà không phải tự huấn luyện mô hình.',
      'Bạn nên dùng tính năng nào của Azure AI Vision?',
    ],
    vo: [
      'Categories với domain model landmarks',
      'Object detection của Custom Vision',
      'Read API',
      'Speaker recognition',
    ],
    ve: [
      [
        'Azure AI Vision có sẵn các domain model chuyên biệt; domain landmarks nhận diện địa danh nổi tiếng, còn domain celebrities nhận diện người nổi tiếng.',
        'Custom Vision thì buộc bạn phải tự thu thập và gán nhãn ảnh huấn luyện.',
      ],
    ],
  },

  {
    id: 1039,
    topic: 'cv-vision-service',
    type: 'single',
    q: [
      'A retailer wants to train a model that recognises its own product packaging, using photographs taken in its own stores.',
      'Which service should the retailer use?',
    ],
    o: [
      ['Custom Vision', true],
      ['Azure AI Vision image analysis', false],
      ['Azure AI Language', false],
      ['Azure AI Search', false],
    ],
    e: [
      [
        'Custom Vision is the service for training a vision model on your own labelled images.',
        'Azure AI Vision image analysis is pre-built and cannot be taught new, company-specific classes.',
      ],
    ],
    vq: [
      'Một nhà bán lẻ muốn huấn luyện mô hình nhận diện bao bì sản phẩm của chính họ bằng ảnh chụp trong cửa hàng của họ.',
      'Họ nên dùng dịch vụ nào?',
    ],
    vo: [
      'Custom Vision',
      'Image analysis của Azure AI Vision',
      'Azure AI Language',
      'Azure AI Search',
    ],
    ve: [
      [
        'Custom Vision là dịch vụ dành cho việc huấn luyện mô hình thị giác trên ảnh có nhãn của chính bạn.',
        'Image analysis của Azure AI Vision là dịch vụ dựng sẵn, không dạy thêm được các lớp riêng của doanh nghiệp.',
      ],
    ],
  },

  {
    id: 1040,
    topic: 'cv-object-detection',
    type: 'single',
    q: [
      'A car park system must count how many vehicles are in a photograph and report where each one is.',
      'Which computer vision solution should be used?',
    ],
    o: [
      ['Object detection', true],
      ['Image classification', false],
      ['Optical character recognition', false],
      ['Sentiment analysis', false],
    ],
    e: [
      [
        'Object detection returns a class label, a probability and a bounding box for every object it finds, so it can both count and locate the vehicles.',
        'Image classification would only say that the photograph contains cars, without counting or locating them.',
      ],
    ],
    vq: [
      'Một hệ thống bãi đỗ xe cần đếm số phương tiện trong ảnh và cho biết vị trí của từng chiếc.',
      'Nên dùng giải pháp computer vision nào?',
    ],
    vo: [
      'Object detection',
      'Image classification',
      'Optical character recognition',
      'Sentiment analysis',
    ],
    ve: [
      [
        'Object detection trả về nhãn lớp, xác suất và bounding box cho từng vật thể tìm thấy, nên vừa đếm được vừa định vị được các xe.',
        'Image classification chỉ nói rằng trong ảnh có ô tô, không đếm và không định vị.',
      ],
    ],
  },

  {
    id: 1041,
    topic: 'cv-face',
    type: 'multi',
    q: [
      'Which two conditions are most likely to reduce the accuracy of a facial detection solution? Each correct answer presents a complete solution.',
      'NOTE: Each correct selection is worth one point.',
    ],
    o: [
      ['Extreme camera angles', true],
      ['Poor lighting in the room', true],
      ['Photographs taken with a colour camera', false],
      ['Subjects standing directly in front of the camera', false],
      ['Images stored in an encrypted datastore', false],
    ],
    e: [
      [
        'Face detection degrades when the face is partly hidden, badly lit or seen from an extreme angle.',
        'Colour photographs, frontal poses and encryption of the stored images have no negative effect on detection accuracy.',
      ],
    ],
    vq: [
      'Hai điều kiện nào dễ làm giảm độ chính xác của giải pháp phát hiện khuôn mặt nhất? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vo: [
      'Góc chụp cực đoan',
      'Phòng thiếu ánh sáng',
      'Ảnh chụp bằng máy ảnh màu',
      'Người được chụp đứng chính diện trước máy ảnh',
      'Ảnh được lưu trong datastore đã mã hoá',
    ],
    ve: [
      [
        'Việc phát hiện khuôn mặt kém đi khi mặt bị che một phần, thiếu sáng hoặc nhìn từ góc cực đoan.',
        'Ảnh màu, tư thế chính diện và việc mã hoá ảnh lưu trữ không gây ảnh hưởng xấu tới độ chính xác.',
      ],
    ],
  },
];
