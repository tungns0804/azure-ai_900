/**
 * Câu hỏi BỔ SUNG — phần thi d4, nhóm 2 (Language service, Speech service, key phrase,
 * sentiment, translation).
 */
export default [
  {
    id: 1055,
    topic: 'nlp-language-service',
    type: 'multi',
    q: [
      'Which three capabilities are provided by the Azure AI Language service? Each correct answer presents a complete solution.',
      'NOTE: Each correct selection is worth one point.',
    ],
    o: [
      ['Sentiment analysis', true],
      ['Key phrase extraction', true],
      ['Named entity recognition', true],
      ['Object detection in images', false],
      ['Model training with the Azure Machine Learning designer', false],
    ],
    e: [
      [
        'Azure AI Language is the unified text service: sentiment analysis, key phrase extraction, named entity recognition, language detection, summarisation, question answering and conversational language understanding.',
        'Object detection belongs to computer vision, and the designer belongs to Azure Machine Learning.',
      ],
    ],
    vq: [
      'Ba năng lực nào do dịch vụ Azure AI Language cung cấp? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vo: [
      'Sentiment analysis',
      'Key phrase extraction',
      'Named entity recognition',
      'Phát hiện vật thể trong ảnh',
      'Huấn luyện mô hình bằng Azure Machine Learning designer',
    ],
    ve: [
      [
        'Azure AI Language là dịch vụ văn bản hợp nhất: sentiment analysis, key phrase extraction, named entity recognition, language detection, summarisation, question answering và conversational language understanding.',
        'Phát hiện vật thể thuộc computer vision, còn designer thuộc Azure Machine Learning.',
      ],
    ],
  },

  {
    id: 1056,
    topic: 'nlp-language-service',
    type: 'single',
    q: [
      'You need to shorten long product manuals into a few sentences that capture their main content.',
      'Which Azure AI Language feature should you use?',
    ],
    o: [
      ['Summarisation', true],
      ['Language detection', false],
      ['Speech synthesis', false],
      ['Anomaly detection', false],
    ],
    e: [
      [
        'Summarisation produces a condensed version of a document while keeping the essential information.',
        'Do not confuse it with key phrase extraction, which returns a list of phrases rather than readable prose.',
      ],
    ],
    vq: [
      'Bạn cần rút gọn các cuốn hướng dẫn sản phẩm dài thành vài câu nêu đúng nội dung chính.',
      'Bạn nên dùng tính năng nào của Azure AI Language?',
    ],
    vo: ['Summarisation', 'Language detection', 'Speech synthesis', 'Anomaly detection'],
    ve: [
      [
        'Summarisation tạo ra bản rút gọn của tài liệu mà vẫn giữ được thông tin cốt lõi.',
        'Đừng nhầm với key phrase extraction — cái đó trả về danh sách cụm từ chứ không phải đoạn văn đọc được.',
      ],
    ],
  },

  {
    id: 1057,
    topic: 'nlp-language-service',
    type: 'yesno',
    q: [
      'Question answering and conversational language understanding are both features of the Azure AI Language service.',
    ],
    subs: [{ o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'Azure AI Language brought the former QnA Maker and LUIS capabilities together into one service.',
        'They are frequently combined in a single bot: question answering handles the FAQ, conversational language understanding handles the commands.',
      ],
    ],
    vq: [
      'Question answering và conversational language understanding đều là tính năng của dịch vụ Azure AI Language.',
    ],
    vsubs: [{ o: ['Có', 'Không'] }],
    ve: [
      [
        'Azure AI Language đã gom các năng lực trước đây của QnA Maker và LUIS về chung một dịch vụ.',
        'Chúng hay được kết hợp trong cùng một bot: question answering lo phần FAQ, conversational language understanding lo phần ra lệnh.',
      ],
    ],
  },

  {
    id: 1058,
    topic: 'nlp-language-service',
    type: 'single',
    q: [
      'Which Azure resource lets a single application use Azure AI Language, Azure AI Vision and Azure AI Speech through one endpoint and one key?',
    ],
    o: [
      ['An Azure AI services multi-service resource', true],
      ['An Azure AI Language resource', false],
      ['An Azure AI Search service', false],
      ['An Azure Bot Service resource', false],
    ],
    e: [
      [
        'The multi-service Azure AI services resource shares one endpoint and one key across the services it covers.',
        'A Language resource covers only the Language service.',
      ],
    ],
    vq: [
      'Tài nguyên Azure nào cho phép một ứng dụng dùng Azure AI Language, Azure AI Vision và Azure AI Speech qua chung một endpoint và một key?',
    ],
    vo: [
      'Tài nguyên Azure AI services đa dịch vụ',
      'Tài nguyên Azure AI Language',
      'Dịch vụ Azure AI Search',
      'Tài nguyên Azure Bot Service',
    ],
    ve: [
      [
        'Tài nguyên Azure AI services đa dịch vụ dùng chung một endpoint và một key cho các dịch vụ mà nó bao phủ.',
        'Tài nguyên Language chỉ phục vụ riêng dịch vụ Language.',
      ],
    ],
  },

  {
    id: 1059,
    topic: 'nlp-speech-service',
    type: 'multi',
    q: [
      'Which three capabilities are part of the Azure AI Speech service? Each correct answer presents a complete solution.',
      'NOTE: Each correct selection is worth one point.',
    ],
    o: [
      ['Speech to text', true],
      ['Text to speech', true],
      ['Speaker recognition', true],
      ['Image tagging', false],
      ['Clustering of customer records', false],
    ],
    e: [
      [
        'Azure AI Speech covers speech to text, text to speech, speech translation and speaker recognition.',
        'Image tagging belongs to Azure AI Vision, and clustering is a machine learning technique.',
      ],
    ],
    vq: [
      'Ba năng lực nào thuộc dịch vụ Azure AI Speech? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vo: [
      'Speech to text',
      'Text to speech',
      'Speaker recognition',
      'Gắn tag cho ảnh',
      'Phân cụm hồ sơ khách hàng',
    ],
    ve: [
      [
        'Azure AI Speech gồm speech to text, text to speech, speech translation và speaker recognition.',
        'Gắn tag cho ảnh thuộc Azure AI Vision, còn clustering là một kỹ thuật machine learning.',
      ],
    ],
  },

  {
    id: 1060,
    topic: 'nlp-speech-service',
    type: 'single',
    q: [
      'Which model does Azure AI Speech use by default for speech to text, before any customisation is applied?',
    ],
    o: [
      ['The Universal Language Model trained by Microsoft', true],
      ['A model that you must train from your own recordings', false],
      ['The DALL·E image model', false],
      ['A K-Means clustering model', false],
    ],
    e: [
      [
        'Out of the box, speech to text uses a Universal Language Model trained with Microsoft-owned data that reflects commonly used spoken language.',
        'Custom speech models are optional and are used for specialist vocabulary or unusual acoustic conditions.',
      ],
    ],
    vq: [
      'Azure AI Speech dùng mô hình nào theo mặc định cho speech to text khi chưa tuỳ chỉnh gì?',
    ],
    vo: [
      'Universal Language Model do Microsoft huấn luyện',
      'Một mô hình mà bạn phải tự huấn luyện từ bản thu của mình',
      'Mô hình sinh ảnh DALL·E',
      'Một mô hình phân cụm K-Means',
    ],
    ve: [
      [
        'Mặc định, speech to text dùng Universal Language Model được huấn luyện bằng dữ liệu của Microsoft, phản ánh ngôn ngữ nói thông dụng.',
        'Mô hình custom speech chỉ là tuỳ chọn, dùng cho từ vựng chuyên ngành hoặc điều kiện âm thanh khác thường.',
      ],
    ],
  },

  {
    id: 1061,
    topic: 'nlp-speech-service',
    type: 'yesno',
    q: [
      'Speaker recognition, which identifies who is talking, is a capability of the Azure AI Speech service.',
    ],
    subs: [{ o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'Speaker recognition sits in Azure AI Speech alongside speech to text, text to speech and speech translation.',
        'It answers “who spoke” rather than “what was said”.',
      ],
    ],
    vq: [
      'Speaker recognition — xác định ai đang nói — là một năng lực của dịch vụ Azure AI Speech.',
    ],
    vsubs: [{ o: ['Có', 'Không'] }],
    ve: [
      [
        'Speaker recognition nằm trong Azure AI Speech, cùng với speech to text, text to speech và speech translation.',
        'Nó trả lời câu hỏi “ai đã nói” chứ không phải “đã nói gì”.',
      ],
    ],
  },

  {
    id: 1062,
    topic: 'nlp-keyphrase',
    type: 'single',
    q: [
      'A publisher wants an automatic list of the main talking points of each article so that editors can scan them quickly.',
      'Which Azure AI Language feature should be used?',
    ],
    o: [
      ['Key phrase extraction', true],
      ['Sentiment analysis', false],
      ['Language detection', false],
      ['Speech translation', false],
    ],
    e: [
      [
        'Key phrase extraction returns the main talking points of a piece of text.',
        'The phrase “main talking points” in a question is a reliable signal for this feature.',
      ],
    ],
    vq: [
      'Một nhà xuất bản muốn có danh sách tự động các ý chính của mỗi bài viết để biên tập viên đọc lướt nhanh.',
      'Nên dùng tính năng nào của Azure AI Language?',
    ],
    vo: ['Key phrase extraction', 'Sentiment analysis', 'Language detection', 'Speech translation'],
    ve: [
      [
        'Key phrase extraction trả về các ý chính (main talking points) của một đoạn văn bản.',
        'Cụm “main talking points” trong đề là dấu hiệu chắc chắn cho tính năng này.',
      ],
    ],
  },

  {
    id: 1063,
    topic: 'nlp-keyphrase',
    type: 'yesno',
    q: [
      'Key phrase extraction returns a numeric score that indicates whether the text is positive or negative.',
    ],
    subs: [{ o: ['Yes', 'No'], a: 1 }],
    e: [
      [
        'Key phrase extraction returns a list of the main phrases in the text, not a sentiment score.',
        'The positive or negative score is produced by sentiment analysis.',
      ],
    ],
    vq: [
      'Key phrase extraction trả về một điểm số cho biết văn bản là tích cực hay tiêu cực.',
    ],
    vsubs: [{ o: ['Có', 'Không'] }],
    ve: [
      [
        'Key phrase extraction trả về danh sách các cụm từ chính trong văn bản chứ không phải điểm cảm xúc.',
        'Điểm tích cực hay tiêu cực là sản phẩm của sentiment analysis.',
      ],
    ],
  },

  {
    id: 1064,
    topic: 'nlp-sentiment',
    type: 'single',
    q: [
      'A sentiment analysis call returns a score of 0.94 for a customer review.',
      'How should the review be interpreted?',
    ],
    o: [
      ['As a positive review', true],
      ['As a negative review', false],
      ['As a neutral review', false],
      ['As a review written in an undetermined language', false],
    ],
    e: [
      [
        'Sentiment scores run from 0 to 1: values close to 1 are positive, values close to 0 are negative and values around 0.5 are neutral.',
        'A score of 0.94 is therefore clearly positive.',
      ],
    ],
    vq: [
      'Một lời gọi sentiment analysis trả về điểm 0.94 cho một đánh giá của khách hàng.',
      'Nên hiểu đánh giá này thế nào?',
    ],
    vo: [
      'Là một đánh giá tích cực',
      'Là một đánh giá tiêu cực',
      'Là một đánh giá trung tính',
      'Là đánh giá viết bằng ngôn ngữ không xác định được',
    ],
    ve: [
      [
        'Điểm sentiment chạy từ 0 đến 1: gần 1 là tích cực, gần 0 là tiêu cực, quanh 0.5 là trung tính.',
        'Vì vậy điểm 0.94 rõ ràng là tích cực.',
      ],
    ],
  },

  {
    id: 1065,
    topic: 'nlp-sentiment',
    type: 'yesno_table',
    q: [
      'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'Sentiment analysis can be used to decide whether social media posts about a brand are favourable.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'A sentiment score close to 0.5 indicates neutral or indeterminate sentiment.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Sentiment analysis identifies which language a document is written in.',
        o: ['Yes', 'No'],
        a: 1,
      },
    ],
    e: [
      [
        'Sentiment analysis measures tone, which is exactly what brand monitoring needs, and scores near 0.5 mean the tone is unclear.',
        'Identifying the language of a document is language detection.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      {
        p: 'Sentiment analysis dùng được để xác định các bài đăng mạng xã hội về một thương hiệu có thiện cảm hay không.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Điểm sentiment gần 0.5 cho biết sắc thái trung tính hoặc không xác định rõ.',
        o: ['Có', 'Không'],
      },
      { p: 'Sentiment analysis xác định tài liệu được viết bằng ngôn ngữ nào.', o: ['Có', 'Không'] },
    ],
    ve: [
      [
        'Sentiment analysis đo sắc thái — đúng thứ mà việc theo dõi thương hiệu cần — và điểm quanh 0.5 nghĩa là sắc thái không rõ ràng.',
        'Việc xác định ngôn ngữ của tài liệu là language detection.',
      ],
    ],
  },

  {
    id: 1066,
    topic: 'nlp-translate',
    type: 'single',
    q: [
      'A company must publish the same written press release in twelve languages at once.',
      'Which Azure service should the company use?',
    ],
    o: [
      ['Azure AI Translator', true],
      ['Azure AI Speech speech-to-text', false],
      ['Azure AI Vision', false],
      ['Azure AI Search', false],
    ],
    e: [
      [
        'Azure AI Translator translates written text and can return several target languages from a single request.',
        'Speech-to-text would be the answer only if the source material were audio.',
      ],
    ],
    vq: [
      'Một công ty phải phát hành cùng một thông cáo báo chí dạng văn bản bằng mười hai thứ tiếng cùng lúc.',
      'Công ty nên dùng dịch vụ Azure nào?',
    ],
    vo: [
      'Azure AI Translator',
      'Speech-to-text của Azure AI Speech',
      'Azure AI Vision',
      'Azure AI Search',
    ],
    ve: [
      [
        'Azure AI Translator dịch văn bản viết và có thể trả về nhiều ngôn ngữ đích chỉ trong một lời gọi.',
        'Speech-to-text chỉ là đáp án đúng nếu nguồn ban đầu là âm thanh.',
      ],
    ],
  },

  {
    id: 1067,
    topic: 'nlp-translate',
    type: 'match',
    q: [
      'Match each requirement to the service that meets it.',
      'Each service may be used once, more than once, or not at all.',
    ],
    subs: [
      {
        p: 'Translate the written text of a website into Spanish.',
        o: ['Azure AI Translator', 'Azure AI Speech', 'Azure AI Vision'],
        a: 0,
      },
      {
        p: 'Translate a live spoken presentation into another language.',
        o: ['Azure AI Translator', 'Azure AI Speech', 'Azure AI Vision'],
        a: 1,
      },
      {
        p: 'Read the printed text on a photograph of a street sign.',
        o: ['Azure AI Translator', 'Azure AI Speech', 'Azure AI Vision'],
        a: 2,
      },
    ],
    e: [
      [
        'Written text goes to Azure AI Translator, spoken language goes to Azure AI Speech, and text inside an image goes to Azure AI Vision OCR.',
        'Always look at the input format first: text, audio or image.',
      ],
    ],
    vq: [
      'Ghép mỗi yêu cầu với dịch vụ đáp ứng nó.',
      'Mỗi dịch vụ có thể dùng một lần, nhiều lần hoặc không dùng.',
    ],
    vsubs: [
      {
        p: 'Dịch nội dung chữ của một website sang tiếng Tây Ban Nha.',
        o: ['Azure AI Translator', 'Azure AI Speech', 'Azure AI Vision'],
      },
      {
        p: 'Dịch một bài thuyết trình đang nói trực tiếp sang ngôn ngữ khác.',
        o: ['Azure AI Translator', 'Azure AI Speech', 'Azure AI Vision'],
      },
      {
        p: 'Đọc chữ in trên ảnh chụp một biển báo đường phố.',
        o: ['Azure AI Translator', 'Azure AI Speech', 'Azure AI Vision'],
      },
    ],
    ve: [
      [
        'Văn bản viết thì dùng Azure AI Translator, lời nói thì dùng Azure AI Speech, còn chữ nằm trong ảnh thì dùng OCR của Azure AI Vision.',
        'Luôn nhìn định dạng đầu vào trước: văn bản, âm thanh hay hình ảnh.',
      ],
    ],
  },
];
