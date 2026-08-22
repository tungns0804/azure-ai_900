/**
 * Câu hỏi BỔ SUNG — phần thi d5, nhóm 2 (prompt engineering, grounding, RAG,
 * và AI có trách nhiệm cho generative AI).
 */
export default [
  {
    id: 1078,
    topic: 'gen-prompt',
    type: 'single',
    q: [
      'You want a language model to answer questions using your company’s own product documentation, which the model was never trained on.',
      'Which technique should you use?',
    ],
    o: [
      ['Retrieval Augmented Generation (RAG)', true],
      ['Clustering', false],
      ['Object detection', false],
      ['Normalisation', false],
    ],
    e: [
      [
        'RAG retrieves the relevant passages from your own data and puts them into the prompt, so the model answers from that grounded context.',
        'It is the standard answer whenever a question mentions answering over private or company-specific documents.',
      ],
    ],
    vq: [
      'Bạn muốn một mô hình ngôn ngữ trả lời câu hỏi dựa trên tài liệu sản phẩm của chính công ty bạn — tài liệu mà mô hình chưa từng được huấn luyện.',
      'Bạn nên dùng kỹ thuật nào?',
    ],
    vo: ['Retrieval Augmented Generation (RAG)', 'Clustering', 'Object detection', 'Normalisation'],
    ve: [
      [
        'RAG lấy các đoạn liên quan từ dữ liệu của bạn rồi đưa vào prompt, nhờ đó mô hình trả lời dựa trên ngữ cảnh có căn cứ đó.',
        'Đây là đáp án chuẩn mỗi khi đề nhắc tới việc trả lời trên tài liệu riêng tư hoặc đặc thù của doanh nghiệp.',
      ],
    ],
  },

  {
    id: 1079,
    topic: 'gen-prompt',
    type: 'single',
    q: [
      'In a chat completion request, what is the purpose of the system message?',
    ],
    o: [
      ['To set the role, tone and rules that the model should follow', true],
      ['To store the user’s password for the session', false],
      ['To choose the compute cluster that will run the model', false],
      ['To measure the accuracy of the generated answer', false],
    ],
    e: [
      [
        'The system message tells the model who it is meant to be and what constraints apply, before any user message is processed.',
        'It is the first and cheapest lever in prompt engineering.',
      ],
    ],
    vq: ['Trong một yêu cầu chat completion, system message dùng để làm gì?'],
    vo: [
      'Định vai trò, giọng điệu và các quy tắc mà mô hình phải tuân theo',
      'Lưu mật khẩu của người dùng cho phiên làm việc',
      'Chọn compute cluster sẽ chạy mô hình',
      'Đo độ chính xác của câu trả lời được sinh ra',
    ],
    ve: [
      [
        'System message cho mô hình biết nó đóng vai gì và phải tuân theo ràng buộc nào, trước khi xử lý bất kỳ tin nhắn nào của người dùng.',
        'Đây là công cụ đầu tiên và rẻ nhất trong prompt engineering.',
      ],
    ],
  },

  {
    id: 1080,
    topic: 'gen-prompt',
    type: 'single',
    q: [
      'A prompt includes two worked examples of the input and the expected output before the real question is asked.',
      'What is this technique called?',
    ],
    o: [
      ['Few-shot prompting', true],
      ['Feature engineering', false],
      ['Hyperparameter tuning', false],
      ['Batch inference', false],
    ],
    e: [
      [
        'Providing a small number of examples inside the prompt is few-shot prompting; providing none is zero-shot.',
        'Examples show the model the format and style you expect, which usually improves the answer without any retraining.',
      ],
    ],
    vq: [
      'Một prompt đưa kèm hai ví dụ mẫu về đầu vào và đầu ra mong muốn trước khi hỏi câu hỏi thật.',
      'Kỹ thuật này gọi là gì?',
    ],
    vo: ['Few-shot prompting', 'Feature engineering', 'Hyperparameter tuning', 'Batch inference'],
    ve: [
      [
        'Đưa một số ít ví dụ vào trong prompt là few-shot prompting; không đưa ví dụ nào là zero-shot.',
        'Ví dụ cho mô hình thấy định dạng và văn phong bạn mong muốn, thường cải thiện câu trả lời mà không cần huấn luyện lại.',
      ],
    ],
  },

  {
    id: 1081,
    topic: 'gen-prompt',
    type: 'single',
    q: [
      'What does grounding a generative AI model mean?',
    ],
    o: [
      ['Supplying trusted, relevant data in the context so the answer is based on it', true],
      ['Reducing the size of the model so it runs on a phone', false],
      ['Encrypting the model weights before deployment', false],
      ['Splitting the dataset into training and validation rows', false],
    ],
    e: [
      [
        'Grounding means anchoring the model’s answer in data you trust, usually by placing that data in the prompt context.',
        'A grounded answer is far less likely to be a hallucination, and it can cite where the information came from.',
      ],
    ],
    vq: ['Grounding một mô hình generative AI nghĩa là gì?'],
    vo: [
      'Cung cấp dữ liệu đáng tin và liên quan vào ngữ cảnh để câu trả lời dựa trên dữ liệu đó',
      'Thu nhỏ mô hình để chạy được trên điện thoại',
      'Mã hoá trọng số của mô hình trước khi triển khai',
      'Chia tập dữ liệu thành các hàng huấn luyện và kiểm định',
    ],
    ve: [
      [
        'Grounding là neo câu trả lời của mô hình vào dữ liệu bạn tin tưởng, thường bằng cách đưa dữ liệu đó vào ngữ cảnh của prompt.',
        'Câu trả lời có grounding ít khả năng là bịa đặt hơn nhiều, và có thể trích dẫn nguồn thông tin.',
      ],
    ],
  },

  {
    id: 1082,
    topic: 'gen-prompt',
    type: 'yesno_table',
    q: [
      'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'Rewriting a vague prompt to be more specific usually improves the quality of the response.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Retrieval Augmented Generation adds relevant data to the prompt at query time.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Retrieval Augmented Generation changes the weights of the underlying model.',
        o: ['Yes', 'No'],
        a: 1,
      },
    ],
    e: [
      [
        'Clearer prompts produce better answers, and RAG works purely at query time by injecting retrieved context.',
        'Changing the weights of the model is fine-tuning, which is a different and much more expensive technique.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      {
        p: 'Viết lại một prompt mơ hồ cho cụ thể hơn thường cải thiện chất lượng câu trả lời.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Retrieval Augmented Generation bổ sung dữ liệu liên quan vào prompt ngay lúc truy vấn.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Retrieval Augmented Generation làm thay đổi trọng số của mô hình nền.',
        o: ['Có', 'Không'],
      },
    ],
    ve: [
      [
        'Prompt rõ ràng hơn cho câu trả lời tốt hơn, và RAG hoạt động hoàn toàn ở thời điểm truy vấn bằng cách chèn ngữ cảnh lấy được.',
        'Thay đổi trọng số của mô hình là fine-tuning — một kỹ thuật khác và tốn kém hơn nhiều.',
      ],
    ],
  },

  {
    id: 1083,
    topic: 'gen-prompt',
    type: 'match',
    q: [
      'Match each description to the prompt engineering technique it refers to.',
      'Each technique may be used once, more than once, or not at all.',
    ],
    subs: [
      {
        p: 'Tell the model “You are a helpful travel agent who answers in Vietnamese.”',
        o: ['System message', 'Few-shot examples', 'Retrieval Augmented Generation'],
        a: 0,
      },
      {
        p: 'Show the model three sample questions with their ideal answers.',
        o: ['System message', 'Few-shot examples', 'Retrieval Augmented Generation'],
        a: 1,
      },
      {
        p: 'Search the company knowledge base and paste the matching passages into the prompt.',
        o: ['System message', 'Few-shot examples', 'Retrieval Augmented Generation'],
        a: 2,
      },
    ],
    e: [
      [
        'A system message sets the persona and rules, few-shot examples demonstrate the expected output, and RAG injects retrieved facts.',
        'The three techniques are complementary and are often used together.',
      ],
    ],
    vq: [
      'Ghép mỗi mô tả với kỹ thuật prompt engineering tương ứng.',
      'Mỗi kỹ thuật có thể dùng một lần, nhiều lần hoặc không dùng.',
    ],
    vsubs: [
      {
        p: 'Nói với mô hình: “Bạn là nhân viên tư vấn du lịch, hãy trả lời bằng tiếng Việt.”',
        o: ['System message', 'Ví dụ few-shot', 'Retrieval Augmented Generation'],
      },
      {
        p: 'Cho mô hình xem ba câu hỏi mẫu kèm câu trả lời lý tưởng.',
        o: ['System message', 'Ví dụ few-shot', 'Retrieval Augmented Generation'],
      },
      {
        p: 'Tìm trong kho tri thức của công ty rồi dán các đoạn khớp vào prompt.',
        o: ['System message', 'Ví dụ few-shot', 'Retrieval Augmented Generation'],
      },
    ],
    ve: [
      [
        'System message định vai trò và quy tắc, ví dụ few-shot minh hoạ đầu ra mong muốn, còn RAG chèn dữ kiện lấy được vào prompt.',
        'Ba kỹ thuật này bổ trợ cho nhau và thường được dùng cùng lúc.',
      ],
    ],
  },

  {
    id: 1084,
    topic: 'gen-rai',
    type: 'single',
    q: [
      'A language model produces an answer that sounds convincing but contains facts that are simply untrue.',
      'What is this behaviour called?',
    ],
    o: [
      ['Hallucination', true],
      ['Overfitting', false],
      ['Normalisation', false],
      ['Clustering', false],
    ],
    e: [
      [
        'A hallucination is generated content that is fluent and plausible but factually wrong.',
        'Grounding the model on trusted data and keeping a human reviewer in the loop are the usual mitigations.',
      ],
    ],
    vq: [
      'Một mô hình ngôn ngữ đưa ra câu trả lời nghe rất thuyết phục nhưng chứa những thông tin hoàn toàn sai sự thật.',
      'Hiện tượng này gọi là gì?',
    ],
    vo: ['Hallucination (bịa đặt)', 'Overfitting', 'Normalisation', 'Clustering'],
    ve: [
      [
        'Hallucination là nội dung được sinh ra trôi chảy, nghe hợp lý nhưng sai về mặt sự thật.',
        'Cách giảm thiểu thông thường là grounding mô hình trên dữ liệu đáng tin và luôn có con người rà soát.',
      ],
    ],
  },

  {
    id: 1085,
    topic: 'gen-rai',
    type: 'single',
    q: [
      'Which Azure service is designed to detect and block harmful content such as hate, violence, self-harm and sexual material in both text and images?',
    ],
    o: [
      ['Azure AI Content Safety', true],
      ['Azure AI Search', false],
      ['Azure Machine Learning designer', false],
      ['Azure AI Document Intelligence', false],
    ],
    e: [
      [
        'Azure AI Content Safety scores content across harm categories and can block it before it reaches a user.',
        'It is used on both the prompt going in and the completion coming out.',
      ],
    ],
    vq: [
      'Dịch vụ Azure nào được thiết kế để phát hiện và chặn nội dung độc hại như thù ghét, bạo lực, tự hại và tình dục trong cả văn bản lẫn hình ảnh?',
    ],
    vo: [
      'Azure AI Content Safety',
      'Azure AI Search',
      'Azure Machine Learning designer',
      'Azure AI Document Intelligence',
    ],
    ve: [
      [
        'Azure AI Content Safety chấm điểm nội dung theo các nhóm tác hại và có thể chặn trước khi tới tay người dùng.',
        'Nó được áp dụng cho cả prompt đi vào lẫn kết quả sinh ra đi về.',
      ],
    ],
  },

  {
    id: 1086,
    topic: 'gen-rai',
    type: 'multi',
    q: [
      'Which three practices reduce the risks of a generative AI application? Each correct answer presents a complete solution.',
      'NOTE: Each correct selection is worth one point.',
    ],
    o: [
      ['Ground the model on trusted, approved data sources', true],
      ['Apply content filters to prompts and responses', true],
      ['Keep a human reviewer in the loop for high-impact decisions', true],
      ['Publish the model endpoint without any authentication', false],
      ['Remove all logging so that nothing is recorded', false],
    ],
    e: [
      [
        'Grounding, content filtering and human oversight are the standard mitigations for hallucination, harmful output and misuse.',
        'Removing authentication and logging makes an application less safe, not more.',
      ],
    ],
    vq: [
      'Ba biện pháp nào giúp giảm rủi ro cho một ứng dụng generative AI? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vo: [
      'Grounding mô hình trên các nguồn dữ liệu đáng tin đã được phê duyệt',
      'Áp dụng content filter cho cả prompt lẫn câu trả lời',
      'Duy trì người rà soát cho các quyết định có tác động lớn',
      'Công bố endpoint của mô hình mà không cần xác thực',
      'Gỡ bỏ toàn bộ log để không ghi lại gì cả',
    ],
    ve: [
      [
        'Grounding, lọc nội dung và giám sát của con người là các biện pháp chuẩn để giảm bịa đặt, nội dung độc hại và lạm dụng.',
        'Bỏ xác thực và bỏ log làm ứng dụng kém an toàn đi chứ không an toàn hơn.',
      ],
    ],
  },

  {
    id: 1087,
    topic: 'gen-rai',
    type: 'yesno_table',
    q: [
      'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'Prompt injection is an attack in which crafted input makes the model ignore its original instructions.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Because a generative model is trained on public data, its output never needs to be reviewed.',
        o: ['Yes', 'No'],
        a: 1,
      },
      {
        p: 'Transparency for a generative AI application includes telling users that they are interacting with AI.',
        o: ['Yes', 'No'],
        a: 0,
      },
    ],
    e: [
      [
        'Prompt injection tries to override the system message with instructions hidden in the user input or in retrieved content.',
        'Generated output always needs review, and disclosing that a user is talking to an AI system is a core transparency requirement.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      {
        p: 'Prompt injection là kiểu tấn công dùng đầu vào được dàn dựng để khiến mô hình bỏ qua chỉ dẫn ban đầu.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Vì mô hình sinh được huấn luyện trên dữ liệu công khai nên kết quả của nó không bao giờ cần rà soát.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Tính minh bạch của ứng dụng generative AI bao gồm việc cho người dùng biết họ đang tương tác với AI.',
        o: ['Có', 'Không'],
      },
    ],
    ve: [
      [
        'Prompt injection tìm cách đè lên system message bằng chỉ dẫn giấu trong đầu vào của người dùng hoặc trong nội dung lấy về.',
        'Kết quả sinh ra luôn cần được rà soát, và việc thông báo người dùng đang nói chuyện với AI là yêu cầu cốt lõi của transparency.',
      ],
    ],
  },

  {
    id: 1088,
    topic: 'gen-rai',
    type: 'single',
    q: [
      'A bank plans to use a generative AI model to draft replies to customer complaints. Which safeguard best addresses the risk of an inaccurate or inappropriate reply reaching a customer?',
    ],
    o: [
      ['Require a staff member to review and approve each reply before it is sent', true],
      ['Increase the maximum number of tokens in the response', false],
      ['Deploy the model to a larger virtual machine', false],
      ['Turn off logging for the endpoint', false],
    ],
    e: [
      [
        'Human review before the content reaches the customer is the direct mitigation for inaccurate or inappropriate generated text.',
        'Token limits and virtual machine size affect length and performance, not correctness, and removing logging weakens accountability.',
      ],
    ],
    vq: [
      'Một ngân hàng dự định dùng mô hình generative AI để soạn thư trả lời khiếu nại của khách hàng. Biện pháp nào xử lý tốt nhất rủi ro thư trả lời sai hoặc không phù hợp tới tay khách hàng?',
    ],
    vo: [
      'Yêu cầu nhân viên rà soát và phê duyệt từng thư trước khi gửi',
      'Tăng số token tối đa cho câu trả lời',
      'Triển khai mô hình lên máy ảo lớn hơn',
      'Tắt log của endpoint',
    ],
    ve: [
      [
        'Con người rà soát trước khi nội dung tới tay khách hàng là biện pháp trực tiếp cho rủi ro văn bản sinh ra sai hoặc không phù hợp.',
        'Giới hạn token và kích thước máy ảo ảnh hưởng tới độ dài và hiệu năng chứ không phải tính đúng đắn, còn tắt log làm suy yếu khả năng giải trình.',
      ],
    ],
  },
];
