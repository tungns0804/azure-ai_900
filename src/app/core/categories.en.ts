/**
 * Bản tiếng Anh của phần nội dung học (tiêu đề phần thi, tiêu đề chủ đề, mô tả tổng quan).
 * Tách riêng khỏi categories.ts để file gốc tiếng Việt không bị phình to.
 *
 * English copy for the study screen (domain titles, topic titles, overviews).
 * Kept apart from categories.ts so the Vietnamese source stays readable.
 */

export interface EnDomain {
  title: string;
  intro: string;
}

export interface EnTopic {
  title: string;
  overview: string;
}

export const DOMAIN_EN: Record<string, EnDomain> = {
  d1: {
    title: 'AI workloads and responsible AI principles',
    intro:
      'Recognise the right AI workload for a business scenario and know Microsoft’s six responsible AI principles. Pure theory, almost no technical depth — learn it well and the points are guaranteed.',
  },
  d2: {
    title: 'Machine learning fundamentals on Azure',
    intro:
      'Tell the ML problem types apart, understand features/labels and how data is split, and know the core capabilities of Azure Machine Learning (automated ML, designer, compute, deployment).',
  },
  d3: {
    title: 'Computer vision on Azure',
    intro:
      'The four core computer-vision problems and the matching Azure services. Being able to separate image classification from object detection and OCR wins most of the marks here.',
  },
  d4: {
    title: 'Natural language processing (NLP) on Azure',
    intro:
      'Capabilities of Azure AI Language and Azure AI Speech: text analytics, understanding user intent, question answering, speech and translation.',
  },
  d5: {
    title: 'Generative AI on Azure',
    intro:
      'The heaviest domain in the current exam (20–25%). The original 115-question bank predates the 2 May 2025 refresh, so every question here is a supplementary one written for this app — study the Microsoft links as well.',
  },
};

