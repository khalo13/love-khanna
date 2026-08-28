// data/ascendantRemedies.js
//
// Structure per Ascendant (identity data only now):
// - element, ruler, tagline, color, basicMantra, generalRemedy
//
// LIFELINE_PROBLEMS  — (renamed from old LIFELINE_REMEDIES) per Ascendant x House,
//                       core problem/indication text. Same keying: [ascendantSign][rulerHouse].
// LIFELINE_REMEDIES  — NEW dictionary, identical structure/keying, holding the
//                       actual remedy for that same Ascendant x House combination.
//
// getPrimaryBottleneck(ascendantSign, rulerHouse) -> problem text (left card)
// getLifelineRemedy(ascendantSign, rulerHouse)     -> remedy text (right card)

export const ASCENDANT_REMEDIES = {
  Aries: { element: "Fire", ruler: "Mars", tagline: "The Fighter", color: "Red or Coral", basicMantra: "Om Kram Kreem Kroum Sah Bhaumaya Namah" },
  Taurus: { element: "Earth", ruler: "Venus", tagline: "The Builder", color: "White or Light Pink", basicMantra: "Om Dram Dreem Droum Sah Shukraya Namah" },
  Gemini: { element: "Air", ruler: "Mercury", tagline: "The Messenger", color: "Green", basicMantra: "Om Bram Breem Broum Sah Budhaya Namah" },
  Cancer: { element: "Water", ruler: "Moon", tagline: "The Nurturer", color: "Pearl White or Silver", basicMantra: "Om Shram Shreem Shroum Sah Chandraya Namah" },
  Leo: { element: "Fire", ruler: "Sun", tagline: "The Sovereign", color: "Saffron or Gold", basicMantra: "Om Hram Hreem Hroum Sah Suryaya Namah" },
  Virgo: { element: "Earth", ruler: "Mercury", tagline: "The Analyst", color: "Emerald Green", basicMantra: "Om Bram Breem Broum Sah Budhaya Namah" },
  Libra: { element: "Air", ruler: "Venus", tagline: "The Diplomat", color: "Off-White or Pastel Blue", basicMantra: "Om Dram Dreem Droum Sah Shukraya Namah", generalRemedy: "Set decision deadlines for yourself; Libra energy improves with structure, not more options." },
  Scorpio: { element: "Water", ruler: "Mars", tagline: "The Strategist", color: "Dark Red or Maroon", basicMantra: "Om Kram Kreem Kroum Sah Bhaumaya Namah" },
  Sagittarius: { element: "Fire", ruler: "Jupiter", tagline: "The Explorer", color: "Yellow or Ochre", basicMantra: "Om Gram Greem Groum Sah Gurave Namah", generalRemedy: "Pick one commitment to finish this month before starting anything new." },
  Capricorn: { element: "Earth", ruler: "Saturn", tagline: "The Achiever", color: "Dark Blue or Navy", basicMantra: "Om Pram Preem Proum Sah Shanaishcharaya Namah" },
  Aquarius: { element: "Air", ruler: "Saturn", tagline: "The Visionary", color: "Electric Blue or Charcoal", basicMantra: "Om Pram Preem Proum Sah Shanaishcharaya Namah" },
  Pisces: { element: "Water", ruler: "Jupiter", tagline: "The Dreamer", color: "Yellow or Sea Green", basicMantra: "Om Gram Greem Groum Sah Gurave Namah" }
};

