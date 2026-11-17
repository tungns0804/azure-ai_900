/**
 * Lộ trình 4 tuần để thi chứng chỉ Azure AI Fundamentals trong tháng 12/2026.
 * AI-900 đã ngừng thi từ 30/06/2026 nên lộ trình nhắm vào đề thay thế AI-901
 * (đề cương "Skills measured as of April 15, 2026").
 *
 * Mọi chuỗi là cặp [tiếng Việt, tiếng Anh] để chế độ EN hiển thị toàn tiếng Anh.
 *
 * Four-week plan for the Azure AI Fundamentals certification in December 2026,
 * targeting AI-901 (AI-900 was retired on 30 June 2026). Every string is a [vi, en] pair.
 */

export type Bi = readonly [string, string];

export interface PlanLink {
  label: Bi;
  url: string;
}

export interface PlanTask {
  /** khoá lưu trạng thái đã xong — không đổi id sau khi đã phát hành */
  id: string;
  text: Bi;
  links?: PlanLink[];
  /** phần thi trong app (d1…d5) để mở nhanh màn luyện tập */
  practice?: string[];
}

export interface PlanPhase {
  id: string;
  label: Bi;
  title: Bi;
  /** ngày bắt đầu / kết thúc, định dạng YYYY-MM-DD (giờ địa phương) */
  start: string;
  end: string;
  /** tỉ trọng đề thi của phần này, nếu có */
  weight?: string;
  tasks: PlanTask[];
}

const L = 'https://learn.microsoft.com/en-us';
const MOD = `${L}/training/modules`;

export const PLAN_URLS = {
  studyGuide: `${L}/credentials/certifications/resources/study-guides/ai-901`,
  exam: `${L}/credentials/certifications/exams/ai-901/`,
  path: `${L}/training/paths/get-started-ai-apps-agents/`,
  course: `${L}/training/courses/ai-901t00`,
  practice:
    'https://aiskillsnavigator.microsoft.com/credentials/cert-83587e0a0754cfee561ade3e27d9fa1cdaf15ae03be52d2413b2b858d1b4eda4',
  accommodations: `${L}/credentials/certifications/request-accommodations`,
  sandbox: 'https://aka.ms/examdemo',
  azureFree: 'https://azure.microsoft.com/free/',
  python: `${L}/training/paths/beginner-python/`,
} as const;

/** ngày thi đề xuất */
export const EXAM_TARGET = '2026-12-17';

const PRACTICE_LINK: PlanLink = {
  label: ['Practice Assessment (AI Skills Navigator)', 'Practice Assessment (AI Skills Navigator)'],
  url: PLAN_URLS.practice,
};

export const PLAN_FACTS: ReadonlyArray<{ k: Bi; v: Bi }> = [
  {
    k: ['Đề thi', 'Exam'],
    v: [
      'AI-901 (AI-900 đã ngừng từ 30/06/2026) — vẫn cấp chứng chỉ Azure AI Fundamentals',
      'AI-901 (AI-900 was retired on 30 June 2026) — still earns Azure AI Fundamentals',
    ],
  },
  {
    k: ['Thời gian', 'Timeline'],
    v: ['18/11 → 13/12 (4 tuần), thi tuần 14–19/12', '18 Nov → 13 Dec (4 weeks), exam week 14–19 Dec'],
  },
  {
    k: ['Thời lượng học', 'Study time'],
    v: [
      'Ngày thường 1–1,5 giờ, cuối tuần 2–3 giờ (tổng khoảng 35–40 giờ)',
      'Weekdays 1–1.5 h, weekends 2–3 h (about 35–40 h in total)',
    ],
  },
  { k: ['Điểm đậu', 'Passing score'], v: ['700/1000', '700/1000'] },
  {
    k: ['Ngôn ngữ', 'Language'],
    v: [
      'Không có tiếng Việt — thi tiếng Anh và xin thêm 30 phút (trước khi đặt lịch)',
      'No Vietnamese version — sit it in English and request 30 extra minutes (before booking)',
    ],
  },
  {
    k: ['Cấu trúc đề', 'Exam outline'],
    v: [
      'Khái niệm AI 40–45% · Triển khai giải pháp AI với Microsoft Foundry 55–60%',
      'AI concepts 40–45% · Implementing AI solutions with Microsoft Foundry 55–60%',
    ],
  },
  {
    k: ['Dự phòng', 'Buffer'],
    v: [
      'Nếu trượt vẫn còn khoảng 10 ngày cuối tháng 12 để thi lại',
      'If you fail, about 10 days remain in late December for a retake',
    ],
  },
];