export const TOPIC_EN: Record<string, EnTopic> = {
  /* ---------- d1 ---------- */
  'w-overview': {
    title: 'Overview of AI workload types',
    overview:
      'Tell the six common workloads apart: computer vision, natural language processing, conversational AI, document processing, knowledge mining and anomaly detection. The exam usually gives a scenario and asks which one it is — anchor on the input data type (image / text / audio / time-series numbers).',
  },
  'w-cv': {
    title: 'Computer vision workload',
    overview:
      'Workloads over images and video: image classification, object detection, reading text in images, face analysis. Telltale sign: the input is a picture or a video.',
  },
  'w-nlp': {
    title: 'Natural language processing workload',
    overview:
      'Workloads over human language: sentiment analysis, key phrase extraction, entity recognition, translation, speech recognition and synthesis. Telltale sign: the input is text or speech.',
  },
  'w-conversational': {
    title: 'Conversational AI (bots)',
    overview:
      'Two-way automated dialogue with a user: web chatbots, virtual assistants, question-answering bots. The classic business benefit is taking load off support staff and serving customers 24/7 — the exam likes exactly that wording.',
  },
  'w-doc': {
    title: 'Document processing (Document Intelligence / Form Recognizer)',
    overview:
      'Automatically extract text, key/value pairs and tables from invoices, receipts, business cards and scanned documents. Pre-built models exist (receipt, invoice, business card, ID). A limit that gets asked: JPG/PNG/PDF up to 50 MB for the pre-built models.',
  },
  'w-search': {
    title: 'Knowledge mining (Azure AI Search)',
    overview:
      'Turn a pile of unstructured documents into a searchable index. Flow: data source → indexer → (optional AI skillset for enrichment) → index. Note: the skillset is optional, an index is queryable without AI enrichment, and data pushed into an index must be JSON.',
  },
  'w-anomaly': {
    title: 'Anomaly detection',
    overview:
      'Spot data points that break the usual pattern — suspicious sign-ins, card fraud, failing sensors. Do not confuse it with forecasting (regression) or diagnosing a disease (classification).',
  },
  'ai-services-resource': {
    title: 'Choosing an Azure AI services resource',
    overview:
      'A multi-service (Cognitive Services) resource lets several services SHARE one key and endpoint — pick it whenever the question says “a single key and endpoint”. Single-service resources are billed and managed separately. Custom Vision can additionally split its training and prediction resources.',
  },
  'rai-overview': {
    title: 'The six responsible AI principles',
    overview:
      'Microsoft’s six principles: Fairness, Reliability & safety, Privacy & security, Inclusiveness, Transparency, Accountability. Memorise them — the exam offers decoys that are not principles at all, such as knowledgeability, decisiveness or validity.',
  },
  'rai-fairness': {
    title: 'Fairness',
    overview:
      'An AI system must not favour or discriminate by gender, race, age and so on, and must not inherit bias that already lives in the training data. Trigger words: “no discrimination”, “bias”, “treat all groups equally”.',
  },
  'rai-reliability': {
    title: 'Reliability & safety',
    overview:
      'The system must behave consistently and safely, including in unexpected situations. Trigger words: self-driving cars, medical devices, and above all “handling unusual or missing values” — that phrasing shows up again and again.',
  },
  'rai-privacy': {
    title: 'Privacy & security',
    overview:
      'Protect the personal data used to train and run the model; only authorised people may see personal data. Trigger words: encryption, access control, data anonymisation.',
  },
  'rai-inclusive': {
    title: 'Inclusiveness',
    overview:
      'AI must serve everybody and leave no group behind because of disability, language or circumstance. Trigger words: blind or deaf users, audio output, “a barrier that excludes a group of users”.',
  },
  'rai-transparency': {
    title: 'Transparency',
    overview:
      'Users must understand how the system works and why it decided what it decided. Trigger words: “the factors behind a decision must be explainable”; in automated ML this is the Explain best model option.',
  },
  'rai-accountability': {
    title: 'Accountability',
    overview:
      'People, not models, carry the final responsibility. It shows up as governance: a risk board, a model review process, legal compliance and internal standards.',
  },

  /* ---------- d2 ---------- */
  'ml-techniques': {
    title: 'Regression vs classification vs clustering',
    overview:
      'Quick test: predicting a NUMBER → regression; predicting a known LABEL/CATEGORY → classification; GROUPING unlabelled data by itself → clustering. This is the single most frequent question shape in this domain.',
  },
  'ml-regression': {
    title: 'Regression',
    overview:
      'Predict a continuous numeric value: house price, ice-cream sales, rainfall in mm, cars crossing a bridge, overtime hours, temperature. Supervised learning — it needs numerically labelled data.',
  },
  'ml-classification': {
    title: 'Classification',
    overview:
      'Predict a discrete label: whether a loan will be repaid, whether a credit application is high or low risk, which cancer type a brain scan shows, whether a student will finish a course. Binary (two classes) or multi-class.',
  },
  'ml-clustering': {
    title: 'Clustering',
    overview:
      'UNsupervised learning: group similar items together with no labels up front — customer segmentation, grouping documents by content, grouping patients by symptoms. Signature algorithm: K-Means.',
  },
  'ml-deep-learning': {
    title: 'Deep learning',
    overview:
      'Multi-layer neural networks that learn features straight from raw data instead of hand-crafted ones. Strong on images, audio and text; needs a lot of data and usually a GPU.',
  },
  'ml-transformer': {
    title: 'The Transformer architecture',
    overview:
      'The foundation of modern language models (GPT, BERT). Its core idea is attention: the model weighs the relationship between every word at once instead of reading strictly left to right. This is what generative AI is built on.',
  },
  'ml-features-labels': {
    title: 'Features and labels, data preparation',
    overview:
      'A feature (x) is an input column that influences the prediction; the label (y) is the column being predicted. Also distinguish feature selection = PICKING useful existing columns (and rescaling them) from feature engineering = CREATING new columns (for example splitting a date into day/month/year).',
  },
  'ml-train-validate': {
    title: 'Training and validation splits',
    overview:
      'Split RANDOMLY by ROW (not by column) into a training set and a validation set. The point is to score the model on data it has never seen by comparing predicted labels with true labels — which is how overfitting is caught.',
  },
  'ml-evaluate': {
    title: 'Model evaluation and metrics',
    overview:
      'Regression uses R² (coefficient of determination) and RMSE. Classification uses the confusion matrix (TP/FP/TN/FN), accuracy, precision, recall, F1 and AUC. Remember: AUC 0.5 = random guessing, AUC below 0.5 means the model is WORSE than guessing.',
  },
  'ml-automl': {
    title: 'Automated machine learning',
    overview:
      'Runs many training jobs across many algorithms, then scores and ranks them by the primary metric you pick (for example R² for regression). No coding needed. Note: AutoML does NOT invent training data — you must supply the dataset.',
  },
  'ml-designer': {
    title: 'Azure Machine Learning designer',
    overview:
      'A drag-and-drop canvas where modules are wired into a pipeline and saved as a pipeline draft. Modules that keep coming up: Select Columns in Dataset, Clean Missing Data, Normalize Data (put numbers on one scale), Split Data, Train Model, Score Model, Evaluate Model.',
  },
  'ml-compute': {
    title: 'Data and compute resources',
    overview:
      'A compute instance is a personal development box; a compute cluster scales out for training; an inference cluster (AKS) serves real-time predictions. Datastores and datasets manage shared data sources inside the workspace.',
  },
  'ml-deploy': {
    title: 'Model management and deployment',
    overview:
      'The standard order before deployment: data preparation → model training → model evaluation. In designer you must create an inference pipeline from the training pipeline before publishing. Real-time production deployment uses Azure Kubernetes Service (AKS); calling the service needs the REST endpoint plus an authentication key.',
  },

  /* ---------- d3 ---------- */
  'cv-classification': {
    title: 'Image classification',
    overview:
      'Assign ONE label to the WHOLE image, together with a confidence score (0–1). It never says where the object is. To improve a weak model: add more training images.',
  },
  'cv-object-detection': {
    title: 'Object detection',
    overview:
      'Returns, for EVERY object in the image, a class label + probability + bounding box coordinates. Use it when POSITION matters, e.g. measuring the gap between cars. Different from semantic segmentation, which classifies every pixel.',
  },
  'cv-ocr': {
    title: 'OCR — reading text in images',
    overview:
      'Extract printed and handwritten text from photos, licence plates, invoices and scanned books. For long, multi-page documents or PDFs use the Read API (asynchronous) rather than the older OCR API.',
  },
  'cv-face': {
    title: 'Face detection and analysis',
    overview:
      'Detect returns a rectangular bounding box around each face plus attributes (glasses, head pose…). To recognise a specific person, create a group with several images per person and train it. Accuracy drops with extreme camera angles, poor lighting and occluded faces.',
  },
  'cv-vision-service': {
    title: 'Azure AI Vision service',
    overview:
      'A pre-built, no-training service: tagging, image description, face detection, reading handwriting, thumbnail generation. Ask for Objects when you need each object’s position; ask for Categories with the landmarks domain for famous places, the celebrities domain for famous people.',
  },
  'cv-custom-vision': {
    title: 'Custom Vision service',
    overview:
      'For when you must train on YOUR OWN images — recognising a competitor’s product, for instance. Supports classification and object detection but NOT video analysis. Training and prediction resources can be separated. To call the service a developer needs the project ID, model name, and the prediction resource’s key and endpoint.',
  },

  /* ---------- d4 ---------- */
  'nlp-keyphrase': {
    title: 'Key phrase extraction',
    overview:
      'Pull the main talking points out of a piece of text. Use it when the question says “identify the main points” — do not confuse it with sentiment analysis (measuring feeling) or entity recognition (identifying things).',
  },
  'nlp-entity': {
    title: 'Entity recognition',
    overview:
      'Find and categorise entities in text: people, places, organisations, dates, quantities. A PII variant detects personally identifiable information, and entity linking connects entities to Wikipedia.',
  },
  'nlp-sentiment': {
    title: 'Sentiment analysis',
    overview:
      'Score the emotional tone of text between 0 and 1: near 1 is positive, near 0 is negative, around 0.5 is neutral. Classic example: deciding whether a product review is praise or a complaint.',
  },
  'nlp-language-detect': {
    title: 'Language detection',
    overview:
      'Identify the dominant language of a piece of text, returning the language name, its ISO code and a confidence score. It returns NaN when the language is ambiguous and cannot be determined.',
  },
  'nlp-clu': {
    title: 'Conversational Language Understanding (LUIS)',
    overview:
      'Work out the user’s INTENT from an utterance and pull out the entities it contains. Three parts to know: utterances, intents, entities. Unlike Question Answering, which looks up a stored answer and never infers intent.',
  },
  'nlp-qna': {
    title: 'Question Answering / QnA Maker knowledge bases',
    overview:
      'Build a knowledge base of question–answer pairs for a bot. The fastest route from an existing FAQ document is to IMPORT it straight into the knowledge base rather than retyping. Know the boundaries: it CANNOT query a SQL database and it CANNOT determine a user’s intent.',
  },
  'nlp-speech': {
    title: 'Speech recognition and synthesis',
    overview:
      'Speech-to-text turns spoken words into text (real-time or batch); text-to-speech reads text out in a natural voice. Speech translation translates spoken language directly into another language.',
  },
  'nlp-translate': {
    title: 'Translation',
    overview:
      'Azure AI Translator translates TEXT into many languages at once — the pick for publishing a press release in several languages. When SPEECH must be translated, use Speech translation instead.',
  },
  'nlp-language-service': {
    title: 'Azure AI Language service',
    overview:
      'The unified service that bundles the text features: sentiment analysis, key phrase extraction, NER, language detection, summarisation, question answering and conversational language understanding.',
  },
  'nlp-speech-service': {
    title: 'Azure AI Speech service',
    overview:
      'Covers speech-to-text, text-to-speech, speech translation and speaker recognition. It uses Microsoft’s Universal Language Model by default and can be customised for specialist vocabulary.',
  },

  /* ---------- d5 ---------- */
  'gen-models': {
    title: 'Generative AI models',
    overview:
      'A large language model (LLM) generates new content from a prompt and is built on the Transformer architecture. Text is split into tokens before processing; embeddings represent meaning as vectors. Beyond text there are image models (DALL·E) and speech recognition models (Whisper).',
  },
  'gen-scenarios': {
    title: 'Generative AI scenarios',
    overview:
      'Content generation and summarisation, code generation, translation, answering questions over company data, copilots and image generation. The contrast with traditional AI: generative AI CREATES new content instead of only classifying or predicting.',
  },
  'gen-prompt': {
    title: 'Prompt engineering, grounding and RAG',
    overview:
      'Output quality depends heavily on the prompt. Common techniques: a system message that sets the role, few-shot examples, and RAG (Retrieval Augmented Generation) — feeding your own data into the context so answers are grounded and hallucinate less.',
  },
  'gen-rai': {
    title: 'Responsible AI for generative AI',
    overview:
      'Risks specific to generative AI: hallucination, harmful content, leaking sensitive data, and prompt-injection attacks. Mitigations: content filters, Azure AI Content Safety, grounding on trusted data, and keeping a human in the loop.',
  },
  'gen-foundry': {
    title: 'Azure AI Foundry',
    overview:
      'The unified platform for discovering models, experimenting in a playground, then building, evaluating and deploying AI solutions. Work is organised into projects and hubs, with evaluation and content-safety monitoring built in.',
  },
  'gen-openai': {
    title: 'Azure OpenAI Service',
    overview:
      'Delivers the OpenAI models (GPT, DALL·E, Whisper, embeddings) on Azure infrastructure, with enterprise security, private networking, access management and Microsoft’s responsible AI commitments.',
  },
  'gen-catalog': {
    title: 'Model catalog',
    overview:
      'A library of models from many providers (OpenAI, Meta, Mistral, Microsoft…) that can be compared on capability, cost and benchmarks, then deployed straight from the catalog.',
  },
};
