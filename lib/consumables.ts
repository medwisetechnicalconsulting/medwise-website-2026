import { SITE_CONFIG } from '@/lib/seo/schema';

export type ConsumableCategory =
  | 'diagnostic-kits'
  | 'collection-phlebotomy'
  | 'microscopy-staining'
  | 'plasticware-general'
  | 'safety-waste';

export interface ConsumableItem {
  id: string;
  name: string;
  category: ConsumableCategory;
  subcategory: string;
  packaging: string;
  tagline: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  badge?: string;
  storage?: string;
}

export const CONSUMABLES_CATEGORIES: {
  id: ConsumableCategory | 'all';
  name: string;
  shortName: string;
  description: string;
  iconName: string;
}[] = [
  {
    id: 'all',
    name: 'All Consumables & Reagents',
    shortName: 'All Items',
    description: 'Comprehensive inventory of routine clinical consumables, collection tubes, staining kits, and diagnostic reagents.',
    iconName: 'LayoutGrid',
  },
  {
    id: 'diagnostic-kits',
    name: 'Rapid Diagnostic Kits & Reagents',
    shortName: 'Rapid Kits & Serology',
    description: 'Lateral flow screening cassettes, febrile agglutination antigens, typing antisera, and urinalysis test strips.',
    iconName: 'Activity',
  },
  {
    id: 'collection-phlebotomy',
    name: 'Blood Collection & Specimen Tubes',
    shortName: 'Collection & Tubes',
    description: 'ISO standardized vacuum blood collection tubes (EDTA, Clot Activator), tourniquets, needles, and urine cups.',
    iconName: 'Droplet',
  },
  {
    id: 'microscopy-staining',
    name: 'Microscopy Glassware & Staining Kits',
    shortName: 'Microscopy & Stains',
    description: 'Pre-cleaned glass slides, coverslips, Gram’s stain, Field’s malaria stain, and AFB Ziehl-Neelsen kits.',
    iconName: 'Microscope',
  },
  {
    id: 'plasticware-general',
    name: 'Laboratory Plasticware & Accessories',
    shortName: 'Plasticware & Racks',
    description: 'Universal micropipette tips (200 μL / 1000 μL), ESR racks, borosilicate test tubes, and applicator sticks.',
    iconName: 'FlaskConical',
  },
  {
    id: 'safety-waste',
    name: 'Safety, PPE & Waste Segregation',
    shortName: 'Safety & Waste',
    description: 'Medical examination gloves, puncture-resistant biohazard sharps containers, and 3-color waste segregation pedal bins.',
    iconName: 'PackageCheck',
  },
];

