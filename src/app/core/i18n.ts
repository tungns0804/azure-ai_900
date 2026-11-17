/**
 * Từ điển đa ngôn ngữ cho toàn bộ giao diện.
 * Mỗi khoá là một cặp [tiếng Việt, tiếng Anh]; chỗ cần chèn số/chữ dùng {tên}.
 *
 * Bilingual dictionary for the whole UI.
 * Every key holds a [Vietnamese, English] pair; placeholders use {name}.
 */
export type Lang = 'vi' | 'en';

export const STRINGS = {
  /* ---------- chung / common ---------- */
  'app.title': ['AI-900 Practice', 'AI-900 Practice'],
  'app.subtitle': ['{n} câu · The Tech BlackBoard', '{n} questions · The Tech BlackBoard'],
  'app.menu': ['☰ Danh sách', '☰ Menu'],
  'common.questions': ['{n} câu', '{n} questions'],
  'common.close': ['Đóng', 'Close'],
  'common.cancel': ['Huỷ', 'Cancel'],
  'common.empty': ['Danh sách trống.', 'The list is empty.'],

  /* ---------- thanh trên / topbar ---------- */
  'view.group': ['Màn hình', 'Screen'],
  'view.practice': ['Luyện thi', 'Practice'],
  'view.study': ['Học kiến thức', 'Study'],
  'view.plan': ['Lộ trình thi', 'Exam plan'],

  /* ---------- lộ trình thi / exam plan ---------- */
  'plan.badge': ['LỘ TRÌNH THI', 'EXAM PLAN'],
  'plan.title': [
    'Lộ trình 4 tuần thi Azure AI Fundamentals trong tháng 12/2026',
    'A 4-week plan to earn Azure AI Fundamentals in December 2026',
  ],
  'plan.retiredNote': [
    'AI-900 đã ngừng thi từ 30/06/2026. Lộ trình này dành cho đề thay thế AI-901 — vẫn cấp chứng chỉ Azure AI Fundamentals. Đề AI-901 cần Python cơ bản, 55–60% là thực hành trên Microsoft Foundry và không còn phần Machine Learning.',
    'AI-900 was retired on 30 June 2026. This plan targets its replacement, AI-901 — which still earns Azure AI Fundamentals. AI-901 expects basic Python, is 55–60% hands-on Microsoft Foundry and no longer covers Machine Learning.',
  ],
  'plan.progress': ['{done}/{total} việc đã xong', '{done}/{total} tasks done'],
  'plan.daysLeft': [
    'Còn {n} ngày tới ngày thi dự kiến ({date})',
    '{n} days to the target exam date ({date})',
  ],
  'plan.examToday': ['Hôm nay là ngày thi dự kiến — chúc bạn thi tốt!', 'Today is the target exam date — good luck!'],
  'plan.examPast': ['Đã qua ngày thi dự kiến ({date}).', 'The target exam date ({date}) has passed.'],
  'plan.thisWeek': ['Tuần này', 'This week'],
  'plan.practice': ['Luyện: {name}', 'Practise: {name}'],
  'plan.pitfalls': ['DỄ MẤT ĐIỂM', 'COMMON PITFALLS'],
  'plan.resources': ['TÀI LIỆU CHÍNH', 'KEY RESOURCES'],
  'plan.reset': ['Bỏ đánh dấu tất cả', 'Untick everything'],
  'plan.resetConfirm': [
    'Bỏ đánh dấu toàn bộ việc đã xong trong lộ trình?',
    'Untick every completed task in the plan?',
  ],
  'top.done': ['Đã làm', 'Answered'],
  'top.ok': ['Đúng', 'Correct'],
  'top.no': ['Sai', 'Wrong'],
  'top.rate': ['Tỉ lệ', 'Accuracy'],
  'top.sizeGroup': ['Cỡ chữ', 'Text size'],
  'top.sizeDown': ['Giảm cỡ chữ', 'Smaller text'],
  'top.sizeUp': ['Tăng cỡ chữ', 'Larger text'],
  'top.langGroup': ['Ngôn ngữ giao diện', 'Interface language'],
  'top.langHint': [
    'Đổi ngôn ngữ toàn bộ giao diện (Việt / Anh)',
    'Switch the whole interface language (Vietnamese / English)',
  ],
  'top.viOn': ['Song ngữ: Bật', 'Bilingual: On'],
  'top.viOff': ['Song ngữ: Tắt', 'Bilingual: Off'],
  'top.viHint': [
    'Hiện bản dịch tiếng Việt ngay dưới nội dung tiếng Anh',
    'Show the Vietnamese translation under the English text',
  ],

  /* ---------- giao diện / theme ---------- */
  'theme.system': ['Tự động', 'Auto'],
  'theme.light': ['Sáng', 'Light'],
  'theme.dark': ['Tối', 'Dark'],
  'theme.night': ['Đèn đêm', 'Night light'],
  'theme.title': [
    'Giao diện: {current} — bấm để chuyển sang {next}',
    'Theme: {current} — click to switch to {next}',
  ],

  /* ---------- phạm vi / scope ---------- */
  'nav.prev': ['Câu trước', 'Previous'],
  'nav.next': ['Câu sau', 'Next'],

  'scope.label': ['Phạm vi', 'Scope'],
  'scope.title': ['Phạm vi ôn tập', 'Study scope'],
  'scope.extra': ['★ Chỉ câu bổ sung', '★ Supplementary only'],
  'scope.origin': ['Ngân hàng gốc (PDF)', 'Original bank (PDF)'],

  /* ---------- khung thiết lập / setup ---------- */
  'setup.badge': ['THIẾT LẬP', 'SETUP'],
  'setup.title': ['Thiết lập bài luyện', 'Set up a practice round'],
  'setup.change': ['Thiết lập', 'Setup'],
  'setup.scopeAll': ['Toàn bộ', 'Everything'],
  'setup.scopeAllShort': ['Toàn bộ đề thi', 'Entire question bank'],
  'setup.scopeExtra': ['★ Câu bổ sung', '★ Supplementary'],
  'setup.scopeOrigin': ['Câu gốc (PDF)', 'Original (PDF)'],
  'setup.topic': ['Chọn một chủ đề', 'Pick a single topic'],
  'setup.topicAny': ['— Hoặc chọn một chủ đề cụ thể —', '— Or pick a single topic —'],
  'setup.favHint': [
    'Bấm ★ trên thẻ câu hỏi để thêm vào Yêu thích.',
    'Star ★ a question card to add it to Favourites.',
  ],
  'setup.count': ['Số câu', 'Questions'],
  'setup.countAll': ['Tất cả', 'All'],
  'setup.shuffleQHint': [
    'Mỗi lượt một thứ tự khác — nên bật khi giới hạn số câu.',
    'A new order every round — worth turning on with a question limit.',
  ],
  'setup.shuffleOHint': [
    'Nhớ đáp án theo nội dung chứ không theo vị trí A/B/C.',
    'Remember answers by content, not by their A/B/C position.',
  ],
  'setup.autoNextHint': [
    'Trả lời sai thì vẫn dừng lại để đọc giải thích.',
    'Wrong answers still stop so you can read the explanation.',
  ],
  'setup.plan': ['{n} câu · {mode} · {scope}', '{n} questions · {mode} · {scope}'],
  'setup.start': ['Bắt đầu', 'Start'],
  'setup.resume': ['Quay lại bài đang làm', 'Back to current round'],
  'setup.empty': [
    'Không có câu nào khớp lựa chọn này — hãy đổi phạm vi hoặc chế độ.',
    'No questions match this selection — change the scope or mode.',
  ],

  /* ---------- chế độ / modes ---------- */
  'mode.title': ['Chế độ luyện tập', 'Practice mode'],
  'mode.all': ['Toàn bộ', 'All'],
  'mode.fav': ['Yêu thích ⭐', 'Favourites ⭐'],
  'mode.favShort': ['Yêu thích', 'Favourites'],
  'mode.review': ['Cần ôn lại', 'Needs review'],
  'mode.todo': ['Chưa làm', 'Not attempted'],

  /* ---------- tuỳ chọn / options ---------- */
  'opt.title': ['Tuỳ chọn', 'Options'],
  'opt.shuffleQ': ['Trộn thứ tự câu hỏi', 'Shuffle question order'],
  'opt.shuffleO': ['Trộn thứ tự đáp án', 'Shuffle answer order'],
  'opt.autoNext': ['Tự sang câu sau khi trả lời đúng', 'Auto-advance after a correct answer'],

  /* ---------- danh sách câu / question list ---------- */
  'list.title': ['Danh sách câu hỏi', 'Question list'],
  'list.jumpPlaceholder': ['Tới câu số…', 'Go to question no.…'],
  'list.jump': ['Tới', 'Go'],
  'list.jumpAria': ['Tới câu số', 'Go to question number'],
  'list.cell': ['Câu {id}', 'Question {id}'],
  'list.cellExtra': ['Câu bổ sung {id}', 'Supplementary question {id}'],
  'legend.ok': ['Đúng', 'Correct'],
  'legend.no': ['Sai', 'Wrong'],
  'legend.sh': ['Đã xem đáp án', 'Answer revealed'],
  'legend.extra': ['Câu bổ sung', 'Supplementary'],

  /* ---------- lịch sử / history ---------- */
  'hist.title': ['Lịch sử luyện tập', 'Practice history'],
  'hist.running': ['Phiên đang chạy · {mode}', 'Session in progress · {mode}'],
  'hist.startedAt': ['Bắt đầu {time}', 'Started {time}'],
  'hist.detail': ['{time} · {ok}/{total} đúng', '{time} · {ok}/{total} correct'],
  'hist.shownExtra': [' · {n} xem đáp án', ' · {n} revealed'],
  'hist.none': [
    'Chưa có lịch sử. Kết thúc một phiên để lưu lại.',
    'No history yet. End a session to save one.',
  ],
  'hist.end': ['Kết thúc & lưu phiên', 'End & save session'],

  /* ---------- dữ liệu / data ---------- */
  'data.title': ['Dữ liệu', 'Data'],
  'data.export': ['Xuất JSON', 'Export JSON'],
  'data.import': ['Nhập JSON', 'Import JSON'],
  'data.reset': ['Xoá tiến độ', 'Reset progress'],
  'data.status': ['Trạng thái: {mode}', 'Storage: {mode}'],
  'store.memory': ['Không lưu được (chỉ trong phiên này)', 'Not persisted (this session only)'],
  'store.artifact': ['Đã lưu trong Claude', 'Saved in Claude'],
  'store.local': ['Đã lưu trên trình duyệt', 'Saved in this browser'],

  /* ---------- thẻ câu hỏi / question card ---------- */
  'card.num': ['CÂU {id}', 'Q{id}'],
  'card.part': ['PART {n}', 'PART {n}'],
  'card.slide': ['SLIDE {n}', 'SLIDE {n}'],
  'card.extra': ['★ BỔ SUNG', '★ SUPPLEMENTARY'],
  'card.extraHint': [
    'Câu bổ sung do ứng dụng biên soạn theo đề cương chính thức — không có trong bộ slide PDF gốc.',
    'Supplementary question written for this app from the official study guide — not part of the original PDF deck.',
  ],
  'card.fav': ['Đánh dấu yêu thích (phím F)', 'Mark as favourite (key F)'],
  'card.multiHint': ['Câu này có {n} đáp án đúng.', 'This question has {n} correct answers.'],
  'card.subHint': ['Chọn đáp án cho từng dòng bên dưới.', 'Pick an answer for every row below.'],
  'card.markRightPicked': ['Đúng · bạn chọn', 'Correct · your pick'],
  'card.markRight': ['Đáp án đúng', 'Correct answer'],
  'card.markPicked': ['Bạn chọn', 'Your pick'],
  'card.verdictOk': ['✓ Chính xác', '✓ Correct'],
  'card.verdictNo': ['✕ Chưa đúng', '✕ Not correct'],
  'card.verdictSh': [
    '◆ Bạn đã xem đáp án — câu này được xếp vào nhóm cần ôn lại',
    '◆ You revealed the answer — this question goes to the review list',
  ],
  'card.explain': ['Giải thích', 'Explanation'],
  'card.noExplain': [
    'Slide gốc không kèm phần giải thích cho câu này.',
    'The original slide has no explanation for this question.',
  ],
  'card.zoomHint': ['Bấm để phóng to', 'Click to enlarge'],
  'card.imgCap': [
    'Hình đính kèm của câu hỏi — bấm để phóng to.',
    'Exhibit for this question — click to enlarge.',
  ],
  'card.slideCap': [
    'Slide gốc từ PDF (có sẵn đáp án) — bấm để phóng to.',
    'Original PDF slide (answer included) — click to enlarge.',
  ],
  'card.imgAlt': ['Hình đính kèm câu {id}', 'Exhibit for question {id}'],
  'card.slideAlt': ['Slide gốc câu {id}', 'Original slide for question {id}'],
  'card.check': ['Kiểm tra đáp án', 'Check answer'],
  'card.reveal': ['Xem đáp án', 'Reveal answer'],
  'card.retry': ['Làm lại câu này', 'Try this question again'],
  'card.next': ['Câu tiếp theo →', 'Next question →'],
  'card.keysPick': ['chọn', 'pick'],
  'card.keysCheck': ['kiểm tra', 'check'],
  'card.keysFav': ['yêu thích', 'favourite'],
  'card.keysNext': ['câu sau', 'next'],
  'card.keysMove': ['chuyển câu', 'move'],
  'card.emptyMode': ['Không có câu hỏi nào trong chế độ {mode}.', 'No questions in {mode} mode.'],
  'card.emptyHint': [
    'Mở Thiết lập để chọn phạm vi hoặc chế độ khác, hoặc đánh dấu ⭐ ở các câu bạn muốn ôn lại.',
    'Open Setup to pick another scope or mode, or star ⭐ the questions you want to review.',
  ],

  /* ---------- loại câu hỏi / question types ---------- */
  'type.single': ['CHỌN 1 ĐÁP ÁN', 'SINGLE CHOICE'],
  'type.multi': ['CHỌN NHIỀU ĐÁP ÁN', 'MULTIPLE CHOICE'],
  'type.yesno': ['YES / NO', 'YES / NO'],
  'type.yesno_table': ['BẢNG YES / NO', 'YES / NO TABLE'],
  'type.match': ['GHÉP NỐI', 'MATCHING'],

  /* ---------- hộp dịch / translation box ---------- */
  'vi.busy': ['Đang dịch…', 'Translating…'],
  'vi.error': [
    'Chưa có bản dịch cho phần này ({err}).',
    'No translation available for this section ({err}).',
  ],
  'vi.missing': [
    'Câu này chưa có bản dịch tiếng Việt kèm sẵn.',
    'This question has no bundled Vietnamese translation yet.',
  ],
  'vi.badge': ['TIẾNG VIỆT', 'VIETNAMESE'],

  /* ---------- màn hình học / study screen ---------- */
  'study.roadmap': ['LỘ TRÌNH', 'ROADMAP'],
  'study.domains': ['5 PHẦN THI', '5 DOMAINS'],
  'study.topics': ['{n} CHỦ ĐỀ', '{n} TOPICS'],
  'study.guideLink': ['Đề cương gốc ↗', 'Official study guide ↗'],
  'study.intro': [
    'Danh sách dưới đây bám theo đề cương Skills measured chính thức của Microsoft cho kỳ thi AI-900 (bản hiệu lực 02/05/2025). Mỗi chủ đề có phần mô tả tổng quan và link tài liệu Microsoft để đọc chi tiết. Bấm “Thi phần này” để luyện đúng nhóm câu hỏi tương ứng.',
    'The outline below follows Microsoft’s official Skills measured study guide for AI-900 (edition effective 2 May 2025). Every topic has an overview plus links to Microsoft Learn. Press “Practise this domain” to drill exactly that group of questions.',
  ],
  'study.noteLabel': ['Lưu ý:', 'Note:'],
  'study.noteBefore': [
    'Microsoft đã cho AI-900 nghỉ hưu ngày 30/06/2026 và thay bằng',
    'Microsoft retired AI-900 on 30 June 2026 and replaced it with',
  ],
  'study.noteAfter': [
    '; chứng chỉ nhận được vẫn là Azure AI Fundamentals. Kiến thức nền bên dưới vẫn dùng được cho AI-901.',
    '; the certification earned is still Azure AI Fundamentals. Everything below still applies to AI-901.',
  ],
  'study.extraLabel': ['Câu bổ sung:', 'Supplementary questions:'],
  'study.extraNote': [
    'ngân hàng gốc lấy từ bộ slide PDF không phủ hết đề cương, nên ứng dụng biên soạn thêm {n} câu cho những chủ đề còn trống (đặc biệt là Generative AI). Câu bổ sung mang số hiệu từ 1001 trở lên và luôn kèm nhãn tím “★ BỔ SUNG”.',
    'the original PDF-derived bank does not cover the whole outline, so this app adds {n} hand-written questions for the uncovered topics (Generative AI above all). Supplementary questions are numbered from 1001 up and always carry the violet “★ SUPPLEMENTARY” badge.',
  ],
  'study.practiceDomain': ['Thi phần này', 'Practise this domain'],
  'study.practiceTopic': ['Thi chủ đề này ({n})', 'Practise this topic ({n})'],
  'study.count': ['{n} CÂU', '{n} QUESTIONS'],
  'study.doneCount': ['ĐÃ LÀM {done}/{total}', 'DONE {done}/{total}'],
  'study.extraCount': ['{n} BỔ SUNG', '{n} SUPPLEMENTARY'],
  'study.noQuestions': [
    'Ngân hàng câu hỏi hiện tại không có câu nào cho phần này — hãy học qua các link tài liệu bên dưới.',
    'The question bank has nothing for this domain — study it through the links below.',
  ],
  'study.covTitle': [
    'Đúng {ok} · Sai {no} · Đã xem đáp án {sh} · Chưa làm {todo}',
    'Correct {ok} · Wrong {no} · Revealed {sh} · Not attempted {todo}',
  ],
  'study.zeroTopic': ['0 câu', '0 questions'],

  /* ---------- hộp thoại / dialogs ---------- */
  'dlg.zoomTitle': ['Slide gốc', 'Original slide'],
  'dlg.zoomAlt': ['Slide gốc phóng to', 'Original slide enlarged'],
  'dlg.importTitle': ['Nhập dữ liệu tiến độ', 'Import progress data'],
  'dlg.importBody': [
    'Chọn file JSON đã xuất trước đó, hoặc dán nội dung vào ô bên dưới.',
    'Pick a previously exported JSON file, or paste its content below.',
  ],
  'dlg.importOk': ['Nhập dữ liệu', 'Import'],
  'dlg.resetTitle': ['Xoá toàn bộ tiến độ?', 'Reset all progress?'],
  'dlg.resetBody': [
    'Thao tác này xoá câu yêu thích, kết quả từng câu và toàn bộ lịch sử luyện tập. Không thể hoàn tác. Nên bấm “Xuất JSON” trước nếu bạn muốn giữ lại.',
    'This clears your favourites, per-question results and the whole practice history. It cannot be undone. Export JSON first if you want a backup.',
  ],
  'dlg.resetKeep': ['Giữ lại', 'Keep it'],
  'dlg.resetOk': ['Xoá tất cả', 'Delete everything'],

  /* ---------- thông báo / toasts ---------- */
  'toast.pickAnswer': ['Hãy chọn đáp án trước.', 'Pick an answer first.'],
  'toast.pickAll': ['Hãy chọn đủ tất cả các ô.', 'Answer every row first.'],
  'toast.correctNext': [
    'Chính xác — sang câu tiếp theo.',
    'Correct — moving to the next question.',
  ],
  'toast.noSession': ['Chưa có phiên luyện tập nào đang chạy.', 'No practice session is running.'],
  'toast.emptySession': ['Phiên trống đã được huỷ.', 'The empty session was discarded.'],
  'toast.sessionSaved': [
    'Đã lưu phiên: {ok}/{total} câu đúng.',
    'Session saved: {ok}/{total} correct.',
  ],
  'toast.filterDropped': [
    'Đã bỏ bộ lọc để mở câu {id}.',
    'Filters cleared so question {id} could open.',
  ],
  'toast.sizeChanged': ['Cỡ chữ: {size}', 'Text size: {size}'],
  'toast.exported': ['Đã tải file JSON tiến độ.', 'Progress JSON downloaded.'],
  'toast.badJson': ['File JSON không hợp lệ.', 'That JSON file is not valid.'],
  'toast.imported': ['Đã nhập dữ liệu.', 'Data imported.'],
  'toast.resetDone': ['Đã xoá toàn bộ tiến độ.', 'All progress deleted.'],
  'toast.jumpRange': [
    'Không có câu số {id}. Câu gốc: 1–{last}; câu bổ sung: từ 1001 trở lên.',
    'There is no question {id}. Original: 1–{last}; supplementary: 1001 and up.',
  ],
  'toast.langChanged': ['Đã chuyển giao diện sang tiếng Việt.', 'Interface switched to English.'],
  'size.md': ['Vừa', 'Medium'],
  'size.lg': ['Lớn', 'Large'],
  'size.xl': ['Rất lớn', 'Extra large'],

  /* ---------- sổ từ vựng / vocabulary ---------- */
  'vocab.btn': ['Từ vựng', 'Vocabulary'],
  'vocab.btnSave': ['＋ Lưu từ', '＋ Save word'],
  'vocab.btnHint': [
    'Sổ từ vựng tiếng Anh. Bôi đen một từ trong câu hỏi rồi bấm để lưu.',
    'English word list. Highlight a word in the question, then click to save it.',
  ],
  'vocab.title': ['Sổ từ vựng', 'Vocabulary'],
  'vocab.tabList': ['Danh sách ({n})', 'Word list ({n})'],
  'vocab.tabPractice': ['Luyện tập', 'Practise'],
  'vocab.en': ['Từ tiếng Anh', 'English word'],
  'vocab.vi': ['Nghĩa tiếng Việt', 'Vietnamese meaning'],
  'vocab.add': ['Lưu từ', 'Save'],
  'vocab.tip': [
    'Mẹo: bôi đen từ trong câu hỏi, bôi đen nghĩa của nó trong hộp TIẾNG VIỆT (bật Song ngữ), rồi bấm nút Từ vựng — hai ô sẽ tự điền.',
    'Tip: highlight a word in the question and its meaning in the VIETNAMESE box (turn Bilingual on), then click Vocabulary — both fields fill in automatically.',
  ],
  'vocab.bulk': ['Nạp nhiều từ', 'Add many words'],
  'vocab.bulkHint': [
    'Mỗi dòng một từ. Có thể ghi kèm nghĩa sau dấu =, -, :, | hoặc Tab.',
    'One word per line. You can add the meaning after =, -, :, | or a Tab.',
  ],
  'vocab.bulkPlaceholder': [
    'regression = hồi quy\nfeature - đặc trưng\ninference',
    'regression = <meaning>\nfeature - <meaning>\ninference',
  ],
  'vocab.bulkOk':['Nạp vào danh sách', 'Add to list'],
  'vocab.empty': ['Chưa có từ nào. Thêm từ ở ô phía trên.', 'No words yet. Add one above.'],
  'vocab.noMeaning': ['(chưa có nghĩa)', '(no meaning yet)'],
  'vocab.known': ['Đã thuộc', 'Known'],
  'vocab.learning': ['Đang học', 'Learning'],
  'vocab.fromQ': ['Câu {id}', 'Q{id}'],
  'vocab.delete': ['Xoá từ', 'Delete word'],
  'vocab.stats': ['{known}/{total} từ đã thuộc', '{known}/{total} words known'],
  'vocab.onlyNew': ['Chỉ ôn từ chưa thuộc', 'Only words not yet known'],
  'vocab.start': ['Bắt đầu', 'Start'],
  'vocab.restart': ['Ôn lượt mới', 'New round'],
  'vocab.reveal': ['Hiện nghĩa', 'Show meaning'],
  'vocab.again': ['Chưa nhớ', 'Not yet'],
  'vocab.got': ['Nhớ rồi', 'Got it'],
  'vocab.pos': ['Từ {i}/{n}', 'Word {i}/{n}'],
  'vocab.done': ['Xong lượt ôn: nhớ {ok}/{n} từ.', 'Round finished: {ok}/{n} remembered.'],
  'vocab.keys': [
    'Phím tắt: Space hiện nghĩa · 1 chưa nhớ · 2 nhớ rồi',
    'Shortcuts: Space shows the meaning · 1 not yet · 2 got it',
  ],
  'vocab.practiceEmpty': [
    'Danh sách đang trống — hãy lưu vài từ trước.',
    'Your list is empty — save a few words first.',
  ],
  'vocab.allKnown': [
    'Bạn đã thuộc hết các từ. Bỏ chọn “Chỉ ôn từ chưa thuộc” để ôn lại toàn bộ.',
    'You know every word. Untick “Only words not yet known” to review them all.',
  ],
  'toast.vocabAdded': ['Đã lưu “{w}”.', 'Saved “{w}”.'],
  'toast.vocabUpdated': ['Đã cập nhật nghĩa của “{w}”.', 'Updated the meaning of “{w}”.'],
  'toast.vocabExists': ['“{w}” đã có trong danh sách.', '“{w}” is already in the list.'],
  'toast.vocabBulk': [
    'Đã thêm {a} từ, cập nhật {u}, bỏ qua {s}.',
    'Added {a}, updated {u}, skipped {s}.',
  ],
} as const satisfies Record<string, readonly [string, string]>;

export type I18nKey = keyof typeof STRINGS;