// ============================================================
// LIFELINE_PROBLEMS — renamed from old LIFELINE_REMEDIES.
// House 1 for each sign now folds in that sign's old primaryProblem
// alongside the placement text, since House 1 (own house for most
// rulers) is the most identity-defining placement.
// Same [ascendantSign][rulerHouse] keying as before — unchanged.
// ============================================================
export const LIFELINE_PROBLEMS = {
  Aries: {
    1: "Impulsive decisions and burnt‑out energy from starting too much and finishing too little. Restlessness visible before action, leaving progress scattered and confidence weakened.",
    2: "Financial choices turn into impulse buys. Sharp words at home damage trust faster than wealth can grow, leaving stability fragile and relationships strained.",
    3: "Quick tongue wins arguments but slowly wears down siblings or collaborators. Communication feels sharp yet heavy, leaving bonds weakened over time.",
    4: "Tension enters the home. Small disagreements escalate faster than they should, unsettling peace and leaving domestic life unstable.",
    5: "Headfirst rush into romance and creative projects. Commitments rarely thought through, leaving passion strong but results unfinished.",
    6: "Strong drive to fight obstacles and rivals. Same fire sparks unnecessary workplace conflict, leaving effort wasted and harmony lost.",
    7: "Partnerships suffer friction. Directness reads as aggression to those needing softer approach, leaving balance disturbed and bonds strained.",
    8: "Restless energy pulls toward risky choices with money or health. Consequences felt later, leaving regret and instability.",
    9: "Arguments with authority, teachers, or belief systems. Useful for breaking outdated rules but costly when unchecked, leaving growth slowed.",
    10: "Career accelerates quickly. Aggression earns promotion but also creates avoidable clashes with superiors, leaving progress unstable.",
    11: "Ambitious income goals pursued impatiently. Rushed, high‑risk decisions undermine long‑term gains, leaving growth fragile.",
    12: "Restlessness turns inward. Unspent energy shows up as poor sleep or private frustration, leaving strength drained silently."
  },

  Taurus: {
    1: "Stubbornness and fear of change block growth in money and relationships. Comfort becomes identity, resistance to change feels threatening, leaving progress slowed.",
    2: "Wealth builds steadily. Attachment to security turns into hoarding or refusal to take risks, leaving growth limited and comfort heavy.",
    3: "Communication softens. Necessary difficult conversations avoided just to keep peace, leaving clarity lost and bonds weakened.",
    4: "Home comfort prioritized. Resistance to moving, renovating, or changing routines delays progress, leaving domestic life stagnant.",
    5: "Romantic loyalty deepens. Possessiveness or refusal to give space creates friction, leaving love heavy and strained.",
    6: "Comfort‑seeking shows up as overeating or reluctance to fix health routines. Growth blocked by resistance to change, leaving well‑being fragile.",
    7: "Partnerships steady. Resistance to growth frustrates partner seeking change, leaving bonds strong but stagnant.",
    8: "Security tied to shared resources. Changes in joint finances feel threatening, leaving trust fragile and progress delayed.",
    9: "Beliefs stay familiar. Reluctance to explore philosophies that challenge worldview limits growth, leaving wisdom narrow.",
    10: "Career grows steadily. Reputation strong but staying too long in outdated roles slows progress, leaving ambition restrained.",
    11: "Friendships and income streams loyal and stable. Held onto long after they stop serving, leaving growth blocked.",
    12: "Need for stability turns into private escapism. Comfort used to avoid facing necessary change, leaving progress hidden."
  },

  Gemini: {
    1: "Scattered focus and overthinking stall decisions when clarity most needed. Restlessness shows before direction chosen, leaving progress delayed.",
    2: "Financial focus scattered across too many small decisions. Saving harder than it should be, leaving stability fragile.",
    3: "Communication sharpens. Commitments abandoned mid‑way after talking self out of them, leaving progress unfinished.",
    4: "Mind stays busy at home. Hard to switch off and be emotionally present, leaving family bonds strained.",
    5: "Creative energy scattered across too many ideas. Projects started faster than finished, leaving results incomplete.",
    6: "Problem‑solving ability strong. Overthinking routine tasks creates unnecessary stress, leaving efficiency reduced.",
    7: "Excellent communicator in partnerships. Overanalyzing words creates doubt where none exists, leaving harmony disturbed.",
    8: "Curiosity drifts into secrets, shared finances, or matters better left alone. Energy wasted on hidden issues, leaving trust fragile.",
    9: "Sharp opinions on beliefs and philosophy. Arguments stay intellectual rather than acted upon, leaving growth limited.",
    10: "Career communication strong. Scattered focus leads to unfinished initiatives, leaving progress slowed.",
    11: "Many acquaintances and income ideas arise. Few followed through to real gains, leaving growth scattered.",
    12: "Overthinking turns inward. Late‑night mental loops replace clarity needed during day, leaving strength drained."
  },

  Cancer: {
    1: "Emotional overwhelm and mood swings felt intensely. State visible before words spoken. Sensitivity drains stability, leaving identity shaped by constant inner tides.",
    2: "Security tied directly to money. Financial ups and downs destabilize emotions. Comfort feels fragile when wealth fluctuates, leaving peace dependent on material flow.",
    3: "Reactive in everyday conversations. Emotional weight carried into talks with siblings or collaborators. Bonds strained as feelings rise faster than reason.",
    4: "Deep bond with home and mother. Dependence on familiar surroundings limits growth. Comfort strong but progress slowed by attachment to the past.",
    5: "Love and creativity emotionally intense. Romantic ups and downs hit harder than shown. Joy feels unstable, passion burns bright but fades quickly.",
    6: "Stress unsettles health. Emotional turbulence shows up as dips in well‑being. Body reflects inner storms, leaving vitality fragile.",
    7: "Deeply attuned to partner’s moods. Emotional state absorbed from others. Balance lost as feelings merge, leaving relationships heavy and draining.",
    8: "Reactions to change and loss feel heavier than necessary. Transitions become emotionally draining, leaving growth slowed and resilience tested.",
    9: "Beliefs tied to emotional comfort. Clinging to familiar philosophies blocks questioning. Growth limited by fear of leaving safe ideas behind.",
    10: "Public mood visible at work. Emotional off days affect professional standing. Reputation shaped by feelings, leaving career progress unstable.",
    11: "Friendships carry strong emotional significance. Social gains or losses taken personally. Bonds feel heavy, leaving networks fragile.",
    12: "Emotional processing turns inward. Withdrawal replaces sharing feelings. Solitude chosen over openness, leaving hidden unrest unspoken."
  },

  Leo: {
    1: "Need for recognition drives confidence. Burnout risks rise when appreciation delayed. Identity shaped by visibility, leaving strength tied to external praise.",
    2: "Self‑worth tied to financial standing. Money feels like measure of value. Stability shaken when wealth fluctuates, leaving esteem fragile.",
    3: "Desire for recognition in ideas and words overshadows quieter voices. Communication strong but balance lost, leaving others unheard.",
    4: "Pride in home and family creates tension if reality fails to match image. Domestic peace strained by need for perfection.",
    5: "Bold creative and romantic expression raises stakes when acknowledgment missing. Joy feels incomplete without praise, leaving passion heavy.",
    6: "Frustration arises when routine work goes unnoticed. Recognition needed even for small tasks. Effort feels wasted when unseen.",
    7: "Partnership requires visible admiration. Quiet partners leave feeling unseen. Balance lost when validation absent, leaving bonds strained.",
    8: "Loss of control or status during transitions triggers intense reactions. Change feels heavy, leaving resilience tested.",
    9: "Beliefs held with confidence, sometimes dogmatically. Struggle to entertain opposing views limits growth, leaving philosophy rigid.",
    10: "Public recognition strong, but identity fuses too closely with professional status. Career success shapes self‑worth, leaving balance fragile.",
    11: "Need to be center of social and professional circles. Desire for visibility overshadows group harmony, leaving networks strained.",
    12: "Craving recognition while withdrawing from visibility creates inner contradiction. Desire for praise clashes with retreat, leaving unrest hidden."
  },

  Virgo: {
    1: "Perfectionism and self‑criticism shape identity. Constant focus on flaws drains energy and weakens confidence. Progress feels slow because achievements are judged harshly before they are even recognized.",
    2: "Money tracked with extreme care. Small mistakes create worry and anxiety. Stability feels unsafe because fear of scarcity grows even when finances are steady and secure.",
    3: "Communication sharpened but over‑editing weakens clarity. Words corrected again and again. Second‑guessing reduces natural flow and everyday talks lose impact, creating tension and misunderstanding.",
    4: "Orderly home demanded at all times. Clutter or disorder disturbs peace of mind. Strict standards create stress and emotional comfort is lost when surroundings fail expectations.",
    5: "Creative work judged too harshly. Projects rarely feel complete enough to share. Endless self‑criticism blocks growth and fear of imperfection stops joy in art or romance.",
    6: "Problem‑solving ability is strong but routines become obsessive. Efficiency is lost as daily tasks turn rigid. Worry and control replace simple flow of work and discipline.",
    7: "Partner’s words analyzed too deeply. Flaws imagined where none exist. Self‑criticism creates doubt and harmony is disturbed, leaving relationships strained by constant over‑interpretation.",
    8: "Mind drawn to worst‑case scenarios. Shared money and hidden issues feel heavier than they are. Self‑criticism magnifies problems and distrust grows in joint matters.",
    9: "Beliefs examined with strict logic. Ideas dismissed quickly for not being precise. Openness blocked and perfectionism limits acceptance of broader views or philosophies.",
    10: "Work delivered with care but slowed. Perfectionism delays progress and self‑doubt holds back achievement. Frustration grows when results take longer than expected to appear.",
    11: "Social plans and income ideas overanalyzed. Decisions stalled and opportunities missed. Perfectionist thinking blocks action and reduces growth in networks and financial gains.",
    12: "Self‑criticism turns inward. Private exhausting thoughts drain strength. Hidden worry builds and isolation grows as flaws are judged silently without release or support."
  },
  Libra: {
    1: "Chronic indecision shapes identity. Every option weighed too long, opinions softened to avoid disapproval. Confidence weakened as choices delayed, progress slowed, and harmony valued more than firm action.",
    2: "Good taste and steady income potential, but overspending on comfort or beauty creates strain. Indecision about financial priorities blocks growth, turning stability into stress and worry about security.",
    3: "Diplomatic in conversation, but honesty avoided to keep peace. Necessary truths delayed, decisions softened, and communication loses strength when harmony is valued more than clarity.",
    4: "Home harmony prioritized above all. Confrontations avoided, problems left unresolved. Peace maintained on the surface, but progress slowed and tension hidden beneath calm surroundings.",
    5: "Romantic idealism deepens, but red flags overlooked to maintain pleasant picture. Indecision about boundaries creates confusion, leaving love and creativity stalled in uncertainty.",
    6: "Difficulty setting boundaries at work. Saying yes too often to keep things pleasant creates overload. Indecision about limits weakens efficiency and drains energy in daily tasks.",
    7: "Strong potential for partnership, but indecision leaves relationships in limbo. Choices delayed, commitments postponed, harmony valued more than clarity, creating frustration and stagnation.",
    8: "Emotional balance tied to shared resources. Joint financial decisions harder to finalize. Indecision about trust and fairness creates stress, leaving matters unsettled and heavy.",
    9: "Harmony sought between differing beliefs. Reluctance to take firm stances blocks growth. Indecision about philosophy or values creates confusion, leaving beliefs soft but unclear.",
    10: "Public image well liked, but indecision about career direction slows progress. Choices delayed, opportunities missed, reputation strong but advancement uncertain.",
    11: "Wide social circle built, but struggle to choose which opportunities to commit to. Indecision blocks action, leaving growth scattered and progress limited.",
    12: "Need for balance turns into private avoidance. Difficult choices withdrawn from, uncomfortable truths hidden. Indecision creates isolation, leaving problems unspoken and unresolved."
  },
  Scorpio: {
    1: "Bottled‑up intensity shapes identity. Control issues or sudden eruptions appear when feelings are suppressed. Presence feels guarded and intimidating, creating distance and tension with others.",
    2: "Financial choices made with sudden emotion. Intense reactions lead to risky spending or abrupt decisions. Planning feels unstable, leaving security fragile and trust around money weakened.",
    3: "Words sharpen quickly when provoked. Conversations escalate into confrontation faster than intended. Intensity in speech damages bonds, turning communication into conflict instead of connection.",
    4: "Buried tension surfaces at home. Unspoken frustration erupts as sudden conflict. Domestic peace feels fragile, with hidden emotions disturbing comfort and stability.",
    5: "Romance becomes intense and consuming. Jealousy or control issues rise when trust feels uncertain. Love feels powerful but heavy, creating emotional strain and instability.",
    6: "Intensity channels into solving problems. Workplace friction escalates quickly if ignored. Effort feels strong but harmony lost, leaving stress and conflict in daily routines.",
    7: "Partnerships carry powerful attraction. Control struggles and power dynamics disturb balance. Emotional intensity makes relationships magnetic but unstable, creating cycles of tension and release.",
    8: "Relationship with crisis and transformation feels strong. Upheaval handled well but rarely processed openly. Hidden emotions create weight, leaving transitions heavy and draining.",
    9: "Beliefs defended fiercely. Arguments alienate those with different views. Intensity in conviction blocks openness, creating conflict instead of growth in philosophy or learning.",
    10: "Ambitious career moves succeed, but suppressed frustration with authority surfaces at wrong times. Intensity drives success yet creates clashes with leaders and superiors.",
    11: "Intense ambition for gains pursued impatiently. Valuable alliances damaged by haste. Desire for progress feels urgent, but relationships and networks weakened by pressure.",
    12: "Intensity buried from view. Private anger, poor sleep, or unexplained exhaustion appear. Hidden emotions drain strength, leaving isolation and inner unrest unspoken."
  },
  Sagittarius: {
    1: "Overpromising and restlessness shape identity. Big plans started but rarely finished. Optimism visible, yet commitments exceed follow‑through, leaving progress scattered and incomplete.",
    2: "Finances generally lucky, but overconfidence creates overspending or risky lending. Security feels unstable when optimism replaces careful planning, turning gains into sudden losses.",
    3: "Communication enthusiastic and lively, but promises exceed delivery. Words inspire others yet actions fall short, leaving trust weakened and ideas unfinished.",
    4: "Sense of home expands widely, but restlessness prevents settling. Comfort feels temporary, with constant desire for change disrupting stability and peace.",
    5: "Romance and creativity generous and expansive, but projects started exceed those finished. Passion burns brightly at first, fading before results are complete.",
    6: "Responsibilities taken on excessively. Optimism about capacity leads to overload. Tasks pile up faster than managed, leaving exhaustion and unfinished duties.",
    7: "Partnership energy generous and growth‑oriented, but commitments promised before readiness. Relationships feel inspiring yet unstable, with balance lost in rushed agreements.",
    8: "Risk appetite with shared resources expands past prudence. Joint finances or trust strained by overconfidence, leaving vulnerability and sudden setbacks.",
    9: "Beliefs and love of learning strengthened, but dogmatism risks forming without real testing. Ideas held firmly yet unproven, blocking openness and growth.",
    10: "Career growth strong, but scattered ambition chases too many directions. Success diluted by lack of focus, leaving progress broad but shallow.",
    11: "Networking and gains flourish, but overestimation of plans leads to fewer results. Optimism builds connections yet actions fall short, reducing long‑term growth.",
    12: "Grand plans remain private, unfinished, or quietly abandoned. Optimism strong in imagination, but restlessness prevents completion, leaving hidden frustration and wasted effort."
  },
  Capricorn: {
    1: "Overworking and delayed rewards shape identity. Discipline turns into self‑criticism, health suffers, and relationships feel strained as effort outweighs recognition and progress feels slow.",
    2: "Wealth builds slowly and steadily. Anxiety about scarcity persists even when stable, creating stress around money and blocking peace of mind despite long‑term security.",
    3: "Communication feels effortful. Honest words held back out of fear of judgment. Expression becomes cautious, reducing clarity and leaving conversations heavy and restrained.",
    4: "Home atmosphere feels heavy. Unresolved family responsibilities weigh down peace. Emotional comfort reduced as duty and obligation dominate domestic life.",
    5: "Romance and creativity delayed or complicated. Joy feels earned rather than natural. Self‑criticism blocks ease, leaving love and art burdened by effort instead of flow.",
    6: "Daily work disciplined and consistent. Illness or exhaustion ignored instead of resting. Overwork builds silently, draining energy and weakening health over time.",
    7: "Partnerships approached slowly and seriously. Commitment carries heavy responsibility. Relationships feel stable but weighed down by duty, reducing lightness and ease.",
    8: "Transformation and shared finances feel long and heavy. Transitions slow and difficult. Emotional weight builds as change resisted, leaving progress delayed and stressful.",
    9: "Beliefs questioned cautiously and slowly. Philosophies resisted until personally tested. Growth feels delayed, with wisdom earned through effort rather than openness.",
    10: "Career authority builds long‑term. Success comes late after sustained effort. Recognition delayed, leaving frustration as ambition feels heavy before rewards arrive.",
    11: "Gains and friendships build slowly. Progress feels behind even when steady. Social growth limited by caution, leaving opportunities delayed and networks restrained.",
    12: "Discipline turns into quiet self‑denial. Rest and release feel undeserved. Hidden exhaustion builds, leaving isolation and private struggle unspoken."
  },
  Aquarius: {
    1: "Emotional detachment shapes identity. Close relationships feel distant, presence appears guarded, and connection weakens as feelings remain hidden beneath a calm and intellectual surface.",
    2: "Money managed cautiously with careful planning. Security never feels complete, anxiety about stability lingers, and financial comfort reduced by constant doubt and restraint.",
    3: "Ideas communicated clearly and logically. Feelings withheld, conversations stay intellectual but emotionally guarded, leaving bonds limited and expression incomplete.",
    4: "Home atmosphere emotionally distant. Formal or undemonstrative family dynamics linger, reducing warmth and leaving domestic life heavy and restrained.",
    5: "Romance and creativity restrained. Vulnerability rationed carefully, joy feels limited, and emotional openness blocked by fear of exposure.",
    6: "Daily routines disciplined and consistent. Detachment from personal needs allows health issues to go unaddressed, leaving exhaustion or illness unnoticed until serious.",
    7: "Commitment treated as serious contract. Emotional spontaneity absent, relationships feel structured and heavy, reducing ease and natural flow.",
    8: "Major transitions approached cautiously. Emotional processing avoided, change feels slow and heavy, leaving growth delayed and incomplete.",
    9: "Belief system built slowly and skeptically. New philosophies rarely accepted quickly, openness blocked, and growth limited by caution.",
    10: "Career authority respected and steady. Personal connection crowded out by professional distance, leaving success strong but relationships weakened.",
    11: "Networks and gains steady long‑term. Friendships remain functional rather than close, emotional warmth reduced, leaving social life practical but restrained.",
    12: "Emotional withdrawal deepens into isolation. Solitude becomes habitual, hidden feelings unspoken, leaving private unrest and quiet loneliness."
  },

  Pisces: {
    1: "Escapism and weak boundaries drain energy. Compassion absorbs problems instantly, leaving exhaustion and blurred identity as personal limits dissolve.",
    2: "Generosity with money exceeds safe limits. Giving away security risks stability, leaving finances fragile and comfort reduced.",
    3: "Communication empathetic and gentle. Agreements made just to avoid disappointing others, leaving promises heavy and boundaries unclear.",
    4: "Emotional sensitivity at home heightened. Moods of family members strongly affect atmosphere, leaving peace fragile and comfort unstable.",
    5: "Romance and creativity deeply idealistic. Clarity lost in emotional intensity, leaving love and art inspiring but confusing.",
    6: "Others’ work or problems taken on out of empathy. Boundaries sacrificed, leaving exhaustion and health weakened by overload.",
    7: "Partnership generous and forgiving. Limits crossed too easily, leaving relationships supportive but sometimes beyond healthy balance.",
    8: "Intuitive connection to hidden struggles drains energy. Boundaries unclear, leaving emotional weight heavy and private strength reduced.",
    9: "Spiritual and philosophical world expands. Drifting between beliefs prevents grounding, leaving wisdom broad but unstable.",
    10: "Career growth compassionate and respected. Others’ burdens absorbed as personal responsibility, leaving progress heavy and draining.",
    11: "Social circle leans on empathy more than it gives back. Support offered freely, but balance missing, leaving energy drained.",
    12: "Escapist tendencies deepen. Solitude and withdrawal become default response to overwhelm, leaving isolation and hidden unrest unspoken."
  },

};