export const CONSUMABLES_CATALOG: ConsumableItem[] = [
  // ==========================================
  // 1. RAPID DIAGNOSTIC KITS & REAGENTS (SEROLOGY)
  // ==========================================
  {
    id: 'widal-test-kit',
    name: 'Widal Agglutination Test Kit (Typhoid Fever)',
    category: 'diagnostic-kits',
    subcategory: 'Febrile Agglutination',
    packaging: 'Kit of 4 or 8 Dropper Vials (O & H Antigens)',
    tagline: 'Standardized slide & tube agglutination reagent kit for Salmonella enterica antibodies.',
    description:
      'The Widal Test Kit is a qualitative and semi-quantitative slide and tube agglutination assay for detecting serum agglutinins against Salmonella enterica serovars (S. Typhi O & H, S. Paratyphi A, B, C). Essential for routine febrile illness diagnosis in Kenyan outpatient clinics, dispensaries, and hospitals.',
    badge: 'Routine Serology Standard',
    storage: 'Store at 2°C – 8°C (Do Not Freeze)',
    highlights: [
      'Components: Salmonella Typhi O, H and Paratyphi antigens with positive/negative controls',
      'Dual methodology: Rapid qualitative screening on tile + quantitative tube titration',
      'Rapid read-out within 1 to 2 minutes on white porcelain or glass tile',
      'High diagnostic sensitivity with smooth suspension and clear agglutination floccules',
      'Long shelf life with standardized preservatives',
    ],
    specs: [
      { label: 'Test Principle', value: 'Direct bacterial antigen-antibody agglutination' },
      { label: 'Antigen Vials', value: 'S. Typhi O, S. Typhi H, S. Paratyphi AH, S. Paratyphi BH' },
      { label: 'Reading Time', value: '1 minute (slide test) | 18–24 hours at 37°C (tube titration)' },
      { label: 'Target Condition', value: 'Enteric (Typhoid) fever diagnosis' },
      { label: 'Storage Temperature', value: '2°C to 8°C' },
    ],
  },
  {
    id: 'brucella-test-kit',
    name: 'Brucella Febrile Antigen Test Kit',
    category: 'diagnostic-kits',
    subcategory: 'Febrile Agglutination',
    packaging: 'Dropper Vials (Brucella Abortus & Melitensis)',
    tagline: 'Rapid stained bacterial suspension for zoonotic brucellosis diagnosis.',
    description:
      'Standardized stained bacterial suspensions of killed Brucella abortus and Brucella melitensis for rapid slide and tube agglutination. Designed for screening pastoral and clinical populations across Kenya presenting with persistent fever and joint pains associated with zoonotic transmission.',
    badge: 'Zoonotic Screening',
    storage: 'Store at 2°C – 8°C',
    highlights: [
      'Standardized suspensions of B. abortus and B. melitensis',
      'High-contrast colored bacterial antigen for effortless agglutination reading',
      'Rapid slide screening test in under 2 minutes',
      'Includes calibrated dropper assembly for standardized drop volume',
      'Compatible with routine clinical laboratory slide rotation systems',
    ],
    specs: [
      { label: 'Antigens Included', value: 'Brucella abortus & Brucella melitensis stained antigens' },
      { label: 'Sensitivity', value: 'Detects acute and subacute anti-Brucella IgM and IgG' },
      { label: 'Sample Type', value: 'Fresh human serum (non-hemolyzed)' },
      { label: 'Incubation / Reading', value: 'Slide test: 2 minutes at room temperature' },
      { label: 'Storage', value: '2°C to 8°C' },
    ],
  },
  {
    id: 'rf-test-kit',
    name: 'Rheumatoid Factor (RF) Latex Agglutination Kit',
    category: 'diagnostic-kits',
    subcategory: 'Autoimmune & Inflammation',
    packaging: 'Complete Kit with Test Latex, Controls & Reaction Cards',
    tagline: 'Polystyrene latex particles coated with human gamma-globulin for RF autoantibody detection.',
    description:
      'Rapid slide agglutination test for the qualitative screening and semi-quantitative determination of Rheumatoid Factor (RF) in human serum. Polystyrene latex particles coated with purified heat-denatured human IgG agglutinate visibly in the presence of RF autoantibodies associated with rheumatoid arthritis.',
    badge: 'Rheumatology Essential',
    storage: 'Store at 2°C – 8°C',
    highlights: [
      'Sensitivity threshold: Calibrated to 8 IU/mL (WHO International Standard)',
      'Fast 2-minute visual result on black reaction slide cards',
      'Includes ready-to-use positive and negative control sera',
      'No pre-dilution required for qualitative screening',
      'Eliminates prozone effect through optimal particle coating',
    ],
    specs: [
      { label: 'Methodology', value: 'Latex particle agglutination' },
      { label: 'Analytical Sensitivity', value: '8 IU/mL (± 2 IU/mL)' },
      { label: 'Reaction Time', value: '2 minutes' },
      { label: 'Kit Contents', value: 'Latex reagent, Positive control, Negative control, Glass/plastic test card, Pipettes' },
      { label: 'Storage', value: '2°C – 8°C' },
    ],
  },
  {
    id: 'asot-test-kit',
    name: 'ASOT Latex Agglutination Kit (Antistreptolysin O)',
    category: 'diagnostic-kits',
    subcategory: 'Autoimmune & Inflammation',
    packaging: 'Complete Kit with Latex Reagent, Controls & Test Cards',
    tagline: 'Standardized latex agglutination for post-streptococcal infection & rheumatic fever diagnosis.',
    description:
      'Rapid latex agglutination test for the detection and semi-quantitation of Antistreptolysin O (ASO) antibodies in serum. High titers indicate recent Streptococcus pyogenes infection, aiding in the clinical management of rheumatic fever and post-streptococcal glomerulonephritis.',
    badge: 'Post-Streptococcal Marker',
    storage: 'Store at 2°C – 8°C',
    highlights: [
      'Sensitivity cut-off: 200 IU/mL (clinically established threshold)',
      'Clear, distinct visual agglutination within 2 minutes',
      'Positive and negative control sera included in every kit',
      'Direct qualitative screening followed by serial doubling dilutions for titer verification',
      'Stable liquid reagent formulation ready for instant testing',
    ],
    specs: [
      { label: 'Cut-off Sensitivity', value: '200 IU/mL' },
      { label: 'Specimen', value: 'Fresh clear serum' },
      { label: 'Assay Duration', value: '2 minutes' },
      { label: 'Clinical Indication', value: 'Acute rheumatic fever, Scarlet fever, Glomerulonephritis' },
      { label: 'Storage', value: '2°C to 8°C' },
    ],
  },
  {
    id: 'hcg-pregnancy-strips',
    name: 'HCG Rapid Pregnancy Test Strips',
    category: 'diagnostic-kits',
    subcategory: 'Rapid Diagnostic Tests (RDT)',
    packaging: 'Box of 50 or 100 Individually Foil-Wrapped Strips',
    tagline: 'High-sensitivity 25 mIU/mL lateral flow chromatographic immunoassay for early pregnancy.',
    description:
      'Diagnostic-grade Human Chorionic Gonadotropin (hCG) lateral flow immunoassay test strips designed for early detection of pregnancy from urine specimens. Features double-antibody sandwich technology with clean background clearance and bold, high-contrast red indicator bands.',
    badge: 'High Sensitivity 25 mIU',
    storage: 'Room Temperature (4°C – 30°C)',
    highlights: [
      'Analytical sensitivity: 25 mIU/mL hCG for early clinical detection',
      'Diagnostic accuracy: > 99.5% agreement with laboratory reference standards',
      'Rapid results in 3 to 5 minutes with built-in internal procedural control line',
      'Individually foil-sealed with moisture-absorbing desiccant for extended tropical stability',
      'High-volume clinic, hospital triage, and maternity ward standard',
    ],
    specs: [
      { label: 'Format', value: 'Lateral flow strip (dipstick)' },
      { label: 'Sensitivity', value: '25 mIU/mL hCG' },
      { label: 'Sample', value: 'Urine (first morning sample recommended for early detection)' },
      { label: 'Reading Time', value: '3 to 5 minutes' },
      { label: 'Shelf Life', value: '24 months at 4°C – 30°C' },
    ],
  },
  {
    id: 'vdrl-rpr-test-kit',
    name: 'VDRL / RPR Syphilis Antigen Test Kit',
    category: 'diagnostic-kits',
    subcategory: 'Infectious Disease Serology',
    packaging: 'Carbon Antigen Suspension with Needle, Bottle & Reaction Cards',
    tagline: 'Non-treponemal flocculation test for Treponema pallidum screening in antenatal and blood donor clinics.',
    description:
      'The Rapid Plasma Reagin (RPR) / VDRL test kit contains stabilized carbon-coated cardiolipin antigen suspension for the detection of reagin antibodies in human serum or plasma. Widely mandated in Kenya for routine antenatal profile (ANC) screening and blood transfusion safety.',
    badge: 'ANC Profile Mandatory',
    storage: 'Store at 2°C – 8°C',
    highlights: [
      'Modified VDRL antigen with finely divided carbon particles for macroscopically clear black flocculation',
      'Rapid 8-minute test on rotator platform (100 RPM)',
      'Includes precision dispensing needle (60 drops/mL) and plastic squeeze bottle',
      'Quantitative titration easily performed on 10-well coated paper cards',
      'Positive, weak positive, and negative control sera included',
    ],
    specs: [
      { label: 'Test Principle', value: 'Non-treponemal micro-flocculation' },
      { label: 'Antigen', value: 'Cardiolipin, lecithin, and cholesterol bound to carbon particles' },
      { label: 'Specimen', value: 'Unheated serum or EDTA plasma' },
      { label: 'Application', value: 'Antenatal care (ANC) syphilis screening, Blood donor testing' },
      { label: 'Storage', value: '2°C to 8°C' },
    ],
  },
  {
    id: 'sat-salmonella-antigen-kit',
    name: 'Salmonella Antigen Rapid Test Kit (SAT Kit)',
    category: 'diagnostic-kits',
    subcategory: 'Rapid Diagnostic Tests (RDT)',
    packaging: 'Box of 25 Cassettes with Extraction Buffer',
    tagline: 'Direct lateral flow chromatographic immunoassay for Salmonella antigen detection.',
    description:
      'Rapid diagnostic test (RDT) cassette designed for the direct qualitative detection of Salmonella antigens in clinical stool or blood culture broth samples. Provides acute-phase diagnostic evidence of active salmonellosis prior to antibody seroconversion.',
    badge: 'Direct Antigen Detection',
    storage: 'Store at 2°C – 30°C',
    highlights: [
      'Direct antigen detection during acute stage of infection',
      'Cassette format with dedicated sample well and buffer dropper',
      'Result available in 15 minutes',
      'High specificity for Salmonella enteric serogroups',
      'Individual foil pouch packaging for tropical humidity resistance',
    ],
    specs: [
      { label: 'Format', value: 'Cassette format with sample well' },
      { label: 'Target', value: 'Salmonella surface antigens' },
      { label: 'Sample Type', value: 'Stool specimen suspension or blood culture' },
      { label: 'Read Time', value: '15 minutes' },
      { label: 'Storage', value: 'Room temperature (2°C – 30°C)' },
    ],
  },
  {
    id: 'sab-salmonella-antibody-kit',
    name: 'Salmonella Antibody Rapid Test Kit (SAb Kit)',
    category: 'diagnostic-kits',
    subcategory: 'Rapid Diagnostic Tests (RDT)',
    packaging: 'Box of 25 Cassettes with Sample Diluent',
    tagline: 'Differential IgG and IgM rapid chromatographic cassette for Typhoid fever.',
    description:
      'Rapid lateral flow immunoassay for the simultaneous detection and differentiation of anti-Salmonella Typhi IgG and IgM antibodies in human whole blood, serum, or plasma. IgM positivity signifies active acute typhoid infection, while IgG indicates past infection or convalescence.',
    badge: 'IgG / IgM Differentiation',
    storage: 'Store at 2°C – 30°C',
    highlights: [
      'Simultaneous detection of IgG and IgM antibodies in separate test lines',
      'Requires only 10 μL of capillary whole blood from fingerstick or serum/plasma',
      'Clear visual results in 15 minutes',
      'Eliminates the cross-reactivity and subjectivity of classic slide agglutination',
      'Ideal for point-of-care rural clinic diagnosis and outpatient triage',
    ],
    specs: [
      { label: 'Format', value: 'Dual-band lateral flow cassette (IgM & IgG)' },
      { label: 'Sample Volume', value: '10 μL Whole Blood / Serum / Plasma' },
      { label: 'Duration', value: '15 minutes' },
      { label: 'Specificity', value: 'Targeted to S. Typhi specific outer membrane antigens' },
      { label: 'Storage', value: '2°C to 30°C' },
    ],
  },
  {
    id: 'hbsag-rapid-test-kit',
    name: 'Hepatitis B Surface Antigen (HBsAg) Rapid Test Kit',
    category: 'diagnostic-kits',
    subcategory: 'Infectious Disease Serology',
    packaging: 'Box of 25 or 50 Individually Sealed Cassettes',
    tagline: 'High-sensitivity immunochromatographic assay for Hepatitis B Virus (HBV) screening.',
    description:
      'A rapid, single-step chromatographic immunoassay for the qualitative detection of Hepatitis B Surface Antigen (HBsAg) in human whole blood, serum, or plasma. Essential for mandatory antenatal screening, pre-operative screening, and blood donor qualification across healthcare facilities.',
    badge: 'ANC & Blood Donor Mandatory',
    storage: 'Store at 2°C – 30°C',
    highlights: [
      'High analytical sensitivity: ≤ 1.0 ng/mL HBsAg',
      'Detects all major HBV subtypes (ad and ay)',
      'Results in 15 minutes with distinct control and test lines',
      'Compatible with fingerstick whole blood, venous blood, and serum/plasma',
      'Certified for clinical diagnostic screening and health worker occupational monitoring',
    ],
    specs: [
      { label: 'Sensitivity Threshold', value: '1.0 ng/mL' },
      { label: 'Sample Types', value: 'Whole blood (fingerstick/venous), Serum, Plasma' },
      { label: 'Time to Result', value: '15 to 20 minutes' },
      { label: 'Clinical Accuracy', value: '> 99% specificity' },
      { label: 'Storage', value: '2°C to 30°C' },
    ],
  },
  {
    id: 'malaria-pf-rdt-kit',
    name: 'Malaria Pf Rapid Diagnostic Test Kit (RDT)',
    category: 'diagnostic-kits',
    subcategory: 'Rapid Diagnostic Tests (RDT)',
    packaging: 'Box of 25 Cassettes with Buffer & Capillary Tubes',
    tagline: 'Antigen-based HRP-2 rapid cassette for Plasmodium falciparum malaria.',
    description:
      'WHO-prequalified rapid lateral flow chromatographic immunoassay for the qualitative detection of Plasmodium falciparum Histidine-Rich Protein II (HRP-2) in human whole blood. Designed for immediate point-of-care malaria diagnosis in endemic counties across Western Kenya, Nyanza, and Coastal regions.',
    badge: 'WHO Prequalified Standard',
    storage: 'Store at 2°C – 30°C (Tropical Stability)',
    highlights: [
      'Detects Plasmodium falciparum HRP-2 antigen with high diagnostic sensitivity (> 99%)',
      'Sample volume: Only 5 μL of capillary whole blood via included disposable pipette',
      'Results in 15 minutes for rapid clinical decision making',
      'Pre-packaged with individual sterile lancets, alcohol swabs, and assay buffer',
      'Formulated for extreme tropical heat and humidity tolerance up to 30°C',
    ],
    specs: [
      { label: 'Target Antigen', value: 'Plasmodium falciparum Histidine-Rich Protein II (Pf HRP-2)' },
      { label: 'Sensitivity', value: '> 99% at ≥ 100 parasites/μL' },
      { label: 'Specimen', value: '5 μL whole blood (fingerstick or EDTA)' },
      { label: 'Reading Time', value: '15 minutes' },
      { label: 'Packaging', value: '25 cassettes/box with buffer vials and transfer pipettes' },
    ],
  },
  {
    id: 'blood-grouping-antisera-kit',
    name: 'Blood Grouping Antisera Kit (Anti-A, Anti-B, Anti-D)',
    category: 'diagnostic-kits',
    subcategory: 'Immunohematology & Blood Banking',
    packaging: 'Set of 3 × 10 mL Dropper Vials (Anti-A Blue, Anti-B Yellow, Anti-D Clear)',
    tagline: 'High-potency monoclonal typing antisera for ABO and Rhesus (D) forward grouping.',
    description:
      'Monoclonal IgM blood grouping typing reagents formulated from murine hybridoma cell lines. Delivers rapid, robust, macroscopically visible agglutination without non-specific rouleaux formation, ensuring infallible ABO blood group forward typing and RhD status determination in maternity, emergency triage, and blood transfusion services.',
    badge: 'Monoclonal High Potency',
    storage: 'Store at 2°C – 8°C (Do Not Freeze)',
    highlights: [
      'Monoclonal IgM formulation: High avidity with intense agglutination in under 30 seconds',
      'Color-coded dropper bottles: Anti-A (Blue), Anti-B (Yellow), Anti-D (Clear/Colorless)',
      'Reliably identifies weak A and B variants without cross-reactivity',
      'Anti-D detects normal D and major partial D/weak D phenotypes',
      'Suitable for slide, micro-tube, and microplate agglutination techniques',
    ],
    specs: [
      { label: 'Reagent Set', value: 'Anti-A (Blue), Anti-B (Yellow), Anti-D (Clear)' },
      { label: 'Reagent Source', value: 'Purified murine monoclonal IgM' },
      { label: 'Avidity Time', value: '< 15 seconds (macroscopic clumps)' },
      { label: 'Volume', value: '10 mL per dropper bottle (approx. 200 tests/vial)' },
      { label: 'Preservative', value: '< 0.1% Sodium Azide' },
    ],
  },
  {
    id: 'ahg-coombs-reagent',
    name: 'Anti-Human Globulin Reagent (AHG / Coomb’s Reagent)',
    category: 'diagnostic-kits',
    subcategory: 'Immunohematology & Blood Banking',
    packaging: '10 mL Dropper Bottle (Green Color-Coded)',
    tagline: 'Polyspecific Anti-Human Globulin for direct and indirect antiglobulin crossmatching.',
    description:
      'Polyspecific Anti-Human Globulin (Coomb’s Reagent) containing anti-IgG and anti-C3d antibodies for detection of incomplete antibodies coating red blood cells. Crucial for pre-transfusion crossmatching, antibody screening, investigation of hemolytic disease of the newborn (HDN), and autoimmune hemolytic anemia (AIHA).',
    badge: 'Blood Bank Essential',
    storage: 'Store at 2°C – 8°C',
    highlights: [
      'Polyspecific formulation: Potent blend of rabbit anti-human IgG and murine anti-C3d',
      'Color-coded diagnostic green dye to verify addition of reagent to test tubes',
      'Clear, clean negative backgrounds with sharp, unequivocal positive agglutination',
      'Validated for Direct Antiglobulin Test (DAT) and Indirect Antiglobulin Test (IAT)',
      'Essential reagent for hospital blood transfusion and compatibility testing',
    ],
    specs: [
      { label: 'Specificity', value: 'Polyspecific (Anti-IgG + Anti-C3d)' },
      { label: 'Volume', value: '10 mL dropper bottle' },
      { label: 'Color', value: 'Distinct diagnostic green' },
      { label: 'Techniques', value: 'Direct Coomb’s Test (DAT) & Indirect Coomb’s Test (IAT)' },
      { label: 'Storage', value: '2°C to 8°C' },
    ],
  },
  {
    id: 'bovine-serum-albumin',
    name: 'Bovine Serum Albumin 22% / 30% (BSA Reagent)',
    category: 'diagnostic-kits',
    subcategory: 'Immunohematology & Blood Banking',
    packaging: '10 mL Dropper Bottle',
    tagline: 'Serological potentiating reagent for antibody detection, titration, and blood grouping.',
    description:
      'Prepared from high-purity bovine plasma, Bovine Serum Albumin (22% and 30% concentrations) acts as a dielectric potentiator in clinical blood banking. Reduces the zeta potential between negatively charged erythrocytes, facilitating rapid agglutination by non-agglutinating incomplete IgG antibodies.',
    badge: 'Serology Potentiator',
    storage: 'Store at 2°C – 8°C',
    highlights: [
      'Available in 22% and 30% pure bovine albumin concentrations',
      'Enhances sensitivity of crossmatching and Rh antibody detection',
      'Free from non-specific agglutinins, hemolysins, and protease enzymes',
      'Optimally buffered pH to preserve erythrocyte membrane integrity',
      'Standardized for hospital transfusion compatibility benches',
    ],
    specs: [
      { label: 'Concentration', value: '22% or 30% Bovine Serum Albumin (BSA)' },
      { label: 'Volume', value: '10 mL dropper bottle' },
      { label: 'pH', value: '7.2 ± 0.2' },
      { label: 'Application', value: 'Blood bank crossmatching, Rh antibody titration' },
      { label: 'Storage', value: '2°C to 8°C' },
    ],
  },
  {
    id: 'urinalysis-strips-10-parameter',
    name: 'Urinalysis Reagent Test Strips (10-Parameter)',
    category: 'diagnostic-kits',
    subcategory: 'Routine Biochemistry & Screening',
    packaging: 'Canister of 100 Multi-Parameter Test Strips',
    tagline: '10-parameter comprehensive clinical urine diagnostic dipsticks with desiccant canister.',
    description:
      'Multiparameter clinical urinalysis test strips for qualitative and semi-quantitative determination of 10 key metabolic, renal, and hepatic parameters: Glucose, Protein, Leukocytes, Nitrite, Urobilinogen, Blood, Bilirubin, Ketones, Specific Gravity, and pH. Read visually against color chart or via automated strip readers.',
    badge: '10 Critical Biomarkers',
    storage: 'Store at 15°C – 30°C in Original Sealed Canister',
    highlights: [
      '10 Parameters on single strip: LEU, NIT, URO, PRO, pH, BLO, SG, KET, BIL, GLU',
      'Clear color reaction pads with distinct, non-overlapping color gradations',
      'Reading time: 60 seconds (Leukocytes at 90–120 seconds)',
      'High-grade moisture-absorbing desiccant cap protects pads against tropical humidity',
      'Compatible with visual chart comparison and standard automated strip photometers',
    ],
    specs: [
      { label: 'Parameters Tested', value: 'Leukocytes, Nitrite, Urobilinogen, Protein, pH, Blood, Specific Gravity, Ketone, Bilirubin, Glucose' },
      { label: 'Quantity', value: '100 test strips per canister' },
      { label: 'Readout', value: 'Visual comparison chart printed on canister label' },
      { label: 'Read Time', value: '60 seconds' },
      { label: 'Application', value: 'Routine clinic triage, UTI detection, Renal & Diabetic screening' },
    ],
  },
  {
    id: 'hpylori-antigen-test-kit',
    name: 'Helicobacter Pylori Antigen Rapid Test Kit (H. Pylori Stool)',
    category: 'diagnostic-kits',
    subcategory: 'Rapid Diagnostic Tests (RDT)',
    packaging: 'Box of 25 Cassettes with Stool Collection Tubes & Diluent',
    tagline: 'Non-invasive lateral flow antigen cassette for active Helicobacter pylori infection.',
    description:
      'A rapid immunochromatographic assay for the direct qualitative detection of Helicobacter pylori antigens in human stool specimens. Detects active, ongoing bacterial colonization of the gastric mucosa, offering clinical superiority over antibody tests that cannot distinguish active from resolved infection.',
    badge: 'Active Infection Marker',
    storage: 'Store at 2°C – 30°C',
    highlights: [
      'Direct detection of active H. pylori infection (treatment monitoring & primary diagnosis)',
      'Specimen collection tube features integrated threaded sampling stick and extraction buffer',
      'Accurate results within 10 to 15 minutes',
      'High clinical sensitivity and specificity compared to endoscopy biopsy and urea breath test',
      'Standardized for outpatient gastroenterology and general clinic consultations',
    ],
    specs: [
      { label: 'Methodology', value: 'Lateral flow chromatographic sandwich immunoassay' },
      { label: 'Specimen', value: 'Human stool (fecal) specimen' },
      { label: 'Duration', value: '10 to 15 minutes' },
      { label: 'Kit Accessories', value: '25 cassettes, 25 stool collection buffer tubes' },
      { label: 'Storage', value: 'Room temperature (2°C – 30°C)' },
    ],
  },
  {
    id: 'blood-glucose-meter-strips',
    name: 'Clinical Blood Glucose Meter & Test Strips Kit',
    category: 'diagnostic-kits',
    subcategory: 'Routine Biochemistry & Screening',
    packaging: 'Glucometer Kit + Canister of 50 Glucose Test Strips',
    tagline: 'Electrochemical biosensor glucometer for rapid blood glucose monitoring with code-free strips.',
    description:
      'Precision digital blood glucose monitoring system utilizing electrochemical biosensor test strips. Delivers blood sugar readings in 5 seconds from a tiny 0.6 μL capillary whole blood droplet. Includes glucometer, lancing device, sterile lancets, and 50 test strips.',
    badge: '5-Second Result',
    storage: 'Store Strips at 4°C – 30°C',
    highlights: [
      'Ultra-fast 5-second test turnaround time with automatic sample sip-in',
      'Tiny sample volume: Only 0.6 μL whole blood from fingertip or forearm',
      'No coding required (auto-calibrated strip technology eliminates error)',
      'Large LCD screen with 500-test memory and 7, 14, and 30-day averaging',
      'Hypo/Hyperglycemia alert notifications for diabetic patient triage',
    ],
    specs: [
      { label: 'Measuring Range', value: '1.1 to 33.3 mmol/L (20 to 600 mg/dL)' },
      { label: 'Sample Volume', value: '0.6 μL capillary blood' },
      { label: 'Test Time', value: '5 seconds' },
      { label: 'Strip Packaging', value: '50 strips per desiccant vial' },
      { label: 'Power', value: 'Standard CR2032 button cell battery' },
    ],
  },

  // ==========================================
  // 2. BLOOD COLLECTION & SPECIMEN TUBES (PHLEBOTOMY)
  // ==========================================
  {
    id: 'edta-vacuum-tubes',
    name: 'EDTA Blood Collection Tubes (Purple Top — K2/K3 EDTA)',
    category: 'collection-phlebotomy',
    subcategory: 'Vacuum Blood Tubes',
    packaging: 'Tray of 100 Tubes | Master Carton of 1,200 Tubes',
    tagline: 'Standardized vacuum blood collection tubes with dipotassium/tripotassium EDTA for CBC.',
    description:
      'Sterile medical PET vacuum blood collection tubes spray-coated with K2 EDTA or K3 EDTA anticoagulant. Prevents blood coagulation by binding calcium ions while preserving cellular morphology of erythrocytes, leukocytes, and thrombocytes. The standard tube for Complete Blood Count (CBC), ESR, and HbA1c testing.',
    badge: 'Hematology Standard',
    highlights: [
      'Available volumes: 2 mL, 3 mL, and 4 mL vacuum draw volumes',
      'Uniform spray-dried K2/K3 EDTA additive ensures rapid dissolution and clot prevention',
      'Shatterproof medical PET (Polyethylene Terephthalate) tube material',
      'Safety rubber stopper with plastic shield prevents aerosol generation on cap removal',
      'ISO 6710 and CLSI color-coded purple / lavender closure',
    ],
    specs: [
      { label: 'Additive', value: 'K2 EDTA (Dipotassium) / K3 EDTA (Tripotassium)' },
      { label: 'Closure Color', value: 'Purple / Lavender (ISO 6710)' },
      { label: 'Draw Volumes', value: '2.0 mL, 3.0 mL, 4.0 mL' },
      { label: 'Tube Size', value: '13 × 75 mm' },
      { label: 'Inversion Rate', value: '8 to 10 gentle inversions immediately after phlebotomy' },
    ],
  },
  {
    id: 'plain-clot-activator-tubes',
    name: 'Plain Blood Collection Tubes (Red Top — Clot Activator)',
    category: 'collection-phlebotomy',
    subcategory: 'Vacuum Blood Tubes',
    packaging: 'Tray of 100 Tubes | Master Carton of 1,200 Tubes',
    tagline: 'Vacuum serum tubes spray-coated with micronized silica clot activator particles.',
    description:
      'Sterile vacuum tubes designed for serum clinical biochemistry, immunology, blood donor screening, and serological assays. Spray-coated with micronized silica particles that accelerate the natural coagulation cascade, yielding clear serum after centrifugation without fibrin residue.',
    badge: 'Serum Chemistry Standard',
    highlights: [
      'Draw volumes: 4.0 mL, 5.0 mL, and 10.0 mL',
      'Accelerated clotting time: Full clot retraction achieved in 20–30 minutes',
      'Clear serum separation with minimal hemolysis',
      'ISO red color-coded safety cap with leak-proof butyl rubber seal',
      'Compatible with all automated clinical chemistry and ELISA centrifuges',
    ],
    specs: [
      { label: 'Additive', value: 'Silica Clot Activator (Micronized)' },
      { label: 'Closure Color', value: 'Red (ISO 6710)' },
      { label: 'Draw Volumes', value: '4.0 mL, 5.0 mL, 10.0 mL' },
      { label: 'Centrifugation', value: '1300–2000 × g for 10 minutes' },
      { label: 'Primary Use', value: 'Clinical chemistry, LFTs, UECs, lipid profile, viral serology' },
    ],
  },
  {
    id: 'vacutainer-tubes',
    name: 'Vacuum Blood Collection Tubes (Full Color-Coded Series)',
    category: 'collection-phlebotomy',
    subcategory: 'Vacuum Blood Tubes',
    packaging: 'Trays of 100 Tubes (Purple, Red, Yellow SST, Blue Top)',
    tagline: 'Complete range of ISO standardized vacuum blood collection tubes for Kenya labs.',
    description:
      'Comprehensive inventory of sterile medical vacuum blood collection tubes covering all diagnostic departments: Purple Top (EDTA for CBC), Red Top (Clot Activator for serum), Yellow Top (SST Gel & Clot Activator for chemistry), and Light Blue Top (Sodium Citrate 3.2% for coagulation PT/INR).',
    badge: 'Full Clinic Range',
    highlights: [
      'Purple Top (EDTA): Routine CBC, blood grouping, and HbA1c',
      'Red Top (Plain Clot Activator): Serum clinical chemistry and serological tests',
      'Yellow Top (SST Gel): Inert polymer barrier gel yields ultra-clean serum',
      'Blue Top (Sodium Citrate 1:9): Coagulation profile, PT, APTT, D-Dimer',
      'Standard 13×75 mm and 13×100 mm tube dimensions with precise vacuum draw',
    ],
    specs: [
      { label: 'Range', value: 'Purple (EDTA), Red (Plain), Yellow (Gel SST), Blue (Citrate)' },
      { label: 'Packaging', value: '100 tubes/foam rack; 1,200 tubes/carton' },
      { label: 'Certification', value: 'ISO 13485, CE Medical Device' },
      { label: 'Sterility', value: 'Gamma radiation sterilized' },
      { label: 'Shelf Life', value: '18 to 24 months' },
    ],
  },
  {
    id: 'vacutainer-needles',
    name: 'Vacutainer Multi-Sample Blood Collection Needles',
    category: 'collection-phlebotomy',
    subcategory: 'Phlebotomy Supplies',
    packaging: 'Box of 100 Needles | Carton of 1,000 Needles',
    tagline: 'Precision-beveled multi-sample needles with safety rubber sleeve for painless venipuncture.',
    description:
      'Sterile, stainless steel multi-sample needles designed for evacuated blood collection tube systems. Featuring ultra-sharp tri-beveled lancet tips with silicone coating to minimize patient insertion discomfort, and a synthetic rubber sleeve that prevents blood leakage when switching multiple tubes.',
    badge: 'Tri-Bevel Silicone Coated',
    highlights: [
      'Available in standard gauge sizes: 21G (Green hub) and 22G (Black hub)',
      'Precision tri-bevel edge reduces tissue trauma and hematoma formation',
      'Self-sealing elastomeric sleeve allows consecutive multiple tube filling without leakage',
      'Color-coded translucent protective shield for rapid gauge recognition',
      'Sterile individually sealed with tamper-evident break-apart label',
    ],
    specs: [
      { label: 'Gauges', value: '21G × 1.5" (Green) | 22G × 1.5" (Black)' },
      { label: 'Needle Material', value: 'Medical-grade AISI 304 Stainless Steel' },
      { label: 'Coating', value: 'Medical-grade silicone lubricant' },
      { label: 'Sterilization', value: 'Ethylene Oxide (EO) gas sterilized' },
      { label: 'Packaging', value: '100 needles per dispenser box' },
    ],
  },
  {
    id: 'phlebotomy-tourniquet',
    name: 'Quick-Release Elastic Phlebotomy Tourniquet',
    category: 'collection-phlebotomy',
    subcategory: 'Phlebotomy Supplies',
    packaging: 'Individual Sealed Pack | Clinic Multipack',
    tagline: 'Washable elastic compression band with ergonomic quick-release buckle.',
    description:
      'High-elasticity fabric tourniquet equipped with a sturdy ABS plastic buckle mechanism. Allows rapid, one-handed tensioning and instantaneous quick-release with zero skin pinching, facilitating efficient vein engorgement during clinical phlebotomy and IV cannulation.',
    badge: 'One-Hand Quick Release',
    highlights: [
      'Smooth plastic buckle allows gradual tensioning and instant one-touch release',
      'Soft, skin-friendly elastic cotton-polyester ribbon prevents painful skin pinching',
      'Latex-free material safe for allergic patients and technologists',
      'Washable and autoclavable at low temperatures for hygiene compliance',
      'Compact and durable for phlebotomy trays and blood donation camps',
    ],
    specs: [
      { label: 'Band Dimensions', value: 'Width: 25 mm | Length: 400–450 mm' },
      { label: 'Buckle Mechanism', value: 'ABS plastic quick-release catch with lock button' },
      { label: 'Elasticity', value: 'High recovery stretch band' },
      { label: 'Material', value: 'Latex-free medical elastic cotton ribbon' },
      { label: 'Color Options', value: 'Medical Blue, Purple, Orange' },
    ],
  },
  {
    id: 'sterile-urine-containers',
    name: 'Sterile Urine Specimen Containers 60 mL (100 PCS)',
    category: 'collection-phlebotomy',
    subcategory: 'Specimen Containers',
    packaging: 'Bag of 100 Individually Wrapped Sterile Cups',
    tagline: 'Leak-proof polypropylene urine specimen containers with secure screw cap and patient label.',
    description:
      'Medical-grade virgin polypropylene specimen collection cups designed for urine routine, urinalysis, microscopy, and microbiology culture. Features a leak-proof polyethylene screw cap, molded volume graduations up to 60 mL, and a matte writable patient information label area.',
    badge: '100% Leak-Proof Cap',
    highlights: [
      'Volume capacity: 60 mL with clear embossed volumetric graduations',
      'Threaded screw-top closure guarantees 100% leak-proof seal during transport',
      'Matte frosted write-on area for patient name, hospital number, date, and time',
      'Individually peel-packed sterile with EO sterilization guarantee',
      'Non-cytotoxic virgin medical PP material compatible with automated dipstick testing',
    ],
    specs: [
      { label: 'Capacity', value: '60 mL (calibrated graduations at 10 mL intervals)' },
      { label: 'Cup Material', value: 'High-transparency medical polypropylene (PP)' },
      { label: 'Cap Style', value: 'Red / Yellow leak-proof threaded screw cap' },
      { label: 'Sterility', value: 'Sterile (EO gas), individually wrapped' },
      { label: 'Packaging', value: '100 cups per bag; 500 cups per master carton' },
    ],
  },
  {
    id: 'poly-pots-specimen-containers',
    name: 'Poly Pots Stool Specimen Containers with Spoon',
    category: 'collection-phlebotomy',
    subcategory: 'Specimen Containers',
    packaging: 'Bag of 100 Specimen Poly Pots',
    tagline: 'Hygienic stool specimen containers with integrated spoon lid for parasitology.',
    description:
      'Graduated polystyrene poly pots engineered for the hygienic collection and transport of stool and sputum specimens. The screw cap features an integrated collection scoop/spoon that allows clean, non-contact sampling of solid or semi-solid fecal matter for routine stool microscopy and occult blood testing.',
    badge: 'Integrated Spoon Lid',
    highlights: [
      'Screw cap includes built-in extended sampling scoop for hygienic stool handling',
      'Leak-tight threaded seal prevents odor leakage and biohazard spills',
      'High optical clarity transparent walls for rapid visual consistency assessment',
      'Pre-printed or writable patient label on container wall',
      'Essential consumable for parasitology, ova & cysts, and stool culture workflows',
    ],
    specs: [
      { label: 'Capacity', value: '30 mL / 60 mL' },
      { label: 'Material', value: 'Medical-grade clear polystyrene (PS) / Polypropylene' },
      { label: 'Closure', value: 'Screw cap with attached specimen collection spoon' },
      { label: 'Application', value: 'Stool for ova/cysts/parasites, Stool Occult Blood (FOB), Sputum' },
      { label: 'Quantity', value: '100 pieces per pack' },
    ],
  },
  {
    id: 'esr-westergren-tube-stand',
    name: 'Westergren ESR Stand & Graduated Sedimentation Tubes',
    category: 'collection-phlebotomy',
    subcategory: 'Hematology Manual Testing',
    packaging: '10-Well ESR Stand + Box of Graduated Westergren Pipettes',
    tagline: 'Standard Westergren erythrocyte sedimentation rate rack with spring-loaded tube holders.',
    description:
      'Manual Westergren Erythrocyte Sedimentation Rate (ESR) testing station comprising a 10-tube heavy acrylic/metal rack with leveling bubble, leveling screws, and calibrated 0–200 mm Westergren glass/plastic pipettes. The gold standard reference method for monitoring systemic inflammation.',
    badge: 'Standard Westergren Method',
    highlights: [
      '10-well capacity with individual spring-loaded silicone pads for leak-free pipette sealing',
      'Integrated circular leveling bubble and adjustable leveling feet ensure strict vertical alignment',
      'Clear, bold 0 to 200 mm graduated millimeter scales on Westergren tubes',
      'Heavy-duty non-slip base prevents bench vibration disruption during sedimentation',
      'Simple, robust, calibration-free manual hematology workhorse',
    ],
    specs: [
      { label: 'Capacity', value: '10 Westergren tubes simultaneously' },
      { label: 'Scale Range', value: '0 – 200 mm graduation' },
      { label: 'Stand Features', value: 'Spring clip pressure pads, Spirit leveling bubble, Adjustable feet' },
      { label: 'Test Duration', value: '1 Hour standard sedimentation reading' },
      { label: 'Standard', value: 'ICSH (International Council for Standardization in Haematology)' },
    ],
  },

  // ==========================================
  // 3. MICROSCOPY GLASSWARE & STAINING KITS
  // ==========================================
  {
    id: 'microscope-slides-plain',
    name: 'Clinical Microscope Glass Slides Plain (Model 7101)',
    category: 'microscopy-staining',
    subcategory: 'Microscopy Glassware',
    packaging: 'Box of 50 or 72 Slides | Vacuum Pack of 10 Boxes',
    tagline: 'Standard 25.4 × 76.2 mm clear float glass slides with 90° ground safety edges.',
    description:
      'Pre-cleaned, degreased clinical microscope slides manufactured from premium optical soda-lime float glass. Completely clear on both ends with 90° ground safety edges that protect technologists from accidental cuts and glove punctures. Ideal for routine wet mounts, urinalysis sediment, and blood smears.',
    badge: 'High Optical Clarity',
    highlights: [
      'Standard clinical dimensions: 25.4 × 76.2 mm (1" × 3"), thickness 1.0–1.2 mm',
      'Pre-cleaned, lint-free, and hydrophilically balanced for uniform smear spreading',
      'Precision 90° ground edges prevent glove punctures and fingertip abrasions',
      'Packed in moisture-proof vacuum cellophane packs to prevent glass fogging and sticking',
      'Uniform flatness ensures distortion-free viewing under 40X and 100X oil immersion',
    ],
    specs: [
      { label: 'Model', value: '7101 Plain' },
      { label: 'Dimensions', value: '25.4 mm × 76.2 mm (1" × 3")' },
      { label: 'Thickness', value: '1.0 mm – 1.2 mm' },
      { label: 'Material', value: 'High-transmittance soda-lime float glass' },
      { label: 'Packaging', value: '50 pcs/box or 72 pcs/box; 50 boxes/carton' },
    ],
  },
  {
    id: 'microscope-slides-frosted',
    name: 'Microscope Slides Single Frosted End (Model 7102)',
    category: 'microscopy-staining',
    subcategory: 'Microscopy Glassware',
    packaging: 'Box of 50 or 72 Slides | Vacuum Pack of 10 Boxes',
    tagline: 'Pre-cleaned glass slides with 20 mm sandblasted frosted end for permanent labeling.',
    description:
      'Standard 25.4 × 76.2 mm clinical microscope slides with a fine sandblasted frosted finish on one end (approx. 20 mm). Allows clean, smear-free sample identification using lead pencil, diamond marker, or lab histology pens. Resistant to staining solvents and alcohol washes.',
    badge: 'Sandblasted Labeling End',
    highlights: [
      'Sandblasted 20 mm frosted writing zone accepts pencil, histology pens, and barcode labels',
      'Frosted labeling surface will not wash off during Gram’s, Giemsa, or ZN alcohol decolorization',
      'Pre-cleaned and degreased for immediate smear preparation upon opening',
      'Ground safety edges provide comfortable handling and tear-free glove interaction',
      'Essential for hospital pathology, cytology, and routine microbiology record-keeping',
    ],
    specs: [
      { label: 'Model', value: '7102 Single-End Frosted' },
      { label: 'Dimensions', value: '25.4 mm × 76.2 mm (1" × 3")' },
      { label: 'Frosted Area', value: '20 mm on one side of single end' },
      { label: 'Edge Finish', value: '90° ground edges' },
      { label: 'Packaging', value: '50 or 72 slides/box' },
    ],
  },
  {
    id: 'cover-slips',
    name: 'Microscope Cover Slips (Cover Glasses No. 1)',
    category: 'microscopy-staining',
    subcategory: 'Microscopy Glassware',
    packaging: 'Hinged Dispenser Box of 100 Pcs | Pack of 10 Boxes',
    tagline: 'Ultra-thin No. 1 borosilicate glass coverslips for crystal-clear slide examination.',
    description:
      'Square optical cover slips fabricated from pure, non-corrosive borosilicate glass. With uniform No. 1 thickness (0.13 to 0.17 mm), they keep liquid specimens in a flat plane, prevent objective lens contamination with immersion oil, and deliver bubble-free clarity across high-power 40X and 100X fields.',
    badge: 'No. 1 Borosilicate (0.13–0.17mm)',
    highlights: [
      'Available sizes: 22 × 22 mm and 24 × 24 mm',
      'Uniform No. 1 thickness (0.13 mm to 0.17 mm) optimized for standard microscope objective optics',
      'Free from bubbles, scratches, and striations',
      'Interleaving paper between coverslips prevents sticking in humid tropical laboratory conditions',
      'Packed in plastic dispenser boxes with molded hinged lid',
    ],
    specs: [
      { label: 'Sizes', value: '22 × 22 mm | 24 × 24 mm' },
      { label: 'Thickness Grade', value: 'No. 1 (0.13 mm – 0.17 mm)' },
      { label: 'Material', value: 'Optical-grade borosilicate glass' },
      { label: 'Quantity', value: '100 pieces per dispenser box' },
      { label: 'Properties', value: 'Non-corrosive, non-fogging, distortion-free' },
    ],
  },
  {
    id: 'grams-staining-kit',
    name: 'Gram’s Staining Kit (4 × 250 mL / 4 × 500 mL)',
    category: 'microscopy-staining',
    subcategory: 'Staining Reagents',
    packaging: 'Set of 4 Reagent Bottles with Dispenser Caps',
    tagline: 'Standard 4-step differential staining kit for Gram-positive and Gram-negative bacteria.',
    description:
      'Complete, ready-to-use 4-step bacteriological staining kit for differentiating Gram-positive and Gram-negative microorganisms. Formulated with stabilized Crystal Violet (primary stain), Lugol’s Iodine (mordant), Decolorizing Solution (acetone-alcohol), and Safranin / Neutral Red (counterstain).',
    badge: 'Microbiology Gold Standard',
    storage: 'Store at 15°C – 25°C',
    highlights: [
      'Complete 4-component system: Crystal Violet, Lugol’s Iodine, Decolorizer, Safranin',
      'Fast differential staining procedure in under 3 minutes',
      'Provides intense violet/purple Gram-positive and bright pink/red Gram-negative coloration',
      'Bottles fitted with flip-top drop-control dispensing caps to minimize bench staining mess',
      'Quality verified for bacterial morphology in CSF, sputum, urethral swabs, and culture plates',
    ],
    specs: [
      { label: 'Kit Components', value: 'Crystal Violet (250 mL), Lugol’s Iodine (250 mL), Decolorizer (250 mL), Safranin (250 mL)' },
      { label: 'Stain Type', value: 'Differential bacteriological stain' },
      { label: 'Procedure Time', value: 'Approx. 2.5 to 3 minutes' },
      { label: 'Results', value: 'Gram-positive: Deep Purple / Violet | Gram-negative: Pink / Red' },
      { label: 'Storage', value: 'Room temperature (15°C – 25°C)' },
    ],
  },
  {
    id: 'malaria-field-staining-kit',
    name: 'Malaria Field Staining Kit (Field Stain A & B)',
    category: 'microscopy-staining',
    subcategory: 'Staining Reagents',
    packaging: 'Twin Set of 2 × 250 mL or 2 × 500 mL Bottles',
    tagline: 'Ultra-fast Romanowsky stain for thick blood film malaria parasite identification.',
    description:
      'Field’s Stain is an ultra-fast Romanowsky-type staining method specifically optimized for thick blood smears in malaria microscopy. Consists of Field Stain A (buffered methylene blue/azure) and Field Stain B (eosin in buffer). Delivers stained blood films in under 15 seconds.',
    badge: '15-Second Thick Film Stain',
    storage: 'Store at 15°C – 25°C',
    highlights: [
      'Ultra-fast staining: Stains thick blood smears in just 5 to 10 seconds without prior fixation',
      'Clear differentiation of Plasmodium chromatin (red-purple) and cytoplasm (bright blue)',
      'High contrast against lysed background red cell debris',
      'Bottles designed with wide necks for direct slide dipping or dropper dispensing',
      'Essential standard for rural health centers, high-volume malaria clinics, and hospital labs',
    ],
    specs: [
      { label: 'Components', value: 'Field Stain A (Methylene Blue & Azure) | Field Stain B (Eosin Y)' },
      { label: 'Volume', value: '2 × 250 mL or 2 × 500 mL' },
      { label: 'Staining Time', value: '5 to 10 seconds dip in each stain' },
      { label: 'Target', value: 'Plasmodium falciparum ring forms, trophozoites, schizonts, gametocytes' },
      { label: 'Storage', value: '15°C to 25°C' },
    ],
  },
  {
    id: 'afb-staining-kit',
    name: 'AFB Staining Kit (Ziehl-Neelsen TB Staining System)',
    category: 'microscopy-staining',
    subcategory: 'Staining Reagents',
    packaging: 'Set of 3 × 250 mL Reagent Bottles',
    tagline: 'Classic hot Ziehl-Neelsen acid-fast staining kit for Mycobacterium tuberculosis diagnosis.',
    description:
      'Complete Ziehl-Neelsen (ZN) acid-fast bacilli staining set for the microscopic detection of Mycobacterium tuberculosis in clinical sputum, pleural fluid, and gastric aspirates. Includes Strong Carbol Fuchsin, Acid Alcohol Decolorizer (3% HCl in Ethanol), and 0.3% Methylene Blue counterstain.',
    badge: 'TB Acid-Fast Standard',
    storage: 'Store at 15°C – 25°C',
    highlights: [
      'Complete 3-reagent kit: Carbol Fuchsin (250 mL), Acid Alcohol (250 mL), Methylene Blue (250 mL)',
      'Provides intense, bright red rod-shaped Acid-Fast Bacilli (AFB) against a calm blue background',
      'Standardized for national TB control program guidelines and hospital sputum microscopy',
      'Resistant to over-decolorization when standard timings are observed',
      'Ready-to-use solutions with long shelf life',
    ],
    specs: [
      { label: 'Components', value: 'Strong Carbol Fuchsin, Acid Alcohol 3%, Methylene Blue 0.3%' },
      { label: 'Volume', value: '3 × 250 mL' },
      { label: 'Staining Method', value: 'Classic Hot Ziehl-Neelsen (ZN) Technique' },
      { label: 'Visual Result', value: 'Acid-fast bacilli: Bright Red | Background tissue & cocci: Deep Blue' },
      { label: 'Target', value: 'Mycobacterium tuberculosis & Mycobacterium leprae' },
    ],
  },

  // ==========================================
  // 4. LABORATORY PLASTICWARE & ACCESSORIES
  // ==========================================
  {
    id: 'yellow-tips-200ul',
    name: 'Universal Pipette Tips 200 μL (Yellow Tips)',
    category: 'plasticware-general',
    subcategory: 'Liquid Handling',
    packaging: 'Bulk Bag of 1,000 Tips | 96-Tip Racks Available',
    tagline: 'Precision-molded virgin polypropylene yellow tips compatible with all standard micropipettes.',
    description:
      'Universal 200 μL yellow micropipette tips manufactured from medical-grade virgin polypropylene. Featuring hydrophobic, low-retention interior surfaces, micro-orifice tip finish, and precision-molded graduation marks at 10 μL, 50 μL, and 100 μL for immediate pipetting volume verification.',
    badge: 'Universal Fit (0.5–200 μL)',
    highlights: [
      'Volume capacity: 0.5 μL to 200 μL with universal conical collar fit',
      'Certified RNase, DNase, Pyrogen, and endotoxin free',
      'Precision molded graduation markings (10 μL, 50 μL, 100 μL) for liquid volume verification',
      'Hydrophobic inner walls prevent sample retention and maximize dispensing accuracy',
      'Autoclavable at 121°C for 20 minutes; Compatible with Gilson, Eppendorf, Biohit, Thermo pipettes',
    ],
    specs: [
      { label: 'Capacity', value: '0.5 – 200 μL' },
      { label: 'Material', value: 'Virgin medical-grade polypropylene (PP)' },
      { label: 'Color', value: 'Yellow color-coded' },
      { label: 'Autoclavability', value: 'Fully autoclavable at 121°C (15 psi) for 20 min' },
      { label: 'Packaging', value: '1,000 pcs per bag' },
    ],
  },
  {
    id: 'blue-tips-1000ul',
    name: 'Universal Pipette Tips 1000 μL (Blue Tips)',
    category: 'plasticware-general',
    subcategory: 'Liquid Handling',
    packaging: 'Bulk Bag of 500 / 1,000 Tips',
    tagline: 'High-volume 1000 μL blue micropipette tips with universal tapered cone fit.',
    description:
      'Universal 1000 μL (1 mL) blue pipette tips manufactured from virgin medical-grade polypropylene. Engineered for high-volume reagent dispensing, buffer prep, biochemistry dilution, and serological sample aliquoting with zero sample hang-up.',
    badge: 'High Volume (100–1000 μL)',
    highlights: [
      'Volume capacity: 100 μL to 1000 μL (1 mL)',
      'Universal beveled cone collar fits all major single-channel micropipette brands',
      'Low retention resin ensures maximum sample recovery of viscous sera and enzymes',
      'Autoclavable at 121°C for 20 minutes',
      'Color-coded diagnostic blue for rapid workbench size identification',
    ],
    specs: [
      { label: 'Volume Range', value: '100 – 1000 μL' },
      { label: 'Color', value: 'Blue color-coded' },
      { label: 'Material', value: '100% pure medical polypropylene (PP)' },
      { label: 'Purity', value: 'DNase/RNase/Protease-free' },
      { label: 'Packaging', value: '500 pcs or 1,000 pcs per bag' },
    ],
  },
  {
    id: 'glass-test-tubes-pack',
    name: 'Borosilicate Glass Test Tubes 12 × 75 mm / 12 × 100 mm',
    category: 'plasticware-general',
    subcategory: 'Laboratory Glassware',
    packaging: 'Pack of 10 Pieces | Box of 100 Pieces',
    tagline: 'Heavy-duty uniform-wall borosilicate glass test tubes for heating and chemical reactions.',
    description:
      'Laboratory glass test tubes manufactured from high-quality 3.3 borosilicate glass. Resistant to thermal shock, boiling, and corrosive clinical laboratory acids. Featuring fire-polished rims and uniform wall thickness, they are ideal for blood grouping tube tests, Widal titration, and urine protein boiling tests.',
    badge: 'Borosilicate 3.3 Glass',
    highlights: [
      'Manufactured from thermal-shock resistant borosilicate 3.3 glass',
      'Fire-polished reinforced rim minimizes chipping and cracking during centrifugation',
      'Withstands direct open flame heating (e.g. urine heat-and-acetic-acid protein test)',
      'Autoclavable and reusable after routine acid-dichromate or detergent cleaning',
      'Available in standard clinical sizes: 12 × 75 mm (5 mL) and 12 × 100 mm (7 mL)',
    ],
    specs: [
      { label: 'Sizes', value: '12 × 75 mm (5 mL) | 12 × 100 mm (7 mL) | 16 × 100 mm (12 mL)' },
      { label: 'Material', value: 'Thermal-shock resistant borosilicate 3.3 glass' },
      { label: 'Rim Style', value: 'Smooth fire-polished rim' },
      { label: 'Bottom', value: 'Hemispherical round bottom' },
      { label: 'Packaging', value: '10 pcs/pack or 100 pcs/box' },
    ],
  },
  {
    id: 'wooden-applicator-sticks',
    name: 'Wooden Applicator Sticks (Smear & Stool Prep)',
    category: 'plasticware-general',
    subcategory: 'General Accessories',
    packaging: 'Box of 100 / 500 Pieces',
    tagline: 'Smooth, splinter-free natural birchwood sticks for smear preparation and sample mixing.',
    description:
      'Natural white birchwood applicator sticks with smooth, splinter-free surfaces and uniform diameter. Widely utilized in clinical laboratories for stool wet mount preparation, breaking blood clots, specimen transfer, and agglutination mixing on ceramic tiles.',
    badge: 'Splinter-Free Birchwood',
    highlights: [
      'Manufactured from high-tensile, uniform straight birchwood',
      'Smooth, polished, splinter-free finish ensures technologist glove safety',
      'Length: 150 mm (6 inches) with 2 mm diameter for comfortable handling',
      'Biodegradable and eco-friendly disposable laboratory accessory',
      'Essential for daily stool parasitology and serological agglutination mixing',
    ],
    specs: [
      { label: 'Length', value: '150 mm (6 inches)' },
      { label: 'Diameter', value: '2.0 mm uniform' },
      { label: 'Material', value: '100% natural white birchwood' },
      { label: 'Quantity', value: '100 or 500 sticks per pack' },
      { label: 'Primary Use', value: 'Stool smear preparation, clot retraction, tile mixing' },
    ],
  },
  {
    id: 'test-tube-rack-polypropylene',
    name: 'Autoclavable Test Tube Stand / Rack (40 / 60 Wells)',
    category: 'plasticware-general',
    subcategory: 'Laboratory Accessories',
    packaging: 'Single Assembled Unit | Pack of 5 Racks',
    tagline: 'Multi-tier detachable polypropylene test tube rack with alphanumeric well grid.',
    description:
      'Heavy-duty 3-tier test tube rack fabricated from chemical-resistant polypropylene (PP). Designed with molded alphanumeric grid coordinates for unambiguous specimen tube tracking during clinical chemistry, blood banking, and serology workflows. Submersible and fully autoclavable.',
    badge: 'Autoclavable Polypropylene',
    highlights: [
      'Multi-well layout accommodates standard 12 mm, 13 mm, and 16 mm test tubes and vacutainers',
      'Molded alphanumeric coordinates (A–E, 1–10) ensure flawless patient sample mapping',
      'Three-tier design provides secure vertical tube stabilization without tipping',
      'Autoclavable at 121°C; Highly resistant to laboratory disinfectants and alcohols',
      'Detachable snap-together frame can be disassembled for flat compact storage',
    ],
    specs: [
      { label: 'Capacity', value: '40 Wells or 60 Wells' },
      { label: 'Tube Diameter', value: 'Accommodates up to 13 mm or 16 mm diameter tubes' },
      { label: 'Material', value: 'Rigid polypropylene (PP)' },
      { label: 'Coordinates', value: 'Molded raised alphanumeric grid' },
      { label: 'Autoclavability', value: '121°C for 20 minutes' },
    ],
  },

  // ==========================================
  // 5. SAFETY, PPE & WASTE SEGREGATION
  // ==========================================
  {
    id: 'medical-examination-gloves',
    name: 'Medical Examination Gloves (Latex & Nitrile Powder-Free)',
    category: 'safety-waste',
    subcategory: 'Personal Protective Equipment',
    packaging: 'Dispenser Box of 100 Pcs (50 Pairs) | Carton of 10 Boxes',
    tagline: 'High-tensile powder-free examination gloves with micro-textured fingertips.',
    description:
      'Premium medical examination gloves available in Powder-Free Natural Rubber Latex and 100% Synthetic Nitrile (hypoallergenic). Engineered with micro-textured fingertips for sensitive pipetting and needle handling, beaded cuffs to resist roll-down, and strict AQL 1.5 pinhole inspection standards.',
    badge: 'AQL 1.5 Medical Grade',
    highlights: [
      'Variants: Powder-Free Natural Rubber Latex & 100% Synthetic Nitrile',
      'AQL 1.5 pinhole barrier standard compliant with EN 455 and ASTM D3578/D6319',
      'Micro-textured fingertips deliver superior wet and dry grip for delicate pipetting',
      'Beaded cuff prevents roll-down and facilitates rapid donning',
      'Sizes: Extra Small (XS), Small (S), Medium (M), Large (L), Extra Large (XL)',
    ],
    specs: [
      { label: 'Material', value: 'Natural Rubber Latex or Synthetic Nitrile (Powder-Free)' },
      { label: 'Quality Standard', value: 'AQL 1.5 Medical Examination Grade' },
      { label: 'Color', value: 'Latex: Natural Off-White | Nitrile: Medical Blue' },
      { label: 'Packaging', value: '100 pieces per dispenser box; 10 boxes per master carton' },
      { label: 'Sizes', value: 'XS, S, M, L, XL' },
    ],
  },
  {
    id: 'biohazard-sharps-container-5l',
    name: 'Biohazard Sharps Disposal Container (5 Liters)',
    category: 'safety-waste',
    subcategory: 'Biohazard Waste Management',
    packaging: 'Single Safety Unit | Bundle of 10 Units',
    tagline: 'Puncture-resistant high-density safety container for contaminated needles and lancets.',
    description:
      'Rigid, puncture-resistant biohazard sharps disposal container compliant with WHO, NEMA, and Ministry of Health (MoH) healthcare waste management standards. Designed with a tamper-proof rotating safety lid, needle unwinder notch, and a permanent locking mechanism once filled to maximum line.',
    badge: 'Puncture-Resistant WHO/MoH',
    highlights: [
      'Capacity: 5 Liters with prominent bold biohazard symbol and maximum fill level indicator',
      'Rigid puncture-proof, impact-resistant polypropylene prevents needle stick injuries',
      'Lid features integrated needle removal / unwinding notches for single-handed phlebotomy disposal',
      'Permanent dual-lock closure prevents reopening and accidental spillage when full',
      'Bright biohazard yellow body ensures instant visibility in phlebotomy booths',
    ],
    specs: [
      { label: 'Capacity', value: '5 Liters' },
      { label: 'Material', value: 'High-density puncture-proof polypropylene (PP)' },
      { label: 'Color', value: 'Safety Biohazard Yellow with bold warning graphics' },
      { label: 'Lid Feature', value: 'Needle notch remover + dual temporary & permanent lock' },
      { label: 'Standard', value: 'WHO/PQS/E10/SB01.1; MoH Kenya Compliant' },
    ],
  },
  {
    id: 'waste-segregation-bins-ryb',
    name: '3-Color Waste Segregation Pedal Bins (Red, Yellow, Black)',
    category: 'safety-waste',
    subcategory: 'Biohazard Waste Management',
    packaging: 'Complete 3-Bin Color-Coded System (Set of 3 Bins)',
    tagline: 'Color-coded foot-pedal waste segregation bins for infectious, sharp & general hospital waste.',
    description:
      'Standardized hospital waste segregation pedal bin set comprising three color-coded heavy-duty plastic bins: Yellow (Infectious biohazard clinical waste), Red (Highly infectious / anatomic / anatomical waste), and Black (Non-infectious general municipal waste). Built with hands-free foot pedals to enforce infection prevention control (IPC).',
    badge: 'MoH / NEMA IPC Compliant',
    highlights: [
      'Standard 3-color set compliant with Kenya Ministry of Health & NEMA healthcare waste guidelines',
      'Hands-free foot pedal operation prevents cross-contamination of healthcare worker hands',
      'Tight-fitting odor-seal lids contain airborne pathogens and suppress foul odor',
      'Smooth, non-porous interior allows easy chemical washing and bleach disinfection',
      'Available in 20L, 30L, and 50L heavy-duty hospital capacities',
    ],
    specs: [
      { label: 'Color Scheme', value: 'Yellow (Infectious), Red (Highly Infectious/Plastics), Black (General Waste)' },
      { label: 'Operation', value: 'Heavy-duty foot pedal mechanism with stainless linkage' },
      { label: 'Capacity Options', value: '30 Liters or 50 Liters per bin' },
      { label: 'Material', value: 'Virgin high-density polyethylene (HDPE), UV-stabilized' },
      { label: 'Regulatory Compliance', value: 'MoH Infection Prevention & Control (IPC); NEMA 2006 Standards' },
    ],
  },
];

/**
 * Generates prefilled WhatsApp click-to-chat URL for inquiries or orders regarding a specific consumable item.
 */
export function getConsumableWhatsAppUrl(
  item: ConsumableItem,
  options?: { customBaseUrl?: string }
): string {
  const baseUrl = (options?.customBaseUrl || SITE_CONFIG.url || 'https://www.medwisetechnicalconsulting.co.ke').replace(/\/$/, '');
  const productUrl = `${baseUrl}/products/consumables#${item.id}`;

  const message = [
    `Hello Medwise Technical Consulting,`,
    ``,
    `I would like to INQUIRE / ORDER via WhatsApp regarding the following laboratory consumable:`,
    `• Item: ${item.name}`,
    `• Packaging: ${item.packaging}`,
    `• Category: ${item.subcategory}`,
    `• Product Link: ${productUrl}`,
    ``,
    `Please provide current availability, bulk order terms for our health facility, and delivery timeline. Thank you!`,
  ].join('\n');

  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
