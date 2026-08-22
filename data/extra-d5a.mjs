/**
 * Câu hỏi BỔ SUNG — phần thi d5, nhóm 1 (mô hình generative AI và kịch bản ứng dụng).
 */
export default [
  {
    id: 1068,
    topic: 'gen-models',
    type: 'single',
    q: [
      'Which statement best describes what a large language model (LLM) does?',
    ],
    o: [
      ['It generates new content in response to a prompt', true],
      ['It groups unlabelled records into clusters', false],
      ['It draws bounding boxes around objects in an image', false],
      ['It measures how far a numeric prediction is from the true value', false],
    ],
    e: [
      [
        'A large language model is a generative model: given a prompt, it produces new text that continues or answers it.',
        'Clustering, object detection and error measurement are all tasks of other kinds of model.',
      ],
    ],
    vq: ['Phát biểu nào mô tả đúng nhất việc mà một large language model (LLM) làm?'],
    vo: [
      'Sinh ra nội dung mới để đáp lại một prompt',
      'Gom các bản ghi chưa có nhãn thành các cụm',
      'Vẽ bounding box quanh các vật thể trong ảnh',
      'Đo mức lệch giữa dự đoán số và giá trị thật',
    ],
    ve: [
      [
        'Large language model là mô hình sinh: nhận một prompt và tạo ra nội dung mới tiếp nối hoặc trả lời prompt đó.',
        'Clustering, object detection và đo sai số đều là nhiệm vụ của những loại mô hình khác.',
      ],
    ],
  },

  {
    id: 1069,
    topic: 'gen-models',
    type: 'single',
    q: [
      'Before a language model processes a piece of text, the text is split into smaller units that the model works with.',
      'What are those units called?',
    ],
    o: [
      ['Tokens', true],
      ['Labels', false],
      ['Bounding boxes', false],
      ['Clusters', false],
    ],
    e: [
      [
        'Text is broken into tokens, which may be whole words or parts of words, and the model reads and generates one token at a time.',
        'Pricing and context limits for language models are also expressed in tokens.',
      ],
    ],
    vq: [
      'Trước khi một mô hình ngôn ngữ xử lý một đoạn văn bản, văn bản được cắt thành các đơn vị nhỏ hơn để mô hình làm việc.',
      'Các đơn vị đó gọi là gì?',
    ],
    vo: ['Token', 'Label', 'Bounding box', 'Cluster'],
    ve: [
      [
        'Văn bản được cắt thành token — có thể là nguyên từ hoặc một phần của từ — và mô hình đọc, sinh từng token một.',
        'Giá tiền và giới hạn ngữ cảnh của mô hình ngôn ngữ cũng được tính theo token.',
      ],
    ],
  },

  {
    id: 1070,
    topic: 'gen-models',
    type: 'match',
    q: [
      'Match each task to the type of model that performs it.',
      'Each model may be used once, more than once, or not at all.',
    ],
    subs: [
      {
        p: 'Create an illustration from a written description.',
        o: ['An image generation model such as DALL·E', 'A speech recognition model such as Whisper', 'A text generation model such as GPT'],
        a: 0,
      },
      {
        p: 'Transcribe an audio recording into text.',
        o: ['An image generation model such as DALL·E', 'A speech recognition model such as Whisper', 'A text generation model such as GPT'],
        a: 1,
      },
      {
        p: 'Draft a summary of a long report.',
        o: ['An image generation model such as DALL·E', 'A speech recognition model such as Whisper', 'A text generation model such as GPT'],
        a: 2,
      },
    ],
    e: [
      [
        'Azure OpenAI offers several model families: GPT models for text, DALL·E for images, Whisper for speech recognition and embedding models for vector representations.',
        'Match the model family to the kind of content that has to be produced or understood.',
      ],
    ],
    vq: [
      'Ghép mỗi nhiệm vụ với loại mô hình thực hiện nó.',
      'Mỗi mô hình có thể dùng một lần, nhiều lần hoặc không dùng.',
    ],
    vsubs: [
      {
        p: 'Tạo một hình minh hoạ từ mô tả bằng chữ.',
        o: ['Mô hình sinh ảnh như DALL·E', 'Mô hình nhận dạng giọng nói như Whisper', 'Mô hình sinh văn bản như GPT'],
      },
      {
        p: 'Chuyển một bản thu âm thành văn bản.',
        o: ['Mô hình sinh ảnh như DALL·E', 'Mô hình nhận dạng giọng nói như Whisper', 'Mô hình sinh văn bản như GPT'],
      },
      {
        p: 'Soạn bản tóm tắt cho một báo cáo dài.',
        o: ['Mô hình sinh ảnh như DALL·E', 'Mô hình nhận dạng giọng nói như Whisper', 'Mô hình sinh văn bản như GPT'],
      },
    ],
    ve: [
      [
        'Azure OpenAI cung cấp nhiều họ mô hình: GPT cho văn bản, DALL·E cho ảnh, Whisper cho nhận dạng giọng nói và các mô hình embedding cho biểu diễn vector.',
        'Hãy ghép họ mô hình với loại nội dung cần tạo ra hoặc cần hiểu.',
      ],
    ],
  },

  {
    id: 1071,
    topic: 'gen-models',
    type: 'yesno_table',
    q: [
      'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'Generative AI models are built on the Transformer architecture.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'An embedding represents the meaning of text as a vector of numbers.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'A large language model stores an exact copy of every document it was trained on and looks the answer up.',
        o: ['Yes', 'No'],
        a: 1,
      },
    ],
    e: [
      [
        'Generative language models are Transformer based and use embeddings to represent meaning numerically.',
        'A language model does not store or look up its training documents; it generates the next token from learned statistical patterns, which is why it can produce plausible but wrong answers.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      { p: 'Các mô hình generative AI được xây trên kiến trúc Transformer.', o: ['Có', 'Không'] },
      { p: 'Embedding biểu diễn ý nghĩa của văn bản bằng một vector số.', o: ['Có', 'Không'] },
      {
        p: 'Large language model lưu bản sao nguyên vẹn của mọi tài liệu đã học rồi tra ra câu trả lời.',
        o: ['Có', 'Không'],
      },
    ],
    ve: [
      [
        'Mô hình ngôn ngữ sinh dựa trên Transformer và dùng embedding để biểu diễn ý nghĩa dưới dạng số.',
        'Mô hình ngôn ngữ không lưu và không tra cứu tài liệu huấn luyện; nó sinh token kế tiếp từ các mẫu thống kê đã học — đó là lý do nó có thể đưa ra câu trả lời nghe hợp lý nhưng sai.',
      ],
    ],
  },

  {
    id: 1072,
    topic: 'gen-models',
    type: 'single',
    q: [
      'Which type of model is used to convert text into vectors so that items with similar meaning are placed close together?',
    ],
    o: [
      ['An embedding model', true],
      ['A regression model', false],
      ['An object detection model', false],
      ['A clustering model', false],
    ],
    e: [
      [
        'Embedding models turn text into numeric vectors that capture semantic similarity.',
        'They are the foundation of vector search and of retrieval augmented generation.',
      ],
    ],
    vq: [
      'Loại mô hình nào dùng để chuyển văn bản thành vector sao cho những mục có ý nghĩa gần nhau được đặt gần nhau?',
    ],
    vo: [
      'Mô hình embedding',
      'Mô hình regression',
      'Mô hình object detection',
      'Mô hình clustering',
    ],
    ve: [
      [
        'Mô hình embedding biến văn bản thành vector số nắm bắt được mức tương đồng về ngữ nghĩa.',
        'Đây là nền tảng của vector search và của retrieval augmented generation.',
      ],
    ],
  },

  {
    id: 1073,
    topic: 'gen-scenarios',
    type: 'multi',
    q: [
      'Which three tasks are typical uses of generative AI? Each correct answer presents a complete solution.',
      'NOTE: Each correct selection is worth one point.',
    ],
    o: [
      ['Drafting a marketing email from a short brief', true],
      ['Summarising a long meeting transcript', true],
      ['Suggesting code to a developer inside an editor', true],
      ['Detecting an unusual spike in server CPU usage', false],
      ['Splitting a dataset into training and validation rows', false],
    ],
    e: [
      [
        'Generative AI creates new content: drafts, summaries, translations, code and images.',
        'Spotting an unusual spike is anomaly detection, and splitting a dataset is a step of the classic machine learning workflow.',
      ],
    ],
    vq: [
      'Ba nhiệm vụ nào là ứng dụng điển hình của generative AI? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vo: [
      'Soạn nháp một email marketing từ một bản tóm tắt yêu cầu ngắn',
      'Tóm tắt một bản ghi cuộc họp dài',
      'Gợi ý mã nguồn cho lập trình viên ngay trong trình soạn thảo',
      'Phát hiện mức tăng đột biến bất thường của CPU máy chủ',
      'Chia tập dữ liệu thành các hàng huấn luyện và kiểm định',
    ],
    ve: [
      [
        'Generative AI tạo ra nội dung mới: bản nháp, bản tóm tắt, bản dịch, mã nguồn và hình ảnh.',
        'Phát hiện tăng đột biến bất thường là anomaly detection, còn chia tập dữ liệu là một bước của quy trình machine learning cổ điển.',
      ],
    ],
  },

  {
    id: 1074,
    topic: 'gen-scenarios',
    type: 'single',
    q: [
      'What is the main difference between generative AI and traditional machine learning such as classification?',
    ],
    o: [
      ['Generative AI creates new content, whereas classification assigns an existing label', true],
      ['Generative AI never needs any training data', false],
      ['Generative AI can only work with images', false],
      ['Generative AI always runs on a compute instance', false],
    ],
    e: [
      [
        'Traditional models predict a value or a category that already exists in the label set.',
        'Generative models produce new content — text, code or images — that was not in the training set verbatim.',
      ],
    ],
    vq: [
      'Khác biệt chính giữa generative AI và machine learning truyền thống như classification là gì?',
    ],
    vo: [
      'Generative AI tạo ra nội dung mới, còn classification gán một nhãn đã có sẵn',
      'Generative AI không bao giờ cần dữ liệu huấn luyện',
      'Generative AI chỉ làm việc được với hình ảnh',
      'Generative AI luôn chạy trên một compute instance',
    ],
    ve: [
      [
        'Mô hình truyền thống dự đoán một giá trị hoặc một hạng mục đã có sẵn trong tập nhãn.',
        'Mô hình sinh tạo ra nội dung mới — văn bản, mã nguồn hay hình ảnh — không có nguyên văn trong tập huấn luyện.',
      ],
    ],
  },

  {
    id: 1075,
    topic: 'gen-scenarios',
    type: 'single',
    q: [
      'A software company wants an assistant that is embedded in its product, understands the user’s current context and helps them complete tasks in natural language.',
      'What is this kind of application usually called?',
    ],
    o: [
      ['A copilot', true],
      ['An indexer', false],
      ['A compute cluster', false],
      ['A confusion matrix', false],
    ],
    e: [
      [
        'A copilot is a generative AI assistant built into an application to help users get work done in natural language.',
        'Indexers, compute clusters and confusion matrices belong to search, training infrastructure and evaluation respectively.',
      ],
    ],
    vq: [
      'Một công ty phần mềm muốn có trợ lý nhúng ngay trong sản phẩm, hiểu ngữ cảnh hiện tại của người dùng và giúp họ hoàn thành công việc bằng ngôn ngữ tự nhiên.',
      'Loại ứng dụng này thường được gọi là gì?',
    ],
    vo: ['Copilot', 'Indexer', 'Compute cluster', 'Confusion matrix'],
    ve: [
      [
        'Copilot là trợ lý generative AI được nhúng vào ứng dụng để giúp người dùng làm việc bằng ngôn ngữ tự nhiên.',
        'Indexer, compute cluster và confusion matrix lần lượt thuộc về tìm kiếm, hạ tầng huấn luyện và đánh giá mô hình.',
      ],
    ],
  },

  {
    id: 1076,
    topic: 'gen-scenarios',
    type: 'yesno_table',
    q: [
      'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'Generating product descriptions from a list of attributes is a generative AI scenario.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Answering employee questions over internal company documents is a generative AI scenario.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Predicting tomorrow’s temperature from historical weather data is a generative AI scenario.',
        o: ['Yes', 'No'],
        a: 1,
      },
    ],
    e: [
      [
        'Writing descriptions and answering questions over your own documents both produce new language, so both are generative AI.',
        'Forecasting a number from historical data is regression, a traditional machine learning task.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      {
        p: 'Sinh mô tả sản phẩm từ một danh sách thuộc tính là kịch bản generative AI.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Trả lời câu hỏi của nhân viên dựa trên tài liệu nội bộ của công ty là kịch bản generative AI.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Dự báo nhiệt độ ngày mai từ dữ liệu thời tiết lịch sử là kịch bản generative AI.',
        o: ['Có', 'Không'],
      },
    ],
    ve: [
      [
        'Viết mô tả và trả lời câu hỏi dựa trên tài liệu của bạn đều tạo ra ngôn ngữ mới nên đều là generative AI.',
        'Dự báo một con số từ dữ liệu lịch sử là regression — một bài toán machine learning truyền thống.',
      ],
    ],
  },

  {
    id: 1077,
    topic: 'gen-scenarios',
    type: 'single',
    q: [
      'Which scenario is NOT a use of generative AI?',
    ],
    o: [
      ['Grouping customers into segments based on purchase history', true],
      ['Writing a first draft of a job advertisement', false],
      ['Translating a document into another language', false],
      ['Generating an image from a text description', false],
    ],
    e: [
      [
        'Grouping customers without labels is clustering, a traditional unsupervised machine learning technique.',
        'Drafting text, translating and generating images all create new content, so they are generative AI.',
      ],
    ],
    vq: ['Tình huống nào KHÔNG phải là ứng dụng của generative AI?'],
    vo: [
      'Chia khách hàng thành các nhóm dựa trên lịch sử mua hàng',
      'Viết bản nháp đầu tiên cho một tin tuyển dụng',
      'Dịch một tài liệu sang ngôn ngữ khác',
      'Tạo hình ảnh từ một mô tả bằng chữ',
    ],
    ve: [
      [
        'Gom khách hàng khi không có nhãn là clustering — một kỹ thuật machine learning không giám sát truyền thống.',
        'Viết nháp, dịch thuật và tạo ảnh đều sinh ra nội dung mới nên đều là generative AI.',
      ],
    ],
  },
];
