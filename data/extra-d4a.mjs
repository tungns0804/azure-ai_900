/**
 * Câu hỏi BỔ SUNG — phần thi d4, nhóm 1 (entity recognition, CLU, speech).
 */
export default [
  {
    id: 1042,
    topic: 'nlp-entity',
    type: 'single',
    q: [
      'You need to scan support tickets and pull out the names of people, the companies they work for and the dates they mention.',
      'Which Azure AI Language feature should you use?',
    ],
    o: [
      ['Named entity recognition', true],
      ['Sentiment analysis', false],
      ['Language detection', false],
      ['Text summarisation', false],
    ],
    e: [
      [
        'Named entity recognition finds and categorises entities such as people, organisations, locations, dates and quantities in text.',
        'Sentiment analysis measures tone, language detection identifies the language, and summarisation shortens the text.',
      ],
    ],
    vq: [
      'Bạn cần quét các ticket hỗ trợ để lấy ra tên người, tên công ty họ làm việc và các mốc ngày tháng được nhắc tới.',
      'Bạn nên dùng tính năng nào của Azure AI Language?',
    ],
    vo: [
      'Named entity recognition',
      'Sentiment analysis',
      'Language detection',
      'Text summarisation',
    ],
    ve: [
      [
        'Named entity recognition tìm và phân loại các thực thể như người, tổ chức, địa điểm, ngày tháng và số lượng trong văn bản.',
        'Sentiment analysis đo sắc thái, language detection nhận diện ngôn ngữ, còn summarisation rút gọn văn bản.',
      ],
    ],
  },

  {
    id: 1043,
    topic: 'nlp-entity',
    type: 'single',
    q: [
      'A company must find and redact national identity numbers, phone numbers and email addresses in customer chat transcripts before the transcripts are archived.',
      'Which Azure AI Language capability should the company use?',
    ],
    o: [
      ['Personally identifiable information (PII) detection', true],
      ['Key phrase extraction', false],
      ['Conversational Language Understanding', false],
      ['Question answering', false],
    ],
    e: [
      [
        'PII detection is the variant of entity recognition that finds personal identifiers so that they can be masked or removed.',
        'It is the feature to reach for whenever a question mentions redacting or protecting personal data in text.',
      ],
    ],
    vq: [
      'Một công ty phải tìm và che số căn cước, số điện thoại và địa chỉ email trong bản ghi chat của khách hàng trước khi lưu trữ.',
      'Công ty nên dùng năng lực nào của Azure AI Language?',
    ],
    vo: [
      'Phát hiện thông tin định danh cá nhân (PII detection)',
      'Key phrase extraction',
      'Conversational Language Understanding',
      'Question answering',
    ],
    ve: [
      [
        'PII detection là biến thể của entity recognition, chuyên tìm các thông tin định danh cá nhân để che hoặc gỡ bỏ.',
        'Đây là tính năng cần nghĩ tới mỗi khi đề nhắc đến việc che hoặc bảo vệ dữ liệu cá nhân trong văn bản.',
      ],
    ],
  },

  {
    id: 1044,
    topic: 'nlp-entity',
    type: 'yesno_table',
    q: [
      'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'Entity recognition can categorise a detected entity as a person, a location or an organisation.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Entity linking connects a recognised entity to an entry in a knowledge source such as Wikipedia.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Entity recognition returns an overall positive or negative score for the document.',
        o: ['Yes', 'No'],
        a: 1,
      },
    ],
    e: [
      [
        'Entity recognition categorises entities and, through entity linking, can resolve them to a well-known reference.',
        'An overall positive or negative score is what sentiment analysis produces, not entity recognition.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      {
        p: 'Entity recognition có thể phân loại một thực thể tìm được là người, địa điểm hay tổ chức.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Entity linking nối một thực thể nhận ra được với một mục trong nguồn tri thức như Wikipedia.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Entity recognition trả về điểm tích cực hay tiêu cực tổng thể cho văn bản.',
        o: ['Có', 'Không'],
      },
    ],
    ve: [
      [
        'Entity recognition phân loại thực thể và, thông qua entity linking, có thể quy chiếu chúng về một tham chiếu phổ biến.',
        'Điểm tích cực hay tiêu cực tổng thể là kết quả của sentiment analysis chứ không phải entity recognition.',
      ],
    ],
  },

  {
    id: 1045,
    topic: 'nlp-entity',
    type: 'match',
    q: [
      'Match each requirement to the Azure AI Language feature that meets it.',
      'Each feature may be used once, more than once, or not at all.',
    ],
    subs: [
      {
        p: 'List the organisations and dates mentioned in a contract.',
        o: ['Entity recognition', 'Sentiment analysis', 'Language detection'],
        a: 0,
      },
      {
        p: 'Decide whether a hotel review is complimentary or critical.',
        o: ['Entity recognition', 'Sentiment analysis', 'Language detection'],
        a: 1,
      },
      {
        p: 'Determine which language an incoming message was written in.',
        o: ['Entity recognition', 'Sentiment analysis', 'Language detection'],
        a: 2,
      },
    ],
    e: [
      [
        'Entity recognition extracts things, sentiment analysis measures feeling, and language detection identifies the language.',
        'All three are features of the single Azure AI Language service.',
      ],
    ],
    vq: [
      'Ghép mỗi yêu cầu với tính năng Azure AI Language đáp ứng nó.',
      'Mỗi tính năng có thể dùng một lần, nhiều lần hoặc không dùng.',
    ],
    vsubs: [
      {
        p: 'Liệt kê các tổ chức và mốc ngày tháng được nhắc trong một hợp đồng.',
        o: ['Entity recognition', 'Sentiment analysis', 'Language detection'],
      },
      {
        p: 'Xác định một đánh giá khách sạn là khen hay chê.',
        o: ['Entity recognition', 'Sentiment analysis', 'Language detection'],
      },
      {
        p: 'Xác định một tin nhắn đến được viết bằng ngôn ngữ nào.',
        o: ['Entity recognition', 'Sentiment analysis', 'Language detection'],
      },
    ],
    ve: [
      [
        'Entity recognition trích ra các đối tượng, sentiment analysis đo cảm xúc, còn language detection nhận diện ngôn ngữ.',
        'Cả ba đều là tính năng của cùng một dịch vụ Azure AI Language.',
      ],
    ],
  },

  {
    id: 1046,
    topic: 'nlp-clu',
    type: 'single',
    q: [
      'A virtual assistant must work out what a user wants when they type “book me a flight to Da Nang next Friday”, and extract the destination and the date.',
      'Which Azure AI Language capability should you use?',
    ],
    o: [
      ['Conversational Language Understanding', true],
      ['Question answering', false],
      ['Key phrase extraction', false],
      ['Text translation', false],
    ],
    e: [
      [
        'Conversational Language Understanding predicts the intent behind an utterance and extracts the entities it contains.',
        'Question answering only looks up a stored answer for a question; it does not infer intent or extract parameters.',
      ],
    ],
    vq: [
      'Một trợ lý ảo phải hiểu người dùng muốn gì khi họ gõ “đặt cho tôi vé bay đi Đà Nẵng thứ Sáu tới”, đồng thời rút ra điểm đến và ngày.',
      'Bạn nên dùng năng lực nào của Azure AI Language?',
    ],
    vo: [
      'Conversational Language Understanding',
      'Question answering',
      'Key phrase extraction',
      'Text translation',
    ],
    ve: [
      [
        'Conversational Language Understanding dự đoán ý định (intent) đằng sau câu nói và trích các entity trong đó.',
        'Question answering chỉ tra một câu trả lời có sẵn cho câu hỏi; nó không suy ra ý định và không trích tham số.',
      ],
    ],
  },

  {
    id: 1047,
    topic: 'nlp-clu',
    type: 'match',
    q: [
      'Match each example to the Conversational Language Understanding element that it represents.',
      'Each element may be used once, more than once, or not at all.',
    ],
    subs: [
      {
        p: '“Turn off the lights in the kitchen” typed by a user',
        o: ['Utterance', 'Intent', 'Entity'],
        a: 0,
      },
      { p: 'TurnOffDevice', o: ['Utterance', 'Intent', 'Entity'], a: 1 },
      { p: 'kitchen', o: ['Utterance', 'Intent', 'Entity'], a: 2 },
    ],
    e: [
      [
        'An utterance is what the user actually said or typed.',
        'An intent is the action the user wants performed.',
        'An entity is a detail inside the utterance that the intent needs, such as the room name.',
      ],
    ],
    vq: [
      'Ghép mỗi ví dụ với thành phần tương ứng của Conversational Language Understanding.',
      'Mỗi thành phần có thể dùng một lần, nhiều lần hoặc không dùng.',
    ],
    vsubs: [
      {
        p: 'Câu người dùng gõ vào: “Tắt đèn trong bếp”',
        o: ['Utterance', 'Intent', 'Entity'],
      },
      { p: 'TurnOffDevice', o: ['Utterance', 'Intent', 'Entity'] },
      { p: 'bếp', o: ['Utterance', 'Intent', 'Entity'] },
    ],
    ve: [
      [
        'Utterance là câu người dùng thực sự nói hoặc gõ.',
        'Intent là hành động mà người dùng muốn thực hiện.',
        'Entity là chi tiết bên trong câu nói mà intent cần đến, ví dụ tên căn phòng.',
      ],
    ],
  },

  {
    id: 1048,
    topic: 'nlp-clu',
    type: 'yesno_table',
    q: [
      'For each of the following statements about Conversational Language Understanding, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'A model is trained from example utterances that you label with intents and entities.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Conversational Language Understanding can determine the intent of a user utterance.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Conversational Language Understanding replaces the need for a knowledge base when answering frequently asked questions.',
        o: ['Yes', 'No'],
        a: 1,
      },
    ],
    e: [
      [
        'You author intents and entities, then supply labelled example utterances and train the model.',
        'For frequently asked questions the right tool is question answering with a knowledge base; the two features are often used side by side in one bot.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau về Conversational Language Understanding, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      {
        p: 'Mô hình được huấn luyện từ các câu nói mẫu mà bạn gán nhãn intent và entity.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Conversational Language Understanding xác định được ý định của câu người dùng nói.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Conversational Language Understanding thay thế hoàn toàn nhu cầu dùng knowledge base khi trả lời câu hỏi thường gặp.',
        o: ['Có', 'Không'],
      },
    ],
    ve: [
      [
        'Bạn khai báo intent và entity, sau đó cung cấp các câu nói mẫu đã gán nhãn rồi huấn luyện mô hình.',
        'Với câu hỏi thường gặp thì công cụ đúng là question answering kèm knowledge base; hai tính năng này thường dùng song song trong cùng một bot.',
      ],
    ],
  },

  {
    id: 1049,
    topic: 'nlp-clu',
    type: 'single',
    q: [
      'In a Conversational Language Understanding model, what is an utterance?',
    ],
    o: [
      ['An example of something a user might say or type', true],
      ['The action that the user wants the application to perform', false],
      ['A numeric score between 0 and 1 for the tone of the text', false],
      ['A rectangle drawn around an object in an image', false],
    ],
    e: [
      [
        'Utterances are the sample phrases you provide so that the model learns how real users express each intent.',
        'The action itself is the intent; the tone score belongs to sentiment analysis and the rectangle to object detection.',
      ],
    ],
    vq: ['Trong mô hình Conversational Language Understanding, utterance là gì?'],
    vo: [
      'Một ví dụ về điều người dùng có thể nói hoặc gõ',
      'Hành động mà người dùng muốn ứng dụng thực hiện',
      'Điểm số từ 0 đến 1 cho sắc thái của văn bản',
      'Hình chữ nhật vẽ quanh một vật thể trong ảnh',
    ],
    ve: [
      [
        'Utterance là các câu mẫu bạn cung cấp để mô hình học cách người dùng thật diễn đạt mỗi intent.',
        'Bản thân hành động là intent; điểm sắc thái thuộc sentiment analysis còn hình chữ nhật thuộc object detection.',
      ],
    ],
  },

  {
    id: 1050,
    topic: 'nlp-speech',
    type: 'single',
    q: [
      'A podcast publisher needs written transcripts of hundreds of recorded episodes.',
      'Which Azure AI Speech capability should the publisher use?',
    ],
    o: [
      ['Speech to text', true],
      ['Text to speech', false],
      ['Speaker recognition', false],
      ['Language detection', false],
    ],
    e: [
      [
        'Speech to text converts recorded or live audio into written text and can run in batch mode over many files.',
        'Text to speech goes the other way, turning written text into spoken audio.',
      ],
    ],
    vq: [
      'Một đơn vị làm podcast cần bản ghi chữ cho hàng trăm tập đã thu.',
      'Họ nên dùng năng lực nào của Azure AI Speech?',
    ],
    vo: ['Speech to text', 'Text to speech', 'Speaker recognition', 'Language detection'],
    ve: [
      [
        'Speech to text chuyển âm thanh đã thu hoặc trực tiếp thành văn bản, và chạy được ở chế độ batch cho nhiều file.',
        'Text to speech đi theo chiều ngược lại, biến văn bản thành giọng nói.',
      ],
    ],
  },

  {
    id: 1051,
    topic: 'nlp-speech',
    type: 'single',
    q: [
      'A news website wants blind visitors to be able to listen to its articles read out in a natural voice.',
      'Which Azure AI Speech capability meets this requirement?',
    ],
    o: [
      ['Text to speech', true],
      ['Speech to text', false],
      ['Key phrase extraction', false],
      ['Optical character recognition', false],
    ],
    e: [
      [
        'Text to speech synthesises spoken audio from written text.',
        'Note that this scenario also illustrates the inclusiveness principle of responsible AI.',
      ],
    ],
    vq: [
      'Một trang tin muốn người khiếm thị nghe được các bài viết bằng giọng đọc tự nhiên.',
      'Năng lực nào của Azure AI Speech đáp ứng yêu cầu này?',
    ],
    vo: [
      'Text to speech',
      'Speech to text',
      'Key phrase extraction',
      'Optical character recognition',
    ],
    ve: [
      [
        'Text to speech tổng hợp giọng nói từ văn bản.',
        'Lưu ý tình huống này đồng thời minh hoạ nguyên tắc inclusiveness của AI có trách nhiệm.',
      ],
    ],
  },

  {
    id: 1052,
    topic: 'nlp-speech',
    type: 'single',
    q: [
      'During an international conference, spoken English must be turned into spoken Vietnamese in near real time.',
      'Which capability should be used?',
    ],
    o: [
      ['Speech translation', true],
      ['Text translation only', false],
      ['Sentiment analysis', false],
      ['Question answering', false],
    ],
    e: [
      [
        'Speech translation takes spoken input in one language and produces the translation, which can then be spoken aloud.',
        'Text translation only handles written text, so it does not cover the audio input on its own.',
      ],
    ],
    vq: [
      'Trong một hội nghị quốc tế, lời nói tiếng Anh phải được chuyển thành lời nói tiếng Việt gần như tức thời.',
      'Nên dùng năng lực nào?',
    ],
    vo: [
      'Speech translation',
      'Chỉ dùng text translation',
      'Sentiment analysis',
      'Question answering',
    ],
    ve: [
      [
        'Speech translation nhận lời nói ở một ngôn ngữ và tạo ra bản dịch, bản dịch này có thể được đọc thành tiếng.',
        'Text translation chỉ xử lý văn bản viết nên tự nó không bao phủ được đầu vào âm thanh.',
      ],
    ],
  },

  {
    id: 1053,
    topic: 'nlp-speech',
    type: 'yesno_table',
    q: [
      'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'Speech to text can process audio in real time as well as in batch.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Text to speech is used to create an audio version of a written document.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Speech to text requires you to train your own language model before it can be used.',
        o: ['Yes', 'No'],
        a: 1,
      },
    ],
    e: [
      [
        'Speech to text works both in real time and in batch, and text to speech produces spoken audio from text.',
        'Out of the box, speech to text uses the Universal Language Model trained by Microsoft; custom models are optional, for specialist vocabulary.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      { p: 'Speech to text xử lý được âm thanh cả theo thời gian thực lẫn theo lô.', o: ['Có', 'Không'] },
      { p: 'Text to speech dùng để tạo bản âm thanh cho một tài liệu viết.', o: ['Có', 'Không'] },
      {
        p: 'Speech to text bắt buộc bạn phải tự huấn luyện mô hình ngôn ngữ trước khi dùng được.',
        o: ['Có', 'Không'],
      },
    ],
    ve: [
      [
        'Speech to text chạy được cả real-time lẫn batch, còn text to speech tạo ra giọng nói từ văn bản.',
        'Mặc định speech to text dùng Universal Language Model do Microsoft huấn luyện; mô hình tuỳ chỉnh chỉ là tuỳ chọn cho từ vựng chuyên ngành.',
      ],
    ],
  },

  {
    id: 1054,
    topic: 'nlp-speech',
    type: 'match',
    q: [
      'Match each scenario to the speech capability that fits it.',
      'Each capability may be used once, more than once, or not at all.',
    ],
    subs: [
      {
        p: 'Produce a written record of a customer support call.',
        o: ['Speech to text', 'Text to speech', 'Speech translation'],
        a: 0,
      },
      {
        p: 'Announce train departures aloud from a text timetable.',
        o: ['Speech to text', 'Text to speech', 'Speech translation'],
        a: 1,
      },
      {
        p: 'Let a French speaker and a Japanese speaker talk to each other by phone.',
        o: ['Speech to text', 'Text to speech', 'Speech translation'],
        a: 2,
      },
    ],
    e: [
      [
        'Audio in and text out is speech to text; text in and audio out is text to speech.',
        'When both the input and the output are speech but the language changes, it is speech translation.',
      ],
    ],
    vq: [
      'Ghép mỗi tình huống với năng lực giọng nói phù hợp.',
      'Mỗi năng lực có thể dùng một lần, nhiều lần hoặc không dùng.',
    ],
    vsubs: [
      {
        p: 'Tạo bản ghi chữ cho một cuộc gọi hỗ trợ khách hàng.',
        o: ['Speech to text', 'Text to speech', 'Speech translation'],
      },
      {
        p: 'Đọc thông báo giờ tàu chạy thành tiếng từ bảng giờ dạng văn bản.',
        o: ['Speech to text', 'Text to speech', 'Speech translation'],
      },
      {
        p: 'Giúp một người nói tiếng Pháp và một người nói tiếng Nhật trò chuyện qua điện thoại.',
        o: ['Speech to text', 'Text to speech', 'Speech translation'],
      },
    ],
    ve: [
      [
        'Vào là âm thanh, ra là chữ thì đó là speech to text; vào là chữ, ra là âm thanh thì đó là text to speech.',
        'Khi cả đầu vào lẫn đầu ra đều là lời nói nhưng đổi ngôn ngữ thì đó là speech translation.',
      ],
    ],
  },
];
