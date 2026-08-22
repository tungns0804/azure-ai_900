/**
 * Câu hỏi BỔ SUNG — phần thi d5, nhóm 3 (Azure AI Foundry, Azure OpenAI, model catalog).
 */
export default [
  {
    id: 1089,
    topic: 'gen-foundry',
    type: 'single',
    q: [
      'Which Azure platform brings together model discovery, a playground for experimentation, and tools to build, evaluate and deploy generative AI solutions?',
    ],
    o: [
      ['Azure AI Foundry', true],
      ['Azure AI Search', false],
      ['Azure Bot Service', false],
      ['Azure AI Document Intelligence', false],
    ],
    e: [
      [
        'Azure AI Foundry is the unified platform for the whole generative AI lifecycle: explore models, prototype in the playground, evaluate, then deploy.',
        'Work is organised into projects and hubs.',
      ],
    ],
    vq: [
      'Nền tảng Azure nào gộp chung việc khám phá mô hình, một playground để thử nghiệm, cùng các công cụ xây dựng, đánh giá và triển khai giải pháp generative AI?',
    ],
    vo: [
      'Azure AI Foundry',
      'Azure AI Search',
      'Azure Bot Service',
      'Azure AI Document Intelligence',
    ],
    ve: [
      [
        'Azure AI Foundry là nền tảng hợp nhất cho toàn bộ vòng đời generative AI: khám phá mô hình, dựng thử trong playground, đánh giá rồi triển khai.',
        'Công việc được tổ chức theo project và hub.',
      ],
    ],
  },

  {
    id: 1090,
    topic: 'gen-foundry',
    type: 'single',
    q: [
      'In Azure AI Foundry, what is the playground used for?',
    ],
    o: [
      ['Trying prompts against a model interactively before writing any code', true],
      ['Labelling images for an object detection model', false],
      ['Creating a search index from a data source', false],
      ['Scaling a compute cluster up and down', false],
    ],
    e: [
      [
        'The playground is an interactive workspace for experimenting with prompts, system messages and model parameters.',
        'It is the fastest way to see how a model behaves before you build an application around it.',
      ],
    ],
    vq: ['Trong Azure AI Foundry, playground dùng để làm gì?'],
    vo: [
      'Thử nghiệm prompt trực tiếp với mô hình trước khi viết dòng code nào',
      'Gán nhãn ảnh cho mô hình object detection',
      'Tạo chỉ mục tìm kiếm từ một nguồn dữ liệu',
      'Tăng giảm quy mô của một compute cluster',
    ],
    ve: [
      [
        'Playground là không gian tương tác để thử prompt, system message và các tham số của mô hình.',
        'Đây là cách nhanh nhất để xem mô hình hành xử thế nào trước khi dựng ứng dụng quanh nó.',
      ],
    ],
  },

  {
    id: 1091,
    topic: 'gen-foundry',
    type: 'yesno_table',
    q: [
      'For each of the following statements about Azure AI Foundry, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'Azure AI Foundry lets you compare and deploy models from more than one provider.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Azure AI Foundry includes tooling to evaluate the quality and safety of a generative AI application.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Azure AI Foundry can only be used with models that you have trained yourself.',
        o: ['Yes', 'No'],
        a: 1,
      },
    ],
    e: [
      [
        'Foundry exposes a catalog of models from Microsoft, OpenAI and other providers, plus evaluation and content-safety tooling.',
        'Training your own model is not a prerequisite — most projects start from a pre-built model in the catalog.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau về Azure AI Foundry, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      {
        p: 'Azure AI Foundry cho phép so sánh và triển khai mô hình từ nhiều nhà cung cấp khác nhau.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Azure AI Foundry có sẵn công cụ đánh giá chất lượng và mức an toàn của ứng dụng generative AI.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Azure AI Foundry chỉ dùng được với những mô hình do chính bạn huấn luyện.',
        o: ['Có', 'Không'],
      },
    ],
    ve: [
      [
        'Foundry cung cấp catalog mô hình từ Microsoft, OpenAI và các nhà cung cấp khác, kèm công cụ đánh giá và giám sát an toàn nội dung.',
        'Không bắt buộc phải tự huấn luyện mô hình — phần lớn dự án bắt đầu từ một mô hình dựng sẵn trong catalog.',
      ],
    ],
  },

  {
    id: 1092,
    topic: 'gen-foundry',
    type: 'single',
    q: [
      'In Azure AI Foundry, how is related work such as models, data connections and deployments usually organised?',
    ],
    o: [
      ['Into projects', true],
      ['Into confusion matrices', false],
      ['Into bounding boxes', false],
      ['Into knowledge bases', false],
    ],
    e: [
      [
        'A Foundry project groups the assets for one solution: model deployments, connected data, evaluations and configuration.',
        'Projects can share resources through a hub.',
      ],
    ],
    vq: [
      'Trong Azure AI Foundry, các thành phần liên quan như mô hình, kết nối dữ liệu và bản triển khai thường được tổ chức theo đơn vị nào?',
    ],
    vo: ['Theo project', 'Theo confusion matrix', 'Theo bounding box', 'Theo knowledge base'],
    ve: [
      [
        'Một project trong Foundry gom các tài sản của một giải pháp: bản triển khai mô hình, dữ liệu kết nối, kết quả đánh giá và cấu hình.',
        'Các project có thể dùng chung tài nguyên thông qua một hub.',
      ],
    ],
  },

  {
    id: 1093,
    topic: 'gen-openai',
    type: 'single',
    q: [
      'A company wants to use GPT models but requires enterprise security, private networking and Azure role-based access control.',
      'Which service should the company use?',
    ],
    o: [
      ['Azure OpenAI Service', true],
      ['Azure AI Search', false],
      ['Azure Machine Learning designer', false],
      ['Azure AI Vision', false],
    ],
    e: [
      [
        'Azure OpenAI Service delivers the OpenAI models on Azure infrastructure with enterprise security, private networking and access management.',
        'It is the answer whenever a question pairs OpenAI models with Azure governance requirements.',
      ],
    ],
    vq: [
      'Một công ty muốn dùng các mô hình GPT nhưng cần bảo mật doanh nghiệp, mạng riêng và phân quyền theo vai trò của Azure.',
      'Công ty nên dùng dịch vụ nào?',
    ],
    vo: [
      'Azure OpenAI Service',
      'Azure AI Search',
      'Azure Machine Learning designer',
      'Azure AI Vision',
    ],
    ve: [
      [
        'Azure OpenAI Service cung cấp các mô hình OpenAI trên hạ tầng Azure kèm bảo mật doanh nghiệp, mạng riêng và quản lý truy cập.',
        'Đây là đáp án mỗi khi đề ghép mô hình OpenAI với các yêu cầu quản trị của Azure.',
      ],
    ],
  },

  {
    id: 1094,
    topic: 'gen-openai',
    type: 'multi',
    q: [
      'Which three model families are available through Azure OpenAI Service? Each correct answer presents a complete solution.',
      'NOTE: Each correct selection is worth one point.',
    ],
    o: [
      ['GPT models for generating text', true],
      ['DALL·E models for generating images', true],
      ['Whisper models for speech recognition', true],
      ['K-Means models for clustering', false],
      ['Indexer models for building search indexes', false],
    ],
    e: [
      [
        'Azure OpenAI hosts GPT for text, DALL·E for images, Whisper for speech recognition and embedding models for vectors.',
        'K-Means is a classical clustering algorithm, and an indexer is a component of Azure AI Search, not a model family.',
      ],
    ],
    vq: [
      'Ba họ mô hình nào có sẵn qua Azure OpenAI Service? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vo: [
      'Các mô hình GPT để sinh văn bản',
      'Các mô hình DALL·E để sinh ảnh',
      'Các mô hình Whisper để nhận dạng giọng nói',
      'Các mô hình K-Means để phân cụm',
      'Các mô hình indexer để dựng chỉ mục tìm kiếm',
    ],
    ve: [
      [
        'Azure OpenAI cung cấp GPT cho văn bản, DALL·E cho ảnh, Whisper cho nhận dạng giọng nói và các mô hình embedding cho vector.',
        'K-Means là thuật toán phân cụm cổ điển, còn indexer là thành phần của Azure AI Search chứ không phải một họ mô hình.',
      ],
    ],
  },

  {
    id: 1095,
    topic: 'gen-openai',
    type: 'yesno',
    q: [
      'Content filtering is applied to Azure OpenAI Service deployments to help block harmful prompts and responses.',
    ],
    subs: [{ o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'Azure OpenAI applies content filters to both the input prompt and the generated completion, across harm categories such as hate, violence, self-harm and sexual content.',
        'This is part of Microsoft’s responsible AI commitments for the service.',
      ],
    ],
    vq: [
      'Content filtering được áp dụng cho các bản triển khai Azure OpenAI Service nhằm giúp chặn prompt và câu trả lời độc hại.',
    ],
    vsubs: [{ o: ['Có', 'Không'] }],
    ve: [
      [
        'Azure OpenAI áp dụng content filter cho cả prompt đầu vào lẫn kết quả sinh ra, theo các nhóm tác hại như thù ghét, bạo lực, tự hại và tình dục.',
        'Đây là một phần trong cam kết AI có trách nhiệm của Microsoft cho dịch vụ này.',
      ],
    ],
  },

  {
    id: 1096,
    topic: 'gen-openai',
    type: 'single',
    q: [
      'Before an application can send requests to a GPT model in Azure OpenAI Service, what must be created first?',
    ],
    o: [
      ['A model deployment', true],
      ['A confusion matrix', false],
      ['A skillset', false],
      ['A bounding box', false],
    ],
    e: [
      [
        'You deploy a chosen model into your Azure OpenAI resource; the deployment name is then used in every API request.',
        'Skillsets belong to Azure AI Search, and confusion matrices and bounding boxes belong to evaluation and computer vision.',
      ],
    ],
    vq: [
      'Trước khi ứng dụng gửi được yêu cầu tới một mô hình GPT trong Azure OpenAI Service, phải tạo thứ gì trước?',
    ],
    vo: ['Một model deployment', 'Một confusion matrix', 'Một skillset', 'Một bounding box'],
    ve: [
      [
        'Bạn triển khai (deploy) mô hình đã chọn vào tài nguyên Azure OpenAI của mình; tên deployment sau đó được dùng trong mọi lời gọi API.',
        'Skillset thuộc Azure AI Search, còn confusion matrix và bounding box thuộc về đánh giá mô hình và computer vision.',
      ],
    ],
  },

  {
    id: 1097,
    topic: 'gen-catalog',
    type: 'single',
    q: [
      'What is the Azure AI Foundry model catalog?',
    ],
    o: [
      ['A library of models from several providers that can be compared and deployed', true],
      ['A list of the datasets stored in a workspace', false],
      ['A record of every prediction that a deployed model has made', false],
      ['A set of rules that filter harmful content', false],
    ],
    e: [
      [
        'The model catalog gathers models from Microsoft, OpenAI, Meta, Mistral and others in one place.',
        'You can compare them on capability, cost and benchmarks, then deploy the one you pick straight from the catalog.',
      ],
    ],
    vq: ['Model catalog của Azure AI Foundry là gì?'],
    vo: [
      'Thư viện mô hình từ nhiều nhà cung cấp, có thể so sánh và triển khai',
      'Danh sách các tập dữ liệu được lưu trong một workspace',
      'Bản ghi mọi dự đoán mà một mô hình đã triển khai từng thực hiện',
      'Bộ quy tắc lọc nội dung độc hại',
    ],
    ve: [
      [
        'Model catalog gom mô hình của Microsoft, OpenAI, Meta, Mistral và nhiều bên khác về một chỗ.',
        'Bạn có thể so sánh theo năng lực, chi phí và benchmark, rồi triển khai thẳng mô hình đã chọn từ catalog.',
      ],
    ],
  },

  {
    id: 1098,
    topic: 'gen-catalog',
    type: 'multi',
    q: [
      'Which two criteria are commonly used to choose a model from the Azure AI Foundry model catalog? Each correct answer presents a complete solution.',
      'NOTE: Each correct selection is worth one point.',
    ],
    o: [
      ['The task the model is designed for, such as chat or embeddings', true],
      ['The cost of running the model', true],
      ['The colour scheme of the Azure portal', false],
      ['The number of rows in the training dataset of your own application', false],
      ['The name of the resource group', false],
    ],
    e: [
      [
        'Models are compared on what they can do, how well they score on benchmarks, and how much they cost to run.',
        'Portal theming, resource group names and your own dataset size are not selection criteria for a catalog model.',
      ],
    ],
    vq: [
      'Hai tiêu chí nào thường dùng để chọn mô hình trong model catalog của Azure AI Foundry? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vo: [
      'Nhiệm vụ mà mô hình được thiết kế cho, ví dụ chat hay embedding',
      'Chi phí vận hành mô hình',
      'Bảng màu của Azure portal',
      'Số hàng trong tập dữ liệu huấn luyện của ứng dụng của bạn',
      'Tên của resource group',
    ],
    ve: [
      [
        'Mô hình được so sánh theo việc chúng làm được gì, điểm benchmark ra sao và chi phí vận hành bao nhiêu.',
        'Giao diện portal, tên resource group hay kích thước tập dữ liệu của bạn không phải tiêu chí chọn mô hình trong catalog.',
      ],
    ],
  },

  {
    id: 1099,
    topic: 'gen-catalog',
    type: 'yesno',
    q: [
      'The Azure AI Foundry model catalog contains models from Microsoft and from third-party providers such as OpenAI, Meta and Mistral.',
    ],
    subs: [{ o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'The catalog is deliberately multi-provider so that you can pick the model that best fits the task, the budget and the compliance requirements.',
      ],
    ],
    vq: [
      'Model catalog của Azure AI Foundry chứa mô hình của Microsoft và của các nhà cung cấp bên thứ ba như OpenAI, Meta và Mistral.',
    ],
    vsubs: [{ o: ['Có', 'Không'] }],
    ve: [
      [
        'Catalog được thiết kế đa nhà cung cấp để bạn chọn được mô hình phù hợp nhất với nhiệm vụ, ngân sách và yêu cầu tuân thủ.',
      ],
    ],
  },
];
