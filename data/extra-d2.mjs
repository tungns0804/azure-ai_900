/**
 * Câu hỏi BỔ SUNG — phần thi d2 (Machine learning fundamentals on Azure).
 */
export default [
  {
    id: 1018,
    topic: 'ml-deep-learning',
    type: 'single',
    q: [
      'Which statement best describes deep learning?',
    ],
    o: [
      ['It uses neural networks with many layers that learn features directly from raw data', true],
      ['It groups unlabelled records into clusters of similar items', false],
      ['It selects the best columns of a dataset by hand before training', false],
      ['It stores documents in a search index so that they can be queried', false],
    ],
    e: [
      [
        'Deep learning is a branch of machine learning built on artificial neural networks with many hidden layers.',
        'The layers learn their own representations of the data, so the features do not have to be engineered by hand.',
        'It is especially strong on images, audio and text, but it needs a lot of data and usually a GPU.',
      ],
    ],
    vq: ['Phát biểu nào mô tả đúng nhất về deep learning?'],
    vo: [
      'Dùng mạng nơ-ron nhiều lớp, tự học đặc trưng trực tiếp từ dữ liệu thô',
      'Gom các bản ghi chưa có nhãn thành các cụm gồm những mục giống nhau',
      'Chọn thủ công các cột tốt nhất của tập dữ liệu trước khi huấn luyện',
      'Lưu tài liệu vào chỉ mục tìm kiếm để có thể truy vấn',
    ],
    ve: [
      [
        'Deep learning là một nhánh của machine learning, xây trên mạng nơ-ron nhân tạo có nhiều lớp ẩn.',
        'Các lớp tự học cách biểu diễn dữ liệu nên không phải thiết kế feature bằng tay.',
        'Nó đặc biệt mạnh với ảnh, âm thanh và văn bản, nhưng cần nhiều dữ liệu và thường cần GPU.',
      ],
    ],
  },

  {
    id: 1019,
    topic: 'ml-deep-learning',
    type: 'yesno_table',
    q: [
      'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'Deep learning is a subset of machine learning.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Deep learning models are built from artificial neural networks that contain multiple layers.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Deep learning always needs less training data than classical machine learning.',
        o: ['Yes', 'No'],
        a: 1,
      },
    ],
    e: [
      [
        'Deep learning sits inside machine learning, which in turn sits inside artificial intelligence.',
        'Its defining feature is the multi-layer neural network.',
        'Deep learning normally needs MORE data, not less, because the network has far more parameters to fit.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      { p: 'Deep learning là một tập con của machine learning.', o: ['Có', 'Không'] },
      {
        p: 'Mô hình deep learning được dựng từ mạng nơ-ron nhân tạo có nhiều lớp.',
        o: ['Có', 'Không'],
      },
      {
        p: 'Deep learning luôn cần ít dữ liệu huấn luyện hơn machine learning cổ điển.',
        o: ['Có', 'Không'],
      },
    ],
    ve: [
      [
        'Deep learning nằm trong machine learning, và machine learning lại nằm trong artificial intelligence.',
        'Đặc trưng nhận biết của nó là mạng nơ-ron nhiều lớp.',
        'Deep learning thường cần NHIỀU dữ liệu hơn chứ không ít hơn, vì mạng có rất nhiều tham số phải khớp.',
      ],
    ],
  },

  {
    id: 1020,
    topic: 'ml-deep-learning',
    type: 'single',
    q: [
      'You are training a deep learning model on a very large set of images and the training job takes days on a standard CPU cluster.',
      'What should you use to shorten the training time?',
    ],
    o: [
      ['A GPU-enabled compute cluster', true],
      ['A compute instance with a smaller virtual machine size', false],
      ['An Azure AI Search index', false],
      ['An inference cluster', false],
    ],
    e: [
      [
        'Deep learning is dominated by matrix operations, which GPUs execute far faster than CPUs.',
        'An inference cluster serves predictions from a model that is already trained, so it does not help with training.',
      ],
    ],
    vq: [
      'Bạn đang huấn luyện một mô hình deep learning trên tập ảnh rất lớn và công việc huấn luyện mất nhiều ngày trên cụm CPU thông thường.',
      'Bạn nên dùng gì để rút ngắn thời gian huấn luyện?',
    ],
    vo: [
      'Một compute cluster có GPU',
      'Một compute instance với kích thước máy ảo nhỏ hơn',
      'Một chỉ mục Azure AI Search',
      'Một inference cluster',
    ],
    ve: [
      [
        'Deep learning chủ yếu là các phép tính ma trận, GPU thực thi nhanh hơn CPU rất nhiều.',
        'Inference cluster phục vụ dự đoán cho mô hình đã huấn luyện xong nên không giúp gì cho khâu training.',
      ],
    ],
  },

  {
    id: 1021,
    topic: 'ml-deep-learning',
    type: 'yesno',
    q: [
      'In a deep learning model, the features are engineered manually before training because the network cannot learn them by itself.',
    ],
    subs: [{ o: ['Yes', 'No'], a: 1 }],
    e: [
      [
        'The opposite is true. The hidden layers of a deep neural network learn their own feature representations from the raw input.',
        'That is exactly why deep learning is preferred for images, audio and text, where hand-crafted features are hard to design.',
      ],
    ],
    vq: [
      'Trong mô hình deep learning, feature phải được thiết kế thủ công trước khi huấn luyện vì mạng không tự học được.',
    ],
    vsubs: [{ o: ['Có', 'Không'] }],
    ve: [
      [
        'Ngược lại mới đúng. Các lớp ẩn của mạng nơ-ron sâu tự học cách biểu diễn đặc trưng từ dữ liệu thô.',
        'Đó chính là lý do deep learning được ưu tiên cho ảnh, âm thanh và văn bản — nơi rất khó thiết kế feature bằng tay.',
      ],
    ],
  },

  {
    id: 1022,
    topic: 'ml-transformer',
    type: 'single',
    q: [
      'Which architecture do modern large language models such as GPT and BERT are built on?',
    ],
    o: [
      ['Transformer', true],
      ['K-Means', false],
      ['Linear regression', false],
      ['Confusion matrix', false],
    ],
    e: [
      [
        'The Transformer architecture is the foundation of today’s large language models.',
        'K-Means is a clustering algorithm, linear regression is a classical numeric predictor, and a confusion matrix is an evaluation tool, not an architecture.',
      ],
    ],
    vq: ['Các mô hình ngôn ngữ lớn hiện đại như GPT và BERT được xây trên kiến trúc nào?'],
    vo: ['Transformer', 'K-Means', 'Linear regression', 'Confusion matrix'],
    ve: [
      [
        'Kiến trúc Transformer là nền tảng của các mô hình ngôn ngữ lớn hiện nay.',
        'K-Means là thuật toán clustering, linear regression là bộ dự đoán số cổ điển, còn confusion matrix là công cụ đánh giá chứ không phải kiến trúc.',
      ],
    ],
  },

  {
    id: 1023,
    topic: 'ml-transformer',
    type: 'single',
    q: [
      'Which mechanism allows a Transformer model to weigh the relationship between every word in a sentence at the same time, instead of reading the words strictly one after another?',
    ],
    o: [
      ['Attention', true],
      ['Normalisation', false],
      ['Cross-validation', false],
      ['Bounding boxes', false],
    ],
    e: [
      [
        'Attention is the core idea of the Transformer: each token can attend to every other token, so long-range context is preserved.',
        'Normalisation rescales numeric columns, cross-validation is an evaluation technique, and bounding boxes belong to object detection.',
      ],
    ],
    vq: [
      'Cơ chế nào cho phép mô hình Transformer cân nhắc quan hệ giữa mọi từ trong câu cùng lúc, thay vì đọc lần lượt từng từ?',
    ],
    vo: ['Attention', 'Normalisation', 'Cross-validation', 'Bounding box'],
    ve: [
      [
        'Attention là ý tưởng cốt lõi của Transformer: mỗi token có thể chú ý tới mọi token khác nên giữ được ngữ cảnh xa.',
        'Normalisation đưa các cột số về cùng thang đo, cross-validation là kỹ thuật đánh giá, còn bounding box thuộc object detection.',
      ],
    ],
  },

  {
    id: 1024,
    topic: 'ml-transformer',
    type: 'yesno_table',
    q: [
      'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'The Transformer architecture underpins generative AI language models.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Before a Transformer processes text, the text is broken into tokens.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'A Transformer must process the words of a sentence strictly from left to right.',
        o: ['Yes', 'No'],
        a: 1,
      },
    ],
    e: [
      [
        'Transformers are the basis of generative language models, and they work on tokens rather than raw characters or whole words.',
        'Unlike recurrent networks, a Transformer looks at all positions in parallel through attention, so it is not restricted to left-to-right reading.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      {
        p: 'Kiến trúc Transformer là nền tảng của các mô hình ngôn ngữ generative AI.',
        o: ['Có', 'Không'],
      },
      { p: 'Trước khi Transformer xử lý, văn bản được cắt thành các token.', o: ['Có', 'Không'] },
      {
        p: 'Transformer bắt buộc phải xử lý các từ trong câu lần lượt từ trái sang phải.',
        o: ['Có', 'Không'],
      },
    ],
    ve: [
      [
        'Transformer là nền của các mô hình ngôn ngữ sinh, và nó làm việc trên token chứ không phải ký tự thô hay nguyên từ.',
        'Khác với mạng hồi quy, Transformer nhìn mọi vị trí song song thông qua attention nên không bị buộc đọc từ trái sang phải.',
      ],
    ],
  },

  {
    id: 1025,
    topic: 'ml-transformer',
    type: 'single',
    q: [
      'In a Transformer-based language model, what is an embedding?',
    ],
    o: [
      ['A numeric vector that represents the meaning of a token', true],
      ['The rectangle that surrounds a detected object in an image', false],
      ['The percentage of predictions that the model got right', false],
      ['The compute target on which the model is deployed', false],
    ],
    e: [
      [
        'An embedding maps a token to a vector of numbers, positioning items with similar meaning close together in the vector space.',
        'Embeddings are what make semantic search and retrieval augmented generation possible.',
      ],
    ],
    vq: ['Trong mô hình ngôn ngữ dựa trên Transformer, embedding là gì?'],
    vo: [
      'Một vector số biểu diễn ý nghĩa của một token',
      'Khung chữ nhật bao quanh vật thể được phát hiện trong ảnh',
      'Tỉ lệ phần trăm dự đoán mà mô hình làm đúng',
      'Compute target mà mô hình được triển khai lên',
    ],
    ve: [
      [
        'Embedding ánh xạ một token thành vector số, đặt những mục có ý nghĩa gần nhau ở gần nhau trong không gian vector.',
        'Embedding chính là thứ làm cho semantic search và retrieval augmented generation trở nên khả thi.',
      ],
    ],
  },

  {
    id: 1026,
    topic: 'ml-compute',
    type: 'single',
    q: [
      'A data scientist needs a personal, always-available development environment in Azure Machine Learning studio for writing and testing notebooks.',
      'Which compute resource should the data scientist use?',
    ],
    o: [
      ['A compute instance', true],
      ['A compute cluster', false],
      ['An inference cluster', false],
      ['An attached Azure Databricks cluster', false],
    ],
    e: [
      [
        'A compute instance is a single managed virtual machine intended as a personal workstation for authoring and running notebooks.',
        'A compute cluster scales out for training jobs, and an inference cluster serves deployed models.',
      ],
    ],
    vq: [
      'Một data scientist cần môi trường phát triển cá nhân luôn sẵn sàng trong Azure Machine Learning studio để viết và chạy thử notebook.',
      'Người này nên dùng tài nguyên compute nào?',
    ],
    vo: [
      'Compute instance',
      'Compute cluster',
      'Inference cluster',
      'Cụm Azure Databricks được gắn kèm',
    ],
    ve: [
      [
        'Compute instance là một máy ảo được quản lý, đóng vai trò trạm làm việc cá nhân để soạn và chạy notebook.',
        'Compute cluster co giãn cho các job huấn luyện, còn inference cluster phục vụ mô hình đã triển khai.',
      ],
    ],
  },

  {
    id: 1027,
    topic: 'ml-compute',
    type: 'match',
    q: [
      'Match each requirement to the Azure Machine Learning compute resource that fits it best.',
      'Each resource may be used once, more than once, or not at all.',
    ],
    subs: [
      {
        p: 'Run a training job that scales out across several nodes and shuts the nodes down when the job finishes.',
        o: ['Compute instance', 'Compute cluster', 'Inference cluster'],
        a: 1,
      },
      {
        p: 'Serve real-time predictions from a deployed model in production.',
        o: ['Compute instance', 'Compute cluster', 'Inference cluster'],
        a: 2,
      },
      {
        p: 'Give one data scientist a managed virtual machine for interactive notebook work.',
        o: ['Compute instance', 'Compute cluster', 'Inference cluster'],
        a: 0,
      },
    ],
    e: [
      [
        'Compute clusters are elastic: they add nodes for a training job and scale back to zero afterwards, so you only pay while training.',
        'Inference clusters, backed by Azure Kubernetes Service, host real-time endpoints in production.',
        'Compute instances are single-user development boxes.',
      ],
    ],
    vq: [
      'Ghép mỗi yêu cầu với tài nguyên compute phù hợp nhất của Azure Machine Learning.',
      'Mỗi tài nguyên có thể dùng một lần, nhiều lần hoặc không dùng.',
    ],
    vsubs: [
      {
        p: 'Chạy một job huấn luyện co giãn trên nhiều node và tự tắt node khi job kết thúc.',
        o: ['Compute instance', 'Compute cluster', 'Inference cluster'],
      },
      {
        p: 'Phục vụ dự đoán real-time từ mô hình đã triển khai trong môi trường production.',
        o: ['Compute instance', 'Compute cluster', 'Inference cluster'],
      },
      {
        p: 'Cấp cho một data scientist một máy ảo được quản lý để làm việc tương tác với notebook.',
        o: ['Compute instance', 'Compute cluster', 'Inference cluster'],
      },
    ],
    ve: [
      [
        'Compute cluster có tính co giãn: thêm node khi có job huấn luyện rồi thu về 0 sau đó, nên chỉ trả tiền lúc huấn luyện.',
        'Inference cluster chạy trên Azure Kubernetes Service, phục vụ endpoint real-time trong production.',
        'Compute instance là máy phát triển dành cho một người dùng.',
      ],
    ],
  },

  {
    id: 1028,
    topic: 'ml-compute',
    type: 'single',
    q: [
      'In an Azure Machine Learning workspace, which object stores the connection information to an Azure Storage account so that the same data source can be reused without repeating the credentials?',
    ],
    o: [
      ['A datastore', true],
      ['A compute target', false],
      ['A pipeline draft', false],
      ['A confusion matrix', false],
    ],
    e: [
      [
        'A datastore keeps the connection details for a data source, such as an Azure Storage account, inside the workspace.',
        'Datasets are then defined on top of a datastore so that experiments can reference the data by name.',
      ],
    ],
    vq: [
      'Trong một Azure Machine Learning workspace, đối tượng nào lưu thông tin kết nối tới tài khoản Azure Storage để cùng một nguồn dữ liệu được dùng lại mà không phải khai lại thông tin đăng nhập?',
    ],
    vo: ['Datastore', 'Compute target', 'Pipeline draft', 'Confusion matrix'],
    ve: [
      [
        'Datastore giữ thông tin kết nối tới nguồn dữ liệu, ví dụ một tài khoản Azure Storage, ngay trong workspace.',
        'Dataset được định nghĩa dựa trên datastore để các thí nghiệm tham chiếu dữ liệu theo tên.',
      ],
    ],
  },

  {
    id: 1029,
    topic: 'ml-compute',
    type: 'yesno',
    q: [
      'A compute cluster in Azure Machine Learning can automatically scale the number of nodes up and down based on the workload.',
    ],
    subs: [{ o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'A compute cluster is defined with a minimum and a maximum node count and scales between them as jobs arrive and finish.',
        'Setting the minimum to zero means you pay nothing while the cluster is idle.',
      ],
    ],
    vq: [
      'Compute cluster trong Azure Machine Learning có thể tự động tăng giảm số node theo khối lượng công việc.',
    ],
    vsubs: [{ o: ['Có', 'Không'] }],
    ve: [
      [
        'Compute cluster được khai báo với số node tối thiểu và tối đa, rồi co giãn trong khoảng đó khi job đến và kết thúc.',
        'Đặt mức tối thiểu bằng 0 nghĩa là không tốn phí trong lúc cụm rảnh.',
      ],
    ],
  },

  {
    id: 1030,
    topic: 'ml-techniques',
    type: 'match',
    q: [
      'Match each scenario to the machine learning technique that it uses.',
      'Each technique may be used once, more than once, or not at all.',
    ],
    subs: [
      {
        p: 'Estimate how many litres of milk a shop will sell tomorrow.',
        o: ['Classification', 'Clustering', 'Regression'],
        a: 2,
      },
      {
        p: 'Decide whether an incoming email is spam or not spam.',
        o: ['Classification', 'Clustering', 'Regression'],
        a: 0,
      },
      {
        p: 'Group news articles that talk about similar topics, without any labels being supplied.',
        o: ['Classification', 'Clustering', 'Regression'],
        a: 1,
      },
    ],
    e: [
      [
        'Predicting a number is regression, predicting a known label is classification, and grouping unlabelled data is clustering.',
        'Regression and classification are supervised; clustering is unsupervised.',
      ],
    ],
    vq: [
      'Ghép mỗi tình huống với kỹ thuật machine learning mà nó sử dụng.',
      'Mỗi kỹ thuật có thể dùng một lần, nhiều lần hoặc không dùng.',
    ],
    vsubs: [
      {
        p: 'Ước lượng ngày mai cửa hàng bán được bao nhiêu lít sữa.',
        o: ['Classification', 'Clustering', 'Regression'],
      },
      {
        p: 'Xác định một email đến là thư rác hay không phải thư rác.',
        o: ['Classification', 'Clustering', 'Regression'],
      },
      {
        p: 'Gom các bài báo nói về chủ đề tương tự nhau mà không được cung cấp nhãn nào.',
        o: ['Classification', 'Clustering', 'Regression'],
      },
    ],
    ve: [
      [
        'Dự đoán một con số là regression, dự đoán một nhãn có sẵn là classification, còn gom dữ liệu chưa có nhãn là clustering.',
        'Regression và classification là học có giám sát; clustering là học không giám sát.',
      ],
    ],
  },

  {
    id: 1031,
    topic: 'ml-techniques',
    type: 'single',
    q: [
      'Which machine learning technique does NOT require labelled training data?',
    ],
    o: [
      ['Clustering', true],
      ['Regression', false],
      ['Binary classification', false],
      ['Multi-class classification', false],
    ],
    e: [
      [
        'Clustering is unsupervised: it discovers the groups itself, so no labels are supplied.',
        'Regression and both flavours of classification are supervised techniques and need labelled examples.',
      ],
    ],
    vq: ['Kỹ thuật machine learning nào KHÔNG cần dữ liệu huấn luyện đã gán nhãn?'],
    vo: ['Clustering', 'Regression', 'Binary classification', 'Multi-class classification'],
    ve: [
      [
        'Clustering là học không giám sát: nó tự tìm ra các nhóm nên không cần nhãn.',
        'Regression và cả hai dạng classification đều là học có giám sát nên cần dữ liệu có nhãn.',
      ],
    ],
  },

  {
    id: 1032,
    topic: 'ml-evaluate',
    type: 'single',
    q: [
      'A binary classification model has an AUC of 0.42.',
      'What does that tell you about the model?',
    ],
    o: [
      ['It performs worse than random guessing', true],
      ['It performs slightly better than random guessing', false],
      ['It is a perfect classifier', false],
      ['AUC cannot be used for classification models', false],
    ],
    e: [
      [
        'An AUC of 0.5 is the score you would get by guessing at random.',
        'Anything below 0.5 therefore means the model is doing worse than a coin toss; 1.0 would be a perfect classifier.',
      ],
    ],
    vq: [
      'Một mô hình phân loại nhị phân có AUC bằng 0.42.',
      'Điều đó cho biết gì về mô hình?',
    ],
    vo: [
      'Mô hình còn tệ hơn đoán ngẫu nhiên',
      'Mô hình tốt hơn đoán ngẫu nhiên một chút',
      'Đây là bộ phân loại hoàn hảo',
      'Không dùng được AUC cho mô hình phân loại',
    ],
    ve: [
      [
        'AUC bằng 0.5 là mức điểm khi đoán ngẫu nhiên.',
        'Vì vậy dưới 0.5 nghĩa là mô hình còn tệ hơn tung đồng xu; 1.0 mới là bộ phân loại hoàn hảo.',
      ],
    ],
  },

  {
    id: 1033,
    topic: 'ml-evaluate',
    type: 'match',
    q: [
      'Match each evaluation metric to the type of model it is normally reported for.',
      'Each model type may be used once, more than once, or not at all.',
    ],
    subs: [
      {
        p: 'Coefficient of determination (R squared)',
        o: ['Regression model', 'Classification model'],
        a: 0,
      },
      { p: 'Precision and recall', o: ['Regression model', 'Classification model'], a: 1 },
      {
        p: 'Root mean squared error (RMSE)',
        o: ['Regression model', 'Classification model'],
        a: 0,
      },
    ],
    e: [
      [
        'Regression predicts numbers, so it is scored on how far the predictions are from the true values: R squared and RMSE.',
        'Classification predicts labels, so it is scored from the confusion matrix: accuracy, precision, recall, F1 and AUC.',
      ],
    ],
    vq: [
      'Ghép mỗi chỉ số đánh giá với loại mô hình thường dùng nó.',
      'Mỗi loại mô hình có thể dùng một lần, nhiều lần hoặc không dùng.',
    ],
    vsubs: [
      {
        p: 'Coefficient of determination (R bình phương)',
        o: ['Mô hình regression', 'Mô hình classification'],
      },
      { p: 'Precision và recall', o: ['Mô hình regression', 'Mô hình classification'] },
      {
        p: 'Root mean squared error (RMSE)',
        o: ['Mô hình regression', 'Mô hình classification'],
      },
    ],
    ve: [
      [
        'Regression dự đoán con số nên được chấm theo mức lệch giữa dự đoán và giá trị thật: R bình phương và RMSE.',
        'Classification dự đoán nhãn nên được chấm từ confusion matrix: accuracy, precision, recall, F1 và AUC.',
      ],
    ],
  },
];
