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
  // ===== PHYSIOLOGY – CELL PHYSIOLOGY & HOMEOSTASIS =====

  // SECTION 1: Cell Structure & Function
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
    // ===== EMBRYOLOGY – GENERAL EMBRYOLOGY =====

  // SECTION 1: General Embryology & Developmental Periods (1-50)
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Embryology is the study of development of an individual before birth, including the study of congenital anomalies that may develop from failure of normal development.",
    answer: true,
    explanation: "The definition states that embryology entails the study of development before birth and the congenital anomalies that may result from failure of normal development."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The time period from fertilization to death is called ontogeny.",
    answer: true,
    explanation: "Ontogeny is defined as the life cycle, which begins when an ovum is fertilized and ends at the moment of death of the individual."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Prenatal period extends from delivery of the fetus to death of the individual.",
    answer: false,
    explanation: "The prenatal period is from fertilization of an ovum to delivery of the fetus. The postnatal period is from delivery to death of the individual."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The goal of embryology consists of the study and description of events occurring during the postnatal period of development.",
    answer: false,
    explanation: "The goal of embryology consists of the study and description of events occurring during the prenatal period (phase) of development."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Gr. sperma means seed.",
    answer: true,
    explanation: "The Greek word 'sperma' translates to seed, as indicated in the lecture notes."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "A zygote is formed by the fusion of 1 sperm and 1 ovum, resulting in a single cell.",
    answer: true,
    explanation: "The zygote is defined as 1 sperm × 1 ovum = 1 cell, which is an embryo."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Spermatozoon is derived from L. spermatos meaning seed and zoon meaning animal.",
    answer: true,
    explanation: "The etymology of spermatozoon is from Latin: spermatos = seed; zoon = animal."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "A morula develops 4-6 days after fertilization and contains 12-32 blastomeres.",
    answer: false,
    explanation: "The morula develops 2-4 days after fertilization, not 4-6 days, and contains 12-32 blastomeres."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The blastocyst stage, occurring 4-6 days after fertilization, is characterized by a fluid-filled space and two layers called epiblast and hypoblast.",
    answer: true,
    explanation: "At 4-6 days after fertilization, the blastocyst has a fluid-filled space and consists of two layers: epiblast and hypoblast."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "By the 3rd week of development, the embryo has 3 layers of cells: ectoderm, mesoderm, and endoderm.",
    answer: true,
    explanation: "During the 3rd week of development, the trilaminar germ disc forms with three layers of cells: ectoderm, mesoderm, and endoderm."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The neurula stage occurs from the beginning of the 4th week to the end of the 8th week after fertilization.",
    answer: false,
    explanation: "The neurula stage occurs during the 3rd-4th week after fertilization. The embryo stage is from the beginning of the 4th week to the end of the 8th week."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The fetus stage extends from the 9th week to delivery of the fetus.",
    answer: true,
    explanation: "The fetal period begins from the 9th week and continues until delivery of the fetus."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Conceptus refers to the embryo plus the gestational sac.",
    answer: true,
    explanation: "Conceptus is defined as the embryo plus the gestational sac."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Mitotic divisions occur in germ cells while meiotic divisions occur in somatic cells.",
    answer: false,
    explanation: "Mitotic divisions occur in somatic cells, while meiotic divisions occur in germ cells."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Both male and female germ cells originate from primordial germ cells in the posterior wall of the yolk sac.",
    answer: true,
    explanation: "Both male and female germ cells have a common origin from primordial germ cells in the posterior wall of the yolk sac."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Primordial germ cells begin migrating by the 3rd week and reach the gonad by the 4th week.",
    answer: false,
    explanation: "Primordial germ cells start migrating by the 4th week and reach the gonad by the 5th week."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Meiosis I and Meiosis II both reduce the chromosome number from diploid to haploid.",
    answer: false,
    explanation: "Only Meiosis I reduces the chromosome number from diploid to haploid. Meiosis II is similar to mitosis and separates sister chromatids."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Leptotene is the stage of Prophase I where chromosomes become visible as single strands.",
    answer: true,
    explanation: "During Leptotene, chromosomes become visible as single strands."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Zygotene is characterized by crossing over of central chromatids of homologous chromosomes at chiasmata.",
    answer: false,
    explanation: "Zygotene is characterized by pairing of homologous chromosomes. Crossing over occurs during Pachytene."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Pachytene is the stage where crossing over of central chromatids of homologous chromosomes occurs at chiasmata with exchange of alleles.",
    answer: true,
    explanation: "During Pachytene, crossing over of central chromatids of homologous chromosomes occurs at chiasmata with exchange of alleles."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Diplotene is characterized by separation of homologous chromosomes with breaking away of a segment of the opposite chromosome.",
    answer: true,
    explanation: "Diplotene involves separation of homologous chromosomes with breaking away of a segment of the opposite chromosome."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Gametogenesis is the formation of gametes for asexual reproduction.",
    answer: false,
    explanation: "Gametogenesis is the formation of gametes for sexual reproduction."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Gametogenesis occurs in the gonads.",
    answer: true,
    explanation: "Gametogenesis occurs in the gonads (testes in males, ovaries in females)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Spermatogenesis is the formation of sperms in the testis.",
    answer: true,
    explanation: "In males, spermatogenesis is the formation of sperms in the testis."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Oogenesis is the formation of ova in the ovary.",
    answer: true,
    explanation: "In females, oogenesis is the formation of ova in the ovary."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Spermiogenesis involves the structural modification of spermatids.",
    answer: true,
    explanation: "Spermiogenesis is defined as the structural modification of spermatids."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Spermiogenesis involves 5 major events including cytoplasm shedding, nucleus condensation, formation of neck/middle piece/tail, and acrosome formation.",
    answer: false,
    explanation: "Spermiogenesis involves 4 events: 1) Cytoplasm shedding, 2) Nucleus condensation, 3) Formation of neck, middle piece & tail, and 4) Acrosome formation."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Normal gametes have 23 chromosomes: either 22X or 22Y.",
    answer: true,
    explanation: "Normal gametes contain 23 chromosomes (22X or 22Y)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Abnormal gametes can have 23X or 23Y (i.e., 24 chromosomes) or 21X or 21Y (i.e., 22 chromosomes).",
    answer: true,
    explanation: "Abnormal gametes may have 24 chromosomes (23X or 23Y) or 22 chromosomes (21X or 21Y)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Abnormal gametes are due to failure of separation of homologous chromosomes in anaphase II (non-disjunction).",
    answer: false,
    explanation: "Abnormal gametes are due to failure of separation of homologous chromosomes in anaphase I (non-disjunction)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The ovarian cycle is defined as regular monthly sexual changes in the ovary that begin at puberty and end at menopause.",
    answer: true,
    explanation: "The ovarian cycle is defined as regular monthly sexual changes in the ovary that begin at puberty and end at menopause."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The ovarian cycle has four phases: maturation of follicle, ovulation, post-ovulation follicular changes, and menstruation.",
    answer: false,
    explanation: "The ovarian cycle has three phases: 1) Maturation of follicle, 2) Ovulation, and 3) Post-ovulation follicular changes."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Ovulation typically occurs at mid-cycle, around day 14.",
    answer: true,
    explanation: "Ovulation is timed at mid-cycle (Day 14)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The LH surge causes the oocyte to complete meiosis I and begin meiosis II.",
    answer: true,
    explanation: "The LH surge causes maturation promoting factor which causes the oocyte to complete meiosis I and begin meiosis II."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "If fertilization occurs, the granulosa and theca cells form the corpus luteum of pregnancy which secretes estrogen.",
    answer: false,
    explanation: "If fertilization occurs, granulosa and theca cells form the corpus luteum of pregnancy which secretes progesterone, not estrogen."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "If fertilization does not occur, luteolysis (degeneration of corpus luteum) occurs and the corpus albicans forms.",
    answer: true,
    explanation: "If fertilization does not occur, luteolysis (degeneration of corpus luteum) occurs and the corpus albicans forms."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The site of fertilization is the dilated part of the uterine tube, termed the isthmus.",
    answer: false,
    explanation: "The site of fertilization is the dilated part of the uterine tube, termed the ampulla, not the isthmus."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Before fertilization can occur, two events must occur: coitus and gamete transport.",
    answer: true,
    explanation: "Before fertilization can occur, two events must occur: coitus and gamete transport."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The secondary oocyte reaches the fertilization site in approximately 25 minutes after ovulation.",
    answer: true,
    explanation: "The secondary oocyte reaches the fertilization site in approximately 25 minutes."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Fresh spermatozoa are immediately capable of fertilizing the oocyte upon arrival in the female genital tract.",
    answer: false,
    explanation: "Fresh spermatozoa, upon arrival in the female genital tract, are not capable of fertilizing the oocyte because they must undergo capacitation and the acrosome reaction."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Capacitation is an activation process lasting 7 hours.",
    answer: true,
    explanation: "Capacitation is an activation process lasting 7 hours."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Capacitation involves the removal of glycoprotein coat and seminal plasma protein from the plasma membrane over the acrosome.",
    answer: true,
    explanation: "Capacitation involves removal of glycoprotein coat and seminal plasma protein from the plasma membrane over the acrosome."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Capacitation is initiated by substances secreted by the cervix and vagina.",
    answer: false,
    explanation: "Capacitation is initiated by substances secreted by the uterus and fallopian tube, not the cervix and vagina."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Capacitation results in significant morphological alterations to the sperm.",
    answer: false,
    explanation: "Capacitation does not result in morphological alterations."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The acrosome reaction is induced by penetration of the zona pellucida.",
    answer: false,
    explanation: "The acrosome reaction is induced by penetration of the coronal radiata."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The acrosome reaction is accompanied by structural alterations, including multiple point fusions of the plasma membrane and the outer acrosomal membrane.",
    answer: true,
    explanation: "The acrosome reaction is accompanied by structural alterations - by multiple point fusions of plasma membrane and the outer acrosomal membrane."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Enzymes contained within the acrosome include hyaluronidase, trypsin-like substances, and acrosin.",
    answer: true,
    explanation: "The fused membranes rupture to produce multiple perforations through which enzymes contained within the acrosome escape: hyaluronidase, trypsin-like substances, and acrosin."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The phases of fertilization include penetration of corona radiata, penetration of zona pellucida, fusion of oocyte and sperm cell membranes, constitution of the male pronucleus, and fusion of the pronuclei.",
    answer: true,
    explanation: "The phases of fertilization are: 1) penetration of corona radiata, 2) penetration of zona pellucida, 3) fusion of oocyte and sperm cell membranes, 4) constitution of the male pronucleus, and 5) fusion of the pronuclei."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The main goal of penetration of the corona radiata is dispersal of corona radiata cells by enzyme hyaluronidase released from the acrosomal caps of spermatozoa.",
    answer: true,
    explanation: "The main goal of this phase is dispersal of corona radiata cells by enzyme hyaluronidase released from the acrosomal caps of spermatozoa."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The primary role in penetration of the zona pellucida is played by hyaluronidase.",
    answer: false,
    explanation: "The primary role in penetration of the zona pellucida is played by acrosin, not hyaluronidase. Acrosin causes lysis of the zone."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Once the first sperm passes through the zona pellucida, the zona reaction starts, making the zona pellucida impermeable to further spermatozoa.",
    answer: true,
    explanation: "Once the first sperm passes through the zona pellucida, a zona reaction starts during which the zona pellucida becomes impermeable to further spermatozoa."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The zona reaction is mediated by the cortical granules of the primary oocyte.",
    answer: false,
    explanation: "The zona reaction is mediated by cortical granules of the secondary oocyte, not the primary oocyte."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "After fusion of membranes, the secondary oocyte completes the second meiotic division to give rise to the mature ovum with a haploid number of chromosomes and the second polar body.",
    answer: true,
    explanation: "After fusion of membranes, the secondary oocyte can complete the second meiotic division to give rise to the mature ovum with haploid number of chromosomes and the second polar body."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The penetrating sperm's nucleus becomes rapidly swollen and forms the female pronucleus.",
    answer: false,
    explanation: "The penetrating sperm's nucleus becomes rapidly swollen and forms the male pronucleus, not the female pronucleus."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The male and female pronuclei lose their nuclear membranes and maternal and paternal chromosomes intermingle and organize in an equatorial plane.",
    answer: true,
    explanation: "The male and female pronuclei lose their nuclear membranes and maternal and paternal chromosomes intermingle and organize in an equatorial plane."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Results of fertilization include restoration of diploid number of chromosomes, determination of sex, and initiation of cleavage.",
    answer: true,
    explanation: "Results of fertilization include: 1) restoration of diploid number of chromosomes, 2) determination of the sex of the new individual, and 3) initiation of cleavage."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Fertilization results in a diploid chromosome number with half from the mother and half from the father.",
    answer: true,
    explanation: "Fertilization results in restoration of diploid number of chromosomes (half from the mother and half from the father)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "XX chromosomes determine male sex while XY determines female sex.",
    answer: false,
    explanation: "XX determines female and XY determines male sex."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "In Down syndrome, an abnormal sperm with 23Y (Extra Chromosome 21) fuses with a normal ovum 22X, resulting in Trisomy 21.",
    answer: true,
    explanation: "In Down syndrome, abnormal sperm with 23Y (Extra Chromosome 21) + normal ova 22X = Trisomy 21."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Edwards syndrome is characterized by Trisomy 21.",
    answer: false,
    explanation: "Edwards syndrome is characterized by Trisomy 18, not Trisomy 21. Down syndrome is Trisomy 21."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Edwards syndrome results from an abnormal sperm with 23Y (Extra Chromosome 18) fusing with a normal ovum 22X.",
    answer: true,
    explanation: "Edwards syndrome results from abnormal sperm with 23Y (Extra Chromosome 18) + 22X = Trisomy 18."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Klinefelter syndrome results from 22XY (Extra X) + 22X = 47 (XXY).",
    answer: true,
    explanation: "Klinefelter syndrome results from abnormal sperm 22XY (Extra X) + normal ova 22X = 47 (XXY)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Turner syndrome results from 22(0) (No sex chromosome) + 22X = 45(0X).",
    answer: true,
    explanation: "Turner syndrome results from abnormal sperm 22(0) (No sex chromosome) + normal ova 22X = 45(0X)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Cleavage is the phase of development characterized by meiotic divisions of the zygote resulting in formation of the blastocyst.",
    answer: false,
    explanation: "Cleavage is the phase of development characterized by mitotic divisions (not meiotic) of the zygote resulting in formation of the blastocyst."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Cells produced during cleavage are called blastomeres and become smaller with each division.",
    answer: true,
    explanation: "Cells produced during cleavage are called blastomeres and become smaller with each division."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Cleavage takes place partly in the uterine tube during the first three days and partly in the uterus from day 4 to 6.",
    answer: true,
    explanation: "Cleavage takes place partly in the uterine tube (during the first three days) and partly in the uterus (from day 4 to 6)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The first division of the zygote results in an 8-cell stage at 24-30 hours.",
    answer: false,
    explanation: "The first division results in a 2-cell stage at 24-30 hours. The third division results in an 8-cell stage."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "At the 2-cell and 4-cell stages, cells are loosely bound, but with the 3rd division compaction occurs producing tightly bound 8 cells.",
    answer: true,
    explanation: "2 and 4-cell stages have loosely bound cells. With the 3rd division, compaction occurs producing tightly bound 8 cells."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Cells become organized into inner cell mass (embryoblast) and outer cell mass (trophoblast) during compaction.",
    answer: true,
    explanation: "Cells become organized into inner cell mass (Embryoblast) and outer cell mass (Trophoblast)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The morula enters the uterine cavity where it is transformed into the blastocyst.",
    answer: true,
    explanation: "The morula enters the uterine cavity where it is transformed into the blastocyst."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "When the morula enters the uterus on day 4, fluid passes from the uterine cavity through the zona pellucida to form the blastocystic cavity.",
    answer: true,
    explanation: "Shortly after the morula enters the uterus (on day 4), fluid passes from the uterine cavity through the zona pellucida to form a single fluid-filled space - blastocystic cavity."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The blastocystic cavity is also called the primitive amniotic cavity.",
    answer: false,
    explanation: "The blastocystic cavity is also called the primitive chorionic cavity or blastococele, not the primitive amniotic cavity."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The trophoblast gives rise to the embryo.",
    answer: false,
    explanation: "The trophoblast gives rise to the chorion and finally the fetal part of the placenta. The inner cell mass/embryoblast gives rise to the embryo."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The embryoblast gives rise to the embryo.",
    answer: true,
    explanation: "The inner cell mass or embryoblast gives rise to the embryo."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The blastocyst lies free in the uterus cavity enclosed with the zona pellucida.",
    answer: true,
    explanation: "The blastocyst is enclosed with the zona pellucida and lies free in the uterus cavity."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Attachment of the blastocyst to the endometrial epithelium is mediated by L-Selectin on the trophoblast and its receptor on the endometrial epithelium.",
    answer: true,
    explanation: "Attachment is mediated by L-Selectin on trophoblast and receptor on endometrial epithelium."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The zona pellucida persists throughout the implantation process.",
    answer: false,
    explanation: "The zona pellucida disappears before or during attachment/implantation."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Invasion of trophoblast cells into the endometrium involves integrin, laminin, and fibronectin.",
    answer: true,
    explanation: "Invasion of the trophoblast cells in the endometrium involves integrin, laminin, and fibronectin."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The defect in the endometrial epithelium during implantation is repaired and filled with a closing plug called the operculum, consisting of blood clot and cellular debris.",
    answer: true,
    explanation: "The defect in the epithelium is filled with a closing plug (operculum) – a blood clot and cellular debris."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The normal site of implantation is the anterior wall of the midportion of the uterus body.",
    answer: false,
    explanation: "The normal site of implantation is the posterior wall of the midportion of the uterus body."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Ectopic implantation can occur at sites outside the uterus.",
    answer: true,
    explanation: "Ectopic sites of implantation exist outside the normal uterine site."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "At day 8, the trophoblast differentiates into cytotrophoblast and syncytiotrophoblast.",
    answer: true,
    explanation: "At day 8, trophoblast differentiates into cytotrophoblast and syncytiotrophoblast."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "At day 8, the embryoblast differentiates into hypoblast layer and epiblast layer.",
    answer: true,
    explanation: "At day 8, the embryoblast differentiates into hypoblast layer and epiblast layer."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "At day 8, spaces appear within the epiblast to form the yolk sac cavity.",
    answer: false,
    explanation: "Spaces occur within epiblast to form the amniotic cavity, not yolk sac cavity."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "At day 8, the blastocyst is completely implanted in the endometrium.",
    answer: false,
    explanation: "At day 8, the blastocyst is partially implanted, not completely."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "At day 9, the blastocyst is deeply embedded and the defect is plugged with fibrin clots.",
    answer: true,
    explanation: "At day 9, the blastocyst is deeply embedded and the defect is plugged with fibrin clots."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "At day 9, spaces called lacunae appear within the cytotrophoblast.",
    answer: false,
    explanation: "Spaces (lacunae) appear within the syncytiotrophoblast, not cytotrophoblast."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "At day 9, some hypoblastic cells migrate and form a thin membrane called the Exocoelomic membrane of Heuser.",
    answer: true,
    explanation: "Some hypoblastic cells migrate and form a thin membrane termed Exocoelomic membrane of Heuser."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The Heuser's membrane plus hypoblast cells form the primitive yolk sac.",
    answer: true,
    explanation: "Heuser's membrane + hypoblast cells → Primitive yolk sac."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "At day 11-12, the blastocyst becomes completely embedded in the endometrium.",
    answer: true,
    explanation: "By days 11-12, the blastocyst is completely embedded."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "At day 11-12, syncytiotrophoblast lacunae establish connections with stromal capillaries to form sinusoids.",
    answer: true,
    explanation: "Syncytiotrophoblast lacunae establish connections with stromal capillaries to form sinusoids."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Extraembryonic mesoderm appears between the cytotrophoblast and Heuser's membrane.",
    answer: true,
    explanation: "New cells appear between cytotrophoblast and Heuser's membrane to form Extraembryonic mesoderm (EEM)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Spaces appear in the extraembryonic mesoderm to form the amniotic cavity.",
    answer: false,
    explanation: "Spaces appear in the extraembryonic mesoderm to form the chorionic cavity, not amniotic cavity."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Extraembryonic mesoderm adjacent to the primitive yolk sac is called somatopleuric mesoderm.",
    answer: false,
    explanation: "EEM adjacent to primitive yolk sac = Splanchnopleuric mesoderm, not somatopleuric. EEM adjacent to cytotrophoblast = Somatopleuric."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Extraembryonic mesoderm adjacent to the cytotrophoblast is called somatopleuric mesoderm.",
    answer: true,
    explanation: "EEM adjacent to cytotrophoblast = Somatopleuric mesoderm."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "At day 13, cytotrophoblast grows outwards into syncytiotrophoblast forming primary villi.",
    answer: true,
    explanation: "At day 13, cytotrophoblast grows outwards into syncytiotrophoblast in a finger-like manner forming Primary Villi."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The definitive (secondary) yolk sac forms from new cells that migrate from the epiblast to the inner part of Heuser's membrane.",
    answer: false,
    explanation: "New cells from hypoblast (not epiblast) migrate to the inner part of Heuser's membrane to form the Definitive (Secondary) yolk sac."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The process of formation of the three germ layers is called gastrulation.",
    answer: true,
    explanation: "The process of formation of the three germ layers is called gastrulation."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The embryo during gastrulation is known as a blastula.",
    answer: false,
    explanation: "The embryo during gastrulation is known as a gastrula, not blastula."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Gastrulation is the process whereby the bilaminar germ disc is converted into a trilaminar germ disc.",
    answer: true,
    explanation: "Gastrulation is a process whereby the bilaminar germ disc is converted into a trilaminar germ disc."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Gastrulation begins with the formation of the primitive streak.",
    answer: true,
    explanation: "Gastrulation begins with the formation of the primitive streak."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "At the beginning of the 3rd week, hypoblast cells proliferate and migrate to form the primitive streak.",
    answer: false,
    explanation: "At the beginning of the 3rd week, epiblast cells (not hypoblast) proliferate and migrate to form the primitive streak."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "As the primitive streak elongates, the cranial part forms the primitive node.",
    answer: true,
    explanation: "As the primitive streak elongates, the cranial part forms the primitive node."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The primitive groove appears in the primitive streak and is continuous with the primitive pit.",
    answer: true,
    explanation: "The primitive groove appears in the streak that is continuous with the primitive pit."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Cells from the deep surface of the primitive streak form connective tissues called mesenchyme or mesoblast which form the intraembryonic endoderm.",
    answer: false,
    explanation: "Cells from the deep surface of the primitive streak form mesenchyme or mesoblast which form the intraembryonic mesoderm, not endoderm."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Some epiblast cells of the primitive streak displace the hypoblast to form the intraembryonic endoderm.",
    answer: true,
    explanation: "Some epiblast cells of the primitive streak displace the hypoblast to form the intraembryonic endoderm."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The remaining cells of the epiblast form the intraembryonic ectoderm.",
    answer: true,
    explanation: "The remaining cells of the epiblast form the intraembryonic ectoderm."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The primitive streak continues to produce mesoderm until the early 4th week where it regresses and becomes an insignificant structure in the sacrococcygeal region.",
    answer: true,
    explanation: "The primitive streak continues to produce mesoderm until the early 4th week where it regresses and becomes an insignificant structure in the sacrococcygeal region."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Persistence of the primitive streak results in a small benign tumor called sacrococcygeal teratoma.",
    answer: false,
    explanation: "Persistence of the primitive streak results in a large tumor called sacrococcygeal teratoma, not a small benign tumor."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Mesenchymal cells from the primitive node form the Notochordal process in the third week of development.",
    answer: true,
    explanation: "In the third week of development, mesenchymal cells from the primitive node of the primitive streak form the Notochordal process."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The notochordal process extends caudally between the ectoderm and endoderm to the cloacal membrane.",
    answer: false,
    explanation: "The notochordal process extends cranially (not caudally) between the ectoderm and endoderm to the prechordal plate."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The primitive pit extends into the notochordal process forming the Notochordal canal.",
    answer: true,
    explanation: "The primitive pit extends into the notochordal process forming the Notochordal canal."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The floor of the notochordal process fuses with the underlying endoderm of the yolk sac.",
    answer: true,
    explanation: "The floor of the notochordal process fuses with the underlying endoderm of the yolk sac."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Openings in the floor of the notochordal process allow for communication between the notochordal canal and the amniotic cavity.",
    answer: false,
    explanation: "Openings in the floor of the notochordal process allow for communication between the notochordal canal and the yolk sac, not the amniotic cavity."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The openings in the notochordal process coalesce causing it to form a flattened, grooved Notochordal plate.",
    answer: true,
    explanation: "The openings coalesce causing the notochordal process to form a flattened, grooved Notochordal plate."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The notochordal plate infolds to form the rod-shaped Notochord.",
    answer: true,
    explanation: "The notochordal plate infolds to form the rod-shaped Notochord."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The proximal part of the notochordal canal forms the Neurenteric canal which forms a temporary communication between the amniotic cavity and the yolk sac.",
    answer: true,
    explanation: "The proximal part of the notochordal canal forms the Neurenteric canal which forms a temporary communication between the amniotic cavity and the yolk sac."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "After formation, the notochord remains permanently attached to the endoderm.",
    answer: false,
    explanation: "The notochord becomes detached from the endoderm after formation."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The notochord defines the primordial axis of the embryo around which the axial skeleton forms.",
    answer: true,
    explanation: "The notochord defines the primordial axis of the embryo around which the axial skeleton forms and indicates the future site of the vertebral bodies."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The notochord persists throughout life as the nucleus pulposus of all vertebral discs.",
    answer: false,
    explanation: "The notochord degenerates and disappears as the bodies of the vertebrae form and persists as the Nucleus pulposus of each vertebral disc. It does not persist in its original form throughout life."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Neurulation is the process involved in the formation of the neural plate, neural groove, neural folds, and fusion of the folds to form the Neural tube.",
    answer: true,
    explanation: "Neurulation is the process involved in the formation of the neural plate, neural groove, neural fold and fusion of the folds to form the Neural tube."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Neurulation is completed by the end of the 5th week.",
    answer: false,
    explanation: "Neurulation is completed by the end of the 4th week, not 5th week."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "In the 3rd week (day 15), the surface ectoderm thickens to form a slipper-shaped Neural plate, which is the primordium of the CNS.",
    answer: true,
    explanation: "In the 3rd week (day 15), the surface ectoderm thickens to form a slipper-shaped Neural plate (primordium of the CNS)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Neural plate formation is induced by the overlying amniotic epithelium.",
    answer: false,
    explanation: "Neural plate formation is induced by the underlying notochord and adjacent mesoderm, not the overlying amniotic epithelium."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "About the 18th day, the neural plate begins to invaginate to form the Neural groove.",
    answer: true,
    explanation: "About the 18th day, the neural plate begins to invaginate to form the Neural groove."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The invagination of the neural plate is induced by interkinetic migration of cells of the neuroectoderm and formation of the somite.",
    answer: true,
    explanation: "The invagination is induced by interkinetic migration of cells of the neuroectoderm and formation of the somite."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The neural groove is bordered by the Neural crests.",
    answer: false,
    explanation: "The neural groove is bordered by the Neural folds, not neural crests."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The neural folds fuse to form the Neural tube which remains attached to the surface ectoderm permanently.",
    answer: false,
    explanation: "The neural tube becomes detached from the surface ectoderm after formation."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The neural tube has two openings: the cranial or anterior neuropore and the caudal or posterior neuropore.",
    answer: true,
    explanation: "The neural tube has 2 openings - cranial or anterior neuropore and caudal or posterior neuropore."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The cranial neuropore closes on day 27 while the caudal neuropore closes on day 25.",
    answer: false,
    explanation: "The cranial neuropore closes on day 25, while the caudal neuropore closes on day 27."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Failure of the cranial neuropore to close results in anencephaly.",
    answer: true,
    explanation: "Failure of closure of the cranial neuropore results in anencephaly."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Failure of closure of the caudal neuropore results in a bifid vertebral arch, known as spina bifida.",
    answer: true,
    explanation: "Failure of closure of the caudal neuropore with bifid vertebral arch results in spina bifida."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "As the neural tube is being formed, some cells of the neural fold proliferate and form Neural crest cells.",
    answer: true,
    explanation: "As the neural tube is being formed, some cells of the neural fold proliferate and attach themselves to neighbouring cells forming Neural crest cells."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Neural crest cells migrate to ventrolaterally on each side of the neural tube.",
    answer: false,
    explanation: "Neural crest cells migrate to dorsolaterally (not ventrolaterally) on each side of the neural tube."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Neural crest cells give rise to dorsal root ganglia of spinal nerves.",
    answer: true,
    explanation: "The neural crest gives rise to dorsal root ganglia of spinal nerves."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Neural crest cells give rise to the ganglia of the autonomic nervous system.",
    answer: true,
    explanation: "Neural crest cells give rise to ganglia of the autonomic nervous system."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Neural crest cells give rise to odontoblasts and Schwann cells.",
    answer: true,
    explanation: "Neural crest cells give rise to odontoblasts and Schwann cells forming the myelin sheath of the peripheral nervous system."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Neural crest cells give rise to the pia and arachnoid mater (leptomeninges).",
    answer: true,
    explanation: "Neural crest cells give rise to pia and arachnoid mater (Leptomeninges)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Neural crest cells give rise to melanocytes, adrenal medulla, and the dermis of the face.",
    answer: true,
    explanation: "Neural crest cells give rise to melanocytes, adrenal medulla, and dermis of the face."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Neural crest cells give rise to the aorticopulmonary septum and C-cells (parafollicular cells) of the thyroid gland.",
    answer: true,
    explanation: "Neural crest cells give rise to the aorticopulmonary septum and C-(parafollicular) cells of the thyroid gland."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Neural crest cells give rise to the facial skeleton and some bones at the base of the skull.",
    answer: true,
    explanation: "Neural crest cells give rise to the facial skeleton and some bones at the base of the skull."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "In the 3rd week, cells of the mesoderm proliferate and differentiate to form paraxial, intermediate, and lateral plate mesoderm.",
    answer: true,
    explanation: "In the 3rd week, the cells of the mesoderm proliferate and differentiate to form paraxial, intermediate and lateral plate mesoderm."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "At about day 20, the paraxial mesoderm differentiates to form the first pair of somites on each side of the neural tube.",
    answer: true,
    explanation: "At about day 20, the paraxial mesoderm differentiates to form the first pair of somite on each side of the neural tube."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Somites are formed at a rate of 2 somites per day.",
    answer: false,
    explanation: "Four somites are formed per day, not 2."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "At the end of the somite period (day 20-30), about 42-44 somites are formed.",
    answer: true,
    explanation: "At the end of the somite period (day 20-30), about 42-44 somites are formed."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Somites give rise to most of the axial skeleton including bones of the cranium, vertebral column, ribs, and sternum.",
    answer: true,
    explanation: "Somites give rise to most of the axial skeleton including bones of the cranium, vertebral column, ribs and sternum."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The organogenetic period starts with embryonic folding.",
    answer: true,
    explanation: "The organogenetic period (weeks 4-8) starts with embryonic folding."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Embryonic folding occurs only in the median plane.",
    answer: false,
    explanation: "Folding of the embryo occurs in the median plane (head and tail folds) and in the horizontal plane (lateral folds)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The head fold and tail fold are the two folds that occur in the median plane.",
    answer: true,
    explanation: "In the median plane, folding occurs as the head fold and the tail fold."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Lateral folding rolls the sides of the embryo disc and turns part of the yolk sac into the embryo as the hindgut.",
    answer: false,
    explanation: "Lateral folding turns part of the yolk sac into the embryo as the midgut (not hindgut). The head fold forms the foregut and the tail fold forms the hindgut."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The septum transversum develops into the central tendon of the diaphragm.",
    answer: true,
    explanation: "The septum transversum develops into the central tendon of the diaphragm."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The longitudinal infolding of the head fold turns the yolk sac inward as the foregut, which is the primordium of the pharynx, esophagus, stomach, and duodenum.",
    answer: true,
    explanation: "The longitudinal infolding turns yolk sac inward as foregut (primordium of pharynx, esophagus, stomach, and duodenum)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The tail fold involves the cloacal membrane on the caudal end of the primitive streak, which develops into the future anus.",
    answer: true,
    explanation: "The cloacal membrane on the caudal end of the primitive streak develops into the future anus."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "During tail folding, the connecting stalk turns to the ventral surface and the allantois is incorporated into the embryo.",
    answer: true,
    explanation: "During tail folding, the connecting stalk turns to the ventral surface and the allantois is incorporated into the embryo."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "During lateral folding, the part of the yolk sac left outside is incorporated into the umbilical cord.",
    answer: true,
    explanation: "The rest of the yolk sac left outside (yolk stalk) will be incorporated into the umbilical cord."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The rapid growth of the embryo causes the tail region to project over the oropharyngeal membrane.",
    answer: false,
    explanation: "The rapid growth of the embryo causes the tail region to project over the cloacal membrane, not the oropharyngeal membrane."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The terminal part of the hindgut dilates to form the cloaca.",
    answer: true,
    explanation: "The terminal part of the hindgut dilates to form the cloaca."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Before folding, the primitive streak lies caudal to the cloacal membrane, but after folding, it lies cranial to the cloacal membrane.",
    answer: false,
    explanation: "Before folding, the primitive streak lies cranial to the cloacal membrane, but after folding, it lies caudal to the cloacal membrane."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The septum transversum, developing heart, developing pericardium, and oropharyngeal membrane move to the dorsal surface of the embryo during folding.",
    answer: false,
    explanation: "The septum transversum, developing heart, developing pericardium, and oropharyngeal membrane move to the ventral surface of the embryo during folding."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The oropharyngeal membrane separates the foregut from the stomodeum (future mouth).",
    answer: true,
    explanation: "The oropharyngeal membrane separates the foregut from the stomodeum (future mouth)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "After folding, the developing pericardium lies dorsal to the heart and caudal to the septum transversum.",
    answer: false,
    explanation: "After folding, the developing pericardium lies ventral to the heart and cranial to the septum transversum."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The intraembryonic and extraembryonic coelom communicate widely after folding.",
    answer: true,
    explanation: "The intraembryonic and extraembryonic coelom communicate widely after folding."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The connecting stalk is the primordium for the umbilical cord.",
    answer: true,
    explanation: "The connecting stalk is the primordium for the umbilical cord."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "Lateral folding is caused by the rapid growth of the spinal cord and somite.",
    answer: true,
    explanation: "Lateral folding is caused by the rapid growth of the spinal cord and somite."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "As the abdominal wall forms, part of the endoderm is incorporated into the embryo as the hindgut.",
    answer: false,
    explanation: "As the abdominal wall forms, part of the endoderm is incorporated into the embryo as the midgut, not the hindgut."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The ectoderm gives rise to all nervous tissues including the CNS, PNS, and sensory epithelia of the eye, ear, and nose.",
    answer: true,
    explanation: "Ectodermal derivatives include all nervous tissues formed by neuroectoderm including CNS, PNS, sensory epithelia of the eye, ear and nose."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The ectoderm gives rise to pituitary gland, mammary glands, sebaceous glands, enamel of the teeth, and epidermis of the skin.",
    answer: true,
    explanation: "Ectodermal derivatives include pituitary gland, mammary glands, sebaceous glands, enamel of the teeth, and epidermis of the skin, hair and nails."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The ectoderm gives rise to the neural crest cells.",
    answer: true,
    explanation: "The ectoderm gives rise to the neural crest cells."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "All connective tissue, including bone, cartilage, and blood, is derived from the endoderm.",
    answer: false,
    explanation: "All connective tissue, including bone, cartilage, and blood, is derived from the mesoderm, not endoderm."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "All muscles (skeletal, smooth, and cardiac) are derived from the mesoderm.",
    answer: true,
    explanation: "All muscles (skeletal, smooth and cardiac muscles) are derived from the mesoderm."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The serous membranes lining the pleural, pericardial, and peritoneal cavities are derived from the mesoderm.",
    answer: true,
    explanation: "Mesodermal derivatives include body cavities (serous membranes lining of pleural, pericardial and peritoneal cavities)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The epithelial lining of the cardiovascular system, reproductive system, and most parts of the urinary system are derived from the mesoderm.",
    answer: true,
    explanation: "Mesodermal derivatives include epithelial lining of the cardiovascular system, reproductive system and most parts of the urinary system."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The spleen and cortex of the suprarenal gland are derived from the mesoderm.",
    answer: true,
    explanation: "Mesodermal derivatives include the spleen and cortex of the suprarenal gland."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The epithelial lining of the respiratory system and gastrointestinal tract are derived from the endoderm.",
    answer: true,
    explanation: "Endodermal derivatives include epithelial lining of the respiratory system and GIT."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The palatine tonsil, thymus, thyroid, and parathyroid glands are derived from the endoderm.",
    answer: true,
    explanation: "Endodermal derivatives include the palatine tonsil, thymus, thyroid, and parathyroid glands."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The liver and pancreas are derived from the endoderm.",
    answer: true,
    explanation: "Endodermal derivatives include the liver and pancreas."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The epithelial lining of the urinary bladder and most parts of the urethra are derived from the endoderm.",
    answer: true,
    explanation: "Endodermal derivatives include epithelial lining of the urinary bladder and most parts of the urethra."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "General Embryology & Developmental Periods",
    type: "truefalse",
    question: "The epithelial lining of the tympanic cavity, tympanic antrum, and auditory (Eustachian or pharyngotympanic) tube are derived from the endoderm.",
    answer: true,
    explanation: "Endodermal derivatives include epithelial lining of the tympanic cavity, tympanic antrum, and auditory or Eustachian or pharyngotympanic tube."
  },

  // SECTION 2: Fetal Period & Clinical Correlations (201-300)
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 24 days (Carnegie stage 11), the mandibular (1st) arch gives rise to the mandible and maxilla.",
    answer: true,
    explanation: "At 24 days, the Mandibular (1st) arch gives rise to the mandible and maxilla."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 24 days, the heart prominence is visible and the embryo shows slight curvature from the head and tail folds.",
    answer: true,
    explanation: "At 24 days, the embryo shows slight curvature (head and tail folds) and the heart prominence is visible."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 26 days (Carnegie stage 12), the rostral neuropore opens and the forebrain is elevated.",
    answer: false,
    explanation: "At 26 days, the rostral neuropore closes (not opens) and the forebrain is elevated."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 26 days, the embryo shows a C-shaped curvature.",
    answer: true,
    explanation: "At 26 days, the embryo shows a C-shaped curvature."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 28 days (Carnegie stage 13), the 4th pair of pharyngeal arches, upper and lower limb buds, and lens placodes are visible.",
    answer: true,
    explanation: "At 28 days, the 4th pair of pharyngeal arches, upper and lower limb buds, and lens placodes are visible."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 28 days, the caudal neuropore closes.",
    answer: true,
    explanation: "At 28 days, the caudal neuropore closes."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "During the 5th week, the hyoid (2nd) arch overgrows the 3rd and 4th arches to form the cervical sinus.",
    answer: true,
    explanation: "During the 5th week, the hyoid (2nd) arch overgrows the 3rd and 4th arches and forms the cervical sinus."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "During the 5th week, the upper limb develops with elbow and hand plate, and mesenchymal ridges indicate the sites of the kidneys.",
    answer: true,
    explanation: "During the 5th week, the upper limb develops with elbow and hand plate, and mesenchymal ridges indicate the sites of kidneys."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "During the 5th week, the brain grows rapidly and the face contacts the heart prominence.",
    answer: true,
    explanation: "During the 5th week, the brain grows rapidly and the face contacts the heart prominence."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "During the 6th week, hand plates show digital rays and the groove between the 1st and 2nd arches develops into the external acoustic meatus.",
    answer: true,
    explanation: "During the 6th week, hand plates show digital rays, and the groove between the 1st and 2nd arches develops into the external acoustic meatus."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "During the 6th week, swellings around the external acoustic meatus are called auricular hillocks.",
    answer: true,
    explanation: "During the 6th week, swellings around the external acoustic meatus are called auricular hillocks."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "During the 7th week, umbilical herniation with intestine occurs and notches appear between the digital rays of the hand.",
    answer: true,
    explanation: "During the 7th week, umbilical herniation with intestine occurs and notches appear between the digital rays of the hand."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "During the 8th week, the embryo has webbed digits of the hand and notches between the digits of the foot.",
    answer: true,
    explanation: "During the 8th week, the embryo has webbed digits of the hand and notches between the digits of the foot."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "During the 8th week, the tail is still present and the scalp vascular plexus appears.",
    answer: true,
    explanation: "During the 8th week, the tail is still present and the scalp vascular plexus appears."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "By the end of the 8th week, the head takes up one-third of the embryo.",
    answer: false,
    explanation: "By the end of the 8th week, the head takes up half (not one-third) of the embryo."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "By the end of the 8th week, all regions of the limbs are apparent and the limbs move.",
    answer: true,
    explanation: "By the end of the 8th week, all regions of the limbs are apparent and the limbs move."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "By the end of the 8th week, the intestine is still in the umbilical cord.",
    answer: true,
    explanation: "By the end of the 8th week, the intestine is still in the umbilical cord."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "By the end of the 8th week, sexual differences exist and the sex can be determined.",
    answer: false,
    explanation: "By the end of the 8th week, sexual differences exist but sex still cannot be told."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The fetal period extends from the 9th week to birth.",
    answer: true,
    explanation: "The fetal period extends from the 9th week to birth."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At the beginning of the 9th week, the head is approximately one-third of the crown-rump length.",
    answer: false,
    explanation: "At the beginning of the 9th week, the head is half (not one-third) of the CRL."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "By the end of the 9th week, external genitalia show differences between males and females.",
    answer: true,
    explanation: "By the end of the 9th week, external genitalia show differences."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "By the 11th week, the intestine returns to the abdomen.",
    answer: true,
    explanation: "By the 11th week, the intestine returns to the abdomen."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "By the 12th week, the head is less than half of the CRL.",
    answer: true,
    explanation: "By the end of the 12th week, the head is less than half of the CRL."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "By the 12th week, primary ossification centers appear and erythropoiesis shifts from the liver to the spleen.",
    answer: true,
    explanation: "By the end of the 12th week, primary ossification centers appear and erythropoiesis shifts from the liver to the spleen."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Between the 9th and 12th weeks, urine forms and is discharged into the amniotic fluid, which is swallowed by the fetus.",
    answer: true,
    explanation: "Between the 9th and 12th weeks, urine forms and is discharged into the amniotic fluid, which is swallowed by the fetus."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "By the 12th week, the fetal form of external genitalia is established.",
    answer: true,
    explanation: "By the 12th week, the fetal form of external genitalia is established."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 14 weeks, coordinated limb movement and active ossification of the skeleton occur.",
    answer: true,
    explanation: "At 14 weeks, coordinated limb movement and active ossification of the skeleton occur."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "By 16 weeks, bones can be seen on radiographs and ovaries are differentiated containing primordial follicles.",
    answer: true,
    explanation: "By 16 weeks, bones can be seen on radiographs and ovaries are differentiated and contain primordial follicles."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Between 17 and 20 weeks, the fetus grows 100 mm.",
    answer: false,
    explanation: "Between 17 and 20 weeks, the fetus grows 50 mm (not 100 mm)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Fetal movements (quickening) are first felt by the mother between 17 and 20 weeks.",
    answer: true,
    explanation: "Fetal movements (quickening) are felt by the mother between 17 and 20 weeks."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The vernix caseosa is a protective covering on the fetal skin.",
    answer: true,
    explanation: "The fetal skin is covered and protected by vernix caseosa."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 20 weeks, the fetus is covered by lanugo (fine downy hair) and eyebrows and head hairs are visible.",
    answer: true,
    explanation: "At 20 weeks, the fetus is covered by lanugo (fine downy hair) and eyebrows and head hairs are visible."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 20 weeks, the testes begin to descend.",
    answer: true,
    explanation: "At 20 weeks, the testes begin to descend."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Between 21 and 25 weeks, the skin is wrinkled and translucent, and pink to red in color.",
    answer: true,
    explanation: "Between 21 and 25 weeks, the skin is wrinkled and translucent, and pink to red."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 21 weeks, rapid eye movements begin.",
    answer: true,
    explanation: "At 21 weeks, rapid eye movements begin."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 22 to 23 weeks, the fetus responds to noise with blink-startle responses.",
    answer: true,
    explanation: "At 22 to 23 weeks, the fetus responds to noise (blink-startle responses)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 24 weeks, type I pneumocytes secrete surfactant.",
    answer: false,
    explanation: "At 24 weeks, type II pneumocytes (not type I) secrete surfactant."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 24 weeks, fingernails are present.",
    answer: true,
    explanation: "At 24 weeks, fingernails are present."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Between 22 and 25 weeks, a fetus born prematurely may survive under intensive care.",
    answer: true,
    explanation: "Between 22 and 25 weeks, a fetus born prematurely may survive under intensive care."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 26 weeks, the eyes reopen and toenails are visible.",
    answer: true,
    explanation: "At 26 weeks, the eyes reopen and toenails are visible."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 28 weeks, the spleen has been an important site of hematopoiesis, but hematopoiesis shifts to bone marrow by the end of the 28th week.",
    answer: true,
    explanation: "At 28 weeks, the spleen has been an important site of hematopoiesis, and hematopoiesis shifts to bone marrow by the end of the 28th week."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 30 weeks, the pupillary light reflex appears.",
    answer: true,
    explanation: "At 30 weeks, the pupillary light reflex appears."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 32 weeks, a fetus born prematurely usually survives and white fat is 16% of body weight.",
    answer: false,
    explanation: "At 32 weeks, a fetus born prematurely usually survives, but white fat is 8% (not 16%) of body weight."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 35 weeks, the fetus shows grasp reflex and spontaneous orientation to light.",
    answer: true,
    explanation: "At 35 weeks, the fetus shows grasp reflex and spontaneous orientation to light."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 36 weeks, the circumferences of the head is equal to that of the abdomen.",
    answer: true,
    explanation: "At 36 weeks, the circumferences of the head is equal to that of the abdomen."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At full term, the testes are in the scrotum.",
    answer: true,
    explanation: "At full term, the testes are in the scrotum."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The greatest length (GL) measurement is used for embryos in the 3rd and early 4th weeks when the embryo is straight.",
    answer: true,
    explanation: "Greatest length (GL) is used for 3rd and early 4th weeks when the embryo is straight."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Crown-rump length (CRL) or sitting height is a neck-to-rump measurement.",
    answer: true,
    explanation: "Crown-rump length (CRL) or sitting height is a neck-rump measurement."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Crown-heel length (CHL) or standing height is another method of measuring embryos.",
    answer: true,
    explanation: "Crown-heel length (CHL) or standing height is another method of measuring embryos."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Biparietal diameter, head circumference, abdominal circumference, femur length, foot length, and fetal weight are used for measuring fetuses in the second and third trimesters.",
    answer: true,
    explanation: "These measurements are used for measuring fetuses in the second and third trimesters."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The fetal weight measurement may show discrepancy when the mother has diabetes mellitus.",
    answer: true,
    explanation: "Fetal weight may have discrepancy when the mother has diabetes mellitus."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Immature infants (extremely low birth weight) weighing less than 500 gm usually survive with expert postnatal care.",
    answer: false,
    explanation: "Extremely low birth weight infants (less than 500 gm) usually do not survive, but with expert postnatal care some may survive."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Low-birth-weight babies are full term but have intrauterine growth retardation.",
    answer: true,
    explanation: "Low-birth-weight babies are full term but caused by intrauterine growth retardation."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Premature infants weighing 1500 to 2500 gm most may survive but with difficulties.",
    answer: true,
    explanation: "Premature infants (1500 to 2500 gm) most may survive but with difficulties."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Gestational age is calculated from the estimated day of fertilization.",
    answer: false,
    explanation: "Gestational age is calculated from the onset of the last normal menstrual period (LNMP), not the estimated day of fertilization."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The end of the first trimester marks the time when all major systems have developed.",
    answer: true,
    explanation: "At the end of the first trimester, all major systems have developed."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "During the first trimester, crown-rump length (CRL) is used for measuring the fetus.",
    answer: true,
    explanation: "During the first trimester, crown-rump length (CRL) is used for measuring."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At the end of the second trimester, the fetus may survive if born prematurely.",
    answer: true,
    explanation: "At the end of the second trimester, the fetus may survive if born prematurely."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 35 weeks, the fetus weighs 2500 gm and usually survives if born prematurely.",
    answer: true,
    explanation: "At 35 weeks, the fetus weighs 2500 gm and usually survives if born prematurely."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Diagnostic amniocentesis is a technique for detecting genetic disorders.",
    answer: true,
    explanation: "Diagnostic amniocentesis is a common technique for detecting genetic disorders."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Amniocentesis is typically performed after 14 weeks when there is about 200 ml of amniotic fluid.",
    answer: true,
    explanation: "After 14 weeks, there is about 200 ml of amniotic fluid, and 20-30 ml can be safely withdrawn."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The risk of inducing abortion with amniocentesis is about 0.5%.",
    answer: true,
    explanation: "The risk of inducing an abortion with amniocentesis is about 0.5%."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Alpha-fetoprotein (AFP) levels are decreased in neural tube defects and ventral wall defects.",
    answer: false,
    explanation: "AFP is increased (not decreased) in neural tube defects (NTDs) and ventral wall defects (VWDs)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "AFP levels are decreased in Down syndrome and Trisomy 18.",
    answer: true,
    explanation: "AFP is decreased in Down syndrome and Trisomy 18."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Chorionic villus sampling (CVS) involves obtaining trophoblasts through a needle under ultrasound guidance.",
    answer: true,
    explanation: "Chorionic villus sampling involves obtaining trophoblasts through a needle through the mother's abdominal and uterine wall under ultrasound guidance."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The risk of fetal loss with CVS is about 0.5%.",
    answer: false,
    explanation: "The risk of fetal loss with CVS is about 1% (not 0.5%)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The risk of limb defects with CVS is increased if done too early.",
    answer: true,
    explanation: "There is a risk of limb defects if CVS is done too early."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Ultrasonography is used for measuring placental and fetal size, detecting multiple births, and identifying abnormal presentations.",
    answer: true,
    explanation: "Ultrasonography is used for measuring placental and fetal size, multiple births, and abnormal presentations."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Amniography and fetography involve injecting radiopaque substance into the amniotic cavity.",
    answer: true,
    explanation: "Amniography and fetography involve injecting water-soluble or oil-soluble radiopaque substance into the amniotic cavity."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Fetal monitoring is used for fetal heart rate monitoring to detect fetal distress.",
    answer: true,
    explanation: "Fetal monitoring is for fetal heart rate monitoring (fetal distress - abnormal heart rate)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Crossing over during meiosis decreases genetic diversity.",
    answer: false,
    explanation: "Crossing over during meiosis increases genetic diversity."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Crossing over is the exchange of chromosome segments between homologous chromosomes and occurs during prophase I of meiosis I.",
    answer: true,
    explanation: "Crossing over is the exchange of chromosome segments between homologous chromosomes and occurs during prophase I of meiosis I."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Crossing over results in new combinations of genes.",
    answer: true,
    explanation: "Crossing over results in new combinations of genes."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The neural plate, neural groove, neural folds, and neural tube are bathed in amniotic fluid derived from the yolk sac through the neurenteric canal.",
    answer: true,
    explanation: "The neural plate, neural groove, neural folds and neural tube are bathed in amniotic fluid derived from the yolk sac through the neurenteric canal."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Failure of neuropores to close results in neural tube defects (NTDs).",
    answer: true,
    explanation: "Failure of the neuropores to close results in Neural tube defects (NTDs)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Patau syndrome, Prader-Willi syndrome, and Fragile X syndrome are chromosomal abnormalities that were asked to be checked.",
    answer: true,
    explanation: "The lecture notes specifically mention checking up on the features of Patau syndrome, Prader-Willi syndrome, and Fragile X syndrome."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The trophoblast is derived from Greek word 'trophe' meaning nutrition.",
    answer: true,
    explanation: "The trophoblast is derived from Greek 'trophe' meaning nutrition."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The blastocystic cavity is also called the primitive chorionic cavity.",
    answer: true,
    explanation: "The blastocystic cavity is also called the primitive chorionic cavity or blastococele."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The inner cell mass gives rise to the chorion.",
    answer: false,
    explanation: "The trophoblast (not inner cell mass) gives rise to the chorion. The inner cell mass gives rise to the embryo."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The zona pellucida disappears before implantation.",
    answer: true,
    explanation: "The zona pellucida disappears before attachment and implantation."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At day 8, the blastocyst is completely implanted and the amniotic cavity forms.",
    answer: false,
    explanation: "At day 8, the blastocyst is partially implanted (not completely) and the amniotic cavity forms."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At day 9, lacunae appear within the syncytiotrophoblast.",
    answer: true,
    explanation: "At day 9, spaces (lacunae) appear within the syncytiotrophoblast."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Extraembryonic mesoderm adjacent to the primitive yolk sac is called splanchnopleuric mesoderm.",
    answer: true,
    explanation: "EEM adjacent to primitive yolk sac = Splanchnopleuric mesoderm."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Primary villi form at day 13 when cytotrophoblast grows outwards into syncytiotrophoblast.",
    answer: true,
    explanation: "At day 13, cytotrophoblast grows outwards into syncytiotrophoblast in a finger-like manner forming Primary Villi."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The definitive (secondary) yolk sac forms from new cells from the epiblast.",
    answer: false,
    explanation: "The definitive yolk sac forms from new cells from the hypoblast (not epiblast)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The primitive streak normally degenerates and disappears by the end of the 4th week.",
    answer: true,
    explanation: "The primitive streak normally degenerates and disappears by the end of the 4th week."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The notochordal process extends cranially to the prechordal plate.",
    answer: true,
    explanation: "The notochordal process extends cranially between the ectoderm and endoderm to the prechordal plate."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The neurenteric canal forms a temporary communication between the amniotic cavity and the yolk sac.",
    answer: true,
    explanation: "The neurenteric canal forms a temporary communication between the amniotic cavity and the yolk sac."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The notochord persists as the nucleus pulposus of the vertebral discs.",
    answer: true,
    explanation: "The notochord degenerates and persists as the Nucleus pulposus of each vertebral disc."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Neural plate formation is induced by the overlying surface ectoderm.",
    answer: false,
    explanation: "Neural plate formation is induced by the underlying notochord and adjacent mesoderm."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The neural crest separates into right and left parts to lie on the ventrolateral aspect of the neural tube.",
    answer: false,
    explanation: "The neural crest separates into right and left parts to lie on the dorsolateral aspect (not ventrolateral) of the neural tube."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Neural crest cells give rise to the dorsal root ganglia of spinal nerves.",
    answer: true,
    explanation: "Neural crest cells give rise to dorsal root ganglia of spinal nerves."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The hyoid (2nd) arch overgrows the 3rd and 4th arches and forms the cervical sinus during the 5th week.",
    answer: true,
    explanation: "The hyoid (2nd) arch overgrows the 3rd and 4th arches and forms the cervical sinus during the 5th week."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The embryonic period ends at the 8th week.",
    answer: true,
    explanation: "The embryonic period ends at the end of the 8th week. The fetal period begins at the 9th week."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "During the 6th week, embryos respond to touch.",
    answer: true,
    explanation: "During the 6th week, embryos respond to touch."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The 8th week is the final week of the embryonic period.",
    answer: true,
    explanation: "The 8th week is the final week of the embryonic period."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "By the end of the 8th week, the neck is established.",
    answer: true,
    explanation: "By the end of the 8th week, the neck is established."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The connecting stalk turns to the dorsal surface during tail folding.",
    answer: false,
    explanation: "The connecting stalk turns to the ventral surface (not dorsal) during tail folding."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "During lateral folding, the midgut and yolk stalk communicate widely at first, but this communication becomes reduced as folding progresses.",
    answer: true,
    explanation: "At first, there is a wide communication between the midgut and yolk sac which becomes reduced with the lateral folding."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "As the umbilical cord forms, ventral fusion of the lateral folds narrows the communication between the intraembryonic and extraembryonic coelomic cavities.",
    answer: true,
    explanation: "As the umbilical cord forms, ventral fusion of the lateral folds narrows the communication between the intraembryonic and extraembryonic coelomic cavities."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The ectoderm gives rise to the epidermis of the skin, hair, and nails.",
    answer: true,
    explanation: "Ectodermal derivatives include the epidermis of the skin, hair and nails."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The mesoderm gives rise to the epithelial lining of the respiratory system.",
    answer: false,
    explanation: "The endoderm (not mesoderm) gives rise to the epithelial lining of the respiratory system."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The endoderm gives rise to the epithelial lining of the urinary bladder and most parts of the urethra.",
    answer: true,
    explanation: "Endodermal derivatives include epithelial lining of the urinary bladder and most parts of the urethra."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 24 days (Carnegie stage 11), the heart prominence is visible.",
    answer: true,
    explanation: "At 24 days, the heart prominence is visible."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 26 days, the embryo shows an S-shaped curvature.",
    answer: false,
    explanation: "At 26 days, the embryo shows a C-shaped curvature (not S-shaped)."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 28 days, the upper and lower limb buds are visible.",
    answer: true,
    explanation: "At 28 days, the upper and lower limb buds are visible."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "During the 5th week, spontaneous movements begin.",
    answer: true,
    explanation: "During the 5th week, spontaneous movements occur."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "The delivery day is 147 +/- 15 days after the first fetal movement.",
    answer: true,
    explanation: "The delivery day is 147 +/- 15 days after the first movement."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Between 21 and 25 weeks, there is substantial weight gain.",
    answer: true,
    explanation: "Between 21 and 25 weeks, there is substantial weight gain."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 26 weeks, subcutaneous fat flattens the wrinkled skin.",
    answer: true,
    explanation: "At 26 weeks, subcutaneous fat flattens wrinkled skin."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 28 weeks, the spleen has been an important site of hematopoiesis.",
    answer: true,
    explanation: "At 28 weeks, the spleen has been an important site of hematopoiesis."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 32 weeks, white fat is 8% of body weight.",
    answer: true,
    explanation: "At 32 weeks, white fat is 8% of body weight."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 36 weeks, the circumference of the head is less than that of the abdomen.",
    answer: false,
    explanation: "At 36 weeks, the circumference of the head is equal to (not less than) that of the abdomen."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 37 to 38 weeks, the nervous system is mature for integrative functions.",
    answer: true,
    explanation: "At 37 to 38 weeks, the nervous system is mature for integrative functions."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "At 38 weeks, the fetus adds 14 gm per day.",
    answer: true,
    explanation: "At 38 weeks, the fetus adds 14 gm per day."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Factors influencing fetal growth include maternal malnutrition, cigarette smoking, multiple pregnancy, social drugs, and impaired uteroplacental blood flow.",
    answer: true,
    explanation: "These are listed as factors influencing fetal growth."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Amniocentesis is recommended for mothers older than 38 years.",
    answer: true,
    explanation: "Amniocentesis is recommended for maternal age > 38 years."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Amniocentesis is recommended for carriers of X-linked recessive disorders and neural tube defects in the family.",
    answer: true,
    explanation: "Amniocentesis is recommended for carriers of X-linked recessive disorders and neural tube defects in the family."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Sex chromatin patterns are used for sex-linked hereditary diseases like hemophilia and muscular dystrophy.",
    answer: true,
    explanation: "Sex chromatin patterns are used for sex-linked hereditary diseases, e.g., hemophilia and muscular dystrophy."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "Fetoscopy is commonly used for fetal assessment.",
    answer: false,
    explanation: "Fetoscopy is rarely used ('few use')."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "CT and MRI provide more information for treatment but are expensive and have limited resolution.",
    answer: true,
    explanation: "CT and MRI provide more information for treatment, but are expensive and limited in resolution."
  },
  {
    course: "Embryology",
    topic: "General Embryology",
    subTopic: "Fetal Period & Clinical Correlations",
    type: "truefalse",
    question: "4D-ultrasonography is one of the advanced imaging techniques used in obstetrics.",
    answer: true,
    explanation: "4D-Ultrasonography is mentioned as an advanced imaging technique."
  }
];