export const PLAN_PHASES: PlanPhase[] = [
  {
    id: 'w0',
    label: ['TUẦN 0', 'WEEK 0'],
    title: ['Chuẩn bị', 'Get ready'],
    start: '2026-11-18',
    end: '2026-11-22',
    tasks: [
      {
        id: 'w0-msa',
        text: [
          'Tạo tài khoản Microsoft cá nhân (MSA) để đăng ký thi — không dùng tài khoản công ty, nghỉ việc là mất hồ sơ thi.',
          'Create a personal Microsoft account (MSA) for the exam — not a work account, or you lose your records when you leave.',
        ],
      },
      {
        id: 'w0-azure',
        text: [
          'Tạo tài khoản Azure (bản dùng thử miễn phí) để làm lab trên Microsoft Foundry.',
          'Create an Azure account (free trial) for the Microsoft Foundry labs.',
        ],
        links: [{ label: ['Azure miễn phí', 'Azure free account'], url: PLAN_URLS.azureFree }],
      },
      {
        id: 'w0-python',
        text: [
          'Ôn Python cơ bản: biến, hàm, list/dict, pip install, đọc JSON.',
          'Brush up on basic Python: variables, functions, lists/dicts, pip install, reading JSON.',
        ],
        links: [{ label: ['Python cho người mới', 'Python for beginners'], url: PLAN_URLS.python }],
      },
      {
        id: 'w0-assess',
        text: [
          'Làm bài thi thử chính thức lần 1 để biết điểm xuất phát — chưa cần điểm cao.',
          'Take the official practice assessment once to find your starting point — the score does not matter yet.',
        ],
        links: [PRACTICE_LINK],
      },
      {
        id: 'w0-accom',
        text: [
          'Xin thêm 30 phút vì đề không có tiếng Việt — làm trước khi đặt lịch.',
          'Request 30 extra minutes because there is no Vietnamese version — do this before booking.',
        ],
        links: [{ label: ['Xin hỗ trợ khi thi', 'Request accommodations'], url: PLAN_URLS.accommodations }],
      },
      {
        id: 'w0-book',
        text: [
          'Đặt lịch thi AI-901 cho khoảng 17–19/12 để có hạn chót mà bám.',
          'Book AI-901 for around 17–19 December so you have a fixed deadline.',
        ],
        links: [{ label: ['Trang đề thi AI-901', 'AI-901 exam page'], url: PLAN_URLS.exam }],
      },
    ],
  },
  {
    id: 'w1',
    label: ['TUẦN 1', 'WEEK 1'],
    title: ['Khái niệm AI', 'AI concepts'],
    weight: '40–45%',
    start: '2026-11-23',
    end: '2026-11-29',
    tasks: [
      {
        id: 'w1-rai',
        text: [
          'AI có trách nhiệm: 6 nguyên tắc (fairness, reliability & safety, privacy & security, inclusiveness, transparency, accountability) — nhận ra nguyên tắc nào từ một tình huống.',
          'Responsible AI: the six principles (fairness, reliability & safety, privacy & security, inclusiveness, transparency, accountability) — spot which one a scenario describes.',
        ],
        practice: ['d1'],
      },
      {
        id: 'w1-genai',
        text: [
          'AI tạo sinh hoạt động thế nào: token, embedding, transformer; các tham số temperature, top_p, max_tokens.',
          'How generative AI works: tokens, embeddings, transformers; the temperature, top_p and max_tokens parameters.',
        ],
        practice: ['d5'],
      },
      {
        id: 'w1-model',
        text: [
          'Chọn mô hình theo năng lực (đa phương thức, suy luận) và chi phí; các kiểu triển khai và tham số cấu hình.',
          'Pick a model by capability (multimodal, reasoning) and cost; deployment options and configuration parameters.',
        ],
      },
      {
        id: 'w1-workloads',
        text: [
          'Các loại bài toán AI: tạo sinh và agent, phân tích văn bản (key phrase, entity, sentiment, summarization), giọng nói, thị giác, trích xuất thông tin.',
          'AI workloads: generative and agentic AI, text analysis (key phrases, entities, sentiment, summarization), speech, vision, information extraction.',
        ],
        practice: ['d3', 'd4'],
      },
      {
        id: 'w1-modules',
        text: [
          'Học 2 module đầu của learning path.',
          'Work through the first two modules of the learning path.',
        ],
        links: [
          { label: ['Get started with AI in Azure', 'Get started with AI in Azure'], url: `${MOD}/get-started-with-ai-in-azure/` },
          {
            label: ['Generative AI and agents', 'Generative AI and agents'],
            url: `${MOD}/get-started-with-generative-ai-and-agents/`,
          },
        ],
      },
      {
        id: 'w1-vocab',
        text: [
          'Lưu thuật ngữ tiếng Anh vào Từ vựng và ôn khoảng 10 phút mỗi tối. Bỏ qua phần Machine Learning (d2) — AI-901 không thi.',
          'Save English terms to Vocabulary and review them for about 10 minutes each evening. Skip Machine Learning (d2) — AI-901 does not cover it.',
        ],
      },
    ],
  },
  {
    id: 'w2',
    label: ['TUẦN 2', 'WEEK 2'],
    title: ['Foundry: tạo sinh & agent', 'Foundry: generative AI & agents'],
    weight: '55–60%',
    start: '2026-11-30',
    end: '2026-12-06',
    tasks: [
      {
        id: 'w2-deploy',
        text: [
          'Tạo project trên Foundry, triển khai một mô hình và thử trong playground.',
          'Create a Foundry project, deploy a model and try it in the playground.',
        ],
      },
      {
        id: 'w2-prompt',
        text: [
          'Viết system prompt và user prompt hiệu quả cho mô hình tạo sinh.',
          'Write effective system and user prompts for a generative model.',
        ],
      },
      {
        id: 'w2-sdk',
        text: [
          'Viết một ứng dụng chat nhỏ bằng Foundry SDK (Python).',
          'Build a lightweight chat client with the Foundry SDK (Python).',
        ],
      },
      {
        id: 'w2-agent',
        text: [
          'Tạo và kiểm thử một agent trên Foundry portal, rồi viết client app gọi agent đó.',
          'Create and test an agent in the Foundry portal, then write a client app that calls it.',
        ],
      },
      {
        id: 'w2-modules',
        text: ['Học module Foundry IQ và voice agents.', 'Work through the Foundry IQ and voice agents modules.'],
        links: [
          { label: ['Foundry IQ', 'Foundry IQ'], url: `${MOD}/get-started-foundry-iq/` },
          { label: ['Voice agents', 'Voice agents'], url: `${MOD}/get-started-foundry-voice-agents/` },
        ],
      },
      {
        id: 'w2-assess',
        text: [
          'Làm lại bài thi thử chính thức, ghi lại những phần còn yếu.',
          'Retake the official practice assessment and note your weak areas.',
        ],
        links: [PRACTICE_LINK],
      },
    ],
  },
  {
    id: 'w3',
    label: ['TUẦN 3', 'WEEK 3'],
    title: [
      'Foundry: văn bản, giọng nói, hình ảnh, trích xuất',
      'Foundry: text, speech, vision, extraction',
    ],
    weight: '55–60%',
    start: '2026-12-07',
    end: '2026-12-13',
    tasks: [
      {
        id: 'w3-text',
        text: [
          'Phân tích văn bản: ứng dụng nhỏ dùng Azure Language và dùng mô hình tạo sinh.',
          'Text analysis: a small app using Azure Language and a generative model.',
        ],
        links: [{ label: ['Text analysis', 'Text analysis'], url: `${MOD}/get-started-text-analysis-azure/` }],
      },
      {
        id: 'w3-speech',
        text: [
          'Giọng nói: Azure Speech in Foundry Tools (STT/TTS), gửi prompt bằng giọng nói cho mô hình đa phương thức.',
          'Speech: Azure Speech in Foundry Tools (STT/TTS) and spoken prompts to a multimodal model.',
        ],
        links: [{ label: ['Speech', 'Speech'], url: `${MOD}/get-started-speech-azure/` }],
      },
      {
        id: 'w3-vision',
        text: [
          'Thị giác: đưa ảnh vào prompt của mô hình đa phương thức, sinh ảnh bằng mô hình tạo sinh.',
          'Vision: put images in prompts to a multimodal model and generate images with a generative model.',
        ],
        links: [{ label: ['Computer vision', 'Computer vision'], url: `${MOD}/get-started-vision-azure/` }],
      },
      {
        id: 'w3-cu',
        text: [
          'Content Understanding: trích xuất thông tin từ tài liệu và biểu mẫu, từ ảnh, từ âm thanh và video.',
          'Content Understanding: extract information from documents and forms, images, audio and video.',
        ],
        links: [
          {
            label: ['Information extraction', 'Information extraction'],
            url: `${MOD}/get-started-information-extraction/`,
          },
        ],
      },
      {
        id: 'w3-assess',
        text: [
          'Làm lại bài thi thử chính thức — mục tiêu từ 80% trở lên.',
          'Retake the official practice assessment — aim for 80% or more.',
        ],
        links: [PRACTICE_LINK],
      },
    ],
  },
  {
    id: 'w4',
    label: ['TUẦN THI', 'EXAM WEEK'],
    title: ['Ôn lại và đi thi', 'Review and sit the exam'],
    start: '2026-12-14',
    end: '2026-12-19',
    tasks: [
      {
        id: 'w4-review',
        text: [
          '2–3 ngày trước khi thi: chỉ ôn phần sai trong bài thi thử, tên dịch vụ và sổ Từ vựng — không học thêm nội dung mới.',
          '2–3 days before: review only your practice-test mistakes, service names and your Vocabulary list — nothing new.',
        ],
      },
      {
        id: 'w4-sandbox',
        text: [
          'Thử exam sandbox để quen giao diện làm bài.',
          'Try the exam sandbox to get used to the exam interface.',
        ],
        links: [{ label: ['Exam sandbox', 'Exam sandbox'], url: PLAN_URLS.sandbox }],
      },
      {
        id: 'w4-check',
        text: [
          'Thi online: kiểm tra trước webcam, phòng trống và giấy tờ tùy thân.',
          'Online exam: check your webcam, a clear room and your ID in advance.',
        ],
      },
      { id: 'w4-exam', text: ['Đi thi AI-901!', 'Sit AI-901!'] },
      {
        id: 'w4-retake',
        text: [
          'Nếu chưa đậu: xem score report, ôn đúng phần yếu, đặt lịch thi lại trước 31/12.',
          'If you do not pass: read the score report, review the weak areas and rebook before 31 December.',
        ],
      },
    ],
  },
];

