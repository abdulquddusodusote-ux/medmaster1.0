// MedMaster – Complete Question Bank
// All questions inside one array

const questions = [
  // ===== GROSS ANATOMY – Osteology of Upper Limb =====
  // Clavicle
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Clavicle",
    type: "truefalse",
    question: "The clavicle articulates with the sternum at the sternoclavicular joint.",
    answer: true,
    explanation: "The clavicle connects to the sternum medially at the sternoclavicular joint, which is the only joint between the axial skeleton and the upper limb."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Clavicle",
    type: "truefalse",
    question: "The clavicle is a flat bone with a S-shaped curve.",
    answer: false,
    explanation: "The clavicle is a long bone, not flat. It has an S-shaped curvature."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Clavicle",
    type: "truefalse",
    question: "The clavicle is the only long bone that lies horizontally.",
    answer: true,
    explanation: "The clavicle is a long bone that is positioned horizontally at the root of the neck."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Clavicle",
    type: "truefalse",
    question: "The clavicle has two primary ossification centers.",
    answer: false,
    explanation: "The clavicle ossifies from two primary centers (medial and lateral) plus secondary centers; it is the first bone to ossify."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Clavicle",
    type: "truefalse",
    question: "The clavicle is absent in some individuals as a congenital anomaly.",
    answer: false,
    explanation: "Cleidocranial dysplasia can cause hypoplasia or aplasia of the clavicle, but it is rare."
  },

  // Scapula
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Scapula",
    type: "truefalse",
    question: "The scapula has a spine that ends at the acromion process.",
    answer: true,
    explanation: "The spine of the scapula terminates laterally at the acromion, which articulates with the clavicle."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Scapula",
    type: "truefalse",
    question: "The glenoid cavity is located on the anterior surface of the scapula.",
    answer: false,
    explanation: "The glenoid cavity is on the lateral (side) aspect of the scapula, not anterior. It faces laterally for articulation with the humerus."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Scapula",
    type: "truefalse",
    question: "The coracoid process is located on the posterior surface of the scapula.",
    answer: false,
    explanation: "The coracoid process is on the anterior surface, projecting forward from the superior border."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Scapula",
    type: "truefalse",
    question: "The scapula is a flat bone.",
    answer: true,
    explanation: "The scapula is a flat, triangular bone."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Scapula",
    type: "truefalse",
    question: "The supraspinous fossa is above the spine of the scapula.",
    answer: true,
    explanation: "The supraspinous fossa lies superior to the scapular spine and contains the supraspinatus muscle."
  },

  // Humerus
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Humerus",
    type: "truefalse",
    question: "The surgical neck of the humerus is a common site for fractures.",
    answer: true,
    explanation: "The surgical neck is just distal to the tubercles and is frequently fractured, especially in falls."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Humerus",
    type: "truefalse",
    question: "The capitulum is located on the medial side of the distal humerus.",
    answer: false,
    explanation: "The capitulum is on the lateral side; the trochlea is on the medial side."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Humerus",
    type: "truefalse",
    question: "The deltoid tuberosity is a prominent feature on the humerus.",
    answer: true,
    explanation: "The deltoid tuberosity on the lateral shaft is the insertion point for the deltoid muscle."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Humerus",
    type: "truefalse",
    question: "The anatomical neck is a common site of fracture.",
    answer: false,
    explanation: "The surgical neck is the common fracture site; the anatomical neck is less frequently fractured."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Humerus",
    type: "truefalse",
    question: "The radial groove is located on the anterior surface of the humerus.",
    answer: false,
    explanation: "The radial groove (spiral groove) is on the posterior surface and contains the radial nerve."
  },

  // Forearm
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Forearm",
    type: "truefalse",
    question: "The radius is the lateral bone of the forearm (thumb side).",
    answer: true,
    explanation: "The radius is on the lateral side (thumb side) of the forearm; the ulna is medial."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Forearm",
    type: "truefalse",
    question: "The olecranon process is part of the radius.",
    answer: false,
    explanation: "The olecranon is the bony prominence of the ulna at the elbow."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Forearm",
    type: "truefalse",
    question: "The interosseous membrane connects the radius and ulna.",
    answer: true,
    explanation: "The interosseous membrane is a fibrous sheet joining the radius and ulna throughout their length."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Forearm",
    type: "truefalse",
    question: "The ulna is the longer of the two forearm bones.",
    answer: true,
    explanation: "The ulna is slightly longer than the radius at the elbow."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Forearm",
    type: "truefalse",
    question: "The styloid process of the radius is more distal than that of the ulna.",
    answer: true,
    explanation: "The radial styloid is approximately 1 cm more distal than the ulnar styloid."
  },

  // Carpals
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Carpals",
    type: "truefalse",
    question: "There are 8 carpal bones in each wrist.",
    answer: true,
    explanation: "The carpus consists of 8 bones arranged in two rows."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Carpals",
    type: "truefalse",
    question: "The scaphoid is the most commonly fractured carpal bone.",
    answer: true,
    explanation: "Scaphoid fractures are common due to falls on an outstretched hand."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Carpals",
    type: "truefalse",
    question: "The pisiform is a carpal bone located in the proximal row.",
    answer: true,
    explanation: "The pisiform is a small sesamoid bone in the proximal row, on the ulnar side."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Carpals",
    type: "truefalse",
    question: "The trapezium is a carpal bone that articulates with the first metacarpal.",
    answer: true,
    explanation: "The trapezium forms a saddle joint with the first metacarpal."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Carpals",
    type: "truefalse",
    question: "The lunate is the most commonly dislocated carpal bone.",
    answer: true,
    explanation: "Lunate dislocations occur with fall on outstretched hand, often associated with perilunate dislocations."
  },

  // Metacarpals
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Metacarpals",
    type: "truefalse",
    question: "There are 5 metacarpal bones in each hand.",
    answer: true,
    explanation: "Each hand has 5 metacarpals, numbered I to V starting from the thumb."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Metacarpals",
    type: "truefalse",
    question: "The base of the metacarpal articulates with the phalanges.",
    answer: false,
    explanation: "The head of the metacarpal articulates with the proximal phalanx; the base articulates with the carpal bones."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Metacarpals",
    type: "truefalse",
    question: "The first metacarpal is the longest metacarpal.",
    answer: false,
    explanation: "The first metacarpal (thumb) is the shortest and most mobile."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Metacarpals",
    type: "truefalse",
    question: "The metacarpophalangeal joints are hinge joints.",
    answer: false,
    explanation: "They are condyloid joints, allowing flexion, extension, abduction, adduction, and circumduction."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Upper Limb",
    subTopic: "Metacarpals",
    type: "truefalse",
    question: "The 5th metacarpal is the most commonly fractured metacarpal.",
    answer: true,
    explanation: "Fracture of the 5th metacarpal neck (boxer's fracture) is common."
  },

  // ===== BIOCHEMISTRY – Carbohydrate Metabolism =====
  // Glycolysis
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "1. Glucose is the major monosaccharide obtained from the intestinal hydrolysis of dietary carbohydrate.",
    answer: true,
    explanation: "Dietary starch and sugars are broken down by amylases and brush‑border enzymes, and glucose is the predominant monosaccharide released for absorption."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "2. The brain, kidney medulla, and red blood cells are partially or totally dependent on glucose for ATP generation.",
    answer: true,
    explanation: "These tissues have limited or no mitochondria (RBCs) or cannot use fatty acids (brain); hence they rely heavily on glucose."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "3. Blood glucose level is maintained between 200‑250 mg/dL in healthy individuals.",
    answer: false,
    explanation: "The normal fasting range is 80–100 mg/dL; 200–250 mg/dL is hyperglycaemic and typical of uncontrolled diabetes."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "4. Glucose can be converted to fructose, mannose, and galactose.",
    answer: true,
    explanation: "Through epimerase and isomerase reactions, glucose serves as a precursor for other hexoses needed in glycoconjugates and metabolic pathways."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "5. Glucose is converted to fats through a process called lipogenesis.",
    answer: true,
    explanation: "Excess glucose is metabolised to acetyl‑CoA, which is used for fatty acid synthesis; this pathway is termed lipogenesis."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "6. Glycolysis is a series of reactions that converts glucose into pyruvate with concomitant trapping of energy as ATP.",
    answer: true,
    explanation: "Glycolysis oxidises glucose to pyruvate and captures free energy as ATP via substrate‑level phosphorylation."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "7. Glycolysis occurs exclusively in the mitochondria of all cells.",
    answer: false,
    explanation: "Glycolysis takes place in the cytosol because its enzymes are cytoplasmic; mitochondria are not involved until pyruvate enters."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "8. The net yield per glucose molecule in glycolysis is 2 ATP and 2 NADH.",
    answer: true,
    explanation: "Four ATP are produced but two are consumed in the energy‑investment phase, giving a net of 2 ATP, plus 2 NADH."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "9. The end product of glycolysis in cells with mitochondria and adequate oxygen supply is lactate.",
    answer: false,
    explanation: "With oxygen, pyruvate is the end product; it enters the TCA cycle. Lactate forms only when oxygen is lacking."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "10. Phosphofructokinase (PFK) is inhibited by ATP and this inhibition is reversed by AMP.",
    answer: true,
    explanation: "ATP signals high energy, so PFK slows glycolysis; AMP signals low energy, so it relieves inhibition to increase flux."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "11. Hexokinase is inhibited by glucose‑6‑phosphate.",
    answer: true,
    explanation: "Glucose‑6‑phosphate feedback‑inhibits hexokinase to prevent accumulation and wasteful phosphorylation when glucose is abundant."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "12. Pyruvate kinase is inhibited by fructose‑1,6‑bisphosphate.",
    answer: false,
    explanation: "Fructose‑1,6‑bisphosphate is a positive allosteric activator, not an inhibitor, promoting pyruvate kinase to drive glycolytic flux."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "13. High levels of citrate inhibit PFK.",
    answer: true,
    explanation: "Citrate is an intermediate of the TCA cycle; high citrate signals ample energy supply and slows glycolysis via PFK inhibition."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "14. PFK is inhibited by H⁺, hence the rate of glycolysis decreases when pH is very low.",
    answer: true,
    explanation: "Acidosis inhibits PFK, which prevents excessive lactate production and helps protect tissues from severe pH drops."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "15. All sugars ingested through dietary means or formed from catabolic reactions can be converted to glucose which eventually undergoes breakdown via glycolysis.",
    answer: true,
    explanation: "Fructose, galactose, and other sugars are channeled into glucose or glycolytic intermediates, making glycolysis the central hub."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "16. Pyruvate undergoes oxidative decarboxylation to acetyl CoA, which is a major fuel for the TCA cycle.",
    answer: true,
    explanation: "Pyruvate dehydrogenase converts pyruvate to acetyl‑CoA, which condenses with oxaloacetate to enter the TCA cycle."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "17. Glycolysis is an ancient process central to all life.",
    answer: true,
    explanation: "Glycolysis evolved early and is conserved across organisms because it generates ATP without oxygen."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "18. Under anaerobic conditions, glucose is metabolized to lactate in a process that is energetically inefficient but produces energy.",
    answer: true,
    explanation: "Lactate formation regenerates NAD⁺, allowing glycolysis to continue, but yields only 2 ATP per glucose."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "19. Alcoholic fermentation occurs in yeast cells and involves the decarboxylation of pyruvate by pyruvate decarboxylase.",
    answer: true,
    explanation: "Yeast pyruvate decarboxylase removes CO₂ from pyruvate to form acetaldehyde, the first step of alcoholic fermentation."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycolysis",
    type: "truefalse",
    question: "20. The reduction of acetaldehyde to ethanol is catalyzed by alcohol dehydrogenase and requires NADH.",
    answer: true,
    explanation: "Alcohol dehydrogenase uses NADH to reduce acetaldehyde to ethanol, regenerating NAD⁺ for glycolysis."
  },

  // TCA Cycle
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "TCA Cycle",
    type: "truefalse",
    question: "21. The most common fate of the two pyruvates is to enter the TCA cycle as acetyl CoA.",
    answer: true,
    explanation: "In aerobic tissues, pyruvate is oxidatively decarboxylated to acetyl‑CoA, which enters the TCA cycle for complete oxidation."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "TCA Cycle",
    type: "truefalse",
    question: "22. Citrate synthase catalyzes the reaction between acetyl‑CoA and oxaloacetate to form citrate.",
    answer: true,
    explanation: "This is the first committed step of the TCA cycle, where a C‑C bond forms between acetyl‑CoA and oxaloacetate."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "TCA Cycle",
    type: "truefalse",
    question: "23. Aconitase catalyzes the isomerization of isocitrate to citrate.",
    answer: false,
    explanation: "Aconitase catalyses the reverse: citrate is isomerized to isocitrate, not the other way around."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "TCA Cycle",
    type: "truefalse",
    question: "24. Succinate thiokinase catalyzes the only substrate‑level phosphorylation in the TCA cycle.",
    answer: true,
    explanation: "This enzyme generates GTP (or ATP) directly from succinyl‑CoA, the only site where the TCA cycle makes a high‑energy phosphate bond."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "TCA Cycle",
    type: "truefalse",
    question: "25. Malate dehydrogenase catalyzes the conversion of malate to oxaloacetate.",
    answer: true,
    explanation: "This is the final oxidation step of the TCA cycle, producing NADH and regenerating oxaloacetate for the next cycle."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "TCA Cycle",
    type: "truefalse",
    question: "26. The TCA cycle occurs aerobically in the mitochondria of the cell.",
    answer: true,
    explanation: "The TCA cycle is mitochondrial and requires oxygen indirectly because the NADH and FADH₂ produced must be re‑oxidised by the ETC."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "TCA Cycle",
    type: "truefalse",
    question: "27. The TCA cycle is the final common pathway for the aerobic oxidation of carbohydrate, lipid, and protein.",
    answer: true,
    explanation: "Acetyl‑CoA from all fuel types enters the TCA cycle, making it the shared oxidative route."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "TCA Cycle",
    type: "truefalse",
    question: "28. The enzymes of the citric acid cycle are located in the mitochondrial matrix, either free or attached to the inner mitochondrial membrane.",
    answer: true,
    explanation: "Most enzymes are matrix‑soluble, except succinate dehydrogenase which is membrane‑bound."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "TCA Cycle",
    type: "truefalse",
    question: "29. The TCA cycle generates 2 ATP and 16 H⁺ per turn.",
    answer: true,
    explanation: "One turn produces 3 NADH, 1 FADH₂, and 1 GTP; the electron transport chain uses these to pump 16 H⁺ and generate ATP."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "TCA Cycle",
    type: "truefalse",
    question: "30. Reoxidation of each NADH results in formation of 3 ATP and reoxidation of FADH₂ results in formation of 2 ATP.",
    answer: true,
    explanation: "NADH feeds electrons earlier in the ETC (complex I), producing more protons; FADH₂ enters later (complex II), yielding fewer ATP."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "TCA Cycle",
    type: "truefalse",
    question: "31. Impaired functioning of the TCA cycle can occur if oxygen is not available to accept electrons in the ETC.",
    answer: true,
    explanation: "Without oxygen, NADH and FADH₂ cannot be re‑oxidised, causing the cycle to stall due to lack of NAD⁺ and FAD."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "TCA Cycle",
    type: "truefalse",
    question: "32. Accumulation of TCA cycle precursors due to inhibition of pyruvate oxidation results in its reduction to lactate, which accumulates to cause lactic acidosis.",
    answer: true,
    explanation: "When pyruvate cannot enter the TCA cycle, it is shunted to lactate, raising blood lactate and causing acidosis."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "TCA Cycle",
    type: "truefalse",
    question: "33. The TCA cycle is an amphibolic pathway serving as both a source of precursors for biosynthesis and oxidizing carbon fuels.",
    answer: true,
    explanation: "It is catabolic (fuel oxidation) and anabolic (providing intermediates for amino acids, haem, etc.)."
  },

  // Gluconeogenesis
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Gluconeogenesis",
    type: "truefalse",
    question: "34. Gluconeogenesis is the synthesis of new glucose molecules from non‑carbohydrate substrates such as lactate, amino acids, and lipids.",
    answer: true,
    explanation: "Lipids (glycerol) can contribute, but fatty acids cannot be converted to glucose because they yield only acetyl‑CoA."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Gluconeogenesis",
    type: "truefalse",
    question: "35. Gluconeogenesis occurs mainly in the cytoplasm and partly in the mitochondria.",
    answer: true,
    explanation: "Pyruvate carboxylase is mitochondrial; most other enzymes are cytosolic, so the pathway spans both compartments."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Gluconeogenesis",
    type: "truefalse",
    question: "36. Gluconeogenesis is largely the reverse of glycolysis, but some enzymes are used to bypass irreversible reactions in glycolysis.",
    answer: true,
    explanation: "Three glycolytic steps (hexokinase, PFK, pyruvate kinase) are irreversible and are bypassed by different gluconeogenic enzymes."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Gluconeogenesis",
    type: "truefalse",
    question: "37. Gluconeogenesis begins with various substrates converted into pyruvate.",
    answer: true,
    explanation: "Lactate, alanine, and glycerol enter the pathway as pyruvate or via gluconeogenic intermediates before forming glucose."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Gluconeogenesis",
    type: "truefalse",
    question: "38. Pyruvate is carboxylated to oxaloacetate by pyruvate carboxylase in mitochondria.",
    answer: true,
    explanation: "This is the first bypass reaction, requiring biotin and ATP to add CO₂ to pyruvate."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Gluconeogenesis",
    type: "truefalse",
    question: "39. Oxaloacetate is decarboxylated and phosphorylated to yield phosphoenolpyruvate (PEP), catalyzed by PEP carboxykinase in the cytosol.",
    answer: true,
    explanation: "This is the second bypass, requiring GTP and releasing CO₂ to form PEP from oxaloacetate."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Gluconeogenesis",
    type: "truefalse",
    question: "40. Fructose‑1,6‑bisphosphate is converted to fructose‑6‑phosphate by fructose‑1,6‑bisphosphatase.",
    answer: true,
    explanation: "This is the third bypass, removing a phosphate to reverse the PFK step of glycolysis."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Gluconeogenesis",
    type: "truefalse",
    question: "41. Glucose is formed from glucose‑6‑phosphate by glucose‑6‑phosphatase.",
    answer: true,
    explanation: "This enzyme hydrolyses glucose‑6‑phosphate to free glucose, which can be released into the bloodstream."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Gluconeogenesis",
    type: "truefalse",
    question: "42. The Cori cycle involves lactate released by active skeletal muscle or red blood cells being carried to the liver and converted to glucose.",
    answer: true,
    explanation: "This cycle recycles lactate to glucose in the liver, returning glucose to muscle for energy."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Gluconeogenesis",
    type: "truefalse",
    question: "43. During fasting and starvation, when liver stores of glycogen are depleted, most amino acids undergo a series of reactions to give glucose.",
    answer: true,
    explanation: "Glucogenic amino acids provide carbon skeletons for gluconeogenesis to maintain blood glucose."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Gluconeogenesis",
    type: "truefalse",
    question: "44. The glucose‑alanine cycle involves amino acids converted to alanine and released by skeletal muscle, and the liver converts alanine to glucose.",
    answer: true,
    explanation: "This cycle transports amino groups and carbon to the liver for gluconeogenesis while preventing ammonia toxicity."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Gluconeogenesis",
    type: "truefalse",
    question: "45. Gluconeogenesis is regulated by hormones including glucagon, cortisol, adrenaline, and insulin.",
    answer: true,
    explanation: "Glucagon, cortisol, and adrenaline stimulate gluconeogenesis; insulin inhibits it to prevent excessive glucose production."
  },

  // Glycogen Metabolism
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycogen Metabolism",
    type: "truefalse",
    question: "46. Glycogenesis is the synthesis of glycogen from glucose.",
    answer: true,
    explanation: "Glucose is phosphorylated, activated to UDP‑glucose, and then added to growing glycogen chains by glycogen synthase."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycogen Metabolism",
    type: "truefalse",
    question: "47. Glycogen is a polysaccharide made up of glucose.",
    answer: true,
    explanation: "Glycogen is a branched homopolymer of α‑D‑glucose units linked by α‑1,4 and α‑1,6 bonds."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycogen Metabolism",
    type: "truefalse",
    question: "48. Glycogen is stored mostly in the liver and muscle.",
    answer: true,
    explanation: "Liver glycogen (about 7% of liver weight) and muscle glycogen are the two major storage sites."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycogen Metabolism",
    type: "truefalse",
    question: "49. The main function of liver glycogen is to provide glucose to other cells and maintain blood glucose level.",
    answer: true,
    explanation: "Liver glycogen is broken down to free glucose and released into the blood to maintain systemic levels."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycogen Metabolism",
    type: "truefalse",
    question: "50. Glycogen is a highly branched polysaccharide with both α‑1,4‑ and α‑1,6‑glycosidic bonds.",
    answer: true,
    explanation: "The α‑1,4 bonds form linear chains, while α‑1,6 bonds create branch points every 8–12 residues."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycogen Metabolism",
    type: "truefalse",
    question: "51. Hepatic glycogenolysis maintains the blood glucose level.",
    answer: true,
    explanation: "Liver glycogenolysis produces free glucose via glucose‑6‑phosphatase, which is essential for blood glucose homeostasis."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycogen Metabolism",
    type: "truefalse",
    question: "52. Muscle glycogenolysis provides energy to the muscle.",
    answer: true,
    explanation: "Muscle glycogen is broken down to glucose‑6‑phosphate and used for glycolysis within the muscle, not released into blood."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycogen Metabolism",
    type: "truefalse",
    question: "53. Glycogen phosphorylase is the regulatory enzyme of glycogenolysis.",
    answer: true,
    explanation: "It catalyses the rate‑limiting step (phosphorolysis) and is controlled by phosphorylation and allosteric effectors."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycogen Metabolism",
    type: "truefalse",
    question: "54. Glycogen phosphorylase activity is activated by insulin and inhibited by glucagon.",
    answer: false,
    explanation: "Glucagon and adrenaline activate glycogen phosphorylase; insulin inhibits it, promoting glycogen storage instead."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycogen Metabolism",
    type: "truefalse",
    question: "55. In glycogenolysis, glucose molecules are removed from the end of the glycogen chain by glycogen phosphorylase to yield glucose‑1‑phosphate.",
    answer: true,
    explanation: "Phosphorylase cleaves α‑1,4 bonds using inorganic phosphate, releasing glucose‑1‑phosphate without consuming ATP."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycogen Metabolism",
    type: "truefalse",
    question: "56. Only cells in the liver and kidneys have glucose‑6‑phosphatase that hydrolyses glucose‑6‑phosphate to yield free glucose.",
    answer: true,
    explanation: "This enzyme is absent in muscle and brain, so they cannot release free glucose into the bloodstream."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Glycogen Metabolism",
    type: "truefalse",
    question: "57. A debranching enzyme (α‑1,6‑glycosidase) breaks α‑1,6‑glycosidic bonds during glycogenolysis.",
    answer: true,
    explanation: "After phosphorylase reaches four residues from a branch point, the debranching enzyme transfers residues and hydrolyses the α‑1,6 bond."
  },

  // Pentose Phosphate Pathway
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "58. The hexose monophosphate pathway is a metabolic pathway parallel to glycolysis.",
    answer: true,
    explanation: "It branches from glucose‑6‑phosphate and runs alongside glycolysis, producing NADPH and pentoses."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "59. The PPP generates NADPH for the synthesis of fatty acids and steroids.",
    answer: true,
    explanation: "NADPH is the reducing power required for reductive biosynthesis of lipids, including fatty acids and cholesterol."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "60. The PPP generates NADPH for maintaining reduced glutathione for antioxidant activity.",
    answer: true,
    explanation: "NADPH keeps glutathione reduced, which neutralizes reactive oxygen species and protects cells from oxidative damage."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "61. The PPP synthesizes ribose and pentoses for nucleotide and nucleic acid formation.",
    answer: true,
    explanation: "Ribose‑5‑phosphate produced in the PPP is essential for RNA, DNA, ATP, and coenzyme synthesis."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "62. Glucose‑6‑phosphate is oxidized to 6‑phosphogluconolactone catalyzed by glucose‑6‑phosphate dehydrogenase.",
    answer: true,
    explanation: "G6PD catalyses the first committed oxidative step, producing NADPH and a lactone."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "63. 6‑Phosphogluconolactone is hydrolyzed to 6‑phosphogluconate catalyzed by gluconolactonase.",
    answer: true,
    explanation: "Gluconolactonase opens the lactone ring to form 6‑phosphogluconate, preparing it for further oxidation."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "64. 6‑Phosphogluconate undergoes decarboxylation and oxidation to form ribulose‑5‑phosphate catalyzed by 6‑phosphogluconate dehydrogenase.",
    answer: true,
    explanation: "This oxidative decarboxylation generates the second NADPH and produces a pentose phosphate."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "65. Both steps in the oxidative phase require NAD⁺ as a hydrogen acceptor.",
    answer: false,
    explanation: "NADP⁺ is the hydrogen acceptor in both oxidative steps; NAD⁺ is used in glycolysis and the TCA cycle."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "66. Ribulose‑5‑phosphate ketoisomerase converts ribulose‑5‑phosphate to ribose‑5‑phosphate.",
    answer: true,
    explanation: "This isomerase rearranges the ketose to an aldose, yielding ribose‑5‑phosphate for nucleotide synthesis."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "67. Ribulose‑5‑phosphate 3‑epimerase alters the configuration of ribulose‑5‑phosphate to xylulose‑5‑phosphate.",
    answer: true,
    explanation: "The epimerase changes the stereochemistry at carbon‑3 to produce xylulose‑5‑phosphate."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "68. Transketolase catalyzes the reaction between xylulose‑5‑phosphate and ribose‑5‑phosphate to give glyceraldehyde‑3‑phosphate and sedoheptulose‑7‑phosphate.",
    answer: true,
    explanation: "Transketolase transfers a two‑carbon unit, creating intermediates that can re‑enter glycolysis."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "69. Transaldolase acts on glyceraldehyde‑3‑phosphate and sedoheptulose‑7‑phosphate to give fructose‑6‑phosphate and erythrose‑4‑phosphate.",
    answer: true,
    explanation: "Transaldolase transfers a three‑carbon unit, rearranging carbon skeletons in the non‑oxidative phase."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "70. The regulatory enzymes of the pentose phosphate pathway are glucose‑6‑phosphate dehydrogenase and 6‑phosphogluconate dehydrogenase, and these enzymes are induced by insulin in humans.",
    answer: true,
    explanation: "Insulin upregulates these enzymes to support lipogenesis and other NADPH‑requiring synthetic processes."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "71. The oxidative phase of PPP is controlled by NADPH, and the non‑oxidative phase is controlled by pentoses.",
    answer: true,
    explanation: "High NADPH inhibits G6PD; excess pentose phosphates drive the non‑oxidative phase toward glycolytic intermediates."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "72. The PPP generates 3,4,5,6,7 carbon compounds which are precursors for other molecules.",
    answer: true,
    explanation: "Intermediates like erythrose‑4‑phosphate (4C) and sedoheptulose‑7‑phosphate (7C) are used in biosynthesis."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "73. The PPP is necessary for the detoxification of cells.",
    answer: true,
    explanation: "NADPH is required for glutathione reduction, which detoxifies hydrogen peroxide and free radicals."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "74. G6PD deficiency is an inherited disease characterized by hemolytic anemia caused by the inability to detoxify oxidizing agents.",
    answer: true,
    explanation: "Without NADPH, red blood cells cannot maintain glutathione, so oxidants damage haemoglobin and cause haemolysis."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "75. G6PD deficiency is the most common disease‑producing enzyme abnormality in humans.",
    answer: true,
    explanation: "It affects millions worldwide, especially in malaria‑endemic regions, making it the most prevalent enzymopathy."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "76. Diminished G6PD activity impairs the ability of the cell to form NADPH essential for maintenance of the reduced glutathione pool.",
    answer: true,
    explanation: "G6PD is the main source of NADPH in RBCs; low NADPH → low reduced glutathione → oxidative damage."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "77. Favism is a hemolytic effect observed after consumption of fava beans in some forms of G6PD deficiency.",
    answer: true,
    explanation: "Fava beans contain oxidants that trigger haemolysis in susceptible G6PD‑deficient individuals."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "78. Commonly used drugs that produce hemolytic anemia in patients with G6PD deficiency include antibiotics, antimalarials like primaquine, and sulfonamides.",
    answer: true,
    explanation: "These drugs generate oxidative stress, which cannot be neutralized in G6PD‑deficient red cells."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Pentose Phosphate Pathway",
    type: "truefalse",
    question: "79. Infection in G6PD deficiency leads to hemolysis because the inflammatory response results in generation of free radicals in macrophages.",
    answer: true,
    explanation: "Activated macrophages release reactive oxygen species, which can leak and damage G6PD‑deficient erythrocytes."
  },

  // Integration & Diabetes
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Integration & Diabetes",
    type: "truefalse",
    question: "80. Glycolysis, gluconeogenesis, glycogenesis, glycogenolysis, and the pentose phosphate pathway are metabolic pathways that manage glucose homeostasis, energy production, and biosynthesis.",
    answer: true,
    explanation: "These pathways are interconnected and coordinated to balance fuel supply, storage, and synthetic needs."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Integration & Diabetes",
    type: "truefalse",
    question: "81. These pathways are regulated by hormonal (insulin, glucagon) and energetic (ATP/AMP) signals to maintain blood glucose stability.",
    answer: true,
    explanation: "Hormones and energy status adjust enzyme activities to keep blood glucose within the normal range."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Integration & Diabetes",
    type: "truefalse",
    question: "82. Glucose‑6‑phosphate acts as the central intersection of all five pathways.",
    answer: true,
    explanation: "G6P is the branch point: it can enter glycolysis, PPP, glycogenesis, or be released from glycogenolysis."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Integration & Diabetes",
    type: "truefalse",
    question: "83. Glycogenesis and glycogenolysis are opposing processes.",
    answer: true,
    explanation: "Glycogenesis builds glycogen, while glycogenolysis breaks it down; they are reciprocally regulated."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Integration & Diabetes",
    type: "truefalse",
    question: "84. Glycolysis breaks down glucose to pyruvate, generating ATP and NADH.",
    answer: true,
    explanation: "ATP is captured by substrate‑level phosphorylation, and NADH is produced during the oxidative step."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Integration & Diabetes",
    type: "truefalse",
    question: "85. Gluconeogenesis synthesizes glucose from non‑carbohydrate sources to reverse glycolysis during starvation.",
    answer: true,
    explanation: "When glycogen is depleted, gluconeogenesis produces glucose from lactate, glycerol, and amino acids."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Integration & Diabetes",
    type: "truefalse",
    question: "86. The pentose phosphate pathway generates ATP for anabolic reactions.",
    answer: false,
    explanation: "The PPP produces NADPH and pentoses, not ATP; it is not an energy‑generating pathway."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Integration & Diabetes",
    type: "truefalse",
    question: "87. Diabetes mellitus refers to a group of diseases that affect how the body uses blood sugar (glucose).",
    answer: true,
    explanation: "Diabetes is a disorder of glucose homeostasis, leading to hyperglycaemia due to insulin deficiency or resistance."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Integration & Diabetes",
    type: "truefalse",
    question: "88. Type 1 diabetes and type 2 diabetes are chronic diabetes conditions.",
    answer: true,
    explanation: "Both are long‑term conditions; type 1 is autoimmune, type 2 is mainly lifestyle‑related."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Integration & Diabetes",
    type: "truefalse",
    question: "89. Prediabetes and gestational diabetes are potentially reversible diabetes conditions.",
    answer: true,
    explanation: "Prediabetes can normalize with lifestyle changes; gestational diabetes usually resolves after delivery."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Integration & Diabetes",
    type: "truefalse",
    question: "90. Signs and symptoms of diabetes include increased thirst, frequent urination, extreme hunger, and unexplained weight loss.",
    answer: true,
    explanation: "High blood glucose causes osmotic diuresis, cellular dehydration, and energy loss, producing these classic symptoms."
  },

  // Metabolic Disorders
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Metabolic Disorders",
    type: "truefalse",
    question: "91. Galactosemia is caused by a deficiency of the enzyme galactokinase and galactose‑1‑phosphate uridylyl transferase (GALT).",
    answer: true,
    explanation: "Deficiency of either enzyme leads to toxic accumulation of galactose or its metabolites."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Metabolic Disorders",
    type: "truefalse",
    question: "92. Hereditary fructose intolerance is caused by a mutation in the ALDOB gene needed to make aldolase B enzyme.",
    answer: true,
    explanation: "Aldolase B deficiency prevents fructose‑1‑phosphate cleavage, causing accumulation and tissue damage."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Metabolic Disorders",
    type: "truefalse",
    question: "93. Lactose intolerance is caused by deficiency of lactase, leading to accumulation of lactose in the intestinal tract.",
    answer: true,
    explanation: "Unabsorbed lactose draws water osmotically and is fermented by bacteria, causing diarrhoea and gas."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Metabolic Disorders",
    type: "truefalse",
    question: "94. Congenital sucrase‑isomaltase deficiency (CSID) is characterized by deficiency of sucrase and isomaltase in the small intestine.",
    answer: true,
    explanation: "Lack of these enzymes prevents digestion of sucrose and maltose, causing osmotic diarrhoea."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Metabolic Disorders",
    type: "truefalse",
    question: "95. Von Gierke's disease (Type I) is caused by deficiency of glucose‑6‑phosphatase and is characterized by fasting hypoglycemia.",
    answer: true,
    explanation: "Without glucose‑6‑phosphatase, the liver cannot release glucose from glycogen or gluconeogenesis, causing severe hypoglycaemia."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Metabolic Disorders",
    type: "truefalse",
    question: "96. Pompe's disease (Type II) is caused by deficiency of lysosomal maltase (α‑1,4 glucosidase).",
    answer: true,
    explanation: "Lysosomal glycogen accumulates because it cannot be degraded, leading to muscle weakness and cardiomyopathy."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Metabolic Disorders",
    type: "truefalse",
    question: "97. McArdle's disease (Type V) is caused by deficiency of liver phosphorylase.",
    answer: false,
    explanation: "McArdle's is due to muscle glycogen phosphorylase deficiency, causing exercise‑induced muscle cramps, not liver phosphorylase."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Metabolic Disorders",
    type: "truefalse",
    question: "98. Cori's disease (Type III) is caused by deficiency of the debranching enzyme.",
    answer: true,
    explanation: "Without the debranching enzyme, glycogenolysis halts at limit dextrins, causing mild hypoglycaemia."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Metabolic Disorders",
    type: "truefalse",
    question: "99. Hypoglycemia is a condition in which blood glucose level falls below 45 mg/dL.",
    answer: true,
    explanation: "This is the defined threshold; below this, neuroglycopenic symptoms appear due to inadequate brain fuel."
  },
  {
    course: "Biochemistry",
    topic: "Carbohydrate Metabolism",
    subTopic: "Metabolic Disorders",
    type: "truefalse",
    question: "100. Postprandial hypoglycemia is observed with elevated insulin secretion following a meal.",
    answer: true,
    explanation: "Excessive insulin release after eating drives glucose into cells too rapidly, causing a fall in blood glucose."
  },

  // ===== GROSS ANATOMY – OSTEOLOGY OF LOWER LIMB =====
  // Hip Bone
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The lower limb buds rotate laterally through 90° during early development, while the upper limb buds rotate medially through 90°.",
    answer: false,
    explanation: "The lower limb buds rotate medially through 90°, so the preaxial/tibial border faces medially and the extensor surface faces forwards. The upper limb buds rotate laterally through 90°."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The antigravity muscles are better developed in the lower limb than in the upper limb because they must lift the whole body up during attaining erect posture and walking up the staircase.",
    answer: true,
    explanation: "The gluteus maximus (hip extensor), quadriceps femoris (knee extensor), and gastrocnemius/soleus (plantar flexors) have extensive origins and large fleshy bellies to support the body's weight."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The postaxial bone or fibula of the leg takes part in the formation of the knee joint.",
    answer: false,
    explanation: "The fibula does not take part in the formation of the knee joint. The patella articulates with the lower end of the femur anteriorly and takes part in the formation of the knee joint."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The great toe in humans has lost its power of opposition and has become enlarged to become the principal support of the body.",
    answer: true,
    explanation: "In humans, the foot changed from a grasping to a supporting organ. The great toe comes in line with other toes, loses opposition power, and enlarges to become the principal support of the body."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The hip bone is made up of three elements: ilium, pubis, and ischium, which are fused at the pubic symphysis.",
    answer: false,
    explanation: "The three elements (ilium, pubis, ischium) are fused at the acetabulum, not the pubic symphysis. The pubic symphysis is the articulation between the two hip bones anteriorly."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The acetabulum is directed medially, upwards, and forwards.",
    answer: false,
    explanation: "The acetabulum is directed laterally, downwards, and forwards. It is a deep cup-shaped hemispherical cavity on the lateral aspect of the hip bone."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The obturator foramen is completely closed by bone except for the obturator groove.",
    answer: false,
    explanation: "The obturator foramen is closed by the obturator membrane (not bone) attached to its margins, except at the obturator groove where the obturator vessels and nerve pass out of the pelvis."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The adult hip bone ossifies completely by the 20th-25th year.",
    answer: true,
    explanation: "Ossification in the acetabulum is complete at the 16th-17th year, and the rest of the bone is ossified by the 20th-25th year."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The ilium, ischium, and pubis are joined by hyaline cartilage at birth and begin to fuse between 15 and 17 years of age.",
    answer: true,
    explanation: "At birth, the three primary bones are joined by hyaline cartilage. The bones begin to fuse between 15 and 17 years of age, with complete fusion between 20 and 25 years."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The ischial tuberosity is divided by a longitudinal ridge into an upper and lower area.",
    answer: false,
    explanation: "The ischial tuberosity is divided by a transverse ridge into an upper and lower area. The upper area is subdivided by an oblique ridge, and the lower area by a longitudinal ridge."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The medial lip of the iliac crest gives origin to the transversus abdominis in its posterior two-thirds.",
    answer: false,
    explanation: "The inner lip of the iliac crest gives origin to the transversus abdominis in its anterior two-thirds, not posterior two-thirds."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The capsular ligament of the hip joint is attached along the margin of the acetabulum.",
    answer: true,
    explanation: "The capsular ligament of the hip joint is attached along the margin of the acetabulum, as stated in the attachments section of the ilium."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The obturator groove on the superior ramus of the pubis transmits the obturator vessels and nerve.",
    answer: true,
    explanation: "The obturator groove on the superior ramus of the pubis transmits the obturator vessels and nerve out of the pelvis."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The iliac crest is used for taking bone marrow biopsy in cases of anemia or leukemia.",
    answer: true,
    explanation: "The iliac crest is used for taking bone marrow biopsy in cases of anemia or leukemia, as stated in the clinical anatomy section."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The piriformis muscle arises from the pelvic surface of the ilium lateral to the preauricular sulcus.",
    answer: false,
    explanation: "The part of the pelvic surface lateral to the preauricular sulcus gives origin to a few fibres of the piriformis, but the statement is incomplete. The piriformis also arises from the upper margin of the greater sciatic notch."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The anterior gluteal line begins about 4 cm behind the posterior superior iliac spine.",
    answer: false,
    explanation: "The posterior gluteal line begins 5 cm in front of the posterior superior iliac spine. The anterior gluteal line begins about 4 cm behind the anterior superior iliac spine, not the PSIS."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The gluteus medius arises from the area between the anterior and posterior gluteal lines.",
    answer: true,
    explanation: "The gluteus medius arises from the area between the anterior and posterior gluteal lines on the gluteal surface of the ilium."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The anterior gluteal line is the longest of the three gluteal lines on the ilium.",
    answer: false,
    explanation: "The anterior gluteal line is the longest. The posterior gluteal line is the shortest of the three gluteal lines."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The pectineal line of the pubis provides attachment to the pectineus muscle.",
    answer: true,
    explanation: "The pectineus muscle arises from the whole length of the pectineal line (pecten pubis), as shown in Fig. 2.3."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "truefalse",
    question: "The anterior superior iliac spine gives origin to the sartorius muscle.",
    answer: true,
    explanation: "The anterior superior iliac spine gives origin to the sartorius muscle; the origin extends onto the upper half of the notch below the spine."
  },

  // Femur
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The linea aspera of the femur has distinct medial and lateral lips.",
    answer: true,
    explanation: "The linea aspera is a broad roughened ridge on the posterior border of the femur and has distinct medial and lateral lips in the middle one-third of the shaft."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The fovea on the head of the femur provides attachment to the ligamentum teres or ligament of the head of femur.",
    answer: true,
    explanation: "The fovea is a roughened pit situated just below and behind the centre of the head of the femur, providing attachment to the ligament of the head of femur (ligamentum teres)."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The angle of inclination between the femoral neck and shaft is about 125° in adults and is greater in females due to their wider pelvis.",
    answer: false,
    explanation: "The neck-shaft angle is about 125° in adults, but it is less in females due to their wider pelvis (as stated in the text: 'It is less in females due to their wider pelvis')."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The bicipital groove of the humerus is homologous to the intertrochanteric line of the femur.",
    answer: false,
    explanation: "This is not stated in the provided text. The text discusses homology between lower and upper limb bones (tibia/radius, fibula/ulna) but does not make this specific comparison."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The piriformis is inserted into the apex of the greater trochanter of the femur.",
    answer: true,
    explanation: "The piriformis is inserted into the apex (inturned posterior part of the posterior border) of the greater trochanter of the femur."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The neck of the femur represents the upper end of the shaft because it ossifies from the secondary centre.",
    answer: false,
    explanation: "The neck represents the upper end of the shaft because it ossifies from the primary centre, not the secondary centre. The text states: 'The neck represents the upper end of the shaft because it ossifies from the primary centre.'"
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The nutrient foramen of the femur is located on the lateral side of the linea aspera and is directed upwards.",
    answer: false,
    explanation: "The nutrient foramen of the femur is located on the medial side of the linea aspera and is directed upwards (the 'medial side' part is correct, but it's on the medial side, not lateral)."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The hamstring part of adductor magnus is inserted into the adductor tubercle of the femur.",
    answer: true,
    explanation: "The adductor tubercle receives the insertion of the hamstring part or the ischial head of the adductor magnus."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The medial intermuscular septum of the thigh is attached to the lateral lip of the linea aspera.",
    answer: false,
    explanation: "The medial and lateral intermuscular septa are attached to the lips of the linea aspera and supracondylar lines. The medial septum attaches to the medial lip, and the lateral septum attaches to the lateral lip."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The angle of femoral torsion or angle of anteversion is about 15° in adults.",
    answer: true,
    explanation: "The angle of femoral torsion or angle of anteversion is formed between the transverse axes of the upper and lower ends of the femur and is about 15° in adults."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The pectineus muscle is inserted on a line extending from the lesser trochanter to the linea aspera of the femur.",
    answer: true,
    explanation: "The pectineus is inserted on a line extending from the lesser trochanter to the linea aspera, as stated in the attachments section of the femur."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The obturator externus is inserted into the trochanteric fossa of the femur.",
    answer: true,
    explanation: "The obturator externus is inserted into the trochanteric fossa, which is a deep depression on the medial surface of the greater trochanter below the rough impression."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The lateral epicondyle of the femur is more prominent than the medial epicondyle.",
    answer: false,
    explanation: "The medial epicondyle is larger and more prominent than the lateral epicondyle. The medial condyle is also more prominent than the lateral condyle."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The articular surface of the lateral condyle of the femur is shorter and straighter anteroposteriorly than that of the medial condyle.",
    answer: true,
    explanation: "The part of the articular surface over the lateral condyle is short and straight anteroposteriorly. The part over the medial condyle is longer and curved with its convexity directed medially."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The linea aspera of the femur is supported by a bony buttress to resist stresses including body weight.",
    answer: true,
    explanation: "The concavity of the neck-shaft angle is strengthened by the calcar femorale, and the linea aspera is also supported by another buttress to resist stresses including body weight."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The epiphyseal line for the lower end of the femur passes through the adductor tubercle.",
    answer: true,
    explanation: "The epiphyseal line for the lower end of the femur passes through the adductor tubercle, which is an important landmark."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The epiphyseal line of the head of the femur coincides with the articular margins completely around the head.",
    answer: false,
    explanation: "The epiphyseal line of the head coincides with the articular margins, except superiorly where a part of the non-articular area is included in the epiphysis for passage of blood vessels to the head."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The adductor longus is inserted into the lateral lip of the linea aspera of the femur.",
    answer: false,
    explanation: "The adductor longus is inserted along the medial lip of the linea aspera between the vastus medialis and the adductors brevis and magnus."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The gluteus minimus is inserted into the rough lateral part of the anterior surface of the greater trochanter.",
    answer: true,
    explanation: "The gluteus minimus is inserted into the rough lateral part of the anterior surface of the greater trochanter of the femur."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The intertrochanteric crest is a prominent roughened ridge on the anterior surface of the femur.",
    answer: false,
    explanation: "The intertrochanteric crest is a smooth-rounded ridge on the posterior surface of the femur, marking the junction of the posterior surface of the neck with the shaft. The intertrochanteric line is the prominent roughened ridge on the anterior surface."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The primary centre for ossification of the femur shaft appears in the seventh week of intrauterine life.",
    answer: true,
    explanation: "The primary centre for the shaft of the femur appears in the seventh week of intrauterine life, and the secondary centre for the lower end appears at the end of the ninth month."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The epiphysis that fuses with the shaft of the femur at about 18 years is the lower end.",
    answer: false,
    explanation: "The upper epiphyses (lesser trochanter, greater trochanter, and head, in that order) fuse with the shaft at about 18 years. The lower epiphysis fuses by the 20th year, not 18 years."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The iliofemoral ligament is attached to the intertrochanteric crest of the femur.",
    answer: false,
    explanation: "The iliofemoral ligament is attached to the intertrochanteric line, not the crest. The crest is on the posterior surface."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "truefalse",
    question: "The gluteus maximus arises from the area behind the posterior gluteal line on the gluteal surface of the ilium.",
    answer: true,
    explanation: "The area behind the posterior gluteal line gives origin to upper fibres of the gluteus maximus, as shown in Fig. 2.3 of the text."
  },

  // Patella
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Patella",
    type: "truefalse",
    question: "The patella is the largest sesamoid bone in the body, developed in the tendon of the quadriceps femoris.",
    answer: true,
    explanation: "The patella is the largest sesamoid bone, developed in the tendon of the quadriceps femoris, and is situated in front of the lower end of the femur about 1 cm above the knee joint."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Patella",
    type: "truefalse",
    question: "The articular surface of the patella is divided by a horizontal ridge into a larger lateral and smaller medial area.",
    answer: false,
    explanation: "The posterior articular surface of the patella is divided by a vertical ridge into a larger lateral and smaller medial area. Another vertical ridge separates a medial strip from the medial portion."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Patella",
    type: "truefalse",
    question: "The medial strip on the posterior surface of the patella comes in contact with the femur during full flexion of the knee.",
    answer: true,
    explanation: "The medial strip on the posterior surface of the patella articulates with a reciprocal strip on the medial side of the intercondylar notch of the femur during full flexion."
  },

  // Tibia
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "truefalse",
    question: "The tibia is the lateral and smaller bone of the leg, homologous with the ulna of the upper limb.",
    answer: false,
    explanation: "The fibula is the lateral and smaller bone of the leg, homologous with the ulna. The tibia is the medial and larger bone of the leg, homologous with the radius."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "truefalse",
    question: "The nutrient artery to the tibia is the largest nutrient artery in the body and is a branch of the anterior tibial artery.",
    answer: false,
    explanation: "The nutrient artery to the tibia is indeed the largest nutrient artery in the body, but it is a branch of the posterior tibial artery, not the anterior tibial artery."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "truefalse",
    question: "The line of gravity passes behind the hip joint and in front of the knee and ankle joints in the lower limb.",
    answer: true,
    explanation: "In the lower limbs, the line of gravity passes behind the hip joint and in front of the knee and ankle joints, as shown in Fig. 1.4 of the text."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "truefalse",
    question: "The soleal line on the posterior surface of the tibia gives origin to the popliteus muscle.",
    answer: false,
    explanation: "The soleal line gives origin to the soleus muscle. The popliteus is inserted into the triangular area above the soleal line on the posterior surface of the tibia."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "truefalse",
    question: "The iliotibial tract is attached to Gerdy's tubercle on the anterior aspect of the lateral condyle of the tibia.",
    answer: true,
    explanation: "The flattened impression on the anterior surface of the lateral tibial condyle, known as Gerdy's tubercle, receives the attachment of the iliotibial tract."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "truefalse",
    question: "The tibial tuberosity ossifies from a secondary centre that appears during the fourth year of life.",
    answer: false,
    explanation: "The upper epiphysis of the tibia appears just before birth (at the end of the ninth month) and is prolonged downwards to form the tibial tuberosity. The secondary centre for the tuberosity itself may appear at approximately 12 years of age as stated in the clinical box."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "truefalse",
    question: "The deep peroneal nerve supplies the tibialis anterior muscle.",
    answer: true,
    explanation: "The tibialis anterior is supplied by the deep peroneal nerve, as indicated in the MCQ answer key and the clinical anatomy section."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "truefalse",
    question: "The medial surface of the shaft of the tibia is crossed by the small saphenous vein in its lower one-third.",
    answer: false,
    explanation: "The lower one-third of the medial surface of the tibial shaft is crossed by the great saphenous vein, not the small saphenous vein."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "truefalse",
    question: "The superior articular surface of the tibia has a slightly concave medial condyle and a slightly convex lateral condyle.",
    answer: true,
    explanation: "The tibial plateau consists of two smooth articular surfaces: the medial one slightly concave and the lateral one slightly convex, which articulate with the condyles of the femur."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "truefalse",
    question: "The primary centre for ossification of the tibia shaft appears in the seventh week of intrauterine life.",
    answer: true,
    explanation: "The primary centre for the shaft of the tibia appears during the seventh week of intrauterine life, the same as for the femur."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "truefalse",
    question: "The lateral surface of the lateral condyle of the tibia has a fibular facet for articulation with the fibula.",
    answer: true,
    explanation: "The posteroinferior aspect of the lateral condyle of the tibia articulates with the fibula. The fibular facet is flat, circular, and directed downwards, backwards, and laterally."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "truefalse",
    question: "The capsular ligament of the knee joint is attached to the tibia proximal to the epiphyseal line.",
    answer: false,
    explanation: "The knee joint remains safe in acute osteomyelitis of the upper end of the tibia because the capsule is attached near the articular margins of the tibia, distal to the epiphyseal line."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "truefalse",
    question: "The groove on the posterior surface of the tibia for the semimembranosus is located on the medial condyle.",
    answer: true,
    explanation: "The semimembranosus is inserted into the groove on the posterior surface of the medial condyle of the tibia."
  },

  // Fibula
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "truefalse",
    question: "The fibula participates in weight transmission from the knee joint to the ankle joint.",
    answer: false,
    explanation: "Weight is transferred from the knee joint to the ankle joint by the tibia alone. The fibula does not articulate with the femur and therefore does not bear or transfer weight."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "truefalse",
    question: "The secondary centre for the lower end of the fibula appears during the fourth year and fuses with the shaft by about 18th year.",
    answer: false,
    explanation: "The secondary centre for the lower end of the fibula appears during the first year, not the fourth year. The secondary centre for the upper end appears during the fourth year."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "truefalse",
    question: "The common peroneal nerve winds around the head of the fibula where it divides into superficial and deep peroneal nerves.",
    answer: false,
    explanation: "The common peroneal nerve winds around the neck of the fibula, not the head. It divides into superficial and deep peroneal nerves in relation to the neck."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "truefalse",
    question: "The fibula violates the law of ossification because the secondary centre for the upper end appears first but fuses later.",
    answer: false,
    explanation: "The fibula violates the law of ossification because the secondary centre which appears first in the lower end (a pressure epiphysis) fuses earlier (at 16 years) than the upper epiphysis (at 18 years), not later. The text states the lower end appears first but 'fuses earlier and not later.'"
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "truefalse",
    question: "The interosseous membrane between the tibia and fibula leaves a gap at the upper end for passage of the anterior tibial vessels.",
    answer: true,
    explanation: "The interosseous border of the fibula gives attachment to the interosseous membrane, leaving a gap at the upper end for passage of the anterior tibial vessels."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "truefalse",
    question: "The apex of the head of the fibula receives the insertion of the biceps femoris on the anterolateral slope.",
    answer: true,
    explanation: "The head of the fibula receives the insertion of the biceps femoris on the anterolateral slope of the apex. This insertion is C-shaped."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "truefalse",
    question: "The peroneus tertius arises from the medial surface of the shaft of the fibula.",
    answer: true,
    explanation: "The peroneus tertius arises from the lower one-fourth of the medial surface of the shaft of the fibula."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "truefalse",
    question: "The nutrient foramen of the fibula is located on the posterior surface.",
    answer: true,
    explanation: "The peroneal artery gives off the nutrient artery for the fibula, which enters the bone on its posterior surface. The nutrient foramen is directed downwards."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "truefalse",
    question: "The fibula provides attachment for eight muscles.",
    answer: true,
    explanation: "The fibula serves mainly for muscle attachment, providing distal attachment for one muscle and proximal attachment for eight muscles."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "truefalse",
    question: "The groove on the posterior surface of the lateral malleolus lodges the tendons of the peroneus longus and peroneus brevis.",
    answer: true,
    explanation: "The groove on the posterior surface of the lateral malleolus lodges the tendons of the peroneus brevis (deep) and peroneus longus (superficial)."
  },

  // Tarsals
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The talus is the only tarsal bone that has muscular attachments.",
    answer: false,
    explanation: "The talus is devoid of muscular attachments. It has numerous ligaments attached because it takes part in three joints (ankle, talocalcanean, and talonavicular)."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The calcaneum is the second largest tarsal bone, forming the prominence of the heel.",
    answer: false,
    explanation: "The calcaneum is the largest tarsal bone, not the second largest. It forms the prominence of the heel. The talus is the second largest tarsal bone."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The talus articulates with the calcaneum at the subtalar joint via three facets on its inferior surface.",
    answer: true,
    explanation: "The inferior surface of the talus bears an oval, concave articular surface which articulates with the posterior facet of the calcaneum to form the subtalar joint. Additional facets on the head articulate with the calcaneum."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The trochlear surface of the talus is concave from before backwards and convex from side-to-side.",
    answer: false,
    explanation: "The trochlear surface is convex from before backwards and concave from side-to-side. It is also wider anteriorly than posteriorly."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The sustentaculum tali is a shelf-like projection from the lateral surface of the calcaneum.",
    answer: false,
    explanation: "The sustentaculum tali is a shell-like projection of bone from the medial surface of the calcaneum, not the lateral surface."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The weight transmission at the ankle joint divides 30 kg into two equal parts: 15 kg to the calcanean tuberosity and 15 kg to the forepart of the foot.",
    answer: true,
    explanation: "At the ankle joint, 30 kg is divided into two equal parts; 15 kg goes to the ground via the calcanean tuberosity, and the other 15 kg reaches the forepart of the foot."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The navicular bone ossifies from one centre which appears during the third year of life.",
    answer: true,
    explanation: "The navicular bone ossifies from one centre which appears during the third year of life."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The tuberosity of the navicular bone receives the principal insertion of the tibialis anterior.",
    answer: false,
    explanation: "The tuberosity of the navicular bone receives the principal insertion of the tibialis posterior, not the tibialis anterior. The tibialis anterior inserts on the medial cuneiform and first metatarsal base."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The spring ligament is attached to the tuberosity of the navicular bone on its dorsal surface.",
    answer: false,
    explanation: "The spring ligament (plantar calcaneonavicular ligament) is attached to the plantar surface of the navicular bone, not the dorsal surface."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The medial tubercle of the calcaneum gives origin to the abductor digiti minimi.",
    answer: false,
    explanation: "The lateral tubercle gives origin to the abductor digiti minimi. The medial tubercle gives origin to the abductor hallucis medially and flexor digitorum brevis anteriorly."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The navicular bone is situated between the talus and the three cuneiform bones.",
    answer: true,
    explanation: "The navicular bone is interposed between the talus and the three cuneiform bones. It is interposed between the proximal and distal rows of tarsal bones."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The tendon of the flexor hallucis longus lies in the groove on the posterior process of the talus.",
    answer: true,
    explanation: "The groove on the posterior process of the talus lodges the tendon of the flexor hallucis longus, as shown in Fig. 2.39a."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The intermediate cuneiform bone is the largest of the three cuneiforms.",
    answer: false,
    explanation: "The medial cuneiform is the largest, and the intermediate cuneiform is the smallest of the three cuneiform bones."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The secondary centre for the calcaneum appears between the 6th and 8th year and fuses with the rest of the bone by the 14th-16th year.",
    answer: true,
    explanation: "The secondary centre for the calcaneum appears between the 6th and 8th year to form a scale-like epiphysis on the posterior surface, which fuses with the rest of the bone by the 14th-16th year."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The cuboid bone articulates with three metatarsal bones.",
    answer: false,
    explanation: "The cuboid bone articulates with the fourth and fifth metatarsal bones (two metatarsals), not three. Its distal surface is divided by a vertical ridge into two areas for these metatarsals."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The dorsal surface of the cuboid is crossed anteriorly by an oblique groove for the tendon of peroneus longus.",
    answer: false,
    explanation: "The plantar surface (not dorsal) of the cuboid is crossed anteriorly by an oblique groove for the tendon of the peroneus longus. The dorsal surface is rough for ligament attachment."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The middle facet on the sustentaculum tali of the calcaneum articulates with the posterior facet on the inferior aspect of the head of the talus.",
    answer: true,
    explanation: "The anterior one-third of the dorsal/superior surface of the calcaneum has an elongated middle facet present on the sustentaculum tali, which articulates with the posterior facet on the inferior aspect of the head of the talus."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The os trigonum is formed when the lateral tubercle of the talus fails to unite with the body of the talus.",
    answer: true,
    explanation: "The lateral tubercle of the talus is occasionally separate (5%) and is then called the os trigonum, which can occur when the secondary ossification center fails to unite with the body."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The long plantar ligament is attached to the rough strip between the three tubercles on the plantar surface of the calcaneum.",
    answer: true,
    explanation: "The rough strip between the three tubercles on the plantar surface of the calcaneum affords attachment to the long plantar ligament."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The peroneal tubercle of the calcaneum lies between the tendons of the peroneus longus above and the peroneus brevis below.",
    answer: false,
    explanation: "The peroneal tubercle lies between the tendons of the peroneus brevis above and the peroneus longus below, not the other way around."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "Which tarsal bone ossifies just before birth? The cuboid.",
    answer: true,
    explanation: "The cuboid bone ossifies from one centre which appears just before birth. The talus ossifies during the 6th month of intrauterine life, the calcaneum during the 3rd month, and the navicular during the third year of life."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The cervical ligament is attached to the lateral surface of the calcaneum.",
    answer: true,
    explanation: "The sulcus calcanei on the dorsal surface provides attachment to the interosseous talocalcanean ligament medially and the cervical ligament laterally."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "truefalse",
    question: "The deltoid ligament of the ankle joint is attached to the lateral malleolus.",
    answer: false,
    explanation: "The deltoid ligament is attached to the medial malleolus, not the lateral malleolus."
  },

  // Metatarsals & Phalanges
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Metatarsals & Phalanges",
    type: "truefalse",
    question: "The peroneus longus is inserted into the dorsal surface of the tuberosity of the fifth metatarsal bone.",
    answer: false,
    explanation: "The peroneus brevis is inserted on the dorsal surface of the tuberosity of the fifth metatarsal bone. The peroneus longus is inserted on the base of the first metatarsal and medial cuneiform."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Metatarsals & Phalanges",
    type: "truefalse",
    question: "The first metatarsal is the longest metatarsal bone.",
    answer: false,
    explanation: "The second metatarsal is the longest metatarsal. The first metatarsal is the shortest, thickest, and stoutest of all metatarsal bones."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Metatarsals & Phalanges",
    type: "truefalse",
    question: "A 'bunion' is an adventitious bursa on the medial side of the head of the first metatarsal bone.",
    answer: true,
    explanation: "The text states: 'Bunion is an adventitious bursa on the medial side of the head of the 1st metatarsal bone.'"
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Metatarsals & Phalanges",
    type: "truefalse",
    question: "The first metatarsal has sesamoid bones on its dorsal surface.",
    answer: false,
    explanation: "There are two small sesamoids in the tendon of the flexor hallucis brevis that articulate with the head of the first metatarsal bone on its plantar surface, not dorsal."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Metatarsals & Phalanges",
    type: "truefalse",
    question: "The phalanges of the foot are larger than the phalanges of the hand.",
    answer: false,
    explanation: "As compared to the phalanges of the hand, the phalanges of the foot are much smaller in size, and the shafts particularly of the first row are compressed from side-to-side."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Metatarsals & Phalanges",
    type: "truefalse",
    question: "The 'march fracture' most commonly affects the 2nd, 3rd, 4th, and 5th metatarsal bones.",
    answer: true,
    explanation: "The text states: 'Fracture of 2nd, 3rd, 4th or 5th metatarsal bones is common in soldiers and policemen and is called 'march fracture'.'"
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Metatarsals & Phalanges",
    type: "truefalse",
    question: "The medial and lateral sesamoid bones of the great toe are embedded in the tendon of flexor hallucis longus.",
    answer: false,
    explanation: "The sesamoids are in the tendon of flexor hallucis brevis, not longus. The longus tendon passes through the groove on the talus and calcaneum."
  },

  // Joints & Ligaments
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Joints & Ligaments",
    type: "truefalse",
    question: "The posterior cruciate ligament is attached to the anterior part of the lateral surface of the medial condyle of the femur.",
    answer: true,
    explanation: "The posterior cruciate ligament is attached to the anterior part of the lateral surface of the medial condyle on a smooth impression."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Joints & Ligaments",
    type: "truefalse",
    question: "The anterior tibiofibular ligament is attached to the triangular area above the medial surface of the lateral malleolus.",
    answer: true,
    explanation: "The triangular area above the medial surface of the lateral malleolus gives attachment to the anterior tibiofibular ligament anteriorly, the interosseous tibiofibular ligament in the middle, and the posterior tibiofibular ligament posteriorly."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Joints & Ligaments",
    type: "truefalse",
    question: "The 'Q angle' is formed by the obliquity of the line of quadriceps muscle and its insertion into the patella.",
    answer: false,
    explanation: "The Q angle is formed by the obliquity of the line of the quadriceps muscle and its insertion into the tibia, not the patella. The text states: 'In normal knee, the obliquity of the line of quadriceps muscle and its insertion into the tibia, results in an angle called 'Q angle'.'"
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Joints & Ligaments",
    type: "truefalse",
    question: "The Q angle is normally 15°-20°.",
    answer: true,
    explanation: "The text states: 'In normal knee, the obliquity of the line of quadriceps muscle and its insertion into the tibia, results in an angle called 'Q angle'. It is normally 15°-20°.'"
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Joints & Ligaments",
    type: "truefalse",
    question: "The fibular collateral ligament is attached within the C-shaped area of biceps femoris insertion on the fibular head.",
    answer: true,
    explanation: "The biceps femoris inserts on the anterolateral slope of the apex of the fibular head. The fibular collateral ligament of the knee joint is attached within this C-shaped area of insertion."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Joints & Ligaments",
    type: "truefalse",
    question: "The subcutaneous infrapatellar bursa is located deep to the ligamentum patellae.",
    answer: false,
    explanation: "The subcutaneous infrapatellar bursa is located superficial to the ligamentum patellae, between the skin and the lower rough area of the tibial tuberosity. The text states it is 'separated from the skin by the subcutaneous infrapatellar bursa.'"
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Joints & Ligaments",
    type: "truefalse",
    question: "The 'Weaver's bottom' is inflammation of the bursa over the iliac crest in persons sitting for a long period.",
    answer: false,
    explanation: "'Weaver's bottom' is inflammation of the ischial tuberosity bursa in persons sitting for a long period of time, not the iliac crest."
  },

  // Miscellaneous
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Miscellaneous",
    type: "truefalse",
    question: "The anterior surface of the body of the pubis gives origin to the adductor magnus.",
    answer: false,
    explanation: "The anterior surface of the body of the pubis gives origin to the adductor longus, gracilis, adductor brevis, and obturator externus. The adductor magnus arises chiefly from the ischial ramus and the outer lower area of the ischial tuberosity."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Miscellaneous",
    type: "truefalse",
    question: "The popliteus arises from the deep posterior part of the popliteal groove on the lateral condyle of the femur.",
    answer: false,
    explanation: "The popliteus arises from the deep anterior part of the popliteal groove. When the knee is flexed, the tendon lies in the shallow posterior part of the groove."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Miscellaneous",
    type: "truefalse",
    question: "The flexor digitorum longus arises from the lateral area of the posterior surface of the tibia below the soleal line.",
    answer: false,
    explanation: "The medial area of the posterior surface below the soleal line gives origin to the flexor digitorum longus, while the lateral area gives origin to the tibialis posterior."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Miscellaneous",
    type: "truefalse",
    question: "The flexor digitorum accessories (flexor accessories) takes origin from the medial surface of the calcaneum below the groove for flexor hallucis longus.",
    answer: true,
    explanation: "The text states: 'Below the groove for the flexor hallucis longus, the medial surface gives origin to the fleshy fibres of the medial head of the flexor digitorum accessories.'"
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Miscellaneous",
    type: "truefalse",
    question: "The structure that passes through the gap in the interosseous membrane at the lower end of the tibiofibular joint is the perforating branch of the peroneal artery.",
    answer: true,
    explanation: "The interosseous membrane leaves a gap at the upper end for passage of the anterior tibial vessels and a gap at the lower end for passage of the perforating branch of the peroneal artery."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Miscellaneous",
    type: "truefalse",
    question: "The adductor magnus is a muscle with dual nerve supply (both obturator and sciatic).",
    answer: true,
    explanation: "The adductor part is supplied by the obturator nerve, and the hamstring part (ischial head) is supplied by the tibial nerve."
  },

  // ===== MULTIPLE CHOICE QUESTIONS =====
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "multiplechoice",
    question: "Which part of the hip bone is used for taking bone marrow biopsy in cases of anemia or leukemia?",
    options: ["A. Ilium", "B. Iliac crest", "C. Anterior superior iliac spine", "D. Posterior superior iliac spine"],
    correctAnswer: "B. Iliac crest",
    explanation: "The iliac crest is specifically mentioned as the site for bone marrow biopsy. The ilium is the larger bone, but the crest provides accessible bone marrow. The anterior and posterior superior iliac spines are specific landmarks, not the primary biopsy sites."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "multiplechoice",
    question: "The bone which is completely devoid of any muscle attachment is:",
    options: ["A. Calcaneum", "B. Navicular", "C. Talus", "D. Cuboid"],
    correctAnswer: "C. Talus",
    explanation: "The talus is the only tarsal bone that has no muscular or tendinous attachments. Most of its surface is covered with articular cartilage. The calcaneum, navicular, and cuboid all have muscular attachments."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "multiplechoice",
    question: "Which nerve is commonly injured in relation to the neck of the fibula?",
    options: ["A. Common peroneal nerve", "B. Deep peroneal nerve", "C. Superficial peroneal nerve", "D. Tibial nerve"],
    correctAnswer: "A. Common peroneal nerve",
    explanation: "The common peroneal nerve winds around the neck of the fibula where it divides into superficial and deep peroneal nerves. It is commonly injured here, resulting in foot drop."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Patella",
    type: "multiplechoice",
    question: "The medial strip on the posterior surface of the patella comes in contact with the femur during:",
    options: ["A. Full flexion of the knee", "B. Midflexion", "C. Extension", "D. Slight flexion"],
    correctAnswer: "A. Full flexion of the knee",
    explanation: "The medial strip on the posterior surface of the patella articulates with a reciprocal strip on the medial side of the intercondylar notch of the femur during full flexion."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Patella",
    type: "multiplechoice",
    question: "The patella is developed in the tendon of:",
    options: ["A. Rectus femoris", "B. Quadriceps femoris", "C. Vastus medialis", "D. Vastus intermedius"],
    correctAnswer: "B. Quadriceps femoris",
    explanation: "The patella is the largest sesamoid bone, developed in the tendon of the quadriceps femoris muscle. While the rectus femoris, vastus medialis, and vastus intermedius are all parts of the quadriceps, the patella develops within the entire tendon of the quadriceps femoris."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "multiplechoice",
    question: "Which part of the ischial tuberosity forms an efficient cushion for supporting body weight in the sitting position?",
    options: ["A. Superolateral part of upper area", "B. Inferomedial part of upper area", "C. Inner lower area", "D. Outer lower area"],
    correctAnswer: "C. Inner lower area",
    explanation: "The inner lower area of the ischial tuberosity is covered with fibrofatty tissue and a bursa which supports body weight in the sitting position. The other areas are covered by muscles or provide muscle attachments."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "multiplechoice",
    question: "The greater trochanter of the femur does NOT give attachment to:",
    options: ["A. Gluteus minimus", "B. Obturator internus", "C. Gluteus medius", "D. Psoas major"],
    correctAnswer: "D. Psoas major",
    explanation: "The psoas major is inserted on the lesser trochanter, not the greater trochanter. The gluteus minimus, obturator internus, and gluteus medius all attach to the greater trochanter."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "multiplechoice",
    question: "Which of the following bones has a groove on its inferior surface for the tendon of the peroneus longus?",
    options: ["A. Talus", "B. Calcaneus", "C. Navicular", "D. Cuboid"],
    correctAnswer: "D. Cuboid",
    explanation: "The cuboid has an oblique groove on its plantar (inferior) surface that is occupied by the tendon of the peroneus longus."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "multiplechoice",
    question: "The medial surface of the tibia gives insertion to all of the following EXCEPT:",
    options: ["A. Sartorius", "B. Gracilis", "C. Semitendinosus", "D. Soleus"],
    correctAnswer: "D. Soleus",
    explanation: "The upper part of the medial surface of the tibia receives the insertions of the sartorius, gracilis, and semitendinosus. The soleus arises from the soleal line on the posterior surface of the tibia, not the medial surface."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "multiplechoice",
    question: "The nerve supply of the tibialis anterior is:",
    options: ["A. Superficial peroneal nerve", "B. Deep peroneal nerve", "C. Tibial nerve", "D. None of the above"],
    correctAnswer: "B. Deep peroneal nerve",
    explanation: "The tibialis anterior is supplied by the deep peroneal nerve, as indicated in the MCQ answer key. The superficial peroneal nerve supplies the peroneus longus and brevis. The tibial nerve supplies the muscles of the posterior compartment."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "multiplechoice",
    question: "The adductor tubercle close to the medial condyle of the femur gives insertion to:",
    options: ["A. Adductor longus", "B. Adductor brevis", "C. Adductor magnus", "D. Pectineus"],
    correctAnswer: "C. Adductor magnus",
    explanation: "The adductor tubercle receives the insertion of the hamstring part or the ischial head of the adductor magnus. The adductor longus and brevis insert on the linea aspera, and the pectineus inserts on a line from the lesser trochanter to the linea aspera."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "multiplechoice",
    question: "What is the ligament attached to the fovea of the head of the femur?",
    options: ["A. Iliofemoral ligament", "B. Ischiofemoral ligament", "C. Ligamentum teres (ligament of the head of femur)", "D. Pubofemoral ligament"],
    correctAnswer: "C. Ligamentum teres (ligament of the head of femur)",
    explanation: "The fovea on the head of the femur provides attachment to the ligament of the head of the femur (ligamentum teres/femoris). The iliofemoral, ischiofemoral, and pubofemoral ligaments are capsular ligaments of the hip joint that attach to the intertrochanteric line and other areas."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "multiplechoice",
    question: "What type of epiphysis is the greater trochanter of the femur?",
    options: ["A. Pressure epiphysis", "B. Traction epiphysis", "C. Articular epiphysis", "D. Atavistic epiphysis"],
    correctAnswer: "B. Traction epiphysis",
    explanation: "The greater trochanter is a traction epiphysis because it is subjected to the pull of muscles (glutei and other rotators)."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "multiplechoice",
    question: "The ligamentum patellae is attached to which part of the tibia?",
    options: ["A. Tibial tuberosity", "B. Medial condyle", "C. Lateral condyle", "D. Intercondylar area"],
    correctAnswer: "A. Tibial tuberosity",
    explanation: "The ligamentum patellae is attached to the upper smooth part of the tibial tuberosity. The quadriceps femoris muscle inserts into the patella, from where the ligamentum patellae arises and ends at the tibial tuberosity."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "multiplechoice",
    question: "Which tendon lies in the oblique groove on the plantar surface of the cuboid?",
    options: ["A. Peroneus brevis", "B. Peroneus longus", "C. Tibialis posterior", "D. Flexor hallucis longus"],
    correctAnswer: "B. Peroneus longus",
    explanation: "The oblique groove on the plantar surface of the cuboid is occupied by the tendon of the peroneus longus."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "multiplechoice",
    question: "The primary centre for ossification of the calcaneum appears during:",
    options: ["A. 2nd month of intrauterine life", "B. 3rd month of intrauterine life", "C. 6th month of intrauterine life", "D. 8th week of intrauterine life"],
    correctAnswer: "B. 3rd month of intrauterine life",
    explanation: "The primary centre for the calcaneum appears during the 3rd month of intrauterine life."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "multiplechoice",
    question: "Which muscle is inserted into the apex of the greater trochanter of the femur?",
    options: ["A. Gluteus medius", "B. Gluteus minimus", "C. Piriformis", "D. Obturator internus"],
    correctAnswer: "C. Piriformis",
    explanation: "The piriformis is inserted into the apex of the greater trochanter. The gluteus minimus inserts into the rough lateral part of the anterior surface, the gluteus medius inserts into the ridge on the lateral surface, and the obturator internus inserts into the upper rough impression on the medial surface."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "multiplechoice",
    question: "Which of the following is NOT attached to the ischial tuberosity?",
    options: ["A. Semimembranosus", "B. Semitendinosus", "C. Biceps femoris (long head)", "D. Rectus femoris"],
    correctAnswer: "D. Rectus femoris",
    explanation: "The rectus femoris originates from the anterior inferior iliac spine (straight head) and the groove above the acetabulum (reflected head), not the ischial tuberosity."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "multiplechoice",
    question: "The trochlear surface of the talus is:",
    options: ["A. Concave from before backwards and convex from side-to-side", "B. Convex from before backwards and concave from side-to-side", "C. Flat from before backwards and concave from side-to-side", "D. Convex in all directions"],
    correctAnswer: "B. Convex from before backwards and concave from side-to-side",
    explanation: "The trochlear surface of the talus is convex from before backwards and concave from side-to-side. It is wider anteriorly than posteriorly."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "multiplechoice",
    question: "The supracondylar lines of the femur enclose which surface?",
    options: ["A. Anterior surface", "B. Medial surface", "C. Lateral surface", "D. Popliteal surface"],
    correctAnswer: "D. Popliteal surface",
    explanation: "In the lower one-third of the femur, the two lips of the linea aspera diverge as supracondylar lines to enclose an additional popliteal surface."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "multiplechoice",
    question: "The flexor digitorum accessories (flexor accessories) takes origin from:",
    options: ["A. The medial surface of the calcaneum below the groove for flexor hallucis longus", "B. The lateral surface of the calcaneum", "C. The plantar surface of the cuboid", "D. The tuberosity of the navicular"],
    correctAnswer: "A. The medial surface of the calcaneum below the groove for flexor hallucis longus",
    explanation: "The text states: 'Below the groove for the flexor hallucis longus, the medial surface gives origin to the fleshy fibres of the medial head of the flexor digitorum accessories.'"
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "multiplechoice",
    question: "The nutrient foramen of the fibula is located on:",
    options: ["A. Anterior surface", "B. Lateral surface", "C. Posterior surface", "D. Medial surface"],
    correctAnswer: "C. Posterior surface",
    explanation: "The peroneal artery gives off the nutrient artery for the fibula, which enters the bone on its posterior surface."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "multiplechoice",
    question: "Which part of the ilium gives origin to the iliacus muscle?",
    options: ["A. Gluteal surface", "B. Iliac fossa", "C. Sacropelvic surface", "D. Iliac crest"],
    correctAnswer: "B. Iliac fossa",
    explanation: "The iliac fossa (the large concave area on the inner surface of the ilium) gives origin to the iliacus from its upper two-thirds."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "multiplechoice",
    question: "The structure that passes through the gap in the interosseous membrane at the lower end of the tibiofibular joint is:",
    options: ["A. Anterior tibial artery", "B. Perforating branch of the peroneal artery", "C. Deep peroneal nerve", "D. Tibial nerve"],
    correctAnswer: "B. Perforating branch of the peroneal artery",
    explanation: "The interosseous membrane leaves a gap at the upper end for passage of the anterior tibial vessels and a gap at the lower end for passage of the perforating branch of the peroneal artery."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Metatarsals & Phalanges",
    type: "multiplechoice",
    question: "The 'march fracture' most commonly affects which metatarsal bones?",
    options: ["A. 1st and 2nd", "B. 2nd, 3rd, 4th, and 5th", "C. 3rd and 4th", "D. 4th and 5th"],
    correctAnswer: "B. 2nd, 3rd, 4th, and 5th",
    explanation: "The text states: 'Fracture of 2nd, 3rd, 4th or 5th metatarsal bones is common in soldiers and policemen and is called 'march fracture'.'"
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Joints & Ligaments",
    type: "multiplechoice",
    question: "The Q angle is normally:",
    options: ["A. 5°-10°", "B. 10°-15°", "C. 15°-20°", "D. 20°-25°"],
    correctAnswer: "C. 15°-20°",
    explanation: "The text states: 'In normal knee, the obliquity of the line of quadriceps muscle and its insertion into the tibia, results in an angle called 'Q angle'. It is normally 15°-20°.'"
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "multiplechoice",
    question: "Which ligament is attached to the apex of the fibular head within the C-shaped area of biceps femoris insertion?",
    options: ["A. Tibial collateral ligament", "B. Fibular collateral ligament", "C. Anterior cruciate ligament", "D. Posterior cruciate ligament"],
    correctAnswer: "B. Fibular collateral ligament",
    explanation: "The biceps femoris inserts on the anterolateral slope of the apex of the fibular head. The fibular collateral ligament of the knee joint is attached within this C-shaped area of insertion."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "multiplechoice",
    question: "The epiphysis that fuses with the shaft of the femur at about 18 years is the:",
    options: ["A. Head", "B. Greater trochanter", "C. Lesser trochanter", "D. Lower end"],
    correctAnswer: "A. Head",
    explanation: "The upper epiphyses (lesser trochanter, greater trochanter, and head, in that order) fuse with the shaft at about 18 years. The lower epiphysis fuses by the 20th year."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "multiplechoice",
    question: "The groove on the posterior surface of the tibia for the semimembranosus is located on:",
    options: ["A. Medial condyle", "B. Lateral condyle", "C. Intercondylar area", "D. Shaft"],
    correctAnswer: "A. Medial condyle",
    explanation: "The semimembranosus is inserted into the groove on the posterior surface of the medial condyle of the tibia."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "multiplechoice",
    question: "Which of the following is a correct statement about the fibula?",
    options: ["A. It bears weight from the knee joint", "B. It is homologous with the radius", "C. The lower end forms the medial malleolus", "D. It provides attachment for eight muscles"],
    correctAnswer: "D. It provides attachment for eight muscles",
    explanation: "The fibula serves mainly for muscle attachment, providing distal attachment for one muscle and proximal attachment for eight muscles. It does not bear weight (tibia bears the weight), it is homologous with the ulna (not radius), and its lower end forms the lateral (not medial) malleolus."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "multiplechoice",
    question: "The capsular ligament of the knee joint is attached to the tibia:",
    options: ["A. At the epiphyseal line", "B. Distal to the epiphyseal line", "C. Proximal to the epiphyseal line", "D. Along the entire shaft"],
    correctAnswer: "B. Distal to the epiphyseal line",
    explanation: "The knee joint remains safe in acute osteomyelitis of the upper end of the tibia because the capsule is attached near the articular margins of the tibia, proximal to the epiphyseal line. This means the capsule attaches distal to the epiphyseal line, keeping the infection from spreading into the joint."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Metatarsals & Phalanges",
    type: "multiplechoice",
    question: "The medial and lateral sesamoid bones of the great toe are embedded in:",
    options: ["A. The tendon of flexor hallucis longus", "B. The tendon of flexor hallucis brevis", "C. The tendon of tibialis anterior", "D. The plantar aponeurosis"],
    correctAnswer: "B. The tendon of flexor hallucis brevis",
    explanation: "There are two small sesamoids in the tendon of the flexor hallucis brevis that articulate with the head of the first metatarsal bone."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "multiplechoice",
    question: "The iliac crest ends posteriorly at the:",
    options: ["A. Anterior superior iliac spine", "B. Posterior superior iliac spine", "C. Posterior inferior iliac spine", "D. Greater sciatic notch"],
    correctAnswer: "B. Posterior superior iliac spine",
    explanation: "The iliac crest ends posteriorly at the posterior superior iliac spine (PSIS)."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "multiplechoice",
    question: "The tendon of which muscle passes through the groove on the sustentaculum tali?",
    options: ["A. Flexor digitorum longus", "B. Flexor hallucis longus", "C. Tibialis posterior", "D. Peroneus longus"],
    correctAnswer: "B. Flexor hallucis longus",
    explanation: "The groove on the lower surface of the sustentaculum tali is occupied by the tendon of the flexor hallucis longus."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "multiplechoice",
    question: "The primary centre for ossification of the ilium appears during:",
    options: ["A. 2nd month of intrauterine life", "B. 4th month of intrauterine life", "C. 5th month of intrauterine life", "D. 6th month of intrauterine life"],
    correctAnswer: "A. 2nd month of intrauterine life",
    explanation: "The primary centres appear: one for the ilium during the second month of intrauterine life; one for the ischium during the fourth month; and one for the pubis during the fifth month."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Fibula",
    type: "multiplechoice",
    question: "Which of the following is NOT a function of the fibula?",
    options: ["A. Providing attachment for muscles", "B. Contributing to the stability of the ankle joint", "C. Bearing body weight from the femur", "D. Forming part of the ankle joint socket"],
    correctAnswer: "C. Bearing body weight from the femur",
    explanation: "The fibula does not bear body weight. It functions mainly for muscle attachment, contributes to ankle joint stability, and forms part of the ankle joint socket."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "multiplechoice",
    question: "The soleal line on the posterior surface of the tibia:",
    options: ["A. Gives origin to the tibialis posterior", "B. Gives origin to the soleus", "C. Receives insertion of the popliteus", "D. Gives origin to the flexor digitorum longus"],
    correctAnswer: "B. Gives origin to the soleus",
    explanation: "The soleus arises from the soleal line on the posterior surface of the tibia."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "multiplechoice",
    question: "The anterior inferior iliac spine gives origin to which head of the rectus femoris?",
    options: ["A. Reflected head", "B. Straight head", "C. Both straight and reflected heads", "D. Neither head"],
    correctAnswer: "B. Straight head",
    explanation: "The upper half of the anterior inferior iliac spine gives origin to the straight head of the rectus femoris. The reflected head arises from the groove above the acetabulum."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "multiplechoice",
    question: "Which tarsal bone ossifies just before birth?",
    options: ["A. Talus", "B. Calcaneum", "C. Navicular", "D. Cuboid"],
    correctAnswer: "D. Cuboid",
    explanation: "The cuboid bone ossifies from one centre which appears just before birth."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Hip Bone",
    type: "multiplechoice",
    question: "The pectineal line of the pubis provides attachment to all of the following EXCEPT:",
    options: ["A. Conjoint tendon at the medial end", "B. Lacunar ligament at the medial end", "C. Pectineal ligament of Cooper", "D. Inguinal ligament"],
    correctAnswer: "D. Inguinal ligament",
    explanation: "The inguinal ligament attaches to the pubic tubercle (medial end), not the pectineal line."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "multiplechoice",
    question: "The angle of inclination of the femur is:",
    options: ["A. Greater in females than in males", "B. Less in females than in males", "C. The same in males and females", "D. Not related to sex"],
    correctAnswer: "B. Less in females than in males",
    explanation: "The neck-shaft angle is about 125° in adults. It is less in females due to their wider pelvis."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Joints & Ligaments",
    type: "multiplechoice",
    question: "The deltoid ligament of the ankle joint is attached to:",
    options: ["A. The lateral malleolus", "B. The medial malleolus", "C. The talus only", "D. The calcaneum only"],
    correctAnswer: "B. The medial malleolus",
    explanation: "The deltoid ligament of the ankle joint is attached to the lower border of the medial malleolus."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "multiplechoice",
    question: "Which of the following is a correct sequence of structures crossing the anterior surface of the lower end of the tibia from medial to lateral?",
    options: ["A. Tibialis anterior, extensor hallucis longus, anterior tibial artery, deep peroneal nerve, extensor digitorum longus, peroneus tertius", "B. Extensor digitorum longus, peroneus tertius, anterior tibial artery, deep peroneal nerve, extensor hallucis longus, tibialis anterior", "C. Tibialis posterior, flexor digitorum longus, posterior tibial artery, tibial nerve, flexor hallucis longus", "D. Flexor hallucis longus, tibial nerve, posterior tibial artery, flexor digitorum longus, tibialis posterior"],
    correctAnswer: "A. Tibialis anterior, extensor hallucis longus, anterior tibial artery, deep peroneal nerve, extensor digitorum longus, peroneus tertius",
    explanation: "The text states: 'The lower part of the anterior surface of the shaft and the anterior aspect of the lower end are crossed from medial to lateral side by the tibialis anterior, the extensor hallucis longus, the anterior tibial artery, the deep peroneal nerve, the extensor digitorum longus, and the peroneus tertius.'"
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "multiplechoice",
    question: "The adductor magnus is classified according to its nerve supply as having:",
    options: ["A. Only obturator nerve supply", "B. Only sciatic nerve supply", "C. Both obturator and sciatic nerve supply", "D. Femoral nerve supply"],
    correctAnswer: "C. Both obturator and sciatic nerve supply",
    explanation: "The adductor magnus is a unique muscle with dual nerve supply. The adductor part is supplied by the obturator nerve, and the hamstring part (ischial head) is supplied by the tibial nerve."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Metatarsals & Phalanges",
    type: "multiplechoice",
    question: "The tuberosity of the fifth metatarsal receives the insertion of:",
    options: ["A. Peroneus longus", "B. Peroneus brevis", "C. Peroneus tertius", "D. Tibialis anterior"],
    correctAnswer: "B. Peroneus brevis",
    explanation: "The peroneus brevis is inserted on the dorsal surface of the tuberosity of the fifth metatarsal bone."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Femur",
    type: "multiplechoice",
    question: "The iliofemoral ligament is attached to which part of the femur?",
    options: ["A. Intertrochanteric crest", "B. Intertrochanteric line", "C. Linea aspera", "D. Supracondylar line"],
    correctAnswer: "B. Intertrochanteric line",
    explanation: "The iliofemoral ligament is attached to the intertrochanteric line."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tibia",
    type: "multiplechoice",
    question: "Which statement about the ossification of the tibia is correct?",
    options: ["A. The secondary centre for the upper end appears during the first year", "B. The secondary centre for the lower end appears just before birth", "C. The upper epiphysis fuses with the shaft at 16th-18th year", "D. The lower end forms the medial malleolus by the 10th year"],
    correctAnswer: "C. The upper epiphysis fuses with the shaft at 16th-18th year",
    explanation: "The upper epiphysis fuses at 16th-18th year, and the lower epiphysis fuses at 15th-17th year. The secondary centre for the upper end appears just before birth, and for the lower end during the first year. The lower end forms the medial malleolus by the seventh year."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "multiplechoice",
    question: "The cervical ligament is attached to which part of the calcaneum?",
    options: ["A. Lateral surface", "B. Medial surface", "C. Plantar surface", "D. Posterior surface"],
    correctAnswer: "A. Lateral surface",
    explanation: "The sulcus calcanei on the dorsal surface provides attachment to the interosseous talocalcanean ligament medially and the cervical ligament laterally."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "multiplechoice",
    question: "The lateral cuneiform bone articulates with all of the following EXCEPT:",
    options: ["A. Navicular bone", "B. Intermediate cuneiform bone", "C. Cuboid bone", "D. First metatarsal bone"],
    correctAnswer: "D. First metatarsal bone",
    explanation: "The lateral cuneiform articulates with the navicular bone posteriorly, the intermediate cuneiform medially, and the cuboid laterally. It articulates with the third metatarsal anteriorly, not the first metatarsal."
  },
  {
    course: "Gross Anatomy",
    topic: "Osteology of Lower Limb",
    subTopic: "Tarsals",
    type: "multiplechoice",
    question: "Which of the following structures is attached to the medial margin of the sustentaculum tali of the calcaneum?",
    options: ["A. Spring ligament anteriorly", "B. Flexor hallucis longus tendon", "C. Peroneus longus tendon", "D. Plantar aponeurosis"],
    correctAnswer: "A. Spring ligament anteriorly",
    explanation: "The medial margin of the sustentaculum tali provides attachment to the spring ligament anteriorly, a slip from the tibialis posterior in the middle, superficial fibres of the deltoid ligament along the whole length, and the medial talocalcanean ligament posteriorly."
  },
  // ===== PHYSIOLOGY – BLOOD PHYSIOLOGY =====

// SECTION 1: Blood Composition & Functions
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Composition & Functions",
  type: "truefalse",
  question: "Blood is classified as a specialised connective tissue consisting of formed elements suspended in a liquid extracellular matrix called plasma.",
  answer: true,
  explanation: "Blood is a specialised connective tissue because it has cells and cell fragments (formed elements) suspended in a liquid matrix (plasma), unlike other connective tissues with solid matrices."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Composition & Functions",
  type: "truefalse",
  question: "Total blood volume in an adult male is approximately 8-10 litres, constituting about 12% of total body weight.",
  answer: false,
  explanation: "The total blood volume in an adult male is approximately 5-6 litres, constituting about 8% of total body weight. The statement overestimates both volume and percentage."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Composition & Functions",
  type: "truefalse",
  question: "The cardiovascular system consists of the heart, blood vessels, and blood, and its major function is to transport nutrients, gases, and hormones to cells while carrying wastes away.",
  answer: true,
  explanation: "This is the definition of the cardiovascular system as stated in the materials, which transports nutrients, gases, and hormones to cells and picks up wastes for excretion."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Composition & Functions",
  type: "truefalse",
  question: "The lymphatic system and cardiovascular system together constitute the circulatory system.",
  answer: true,
  explanation: "The circulatory system is made up of both the cardiovascular system (heart, blood vessels, blood) and the lymphatic system (vessels that return fluid escaped from blood vessels back to the bloodstream)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Composition & Functions",
  type: "truefalse",
  question: "When blood is centrifuged, plasma forms the bottom layer, constituting approximately 45% of blood volume.",
  answer: false,
  explanation: "Plasma forms the top layer (clear to pale yellow) and constitutes approximately 55% of blood volume. The bottom layer is the packed red blood cells (approximately 45%)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Composition & Functions",
  type: "truefalse",
  question: "The buffy coat contains white blood cells and platelets and constitutes approximately 5% of blood volume.",
  answer: false,
  explanation: "The buffy coat contains white blood cells and platelets but constitutes less than 1% of blood volume, not 5%."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Composition & Functions",
  type: "truefalse",
  question: "Haematocrit (packed cell volume) normal values are 40-54% in males and 37-47% in females.",
  answer: true,
  explanation: "These are the normal haematocrit ranges as stated in the materials, reflecting the physiological sex difference due to testosterone stimulating erythropoiesis in males and menstrual iron loss in females."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Composition & Functions",
  type: "truefalse",
  question: "Plasma is approximately 91% water by weight, with the remaining 9% consisting of plasma proteins and smaller solutes.",
  answer: true,
  explanation: "Plasma consists of approximately 91% water, with plasma proteins (7%) and smaller solutes (2%) making up the remaining 9%."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Composition & Functions",
  type: "truefalse",
  question: "Albumin constitutes approximately 36% of plasma proteins and is primarily responsible for immune function.",
  answer: false,
  explanation: "Albumin constitutes approximately 60% of plasma proteins and maintains colloid osmotic (oncotic) pressure. Globulins (36%) include immunoglobulins responsible for immune function."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Composition & Functions",
  type: "truefalse",
  question: "Fibrinogen constitutes approximately 4% of plasma proteins and is the soluble precursor of fibrin essential for blood coagulation.",
  answer: true,
  explanation: "Fibrinogen (4% of plasma proteins) is the soluble precursor of fibrin and is essential for blood coagulation. Plasma from which fibrinogen has been removed is called serum."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Composition & Functions",
  type: "truefalse",
  question: "Serum is identical to plasma in composition, containing all plasma proteins including fibrinogen.",
  answer: false,
  explanation: "Serum is plasma minus fibrinogen and other clotting factors consumed during clot formation. This is a key distinction: plasma contains fibrinogen; serum does not."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Composition & Functions",
  type: "truefalse",
  question: "The three major functions of blood are transportation, regulation, and protection.",
  answer: true,
  explanation: "Blood performs three overarching functions: Transportation (O2, CO2, nutrients, hormones, wastes), Regulation (pH, body temperature, osmotic pressure), and Protection (haemostasis and immunity)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Composition & Functions",
  type: "truefalse",
  question: "Blood regulates body temperature by absorbing and redistributing heat generated by metabolic activity, with vasodilation conserving heat and vasoconstriction dissipating it.",
  answer: false,
  explanation: "Vasodilation of skin vessels permits heat dissipation, while vasoconstriction conserves core temperature. The statement reverses the functions."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Composition & Functions",
  type: "truefalse",
  question: "The pH of arterial blood is normally maintained within the narrow range of 7.55-7.65 by plasma buffer systems.",
  answer: false,
  explanation: "Arterial blood pH is maintained within 7.35-7.45, not 7.55-7.65. The statement gives values that are alkalotic."
},

// SECTION 2: Red Blood Cells & Haemoglobin
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "Mature red blood cells are biconcave discs measuring approximately 7.5 μm in diameter.",
  answer: true,
  explanation: "Mature RBCs are biconcave discs approximately 7.5 μm in diameter, 2.6 μm thick at the rim, and only 0.75 μm thick at the centre."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "The biconcave shape of RBCs decreases the surface area to volume ratio, which slows down gas diffusion.",
  answer: false,
  explanation: "The biconcave shape MAXIMISES the surface area to volume ratio, facilitating rapid diffusion of oxygen and carbon dioxide. A sphere would have less surface area."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "Mature RBCs contain mitochondria and ribosomes to support aerobic respiration and protein synthesis.",
  answer: false,
  explanation: "Mature RBCs eject their nucleus and all organelles including mitochondria and ribosomes during maturation. They lack mitochondria and generate ATP exclusively via anaerobic glycolysis."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "Haemoglobin constitutes approximately 33% of the RBC's weight, with roughly 280 million haemoglobin molecules per cell.",
  answer: true,
  explanation: "Haemoglobin constitutes approximately 33% of the RBC's weight, with about 280 million molecules per cell. The anucleate state maximises space for haemoglobin."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "Normal adult haemoglobin (HbA) consists of two alpha and two beta globin chains (α2β2), each associated with a haem group.",
  answer: true,
  explanation: "HbA is a tetramer consisting of two alpha (α) and two beta (β) globin chains, each with a haem group containing ferrous iron (Fe2+) that reversibly binds oxygen."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "Each haemoglobin molecule can carry up to eight molecules of oxygen simultaneously.",
  answer: false,
  explanation: "Each haemoglobin molecule has four haem groups, each binding one oxygen molecule, giving a total capacity of FOUR oxygen molecules, not eight."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "Iron in haemoglobin must remain in the ferric (Fe3+) state to bind oxygen effectively.",
  answer: false,
  explanation: "Iron must remain in the FERROUS (Fe2+) state to bind oxygen. Ferric iron (Fe3+) forms methaemoglobin, which cannot carry oxygen."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "Methaemoglobin reductase (NADH-dependent) continuously reduces methaemoglobin back to functional haemoglobin.",
  answer: true,
  explanation: "Methaemoglobin reductase (NADH-dependent) reduces ferric iron (Fe3+) back to ferrous (Fe2+), maintaining normal blood methaemoglobin levels below 1%."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "Normal haemoglobin concentration is 13.5-17.5 g/dL in males and 12.0-15.5 g/dL in females.",
  answer: true,
  explanation: "These are the stated normal haemoglobin concentration ranges, reflecting the physiological sex difference."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "RBCs have a finite lifespan of approximately 50 days in the circulation.",
  answer: false,
  explanation: "RBCs have a lifespan of approximately 120 days (not 50 days), during which they travel roughly 300 miles through the circulatory system."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "Eryptosis is the term for programmed cell death of erythrocytes, involving calcium influx, ceramide formation, and cell shrinkage.",
  answer: true,
  explanation: "Eryptosis is a form of programmed cell death specific to erythrocytes, characterised by calcium influx, ceramide formation, and cell shrinkage before phagocytosis."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "Phosphatidylserine flips from the inner to the outer leaflet of the RBC membrane during aging, serving as an 'eat-me' signal for macrophages.",
  answer: true,
  explanation: "As RBCs age, phosphatidylserine (normally confined to the inner leaflet) flips to the outer leaflet, serving as a molecular 'eat-me' signal recognised by macrophages."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "Haemoglobin catabolism produces biliverdin, which is directly converted to unconjugated bilirubin by haem oxygenase.",
  answer: false,
  explanation: "Haem oxygenase converts haem to biliverdin (green) plus Fe2+ and CO. Biliverdin reductase then converts biliverdin to unconjugated bilirubin. Both enzymes are involved."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "Unconjugated bilirubin is water-soluble and can be excreted directly in urine.",
  answer: false,
  explanation: "Unconjugated (indirect) bilirubin is FAT-SOLUBLE and albumin-bound; it cannot be excreted in urine. Conjugated (direct) bilirubin is water-soluble and can be excreted in urine."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "Iron released from haemoglobin catabolism is transported in plasma by transferrin and stored as ferritin in the liver and macrophages.",
  answer: true,
  explanation: "Fe2+ released from haem catabolism binds transferrin for transport to the bone marrow or is stored as ferritin (and haemosiderin when saturated) in liver and macrophages."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "Stercobilin is the final product of bilirubin catabolism that gives urine its yellow colour.",
  answer: false,
  explanation: "Stercobilin gives faeces their brown colour. Urobilin is excreted in urine and gives urine its yellow colour. Both are derived from urobilinogen."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "Pre-hepatic (haemolytic) jaundice is characterised by elevated conjugated bilirubin and dark urine.",
  answer: false,
  explanation: "Pre-hepatic (haemolytic) jaundice is characterised by ELEVATED UNCONJUGATED bilirubin. Urine is normal (no bilirubinuria) and stools are dark. Conjugated bilirubin elevation occurs in hepatic or post-hepatic jaundice."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "RBCs & Haemoglobin",
  type: "truefalse",
  question: "In post-hepatic (obstructive) jaundice, stools become pale or clay-coloured due to absence of stercobilin reaching the gut.",
  answer: true,
  explanation: "Bile duct obstruction prevents conjugated bilirubin from reaching the intestine. Without bilirubin in the gut, bacteria cannot convert it to stercobilin, so stools become pale (acholic)."
},

// SECTION 3: Haemopoiesis & Erythropoiesis
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "Haemopoiesis in adults occurs exclusively in the red bone marrow of the axial skeleton and proximal epiphyses of long bones.",
  answer: true,
  explanation: "In adult life, haemopoiesis is restricted to the bone marrow, specifically the marrow of membranous bones (axial skeleton: vertebrae, sternum, ribs, skull) and proximal epiphyses of femur and humerus."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "In foetal life, haemopoiesis occurs first in the liver and spleen, then shifts to the yolk sac, and finally to bone marrow.",
  answer: false,
  explanation: "The sequence is: yolk sac (weeks 2-7) → liver and spleen (months 2-7) → bone marrow (from month 5 onwards). The statement reverses the sequence."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "Extramedullary haemopoiesis refers to blood cell production occurring outside the bone marrow, such as in the liver and spleen.",
  answer: true,
  explanation: "Extramedullary haemopoiesis occurs in pathological states of bone marrow failure when the liver and spleen resume their foetal haemopoietic function."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "The pluripotent haematopoietic stem cell (HSC) is defined by two properties: self-renewal and multipotency.",
  answer: true,
  explanation: "The HSC has self-renewal (ability to produce copies of itself) and multipotency (ability to differentiate into multiple cell lineages) properties."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "From the HSC, two major progenitor lineages arise: the common myeloid progenitor and the common lymphoid progenitor.",
  answer: true,
  explanation: "The common myeloid progenitor gives rise to RBCs, platelets, granulocytes, and monocytes. The common lymphoid progenitor gives rise to T and B lymphocytes and NK cells."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "The first committed erythroid progenitor that is responsive to erythropoietin is the Burst-Forming Unit-Erythroid (BFU-E).",
  answer: false,
  explanation: "The Colony-Forming Unit-Erythroid (CFU-E) is the first EPO-responsive progenitor that expresses high-density EPO receptors. BFU-E is an earlier, less differentiated progenitor."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "The orthochromatic erythroblast (normoblast) undergoes enucleation to become a reticulocyte.",
  answer: true,
  explanation: "The orthochromatic erythroblast extrudes its condensed pyknotic nucleus, which is phagocytosed by macrophages, forming a reticulocyte that still contains residual ribosomal RNA."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "Reticulocytes normally constitute 5-10% of circulating RBCs in healthy individuals.",
  answer: false,
  explanation: "Reticulocytes normally constitute 0.5-1.5% of circulating RBCs. Higher percentages indicate increased erythropoietic activity (reticulocytosis)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "Erythropoietin (EPO) is produced predominantly (90%) by peritubular interstitial cells in the renal cortex.",
  answer: true,
  explanation: "The kidney produces approximately 90% of EPO from peritubular interstitial cells in the renal cortex, with the liver contributing about 10%."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "The stimulus for EPO production is tissue hypoxia, detected by hypoxia-inducible factor 1-alpha (HIF-1α).",
  answer: true,
  explanation: "Reduced oxygen delivery to the kidney stabilises HIF-1α (prevents its degradation), which then transactivates the EPO gene to increase EPO production."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "EPO binding to its receptor on CFU-E activates the JAK2-STAT5 signalling pathway, promoting erythroid progenitor survival and proliferation.",
  answer: true,
  explanation: "EPO receptor binding activates JAK2-STAT5 signalling, which promotes survival (anti-apoptotic), proliferation, and differentiation of erythroid progenitors."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "The anaemia of chronic kidney disease is microcytic and hypochromic due to iron deficiency.",
  answer: false,
  explanation: "The anaemia of CKD is NORMOCYTIC and NORMOCHROMIC, caused by reduced EPO production from damaged peritubular cells. It is not due to iron deficiency."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "Iron deficiency anaemia is characterised by macrocytic cells with normal haemoglobin content.",
  answer: false,
  explanation: "Iron deficiency anaemia is characterised by MICROCYTIC (small), HYPOCHROMIC (pale) cells due to reduced haemoglobin synthesis. Macrocytic cells occur in B12/folate deficiency."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "Vitamin B12 deficiency and folate deficiency both cause macrocytic megaloblastic anaemia with hypersegmented neutrophils.",
  answer: true,
  explanation: "Both deficiencies impair DNA synthesis, causing erythroblasts to grow without dividing, producing macrocytic cells and hypersegmented neutrophils (>5 lobes)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "Vitamin B12 deficiency causes neurological features (subacute combined degeneration of the spinal cord), while folate deficiency does not.",
  answer: true,
  explanation: "B12 deficiency causes SACD due to impaired myelin synthesis via disrupted SAM-dependent methylation. Folate deficiency does NOT cause neurological features - this is the key clinical distinction."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "Vitamin B12 absorption requires intrinsic factor, a glycoprotein secreted by gastric chief cells.",
  answer: false,
  explanation: "Intrinsic factor is secreted by GASTRIC PARIETAL CELLS, not chief cells. Parietal cells also secrete hydrochloric acid. Chief cells secrete pepsinogen."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "Folate is absorbed in the terminal ileum, while vitamin B12 is absorbed in the proximal jejunum.",
  answer: false,
  explanation: "The statement reverses the sites. Folate is absorbed in the PROXIMAL JEJUNUM; Vitamin B12 is absorbed in the TERMINAL ILEUM (bound to intrinsic factor)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemopoiesis & Erythropoiesis",
  type: "truefalse",
  question: "Vitamin B6 (pyridoxine) is a cofactor for delta-aminolevulinic acid (ALA) synthase, the first and rate-limiting step in haem synthesis.",
  answer: true,
  explanation: "ALA synthase catalyses the first step of porphyrin synthesis and requires Vitamin B6 (pyridoxine) as a cofactor. Deficiency causes sideroblastic anaemia."
},

// SECTION 4: Blood Groups
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Groups",
  type: "truefalse",
  question: "ABO antigens are oligosaccharide chains attached to glycoproteins and glycolipids on the RBC surface.",
  answer: true,
  explanation: "ABO antigens are oligosaccharide chains (not proteins) whose presence is determined by glycosyltransferase enzymes encoded by the ABO gene."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Groups",
  type: "truefalse",
  question: "Rh antigens are oligosaccharide chains similar to ABO antigens, determined by glycosyltransferase enzymes.",
  answer: false,
  explanation: "Rh antigens are TRANSMEMBRANE PROTEINS encoded by the RHD gene (for D antigen) and RHCE gene. They are not oligosaccharides like ABO antigens."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Groups",
  type: "truefalse",
  question: "Type A blood has antigen A on RBCs and anti-B antibody in plasma.",
  answer: true,
  explanation: "Type A individuals express A antigen on RBCs and have naturally occurring anti-B antibodies in plasma (IgM class)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Groups",
  type: "truefalse",
  question: "Type AB blood has neither A nor B antigens on RBCs and both anti-A and anti-B antibodies in plasma.",
  answer: false,
  explanation: "Type AB has BOTH A and B antigens on RBCs and NEITHER anti-A nor anti-B antibodies in plasma. Type O has neither antigen and both antibodies."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Groups",
  type: "truefalse",
  question: "Type O individuals have both anti-A and anti-B antibodies in their plasma.",
  answer: true,
  explanation: "Type O individuals have no A or B antigens on their RBCs, so they produce both anti-A and anti-B naturally occurring antibodies (IgM)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Groups",
  type: "truefalse",
  question: "ABO antibodies are naturally occurring and are predominantly IgG class.",
  answer: false,
  explanation: "ABO antibodies are predominantly IgM class (naturally occurring), not IgG. This is why first ABO-incompatible transfusion causes immediate severe reaction."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Groups",
  type: "truefalse",
  question: "Rh-negative individuals naturally have anti-D antibodies in their plasma without prior exposure to Rh-positive blood.",
  answer: false,
  explanation: "Rh-negative individuals do NOT have naturally occurring anti-D antibodies. Anti-D antibodies are IMMUNE IgG produced only after sensitisation (exposure to Rh+ blood)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Groups",
  type: "truefalse",
  question: "Type O is the universal RBC donor because O cells carry neither A nor B antigens.",
  answer: true,
  explanation: "Type O RBCs have no A or B antigens, so they are compatible with recipients of any ABO type. However, O whole blood is NOT universal because O plasma contains anti-A and anti-B antibodies."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Groups",
  type: "truefalse",
  question: "Type AB is the universal RBC recipient because AB plasma contains no anti-A or anti-B antibodies.",
  answer: true,
  explanation: "Type AB individuals have no ABO antibodies in their plasma, so they can receive RBCs from any ABO type without antibody-mediated haemolysis."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Groups",
  type: "truefalse",
  question: "IgM antibodies can cross the placenta and cause haemolytic disease of the newborn.",
  answer: false,
  explanation: "IgM antibodies are too large to cross the placenta. Only IgG antibodies (like anti-D in Rh incompatibility) can cross the placenta via FcRn receptors."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Groups",
  type: "truefalse",
  question: "Haemolytic disease of the newborn (erythroblastosis fetalis) occurs when an Rh-negative mother carries an Rh-positive foetus after sensitisation.",
  answer: true,
  explanation: "A sensitised Rh-negative mother produces IgG anti-D antibodies that cross the placenta and destroy foetal Rh-positive RBCs, causing HDN."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Groups",
  type: "truefalse",
  question: "Anti-D immunoglobulin (Rh prophylaxis) is given to Rh-negative mothers to prevent sensitisation by destroying foetal RBCs before they stimulate antibody production.",
  answer: true,
  explanation: "Anti-D immunoglobulin (RhIG) is given to unsensitised Rh-negative mothers within 72 hours of sensitising events to destroy Rh-positive foetal RBCs before sensitisation occurs."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Groups",
  type: "truefalse",
  question: "ABO incompatibility between mother and foetus is the most common cause of severe haemolytic disease of the newborn.",
  answer: false,
  explanation: "ABO incompatibility rarely causes significant HDN because IgM antibodies cannot cross the placenta. Rh incompatibility is the classic cause of severe HDN."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Groups",
  type: "truefalse",
  question: "In a major ABO-incompatible transfusion reaction, recipient antibodies bind to donor RBC surface antigens and activate complement, causing intravascular haemolysis.",
  answer: true,
  explanation: "Recipient anti-A or anti-B IgM binds donor RBC antigens → classical complement pathway activation → MAC formation → intravascular haemolysis → haemoglobinuria, AKI, DIC."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Blood Groups",
  type: "truefalse",
  question: "The first Rh-incompatible transfusion is usually as dangerous as a first ABO-incompatible transfusion.",
  answer: false,
  explanation: "First Rh-incompatible transfusion is usually safe because Rh-negative individuals have no preformed anti-D antibodies. ABO-incompatible transfusion is dangerous on first exposure due to preformed antibodies."
},

// SECTION 5: Platelets & Haemostasis
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Platelets are anucleate cell fragments derived from cytoplasmic fragmentation of megakaryocytes in the bone marrow.",
  answer: true,
  explanation: "Each megakaryocyte produces 1,000-3,000 platelets by shedding cytoplasmic extensions. Platelets are anucleate, disc-shaped fragments."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Normal platelet count in a healthy adult is 150,000 to 400,000 per μL.",
  answer: true,
  explanation: "The normal platelet count range is 150,000-400,000 per μL (or 150-400 × 10⁹/L). Lifespan is 8-12 days."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Platelets contain alpha granules storing ADP, ATP, serotonin, and calcium; dense granules store fibrinogen and von Willebrand factor.",
  answer: false,
  explanation: "The statement reverses the granule contents. ALPHA granules contain fibrinogen, vWF, factor V, PDGF, and P-selectin. DENSE (delta) granules contain ADP, ATP, serotonin, and calcium."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Vascular spasm is mediated by direct mechanical stimulation, pain reflexes, and vasoactive substances including serotonin and thromboxane A2.",
  answer: true,
  explanation: "Vascular spasm is triggered by direct mechanical stimulation, local pain reflexes, and vasoconstrictors released from platelets (serotonin and thromboxane A2)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Platelet adhesion requires von Willebrand factor (vWF) to bridge exposed collagen and the platelet receptor GpIIb/IIIa.",
  answer: false,
  explanation: "Platelet adhesion requires vWF to bridge collagen and the platelet receptor GpIb (not GpIIb/IIIa). GpIIb/IIIa is involved in platelet aggregation (binds fibrinogen)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Platelet aggregation involves fibrinogen bridging GpIIb/IIIa receptors on adjacent activated platelets.",
  answer: true,
  explanation: "Activated platelets express GpIIb/IIIa (integrin) which binds fibrinogen (and vWF) to cross-link adjacent platelets into the aggregate."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Aspirin inhibits platelet activation by irreversibly blocking COX-1 and preventing thromboxane A2 synthesis.",
  answer: true,
  explanation: "Aspirin irreversibly inhibits COX-1 in platelets, preventing thromboxane A2 synthesis and impairing platelet activation and aggregation. This is an antiplatelet effect."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "The extrinsic pathway of coagulation is triggered by contact with damaged endothelium and is monitored by aPTT.",
  answer: false,
  explanation: "The EXTRINSIC pathway is triggered by TISSUE FACTOR (from outside vessels) and is monitored by PT/INR. The INTRINSIC pathway is triggered by contact and monitored by aPTT."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "The extrinsic pathway is rapid (seconds) and involves tissue factor (Factor III) activating Factor VII.",
  answer: true,
  explanation: "The extrinsic pathway is fast (seconds), triggered by tissue factor (Factor III) binding and activating Factor VII, then activating Factor X. Monitored by PT/INR."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "The intrinsic pathway is slow (minutes) and involves Factors XII, XI, IX, and VIII activating Factor X.",
  answer: true,
  explanation: "The intrinsic pathway is slow (minutes), initiated by contact activation of Factor XII, then XI → IX → VIII → X. Monitored by aPTT."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Prothrombinase (Factor Xa + Factor Va + calcium + platelet phospholipid) converts prothrombin to thrombin.",
  answer: true,
  explanation: "Prothrombinase complex (Xa, Va, Ca2+, PL) converts prothrombin (Factor II) to thrombin (Factor IIa) in the common pathway."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Thrombin converts fibrinogen to fibrin and activates Factor XIII to cross-link fibrin into a stable insoluble clot.",
  answer: true,
  explanation: "Thrombin (IIa) cleaves fibrinogen to fibrin monomers and activates Factor XIII (transglutaminase), which cross-links fibrin into a stable, insoluble clot."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Thrombin has no role in amplifying the coagulation cascade beyond converting fibrinogen to fibrin.",
  answer: false,
  explanation: "Thrombin has a POSITIVE FEEDBACK role in amplifying the cascade by activating Factors V, VIII, and XI, and also activates platelets via PAR-1 receptors."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Vitamin K is required for the gamma-carboxylation of Factors II, VII, IX, X and proteins C and S.",
  answer: true,
  explanation: "Vitamin K is a cofactor for gamma-carboxylation of glutamate residues, which is essential for these factors to bind calcium and phospholipid surfaces for activation."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Warfarin inhibits vitamin K epoxide reductase, depleting active vitamin K and reducing functional levels of Factors II, VII, IX, and X.",
  answer: true,
  explanation: "Warfarin inhibits VKOR (vitamin K epoxide reductase), preventing regeneration of active vitamin K. This reduces gamma-carboxylation and functional activity of Factors II, VII, IX, and X."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "PT/INR monitors the intrinsic pathway, while aPTT monitors the extrinsic pathway.",
  answer: false,
  explanation: "PT/INR monitors the EXTRINSIC and common pathways (Factors VII, X, V, II, I). aPTT monitors the INTRINSIC and common pathways (Factors XII, XI, IX, VIII, X, V, II, I)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Clot retraction involves platelets contracting, pulling the edges of the damaged vessel closer together and squeezing serum out of the clot.",
  answer: true,
  explanation: "Platelets extend pseudopods, attach to fibrin strands, and contract using actomyosin, pulling wound edges together and extruding serum from the clot."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Fibrinolysis is the process of clot formation, with plasmin converting fibrinogen to fibrin.",
  answer: false,
  explanation: "Fibrinolysis is the process of clot BREAKDOWN, NOT formation. Plasmin (activated from plasminogen by tPA) digests fibrin strands to dissolve the clot."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Deficiency of Factor XIII causes immediate failure of clot formation, with prolonged PT and aPTT.",
  answer: false,
  explanation: "Factor XIII deficiency causes DELAYED re-bleeding: initial clot forms normally (normal PT/aPTT) but is unstable because fibrin is not cross-linked and dissolves. The clot dissolves in urea."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Haemophilia A (Factor VIII deficiency) is inherited as an X-linked recessive disorder and is the most common severe inherited bleeding disorder.",
  answer: true,
  explanation: "Haemophilia A (Factor VIII deficiency) is X-linked recessive, affects mostly males, and is the most common severe inherited bleeding disorder (1 in 5,000 males). Prolonged aPTT with normal PT."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Platelets & Haemostasis",
  type: "truefalse",
  question: "Von Willebrand disease is characterised by deficiency of Factor VIII only, causing haemarthrosis and deep muscle bleeding.",
  answer: false,
  explanation: "vWD is characterised by deficiency/defect of von Willebrand factor, causing MUCOCUTANEOUS bleeding (gums, bruising, menorrhagia) - NOT deep tissue bleeds like haemophilia. vWF also carries Factor VIII."
},

// SECTION 6: White Blood Cells
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Normal total WBC count is 4,000 to 11,000 cells per μL.",
  answer: true,
  explanation: "The normal leucocyte count is 4,000-11,000 cells/μL (4-11 × 10⁹/L). Different types have different normal percentages."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Neutrophils constitute 60-70% of circulating WBCs and are the most abundant leucocyte.",
  answer: true,
  explanation: "Neutrophils are the most abundant WBC (50-70%, normal 2.5-7.5 × 10⁹/L) and are the first responders to bacterial infection."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Neutrophils are characterised by a multilobed nucleus (2-5 lobes) and are also called polymorphonuclear leukocytes (PMNs).",
  answer: true,
  explanation: "Neutrophils have a multilobed nucleus (polymorphonuclear) and fine pale granules. They are the first responders to bacterial infection."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Neutrophils destroy bacteria through phagocytosis and release of myeloperoxidase, which generates hypochlorous acid (bleach).",
  answer: true,
  explanation: "Neutrophils use phagocytosis and myeloperoxidase to generate hypochlorous acid (bleach) for bacterial killing. Their activity and death form pus."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Eosinophils primarily defend against bacterial infections and are the first responders to microbial infection.",
  answer: false,
  explanation: "EOSINOPHILS defend against PARASITIC (helminth) infections and modulate allergic reactions. NEUTROPHILS are the first responders to microbial/bacterial infection."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Eosinophils have bilobed nuclei and large brick-red granules that stain with eosin.",
  answer: true,
  explanation: "Eosinophils have a characteristic bilobed nucleus and large brick-red (eosinophilic) granules. They release major basic protein (MBP) and eosinophil cationic protein."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Basophils contain IgE receptors and release histamine and heparin in allergic reactions.",
  answer: true,
  explanation: "Basophils have high-affinity IgE receptors (FcεRI). Cross-linking by antigen triggers degranulation, releasing histamine (vasodilation) and heparin."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Mast cells are the circulating equivalent of basophils, found in the bloodstream.",
  answer: false,
  explanation: "Mast cells are TISSUE-RESIDENT cells functionally similar to basophils. Basophils circulate in the blood; mast cells reside in tissues."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Monocytes are the largest circulating leucocytes and differentiate into tissue macrophages after migrating into tissues.",
  answer: true,
  explanation: "Monocytes (2-8%) are the largest circulating leucocytes with a kidney-shaped nucleus. After 1-3 days in blood, they migrate into tissues and differentiate into macrophages."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Tissue macrophages include Kupffer cells in the liver, microglia in the brain, alveolar macrophages in the lung, and osteoclasts in bone.",
  answer: true,
  explanation: "Monocytes differentiate into tissue-specific macrophages: Kupffer cells (liver), microglia (brain), alveolar macrophages (lung), and osteoclasts (bone)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Macrophages are professional antigen-presenting cells (APCs) that present foreign antigens on MHC class I molecules to T cells.",
  answer: false,
  explanation: "Macrophages present antigens on MHC CLASS II molecules (not MHC I) to CD4+ T helper cells. MHC I presents endogenous antigens to CD8+ cytotoxic T cells."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Lymphocytes constitute 20-40% of WBCs and include B cells, T cells, and natural killer (NK) cells.",
  answer: true,
  explanation: "Lymphocytes (20-40%) are small cells with large round nuclei. B cells, T cells, and NK cells are the three main types, though they cannot be distinguished on routine stains."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "B lymphocytes mature in the thymus and produce antibodies in the humoral immune response.",
  answer: false,
  explanation: "B lymphocytes mature in the BONE MARROW (not thymus) and produce antibodies. T lymphocytes mature in the THYMUS and mediate cell-mediated immunity."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "T lymphocytes include helper T cells (CD4+), cytotoxic T cells (CD8+), and regulatory T cells (Tregs).",
  answer: true,
  explanation: "T cells include CD4+ helper T cells (orchestrate via cytokines), CD8+ cytotoxic T cells (kill infected/tumour cells via perforin/granzyme), and Tregs (suppress excessive responses)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Natural killer (NK) cells are lymphocytes that kill virus-infected and tumour cells without prior sensitisation.",
  answer: true,
  explanation: "NK cells are innate lymphoid cells that kill targets without prior sensitisation by recognising 'missing self' (absence of MHC I) or through antibody-dependent cell-mediated cytotoxicity (ADCC)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "The life span of granulocytes once released is normally 4 to 8 hours in circulating blood and another 4 to 5 days in the tissues.",
  answer: true,
  explanation: "Granulocytes have a short life span: 4-8 hours in blood and 4-5 days in tissues. In severe tissue infection, this is shortened to only a few hours."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Monocytes have a short transit time of 10-20 hours in blood but as tissue macrophages can live for months or years.",
  answer: true,
  explanation: "Monocytes have a short blood transit time (10-20 hours) but as tissue macrophages can survive months to years unless destroyed."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "A left shift (presence of band forms) in peripheral blood indicates severe bacterial infection with accelerated neutrophil release from bone marrow.",
  answer: true,
  explanation: "A left shift shows immature neutrophil band forms in blood, indicating severe bacterial infection stimulating G-CSF and IL-8, causing accelerated release of the bone marrow storage pool."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Neutropenia predisposes patients to severe infection risk, particularly bacterial infections.",
  answer: true,
  explanation: "Neutropenia (reduced neutrophils) severely impairs the first-line defence against bacterial infection, increasing infection risk."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "White Blood Cells",
  type: "truefalse",
  question: "Eosinophilia is associated with bacterial infections, while neutrophilia is associated with parasitic infections.",
  answer: false,
  explanation: "EOSINOPHILIA is associated with parasitic infections and allergies. NEUTROPHILIA is associated with bacterial infections. The statement reverses the associations."
},

// SECTION 7: Immunity
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Innate immunity is the immediate, non-specific response that does not require prior exposure and does not generate immunological memory.",
  answer: true,
  explanation: "Innate immunity is the first line of defence, operates within minutes to hours, does not require prior exposure, and does NOT generate memory. It is non-specific."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Adaptive immunity is fast (minutes to hours), non-specific, and does not generate immunological memory.",
  answer: false,
  explanation: "Adaptive immunity is DELAYED (4-7 days for primary response), HIGHLY SPECIFIC, and GENERATES immunological memory. Innate immunity is fast and non-specific."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Pattern recognition receptors (PRRs) on macrophages and dendritic cells recognise pathogen-associated molecular patterns (PAMPs) on pathogens.",
  answer: true,
  explanation: "PRRs (including Toll-like receptors, TLRs) recognise conserved PAMPs such as LPS (Gram-negative bacteria), flagellin, and viral double-stranded RNA."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "The complement system consists of approximately 30 plasma proteins that can be activated through three different pathways.",
  answer: true,
  explanation: "The complement system has over 30 plasma proteins activated through three pathways: classical (immune complexes), mannose-binding lectin (lectin binds bacteria), and alternative (contact with pathogens)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "The classical pathway of complement activation is triggered by mannose-binding lectin binding to bacteria.",
  answer: false,
  explanation: "The CLASSICAL pathway is triggered by immune complexes (antibody-antigen). The MANNOSE-BINDING LECTIN pathway is triggered by lectin binding mannose groups on bacteria."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Complement activation defends against infection by opsonisation (promoting phagocytosis), chemotaxis, and direct lysis of cells.",
  answer: true,
  explanation: "Complement proteins have three major functions: opsonisation (C3b), chemotaxis (C5a), and cell lysis via the membrane attack complex (MAC, C5b-9)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "The membrane attack complex (MAC) creates holes in target cell membranes, permitting free flow of ions and disrupting membrane polarity.",
  answer: true,
  explanation: "The MAC (C5b-9) inserts perforins into cell membranes, creating pores that allow ion flux and cause cell lysis. This is how complement kills cells directly."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Opsonisation involves coating pathogens with antibodies or complement proteins to enhance phagocytosis by macrophages and neutrophils.",
  answer: true,
  explanation: "Opsonins (antibodies, C3b) coat pathogens, which are then recognised by Fc receptors and complement receptors on phagocytes, enhancing phagocytosis."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Cytokines are hormone-like molecules that regulate immune responses in an endocrine (distant) fashion.",
  answer: false,
  explanation: "Cytokines act generally in a PARACRINE fashion (locally), not endocrine (distant). They are mainly secreted by lymphocytes and macrophages."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Interleukin-1 (IL-1) is secreted by macrophages and activates T cells and macrophages while promoting inflammation.",
  answer: true,
  explanation: "IL-1 from macrophages activates T cells and macrophages and promotes inflammation. It is a key pro-inflammatory cytokine."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Interferon-α is produced by Type 1 helper T cells and induces resistance of cells to viral infection.",
  answer: false,
  explanation: "Interferon-α is produced by VIRALLY INFECTED CELLS, not T helper cells. It induces resistance to viral infection in neighbouring cells. Interferon-γ is from Th1 cells."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Inflammation is a set of local cellular and vascular responses to tissue damage or infection that accelerates destruction and removal of pathogens.",
  answer: true,
  explanation: "Inflammation is a local response to tissue damage or infection that accelerates the destruction and phagocytic removal of invading organisms and debris."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "The signs of inflammation include pain, swelling, redness, and fever.",
  answer: true,
  explanation: "The classical signs of inflammation are pain (dolor), swelling (tumor), redness (rubor), and fever (calor). These effects bring more phagocytic cells to the area."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Chemotaxis is the process by which cells move towards damaged areas in response to chemical attractants (chemotaxins).",
  answer: true,
  explanation: "Chemotaxins released from injured and infected cells act as attractants, aiding the movement of phagocytes towards the damaged area."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Diapedesis is the process by which leucocytes stick to capillary endothelium (margination) and then migrate through clefts between endothelial cells.",
  answer: true,
  explanation: "Diapedesis (extravasation) involves leucocyte margination (sticking to endothelium) followed by active amoeboid movement through inter-endothelial clefts into tissues."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Vasodilators such as histamine and bradykinin increase blood flow and capillary permeability during inflammation.",
  answer: true,
  explanation: "Basophils and mast cells release vasodilators including histamine, bradykinin, and serotonin. Kinins (bradykinin) and prostaglandins also mediate vasodilation."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Drugs that inhibit prostaglandin production (e.g., aspirin and corticosteroids) are used as anti-inflammatory agents.",
  answer: true,
  explanation: "Aspirin and corticosteroids inhibit prostaglandin synthesis, which may amplify inflammation, making them useful anti-inflammatory agents."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Humoral immunity is mediated by T lymphocytes and involves direct killing of infected cells.",
  answer: false,
  explanation: "HUMORAL immunity is mediated by B LYMPHOCYTES (antibodies). CELL-MEDIATED immunity is mediated by T lymphocytes and involves direct killing of infected cells."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Antibodies (immunoglobulins) are produced by plasma cells (activated B lymphocytes) in response to specific antigens.",
  answer: true,
  explanation: "B lymphocytes differentiate into plasma cells that produce antibodies (immunoglobulins) specific to the antigen that stimulated their production."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Antibodies primarily defend against intracellular viruses and cancer cells.",
  answer: false,
  explanation: "Antibodies primarily defend against EXTRACELLULAR antigens: bacteria, viruses in blood/lymph, and toxins in body fluids. CELL-MEDIATED immunity (T cells) defends against intracellular viruses and cancer cells."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "The primary immune response takes some weeks to develop fully and peaks at a lower concentration than the secondary response.",
  answer: true,
  explanation: "The primary response takes weeks to develop, peaks at a lower antibody titre, and declines with time. Secondary response is faster (days), peaks higher, and declines more slowly."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "The secondary immune response depends on memory cells formed following initial B lymphocyte activation.",
  answer: true,
  explanation: "Memory B and T cells generated during the primary response enable the rapid, amplified secondary response on re-exposure to the same antigen."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "T cell receptors (TCRs) bind to antigen only when the antigen is associated with an MHC molecule on the surface of a cell.",
  answer: true,
  explanation: "TCRs recognise antigen ONLY when presented on MHC molecules (HLA). CD4+ T cells recognise MHC II; CD8+ T cells recognise MHC I."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Helper T cells (CD4+) activate macrophages, cytotoxic T cells, and natural killer cells through cytokine secretion.",
  answer: true,
  explanation: "CD4+ T helper cells orchestrate immune responses by secreting cytokines that activate macrophages, cytotoxic T cells, B cells, and NK cells."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Cytotoxic T lymphocytes (CTLs) destroy target cells by releasing perforin and granzymes that induce apoptosis.",
  answer: true,
  explanation: "CD8+ CTLs release perforin (punches holes in target membrane) and granzymes (activate caspases) to induce target cell apoptosis."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Natural killer (NK) cells are part of adaptive immunity and require prior sensitisation to kill target cells.",
  answer: false,
  explanation: "NK cells are part of INNATE immunity and kill without prior sensitisation. They recognise 'missing self' (absence of MHC I) on virus-infected and tumour cells."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Antibody-antigen complex formation results in neutralisation of viruses and bacterial toxins, agglutination, opsonisation, and complement fixation.",
  answer: true,
  explanation: "Antibody-antigen reactions have multiple effects: neutralisation, agglutination (clumping), opsonisation (enhanced phagocytosis), and complement fixation (activation)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Active immunity is acquired through transfer of antibodies from an immune host, while passive immunity is induced in the host by antigen.",
  answer: false,
  explanation: "The statement reverses the definitions. ACTIVE immunity is induced in the host itself by antigen. PASSIVE immunity is acquired through transfer of antibodies or activated T-cells from an immune host."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Vaccination is the process of making a person immune or resistant to an infectious disease, typically by administering a vaccine containing weakened or inactive parts of an organism.",
  answer: true,
  explanation: "Immunisation/vaccination involves administering vaccines containing weakened or inactive parts of an organism (antigen) to trigger an immune response without causing disease."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Autoimmune disease occurs when the immune system mistakenly attacks and destroys healthy body tissue due to failure of self-reactive lymphocyte deletion.",
  answer: true,
  explanation: "Self-reactive lymphocytes are normally deleted during development. Failure of this process leads to autoimmune disease where the immune system attacks healthy tissues."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Examples of autoimmune diseases include rheumatoid arthritis, systemic lupus erythematosus, and type 2 diabetes mellitus.",
  answer: false,
  explanation: "Autoimmune diseases include rheumatoid arthritis, SLE, type 1 diabetes mellitus (NOT type 2), Hashimoto's thyroiditis, Graves' disease, and others. Type 2 diabetes is not autoimmune."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Allergy refers to hypersensitivity of the immune system to something in the environment that is usually not pathogenic.",
  answer: true,
  explanation: "Allergy is caused by hypersensitivity (mainly IgE-mediated) to environmental substances that are usually not pathogenic. Allergic diseases include hay fever, food allergies, asthma, and anaphylaxis."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "In allergic reactions, dendritic cells present antigens to T helper cells, leading to TH2 polarisation and antigen-specific IgE production.",
  answer: true,
  explanation: "Dendritic cells capture and process allergens, present to T helper cells, inducing TH2 polarisation. TH2 cells stimulate B cells to produce antigen-specific IgE."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Immunity",
  type: "truefalse",
  question: "Antigen-specific IgE sensitises mast cells by binding to low-affinity IgE receptors on their surface.",
  answer: false,
  explanation: "IgE sensitises mast cells by binding to HIGH-AFFINITY IgE receptors (FcεRI). On re-exposure, cross-linking triggers degranulation and release of allergic mediators."
},

// SECTION 8: Clinical Correlations
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Clinical Correlations",
  type: "truefalse",
  question: "Leucocytosis refers to a decreased white blood cell count, while leucopenia refers to an increased white blood cell count.",
  answer: false,
  explanation: "LEUCOCYTOSIS is an INCREASED WBC count (e.g., bacterial infection). LEUCOPENIA is a DECREASED WBC count (e.g., viral infections, chemotherapy, aplastic anaemia)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Clinical Correlations",
  type: "truefalse",
  question: "Thrombocytopenia refers to a decreased platelet count and is associated with increased bleeding risk.",
  answer: true,
  explanation: "Thrombocytopenia is low platelet count (<150,000/μL), causing increased bleeding risk due to impaired platelet plug formation."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Clinical Correlations",
  type: "truefalse",
  question: "Leukemia is a disorder characterised by abnormal function or development of granulocytes and lymphocytes, often resulting in deficient immune responses.",
  answer: true,
  explanation: "Leukemia is a malignancy of white blood cells causing abnormal proliferation and function, leading to deficient immune responses."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Clinical Correlations",
  type: "truefalse",
  question: "Oedema can result from reduced plasma albumin, which lowers colloid osmotic pressure and allows excess fluid to leak into interstitial spaces.",
  answer: true,
  explanation: "Hypoalbuminaemia reduces oncotic pressure, causing fluid to filter from capillaries into interstitium faster than lymphatics can return it, producing generalised oedema."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Clinical Correlations",
  type: "truefalse",
  question: "Pernicious anaemia is caused by autoimmune destruction of gastric parietal cells, reducing intrinsic factor production and impairing B12 absorption.",
  answer: true,
  explanation: "Pernicious anaemia is an autoimmune disease where antibodies destroy gastric parietal cells, reducing intrinsic factor. Without IF, B12 cannot be absorbed at the terminal ileum."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Clinical Correlations",
  type: "truefalse",
  question: "Iron deficiency anaemia is characterised by macrocytic, hyperchromic red blood cells.",
  answer: false,
  explanation: "Iron deficiency anaemia is MICROCYTIC (small) and HYPOCHROMIC (pale). Macrocytic, hyperchromic cells occur in megaloblastic anaemias (B12/folate deficiency)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Clinical Correlations",
  type: "truefalse",
  question: "Sideroblastic anaemia is caused by Vitamin B6 deficiency impairing ALA synthase, leading to iron accumulation in mitochondria of erythroblasts.",
  answer: true,
  explanation: "B6 (pyridoxine) is cofactor for ALA synthase. Deficiency impairs haem synthesis, causing iron to accumulate in erythroblast mitochondria, producing 'ringed sideroblasts.'"
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Clinical Correlations",
  type: "truefalse",
  question: "Fanconi anaemia is an autosomal dominant disorder characterised by bone marrow failure, physical anomalies, and predisposition to malignancies.",
  answer: false,
  explanation: "Fanconi anaemia is an AUTOSOMAL RECESSIVE (not dominant) disorder characterised by bone marrow failure, physical anomalies, and malignancy predisposition."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Clinical Correlations",
  type: "truefalse",
  question: "Sickle cell disease and thalassaemia are examples of haemoglobinopathies affecting RBC structure and function.",
  answer: true,
  explanation: "Sickle cell disease (HbS mutation) and thalassaemia (globin chain synthesis defects) are haemoglobinopathies that affect RBC structure and function."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Clinical Correlations",
  type: "truefalse",
  question: "Polycythaemia vera is a clonal myeloproliferative disorder causing EPO-independent overproduction of RBCs with low serum EPO levels.",
  answer: true,
  explanation: "Polycythaemia vera is a clonal disorder of EPO-INDEPENDENT RBC overproduction, characterised by suppressed EPO levels (negative feedback from high RBC mass)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Clinical Correlations",
  type: "truefalse",
  question: "At high altitude, chronic hypoxia elevates EPO production, causing physiological secondary polycythaemia.",
  answer: true,
  explanation: "Chronic hypoxia at altitude stabilises HIF-1α, increasing EPO production and RBC production, resulting in adaptive secondary polycythaemia."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Clinical Correlations",
  type: "truefalse",
  question: "The anaemia of chronic kidney disease responds to recombinant human EPO (epoetin alfa) because it directly provides the missing hormone.",
  answer: true,
  explanation: "CKD destroys EPO-producing peritubular cells. Recombinant EPO (epoetin alfa) replaces the deficient hormone, stimulating erythropoiesis and correcting anaemia."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Clinical Correlations",
  type: "truefalse",
  question: "Vitamin B12 deficiency causes neurological features because B12 is required for methionine synthesis and SAM-dependent methylation for myelin maintenance.",
  answer: true,
  explanation: "B12 is a cofactor for methionine synthase. Deficiency impairs methionine and SAM synthesis, disrupting methylation reactions essential for myelin maintenance, causing SACD."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Clinical Correlations",
  type: "truefalse",
  question: "Folate deficiency causes identical neurological features to B12 deficiency, including subacute combined degeneration of the spinal cord.",
  answer: false,
  explanation: "Folate deficiency does NOT cause neurological features. This is the key clinical distinction: B12 deficiency causes SACD; folate deficiency does not."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Clinical Correlations",
  type: "truefalse",
  question: "Treatment of suspected B12 deficiency with folate alone corrects the anaemia but allows neurological damage to progress.",
  answer: true,
  explanation: "Folate can correct the megaloblastic anaemia of B12 deficiency by bypassing the methyl-folate trap, but does NOT address the neurological damage (myelin synthesis defect), which will progress."
},

// SECTION 9: Reticuloendothelial System & Lymph
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Reticuloendothelial System & Lymph",
  type: "truefalse",
  question: "The reticuloendothelial system (RES) is synonymous with the tissue macrophage system and includes Kupffer cells, alveolar macrophages, and microglia.",
  answer: true,
  explanation: "The monocyte/macrophage system forms the core of the RES. It includes mobile and fixed macrophages in lymph nodes, spleen, bone marrow, lung (alveolar), liver (Kupffer), and nervous tissue (microglia)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Reticuloendothelial System & Lymph",
  type: "truefalse",
  question: "Mobile macrophages move freely through connective tissues, while fixed macrophages become mobile and chemotactically attracted to infection sites when activated.",
  answer: true,
  explanation: "Mobile macrophages move freely in connective tissues. Fixed macrophages (e.g., Kupffer cells) become mobile and chemotactically attracted to local infection or damage when activated."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Reticuloendothelial System & Lymph",
  type: "truefalse",
  question: "Lymph is identical to blood plasma and contains no white blood cells.",
  answer: false,
  explanation: "Lymph is similar to blood plasma but also contains white blood cells (lymphocytes). It is formed when interstitial fluid is collected through lymph capillaries."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Reticuloendothelial System & Lymph",
  type: "truefalse",
  question: "Lymph is formed at the arterial end of capillaries due to the higher pressure of blood compared to veins, with up to 10% entering lymph capillaries.",
  answer: true,
  explanation: "Interstitial fluid forms at the arterial end of capillaries because of higher blood pressure. Most returns to venous ends; up to 10% enters lymph capillaries as lymph."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Reticuloendothelial System & Lymph",
  type: "truefalse",
  question: "Lymph returns proteins and excess interstitial fluid to the bloodstream, absorbs fat from the small intestine, and defends against microorganisms.",
  answer: true,
  explanation: "Lymph has multiple functions: maintains fluid balance (returns proteins and excess ISF), absorbs fat from small intestine, and defends against microorganisms."
},

// SECTION 10: Haemostasis Details
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemostasis Details",
  type: "truefalse",
  question: "Vascular spasm is mediated by serotonin and thromboxane A2 released from damaged endothelial cells.",
  answer: false,
  explanation: "Serotonin and thromboxane A2 are released from PLATELETS, not endothelial cells. Damaged cells release substances that cause vasoconstriction, and platelets release vasoconstrictors."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemostasis Details",
  type: "truefalse",
  question: "The platelet release reaction involves discharge of alpha and dense granule contents to recruit additional platelets and amplify activation.",
  answer: true,
  explanation: "Activated platelets undergo the release reaction, discharging alpha granules (fibrinogen, vWF, FV) and dense granules (ADP, serotonin, Ca2+) to recruit and activate more platelets."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemostasis Details",
  type: "truefalse",
  question: "The glycoprotein receptor GpIb is involved in platelet aggregation by binding fibrinogen.",
  answer: false,
  explanation: "GpIb is involved in platelet ADHESION (binds vWF). GpIIb/IIIa is involved in platelet AGGREGATION (binds fibrinogen). The statement confuses the receptors."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemostasis Details",
  type: "truefalse",
  question: "The platelet phospholipid surface serves as a template for assembly of the coagulation cascade complexes (tenase and prothrombinase).",
  answer: true,
  explanation: "Platelet phospholipid provides a surface for assembly of the tenase complex (IXa-VIIIa) and prothrombinase complex (Xa-Va), essential for coagulation."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemostasis Details",
  type: "truefalse",
  question: "Factor VII deficiency causes prolonged aPTT with normal PT.",
  answer: false,
  explanation: "Factor VII deficiency causes PROLONGED PT (extrinsic pathway) with normal aPTT. Factor VIII deficiency causes prolonged aPTT with normal PT."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemostasis Details",
  type: "truefalse",
  question: "Haemophilia B (Christmas disease) is due to Factor IX deficiency and also follows X-linked recessive inheritance.",
  answer: true,
  explanation: "Haemophilia B (Christmas disease) is Factor IX deficiency, X-linked recessive, and clinically similar to Haemophilia A but less common."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemostasis Details",
  type: "truefalse",
  question: "Von Willebrand factor binds and stabilises Factor VIII in circulation, protecting it from premature degradation.",
  answer: true,
  explanation: "vWF is the carrier protein for Factor VIII, binding and stabilising it. Severe vWD can cause secondary Factor VIII deficiency with a prolonged aPTT."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemostasis Details",
  type: "truefalse",
  question: "In liver cirrhosis, prolonged PT and aPTT with thrombocytopenia result from impaired synthesis of clotting factors and splenic platelet sequestration.",
  answer: true,
  explanation: "Liver cirrhosis causes reduced synthesis of all clotting factors (prolonged PT and aPTT) and hypersplenism with platelet sequestration (thrombocytopenia)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemostasis Details",
  type: "truefalse",
  question: "Disseminated intravascular coagulation (DIC) is a complication of ABO transfusion reactions where immune activation causes widespread microvascular coagulation.",
  answer: true,
  explanation: "Massive immune activation and cytokine release in ABO transfusion reactions cause endothelial injury, activating widespread microvascular coagulation (DIC), consuming clotting factors and platelets."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Haemostasis Details",
  type: "truefalse",
  question: "Hemoglobinuria in ABO transfusion reactions occurs because free haemoglobin precipitates in renal tubules, causing acute kidney injury.",
  answer: false,
  explanation: "Hemoglobinuria is the presence of free haemoglobin in URINE due to intravascular haemolysis. Haemoglobin precipitation in renal tubules causes ACUTE KIDNEY INJURY, not haemoglobinuria itself."
},

// SECTION 11: Additional Concepts
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "The process of programmed RBC death is called eryptosis and is a form of necrosis.",
  answer: false,
  explanation: "Eryptosis is a form of APOPTOSIS (programmed cell death), not necrosis. It is characterised by calcium influx, ceramide formation, and cell shrinkage."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Band 3 protein conformational changes on aging RBCs serve as molecular 'eat-me' signals for macrophage recognition.",
  answer: true,
  explanation: "As RBCs age, band 3 protein undergoes conformational changes, contributing to the 'eat-me' signals (along with phosphatidylserine flip) recognised by macrophages."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "The liver conjugates unconjugated bilirubin with glucuronic acid using the enzyme UDP-glucuronosyltransferase.",
  answer: true,
  explanation: "UDP-glucuronosyltransferase catalyses conjugation of unconjugated bilirubin with glucuronic acid, producing water-soluble conjugated bilirubin for excretion in bile."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Conjugated bilirubin is fat-soluble and cannot be excreted in urine.",
  answer: false,
  explanation: "Conjugated bilirubin is WATER-SOLUBLE and can be excreted in urine (bilirubinuria). UNCONJUGATED bilirubin is fat-soluble and cannot be excreted in urine."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Iron is transported in plasma by haptoglobin, which also transports free haemoglobin released during intravascular haemolysis.",
  answer: false,
  explanation: "Iron is transported by TRANSFERRIN. HAPTOGLOBIN binds free HAEMOGLOBIN (not free iron) released during intravascular haemolysis, preventing renal iron loss."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Erythropoietin acts on CFU-E progenitors, promoting their survival, proliferation, and differentiation.",
  answer: true,
  explanation: "EPO binds to receptors on CFU-E, activating JAK2-STAT5 signalling that promotes survival, proliferation, and differentiation of erythroid progenitors."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Testosterone stimulates erythropoiesis, contributing to the higher haematocrit in males compared to females.",
  answer: true,
  explanation: "Testosterone stimulates EPO production and directly promotes erythropoiesis, contributing to higher male haematocrit (40-54% vs female 37-47%)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Menstrual iron loss in females tends to keep haematocrit lower than in males.",
  answer: true,
  explanation: "Regular menstrual blood loss increases iron requirements in females, contributing to the lower normal haematocrit (37-47%) compared to males (40-54%)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Intrinsic factor is required for vitamin B12 absorption in the terminal ileum.",
  answer: true,
  explanation: "Intrinsic factor (from gastric parietal cells) binds B12 and is essential for its absorption at the terminal ileum. Without IF, B12 cannot be absorbed."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Aplastic anaemia is characterised by pancytopenia (anaemia, thrombocytopenia, leucopenia) due to loss of haematopoietic stem cells.",
  answer: true,
  explanation: "Aplastic anaemia results from near-total absence of HSCs, causing anaemia (↓ RBCs), thrombocytopenia (↓ platelets → bleeding), and leucopenia (↓ WBCs → infections)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "The bone marrow storage pool of neutrophils can be released prematurely during severe infection, causing a left shift.",
  answer: true,
  explanation: "During severe infection, G-CSF and IL-8 stimulate premature release of the bone marrow neutrophil storage pool (band forms), producing a left shift."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Hypersegmented neutrophils (>5 lobes) are a characteristic finding in iron deficiency anaemia.",
  answer: false,
  explanation: "Hypersegmented neutrophils are characteristic of MEGALOBLASTIC anaemias (B12/folate deficiency), NOT iron deficiency. Iron deficiency causes normal neutrophil morphology."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "The alternative pathway of complement activation is triggered by immune complexes.",
  answer: false,
  explanation: "The ALTERNATIVE (properdin) pathway is triggered by contact with viruses, bacteria, fungi, and tumour cells. The CLASSICAL pathway is triggered by immune complexes."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "C3a and C5a are anaphylatoxins that can trigger mast cell degranulation.",
  answer: true,
  explanation: "Complement fragments C3a and C5a are anaphylatoxins that can directly trigger mast cell degranulation and histamine release, contributing to inflammation."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Neutrophil extracellular traps (NETs) are web-like structures released by neutrophils to trap and kill extracellular pathogens.",
  answer: true,
  explanation: "Neutrophils release NETs (web-like structures of DNA and antimicrobial proteins) to trap and kill extracellular pathogens, limiting their spread."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Eosinophils release major basic protein (MBP) which is toxic to helminth surfaces and also damages host tissues in allergic reactions.",
  answer: true,
  explanation: "MBP and eosinophil cationic protein are directly toxic to helminth surfaces. Eosinophil products also contribute to tissue damage in allergic diseases (asthma)."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Basophils and mast cells release histamine, which causes vasoconstriction and reduced capillary permeability.",
  answer: false,
  explanation: "Histamine causes VASODILATION and INCREASED capillary permeability (not vasoconstriction). This promotes inflammation and oedema."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Tissue macrophages present foreign antigens on MHC class II molecules and also secrete pro-inflammatory cytokines.",
  answer: true,
  explanation: "Macrophages are professional APCs presenting antigens on MHC II to CD4+ T cells. They also secrete cytokines (IL-1, IL-6, TNF-α) to coordinate inflammation."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Memory B cells generated during the primary immune response enable rapid, high-titre antibody production on re-exposure.",
  answer: true,
  explanation: "Memory B cells (from primary response) rapidly differentiate into plasma cells on re-exposure, producing high-affinity IgG antibodies within 1-3 days."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "CD8+ cytotoxic T cells recognise antigen presented on MHC class II molecules.",
  answer: false,
  explanation: "CD8+ cytotoxic T cells recognise antigen presented on MHC CLASS I molecules. CD4+ helper T cells recognise MHC CLASS II. This is 'CD8 binds MHC I; CD4 binds MHC II.'"
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "The TH2 immune response is characterised by production of IgE and is associated with allergic reactions.",
  answer: true,
  explanation: "TH2 polarisation promotes IgE production by B cells, eosinophil recruitment, and mast cell activation, driving allergic (Type I hypersensitivity) responses."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Food allergies, hay fever, and anaphylaxis are examples of Type I hypersensitivity (IgE-mediated) allergic reactions.",
  answer: true,
  explanation: "Type I hypersensitivity is IgE-mediated, causing immediate allergic reactions including hay fever, food allergies, atopic dermatitis, allergic asthma, and anaphylaxis."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Graft versus host disease occurs when transplanted tissue (graft) attacks the recipient's tissues because donor T cells recognise host MHC as foreign.",
  answer: true,
  explanation: "GVHD occurs when immunocompetent donor T cells in the graft recognise recipient tissues as foreign and attack them. This is a complication of bone marrow/stem cell transplants."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Immunodeficiency can result from abnormal development or function of granulocytes and lymphocytes, leading to deficient immune responses.",
  answer: true,
  explanation: "Abnormal development or function of immune cells (granulocytes, lymphocytes) results in immunodeficiency, causing deficient responses to microbial threats."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "The spleen is the primary site of erythropoiesis in adult humans.",
  answer: false,
  explanation: "The bone marrow is the primary site of erythropoiesis in adult humans. The spleen is the primary site of RBC destruction (phagocytosis of aged RBCs) and platelet storage."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Extrinsic pathway deficiency is monitored by aPTT, while intrinsic pathway deficiency is monitored by PT.",
  answer: false,
  explanation: "EXTRINSIC pathway deficiency is monitored by PT/INR. INTRINSIC pathway deficiency is monitored by aPTT. The statement reverses the tests."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Both the extrinsic and intrinsic pathways converge on the common pathway at Factor X activation.",
  answer: true,
  explanation: "Both pathways activate Factor X, entering the common pathway: X → prothrombinase → prothrombin → thrombin → fibrinogen → fibrin → Factor XIIIa → stabilised clot."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Heparin potentiates antithrombin III to inactivate thrombin and Factor Xa, acting as an anticoagulant.",
  answer: true,
  explanation: "Heparin binds and potentiates antithrombin III, which inactivates thrombin (IIa) and Factor Xa, preventing coagulation. This is why heparin is an anticoagulant."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Clopidogrel (P2Y12 receptor antagonist) blocks ADP-mediated platelet aggregation and is used as an antiplatelet drug.",
  answer: true,
  explanation: "Clopidogrel blocks the P2Y12 ADP receptor on platelets, preventing ADP-mediated platelet recruitment and aggregation. Used in ACS, stroke prevention, and after stents."
},
{
  course: "Physiology",
  topic: "Blood Physiology",
  subTopic: "Additional Concepts",
  type: "truefalse",
  question: "Platelet-derived growth factor (PDGF) released from alpha granules promotes fibroblast proliferation and tissue repair.",
  answer: true,
  explanation: "PDGF is released from platelet alpha granules during the release reaction and promotes fibroblast proliferation, smooth muscle cell growth, and tissue repair after injury."
},
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Cell Structure & Function",
    type: "truefalse",
    question: "The cell is the smallest unit capable of carrying out the processes associated with life.",
    answer: true,
    explanation: "The text explicitly states that 'The cell is the smallest unit capable of carrying out the processes associated with life,' which is the fundamental premise for studying cellular physiology."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Cell Structure & Function",
    type: "truefalse",
    question: "Nutrition, as a classical property of living organisms, is fulfilled by cells through a process of cell replication.",
    answer: false,
    explanation: "Cells fulfill the property of nutrition through the process of nutrition itself, not cell replication. Cell replication is how cells fulfill the property of reproduction."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Cell Structure & Function",
    type: "truefalse",
    question: "Fibroblasts are examples of cells that connect body parts.",
    answer: true,
    explanation: "Fibroblasts are specifically listed as cells that connect body parts. They are categorized with other cells that have this function."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Cell Structure & Function",
    type: "truefalse",
    question: "Epithelial cells are the primary cells responsible for storing nutrients in the body.",
    answer: false,
    explanation: "Epithelial cells are cells that cover and line body organs. Fat cells, which contain lipid droplets, are the cells that store nutrients."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Cell Structure & Function",
    type: "truefalse",
    question: "Cells that gather information and control body functions are a type of cell that fights disease.",
    answer: false,
    explanation: "The text categorizes cells that gather information and control body functions as a distinct type of cell, separate from cells that fight disease."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Cell Structure & Function",
    type: "truefalse",
    question: "The plasma membrane is responsible for segregating most other individual components of the cell, such as the nucleus and organelles.",
    answer: false,
    explanation: "The text states that 'Membranes segregate most other individual components of the cell,' not the plasma membrane specifically. The plasma membrane encompasses the functional cell unit."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Cell Structure & Function",
    type: "truefalse",
    question: "The process of reproduction in cells is fulfilled by an increase in the number and size of cells.",
    answer: true,
    explanation: "The text maps the classical property of reproduction to how cells fulfill it, which includes cell replication and growth in number and size."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Cell Structure & Function",
    type: "truefalse",
    question: "The property of irritability in living organisms corresponds to a cell's ability to move within and externally.",
    answer: false,
    explanation: "The property of irritability or responding to stimuli corresponds to a cell's ability to 'Respond to environment.' The property of movement corresponds to 'Movement within and externally.'"
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Cell Structure & Function",
    type: "truefalse",
    question: "Erythrocytes (red blood cells) contain numerous organelles, including a nucleus, to support their function of transporting oxygen.",
    answer: false,
    explanation: "The text shows erythrocytes as a type of cell and lists them under 'No organelles' and 'Nucleus,' indicating they lack these structures."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Cell Structure & Function",
    type: "truefalse",
    question: "The cytoplasm is a suspension of fluid with various cellular elements, including the nucleus and organelles.",
    answer: true,
    explanation: "The text defines the cytoplasm as a suspension of fluid with various cellular elements, which would include the organelles and the nucleus, which are suspended within it."
  },

  // SECTION 2: Membrane Transport & Diffusion
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Membrane Transport & Diffusion",
    type: "truefalse",
    question: "Passive transport requires the cell to provide metabolic energy in the form of ATP.",
    answer: false,
    explanation: "Passive transport is defined as a method of transport that does not require energy. Active transport is the method that requires the cell to provide metabolic energy (ATP)."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Membrane Transport & Diffusion",
    type: "truefalse",
    question: "In a solution, the solvent is the component in smaller quantities, while solutes are the dissolving medium.",
    answer: false,
    explanation: "The text defines a solvent as the dissolving medium (typically water in the body), and solutes are the components in smaller quantities within a solution."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Membrane Transport & Diffusion",
    type: "truefalse",
    question: "Interstitial fluid is a component of the intracellular fluid compartment.",
    answer: false,
    explanation: "Interstitial fluid is part of the extracellular fluid compartment. The intracellular fluid is the fluid found within the cells."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Membrane Transport & Diffusion",
    type: "truefalse",
    question: "Diffusion is the movement of particles from an area of high concentration to an area of low concentration.",
    answer: true,
    explanation: "The text describes diffusion as a process where particles tend to distribute themselves evenly and move from high concentration to low concentration, which is down a concentration gradient."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Membrane Transport & Diffusion",
    type: "truefalse",
    question: "Simple diffusion is a carrier-mediated process that requires metabolic energy.",
    answer: false,
    explanation: "Simple diffusion is described as an unassisted process that is not carrier-mediated. It is the only form of transport across the cell membrane that is not carrier-mediated, and it does not require metabolic energy, making it a passive process."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Membrane Transport & Diffusion",
    type: "truefalse",
    question: "Facilitated diffusion is a passive process that requires a protein carrier to transport lipid-insoluble and large substances.",
    answer: true,
    explanation: "Facilitated diffusion is a form of passive transport where substances require a protein carrier, and it is used to transport lipid-insoluble and large substances."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Membrane Transport & Diffusion",
    type: "truefalse",
    question: "In diabetes mellitus, glucose uptake by muscle and adipose cells is enhanced because the carriers for facilitated diffusion are stimulated by insulin.",
    answer: false,
    explanation: "The text states that in diabetes mellitus, glucose uptake and utilization is impaired because the carriers for facilitated diffusion require insulin."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Membrane Transport & Diffusion",
    type: "truefalse",
    question: "Filtration is the process where water and solutes are forced through a membrane by hydrostatic pressure, moving from a low-pressure area to a high-pressure area.",
    answer: false,
    explanation: "Filtration requires a pressure gradient and involves solute-containing fluid being pushed from a high-pressure area to a lower pressure area."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Membrane Transport & Diffusion",
    type: "truefalse",
    question: "Channel-mediated facilitated diffusion transports substances through a protein channel, selecting ions based on their size and charge.",
    answer: true,
    explanation: "The text describes channel-mediated facilitated diffusion as occurring through a channel protein where ions are mostly selected on the basis of size and charge."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Membrane Transport & Diffusion",
    type: "truefalse",
    question: "In the equation for diffusion, P represents the surface area of the membrane and A represents the permeability.",
    answer: false,
    explanation: "In the diffusion equation J = -P A (C_1 - C_2), P represents permeability, and A represents the area. The question incorrectly swaps their definitions."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Membrane Transport & Diffusion",
    type: "truefalse",
    question: "Permeability of a membrane increases with a decreased oil/water partition coefficient of the solute.",
    answer: false,
    explanation: "The text lists that an increased oil/water partition coefficient of the solute increases solubility in the lipid of the membrane, which increases permeability. A decreased coefficient would decrease permeability."
  },

  // SECTION 3: Osmosis & Tonicity
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Osmosis & Tonicity",
    type: "truefalse",
    question: "Osmosis is the simple diffusion of water, which can occur through aquaporins or the lipid bilayer.",
    answer: true,
    explanation: "The text identifies osmosis as simple diffusion of water. It also notes that water molecules can cross the plasma membrane through aquaporins, which are specific channel proteins."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Osmosis & Tonicity",
    type: "truefalse",
    question: "A hypotonic solution has a higher concentration of solutes and a lower concentration of water than inside the cell.",
    answer: false,
    explanation: "A hypotonic solution is defined as having a lower concentration of solutes and a higher concentration of water than inside the cell."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Osmosis & Tonicity",
    type: "truefalse",
    question: "Placing a cell in a hypertonic solution will cause it to swell and burst.",
    answer: false,
    explanation: "A hypertonic solution has a higher solute concentration and lower water concentration. Water moves from inside the cell to the solution, causing the cell to shrink (plasmolysis), not swell and burst (cytolysis)."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Osmosis & Tonicity",
    type: "truefalse",
    question: "In an isotonic solution, water moves equally in both directions, resulting in no net change in cell size.",
    answer: true,
    explanation: "The text explains that in an isotonic solution, the solute concentration is equal inside and outside the cell, so water moves equally in both directions, maintaining the cell's size in a state of dynamic equilibrium."
  },

  // SECTION 4: Active Transport & Vesicular Transport
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Active Transport & Vesicular Transport",
    type: "truefalse",
    question: "Active transport is used to move substances that are unable to pass by diffusion, such as those that are too large or cannot dissolve in the fat core of the membrane.",
    answer: true,
    explanation: "The text lists that active transport is for substances unable to pass by diffusion, which includes substances that may be too large or may not be able to dissolve in the fat core of the membrane."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Active Transport & Vesicular Transport",
    type: "truefalse",
    question: "Vesicular transport includes exocytosis and endocytosis, but it is not considered a form of active transport.",
    answer: false,
    explanation: "The text lists vesicular transport as one of the two common forms of active transport, along with active transport (solute pumping)."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Active Transport & Vesicular Transport",
    type: "truefalse",
    question: "The Na⁺-K⁺ ATPase pump transports Na⁺ from the intracellular fluid to the extracellular fluid and K⁺ in the opposite direction, maintaining a high intracellular Na⁺ concentration.",
    answer: false,
    explanation: "The Na⁺-K⁺ ATPase maintains a low intracellular Na⁺ concentration and a high intracellular K⁺ concentration by transporting Na⁺ out of the cell and K⁺ into the cell."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Active Transport & Vesicular Transport",
    type: "truefalse",
    question: "The Na⁺-K⁺ ATPase pump is specifically inhibited by the drug omeprazole.",
    answer: false,
    explanation: "The text states that specific inhibitors of the Na⁺-K⁺ ATPase are ouabain and digitalis. Omeprazole is an inhibitor of the K⁺-H⁺-ATPase (proton pump)."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Active Transport & Vesicular Transport",
    type: "truefalse",
    question: "Exocytosis is the process of moving materials into the cell by engulfing them in a membranous vesicle.",
    answer: false,
    explanation: "Exocytosis is the process of moving materials out of the cell. The process of engulfing materials into the cell is endocytosis."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Active Transport & Vesicular Transport",
    type: "truefalse",
    question: "Phagocytosis and pinocytosis are both types of endocytosis.",
    answer: true,
    explanation: "The text lists both phagocytosis ('cell eating') and pinocytosis ('cell drinking') as types of endocytosis."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Active Transport & Vesicular Transport",
    type: "truefalse",
    question: "The Ca²⁺-ATPase pump is an example of a primary active transport mechanism that transports calcium ions against their electrochemical gradient.",
    answer: true,
    explanation: "The text lists the Ca²⁺-ATPase pump as a specific example of an active transport process that transports Ca²⁺ against an electrochemical gradient and is powered by ATP."
  },

  // SECTION 5: Homeostasis & Feedback Loops
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Homeostasis & Feedback Loops",
    type: "truefalse",
    question: "The maintenance of a stable internal environment is the definition of homeostasis.",
    answer: true,
    explanation: "The text explicitly defines homeostasis as 'The maintenance of a stable Internal environment.'"
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Homeostasis & Feedback Loops",
    type: "truefalse",
    question: "A set point is the normal range of values within which a physiological condition, such as body temperature, fluctuates.",
    answer: false,
    explanation: "A set point is the physiological value around which the normal range fluctuates. The normal range is the restricted set of values that is optimally healthful and stable."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Homeostasis & Feedback Loops",
    type: "truefalse",
    question: "In a negative feedback loop, a deviation from the set point gets progressively greater.",
    answer: false,
    explanation: "In a negative feedback loop, a deviation from the set point progressively lessens. Positive feedback is the mechanism where a deviation gets progressively greater."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Homeostasis & Feedback Loops",
    type: "truefalse",
    question: "A sensor, or receptor, in a negative feedback system monitors a physiological value and reports it to the control center.",
    answer: true,
    explanation: "The text states that a sensor is a component that monitors a physiological value and this value is reported to the control center."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Homeostasis & Feedback Loops",
    type: "truefalse",
    question: "The effector is the component in a feedback system that compares the value to the normal range.",
    answer: false,
    explanation: "The control center is the component that compares the value to the normal range. The effector is the component that causes a change to reverse the situation."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Homeostasis & Feedback Loops",
    type: "truefalse",
    question: "In response to cold, the brain's heat-gain center reduces blood flow to the skin and traps heat closer to the body core.",
    answer: true,
    explanation: "The text describes that in response to cold, the brain's heat-gain center reduces blood flow to the skin, and blood from the limbs is diverted to deep veins to trap heat and restrict its loss."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Homeostasis & Feedback Loops",
    type: "truefalse",
    question: "In the blood glucose regulation feedback system, the hormone insulin is released by pancreatic alpha cells to take up excess glucose.",
    answer: false,
    explanation: "Insulin is released by pancreatic beta cells. The text states that alpha cells detect the decrease in glucose concentration and stop insulin release."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Homeostasis & Feedback Loops",
    type: "truefalse",
    question: "Positive feedback intensifies a change in a body's physiological condition and moves the system farther away from the normal range.",
    answer: true,
    explanation: "The text defines positive feedback as a mechanism that intensifies a change and moves the system farther away from the normal range."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Homeostasis & Feedback Loops",
    type: "truefalse",
    question: "In childbirth, the hormone oxytocin is released by the cervix to cause stronger uterine contractions.",
    answer: false,
    explanation: "The cervix contains stretch-sensitive nerve cells that send messages to the brain, which causes the pituitary gland to release oxytocin into the bloodstream. Oxytocin is not released by the cervix itself."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Homeostasis & Feedback Loops",
    type: "truefalse",
    question: "The body's response to blood loss involves a positive feedback loop where the process of blood clotting accelerates.",
    answer: true,
    explanation: "The text describes the response to hemorrhage as a positive feedback loop where the release of clotting substances accelerates the clotting process."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Homeostasis & Feedback Loops",
    type: "truefalse",
    question: "The normal range for a physiological parameter is a fixed value that the body aims to maintain exactly.",
    answer: false,
    explanation: "The normal range is the restricted set of values that is optimally healthful and stable, and it fluctuates around the set point. It is not a single fixed value."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Homeostasis & Feedback Loops",
    type: "truefalse",
    question: "In the control of blood glucose, the stimulus for insulin release is a decrease in blood glucose levels detected by the pancreas.",
    answer: false,
    explanation: "The stimulus for insulin release is an excess of glucose (hyperglycemia) in the bloodstream, which is detected by pancreatic beta cells. A decrease in glucose stops insulin release."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Homeostasis & Feedback Loops",
    type: "truefalse",
    question: "The body's response to hemorrhage involves a negative feedback mechanism to quickly restore blood pressure.",
    answer: false,
    explanation: "The body's response to hemorrhage involves a positive feedback loop where blood clotting is accelerated. It is an adaptive, life-saving cascade of events."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Homeostasis & Feedback Loops",
    type: "truefalse",
    question: "A normal range for human body temperature is approximately 37°C, and this value is known as the set point.",
    answer: false,
    explanation: "37°C (98.6°F) is the set point for human body temperature. The normal range is the values a few degrees above and below that point."
  },

  // SECTION 6: Fluid Compartments & Electrolytes
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Fluid Compartments & Electrolytes",
    type: "truefalse",
    question: "Adult males typically have a higher percentage of body water than adult females.",
    answer: true,
    explanation: "The text states adult males have ~60% water, while adult females have ~50% water, which is attributed to higher fat content and less skeletal muscle mass in females."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Fluid Compartments & Electrolytes",
    type: "truefalse",
    question: "The largest fluid compartment in the body is the extracellular fluid, which makes up about 2/3 of total body water.",
    answer: false,
    explanation: "The intracellular fluid (ICF) is the largest compartment, making up 2/3 (or 25 L) of total body water. The extracellular fluid (ECF) makes up the remaining 1/3 (or 15 L)."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Fluid Compartments & Electrolytes",
    type: "truefalse",
    question: "Electrolytes dissociate into ions in water and have greater osmotic power than nonelectrolytes.",
    answer: true,
    explanation: "The text states that electrolytes dissociate into ions and have greater osmotic power than nonelectrolytes, which is why they can contribute to fluid shifts."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Fluid Compartments & Electrolytes",
    type: "truefalse",
    question: "The major cation in the extracellular fluid is K⁺, while the major cation in the intracellular fluid is Na⁺.",
    answer: false,
    explanation: "The major cation in the extracellular fluid is Na⁺. The major cation in the intracellular fluid is K⁺."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Fluid Compartments & Electrolytes",
    type: "truefalse",
    question: "The concentration of electrolytes is expressed in milliequivalents per liter (mEq/L), which is a measure of the number of electrical charges per liter of solution.",
    answer: true,
    explanation: "The text defines mEq/L as a measure of the number of electrical charges per liter of solution."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Fluid Compartments & Electrolytes",
    type: "truefalse",
    question: "Water moves freely between compartments by osmosis, ensuring that the osmolalities of all body fluids are almost always equal.",
    answer: true,
    explanation: "The text states that water moves freely by osmosis and that the osmolalities of all body fluids are almost always equal."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Fluid Compartments & Electrolytes",
    type: "truefalse",
    question: "Lymph, cerebrospinal fluid, and synovial fluid are all considered part of the extracellular fluid compartment.",
    answer: true,
    explanation: "The text includes lymph, CSF, synovial fluid, and others in a list of 'Other ECF' fluids, confirming they are part of the extracellular fluid compartment."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Fluid Compartments & Electrolytes",
    type: "truefalse",
    question: "Nonelectrolytes, such as glucose and lipids, dissociate in water, which gives them a high osmotic power.",
    answer: false,
    explanation: "Nonelectrolytes, which include glucose, lipids, creatinine, and urea, do not dissociate in water. They also have less osmotic power compared to electrolytes."
  },

  // SECTION 7: Water Balance & Regulation
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Water Balance & Regulation",
    type: "truefalse",
    question: "Water intake and water output in the body are typically balanced, with an average intake and output of about 2500 ml per day.",
    answer: true,
    explanation: "The text states that water balance is maintained when intake equals output, with a value of 2500 ml/day."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Water Balance & Regulation",
    type: "truefalse",
    question: "The thirst mechanism is the driving force for water intake, and its center is located in the kidneys.",
    answer: false,
    explanation: "The thirst center is located in the hypothalamus. The text specifies that the hypothalamic thirst center osmoreceptors are stimulated by changes in plasma osmolality."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Water Balance & Regulation",
    type: "truefalse",
    question: "Antidiuretic hormone (ADH) promotes water reabsorption in the collecting ducts of the kidneys, leading to concentrated urine.",
    answer: true,
    explanation: "The text explains that water reabsorption in the collecting ducts is proportional to ADH release, and increased ADH leads to concentrated urine."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Water Balance & Regulation",
    type: "truefalse",
    question: "Dehydration is a disorder of water balance characterized by a positive fluid balance where the ECF gains excess water.",
    answer: false,
    explanation: "Dehydration is a disorder characterized by negative fluid balance and ECF water loss due to causes like hemorrhage, severe burns, or prolonged vomiting."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Water Balance & Regulation",
    type: "truefalse",
    question: "Hypotonic hydration, or water intoxication, can lead to cellular overhydration and swelling, potentially causing severe metabolic disturbances.",
    answer: true,
    explanation: "The text describes hypotonic hydration as cellular overhydration from diluted ECF, leading to hyponatremia and net osmosis into cells, causing swelling and severe metabolic disturbances."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Water Balance & Regulation",
    type: "truefalse",
    question: "Edema is an atypical accumulation of intracellular fluid that leads to tissue swelling.",
    answer: false,
    explanation: "Edema is defined as an atypical accumulation of interstitial fluid (IF), not intracellular fluid, which leads to tissue swelling."
  },

  // SECTION 8: Electrolyte Balance & Regulation
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Electrolyte Balance & Regulation",
    type: "truefalse",
    question: "An imbalance in colloid osmotic pressures, such as hypoproteinemia, can hinder fluid return and cause edema.",
    answer: true,
    explanation: "The text explains that hindered fluid return can occur with an imbalance in colloid osmotic pressures (e.g., hypoproteinemia), causing fluids to fail to return at the venous ends of capillary beds."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Electrolyte Balance & Regulation",
    type: "truefalse",
    question: "Electrolyte balance primarily refers to the balance of water, acids, and bases in the body.",
    answer: false,
    explanation: "The text states that electrolyte balance usually refers only to salt balance, not water, acids, or bases."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Electrolyte Balance & Regulation",
    type: "truefalse",
    question: "Sodium is the most abundant cation in the extracellular fluid and plays a central role in maintaining ECF solute concentration.",
    answer: true,
    explanation: "The text identifies sodium as the most abundant cation in the ECF, with its salts contributing 280 mOsm of the total 300 mOsm ECF solute concentration."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Electrolyte Balance & Regulation",
    type: "truefalse",
    question: "Aldosterone promotes the active reabsorption of sodium ions in the kidney tubules.",
    answer: true,
    explanation: "The text states that aldosterone leads to the active reabsorption of the remaining Na⁺ that hasn't been reabsorbed in the proximal tubules and loops of Henle."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Electrolyte Balance & Regulation",
    type: "truefalse",
    question: "The renin-angiotensin mechanism is the main trigger for aldosterone release, which is activated when blood pressure and stretch in the granular cells are high.",
    answer: false,
    explanation: "The granular cells of the JGA secrete renin in response to decreased stretch (due to decreased blood pressure), not increased stretch."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Electrolyte Balance & Regulation",
    type: "truefalse",
    question: "Atrial natriuretic peptide (ANP) increases blood pressure and blood volume by promoting the reabsorption of Na⁺ and water.",
    answer: false,
    explanation: "ANP decreases blood pressure and blood volume. Its effects include decreasing ADH, renin, and aldosterone production, increasing excretion of Na⁺ and water, and promoting vasodilation."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Electrolyte Balance & Regulation",
    type: "truefalse",
    question: "Baroreceptors are sensors that alert the brain to decreases in blood volume and pressure, leading to an increase in sympathetic impulses to the kidneys.",
    answer: false,
    explanation: "Baroreceptors alert the brain of increases in blood volume and pressure. In response, sympathetic nervous system impulses to the kidneys decline, leading to increased Na⁺ and water output."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Electrolyte Balance & Regulation",
    type: "truefalse",
    question: "A high extracellular concentration of K⁺ causes hyperpolarization of the resting membrane potential, leading to nonresponsiveness in neurons.",
    answer: false,
    explanation: "An increased ECF [K⁺] leads to depolarization (reduced RMP), not hyperpolarization. Hyperpolarization and nonresponsiveness are caused by decreased ECF [K⁺]."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Electrolyte Balance & Regulation",
    type: "truefalse",
    question: "Hypocalcemia, or low blood calcium, results in decreased neuromuscular excitability.",
    answer: false,
    explanation: "The text states that hypocalcemia leads to increased excitability and muscle tetany. Hypercalcemia inhibits neurons and muscle cells."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Electrolyte Balance & Regulation",
    type: "truefalse",
    question: "Parathyroid hormone (PTH) promotes an increase in blood calcium levels by targeting bones, kidneys, and the small intestine.",
    answer: true,
    explanation: "PTH promotes an increase in calcium levels by targeting bones, kidneys, and the small intestine (indirectly through vitamin D)."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Electrolyte Balance & Regulation",
    type: "truefalse",
    question: "Aldosterone release is triggered by elevated K⁺ levels in the ECF and by the renin-angiotensin mechanism.",
    answer: true,
    explanation: "The text states that the renin-angiotensin mechanism is the main trigger for aldosterone release, and it also mentions that aldosterone release is triggered by elevated K⁺ levels in the ECF."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Electrolyte Balance & Regulation",
    type: "truefalse",
    question: "Estrogens promote water retention by decreasing NaCl reabsorption, while progesterone promotes water loss by increasing Na⁺ reabsorption.",
    answer: false,
    explanation: "The text states estrogens ↑ NaCl reabsorption (leading to H₂O retention), and progesterone ↓ Na⁺ reabsorption (promoting Na⁺ and H₂O loss). The question reverses these effects."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Electrolyte Balance & Regulation",
    type: "truefalse",
    question: "Salts entering the body are lost via perspiration, feces, and urine, and this is the only way electrolyte balance is maintained.",
    answer: false,
    explanation: "While the text mentions salts enter by ingestion and are lost via perspiration, feces, and urine, it doesn't state this is the only way balance is maintained. The body has complex regulatory mechanisms like aldosterone and ADH."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Electrolyte Balance & Regulation",
    type: "truefalse",
    question: "The primary function of the renin-angiotensin-aldosterone system is to regulate potassium levels by promoting K⁺ secretion.",
    answer: false,
    explanation: "The primary trigger for this system is to regulate blood pressure and sodium balance. While aldosterone does promote K⁺ secretion, the system's main function is linked to Na⁺ and blood pressure regulation."
  },

  // SECTION 9: Acid-Base Balance
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The normal pH of arterial blood is 7.35, while the pH of venous blood and interstitial fluid is slightly higher at 7.4.",
    answer: false,
    explanation: "The text states that arterial blood has a pH of 7.4, while venous blood and interstitial fluid have a pH of 7.35. The values are reversed in the question."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Chemical buffer systems are the most potent regulators of hydrogen ion concentration, but they are the slowest to act.",
    answer: false,
    explanation: "Chemical buffer systems are the first line of defense and act rapidly. Renal mechanisms are the most potent but require hours to days to effect pH changes."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The bicarbonate buffer system is the only important buffer system in the extracellular fluid.",
    answer: true,
    explanation: "The text explicitly states that the bicarbonate buffer system is the only important ECF buffer. It is a mixture of H₂CO₃ and salts of HCO₃⁻."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The phosphate buffer system is most effective in the extracellular fluid where phosphate concentrations are high.",
    answer: false,
    explanation: "The text states that the phosphate buffer system is an effective buffer in urine and the intracellular fluid (ICF), where phosphate concentrations are high. It is not the primary ECF buffer."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Protein buffer systems are the most plentiful and powerful buffers in the body because protein molecules can function as both weak acids and weak bases.",
    answer: true,
    explanation: "The text notes that intracellular proteins are the most plentiful and powerful buffers because they are amphoteric, meaning they can function as both a weak acid and a weak base."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The respiratory system regulates H⁺ concentration by controlling the excretion of H⁺ directly through the kidneys.",
    answer: false,
    explanation: "The respiratory system regulates H⁺ by eliminating CO₂. The kidneys regulate H⁺ by excreting it or reabsorbing HCO₃⁻."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Hypercapnia, or high CO₂ levels, activates peripheral chemoreceptors which leads to a decreased respiratory rate.",
    answer: false,
    explanation: "Hypercapnia activates medullary chemoreceptors and rising plasma H⁺ activates peripheral chemoreceptors. The response is to remove more CO₂ from the blood, which involves increasing respiration."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The kidneys are the only organs that can eliminate volatile carbonic acid from the body.",
    answer: false,
    explanation: "The text states that the lungs eliminate volatile carbonic acid by eliminating CO₂. The kidneys eliminate other fixed metabolic acids."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The renal mechanism of acid-base balance involves the secretion of H⁺ into the filtrate, which is coupled with the reabsorption or generation of new HCO₃⁻.",
    answer: true,
    explanation: "The text explains that renal regulation depends on H⁺ secretion. For each H⁺ secreted, a bicarbonate ion is generated and enters the peritubular capillary blood."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "In the renal tubule cells, the enzyme carbonic anhydrase catalyzes the formation of carbonic acid from CO₂ and water, which then dissociates into H⁺ and HCO₃⁻.",
    answer: true,
    explanation: "The text describes that within the tubule cell, CO₂ combines with water to form H₂CO₃, a reaction catalyzed by carbonic anhydrase, and this H₂CO₃ splits into H⁺ and HCO₃⁻."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Tubule cell luminal membranes are freely permeable to bicarbonate (HCO₃⁻), allowing it to be reabsorbed directly into the blood.",
    answer: false,
    explanation: "The text states that tubule cell luminal membranes are impermeable to HCO₃⁻. The bicarbonate is reabsorbed by being generated within the cell and transported into the capillary blood, while the secreted H⁺ combines with the filtered HCO₃⁻."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "New bicarbonate ions can be generated in the kidney tubules through the metabolism of the amino acid glutamine, which also produces ammonium ions for excretion.",
    answer: true,
    explanation: "The text describes that metabolizing glutamine in PCT cells produces NH₄⁺ (ammonium) and 'new' HCO₃⁻. The HCO₃⁻ moves to the blood, and the NH₄⁺ is excreted in urine."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "During alkalosis, type B intercalated cells in the kidney secrete H⁺ and reclaim HCO₃⁻ to acidify the blood.",
    answer: false,
    explanation: "During alkalosis, type B intercalated cells secrete HCO₃⁻ and reclaim H⁺ to acidify the blood. The opposite occurs in acidosis with type A intercalated cells."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Respiratory acidosis is characterized by a PCO₂ level above 45 mm Hg, a falling blood pH, and is a common result of hyperventilation.",
    answer: false,
    explanation: "Respiratory acidosis is due to decreased ventilation or gas exchange, leading to high PCO₂ and falling pH. Hyperventilation leads to respiratory alkalosis, characterized by a PCO₂ below 35 mm Hg."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Metabolic acidosis is indicated by abnormal blood CO₂ levels and is caused by the ingestion of too much alcohol.",
    answer: false,
    explanation: "Metabolic acidosis is not caused by abnormal CO₂ levels but is indicated by abnormal HCO₃⁻ levels. Ingestion of too much alcohol (leading to acetic acid) is a cause of metabolic acidosis."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "A blood pH below 7 can lead to depression of the central nervous system, coma, and potentially death.",
    answer: true,
    explanation: "The text lists the effects of acidosis (blood pH below 7) as depression of the CNS, leading to coma and death."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "In respiratory compensation for metabolic acidosis, the respiratory center is stimulated, leading to slow, shallow breathing to retain CO₂.",
    answer: false,
    explanation: "In metabolic acidosis, high H⁺ levels stimulate the respiratory centers, leading to elevated rate and depth of breathing to eliminate CO₂, which compensates for the acidosis. Slow, shallow breathing is a compensation for metabolic alkalosis."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "A strong acid, like HCl, dissociates completely in water and can dramatically affect pH, whereas a weak acid, like H₂CO₃, does not dissociate completely.",
    answer: true,
    explanation: "The text describes that strong acids dissociate completely in water and can dramatically affect pH, while weak acids dissociate only partially."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The phosphate buffer system acts identically to the bicarbonate buffer system but is more effective in the ECF.",
    answer: false,
    explanation: "The text states the phosphate buffer system's action is nearly identical but effective in urine and ICF, not ECF. The bicarbonate buffer system is the only important ECF buffer."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Acidosis is a state where arterial blood pH falls below 7.35, and alkalosis is a state where it rises above 7.45.",
    answer: true,
    explanation: "The text defines acidosis or acidemia as arterial pH < 7.35 and alkalosis or alkalemia as arterial pH > 7.45."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Metabolic alkalosis is a common condition caused by the excessive loss of HCO₃⁻, such as from persistent diarrhea.",
    answer: false,
    explanation: "Metabolic alkalosis is caused by vomiting of stomach acid or intake of excess base. Persistent diarrhea leads to excessive loss of HCO₃⁻, which causes metabolic acidosis."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The respiratory system's compensation for metabolic alkalosis involves rapid, deep breathing to blow off CO₂ and lower the pH.",
    answer: false,
    explanation: "Respiratory compensation for metabolic alkalosis is revealed by slow, shallow breathing, allowing CO₂ accumulation in the blood, which lowers the pH. Rapid, deep breathing is a compensation for metabolic acidosis."
  },

  // SECTION 10: Age-Related Changes
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Age-Related Changes",
    type: "truefalse",
    question: "Infants have proportionately more extracellular fluid than adults, which contributes to their increased susceptibility to fluid and electrolyte problems.",
    answer: true,
    explanation: "The text states that infants have proportionately more ECF than adults until about 2 years of age and that problems with fluid, electrolyte, and acid-base balance are most common in infancy."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Age-Related Changes",
    type: "truefalse",
    question: "In old age, total body water often decreases, and homeostatic mechanisms slow down, making elders less susceptible to dehydration.",
    answer: false,
    explanation: "While the text confirms that total body water decreases and homeostatic mechanisms slow down in old age, it states elders may be unresponsive to thirst clues and are at risk of dehydration, making them more susceptible."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Age-Related Changes",
    type: "truefalse",
    question: "At puberty, sexual differences in body water content arise as females develop greater muscle mass.",
    answer: false,
    explanation: "The text states that sexual differences arise as males develop greater muscle mass. Females have a higher fat content."
  },
  {
    course: "Physiology",
    topic: "Cell Physiology & Homeostasis",
    subTopic: "Age-Related Changes",
    type: "truefalse",
    question: "The kidneys are the only organ system that can compensate for an acid-base imbalance of respiratory origin.",
    answer: false,
    explanation: "The text describes respiratory compensation for metabolic imbalances and renal compensation for respiratory imbalances. The respiratory system can also attempt to correct metabolic acid-base imbalances."
  },
    // ===== BIOCHEMISTRY – PROTEIN METABOLISM =====

  // SECTION 1: Amino Acids – Essential vs Non-Essential
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Phenylalanine is a non-essential amino acid because it can be synthesized from tyrosine in the body.",
    answer: false,
    explanation: "Phenylalanine is an essential amino acid that must be obtained from the diet. Tyrosine is non-essential because it can be synthesized from phenylalanine, not the reverse."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Transamination reactions in amino acid metabolism occur primarily in the kidney.",
    answer: false,
    explanation: "The major organ responsible for transamination reactions is the liver, not the kidney. The liver possesses the complete enzymatic machinery for amino acid catabolism."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Pyridoxal phosphate (PLP) is the coenzyme required for decarboxylase enzymes.",
    answer: true,
    explanation: "Decarboxylase enzymes require pyridoxal phosphate (PLP/B6-PO4) as their coenzyme. PLP forms a Schiff base intermediate with the substrate amino acid."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "The side chain of proline is bonded to both the backbone nitrogen and the α-carbon.",
    answer: true,
    explanation: "Proline's side chain forms a cyclic pyrrolidine ring by bonding to both the backbone nitrogen and the α-carbon, making it an imino acid."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Proline is commonly found in α-helices.",
    answer: false,
    explanation: "Proline acts as a helix-breaker because its cyclic structure restricts backbone geometry and prevents normal hydrogen bond formation in α-helices."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Hydroxyproline is found abundantly in collagen.",
    answer: true,
    explanation: "4-Hydroxyproline is a modified form of proline found abundantly in collagen, where it stabilizes the triple helix structure."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Vitamin C is required for the hydroxylation of proline in collagen synthesis.",
    answer: true,
    explanation: "Vitamin C (ascorbate) is required for the hydroxylation of proline to hydroxyproline. Deficiency causes scurvy with weakened collagen."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Glycine is the only achiral amino acid.",
    answer: true,
    explanation: "Glycine has two hydrogen atoms attached to its α-carbon, making it achiral. All other standard amino acids are chiral and exist as L-isomers."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "D-amino acids are used in the synthesis of mammalian proteins.",
    answer: false,
    explanation: "Mammalian proteins are formed only of L-amino acids. D-amino acids are found in plants and bacterial cell walls but not in mammalian proteins."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "The peptide bond has partial double-bond character and is rigid and planar.",
    answer: true,
    explanation: "Resonance between the C=O and N-H groups gives the peptide bond partial double-bond character, making it rigid and planar."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "The isoelectric point is the pH at which an amino acid has maximum net positive charge.",
    answer: false,
    explanation: "The isoelectric point (pI) is the pH at which an amino acid has zero net charge. It does not migrate in an electric field at this pH."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "At physiological pH, amino acids exist as zwitterions with both positive and negative charges.",
    answer: true,
    explanation: "At physiological pH (~7.4), the amino group is protonated (-NH₃⁺) and the carboxyl group is deprotonated (-COO⁻), forming a zwitterion with net zero charge."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Amino acids can act as biological buffers at pH values near their pKa values.",
    answer: true,
    explanation: "The buffering capacity of amino acids is exploited in protein chromatography and gel electrophoresis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Phenylalanine, tyrosine, and tryptophan absorb UV light at 280 nm.",
    answer: true,
    explanation: "Aromatic amino acids (phenylalanine, tyrosine, tryptophan) absorb UV light at approximately 280 nm, which is used to quantify proteins."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Kwashiorkor is caused by excess protein intake.",
    answer: false,
    explanation: "Kwashiorkor is a severe protein malnutrition caused by inadequate protein intake, especially essential amino acids, typically in weaned children on carbohydrate-rich diets."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Positive nitrogen balance occurs during growth, pregnancy, and recovery from illness.",
    answer: true,
    explanation: "Positive nitrogen balance occurs when nitrogen intake exceeds output, as in growth, pregnancy, and recovery from illness where protein synthesis exceeds catabolism."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "The primary structure of a protein is maintained by hydrogen bonds.",
    answer: false,
    explanation: "The primary structure is maintained by covalent peptide bonds. Hydrogen bonds stabilize secondary structures (α-helices and β-sheets)."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Disulfide bridges are covalent bonds that stabilize tertiary structure.",
    answer: true,
    explanation: "Disulfide bridges (-S-S-) between cysteine residues are covalent bonds that stabilize tertiary structure. They are the only covalent bonds (besides peptide bonds) in protein structure."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Denaturation of a protein disrupts its primary structure.",
    answer: false,
    explanation: "Denaturation disrupts secondary, tertiary, and quaternary structure but NOT primary structure (the amino acid sequence). The peptide bonds remain intact."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Haemoglobin is an example of quaternary protein structure.",
    answer: true,
    explanation: "Haemoglobin has quaternary structure as a tetramer of two α and two β subunits held together by non-covalent interactions."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Collagen is a fibrous protein with a triple helix structure.",
    answer: true,
    explanation: "Collagen is a fibrous protein composed of three polypeptide chains wound around each other in a triple helix, stabilized by hydroxyproline and hydroxylysine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Selenocysteine is sometimes called the 21st amino acid.",
    answer: true,
    explanation: "Selenocysteine, found in selenoproteins like glutathione peroxidase, has selenium instead of sulphur and is sometimes called the 21st amino acid."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "truefalse",
    question: "Citrulline is found in proteins.",
    answer: false,
    explanation: "Citrulline is an intermediate in the urea cycle but is NOT found in proteins. It is formed from ornithine and carbamoyl phosphate in the urea cycle."
  },

  // SECTION 2: Biogenic Amines – Decarboxylation Products
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "truefalse",
    question: "Tyramine is formed by the decarboxylation of tryptophan.",
    answer: false,
    explanation: "Tyramine is formed by the decarboxylation of tyrosine, not tryptophan. Tryptophan decarboxylation produces tryptamine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "truefalse",
    question: "Tyramine elevates blood pressure by acting as a direct agonist of alpha-1 adrenergic receptors.",
    answer: false,
    explanation: "Tyramine is an indirect sympathomimetic. It enters sympathetic nerve terminals and triggers the release of stored norepinephrine, which then activates adrenergic receptors."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "truefalse",
    question: "In patients taking MAO inhibitors, dietary tyramine is rapidly degraded in the intestinal wall and liver.",
    answer: false,
    explanation: "MAO inhibitors block the first-pass degradation of tyramine by monoamine oxidase. This allows tyramine to reach the systemic circulation, causing a hypertensive crisis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "truefalse",
    question: "Serotonin is synthesized from tryptophan via a two-step pathway involving 5-hydroxylation followed by decarboxylation.",
    answer: true,
    explanation: "Serotonin synthesis requires: tryptophan → (tryptophan-5-hydroxylase) → 5-hydroxytryptophan → (aromatic L-amino acid decarboxylase) → serotonin (5-HT)."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "truefalse",
    question: "Histamine is stored in the secretory granules of mast cells and basophils.",
    answer: true,
    explanation: "Histamine is synthesized from histidine and stored preformed in the secretory granules of mast cells and basophils, where it is released upon stimulation."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "truefalse",
    question: "Histidine decarboxylase requires NADPH as coenzyme.",
    answer: false,
    explanation: "Histidine decarboxylase requires pyridoxal phosphate (PLP/B6-PO4) as coenzyme, not NADPH."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "truefalse",
    question: "Serotonin is inactivated by MAO to 5-hydroxyindoleacetic acid (5-HIAA).",
    answer: true,
    explanation: "Serotonin is catabolized by monoamine oxidase (MAO) to 5-hydroxyindoleacetic acid (5-HIAA), which is excreted in urine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "truefalse",
    question: "Carcinoid syndrome is characterized by elevated urinary 5-HIAA.",
    answer: true,
    explanation: "Carcinoid syndrome from enterochromaffin cell tumours produces excess serotonin, and elevated urinary 5-HIAA is the diagnostic marker."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "truefalse",
    question: "H2 receptor antagonists like ranitidine block histamine's effect on gastric acid secretion.",
    answer: true,
    explanation: "H2 receptors mediate gastric acid secretion by parietal cells, and H2 blockers (ranitidine, cimetidine) are used in peptic ulcer disease."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "truefalse",
    question: "Tyramine is produced in the gut as a result of bacterial action on dietary tyrosine.",
    answer: true,
    explanation: "Tyramine is produced by decarboxylation of tyrosine by intestinal microorganisms possessing tyrosine decarboxylase."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "truefalse",
    question: "The 'cheese reaction' refers to hypertensive crisis from tyramine in patients on MAOIs.",
    answer: true,
    explanation: "The 'cheese reaction' occurs when patients on MAOIs consume tyramine-rich foods, causing hypertensive crisis due to inability to degrade tyramine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "truefalse",
    question: "5-Hydroxytryptophan (5-HTP) is the immediate precursor of serotonin.",
    answer: true,
    explanation: "5-HTP is produced by hydroxylation of tryptophan and is then decarboxylated to serotonin (5-HT) by aromatic L-amino acid decarboxylase."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "truefalse",
    question: "Tryptophan is an essential amino acid.",
    answer: true,
    explanation: "Tryptophan is an essential amino acid. It serves as the precursor for serotonin and niacin (vitamin B3) synthesis."
  },

  // SECTION 3: Phenylalanine & Tyrosine Metabolism
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "Phenylalanine hydroxylase requires tetrahydrobiopterin (BH4) as a cofactor for its activity.",
    answer: true,
    explanation: "Phenylalanine hydroxylase requires molecular oxygen, NADPH, Fe²⁺, and tetrahydrobiopterin (BH4/FH4) as cofactors for the hydroxylation of phenylalanine to tyrosine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "Tyrosine is an essential amino acid that cannot be synthesized in the body.",
    answer: false,
    explanation: "Tyrosine is non-essential in healthy individuals because it can be synthesized from phenylalanine via phenylalanine hydroxylase. It becomes conditionally essential only in PKU."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "Both phenylalanine and tyrosine are classified as both glucogenic and ketogenic amino acids.",
    answer: true,
    explanation: "Phenylalanine and tyrosine are degraded to fumarate (glucogenic) and acetoacetate (ketogenic), making them both glucogenic and ketogenic."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "Leucine and lysine are the only purely ketogenic amino acids.",
    answer: true,
    explanation: "Leucine and lysine are the only amino acids that are purely ketogenic. Their carbon skeletons yield only acetyl-CoA or acetoacetate and cannot contribute to glucose synthesis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "Phenylalanine hydroxylase is found primarily in the kidney.",
    answer: false,
    explanation: "Phenylalanine hydroxylase is a liver-specific enzyme present in the cytosol of hepatocytes, not in the kidney."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "In classic PKU, tyrosine becomes a conditionally essential amino acid.",
    answer: true,
    explanation: "In PKU, phenylalanine cannot be converted to tyrosine due to phenylalanine hydroxylase deficiency, so tyrosine must be obtained from the diet and supplemented."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "Tetrahydrobiopterin (BH4) is regenerated from dihydrobiopterin (BH2) by dihydropteridine reductase using NADPH.",
    answer: true,
    explanation: "Dihydropteridine reductase (DHPR) regenerates BH4 from BH2 using NADPH as the electron donor. This recycling is essential for sustained phenylalanine hydroxylase activity."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "Atypical PKU is caused by deficiency of phenylalanine hydroxylase enzyme protein.",
    answer: false,
    explanation: "Atypical PKU is caused by defects in BH4 metabolism (synthesis or regeneration), not by phenylalanine hydroxylase deficiency. The PAH enzyme itself is normal but cannot function without its cofactor."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "Phenylalanine and tyrosine can participate in transamination reactions.",
    answer: true,
    explanation: "Both phenylalanine and tyrosine can undergo transamination, producing phenylpyruvate and 4-hydroxyphenylpyruvate respectively."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "In PKU, phenylalanine accumulates and undergoes transamination to form phenylpyruvate.",
    answer: true,
    explanation: "When phenylalanine cannot be hydroxylated to tyrosine, it undergoes transamination to phenylpyruvate, which is then reduced to phenyllactate and phenylacetate."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "Phenylacetate is conjugated with glutamine and excreted as phenylacetylglutamine in PKU urine.",
    answer: true,
    explanation: "Phenylacetate is conjugated with glutamine to form phenylacetylglutamine, which is excreted in urine and contributes to the characteristic 'mousy odour.'"
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "Ferric chloride test gives a green colour in PKU urine due to phenylpyruvate.",
    answer: true,
    explanation: "The ferric chloride test is positive (green colour) for phenylpyruvate in PKU urine, used historically for screening."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "Newborn screening for PKU uses the Guthrie test (blood spot on filter paper).",
    answer: true,
    explanation: "The Guthrie bacterial inhibition assay detects elevated phenylalanine in blood spots and is used for universal newborn screening for PKU."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "In PKU, intellectual disability is caused by direct toxicity of phenylalanine to neurons.",
    answer: false,
    explanation: "Intellectual disability in PKU is primarily due to competitive inhibition of the LNAA transporter at the blood-brain barrier, causing reduced brain uptake of tryptophan and tyrosine and resulting in neurotransmitter depletion."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "In PKU, phenylalanine competes with other large neutral amino acids for transport across the blood-brain barrier.",
    answer: true,
    explanation: "Elevated phenylalanine competes with tryptophan, tyrosine, and other large neutral amino acids for the shared L-type LNAA transporter at the blood-brain barrier."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "BH4 deficiency impairs phenylalanine hydroxylase, tyrosine hydroxylase, and tryptophan hydroxylase simultaneously.",
    answer: true,
    explanation: "BH4 is required by all three hydroxylases: phenylalanine hydroxylase (Phe→Tyr), tyrosine hydroxylase (Tyr→DOPA), and tryptophan-5-hydroxylase (Trp→5-HTP)."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "Melanin synthesis requires the enzyme tyrosinase, which contains copper in its active site.",
    answer: true,
    explanation: "Tyrosinase is a copper-containing monooxygenase that oxidizes tyrosine to dopaquinone in melanin synthesis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "Albinos have increased risk of skin cancer due to lack of melanin protection from UV radiation.",
    answer: true,
    explanation: "Melanin protects underlying cells from harmful sunlight effects. Without melanin, albinos have photosensitivity, skin hypersensitivity, and increased skin cancer risk."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "In tyrosinaemia Type I, plasma tyrosine levels are elevated along with methionine levels.",
    answer: true,
    explanation: "In tyrosinaemia Type I, plasma tyrosine is elevated (6-12 mg/dL) and plasma methionine is also increased."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "Tyrosinaemia Type I can present with acute liver failure in infants.",
    answer: true,
    explanation: "Tyrosinaemia Type I (acute form) in infants presents with diarrhoea, vomiting, 'cabbage-like' odour, and liver failure, with death within 6-8 months if untreated."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "truefalse",
    question: "Neonatal tyrosinaemia is caused by an inherited deficiency of 4-hydroxyphenylpyruvate dioxygenase that is permanent.",
    answer: false,
    explanation: "Neonatal tyrosinaemia is due to transient/relative deficiency of 4-hydroxyphenylpyruvate dioxygenase in neonates (especially premature infants) and usually resolves spontaneously within weeks."
  },

  // SECTION 4: Catecholamine Synthesis
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Catecholamines",
    type: "truefalse",
    question: "Tyrosine hydroxylase is the rate-limiting step in catecholamine biosynthesis.",
    answer: true,
    explanation: "Tyrosine hydroxylase catalyzes the conversion of tyrosine to L-DOPA and is the rate-limiting, regulated step in catecholamine synthesis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Catecholamines",
    type: "truefalse",
    question: "Dopamine β-hydroxylase requires vitamin C (ascorbate) as a cofactor.",
    answer: true,
    explanation: "Dopamine β-hydroxylase requires vitamin C (ascorbate) as an electron donor and copper (Cu²⁺) in its active site for the hydroxylation of dopamine to norepinephrine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Catecholamines",
    type: "truefalse",
    question: "Phenylethanolamine-N-methyltransferase (PNMT) is expressed in all sympathetic nerve terminals.",
    answer: false,
    explanation: "PNMT is expressed almost exclusively in the adrenal medulla. Peripheral sympathetic nerve terminals lack PNMT and therefore release norepinephrine, not epinephrine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Catecholamines",
    type: "truefalse",
    question: "PNMT expression is induced by cortisol from the adrenal cortex.",
    answer: true,
    explanation: "Cortisol from the adrenal cortex induces PNMT expression in the adrenal medulla. This explains why the adrenal medulla produces primarily epinephrine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Catecholamines",
    type: "truefalse",
    question: "L-DOPA crosses the blood-brain barrier while dopamine cannot.",
    answer: true,
    explanation: "L-DOPA (levodopa) can cross the blood-brain barrier, whereas dopamine cannot. This is why L-DOPA is used in Parkinson's disease treatment."
  },

  // SECTION 5: Melanin & Pigmentation Disorders
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Melanin & Pigmentation",
    type: "truefalse",
    question: "Melanin is synthesized from tyrosine by the enzyme tyrosinase.",
    answer: true,
    explanation: "Tyrosinase, a copper-containing enzyme, oxidizes tyrosine to dopaquinone, which then undergoes polymerization to form melanin pigments."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Melanin & Pigmentation",
    type: "truefalse",
    question: "Pheomelanins contain sulphur while eumelanins do not.",
    answer: true,
    explanation: "Pheomelanins contain sulphur (from cysteine reacting with dopaquinone) and produce red-yellow pigments, while eumelanins lack sulphur and produce brown-black pigments."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Melanin & Pigmentation",
    type: "truefalse",
    question: "Albinism is caused by deficiency of homogentisate oxidase.",
    answer: false,
    explanation: "Albinism is caused by deficiency of tyrosinase, which is required for melanin synthesis. Homogentisate oxidase deficiency causes alkaptonuria."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Melanin & Pigmentation",
    type: "truefalse",
    question: "In alkaptonuria, freshly voided urine is dark in colour.",
    answer: false,
    explanation: "In alkaptonuria, freshly voided urine is normal in colour. It becomes dark on exposure to air due to oxidation of homogentisic acid to alkapton."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Melanin & Pigmentation",
    type: "truefalse",
    question: "Ochronosis refers to the deposition of dark pigment in connective tissues in alkaptonuria.",
    answer: true,
    explanation: "Homogentisic acid and its oxidation products polymerize and bind to collagen, causing generalized pigmentation of connective tissues called ochronosis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Melanin & Pigmentation",
    type: "truefalse",
    question: "Tyrosinaemia Type I is caused by deficiency of tyrosine aminotransferase.",
    answer: false,
    explanation: "Tyrosinaemia Type I is caused by deficiency of fumarylacetoacetate hydrolase (FAH). Tyrosine aminotransferase deficiency causes Tyrosinaemia Type II."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Melanin & Pigmentation",
    type: "truefalse",
    question: "Tyrosinaemia Type II is characterized by eye and skin lesions.",
    answer: true,
    explanation: "Tyrosinaemia Type II (Richner-Hanhart syndrome) is characterized by painful palmoplantar keratoderma, corneal erosions, and intellectual disability in some cases."
  },

  // SECTION 6: Sulphur Amino Acids – Methionine, Homocysteine, Cysteine
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Methionine is a non-essential amino acid.",
    answer: false,
    explanation: "Methionine is an essential amino acid that must be obtained from the diet. It serves as the primary dietary sulphur source for cysteine biosynthesis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "SAM (S-adenosyl methionine) is formed by the reaction of methionine with ATP.",
    answer: true,
    explanation: "Methionine adenosyl transferase (MAT) catalyzes the activation of methionine by ATP to form S-adenosyl methionine (SAM), releasing PPi and Pi."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "In SAM, the methyl group is labile and can be easily transferred to methyl acceptors.",
    answer: true,
    explanation: "In SAM, the high-energy sulfonium bond makes the methyl group labile and easily transferable to acceptors via methyltransferase enzymes."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Creatine synthesis is a major consumer of SAM-derived methyl groups.",
    answer: true,
    explanation: "Creatine synthesis from guanidinoacetate requires SAM as the methyl donor and is one of the major consumers of SAM-derived methyl groups."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Homocysteine can be remethylated to methionine using 5-methyltetrahydrofolate as the methyl donor.",
    answer: true,
    explanation: "Homocysteine can be remethylated to methionine by methionine synthase, which uses 5-methyl-THF as the methyl donor and requires vitamin B12 as cofactor."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Vitamin B12 is required as a cofactor for cystathionine beta-synthase.",
    answer: false,
    explanation: "Cystathionine beta-synthase requires pyridoxal phosphate (PLP/Vitamin B6) as its cofactor, not vitamin B12. Vitamin B12 is required for methionine synthase."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Cystathionine beta-synthase deficiency causes homocystinuria.",
    answer: true,
    explanation: "Deficiency of cystathionine beta-synthase (CBS) causes classic homocystinuria, characterized by accumulation of homocysteine and its urinary excretion."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "In homocystinuria, lens dislocation is typically upward and outward.",
    answer: false,
    explanation: "In homocystinuria, lens dislocation is typically downward and inward (inferonasal). Upward and outward dislocation is characteristic of Marfan's syndrome."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Homocysteine is an independent cardiovascular risk factor.",
    answer: true,
    explanation: "Elevated plasma homocysteine is an independent risk factor for coronary artery disease, stroke, and peripheral vascular disease due to endothelial injury and prothrombotic effects."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Vitamin B12 deficiency can cause hyperhomocysteinaemia.",
    answer: true,
    explanation: "Vitamin B12 deficiency impairs the remethylation of homocysteine to methionine, leading to accumulation of homocysteine and hyperhomocysteinaemia."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Glutathione is a tripeptide composed of glutamate, cysteine, and alanine.",
    answer: false,
    explanation: "Glutathione (GSH) is a tripeptide composed of glutamate, cysteine, and glycine (γ-Glu-Cys-Gly). The active -SH group is provided by cysteine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "The active reducing moiety of glutathione is the thiol (-SH) group from cysteine.",
    answer: true,
    explanation: "The thiol (-SH) group of cysteine in glutathione is the active reducing moiety that participates in antioxidant reactions, reducing peroxides to water."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Glutathione peroxidase requires selenium as a cofactor.",
    answer: true,
    explanation: "Glutathione peroxidase is a selenoprotein that requires selenium as a cofactor to catalyze the reduction of hydrogen peroxide and lipid hydroperoxides."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "G6PD deficiency leads to increased NADPH production and protection against oxidative stress.",
    answer: false,
    explanation: "G6PD deficiency leads to decreased NADPH production, which impairs glutathione reductase's ability to regenerate GSH from GSSG, causing susceptibility to oxidative haemolysis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Primaquine is a trigger for haemolysis in G6PD-deficient patients.",
    answer: true,
    explanation: "Primaquine (an antimalarial) generates reactive oxygen species that overwhelm the depleted glutathione system in G6PD-deficient RBCs, causing oxidative haemolysis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Cysteine is abundant in keratin of hair, nails, and skin.",
    answer: true,
    explanation: "Cysteine is particularly prominent in keratin, the structural protein of hair, nails, hoofs, and skin epidermis, where disulfide bonds provide mechanical strength."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Insulin contains disulfide bonds that are essential for its structure and function.",
    answer: true,
    explanation: "Insulin contains three disulfide bonds (two inter-chain and one intra-chain) that are essential for its native three-dimensional structure and receptor-binding activity."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Cysteine is a non-essential amino acid that is glucogenic.",
    answer: true,
    explanation: "Cysteine is non-essential (synthesized from methionine and serine) and glucogenic because it is catabolized to pyruvate."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Trans-sulfuration is the transfer of sulphur from methionine to serine to form cysteine.",
    answer: true,
    explanation: "Trans-sulfuration involves the transfer of the sulphur atom from methionine (via homocysteine) to the carbon skeleton of serine to form cysteine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Cystathionine is formed by the condensation of homocysteine with serine.",
    answer: true,
    explanation: "Cystathionine beta-synthase (CBS) catalyzes the condensation of homocysteine with serine to form cystathionine, requiring PLP as cofactor."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Cystathionase catalyzes the conversion of cystathionine to cysteine and homoserine.",
    answer: true,
    explanation: "Cystathionase hydrolyzes cystathionine to cysteine and homoserine, also requiring PLP as cofactor."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Homoserine is deaminated and decarboxylated to acetyl-CoA.",
    answer: false,
    explanation: "Homoserine is deaminated and then decarboxylated to propionyl-CoA, which enters the TCA cycle as succinyl-CoA."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Both cystathionine beta-synthase and cystathionase require vitamin B6 (PLP) as cofactor.",
    answer: true,
    explanation: "Both enzymes in the trans-sulfuration pathway require pyridoxal phosphate (PLP/Vitamin B6) as cofactor."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "SAM is required for the synthesis of melatonin.",
    answer: true,
    explanation: "Melatonin synthesis from N-acetylserotonin requires SAM as the methyl donor."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Cysteine is catabolized to form pyruvic acid, which can be converted to glucose.",
    answer: true,
    explanation: "Cysteine is glucogenic; its catabolism yields pyruvate, which can be converted to glucose via gluconeogenesis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Mercaptoethanolamine from cysteine is an important constituent of coenzyme A.",
    answer: true,
    explanation: "Cysteine is the precursor of mercaptoethanolamine (cysteamine), which is an important structural constituent of Coenzyme A (CoA)."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Vasopressin contains cysteine residues that form disulfide bonds.",
    answer: true,
    explanation: "Vasopressin (ADH) is a peptide hormone with a disulfide bond formed between cysteine residues, necessary for its biological activity."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "Paracetamol overdose depletes hepatic glutathione stores.",
    answer: true,
    explanation: "Paracetamol's toxic metabolite NAPQI conjugates with glutathione, depleting hepatic GSH stores and leading to hepatocyte necrosis if untreated."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "truefalse",
    question: "N-acetylcysteine is used in paracetamol overdose to replenish glutathione.",
    answer: true,
    explanation: "N-acetylcysteine (NAC) provides cysteine after deacetylation, which is the rate-limiting substrate for glutathione synthesis, bypassing the slower trans-sulfuration pathway."
  },

  // SECTION 7: Transamination & Deamination
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "Decarboxylation of amino acids produces 2-oxoacids.",
    answer: false,
    explanation: "Decarboxylation removes the carboxyl group as CO₂ and produces biogenic amines. Transamination produces 2-oxoacids."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "Transamination is a reversible reaction.",
    answer: true,
    explanation: "Transamination is a reversible reaction catalyzed by aminotransferases, allowing both degradation of amino acids and synthesis of non-essential amino acids."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "Oxidative deamination of glutamate produces α-ketoglutarate and ammonia.",
    answer: true,
    explanation: "Glutamate dehydrogenase catalyzes the oxidative deamination of glutamate to α-ketoglutarate, releasing NH₄⁺ and producing NADH."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "L-amino acid oxidase is the major enzyme for oxidative deamination in mammalian tissues.",
    answer: false,
    explanation: "Glutamate dehydrogenase is the major enzyme for oxidative deamination in mammalian tissues. L-amino acid oxidase has minimal activity in mammalian tissues."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "ALT (alanine aminotransferase) is predominantly found in cardiac muscle.",
    answer: false,
    explanation: "ALT is predominantly found in the liver. AST is found in both liver and heart muscle and is elevated in both liver disease and myocardial infarction."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "AST:ALT ratio greater than 2:1 suggests alcoholic liver disease.",
    answer: true,
    explanation: "An AST:ALT ratio >2:1 is characteristic of alcoholic liver disease, while a ratio <1 suggests viral hepatitis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "All amino acids except threonine, lysine, proline, and hydroxyproline can undergo transamination.",
    answer: true,
    explanation: "Threonine, lysine, proline, and hydroxyproline cannot undergo transamination. The other amino acids can participate in transamination reactions."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "Transamination produces free ammonia directly.",
    answer: false,
    explanation: "Transamination transfers amino groups but does not produce free ammonia. Free ammonia is produced by oxidative deamination of glutamate."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "The coenzyme for transamination is pyridoxal phosphate (PLP).",
    answer: true,
    explanation: "PLP (Vitamin B6) is the coenzyme for all transaminases (aminotransferases), forming a Schiff base intermediate with the amino acid."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "L-α-amino acid oxidase deaminates most naturally occurring L-amino acids.",
    answer: true,
    explanation: "L-amino acid oxidase deaminates most naturally occurring L-amino acids, but it has minimal activity in mammalian tissues compared to glutamate dehydrogenase."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "D-amino acid oxidase deaminates D-amino acids from the diet.",
    answer: true,
    explanation: "D-amino acid oxidase deaminates D-amino acids present in the diet, producing α-keto acids that can be transaminated to L-amino acids or catabolized."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "Deamination of cysteine by cysteine desulfhydrase is an example of transamination.",
    answer: false,
    explanation: "Deamination of cysteine by cysteine desulfhydrase is a specific method of deamination (desulfhydration), not transamination."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "Histidase catalyzes non-oxidative deamination of histidine.",
    answer: true,
    explanation: "Histidase catalyzes non-oxidative deamination of histidine to urocanic acid. Deficiency causes histidinaemia."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "Dehydratases catalyze non-oxidative deamination of hydroxy-containing amino acids.",
    answer: true,
    explanation: "Dehydratases catalyze non-oxidative deamination of serine and threonine (hydroxy-containing amino acids)."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "Glutaminase catalyzes the hydrolytic deamination of glutamine.",
    answer: true,
    explanation: "Glutaminase catalyzes the hydrolytic deamination of glutamine to glutamate and ammonia in the kidney, accounting for 60% of urinary ammonia."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "Glutamate is the only amino acid that undergoes oxidative deamination at an appreciable rate in mammalian tissues.",
    answer: true,
    explanation: "Glutamate dehydrogenase is the only enzyme that catalyzes oxidative deamination of an amino acid at an appreciable rate in mammalian tissues."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "truefalse",
    question: "Branched-chain amino acids competitively inhibit glutamate dehydrogenase.",
    answer: true,
    explanation: "Branched-chain amino acids competitively inhibit glutamate dehydrogenase, contributing to the metabolic effects seen in MSUD."
  },

  // SECTION 8: Urea Cycle
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "The urea cycle occurs entirely in the cytoplasm of hepatocytes.",
    answer: false,
    explanation: "The urea cycle occurs in both mitochondria (steps 1-2: carbamoyl phosphate synthesis and citrulline formation) and cytoplasm (steps 3-5)."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "Carbamoyl phosphate synthetase I requires N-acetylglutamate as an allosteric activator.",
    answer: true,
    explanation: "CPS-I requires N-acetylglutamate as an absolute allosteric activator. The synthesis of N-acetylglutamate is stimulated by high protein diet and arginine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "Ornithine transcarbamylase deficiency is the most common urea cycle disorder and is X-linked.",
    answer: true,
    explanation: "OTC deficiency is the most common urea cycle disorder. It is X-linked, so males are more severely affected, and females are carriers with variable expression."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "Arginase catalyzes the conversion of arginine to ornithine and urea.",
    answer: true,
    explanation: "Arginase is the final enzyme of the urea cycle, catalyzing the hydrolysis of arginine to ornithine and urea. Ornithine is regenerated for another cycle."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "One molecule of urea contains two nitrogen atoms, one from ammonia and one from aspartate.",
    answer: true,
    explanation: "The first nitrogen of urea comes from ammonia (via carbamoyl phosphate), and the second nitrogen comes from aspartate via argininosuccinate synthesis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "The urea cycle consumes four high-energy phosphate bonds (3 ATP equivalents).",
    answer: true,
    explanation: "The urea cycle consumes 4 high-energy phosphate bonds: 2 ATP are hydrolyzed to 2 ADP + Pi for carbamoyl phosphate synthesis, and 1 ATP is hydrolyzed to AMP + PPi for argininosuccinate synthesis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "Fumarate produced in the urea cycle links the cycle to glycolysis.",
    answer: false,
    explanation: "Fumarate links the urea cycle to the TCA cycle (Krebs cycle), not glycolysis. Fumarate is converted to malate and then oxaloacetate in the TCA cycle."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "Ornithine is regenerated in the urea cycle and acts as a carrier molecule.",
    answer: true,
    explanation: "Ornithine is regenerated with each turn of the urea cycle, acting as a carrier molecule (similar to oxaloacetate in the TCA cycle)."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "The principal site for urea formation is the kidney.",
    answer: false,
    explanation: "The principal site for urea formation is the liver. Urea is then excreted through the kidneys."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "Glutamine is produced in many extra-renal tissues including muscle, liver, and brain.",
    answer: true,
    explanation: "Glutamine synthetase produces glutamine in muscle (for ammonia transport), liver (scavenging ammonia), and brain (detoxifying ammonia)."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "In the kidney, glutamine is hydrolyzed to glutamate and ammonia for urinary excretion.",
    answer: true,
    explanation: "Renal glutaminase hydrolyzes glutamine to glutamate and ammonia, which is directly excreted in urine, accounting for 60% of urinary ammonia."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "Ammonia produced from amino acid deamination in the kidney regulates acid-base balance.",
    answer: true,
    explanation: "Ammonia produced from amino acid deamination in the kidney, especially from glutamine, helps regulate acid-base balance and preserve cations."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "Carbamoyl phosphate synthetase II is involved in the urea cycle.",
    answer: false,
    explanation: "Carbamoyl phosphate synthetase I is involved in the urea cycle (mitochondria). Carbamoyl phosphate synthetase II is involved in pyrimidine synthesis (cytoplasm)."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "CPS-I requires ammonia as the nitrogen source while CPS-II uses glutamine.",
    answer: true,
    explanation: "CPS-I uses ammonia as its nitrogen source for urea synthesis, while CPS-II uses glutamine for pyrimidine synthesis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "N-acetylglutamate is an inhibitor of carbamoyl phosphate synthetase I.",
    answer: false,
    explanation: "N-acetylglutamate is an allosteric activator of CPS-I, not an inhibitor. Its synthesis is increased by high protein diet and arginine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "truefalse",
    question: "The energy expenditure of the urea cycle is net zero because NADH produced in the cycle generates ATP.",
    answer: false,
    explanation: "While NADH produced from glutamate oxidation and fumarate metabolism can generate ATP, the net energy expenditure is still one high-energy phosphate bond. The cycle consumes 4 ATP equivalents."
  },

  // SECTION 9: Branched-Chain Amino Acids & Inborn Errors
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "truefalse",
    question: "Branched-chain amino acids are catabolized primarily in the liver.",
    answer: false,
    explanation: "Branched-chain amino acids (leucine, isoleucine, valine) are catabolized primarily in muscle, not the liver. This is a unique feature of BCAA metabolism."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "truefalse",
    question: "Valine is purely ketogenic.",
    answer: false,
    explanation: "Valine is purely glucogenic. It is converted to propionyl-CoA, which enters the TCA cycle as succinyl-CoA and can be used for gluconeogenesis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "truefalse",
    question: "Leucine is purely ketogenic.",
    answer: true,
    explanation: "Leucine is purely ketogenic. Its catabolism yields acetyl-CoA and acetoacetate only, neither of which can contribute to net glucose synthesis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "truefalse",
    question: "Isoleucine is both glucogenic and ketogenic.",
    answer: true,
    explanation: "Isoleucine is both glucogenic and ketogenic because it yields propionyl-CoA (glucogenic) and acetyl-CoA (ketogenic)."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "truefalse",
    question: "Maple syrup urine disease is caused by deficiency of BCAA aminotransferase.",
    answer: false,
    explanation: "MSUD is caused by deficiency of branched-chain α-ketoacid dehydrogenase (BCKAD) complex, not BCAA aminotransferase. The defect is in oxidative decarboxylation of BCAA ketoacids."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "truefalse",
    question: "In MSUD, urine has a characteristic odour similar to maple syrup or burnt sugar.",
    answer: true,
    explanation: "Accumulation of branched-chain ketoacids (leucine, isoleucine, valine) imparts a typical odour to urine similar to maple syrup or burnt sugar."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "truefalse",
    question: "MSUD clinical signs appear within one week of birth.",
    answer: true,
    explanation: "Clinical signs of classic MSUD appear within one week of birth, with lethargy, vomiting, and aversion to food followed by severe brain damage."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "truefalse",
    question: "Treatment of MSUD includes exclusion of branched-chain amino acids from the diet.",
    answer: true,
    explanation: "Treatment consists of a diet low in branched-chain amino acids (valine, leucine, isoleucine) to reduce their accumulation and prevent neurological damage."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "truefalse",
    question: "Intermittent branched-chain ketonuria is a more severe form of MSUD.",
    answer: false,
    explanation: "Intermittent branched-chain ketonuria is a milder variant of MSUD with only moderate decrease in enzyme activity and later onset of milder symptoms."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "truefalse",
    question: "Histidinaemia is caused by deficiency of histidase.",
    answer: true,
    explanation: "Histidinaemia is an inborn error of histidine metabolism caused by deficiency of histidase, which normally converts histidine to urocanic acid."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "truefalse",
    question: "Histidinaemia always causes severe intellectual disability.",
    answer: false,
    explanation: "Most subjects with histidinaemia have no symptoms. Only about 1% develop behavioural problems, learning disorders, or intellectual disability, usually with perinatal hypoxia."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "truefalse",
    question: "Primary hyperoxaluria is a disorder of glyoxylate metabolism.",
    answer: true,
    explanation: "Primary hyperoxaluria is a disorder of glyoxylate metabolism, where glyoxylate is converted to oxalate rather than transaminated to glycine or oxidized to formate."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "truefalse",
    question: "In cystinuria, there is a defect in tubular reabsorption of cystine only.",
    answer: false,
    explanation: "In cystinuria, there is a defect in tubular reabsorption of cystine, lysine, arginine, and ornithine (all dibasic amino acids) due to a shared transporter defect."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "truefalse",
    question: "Cystine stones form in the kidneys because cystine is highly soluble in urine.",
    answer: false,
    explanation: "Cystine stones form because cystine is sparingly soluble in urine and precipitates at normal urine pH, forming characteristic hexagonal crystals."
  },

  // SECTION 10: Ammonia Metabolism & Toxicity
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Ammonia Metabolism",
    type: "truefalse",
    question: "Glutamine formation is a mechanism for scavenging ammonia that has not been incorporated into urea.",
    answer: true,
    explanation: "Glutamine synthetase converts glutamate and ammonia to glutamine, serving as a scavenging mechanism for ammonia in tissues, especially in the brain."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Ammonia Metabolism",
    type: "truefalse",
    question: "Brain glutamine formation and transport contributes to increased tryptophan uptake into the brain.",
    answer: true,
    explanation: "Increased brain glutamine enhances the outflow of glutamine via a transporter that also allows tryptophan entry, leading to increased serotonin synthesis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Ammonia Metabolism",
    type: "truefalse",
    question: "Ammonia toxicity is partly due to depletion of α-ketoglutarate from the TCA cycle.",
    answer: true,
    explanation: "Increased NH₃ enhances amination of α-ketoglutarate to form glutamate, reducing the mitochondrial pool of α-ketoglutarate and depressing the TCA cycle."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Ammonia Metabolism",
    type: "truefalse",
    question: "GABA (gamma-aminobutyric acid) is an inhibitory neurotransmitter synthesized from glutamate.",
    answer: true,
    explanation: "GABA is synthesized by decarboxylation of glutamate. Increased ammonia reduces brain glutamate, decreasing GABA formation."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Ammonia Metabolism",
    type: "truefalse",
    question: "Ammonia is normally present in blood at levels >1 mg/dL.",
    answer: false,
    explanation: "Normal blood ammonia level is <0.1 mg/dL. Even minute quantities of ammonia can produce toxicity in the central nervous system."
  },
    // ===== PROTEIN METABOLISM – MCQ =====

  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines & Catecholamines",
    type: "multiplechoice",
    question: "A 45-year-old man on phenelzine (an MAOI) develops a severe headache and blood pressure of 210/130 mmHg after consuming aged cheddar cheese. Which biochemical event most directly explains this presentation?",
    options: [
      "A. Increased synthesis of norepinephrine from phenylalanine in adrenal chromaffin cells",
      "B. Failure of first-pass MAO-mediated degradation of gut-derived tyramine, causing systemic indirect sympathomimesis",
      "C. Inhibition of tyrosine hydroxylase by the cheese protein, reducing feedback inhibition of catecholamine synthesis",
      "D. Direct agonism of α1-adrenergic receptors by tyramine acting on postsynaptic membranes"
    ],
    correctAnswer: "B. Failure of first-pass MAO-mediated degradation of gut-derived tyramine, causing systemic indirect sympathomimesis",
    explanation: "Tyramine from aged cheese is normally degraded by MAO in the gut wall and liver. MAO inhibitors block this first-pass metabolism, allowing tyramine to reach systemic circulation and trigger norepinephrine release. Tyramine is an indirect sympathomimetic, not a direct receptor agonist."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "multiplechoice",
    question: "Which of the following best explains how pyridoxal phosphate (PLP) can function as a coenzyme for both decarboxylation and transamination reactions?",
    options: [
      "A. Different isoforms of PLP exist for each reaction type",
      "B. PLP forms a Schiff base with the amino acid, and the reaction outcome depends on which bond of the substrate is broken",
      "C. PLP acts as an electron donor in decarboxylation but as a methyl donor in transamination",
      "D. The direction is determined by the redox state of PLP"
    ],
    correctAnswer: "B. PLP forms a Schiff base with the amino acid, and the reaction outcome depends on which bond of the substrate is broken",
    explanation: "PLP forms a Schiff base (aldimine) with the amino acid. The PLP ring acts as an electron sink. The enzyme's active site geometry determines which bond breaks: C-COOH for decarboxylation or C-NH for transamination. There is only one form of PLP."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines & Catecholamines",
    type: "multiplechoice",
    question: "A patient presents with chronic flushing, diarrhoea, and bronchospasm. A 24-hour urine collection shows markedly elevated 5-hydroxyindoleacetic acid (5-HIAA). Which amino acid is the precursor of the compound causing these symptoms?",
    options: [
      "A. Tyrosine",
      "B. Histidine",
      "C. Tryptophan",
      "D. Phenylalanine"
    ],
    correctAnswer: "C. Tryptophan",
    explanation: "This is carcinoid syndrome from excess serotonin produced by enterochromaffin cell tumours. Serotonin is synthesized from tryptophan via 5-hydroxylation to 5-HTP followed by decarboxylation. Serotonin is catabolized to 5-HIAA, which is excreted in urine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "multiplechoice",
    question: "A patient with PKU has elevated phenylalanine levels. Which of the following explains why intellectual disability occurs if PKU is untreated?",
    options: [
      "A. Phenylpyruvate directly alkylates hepatocyte DNA, causing progressive liver failure",
      "B. Elevated phenylalanine competitively inhibits LNAA transport at the blood-brain barrier, reducing brain tryptophan and tyrosine",
      "C. Accumulated phenylalanine is directly toxic to oligodendrocytes as potent oxidants",
      "D. Phenylalanine is converted to epinephrine via an alternative pathway, causing cardiac arrhythmias"
    ],
    correctAnswer: "B. Elevated phenylalanine competitively inhibits LNAA transport at the blood-brain barrier, reducing brain tryptophan and tyrosine",
    explanation: "Elevated phenylalanine competes with other large neutral amino acids (tryptophan, tyrosine) for transport across the blood-brain barrier. Reduced brain tryptophan decreases serotonin synthesis, and reduced tyrosine decreases dopamine/norepinephrine synthesis. This neurotransmitter depletion impairs myelination and neurodevelopment."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "multiplechoice",
    question: "A patient has hyperphenylalaninaemia with a normal phenylalanine hydroxylase gene but low CSF serotonin and dopamine. The defect is most likely in which enzyme?",
    options: [
      "A. Aromatic L-amino acid decarboxylase",
      "B. Dihydropteridine reductase (DHPR)",
      "C. Phenylalanine hydroxylase",
      "D. Methionine adenosyl transferase"
    ],
    correctAnswer: "B. Dihydropteridine reductase (DHPR)",
    explanation: "BH4 is required by phenylalanine hydroxylase, tyrosine hydroxylase (catecholamine synthesis), and tryptophan-5-hydroxylase (serotonin synthesis). DHPR deficiency prevents BH4 regeneration, impairing all three hydroxylases simultaneously. This is atypical/malignant PKU."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Catecholamines",
    type: "multiplechoice",
    question: "In catecholamine synthesis, which step is rate-limiting and which cofactor is required?",
    options: [
      "A. DOPA → Dopamine; requires PLP",
      "B. Tyrosine → L-DOPA; requires tetrahydrobiopterin (BH4)",
      "C. Dopamine → Norepinephrine; requires vitamin C",
      "D. Norepinephrine → Epinephrine; requires SAM"
    ],
    correctAnswer: "B. Tyrosine → L-DOPA; requires tetrahydrobiopterin (BH4)",
    explanation: "Tyrosine hydroxylase catalyzes the conversion of tyrosine to L-DOPA and is the rate-limiting step. It requires tetrahydrobiopterin (BH4), molecular oxygen, and Fe²⁺. This is the main regulatory point of catecholamine synthesis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Catecholamines",
    type: "multiplechoice",
    question: "A patient with chronic cortisol excess (Cushing's syndrome) would most likely show which change in catecholamine metabolism?",
    options: [
      "A. Decreased epinephrine synthesis because cortisol downregulates PNMT",
      "B. Increased conversion of norepinephrine to epinephrine because cortisol upregulates PNMT",
      "C. Increased dopamine production due to enhanced DOPA decarboxylase",
      "D. No change because PNMT is constitutively expressed"
    ],
    correctAnswer: "B. Increased conversion of norepinephrine to epinephrine because cortisol upregulates PNMT",
    explanation: "PNMT (phenylethanolamine-N-methyltransferase) is induced by cortisol in the adrenal medulla. Cortisol from the adrenal cortex bathes the medulla, maintaining PNMT activity. In Cushing's syndrome, cortisol excess would upregulate PNMT, increasing epinephrine synthesis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Melanin & Pigmentation",
    type: "multiplechoice",
    question: "A 35-year-old man has dark discolouration of ear cartilage and sclera, and his urine turns dark brown-black on standing. Which enzyme is deficient?",
    options: [
      "A. Tyrosinase",
      "B. Phenylalanine hydroxylase",
      "C. Homogentisate 1,2-dioxygenase",
      "D. 4-Hydroxyphenylpyruvate dioxygenase"
    ],
    correctAnswer: "C. Homogentisate 1,2-dioxygenase",
    explanation: "This is alkaptonuria, caused by deficiency of homogentisate 1,2-dioxygenase. Homogentisic acid accumulates and oxidizes to alkapton in urine (dark on standing) and deposits in connective tissues (ochronosis), causing dark pigmentation and late arthropathy."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Melanin & Pigmentation",
    type: "multiplechoice",
    question: "A child with albinism has normal tyrosinase gene sequence but reduced enzyme activity. Which finding best distinguishes this from tyrosinase-negative albinism?",
    options: [
      "A. Presence of detectable melanin in hair follicles",
      "B. Normal urine homogentisate levels",
      "C. Elevated plasma phenylalanine",
      "D. Normal thyroid hormone levels"
    ],
    correctAnswer: "A. Presence of detectable melanin in hair follicles",
    explanation: "Tyrosinase-positive albinism (OCA2) has reduced but detectable tyrosinase activity, allowing trace melanin production detectable in hair bulbs. Tyrosinase-negative albinism (OCA1A) produces no melanin. Both have normal homogentisate levels and normal thyroid hormones."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "multiplechoice",
    question: "A 12-year-old girl is tall with long fingers, downward lens dislocation, and mild intellectual disability. Plasma methionine and homocysteine are elevated. Vitamin B6 reduces her homocysteine levels. Which explains B6's mechanism?",
    options: [
      "A. Pyridoxine is a cofactor for methionine synthase, stimulating remethylation",
      "B. Pyridoxine (as PLP) is the cofactor for cystathionine beta-synthase; high doses increase residual CBS activity",
      "C. Pyridoxine inhibits methionine adenosyl transferase, reducing SAM production",
      "D. Pyridoxine activates betaine-homocysteine methyltransferase"
    ],
    correctAnswer: "B. Pyridoxine (as PLP) is the cofactor for cystathionine beta-synthase; high doses increase residual CBS activity",
    explanation: "This is pyridoxine-responsive homocystinuria due to CBS deficiency. CBS requires PLP (Vitamin B6) as cofactor. Supraphysiological B6 doses can stabilize mutant CBS, partially restore activity, and promote homocysteine condensation with serine to form cystathionine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "multiplechoice",
    question: "A patient with G6PD deficiency develops haemolytic anaemia after taking primaquine. Which sequence of events explains this?",
    options: [
      "A. Primaquine inhibits glutathione peroxidase → reduced peroxide reduction → haemolysis",
      "B. G6PD deficiency → ↓ NADPH → ↓ GSSG reduction to GSH → oxidative damage → haemolysis",
      "C. G6PD deficiency → glucose-6-phosphate accumulation → osmotic lysis",
      "D. Primaquine inhibits cystathionine beta-synthase → ↓ cysteine → ↓ glutathione → haemolysis"
    ],
    correctAnswer: "B. G6PD deficiency → ↓ NADPH → ↓ GSSG reduction to GSH → oxidative damage → haemolysis",
    explanation: "G6PD deficiency reduces NADPH production, impairing glutathione reductase's ability to regenerate GSH from GSSG. Oxidative stress from primaquine metabolites overwhelms depleted GSH, causing oxidation of haemoglobin (Heinz bodies) and membrane lipid peroxidation, leading to haemolysis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "multiplechoice",
    question: "Which of the following is the most direct approach to replenish hepatic glutathione in paracetamol overdose?",
    options: [
      "A. Administer methionine to supply sulphur via trans-sulfuration",
      "B. Administer N-acetylcysteine (NAC) which provides cysteine directly",
      "C. Administer folate and vitamin B12 to enhance remethylation",
      "D. Administer pyridoxine to activate cystathionine beta-synthase"
    ],
    correctAnswer: "B. Administer N-acetylcysteine (NAC) which provides cysteine directly",
    explanation: "N-acetylcysteine (NAC) provides cysteine directly after deacetylation. Cysteine is the rate-limiting substrate for glutathione synthesis. This bypasses the slower trans-sulfuration pathway from methionine and rapidly replenishes GSH to neutralize the toxic NAPQI metabolite."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "multiplechoice",
    question: "A patient with recurrent kidney stones has hexagonal crystals in urine and elevated urinary lysine, arginine, and ornithine. What is the biochemical basis?",
    options: [
      "A. Excessive cystine synthesis from methionine due to upregulation of cystathionase",
      "B. Defective renal tubular reabsorption of cystine and dibasic amino acids due to transporter mutation",
      "C. CBS deficiency causing homocystinuria with cystine stone formation",
      "D. G6PD deficiency reducing renal GSH levels"
    ],
    correctAnswer: "B. Defective renal tubular reabsorption of cystine and dibasic amino acids due to transporter mutation",
    explanation: "This is cystinuria, caused by defective renal tubular reabsorption of cystine, lysine, arginine, and ornithine (dibasic amino acids) due to SLC3A1/SLC7A9 mutations. Cystine is sparingly soluble and precipitates as hexagonal crystals and kidney stones."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "multiplechoice",
    question: "A vegetarian woman has hyperhomocysteinaemia (22 μmol/L). Which nutritional deficiency most likely explains this?",
    options: [
      "A. Iron deficiency impairing CBS",
      "B. Vitamin B12 and/or folate deficiency impairing methionine synthase",
      "C. Vitamin B6 deficiency impairing methionine synthase",
      "D. Selenium deficiency impairing glutathione peroxidase"
    ],
    correctAnswer: "B. Vitamin B12 and/or folate deficiency impairing methionine synthase",
    explanation: "Vitamin B12 and folate are required for methionine synthase to remethylate homocysteine to methionine. B12 is found mainly in animal products, so vegetarians are at risk. Deficiency impairs this reaction, causing homocysteine accumulation. B6 deficiency would affect trans-sulfuration, not remethylation."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "multiplechoice",
    question: "Which statement correctly describes the metabolic fate of branched-chain amino acids?",
    options: [
      "A. Valine is purely ketogenic",
      "B. Leucine is purely ketogenic",
      "C. Isoleucine is purely glucogenic",
      "D. All three are catabolized in the liver"
    ],
    correctAnswer: "B. Leucine is purely ketogenic",
    explanation: "Leucine is purely ketogenic (yields acetyl-CoA and acetoacetate). Valine is purely glucogenic (yields propionyl-CoA → succinyl-CoA). Isoleucine is both glucogenic and ketogenic. BCAAs are catabolized primarily in muscle, not liver."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "multiplechoice",
    question: "Maple syrup urine disease is caused by deficiency of which enzyme complex?",
    options: [
      "A. BCAA aminotransferase",
      "B. Branched-chain α-ketoacid dehydrogenase (BCKAD)",
      "C. Phenylalanine hydroxylase",
      "D. Propionyl-CoA carboxylase"
    ],
    correctAnswer: "B. Branched-chain α-ketoacid dehydrogenase (BCKAD)",
    explanation: "MSUD is caused by deficiency of the BCKAD complex, which catalyzes oxidative decarboxylation of branched-chain ketoacids. This leads to accumulation of leucine, isoleucine, valine, and their ketoacids, causing the characteristic maple syrup urine odour and encephalopathy."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "multiplechoice",
    question: "Which coenzyme is required for both transamination and decarboxylation reactions?",
    options: [
      "A. NAD⁺ (Vitamin B3)",
      "B. Thiamine pyrophosphate (Vitamin B1)",
      "C. Pyridoxal phosphate (Vitamin B6)",
      "D. Cobalamin (Vitamin B12)"
    ],
    correctAnswer: "C. Pyridoxal phosphate (Vitamin B6)",
    explanation: "Pyridoxal phosphate (PLP) is the coenzyme for both transaminases (transamination) and decarboxylases (decarboxylation). PLP forms a Schiff base intermediate with the amino acid; the reaction outcome depends on which bond is broken."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "multiplechoice",
    question: "A patient with chest pain and ST-elevation has markedly elevated AST but only mildly elevated ALT. The most likely source of elevated AST is:",
    options: [
      "A. Liver disease",
      "B. Pancreatic damage",
      "C. Myocardial infarction",
      "D. Hemolysis"
    ],
    correctAnswer: "C. Myocardial infarction",
    explanation: "AST is found in liver AND heart muscle. In myocardial infarction, AST rises due to cardiac necrosis. ALT is predominantly hepatic. The clinical context (chest pain + ECG changes) points to MI as the source of elevated AST."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "multiplechoice",
    question: "Which of the following correctly pairs an enzyme with its location in the urea cycle?",
    options: [
      "A. Carbamoyl phosphate synthetase I — cytoplasm",
      "B. Ornithine transcarbamylase — mitochondria",
      "C. Argininosuccinate synthetase — mitochondria",
      "D. Arginase — mitochondria"
    ],
    correctAnswer: "B. Ornithine transcarbamylase — mitochondria",
    explanation: "Ornithine transcarbamylase (OTC) is located in the mitochondria (Step 2). CPS-I is in mitochondria (Step 1). Argininosuccinate synthetase and arginase are in the cytoplasm (Steps 3 and 5)."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "multiplechoice",
    question: "Which of the following is the most common urea cycle disorder and has X-linked inheritance?",
    options: [
      "A. Arginase deficiency",
      "B. CPS-I deficiency",
      "C. Ornithine transcarbamylase (OTC) deficiency",
      "D. Argininosuccinate synthetase deficiency"
    ],
    correctAnswer: "C. Ornithine transcarbamylase (OTC) deficiency",
    explanation: "OTC deficiency is the most common urea cycle disorder. It is X-linked, so males are severely affected with neonatal hyperammonaemia. Females are carriers with variable expression due to X-inactivation."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "multiplechoice",
    question: "At physiological pH (7.4), which form of an amino acid predominates?",
    options: [
      "A. Fully protonated form (-NH₃⁺, -COOH)",
      "B. Zwitterion (-NH₃⁺, -COO⁻)",
      "C. Fully deprotonated form (-NH₂, -COO⁻)",
      "D. Uncharged form (-NH₂, -COOH)"
    ],
    correctAnswer: "B. Zwitterion (-NH₃⁺, -COO⁻)",
    explanation: "At physiological pH (~7.4), the α-amino group is protonated (-NH₃⁺) and the α-carboxyl group is deprotonated (-COO⁻), forming a zwitterion with net zero charge. This is the predominant form at neutral pH."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "multiplechoice",
    question: "Which amino acid is classified as an imino acid and acts as a helix-breaker in protein structure?",
    options: [
      "A. Glycine",
      "B. Alanine",
      "C. Proline",
      "D. Cysteine"
    ],
    correctAnswer: "C. Proline",
    explanation: "Proline is the only imino acid. Its side chain bonds to both the backbone nitrogen and α-carbon, forming a cyclic pyrrolidine ring. This restricts backbone geometry, preventing normal α-helix hydrogen bonding, making it a helix-breaker."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "multiplechoice",
    question: "Using the mnemonic PVT TIM HALL, which of the following is NOT an essential amino acid?",
    options: [
      "A. Tryptophan",
      "B. Tyrosine",
      "C. Threonine",
      "D. Histidine"
    ],
    correctAnswer: "B. Tyrosine",
    explanation: "Tyrosine is non-essential because it can be synthesized from phenylalanine. PVT TIM HALL stands for Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine. Tyrosine is not in this list."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "multiplechoice",
    question: "Transamination of alanine with α-ketoglutarate produces which products?",
    options: [
      "A. Glutamine and pyruvate",
      "B. Pyruvate and glutamate",
      "C. Aspartate and oxaloacetate",
      "D. Glutamate and oxaloacetate"
    ],
    correctAnswer: "B. Pyruvate and glutamate",
    explanation: "Alanine + α-ketoglutarate → Pyruvate + Glutamate, catalyzed by ALT (alanine aminotransferase). The amino group transfers from alanine to α-ketoglutarate, producing the corresponding α-keto acid (pyruvate) and new amino acid (glutamate)."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Transamination & Deamination",
    type: "multiplechoice",
    question: "Glutamate dehydrogenase (GDH) catalyzes which reaction?",
    options: [
      "A. Glutamate → α-ketoglutarate + NH₄⁺",
      "B. Glutamine → glutamate + NH₄⁺",
      "C. α-ketoglutarate + NH₄⁺ → glutamine",
      "D. Glutamate → GABA + CO₂"
    ],
    correctAnswer: "A. Glutamate → α-ketoglutarate + NH₄⁺",
    explanation: "GDH catalyzes oxidative deamination of glutamate to α-ketoglutarate, releasing NH₄⁺ and producing NADH. This is the main reaction for releasing ammonia from amino groups. GDH is located in liver mitochondria."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "multiplechoice",
    question: "Which amino acids are purely ketogenic?",
    options: [
      "A. Leucine and lysine",
      "B. Isoleucine and leucine",
      "C. Valine and leucine",
      "D. Phenylalanine and tyrosine"
    ],
    correctAnswer: "A. Leucine and lysine",
    explanation: "Leucine and lysine are the only purely ketogenic amino acids. Their carbon skeletons yield only acetyl-CoA or acetoacetate and cannot contribute to net glucose synthesis. Leucine is also purely ketogenic among the branched-chain amino acids."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "multiplechoice",
    question: "In homocystinuria, lens dislocation is characteristically:",
    options: [
      "A. Upward and outward (superotemporal)",
      "B. Downward and inward (inferonasal)",
      "C. Lateral and inward",
      "D. Medial and outward"
    ],
    correctAnswer: "B. Downward and inward (inferonasal)",
    explanation: "In homocystinuria, lens dislocation is typically downward and inward (inferonasal). This contrasts with Marfan's syndrome, where lens dislocation is upward and outward (superotemporal). This distinction is clinically important for diagnosis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "multiplechoice",
    question: "Which of the following is the universal methyl donor in biological methylation reactions?",
    options: [
      "A. Tetrahydrofolate (THF)",
      "B. S-adenosyl methionine (SAM)",
      "C. Pyridoxal phosphate (PLP)",
      "D. Methylcobalamin (Vitamin B12)"
    ],
    correctAnswer: "B. S-adenosyl methionine (SAM)",
    explanation: "SAM (S-adenosyl methionine) is the universal methyl donor. It donates methyl groups for creatine synthesis, phosphatidylcholine synthesis, catecholamine methylation, DNA methylation, and many other reactions. The high-energy sulfonium bond makes the methyl group labile."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "multiplechoice",
    question: "Histamine is synthesized from which amino acid by which enzyme?",
    options: [
      "A. Tyrosine; tyrosine decarboxylase",
      "B. Tryptophan; tryptophan decarboxylase",
      "C. Histidine; histidine decarboxylase",
      "D. Histidine; histamine methyltransferase"
    ],
    correctAnswer: "C. Histidine; histidine decarboxylase",
    explanation: "Histamine is formed by decarboxylation of histidine by histidine decarboxylase (aromatic L-amino acid decarboxylase), requiring PLP as coenzyme. Histamine is stored in mast cells and basophils and mediates allergic reactions."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "multiplechoice",
    question: "Serotonin is synthesized from tryptophan via which sequence?",
    options: [
      "A. Tryptophan → decarboxylation → tryptamine → hydroxylation → serotonin",
      "B. Tryptophan → hydroxylation → 5-HTP → decarboxylation → serotonin",
      "C. Tryptophan → transamination → 5-HTP → decarboxylation → serotonin",
      "D. Tryptophan → decarboxylation → serotonin"
    ],
    correctAnswer: "B. Tryptophan → hydroxylation → 5-HTP → decarboxylation → serotonin",
    explanation: "Serotonin synthesis: Tryptophan → (tryptophan-5-hydroxylase, BH4, O₂) → 5-hydroxytryptophan (5-HTP) → (aromatic L-amino acid decarboxylase, PLP) → 5-hydroxytryptamine (serotonin/5-HT). The hydroxylation step is rate-limiting."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "multiplechoice",
    question: "Which of the following correctly describes the role of tetrahydrobiopterin (BH4) in phenylalanine metabolism?",
    options: [
      "A. BH4 is the enzyme that catalyzes phenylalanine hydroxylation",
      "B. BH4 is a cofactor that donates electrons for phenylalanine hydroxylation and must be regenerated",
      "C. BH4 is the product of phenylalanine hydroxylase activity",
      "D. BH4 inhibits phenylalanine hydroxylase by feedback regulation"
    ],
    correctAnswer: "B. BH4 is a cofactor that donates electrons for phenylalanine hydroxylation and must be regenerated",
    explanation: "BH4 is the immediate electron donor for phenylalanine hydroxylase. It is oxidized to BH2 during the reaction and must be regenerated by dihydropteridine reductase (DHPR) using NADPH. BH4 is a cofactor, not the enzyme itself."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "multiplechoice",
    question: "Which of the following vitamins is required for the remethylation of homocysteine to methionine?",
    options: [
      "A. Vitamin B1 (Thiamine)",
      "B. Vitamin B6 (Pyridoxine)",
      "C. Vitamin B12 (Cobalamin)",
      "D. Vitamin C (Ascorbate)"
    ],
    correctAnswer: "C. Vitamin B12 (Cobalamin)",
    explanation: "Methionine synthase catalyzes the remethylation of homocysteine to methionine using 5-methyl-THF as the methyl donor. Vitamin B12 (methylcobalamin) is the obligatory cofactor that directly transfers the methyl group to homocysteine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "multiplechoice",
    question: "In PKU, phenylalanine accumulates and is converted to which metabolites that are excreted in urine?",
    options: [
      "A. Phenylpyruvate, phenyllactate, and phenylacetate",
      "B. Phenylalanine, tyrosine, and DOPA",
      "C. Homogentisate and fumarate",
      "D. Phenylalanine and phenylacetylglutamine only"
    ],
    correctAnswer: "A. Phenylpyruvate, phenyllactate, and phenylacetate",
    explanation: "In PKU, phenylalanine cannot be converted to tyrosine and undergoes transamination to phenylpyruvate, which is reduced to phenyllactate and decarboxylated to phenylacetate. These metabolites (phenylketones) are excreted in urine and contribute to the 'mousy' odour."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Melanin & Pigmentation",
    type: "multiplechoice",
    question: "Which enzyme deficiency causes tyrosinaemia Type I (hepatorenal tyrosinaemia)?",
    options: [
      "A. Tyrosine aminotransferase",
      "B. 4-Hydroxyphenylpyruvate dioxygenase",
      "C. Fumarylacetoacetate hydrolase (FAH)",
      "D. Homogentisate 1,2-dioxygenase"
    ],
    correctAnswer: "C. Fumarylacetoacetate hydrolase (FAH)",
    explanation: "Tyrosinaemia Type I is caused by deficiency of fumarylacetoacetate hydrolase (FAH), the final enzyme in tyrosine catabolism. Toxic metabolites (fumarylacetoacetate, maleylacetoacetate) accumulate, causing severe liver damage and renal tubular dysfunction."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "multiplechoice",
    question: "Which of the following is NOT a function of cysteine in the body?",
    options: [
      "A. Formation of glutathione",
      "B. Formation of disulfide bonds in proteins",
      "C. Formation of mercaptoethanolamine for CoA",
      "D. Formation of creatine"
    ],
    correctAnswer: "D. Formation of creatine",
    explanation: "Creatine synthesis requires glycine, arginine, and methionine (as SAM for methylation). Cysteine is not involved in creatine synthesis. Cysteine is involved in glutathione synthesis, disulfide bond formation, and mercaptoethanolamine for CoA."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "multiplechoice",
    question: "Trans-sulfuration refers to:",
    options: [
      "A. Transfer of sulphate groups from methionine to other molecules",
      "B. Transfer of sulphur from methionine to serine to form cysteine",
      "C. Transfer of methyl groups from methionine to acceptors",
      "D. Oxidation of cysteine to cystine"
    ],
    correctAnswer: "B. Transfer of sulphur from methionine to serine to form cysteine",
    explanation: "Trans-sulfuration is the transfer of sulphur from methionine (via homocysteine) to the carbon skeleton of serine to form cysteine. This involves the sequential reactions: methionine → SAM → SAH → homocysteine → cystathionine → cysteine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Sulphur Amino Acids",
    type: "multiplechoice",
    question: "N-acetylcysteine (NAC) is used in paracetamol overdose because:",
    options: [
      "A. It directly neutralizes paracetamol in the bloodstream",
      "B. It provides cysteine for glutathione synthesis to detoxify the toxic metabolite NAPQI",
      "C. It inhibits CYP450 enzymes that produce toxic metabolites",
      "D. It enhances renal excretion of paracetamol"
    ],
    correctAnswer: "B. It provides cysteine for glutathione synthesis to detoxify the toxic metabolite NAPQI",
    explanation: "NAC provides cysteine (after deacetylation), which is rate-limiting for glutathione synthesis. This rapidly replenishes hepatic GSH, which conjugates and detoxifies the toxic NAPQI metabolite of paracetamol, preventing hepatocyte necrosis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Phenylalanine & Tyrosine",
    type: "multiplechoice",
    question: "Which of the following correctly describes the metabolic relationship between phenylalanine and tyrosine?",
    options: [
      "A. Tyrosine is converted to phenylalanine by phenylalanine hydroxylase",
      "B. Phenylalanine is converted to tyrosine by phenylalanine hydroxylase, and tyrosine becomes essential in PKU",
      "C. Both amino acids are synthesized from chorismate in humans",
      "D. Phenylalanine and tyrosine are both purely ketogenic"
    ],
    correctAnswer: "B. Phenylalanine is converted to tyrosine by phenylalanine hydroxylase, and tyrosine becomes essential in PKU",
    explanation: "Phenylalanine is hydroxylated to tyrosine by phenylalanine hydroxylase. In PKU, this enzyme is deficient, so phenylalanine cannot be converted to tyrosine. Tyrosine, normally non-essential, becomes conditionally essential in PKU patients."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Catecholamines",
    type: "multiplechoice",
    question: "Which of the following is the correct order of catecholamine synthesis from tyrosine?",
    options: [
      "A. Tyrosine → dopamine → DOPA → norepinephrine → epinephrine",
      "B. Tyrosine → DOPA → dopamine → norepinephrine → epinephrine",
      "C. Tyrosine → norepinephrine → dopamine → epinephrine",
      "D. Tyrosine → dopamine → norepinephrine → DOPA → epinephrine"
    ],
    correctAnswer: "B. Tyrosine → DOPA → dopamine → norepinephrine → epinephrine",
    explanation: "Catecholamine synthesis: Tyrosine → (tyrosine hydroxylase) → L-DOPA → (aromatic L-amino acid decarboxylase) → dopamine → (dopamine β-hydroxylase) → norepinephrine → (PNMT) → epinephrine."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Melanin & Pigmentation",
    type: "multiplechoice",
    question: "A deficiency of which enzyme causes alkaptonuria, leading to dark urine on standing?",
    options: [
      "A. Phenylalanine hydroxylase",
      "B. Tyrosinase",
      "C. Homogentisate 1,2-dioxygenase",
      "D. 4-Hydroxyphenylpyruvate dioxygenase"
    ],
    correctAnswer: "C. Homogentisate 1,2-dioxygenase",
    explanation: "Alkaptonuria is caused by deficiency of homogentisate 1,2-dioxygenase. Homogentisic acid accumulates and oxidizes to alkapton on exposure to air, causing dark urine. Homogentisic acid also deposits in connective tissues causing ochronosis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "multiplechoice",
    question: "Which of the following statements about proline is INCORRECT?",
    options: [
      "A. Proline is an imino acid",
      "B. Proline is commonly found in α-helices",
      "C. Proline has a cyclic structure",
      "D. Hydroxyproline is found in collagen"
    ],
    correctAnswer: "B. Proline is commonly found in α-helices",
    explanation: "Proline is NOT commonly found in α-helices. Its cyclic structure restricts backbone rotation and prevents normal hydrogen bonding, making it a helix-breaker. Proline is commonly found in turns and loops, and hydroxyproline is abundant in collagen."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Catecholamines",
    type: "multiplechoice",
    question: "The enzyme that converts norepinephrine to epinephrine is:",
    options: [
      "A. Tyrosine hydroxylase",
      "B. Dopamine β-hydroxylase",
      "C. Phenylethanolamine-N-methyltransferase (PNMT)",
      "D. Aromatic L-amino acid decarboxylase"
    ],
    correctAnswer: "C. Phenylethanolamine-N-methyltransferase (PNMT)",
    explanation: "PNMT catalyzes the conversion of norepinephrine to epinephrine by transferring a methyl group from SAM. PNMT is expressed almost exclusively in the adrenal medulla and is induced by cortisol."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "multiplechoice",
    question: "Which vitamin deficiency is associated with scurvy due to impaired collagen hydroxylation?",
    options: [
      "A. Vitamin A",
      "B. Vitamin B6",
      "C. Vitamin C",
      "D. Vitamin D"
    ],
    correctAnswer: "C. Vitamin C",
    explanation: "Vitamin C (ascorbate) is required for the hydroxylation of proline and lysine in collagen synthesis. Deficiency of vitamin C causes scurvy, characterized by weakened connective tissue, bleeding gums, and poor wound healing."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "multiplechoice",
    question: "Which of the following amino acids has a side chain pKa of approximately 6.5, making it an important buffer at physiological pH?",
    options: [
      "A. Lysine",
      "B. Arginine",
      "C. Histidine",
      "D. Aspartate"
    ],
    correctAnswer: "C. Histidine",
    explanation: "Histidine has a side chain pKa of ~6.5, close to physiological pH (7.4). This allows it to exist in both protonated and unprotonated forms at physiological pH, making it an important buffer and enzyme active site residue."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Amino Acid Basics",
    type: "multiplechoice",
    question: "Which of the following amino acids is NOT essential and can be synthesized from phenylalanine?",
    options: [
      "A. Tryptophan",
      "B. Tyrosine",
      "C. Methionine",
      "D. Threonine"
    ],
    correctAnswer: "B. Tyrosine",
    explanation: "Tyrosine is non-essential in healthy individuals because it can be synthesized from phenylalanine via phenylalanine hydroxylase. Tryptophan, methionine, and threonine are essential amino acids that must be obtained from the diet."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "BCAA & Inborn Errors",
    type: "multiplechoice",
    question: "Which of the following correctly pairs an inborn error with its deficient enzyme?",
    options: [
      "A. PKU — Phenylalanine hydroxylase",
      "B. Alkaptonuria — Tyrosinase",
      "C. Albinism — Homogentisate oxidase",
      "D. MSUD — Phenylalanine hydroxylase"
    ],
    correctAnswer: "A. PKU — Phenylalanine hydroxylase",
    explanation: "PKU is caused by phenylalanine hydroxylase deficiency. Alkaptonuria is caused by homogentisate 1,2-dioxygenase deficiency. Albinism is caused by tyrosinase deficiency. MSUD is caused by branched-chain α-ketoacid dehydrogenase deficiency."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "multiplechoice",
    question: "In the urea cycle, which step occurs in the mitochondria?",
    options: [
      "A. Argininosuccinate → Arginine + Fumarate",
      "B. Citrulline + Aspartate → Argininosuccinate",
      "C. Carbamoyl phosphate + Ornithine → Citrulline",
      "D. Arginine → Ornithine + Urea"
    ],
    correctAnswer: "C. Carbamoyl phosphate + Ornithine → Citrulline",
    explanation: "Carbamoyl phosphate + ornithine → citrulline (catalyzed by OTC) occurs in the mitochondria (Step 2). CPS-I is also in mitochondria (Step 1). Steps 3-5 occur in the cytoplasm."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Biogenic Amines",
    type: "multiplechoice",
    question: "Which of the following amino acid derivatives is a neurotransmitter synthesized by decarboxylation?",
    options: [
      "A. Tyramine",
      "B. Histamine",
      "C. GABA (gamma-aminobutyric acid)",
      "D. All of the above"
    ],
    correctAnswer: "D. All of the above",
    explanation: "Tyramine (from tyrosine), histamine (from histidine), and GABA (from glutamate) are all synthesized by decarboxylation of their respective amino acids. GABA is a major inhibitory neurotransmitter in the CNS."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Ammonia Metabolism",
    type: "multiplechoice",
    question: "Which of the following is a consequence of ammonia toxicity in the brain?",
    options: [
      "A. Increased α-ketoglutarate levels stimulating the TCA cycle",
      "B. Enhanced GABA synthesis improving inhibition",
      "C. Depletion of α-ketoglutarate depressing the TCA cycle",
      "D. Increased dopamine synthesis"
    ],
    correctAnswer: "C. Depletion of α-ketoglutarate depressing the TCA cycle",
    explanation: "Ammonia toxicity depletes α-ketoglutarate by aminating it to glutamate. This depresses the TCA cycle, affecting cellular respiration. Increased ammonia also enhances glutamine formation, reducing brain glutamate and GABA synthesis."
  },
  {
    course: "Biochemistry",
    topic: "Protein Metabolism",
    subTopic: "Urea Cycle",
    type: "multiplechoice",
    question: "A patient with a urea cycle disorder has elevated ammonia levels. Which treatment helps remove ammonia by providing alternative nitrogen excretion pathways?",
    options: [
      "A. Sodium benzoate and sodium phenylacetate",
      "B. Arginine supplementation only",
      "C. Dietary protein increase",
      "D. Vitamin B12 supplementation"
    ],
    correctAnswer: "A. Sodium benzoate and sodium phenylacetate",
    explanation: "Sodium benzoate conjugates with glycine to form hippurate, and sodium phenylacetate conjugates with glutamine to form phenylacetylglutamine, both of which are excreted in urine. These provide alternative pathways for nitrogen excretion, bypassing the defective urea cycle."
  },
    // ===== PHYSIOLOGY – CARDIOVASCULAR PHYSIOLOGY =====

  // SECTION 1: Cardiac Muscle & Electrical Properties
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "The cardiac muscle is formed by a network of branching muscle fibers, and each fiber has a separate cell membrane.",
    answer: true,
    explanation: "Cardiac muscle consists of branching fibers, each surrounded by its own cell membrane, with intercellular connections at intercalated discs."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "Intercalated discs are sites of end-to-end contact between cardiac muscle fibers where the membranes fuse to form gap junctions.",
    answer: true,
    explanation: "Intercalated discs contain gap junctions that allow rapid spread of excitation between adjacent fibers."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "Gap junctions between cardiac muscle fibers provide high electrical resistance, slowing the spread of excitation waves.",
    answer: false,
    explanation: "Gap junctions provide low electrical resistance, which facilitates rapid spread of the action potential."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "The cardiac muscle acts as a functional syncytium, meaning it contracts as one unit.",
    answer: true,
    explanation: "Because gap junctions allow rapid intercellular conduction, the entire syncytium contracts in a coordinated manner."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "The human heart contains three separate syncytia: atrial, ventricular, and nodal.",
    answer: false,
    explanation: "The human heart has two separate syncytia: atrial and ventricular; there is no separate nodal syncytium."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "The atrial and ventricular syncytia are completely separated by the AV ring, which prevents passage of excitation waves.",
    answer: true,
    explanation: "The fibrous AV ring electrically isolates the atria from the ventricles except through the specialised conducting system."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "The AV bundles provide a special conducting system for transmission of excitation waves from the ventricular syncytium to the atrial syncytium.",
    answer: false,
    explanation: "The AV bundles transmit excitation from the atrial syncytium to the ventricular syncytium, not the reverse."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "The Sino‑Atrial node (SA node) is myogenic and initiates action potentials at a rate of 70‑80 per minute.",
    answer: true,
    explanation: "The SA node is the primary pacemaker with an intrinsic firing rate of 70‑80 action potentials per minute."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "Depolarization from the SA node spreads through the atria via gap junctions and internodal pathways to the AV node.",
    answer: true,
    explanation: "This is the normal sequence of atrial conduction toward the AV node."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "The fibrous connective tissue matrix of the heart helps spread action potentials rapidly to the ventricles.",
    answer: false,
    explanation: "The fibrous matrix prevents direct spread to the ventricles, so conduction must pass through the AV node and bundle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "There is a slight delay at the AV node due to slower formation of action potentials, allowing further emptying of the atria.",
    answer: true,
    explanation: "The AV nodal delay ensures atrial contraction is complete before ventricular excitation begins."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "The AV bundle (Bundle of His) splits into left and right atrioventricular bundles (bundle branches) and then into Purkinje cells.",
    answer: true,
    explanation: "This describes the specialised conduction pathway from the AV node to the ventricular myocardium."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "Purkinje cells are smaller in diameter than typical cardiac muscle cells and conduct impulses slowly.",
    answer: false,
    explanation: "Purkinje cells are larger in diameter and conduct impulses very rapidly."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "Purkinje cells cause the cells at the apex to contract nearly simultaneously, which is good for ventricular ejection.",
    answer: true,
    explanation: "Rapid conduction through Purkinje fibres allows coordinated contraction of the ventricular apex."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "The resting membrane potential (RMP) of cardiac muscle is determined by conductance to sodium (Na⁺), approaching the Na⁺ equilibrium potential.",
    answer: false,
    explanation: "RMP is determined by conductance to K⁺, approaching the K⁺ equilibrium potential."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "Inward current brings positive charge into the cell and depolarizes the membrane potential.",
    answer: true,
    explanation: "Inward currents (e.g., Na⁺, Ca²⁺) reduce the negative membrane potential, causing depolarisation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "Outward current takes positive charge out of the cell and repolarizes the membrane potential.",
    answer: true,
    explanation: "Outward K⁺ currents restore the negative resting potential by removing positive charge."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "Na⁺‑K⁺ ATPase helps maintain ion gradients across the cell membrane by pumping Na⁺ out and K⁺ in.",
    answer: true,
    explanation: "The ATPase actively maintains the concentration gradients essential for excitability."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "Ventricles, atria, and Purkinje fibres have a stable RMP of about ‑90 mV.",
    answer: true,
    explanation: "These non‑pacemaker cells maintain a stable resting potential near the K⁺ equilibrium potential."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "The RMP of pacemaker cells is stable at ‑90 mV, similar to ventricular muscle.",
    answer: false,
    explanation: "Pacemaker cells have an unstable RMP that gradually drifts from ‑60 to ‑40 mV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "Action potentials in cardiac muscle, especially in Purkinje fibres, are of long duration, lasting up to 300 msec.",
    answer: true,
    explanation: "Cardiac action potentials are prolonged, particularly in Purkinje fibres where they may last 300 msec."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "The action potential is the change in RMP associated with activity and consists of an all‑or‑none reversal of polarization.",
    answer: true,
    explanation: "This is the standard definition of an action potential in excitable tissues."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "Phase 0 of the cardiac action potential is the upstroke caused by a transient increase in Na⁺ conductance.",
    answer: true,
    explanation: "Rapid Na⁺ influx through voltage‑gated channels produces the rapid depolarisation of Phase 0."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "At the peak of the action potential, the membrane potential approaches the Na⁺ equilibrium potential.",
    answer: true,
    explanation: "During maximal Na⁺ conductance, the membrane potential moves close to ENa."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "Phase 1 is a brief period of initial repolarisation caused by an inward Na⁺ current.",
    answer: false,
    explanation: "Phase 1 repolarisation is caused by an outward K⁺ current and a decrease in Na⁺ conductance."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "Phase 2 (plateau) of the cardiac action potential is caused by a transient increase in Ca²⁺ conductance leading to inward Ca²⁺ current and an increase in K⁺ conductance.",
    answer: true,
    explanation: "The plateau results from a balance between inward Ca²⁺ and outward K⁺ currents."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "During the plateau (Phase 2), inward and outward currents are approximately equal, so the membrane potential is stable.",
    answer: true,
    explanation: "The near‑equality of currents maintains the flat plateau."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "Phase 3 (repolarisation) is characterized by decreased Ca²⁺ conductance and increased K⁺ conductance.",
    answer: true,
    explanation: "Reduced Ca²⁺ influx combined with enhanced K⁺ efflux drives repolarisation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "Phase 4 of the cardiac action potential is the resting membrane potential where inward and outward currents are equal.",
    answer: true,
    explanation: "In non‑pacemaker cells, Phase 4 is the stable resting state with balanced currents."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "The SA node exhibits phase 4 depolarization or automaticity, meaning it does not have a constant RMP.",
    answer: true,
    explanation: "The SA node spontaneously depolarises during Phase 4, giving it pacemaker activity."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "The AV node and His‑Purkinje systems are latent pacemakers and may override the SA node when it is suppressed.",
    answer: true,
    explanation: "These tissues can take over pacing if the SA node fails, though at slower rates."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Muscle & Electrical Properties",
    type: "truefalse",
    question: "The rate of depolarisation in phase 4 is fastest in the His‑Purkinje system and slowest in the SA node.",
    answer: false,
    explanation: "The fastest Phase 4 depolarisation occurs in the SA node, followed by the AV node, then His‑Purkinje (SA > AVN > His‑Purkinje)."
  },

  // SECTION 2: Electrocardiography (ECG)
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "The normal ECG is a graphic recording of electrical potential changes between different sites of the heart on the skin surface.",
    answer: true,
    explanation: "This is the fundamental definition of an electrocardiogram."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "ECG stands for both Electrocardiograph and Electrocardiogram.",
    answer: true,
    explanation: "The abbreviation applies to both the instrument and the recording."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "The first ECG recording was made by William Einthoven in 1903.",
    answer: true,
    explanation: "Einthoven pioneered the clinical ECG in 1903."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "Einthoven combined the left arm, right arm, and pubis to form the Einthoven triangle.",
    answer: true,
    explanation: "The original Einthoven triangle used the left arm, right arm, and pubis as recording points."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "The ECG measures the absolute electrical potential at a single point in the body.",
    answer: false,
    explanation: "The ECG measures the potential difference between two points."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "The P‑wave represents atrial depolarisation and has a duration of 0.08‑0.12 seconds.",
    answer: true,
    explanation: "The P‑wave reflects atrial depolarisation with normal duration of 0.08–0.12 sec."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "The P‑wave includes atrial repolarisation, which is also visible as a separate wave.",
    answer: false,
    explanation: "Atrial repolarisation is hidden within the QRS complex and not seen separately."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "The PR interval is measured from the beginning of the P wave to the beginning of the Q wave.",
    answer: true,
    explanation: "The PR interval spans from the start of atrial depolarisation to the start of ventricular depolarisation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "A prolonged PR interval (heart block) would decrease the PR interval below 0.10 seconds.",
    answer: false,
    explanation: "Heart block increases the PR interval beyond 0.20 seconds."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "The QRS complex represents depolarisation of the ventricles and lasts 0.08‑0.12 seconds.",
    answer: true,
    explanation: "The QRS reflects ventricular depolarisation with a normal duration of 0.08–0.12 sec."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "The QT interval represents the entire period of depolarisation and repolarisation of the ventricles.",
    answer: true,
    explanation: "The QT interval extends from the Q wave to the end of the T wave."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "The QT interval is normally 0.35‑0.43 seconds.",
    answer: true,
    explanation: "Normal QT duration ranges from 0.35 to 0.43 seconds."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "The ST segment represents the period between ventricular depolarisation and repolarisation and is isoelectric.",
    answer: true,
    explanation: "The ST segment is at baseline (isoelectric) during the plateau phase."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "The ST segment has a normal duration of 0.25‑0.32 seconds.",
    answer: true,
    explanation: "Normal ST segment duration is 0.25–0.32 seconds."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "The T wave represents ventricular repolarisation and relaxation.",
    answer: false,
    explanation: "The T wave represents ventricular repolarisation, not relaxation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "The T wave has a normal duration of 0.12‑0.16 seconds.",
    answer: true,
    explanation: "Normal T‑wave duration is 0.12–0.16 seconds."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "The U wave may originate from the papillary muscle or appear as a result of hyperkalemia.",
    answer: true,
    explanation: "The U wave is sometimes seen and may originate from papillary muscle or occur in hyperkalemia."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "In a standard ECG test, the calibration is set such that 1 mV = 10 mm and paper speed = 25 mm/sec.",
    answer: true,
    explanation: "Standard calibration is 1 mV = 10 mm vertical and 25 mm/s horizontal."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "A standard ECG tracing has 12 leads, which can be more for special recordings.",
    answer: true,
    explanation: "Standard ECG uses 12 leads, with additional leads possible for specific situations."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "There are three major types of ECG leads: Bipolar Limb, Unipolar Limb, and Precordial.",
    answer: true,
    explanation: "These are the three categories: bipolar limb (I, II, III), augmented unipolar (aVR, aVL, aVF), and chest (V1–V6)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "Bipolar Limb Leads are designated as aVR, aVL, and aVF.",
    answer: false,
    explanation: "aVR, aVL, and aVF are unipolar (augmented) limb leads; bipolar limb leads are LI, LII, LIII."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "Unipolar Limb (Augmented) Leads are designated as LI, LII, and LIII.",
    answer: false,
    explanation: "LI, LII, LIII are bipolar leads; unipolar augmented leads are aVR, aVL, aVF."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "Precordial (Chest) Leads are designated as V1‑V6.",
    answer: true,
    explanation: "V1 through V6 are the standard chest leads."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "Bipolar limb leads consist of two electrodes of opposite polarity, with the third as the earth electrode.",
    answer: true,
    explanation: "This is the configuration for standard bipolar leads."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "Einthoven's law states that Lead I + Lead III = Lead II.",
    answer: true,
    explanation: "Einthoven's law: I + III = II."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "Lead I is RA(‑) to LA(+).",
    answer: true,
    explanation: "Lead I records from right arm (negative) to left arm (positive)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "Lead II is RA(‑) to LL(+).",
    answer: true,
    explanation: "Lead II records from right arm (negative) to left leg (positive)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "Lead III is LA(‑) to LL(+).",
    answer: true,
    explanation: "Lead III records from left arm (negative) to left leg (positive)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "Unipolar limb leads consist of a single positive electrode and a reference point at the centre of the heart's electrical field.",
    answer: true,
    explanation: "This is the principle of unipolar recording."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "aVR is the augmented lead with the positive electrode on the left arm.",
    answer: false,
    explanation: "aVR has the positive electrode on the right arm (RA)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "aVL has the positive electrode on the left arm.",
    answer: true,
    explanation: "aVL = left arm positive."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "aVF has the positive electrode on the left leg.",
    answer: true,
    explanation: "aVF = left leg positive."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "Precordial leads are unipolar leads with a single positive electrode and a negative point at the centre of the heart's electrical field.",
    answer: true,
    explanation: "Chest leads are also unipolar, using a central terminal as the reference."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "V1 is placed on the left 4th intercostal space at the sternal edge.",
    answer: false,
    explanation: "V1 is placed on the RIGHT 4th intercostal space at the sternal edge."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "V2 is placed on the left 4th intercostal space at the sternal edge.",
    answer: false,
    explanation: "V2 is placed on the LEFT 4th intercostal space; V1 is on the right."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "V4 is placed at the 5th left intercostal space at the midclavicular line.",
    answer: true,
    explanation: "V4 is at the 5th LICS, midclavicular line."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "V3 is placed midway between V4 and V2.",
    answer: true,
    explanation: "V3 lies halfway between V2 and V4."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "V5 is placed at the 5th LICS at the anterior axillary line.",
    answer: true,
    explanation: "V5 is at the 5th LICS, anterior axillary line."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "V6 is placed at the 5th LICS at the mid‑axillary line.",
    answer: true,
    explanation: "V6 is at the 5th LICS, mid‑axillary line."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "V1 and V2 reveal information about the left ventricle (LV).",
    answer: false,
    explanation: "V1–V2 primarily reflect right ventricular (RV) activity."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "V3 and V4 reveal information about the interventricular septum (IVS).",
    answer: true,
    explanation: "V3–V4 are septal leads."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "V5 and V6 reveal information about the left ventricle (LV).",
    answer: true,
    explanation: "V5–V6 are lateral leads reflecting LV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "Bipolar limb leads record in the sagittal plane.",
    answer: false,
    explanation: "Bipolar limb leads record in the frontal plane."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "Augmented limb leads record in the frontal plane.",
    answer: false,
    explanation: "Augmented leads record in the sagittal plane."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "Precordial leads record in the horizontal plane.",
    answer: true,
    explanation: "Chest leads provide a horizontal plane view."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Electrocardiography",
    type: "truefalse",
    question: "The 12 leads are necessary to record heart potentials in three planes.",
    answer: true,
    explanation: "The leads cover frontal (bipolar), sagittal (augmented), and horizontal (precordial) planes."
  },

  // SECTION 3: Heart Rate & Its Regulation
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "Heart rate is the number of times the heart beats in 1 minute and is directly proportional to cardiac output.",
    answer: true,
    explanation: "HR is a direct multiplier of cardiac output (CO = HR × SV)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "The normal adult heart rate is 60‑100 beats per minute.",
    answer: true,
    explanation: "Normal resting HR for adults is 60–100 bpm."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "A heart rate lower than 60 is called tachycardia, and higher than 100 is bradycardia.",
    answer: false,
    explanation: "Below 60 is bradycardia; above 100 is tachycardia."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "A human heart beats approximately 45 million times per year.",
    answer: true,
    explanation: "Approximately 45 million beats per year is a reasonable average."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "Heart rate is modified by autonomic, immune, and local factors.",
    answer: true,
    explanation: "Multiple systems influence HR."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "An increase in parasympathetic activity via M₂ cholinergic receptors in the heart will increase the heart rate.",
    answer: false,
    explanation: "M₂ activation decreases HR by slowing the SA node."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "An increase in sympathetic activity via B₁ and B₂ adrenergic receptors will increase the heart rate.",
    answer: true,
    explanation: "Sympathetic stimulation via β‑receptors raises HR."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "The medullary cardiovascular centre receives input from proprioceptors, chemoreceptors, and baroreceptors.",
    answer: true,
    explanation: "These afferents modulate autonomic outflow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "Sympathetic output increases heart rate and contractility.",
    answer: true,
    explanation: "Sympathetic stimulation is both chronotropic and inotropic."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "Parasympathetic impulses decrease heart rate and have a significant effect on ventricular contractility.",
    answer: false,
    explanation: "Parasympathetic decreases HR but has little effect on ventricular contractility because vagal innervation of ventricles is sparse."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "Hypoxia depresses cardiac activity.",
    answer: true,
    explanation: "Lack of oxygen is a depressant factor for cardiac function."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "Acidosis and alkalosis both depress cardiac activity.",
    answer: true,
    explanation: "Both extreme pH changes depress cardiac activity."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "Catecholamines and thyroid hormones increase heart rate and contractility.",
    answer: true,
    explanation: "These hormones have positive chronotropic and inotropic effects."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "Alterations in the balance of K⁺, Na⁺, and Ca²⁺ alter heart rate and contractility.",
    answer: true,
    explanation: "Cation imbalances directly affect cardiac excitability and contraction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "The vagus nerve (via ACh) decreases heart rate by decreasing the slow inflow of Na⁺ and Ca²⁺ and by increasing the outflow of K⁺.",
    answer: true,
    explanation: "This is the ionic mechanism of vagal bradycardia."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "The vagus nerve acts primarily on the ventricular myocardium to decrease contractility.",
    answer: false,
    explanation: "Vagus acts mainly on SA and AV nodes, not ventricular myocardium."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "Gagging or massage of carotid arteries can treat SNS‑driven heart attack by activating vagal reflexes.",
    answer: true,
    explanation: "These manoeuvres stimulate vagal reflexes to counter sympathetic overactivity."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "Female heart rate is generally higher than male heart rate.",
    answer: true,
    explanation: "Resting HR is typically slightly higher in females."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "Physical fitness leads to resting tachycardia.",
    answer: false,
    explanation: "Physical fitness leads to resting bradycardia."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "An increase in body temperature causes the SA node to discharge more rapidly, increasing heart rate.",
    answer: true,
    explanation: "Elevated temperature increases SA node firing rate."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "Caffeine is a factor that can increase heart rate.",
    answer: true,
    explanation: "Caffeine is a cardiac stimulant."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Heart Rate & Its Regulation",
    type: "truefalse",
    question: "Calcium channel blockers and beta‑adrenergic blockers are drugs that can affect heart rate.",
    answer: true,
    explanation: "Both drug classes are known to alter HR."
  },

  // SECTION 4: Cardiac Cycle & Haemodynamics
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Cycle & Haemodynamics",
    type: "truefalse",
    question: "The cardiac cycle consists of electrical and mechanical events from the beginning of one heartbeat to the beginning of the next.",
    answer: true,
    explanation: "This is the standard definition of the cardiac cycle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Cycle & Haemodynamics",
    type: "truefalse",
    question: "At a heart rate of 70 beats per minute, the duration of each cardiac cycle is about 0.8 seconds.",
    answer: true,
    explanation: "60/70 ≈ 0.86 sec, approximately 0.8 sec."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Cycle & Haemodynamics",
    type: "truefalse",
    question: "Atrial systole lasts for about 0.11 seconds, and atrial diastole lasts for about 0.69 seconds.",
    answer: true,
    explanation: "Atrial systole is 0.11 s, diastole 0.69 s."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Cycle & Haemodynamics",
    type: "truefalse",
    question: "Ventricular systole lasts for about 0.53 seconds, and ventricular diastole lasts for about 0.27 seconds.",
    answer: false,
    explanation: "Ventricular systole = 0.27 s; diastole = 0.53 s (the values are reversed)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Cycle & Haemodynamics",
    type: "truefalse",
    question: "Ventricular systole consists of isometric contraction (0.05 s) and ejection period (0.22 s).",
    answer: true,
    explanation: "Total ventricular systole = 0.05 + 0.22 = 0.27 s."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Cycle & Haemodynamics",
    type: "truefalse",
    question: "Ventricular diastole consists of protodiastole (0.04 s), isometric relaxation (0.08 s), rapid filling (0.11 s), slow filling (0.19 s), and last rapid filling (0.11 s).",
    answer: true,
    explanation: "These phases total 0.53 s of ventricular diastole."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Cycle & Haemodynamics",
    type: "truefalse",
    question: "The eight phases of the cardiac cycle include atrial systole, isovolumetric ventricular contraction, rapid ventricular ejection, reduced ventricular ejection, protodiastole, isovolumetric ventricular relaxation, rapid ventricular filling, and reduced ventricular filling (diastasis).",
    answer: true,
    explanation: "This is the complete eight‑phase sequence."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Cycle & Haemodynamics",
    type: "truefalse",
    question: "The cardiac cycle is divided into atrial and ventricular events, each with systole and diastole.",
    answer: true,
    explanation: "Both atria and ventricles have systolic and diastolic phases."
  },

  // SECTION 5: Microcirculation & Capillary Exchange
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "Microcirculation is defined as the circulation of blood at the tissue level, from the first order arteriole to the first order venule.",
    answer: true,
    explanation: "This is the precise definition of microcirculation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "The microcirculation consists of terminal arteries, arterioles, metarterioles, true capillaries, and venules.",
    answer: true,
    explanation: "These are the components of the microcirculation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "The principal site for the exchange of gases, water, nutrients, and waste products is the arteriole.",
    answer: false,
    explanation: "The capillary is the principal exchange site."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "At any point in time, 5% of the circulating blood resides in the capillaries.",
    answer: true,
    explanation: "Approximately 5% of blood volume is in the capillaries."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "Continuous capillaries are the most common type, with inter‑endothelial junctions 10‑15 nm wide.",
    answer: true,
    explanation: "Continuous capillaries have junctions of 10–15 nm."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "Fenestrated capillaries have endothelial cells that are thick and without perforations.",
    answer: false,
    explanation: "Fenestrated capillaries have thin cells with perforations (fenestrations)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "Discontinuous capillaries have fenestrations and gaps and are found in sinusoids of the liver.",
    answer: true,
    explanation: "Discontinuous capillaries (sinusoids) are found in the liver."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "Velocity of flow increases as total cross‑sectional area increases.",
    answer: false,
    explanation: "Velocity decreases as cross‑sectional area increases."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "Transit time from the arteriolar to the venous end of a capillary is about 1‑2 seconds.",
    answer: true,
    explanation: "Capillary transit time is approximately 1–2 sec."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "Blood flow through capillaries is continuous and uninterrupted.",
    answer: false,
    explanation: "Capillary flow is intermittent."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "Intermittent capillary flow is caused by contraction of metarterioles and precapillary sphincters.",
    answer: true,
    explanation: "Contraction of these structures regulates flow intermittency."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "Autoregulation is the intrinsic ability of an organ to maintain constant blood flow despite changes in perfusion pressure.",
    answer: true,
    explanation: "This is the definition of autoregulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "Autoregulation occurs in the absence of neural and hormonal influences.",
    answer: true,
    explanation: "Autoregulation is intrinsic and independent of extrinsic control."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "The two basic mechanisms of local blood flow control are the myogenic and metabolic theories.",
    answer: true,
    explanation: "These are the two primary theories of autoregulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "Capillaries are permeable to water and solutes except plasma proteins.",
    answer: true,
    explanation: "Capillary walls are freely permeable to water and small solutes but restrict proteins."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "Oncotic pressure by plasma proteins produces fluid movement by osmosis from the blood into the interstitial spaces.",
    answer: false,
    explanation: "Oncotic pressure draws fluid from the interstitium into the blood."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "The net filtration equation is Kf × (Pc − Pif − Pip + Pif), where Pc is capillary hydrostatic pressure.",
    answer: true,
    explanation: "This is the Starling equation (with careful notation, but the principle is correct)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "Fluid moves into the interstitial space at the arteriolar end of the capillary where filtration pressure exceeds oncotic pressure.",
    answer: true,
    explanation: "At the arterial end, hydrostatic pressure dominates, causing filtration."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Microcirculation & Capillary Exchange",
    type: "truefalse",
    question: "Fluid moves into the capillaries at the venous end where oncotic pressure exceeds filtration pressure.",
    answer: true,
    explanation: "At the venous end, reabsorption occurs."
  },

  // SECTION 6: Lymphatic System
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Lymphatic fluid is formed by the slight mismatch between filtration and absorption in the capillaries.",
    answer: true,
    explanation: "The 15% of filtered fluid not reabsorbed becomes lymph."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "The lymphatic system is a closed system with a discrete pump similar to the heart.",
    answer: false,
    explanation: "The lymphatic system is not closed and has no central pump; flow is driven by other mechanisms."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "The rate of lymph flow is determined by interstitial fluid hydrostatic pressure and the lymphatic 'pump.'",
    answer: true,
    explanation: "These are the primary determinants of lymph flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "The lymphatic system returns fluid and proteins filtered out of circulation, absorbs fat from the intestine, and filters to destroy pathogens.",
    answer: true,
    explanation: "These are the three major functions of the lymphatic system."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Lymph from the lower body flows up the thoracic duct and empties into the left internal jugular and subclavian veins.",
    answer: true,
    explanation: "The thoracic duct drains into the left venous angle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Lymph from the left head, left arm, and parts of the chest drains into the right lymphatic duct.",
    answer: false,
    explanation: "These drain into the thoracic duct; the right lymphatic duct drains the right side of the head, neck, arm, and thorax."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Lymph from the right side of the neck, right arm, and parts of the thorax drains into the right lymphatic duct.",
    answer: true,
    explanation: "The right lymphatic duct drains the right upper quadrant."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "The right lymphatic duct empties into the right subclavian and internal jugular veins.",
    answer: true,
    explanation: "This is the drainage point for the right lymphatic duct."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Lymph contains cells such as lymphocytes and monocytes, salts, and a small amount of proteins.",
    answer: true,
    explanation: "Lymph is a modified tissue fluid containing these components."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Plasma contains fibrinogen and prothrombin, while lymph contains these in very small quantities.",
    answer: true,
    explanation: "Lymph can coagulate but very slowly due to low clotting factor content."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Lymph is composed of 96% water and 4% solids.",
    answer: true,
    explanation: "This is the approximate composition of lymph."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Proteins make up 2‑6% of lymph solids and include albumin, globulin, fibrinogen, prothrombin, antibodies, and enzymes.",
    answer: true,
    explanation: "This is the protein composition of lymph."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Lipids in lymph are mainly chylomicrons and lipoproteins, accounting for 5‑15% of lymph solids.",
    answer: true,
    explanation: "Lipids are transported as chylomicrons and lipoproteins."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "The total lymph flow averages 120 ml/hr or 2‑3 litres per day.",
    answer: true,
    explanation: "Daily lymph flow is 2‑3 litres."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Lymphatic vessels have thick walls and carry lymph under high pressure.",
    answer: false,
    explanation: "Lymphatic vessels have thin walls and carry lymph under low pressure."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Initial lymphatics lack valves and smooth muscle in their walls.",
    answer: true,
    explanation: "Initial lymphatics have neither valves nor smooth muscle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Collecting lymphatics have valves and smooth muscle and contract in a peristaltic manner.",
    answer: true,
    explanation: "These features allow active propulsion of lymph."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Flow in collecting lymphatics is aided by skeletal muscle movement, negative intrathoracic pressure during inspiration, and suction from venous flow.",
    answer: true,
    explanation: "These extrinsic forces assist lymphatic flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Lymphatic vessels are highly permeable, allowing bacteria and particulate matter to pass directly into the lymph.",
    answer: true,
    explanation: "High permeability allows entry of foreign material for immune surveillance."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Lymph nodes trap and filter debris and bacteria, which are phagocytosed by macrophages.",
    answer: true,
    explanation: "Lymph nodes are filtration sites for particulate material."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Primary lymphoid organs include the red bone marrow and the thymus gland.",
    answer: true,
    explanation: "These are sites of lymphocyte generation and maturation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Secondary lymphoid organs include the spleen and lymph nodes.",
    answer: true,
    explanation: "These are sites where immune responses are mounted."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "The red bone marrow produces all the formed elements of blood, including erythrocytes, leukocytes, and platelets.",
    answer: true,
    explanation: "Bone marrow is the primary haemopoietic tissue."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "The thymus gland plays a key role in programming the immune system to recognize 'self' and is a site for T-lymphocyte maturation.",
    answer: true,
    explanation: "These are the key functions of the thymus."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "The thymus gland is located on the superior surface of the heart and atrophies with age.",
    answer: true,
    explanation: "The thymus is above the heart and involutes with age."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "The spleen is the largest lymphoid organ and is located in the upper right hypochondriac region.",
    answer: false,
    explanation: "The spleen is in the upper LEFT hypochondriac region."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "The red pulp of the spleen functions as a filtration system for blood.",
    answer: true,
    explanation: "Red pulp filters blood and removes damaged erythrocytes."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "The white pulp of the spleen is where adaptive T‑ and B‑cell responses are mounted.",
    answer: true,
    explanation: "White pulp is the immune-active region."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Lymph nodes are bean‑shaped structures found in clusters such as cervical, axillary, and inguinal regions.",
    answer: true,
    explanation: "These are major lymph node groups."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Lymph nodes contain fixed macrophages that phagocytose foreign material and populations of B‑ and T‑cells.",
    answer: true,
    explanation: "These are the key cellular components of lymph nodes."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Lymph nodes are crucial to most antibody‑mediated immune responses because macrophages present pathogenic material to lymphocytes.",
    answer: true,
    explanation: "Antigen presentation in lymph nodes triggers antibody production."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "The outer cortex of a lymph node is rich in T‑cells.",
    answer: false,
    explanation: "The outer cortex is rich in B‑cells; the inner cortex is rich in T‑cells."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "The inner cortex of a lymph node is particularly rich in T‑cells.",
    answer: true,
    explanation: "T‑cells predominate in the inner cortex."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "The medulla of a lymph node contains large numbers of fixed phagocytic macrophages.",
    answer: true,
    explanation: "Macrophages in the medulla monitor lymph for pathogens."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Oedema is the accumulation of interstitial fluid in abnormal quantities.",
    answer: true,
    explanation: "This is the definition of oedema."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Interstitial fluid volume depends on capillary pressure, interstitial fluid pressure, oncotic pressure, capillary filtration coefficient, number of active capillaries, lymph flow, and total ECF volume.",
    answer: true,
    explanation: "These are the determinants of interstitial fluid volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Lymphedema is caused by lymphatic obstruction.",
    answer: true,
    explanation: "Lymphatic obstruction prevents drainage of interstitial fluid."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Lymphatic System",
    type: "truefalse",
    question: "Gravity and skeletal muscle contraction do not affect interstitial fluid volume.",
    answer: false,
    explanation: "These factors can significantly affect interstitial fluid dynamics."
  },

  // SECTION 7: Vascular Physiology & Regulation
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "At rest, approximately 60% of the total blood volume is in the veins.",
    answer: true,
    explanation: "Veins serve as the major blood reservoir."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Sympathetically mediated venoconstriction can substantially increase venous return to the heart.",
    answer: true,
    explanation: "Venoconstriction mobilises blood from the venous reservoir."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Sympathetic stimulation of alpha‑adrenergic receptors causes vasodilation.",
    answer: false,
    explanation: "Alpha‑adrenergic stimulation causes vasoconstriction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Sympathetic stimulation of beta‑adrenergic receptors causes vasodilation.",
    answer: true,
    explanation: "Beta‑adrenergic stimulation leads to vasodilation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "The walls of arteries and veins are composed of three coats: tunica externa, tunica media, and tunica interna.",
    answer: true,
    explanation: "These are the three layers of blood vessel walls."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "The tunica externa is composed primarily of smooth muscle.",
    answer: false,
    explanation: "The tunica externa is composed of connective tissue; the tunica media is smooth muscle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "The tunica media is composed primarily of smooth muscle.",
    answer: true,
    explanation: "Smooth muscle is the main component of the tunica media."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "The tunica interna consists of endothelium, basement membrane, and internal elastic lamina.",
    answer: true,
    explanation: "These are the three parts of the tunica interna."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "The vascular endothelium plays a role in regulating vessel integrity, vascular growth and remodelling, tissue growth, immune responses, cell adhesion, angiogenesis, haemostasis, and vascular permeability.",
    answer: true,
    explanation: "These are the multiple functions of vascular endothelium."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "The endothelium plays a pivotal role in the regulation of vascular tone, controlling tissue blood flow, inflammatory responses, and maintaining blood fluidity.",
    answer: true,
    explanation: "These are key endothelial functions."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Vascular smooth muscle cells ensure that blood vessels contract and relax, contributing to blood circulation regulation.",
    answer: true,
    explanation: "VSM cells regulate vessel diameter and blood flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "The endothelial layer produces paracrine regulators such as NO (vasodilation), endothelin‑1 (vasoconstriction), bradykinin (vasodilation), and prostaglandins I₂ (inhibits clotting and promotes vasodilation).",
    answer: true,
    explanation: "These are important endothelial-derived regulators."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Vascular smooth muscle contractions are rapid and of short duration, similar to cardiac muscle.",
    answer: false,
    explanation: "Vascular smooth muscle undergoes slow, sustained tonic contractions, unlike cardiac muscle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Vascular smooth muscle contains actin and myosin but lacks the regulatory protein troponin.",
    answer: true,
    explanation: "Troponin is absent in vascular smooth muscle; regulation differs from cardiac muscle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Actin and myosin in vascular smooth muscle are arranged into distinct bands similar to cardiac muscle.",
    answer: false,
    explanation: "VSM lacks the organised banding of cardiac muscle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Actin and myosin in vascular smooth muscle are arranged specifically for maintaining tonic contractions and reducing lumen diameter.",
    answer: true,
    explanation: "This arrangement suits VSM's sustained contraction function."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Contraction in vascular smooth muscle can be initiated by mechanical, electrical, and chemical stimuli.",
    answer: true,
    explanation: "VSM responds to multiple stimulus types."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Chemical and electrical stimuli bind to specific receptors on VSM cells or on adjacent endothelium to cause contraction.",
    answer: true,
    explanation: "Receptor binding initiates signalling for contraction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Increased free intracellular calcium in VSM results from increased flux through calcium channels or release from internal stores.",
    answer: true,
    explanation: "These are the two sources of calcium in VSM."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "In VSM, free calcium binds to calmodulin, and calcium‑calmodulin activates myosin light chain kinase (MLCK).",
    answer: true,
    explanation: "This is the key step in VSM contraction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "MLCK phosphorylates myosin light chains (MLC) in the presence of ATP, leading to cross‑bridge formation and contraction.",
    answer: true,
    explanation: "Phosphorylation of MLC is essential for contraction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "VSM relaxation occurs when myosin light chains are dephosphorylated by myosin light chain phosphatase (MLCP).",
    answer: true,
    explanation: "Dephosphorylation promotes relaxation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Vascular tone is determined by the degree of MLC phosphorylation, which depends on the relative activity of MLCK and MLCP.",
    answer: true,
    explanation: "The balance between kinase and phosphatase determines tone."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Oxidative stress causes vascular endothelial dysfunction by reducing nitric oxide bioavailability.",
    answer: true,
    explanation: "Oxidative stress decreases NO, impairing endothelial function."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Atherosclerosis is a condition in which there is obstruction within the arteries due to plaque formation.",
    answer: true,
    explanation: "Atherosclerosis involves plaque buildup causing arterial obstruction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Atherosclerosis is the progressive replacement of smooth muscle cells with collagen within the media of small arteries.",
    answer: false,
    explanation: "This describes arteriolosclerosis, not atherosclerosis."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Arteriosclerosis is the stiffening or hardening of artery walls, often caused by high blood pressure, aging, or plaque build-up.",
    answer: true,
    explanation: "This is the definition of arteriosclerosis."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "An aneurysm is a pathological, permanent localized dilatation of an artery driven by structural failure of the vessel wall.",
    answer: true,
    explanation: "This is the definition of an aneurysm."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular Physiology & Regulation",
    type: "truefalse",
    question: "Aneurysms commonly occur in the brain, thoracic aorta, and abdominal aorta.",
    answer: true,
    explanation: "These are common sites for aneurysms."
  },

  // SECTION 8: Cardiac Output & Exercise Physiology
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "Essential functions of the heart include covering the metabolic needs of body tissues by adequate blood supply and receiving all blood returning from tissues.",
    answer: true,
    explanation: "These are the two essential functions of the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "Essential conditions for heart function include normal structure and function of the heart and surrounding tissues, and adequate filling of the heart by blood.",
    answer: true,
    explanation: "These conditions are necessary for proper heart function."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "Cardiac output is determined by heart rate and stroke volume.",
    answer: true,
    explanation: "CO = HR × SV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "Control of heart rate is achieved by the autonomic nervous system and hormonal (humoral) control.",
    answer: true,
    explanation: "HR is regulated by these two systems."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "Stroke volume is controlled by preload, contractility, afterload, number and size of myocytes, heart architecture, and synchronization of atrial and ventricular function.",
    answer: true,
    explanation: "These are the determinants of stroke volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "The Frank‑Starling mechanism is an adaptive mechanism for increased cardiac load.",
    answer: true,
    explanation: "The Frank‑Starling mechanism adjusts output to match venous return."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "Ventricular hypertrophy increases the mass of contractile elements, strengthening contraction.",
    answer: true,
    explanation: "Hypertrophy is an adaptive response to increased load."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "Increased sympathetic adrenergic activity increases heart rate and contractility.",
    answer: true,
    explanation: "Sympathetic stimulation has positive chronotropic and inotropic effects."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "During active muscle contraction, muscle belly blood flow increases during contraction.",
    answer: false,
    explanation: "During contraction, mechanical compression reduces blood flow; flow rises between contractions."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "Increased muscle contraction results in increased metabolism and accumulation of vasodilator metabolites.",
    answer: true,
    explanation: "Metabolites such as CO₂, H⁺, and adenosine cause local vasodilation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "During exercise, increased sympathetic and reduced parasympathetic discharge increase heart rate and strength.",
    answer: true,
    explanation: "Autonomic changes during exercise enhance cardiac performance."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "During exercise, arteriolar constriction occurs in all vascular beds, including muscle, brain, and coronary beds.",
    answer: false,
    explanation: "Muscle, brain, and coronary beds dilate; constriction occurs in other beds."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "Increased mean systemic filling pressure during exercise is due to venoconstriction and arteriolar constriction.",
    answer: true,
    explanation: "Venoconstriction and arteriolar constriction raise MSFP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "Cardiac output is the volume ejected per minute, expressed in mL/min or L/min.",
    answer: true,
    explanation: "CO is measured as volume per minute."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "Normal cardiac output is approximately 5 L/min.",
    answer: true,
    explanation: "Average resting CO is 5 L/min."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "Cardiac output varies widely with activity and can increase up to 25 L/min during maximal exercise in trained athletes.",
    answer: true,
    explanation: "CO can increase fivefold with exercise."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "When heart rate increases, cardiac output always increases proportionally.",
    answer: false,
    explanation: "HR increase may reduce SV due to shorter filling time, so CO may not increase proportionally."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "When the force of contraction increases (positive inotropy), stroke volume increases.",
    answer: true,
    explanation: "Increased contractility enhances SV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "When blood volume increases, venous return increases, the ventricle fills more, and cardiac output increases.",
    answer: true,
    explanation: "Increased preload raises CO via Frank‑Starling."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "Venous return equals cardiac output in steady state (Starling's law).",
    answer: true,
    explanation: "The heart pumps out what it receives."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "Heart size and gender are factors affecting stroke volume.",
    answer: true,
    explanation: "Larger hearts and males generally have higher SV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "Cardiac index (CI) is cardiac output expressed per unit body surface area.",
    answer: true,
    explanation: "CI normalises CO for body size."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Exercise",
    type: "truefalse",
    question: "The normal cardiac index is approximately 3.2 L/min/m².",
    answer: true,
    explanation: "CI = CO/BSA ≈ 5/1.7 = 3.2 L/min/m²."
  },

  // SECTION 9: Coronary & Cerebral Circulation
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "In the heart, oxygen extraction is very high at rest, so flow must increase when oxygen consumption increases.",
    answer: true,
    explanation: "The heart has high basal O₂ extraction, so increased demand requires increased flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Coronary flow occurs mainly during systole because the aortic valve is open.",
    answer: false,
    explanation: "Coronary flow occurs mainly during diastole because systolic compression impedes flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "The coronary arteries arise from the root of the aorta.",
    answer: true,
    explanation: "The right and left coronary arteries originate from the aortic root."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "The left coronary artery supplies most of the right ventricle as well as the posterior part of the left ventricle.",
    answer: false,
    explanation: "The right coronary artery supplies most of the right ventricle and posterior left ventricle; the left coronary supplies the anterior and lateral left ventricle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Coronary venous blood returns to the right atrium through the coronary sinus.",
    answer: true,
    explanation: "The coronary sinus is the main venous drainage pathway."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "In normal human hearts, there are virtually no functional intercoronary channels, so occlusion leads to ischemia.",
    answer: true,
    explanation: "Lack of significant anastomoses makes occlusion dangerous."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "If a coronary vessel narrows slowly over time, collateral vessels may develop to prevent necrosis.",
    answer: true,
    explanation: "Slow narrowing allows collateral development."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Coronary blood flow occurs mainly during cardiac systole.",
    answer: false,
    explanation: "Coronary flow is mainly diastolic."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "There is efficient anastomoses between coronary vessels, so occlusion rarely causes problems.",
    answer: false,
    explanation: "Anastomoses are inefficient, so occlusion causes serious problems."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "The coronary circulation represents about 5% of cardiac output, while the heart weight is about 300 g.",
    answer: true,
    explanation: "Coronary flow is 4–5% of CO, and heart weight is approximately 300 g."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Regulation of coronary blood flow is mainly by metabolites and not neural factors.",
    answer: true,
    explanation: "Metabolic regulation (e.g., adenosine, hypoxia) dominates in the coronary circulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "The capillary permeability in the coronary circulation is high, and cardiac lymph is rich in protein.",
    answer: true,
    explanation: "Coronary capillaries are highly permeable, yielding protein‑rich lymph."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "The subendocardial myocardial layer in the left ventricle receives more blood due to less compression.",
    answer: false,
    explanation: "It receives less blood due to greater compression, making it vulnerable to ischemia."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Resting coronary blood flow averages 225 ml/min, which accounts for about 4‑5% of cardiac output.",
    answer: true,
    explanation: "Resting coronary flow is approximately 225 ml/min (4–5% of CO)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "During systole, left ventricular vascular blood flow is markedly reduced due to compression of intramuscular vessels.",
    answer: true,
    explanation: "Systolic compression of coronary vessels, especially in the left ventricle, reduces flow during contraction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "During diastole, coronary blood flow is rapid because the obstruction caused by ventricular muscle compression is removed.",
    answer: true,
    explanation: "Diastolic relaxation allows unimpeded coronary flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Tachycardia always increases coronary blood flow because the heart beats faster.",
    answer: false,
    explanation: "Tachycardia reduces diastolic filling time, which can decrease coronary flow despite metabolic vasodilation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "The primary factor responsible for perfusion of the myocardium is the change in aortic pressure.",
    answer: true,
    explanation: "Aortic pressure (especially diastolic) drives coronary perfusion."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Coronary blood flow is directly proportional to the work done by the heart.",
    answer: true,
    explanation: "Increased cardiac work increases metabolic demand and coronary flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Stimulation of sympathetic nerves causes coronary vasoconstriction through a direct effect on coronary vessels.",
    answer: false,
    explanation: "Sympathetic stimulation increases cardiac metabolism, which leads to vasodilation; the direct effect is indirect through metabolism."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Stimulation of parasympathetic nerves decreases cardiac metabolism, leading to coronary vasoconstriction and decreased coronary blood flow.",
    answer: true,
    explanation: "Reduced metabolic demand from parasympathetic stimulation leads to vasoconstriction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Oxygen lack (hypoxia) is the most effective coronary vasodilator.",
    answer: true,
    explanation: "Hypoxia directly dilates coronary vessels and releases adenosine."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Adenosine is a potent coronary vasodilator released from ATP during hypoxia.",
    answer: true,
    explanation: "Adenosine is a key mediator of metabolic vasodilation in the coronary circulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Nitrites, aminophylline, caffeine, and khellin are coronary vasoconstrictors.",
    answer: false,
    explanation: "These are coronary vasodilators that increase coronary blood flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Thyroxine increases cardiac metabolism and acts as a coronary vasodilator, increasing coronary blood flow.",
    answer: true,
    explanation: "Thyroxine raises metabolic rate, which increases coronary flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Ventricular systole causes compression of coronary vessels and decreases coronary blood flow, mainly in the left coronary artery.",
    answer: true,
    explanation: "The stronger left ventricular contraction compresses vessels more than the right."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Coronary blood flow is maximal at the end of isometric relaxation during diastole.",
    answer: true,
    explanation: "Early diastole allows maximal coronary filling."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Excessive tachycardia decreases coronary blood flow because diastolic period is shortened.",
    answer: true,
    explanation: "Shortened diastole reduces coronary perfusion time."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Coronary blood flow is inversely proportional to cardiac output.",
    answer: false,
    explanation: "CBF is directly proportional to cardiac output."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Increased cardiac output raises aortic pressure and may cause reflex inhibition of vagal vasoconstrictor tone, leading to coronary vasodilation.",
    answer: true,
    explanation: "Higher CO increases aortic pressure and reduces vagal tone, promoting coronary flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Coronary blood flow is directly proportional to aortic diastolic pressure.",
    answer: true,
    explanation: "Higher diastolic pressure drives more coronary perfusion."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Aortic regurgitation increases coronary blood flow because it raises diastolic pressure.",
    answer: false,
    explanation: "Aortic regurgitation lowers diastolic pressure, decreasing CBF."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Blood reaches the brain through the internal carotid and vertebral arteries.",
    answer: true,
    explanation: "These are the two main arterial supplies to the brain."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "The vertebral arteries unite to form the basilar artery.",
    answer: true,
    explanation: "The two vertebral arteries join to form the basilar artery."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "The circle of Willis is formed by the internal carotid, anterior communicating, posterior communicating, and basilar arteries.",
    answer: true,
    explanation: "These arteries form the major anastomotic circle at the base of the brain."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "The cerebral circulation lies in a rigid structure (the cranium), so any increase in arterial inflow must be matched by increased venous outflow.",
    answer: true,
    explanation: "The incompressible contents of the skull require matched inflow and outflow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Cerebral blood flow averages 55 ml/min/100g of brain tissue.",
    answer: true,
    explanation: "Normal CBF is about 55 ml/min/100g."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Cerebral blood flow represents about 15% of resting cardiac output.",
    answer: true,
    explanation: "The brain receives approximately 15% of resting CO."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "The brain is the organ most tolerant to ischemia and can survive without blood for many minutes.",
    answer: false,
    explanation: "The brain is the least tolerant to ischemia; 5 seconds of loss can cause unconsciousness."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Loss of cerebral blood flow for more than a few minutes leads to irreversible tissue damage.",
    answer: true,
    explanation: "Cerebral ischemia beyond a few minutes causes permanent damage."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Cerebral blood flow is regulated mainly by local regulatory mechanisms and reflexes originating in the brain.",
    answer: true,
    explanation: "Local mechanisms and intrinsic reflexes dominate cerebral flow regulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "An increase in PCO₂ causes marked cerebral vasodilation and increased cerebral blood flow.",
    answer: true,
    explanation: "CO₂ is a potent cerebral vasodilator acting via pH changes."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "CO₂ acts on cerebral vessels by altering perivascular pH, which changes arterial resistance.",
    answer: true,
    explanation: "The pH change mediates the vasodilatory response."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Hypoxia, electrical stimulation, and seizures cause a decrease in perivascular potassium and a decrease in cerebral blood flow.",
    answer: false,
    explanation: "These increase perivascular K⁺, causing an initial increase in CBF."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Adenosine is a potent dilator of pial arterioles in the brain.",
    answer: true,
    explanation: "Adenosine causes vasodilation in the cerebral circulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Coronary & Cerebral Circulation",
    type: "truefalse",
    question: "Adenosine levels in the brain increase in response to ischemia, hypoxemia, hypotension, hypocapnia, electrical stimulation, and seizures.",
    answer: true,
    explanation: "These conditions all elevate cerebral adenosine."
  },

  // SECTION 10: Splanchnic & Cutaneous Circulation
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Splanchnic circulation includes blood flow through the gut, spleen, pancreas, and liver.",
    answer: true,
    explanation: "The splanchnic bed encompasses these abdominal organs."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "All blood from the gut, spleen, and pancreas flows immediately into the liver via the portal vein.",
    answer: true,
    explanation: "The portal system directs splanchnic blood to the liver."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "In the liver, blood passes through sinusoids and empties into hepatic veins that drain into the vena cava.",
    answer: true,
    explanation: "This is the normal hepatic circulation pathway."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Reticuloendothelial cells lining the liver sinusoids can remove bacteria and particulate matter from the blood.",
    answer: true,
    explanation: "The liver acts as a filter through its reticuloendothelial cells."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "The superior and inferior mesenteric arteries supply the walls of the small and large intestines.",
    answer: true,
    explanation: "These are the main arterial supplies to the intestines."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Blood flow in each area of the gastrointestinal tract is unrelated to the level of local activity.",
    answer: false,
    explanation: "GI blood flow is directly related to local activity level."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Blood flow in the muscle layers of the intestinal wall increases with increased motor activity.",
    answer: true,
    explanation: "Motor activity increases metabolic demand and blood flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "The countercurrent exchange system in the intestinal villi permits diffusion of oxygen from arterioles to venules.",
    answer: true,
    explanation: "The countercurrent arrangement allows oxygen shunting."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "At low blood flow, the countercurrent system may cause necrosis of intestinal villi tips due to oxygen shunting.",
    answer: true,
    explanation: "Low flow increases oxygen shunting away from villus tips, causing ischemia."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Parasympathetic stimulation to the stomach and lower colon directly decreases local blood flow.",
    answer: false,
    explanation: "Parasympathetic stimulation increases glandular secretion, which secondarily increases blood flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Sympathetic stimulation causes intense vasoconstriction of splanchnic arterioles via alpha-adrenergic receptors.",
    answer: true,
    explanation: "Alpha-adrenergic activation constricts splanchnic vessels."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "The vasoconstriction caused by sympathetic stimulation in the splanchnic circulation is permanent and long-lasting.",
    answer: false,
    explanation: "Local metabolic vasodilator mechanisms override sympathetic constriction to restore flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Vasodilator substances such as CCK, VIP, gastrin, and secretin are released from the mucosa during digestion.",
    answer: true,
    explanation: "These gut hormones are vasodilators."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Kallidin and bradykinin are powerful vasodilators released during gastrointestinal glandular secretion.",
    answer: true,
    explanation: "These kinins contribute to mucosal vasodilation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Decreased oxygen concentration in the gut wall increases intestinal blood flow.",
    answer: true,
    explanation: "Hypoxia is a potent vasodilator in the gut."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "A decrease in oxygen can lead to a fourfold increase in adenosine, which may be responsible for increased intestinal blood flow.",
    answer: true,
    explanation: "Adenosine mediates the vasodilatory response to hypoxia."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "In cutaneous circulation, the chief factor regulating blood flow is the supply of oxygen and nutrients.",
    answer: false,
    explanation: "Thermoregulation, not oxygen delivery, is the primary regulator of skin blood flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "The primary function of cutaneous circulation is to maintain a constant body temperature.",
    answer: true,
    explanation: "Skin blood flow is adjusted to conserve or dissipate heat."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Skin contains arteriovenous anastomoses that shunt blood from arterioles directly to venules.",
    answer: true,
    explanation: "AV anastomoses provide a bypass route for blood flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Arteriovenous anastomoses in the skin are richly supplied with nerves and are almost exclusively under sympathetic neural control.",
    answer: true,
    explanation: "Sympathetic nerves dominate AV anastomosis regulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Sympathetic stimulation causes dilation of AV anastomoses in the skin.",
    answer: false,
    explanation: "Sympathetic stimulation constricts AV anastomoses and may obliterate the lumen."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Arteriovenous anastomoses are highly sensitive to vasoconstrictor agents such as adrenaline and noradrenaline.",
    answer: true,
    explanation: "These agents cause potent constriction of AV anastomoses."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Arteriovenous anastomoses exhibit reactive hyperaemia and autoregulation of blood flow.",
    answer: false,
    explanation: "AV anastomoses are not under metabolic control and do not exhibit these phenomena."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Cutaneous blood flow is regulated mainly by the nervous system in response to temperature reflexes.",
    answer: true,
    explanation: "Neural reflexes from temperature receptors regulate skin blood flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Parasympathetic vasodilator nerve fibres innervate cutaneous blood vessels.",
    answer: false,
    explanation: "Parasympathetic fibres do not innervate skin vessels."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Splanchnic & Cutaneous Circulation",
    type: "truefalse",
    question: "Stimulation of sweat glands (innervated by parasympathetic cholinergic fibres) dilates the skin's resistance vessels.",
    answer: true,
    explanation: "Sweat gland activity causes local vasodilation."
  },

  // SECTION 11: Shock
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Shock is a condition resulting in inadequate tissue perfusion or absolutely inadequate cardiac output that can cause widespread tissue damage.",
    answer: true,
    explanation: "This is the definition of shock."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Hypovolemic shock is a type of distributive shock.",
    answer: false,
    explanation: "Hypovolemic shock is low volume; distributive shock involves vasodilation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Types of shock include hypovolemic, distributive, cardiogenic, and obstructive shock.",
    answer: true,
    explanation: "These are the four major categories of shock."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "In hypovolemic shock, compensatory mechanisms include increased formation of angiotensin II, increased ADH, increased thirst, and increased sodium retention.",
    answer: true,
    explanation: "These are compensatory responses to volume loss."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased erythropoietin and increased plasma protein synthesis are compensatory adjustments to shock.",
    answer: true,
    explanation: "These help restore oxygen-carrying capacity and oncotic pressure."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased movement of interstitial fluid into capillaries occurs during hypovolemic shock.",
    answer: true,
    explanation: "Starling forces favour reabsorption to restore volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "In skeletal muscle, sympathetic nerves cause vasoconstriction via alpha‑adrenergic receptors.",
    answer: true,
    explanation: "Sympathetic vasoconstriction in muscle is alpha‑mediated."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Epinephrine causes vasodilation via beta‑2 receptors when present in low concentration, and vasoconstriction via alpha receptors when present in high concentration.",
    answer: true,
    explanation: "Epinephrine has a concentration‑dependent dual effect."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "In the brain, vasodilation occurs in response to increased concentration of carbon dioxide in arterial blood.",
    answer: true,
    explanation: "CO₂ is a potent cerebral vasodilator."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The skin is controlled mainly by sympathetic nerves, with reflex vasoconstriction in response to cold.",
    answer: true,
    explanation: "Skin blood flow is primarily sympathetically regulated for thermoregulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "In the lungs, vasoconstriction occurs in response to low oxygen concentration, which is opposite to the systemic circulation.",
    answer: true,
    explanation: "Hypoxic pulmonary vasoconstriction is unique to the lungs."
  },
    // ===== PHYSIOLOGY – RENAL PHYSIOLOGY =====

  // SECTION 1: Body Fluid Compartments & Composition
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Fluid in the human body is defined as water plus suspended or dissolved constituents, making up 45-75% of body weight.",
    answer: true,
    explanation: "Fluid consists of water and its dissolved constituents, with its proportion varying inversely with the body's fat content."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "The percentage of body weight that is water varies directly with the body's fat content.",
    answer: false,
    explanation: "The percentage of body weight that is water varies inversely with the body's fat content."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "In infants and premature babies, total body water accounts for approximately 70-75% of their body weight.",
    answer: true,
    explanation: "Infants have a much higher water content compared to adults, reaching up to 70-75% of their total body weight."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "In an average 70kg adult male, the extracellular fluid (ECF) compartment contains approximately 25 liters of fluid.",
    answer: false,
    explanation: "In a 70kg man, the intracellular fluid (ICF) is about 25L, while the extracellular fluid (ECF) is about 15L."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Dehydration frequently develops more rapidly and is more severe in children because the absolute volume of ECF in children is smaller than in adults.",
    answer: true,
    explanation: "Because children have a smaller absolute volume of ECF and a larger ECF/ICF ratio, they are more susceptible to rapid and severe dehydration."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Cerebrospinal fluid (CSF) has a protein concentration that is nearly identical to that of blood plasma.",
    answer: false,
    explanation: "CSF protein concentration is very low (20-40 mg/dL) compared to the high concentration in plasma (2,000-5,000 mg/dL)."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Sodium and chloride are largely intracellular electrolytes, whereas potassium is largely extracellular.",
    answer: false,
    explanation: "Sodium (Na+) and chloride (Cl-) are largely extracellular ions, whereas potassium (K+) is largely intracellular."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Osmosis is the net movement of water molecules across a semipermeable membrane from a region of higher water concentration to a region of lower water concentration.",
    answer: true,
    explanation: "Osmosis is a passive transport process driven by the goal of equalizing the overall solute concentration across a membrane."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Aquaporin-1 (Aq-1) water channel proteins are primarily located in the collecting duct of the nephron.",
    answer: false,
    explanation: "Aquaporin-1 (Aq-1) is found in the proximal tubule, whereas Aquaporin-2 (Aq-2) is located in the collecting duct."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Transcellular fluid is a minor body fluid compartment with a total volume of approximately 300 mL.",
    answer: true,
    explanation: "Transcellular fluid includes cerebrospinal, synovial, pleural, and intraocular fluids, totaling about 0.3L (300 mL)."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Evans blue dye (T1824) can be used as an indicator to measure plasma volume.",
    answer: true,
    explanation: "Evans blue binds to plasma proteins, making it an effective dilution indicator for measuring plasma volume."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Inulin, mannitol, and raffinose are metabolizable saccharides used to measure the Extracellular Fluid (ECF) compartment.",
    answer: false,
    explanation: "These substances are non-metabolizable saccharides that distribute freely in the ECF but do not enter cells."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Cerebrospinal fluid functions to reduce the effective weight of the brain from 1500g to roughly 50g.",
    answer: true,
    explanation: "The buoyancy provided by the CSF protects the central nervous system by drastically reducing the brain's effective weight."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "In a normal young adult female, total body water is approximately 60% of her body weight.",
    answer: false,
    explanation: "Total body water is about 50% in normal young adult females, compared to 60% in normal young adult males."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Endocytosis is a cellular process where a cell takes in substances from its external environment by engulfing them, requiring cellular energy.",
    answer: true,
    explanation: "Endocytosis is an active transport mechanism used to import large molecules and particles into the cell."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Potassium, magnesium, and organic phosphates are the principal intracellular ions, heavily concentrated within the cell compared to the interstitial fluid.",
    answer: true,
    explanation: "The Na+/K+ ATPase pump and cellular membranes maintain this strict gradient, keeping K+ and Mg2+ high inside the ICF."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "The intracellular fluid (ICF) possesses a significantly lower concentration of negatively charged proteins compared to the extracellular fluid.",
    answer: false,
    explanation: "The ICF contains a much higher concentration of negatively charged proteins and organic molecules that cannot cross the cell membrane."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Simple diffusion of lipid-soluble substances, such as oxygen and carbon dioxide, occurs directly through the lipid bilayer without the assistance of carrier proteins.",
    answer: true,
    explanation: "These uncharged, lipophilic molecules can freely pass through the hydrophobic core of the plasma membrane down their concentration gradients."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Facilitated diffusion is an active transport mechanism that requires cellular energy in the form of ATP to move molecules against their concentration gradient.",
    answer: false,
    explanation: "Facilitated diffusion is a passive process; it uses carrier proteins to move molecules down their concentration gradients without the expenditure of ATP."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "The indicator dilution principle calculates the volume of a body fluid compartment by dividing the mass of the indicator injected by its final equilibrium concentration.",
    answer: true,
    explanation: "This principle assumes the indicator is evenly dispersed within the compartment and uses the formula Volume = Mass / Concentration."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "In the continuous injection method for measuring fluid volumes, the concentration of the indicator is measured immediately after a rapid, single bolus injection.",
    answer: false,
    explanation: "The continuous injection method relies on infusing the indicator until a steady-state equilibrium is reached, allowing for the precise measurement of flow or volume despite ongoing excretion."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Capillary hydrostatic pressure (Pc) acts as an outward physical force that pushes fluid out of the capillary and into the surrounding interstitial spaces.",
    answer: true,
    explanation: "This pressure is generated by the pumping action of the heart and is the primary driver of fluid filtration at the arterial end of a capillary bed."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Plasma colloid osmotic pressure is largely generated by the presence of large, non-diffusible plasma proteins like albumin.",
    answer: true,
    explanation: "These proteins create an osmotic pull that tends to draw fluid from the interstitial spaces back into the blood capillaries, opposing hydrostatic pressure."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "An increase in the interstitial fluid hydrostatic pressure (Pif) strongly favors the massive filtration of fluid out of the capillary.",
    answer: false,
    explanation: "Interstitial fluid hydrostatic pressure pushes against the outside of the capillary, opposing filtration and favoring reabsorption."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "The Gibbs-Donnan equilibrium describes the uneven distribution of diffusible ions across a membrane caused by the presence of a non-diffusible ion on one side.",
    answer: true,
    explanation: "Because plasma contains large anionic proteins that cannot leave the capillary, diffusible cations are slightly higher in plasma to maintain electrical neutrality."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Sensible water loss includes the constant, obligatory evaporation of water from the respiratory tract and skin diffusion, averaging about 700 mL per day.",
    answer: false,
    explanation: "Loss from the skin diffusion and respiratory tract is called *insensible* water loss because a person is not consciously aware of it. Sweating is sensible."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "In a healthy adult, the interstitial fluid compartment makes up approximately 80% of the total extracellular fluid volume.",
    answer: true,
    explanation: "Of the 15 liters of ECF in a 70kg man, roughly 12 liters are interstitial fluid, bathing the cells directly."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Effective solutes, such as sodium and mannitol, do not easily cross cell membranes and are responsible for creating osmotic pressure gradients.",
    answer: true,
    explanation: "These effective solutes drive the osmotic movement of water across fluid compartments."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Urea easily crosses plasma membranes and therefore acts as a highly effective solute that strongly dictates plasma tonicity.",
    answer: false,
    explanation: "Because urea is highly permeable, it equilibrates rapidly and acts as an ineffective solute regarding plasma tonicity."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Body Fluid Compartments",
    type: "truefalse",
    question: "Regulated water excretion involves the renal elimination of free water in excess of the obligate amount necessary to excrete metabolic solutes.",
    answer: true,
    explanation: "The kidneys can selectively excrete pure water depending on ADH levels to maintain precise osmoregulation."
  },

  // SECTION 2: Kidney Anatomy & Structure
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "The kidneys are retroperitoneal organs positioned on either side of the spine, extending from the T12 to L3 vertebrae.",
    answer: true,
    explanation: "They sit behind the peritoneum, protected by the lower ribs and abdominal muscles."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "The right kidney is typically located slightly higher than the left kidney to accommodate the liver.",
    answer: false,
    explanation: "The left kidney is usually slightly higher, while the right kidney is lower to accommodate the liver."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "Both kidneys receive 20-25% of the total cardiac output at rest.",
    answer: true,
    explanation: "Despite weighing only 0.5% of body weight, the kidneys receive a massive fraction of cardiac output to filter the blood."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "Juxtamedullary nephrons account for 85-90% of the total nephron population in the human kidney.",
    answer: false,
    explanation: "Cortical nephrons account for 85-90% of the nephron population, while juxtamedullary nephrons make up only 10-15%."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "The loop of Henle in cortical nephrons is short and only partly descends into the outer medulla.",
    answer: true,
    explanation: "Unlike juxtamedullary nephrons, cortical nephrons have short loops that do not penetrate deeply into the inner medulla."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "Intercalated cells of the distal tubule and collecting duct are rich in mitochondria and contain abundant proton-ATPases.",
    answer: true,
    explanation: "These alpha and beta intercalated cells are primarily involved in acid-base regulation through active proton transport."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "The macula densa is arbitrarily designated as the point where the loop of Henle ends and the distal convoluted tubule begins.",
    answer: true,
    explanation: "The macula densa acts as a chemoreceptor and forms a critical part of the juxtaglomerular apparatus at this junction."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "The juxtaglomerular apparatus consists of the juxtaglomerular (granular) cells, the macula densa, and extraglomerular mesangial (Lacis) cells.",
    answer: true,
    explanation: "These three components work together to regulate renal hemodynamics and blood pressure via the RAAS pathway."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "The renal papillae empty urine directly into the major calyces, which then funnel the fluid into the renal pelvis.",
    answer: false,
    explanation: "The papillae empty urine into the *minor* calyces first, which then merge to form the major calyces."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "The renal corpuscle of a nephron consists of two main structures: the capillary tuft known as the glomerulus, and the surrounding Bowman's capsule.",
    answer: true,
    explanation: "This structural unit is the exclusive site of blood filtration in the kidney."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "Podocytes are highly specialized epithelial cells forming the visceral layer of Bowman's capsule, extending foot processes around the capillaries.",
    answer: true,
    explanation: "The interdigitating foot processes (pedicels) form filtration slits that act as a crucial size-selective barrier."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "The glomerular basement membrane possesses a strong positive charge, which facilitates the filtration of positively charged plasma proteins.",
    answer: false,
    explanation: "The basement membrane has a strong *negative* charge (due to glycoproteins), which strongly repels negatively charged proteins like albumin."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "The proximal convoluted tubule utilizes extensive apical microvilli to massively increase its surface area for solute and water reabsorption.",
    answer: true,
    explanation: "This structural adaptation (the brush border) allows the proximal tubule to reabsorb 65% of the filtered load."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "The wall of the urinary bladder is lined by a simple squamous epithelium.",
    answer: false,
    explanation: "The bladder is lined by a transitional epithelium that is continuous with the ureters and allows for distension."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "The human kidney acts as an excretory organ by eliminating urea, a metabolic waste product derived primarily from muscle creatine.",
    answer: false,
    explanation: "Urea is the end-product of amino acid (protein) metabolism, whereas creatinine is the specific byproduct derived from muscle creatine."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "Uric acid is an excretory waste product eliminated by the kidneys that specifically results from the breakdown of nucleic acids.",
    answer: true,
    explanation: "Accumulation of uric acid, due to overproduction or underexcretion, can precipitate in joints and cause gout."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "During periods of prolonged fasting, the kidneys significantly support blood glucose levels by synthesizing glucose from non-carbohydrate precursors.",
    answer: true,
    explanation: "This process, known as renal gluconeogenesis, is a critical metabolic function of the kidney cortex during starvation."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Kidney Anatomy",
    type: "truefalse",
    question: "The renal pelvis is a large, funnel-shaped collecting structure that receives urine directly from the major calyces and channels it into the ureter.",
    answer: true,
    explanation: "It acts as the final collecting basin within the kidney before urine begins its transit down the ureter to the bladder."
  },

  // SECTION 3: Glomerular Filtration & Renal Blood Flow
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The normal pH of arterial blood is tightly regulated at 7.4 plus or minus 0.04.",
    answer: true,
    explanation: "Maintaining this narrow pH window is a critical homeostatic function of the kidneys, lungs, and chemical buffers."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "Renal clearance is defined as the volume of urine produced from which a given substance is completely removed per minute.",
    answer: false,
    explanation: "Clearance is the volume of plasma from which a given substance is completely removed per minute."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "A suitable substance for measuring Glomerular Filtration Rate (GFR) must be freely filtered and heavily reabsorbed by the renal tubules.",
    answer: false,
    explanation: "To accurately measure GFR, the substance must be freely filtered but neither secreted nor reabsorbed."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "Inulin is a polymer of fructose that is widely considered the gold standard for measuring GFR.",
    answer: true,
    explanation: "Inulin is freely filtered, not metabolized, and neither secreted nor reabsorbed, making its clearance equal to the GFR."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The average Glomerular Filtration Rate (GFR) in a healthy adult is approximately 125 mL/min.",
    answer: true,
    explanation: "This translates to the kidneys filtering an amount of fluid equal to 4 times the total body water every day."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "Para-aminohippuric acid (PAH) clearance is utilized to estimate renal plasma flow (RPF).",
    answer: true,
    explanation: "PAH is both filtered and highly secreted, so it is almost completely cleared from the plasma in a single pass through the kidney."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The absolute renal plasma flow in a normal adult is approximately 666 mL/min.",
    answer: true,
    explanation: "Relative renal plasma flow is about 600 mL/min, yielding an absolute flow of about 666 mL/min when corrected for the extraction ratio."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "If a patient's hematocrit is 40% and their renal plasma flow is 600 mL/min, their calculated renal blood flow is 1000 mL/min.",
    answer: true,
    explanation: "Renal blood flow = RPF / (1 - Hematocrit). Thus, 600 / (1 - 0.40) = 1000 mL/min."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The myogenic hypothesis states that an increase in systemic arterial pressure causes the afferent arteriole to relax in order to increase RBF.",
    answer: false,
    explanation: "The myogenic response causes the afferent arteriolar smooth muscle to contract in response to stretch, keeping blood flow constant."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "Creatinine clearance is a useful clinical index that tends to slightly overestimate true GFR because creatinine is partially secreted by the tubules.",
    answer: true,
    explanation: "Tubular secretion adds creatinine to the urine, which alone would overestimate GFR, though colorimetric lab errors often cancel this out in humans."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "An increase in the fluid hydrostatic pressure within Bowman's capsule favors an increase in the Glomerular Filtration Rate.",
    answer: false,
    explanation: "Fluid pressure in Bowman's capsule is a force that opposes glomerular filtration."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "Under normal physiological conditions, the renal clearance of glucose is 0 mL/min.",
    answer: true,
    explanation: "Because 100% of filtered glucose is normally reabsorbed in the proximal tubule, none appears in the urine."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "Autoregulation allows renal blood flow and GFR to remain relatively constant despite changes in arterial blood pressure.",
    answer: true,
    explanation: "This is achieved via both the myogenic mechanism and the tubuloglomerular feedback from the macula densa."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The clearance of urea is approximately 70 mL/min, which is less than GFR because urea is partially reabsorbed.",
    answer: true,
    explanation: "About 44% of filtered urea is reabsorbed per day, leading to a clearance lower than the inulin benchmark."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "Glomerular capillary hydrostatic pressure is the primary outward force driving glomerular filtration and is typically around 60 mmHg.",
    answer: true,
    explanation: "This pressure pushes fluid out of the capillary and is opposed by Bowman's capsule pressure and capillary oncotic pressure."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The total area of the glomerular capillary endothelium available for filtration in humans is roughly 0.8 square meters.",
    answer: true,
    explanation: "This massive surface area, along with the fenestrated nature of the capillaries, allows for high-volume filtration."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The glomerular filtration barrier prevents the passage of any neutral substance smaller than 4 nm in diameter.",
    answer: false,
    explanation: "The barrier permits the free passage of neutral substances up to 4 nm and excludes those greater than 8 nm."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The filtration fraction represents the proportion of renal plasma flow that is forced into Bowman's capsule, normally averaging about 20%.",
    answer: true,
    explanation: "Since the typical GFR is 125 ml/min and renal plasma flow is roughly 600 ml/min, about one-fifth of the plasma is filtered."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The composition of the ultrafiltrate in Bowman's space is virtually identical to blood plasma, including high concentrations of large proteins and cellular elements.",
    answer: false,
    explanation: "The ultrafiltrate is essentially protein-free and devoid of cellular elements, containing only water and low-molecular-weight solutes."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "As blood flows from the afferent arteriole to the efferent arteriole, the plasma colloid osmotic pressure within the glomerular capillary progressively increases.",
    answer: true,
    explanation: "Because protein-free fluid is filtered out, the remaining proteins become more concentrated, raising the oncotic pressure by the time blood reaches the efferent end."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "Severe, intense stimulation of the sympathetic nervous system causes widespread vasodilation of renal arterioles and dramatically increases GFR.",
    answer: false,
    explanation: "Intense sympathetic stimulation causes massive vasoconstriction of renal arterioles, reducing both renal blood flow and GFR to preserve blood volume for the brain and heart."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The extraction ratio of inulin is exactly 1.0, meaning the kidneys extract 100% of the inulin from the arterial plasma in a single pass.",
    answer: false,
    explanation: "Because inulin is only filtered (roughly 20% of plasma) and not secreted, its extraction ratio is equal to the filtration fraction, not 1.0."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "Relative renal plasma flow accurately reflects the total amount of plasma entering the kidneys without needing correction for the extraction ratio of PAH.",
    answer: false,
    explanation: "Relative RPF (measured directly by PAH clearance) must be corrected by dividing it by the extraction ratio of PAH (0.9) to calculate the true, absolute Renal Plasma Flow."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The calculation of absolute renal plasma flow utilizing para-aminohippuric acid requires dividing the clearance of PAH by the extraction ratio of PAH.",
    answer: true,
    explanation: "Since the kidneys only clear about 90% of PAH from the plasma in one pass, correcting for this extraction ratio yields the true plasma flow rate."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The myogenic hypothesis of renal autoregulation depends on the stretch-induced contraction of the efferent arteriole to maintain Glomerular Filtration Rate.",
    answer: false,
    explanation: "The myogenic mechanism relies on the stretch-induced contraction of the smooth muscle in the *afferent* arteriole, not the efferent arteriole."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "As systemic arterial pressure increases from roughly 80 mmHg to 160 mmHg, renal vascular resistance must actively increase to keep renal blood flow constant.",
    answer: true,
    explanation: "Autoregulation achieves constant flow in the face of rising pressure by proportionally increasing the resistance in the afferent arterioles."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The glomerular capillary endothelium contains small pores called fenestrae that completely restrict the filtration of cellular elements like red blood cells.",
    answer: true,
    explanation: "These fenestrations allow massive fluid filtration but are structurally small enough to keep blood cells within the capillary lumen."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The colloid osmotic pressure within Bowman's capsule is normally considered to be zero because the ultrafiltrate is essentially completely protein-free.",
    answer: true,
    explanation: "Because no large proteins pass the filtration barrier, there is no significant osmotic force pulling water into the capsular space."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "An abnormal increase in the plasma concentration of large proteins will increase the glomerular capillary oncotic pressure, thereby reducing the net filtration pressure.",
    answer: true,
    explanation: "Elevated plasma oncotic pressure acts as a stronger inward force, opposing hydrostatic pressure and decreasing the overall GFR."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "Glomerular filtration is a highly selective active transport process driven directly by ATP-dependent pumps located in the podocytes.",
    answer: false,
    explanation: "Filtration is a purely passive physical process driven by the bulk flow of fluid under hydrostatic pressure generated by the heart."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The filtration coefficient (Kf) is a mathematical product of the hydraulic conductivity and the total surface area of the glomerular capillaries.",
    answer: true,
    explanation: "This coefficient reflects how easily fluid can cross the membrane and the total area available, determining the total GFR for a given net filtration pressure."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "The primary filtration membrane in the renal corpuscle consists of three layers: the capillary endothelium, the basement membrane, and the podocyte filtration slits.",
    answer: true,
    explanation: "These three layers form a complex physical and electrical barrier that determines the size and charge selectivity of the glomerular filtrate."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Glomerular Filtration",
    type: "truefalse",
    question: "Neutral molecules that are larger than 8 nanometers in diameter pass freely and easily through the normal healthy glomerular filtration barrier.",
    answer: false,
    explanation: "The barrier is highly size-selective; molecules larger than 8 nm are almost entirely restricted from passing into Bowman's capsule."
  },

  // SECTION 4: Tubular Reabsorption & Secretion
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "Sodium is actively pumped from the tubular cells into the interstitium by the basolateral Na+-K+ ATPase.",
    answer: true,
    explanation: "This pump extrudes 3 Na+ ions in exchange for 2 K+ ions, maintaining the gradient needed for secondary active transport."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "The renal threshold for glucose is the arterial plasma level (around 200 mg/dl) at which glucose first appears in the urine.",
    answer: true,
    explanation: "Below this threshold, all glucose is reabsorbed. Above it, the tubular transport maximum begins to be overwhelmed."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "Under normal physiological conditions, 100% of the filtered amino acids and small peptides are reabsorbed in the proximal convoluted tubule.",
    answer: true,
    explanation: "These valuable nutrients are completely reclaimed via specific secondary active transporters, leaving none in the final urine."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "Reabsorption in the proximal convoluted tubule is strictly isosmotic, leaving the tubular fluid with an osmolality of approximately 300 mOsm/L as it enters the loop of Henle.",
    answer: true,
    explanation: "Because water follows the reabsorbed solutes in proportional amounts, the concentration of the fluid remains equal to plasma."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "The thin descending limb of the loop of Henle actively transports sodium out of the tubule but is completely impermeable to water.",
    answer: false,
    explanation: "The thin descending limb is highly permeable to water but lacks active solute transporters and is essentially impermeable to sodium."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "The thick ascending limb of the loop of Henle is responsible for reabsorbing approximately 25% of the filtered sodium load via the Na+-K+-2Cl- cotransporter.",
    answer: true,
    explanation: "This segment actively transports solutes out of the lumen while remaining impermeable to water, crucial for generating the medullary gradient."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "Loop diuretics, such as furosemide and ethacrynic acid, exert their powerful diuretic effect by inhibiting the Na+-K+-2Cl- cotransporter.",
    answer: true,
    explanation: "By blocking this transporter in the thick ascending limb, they drastically reduce sodium reabsorption and abolish the medullary concentrating gradient."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "The early distal convoluted tubule is frequently referred to as the 'diluting segment' because it reabsorbs solutes while remaining impermeable to water.",
    answer: true,
    explanation: "Further solute removal without water following drops the osmolality of the tubular fluid significantly below that of plasma."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "Thiazide diuretics produce diuresis by actively inhibiting the Na+-Cl- symporter located in the apical membrane of the early distal convoluted tubule.",
    answer: true,
    explanation: "This specific mechanism makes thiazides highly effective for managing hypertension and mild edema."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "The clearance ratio of a given substance is determined by dividing its clearance by the clearance of para-aminohippuric acid (PAH).",
    answer: false,
    explanation: "The clearance ratio is calculated by dividing the substance's clearance by the clearance of inulin, which represents the standard GFR."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "If the calculated clearance ratio of a substance is greater than 1.0, it proves that the substance is filtered and undergoes net tubular secretion.",
    answer: true,
    explanation: "A ratio > 1.0 means more of the substance appears in the urine than was filtered, indicating active secretion by the peritubular capillaries."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "During the process of tubular reabsorption, substances move actively or passively from the peritubular capillaries directly into the tubular lumen.",
    answer: false,
    explanation: "Tubular reabsorption is the movement of substances from the tubular lumen back *into* the peritubular capillaries. The reverse process is called tubular secretion."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "The basolateral membrane of the renal tubular epithelial cells directly faces the tubular lumen and contains the extensive brush border.",
    answer: false,
    explanation: "The *apical* (luminal) membrane faces the tubular lumen and has the brush border. The basolateral membrane faces the interstitial space and blood vessels."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "Secondary active transport of glucose in the proximal tubule fundamentally relies on the energy from the sodium concentration gradient established by the basolateral Na+/K+ ATPase.",
    answer: true,
    explanation: "The pump uses ATP to keep intracellular sodium low, allowing sodium to flow down its gradient from the lumen, pulling glucose with it via a cotransporter."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "The phenomenon of 'splay' in the glucose titration curve occurs because not all nephrons possess the exact same transport maximum (Tmg) for glucose.",
    answer: true,
    explanation: "Heterogeneity among nephrons means some reach their maximal reabsorptive capacity earlier than others, causing a gradual rounding of the excretion curve rather than a sharp angle."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "The normal tubular transport maximum for glucose (Tmg) in a healthy adult male is approximately 375 mg/min.",
    answer: true,
    explanation: "This high threshold ensures that under normal dietary conditions, the kidneys can reabsorb all filtered glucose and prevent its loss in urine."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "The proximal convoluted tubule is uniquely responsible for the reabsorption of approximately 65% of the filtered load of sodium and water.",
    answer: true,
    explanation: "The highly developed brush border and abundant mitochondria make this segment the primary site for bulk, isosmotic reabsorption."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "The massive reabsorption of sodium in the proximal convoluted tubule directly causes the remaining tubular fluid to become highly hypertonic.",
    answer: false,
    explanation: "Because the proximal tubule is highly permeable to water, water follows the reabsorbed sodium proportionally, keeping the tubular fluid strictly isosmotic."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "In the thin descending limb of the loop of Henle, the primary mechanism of water movement is simple diffusion through the lipid bilayer.",
    answer: false,
    explanation: "Water movement is heavily facilitated by the high density of Aquaporin-1 channels in this segment, rather than simple lipid diffusion."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "The Na+-K+-2Cl- cotransporter utilizes secondary active transport to move ions from the tubular lumen into the cells of the thick ascending limb.",
    answer: true,
    explanation: "This carrier uses the downhill electrochemical gradient of sodium to simultaneously drive potassium and chloride uphill into the cell."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "The early distal convoluted tubule becomes highly permeable to water whenever antidiuretic hormone (ADH) is present in the blood.",
    answer: false,
    explanation: "The early distal tubule is constitutively impermeable to water regardless of ADH. Only the late distal tubule and collecting duct respond to ADH."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "A clearance ratio of less than 1.0 indicates that a freely filtered substance undergoes net tubular reabsorption as it passes through the nephron.",
    answer: true,
    explanation: "If the clearance is lower than the clearance of inulin (GFR), it means less plasma was cleared of the substance than was filtered, proving net reabsorption occurred."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "Valuable physiological solutes such as glucose, amino acids, and bicarbonate are almost completely reabsorbed in the proximal convoluted tubule.",
    answer: true,
    explanation: "The proximal tubule utilizes a massive array of specific secondary active transporters to reclaim 100% of these critical nutrients."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "The thin ascending limb of the loop of Henle is functionally characterized by being highly permeable to water but completely impermeable to sodium chloride.",
    answer: false,
    explanation: "The thin ascending limb is totally *impermeable* to water, but it is highly *permeable* to sodium chloride, allowing solutes to diffuse out into the medulla."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "The thick ascending limb of the loop of Henle is often referred to clinically as the 'diluting segment' because it actively removes solutes from the tubular fluid while blocking water.",
    answer: true,
    explanation: "By pumping out Na+, K+, and Cl- without allowing water to follow, the remaining tubular fluid becomes markedly hypotonic (dilute) as it exits this segment."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Tubular Reabsorption & Secretion",
    type: "truefalse",
    question: "Tubular secretion involves the movement of substances from the peritubular capillaries into the tubular lumen for excretion.",
    answer: true,
    explanation: "This active process eliminates substances like H+, K+, and foreign chemicals like penicillin from the blood."
  },

  // SECTION 5: Urine Concentration & Dilution
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "The countercurrent multiplier system primarily resides in the U-shaped vasa recta.",
    answer: false,
    explanation: "The countercurrent multiplier resides in the loop of Henle, while the vasa recta acts as the countercurrent exchanger."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "In the loop of Henle, the thick ascending limb is highly permeable to solutes but impermeable to water.",
    answer: true,
    explanation: "Active transport of Na+ and Cl- out of this segment without water following creates the hypertonic medullary interstitium."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "The countercurrent exchanger mechanism is an active, energy-consuming process required to generate the medullary osmotic gradient.",
    answer: false,
    explanation: "The countercurrent exchange in the vasa recta is a passive process that maintains, but does not generate, the gradient."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "Urea contributes to the establishment of the medullary osmotic gradient by recycling from the inner medullary collecting ducts.",
    answer: true,
    explanation: "Urea transporters allow urea to accumulate in the medullary interstitium, significantly boosting urine concentrating ability."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "A high-protein diet decreases the kidneys' ability to concentrate urine because it reduces urea synthesis.",
    answer: false,
    explanation: "A high-protein diet increases urea production, which enhances the medullary osmotic gradient and the ability to concentrate urine."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "Arginine vasopressin (ADH) binds to V2 receptors to insert Aquaporin-2 water channels into the apical membrane of principal cells.",
    answer: true,
    explanation: "This short-term regulation massively increases the water permeability of the collecting ducts to prevent water loss."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "Ingestion of water at a rate higher than 16 mL/min can result in cellular swelling and water intoxication.",
    answer: true,
    explanation: "Since the maximal urine flow during water diuresis is about 16 mL/min, exceeding this rate dilutes the ECF and forces water into cells."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "The obligatory urine volume, which is the minimum amount needed to excrete daily metabolic waste, is roughly 0.4 to 0.5 liters per day.",
    answer: true,
    explanation: "Even during severe dehydration, the kidneys must produce this volume to clear the body's solute load."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "The tubular transport maximum (Tmg) for glucose is higher in women than in men.",
    answer: false,
    explanation: "The Tmg is 375 mg/min in men and 200 mg/min in women."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "In adults, water generally accounts for 70% of total body weight in males and 60% in females according to the water balance module.",
    answer: true,
    explanation: "Muscular individuals have higher water content, and women generally have a higher proportion of adipose tissue, which is low in water."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "The majority of daily water loss in a healthy resting individual occurs through the feces.",
    answer: false,
    explanation: "The majority of water loss is through urine (approx. 1.5 L/day), followed by insensible losses from the skin and lungs."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "Control of water balance relies heavily on hypothalamic osmoreceptors that detect minute changes in plasma osmolality.",
    answer: true,
    explanation: "These receptors can detect a change of even 1-2% in osmolality, instantly triggering thirst and ADH release."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "The threshold for triggering the thirst sensation is lower than the threshold for secreting arginine vasopressin (AVP).",
    answer: false,
    explanation: "The thirst threshold is higher (approx. 295 mOsm/kg) compared to the AVP threshold (285 mOsm/kg)."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "Countercurrent multiplication relies on the active transport of solutes out of the thick ascending limb to generate a hyperosmotic medullary interstitium.",
    answer: true,
    explanation: "This active transport without water permeability creates an osmotic gradient that can reach 1200-1400 mOsm/L deep in the medulla."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "The vasa recta receive a massive volume of blood, accounting for over 50% of total renal blood flow, to supply the energy-hungry medulla.",
    answer: false,
    explanation: "Blood flow in the vasa recta is extremely sluggish, accounting for only 1-2% of RBF, which is essential to prevent washing out the medullary solutes."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "In the complete absence of antidiuretic hormone (ADH), the late distal tubule and collecting duct become highly impermeable to water.",
    answer: true,
    explanation: "Without ADH to insert aquaporins, water cannot leave the tubule, resulting in the excretion of a large volume of dilute urine."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "Central diabetes insipidus occurs when the renal collecting ducts completely fail to respond to circulating levels of antidiuretic hormone.",
    answer: false,
    explanation: "Central DI is a failure of the pituitary to *produce* ADH. Nephrogenic DI is the failure of the kidneys to *respond* to it."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "The countercurrent exchanger mechanism in the vasa recta is a completely passive physical process that maintains the medullary gradient.",
    answer: true,
    explanation: "As blood flows down and then back up the U-shaped vessels, solutes and water passively exchange with the interstitium without consuming ATP."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "Osmotic diuresis occurs when large quantities of osmotically active, non-reabsorbable substances like mannitol are present in the tubular fluid.",
    answer: true,
    explanation: "These substances act as an osmotic anchor, holding water in the tubule against the reabsorptive gradients and massively increasing urine volume."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "Vasopressin (ADH) specifically induces the movement of aquaporin-2 water channels from intracellular vesicles and inserts them into the apical membrane of the collecting duct cells.",
    answer: true,
    explanation: "This receptor-mediated exocytosis rapidly increases the water permeability of the apical membrane, allowing water to exit the tubule and enter the hyperosmotic interstitium."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "In the complete absence of antidiuretic hormone, the kidneys can produce a highly dilute final urine with an osmolality that can fall as low as 50 mOsm/kg.",
    answer: true,
    explanation: "Without ADH, the collecting ducts are impermeable to water, meaning the dilute fluid generated in the ascending limb is excreted directly, resulting in massive water diuresis."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "The countercurrent multiplier system creates an internal osmotic gradient that ranges from approximately 300 mOsm/L in the cortex to about 1200-1400 mOsm/L in the deep medulla.",
    answer: true,
    explanation: "This profound gradient is the critical driving force that allows the collecting ducts to pull water out of the urine when ADH is present."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "Nephrogenic diabetes insipidus is a clinical condition caused by a failure of the posterior pituitary gland to synthesize and secrete adequate amounts of ADH.",
    answer: false,
    explanation: "Central diabetes insipidus is the failure to produce ADH. Nephrogenic DI is the failure of the renal tubules to *respond* to adequate levels of circulating ADH."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "Urea recycling significantly contributes to the hyperosmolality of the inner medulla, accounting for about half of the maximal medullary concentration.",
    answer: true,
    explanation: "Urea is reabsorbed from the inner medullary collecting duct and accumulates in the interstitium, deeply enhancing the kidney's ability to concentrate urine."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Urine Concentration & Dilution",
    type: "truefalse",
    question: "Aquaporin-2 (AQP2) channels are stored in intracellular vesicles and fuse with the apical membrane of principal cells upon stimulation by ADH.",
    answer: true,
    explanation: "This dynamic shuttling mechanism allows the kidneys to rapidly alter water permeability in response to systemic hydration status."
  },

  // SECTION 6: Acid-Base Balance
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Chemical buffer systems serve as the rapid, first line of defense against acid-base disturbances in the body.",
    answer: true,
    explanation: "Buffer systems like bicarbonate and phosphate react almost instantly to neutralize added acids or bases."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The renal regulation of acid-base balance is the fastest homeostatic mechanism, correcting pH shifts within minutes.",
    answer: false,
    explanation: "Renal control is the slowest mechanism (third line of defense) but is the most powerful and efficient for long-term correction."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The kidneys regulate body pH through the reabsorption of bicarbonate, excretion of non-volatile acids, and formation of ammonia.",
    answer: true,
    explanation: "These three interconnected mechanisms allow the kidney to eliminate the daily dietary acid load and restore buffer reserves."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The proximal convoluted tubule is responsible for reabsorbing approximately 85% of the filtered bicarbonate.",
    answer: true,
    explanation: "Most of the 'reclaimed' bicarbonate is recovered early in the nephron, linked to the secretion of hydrogen ions."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "In the proximal tubule, filtered bicarbonate is reabsorbed directly across the apical membrane as an intact ion.",
    answer: false,
    explanation: "Bicarbonate must combine with secreted H+ to form H2CO3, which splits into H2O and CO2, crosses the membrane, and reforms into bicarbonate inside the cell."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The minimum possible urine pH achievable by the human kidneys is roughly 4.5.",
    answer: true,
    explanation: "This pH limit restricts the amount of free H+ that can be excreted, necessitating the use of urinary buffers like phosphate and ammonia."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "During conditions of metabolic acidosis, the kidneys respond by decreasing the excretion of titratable acids.",
    answer: false,
    explanation: "During acidosis, the kidneys increase H+ secretion, increase bicarbonate reabsorption, and increase the formation of titratable acids."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The ammonia buffer system is synthesized mainly from the amino acid glutamine.",
    answer: true,
    explanation: "Glutamine is metabolized in the renal epithelial cells to produce ammonium ions and new bicarbonate ions."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Consumption of a high-vegetable diet frequently leads to metabolic acidosis due to the high acidic content of plants.",
    answer: false,
    explanation: "Vegetable diets contain basic cations like potassium and sodium, which tend to cause metabolic alkalosis."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Persistent vomiting typically induces metabolic alkalosis due to the substantial loss of gastric acid.",
    answer: true,
    explanation: "Losing H+ via gastric secretions leaves behind un-neutralized bicarbonate in the blood, raising the pH."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Severe muscular exercise can cause metabolic acidosis because it leads to the excessive formation of lactic acid.",
    answer: true,
    explanation: "Lactic acid floods the plasma and consumes bicarbonate buffers, decreasing the blood pH."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Cellular metabolism continuously generates volatile acids, primarily carbon dioxide, which are eliminated from the body entirely by the kidneys.",
    answer: false,
    explanation: "Volatile acids (carbon dioxide) are eliminated almost exclusively by the lungs, while the kidneys handle fixed/non-volatile acids."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Non-volatile acids, such as sulfuric and phosphoric acids produced from protein metabolism, can only be cleared from the body via renal excretion.",
    answer: true,
    explanation: "These fixed acids cannot be converted to gas and expired; the kidneys must secrete the hydrogen ions and excrete them."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "A daily net acid load of roughly 1 mEq/kg of body weight is generated by metabolism and must be buffered and eventually eliminated.",
    answer: true,
    explanation: "This continuous generation of metabolic acid necessitates constant buffering by the blood and long-term excretion by the kidneys."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Within renal tubular cells, the enzyme carbonic anhydrase rapidly catalyzes the combination of water and carbon dioxide to form carbonic acid.",
    answer: true,
    explanation: "This intracellular hydration of CO2 is the critical first step in generating hydrogen ions for secretion and bicarbonate for reabsorption."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "For every hydrogen ion (H+) actively secreted into the tubular lumen, one newly generated molecule of bicarbonate (HCO3-) is transported into the blood.",
    answer: true,
    explanation: "This 1:1 linked transport process replenishes the body's alkaline buffer reserves as acid is excreted."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Titratable acid excretion primarily involves the buffering of secreted hydrogen ions by filtered phosphate (HPO4^2-) within the tubular lumen.",
    answer: true,
    explanation: "Secreted H+ combines with HPO4^2- to form H2PO4-, which is then trapped in the urine and excreted."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "In response to metabolic acidosis, the kidneys drastically decrease the synthesis of ammonium (NH4+) to preserve body nitrogen.",
    answer: false,
    explanation: "During acidosis, the kidneys massively *increase* ammonium production from glutamine to bind and excrete excess hydrogen ions."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The metabolism of a single glutamine molecule in the proximal tubule cells yields two ammonium ions (NH4+) and two new bicarbonate ions (HCO3-).",
    answer: true,
    explanation: "This mechanism is the most powerful renal adaptation for clearing chronic, heavy acid loads."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Secretion of hydrogen ions in the proximal convoluted tubule occurs primarily through secondary active transport via the apical Na+/H+ antiporter.",
    answer: true,
    explanation: "This mechanism uses the sodium gradient generated by the basolateral Na+/K+ pump to drive hydrogen secretion into the lumen."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Metabolic alkalosis is clinically defined by a primary elevation of plasma bicarbonate concentration resulting in a systemic blood pH above 7.44.",
    answer: true,
    explanation: "This shift toward alkalinity can be caused by loss of acid (vomiting) or excessive ingestion of basic compounds."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Addison's disease, involving hypofunction of the adrenal cortex and low aldosterone, can cause metabolic acidosis due to decreased renal H+ secretion.",
    answer: true,
    explanation: "Aldosterone normally stimulates H+ secretion in the collecting ducts; its absence leads to acid retention."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Laxative abuse frequently results in metabolic alkalosis because the gastrointestinal tract strongly secretes large volumes of highly acidic fluid.",
    answer: false,
    explanation: "Laxative abuse causes profound diarrhea, which leads to the loss of bicarbonate-rich intestinal fluids, resulting in metabolic *acidosis*."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The 'alkaline tide' is a temporary rise in blood pH that occurs when the stomach secretes gastric acid, concurrently releasing bicarbonate into the blood.",
    answer: true,
    explanation: "For every H+ secreted into the stomach lumen to digest food, a matching HCO3- is pumped into the gastric venous blood."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The primary physiological buffer systems in the human body include the bicarbonate buffer system, the phosphate buffer system, and the protein buffer system.",
    answer: true,
    explanation: "These chemical buffers act instantly in the blood and intracellular compartments to minimize pH changes before the lungs and kidneys can respond."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The kidneys eliminate volatile acids, primarily carbon dioxide, by converting them into bicarbonate and excreting them in the urine.",
    answer: false,
    explanation: "Volatile acids (carbon dioxide) are eliminated almost entirely by the lungs through ventilation, not by the kidneys."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "To excrete a daily acid load, the kidneys must reabsorb virtually all filtered bicarbonate and synthesize new bicarbonate to replenish the consumed buffer stores.",
    answer: true,
    explanation: "This dual process ensures that no base is lost in the urine and that the buffering capacity of the ECF is continuously restored."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Intracellular hydration of carbon dioxide to form carbonic acid is a critical initial step in the renal mechanism for secreting hydrogen ions.",
    answer: true,
    explanation: "Catalyzed by carbonic anhydrase, this reaction provides the continuous supply of H+ needed for apical secretion into the tubular lumen."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "For every hydrogen ion secreted into the tubular lumen that combines with a filtered non-bicarbonate buffer, a newly generated bicarbonate ion is lost in the urine.",
    answer: false,
    explanation: "When secreted H+ binds to a non-bicarbonate buffer (like phosphate) and is excreted, the new bicarbonate ion generated in the cell is added to the *peritubular capillary blood*, not lost in urine."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The term 'titratable acidity' refers to the amount of strong base, such as sodium hydroxide, required to titrate an acidic urine sample back to the normal blood pH of 7.4.",
    answer: true,
    explanation: "This measurement quantifies the amount of hydrogen ions excreted in the urine bound to non-bicarbonate buffers like phosphate."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Ammonium (NH4+) is a highly lipid-soluble gas that easily diffuses across the apical membrane of the proximal tubule directly into the tubular lumen.",
    answer: false,
    explanation: "Ammonia (NH3) is the lipid-soluble gas that diffuses easily. Once in the lumen, it binds H+ to form Ammonium (NH4+), which is charged and trapped in the fluid."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "During states of chronic metabolic acidosis, the renal production of ammonia from the amino acid glutamine is significantly upregulated to enhance acid excretion.",
    answer: true,
    explanation: "This highly adaptable mechanism allows the kidneys to vastly increase their capacity to buffer and excrete excessive hydrogen ions over several days."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Severe starvation and uncontrolled diabetes mellitus can lead to metabolic acidosis due to the excessive cellular production and systemic accumulation of ketone bodies.",
    answer: true,
    explanation: "The oxidation of fat in the absence of glucose utilization produces large amounts of acetoacetic acid and beta-hydroxybutyric acid, overwhelming the buffer systems."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Cushing's syndrome can result in metabolic alkalosis because excess adrenal corticosteroids strongly stimulate the reabsorption of sodium in exchange for the secretion of hydrogen ions.",
    answer: true,
    explanation: "The hyperfunction of the adrenal cortex drives excessive acid loss into the urine, leaving behind un-neutralized bicarbonate in the plasma."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The minimum pH of urine that the human kidneys can achieve is approximately 2.0, allowing for massive excretion of free, unbound hydrogen ions.",
    answer: false,
    explanation: "The minimum achievable urine pH is roughly 4.5. Because this limits the amount of free H+ that can be excreted, urinary buffers are essential."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Severe, prolonged diarrhea typically causes metabolic alkalosis due to the substantial loss of highly acidic fluid from the lower gastrointestinal tract.",
    answer: false,
    explanation: "Intestinal secretions are relatively rich in bicarbonate. Therefore, diarrhea results in the massive loss of base, causing metabolic *acidosis*."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "In a primary metabolic acidosis, the fundamental laboratory defect is a significant decrease in the plasma concentration of bicarbonate ions.",
    answer: true,
    explanation: "Metabolic acidosis is characterized by the consumption or loss of the body's primary buffer, bicarbonate, causing the systemic pH to drop."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The buffering of secreted hydrogen ions by filtered phosphate (HPO4^2-) in the tubular fluid directly generates new bicarbonate ions that enter the peritubular capillary blood.",
    answer: true,
    explanation: "This process is the primary mechanism for forming titratable acids, which allows the kidneys to excrete fixed acids while simultaneously restoring the blood's buffer reserves."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "The key enzyme carbonic anhydrase is present in exceptionally high concentrations within the epithelial cells of the proximal tubule and in their apical brush border.",
    answer: true,
    explanation: "This enzyme is absolutely required to rapidly catalyze the hydration of carbon dioxide, driving both bicarbonate reabsorption and hydrogen ion secretion."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Under normal resting physiological conditions, the human body produces a significantly larger amount of volatile acid daily than it does non-volatile fixed acids.",
    answer: true,
    explanation: "The body produces a massive amount of volatile CO2 daily via cellular respiration, while fixed acid production (from protein and lipid metabolism) is only about 80 mEq/day."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Acid-Base Balance",
    type: "truefalse",
    question: "Ingesting a diet that is very high in protein tends to strongly alkalinize the blood due to the breakdown of complex proteins into basic bicarbonate compounds.",
    answer: false,
    explanation: "High-protein diets contain sulfur- and phosphorus-bearing amino acids that metabolize into sulfuric and phosphoric acids, which significantly *acidify* the blood."
  },

  // SECTION 7: Micturition & Bladder Physiology
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "The external urethral sphincter is supplied by somatic nerve fibers from the pudendal nerve.",
    answer: true,
    explanation: "The pudendal nerve provides voluntary somatic control over the external sphincter, keeping it constricted until urination."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "Stimulation of the hypogastric nerve causes relaxation of the detrusor muscle and constriction of the internal sphincter.",
    answer: true,
    explanation: "The hypogastric nerve provides sympathetic innervation, facilitating the filling of the bladder."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "The pelvic nerve is a purely motor nerve that only innervates the detrusor muscle.",
    answer: false,
    explanation: "The pelvic nerve carries both parasympathetic motor fibers to the detrusor and sensory fibers that detect bladder stretch."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "The first urge to micturate typically appears when the bladder volume reaches 400-600 ml.",
    answer: false,
    explanation: "The first urge to micturate is usually felt at a volume of 150-300 ml. Volumes of 400-600 ml cause a sense of discomfort."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "At a bladder volume of roughly 700 ml, the micturition reflex reaches a breakpoint and cannot be voluntarily suppressed.",
    answer: true,
    explanation: "As the bladder overfills, the micturition contractions become incredibly powerful and override voluntary cortical inhibition."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "Spinal centers for the micturition reflex are located in the cervical and thoracic segments of the spinal cord.",
    answer: false,
    explanation: "The spinal centers governing micturition are located in the sacral and lumbar segments."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "Denervation of the bladder, involving injury to both afferent and efferent nerves, results in a flaccid neurogenic bladder.",
    answer: true,
    explanation: "This condition, also called an isolated bladder, abolishes reflexes and causes the bladder wall to remain flaccid."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "Deafferentation of the bladder often leads to overflow incontinence because the individual is unaware of bladder distension.",
    answer: true,
    explanation: "Loss of sensory (afferent) nerve fibers prevents the perception of fullness, causing the bladder to overfill and continuously dribble urine."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "During osmotic diuresis, the osmolality of the urine falls far below the osmolality of plasma.",
    answer: false,
    explanation: "In osmotic diuresis, urine osmolality falls but remains above plasma osmolality due to the presence of un-reabsorbed solutes."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "Water diuresis results in increased urine volume primarily due to the excretion of pure water, without an increase in solute excretion.",
    answer: true,
    explanation: "Water diuresis is typically caused by excessive water intake or ADH deficiency, leading to reduced water reabsorption but normal solute handling."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "A lack of ADH receptors in the distal convoluted tubule and collecting duct causes nephrogenic diabetes insipidus.",
    answer: true,
    explanation: "This receptor deficiency prevents ADH from inserting aquaporins, leading to massive water diuresis."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "The detrusor muscle is composed of voluntary skeletal muscle fibers.",
    answer: false,
    explanation: "The detrusor is the smooth muscle of the bladder wall, which contracts automatically during the micturition reflex."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "Sympathetic nerve supply to the bladder originates from the L1, L2, and L3 segments of the spinal cord.",
    answer: true,
    explanation: "These fibers travel via the hypogastric nerve and stimulate the blood vessels and internal sphincter."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "In a normal cystometrogram, intrinsic bladder tone keeps the intravesical pressure relatively constant with only small rises as volume increases from 50 ml to 300 ml.",
    answer: true,
    explanation: "Due to high bladder compliance, the rugae flatten out, accommodating large volumes with minimal pressure change."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "The ureters penetrate the bladder wall obliquely, running for several centimeters under the bladder mucosa to form a physiological valve.",
    answer: true,
    explanation: "This oblique entry ensures that as bladder pressure rises during micturition, the ureters are compressed, preventing urine backflow."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "Vesicoureteral reflux occurs when the detrusor muscle fails to contract, causing urine to stagnate exclusively within the bladder.",
    answer: false,
    explanation: "Vesicoureteral reflux is the abnormal backflow of urine from the bladder *up into the ureters*, usually due to an incompetent ureterovesical valve."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "The ureterorenal reflex is a protective mechanism triggered by a blocked ureter, initiating sympathetic impulses that constrict renal arterioles and decrease urine production.",
    answer: true,
    explanation: "This reflex prevents excessive pressure buildup and potential damage to the renal pelvis when a ureter is obstructed by a stone."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "A cystometrogram is a graphical recording that plots changes in intravesical pressure as the bladder progressively fills with increasing volumes of fluid.",
    answer: true,
    explanation: "It is used to clinically evaluate bladder compliance, capacity, and the integrity of the micturition reflex."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "Phase Ib of a normal cystometrogram demonstrates a massive, exponential rise in pressure as the bladder fills from 50 mL to 300 mL.",
    answer: false,
    explanation: "Phase Ib reflects high compliance, where the pressure remains nearly flat and constant as the bladder accommodates volumes up to 300 mL."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "Voluntary initiation of urination involves the conscious relaxation of the external sphincter and the simultaneous contraction of abdominal muscles.",
    answer: true,
    explanation: "Contracting the abdominal muscles increases intra-abdominal pressure, forcing urine into the bladder neck and triggering the stretch receptors."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "Damage to the sensory nerve fibers supplying the bladder, such as in tabes dorsalis, results in a hyperactive, spastic bladder that empties constantly.",
    answer: false,
    explanation: "Sensory deafferentation destroys the reflex arc, resulting in an atonic, flaccid bladder that overfills and causes overflow incontinence."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "Spinal cord transection above the sacral region initially causes spinal shock and a flaccid bladder, but may eventually recover into an involuntary 'automatic bladder.'",
    answer: true,
    explanation: "Once spinal shock wears off, the sacral reflex arcs function independently of cortical control, causing the bladder to empty automatically when filled."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "The internal urethral sphincter is composed of voluntary skeletal muscle and provides the primary conscious control to prevent urination.",
    answer: false,
    explanation: "The internal sphincter is composed of involuntary smooth muscle. The *external* sphincter is skeletal muscle under conscious control."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "The smooth muscle of the urinary bladder, known as the detrusor muscle, is composed of separate, isolated muscle fibers that contract individually during micturition.",
    answer: false,
    explanation: "The smooth muscle fibers of the detrusor are electrically coupled and function as a single unit or functional syncytium to provide a coordinated, powerful contraction."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "The internal urethral sphincter is formed by a natural thickening of the detrusor muscle at the bladder neck and consists entirely of involuntary smooth muscle.",
    answer: true,
    explanation: "This sphincter keeps the bladder neck closed and prevents emptying until the pressure rises significantly during the micturition reflex."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "The pudendal nerve provides somatic motor innervation to the external urethral sphincter, allowing for strict voluntary control over micturition.",
    answer: true,
    explanation: "Because the external sphincter is composed of skeletal muscle, it relies on conscious somatic input to remain contracted and prevent urination."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "Sympathetic nervous stimulation via the hypogastric nerve causes powerful contraction of the detrusor muscle and relaxation of the internal sphincter to initiate urination.",
    answer: false,
    explanation: "Sympathetic stimulation facilitates bladder filling by causing *relaxation* of the detrusor and *contraction* of the internal sphincter."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "The micturition reflex is an entirely localized spinal cord reflex that occurs completely independently and cannot be influenced or suppressed by higher brain centers.",
    answer: false,
    explanation: "While it is a spinal reflex, it is heavily facilitated or inhibited by centers located in the brain stem (pons) and the cerebral cortex."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "In the condition known as an 'automatic bladder,' caused by spinal cord transection above the sacral region, the micturition reflex occurs without any voluntary control once spinal shock has passed.",
    answer: true,
    explanation: "The sacral reflex arcs remain intact and eventually recover, causing the bladder to empty spontaneously whenever it reaches a certain threshold volume."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "Sensory nerve fibers traveling in the pelvic nerve detect stretch in the bladder wall and are responsible for initiating the afferent limb of the micturition reflex.",
    answer: true,
    explanation: "These stretch receptors signal the degree of filling to the sacral spinal cord, triggering the parasympathetic motor response."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "The volume of the adult urinary bladder can increase from roughly 10 ml to 400 ml with an internal pressure change of only about 10 cm H2O due to its extremely high compliance.",
    answer: true,
    explanation: "The flattening of the internal rugae allows the bladder to accommodate large volumes of urine before tension in the wall begins to rise steeply."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "When the urinary bladder is completely empty, its internal mucosa is highly stretched and completely smooth.",
    answer: false,
    explanation: "When empty, the mucosa collapses into numerous deep folds called rugae, which allow for later expansion."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "The conscious urge to micturate becomes painfully uncomfortable when the volume of urine in the adult bladder reaches approximately 400 to 600 ml.",
    answer: true,
    explanation: "At this volume, the limits of bladder compliance are reached, and tension in the detrusor muscle rises rapidly, transmitting strong pain signals via sympathetic afferents."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "The body of the urinary bladder is a smooth muscle chamber primarily responsible for the collection of urine, while the funnel-shaped neck connects inferiorly to the urethra.",
    answer: true,
    explanation: "This distinct anatomical division allows the body to act as a highly compliant reservoir, while the neck and sphincters provide resistance to maintain continence."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "An uninhibited neurogenic bladder is characterized by frequent, uncontrollable micturition due to a lack of facilitative signals from the brain.",
    answer: false,
    explanation: "It is caused by a lack of *inhibitory* signals from the brain, leaving the sacral centers hyper-excitable."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Micturition & Bladder",
    type: "truefalse",
    question: "An uninhibited neurogenic bladder is characterized by frequent, uncontrolled micturition resulting from a complete lack of facilitatory signals from the brain.",
    answer: false,
    explanation: "It results from a lack of *inhibitory* signals from the brain, causing the sacral micturition center to become hyper-excitable and empty the bladder frequently."
  },

  // SECTION 8: Endocrine & Metabolic Functions of Kidney
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Renin secretion by the juxtaglomerular cells is stimulated by an increase in arterial blood pressure.",
    answer: false,
    explanation: "Renin secretion is stimulated by a decrease in arterial blood pressure, decreased renal blood flow, or decreased GFR."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Angiotensin II acts as a powerful vasodilator to help regulate arterial blood pressure.",
    answer: false,
    explanation: "Angiotensin II is a powerful vasoconstrictor that raises arterial blood pressure and stimulates aldosterone secretion."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "The final activation of Vitamin D into 1,25-dihydroxycholecalciferol occurs in the liver.",
    answer: false,
    explanation: "While the liver produces 25-hydroxycholecalciferol, the final activation by 1-alpha-hydroxylase occurs in the kidney."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Hypoxia is a strong stimulus for the secretion of erythropoietin by the kidneys.",
    answer: true,
    explanation: "The kidney acts as an endocrine organ, releasing erythropoietin to stimulate red blood cell production in response to low oxygen."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "The kidney cortex contributes substantially to gluconeogenesis by producing glucose from precursors like lactate and glycerol during starvation.",
    answer: true,
    explanation: "This metabolic function helps maintain blood sugar levels when the body is fasting or under stress."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Prostaglandin E2 and prostacyclin produced by the kidney act to strongly constrict local blood vessels.",
    answer: false,
    explanation: "These lipid mediators dilate blood vessels locally to maintain renal blood flow, especially during low blood volume."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Tubuloglomerular feedback involves the macula densa sensing increased NaCl delivery and releasing chemical signals that constrict the afferent arteriole.",
    answer: true,
    explanation: "This feedback loop protects the distal tubule from being overwhelmed and stabilizes GFR despite blood pressure fluctuations."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "A drop in systemic blood pressure causes the juxtaglomerular cells to directly synthesize and secrete active angiotensin II into the blood.",
    answer: false,
    explanation: "The juxtaglomerular cells secrete the enzyme *renin*, which initiates a cascade that eventually leads to the formation of angiotensin II."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "At low physiological concentrations, angiotensin II preferentially constricts the efferent arterioles, which helps maintain GFR even when renal blood flow drops.",
    answer: true,
    explanation: "By increasing outflow resistance, angiotensin II increases glomerular capillary hydrostatic pressure, preserving filtration during volume depletion."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Aldosterone binds to intracellular receptors in the principal cells of the late distal tubule and collecting duct to stimulate sodium reabsorption and potassium secretion.",
    answer: true,
    explanation: "This hormone is the final effector of the RAAS pathway for long-term blood pressure and electrolyte regulation."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Angiotensin II strongly stimulates the secretion of aldosterone from the adrenal cortex, which subsequently increases sodium reabsorption in the distal tubule and collecting duct.",
    answer: true,
    explanation: "This hormonal axis (RAAS) is the body's primary mechanism for defending against long-term hypovolemia and hypotension."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "The Fick principle applied to the kidney states that the mass of a substance entering the kidney via the renal artery must equal the mass leaving via the renal vein plus the mass excreted in the urine.",
    answer: true,
    explanation: "This law of conservation of mass provides the mathematical basis for measuring renal blood flow using the extraction ratio of PAH."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "If the renal clearance of a freely filtered substance is exactly equal to the clearance of inulin, it proves mathematically that the substance is neither secreted nor reabsorbed by the tubules.",
    answer: true,
    explanation: "Because inulin represents pure filtration, any substance matching its clearance profile must be handled by the kidney in exactly the same way."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Changes in the rate of renin secretion from the juxtaglomerular cells play a critical role in the tubuloglomerular feedback mechanism of renal autoregulation.",
    answer: true,
    explanation: "The macula densa senses distal NaCl delivery and chemically signals the juxtaglomerular cells to alter renin release, adjusting afferent arteriolar resistance."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "A massive hemorrhage leading to severe hypotension will trigger intense parasympathetic stimulation to the kidneys, leading to widespread vasodilation and increased GFR.",
    answer: false,
    explanation: "Hemorrhage triggers intense *sympathetic* stimulation, causing severe vasoconstriction of renal arterioles, which sharply decreases renal blood flow and GFR to preserve systemic blood volume."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Chromium-51 (51Cr) labeled erythrocytes are utilized clinically to directly measure the total blood volume of a patient.",
    answer: true,
    explanation: "By tagging red blood cells with this radioisotope and allowing them to circulate, the dilution principle can precisely determine the total volume of blood."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Plasma volume can be accurately calculated by multiplying the total blood volume by the patient's hematocrit (PCV).",
    answer: false,
    explanation: "Plasma volume is calculated by multiplying the blood volume by the proportion of blood that is NOT red blood cells, which is (100 - Hematocrit)."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "The body fluid volume of a specific compartment is calculated by dividing the mass of the indicator injected by its final concentration in that fluid compartment.",
    answer: true,
    explanation: "This fundamental formula (Volume = Mass / Concentration) relies on the principle that the indicator distributes evenly throughout the target compartment."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Total body water can be directly and accurately measured using non-metabolizable saccharides such as inulin and mannitol.",
    answer: false,
    explanation: "Inulin and mannitol are confined to the extracellular space and are used to measure the Extracellular Fluid (ECF) volume, not Total Body Water."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Water content as a percentage of body weight is significantly higher in obese individuals compared to muscular individuals of the same weight.",
    answer: false,
    explanation: "Adipose tissue is relatively anhydrous (containing about 30% water), whereas muscle is rich in water (about 70%), making obese individuals have a lower percentage of total body water."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "The daily loss of water through the skin via insensible perspiration is strictly regulated by the autonomic nervous system to maintain hydration.",
    answer: false,
    explanation: "Insensible water loss through skin diffusion and respiration is continuous and obligatory; it cannot be consciously or nervously regulated like active sweating."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Normal human urine typically contains trace amounts of glucose and significant amounts of large plasma proteins to help excrete excess metabolic energy.",
    answer: false,
    explanation: "Under normal physiological conditions, 100% of filtered glucose is reabsorbed, and large plasma proteins are prevented from entering the filtrate by the glomerular barrier."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "The functional unit of the kidney, the nephron, is highly capable of rapid cellular regeneration if it is severely damaged by disease or ischemia.",
    answer: false,
    explanation: "The kidney cannot regenerate new nephrons; once destroyed by disease, aging, or injury, their functions must be compensated for by the remaining nephrons."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "The macula densa cells act as baroreceptors that sense changes in the hydrostatic pressure of the afferent arteriole to regulate renin release.",
    answer: false,
    explanation: "The juxtaglomerular (granular) cells act as the baroreceptors. The macula densa cells act as chemoreceptors that sense sodium chloride delivery in the tubule."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Extraglomerular mesangial cells, also known as Lacis cells, are an integral structural component of the juxtaglomerular apparatus.",
    answer: true,
    explanation: "These cells form a complex with the macula densa and granular cells, facilitating communication to regulate renal blood flow and GFR."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Water intoxication causes an abnormal decrease in fluid osmolarity, triggering the suppression of ADH and resulting in cellular dehydration.",
    answer: false,
    explanation: "It does suppress ADH, but it results in cellular *swelling* (overhydration), not dehydration, because the ECF becomes hypotonic."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "The major determinant of plasma osmolality is the sodium ion (Na+) and its associated anions.",
    answer: true,
    explanation: "Sodium and its matching anions account for approximately 90% of the total osmotic activity in the extracellular fluid."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Intracellular fluid volume can be directly measured by injecting a specific dye that easily enters the cells and strictly avoids the extracellular space.",
    answer: false,
    explanation: "There is no tracer that exclusively targets the intracellular space. ICF must be measured indirectly by subtracting Extracellular Fluid volume from Total Body Water."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "The interstitial fluid compartment contains a remarkably high concentration of negatively charged proteins compared to the plasma compartment.",
    answer: false,
    explanation: "Plasma contains a high concentration of large proteins (like albumin) which cannot cross the capillary wall, leaving the interstitial fluid relatively protein-poor."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Lipid-soluble substances such as oxygen and carbon dioxide move across the plasma membrane primarily via active transport mechanisms that consume cellular energy.",
    answer: false,
    explanation: "These molecules are highly lipophilic and move rapidly across the lipid bilayer via simple, passive diffusion down their concentration gradients."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "Endocytosis and exocytosis are examples of bulk active transport mechanisms that physically require cellular energy in the form of ATP.",
    answer: true,
    explanation: "These processes involve the physical deformation of the cell membrane and the movement of vesicles along the cytoskeleton, both of which consume energy."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "The kidneys synthesize and secrete the enzyme renin into the bloodstream immediately in response to an abnormal increase in systemic arterial blood pressure.",
    answer: false,
    explanation: "Renin is secreted in response to a *decrease* in arterial pressure, a decrease in renal blood flow, or low sodium delivery to the macula densa."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Endocrine & Metabolic Functions",
    type: "truefalse",
    question: "The right kidney is typically situated slightly higher in the abdominal cavity than the left kidney due to the anatomical position of the stomach.",
    answer: false,
    explanation: "The right kidney is positioned slightly *lower* than the left kidney because it is displaced downward by the bulk of the liver."
  },

  // SECTION 9: Diuretics & Clinical Pharmacology
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "Spironolactone functions as a potassium-sparing diuretic by competitively binding to the aldosterone receptor in the collecting ducts.",
    answer: true,
    explanation: "By blocking aldosterone, it prevents the reabsorption of sodium and the linked secretion of potassium."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "Carbonic anhydrase inhibitors, such as acetazolamide, exert their major diuretic effect by blocking the Na-K-2Cl cotransporter in the loop of Henle.",
    answer: false,
    explanation: "Acetazolamide primarily acts in the proximal convoluted tubule by inhibiting bicarbonate reabsorption, leading to increased sodium and water excretion."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "Osmotic diuretics like mannitol and glucose are freely filtered by the glomerulus but are not reabsorbed, retaining water in the tubules.",
    answer: true,
    explanation: "Their physical presence in the tubular fluid creates an osmotic pull that prevents water reabsorption, leading to osmotic diuresis."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "Ethanol acts as a diuretic strictly by inhibiting the Na+-Cl- symporter in the early distal tubule.",
    answer: false,
    explanation: "Ethanol causes diuresis by suppressing the central secretion of antidiuretic hormone (ADH) from the posterior pituitary."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "The principal cells of the collecting duct are responsible for the active secretion of hydrogen ions into the tubular fluid to regulate acid-base balance.",
    answer: false,
    explanation: "Hydrogen ion secretion is the primary function of the *intercalated* cells, whereas principal cells handle sodium, potassium, and water."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "Ethanol induces significant diuresis by directly and competitively inhibiting the Na+-K+-2Cl- cotransporter in the thick ascending limb of the loop of Henle.",
    answer: false,
    explanation: "Ethanol does not act directly on renal tubular transporters; it causes diuresis by acting on the central nervous system to inhibit the secretion of vasopressin (ADH)."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "The renal threshold for glucose is mathematically defined as the arterial plasma concentration at which the transport maximum (Tmg) for all nephrons has been completely saturated.",
    answer: false,
    explanation: "The renal threshold (approx 200 mg/dL) is the point at which glucose *first appears* in the urine. Due to 'splay,' this happens before the Tmg for all nephrons is fully saturated."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "Xanthines, such as caffeine and theophylline, function as mild diuretics by decreasing the tubular reabsorption of sodium and increasing the glomerular filtration rate.",
    answer: true,
    explanation: "These agents alter renal hemodynamics and slightly inhibit tubular transport, leading to a modest increase in urine output."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "Metolazone and thiazide diuretics exert their pharmacological effect by inhibiting the Na+-K+-2Cl- cotransporter in the medullary thick ascending limb.",
    answer: false,
    explanation: "Thiazides and metolazone inhibit the Na+-Cl- cotransporter in the *early distal tubule*. Loop diuretics target the thick ascending limb."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "Acidifying salts like ammonium chloride (NH4Cl) can cause diuresis by supplying an acid load that exceeds the kidney's ability to replace sodium with hydrogen.",
    answer: true,
    explanation: "When the acid load is overwhelming, unbuffered anions trap sodium and water in the tubular lumen, resulting in mild osmotic diuresis."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "Spironolactone and triamterene are classified as potassium-retaining natriuretics that act in the late distal tubule and collecting duct.",
    answer: true,
    explanation: "By antagonizing aldosterone or blocking apical sodium channels, they promote sodium excretion without causing the potassium loss typical of other diuretics."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "Type A intercalated cells in the collecting duct play a crucial role in acid-base balance by actively secreting bicarbonate ions during periods of acidosis.",
    answer: false,
    explanation: "During acidosis, Type A intercalated cells actively secrete *hydrogen* ions to rid the body of acid, and reabsorb bicarbonate to replenish buffers."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "Aldosterone exerts its physiological effects by binding to cell membrane receptors, triggering a rapid intracellular cAMP cascade in principal cells.",
    answer: false,
    explanation: "Aldosterone is a lipid-soluble steroid hormone; it passes through the cell membrane and binds to *intracellular* receptors to alter gene transcription over several hours."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "The medullary osmotic gradient is primarily maintained by the massive active transport of solutes by the endothelial cells of the vasa recta.",
    answer: false,
    explanation: "The vasa recta are passive structures that *maintain* the gradient through countercurrent exchange. The loop of Henle *creates* the gradient via active transport."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "Systemic hypoxia acts as a potent physiological stimulus for the kidneys to secrete large amounts of 1,25-dihydroxycholecalciferol to increase intestinal calcium absorption.",
    answer: false,
    explanation: "Hypoxia specifically stimulates the kidneys to secrete the hormone *erythropoietin* to increase red blood cell production, not Vitamin D."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "Radioisotopes of albumin, such as 131I-albumin, are highly reliable and specific indicators for calculating the exact volume of the intracellular fluid compartment.",
    answer: false,
    explanation: "Albumin cannot cross the capillary endothelium under normal conditions, so its radioisotopes are strictly used to measure the *plasma volume*, not the intracellular fluid."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "During physiological states of severe blood volume expansion, the healthy kidneys respond by excreting a hypertonic, highly concentrated urine to rid the body of the excess water.",
    answer: false,
    explanation: "To eliminate excess water, the kidneys suppress ADH secretion and excrete a large volume of *hypotonic, dilute* urine (water diuresis)."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "The clinical renal clearance of urea is consistently higher than the Glomerular Filtration Rate because urea is heavily secreted into the tubular lumen by the proximal tubule.",
    answer: false,
    explanation: "Urea clearance is always *lower* than the GFR (roughly 70 ml/min compared to 125 ml/min) because roughly 40-50% of filtered urea is passively reabsorbed."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "The primary physiological purpose of the extremely long loops of Henle in juxtamedullary nephrons is to establish the hyperosmotic medullary gradient required for concentrating urine.",
    answer: true,
    explanation: "By diving deep into the inner medulla and papilla, these specialized nephrons utilize countercurrent multiplication to build the massive osmotic gradient necessary for water conservation."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "Cortical nephrons possess extremely long loops of Henle that dive deep into the inner medulla and reach all the way to the renal papilla.",
    answer: false,
    explanation: "Juxtamedullary nephrons have the very long loops essential for concentration. Cortical nephrons have short loops that barely penetrate the outer medulla."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "The vasa recta are specialized, straight peritubular capillaries that specifically branch off to supply blood exclusively to the cortical structures of the kidney.",
    answer: false,
    explanation: "The vasa recta branch off the efferent arterioles of juxtamedullary nephrons and dive deep into the *medulla*, not the cortex."
  },
  {
    course: "Physiology",
    topic: "Renal Physiology",
    subTopic: "Diuretics & Pharmacology",
    type: "truefalse",
    question: "A substance that is freely filtered at the glomerulus and is highly secreted by the renal tubules will have a measured clearance value that is strictly lower than the true Glomerular Filtration Rate.",
    answer: false,
    explanation: "If a substance is filtered and secreted, more of it ends up in the urine than was filtered, making its clearance *higher* than the GFR (like PAH)."
  },
    // ===== PHYSIOLOGY – CARDIOVASCULAR PHYSIOLOGY (CONTINUED) =====

  // SECTION 12: Cardiac Reserve, Stroke Volume & Cardiac Output Determinants
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Cardiac reserve is the maximum increase in cardiac output above the normal value that can be achieved, expressed as a percentage.",
    answer: true,
    explanation: "Cardiac reserve reflects the heart's functional capacity to increase output beyond resting levels during demand."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Normal cardiac reserve in adults is 300‑400%, while in athletes it can reach 500‑600%.",
    answer: true,
    explanation: "Athletes have greater cardiac reserve due to enhanced stroke volume and myocardial efficiency."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Cardiac reserve decreases with old age, falling to 200‑250%.",
    answer: true,
    explanation: "Age-related changes reduce the heart's ability to increase output."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Stroke volume is the volume of blood pumped out of each ventricle per beat.",
    answer: true,
    explanation: "SV is the amount ejected with each ventricular contraction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Stroke volume depends on end-diastolic volume (EDV), contractility, and end-systolic volume (ESV).",
    answer: true,
    explanation: "SV = EDV − ESV, and both EDV and contractility determine the ejected volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "End-diastolic volume is also called preload.",
    answer: true,
    explanation: "Preload is the volume in the ventricle at the end of diastole, determining initial fibre stretch."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Contractility is the intrinsic ability of the myocardium to generate force independent of preload.",
    answer: true,
    explanation: "Increased contractility increases SV even at the same EDV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Stroke volume increases when end-systolic volume (ESV) increases.",
    answer: false,
    explanation: "SV increases when ESV decreases, as more blood is ejected from the ventricle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The stroke volumes of the left and right ventricles are generally equal in a healthy heart.",
    answer: true,
    explanation: "The outputs of both ventricles match to maintain balanced pulmonary and systemic circulations."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Men generally have higher stroke volumes than women due to larger heart size.",
    answer: true,
    explanation: "A larger heart has greater chamber volume and can eject more blood per beat."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "During maximal exercise, stroke volume can increase to 110‑130 mL in untrained individuals.",
    answer: true,
    explanation: "Exercise enhances venous return and contractility, increasing SV above resting values."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Stroke volume is regulated by EDV/preload, total peripheral resistance/afterload, and contractility.",
    answer: true,
    explanation: "These three factors—preload, afterload, and contractility—are the primary determinants of SV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Total peripheral resistance is the frictional resistance in the arteries against which the heart must eject blood.",
    answer: true,
    explanation: "TPR represents the afterload that the ventricle must overcome to open the aortic valve."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Higher total peripheral resistance increases stroke volume.",
    answer: false,
    explanation: "Higher TPR increases afterload, making ejection more difficult and reducing SV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Ejection fraction is the percentage of EDV ejected with each stroke.",
    answer: true,
    explanation: "EF = (SV / EDV) × 100, and normal EF is approximately 50‑65%."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "An ejection fraction below 40% indicates reduced ventricular function (systolic heart failure).",
    answer: true,
    explanation: "Low EF indicates the ventricle is failing to eject adequate blood."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "End‑diastolic volume (preload) is controlled by factors that affect venous return.",
    answer: true,
    explanation: "Venous return determines how much blood fills the ventricle before contraction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Total blood volume affects venous return because greater blood volume increases venous pressure.",
    answer: true,
    explanation: "Increased volume raises the mean systemic filling pressure, driving more blood back to the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Veins are called capacitance vessels because they can hold more blood at a given pressure than arteries.",
    answer: true,
    explanation: "Veins have high compliance and store approximately 60% of total blood volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "At any time, about 30% of total blood volume is in the veins.",
    answer: false,
    explanation: "About two‑thirds (approximately 60‑65%) of total blood volume is in the veins."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "A pressure difference of approximately 10 mmHg exists between venules and the right atrium.",
    answer: true,
    explanation: "This pressure gradient drives venous return to the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Mean systemic filling pressure is highest in the vena cava and lowest in the venules.",
    answer: false,
    explanation: "MSFP is highest in venules (~15 mmHg) and lowest in the vena cava (~0‑5 mmHg)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Sympathetic venoconstriction reduces venous compliance and enhances venous return.",
    answer: true,
    explanation: "Venoconstriction mobilises blood from the venous reservoir toward the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "During inspiration, intrathoracic pressure decreases, expanding the great veins and enhancing venous return.",
    answer: true,
    explanation: "The respiratory pump uses negative intrathoracic pressure to draw blood toward the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "During exercise, cardiac output can increase up to 25 L/min in trained athletes.",
    answer: true,
    explanation: "Maximal exercise demands high CO, which athletes achieve through enhanced HR and SV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Cardiac output decreases at high altitude due to reduced oxygen availability.",
    answer: false,
    explanation: "CO increases at high altitude in response to hypoxia due to sympathetic activation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Cardiac output increases by 30‑50% during pregnancy due to increased blood volume and metabolic demand.",
    answer: true,
    explanation: "Pregnancy demands increased perfusion to the uterus, placenta, and maternal tissues."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Strong emotions decrease cardiac output through parasympathetic activation.",
    answer: false,
    explanation: "Strong emotions increase CO through sympathetic activation and adrenaline release."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Hyperthyroidism causes a pathological increase in cardiac output due to increased metabolic rate.",
    answer: true,
    explanation: "Excess thyroid hormone increases O₂ demand, raising HR and contractility."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "For every 1°C rise in temperature, metabolic rate increases approximately 10%, increasing cardiac output.",
    answer: true,
    explanation: "Fever raises metabolic demand, requiring increased CO to meet O₂ needs."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Hypothyroidism causes a pathological increase in cardiac output.",
    answer: false,
    explanation: "Hypothyroidism reduces metabolic rate, decreasing HR and CO."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Haemorrhage causes a pathological decrease in cardiac output due to reduced blood volume.",
    answer: true,
    explanation: "Acute blood loss reduces venous return, EDV, SV, and thus CO."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The Fick principle states that the amount of a substance taken up by an organ equals the arteriovenous difference multiplied by blood flow.",
    answer: true,
    explanation: "Q = (A − V) × F, so F = Q / (A − V) for cardiac output measurement."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The direct Fick method uses oxygen as the indicator substance to measure cardiac output.",
    answer: true,
    explanation: "CO = O₂ consumption / (PVO₂ − PAO₂), measuring pulmonary blood flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The direct Fick method requires oxygen content from pulmonary artery and peripheral artery samples.",
    answer: true,
    explanation: "Mixed venous blood is sampled from the pulmonary artery; arterial blood from a peripheral artery."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The direct Fick method is non‑invasive and carries no risk of complications.",
    answer: false,
    explanation: "It is invasive, requiring pulmonary artery catheterisation with risks of infection and arrhythmias."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The dye dilution method uses a known amount of indicator injected into the right atrium.",
    answer: true,
    explanation: "A bolus of dye is injected, and its concentration over time in peripheral blood is measured."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "An ideal indicator for dye dilution must be non‑toxic, mix evenly, and be easy to measure.",
    answer: true,
    explanation: "Safe, uniform mixing, and detectability are essential properties for accurate measurement."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Evan's blue dye is commonly used in the indicator dilution method.",
    answer: true,
    explanation: "Evan's blue dye is a standard indicator for cardiac output measurement."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The thermodilution method uses cold saline as the indicator instead of a chemical dye.",
    answer: true,
    explanation: "Temperature change caused by cold saline is measured instead of dye concentration."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The thermodilution method requires a Swan‑Ganz (pulmonary artery) catheter with a thermistor.",
    answer: true,
    explanation: "The thermistor at the catheter tip measures temperature changes in the pulmonary artery."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Doppler echocardiography uses ultrasound to measure cardiac output non‑invasively.",
    answer: true,
    explanation: "Doppler ultrasound measures blood flow velocity through cardiac chambers."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Doppler echocardiography can measure EDV, ESV, CO, and detect valvular defects.",
    answer: true,
    explanation: "Echocardiography provides comprehensive cardiac structural and functional assessment."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The Doppler effect causes sound waves reflected from moving structures to shift in frequency proportional to velocity.",
    answer: true,
    explanation: "Frequency shift allows measurement of blood flow velocity."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Ballistocardiography records body movements caused by the ballistic recoil of the pumping heart.",
    answer: true,
    explanation: "The heart's ejection creates recoil forces that move the body with each beat."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The J peak on a ballistocardiogram correlates with aortic blood flow velocity.",
    answer: true,
    explanation: "The largest deflection (J wave) corresponds to peak aortic flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The five main factors controlling cardiac output are venous return, myocardial contractility, peripheral resistance, blood volume, and heart rate.",
    answer: true,
    explanation: "These factors collectively determine CO = HR × SV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Venous return is the most important long‑term determinant of cardiac output.",
    answer: true,
    explanation: "The heart can only pump what it receives; venous return sets the upper limit of CO."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The Frank‑Starling law states that the force of contraction is directly proportional to the initial length of muscle fibre.",
    answer: true,
    explanation: "Greater EDV stretches fibres, increasing contraction force via optimal actin‑myosin overlap."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The Frank‑Starling mechanism is an extrinsic mechanism requiring neural input.",
    answer: false,
    explanation: "The Frank‑Starling mechanism is intrinsic and operates without neural or hormonal control."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "As EDV increases, stroke volume increases up to an optimal sarcomere length, then may decrease with overstretching.",
    answer: true,
    explanation: "Optimal overlap maximises cross‑bridge formation; excessive stretch reduces force."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Cardiac function curves plot cardiac output against central venous pressure (or right atrial pressure).",
    answer: true,
    explanation: "These curves demonstrate the relationship between preload and cardiac output."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Sympathetic stimulation shifts cardiac function curves upward and to the left.",
    answer: true,
    explanation: "Positive inotropy increases SV and CO at any given filling pressure."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Heart failure shifts cardiac function curves downward and to the right.",
    answer: true,
    explanation: "Reduced contractility requires higher filling pressure to achieve lower output."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "During inspiration, the diaphragm descends, decreasing intrathoracic pressure and enhancing venous return.",
    answer: true,
    explanation: "Lower intrathoracic pressure expands the IVC and right atrium, drawing blood toward the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The respiratory pump is most effective during exercise when breathing is deep and rapid.",
    answer: true,
    explanation: "Deeper, faster breaths create greater pressure changes and enhance venous return."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Vis‑a‑tergo is the suction force from the front that pulls blood from veins into the right atrium.",
    answer: false,
    explanation: "Vis‑a‑tergo is the forward push from behind generated by previous systolic contraction; vis‑a‑fronte is the suction force."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Vis‑a‑fronte is the suction force generated during ventricular systole when AV valves descend.",
    answer: true,
    explanation: "AV valve descent expands atrial volume, creating negative pressure that draws blood in."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The skeletal muscle pump compresses deep veins during contraction, forcing blood toward the heart.",
    answer: true,
    explanation: "Muscle contraction squeezes veins; valves ensure unidirectional flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Varicose veins result from competent venous valves that work effectively.",
    answer: false,
    explanation: "Varicose veins result from incompetent valves that allow backward flow and venous pooling."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Mean systemic filling pressure (MSFP) is the pressure driving blood from the periphery to the right atrium.",
    answer: true,
    explanation: "MSFP reflects the fullness of the venous reservoir and drives venous return."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Increased blood volume raises MSFP, which increases venous return and cardiac output.",
    answer: true,
    explanation: "Greater volume distends veins, raising pressure and driving more blood toward the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Sympathetic stimulation raises MSFP from approximately 7 mmHg to 17 mmHg.",
    answer: true,
    explanation: "Venoconstriction increases venous pressure and mobilises the blood reservoir."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Prolonged standing causes venous pooling in the lower extremities and decreases venous return.",
    answer: true,
    explanation: "Gravity causes blood to pool in leg veins, reducing return to the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The baroreceptor reflex rapidly compensates for orthostatic hypotension in healthy individuals.",
    answer: true,
    explanation: "Baroreceptors detect pressure drop and trigger sympathetic activation to restore BP."
  },

  // SECTION 13: Arterial Blood Pressure
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Arterial blood pressure is defined as the lateral pressure exerted by the moving column of blood on the walls of the arteries.",
    answer: true,
    explanation: "BP acts perpendicularly against the arterial wall, distending it in all directions."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Arteries have thicker tunica media than veins, allowing them to withstand and regulate pressure.",
    answer: true,
    explanation: "The thick smooth muscle layer in arteries enables pressure handling and active regulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Arterial blood pressure ensures blood flow to organs, exchange of nutrients, urine formation, and lymph formation.",
    answer: true,
    explanation: "These are the four primary functions of arterial blood pressure."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The normal adult systolic blood pressure range is 90‑140 mmHg.",
    answer: true,
    explanation: "SBP normally ranges from 90 to 140 mmHg."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The normal adult diastolic blood pressure range is 60‑90 mmHg.",
    answer: true,
    explanation: "DBP normally ranges from 60 to 90 mmHg."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Systolic blood pressure is the maximum pressure attained during ventricular systole.",
    answer: true,
    explanation: "SBP corresponds to the peak pressure during ventricular contraction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Systolic blood pressure is determined by the force of heart beat, blood volume, and cardiac output.",
    answer: true,
    explanation: "Greater contractility, increased volume, and higher CO all raise SBP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Diastolic blood pressure is the minimum pressure at the end of ventricular diastole.",
    answer: true,
    explanation: "DBP is the lowest arterial pressure just before the next systole."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Diastolic blood pressure is maintained above zero due to elastic recoil of arteries and peripheral vascular resistance.",
    answer: true,
    explanation: "The Windkessel effect sustains pressure during diastole; PVR maintains back‑pressure."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Coronary perfusion occurs predominantly during systole.",
    answer: false,
    explanation: "Coronary perfusion occurs predominantly during diastole when coronary vessels are not compressed."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Pulse pressure is the difference between systolic and diastolic blood pressure.",
    answer: true,
    explanation: "PP = SBP − DBP, normally about 40 mmHg."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "A widened pulse pressure may indicate aortic regurgitation or atherosclerosis.",
    answer: true,
    explanation: "Aortic regurgitation increases SBP; atherosclerosis reduces arterial compliance, both widening PP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "A narrowed pulse pressure may suggest cardiac tamponade or severe heart failure.",
    answer: true,
    explanation: "Reduced stroke volume or impaired ejection narrows the difference between SBP and DBP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Mean arterial pressure is the arithmetic mean of systolic and diastolic blood pressure.",
    answer: false,
    explanation: "MAP is time‑weighted, not arithmetic; MAP = DBP + ⅓ × PP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "MAP = DBP + ⅓ pulse pressure, with normal MAP being approximately 95 mmHg.",
    answer: true,
    explanation: "This formula reflects that diastole occupies about two‑thirds of the cardiac cycle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "MAP represents the average perfusion pressure driving blood to organs.",
    answer: true,
    explanation: "MAP is the most clinically relevant indicator of organ perfusion adequacy."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Pulse pressure widens progressively as blood travels from the aorta to the capillaries.",
    answer: false,
    explanation: "Pulse pressure narrows as arteriolar resistance dampens pulsatile energy."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Systolic, diastolic, and mean pressures all converge and flatten in the capillaries.",
    answer: true,
    explanation: "Pulsatility is lost in capillaries where pressure is steady at ~25 mmHg."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Blood pressure decreases with age as arteries become more elastic.",
    answer: false,
    explanation: "BP increases with age as arteries stiffen, losing elasticity."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Obese individuals generally have higher blood pressure.",
    answer: true,
    explanation: "Obesity increases blood volume and peripheral resistance, raising BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Heat causes vasodilation and lowers blood pressure; cold causes vasoconstriction and raises BP.",
    answer: true,
    explanation: "Temperature changes alter vessel diameter, affecting peripheral resistance and BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Blood pressure is lowest during sleep and rises sharply on waking.",
    answer: true,
    explanation: "The morning surge is a normal diurnal variation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Acute exercise raises systolic blood pressure significantly.",
    answer: true,
    explanation: "Exercise increases CO and SBP; regular exercise lowers resting BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Blood pressure may fall in mid‑pregnancy due to hormonal vasodilation.",
    answer: true,
    explanation: "Vasodilatory hormones reduce TPR, lowering BP during mid‑pregnancy."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Blood pressure can be recorded by direct and indirect methods.",
    answer: true,
    explanation: "Direct (invasive) and indirect (non‑invasive) methods are both used."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The direct method of recording blood pressure uses a catheter inserted into an artery.",
    answer: true,
    explanation: "Direct BP measurement requires arterial cannulation with a pressure transducer."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The auscultatory method was introduced by Korotkoff in 1905.",
    answer: true,
    explanation: "Korotkoff described the sounds used to measure SBP and DBP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The first Korotkoff sound (Phase 1) marks the diastolic blood pressure.",
    answer: false,
    explanation: "Phase 1 marks systolic blood pressure; diastolic is marked by sound disappearance (Phase 5)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Phase 4 (muffling) is used as diastolic BP in pregnancy and exercise states.",
    answer: true,
    explanation: "In some patients, sounds do not disappear, so muffling (Phase 4) is used."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The sphygmomanometer works on the principle of external compression of an artery.",
    answer: true,
    explanation: "The cuff occludes the artery, then pressure is released to determine SBP and DBP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Blood pressure should be measured with the cuff at heart level to avoid hydrostatic artefacts.",
    answer: true,
    explanation: "Height differences create hydrostatic pressure errors in measurement."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The patient should be seated comfortably for at least 5 minutes before BP measurement.",
    answer: true,
    explanation: "Resting allows stabilisation of cardiovascular variables."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The cuff should be deflated at approximately 2 mmHg per second during BP measurement.",
    answer: true,
    explanation: "Slow deflation allows accurate detection of Korotkoff sounds."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The four primary factors maintaining arterial blood pressure are cardiac output, circulating blood volume, elasticity of vessel walls, and blood viscosity.",
    answer: true,
    explanation: "These factors collectively determine and maintain BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Increased blood viscosity increases resistance to flow and raises arterial pressure.",
    answer: true,
    explanation: "Higher viscosity requires greater pressure to maintain flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Viscosity is increased by higher haematocrit, plasma proteins, and lower temperature.",
    answer: true,
    explanation: "More RBCs, proteins, and cold temperature all increase blood viscosity."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "General anaesthetics typically increase blood viscosity and raise BP.",
    answer: false,
    explanation: "Anaesthetics can reduce viscosity and peripheral resistance, lowering BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Peripheral vascular resistance is primarily contributed by arteriolar smooth muscle.",
    answer: true,
    explanation: "Arterioles are the main resistance vessels of the circulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Arterioles can alter lumen diameter through vasoconstriction or vasodilation.",
    answer: true,
    explanation: "Vasomotor changes in arterioles provide fine control of blood flow and BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "BP = CO × PVR, analogous to Ohm's law (V = I × R).",
    answer: true,
    explanation: "This relationship shows that BP depends on both cardiac output and vascular resistance."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "MAP = CO × TPR is the fundamental equation for mean arterial pressure.",
    answer: true,
    explanation: "MAP is the product of cardiac output and total peripheral resistance."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Blood pressure is regulated by immediate, short‑term, and long‑term mechanisms.",
    answer: true,
    explanation: "Different time scales ensure rapid and sustained BP control."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Immediate BP mechanisms involve neural reflexes such as baroreceptor and chemoreceptor reflexes.",
    answer: true,
    explanation: "Neural reflexes respond within seconds to BP changes."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Short‑term BP mechanisms include capillary fluid shifts and the renin‑angiotensin system.",
    answer: true,
    explanation: "These mechanisms act over minutes to hours."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Long‑term BP regulation is achieved by renal control of blood volume via pressure natriuresis.",
    answer: true,
    explanation: "The kidneys adjust salt and water excretion to maintain BP over hours to days."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Baroreceptors are located in the carotid sinus and aortic arch.",
    answer: true,
    explanation: "These are the major arterial baroreceptor sites."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Carotid sinus baroreceptor afferents travel in the vagus nerve (CN X).",
    answer: false,
    explanation: "Carotid sinus afferents travel in the glossopharyngeal nerve (CN IX); aortic arch afferents travel in the vagus."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Aortic arch baroreceptor afferents travel in the glossopharyngeal nerve.",
    answer: false,
    explanation: "Aortic arch afferents travel in the vagus nerve (CN X)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Baroreceptor afferents synapse in the nucleus tractus solitarius (NTS) in the medulla.",
    answer: true,
    explanation: "The NTS is the primary medullary relay for baroreceptor input."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "When BP rises, baroreceptor firing increases, leading to inhibition of the vasomotor centre.",
    answer: true,
    explanation: "Increased firing inhibits VMC, reducing sympathetic output and causing vasodilation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "When BP rises, stimulation of the cardioinhibitory centre increases vagal tone, slowing heart rate.",
    answer: true,
    explanation: "CIC activation increases parasympathetic output, producing bradycardia."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The baroreceptor reflex is a positive feedback loop that amplifies changes in BP.",
    answer: false,
    explanation: "The baroreceptor reflex is a negative feedback loop that opposes changes in BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Marey's reflex is another name for the baroreceptor reflex.",
    answer: true,
    explanation: "The baroreceptor reflex is also known as Marey's reflex."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The net effect of increased baroreceptor firing is decreased peripheral resistance and decreased heart rate.",
    answer: true,
    explanation: "Both reduced TPR and bradycardia lower BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Peripheral chemoreceptors are located in the carotid and aortic bodies.",
    answer: true,
    explanation: "These are the major peripheral chemoreceptor sites."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Peripheral chemoreceptors are stimulated by hypoxia, hypercapnia, and acidosis.",
    answer: true,
    explanation: "Low O₂, high CO₂, and low pH trigger chemoreceptor activation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Central chemoreceptors are located in the medulla and are sensitive to CO₂ and pH in cerebrospinal fluid.",
    answer: true,
    explanation: "Central chemoreceptors respond primarily to CO₂/H⁺ changes in CSF."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Chemoreceptor activation leads to vasoconstriction, increased BP, and increased heart rate.",
    answer: true,
    explanation: "Stimulation increases sympathetic outflow to the vasculature and heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The cerebral ischaemic response is activated when BP falls below approximately 40 mmHg.",
    answer: true,
    explanation: "This emergency mechanism activates when brain perfusion is critically compromised."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Cushing's reflex consists of hypertension, bradycardia, and irregular breathing.",
    answer: true,
    explanation: "This triad indicates increased intracranial pressure and cerebral ischaemia."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Cushing's reflex causes hypotension and tachycardia.",
    answer: false,
    explanation: "Cushing's reflex produces marked hypertension and bradycardia."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The capillary fluid shift mechanism buffers BP changes by shifting fluid between blood and interstitium.",
    answer: true,
    explanation: "Fluid shifts adjust blood volume in response to pressure changes."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "When BP rises, increased capillary hydrostatic pressure causes more fluid to filter into the interstitium, reducing blood volume.",
    answer: true,
    explanation: "Filtration reduces circulating volume, helping to lower BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "When BP falls, decreased capillary hydrostatic pressure causes reabsorption of fluid from the interstitium.",
    answer: true,
    explanation: "Reabsorption increases blood volume, helping to raise BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The renin‑angiotensin system is activated when blood pressure falls.",
    answer: true,
    explanation: "Reduced renal perfusion triggers renin release."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Renin is released from juxtaglomerular (JG) cells of the afferent arteriole in the kidney.",
    answer: true,
    explanation: "JG cells sense reduced pressure and release renin."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Renin is a proteolytic enzyme that acts on angiotensinogen to produce angiotensin I.",
    answer: true,
    explanation: "Renin cleaves angiotensinogen to form the inactive angiotensin I."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Angiotensin I is converted to angiotensin II by ACE (Angiotensin Converting Enzyme).",
    answer: true,
    explanation: "ACE, primarily in the lungs, converts angiotensin I to the active angiotensin II."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Angiotensin II is a decapeptide.",
    answer: false,
    explanation: "Angiotensin II is an octapeptide (eight amino acids)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Angiotensin II causes vasoconstriction, increasing total peripheral resistance and blood pressure.",
    answer: true,
    explanation: "Angiotensin II is a potent vasoconstrictor acting directly on arterioles."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Angiotensin II stimulates aldosterone secretion from the adrenal cortex.",
    answer: true,
    explanation: "Aldosterone promotes Na⁺ retention and water reabsorption, increasing blood volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Aldosterone promotes sodium reabsorption and water retention, increasing blood volume.",
    answer: true,
    explanation: "Aldosterone acts on distal tubules to retain Na⁺ and water."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Angiotensin II stimulates the thirst centre in the hypothalamus, increasing water intake.",
    answer: true,
    explanation: "Thirst stimulation increases fluid intake, raising blood volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Angiotensin II decreases sodium absorption from the proximal convoluted tubule.",
    answer: false,
    explanation: "Angiotensin II increases Na⁺ absorption from the PCT, enhancing volume retention."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "ACE inhibitors block the conversion of angiotensin I to angiotensin II.",
    answer: true,
    explanation: "ACE inhibitors are used to treat hypertension by reducing angiotensin II production."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Atrial natriuretic factor (ANF) promotes sodium excretion and decreases blood volume.",
    answer: true,
    explanation: "ANF opposes aldosterone, promoting Na⁺ loss and reducing BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Nitric oxide is a potent vasoconstrictor released from vascular endothelium.",
    answer: false,
    explanation: "Nitric oxide is a potent vasodilator."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Histamine causes vasodilation and lowers blood pressure.",
    answer: true,
    explanation: "Histamine release causes vasodilation; important in anaphylactic reactions."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Hypertension is defined as persistent elevation of systolic BP above 140 mmHg or diastolic above 90 mmHg.",
    answer: true,
    explanation: "Hypertension is diagnosed when BP is persistently ≥ 140/90 mmHg."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Approximately 30% of people over age 50 are hypertensive.",
    answer: true,
    explanation: "Hypertension prevalence increases significantly with age."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Essential (primary) hypertension has a single identifiable cause.",
    answer: false,
    explanation: "Essential hypertension has no single cause and is multifactorial."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Secondary hypertension accounts for approximately 10% of hypertension cases.",
    answer: true,
    explanation: "Secondary hypertension has an identifiable underlying cause."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Renal causes such as glomerulonephritis are common causes of secondary hypertension.",
    answer: true,
    explanation: "Renal disease is a major cause of secondary hypertension."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Phaeochromocytoma causes secondary hypertension through excess cortisol production.",
    answer: false,
    explanation: "Phaeochromocytoma causes excess catecholamines, not cortisol; it's an adrenal medullary tumour."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Hypotension is defined in adults as systolic blood pressure below 100 mmHg.",
    answer: true,
    explanation: "SBP below 100 mmHg is considered hypotension."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Hypertension is never diagnosed on a single reading; multiple readings over time are required.",
    answer: true,
    explanation: "A single elevated reading may be transient; persistent elevation confirms diagnosis."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Essential hypertension has no identifiable cause and accounts for approximately 90% of hypertension cases.",
    answer: true,
    explanation: "Most hypertensive patients have primary hypertension without a single underlying disease."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Secondary hypertension is more common than essential hypertension.",
    answer: false,
    explanation: "Essential (primary) hypertension accounts for 90% of cases; secondary hypertension is only 10%."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Cushing's syndrome causes secondary hypertension through excess cortisol.",
    answer: true,
    explanation: "Cortisol excess promotes fluid retention and vascular sensitivity to catecholamines."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Conn's syndrome (primary hyperaldosteronism) causes hypertension through sodium and water retention.",
    answer: true,
    explanation: "Excess aldosterone increases Na⁺ reabsorption, expanding blood volume and raising BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Thyrotoxicosis causes secondary hypertension through increased cardiac output.",
    answer: true,
    explanation: "Excess thyroid hormone raises HR and contractility, elevating systolic BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Phaeochromocytoma causes hypertension through excess catecholamine secretion from the adrenal cortex.",
    answer: false,
    explanation: "Phaeochromocytoma is an adrenal medullary tumour that secretes catecholamines, not cortisol."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Atherosclerosis is a vascular cause of secondary hypertension.",
    answer: true,
    explanation: "Atherosclerosis reduces arterial compliance, widening pulse pressure and raising BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Complications of hypertension include coronary heart disease, stroke, myocardial infarction, left ventricular hypertrophy, and chronic kidney failure.",
    answer: true,
    explanation: "Hypertension is a major risk factor for these cardiovascular and renal complications."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Hypertension is a leading risk factor for stroke.",
    answer: true,
    explanation: "High BP damages cerebral vessels, increasing risk of both ischaemic and haemorrhagic strokes."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Hypertensive retinopathy is a complication of hypertension.",
    answer: true,
    explanation: "Chronic hypertension causes retinal vessel changes detectable on fundoscopy."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Aortic aneurysm is not associated with hypertension.",
    answer: false,
    explanation: "Chronic high pressure weakens and dilates the aortic wall, predisposing to aneurysm."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Obesity is a predisposing factor for hypertension.",
    answer: true,
    explanation: "Obesity increases blood volume and cardiac output, and adipose tissue secretes renin-like substances."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Hereditary factors strongly predispose individuals to hypertension.",
    answer: true,
    explanation: "Family history of hypertension significantly increases risk."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Chronic alcoholism lowers blood pressure.",
    answer: false,
    explanation: "Chronic alcohol consumption raises BP through multiple mechanisms including sympathetic activation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Chronic psychological stress maintains elevated sympathetic tone, increasing blood pressure.",
    answer: true,
    explanation: "Stress activates the sympathetic nervous system, raising HR and vasoconstriction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Smoking acutely lowers blood pressure through vasodilation.",
    answer: false,
    explanation: "Nicotine acutely raises BP; chronic smoking damages endothelium and promotes atherosclerosis."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Physical inactivity is associated with higher resting blood pressure.",
    answer: true,
    explanation: "Sedentary lifestyle impairs cardiovascular regulation and is linked to higher BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Causes of hypotension include haemorrhage, dehydration, vomiting, and diarrhoea.",
    answer: true,
    explanation: "These conditions reduce circulating volume, lowering venous return and BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Addison's disease causes hypertension through excessive aldosterone secretion.",
    answer: false,
    explanation: "Addison's disease causes adrenocortical insufficiency, leading to Na⁺ wasting and hypotension."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Hypothyroidism causes decreased heart rate and cardiac output, leading to hypotension.",
    answer: true,
    explanation: "Reduced thyroid hormone lowers metabolic rate, HR, and CO."
  },

  // SECTION 14: Lymphatic System & Oedema (Continued)
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Approximately 85% of fluid lost at the arterial end of the capillary bed is reclaimed at the venous end.",
    answer: true,
    explanation: "The remaining 15% is drained by the lymphatic system."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The remaining 15% of filtered fluid not reabsorbed into capillaries becomes lymph.",
    answer: true,
    explanation: "This fluid enters lymphatic vessels and is returned to the circulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Without adequate lymphatic drainage, excess interstitial fluid can accumulate, causing oedema.",
    answer: true,
    explanation: "Lymphatic obstruction prevents fluid removal, leading to oedema and potential tissue damage."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph flows from tissue spaces into the blood and carries away proteins and large particles.",
    answer: true,
    explanation: "Proteins and large particles cannot be reabsorbed directly into blood and must be removed via lymph."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph from the lower body flows down the thoracic duct and empties into the right internal jugular vein.",
    answer: false,
    explanation: "Lymph from the lower body flows up the thoracic duct and empties into the left internal jugular and subclavian veins."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymphatic vessels collect tissue fluid from loose connective tissue and carry it to the great veins in the neck.",
    answer: true,
    explanation: "This is the normal pathway of lymphatic return to the venous system."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph flows only toward the heart.",
    answer: true,
    explanation: "Lymphatic vessels have valves that ensure unidirectional flow toward the central veins."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph from the right side of the neck, right arm, and parts of the thorax drains into the right lymphatic duct.",
    answer: true,
    explanation: "The right lymphatic duct drains the right upper quadrant of the body."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The right lymphatic duct empties into the left subclavian vein.",
    answer: false,
    explanation: "The right lymphatic duct empties into the RIGHT subclavian and internal jugular veins."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Plasma is the cell‑free part of blood and contains fibrinogen and prothrombin, allowing it to coagulate.",
    answer: true,
    explanation: "Plasma contains clotting factors; lymph contains these in smaller quantities and coagulates slowly."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph contains cells such as lymphocytes and monocytes, salts, and a small amount of proteins.",
    answer: true,
    explanation: "This is the cellular and chemical composition of lymph."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph contains sugar (glucose) at approximately 132 mg per 100 ml.",
    answer: true,
    explanation: "Glucose is present in lymph, similar to plasma concentrations."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph contains urea, amino acids, and creatinine as non‑protein nitrogenous substances.",
    answer: true,
    explanation: "These metabolic waste products are present in lymph."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph contains electrolytes including sodium, calcium, potassium, chloride, and bicarbonate.",
    answer: true,
    explanation: "These ions are present in lymph, similar to interstitial fluid."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The cellular content of lymph is mainly erythrocytes.",
    answer: false,
    explanation: "Lymph contains mainly lymphocytes, with 1000‑2000 per cubic mm."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymphatic vessels are structurally similar to arteries, with thick walls and high pressure.",
    answer: false,
    explanation: "Lymphatic vessels are structurally similar to veins, with thin walls and low pressure."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Initial lymphatics lack valves and smooth muscle in their walls.",
    answer: true,
    explanation: "Initial lymphatics are passive vessels depending on tissue movement for flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Collecting lymphatics have valves and smooth muscle and contract in a peristaltic manner.",
    answer: true,
    explanation: "These features allow active propulsion of lymph along the vessels."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Skeletal muscle movement aids lymph flow in collecting lymphatics.",
    answer: true,
    explanation: "Muscle contraction compresses lymphatic vessels, helping propel lymph."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Negative intrathoracic pressure during inspiration aids lymph flow.",
    answer: true,
    explanation: "The respiratory pump also assists lymphatic return."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymphatic vessels are highly permeable and allow bacteria to pass directly into the lymph.",
    answer: true,
    explanation: "High permeability lets foreign material enter lymph for immune processing."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph nodes trap and filter debris and bacteria, which are phagocytosed by macrophages.",
    answer: true,
    explanation: "This is the primary filtration function of lymph nodes."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Primary lymphoid organs include the spleen and lymph nodes.",
    answer: false,
    explanation: "Primary lymphoid organs are bone marrow and thymus; spleen and lymph nodes are secondary."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The red bone marrow produces all formed elements of blood, including erythrocytes, leukocytes, and platelets.",
    answer: true,
    explanation: "Bone marrow is the major haemopoietic tissue in adults."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The thymus gland is a site for B‑lymphocyte maturation.",
    answer: false,
    explanation: "The thymus is the site for T‑lymphocyte maturation; B‑cells mature in bone marrow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The thymus gland is located on the superior surface of the heart and atrophies with age.",
    answer: true,
    explanation: "The thymus involutes after childhood, becoming smaller with age."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The spleen is the largest lymphoid organ.",
    answer: true,
    explanation: "The spleen is the largest lymphoid organ in the body."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The spleen is located in the upper right hypochondriac region.",
    answer: false,
    explanation: "The spleen is located in the upper LEFT hypochondriac region."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The red pulp of the spleen mounts adaptive T‑ and B‑cell responses.",
    answer: false,
    explanation: "Red pulp functions as a blood filtration system; white pulp mounts immune responses."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The white pulp of the spleen is where adaptive T‑ and B‑cell responses are mounted.",
    answer: true,
    explanation: "White pulp contains lymphoid tissue for immune activation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The spleen stores platelets.",
    answer: true,
    explanation: "Platelet storage is one of the spleen's major functions."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph nodes are bean‑shaped structures found only in the cervical region.",
    answer: false,
    explanation: "Lymph nodes are found in clusters including cervical, axillary, and inguinal regions."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The outer cortex of a lymph node is rich in B‑cells, and the inner cortex is rich in T‑cells.",
    answer: true,
    explanation: "This is the normal cortical organisation of lymph nodes."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The medulla of a lymph node contains large numbers of fixed phagocytic macrophages.",
    answer: true,
    explanation: "Medullary macrophages monitor lymph for pathogens."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Oedema is the accumulation of interstitial fluid in abnormal quantities.",
    answer: true,
    explanation: "This is the definition of oedema."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Oedema can result from increased capillary pressure.",
    answer: true,
    explanation: "Increased hydrostatic pressure drives more fluid out of capillaries into the interstitium."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Oedema can result from decreased capillary oncotic pressure.",
    answer: true,
    explanation: "Low plasma protein levels reduce reabsorption, allowing fluid accumulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymphedema is caused by increased lymph flow.",
    answer: false,
    explanation: "Lymphedema is caused by lymphatic obstruction, which reduces lymph drainage."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Abnormal retention of salt and water may cause oedema.",
    answer: true,
    explanation: "Salt and water retention increases extracellular fluid volume, leading to oedema."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The outer layer of blood vessels, the tunica externa, is composed primarily of smooth muscle.",
    answer: false,
    explanation: "The tunica externa is composed of connective tissue; the tunica media is smooth muscle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The tunica interna consists of endothelium, basement membrane, and internal elastic lamina.",
    answer: true,
    explanation: "These are the three components of the innermost vessel layer."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The endothelium lines the lumina of all blood vessels.",
    answer: true,
    explanation: "Endothelium is a continuous lining throughout the vascular system."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Vascular endothelium is involved in regulation of vessel integrity, vascular growth, and immune responses.",
    answer: true,
    explanation: "Endothelium has multiple functions beyond passive lining."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The endothelium plays a role in angiogenesis and haemostasis.",
    answer: true,
    explanation: "Endothelial cells regulate new vessel growth and blood clotting."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "NO (nitric oxide) produced by endothelium causes vasoconstriction.",
    answer: false,
    explanation: "NO is a potent vasodilator, not a constrictor."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Endothelin‑1 produced by endothelium causes vasodilation.",
    answer: false,
    explanation: "Endothelin‑1 is a potent vasoconstrictor."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Prostaglandin I₂ inhibits clotting and promotes vasodilation.",
    answer: true,
    explanation: "PGI₂ has both anti‑platelet and vasodilatory effects."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Vascular smooth muscle undergoes slow, sustained tonic contractions.",
    answer: true,
    explanation: "VSM is adapted for sustained contraction, unlike rapid cardiac muscle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Vascular smooth muscle contains troponin as its regulatory protein.",
    answer: false,
    explanation: "VSM lacks troponin; regulation involves calmodulin and myosin light chain phosphorylation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Actin and myosin in vascular smooth muscle are arranged in distinct bands.",
    answer: false,
    explanation: "VSM has a different arrangement; it lacks the organised sarcomeres of cardiac muscle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Contraction in vascular smooth muscle can be initiated by mechanical stimuli.",
    answer: true,
    explanation: "Stretch can directly activate VSM contraction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Increased intracellular calcium in VSM results from entry through calcium channels or release from internal stores.",
    answer: true,
    explanation: "These are the two sources for calcium in VSM."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Calcium in VSM binds to troponin to initiate contraction.",
    answer: false,
    explanation: "Calcium binds to calmodulin, not troponin, in VSM."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Calcium‑calmodulin activates myosin light chain kinase (MLCK).",
    answer: true,
    explanation: "This activation is the key step in VSM contraction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "MLCK phosphorylates myosin light chains, leading to cross‑bridge formation.",
    answer: true,
    explanation: "Phosphorylation of MLC is required for actin‑myosin interaction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Myosin light chain phosphatase (MLCP) phosphorylates myosin light chains.",
    answer: false,
    explanation: "MLCP dephosphorylates myosin light chains, promoting relaxation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Vascular tone is determined by the relative activity of MLCK and MLCP.",
    answer: true,
    explanation: "The balance between kinase and phosphatase sets the degree of contraction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Oxidative stress reduces nitric oxide bioavailability, causing endothelial dysfunction.",
    answer: true,
    explanation: "Oxidative stress promotes inflammation and impairs vascular tone."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Atherosclerosis is a condition of arterial obstruction due to plaque formation.",
    answer: true,
    explanation: "Plaque buildup narrows arteries and restricts blood flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Arteriosclerosis is the stiffening or hardening of artery walls.",
    answer: true,
    explanation: "Arteriosclerosis reduces arterial compliance and increases BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Arteriolosclerosis is the progressive replacement of smooth muscle cells with collagen in small arteries.",
    answer: true,
    explanation: "This is the specific definition of arteriolosclerosis."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "An aneurysm is a temporary, reversible dilation of an artery.",
    answer: false,
    explanation: "An aneurysm is a permanent, pathological dilation caused by structural vessel wall failure."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Aneurysms commonly occur in the brain, thoracic aorta, and abdominal aorta.",
    answer: true,
    explanation: "These are the most common sites for aneurysm formation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Aneurysms result from medial layer weakness due to elastin degradation and smooth muscle cell apoptosis.",
    answer: true,
    explanation: "Structural weakness in the vessel wall leads to aneurysmal dilation."
  },

  // SECTION 15: Exercise, Shock & Clinical Correlations
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The essential functions of the heart include covering metabolic needs by adequate blood supply.",
    answer: true,
    explanation: "Delivering oxygen and nutrients is the heart's primary function."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The heart must receive all blood returning from tissues to function properly.",
    answer: true,
    explanation: "Venous return is essential for maintaining cardiac output."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Normal structure of tissues surrounding the heart is not essential for heart function.",
    answer: false,
    explanation: "The pericardium and surrounding structures support and protect the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Cardiac output = heart rate × stroke volume.",
    answer: true,
    explanation: "This is the fundamental equation for cardiac output."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Control of heart rate is achieved only by the autonomic nervous system.",
    answer: false,
    explanation: "HR is controlled by both autonomic nervous system and hormonal (humoral) factors."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Stroke volume is controlled by preload, contractility, and afterload.",
    answer: true,
    explanation: "These three factors are the primary determinants of SV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The Frank‑Starling mechanism is an adaptive mechanism for increased cardiac load.",
    answer: true,
    explanation: "The heart automatically adjusts output to match venous return."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Ventricular hypertrophy increases the mass of contractile elements and strengthens contraction.",
    answer: true,
    explanation: "Hypertrophy is an adaptive response to increased workload."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased sympathetic adrenergic activity decreases heart rate.",
    answer: false,
    explanation: "Sympathetic activity increases HR and contractility."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The renin‑angiotensin‑aldosterone system is activated in response to increased cardiac load.",
    answer: true,
    explanation: "RAA system activation helps maintain BP and volume during stress."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Resting skeletal muscle blood flow is 3‑4 ml/min/100g of muscle.",
    answer: true,
    explanation: "This is the normal resting flow to skeletal muscle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "During active muscle contraction, muscle blood flow drops due to mechanical compression.",
    answer: true,
    explanation: "Contraction compresses intramuscular vessels, reducing flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Blood flow rises rapidly between muscle contractions due to vasodilation.",
    answer: true,
    explanation: "Metabolic vasodilators accumulate and increase flow during relaxation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased muscle contraction results in accumulation of vasodilator metabolites.",
    answer: true,
    explanation: "Metabolites such as CO₂, H⁺, and adenosine cause local vasodilation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "During exercise, parasympathetic discharge increases.",
    answer: false,
    explanation: "Parasympathetic discharge decreases during exercise; sympathetic discharge increases."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "During exercise, arteriolar constriction occurs in muscle, brain, and coronary beds.",
    answer: false,
    explanation: "These beds dilate; constriction occurs in inactive tissues."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "During exercise, venoconstriction increases mean systemic filling pressure.",
    answer: true,
    explanation: "Venoconstriction mobilises blood and raises venous pressure."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased mean systemic filling pressure increases venous return and cardiac output during exercise.",
    answer: true,
    explanation: "Higher MSFP drives more blood back to the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Shock is defined as inadequate tissue perfusion that can cause widespread tissue damage.",
    answer: true,
    explanation: "This is the clinical definition of shock."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Hypovolemic shock is caused by reduced blood volume.",
    answer: true,
    explanation: "Haemorrhage, dehydration, and fluid loss reduce circulating volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Cardiogenic shock is caused by primary pump failure of the heart.",
    answer: true,
    explanation: "Myocardial infarction or severe heart failure causes cardiogenic shock."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Distributive shock involves reduced vascular resistance and vasodilation.",
    answer: true,
    explanation: "Sepsis and anaphylaxis cause distributive shock."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Obstructive shock is caused by obstruction of blood flow.",
    answer: true,
    explanation: "Pulmonary embolism or cardiac tamponade causes obstructive shock."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Haemorrhagic shock is a type of distributive shock.",
    answer: false,
    explanation: "Haemorrhagic shock is a type of hypovolemic shock."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Compensatory mechanisms in hypovolemic shock include increased angiotensin II formation.",
    answer: true,
    explanation: "Angiotensin II raises BP and promotes fluid retention."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "ADH (vasopressin) release increases during hypovolemic shock.",
    answer: true,
    explanation: "ADH promotes water retention to restore blood volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased thirst is a compensatory response in hypovolemic shock.",
    answer: true,
    explanation: "Thirst increases fluid intake to restore volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased sodium retention occurs during hypovolemic shock.",
    answer: true,
    explanation: "Aldosterone and angiotensin II promote Na⁺ retention."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased movement of interstitial fluid into capillaries occurs during shock.",
    answer: true,
    explanation: "Starling forces favour reabsorption to restore circulating volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased erythropoietin production occurs during shock.",
    answer: true,
    explanation: "Erythropoietin stimulates RBC production to improve oxygen delivery."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased glucocorticoid release occurs during shock.",
    answer: true,
    explanation: "Cortisol helps maintain vascular tone and BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased plasma protein synthesis occurs during shock.",
    answer: true,
    explanation: "This maintains oncotic pressure and blood volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Cardiac output is the volume ejected per minute, expressed in mL/min or L/min.",
    answer: true,
    explanation: "CO = HR × SV, measured in volume per minute."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Average resting cardiac output is 5 L/min.",
    answer: true,
    explanation: "Normal CO for a 70 kg adult at rest is approximately 5 L/min."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Cardiac output can increase to 25 L/min during maximal exercise.",
    answer: true,
    explanation: "Trained athletes can achieve very high CO during peak exertion."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Heart rate increases during exercise due to decreased sympathetic activity.",
    answer: false,
    explanation: "HR increases due to increased sympathetic and decreased parasympathetic activity."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Stroke volume increases during exercise due to increased venous return and contractility.",
    answer: true,
    explanation: "Exercise enhances both preload and contractility, increasing SV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased blood volume increases venous return and cardiac output.",
    answer: true,
    explanation: "Greater volume raises MSFP and drives more blood to the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Decreased blood volume decreases venous return and cardiac output.",
    answer: true,
    explanation: "Hypovolaemia reduces preload and therefore CO."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Venous return equals cardiac output in steady state.",
    answer: true,
    explanation: "The heart pumps what it receives (Frank‑Starling law)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Heart size affects stroke volume; larger hearts have greater SV.",
    answer: true,
    explanation: "Larger ventricular chambers can hold and eject more blood."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Cardiac index is cardiac output divided by body surface area.",
    answer: true,
    explanation: "CI = CO / BSA, normalising CO for body size."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Normal cardiac index is approximately 3.2 L/min/m².",
    answer: true,
    explanation: "CI = 5 L/min / 1.7 m² ≈ 3.2 L/min/m²."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Cardiac reserve is the difference between resting and maximal cardiac output.",
    answer: true,
    explanation: "Cardiac reserve represents the heart's functional buffer capacity."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Normal cardiac reserve is 100‑200%.",
    answer: false,
    explanation: "Normal cardiac reserve is 300‑400%; athletes can reach 500‑600%."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Athletes have higher cardiac reserve than sedentary individuals.",
    answer: true,
    explanation: "Training increases cardiac efficiency and reserve capacity."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Cardiac reserve decreases with old age.",
    answer: true,
    explanation: "Age‑related changes reduce the heart's ability to increase output."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Stroke volume is the volume pumped per minute.",
    answer: false,
    explanation: "SV is volume pumped per beat, not per minute."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Stroke volume = EDV − ESV.",
    answer: true,
    explanation: "This is the mathematical definition of stroke volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "End‑diastolic volume is also known as preload.",
    answer: true,
    explanation: "Preload is the volume filling the ventricle before contraction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "End‑systolic volume is the volume remaining in the ventricle after contraction.",
    answer: true,
    explanation: "ESV represents residual blood after ejection."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased contractility increases stroke volume.",
    answer: true,
    explanation: "Stronger contraction increases ejection fraction and SV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased afterload increases stroke volume.",
    answer: false,
    explanation: "Afterload opposes ejection; increased afterload reduces SV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Ejection fraction = (SV / EDV) × 100.",
    answer: true,
    explanation: "EF is the percentage of EDV ejected per beat."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Normal ejection fraction is approximately 70‑80%.",
    answer: false,
    explanation: "Normal EF is approximately 50‑65%."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Ejection fraction below 40% indicates systolic heart failure.",
    answer: true,
    explanation: "Reduced EF indicates impaired ventricular contractility."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Ejection fraction is a key clinical measure obtained by echocardiography.",
    answer: true,
    explanation: "EF is routinely measured with cardiac ultrasound."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Veins are called capacitance vessels because they store blood.",
    answer: true,
    explanation: "Veins are highly compliant and hold approximately 60% of blood volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "At any time, approximately 60% of total blood volume is in the veins.",
    answer: true,
    explanation: "Veins function as the major blood reservoir."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Sympathetic venoconstriction reduces venous capacitance and increases venous return.",
    answer: true,
    explanation: "Venoconstriction mobilises blood toward the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "During inspiration, intrathoracic pressure increases, compressing the great veins.",
    answer: false,
    explanation: "Intrathoracic pressure decreases during inspiration, expanding veins."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The respiratory pump enhances venous return during inspiration.",
    answer: true,
    explanation: "Negative intrathoracic pressure draws blood toward the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The skeletal muscle pump compresses veins during contraction, aiding venous return.",
    answer: true,
    explanation: "Muscle contraction squeezes veins, propelling blood forward."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Varicose veins result from competent venous valves.",
    answer: false,
    explanation: "Incompetent valves allow backward flow, causing venous pooling and dilation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Prolonged standing decreases venous return due to venous pooling.",
    answer: true,
    explanation: "Gravity causes blood to pool in lower extremity veins."
  },
    // ===== PHYSIOLOGY – CARDIOVASCULAR PHYSIOLOGY (CONTINUED) =====

  // SECTION 16: Cardiac Output & Its Regulation (Continued)
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Cardiac output increases at high altitude due to hypoxia-induced sympathetic activation.",
    answer: true,
    explanation: "Hypoxia stimulates peripheral chemoreceptors, increasing sympathetic outflow and raising CO."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Pregnancy decreases cardiac output due to reduced blood volume.",
    answer: false,
    explanation: "Pregnancy increases CO by 30-50% due to increased blood volume and metabolic demand."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Strong emotions decrease cardiac output through parasympathetic activation.",
    answer: false,
    explanation: "Strong emotions increase sympathetic activity, raising HR and CO."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Hyperthyroidism causes pathological increase in cardiac output due to elevated metabolic rate.",
    answer: true,
    explanation: "Increased thyroid hormone raises O₂ demand, increasing HR and contractility."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Fever decreases cardiac output due to reduced metabolic demand.",
    answer: false,
    explanation: "Fever increases metabolic rate and CO to meet elevated O₂ requirements."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Haemorrhage causes pathological decrease in cardiac output due to reduced venous return.",
    answer: true,
    explanation: "Blood loss reduces venous return, EDV, and consequently SV and CO."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Myocardial infarction decreases cardiac output due to reduced contractility.",
    answer: true,
    explanation: "Loss of viable myocardium impairs the heart's pumping ability."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The Fick principle is used to measure cardiac output using oxygen as the indicator substance.",
    answer: true,
    explanation: "CO = O₂ consumption / (arterial O₂ - venous O₂) content."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The direct Fick method requires pulmonary artery catheterisation.",
    answer: true,
    explanation: "Mixed venous blood must be sampled from the pulmonary artery."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The direct Fick method is non-invasive and carries no risks.",
    answer: false,
    explanation: "It is invasive and carries risks including infection, haemorrhage, and arrhythmias."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The dye dilution method uses a known quantity of indicator injected into the right atrium.",
    answer: true,
    explanation: "The indicator is injected and its concentration in peripheral blood is measured over time."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Evan's blue dye is commonly used in the indicator dilution method.",
    answer: true,
    explanation: "Evan's blue is a standard indicator that is non-toxic and easily measured."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "An ideal indicator for dye dilution should alter cardiac output during measurement.",
    answer: false,
    explanation: "The indicator must not alter haemodynamics to ensure accurate measurement."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The thermodilution method uses cold saline as the indicator.",
    answer: true,
    explanation: "Temperature change from cold saline is measured instead of dye concentration."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The thermodilution method requires a Swan-Ganz catheter with a thermistor.",
    answer: true,
    explanation: "The thermistor at the catheter tip measures temperature changes in the pulmonary artery."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Doppler echocardiography measures cardiac output using the Doppler effect.",
    answer: true,
    explanation: "Frequency shift of reflected ultrasound measures blood flow velocity."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Ballistocardiography records the electrical activity of the heart.",
    answer: false,
    explanation: "Ballistocardiography records body movements from the heart's ballistic recoil, not electrical activity."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The five main factors controlling cardiac output are venous return, contractility, peripheral resistance, blood volume, and heart rate.",
    answer: true,
    explanation: "These factors collectively determine CO = HR × SV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Venous return is the least important determinant of cardiac output.",
    answer: false,
    explanation: "Venous return is the most important long-term determinant of CO."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The Frank-Starling law states that contraction force is proportional to initial muscle fibre length.",
    answer: true,
    explanation: "Greater EDV stretches fibres, increasing contraction force."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The Frank-Starling mechanism requires neural input to function.",
    answer: false,
    explanation: "It is an intrinsic mechanism that operates without neural or hormonal control."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "As EDV increases, stroke volume increases linearly without limit.",
    answer: false,
    explanation: "SV increases up to optimal sarcomere length, then decreases with overstretching."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Cardiac function curves plot cardiac output against central venous pressure.",
    answer: true,
    explanation: "These curves show the relationship between preload and cardiac output."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Sympathetic stimulation shifts cardiac function curves downward and to the right.",
    answer: false,
    explanation: "Sympathetic stimulation shifts curves upward and to the left, indicating improved contractility."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Heart failure shifts cardiac function curves downward and to the right.",
    answer: true,
    explanation: "Reduced contractility requires higher filling pressure for lower output."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The respiratory pump enhances venous return during inspiration.",
    answer: true,
    explanation: "Negative intrathoracic pressure draws blood toward the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The respiratory pump is most effective during shallow breathing.",
    answer: false,
    explanation: "Deep, rapid breathing during exercise maximises the respiratory pump effect."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Vis-a-tergo is the forward push from behind generated by previous systolic contraction.",
    answer: true,
    explanation: "The Windkessel effect from arterial recoil helps push blood forward."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Vis-a-fronte is the suction force generated during ventricular systole when AV valves descend.",
    answer: true,
    explanation: "AV valve descent expands atrial volume, creating negative pressure."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The skeletal muscle pump aids venous return by compressing veins during contraction.",
    answer: true,
    explanation: "Muscle contraction squeezes veins, forcing blood toward the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Varicose veins result from competent venous valves.",
    answer: false,
    explanation: "Incompetent valves allow backward flow, causing venous pooling and dilation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Mean systemic filling pressure drives blood from the periphery to the right atrium.",
    answer: true,
    explanation: "MSFP reflects venous reservoir pressure driving venous return."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Increased blood volume decreases mean systemic filling pressure.",
    answer: false,
    explanation: "Increased blood volume raises MSFP and venous return."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Sympathetic stimulation raises MSFP by increasing venous tone.",
    answer: true,
    explanation: "Venoconstriction raises venous pressure and mobilises blood."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "Prolonged standing increases venous return due to gravity.",
    answer: false,
    explanation: "Prolonged standing causes venous pooling, decreasing venous return."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Cardiac Output & Its Regulation",
    type: "truefalse",
    question: "The baroreceptor reflex compensates for orthostatic hypotension in healthy individuals.",
    answer: true,
    explanation: "Baroreceptors detect pressure drop and trigger sympathetic activation."
  },

  // SECTION 17: Arterial Blood Pressure & Its Regulation (Continued)
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Arterial blood pressure is the lateral pressure exerted by blood on arterial walls.",
    answer: true,
    explanation: "BP acts perpendicularly against the vessel wall, distending it."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Veins have thicker tunica media than arteries.",
    answer: false,
    explanation: "Arteries have thicker tunica media to withstand and regulate pressure."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Arterial blood pressure ensures blood flow, nutrient exchange, urine formation, and lymph formation.",
    answer: true,
    explanation: "These are the four primary functions of arterial BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Normal systolic blood pressure range is 90-140 mmHg.",
    answer: true,
    explanation: "SBP normally falls between 90 and 140 mmHg."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Normal diastolic blood pressure range is 60-90 mmHg.",
    answer: true,
    explanation: "DBP normally falls between 60 and 90 mmHg."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Systolic blood pressure is the minimum pressure during ventricular diastole.",
    answer: false,
    explanation: "SBP is the maximum pressure during ventricular systole."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Systolic pressure is determined by the force of heartbeat, blood volume, and cardiac output.",
    answer: true,
    explanation: "Greater contractility, volume, and CO all increase SBP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Diastolic blood pressure is the maximum pressure in the arteries.",
    answer: false,
    explanation: "DBP is the minimum pressure at the end of ventricular diastole."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Diastolic pressure is maintained by elastic recoil of arteries and peripheral resistance.",
    answer: true,
    explanation: "Windkessel effect and PVR sustain pressure during diastole."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Coronary perfusion occurs predominantly during systole.",
    answer: false,
    explanation: "Coronary perfusion is mainly diastolic when vessels are not compressed."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Pulse pressure is the difference between systolic and diastolic blood pressure.",
    answer: true,
    explanation: "PP = SBP − DBP, normally about 40 mmHg."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Widened pulse pressure may indicate aortic regurgitation.",
    answer: true,
    explanation: "Aortic regurgitation increases SBP and widens PP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Narrowed pulse pressure may indicate cardiac tamponade.",
    answer: true,
    explanation: "Reduced stroke volume narrows the difference between SBP and DBP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Mean arterial pressure is the arithmetic mean of SBP and DBP.",
    answer: false,
    explanation: "MAP is time-weighted; MAP = DBP + ⅓ × PP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Normal MAP is approximately 95 mmHg.",
    answer: true,
    explanation: "MAP = DBP + ⅓ PP = 80 + ⅓(40) ≈ 93-95 mmHg."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "MAP represents the average perfusion pressure driving blood to organs.",
    answer: true,
    explanation: "MAP is the most clinically relevant indicator of organ perfusion."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Pulse pressure widens progressively from the aorta to the capillaries.",
    answer: false,
    explanation: "Pulse pressure narrows as arteriolar resistance dampens pulsatility."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Blood pressure increases with age due to arterial stiffening.",
    answer: true,
    explanation: "Arteries lose elasticity with age, raising both SBP and PP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Obese individuals generally have higher blood pressure.",
    answer: true,
    explanation: "Obesity increases blood volume and peripheral resistance."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Heat causes vasoconstriction and raises blood pressure.",
    answer: false,
    explanation: "Heat causes vasodilation and lowers BP; cold causes vasoconstriction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Blood pressure is lowest during sleep and rises on waking.",
    answer: true,
    explanation: "The morning surge is a normal diurnal variation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Acute exercise lowers systolic blood pressure significantly.",
    answer: false,
    explanation: "Acute exercise raises SBP; regular exercise lowers resting BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Blood pressure may fall in mid-pregnancy due to hormonal vasodilation.",
    answer: true,
    explanation: "Vasodilatory hormones reduce TPR, lowering BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Direct blood pressure measurement uses a catheter inserted into an artery.",
    answer: true,
    explanation: "Direct (invasive) measurement requires arterial cannulation with a transducer."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The auscultatory method was introduced by William Einthoven.",
    answer: false,
    explanation: "The auscultatory method was introduced by Korotkoff in 1905."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The first Korotkoff sound marks the diastolic blood pressure.",
    answer: false,
    explanation: "The first sound (Phase 1) marks SBP; sound disappearance (Phase 5) marks DBP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Phase 4 (muffling) is used as DBP in pregnancy when sounds do not disappear.",
    answer: true,
    explanation: "In some patients, especially pregnant women, sounds may persist to zero."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The sphygmomanometer works by external compression of an artery.",
    answer: true,
    explanation: "The cuff occludes then gradually releases flow to determine BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The cuff should be level with the heart to avoid hydrostatic artefacts.",
    answer: true,
    explanation: "Height differences create hydrostatic pressure errors."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The patient should be seated for 5 minutes before BP measurement.",
    answer: true,
    explanation: "Resting stabilises cardiovascular variables."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The cuff should be deflated at approximately 5 mmHg per second.",
    answer: false,
    explanation: "Deflation should be at 2 mmHg per second for accurate detection."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Cardiac output, blood volume, vessel elasticity, and viscosity maintain arterial BP.",
    answer: true,
    explanation: "These four factors collectively determine and maintain BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Increased blood viscosity decreases resistance to flow.",
    answer: false,
    explanation: "Higher viscosity increases resistance and requires higher BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Viscosity is decreased by higher haematocrit and lower temperature.",
    answer: false,
    explanation: "Higher haematocrit and lower temperature both increase viscosity."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Peripheral vascular resistance is primarily determined by arteriolar smooth muscle.",
    answer: true,
    explanation: "Arterioles are the main resistance vessels of the circulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "BP = CO × PVR is analogous to Ohm's law.",
    answer: true,
    explanation: "This relationship shows BP depends on both cardiac output and resistance."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Blood pressure is regulated by immediate, short-term, and long-term mechanisms.",
    answer: true,
    explanation: "Different time scales ensure rapid and sustained BP control."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Baroreceptor reflexes act within seconds to regulate BP.",
    answer: true,
    explanation: "Baroreceptors respond immediately to pressure changes."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Renin-angiotensin system acts within seconds to regulate BP.",
    answer: false,
    explanation: "RAS acts over minutes to hours, not seconds."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Baroreceptors are located in the carotid sinus and aortic arch.",
    answer: true,
    explanation: "These are the major arterial baroreceptor sites."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Carotid sinus baroreceptor afferents travel in the vagus nerve (CN X).",
    answer: false,
    explanation: "Carotid sinus afferents travel in the glossopharyngeal nerve (CN IX)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Aortic arch baroreceptor afferents travel in the vagus nerve (CN X).",
    answer: true,
    explanation: "Aortic arch afferents travel in the vagus nerve to the NTS."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Baroreceptor afferents synapse in the nucleus tractus solitarius.",
    answer: true,
    explanation: "The NTS is the primary medullary relay for baroreceptor input."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "When BP rises, vasomotor centre stimulation increases sympathetic outflow.",
    answer: false,
    explanation: "BP rise inhibits the VMC, reducing sympathetic outflow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "When BP rises, cardioinhibitory centre stimulation increases vagal tone.",
    answer: true,
    explanation: "CIC activation increases parasympathetic output, causing bradycardia."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The baroreceptor reflex is a positive feedback loop.",
    answer: false,
    explanation: "It is a negative feedback loop that opposes BP changes."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Marey's reflex is another name for the baroreceptor reflex.",
    answer: true,
    explanation: "The baroreceptor reflex is also known as Marey's reflex."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The net effect of increased baroreceptor firing is increased peripheral resistance.",
    answer: false,
    explanation: "Increased baroreceptor firing reduces sympathetic tone, causing vasodilation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Peripheral chemoreceptors are stimulated by hypoxia, hypercapnia, and acidosis.",
    answer: true,
    explanation: "Low O₂, high CO₂, and low pH trigger chemoreceptor activation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Central chemoreceptors are located in the carotid and aortic bodies.",
    answer: false,
    explanation: "Central chemoreceptors are in the medulla, sensitive to CSF CO₂/pH."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Chemoreceptor activation leads to vasodilation and decreased BP.",
    answer: false,
    explanation: "Chemoreceptor activation increases sympathetic outflow, raising BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The cerebral ischaemic response activates when BP falls below 40 mmHg.",
    answer: true,
    explanation: "This emergency mechanism activates when brain perfusion is critically compromised."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Cushing's reflex consists of hypertension, bradycardia, and irregular breathing.",
    answer: true,
    explanation: "This triad indicates increased intracranial pressure and cerebral ischaemia."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Cushing's reflex causes hypotension and tachycardia.",
    answer: false,
    explanation: "Cushing's reflex produces marked hypertension and bradycardia."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "The capillary fluid shift buffers BP changes through fluid movement.",
    answer: true,
    explanation: "Fluid shifts adjust blood volume in response to pressure changes."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "When BP rises, fluid moves from the interstitium into the capillaries.",
    answer: false,
    explanation: "High BP increases capillary hydrostatic pressure, causing filtration into the interstitium."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Renin is released from juxtaglomerular cells when BP falls.",
    answer: true,
    explanation: "Reduced renal perfusion triggers renin release from JG cells."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Renin converts angiotensinogen directly to angiotensin II.",
    answer: false,
    explanation: "Renin converts angiotensinogen to angiotensin I, which is then converted to II by ACE."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "ACE is primarily located in the liver.",
    answer: false,
    explanation: "ACE is primarily located in the lungs."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Angiotensin II is an octapeptide.",
    answer: true,
    explanation: "Angiotensin II consists of eight amino acids."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Angiotensin II causes vasodilation and decreases BP.",
    answer: false,
    explanation: "Angiotensin II is a potent vasoconstrictor that raises BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Angiotensin II stimulates aldosterone secretion from the adrenal medulla.",
    answer: false,
    explanation: "Angiotensin II stimulates aldosterone from the adrenal cortex."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Aldosterone promotes sodium and water retention.",
    answer: true,
    explanation: "Aldosterone increases Na⁺ reabsorption in the distal tubule."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Angiotensin II stimulates the thirst centre in the hypothalamus.",
    answer: true,
    explanation: "Thirst stimulation increases fluid intake, raising blood volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "ACE inhibitors block the conversion of angiotensin I to angiotensin II.",
    answer: true,
    explanation: "ACE inhibitors are used to treat hypertension by reducing angiotensin II production."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Angiotensin receptor blockers (ARBs) block angiotensin II receptors.",
    answer: true,
    explanation: "ARBs are another class of antihypertensive drugs."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Atrial natriuretic factor promotes sodium and water retention.",
    answer: false,
    explanation: "ANF promotes sodium excretion, reducing blood volume and BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Nitric oxide is a potent vasodilator released from endothelium.",
    answer: true,
    explanation: "NO relaxes vascular smooth muscle and lowers BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Histamine causes vasoconstriction and raises BP.",
    answer: false,
    explanation: "Histamine causes vasodilation and lowers BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Hypertension is defined as persistent BP above 140/90 mmHg.",
    answer: true,
    explanation: "Hypertension is diagnosed when BP is persistently elevated."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Hypertension affects approximately 30% of people over age 50.",
    answer: true,
    explanation: "Hypertension prevalence increases significantly with age."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Essential hypertension has a single identifiable cause.",
    answer: false,
    explanation: "Essential hypertension is multifactorial with no single cause."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Secondary hypertension accounts for about 10% of hypertension cases.",
    answer: true,
    explanation: "Secondary hypertension has an identifiable underlying cause."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Renal disease is a common cause of secondary hypertension.",
    answer: true,
    explanation: "Glomerulonephritis and other renal diseases cause secondary hypertension."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Phaeochromocytoma causes secondary hypertension through excess cortisol.",
    answer: false,
    explanation: "Phaeochromocytoma causes excess catecholamines, not cortisol."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Hypertension is a risk factor for stroke and myocardial infarction.",
    answer: true,
    explanation: "Hypertension accelerates atherosclerosis and damages target organs."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Left ventricular hypertrophy is a complication of hypertension.",
    answer: true,
    explanation: "The heart hypertrophies to overcome increased afterload."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Chronic kidney failure is not associated with hypertension.",
    answer: false,
    explanation: "Hypertension causes nephrosclerosis, leading to kidney failure."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Obesity is a predisposing factor for hypertension.",
    answer: true,
    explanation: "Obesity increases blood volume and sympathetic activity."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Hereditary factors do not influence hypertension risk.",
    answer: false,
    explanation: "Family history is a strong risk factor for hypertension."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Chronic stress lowers blood pressure through parasympathetic activation.",
    answer: false,
    explanation: "Stress increases sympathetic tone, raising BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Smoking acutely lowers blood pressure through vasodilation.",
    answer: false,
    explanation: "Nicotine acutely raises BP; chronic smoking damages vessels."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Physical inactivity is associated with lower resting BP.",
    answer: false,
    explanation: "Sedentary lifestyle is associated with higher resting BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Causes of hypotension include haemorrhage, dehydration, and diarrhoea.",
    answer: true,
    explanation: "These reduce circulating volume and venous return."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Addison's disease causes hypotension through aldosterone deficiency.",
    answer: true,
    explanation: "Aldosterone deficiency causes Na⁺ wasting and volume depletion."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Arterial Blood Pressure & Its Regulation",
    type: "truefalse",
    question: "Hypothyroidism causes increased cardiac output and hypertension.",
    answer: false,
    explanation: "Hypothyroidism reduces metabolic rate and CO, causing hypotension."
  },

  // SECTION 18: Vascular & Lymphatic System (Continued)
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Approximately 85% of capillary filtered fluid is reabsorbed at the venous end.",
    answer: true,
    explanation: "The remaining 15% becomes lymph."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The remaining 15% of filtered fluid is returned via lymphatic drainage.",
    answer: true,
    explanation: "Lymphatic vessels remove excess fluid and proteins."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymphatic obstruction leads to oedema.",
    answer: true,
    explanation: "Lymphedema results from impaired lymphatic drainage."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph flows from tissue spaces into the blood.",
    answer: true,
    explanation: "Lymphatic vessels return fluid to the venous system."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph from the lower body drains into the right lymphatic duct.",
    answer: false,
    explanation: "Lower body lymph drains into the thoracic duct."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymphatic vessels have valves ensuring flow only toward the heart.",
    answer: true,
    explanation: "Valves prevent backflow in lymphatic vessels."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph from the left head and arm drains into the right lymphatic duct.",
    answer: false,
    explanation: "The left head and arm drain into the thoracic duct."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Plasma contains fibrinogen and prothrombin; lymph contains these in small amounts.",
    answer: true,
    explanation: "Lymph has low clotting factor content and coagulates slowly."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph contains mainly lymphocytes and monocytes.",
    answer: true,
    explanation: "The cellular content of lymph is predominantly lymphocytes (1000-2000 per mm³)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph contains glucose at approximately 132 mg per 100 ml.",
    answer: true,
    explanation: "Glucose is present in lymph similar to plasma."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph contains urea, amino acids, and creatinine.",
    answer: true,
    explanation: "These non-protein nitrogenous substances are present in lymph."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Initial lymphatics have valves and smooth muscle in their walls.",
    answer: false,
    explanation: "Initial lymphatics lack valves and smooth muscle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Collecting lymphatics contract in a peristaltic manner.",
    answer: true,
    explanation: "Valves and smooth muscle allow active propulsion of lymph."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Skeletal muscle contraction aids lymph flow.",
    answer: true,
    explanation: "Muscle compression helps move lymph along vessels."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Inspiration aids lymph flow through negative intrathoracic pressure.",
    answer: true,
    explanation: "The respiratory pump assists lymphatic return."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph nodes filter bacteria and particulate matter from lymph.",
    answer: true,
    explanation: "Macrophages in lymph nodes phagocytose foreign material."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Primary lymphoid organs include the spleen and lymph nodes.",
    answer: false,
    explanation: "Primary lymphoid organs are bone marrow and thymus."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The thymus is a site for T-lymphocyte maturation.",
    answer: true,
    explanation: "The thymus is essential for T-cell development."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The red bone marrow produces erythrocytes, leukocytes, and platelets.",
    answer: true,
    explanation: "Bone marrow is the major haemopoietic tissue."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The thymus gland enlarges with age.",
    answer: false,
    explanation: "The thymus atrophies and involutes with age."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The spleen is located in the left hypochondriac region.",
    answer: true,
    explanation: "The spleen is in the upper left abdomen."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The red pulp of the spleen is where immune responses are mounted.",
    answer: false,
    explanation: "Red pulp filters blood; white pulp mounts immune responses."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The white pulp of the spleen contains lymphoid tissue for immune responses.",
    answer: true,
    explanation: "White pulp is the immune-active region of the spleen."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The spleen stores platelets.",
    answer: true,
    explanation: "Platelet storage is one of the spleen's functions."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph nodes are found only in the neck region.",
    answer: false,
    explanation: "Lymph nodes are found in cervical, axillary, inguinal, and other regions."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The outer cortex of a lymph node is rich in B-cells.",
    answer: true,
    explanation: "B-cells predominate in the outer cortex of lymph nodes."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The inner cortex of a lymph node is rich in T-cells.",
    answer: true,
    explanation: "T-cells predominate in the inner cortex."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The medulla of a lymph node contains phagocytic macrophages.",
    answer: true,
    explanation: "Medullary macrophages monitor lymph for pathogens."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Renal causes such as glomerulonephritis are common causes of secondary hypertension.",
    answer: true,
    explanation: "Renal disease is the most common identifiable cause of secondary hypertension."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Phaeochromocytoma causes secondary hypertension through excess cortisol secretion.",
    answer: false,
    explanation: "Phaeochromocytoma is an adrenal medullary tumour secreting excess catecholamines, not cortisol."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Cushing's syndrome causes secondary hypertension through excess aldosterone secretion.",
    answer: false,
    explanation: "Cushing's syndrome causes excess cortisol, not aldosterone; cortisol promotes fluid retention and vascular sensitivity."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Conn's syndrome (primary hyperaldosteronism) causes hypertension through sodium and water retention.",
    answer: true,
    explanation: "Excess aldosterone increases Na⁺ reabsorption, expanding blood volume and raising BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Thyrotoxicosis causes secondary hypertension through decreased cardiac output.",
    answer: false,
    explanation: "Thyrotoxicosis increases cardiac output, raising systolic BP."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Atherosclerosis reduces arterial compliance and widens pulse pressure.",
    answer: true,
    explanation: "Stiffened arteries cannot buffer the pulse wave, increasing pulse pressure."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Hypertension is a major risk factor for both ischaemic and haemorrhagic strokes.",
    answer: true,
    explanation: "High BP damages cerebral vessels, increasing stroke risk of both types."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Hypertensive retinopathy is detected on fundoscopic examination.",
    answer: true,
    explanation: "Retinal vessel changes are visible with ophthalmoscopy in hypertensive patients."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Aortic aneurysm is not associated with chronic hypertension.",
    answer: false,
    explanation: "Chronic high pressure weakens the aortic wall, predisposing to aneurysm formation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Alcoholism is a predisposing factor for hypertension.",
    answer: true,
    explanation: "Chronic alcohol consumption raises BP through sympathetic activation and other mechanisms."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Physical inactivity is associated with lower resting blood pressure.",
    answer: false,
    explanation: "Sedentary lifestyle is associated with higher resting BP and impaired cardiovascular regulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Addison's disease causes hypertension through excessive aldosterone secretion.",
    answer: false,
    explanation: "Addison's disease causes adrenocortical insufficiency leading to Na⁺ wasting and hypotension."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Hypothyroidism causes decreased heart rate and cardiac output.",
    answer: true,
    explanation: "Reduced thyroid hormone lowers metabolic rate, HR, and CO."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Approximately 15% of capillary filtered fluid becomes lymph.",
    answer: true,
    explanation: "About 85% is reabsorbed; the remaining 15% is returned via lymph."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph from the right arm drains into the thoracic duct.",
    answer: false,
    explanation: "The right arm drains into the right lymphatic duct, not the thoracic duct."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The thoracic duct empties into the left internal jugular and subclavian veins.",
    answer: true,
    explanation: "The thoracic duct drains into the left venous angle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymphatic vessels have valves to ensure unidirectional flow.",
    answer: true,
    explanation: "Valves prevent backflow, ensuring lymph flows only toward the heart."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Initial lymphatics contain smooth muscle and contract peristaltically.",
    answer: false,
    explanation: "Initial lymphatics lack smooth muscle and valves; collecting lymphatics have these features."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Collecting lymphatics contract in a peristaltic manner to propel lymph.",
    answer: true,
    explanation: "Smooth muscle and valves allow active peristaltic propulsion of lymph."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The thymus gland is responsible for B-lymphocyte maturation.",
    answer: false,
    explanation: "The thymus is responsible for T-lymphocyte maturation; B-cells mature in bone marrow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The spleen is located in the upper left hypochondriac region.",
    answer: true,
    explanation: "The spleen lies in the left upper quadrant of the abdomen."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The white pulp of the spleen is responsible for blood filtration.",
    answer: false,
    explanation: "Red pulp filters blood; white pulp mounts immune responses."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymph nodes contain fixed macrophages that phagocytose foreign material.",
    answer: true,
    explanation: "Medullary macrophages trap and destroy pathogens in lymph nodes."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Oedema can result from decreased capillary oncotic pressure.",
    answer: true,
    explanation: "Low plasma protein reduces reabsorption, allowing fluid accumulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Lymphedema is caused by increased lymphatic flow.",
    answer: false,
    explanation: "Lymphedema results from lymphatic obstruction, not increased flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The tunica media of blood vessels is composed primarily of endothelial cells.",
    answer: false,
    explanation: "The tunica media is composed primarily of smooth muscle; endothelium lines the tunica interna."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "The endothelium plays a role in angiogenesis and haemostasis.",
    answer: true,
    explanation: "Endothelial cells regulate new vessel formation and blood clotting."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Nitric oxide (NO) causes vasoconstriction of vascular smooth muscle.",
    answer: false,
    explanation: "NO is a potent vasodilator, not a constrictor."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Endothelin-1 causes vasodilation and lowers blood pressure.",
    answer: false,
    explanation: "Endothelin-1 is a potent vasoconstrictor."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Vascular smooth muscle contractions are rapid and short in duration.",
    answer: false,
    explanation: "VSM undergoes slow, sustained tonic contractions, unlike cardiac muscle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Vascular smooth muscle contains the regulatory protein troponin.",
    answer: false,
    explanation: "VSM lacks troponin; regulation involves calmodulin and MLC phosphorylation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Calcium-calmodulin activates myosin light chain kinase in vascular smooth muscle.",
    answer: true,
    explanation: "This activation is the key step initiating VSM contraction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Myosin light chain phosphatase (MLCP) promotes vascular smooth muscle relaxation.",
    answer: true,
    explanation: "MLCP dephosphorylates myosin light chains, leading to relaxation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Oxidative stress increases nitric oxide bioavailability.",
    answer: false,
    explanation: "Oxidative stress reduces NO bioavailability, causing endothelial dysfunction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "Arteriolosclerosis is the stiffening of large arteries.",
    answer: false,
    explanation: "Arteriolosclerosis affects small arteries and arterioles; arteriosclerosis affects larger arteries."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Vascular & Lymphatic System",
    type: "truefalse",
    question: "An aneurysm is a permanent, localized dilation of an artery.",
    answer: true,
    explanation: "Aneurysms result from structural failure of the vessel wall."
  },

  // SECTION 19: Exercise, Shock & Clinical Correlations (Continued)
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Cardiac output equals heart rate multiplied by stroke volume.",
    answer: true,
    explanation: "This is the fundamental equation: CO = HR × SV."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Control of heart rate is achieved exclusively by the autonomic nervous system.",
    answer: false,
    explanation: "HR is controlled by both autonomic nerves and hormonal factors."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Ventricular hypertrophy increases the force of contraction by increasing contractile mass.",
    answer: true,
    explanation: "More muscle mass allows greater force generation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased sympathetic activity decreases heart rate and contractility.",
    answer: false,
    explanation: "Sympathetic activity increases both HR and contractility."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The renin-angiotensin-aldosterone system is activated in response to increased cardiac load.",
    answer: true,
    explanation: "RAA system activation helps maintain BP and volume during stress."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "During active muscle contraction, blood flow increases due to vasodilation.",
    answer: false,
    explanation: "Mechanical compression reduces flow during contraction; flow increases between contractions."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Intermittent capillary flow is caused by contraction of precapillary sphincters.",
    answer: true,
    explanation: "Precapillary sphincters and metarterioles regulate capillary flow intermittently."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Autoregulation requires neural and hormonal influences to function.",
    answer: false,
    explanation: "Autoregulation is intrinsic and occurs independently of neural and hormonal control."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The myogenic theory explains local control of blood flow through metabolic byproducts.",
    answer: false,
    explanation: "The myogenic theory involves vascular smooth muscle response to stretch; the metabolic theory involves byproducts."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The metabolic theory of autoregulation involves vasodilator metabolites.",
    answer: true,
    explanation: "Metabolites such as adenosine, CO₂, and H⁺ cause vasodilation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Sympathetic stimulation of alpha-adrenergic receptors causes vasodilation.",
    answer: false,
    explanation: "Alpha-adrenergic stimulation causes vasoconstriction."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Sympathetic stimulation of beta-adrenergic receptors causes vasodilation.",
    answer: true,
    explanation: "Beta-adrenergic activation leads to vasodilation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "In the heart, oxygen extraction is low at rest, so flow does not need to increase with demand.",
    answer: false,
    explanation: "The heart has high basal O₂ extraction, so increased demand requires increased flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "In skeletal muscle, sympathetic nerves cause vasoconstriction via beta-adrenergic receptors.",
    answer: false,
    explanation: "Skeletal muscle vasoconstriction is mediated by alpha-adrenergic receptors."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Epinephrine causes vasodilation via beta-2 receptors at low concentrations.",
    answer: true,
    explanation: "Low concentration epinephrine activates β₂ receptors, causing vasodilation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "In the brain, vasodilation occurs in response to increased CO₂ concentration.",
    answer: true,
    explanation: "CO₂ is a potent cerebral vasodilator acting via pH changes."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The skin is primarily controlled by parasympathetic nerves for thermoregulation.",
    answer: false,
    explanation: "Skin blood flow is primarily controlled by sympathetic nerves."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "In the lungs, hypoxia causes vasodilation, similar to the systemic circulation.",
    answer: false,
    explanation: "Hypoxic pulmonary vasoconstriction is opposite to the systemic response."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Oncotic pressure from plasma proteins draws fluid from the interstitium into capillaries.",
    answer: true,
    explanation: "Plasma proteins create osmotic pressure that promotes reabsorption."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Fluid moves out of capillaries at the venous end where oncotic pressure dominates.",
    answer: false,
    explanation: "At the venous end, oncotic pressure exceeds hydrostatic pressure, causing reabsorption (fluid moves in)."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "At rest, approximately 60% of total blood volume is in the veins.",
    answer: true,
    explanation: "Veins function as the major blood reservoir."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Venoconstriction decreases venous return to the heart.",
    answer: false,
    explanation: "Venoconstriction mobilises blood from the reservoir, increasing venous return."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The left coronary artery supplies the anterior and left lateral portions of the left ventricle.",
    answer: true,
    explanation: "The left coronary artery perfuses these regions of the left ventricle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The right coronary artery supplies the anterior and left lateral portions of the left ventricle.",
    answer: false,
    explanation: "The right coronary supplies the right ventricle and posterior left ventricle."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "There are functional intercoronary channels in normal human hearts.",
    answer: false,
    explanation: "Normal hearts lack functional anastomoses, making occlusion dangerous."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Collateral vessels may develop if a coronary vessel narrows slowly over time.",
    answer: true,
    explanation: "Slow narrowing allows time for collateral circulation to develop."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Coronary blood flow occurs mainly during ventricular systole.",
    answer: false,
    explanation: "Coronary flow is mainly diastolic when vessels are not compressed."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The coronary circulation represents about 5% of cardiac output.",
    answer: true,
    explanation: "Resting coronary flow is 4-5% of CO."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Regulation of coronary blood flow is mainly by neural factors.",
    answer: false,
    explanation: "Metabolic factors dominate coronary flow regulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The subendocardial layer of the left ventricle receives more blood than the subepicardial layer.",
    answer: false,
    explanation: "The subendocardial layer receives less blood due to greater compression."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Resting coronary blood flow averages 225 ml/min.",
    answer: true,
    explanation: "Normal resting coronary flow is approximately 225 ml/min."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Tachycardia always increases coronary blood flow due to increased metabolic demand.",
    answer: false,
    explanation: "Tachycardia reduces diastolic filling time, potentially decreasing flow despite metabolic demand."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Oxygen lack (hypoxia) is the most effective coronary vasodilator.",
    answer: true,
    explanation: "Hypoxia directly dilates coronary vessels and releases adenosine."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Adenosine is a potent coronary vasodilator released during hypoxia.",
    answer: true,
    explanation: "Adenosine from ATP breakdown mediates metabolic vasodilation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Nitrites and aminophylline are coronary vasoconstrictors.",
    answer: false,
    explanation: "These are coronary vasodilators that increase CBF."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Thyroxine increases coronary blood flow by increasing cardiac metabolism.",
    answer: true,
    explanation: "Increased metabolic rate from thyroxine raises coronary flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Cerebral blood flow averages 55 ml/min/100g of brain tissue.",
    answer: true,
    explanation: "Normal CBF is approximately 55 ml/min/100g."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The brain receives approximately 15% of resting cardiac output.",
    answer: true,
    explanation: "The brain is highly perfused relative to its weight."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The brain is highly tolerant to ischemia and can survive without blood for many minutes.",
    answer: false,
    explanation: "The brain is the least tolerant organ; 5 seconds of ischemia causes unconsciousness."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Increased PCO₂ causes marked cerebral vasodilation.",
    answer: true,
    explanation: "CO₂ is a potent cerebral vasodilator acting via pH changes."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Adenosine is a potent dilator of pial arterioles in the brain.",
    answer: true,
    explanation: "Adenosine causes vasodilation in the cerebral circulation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "All blood from the gut, spleen, and pancreas flows directly into the liver via the portal vein.",
    answer: true,
    explanation: "The portal system directs splanchnic blood to the liver."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Reticuloendothelial cells in the liver sinusoids remove bacteria from the blood.",
    answer: true,
    explanation: "The liver acts as a filter through its reticuloendothelial cells."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Parasympathetic stimulation directly decreases gastrointestinal blood flow.",
    answer: false,
    explanation: "Parasympathetic stimulation increases glandular secretion, which secondarily increases blood flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Sympathetic stimulation causes vasoconstriction of splanchnic arterioles via alpha receptors.",
    answer: true,
    explanation: "Alpha-adrenergic activation constricts splanchnic vessels."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Sympathetic vasoconstriction in the splanchnic circulation is permanent.",
    answer: false,
    explanation: "Local metabolic vasodilator mechanisms override sympathetic constriction to restore flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Vasodilator substances such as gastrin and secretin are released during digestion.",
    answer: true,
    explanation: "These gut hormones cause vasodilation during digestion."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Kallidin and bradykinin are powerful vasodilators released during gastrointestinal secretion.",
    answer: true,
    explanation: "These kinins contribute to mucosal vasodilation."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The primary function of cutaneous circulation is nutrient delivery.",
    answer: false,
    explanation: "Thermoregulation, not nutrient delivery, is the primary regulator of skin blood flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Arteriovenous anastomoses in the skin shunt blood from arterioles to venules.",
    answer: true,
    explanation: "AV anastomoses provide a bypass route for blood flow in the skin."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "AV anastomoses in the skin are under parasympathetic neural control.",
    answer: false,
    explanation: "AV anastomoses are almost exclusively under sympathetic neural control."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Sympathetic stimulation causes dilation of AV anastomoses in the skin.",
    answer: false,
    explanation: "Sympathetic stimulation constricts AV anastomoses, reducing blood flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "AV anastomoses exhibit reactive hyperaemia and autoregulation.",
    answer: false,
    explanation: "AV anastomoses are not under metabolic control and do not exhibit these phenomena."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The rate of lymph flow is determined by interstitial fluid hydrostatic pressure.",
    answer: true,
    explanation: "Interstitial pressure is a key determinant of lymph formation and flow."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Lymphatic vessels carry fluid from tissue spaces into the blood.",
    answer: true,
    explanation: "This is the primary function of the lymphatic system."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Lymph from the right side of the neck drains into the thoracic duct.",
    answer: false,
    explanation: "The right side of the neck drains into the right lymphatic duct."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Lymph contains fibrinogen and prothrombin in quantities similar to plasma.",
    answer: false,
    explanation: "Lymph contains these clotting factors in small quantities, coagulating slowly."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Lymph contains electrolytes including sodium, calcium, and potassium.",
    answer: true,
    explanation: "These ions are present in lymph similar to interstitial fluid."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The thymus gland programs the immune system to recognise 'self'.",
    answer: true,
    explanation: "Thymic selection prevents T-cells from attacking self-tissues."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The spleen's red pulp functions as a site for adaptive immune responses.",
    answer: false,
    explanation: "Red pulp filters blood; white pulp mounts adaptive immune responses."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Lymph nodes contain B-cells and T-cells for mounting immune responses.",
    answer: true,
    explanation: "Lymph nodes are sites where adaptive immune responses are initiated."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Abnormal salt and water retention can cause oedema.",
    answer: true,
    explanation: "Salt and water retention expands extracellular fluid volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "Gravity and skeletal muscle contraction do not affect interstitial fluid volume.",
    answer: false,
    explanation: "These factors significantly affect fluid distribution and interstitial volume."
  },
  {
    course: "Physiology",
    topic: "Cardiovascular Physiology",
    subTopic: "Shock & Clinical Correlations",
    type: "truefalse",
    question: "The vascular endothelium regulates vascular tone and blood fluidity.",
    answer: true,
    explanation: "Endothelium controls vessel diameter and maintains blood flow properties."
  },
    // ===== BIOCHEMISTRY – HORMONES =====

  // SECTION 1: General Endocrinology (Definitions & Classifications)
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "Hormones are organic chemical messengers produced and secreted by endocrine cells into the bloodstream.",
    answer: true,
    explanation: "Hormones are defined as organic chemical messengers that regulate, integrate and control physiological and biochemical functions."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "Endocrine glands have ducts that lead to the outside of the body.",
    answer: false,
    explanation: "Endocrine glands are ductless glands and secrete hormones directly into the bloodstream, unlike exocrine glands which have ducts."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "Sweat glands are classified as endocrine glands.",
    answer: false,
    explanation: "Sweat glands have ducts leading to the skin surface and are therefore exocrine glands, not endocrine glands."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "Target cells contain specific receptors or binding sites for particular hormones.",
    answer: true,
    explanation: "Target cells have specific receptors that bind to particular hormones, and binding initiates cellular events affecting gene expression and protein synthesis."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "Hormone receptors can be located on the surface of target cells or in the cytoplasm or nucleus.",
    answer: true,
    explanation: "Hormone receptors may be located either on the cell surface or intracellularly (cytoplasm or nucleus) and are activated only when specific hormones bind to them."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "If a hormone cannot bind to its receptor, physiological and biochemical effects still occur through alternative pathways.",
    answer: false,
    explanation: "If a hormone does not bind to its receptor, no physiological and biochemical effects occur."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "The pituitary gland, pineal gland, thyroid gland and parathyroid glands are purely endocrine organs.",
    answer: true,
    explanation: "These are listed as purely endocrine organs in the uploaded materials."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "The pancreas is a purely endocrine organ.",
    answer: false,
    explanation: "The pancreas is both an endocrine and exocrine gland, secreting digestive enzymes (exocrine) and hormones (endocrine)."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "Protein or peptide hormones include insulin, glucagon, antidiuretic hormone and oxytocin.",
    answer: true,
    explanation: "These are correctly categorized as protein or peptide hormones based on their chemical nature."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "Steroid hormones include glucocorticoids, mineralocorticoids, sex hormones, epinephrine and norepinephrine.",
    answer: false,
    explanation: "Epinephrine and norepinephrine are amino acid derivatives, not steroid hormones. Steroid hormones include glucocorticoids, mineralocorticoids and sex hormones."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "T3 and T4 are classified as amino acid derivatives of hormones.",
    answer: true,
    explanation: "Thyroxine (T4) and triiodothyronine (T3) are amino acid derivatives."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "Group I hormones are lipophilic and bind to intracellular receptors, forming receptor-hormone complexes that mediate biochemical functions.",
    answer: true,
    explanation: "Group I hormones are lipophilic, bind to intracellular receptors, and form complexes that mediate their actions."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "Group II hormones bind to cell surface receptors and stimulate the release of second messengers such as cAMP.",
    answer: true,
    explanation: "Group II hormones bind to plasma membrane receptors and stimulate second messenger release (e.g., cAMP) to perform biochemical functions."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "In Group II hormone action, the hormone itself is referred to as the second messenger.",
    answer: false,
    explanation: "The hormone is the first messenger; the released molecule (e.g., cAMP) is the second messenger."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "Examples of hormones that use cAMP as a second messenger include ACTH, FSH, LH, PTH, glucagon and calcitonin.",
    answer: true,
    explanation: "These hormones utilize cAMP as their second messenger according to the uploaded materials."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "G proteins are also known as guanine nucleotide-binding proteins and act as molecular switches inside cells.",
    answer: true,
    explanation: "G proteins act as molecular switches, regulated by their ability to bind to and hydrolyze GTP to GDP."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "When G proteins are bound to GDP, they are in the 'on' state.",
    answer: false,
    explanation: "When bound to GTP they are 'on'; when bound to GDP they are 'off'."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "G protein-coupled receptors (GPCRs) are also known as seven-transmembrane domain receptors.",
    answer: true,
    explanation: "GPCRs are also called seven-(pass)-transmembrane domain receptors, 7TM receptors, heptahelical receptors, or serpentine receptors."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "General Endocrinology",
    type: "truefalse",
    question: "Adenylyl cyclase catalyzes the conversion of ATP to 3',5'-cyclic AMP (cAMP) and pyrophosphate.",
    answer: true,
    explanation: "Adenylyl cyclase (adenylate cyclase) catalyzes this conversion, with magnesium ions generally required."
  },

  // SECTION 2: Adrenal Gland Anatomy & Zonation
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Gland Anatomy",
    type: "truefalse",
    question: "The adrenal glands are located on top of the kidneys, hence the name 'suprarenal.'",
    answer: true,
    explanation: "'Suprarenal' means on top of the kidney, describing the location of the adrenal glands."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Gland Anatomy",
    type: "truefalse",
    question: "Each adrenal gland is actually two endocrine glands: the adrenal cortex and adrenal medulla.",
    answer: true,
    explanation: "The adrenal gland consists of an outer cortex and inner medulla, which are two distinct endocrine glands producing unrelated chemicals."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Gland Anatomy",
    type: "truefalse",
    question: "The adrenal cortex secretes lipid-based steroid hormones collectively called 'corticosteroids.'",
    answer: true,
    explanation: "The adrenal cortex secretes steroid hormones called corticosteroids, derived from 'cortico' as in cortex."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Gland Anatomy",
    type: "truefalse",
    question: "The adrenal medulla secretes mineralocorticoids and glucocorticoids.",
    answer: false,
    explanation: "The adrenal medulla secretes epinephrine and norepinephrine, not mineralocorticoids or glucocorticoids (which are secreted by the adrenal cortex)."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Gland Anatomy",
    type: "truefalse",
    question: "The zona glomerulosa is the outer layer of the adrenal cortex and is responsible for mineralocorticoid production.",
    answer: true,
    explanation: "The zona glomerulosa is the outermost layer and functions as the 'mineralocorticoid factory,' producing aldosterone."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Gland Anatomy",
    type: "truefalse",
    question: "The zona fasciculata comprises approximately 75-80% of the adrenal cortex.",
    answer: true,
    explanation: "The zona fasciculata is the largest portion of the cortex, making up 75-80% of it."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Gland Anatomy",
    type: "truefalse",
    question: "The zona fasciculata contains cells arranged in ovoid clusters called glomeruli.",
    answer: false,
    explanation: "The zona fasciculata is composed of lipid-rich 'clear cells' arranged in parallel cords (fascicles), not ovoid clusters (which characterize the zona glomerulosa)."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Gland Anatomy",
    type: "truefalse",
    question: "Aldosterone synthase (CYP11B2) is the key enzyme in the zona glomerulosa that produces aldosterone.",
    answer: true,
    explanation: "Aldosterone synthase (CYP11B2) is expressed in the zona glomerulosa and synthesizes aldosterone."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Gland Anatomy",
    type: "truefalse",
    question: "The zona glomerulosa expresses 17α-hydroxylase to produce glucocorticoids.",
    answer: false,
    explanation: "The zona glomerulosa lacks 17α-hydroxylase, which prevents glucocorticoid synthesis in this layer."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Gland Anatomy",
    type: "truefalse",
    question: "The adrenal cortex comprises about 80% of the adrenal gland mass.",
    answer: true,
    explanation: "The adrenal cortex comprises 80% of the glandular mass."
  },

  // SECTION 3: Glucocorticoids (Cortisol)
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Cortisol is the most abundant glucocorticoid and is also called hydrocortisone.",
    answer: true,
    explanation: "The most abundant glucocorticoid is cortisol or hydrocortisone."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Glucocorticoids stimulate gluconeogenesis in the liver, especially the conversion of fats and proteins to glucose.",
    answer: true,
    explanation: "Glucocorticoids raise blood glucose by stimulating gluconeogenesis, particularly converting fats and proteins to glucose."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Glucocorticoids promote the breakdown of fat and protein, thus acting as anabolic steroids.",
    answer: false,
    explanation: "Glucocorticoids favor breakdown of fat and protein (catabolic), making them catabolic steroids, not anabolic."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Glucocorticoids have potent anti-inflammatory effects and are used in treating rheumatoid arthritis.",
    answer: true,
    explanation: "They have potent anti-inflammatory effects useful in rheumatoid arthritis, asthma, and preventing organ transplant rejection."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Glucocorticoids stimulate cell-mediated immune responses.",
    answer: false,
    explanation: "Glucocorticoids depress cell-mediated immune responses."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Glucocorticoids are used to control asthma.",
    answer: true,
    explanation: "They are used to control asthma as stated in the uploaded materials."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Cortisol stimulates protein synthesis in most peripheral tissues.",
    answer: false,
    explanation: "Glucocorticoids inhibit protein synthesis in most peripheral tissues, causing muscle wasting."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Glucocorticoids induce the enzyme PEPCK to increase hepatic glucose output.",
    answer: true,
    explanation: "They induce PEPCK, G6Pase, and pyruvate carboxylase in the liver to increase gluconeogenesis."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Glucocorticoids increase glucose uptake in peripheral tissues such as muscle and adipose tissue.",
    answer: false,
    explanation: "Glucocorticoids decrease glucose uptake in peripheral tissues, causing insulin resistance."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "The net effect of glucocorticoids on carbohydrate metabolism is hyperglycaemia.",
    answer: true,
    explanation: "The net effect is hyperglycaemia, which can lead to 'steroid diabetes' in Cushing's syndrome."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Glucocorticoids promote protein catabolism in muscle, skin, bone and lymphoid tissue.",
    answer: true,
    explanation: "They increase protein catabolism in these tissues, providing amino acids for gluconeogenesis."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Glucocorticoids increase lipolysis in peripheral fat depots while paradoxically increasing lipogenesis in central depots.",
    answer: true,
    explanation: "They increase lipolysis in limbs but increase lipogenesis in visceral, facial, and neck regions, leading to Cushingoid fat distribution."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Glucocorticoids inhibit phospholipase A2, thereby decreasing production of prostaglandins and leukotrienes.",
    answer: true,
    explanation: "They decrease phospholipase A2 activity, leading to decreased arachidonic acid and subsequent prostaglandins, leukotrienes, and thromboxanes."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Glucocorticoids increase NF-κB activity and cytokine production.",
    answer: false,
    explanation: "Glucocorticoids decrease NF-κB activity and decrease cytokine production (TNF-α, IL-1, IL-6, IL-12)."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Glucocorticoids decrease lymphocyte proliferation and function while increasing neutrophilia.",
    answer: true,
    explanation: "They suppress lymphocyte function, increase neutrophils, and decrease eosinophils."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Glucocorticoids increase osteoblast activity and decrease osteoclast activity.",
    answer: false,
    explanation: "They decrease osteoblast activity and increase osteoclast activity, leading to osteoporosis."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Glucocorticoids inhibit GH secretion and action, impairing growth in children.",
    answer: true,
    explanation: "They decrease growth hormone secretion and action, which impairs growth."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Glucocorticoids",
    type: "truefalse",
    question: "Chronic excess of glucocorticoids can cause depression and psychosis.",
    answer: true,
    explanation: "Excess glucocorticoids affect mood, cognition, and hippocampal function, potentially causing depression and psychosis."
  },

  // SECTION 4: Mineralocorticoids (Aldosterone)
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Mineralocorticoids",
    type: "truefalse",
    question: "Mineralocorticoids get their name from their effect on mineral metabolism.",
    answer: true,
    explanation: "They are named for their effects on mineral metabolism, particularly sodium and potassium."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Mineralocorticoids",
    type: "truefalse",
    question: "Aldosterone is the most important mineralocorticoid.",
    answer: true,
    explanation: "Aldosterone is the main mineralocorticoid."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Mineralocorticoids",
    type: "truefalse",
    question: "Aldosterone acts on the kidney to promote the reabsorption of sodium ions into the blood.",
    answer: true,
    explanation: "Aldosterone promotes sodium reabsorption in the kidney, helping maintain normal blood pressure."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Mineralocorticoids",
    type: "truefalse",
    question: "Aldosterone acts on sweat glands to increase the loss of sodium in perspiration.",
    answer: false,
    explanation: "Aldosterone reduces the loss of sodium in perspiration, not increases it."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Mineralocorticoids",
    type: "truefalse",
    question: "Aldosterone acts on taste cells to decrease sensitivity of taste buds to sodium.",
    answer: false,
    explanation: "Aldosterone increases the sensitivity of taste buds to sources of sodium."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Mineralocorticoids",
    type: "truefalse",
    question: "A drop in the level of sodium ions in the blood stimulates aldosterone secretion.",
    answer: true,
    explanation: "A drop in blood sodium ions stimulates aldosterone secretion."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Mineralocorticoids",
    type: "truefalse",
    question: "A rise in the level of potassium ions in the blood inhibits aldosterone secretion.",
    answer: false,
    explanation: "A rise in potassium ions stimulates aldosterone secretion."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Mineralocorticoids",
    type: "truefalse",
    question: "Angiotensin II stimulates aldosterone secretion.",
    answer: true,
    explanation: "Angiotensin II is one of the stimuli for aldosterone secretion."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Mineralocorticoids",
    type: "truefalse",
    question: "ACTH has a major stimulatory role in aldosterone biosynthesis.",
    answer: false,
    explanation: "ACTH has a minor, permissive stimulatory role in aldosterone production; the primary regulator is RAAS."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Mineralocorticoids",
    type: "truefalse",
    question: "Aldosterone increases expression of ENaC channels in the renal collecting duct principal cells.",
    answer: true,
    explanation: "Aldosterone increases epithelial Na⁺ channels (ENaC) expression, promoting apical Na⁺ entry."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Mineralocorticoids",
    type: "truefalse",
    question: "Aldosterone increases Na⁺/K⁺-ATPase expression on the basolateral membrane, promoting sodium exit into blood.",
    answer: true,
    explanation: "Aldosterone stimulates Na⁺/K⁺-ATPase, facilitating sodium reabsorption and potassium secretion."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Mineralocorticoids",
    type: "truefalse",
    question: "Aldosterone causes H⁺ secretion in type A intercalated cells, leading to metabolic alkalosis.",
    answer: true,
    explanation: "Aldosterone increases H⁺-ATPase activity in intercalated cells, promoting H⁺ secretion and causing metabolic alkalosis."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Mineralocorticoids",
    type: "truefalse",
    question: "The primary function of aldosterone is to regulate blood glucose levels.",
    answer: false,
    explanation: "The primary function of aldosterone is to regulate Na⁺ and K⁺ balance, controlling extracellular fluid volume and blood pressure."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Mineralocorticoids",
    type: "truefalse",
    question: "11β-HSD2 in the kidney converts cortisol to inactive cortisone to protect the mineralocorticoid receptor.",
    answer: true,
    explanation: "11β-HSD2 converts cortisol to cortisone, preventing cortisol from binding to mineralocorticoid receptors in normal conditions."
  },

  // SECTION 5: Adrenal Androgens
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Androgens",
    type: "truefalse",
    question: "The adrenal cortex secretes precursor to androgens such as testosterone.",
    answer: true,
    explanation: "The adrenal cortex produces androgen precursors, including DHEA which is converted to testosterone peripherally."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Androgens",
    type: "truefalse",
    question: "In sexually mature males, the adrenal cortex produces higher quantities of testosterone than the testis.",
    answer: false,
    explanation: "The adrenal cortex produces much lower quantities of testosterone than the testis in sexually mature males."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Androgens",
    type: "truefalse",
    question: "Excessive production of testosterone by the adrenal cortex can cause premature puberty in young boys.",
    answer: true,
    explanation: "Hypersecretion of androgens by the adrenals can cause premature puberty in boys."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Androgens",
    type: "truefalse",
    question: "In females, the adrenal cortex is a major source of androgens.",
    answer: true,
    explanation: "In females, the adrenal cortex is a major source of androgens."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Androgens",
    type: "truefalse",
    question: "Hypersecretion of androgens in females may produce a masculine pattern of body hair and cessation of menstruation.",
    answer: true,
    explanation: "Excess androgens in females can cause masculinization including male-pattern hair and amenorrhea."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Adrenal Androgens",
    type: "truefalse",
    question: "DHEA (Dehydroepiandrosterone) is the major adrenal androgen precursor.",
    answer: true,
    explanation: "DHEA is the major androgen precursor produced by the adrenal cortex."
  },

  // SECTION 6: Steroid Biosynthesis
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "The starting material for all adrenal cortex hormones is cholesterol.",
    answer: true,
    explanation: "Cells of the adrenal cortex secrete steroid hormones derived from cholesterol."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Production of all three classes of adrenal cortex hormones is triggered by the secretion of ACTH.",
    answer: true,
    explanation: "ACTH from the anterior pituitary triggers the production of glucocorticoids, mineralocorticoids and androgens."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Steroid hormones are hydrophilic and circulate freely in the blood without carrier proteins.",
    answer: false,
    explanation: "Steroid hormones are hydrophobic and travel bound to serum globulin."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Steroid hormones bind to receptors either on the surface and/or in the nucleus of target cells.",
    answer: true,
    explanation: "They bind to receptors in the surface and/or nucleus; the complex then forms a dimer that migrates to the nucleus."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "The hormone-receptor complex binds to specific hormone response elements (SHRE) in DNA.",
    answer: true,
    explanation: "The dimer migrates to the nucleus and binds to specific hormone response elements, switching them on or off."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Cholesterol is converted to pregnenolone by the enzyme cytochrome P450 side chain cleavage enzyme (P450scc).",
    answer: true,
    explanation: "Free cholesterol is transported to mitochondria and converted to pregnenolone by P450scc (CYP11A1)."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "The StAR (Steroidogenic Acute Regulatory) protein is the rate-limiting step in acute steroidogenesis.",
    answer: true,
    explanation: "StAR facilitates cholesterol movement from the outer to inner mitochondrial membrane, serving as the overarching control point."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Upon stimulation by ACTH, free cholesterol is liberated from cholesterol esters and transported to the mitochondrion.",
    answer: true,
    explanation: "ACTH activates an esterase, liberating free cholesterol from CE; StAR protein then transports it to mitochondria."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Synthesis of mineralocorticoids occurs in the zona fasciculata.",
    answer: false,
    explanation: "Synthesis of mineralocorticoids occurs in the zona glomerulosa."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Pregnenolone is converted to progesterone in a reaction catalyzed by smooth ER enzymes including 3β-hydroxysteroid dehydrogenase.",
    answer: true,
    explanation: "Pregnenolone is converted to progesterone by smooth ER enzymes, including 3β-HSD."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Progesterone is hydroxylated at the C21 position to form 11-deoxycorticosterone, catalyzed by 21-hydroxylase.",
    answer: true,
    explanation: "21-Hydroxylase (smooth ER enzyme) catalyzes the hydroxylation of progesterone at C21 to form 11-deoxycorticosterone."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "11-Deoxycorticosterone undergoes C11 hydroxylation to form corticosterone, catalyzed by 11β-hydroxylase.",
    answer: true,
    explanation: "11β-Hydroxylase (mitochondrial enzyme) catalyzes this conversion."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Corticosterone is converted to aldosterone by the enzyme 18-hydroxylase alone.",
    answer: false,
    explanation: "Corticosterone is acted upon by 18-hydroxylase to form 18-OH corticosterone, and then by 18-hydroxydehydrogenase to form aldosterone."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Three hydroxylases are involved in glucocorticoid synthesis: 17α-hydroxylase, 21-hydroxylase and 11β-hydroxylase.",
    answer: true,
    explanation: "These three enzymes act on C17, C21 and C11 of pregnenolone in the synthesis of cortisol."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "In the final step of glucocorticoid synthesis, 11-deoxycortisol is converted to cortisol.",
    answer: true,
    explanation: "11-Deoxycortisol is converted to cortisol (hydrocortisone), the most potent natural glucocorticoid."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "17,20-Lyase acts on 17-OH pregnenolone to form DHEA.",
    answer: true,
    explanation: "17,20-Lyase converts 17-OH pregnenolone to DHEA (dehydroepiandrosterone)."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "DHEA is converted to androstenedione by the action of 3β-HSD and 5,4-isomerase.",
    answer: true,
    explanation: "These enzymes convert DHEA to androstenedione."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Androstenedione is converted to testosterone by the enzyme 17β-hydroxysteroid dehydrogenase.",
    answer: true,
    explanation: "17β-HSD converts androstenedione to testosterone in the final step."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Testosterone metabolism occurs in two pathways: oxidation at C17 to form 17-ketosteroids, and reduction of the A ring to form DHT.",
    answer: true,
    explanation: "Testosterone is metabolized via C17 oxidation (forming less active 17-ketosteroids) or A-ring reduction (forming more potent DHT)."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "DHT (dihydrotestosterone) is a less potent metabolite of testosterone.",
    answer: false,
    explanation: "DHT is a potent metabolite, more potent than testosterone. The question states 'less potent' which is incorrect."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Plasma level of DHT in adult males is about one-tenth of total testosterone concentration.",
    answer: true,
    explanation: "Plasma DHT in adult males is about one-tenth of total testosterone concentration."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Steroid-secreting cells have abundant rough endoplasmic reticulum.",
    answer: false,
    explanation: "Steroid-secreting cells have abundant smooth ER, as opposed to rough ER in protein-secreting cells."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Steroids are released from cells by exocytosis.",
    answer: false,
    explanation: "Steroids directly diffuse across the plasma membrane; they are not released by exocytosis."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Steroid-secreting cells contain abundant lipid droplets which serve as raw material for steroid synthesis.",
    answer: true,
    explanation: "Abundant lipid droplets store cholesterol esters as raw material for steroids."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Steroid Biosynthesis",
    type: "truefalse",
    question: "Approximately 80% of cholesterol for steroidogenesis comes from de novo synthesis within the adrenal cortex.",
    answer: false,
    explanation: "Approximately 80% of cholesterol is derived from exogenous uptake via LDL receptor-mediated endocytosis; only 20% from de novo synthesis."
  },

  // SECTION 7: HPA Axis Regulation
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "HPA Axis Regulation",
    type: "truefalse",
    question: "The HPA axis stands for Hypothalamic-Pituitary-Adrenal axis.",
    answer: true,
    explanation: "HPA axis is the master regulatory system for cortisol, involving the hypothalamus, pituitary, and adrenal cortex."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "HPA Axis Regulation",
    type: "truefalse",
    question: "With stress, the hypothalamus sends corticotropin releasing hormone (CRH) to the posterior pituitary.",
    answer: false,
    explanation: "CRH is sent to the anterior pituitary (adenohypophysis), not the posterior pituitary."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "HPA Axis Regulation",
    type: "truefalse",
    question: "CRH stimulates the anterior pituitary to secrete ACTH.",
    answer: true,
    explanation: "CRH stimulates corticotroph cells in the anterior pituitary to release ACTH."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "HPA Axis Regulation",
    type: "truefalse",
    question: "ACTH binds to the MC2R receptor on adrenal cells, activating the Gs protein and increasing cAMP.",
    answer: true,
    explanation: "ACTH binds to melanocortin-2 receptor (MC2R) on adrenal cells, activating Gs → ↑cAMP → PKA activation."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "HPA Axis Regulation",
    type: "truefalse",
    question: "PKA phosphorylates StAR protein as an acute effect, occurring within hours to days.",
    answer: false,
    explanation: "PKA phosphorylates StAR as an acute effect (minutes), not hours to days. Transcription factor effects are chronic (hours-days)."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "HPA Axis Regulation",
    type: "truefalse",
    question: "Cortisol inhibits both the hypothalamus (↓CRH) and anterior pituitary (↓ACTH) through negative feedback.",
    answer: true,
    explanation: "Cortisol exerts negative feedback on both the hypothalamus and pituitary, with fast and delayed feedback."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "HPA Axis Regulation",
    type: "truefalse",
    question: "The circadian rhythm of cortisol secretion shows a peak at approximately 8 AM and a nadir at midnight.",
    answer: true,
    explanation: "CRH/ACTH/cortisol levels peak at ~8 AM and reach their nadir at midnight."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "HPA Axis Regulation",
    type: "truefalse",
    question: "The stress response does not override the negative feedback of cortisol.",
    answer: false,
    explanation: "The stress response overrides negative feedback, which is essential for survival."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "HPA Axis Regulation",
    type: "truefalse",
    question: "The Dexamethasone Suppression Test exploits the negative feedback of cortisol; failure of suppression suggests hypercortisolism (Cushing's).",
    answer: true,
    explanation: "This test uses synthetic dexamethasone to suppress cortisol; failure indicates Cushing's syndrome."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "HPA Axis Regulation",
    type: "truefalse",
    question: "ACTH has trophic effects including increasing adrenal gland mass, blood flow and cholesterol uptake.",
    answer: true,
    explanation: "ACTH has trophic effects beyond steroidogenesis, including adrenal growth, increased blood flow, and cholesterol uptake."
  },

  // SECTION 8: RAAS Regulation
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "RAAS Regulation",
    type: "truefalse",
    question: "The RAAS system stands for Renin-Angiotensin-Aldosterone System.",
    answer: true,
    explanation: "RAAS is the primary regulator of aldosterone biosynthesis."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "RAAS Regulation",
    type: "truefalse",
    question: "A decrease in blood pressure or sodium stimulates juxtaglomerular cells to release renin.",
    answer: true,
    explanation: "↓BP/↓Na⁺/↑K⁺ trigger renin release from juxtaglomerular cells."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "RAAS Regulation",
    type: "truefalse",
    question: "Renin cleaves angiotensinogen to form angiotensin II directly.",
    answer: false,
    explanation: "Renin cleaves angiotensinogen to form angiotensin I (inactive, 10 aa); ACE then converts it to angiotensin II."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "RAAS Regulation",
    type: "truefalse",
    question: "Angiotensin-converting enzyme (ACE) is found primarily in the liver.",
    answer: false,
    explanation: "ACE is found primarily in the lung, where it converts angiotensin I to angiotensin II."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "RAAS Regulation",
    type: "truefalse",
    question: "Angiotensin II binds to AT1R on the zona glomerulosa, increasing IP3/DAG/Ca²⁺ and aldosterone synthase.",
    answer: true,
    explanation: "Angiotensin II binds AT1R → ↑IP3/DAG/Ca²⁺ → ↑CYP11B2 → ↑Aldosterone."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "RAAS Regulation",
    type: "truefalse",
    question: "Plasma potassium is a minor regulator of aldosterone secretion.",
    answer: false,
    explanation: "Plasma K⁺ is the second major regulator of aldosterone; hyperkalaemia directly depolarises zona glomerulosa cells."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "RAAS Regulation",
    type: "truefalse",
    question: "Atrial Natriuretic Peptide (ANP) inhibits aldosterone release.",
    answer: true,
    explanation: "ANP is a counter-regulatory hormone that inhibits aldosterone secretion."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "RAAS Regulation",
    type: "truefalse",
    question: "Sodium retention due to aldosterone leads to volume expansion, which increases renin release.",
    answer: false,
    explanation: "Volume expansion decreases renin release (negative feedback), thereby decreasing aldosterone indirectly."
  },

  // SECTION 9: Clinical Correlations
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Primary hyperaldosteronism is a disease in which one or both adrenal glands produce too much aldosterone.",
    answer: true,
    explanation: "Primary hyperaldosteronism is caused by a problem in the adrenal glands leading to excess aldosterone."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Secondary hyperaldosteronism is caused by problems outside the adrenal glands.",
    answer: true,
    explanation: "Secondary hyperaldosteronism results from problems outside the adrenal glands."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "The most common cause of primary hyperaldosteronism is bilateral adrenal gland hyperplasia (2/3 of cases).",
    answer: false,
    explanation: "Unilateral adrenal gland adenoma accounts for 2/3 of cases; bilateral hyperplasia accounts for 1/3."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Unilateral adrenocortical carcinoma is the most common cause of primary hyperaldosteronism.",
    answer: false,
    explanation: "Unilateral adrenocortical carcinoma accounts for <1% of cases, making it less common."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Primary hyperaldosteronism is associated with hypertension, hypokalemia and metabolic alkalosis.",
    answer: true,
    explanation: "Conn's syndrome features hypertension, hypokalemia and metabolic alkalosis with low renin."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Cushing's syndrome is caused by hypersecretion of adrenal hormones, especially glucocorticoids.",
    answer: true,
    explanation: "Cushing's syndrome results from excess glucocorticoids."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Cushing's syndrome is most commonly caused by an ACTH-secreting pituitary tumor.",
    answer: true,
    explanation: "It is usually caused by an ACTH-secreting pituitary tumor, less commonly by adrenal tumor."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Cushing's disease specifically refers to exogenous steroid use causing Cushing's syndrome.",
    answer: false,
    explanation: "Cushing's DISEASE specifically refers to a pituitary adenoma (ACTH-dependent); exogenous steroids cause Cushing's SYNDROME."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Cushing's syndrome features include central obesity, moon face, buffalo hump, and striae.",
    answer: true,
    explanation: "These are classic features of Cushing's syndrome."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Cushing's syndrome is associated with hypoglycemia.",
    answer: false,
    explanation: "Cushing's is associated with hyperglycaemia, not hypoglycemia."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Addison's disease is characterized by hypersecretion of the adrenal cortex.",
    answer: false,
    explanation: "Addison's disease is hyposecretion (under secretion) of the adrenal cortex."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Addison's disease usually involves both cortisol and aldosterone deficiency.",
    answer: true,
    explanation: "Hyposecretion usually involves both cortisol and aldosterone."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Features of Addison's disease include low blood glucose, low sodium, severe dehydration, fatigue and loss of appetite.",
    answer: true,
    explanation: "These are the clinical features described for Addison's disease."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Addison's disease causes hyperpigmentation due to decreased ACTH and α-MSH activity.",
    answer: false,
    explanation: "Hyperpigmentation occurs due to excess ACTH, which accompanies increased α-MSH activity (both from POMC), stimulating melanocytes."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Primary adrenal insufficiency results in complete hormone deficiency and is called Addison's disease.",
    answer: true,
    explanation: "Destruction of the adrenal cortex causes primary adrenal insufficiency (Addison's disease)."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "The most common cause of congenital adrenal hyperplasia is 21-hydroxylase deficiency.",
    answer: true,
    explanation: "21-Hydroxylase deficiency accounts for over 95% of CAH cases."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "In 21-hydroxylase deficiency, cortisol and aldosterone synthesis is increased.",
    answer: false,
    explanation: "Cortisol and aldosterone cannot be synthesized; precursors are shunted to the androgen pathway."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Loss of negative feedback in 21-hydroxylase deficiency leads to massive ACTH production.",
    answer: true,
    explanation: "Without cortisol, negative feedback is lost, causing massive ACTH."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "21-Hydroxylase deficiency results in salt-wasting and virilization.",
    answer: true,
    explanation: "Aldosterone deficiency causes salt-wasting; androgen excess causes virilization."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Hypoparathyroidism causes hypercalcemia.",
    answer: false,
    explanation: "Hypoparathyroidism causes hypocalcemia, not hypercalcemia."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Tetany, muscle cramps, and positive Chvostek's and Trousseau's signs are features of hypocalcemia.",
    answer: true,
    explanation: "These are manifestations of hypocalcemia seen in hypoparathyroidism."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Primary hyperparathyroidism features include hypercalcemia, hypophosphatemia, bone resorption and kidney stones.",
    answer: true,
    explanation: "These are classic features of primary hyperparathyroidism."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Clinical Correlations - Adrenal",
    type: "truefalse",
    question: "Pseudohypoparathyroidism is characterized by target tissue resistance to PTH with high PTH and low calcium.",
    answer: true,
    explanation: "Target tissues are resistant to PTH, leading to high PTH, low calcium, and high phosphate."
  },

  // SECTION 10: Gastrointestinal Hormones
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "GI hormones are secreted by a system of specialized cells lining the GIT.",
    answer: true,
    explanation: "GI hormones are polypeptide hormones secreted by specialized cells lining the gastrointestinal tract."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "GI hormones are classified as steroid hormones.",
    answer: false,
    explanation: "GI hormones are polypeptide hormones, not steroids."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "The four best characterized GI hormones are Gastrin, Secretin, Cholecystokinin, and Gastric Inhibitory Peptide.",
    answer: true,
    explanation: "These are the four best-characterized GI hormones."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "Gastrin has 27 amino acid residues.",
    answer: false,
    explanation: "Gastrin has 17 amino acid residues, not 27."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "Gastrin is produced by the gastric mucosa and stimulates gastric secretion of HCl and pepsinogen.",
    answer: true,
    explanation: "Gastrin is produced by gastric mucosa and stimulates HCl and pepsinogen secretion."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "Gastrin release is inhibited by the presence of amino acids and partially digested protein.",
    answer: false,
    explanation: "Gastrin release is stimulated by amino acids and partially digested protein, not inhibited."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "Gastrin release is stimulated by the vagus nerve in response to stomach distension.",
    answer: true,
    explanation: "The vagus nerve stimulates gastrin release in response to stomach distension."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "Gastrin release is inhibited by HCl and other GI hormones.",
    answer: true,
    explanation: "HCl and other GI hormones inhibit gastrin release."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "Secretin has 17 amino acid residues.",
    answer: false,
    explanation: "Secretin has 27 amino acid residues."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "Secretin is produced by the mucosa of the duodenum in response to acidification by gastric HCl.",
    answer: true,
    explanation: "Duodenal mucosa produces secretin in response to HCl acidification."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "Secretin stimulates pancreatic secretion of HCO₃⁻ to neutralize HCl.",
    answer: true,
    explanation: "Secretin stimulates pancreatic bicarbonate secretion for neutralization of gastric acid."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "Cholecystokinin (CCK) has 42 amino acid residues.",
    answer: false,
    explanation: "CCK has 8 amino acid residues."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "CCK is produced by the duodenum and stimulates gall bladder emptying.",
    answer: true,
    explanation: "CCK is produced by the duodenum and stimulates gallbladder emptying."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "CCK stimulates pancreatic secretion of digestive enzymes and HCO₃⁻, thus enhancing the effect of secretin.",
    answer: true,
    explanation: "CCK stimulates pancreatic enzymes and bicarbonate, enhancing secretin's effect."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "CCK stimulates gastric emptying.",
    answer: false,
    explanation: "CCK inhibits gastric emptying."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "CCK is released in response to products of carbohydrate digestion.",
    answer: false,
    explanation: "CCK is released in response to products of lipid and protein digestion."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "GIP stands for Gastric Inhibitory Peptide and has 42 amino acid residues.",
    answer: true,
    explanation: "GIP (also known as Glucose-dependent insulinotropic polypeptide) has 42 amino acid residues."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "GIP is produced by specialized cells lining the large intestine.",
    answer: false,
    explanation: "GIP is produced by specialized cells lining the small intestine."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "GIP is a potent inhibitor of gastric acid secretion, gastric motility and gastric emptying.",
    answer: true,
    explanation: "GIP inhibits these gastric functions."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "The major physiological role of GIP is to stimulate pancreatic insulin release.",
    answer: true,
    explanation: "Its major role is insulin release, stimulated by glucose in the GIT."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Gastrointestinal Hormones",
    type: "truefalse",
    question: "GIP release is stimulated by the presence of proteins in the GIT.",
    answer: false,
    explanation: "GIP release is stimulated by the presence of glucose in the GIT."
  },

  // SECTION 11: Pancreatic Hormones
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "The pancreas is located in the curve of the duodenum.",
    answer: true,
    explanation: "The pancreas is located in the curve of the duodenum."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "The pancreas secretes enzymes involved in digestion through its endocrine function.",
    answer: false,
    explanation: "Secretion of digestive enzymes is an exocrine function, not endocrine."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "The endocrine roles of the pancreas include maintaining a constant blood glucose level.",
    answer: true,
    explanation: "Endocrine pancreas maintains blood glucose and facilitates cellular storage of foodstuffs."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "There are approximately 1 to 2 million islets in the normal human pancreas, comprising 1-2% of pancreatic tissue.",
    answer: true,
    explanation: "The normal pancreas contains ~1-2 million islets, only 1-2% of tissue."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "Alpha cells in the pancreatic islets produce insulin.",
    answer: false,
    explanation: "Alpha cells produce glucagon; beta cells produce insulin."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "Beta cells in the pancreatic islets comprise 60-85% of islet cells and produce insulin.",
    answer: true,
    explanation: "Beta cells are the most abundant (60-85%) and produce insulin."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "Delta cells produce somatostatin and comprise 3-10% of islet cells.",
    answer: true,
    explanation: "Delta cells (D cells) produce somatostatin (3-10%)."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "F cells (PP cells) produce pancreatic polypeptide and comprise 15-20% of islet cells.",
    answer: false,
    explanation: "F cells (3-5%) produce pancreatic polypeptide; alpha cells (15-20%) produce glucagon."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "Epsilon cells produce ghrelin and comprise less than 1% of islet cells.",
    answer: true,
    explanation: "Epsilon cells produce ghrelin (<1%)."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "Insulin directly lowers blood glucose levels.",
    answer: true,
    explanation: "Insulin directly lowers blood glucose."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "Absolute insulin deficiency results in unrestrained glucose production, lipolysis, ketogenesis, proteolysis and death.",
    answer: true,
    explanation: "These are the consequences of absolute insulin deficiency."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "Insulin excess can result in hyperglycemia, brain failure and death.",
    answer: false,
    explanation: "Insulin excess results in hypoglycemia, not hyperglycemia."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "Prevention of hypoglycemia during fasting is solely due to decreased insulin secretion.",
    answer: false,
    explanation: "It is due to both decreased insulin and increased glucagon; adrenal catecholamines become important when glucagon is deficient."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "Secretion of insulin and glucagon are controlled by negative feedback.",
    answer: true,
    explanation: "Negative feedback controls secretion of these pancreatic hormones."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "In Type 1 diabetes mellitus, there is a decrease in the number of insulin-containing beta cells, possibly caused by a virus.",
    answer: true,
    explanation: "T1DM involves beta cell loss, potentially viral in etiology."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Pancreatic Hormones",
    type: "truefalse",
    question: "Type 2 diabetics have below normal levels of insulin.",
    answer: false,
    explanation: "Type 2 diabetics have above normal levels of insulin but exhibit insulin resistance."
  },

  // SECTION 12: Reproductive Hormones - Male
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "Gonads are the primary reproductive organs that produce gametes.",
    answer: true,
    explanation: "Gonads (testes in males, ovaries in females) produce gametes."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "The testes secrete male sex hormones collectively called androgens.",
    answer: true,
    explanation: "Testes secrete androgens, including testosterone, DHT, androstenedione, and small amounts of estrogen and progesterone."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "Testosterone is a C21 steroid.",
    answer: false,
    explanation: "Testosterone is a C19 steroid."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "In many target tissues, testosterone is converted into dihydrotestosterone.",
    answer: true,
    explanation: "Testosterone is converted to DHT in target tissues."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "Testosterone is responsible for sex differentiation in the fetus.",
    answer: true,
    explanation: "Sex chromosomes determine sex, but testosterone is responsible for sex differentiation of the fetus."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "The fetus has two genital ducts: the Müllerian duct (male) and the Wolffian duct (female).",
    answer: false,
    explanation: "The Müllerian duct gives rise to female organs; the Wolffian duct gives rise to male organs. The pairing stated is reversed."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "If testosterone is secreted from the genital ridge at about the 7th week of intrauterine life, the Müllerian duct system disappears and male organs develop from the Wolffian duct.",
    answer: true,
    explanation: "Testosterone secretion at ~7th week leads to Müllerian regression and Wolffian duct development."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "Testosterone is necessary for the descent of testes into the scrotum.",
    answer: true,
    explanation: "Testosterone is necessary for testicular descent; cryptorchidism occurs when this fails."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "Cryptorchidism is a congenital disorder characterized by failure of one or both testes to descend from the abdomen into the scrotum.",
    answer: true,
    explanation: "Cryptorchidism refers to undescended testes."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "Testosterone has no effect on spermatogenesis.",
    answer: false,
    explanation: "Testosterone is necessary for spermatogenesis."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "Testosterone causes broadening of the shoulders and a specific effect on the pelvis, making it funnel-shaped in males.",
    answer: true,
    explanation: "Testosterone broadens shoulders and gives a funnel-shaped pelvis in males (contrasted with the round/oval female pelvis)."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "Testosterone decreases the thickness of skin and reduces ruggedness of subcutaneous tissue.",
    answer: false,
    explanation: "Testosterone increases skin thickness and ruggedness of subcutaneous tissue."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "Hypergonadism in males is mainly due to tumor of Sertoli cells.",
    answer: false,
    explanation: "Hypergonadism in males is mainly due to tumor of Leydig cells."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "Hypergonadism in prepubertal boys causes precocious pseudopuberty with rapid growth of musculature and bones.",
    answer: true,
    explanation: "Leydig cell tumors in prepubertal boys cause precocious pseudopuberty."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "Tumors causing hypergonadism may secrete estrogenic hormones causing gynecomastia.",
    answer: true,
    explanation: "Some tumors secrete estrogenic hormones leading to gynecomastia (breast enlargement)."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "Hypogonadism in males can be caused by cryptorchidism associated with partial or total degeneration of testes.",
    answer: true,
    explanation: "Cryptorchidism is a cause of hypogonadism."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Male",
    type: "truefalse",
    question: "Absence of androgen receptors in testes is a cause of hypogonadism.",
    answer: true,
    explanation: "Androgen receptor absence leads to hypogonadism."
  },

  // SECTION 13: Reproductive Hormones - Female
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Ovaries secrete estrogen, progesterone, inhibin, relaxin, and small quantities of androgens.",
    answer: true,
    explanation: "Ovaries secrete these hormones."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "In a normal non-pregnant woman, estrogen is secreted in large quantity by the corpus luteum and in small quantity by ovarian follicles.",
    answer: false,
    explanation: "Estrogen is secreted in large quantity by ovarian follicles and in small quantity by corpus luteum."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "The three forms of estrogen in plasma are β-estradiol, estrone, and estriol.",
    answer: true,
    explanation: "These are the three forms of estrogen in plasma."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "The major function of estrogen is to promote cellular proliferation and tissue growth in sexual organs.",
    answer: true,
    explanation: "Estrogen promotes cellular proliferation and tissue growth."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Estrogen decreases the blood supply to the endometrium.",
    answer: false,
    explanation: "Estrogen increases blood supply to the endometrium."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Estrogen decreases the sensitivity of uterine muscles to oxytocin.",
    answer: false,
    explanation: "Estrogen increases the sensitivity of uterine muscles to oxytocin."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Estrogen increases the activity of cilia in fallopian tubes, facilitating ovum movement.",
    answer: true,
    explanation: "Estrogen increases ciliated epithelial cells and ciliary activity in fallopian tubes."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Estrogen increases the pH of the vagina, making it more alkaline.",
    answer: false,
    explanation: "Estrogen reduces vaginal pH, making it more acidic, which prevents certain vaginal infections."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Estrogen is responsible for the development of female secondary sexual characters including soft smooth skin, narrow shoulders, broad hips, and high-pitched voice.",
    answer: true,
    explanation: "These are estrogen-induced secondary sexual characteristics."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Estrogen increases osteoblastic activity and causes early fusion of the epiphysis, so females usually cease growth earlier than males.",
    answer: true,
    explanation: "Estrogen promotes bone growth but also early epiphyseal fusion."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Estrogen induces protein catabolism and reduces fat deposition.",
    answer: false,
    explanation: "Estrogen induces protein anabolism and causes fat deposition in subcutaneous tissues, breasts, buttocks and thighs."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Progesterone is a C21 steroid.",
    answer: true,
    explanation: "Progesterone is a C21 steroid."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "In a non-pregnant woman, a large quantity of progesterone is secreted during the follicular phase.",
    answer: false,
    explanation: "Progesterone is secreted in small quantity during the follicular phase; large quantity is secreted during the secretory/luteal phase by the corpus luteum."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "In a pregnant woman, the corpus luteum secretes large amounts of progesterone in the first trimester, and the placenta takes over in the second and third trimesters.",
    answer: true,
    explanation: "Corpus luteum secretes progesterone in first trimester; placenta takes over later."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Progesterone promotes the secretory activities of the fallopian tubes, providing nutrition for the fertilized ovum.",
    answer: true,
    explanation: "Progesterone promotes fallopian tube secretions necessary for ovum nutrition."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Progesterone promotes secretory activities of the uterine endometrium during the secretory phase and prepares the uterus for implantation.",
    answer: true,
    explanation: "Progesterone prepares the endometrium for implantation."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Progesterone increases the frequency of uterine contractions during pregnancy.",
    answer: false,
    explanation: "Progesterone decreases the frequency of uterine contractions during pregnancy, preventing expulsion of the implanted ovum."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Progesterone promotes the development of lobules and alveoli of mammary glands, making the breasts secretory.",
    answer: true,
    explanation: "Progesterone promotes lobule and alveoli development in mammary glands."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Progesterone inhibits LH release from the hypothalamus through feedback, which is utilized for its contraceptive action.",
    answer: true,
    explanation: "Progesterone inhibits LH release, used in contraception."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Progesterone has a thermogenic effect, increasing body temperature after ovulation.",
    answer: true,
    explanation: "Progesterone increases body temperature after ovulation."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Reproductive Hormones - Female",
    type: "truefalse",
    question: "Progesterone decreases the reabsorption of sodium and water from the renal tubules.",
    answer: false,
    explanation: "Progesterone increases sodium and water reabsorption from renal tubules."
  },

  // SECTION 14: Menstrual Cycle
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "The menstrual cycle occurs from puberty to menopause with a periodicity of approximately 28 days.",
    answer: true,
    explanation: "The menstrual cycle is a series of cyclic changes occurring with ~28-day periodicity from puberty to menopause."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "The menstrual cycle is also known as the ovarian cycle.",
    answer: false,
    explanation: "The menstrual cycle is also known as the endometrial cycle; the ovarian cycle refers to changes in the ovary."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "The menstrual cycle has three phases: menstrual, proliferative (follicular), and luteal (secretory).",
    answer: true,
    explanation: "These are the three phases of the menstrual cycle."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "Ovulation occurs on the 14th day of a 28-day menstrual cycle.",
    answer: true,
    explanation: "Ovulation occurs on day 14 under the influence of LH."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "The follicular phase extends from the 5th day until ovulation on the 14th day.",
    answer: true,
    explanation: "Follicular phase is from day 5 to day 14 (ovulation)."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "During the follicular phase, primordial follicles develop through primary, vesicular, and graafian follicle stages under the influence of FSH and LH.",
    answer: true,
    explanation: "FSH and LH stimulate follicular maturation through these stages."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "At puberty, both ovaries contain about 400,000 primordial follicles, and new ova are formed continuously during reproductive life.",
    answer: false,
    explanation: "All ova are formed before birth; no new ova are formed after birth."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "The graafian follicle is the matured ovarian follicle with a maturing ovum.",
    answer: true,
    explanation: "Graafian follicle is the matured follicle."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "Ovulation is the process by which the graafian follicle ruptures and discharges the ovum into the abdominal cavity, influenced by LH.",
    answer: true,
    explanation: "Ovulation is triggered by LH surge."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "The luteal phase extends between the 15th and 28th day of the menstrual cycle.",
    answer: true,
    explanation: "Luteal phase is from day 15 to day 28."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "The corpus luteum develops from the ruptured graafian follicle after release of the ovum and is a glandular yellow body.",
    answer: true,
    explanation: "The corpus luteum develops from the ruptured follicle."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "If the ovum is not fertilized, the corpus luteum degenerates into corpus luteum menstrualis, a process called luteolysis.",
    answer: true,
    explanation: "Luteolysis is the regression of the corpus luteum."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "If pregnancy occurs, the corpus luteum persists and transforms into corpus luteum of pregnancy, secreting hormones for the entire pregnancy.",
    answer: false,
    explanation: "It remains for 3-4 months, then the placenta takes over hormone secretion."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "The menstrual phase lasts for about 4 to 5 days with approximately 35 mL of blood and 35 mL of serous fluid expelled.",
    answer: true,
    explanation: "Normal menstruation involves ~35 mL blood and 35 mL serous fluid over 4-5 days."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "The proliferative phase corresponds to the luteal phase of the ovarian cycle.",
    answer: false,
    explanation: "The proliferative phase corresponds to the follicular phase of the ovarian cycle."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "During the proliferative phase, endometrial cells proliferate, epithelium reappears, and blood vessels appear under the influence of estrogen.",
    answer: true,
    explanation: "Estrogen drives endometrial proliferation."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "The hormones involved in regulating the menstrual cycle are GnRH, FSH, LH, estrogen, and progesterone.",
    answer: true,
    explanation: "These five hormones regulate the menstrual cycle."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "GnRH triggers cyclic changes by stimulating secretion of FSH and LH from the anterior pituitary.",
    answer: true,
    explanation: "GnRH stimulates FSH and LH release."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "FSH stimulates recruitment and growth of immature ovarian follicles.",
    answer: true,
    explanation: "FSH promotes follicular growth."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "LH triggers ovulation and sustains the corpus luteum; a large quantity of LH is important for ovulation.",
    answer: true,
    explanation: "LH surge triggers ovulation and maintains the corpus luteum."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "Estrogen secretion reaches its peak twice in each cycle: once during the follicular phase just before ovulation, and once during the luteal phase.",
    answer: true,
    explanation: "Estrogen has two peaks per cycle."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "Progesterone is present at high levels during the follicular phase prior to ovulation.",
    answer: false,
    explanation: "Progesterone is virtually absent during the follicular phase until prior to ovulation."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "During the last two days of the secretory phase, large quantities of progesterone and estrogen from the corpus luteum stimulate FSH and LH secretion.",
    answer: false,
    explanation: "They inhibit FSH and LH secretion, leading to corpus luteum regression and onset of menstruation."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "Amenorrhea is defined as decreased menstrual bleeding.",
    answer: false,
    explanation: "Amenorrhea is absence of menstruation; decreased bleeding is hypomenorrhea."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "Dysmenorrhea is menstruation with pain.",
    answer: true,
    explanation: "Dysmenorrhea refers to painful menstruation."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Menstrual Cycle",
    type: "truefalse",
    question: "Menorrhagia refers to increased frequency of menstruation.",
    answer: false,
    explanation: "Menorrhagia is excess menstrual bleeding; increased frequency is polymenorrhea."
  },

  // SECTION 15: Other Hormones & General Concepts
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "The pineal gland is attached to the roof of the third ventricle and secretes melatonin.",
    answer: true,
    explanation: "The pineal gland secretes melatonin and regulates the biological clock."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "The pineal gland secretes melatonin, which helps regulate the body's biological clock.",
    answer: true,
    explanation: "Melatonin regulates the biological clock."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "The thymus is located behind the sternum, between the lungs, and promotes maturation of B cells.",
    answer: false,
    explanation: "The thymus promotes maturation of T cells, not B cells."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "Thymic hormones include thymosin, thymic humoral factor, thymic factor, and thymopoietin.",
    answer: true,
    explanation: "These are the thymic hormones listed in the materials."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "Eicosanoids are locally-acting hormones derived from arachidonic acid.",
    answer: true,
    explanation: "Eicosanoids are locally-acting hormones derived from arachidonic acid."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "Growth factors stimulate cell growth and division and are involved in tissue development, growth and repair.",
    answer: true,
    explanation: "Growth factors stimulate cell growth and division."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "Eustress is harmful stress that may be damaging.",
    answer: false,
    explanation: "Eustress is helpful, everyday stress that prepares us to meet challenges; distress is harmful."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "The fight-or-flight response is the 2nd stage of the stress response.",
    answer: false,
    explanation: "The fight-or-flight response is the 1st stage of the stress response."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "The resistance reaction is the 2nd stage of the stress response and lasts longer than the fight-or-flight response.",
    answer: true,
    explanation: "The resistance reaction is the 2nd stage, lasting longer."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "Pituitary gigantism and acromegaly are caused by excess secretion of growth hormone.",
    answer: true,
    explanation: "Excess GH causes gigantism (in children) and acromegaly (in adults)."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "Goiter is caused by excess production of thyroid hormone.",
    answer: false,
    explanation: "Goiter is caused by a reduction in the production of thyroid hormone."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "Graves disease develops due to excess thyroid hormone and is associated with exophthalmos.",
    answer: true,
    explanation: "Graves disease involves excess thyroid hormone and exophthalmos."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "Cushing's syndrome is caused by excess secretion of glucocorticoids.",
    answer: true,
    explanation: "Cushing's is caused by glucocorticoid excess."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "Steroid hormones freely circulate in plasma without carrier proteins.",
    answer: false,
    explanation: "Steroid hormones are hydrophobic and require carrier proteins (serum globulin) for transport."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "Parathyroid hormone (PTH) is secreted by the chief cells of the parathyroid glands and is composed of 84 amino acids.",
    answer: true,
    explanation: "PTH is a polypeptide of 84 amino acids secreted by chief cells."
  },
  {
    course: "Biochemistry",
    topic: "Hormones",
    subTopic: "Other Hormones & Concepts",
    type: "truefalse",
    question: "PTH stimulates 1α-hydroxylase in the kidney, promoting formation of calcitriol, which increases intestinal calcium absorption.",
    answer: true,
    explanation: "PTH activates 1α-hydroxylase to produce calcitriol, increasing intestinal calcium absorption."
  }
];

