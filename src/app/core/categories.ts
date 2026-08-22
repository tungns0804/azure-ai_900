/**
 * Danh mục kiến thức AI-900, bám theo "Skills measured" chính thức của Microsoft
 * (bản hiệu lực 02/05/2025 — https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-900).
 * Mỗi chủ đề kèm mô tả tổng quan và link tài liệu Microsoft để đọc chi tiết.
 */

export type DomainId = 'd1' | 'd2' | 'd3' | 'd4' | 'd5';

export interface StudyLink {
  label: string;
  url: string;
}

export interface StudyTopic {
  id: string;
  /** tên chủ đề (tiếng Việt) */
  title: string;
  /** mục tiêu tương ứng trong đề cương chính thức (nguyên văn tiếng Anh) */
  objective: string;
  /** mô tả tổng quan */
  overview: string;
  links: StudyLink[];
}

export interface StudyGroup {
  /** tiêu đề nhóm, nguyên văn theo đề cương */
  title: string;
  topics: StudyTopic[];
}

export interface StudyDomain {
  id: DomainId;
  title: string;
  objective: string;
  /** tỉ trọng trong đề thi */
  weight: string;
  intro: string;
  groups: StudyGroup[];
}

const L = 'https://learn.microsoft.com/en-us';

export const STUDY_GUIDE_URL = `${L}/credentials/certifications/resources/study-guides/ai-900`;
export const AI901_URL = `${L}/credentials/certifications/exams/ai-901/`;
export const CERT_URL = `${L}/credentials/certifications/azure-ai-fundamentals/`;