export const PLAN_PITFALLS: Bi[] = [
  [
    'Tên dịch vụ đã đổi: Azure AI Foundry nay là Microsoft Foundry; Language, Speech và Content Understanding nằm trong "Foundry Tools". Tài liệu ôn AI-900 cũ có thể dùng tên cũ.',
    'Service names changed: Azure AI Foundry is now Microsoft Foundry; Language, Speech and Content Understanding sit under "Foundry Tools". Older AI-900 material may use the old names.',
  ],
  [
    'Đề có câu hỏi về code: cần đọc hiểu một đoạn Python gọi SDK (client, endpoint, messages) và quen REST API, SDK, CLI.',
    'Expect code questions: be able to read a short Python SDK snippet (client, endpoint, messages) and know REST APIs, SDKs and CLIs.',
  ],
  [
    'Bộ câu hỏi trong app được soạn cho AI-900: hợp với phần khái niệm nhưng không đủ cho phần Foundry — phần đó phải dựa vào lab và bài thi thử chính thức.',
    'This app’s question bank was written for AI-900: good for the concepts part but not enough for Foundry — rely on the labs and the official practice assessment for that.',
  ],
];

export const PLAN_RESOURCES: PlanLink[] = [
  { label: ['Study guide AI-901 (checklist kỹ năng)', 'AI-901 study guide (skills checklist)'], url: PLAN_URLS.studyGuide },
  {
    label: ['Learning path: AI apps and agents on Azure (8 module, có lab)', 'Learning path: AI apps and agents on Azure (8 modules with labs)'],
    url: PLAN_URLS.path,
  },
  { label: ['Khóa AI-901T00 – Introduction to AI in Azure', 'Course AI-901T00 – Introduction to AI in Azure'], url: PLAN_URLS.course },
  { label: ['Trang đề thi AI-901 (đặt lịch thi)', 'AI-901 exam page (booking)'], url: PLAN_URLS.exam },
  PRACTICE_LINK,
];
