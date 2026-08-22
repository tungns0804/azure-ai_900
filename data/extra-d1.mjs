/**
 * Câu hỏi BỔ SUNG — phần thi d1 (AI workloads & responsible AI).
 * Nguồn song ngữ: q/o/e là tiếng Anh, vq/vo/ve là bản dịch tiếng Việt.
 * Chạy `npm run build:data` để sinh public/ai900-extra.json và public/ai900-vi.json.
 */
export default [
  {
    id: 1001,
    topic: 'w-overview',
    type: 'single',
    q: [
      'A company stores thousands of scanned contracts as PDF files. You need to make the content of those contracts searchable and to surface the key phrases and organisations mentioned in them.',
      'Which type of AI workload does this describe?',
    ],
    o: [
      ['Knowledge mining', true],
      ['Anomaly detection', false],
      ['Conversational AI', false],
      ['Computer vision', false],
    ],
    e: [
      [
        'Knowledge mining turns a large volume of unstructured documents into a searchable index.',
        'Azure AI Search runs the documents through an indexer and an optional AI skillset that extracts key phrases and entities, then writes the result into the index.',
        'Anomaly detection looks for outliers, conversational AI holds a dialogue, and computer vision analyses images.',
      ],
    ],
    vq: [
      'Một công ty lưu hàng nghìn hợp đồng đã scan dưới dạng file PDF. Bạn cần làm cho nội dung các hợp đồng đó tìm kiếm được, đồng thời rút ra các key phrase và tên tổ chức được nhắc tới.',
      'Đây là loại workload AI nào?',
    ],
    vo: ['Knowledge mining', 'Anomaly detection', 'Conversational AI', 'Computer vision'],
    ve: [
      [
        'Knowledge mining biến một khối lớn tài liệu phi cấu trúc thành chỉ mục tìm kiếm được.',
        'Azure AI Search đưa tài liệu qua indexer và một skillset AI tuỳ chọn để trích key phrase cùng entity, rồi ghi kết quả vào index.',
        'Anomaly detection tìm điểm bất thường, conversational AI duy trì hội thoại, còn computer vision phân tích hình ảnh.',
      ],
    ],
  },

  {
    id: 1002,
    topic: 'w-overview',
    type: 'match',
    q: [
      'Match each scenario to the AI workload that best describes it.',
      'Each workload may be used once, more than once, or not at all.',
    ],
    subs: [
      {
        p: 'Monitor credit card transactions and flag payments that do not fit the usual spending pattern.',
        o: ['Anomaly detection', 'Computer vision', 'Conversational AI'],
        a: 0,
      },
      {
        p: 'Automatically generate a caption that describes the content of a photograph.',
        o: ['Anomaly detection', 'Computer vision', 'Conversational AI'],
        a: 1,
      },
      {
        p: 'Answer employee HR questions through a chat window in Microsoft Teams.',
        o: ['Anomaly detection', 'Computer vision', 'Conversational AI'],
        a: 2,
      },
    ],
    e: [
      [
        'Anomaly detection compares each new data point against the normal pattern and reports the outliers.',
        'Computer vision works on images and video, so describing a photograph belongs to it.',
        'Conversational AI is a two-way dialogue with a person, which is what a Teams chat bot does.',
      ],
    ],
    vq: [
      'Ghép mỗi tình huống với loại workload AI mô tả đúng nhất.',
      'Mỗi workload có thể dùng một lần, nhiều lần hoặc không dùng.',
    ],
    vsubs: [
      {
        p: 'Theo dõi giao dịch thẻ tín dụng và đánh dấu các khoản chi không khớp với thói quen chi tiêu thường ngày.',
        o: ['Anomaly detection', 'Computer vision', 'Conversational AI'],
      },
      {
        p: 'Tự động sinh chú thích mô tả nội dung của một tấm ảnh.',
        o: ['Anomaly detection', 'Computer vision', 'Conversational AI'],
      },
      {
        p: 'Trả lời câu hỏi nhân sự của nhân viên qua cửa sổ chat trong Microsoft Teams.',
        o: ['Anomaly detection', 'Computer vision', 'Conversational AI'],
      },
    ],
    ve: [
      [
        'Anomaly detection so từng điểm dữ liệu mới với mẫu bình thường rồi báo cáo các điểm lệch.',
        'Computer vision làm việc với ảnh và video, nên mô tả nội dung tấm ảnh thuộc về nó.',
        'Conversational AI là hội thoại hai chiều với con người — đúng việc của một bot trong Teams.',
      ],
    ],
  },

  {
    id: 1003,
    topic: 'w-nlp',
    type: 'single',
    q: [
      'You need to analyse thousands of customer emails and decide whether each message expresses a positive or a negative opinion.',
      'Which type of AI workload does this describe?',
    ],
    o: [
      ['Natural language processing', true],
      ['Computer vision', false],
      ['Knowledge mining', false],
      ['Anomaly detection', false],
    ],
    e: [
      [
        'The input is written human language, so this is a natural language processing workload.',
        'Judging whether text is positive or negative is sentiment analysis, a feature of Azure AI Language.',
      ],
    ],
    vq: [
      'Bạn cần phân tích hàng nghìn email khách hàng và xác định mỗi thư mang ý kiến tích cực hay tiêu cực.',
      'Đây là loại workload AI nào?',
    ],
    vo: ['Natural language processing', 'Computer vision', 'Knowledge mining', 'Anomaly detection'],
    ve: [
      [
        'Đầu vào là ngôn ngữ tự nhiên dạng văn bản, nên đây là workload natural language processing.',
        'Việc đánh giá văn bản tích cực hay tiêu cực chính là sentiment analysis — một tính năng của Azure AI Language.',
      ],
    ],
  },

  {
    id: 1004,
    topic: 'w-nlp',
    type: 'multi',
    q: [
      'Which two scenarios are examples of a natural language processing workload? Each correct answer presents a complete solution.',
      'NOTE: Each correct selection is worth one point.',
    ],
    o: [
      ['Transcribing a recorded meeting into a written document', true],
      ['Detecting defective parts on a production line from photographs', false],
      ['Extracting the main talking points from a news article', true],
      ['Predicting next month’s electricity demand from historical usage', false],
      ['Grouping customers into segments based on purchase history', false],
    ],
    e: [
      [
        'Speech-to-text transcription and key phrase extraction both operate on human language, so both are NLP workloads.',
        'Inspecting photographs is computer vision, forecasting a number is regression, and grouping unlabelled customers is clustering.',
      ],
    ],
    vq: [
      'Hai tình huống nào là ví dụ của workload natural language processing? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vo: [
      'Ghi lại nội dung một cuộc họp đã thu âm thành văn bản',
      'Phát hiện linh kiện lỗi trên dây chuyền sản xuất từ ảnh chụp',
      'Trích ra các ý chính của một bài báo',
      'Dự báo nhu cầu điện tháng tới dựa trên lịch sử tiêu thụ',
      'Chia khách hàng thành các nhóm dựa trên lịch sử mua hàng',
    ],
    ve: [
      [
        'Chuyển lời nói thành văn bản (speech-to-text) và trích xuất key phrase đều xử lý ngôn ngữ của con người, nên đều là workload NLP.',
        'Kiểm tra ảnh chụp là computer vision, dự báo một con số là regression, còn gom khách hàng chưa có nhãn là clustering.',
      ],
    ],
  },

  {
    id: 1005,
    topic: 'w-nlp',
    type: 'yesno_table',
    q: [
      'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'Translating a webpage from English into Vietnamese is a natural language processing workload.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Reading the licence plate number from a photograph of a car is a natural language processing workload.',
        o: ['Yes', 'No'],
        a: 1,
      },
      {
        p: 'Generating a spoken audio version of a written article is a natural language processing workload.',
        o: ['Yes', 'No'],
        a: 0,
      },
    ],
    e: [
      [
        'Translation and text-to-speech both work on human language, so both are NLP workloads.',
        'Reading a licence plate starts from an image, which makes it optical character recognition — a computer vision workload — even though the output happens to be text.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      {
        p: 'Dịch một trang web từ tiếng Anh sang tiếng Việt là workload natural language processing.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Đọc biển số xe từ ảnh chụp là workload natural language processing.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Tạo bản đọc thành tiếng cho một bài viết là workload natural language processing.',
        o: ['Có', 'Không'],
      },
    ],
    ve: [
      [
        'Dịch thuật và text-to-speech đều xử lý ngôn ngữ của con người nên đều là workload NLP.',
        'Đọc biển số xe bắt đầu từ một tấm ảnh nên là optical character recognition — thuộc computer vision — dù kết quả trả về là chữ.',
      ],
    ],
  },

  {
    id: 1006,
    topic: 'w-anomaly',
    type: 'yesno',
    q: [
      'Monitoring the temperature readings of a factory sensor and raising an alert when a reading falls far outside the normal range is an example of anomaly detection.',
    ],
    subs: [{ o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'Anomaly detection compares incoming values against the pattern learned from historical data and flags the ones that do not fit.',
        'A sensor reading far outside the usual range is exactly such an outlier.',
      ],
    ],
    vq: [
      'Theo dõi số liệu nhiệt độ của một cảm biến trong nhà máy và cảnh báo khi một giá trị lệch xa khỏi khoảng bình thường là ví dụ của anomaly detection.',
    ],
    vsubs: [{ o: ['Có', 'Không'] }],
    ve: [
      [
        'Anomaly detection so các giá trị mới với mẫu học được từ dữ liệu lịch sử rồi đánh dấu những giá trị không khớp.',
        'Một số đo cảm biến lệch xa khỏi khoảng thông thường chính là điểm bất thường như vậy.',
      ],
    ],
  },

  {
    id: 1007,
    topic: 'w-anomaly',
    type: 'single',
    q: [
      'A bank wants to identify credit card transactions that differ significantly from a cardholder’s normal behaviour so that possible fraud can be investigated.',
      'Which type of AI workload should the bank use?',
    ],
    o: [
      ['Anomaly detection', true],
      ['Image classification', false],
      ['Knowledge mining', false],
      ['Speech synthesis', false],
    ],
    e: [
      [
        'Spotting values that break the established pattern is the definition of anomaly detection.',
        'Watch the wording: the question asks for transactions that are unusual, not for a category to be predicted, so this is not classification.',
      ],
    ],
    vq: [
      'Một ngân hàng muốn phát hiện các giao dịch thẻ tín dụng khác biệt rõ rệt so với thói quen của chủ thẻ để điều tra khả năng gian lận.',
      'Ngân hàng nên dùng loại workload AI nào?',
    ],
    vo: ['Anomaly detection', 'Image classification', 'Knowledge mining', 'Speech synthesis'],
    ve: [
      [
        'Phát hiện các giá trị phá vỡ mẫu đã hình thành chính là định nghĩa của anomaly detection.',
        'Chú ý cách hỏi: đề tìm giao dịch bất thường chứ không dự đoán một hạng mục, nên đây không phải classification.',
      ],
    ],
  },

  {
    id: 1008,
    topic: 'ai-services-resource',
    type: 'single',
    q: [
      'You plan to use Azure AI Language, Azure AI Vision and Azure AI Speech in the same application. You want to manage all three with a single key and endpoint, and to see a single consolidated bill.',
      'Which type of resource should you create?',
    ],
    o: [
      ['A multi-service Azure AI services resource', true],
      ['A separate single-service resource for each service', false],
      ['An Azure Machine Learning workspace', false],
      ['A Custom Vision training resource', false],
    ],
    e: [
      [
        'A multi-service Azure AI services resource exposes one key and one endpoint that several services share, and it bills them together.',
        'Single-service resources are the right choice only when you want each service billed and managed separately.',
      ],
    ],
    vq: [
      'Bạn dự định dùng Azure AI Language, Azure AI Vision và Azure AI Speech trong cùng một ứng dụng. Bạn muốn quản lý cả ba bằng một key và một endpoint duy nhất, đồng thời gộp chung hoá đơn.',
      'Bạn nên tạo loại tài nguyên nào?',
    ],
    vo: [
      'Một tài nguyên Azure AI services đa dịch vụ (multi-service)',
      'Một tài nguyên đơn dịch vụ riêng cho từng dịch vụ',
      'Một Azure Machine Learning workspace',
      'Một tài nguyên training của Custom Vision',
    ],
    ve: [
      [
        'Tài nguyên Azure AI services đa dịch vụ cung cấp một key và một endpoint dùng chung cho nhiều dịch vụ, đồng thời gộp chi phí vào một hoá đơn.',
        'Tài nguyên đơn dịch vụ chỉ hợp lý khi bạn muốn tính phí và quản lý từng dịch vụ riêng biệt.',
      ],
    ],
  },

  {
    id: 1009,
    topic: 'rai-privacy',
    type: 'single',
    q: [
      'A hospital trains a model on patient records. The records are encrypted both at rest and in transit, and only authorised clinicians are allowed to read them.',
      'Which Microsoft responsible AI principle does this describe?',
    ],
    o: [
      ['Privacy and security', true],
      ['Inclusiveness', false],
      ['Transparency', false],
      ['Accountability', false],
    ],
    e: [
      [
        'Privacy and security covers protecting the personal data that a model is trained on and operates over.',
        'Encryption, access control and anonymisation are the classic trigger words for this principle.',
      ],
    ],
    vq: [
      'Một bệnh viện huấn luyện mô hình trên hồ sơ bệnh nhân. Hồ sơ được mã hoá cả khi lưu trữ lẫn khi truyền, và chỉ bác sĩ được cấp quyền mới đọc được.',
      'Đây là nguyên tắc AI có trách nhiệm nào của Microsoft?',
    ],
    vo: ['Privacy and security', 'Inclusiveness', 'Transparency', 'Accountability'],
    ve: [
      [
        'Privacy and security nói về việc bảo vệ dữ liệu cá nhân dùng để huấn luyện và vận hành mô hình.',
        'Mã hoá, kiểm soát truy cập và ẩn danh hoá là những từ khoá điển hình của nguyên tắc này.',
      ],
    ],
  },

  {
    id: 1010,
    topic: 'rai-privacy',
    type: 'yesno',
    q: [
      'Removing personally identifiable information from a dataset before the model is trained supports the privacy and security principle of responsible AI.',
    ],
    subs: [{ o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'Anonymising or removing personal data limits what the model and its operators can expose, which is exactly what privacy and security asks for.',
      ],
    ],
    vq: [
      'Loại bỏ thông tin định danh cá nhân khỏi tập dữ liệu trước khi huấn luyện mô hình là việc làm phù hợp với nguyên tắc privacy and security.',
    ],
    vsubs: [{ o: ['Có', 'Không'] }],
    ve: [
      [
        'Ẩn danh hoá hoặc gỡ bỏ dữ liệu cá nhân làm giảm những gì mô hình và người vận hành có thể để lộ — đúng điều mà privacy and security yêu cầu.',
      ],
    ],
  },

  {
    id: 1011,
    topic: 'rai-privacy',
    type: 'multi',
    q: [
      'Which two measures support the privacy and security principle of responsible AI? Each correct answer presents a complete solution.',
      'NOTE: Each correct selection is worth one point.',
    ],
    o: [
      ['Encrypt the dataset that is used to train the model', true],
      ['Publish the confusion matrix of the model on a public website', false],
      ['Apply role-based access control so that only approved users can read personal data', true],
      ['Add more training images so that the model becomes more accurate', false],
      ['Provide an audio version of the output for users who cannot see the screen', false],
    ],
    e: [
      [
        'Encryption and role-based access control both restrict who can reach personal data, which is the heart of privacy and security.',
        'Improving accuracy relates to reliability, and providing an audio alternative relates to inclusiveness.',
      ],
    ],
    vq: [
      'Hai biện pháp nào phù hợp với nguyên tắc privacy and security? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vo: [
      'Mã hoá tập dữ liệu dùng để huấn luyện mô hình',
      'Công bố confusion matrix của mô hình trên một website công khai',
      'Áp dụng role-based access control để chỉ người được duyệt mới đọc được dữ liệu cá nhân',
      'Bổ sung thêm ảnh huấn luyện để mô hình chính xác hơn',
      'Cung cấp bản đọc bằng âm thanh cho người không nhìn được màn hình',
    ],
    ve: [
      [
        'Mã hoá và role-based access control đều giới hạn ai được chạm vào dữ liệu cá nhân — đúng cốt lõi của privacy and security.',
        'Tăng độ chính xác thuộc về reliability, còn cung cấp bản âm thanh thay thế thuộc về inclusiveness.',
      ],
    ],
  },

  {
    id: 1012,
    topic: 'rai-privacy',
    type: 'yesno_table',
    q: [
      'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'Anonymising customer names before the data is analysed supports privacy and security.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'The privacy and security principle applies only while a model is being trained, not after it is deployed.',
        o: ['Yes', 'No'],
        a: 1,
      },
      {
        p: 'Storing training data in an encrypted datastore supports privacy and security.',
        o: ['Yes', 'No'],
        a: 0,
      },
    ],
    e: [
      [
        'Privacy and security applies across the whole lifecycle: collecting, training, deploying and operating the model.',
        'Anonymisation and encryption are both concrete ways to honour the principle.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      {
        p: 'Ẩn danh hoá tên khách hàng trước khi phân tích dữ liệu là việc phù hợp với privacy and security.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Nguyên tắc privacy and security chỉ áp dụng khi huấn luyện mô hình, không áp dụng sau khi triển khai.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Lưu dữ liệu huấn luyện trong một datastore đã mã hoá là việc phù hợp với privacy and security.',
        o: ['Có', 'Không'],
      },
    ],
    ve: [
      [
        'Privacy and security áp dụng cho toàn bộ vòng đời: thu thập, huấn luyện, triển khai và vận hành mô hình.',
        'Ẩn danh hoá và mã hoá đều là cách cụ thể để tôn trọng nguyên tắc này.',
      ],
    ],
  },

  {
    id: 1013,
    topic: 'rai-accountability',
    type: 'single',
    q: [
      'An insurance company sets up a governance board that reviews and signs off every AI model before it goes live, and that remains answerable for the decisions the models make.',
      'Which Microsoft responsible AI principle does this describe?',
    ],
    o: [
      ['Accountability', true],
      ['Reliability and safety', false],
      ['Fairness', false],
      ['Privacy and security', false],
    ],
    e: [
      [
        'Accountability says that people, not models, carry the final responsibility for an AI system.',
        'It shows up as governance structures: review boards, sign-off processes, legal compliance and internal standards.',
      ],
    ],
    vq: [
      'Một công ty bảo hiểm lập hội đồng quản trị chuyên rà soát và phê duyệt mọi mô hình AI trước khi đưa vào chạy thật, đồng thời chịu trách nhiệm về các quyết định mà mô hình đưa ra.',
      'Đây là nguyên tắc AI có trách nhiệm nào của Microsoft?',
    ],
    vo: ['Accountability', 'Reliability and safety', 'Fairness', 'Privacy and security'],
    ve: [
      [
        'Accountability khẳng định con người — chứ không phải mô hình — chịu trách nhiệm cuối cùng về hệ thống AI.',
        'Nguyên tắc này thể hiện qua khung quản trị: hội đồng rà soát, quy trình phê duyệt, tuân thủ pháp lý và tiêu chuẩn nội bộ.',
      ],
    ],
  },

  {
    id: 1014,
    topic: 'rai-accountability',
    type: 'yesno',
    q: [
      'The accountability principle means that the AI system itself, rather than the people who design and operate it, is responsible for its decisions.',
    ],
    subs: [{ o: ['Yes', 'No'], a: 1 }],
    e: [
      [
        'It is the other way round. Accountability puts the responsibility on the people and the organisation that build, deploy and operate the system.',
      ],
    ],
    vq: [
      'Nguyên tắc accountability nghĩa là chính hệ thống AI, chứ không phải những người thiết kế và vận hành nó, chịu trách nhiệm về các quyết định của nó.',
    ],
    vsubs: [{ o: ['Có', 'Không'] }],
    ve: [
      [
        'Thực tế ngược lại. Accountability đặt trách nhiệm lên con người và tổ chức xây dựng, triển khai, vận hành hệ thống.',
      ],
    ],
  },

  {
    id: 1015,
    topic: 'rai-fairness',
    type: 'single',
    q: [
      'A recruitment model consistently scores male applicants higher than equally qualified female applicants.',
      'Which Microsoft responsible AI principle has been violated?',
    ],
    o: [
      ['Fairness', true],
      ['Transparency', false],
      ['Reliability and safety', false],
      ['Accountability', false],
    ],
    e: [
      [
        'Fairness requires that an AI system treats all groups of people equally and does not inherit bias from its training data.',
        'A model that favours one gender over another with the same qualifications is the textbook example of unfairness.',
      ],
    ],
    vq: [
      'Một mô hình tuyển dụng luôn chấm ứng viên nam điểm cao hơn ứng viên nữ có cùng năng lực.',
      'Nguyên tắc AI có trách nhiệm nào của Microsoft đã bị vi phạm?',
    ],
    vo: ['Fairness', 'Transparency', 'Reliability and safety', 'Accountability'],
    ve: [
      [
        'Fairness yêu cầu hệ thống AI đối xử công bằng với mọi nhóm người và không kế thừa thiên lệch từ dữ liệu huấn luyện.',
        'Mô hình ưu ái một giới so với giới khác dù năng lực như nhau là ví dụ kinh điển của việc thiếu công bằng.',
      ],
    ],
  },

  {
    id: 1016,
    topic: 'rai-fairness',
    type: 'multi',
    q: [
      'Which two actions help reduce unfairness in a machine learning model? Each correct answer presents a complete solution.',
      'NOTE: Each correct selection is worth one point.',
    ],
    o: [
      ['Check whether the training data over-represents one group of people', true],
      ['Compare the accuracy of the model separately for each demographic group', true],
      ['Increase the number of training epochs', false],
      ['Deploy the model to an Azure Kubernetes Service cluster', false],
      ['Encrypt the model file before it is published', false],
    ],
    e: [
      [
        'Unfairness usually comes from skewed training data, so inspecting the balance of the dataset is the first step.',
        'Measuring performance per group reveals whether the model works worse for some people than for others.',
        'Epochs, deployment targets and encryption have nothing to do with fairness.',
      ],
    ],
    vq: [
      'Hai hành động nào giúp giảm thiếu công bằng trong một mô hình machine learning? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vo: [
      'Kiểm tra xem dữ liệu huấn luyện có thiên về một nhóm người nào không',
      'So sánh độ chính xác của mô hình riêng cho từng nhóm nhân khẩu',
      'Tăng số epoch huấn luyện',
      'Triển khai mô hình lên cụm Azure Kubernetes Service',
      'Mã hoá file mô hình trước khi công bố',
    ],
    ve: [
      [
        'Thiếu công bằng thường bắt nguồn từ dữ liệu huấn luyện lệch, nên rà soát mức cân bằng của tập dữ liệu là bước đầu tiên.',
        'Đo hiệu năng theo từng nhóm cho thấy mô hình có hoạt động kém hơn với một số người hay không.',
        'Số epoch, nơi triển khai và mã hoá không liên quan tới fairness.',
      ],
    ],
  },

  {
    id: 1017,
    topic: 'rai-overview',
    type: 'match',
    q: [
      'Match each requirement to the Microsoft responsible AI principle that it belongs to.',
      'Each principle may be used once, more than once, or not at all.',
    ],
    subs: [
      {
        p: 'The system must not favour one group of people over another.',
        o: ['Fairness', 'Reliability and safety', 'Transparency'],
        a: 0,
      },
      {
        p: 'The system must keep working correctly when it meets unusual or missing values.',
        o: ['Fairness', 'Reliability and safety', 'Transparency'],
        a: 1,
      },
      {
        p: 'Users must be able to understand the factors that led to a decision.',
        o: ['Fairness', 'Reliability and safety', 'Transparency'],
        a: 2,
      },
    ],
    e: [
      [
        'Fairness is about equal treatment across groups of people.',
        'Reliability and safety is about consistent, safe behaviour, including with unusual or missing values.',
        'Transparency is about being able to explain how the system reached its output.',
      ],
    ],
    vq: [
      'Ghép mỗi yêu cầu với nguyên tắc AI có trách nhiệm tương ứng của Microsoft.',
      'Mỗi nguyên tắc có thể dùng một lần, nhiều lần hoặc không dùng.',
    ],
    vsubs: [
      {
        p: 'Hệ thống không được ưu ái nhóm người này hơn nhóm người khác.',
        o: ['Fairness', 'Reliability and safety', 'Transparency'],
      },
      {
        p: 'Hệ thống phải hoạt động đúng ngay cả khi gặp giá trị bất thường hoặc bị thiếu.',
        o: ['Fairness', 'Reliability and safety', 'Transparency'],
      },
      {
        p: 'Người dùng phải hiểu được những yếu tố nào dẫn tới quyết định.',
        o: ['Fairness', 'Reliability and safety', 'Transparency'],
      },
    ],
    ve: [
      [
        'Fairness nói về đối xử bình đẳng giữa các nhóm người.',
        'Reliability and safety nói về hành vi ổn định và an toàn, kể cả khi gặp giá trị bất thường hoặc bị thiếu.',
        'Transparency nói về khả năng giải thích cách hệ thống đi tới kết quả.',
      ],
    ],
  },
];