export const DOMAINS: StudyDomain[] = [
  {
    id: 'd1',
    title: 'Khối lượng công việc AI & nguyên tắc AI có trách nhiệm',
    objective: 'Describe Artificial Intelligence workloads and considerations',
    weight: '15–20%',
    intro:
      'Nhận diện đúng loại workload AI cho một tình huống nghiệp vụ, và nắm 6 nguyên tắc AI có trách nhiệm của Microsoft. Đây là phần lý thuyết thuần, gần như không có kỹ thuật — học kỹ là ăn điểm chắc.',
    groups: [
      {
        title: 'Identify features of common AI workloads',
        topics: [
          {
            id: 'w-overview',
            title: 'Tổng quan các loại workload AI',
            objective: 'Identify features of common AI workloads',
            overview:
              'Phân biệt 6 nhóm workload thường gặp: computer vision, natural language processing, conversational AI, document processing, knowledge mining và anomaly detection. Đề thi hay cho một tình huống rồi hỏi nó thuộc loại nào — hãy bám vào loại dữ liệu đầu vào (ảnh / văn bản / âm thanh / số liệu theo thời gian).',
            links: [
              { label: 'Azure AI services là gì', url: `${L}/azure/ai-services/what-are-ai-services` },
              { label: 'Học phần: Get started with AI', url: `${L}/training/modules/get-started-ai-fundamentals/` },
            ],
          },
          {
            id: 'w-cv',
            title: 'Computer vision workload',
            objective: 'Identify computer vision workloads',
            overview:
              'Workload xử lý ảnh và video: phân loại ảnh, phát hiện vật thể, đọc chữ trong ảnh, phân tích khuôn mặt. Dấu hiệu nhận biết: đầu vào là hình ảnh hoặc video.',
            links: [{ label: 'Azure AI Vision — tổng quan', url: `${L}/azure/ai-services/computer-vision/overview` }],
          },
          {
            id: 'w-nlp',
            title: 'Natural language processing workload',
            objective: 'Identify natural language processing workloads',
            overview:
              'Workload xử lý ngôn ngữ tự nhiên: phân tích cảm xúc, trích xuất từ khoá, nhận dạng thực thể, dịch thuật, nhận dạng và tổng hợp giọng nói. Dấu hiệu nhận biết: đầu vào là văn bản hoặc lời nói.',
            links: [{ label: 'Azure AI Language — tổng quan', url: `${L}/azure/ai-services/language-service/overview` }],
          },
          {
            id: 'w-conversational',
            title: 'Conversational AI (bot)',
            objective: 'Identify conversational AI workloads',
            overview:
              'Hội thoại tự động hai chiều với người dùng: chatbot trên web, trợ lý ảo, bot trả lời câu hỏi. Lợi ích nghiệp vụ điển hình là giảm tải cho nhân viên hỗ trợ, phục vụ 24/7 — đề thi hay hỏi đúng ý này.',
            links: [{ label: 'Azure Bot Service — tổng quan', url: `${L}/azure/bot-service/bot-service-overview` }],
          },
          {
            id: 'w-doc',
            title: 'Xử lý tài liệu (Document Intelligence / Form Recognizer)',
            objective: 'Identify document processing workloads',
            overview:
              'Trích xuất tự động text, cặp key/value và bảng từ hoá đơn, biên lai, danh thiếp, tài liệu scan. Có sẵn các mô hình pre-built (receipt, invoice, business card, ID). Giới hạn hay bị hỏi: file JPG/PNG/PDF tối đa 50 MB cho mô hình pre-built.',
            links: [
              { label: 'Azure AI Document Intelligence', url: `${L}/azure/ai-services/document-intelligence/overview` },
            ],
          },
          {
            id: 'w-search',
            title: 'Knowledge mining (Azure AI Search)',
            objective: 'Identify knowledge mining workloads',
            overview:
              'Biến khối tài liệu phi cấu trúc thành chỉ mục tìm kiếm được. Luồng: data source → indexer → (skillset để làm giàu bằng AI) → index. Lưu ý: skillset là tuỳ chọn, vẫn query được index nếu không dùng AI skillset; dữ liệu đẩy vào index phải ở dạng JSON.',
            links: [
              { label: 'Azure AI Search là gì', url: `${L}/azure/search/search-what-is-azure-search` },
              { label: 'Indexer — tổng quan', url: `${L}/azure/search/search-indexer-overview` },
              { label: 'AI enrichment (skillset)', url: `${L}/azure/search/cognitive-search-concept-intro` },
            ],
          },
          {
            id: 'w-anomaly',
            title: 'Anomaly detection',
            objective: 'Identify anomaly detection workloads',
            overview:
              'Phát hiện điểm dữ liệu bất thường so với mẫu thông thường — ví dụ đăng nhập đáng ngờ, gian lận thẻ, cảm biến lỗi. Đừng nhầm với dự báo (regression) hay phân loại bệnh (classification).',
            links: [{ label: 'Anomaly Detector — tổng quan', url: `${L}/azure/ai-services/anomaly-detector/overview` }],
          },
          {
            id: 'ai-services-resource',
            title: 'Chọn tài nguyên Azure AI services',
            objective: 'Describe Azure AI services resources',
            overview:
              'Tài nguyên đa dịch vụ (multi-service / Cognitive Services) cho phép dùng CHUNG một key và endpoint cho nhiều dịch vụ — chọn nó khi đề bài yêu cầu "chỉ một key và endpoint". Tài nguyên đơn dịch vụ (single-service) tách riêng để tính phí và quản lý độc lập. Riêng Custom Vision có thể tách tài nguyên training và prediction.',
            links: [
              { label: 'Azure AI services là gì', url: `${L}/azure/ai-services/what-are-ai-services` },
              { label: 'Bảo mật Azure AI services', url: `${L}/azure/ai-services/security-features` },
            ],
          },
        ],
      },
      {
        title: 'Identify guiding principles for responsible AI',
        topics: [
          {
            id: 'rai-overview',
            title: '6 nguyên tắc AI có trách nhiệm',
            objective: 'Identify guiding principles for responsible AI',
            overview:
              'Sáu nguyên tắc của Microsoft: Fairness, Reliability & safety, Privacy & security, Inclusiveness, Transparency, Accountability. Cần thuộc lòng — đề hay đưa các phương án "mồi" không phải nguyên tắc như knowledgeability, decisiveness, validity.',
            links: [
              { label: 'Responsible AI — tổng quan', url: `${L}/azure/machine-learning/concept-responsible-ai` },
              { label: 'Học phần: Responsible AI', url: `${L}/training/modules/responsible-ai-studio/` },
            ],
          },
          {
            id: 'rai-fairness',
            title: 'Fairness — công bằng',
            objective: 'Describe considerations for fairness in an AI solution',
            overview:
              'Hệ thống AI không được thiên vị hay phân biệt đối xử theo giới tính, chủng tộc, tuổi… và không được kế thừa thiên lệch có sẵn trong dữ liệu huấn luyện. Từ khoá nhận biết: "không phân biệt", "thiên lệch (bias)", "đối xử công bằng giữa các nhóm".',
            links: [
              { label: 'Fairness trong machine learning', url: `${L}/azure/machine-learning/concept-fairness-ml` },
            ],
          },
          {
            id: 'rai-reliability',
            title: 'Reliability & safety — tin cậy và an toàn',
            objective: 'Describe considerations for reliability and safety in an AI solution',
            overview:
              'Hệ thống phải hoạt động ổn định, nhất quán kể cả trong tình huống bất ngờ. Từ khoá nhận biết: xe tự lái, thiết bị y tế, và đặc biệt là "xử lý giá trị bất thường hoặc bị thiếu (unusual or missing values)" — câu này xuất hiện rất nhiều lần trong đề.',
            links: [{ label: 'Responsible AI — tổng quan', url: `${L}/azure/machine-learning/concept-responsible-ai` }],
          },
          {
            id: 'rai-privacy',
            title: 'Privacy & security — riêng tư và bảo mật',
            objective: 'Describe considerations for privacy and security in an AI solution',
            overview:
              'Bảo vệ dữ liệu cá nhân dùng để huấn luyện và vận hành mô hình; chỉ người được cấp quyền mới xem được dữ liệu cá nhân. Từ khoá: mã hoá, kiểm soát truy cập, ẩn danh hoá dữ liệu.',
            links: [
              { label: 'Bảo mật trong Azure ML', url: `${L}/azure/machine-learning/concept-enterprise-security` },
              { label: 'Mã hoá dữ liệu', url: `${L}/azure/machine-learning/concept-data-encryption` },
            ],
          },
          {
            id: 'rai-inclusive',
            title: 'Inclusiveness — hoà nhập',
            objective: 'Describe considerations for inclusiveness in an AI solution',
            overview:
              'AI phải phục vụ được mọi người, không bỏ sót nhóm nào vì khuyết tật, ngôn ngữ hay hoàn cảnh. Từ khoá nhận biết: người khiếm thị/khiếm thính, đầu ra bằng âm thanh, "rào cản khiến một nhóm người dùng bị bỏ sót".',
            links: [{ label: 'Responsible AI — tổng quan', url: `${L}/azure/machine-learning/concept-responsible-ai` }],
          },
          {
            id: 'rai-transparency',
            title: 'Transparency — minh bạch',
            objective: 'Describe considerations for transparency in an AI solution',
            overview:
              'Người dùng phải hiểu được hệ thống hoạt động thế nào và vì sao ra quyết định đó. Từ khoá nhận biết: "các yếu tố dẫn tới quyết định phải giải thích được (explainable)"; trong automated ML chính là tuỳ chọn Explain best model.',
            links: [
              { label: 'Model interpretability', url: `${L}/azure/machine-learning/how-to-machine-learning-interpretability` },
            ],
          },
          {
            id: 'rai-accountability',
            title: 'Accountability — trách nhiệm giải trình',
            objective: 'Describe considerations for accountability in an AI solution',
            overview:
              'Con người, chứ không phải mô hình, chịu trách nhiệm cuối cùng. Thể hiện qua khung quản trị: hội đồng quản trị rủi ro, quy trình kiểm định mô hình trong review, tuân thủ pháp lý và tiêu chuẩn nội bộ.',
            links: [{ label: 'Responsible AI — tổng quan', url: `${L}/azure/machine-learning/concept-responsible-ai` }],
          },
        ],
      },
    ],
  },

  {
    id: 'd2',
    title: 'Nguyên lý cơ bản của Machine Learning trên Azure',
    objective: 'Describe fundamental principles of machine learning on Azure',
    weight: '15–20%',
    intro:
      'Phân biệt các kiểu bài toán ML, hiểu feature/label và cách chia dữ liệu, cùng các năng lực chính của Azure Machine Learning (automated ML, designer, compute, deploy).',
    groups: [
      {
        title: 'Identify common machine learning techniques',
        topics: [
          {
            id: 'ml-techniques',
            title: 'Phân biệt regression / classification / clustering',
            objective: 'Identify common machine learning techniques',
            overview:
              'Mẹo phân biệt nhanh: dự đoán một CON SỐ → regression; dự đoán một NHÃN/HẠNG MỤC có sẵn → classification; TỰ NHÓM dữ liệu chưa có nhãn → clustering. Đây là dạng câu hỏi xuất hiện nhiều nhất trong phần này.',
            links: [
              { label: 'Học phần: Fundamentals of machine learning', url: `${L}/training/modules/fundamentals-machine-learning/` },
            ],
          },
          {
            id: 'ml-regression',
            title: 'Regression — hồi quy',
            objective: 'Identify regression machine learning scenarios',
            overview:
              'Dự đoán một giá trị số liên tục: giá nhà, doanh số kem, lượng mưa (mm), số xe qua cầu, số giờ làm thêm, nhiệt độ. Học có giám sát, cần dữ liệu đã có nhãn số.',
            links: [
              { label: 'Huấn luyện mô hình trong Azure ML', url: `${L}/azure/machine-learning/concept-train-machine-learning-model` },
            ],
          },
          {
            id: 'ml-classification',
            title: 'Classification — phân loại',
            objective: 'Identify classification machine learning scenarios',
            overview:
              'Dự đoán một nhãn rời rạc: khoản vay có được trả hay không, đơn xin thẻ tín dụng rủi ro cao/thấp, ảnh chụp não thuộc loại ung thư nào, sinh viên có hoàn thành khoá học không. Nhị phân (2 lớp) hoặc đa lớp.',
            links: [
              { label: 'Huấn luyện mô hình trong Azure ML', url: `${L}/azure/machine-learning/concept-train-machine-learning-model` },
            ],
          },
          {
            id: 'ml-clustering',
            title: 'Clustering — phân cụm',
            objective: 'Identify clustering machine learning scenarios',
            overview:
              'Học KHÔNG giám sát: tự gom các đối tượng giống nhau thành nhóm mà không cần nhãn trước — phân khúc khách hàng, nhóm tài liệu theo nội dung, nhóm bệnh nhân theo triệu chứng. Thuật toán tiêu biểu: K-Means.',
            links: [
              { label: 'Học phần: Fundamentals of machine learning', url: `${L}/training/modules/fundamentals-machine-learning/` },
            ],
          },
          {
            id: 'ml-deep-learning',
            title: 'Deep learning',
            objective: 'Identify features of deep learning techniques',
            overview:
              'Dùng mạng nơ-ron nhiều lớp, tự học đặc trưng từ dữ liệu thô thay vì phải thiết kế feature thủ công. Mạnh với ảnh, âm thanh, văn bản; cần nhiều dữ liệu và thường cần GPU.',
            links: [
              { label: 'Deep learning vs machine learning', url: `${L}/azure/machine-learning/concept-deep-learning-vs-machine-learning` },
            ],
          },
          {
            id: 'ml-transformer',
            title: 'Kiến trúc Transformer',
            objective: 'Identify features of the Transformer architecture',
            overview:
              'Kiến trúc nền tảng của các mô hình ngôn ngữ hiện đại (GPT, BERT). Điểm cốt lõi là cơ chế attention giúp mô hình cân nhắc quan hệ giữa mọi từ trong câu cùng lúc, thay vì đọc tuần tự. Đây là nền tảng của generative AI.',
            links: [
              { label: 'Học phần: Fundamentals of generative AI', url: `${L}/training/modules/fundamentals-generative-ai/` },
            ],
          },
        ],
      },
      {
        title: 'Describe core machine learning concepts',
        topics: [
          {
            id: 'ml-features-labels',
            title: 'Feature và label, chuẩn bị dữ liệu',
            objective: 'Identify features and labels in a dataset for machine learning',
            overview:
              'Feature (x) là các cột đầu vào ảnh hưởng tới dự đoán; label (y) là cột cần dự đoán. Phân biệt thêm: feature selection = CHỌN cột hữu ích sẵn có (và chuẩn hoá thang đo); feature engineering = TẠO cột mới (ví dụ tách ngày thành tháng/ngày/năm).',
            links: [
              { label: 'Học phần: Fundamentals of machine learning', url: `${L}/training/modules/fundamentals-machine-learning/` },
            ],
          },
          {
            id: 'ml-train-validate',
            title: 'Chia tập train / validation',
            objective: 'Describe how training and validation datasets are used in machine learning',
            overview:
              'Chia NGẪU NHIÊN theo HÀNG (không phải theo cột) thành tập huấn luyện và tập kiểm định. Mục đích: đánh giá mô hình trên dữ liệu nó chưa từng thấy, bằng cách so nhãn mô hình dự đoán với nhãn thật — qua đó phát hiện overfitting.',
            links: [
              { label: 'Huấn luyện mô hình', url: `${L}/azure/machine-learning/concept-train-machine-learning-model` },
            ],
          },
          {
            id: 'ml-evaluate',
            title: 'Đánh giá mô hình và các chỉ số',
            objective: 'Describe how to evaluate machine learning models',
            overview:
              'Regression dùng R² (coefficient of determination) và RMSE. Classification dùng confusion matrix (TP/FP/TN/FN), accuracy, precision, recall, F1, AUC. Nhớ: AUC 0.5 = đoán mò, AUC < 0.5 nghĩa là mô hình TỆ HƠN đoán ngẫu nhiên.',
            links: [
              { label: 'Module Evaluate Model', url: `${L}/azure/machine-learning/component-reference/evaluate-model` },
            ],
          },
        ],
      },
      {
        title: 'Describe Azure Machine Learning capabilities',
        topics: [
          {
            id: 'ml-automl',
            title: 'Automated machine learning',
            objective: 'Describe capabilities of automated machine learning',
            overview:
              'Tự chạy nhiều vòng huấn luyện với nhiều thuật toán, chấm điểm và xếp hạng theo primary metric bạn chọn (ví dụ R² cho regression). Không cần biết lập trình. Lưu ý: AutoML KHÔNG tự suy ra dữ liệu huấn luyện — bạn phải cung cấp dataset.',
            links: [{ label: 'Automated ML là gì', url: `${L}/azure/machine-learning/concept-automated-ml` }],
          },
          {
            id: 'ml-designer',
            title: 'Azure Machine Learning designer',
            objective: 'Describe capabilities of Azure Machine Learning designer',
            overview:
              'Giao diện kéo–thả để nối các module trên canvas trực quan thành pipeline, lưu được bản nháp (pipeline draft). Các module hay gặp: Select Columns in Dataset, Clean Missing Data, Normalize Data (đưa số về cùng thang đo), Split Data, Train Model, Score Model, Evaluate Model.',
            links: [
              { label: 'Designer — tổng quan', url: `${L}/azure/machine-learning/concept-designer` },
              { label: 'ML pipelines', url: `${L}/azure/machine-learning/concept-ml-pipelines` },
            ],
          },
          {
            id: 'ml-compute',
            title: 'Tài nguyên dữ liệu và compute',
            objective: 'Describe data and compute services for data science and machine learning',
            overview:
              'Compute instance là máy phát triển cho cá nhân; compute cluster co giãn theo tải để huấn luyện; inference cluster (AKS) phục vụ suy luận real-time. Datastore và dataset quản lý nguồn dữ liệu dùng chung trong workspace.',
            links: [{ label: 'Compute target', url: `${L}/azure/machine-learning/concept-compute-target` }],
          },
          {
            id: 'ml-deploy',
            title: 'Quản lý và triển khai mô hình',
            objective: 'Describe model management and deployment capabilities in Azure Machine Learning',
            overview:
              'Thứ tự chuẩn trước khi deploy: Data preparation → Model training → Model evaluation. Trong designer phải tạo inference pipeline từ training pipeline rồi mới publish. Triển khai real-time cho production dùng Azure Kubernetes Service (AKS); để gọi service cần REST endpoint và authentication key.',
            links: [
              { label: 'Endpoint và triển khai', url: `${L}/azure/machine-learning/concept-endpoints` },
              { label: 'Quản lý & triển khai mô hình', url: `${L}/azure/machine-learning/concept-model-management-and-deployment` },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'd3',
    title: 'Computer Vision trên Azure',
    objective: 'Describe features of computer vision workloads on Azure',
    weight: '15–20%',
    intro:
      'Bốn bài toán thị giác máy tính cốt lõi và các dịch vụ Azure tương ứng. Phân biệt được image classification với object detection và OCR là ăn phần lớn điểm phần này.',
    groups: [
      {
        title: 'Identify common types of computer vision solution',
        topics: [
          {
            id: 'cv-classification',
            title: 'Image classification — phân loại ảnh',
            objective: 'Identify features of image classification solutions',
            overview:
              'Gán MỘT nhãn cho TOÀN BỘ ảnh, kèm confidence (xác suất dự đoán đúng, 0–1). Không cho biết vật thể nằm ở đâu. Muốn cải thiện mô hình yếu: bổ sung thêm ảnh huấn luyện.',
            links: [
              { label: 'Custom Vision — tổng quan', url: `${L}/azure/ai-services/custom-vision-service/overview` },
            ],
          },
          {
            id: 'cv-object-detection',
            title: 'Object detection — phát hiện vật thể',
            objective: 'Identify features of object detection solutions',
            overview:
              'Trả về cho MỖI vật thể trong ảnh: nhãn lớp + xác suất + bounding box (toạ độ khung bao). Dùng khi cần biết VỊ TRÍ, ví dụ đo khoảng cách giữa các xe. Khác semantic segmentation — cái đó phân loại tới từng pixel.',
            links: [
              { label: 'Object detection', url: `${L}/azure/ai-services/computer-vision/concept-object-detection` },
              { label: 'Tạo object detector với Custom Vision', url: `${L}/azure/ai-services/custom-vision-service/get-started-build-detector` },
            ],
          },
          {
            id: 'cv-ocr',
            title: 'OCR — đọc chữ trong ảnh',
            objective: 'Identify features of optical character recognition solutions',
            overview:
              'Trích xuất chữ in và chữ viết tay từ ảnh, biển số, hoá đơn, sách scan. Với tài liệu dài, nhiều trang hoặc PDF, dùng Read API (xử lý bất đồng bộ) thay vì OCR API cũ.',
            links: [{ label: 'OCR — nhận dạng chữ', url: `${L}/azure/ai-services/computer-vision/overview-ocr` }],
          },
          {
            id: 'cv-face',
            title: 'Face — phát hiện và phân tích khuôn mặt',
            objective: 'Identify features of facial detection and facial analysis solutions',
            overview:
              'Detect trả về bounding box hình chữ nhật quanh mỗi khuôn mặt kèm thuộc tính (kính, tư thế…). Muốn nhận diện người cụ thể: tạo group nhiều ảnh của từng người rồi train. Yếu tố làm giảm độ chính xác: góc chụp cực đoan, thiếu sáng, che mặt.',
            links: [
              { label: 'Face — nhận dạng danh tính', url: `${L}/azure/ai-services/face/overview-identity` },
              { label: 'Phát hiện khuôn mặt', url: `${L}/azure/ai-services/face/concept-face-detection` },
            ],
          },
        ],
      },
      {
        title: 'Identify Azure tools and services for computer vision tasks',
        topics: [
          {
            id: 'cv-vision-service',
            title: 'Azure AI Vision service',
            objective: 'Describe capabilities of the Azure AI Vision service',
            overview:
              'Dịch vụ dựng sẵn, không cần huấn luyện: gắn tag, mô tả ảnh, phát hiện khuôn mặt, đọc chữ viết tay, tạo thumbnail. Lấy Objects khi cần vị trí từng vật thể; lấy Categories với domain landmarks để nhận diện địa danh nổi tiếng, domain celebrities cho người nổi tiếng.',
            links: [
              { label: 'Image Analysis', url: `${L}/azure/ai-services/computer-vision/overview-image-analysis` },
              { label: 'Gắn tag cho ảnh', url: `${L}/azure/ai-services/computer-vision/concept-tagging-images` },
            ],
          },
          {
            id: 'cv-custom-vision',
            title: 'Custom Vision service',
            objective: 'Describe capabilities of the Custom Vision service',
            overview:
              'Dùng khi cần huấn luyện bằng ẢNH CỦA CHÍNH BẠN — ví dụ nhận diện sản phẩm của đối thủ. Hỗ trợ cả classification lẫn object detection, KHÔNG phân tích video. Tách được tài nguyên training và prediction. Để gọi service, developer cần project ID, tên model, key và endpoint của tài nguyên prediction.',
            links: [
              { label: 'Custom Vision — tổng quan', url: `${L}/azure/ai-services/custom-vision-service/overview` },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'd4',
    title: 'Xử lý ngôn ngữ tự nhiên (NLP) trên Azure',
    objective: 'Describe features of Natural Language Processing (NLP) workloads on Azure',
    weight: '15–20%',
    intro:
      'Các tính năng của Azure AI Language và Azure AI Speech: phân tích văn bản, hiểu ý định người dùng, hỏi–đáp, giọng nói và dịch thuật.',
    groups: [
      {
        title: 'Identify features of common NLP workload scenarios',
        topics: [
          {
            id: 'nlp-keyphrase',
            title: 'Key phrase extraction — trích xuất từ khoá',
            objective: 'Identify features and uses for key phrase extraction',
            overview:
              'Rút ra các ý chính (main talking points) của một đoạn văn bản. Dùng khi đề bài nói "xác định các điểm nội dung chính" — đừng nhầm với sentiment analysis (đo cảm xúc) hay entity recognition (nhận diện thực thể).',
            links: [
              { label: 'Key phrase extraction', url: `${L}/azure/ai-services/language-service/key-phrase-extraction/overview` },
            ],
          },
          {
            id: 'nlp-entity',
            title: 'Entity recognition — nhận diện thực thể',
            objective: 'Identify features and uses for entity recognition',
            overview:
              'Xác định và phân loại các thực thể trong văn bản: người, địa điểm, tổ chức, ngày tháng, số lượng. Có biến thể PII để phát hiện thông tin định danh cá nhân, và entity linking để nối thực thể tới Wikipedia.',
            links: [
              { label: 'Named Entity Recognition', url: `${L}/azure/ai-services/language-service/named-entity-recognition/overview` },
              { label: 'Phát hiện thông tin cá nhân (PII)', url: `${L}/azure/ai-services/language-service/personally-identifiable-information/overview` },
            ],
          },
          {
            id: 'nlp-sentiment',
            title: 'Sentiment analysis — phân tích cảm xúc',
            objective: 'Identify features and uses for sentiment analysis',
            overview:
              'Chấm điểm sắc thái tình cảm của văn bản từ 0 đến 1: gần 1 là tích cực, gần 0 là tiêu cực, quanh 0.5 là trung tính. Ví dụ điển hình: đánh giá review sản phẩm là khen hay chê.',
            links: [
              { label: 'Sentiment analysis', url: `${L}/azure/ai-services/language-service/sentiment-opinion-mining/overview` },
            ],
          },
          {
            id: 'nlp-language-detect',
            title: 'Language detection — nhận diện ngôn ngữ',
            objective: 'Identify features and uses for language detection',
            overview:
              'Xác định ngôn ngữ chính của một đoạn văn bản, trả về tên ngôn ngữ, mã ISO và điểm tin cậy. Trả về NaN khi ngôn ngữ mơ hồ, không xác định được.',
            links: [
              { label: 'Language detection', url: `${L}/azure/ai-services/language-service/language-detection/overview` },
            ],
          },
          {
            id: 'nlp-clu',
            title: 'Conversational Language Understanding (LUIS)',
            objective: 'Identify features and uses for language modeling',
            overview:
              'Hiểu Ý ĐỊNH (intent) của người dùng từ câu nói (utterance) và trích các entity đi kèm. Ba thành phần cần nắm: utterances, intents, entities. Khác với Question Answering — cái đó tra câu trả lời có sẵn, không suy ra ý định.',
            links: [
              { label: 'Conversational Language Understanding', url: `${L}/azure/ai-services/language-service/conversational-language-understanding/overview` },
            ],
          },
          {
            id: 'nlp-qna',
            title: 'Question Answering / QnA Maker — cơ sở tri thức',
            objective: 'Identify features and uses for question answering',
            overview:
              'Tạo knowledge base cặp hỏi–đáp để bot trả lời. Cách nhanh nhất từ tài liệu FAQ có sẵn là IMPORT thẳng vào knowledge base, không chép tay. Lưu ý ranh giới: KHÔNG truy vấn được cơ sở dữ liệu SQL và KHÔNG xác định được intent của người dùng.',
            links: [
              { label: 'Question Answering', url: `${L}/azure/ai-services/language-service/question-answering/overview` },
              { label: 'Azure Bot Service', url: `${L}/azure/bot-service/bot-service-overview` },
            ],
          },
          {
            id: 'nlp-speech',
            title: 'Speech — nhận dạng và tổng hợp giọng nói',
            objective: 'Identify features and uses for speech recognition and synthesis',
            overview:
              'Speech-to-text chuyển lời nói thành văn bản (real-time hoặc batch); text-to-speech đọc văn bản thành giọng nói tự nhiên. Speech translation dịch trực tiếp lời nói sang ngôn ngữ khác.',
            links: [
              { label: 'Speech to text', url: `${L}/azure/ai-services/speech-service/speech-to-text` },
              { label: 'Text to speech', url: `${L}/azure/ai-services/speech-service/text-to-speech` },
              { label: 'Speech translation', url: `${L}/azure/ai-services/speech-service/speech-translation` },
            ],
          },
          {
            id: 'nlp-translate',
            title: 'Translation — dịch thuật',
            objective: 'Identify features and uses for translation',
            overview:
              'Azure AI Translator dịch VĂN BẢN giữa nhiều ngôn ngữ cùng lúc — dùng khi cần phát hành thông cáo báo chí bằng nhiều thứ tiếng. Cần dịch LỜI NÓI thì dùng Speech translation.',
            links: [{ label: 'Azure AI Translator', url: `${L}/azure/ai-services/translator/overview` }],
          },
        ],
      },
      {
        title: 'Identify Azure tools and services for NLP workloads',
        topics: [
          {
            id: 'nlp-language-service',
            title: 'Azure AI Language service',
            objective: 'Describe capabilities of the Azure AI Language service',
            overview:
              'Dịch vụ hợp nhất gom các tính năng văn bản: sentiment analysis, key phrase extraction, NER, language detection, summarization, question answering và conversational language understanding.',
            links: [{ label: 'Azure AI Language', url: `${L}/azure/ai-services/language-service/overview` }],
          },
          {
            id: 'nlp-speech-service',
            title: 'Azure AI Speech service',
            objective: 'Describe capabilities of the Azure AI Speech service',
            overview:
              'Gồm speech-to-text, text-to-speech, speech translation và speaker recognition. Mặc định dùng Universal Language Model do Microsoft huấn luyện; có thể tuỳ chỉnh cho từ vựng chuyên ngành.',
            links: [{ label: 'Azure AI Speech', url: `${L}/azure/ai-services/speech-service/overview` }],
          },
        ],
      },
    ],
  },

  {
    id: 'd5',
    title: 'Generative AI trên Azure',
    objective: 'Describe features of generative AI workloads on Azure',
    weight: '20–25%',
    intro:
      'Phần có tỉ trọng LỚN NHẤT trong đề thi hiện hành (20–25%). Ngân hàng 115 câu trong app này ra đời trước bản cập nhật 02/05/2025 nên chưa có câu hỏi cho phần này — hãy học kỹ qua các link tài liệu bên dưới.',
    groups: [
      {
        title: 'Identify features of generative AI solutions',
        topics: [
          {
            id: 'gen-models',
            title: 'Mô hình generative AI',
            objective: 'Identify features of generative AI models',
            overview:
              'Large language model (LLM) sinh nội dung mới từ prompt, dựa trên kiến trúc Transformer. Văn bản được cắt thành token trước khi xử lý; embedding biểu diễn ngữ nghĩa bằng vector. Ngoài mô hình sinh văn bản còn có mô hình sinh ảnh (DALL·E) và nhận dạng giọng nói (Whisper).',
            links: [
              { label: 'Học phần: Fundamentals of generative AI', url: `${L}/training/modules/fundamentals-generative-ai/` },
              { label: 'Các mô hình trong Azure AI Foundry', url: `${L}/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure` },
            ],
          },
          {
            id: 'gen-scenarios',
            title: 'Kịch bản ứng dụng generative AI',
            objective: 'Identify common scenarios for generative AI',
            overview:
              'Sinh và tóm tắt nội dung, sinh mã nguồn, dịch, trả lời câu hỏi trên dữ liệu doanh nghiệp, trợ lý ảo (copilot), sinh ảnh. Phân biệt với AI truyền thống: generative AI TẠO RA nội dung mới thay vì chỉ phân loại hay dự đoán.',
            links: [
              { label: 'Học phần: Fundamentals of generative AI', url: `${L}/training/modules/fundamentals-generative-ai/` },
            ],
          },
          {
            id: 'gen-prompt',
            title: 'Prompt engineering, grounding và RAG',
            objective: 'Describe how to improve generative AI responses',
            overview:
              'Chất lượng đầu ra phụ thuộc lớn vào prompt. Kỹ thuật thường dùng: system message định vai trò, few-shot đưa ví dụ mẫu, và RAG (Retrieval Augmented Generation) — nạp thêm dữ liệu của bạn vào ngữ cảnh để mô hình trả lời có căn cứ (grounding), giảm bịa đặt.',
            links: [
              { label: 'Prompt engineering', url: `${L}/azure/foundry/openai/concepts/prompt-engineering` },
              { label: 'Prompt engineering nâng cao', url: `${L}/azure/foundry/openai/concepts/advanced-prompt-engineering` },
            ],
          },
          {
            id: 'gen-rai',
            title: 'AI có trách nhiệm cho generative AI',
            objective: 'Identify responsible AI considerations for generative AI',
            overview:
              'Rủi ro riêng của generative AI: bịa đặt (hallucination), nội dung độc hại, lộ dữ liệu nhạy cảm, bị tấn công prompt injection. Biện pháp: content filter, Azure AI Content Safety, grounding dữ liệu, và luôn có con người kiểm duyệt.',
            links: [
              { label: 'Azure AI Content Safety', url: `${L}/azure/ai-services/content-safety/overview` },
              { label: 'Responsible AI cho Azure OpenAI', url: `${L}/azure/foundry/responsible-ai/openai/overview` },
            ],
          },
        ],
      },
      {
        title: 'Identify generative AI services and capabilities in Microsoft Azure',
        topics: [
          {
            id: 'gen-foundry',
            title: 'Azure AI Foundry',
            objective: 'Describe features and capabilities of Azure AI Foundry',
            overview:
              'Nền tảng hợp nhất để khám phá mô hình, thử nghiệm trong playground, xây dựng, đánh giá và triển khai giải pháp AI. Tổ chức công việc theo project và hub; tích hợp sẵn công cụ đánh giá và giám sát an toàn nội dung.',
            links: [{ label: 'Azure AI Foundry là gì', url: `${L}/azure/foundry/what-is-foundry` }],
          },
          {
            id: 'gen-openai',
            title: 'Azure OpenAI Service',
            objective: 'Describe features and capabilities of Azure OpenAI service',
            overview:
              'Cung cấp các mô hình OpenAI (GPT, DALL·E, Whisper, embeddings) trên hạ tầng Azure, kèm bảo mật doanh nghiệp, mạng riêng, quản lý truy cập và cam kết AI có trách nhiệm của Microsoft.',
            links: [
              { label: 'Mô hình do Azure cung cấp', url: `${L}/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure` },
            ],
          },
          {
            id: 'gen-catalog',
            title: 'Model catalog',
            objective: 'Describe features and capabilities of Azure AI Foundry model catalog',
            overview:
              'Thư viện mô hình từ nhiều nhà cung cấp (OpenAI, Meta, Mistral, Microsoft…) để so sánh và chọn theo năng lực, chi phí và benchmark, rồi triển khai trực tiếp từ catalog.',
            links: [{ label: 'Foundry Models — tổng quan', url: `${L}/azure/foundry/concepts/foundry-models-overview` }],
          },
        ],
      },
    ],
  },
];

/** Tra cứu nhanh theo id chủ đề. */
export const TOPIC_BY_ID: Record<string, StudyTopic> = {};
export const DOMAIN_OF_TOPIC: Record<string, DomainId> = {};
for (const d of DOMAINS) {
  for (const g of d.groups) {
    for (const t of g.topics) {
      TOPIC_BY_ID[t.id] = t;
      DOMAIN_OF_TOPIC[t.id] = d.id;
    }
  }
}

export const DOMAIN_BY_ID: Record<string, StudyDomain> = Object.fromEntries(
  DOMAINS.map((d) => [d.id, d]),
);