// ============================================================
// LIFELINE_REMEDIES — NEW dictionary. Same structure/keying as
// LIFELINE_PROBLEMS: [ascendantSign][rulerHouse]. Holds the actual
// prescriptive remedy for that same problem — a concrete action,
// not a repeat of the diagnosis.
// ============================================================
export const LIFELINE_REMEDIES = {
  Aries: {
    1: "Before reacting, pause with 5 slow breaths and count to ten. Make this a fixed daily habit to stop impulsive actions and calm visible restlessness.",
    2: "Apply a 24‑hour wait rule before any purchase above a set amount. Avoid money talks late at night to reduce impulse spending and harsh words at home.",
    3: "Write any heated reply first, then reread it once before sending or saying. This slows down sharp speech and prevents damage to sibling or collaborator bonds.",
    4: "Keep the space around your bed clutter‑free. Create a calming evening routine like lighting a lamp or soft light to reduce tension and restore peace at home.",
    5: "Sit with any new romantic or creative commitment for one full week before acting. This prevents rushed entry into love or projects and ensures thoughtful decisions.",
    6: "Channel competitive energy into a fixed physical outlet — gym, sport, or martial arts — at least three times a week. This prevents workplace conflict by releasing excess fire.",
    7: "Replace commanding words with cooperative ones. For example, change 'you need to' into 'could we' in requests. This softens aggression and reduces friction in partnerships.",
    8: "Schedule a basic health check‑up this season. Sleep on any high‑risk financial decision before committing. This prevents sudden risks in health or shared money.",
    9: "Before dismissing a teacher, elder, or tradition outright, write down one useful point it might hold. This balances arguments with authority and prevents costly clashes.",
    10: "Before pushing back on a superior, write your point down and revisit it an hour later. This slows aggression and avoids unnecessary career disputes.",
    11: "Set a rule that any new income opportunity gets a three‑day review before committing money or time. This prevents rushed, high‑risk decisions and stabilizes gains.",
    12: "Add 15–20 minutes of physical exertion before bed — brisk walk, stretching, or push‑ups. This discharges restless energy and prevents poor sleep or hidden frustration."
  },
  Taurus: {
    1: "Deliberately change one small daily habit this week — your route, your breakfast, or your playlist — to train flexibility and reduce fear of change.",
    2: "Set aside a small fixed 'risk fund' each month. Use it for investments or experiences without second‑guessing, to break attachment to hoarding and security fears.",
    3: "Pick one overdue conversation this week and have it, even briefly. Practice saying the honest thing directly instead of avoiding necessary words for peace.",
    4: "Change or refresh one thing in your home this month — a curtain, a plant, or furniture placement — to prove that domestic change is safe and positive.",
    5: "Actively encourage your partner toward one independent activity or outing this week. Support it without comment, to reduce possessiveness and allow space in love.",
    6: "Replace one comfort‑driven habit like snacking or scrolling with a 10‑minute walk, three times this week. This breaks inertia and builds healthier routines.",
    7: "Ask your partner directly what one thing they’d like to change about your shared routine. Try it for two weeks to soften resistance and grow together.",
    8: "Schedule one calm, dedicated conversation about shared finances this month. Address issues openly instead of letting tension build around joint resources.",
    9: "Read or listen to one perspective this month that challenges a belief you hold. Do not argue back — just absorb it to expand worldview beyond comfort zones.",
    10: "Write down what your ideal next career step looks like, even if you’re not ready to move yet. This prevents stagnation and prepares for growth.",
    11: "Review friendships and financial commitments once a quarter. Consciously decide what still serves you and release what does not, to avoid clinging too long.",
    12: "Name one thing you’re avoiding facing. Take a single small step toward it this week, proving that stability grows stronger when change is embraced."
  },
  Gemini: {
    1: "Write down your top three priorities each morning before checking your phone. This anchors focus and prevents scattered energy from taking over the day.",
    2: "Automate one saving transfer right after payday. This ensures money is secured before scattered spending decisions compete for it, reducing financial stress.",
    3: "Finish one small task fully today before starting the next. Resist multitasking to train focus and reduce unfinished commitments.",
    4: "Set a screen‑free 30 minutes at home each evening. Use this time to be mentally present with family and reduce restless mental loops.",
    5: "Pick one creative idea and give it a firm two‑week deadline. Avoid starting multiple projects at once to strengthen follow‑through.",
    6: "Timebox routine tasks to a fixed duration. This prevents overthinking from stretching them out and builds efficiency in daily work.",
    7: "Before questioning a partner’s words, ask directly what they meant. This prevents unnecessary doubt and reduces overanalysis in relationships.",
    8: "When curiosity pulls you toward someone else’s business, redirect it into a personal project. This keeps energy constructive and avoids wasted focus.",
    9: "Pick one belief you often argue for and act on it this month. This grounds ideas in reality instead of leaving them as endless discussion.",
    10: "Choose one current initiative at work to finish completely before starting a new one. This prevents scattered ambition and builds credibility.",
    11: "Follow up with one existing contact or idea this week instead of collecting a new one. This strengthens networks and prevents shallow connections.",
    12: "Write down late‑night mental loops before bed. Putting them on paper clears the mind and prevents restless overthinking from disturbing sleep."
  },
  Cancer: {
    1: "Drink water from a silver or glass container today. This steadies emotional highs and lows by anchoring the body and calming visible mood swings.",
    2: "When a financial fluctuation unsettles you, wait 24 hours before making any money decision. This prevents emotional reactions from destabilizing security.",
    3: "Pause before responding in a heated everyday conversation. Even a few seconds resets emotional reactivity and prevents unnecessary conflict with siblings or collaborators.",
    4: "Keep a consistent sleep and home routine. Predictable rhythm steadies the Moon fastest, reducing emotional dependence on unstable surroundings.",
    5: "Name one romantic or creative high or low out loud to someone you trust. Sharing prevents emotional intensity from building silently inside.",
    6: "When stress shows up physically, treat it as a signal to rest. Do not push through — recovery steadies emotions and health together.",
    7: "Check in with yourself before absorbing a partner’s mood. Ask if the feeling is actually yours, to prevent emotional merging and loss of balance.",
    8: "During a transition, give yourself a fixed period — one week — to feel it fully before making major decisions. This prevents emotional overwhelm from rushing choices.",
    9: "Before dismissing an unfamiliar philosophy for comfort’s sake, sit with it for a few days. This expands emotional openness and prevents clinging to familiar beliefs.",
    10: "If work feels off emotionally, take five minutes alone before a meeting. This steadies public mood and prevents emotional instability from affecting professional standing.",
    11: "Separate a social gain or loss from self‑worth. Write down one unrelated thing going well to prevent friendships or networks from carrying too much emotional weight.",
    12: "Share one feeling with someone close each week. This prevents withdrawal into solitude and steadies emotions by releasing them outward instead of hiding them."
  },
  Leo: {
    1: "Offer plain water toward the morning sun in a clean vessel before starting your day. This grounds energy and steadies confidence without chasing external praise.",
    2: "Track one non‑financial win each day. This separates self‑worth from money and builds esteem from effort, not just wealth.",
    3: "Make space for a quieter voice in conversation before offering your own idea. This balances recognition with listening and prevents overshadowing others.",
    4: "Let go of one expectation about how your home 'should' look to others this week. This reduces pressure and restores peace in domestic life.",
    5: "Create for yourself first, then share. Separate the act of making from needing acknowledgment, so joy comes from expression instead of external validation.",
    6: "Say your accomplishment out loud to one person today. This prevents frustration from waiting for recognition and builds confidence through self‑expression.",
    7: "Tell your partner directly what kind of appreciation you need. This prevents silent resentment and strengthens clarity in relationships.",
    8: "During a loss of control, name what you can still influence. This shifts focus from frustration to empowerment and steadies emotional reactions.",
    9: "Ask one question about a belief you hold strongly. This opens space for growth and prevents dogmatic rigidity in philosophy.",
    10: "Separate one piece of your identity from your job title this month. Choose a hobby, relationship, or skill to reduce over‑attachment to career status.",
    11: "Let someone else lead the group once this week. Notice how it feels to step back, balancing ego with collaboration.",
    12: "Let one person see something you’re proud of, even privately. This prevents withdrawal and steadies the need for recognition with healthy sharing."
  },
  Virgo: {
    1: "Notice one thing you did well today before listing what needs fixing. This builds confidence and reduces constant self‑criticism.",
    2: "Eat or share green leafy vegetables on Wednesdays. This grounds energy and steadies worry about money or scarcity.",
    3: "Send the message once without re‑reading it a fourth time. This prevents endless editing and restores clarity in communication.",
    4: "Set a 15‑minute daily tidy limit. Enough for order, not endless polishing, so home stays calm without obsessive effort.",
    5: "Share unfinished creative work with one trusted person before it feels 'ready.' This breaks fear of imperfection and builds confidence in progress.",
    6: "Set a hard stop time for tasks. Virgo energy will polish forever unless a boundary is imposed, so deadlines protect health and efficiency.",
    7: "Before pointing out a flaw in the relationship, name one thing that’s working well first. This balances critique with appreciation and steadies harmony.",
    8: "When worst‑case thinking starts around shared finances, write down the most likely outcome instead. This reduces fear and restores perspective.",
    9: "Let one idea sit as 'good enough' without needing full precision before accepting it. This trains flexibility and reduces mental rigidity.",
    10: "Set a delivery deadline for yourself slightly earlier than the real one, then stop there. This prevents endless polishing and builds trust in timing.",
    11: "Act on one good social or income opportunity this week instead of analyzing all of them. This breaks paralysis and builds momentum.",
    12: "Say one self‑critical thought out loud to someone you trust instead of keeping it as an inner loop. This reduces hidden stress and restores balance."
  },
  Libra: {
    1: "State one honest opinion today, even a small one, without softening it first. This trains clarity and reduces indecision.",
    2: "Keep fresh flowers at home this week and set a monthly cap on comfort or aesthetic spending. This balances beauty with discipline.",
    3: "Say the direct thing once this week instead of the diplomatic version. This prevents avoidance and builds trust.",
    4: "Address one small home disagreement directly instead of letting it go unspoken. This steadies harmony without hiding tension.",
    5: "Name one red flag out loud to yourself instead of smoothing over the picture. This prevents romantic idealism from blocking clarity.",
    6: "Say no to one request this week that you’d normally accept just to keep things pleasant. This builds boundaries and reduces overload.",
    7: "Set a decision deadline for one open relationship question and commit to deciding by then. This breaks limbo and restores progress.",
    8: "Bring one joint financial decision to a close this month instead of leaving it open. This steadies shared resources and reduces stress.",
    9: "Take a clear stance on one belief this week instead of balancing between two sides. This strengthens conviction and reduces confusion.",
    10: "Write down your actual career direction preference, even if it’s not the popular choice. This prevents delay and clarifies ambition.",
    11: "Pick one opportunity to commit to fully this month and let the others go. This reduces scattered growth and builds momentum.",
    12: "Make one small uncomfortable choice this week instead of withdrawing from it. This trains courage and reduces avoidance."
  },

  Scorpio: {
    1: "Channel today’s frustration into 20 minutes of disciplined exercise instead of a conversation. This prevents eruptions and steadies intensity.",
    2: "Before an intense financial decision, wait until the emotion has passed, then decide. This reduces risk and stabilizes money choices.",
    3: "Pause before a provoked reply. Let the conversation cool before responding. This prevents escalation and protects bonds.",
    4: "Name one buried frustration to your household instead of letting it surface as sudden conflict. This steadies home life and reduces eruptions.",
    5: "Check in on jealousy or control urges by naming the underlying trust concern directly to your partner. This prevents hidden tension.",
    6: "Address workplace friction directly and early, before it escalates. This channels intensity into resolution instead of conflict.",
    7: "Notice a control impulse in partnership and name it out loud instead of acting on it. This prevents power struggles.",
    8: "Build a private outlet — writing, training, or a hobby — where intensity can be processed safely. This steadies emotions.",
    9: "Hold your belief privately for a day before arguing it publicly. This tests conviction and prevents alienation.",
    10: "Address frustration with authority through a written note first, not a spontaneous confrontation. This reduces clashes and steadies career growth.",
    11: "Slow down with a long‑term ally. Patience protects the alliance more than speed protects the gain.",
    12: "Name one private frustration to someone you trust rather than letting it surface as exhaustion. This prevents hidden anger."
  },

  Sagittarius: {
    1: "Apply a small pinch of sandalwood or turmeric paste to your forehead before an important task today. This steadies scattered energy.",
    2: "Before lending or spending generously, sleep on the amount for one night first. This prevents overconfidence in money.",
    3: "Only promise in conversation what you’ve already confirmed you can deliver. This prevents over‑promising.",
    4: "Give a current home or living situation six full months before deciding to move again. This steadies restlessness.",
    5: "Pick one project to finish this month before starting the next big idea. This reduces scattered creativity.",
    6: "Say no to one new responsibility this week that you don’t actually have room for. This prevents overload.",
    7: "Wait until you’ve followed through on one smaller promise before making a bigger commitment. This steadies relationships.",
    8: "Set a firm cap on shared‑resource risk‑taking and stick to it even when confident. This prevents financial strain.",
    9: "Test one belief against real experience this month rather than accepting it on faith. This grounds philosophy.",
    10: "Pick one career direction to focus on this quarter instead of chasing several at once. This builds depth.",
    11: "Follow through on one existing plan fully before pursuing a new networking lead. This steadies growth.",
    12: "Write down one 'someday' plan and give it an actual first step this week. This prevents drift."
  },

  Capricorn: {
    1: "Block one non‑negotiable hour today for rest — not admin, not planning, actual rest. This prevents burnout.",
    2: "Remind yourself of your actual savings number when scarcity anxiety rises, in writing. This steadies financial fear.",
    3: "Say one honest, undiplomatic sentence this week instead of holding it back out of fear of judgment. This strengthens clarity.",
    4: "Name one family responsibility you’re carrying and discuss sharing it with someone else. This reduces weight.",
    5: "Give yourself permission to enjoy one creative or romantic moment without it needing to be earned first. This restores joy.",
    6: "Treat one sign of illness or exhaustion as a stop signal, not something to push through. This protects health.",
    7: "Take one small, low‑stakes step toward commitment this month rather than waiting for full certainty. This breaks delay.",
    8: "Break down a shared financial transition into smaller milestones instead of one heavy process. This steadies progress.",
    9: "Test a new belief in a small, low‑risk way before deciding whether to accept or reject it. This opens growth.",
    10: "Consistency beats intensity for Capricorn; small daily discipline outperforms occasional pushes. This builds success.",
    11: "Track quiet, gradual progress somewhere visible so slow gains don’t feel invisible. This sustains motivation.",
    12: "Schedule actual rest on your calendar this week, as a fixed appointment you keep. This enforces balance."
  },

  Aquarius: {
    1: "Engage in one act of selfless service or community work this weekend. This balances detachment with connection.",
    2: "Review your finances with someone else once, so caution doesn’t become isolation. This steadies money decisions.",
    3: "Share one feeling, not just an idea, in a conversation this week. This reduces emotional distance.",
    4: "Say one warm, undemonstrative thing directly to a family member this week. This builds closeness.",
    5: "Let one creative or romantic moment be witnessed by someone else instead of kept private. This opens vulnerability.",
    6: "Notice one unaddressed personal need and act on it before it becomes a health issue. This prevents neglect.",
    7: "Have one conversation about commitment that centers feeling, not just logistics. This balances partnership.",
    8: "Process one difficult transition with a trusted person instead of managing it entirely alone. This reduces isolation.",
    9: "Test one new belief with an open mind before subjecting it to full scrutiny. This expands growth.",
    10: "Schedule one personal conversation at work this month, separate from professional matters. This restores balance.",
    11: "Schedule regular one‑on‑one time with people close to you. This strengthens intimacy beyond groups.",
    12: "Reach out to one person this week instead of defaulting to solitude. This prevents withdrawal."
  },

  Pisces: {
    1: "Meditate near water or practice five minutes of quiet stillness before bed tonight. This steadies emotions.",
    2: "Set a monthly giving limit so generosity doesn’t outpace your own security. This protects stability.",
    3: "Practice saying 'let me think about it' before agreeing to something just to avoid disappointing someone. This builds boundaries.",
    4: "Notice when a family member’s mood has become yours, and name the difference to yourself. This prevents emotional merging.",
    5: "Pause a romantic or creative decision for a day to build trust and see it more clearly before committing. This steadies clarity and builds confidence.",
    6: "Set one clear limit on how much of others’ work or problems you’ll take on this week. This protects health.",
    7: "Name a boundary in your partnership out loud instead of letting a line get crossed silently. This steadies love.",
    8: "Set a time limit on how long you’ll sit with someone else’s hidden struggle before stepping back. This prevents exhaustion.",
    9: "Pick one belief to sit with for a full month before drifting to the next. This grounds philosophy.",
    10: "Separate your professional responsibilities from others’ at work by naming the boundary clearly. This prevents overload."  ,
    11: "Notice a social relationship where empathy isn’t returned, and adjust the balance consciously. This restores fairness.",
    12: "Set clear emotional boundaries; Pisces energy needs structure to avoid being overwhelmed by others. This steadies strength."
  }

};

export function getPrimaryBottleneck(ascendantSign, rulerHouse) {
  return LIFELINE_PROBLEMS[ascendantSign]?.[rulerHouse] || null;
}

export function getLifelineRemedy(ascendantSign, rulerHouse) {
  return LIFELINE_REMEDIES[ascendantSign]?.[rulerHouse] || null;
}