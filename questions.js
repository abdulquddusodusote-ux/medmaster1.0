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
}
];