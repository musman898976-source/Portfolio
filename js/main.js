/**
 * MUHAMMAD USMAN | MECHANICAL DESIGN ENGINEER & PRODUCT DESIGNER
 * Interactive, Responsive & Precision Engineering Portfolio Architecture
 * All 51 Projects Preserved with Modal Case Study Viewer & Live Filtering
 */

const DEMO_PROJECTS = [
  {
    "id": "PROJ-01",
    "title": "Multi-Head Automated Industrial Machine",
    "category": "industrial",
    "categoryLabel": "Industrial Machinery",
    "isReal": true,
    "image": "assets/images/projects/1.jpeg",
    "shortDesc": "Detailed 3D CAD design of a multi-head industrial machine featuring multiple vertical working units, a rigid frame, machine enclosure and operator control interface. Focused on equipment layout, component positioning and professional visualization.",
    "specs": {
      "material": "Mild Steel frame, Stainless Steel working components, sheet-metal enclosure.",
      "process": "Welding, laser cutting, CNC machining and sheet-metal bending.",
      "tolerances": "+/- 0.02 mm (Precision Dowels & Guides)",
      "software": "SolidWorks 3D CAD, Motion & Interference"
    },
    "challenge": "Engineering challenge for Multi-Head Automated Industrial Machine: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Mild Steel frame, Stainless Steel working components, sheet-metal enclosure..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Multi-Head Automated Industrial Machine Primary Structure",
        "material": "Mild Steel frame",
        "process": "Welding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Stainless Steel working components",
        "process": "laser cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Mild Steel frame",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.02 mm (Precision Dowels & Guides).",
    "cadDrawing": "assets/images/project-cad-01.svg"
  },
  {
    "id": "PROJ-02",
    "title": "Quadcopter Drone Design",
    "category": "product-design",
    "categoryLabel": "Product Design",
    "isReal": true,
    "image": "assets/images/projects/2.png",
    "shortDesc": "Designed a quadcopter drone featuring a streamlined central body, four motor arms, propellers, landing supports and camera mounting arrangement. Developed the complete 3D model with attention to component placement and product aesthetics.",
    "specs": {
      "material": "Carbon Fiber Composite body, ABS housing, Aluminium 6061 motor mounts.",
      "process": "Composite molding, injection molding and CNC machining.",
      "tolerances": "+/- 0.08 mm (Tooling Draft & Parting Lines)",
      "software": "SolidWorks Surfacing & Keyshot Visualization"
    },
    "challenge": "Engineering challenge for Quadcopter Drone Design: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Carbon Fiber Composite body, ABS housing, Aluminium 6061 motor mounts..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Quadcopter Drone Design Primary Structure",
        "material": "Carbon Fiber Composite body",
        "process": "Composite molding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "ABS housing",
        "process": "injection molding and CNC machining.",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Carbon Fiber Composite body",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.08 mm (Tooling Draft & Parting Lines).",
    "cadDrawing": "assets/images/project-cad-02.svg"
  },
  {
    "id": "PROJ-03",
    "title": "Front-End Loader Vehicle",
    "category": "mechanical-assemblies",
    "categoryLabel": "Mechanical Assemblies",
    "isReal": true,
    "image": "assets/images/projects/3.png",
    "shortDesc": "Developed a 3D model of a compact front-end loader featuring a bucket mechanism, articulated chassis, operator cabin, wheels and supporting mechanical components. Focused on overall machine geometry and assembly arrangement.",
    "specs": {
      "material": "Structural Steel frame, high-strength steel bucket, rubber tyres.",
      "process": "Steel fabrication, welding, CNC machining and hydraulic component assembly.",
      "tolerances": "+/- 0.05 mm (ISO 2768-m General Precision)",
      "software": "SolidWorks 3D Assemblies & Top-Down Skeletons"
    },
    "challenge": "Engineering challenge for Front-End Loader Vehicle: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Structural Steel frame, high-strength steel bucket, rubber tyres..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Front-End Loader Vehicle Primary Structure",
        "material": "Structural Steel frame",
        "process": "Steel fabrication",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "high-strength steel bucket",
        "process": "welding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Structural Steel frame",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.05 mm (ISO 2768-m General Precision).",
    "cadDrawing": "assets/images/project-cad-03.svg"
  },
  {
    "id": "PROJ-04",
    "title": "Compact Racing Drone Frame",
    "category": "product-design",
    "categoryLabel": "Product Design",
    "isReal": true,
    "image": "assets/images/projects/4.png",
    "shortDesc": "Designed a compact racing drone structure with four motor mounting positions, integrated central housing and protective frame geometry. Focused on lightweight construction and balanced component arrangement.",
    "specs": {
      "material": "Carbon Fiber Composite, Aluminium 6061.",
      "process": "CNC routing, composite fabrication and precision machining.",
      "tolerances": "+/- 0.08 mm (Tooling Draft & Parting Lines)",
      "software": "SolidWorks Surfacing & Keyshot Visualization"
    },
    "challenge": "Engineering challenge for Compact Racing Drone Frame: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Carbon Fiber Composite, Aluminium 6061..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Compact Racing Drone Frame Primary Structure",
        "material": "Carbon Fiber Composite",
        "process": "CNC routing",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Aluminium 6061.",
        "process": "composite fabrication and precision machining.",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Carbon Fiber Composite",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.08 mm (Tooling Draft & Parting Lines).",
    "cadDrawing": "assets/images/project-cad-04.svg"
  },
  {
    "id": "PROJ-05",
    "title": "Flanged Mechanical Hub Assembly",
    "category": "mechanical-assemblies",
    "categoryLabel": "Mechanical Assemblies",
    "isReal": true,
    "image": "assets/images/projects/5.jpg",
    "shortDesc": "Created a detailed mechanical hub assembly featuring concentric mounting flanges, bolt-hole patterns, central shaft interfaces and multiple interconnected components. Focused on dimensional geometry and component integration.",
    "specs": {
      "material": "Alloy Steel shaft, Stainless Steel or Alloy Steel flanges.",
      "process": "CNC turning, CNC milling, drilling and precision finishing.",
      "tolerances": "+/- 0.05 mm (ISO 2768-m General Precision)",
      "software": "SolidWorks 3D Assemblies & Top-Down Skeletons"
    },
    "challenge": "Engineering challenge for Flanged Mechanical Hub Assembly: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Alloy Steel shaft, Stainless Steel or Alloy Steel flanges..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Flanged Mechanical Hub Assembly Primary Structure",
        "material": "Alloy Steel shaft",
        "process": "CNC turning",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Stainless Steel or Alloy Steel flanges.",
        "process": "CNC milling",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Alloy Steel shaft",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.05 mm (ISO 2768-m General Precision).",
    "cadDrawing": "assets/images/project-cad-05.svg"
  },
  {
    "id": "PROJ-06",
    "title": "Wireless Earbud Design",
    "category": "product-design",
    "categoryLabel": "Product Design",
    "isReal": true,
    "image": "assets/images/projects/6.png",
    "shortDesc": "Developed a compact wireless earbud model with an ergonomic outer housing, integrated speaker opening and streamlined stem geometry. Focused on product aesthetics, smooth surface transitions and compact proportions.",
    "specs": {
      "material": "ABS or PC-ABS housing, silicone ear tips.",
      "process": "Injection molding and silicone molding.",
      "tolerances": "+/- 0.08 mm (Tooling Draft & Parting Lines)",
      "software": "SolidWorks Surfacing & Keyshot Visualization"
    },
    "challenge": "Engineering challenge for Wireless Earbud Design: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under ABS or PC-ABS housing, silicone ear tips..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Wireless Earbud Design Primary Structure",
        "material": "ABS or PC-ABS housing",
        "process": "Injection molding and silicone molding.",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "silicone ear tips.",
        "process": "Precision Laser Cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "ABS or PC-ABS housing",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.08 mm (Tooling Draft & Parting Lines).",
    "cadDrawing": "assets/images/project-cad-06.svg"
  },
  {
    "id": "PROJ-07",
    "title": "Industrial Control Valve Assembly",
    "category": "mechanical-assemblies",
    "categoryLabel": "Mechanical Assemblies",
    "isReal": true,
    "image": "assets/images/projects/7.jpeg",
    "shortDesc": "Designed a vertical industrial valve assembly featuring a pressure-containing body, flanged pipe connections, internal operating components and an upper actuator arrangement. Focused on component layout and mechanical assembly details.",
    "specs": {
      "material": "Stainless Steel 316 or Carbon Steel body, Stainless Steel internal components.",
      "process": "Casting or forging, CNC machining, drilling and assembly.",
      "tolerances": "+/- 0.05 mm (ISO 2768-m General Precision)",
      "software": "SolidWorks 3D Assemblies & Top-Down Skeletons"
    },
    "challenge": "Engineering challenge for Industrial Control Valve Assembly: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Stainless Steel 316 or Carbon Steel body, Stainless Steel internal components..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Industrial Control Valve Assembly Primary Structure",
        "material": "Stainless Steel 316 or Carbon Steel body",
        "process": "Casting or forging",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Stainless Steel internal components.",
        "process": "CNC machining",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Stainless Steel 316 or Carbon Steel body",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.05 mm (ISO 2768-m General Precision).",
    "cadDrawing": "assets/images/project-cad-07.svg"
  },
  {
    "id": "PROJ-08",
    "title": "Industrial Air Compressor Assembly",
    "category": "mechanisms",
    "categoryLabel": "Mechanisms",
    "isReal": true,
    "image": "assets/images/projects/8.jpeg",
    "shortDesc": "Created a 3D assembly of an air compressor featuring a horizontal storage tank, motor-driven compressor unit, protective belt guard, pressure control components and supporting structure. Focused on equipment arrangement and product visualization.",
    "specs": {
      "material": "Carbon Steel pressure vessel, Cast Iron compressor housing, Copper electrical windings.",
      "process": "Pressure-vessel fabrication, welding, CNC machining and mechanical assembly.",
      "tolerances": "+/- 0.03 mm (Kinematic Linkage Fit)",
      "software": "SolidWorks Kinematics & Assembly Mates"
    },
    "challenge": "Engineering challenge for Industrial Air Compressor Assembly: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Carbon Steel pressure vessel, Cast Iron compressor housing, Copper electrical windings..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Industrial Air Compressor Assembly Primary Structure",
        "material": "Carbon Steel pressure vessel",
        "process": "Pressure-vessel fabrication",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Cast Iron compressor housing",
        "process": "welding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Carbon Steel pressure vessel",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.03 mm (Kinematic Linkage Fit).",
    "cadDrawing": "assets/images/project-cad-08.svg"
  },
  {
    "id": "PROJ-09",
    "title": "Tracked Industrial Utility Vehicle",
    "category": "mechanical-assemblies",
    "categoryLabel": "Mechanical Assemblies",
    "isReal": true,
    "image": "assets/images/projects/10.jpeg",
    "shortDesc": "Developed a compact tracked utility vehicle model incorporating a crawler drive system, operator platform, protective body structure and working equipment. Focused on overall machine layout and mechanical component positioning.",
    "specs": {
      "material": "Structural Steel frame, Alloy Steel drive components, Rubber tracks.",
      "process": "Steel fabrication, CNC machining, welding and mechanical assembly.",
      "tolerances": "+/- 0.05 mm (ISO 2768-m General Precision)",
      "software": "SolidWorks 3D Assemblies & Top-Down Skeletons"
    },
    "challenge": "Engineering challenge for Tracked Industrial Utility Vehicle: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Structural Steel frame, Alloy Steel drive components, Rubber tracks..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Tracked Industrial Utility Vehicle Primary Structure",
        "material": "Structural Steel frame",
        "process": "Steel fabrication",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Alloy Steel drive components",
        "process": "CNC machining",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Structural Steel frame",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.05 mm (ISO 2768-m General Precision).",
    "cadDrawing": "assets/images/project-cad-09.svg"
  },
  {
    "id": "PROJ-10",
    "title": "Bench-Mounted Arbor Press",
    "category": "mechanisms",
    "categoryLabel": "Mechanisms",
    "isReal": true,
    "image": "assets/images/projects/11.jpeg",
    "shortDesc": "Designed a manually operated bench press mechanism featuring a rigid supporting frame, vertical ram, operating lever and workholding base. The model demonstrates a compact mechanical pressing arrangement and component integration.",
    "specs": {
      "material": "Cast Iron or Fabricated Steel frame, Alloy Steel ram and shaft.",
      "process": "Casting or welding, CNC turning, milling and drilling.",
      "tolerances": "+/- 0.03 mm (Kinematic Linkage Fit)",
      "software": "SolidWorks Kinematics & Assembly Mates"
    },
    "challenge": "Engineering challenge for Bench-Mounted Arbor Press: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Cast Iron or Fabricated Steel frame, Alloy Steel ram and shaft..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Bench-Mounted Arbor Press Primary Structure",
        "material": "Cast Iron or Fabricated Steel frame",
        "process": "Casting or welding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Alloy Steel ram and shaft.",
        "process": "CNC turning",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Cast Iron or Fabricated Steel frame",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.03 mm (Kinematic Linkage Fit).",
    "cadDrawing": "assets/images/project-cad-10.svg"
  },
  {
    "id": "PROJ-11",
    "title": "Roller-Based Mechanical Processing Machine",
    "category": "industrial",
    "categoryLabel": "Industrial Machinery",
    "isReal": true,
    "image": "assets/images/projects/12.jpeg",
    "shortDesc": "Developed a machine assembly incorporating multiple rollers, supporting frame, drive components and material-guiding arrangement. Focused on roller positioning, mechanical integration and overall equipment layout.",
    "specs": {
      "material": "Mild Steel frame, Hardened Alloy Steel rollers, Stainless Steel shafts.",
      "process": "Welding, CNC turning, machining and surface finishing.",
      "tolerances": "+/- 0.02 mm (Precision Dowels & Guides)",
      "software": "SolidWorks 3D CAD, Motion & Interference"
    },
    "challenge": "Engineering challenge for Roller-Based Mechanical Processing Machine: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Mild Steel frame, Hardened Alloy Steel rollers, Stainless Steel shafts..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Roller-Based Mechanical Processing Machine Primary Structure",
        "material": "Mild Steel frame",
        "process": "Welding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Hardened Alloy Steel rollers",
        "process": "CNC turning",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Mild Steel frame",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.02 mm (Precision Dowels & Guides).",
    "cadDrawing": "assets/images/project-cad-11.svg"
  },
  {
    "id": "PROJ-12",
    "title": "Mechanical Wheel and Drive Press Assembly",
    "category": "mechanisms",
    "categoryLabel": "Mechanisms",
    "isReal": true,
    "image": "assets/images/projects/13.jpeg",
    "shortDesc": "Created a mechanical assembly featuring a vertical supporting structure, rotating wheel, shaft and pressing mechanism. Focused on the relationship between the operating components and the machine frame.",
    "specs": {
      "material": "Mild Steel frame, Alloy Steel shaft and operating components.",
      "process": "Welding, CNC turning, milling and drilling.",
      "tolerances": "+/- 0.03 mm (Kinematic Linkage Fit)",
      "software": "SolidWorks Kinematics & Assembly Mates"
    },
    "challenge": "Engineering challenge for Mechanical Wheel and Drive Press Assembly: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Mild Steel frame, Alloy Steel shaft and operating components..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Mechanical Wheel and Drive Press Assembly Primary Structure",
        "material": "Mild Steel frame",
        "process": "Welding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Alloy Steel shaft and operating components.",
        "process": "CNC turning",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Mild Steel frame",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.03 mm (Kinematic Linkage Fit).",
    "cadDrawing": "assets/images/project-cad-12.svg"
  },
  {
    "id": "PROJ-13",
    "title": "Faucet Internal Mechanism Assembly",
    "category": "mechanisms",
    "categoryLabel": "Mechanisms",
    "isReal": true,
    "image": "assets/images/projects/14.jpeg",
    "shortDesc": "Developed an exploded 3D assembly of a faucet mechanism, showing the external body, internal flow components, sealing elements and connected fittings. Focused on component arrangement and assembly visualization.",
    "specs": {
      "material": "Brass body, Stainless Steel internal components, EPDM seals.",
      "process": "Brass casting or forging, CNC machining, injection molding and assembly.",
      "tolerances": "+/- 0.03 mm (Kinematic Linkage Fit)",
      "software": "SolidWorks Kinematics & Assembly Mates"
    },
    "challenge": "Engineering challenge for Faucet Internal Mechanism Assembly: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Brass body, Stainless Steel internal components, EPDM seals..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Faucet Internal Mechanism Assembly Primary Structure",
        "material": "Brass body",
        "process": "Brass casting or forging",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Stainless Steel internal components",
        "process": "CNC machining",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Brass body",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.03 mm (Kinematic Linkage Fit).",
    "cadDrawing": "assets/images/project-cad-13.svg"
  },
  {
    "id": "PROJ-14",
    "title": "Flanged Shaft and Gearbox Housing",
    "category": "mechanical-assemblies",
    "categoryLabel": "Mechanical Assemblies",
    "isReal": true,
    "image": "assets/images/projects/15.jpeg",
    "shortDesc": "Designed a mechanical shaft and housing assembly featuring a central rotating shaft, mounting flanges, bearing interfaces and supporting components. Focused on alignment, interfaces and mechanical component integration.",
    "specs": {
      "material": "Alloy Steel shaft, Cast Iron or Aluminium housing, bearing steel.",
      "process": "CNC turning, milling, boring and precision assembly.",
      "tolerances": "+/- 0.05 mm (ISO 2768-m General Precision)",
      "software": "SolidWorks 3D Assemblies & Top-Down Skeletons"
    },
    "challenge": "Engineering challenge for Flanged Shaft and Gearbox Housing: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Alloy Steel shaft, Cast Iron or Aluminium housing, bearing steel..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Flanged Shaft and Gearbox Housing Primary Structure",
        "material": "Alloy Steel shaft",
        "process": "CNC turning",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Cast Iron or Aluminium housing",
        "process": "milling",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Alloy Steel shaft",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.05 mm (ISO 2768-m General Precision).",
    "cadDrawing": "assets/images/project-cad-14.svg"
  },
  {
    "id": "PROJ-15",
    "title": "Digital Electrical Controller Enclosure",
    "category": "sheet-metal",
    "categoryLabel": "Sheet Metal & Enclosures",
    "isReal": true,
    "image": "assets/images/projects/16.jpeg",
    "shortDesc": "Designed a compact electrical controller enclosure featuring a digital display, user control interface, mounting provisions and external electrical connections. Focused on enclosure geometry, component accommodation and product appearance.",
    "specs": {
      "material": "ABS or PC-ABS housing, polycarbonate display window.",
      "process": "Injection molding, CNC machining for prototypes and assembly.",
      "tolerances": "+/- 0.15 mm (Bend Line Laser Cutting)",
      "software": "SolidWorks Sheet Metal & DXF Pre-Flight"
    },
    "challenge": "Engineering challenge for Digital Electrical Controller Enclosure: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under ABS or PC-ABS housing, polycarbonate display window..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Digital Electrical Controller Enclosure Primary Structure",
        "material": "ABS or PC-ABS housing",
        "process": "Injection molding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "polycarbonate display window.",
        "process": "CNC machining for prototypes and assembly.",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "ABS or PC-ABS housing",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.15 mm (Bend Line Laser Cutting).",
    "cadDrawing": "assets/images/project-cad-15.svg"
  },
  {
    "id": "PROJ-16",
    "title": "Decorative Patterned Handheld Product",
    "category": "product-design",
    "categoryLabel": "Product Design",
    "isReal": true,
    "image": "assets/images/projects/17.jpeg",
    "shortDesc": "Developed a handheld product concept featuring an elongated body, custom decorative surface pattern and integrated grip geometry. Focused on complex surface detailing and product aesthetics.",
    "specs": {
      "material": "ABS or PC-ABS body, textured polymer surface.",
      "process": "Injection molding, surface texturing and finishing.",
      "tolerances": "+/- 0.08 mm (Tooling Draft & Parting Lines)",
      "software": "SolidWorks Surfacing & Keyshot Visualization"
    },
    "challenge": "Engineering challenge for Decorative Patterned Handheld Product: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under ABS or PC-ABS body, textured polymer surface..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Decorative Patterned Handheld Product Primary Structure",
        "material": "ABS or PC-ABS body",
        "process": "Injection molding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "textured polymer surface.",
        "process": "surface texturing and finishing.",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "ABS or PC-ABS body",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.08 mm (Tooling Draft & Parting Lines).",
    "cadDrawing": "assets/images/project-cad-16.svg"
  },
  {
    "id": "PROJ-17",
    "title": "Electronic Device Exploded Assembly",
    "category": "sheet-metal",
    "categoryLabel": "Sheet Metal & Enclosures",
    "isReal": true,
    "image": "assets/images/projects/18.jpeg",
    "shortDesc": "Created an exploded CAD assembly of an electronic device, showing the outer enclosure, internal electronic components, mounting arrangement and fastening elements. Focused on internal packaging and component integration.",
    "specs": {
      "material": "ABS or PC-ABS enclosure, Aluminium internal support, electronic-grade PCB materials.",
      "process": "Injection molding, PCB fabrication, CNC machining and assembly.",
      "tolerances": "+/- 0.15 mm (Bend Line Laser Cutting)",
      "software": "SolidWorks Sheet Metal & DXF Pre-Flight"
    },
    "challenge": "Engineering challenge for Electronic Device Exploded Assembly: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under ABS or PC-ABS enclosure, Aluminium internal support, electronic-grade PCB materials..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Electronic Device Exploded Assembly Primary Structure",
        "material": "ABS or PC-ABS enclosure",
        "process": "Injection molding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Aluminium internal support",
        "process": "PCB fabrication",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "ABS or PC-ABS enclosure",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.15 mm (Bend Line Laser Cutting).",
    "cadDrawing": "assets/images/project-cad-17.svg"
  },
  {
    "id": "PROJ-18",
    "title": "Modern Three-Drawer Storage Cabinet",
    "category": "sheet-metal",
    "categoryLabel": "Sheet Metal & Enclosures",
    "isReal": true,
    "image": "assets/images/projects/19.jpeg",
    "shortDesc": "Designed a compact storage cabinet featuring three integrated drawers, a clean exterior profile and coordinated handle details. Focused on product proportions, usability and visual presentation.",
    "specs": {
      "material": "ABS or PP molded body, Aluminium or Stainless Steel handles.",
      "process": "Injection molding, sheet-metal fabrication for suitable variants and assembly.",
      "tolerances": "+/- 0.15 mm (Bend Line Laser Cutting)",
      "software": "SolidWorks Sheet Metal & DXF Pre-Flight"
    },
    "challenge": "Engineering challenge for Modern Three-Drawer Storage Cabinet: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under ABS or PP molded body, Aluminium or Stainless Steel handles..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Modern Three-Drawer Storage Cabinet Primary Structure",
        "material": "ABS or PP molded body",
        "process": "Injection molding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Aluminium or Stainless Steel handles.",
        "process": "sheet-metal fabrication for suitable variants and assembly.",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "ABS or PP molded body",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.15 mm (Bend Line Laser Cutting).",
    "cadDrawing": "assets/images/project-cad-18.svg"
  },
  {
    "id": "PROJ-19",
    "title": "Automated Conveyor-Based Processing System",
    "category": "industrial",
    "categoryLabel": "Industrial Machinery",
    "isReal": true,
    "image": "assets/images/projects/20.png",
    "shortDesc": "Developed a conveyor-based industrial system featuring an enclosed processing area, material transfer arrangement and supporting structural frame. Focused on equipment layout, conveyor integration and overall machine visualization.",
    "specs": {
      "material": "Mild Steel frame, Stainless Steel product-contact surfaces, engineering polymer rollers.",
      "process": "Steel fabrication, laser cutting, press-brake bending, machining and assembly.",
      "tolerances": "+/- 0.02 mm (Precision Dowels & Guides)",
      "software": "SolidWorks 3D CAD, Motion & Interference"
    },
    "challenge": "Engineering challenge for Automated Conveyor-Based Processing System: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Mild Steel frame, Stainless Steel product-contact surfaces, engineering polymer rollers..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Automated Conveyor-Based Processing System Primary Structure",
        "material": "Mild Steel frame",
        "process": "Steel fabrication",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Stainless Steel product-contact surfaces",
        "process": "laser cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Mild Steel frame",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.02 mm (Precision Dowels & Guides).",
    "cadDrawing": "assets/images/project-cad-19.svg"
  },
  {
    "id": "PROJ-20",
    "title": "Modern Round Table with Geometric Base",
    "category": "product-design",
    "categoryLabel": "Product Design",
    "isReal": true,
    "image": "assets/images/projects/21.png",
    "shortDesc": "Designed a modern round tabletop supported by a geometrically structured metal base. Focused on the combination of functional support geometry, balanced proportions and contemporary product aesthetics.",
    "specs": {
      "material": "Engineered Wood or Solid Wood top, Mild Steel or Stainless Steel base.",
      "process": "Wood machining, CNC cutting, tube bending, welding and finishing.",
      "tolerances": "+/- 0.08 mm (Tooling Draft & Parting Lines)",
      "software": "SolidWorks Surfacing & Keyshot Visualization"
    },
    "challenge": "Engineering challenge for Modern Round Table with Geometric Base: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Engineered Wood or Solid Wood top, Mild Steel or Stainless Steel base..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Modern Round Table with Geometric Base Primary Structure",
        "material": "Engineered Wood or Solid Wood top",
        "process": "Wood machining",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Mild Steel or Stainless Steel base.",
        "process": "CNC cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Engineered Wood or Solid Wood top",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.08 mm (Tooling Draft & Parting Lines).",
    "cadDrawing": "assets/images/project-cad-20.svg"
  },
  {
    "id": "PROJ-21",
    "title": "Custom Slim Mechanical Handle",
    "category": "product-design",
    "categoryLabel": "Product Design",
    "isReal": true,
    "image": "assets/images/projects/22.jpeg",
    "shortDesc": "Created a slender elongated component with a tapered profile and integrated end geometry. Focused on smooth transitions, ergonomic proportions and detailed 3D surface development.",
    "specs": {
      "material": "Aluminium 6061, Stainless Steel or engineering-grade polymer, depending on application.",
      "process": "CNC machining, injection molding or extrusion with secondary machining.",
      "tolerances": "+/- 0.08 mm (Tooling Draft & Parting Lines)",
      "software": "SolidWorks Surfacing & Keyshot Visualization"
    },
    "challenge": "Engineering challenge for Custom Slim Mechanical Handle: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Aluminium 6061, Stainless Steel or engineering-grade polymer, depending on application..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Custom Slim Mechanical Handle Primary Structure",
        "material": "Aluminium 6061",
        "process": "CNC machining",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Stainless Steel or engineering-grade polymer",
        "process": "injection molding or extrusion with secondary machining.",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Aluminium 6061",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.08 mm (Tooling Draft & Parting Lines).",
    "cadDrawing": "assets/images/project-cad-21.svg"
  },
  {
    "id": "PROJ-22",
    "title": "Three-Wheeled Electric Vehicle Chassis",
    "category": "mechanical-assemblies",
    "categoryLabel": "Mechanical Assemblies",
    "isReal": true,
    "image": "assets/images/projects/23.jpg",
    "shortDesc": "Developed a three-wheeled vehicle assembly incorporating a tubular chassis, front steering arrangement, rear drivetrain, wheels and seating structure. Focused on mechanical layout and component integration.",
    "specs": {
      "material": "Mild Steel or DOM steel tubing, Alloy Steel shafts, rubber tyres.",
      "process": "Tube cutting, bending, welding, CNC machining and mechanical assembly.",
      "tolerances": "+/- 0.05 mm (ISO 2768-m General Precision)",
      "software": "SolidWorks 3D Assemblies & Top-Down Skeletons"
    },
    "challenge": "Engineering challenge for Three-Wheeled Electric Vehicle Chassis: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Mild Steel or DOM steel tubing, Alloy Steel shafts, rubber tyres..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Three-Wheeled Electric Vehicle Chassis Primary Structure",
        "material": "Mild Steel or DOM steel tubing",
        "process": "Tube cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Alloy Steel shafts",
        "process": "bending",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Mild Steel or DOM steel tubing",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.05 mm (ISO 2768-m General Precision).",
    "cadDrawing": "assets/images/project-cad-22.svg"
  },
  {
    "id": "PROJ-23",
    "title": "Ergonomic Footwear Design",
    "category": "product-design",
    "categoryLabel": "Product Design",
    "isReal": true,
    "image": "assets/images/projects/24.PNG",
    "shortDesc": "Developed a footwear concept featuring an anatomically shaped foot-contact surface, contoured geometry and smooth surface transitions. Focused on ergonomic form development and product visualization.",
    "specs": {
      "material": "EVA foam, TPU and rubber outsole.",
      "process": "Foam molding, compression molding and injection molding.",
      "tolerances": "+/- 0.08 mm (Tooling Draft & Parting Lines)",
      "software": "SolidWorks Surfacing & Keyshot Visualization"
    },
    "challenge": "Engineering challenge for Ergonomic Footwear Design: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under EVA foam, TPU and rubber outsole..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Ergonomic Footwear Design Primary Structure",
        "material": "EVA foam",
        "process": "Foam molding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "TPU and rubber outsole.",
        "process": "compression molding and injection molding.",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "EVA foam",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.08 mm (Tooling Draft & Parting Lines).",
    "cadDrawing": "assets/images/project-cad-23.svg"
  },
  {
    "id": "PROJ-24",
    "title": "Adjustable Tilting Workstation Table",
    "category": "product-design",
    "categoryLabel": "Product Design",
    "isReal": true,
    "image": "assets/images/projects/26.png",
    "shortDesc": "Designed a workstation table featuring a tilting upper surface, supporting metal frame and adjustable positioning arrangement. Focused on functional layout, ergonomic positioning and structural component design.",
    "specs": {
      "material": "Plywood or MDF tabletop, Mild Steel frame, Stainless Steel fasteners.",
      "process": "Sheet-metal cutting, tube fabrication, welding, drilling and assembly.",
      "tolerances": "+/- 0.08 mm (Tooling Draft & Parting Lines)",
      "software": "SolidWorks Surfacing & Keyshot Visualization"
    },
    "challenge": "Engineering challenge for Adjustable Tilting Workstation Table: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Plywood or MDF tabletop, Mild Steel frame, Stainless Steel fasteners..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Adjustable Tilting Workstation Table Primary Structure",
        "material": "Plywood or MDF tabletop",
        "process": "Sheet-metal cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Mild Steel frame",
        "process": "tube fabrication",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Plywood or MDF tabletop",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.08 mm (Tooling Draft & Parting Lines).",
    "cadDrawing": "assets/images/project-cad-24.svg"
  },
  {
    "id": "PROJ-25",
    "title": "Multi-Head Industrial Processing Machine",
    "category": "industrial",
    "categoryLabel": "Industrial Machinery",
    "isReal": true,
    "image": "assets/images/projects/27.png",
    "shortDesc": "Developed a 3D CAD model of an industrial machine featuring multiple vertically arranged processing heads, a supporting frame and integrated control interface. Focused on machine configuration, component positioning and detailed product visualization.",
    "specs": {
      "material": "Mild Steel structural frame, Stainless Steel working components, sheet-metal covers.",
      "process": "Welding, laser cutting, CNC machining and sheet-metal bending.",
      "tolerances": "+/- 0.02 mm (Precision Dowels & Guides)",
      "software": "SolidWorks 3D CAD, Motion & Interference"
    },
    "challenge": "Engineering challenge for Multi-Head Industrial Processing Machine: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Mild Steel structural frame, Stainless Steel working components, sheet-metal covers..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Multi-Head Industrial Processing Machine Primary Structure",
        "material": "Mild Steel structural frame",
        "process": "Welding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Stainless Steel working components",
        "process": "laser cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Mild Steel structural frame",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.02 mm (Precision Dowels & Guides).",
    "cadDrawing": "assets/images/project-cad-25.svg"
  },
  {
    "id": "PROJ-26",
    "title": "Flexible Corrugated Hose Assembly",
    "category": "mechanical-assemblies",
    "categoryLabel": "Mechanical Assemblies",
    "isReal": true,
    "image": "assets/images/projects/28.png",
    "shortDesc": "Designed a flexible corrugated hose assembly with formed connection ends and integrated mounting flanges. Focused on flexible geometry, end interfaces and mechanical connection details.",
    "specs": {
      "material": "Stainless Steel 304 or 316 for metallic hose; suitable polymer for non-metallic versions.",
      "process": "Metal tube forming, hydroforming or corrugation, end welding and flange machining.",
      "tolerances": "+/- 0.05 mm (ISO 2768-m General Precision)",
      "software": "SolidWorks 3D Assemblies & Top-Down Skeletons"
    },
    "challenge": "Engineering challenge for Flexible Corrugated Hose Assembly: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Stainless Steel 304 or 316 for metallic hose; suitable polymer for non-metallic versions..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Flexible Corrugated Hose Assembly Primary Structure",
        "material": "Stainless Steel 304 or 316 for metallic hose; suitable polymer for non-metallic versions.",
        "process": "Metal tube forming",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Engineering Polymer",
        "process": "hydroforming or corrugation",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Stainless Steel 304 or 316 for metallic hose; suitable polymer for non-metallic versions.",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.05 mm (ISO 2768-m General Precision).",
    "cadDrawing": "assets/images/project-cad-26.svg"
  },
  {
    "id": "PROJ-27",
    "title": "Multi-Cylinder Engine Assembly",
    "category": "mechanical-assemblies",
    "categoryLabel": "Mechanical Assemblies",
    "isReal": true,
    "image": "assets/images/projects/29.PNG",
    "shortDesc": "Created a multi-cylinder engine assembly featuring pistons, connecting rods, crankshaft and supporting engine components. Focused on mechanical arrangement, component relationships and detailed assembly modelling.",
    "specs": {
      "material": "Aluminium Alloy engine block, Alloy Steel crankshaft and connecting rods, Aluminium Alloy pistons.",
      "process": "Casting, forging, CNC machining, honing and precision assembly.",
      "tolerances": "+/- 0.05 mm (ISO 2768-m General Precision)",
      "software": "SolidWorks 3D Assemblies & Top-Down Skeletons"
    },
    "challenge": "Engineering challenge for Multi-Cylinder Engine Assembly: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Aluminium Alloy engine block, Alloy Steel crankshaft and connecting rods, Aluminium Alloy pistons..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Multi-Cylinder Engine Assembly Primary Structure",
        "material": "Aluminium Alloy engine block",
        "process": "Casting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Alloy Steel crankshaft and connecting rods",
        "process": "forging",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Aluminium Alloy engine block",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.05 mm (ISO 2768-m General Precision).",
    "cadDrawing": "assets/images/project-cad-27.svg"
  },
  {
    "id": "PROJ-28",
    "title": "Woven Pattern Decorative Basket",
    "category": "product-design",
    "categoryLabel": "Product Design",
    "isReal": true,
    "image": "assets/images/projects/30.PNG",
    "shortDesc": "Designed a decorative basket featuring a detailed woven exterior pattern, rounded body and integrated storage volume. Focused on intricate surface patterns, product proportions and visual detailing.",
    "specs": {
      "material": "PP polymer, rattan or natural wicker, depending on the intended product.",
      "process": "Injection molding for polymer versions or traditional weaving for natural materials.",
      "tolerances": "+/- 0.08 mm (Tooling Draft & Parting Lines)",
      "software": "SolidWorks Surfacing & Keyshot Visualization"
    },
    "challenge": "Engineering challenge for Woven Pattern Decorative Basket: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under PP polymer, rattan or natural wicker, depending on the intended product..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Woven Pattern Decorative Basket Primary Structure",
        "material": "PP polymer",
        "process": "Injection molding for polymer versions or traditional weaving for natural materials.",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "rattan or natural wicker",
        "process": "Precision Laser Cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "PP polymer",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.08 mm (Tooling Draft & Parting Lines).",
    "cadDrawing": "assets/images/project-cad-28.svg"
  },
  {
    "id": "PROJ-29",
    "title": "Automated Industrial Conveyor and Packaging Line",
    "category": "industrial",
    "categoryLabel": "Industrial Machinery",
    "isReal": true,
    "image": "assets/images/projects/31.jpg",
    "shortDesc": "Developed a detailed production-line assembly featuring conveyor sections, structural supports, processing equipment and material transfer arrangements. Focused on equipment positioning, machine integration and industrial layout visualization.",
    "specs": {
      "material": "Mild Steel structural frame, Stainless Steel contact surfaces, Aluminium profiles.",
      "process": "Laser cutting, sheet-metal bending, welding, CNC machining and assembly.",
      "tolerances": "+/- 0.02 mm (Precision Dowels & Guides)",
      "software": "SolidWorks 3D CAD, Motion & Interference"
    },
    "challenge": "Engineering challenge for Automated Industrial Conveyor and Packaging Line: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Mild Steel structural frame, Stainless Steel contact surfaces, Aluminium profiles..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Automated Industrial Conveyor and Packaging Line Primary Structure",
        "material": "Mild Steel structural frame",
        "process": "Laser cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Stainless Steel contact surfaces",
        "process": "sheet-metal bending",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Mild Steel structural frame",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.02 mm (Precision Dowels & Guides).",
    "cadDrawing": "assets/images/project-cad-29.svg"
  },
  {
    "id": "PROJ-30",
    "title": "Compact Electronic Interface Enclosure",
    "category": "sheet-metal",
    "categoryLabel": "Sheet Metal & Enclosures",
    "isReal": true,
    "image": "assets/images/projects/32.jpg",
    "shortDesc": "Designed a compact electronic enclosure featuring a rectangular body, connector openings, external interface provisions and internal packaging space. Focused on functional enclosure geometry and accessible connection layouts.",
    "specs": {
      "material": "ABS or PC-ABS housing, Aluminium internal support.",
      "process": "Injection molding, CNC machining for prototypes and assembly.",
      "tolerances": "+/- 0.15 mm (Bend Line Laser Cutting)",
      "software": "SolidWorks Sheet Metal & DXF Pre-Flight"
    },
    "challenge": "Engineering challenge for Compact Electronic Interface Enclosure: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under ABS or PC-ABS housing, Aluminium internal support..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Compact Electronic Interface Enclosure Primary Structure",
        "material": "ABS or PC-ABS housing",
        "process": "Injection molding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Aluminium internal support.",
        "process": "CNC machining for prototypes and assembly.",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "ABS or PC-ABS housing",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.15 mm (Bend Line Laser Cutting).",
    "cadDrawing": "assets/images/project-cad-30.svg"
  },
  {
    "id": "PROJ-31",
    "title": "Mechanical Gear and Shaft Assembly",
    "category": "mechanical-assemblies",
    "categoryLabel": "Mechanical Assemblies",
    "isReal": true,
    "image": "assets/images/projects/33.jpg",
    "shortDesc": "Developed an exploded mechanical assembly featuring gears, shafts, supporting plates, bearing interfaces and fastening components. Focused on component relationships, mechanical interfaces and assembly visualization.",
    "specs": {
      "material": "Alloy Steel gears and shafts, Cast Iron or Aluminium supporting housing.",
      "process": "Gear hobbing, CNC turning, milling, heat treatment and assembly.",
      "tolerances": "+/- 0.05 mm (ISO 2768-m General Precision)",
      "software": "SolidWorks 3D Assemblies & Top-Down Skeletons"
    },
    "challenge": "Engineering challenge for Mechanical Gear and Shaft Assembly: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Alloy Steel gears and shafts, Cast Iron or Aluminium supporting housing..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Mechanical Gear and Shaft Assembly Primary Structure",
        "material": "Alloy Steel gears and shafts",
        "process": "Gear hobbing",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Cast Iron or Aluminium supporting housing.",
        "process": "CNC turning",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Alloy Steel gears and shafts",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.05 mm (ISO 2768-m General Precision).",
    "cadDrawing": "assets/images/project-cad-31.svg"
  },
  {
    "id": "PROJ-32",
    "title": "Agricultural Tillage Equipment",
    "category": "industrial",
    "categoryLabel": "Industrial Machinery",
    "isReal": true,
    "image": "assets/images/projects/34.jpg",
    "shortDesc": "Designed an agricultural implement featuring multiple soil-engaging elements, supporting structural members and tractor mounting arrangement. Focused on implement geometry, component spacing and mechanical layout.",
    "specs": {
      "material": "High-strength Structural Steel frame, Wear-resistant Alloy Steel working blades.",
      "process": "Steel fabrication, welding, laser cutting, CNC machining and heat treatment.",
      "tolerances": "+/- 0.02 mm (Precision Dowels & Guides)",
      "software": "SolidWorks 3D CAD, Motion & Interference"
    },
    "challenge": "Engineering challenge for Agricultural Tillage Equipment: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under High-strength Structural Steel frame, Wear-resistant Alloy Steel working blades..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Agricultural Tillage Equipment Primary Structure",
        "material": "High-strength Structural Steel frame",
        "process": "Steel fabrication",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Wear-resistant Alloy Steel working blades.",
        "process": "welding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "High-strength Structural Steel frame",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.02 mm (Precision Dowels & Guides).",
    "cadDrawing": "assets/images/project-cad-32.svg"
  },
  {
    "id": "PROJ-33",
    "title": "Rotary Cleaning Brush Assembly",
    "category": "mechanical-assemblies",
    "categoryLabel": "Mechanical Assemblies",
    "isReal": true,
    "image": "assets/images/projects/35.png",
    "shortDesc": "Developed a cylindrical rotary brush featuring a central shaft, multiple bristle rows and integrated mounting arrangement. Focused on brush geometry, bristle distribution and mechanical component layout.",
    "specs": {
      "material": "Stainless Steel or Aluminium shaft, Nylon or Polypropylene bristles.",
      "process": "CNC turning, bristle tufting, injection molding and assembly.",
      "tolerances": "+/- 0.05 mm (ISO 2768-m General Precision)",
      "software": "SolidWorks 3D Assemblies & Top-Down Skeletons"
    },
    "challenge": "Engineering challenge for Rotary Cleaning Brush Assembly: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Stainless Steel or Aluminium shaft, Nylon or Polypropylene bristles..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Rotary Cleaning Brush Assembly Primary Structure",
        "material": "Stainless Steel or Aluminium shaft",
        "process": "CNC turning",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Nylon or Polypropylene bristles.",
        "process": "bristle tufting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Stainless Steel or Aluminium shaft",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.05 mm (ISO 2768-m General Precision).",
    "cadDrawing": "assets/images/project-cad-33.svg"
  },
  {
    "id": "PROJ-34",
    "title": "Custom Mechanical Keyboard Design",
    "category": "sheet-metal",
    "categoryLabel": "Sheet Metal & Enclosures",
    "isReal": true,
    "image": "assets/images/projects/36.png",
    "shortDesc": "Designed a compact keyboard assembly featuring an organized key layout, individual keycaps and a structured base enclosure. Focused on product proportions, component arrangement and detailed visual presentation.",
    "specs": {
      "material": "ABS or PBT keycaps, Aluminium or ABS housing, PCB substrate.",
      "process": "Injection molding, CNC machining for aluminium variants, PCB fabrication and assembly.",
      "tolerances": "+/- 0.15 mm (Bend Line Laser Cutting)",
      "software": "SolidWorks Sheet Metal & DXF Pre-Flight"
    },
    "challenge": "Engineering challenge for Custom Mechanical Keyboard Design: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under ABS or PBT keycaps, Aluminium or ABS housing, PCB substrate..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Custom Mechanical Keyboard Design Primary Structure",
        "material": "ABS or PBT keycaps",
        "process": "Injection molding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Aluminium or ABS housing",
        "process": "CNC machining for aluminium variants",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "ABS or PBT keycaps",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.15 mm (Bend Line Laser Cutting).",
    "cadDrawing": "assets/images/project-cad-34.svg"
  },
  {
    "id": "PROJ-35",
    "title": "Personal Care Bottle Packaging Design",
    "category": "product-design",
    "categoryLabel": "Product Design",
    "isReal": true,
    "image": "assets/images/projects/37.png",
    "shortDesc": "Developed a compact personal care bottle concept featuring a cylindrical body, integrated closure and refined external proportions. Focused on packaging aesthetics, surface development and product visualization.",
    "specs": {
      "material": "PET or HDPE bottle body, PP cap.",
      "process": "Extrusion blow molding or injection stretch blow molding depending on bottle geometry; injection molding for cap.",
      "tolerances": "+/- 0.08 mm (Tooling Draft & Parting Lines)",
      "software": "SolidWorks Surfacing & Keyshot Visualization"
    },
    "challenge": "Engineering challenge for Personal Care Bottle Packaging Design: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under PET or HDPE bottle body, PP cap..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Personal Care Bottle Packaging Design Primary Structure",
        "material": "PET or HDPE bottle body",
        "process": "Extrusion blow molding or injection stretch blow molding depending on bottle geometry; injection molding for cap.",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "PP cap.",
        "process": "Precision Laser Cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "PET or HDPE bottle body",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.08 mm (Tooling Draft & Parting Lines).",
    "cadDrawing": "assets/images/project-cad-35.svg"
  },
  {
    "id": "PROJ-36",
    "title": "Decorative Sculptural Product Design",
    "category": "product-design",
    "categoryLabel": "Product Design",
    "isReal": true,
    "image": "assets/images/projects/38.png",
    "shortDesc": "Created a contemporary sculptural product featuring interconnected curved surfaces and a flowing geometric form. Focused on advanced surface modelling, smooth transitions and aesthetic visualization.",
    "specs": {
      "material": "Aluminium Alloy, Stainless Steel or engineering-grade polymer.",
      "process": "CNC machining, additive manufacturing or casting depending on final geometry.",
      "tolerances": "+/- 0.08 mm (Tooling Draft & Parting Lines)",
      "software": "SolidWorks Surfacing & Keyshot Visualization"
    },
    "challenge": "Engineering challenge for Decorative Sculptural Product Design: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Aluminium Alloy, Stainless Steel or engineering-grade polymer..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Decorative Sculptural Product Design Primary Structure",
        "material": "Aluminium Alloy",
        "process": "CNC machining",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Stainless Steel or engineering-grade polymer.",
        "process": "additive manufacturing or casting depending on final geometry.",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Aluminium Alloy",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.08 mm (Tooling Draft & Parting Lines).",
    "cadDrawing": "assets/images/project-cad-36.svg"
  },
  {
    "id": "PROJ-37",
    "title": "Compact Air Cooling Appliance",
    "category": "product-design",
    "categoryLabel": "Product Design",
    "isReal": true,
    "image": "assets/images/projects/39.png",
    "shortDesc": "Designed a compact cooling appliance featuring a protective outer enclosure, ventilation openings, internal fan arrangement and supporting base. Focused on product packaging, airflow-related openings and exterior styling.",
    "specs": {
      "material": "ABS or PC-ABS housing, Aluminium heat exchanger components, Copper tubing.",
      "process": "Injection molding, sheet-metal fabrication and mechanical assembly.",
      "tolerances": "+/- 0.08 mm (Tooling Draft & Parting Lines)",
      "software": "SolidWorks Surfacing & Keyshot Visualization"
    },
    "challenge": "Engineering challenge for Compact Air Cooling Appliance: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under ABS or PC-ABS housing, Aluminium heat exchanger components, Copper tubing..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Compact Air Cooling Appliance Primary Structure",
        "material": "ABS or PC-ABS housing",
        "process": "Injection molding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Aluminium heat exchanger components",
        "process": "sheet-metal fabrication and mechanical assembly.",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "ABS or PC-ABS housing",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.08 mm (Tooling Draft & Parting Lines).",
    "cadDrawing": "assets/images/project-cad-37.svg"
  },
  {
    "id": "PROJ-38",
    "title": "Spiral Staircase Design",
    "category": "mechanical-assemblies",
    "categoryLabel": "Mechanical Assemblies",
    "isReal": true,
    "image": "assets/images/projects/40.png",
    "shortDesc": "Developed a spiral staircase assembly featuring a central supporting column, radial steps and curved safety railing. Focused on geometric arrangement, structural support and detailed architectural visualization.",
    "specs": {
      "material": "Structural Steel central column, Mild Steel steps and Stainless Steel railing.",
      "process": "Steel cutting, plate forming, welding, tube bending and surface finishing.",
      "tolerances": "+/- 0.05 mm (ISO 2768-m General Precision)",
      "software": "SolidWorks 3D Assemblies & Top-Down Skeletons"
    },
    "challenge": "Engineering challenge for Spiral Staircase Design: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Structural Steel central column, Mild Steel steps and Stainless Steel railing..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Spiral Staircase Design Primary Structure",
        "material": "Structural Steel central column",
        "process": "Steel cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Mild Steel steps and Stainless Steel railing.",
        "process": "plate forming",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Structural Steel central column",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.05 mm (ISO 2768-m General Precision).",
    "cadDrawing": "assets/images/project-cad-38.svg"
  },
  {
    "id": "PROJ-39",
    "title": "Utility Trailer Chassis Assembly",
    "category": "mechanical-assemblies",
    "categoryLabel": "Mechanical Assemblies",
    "isReal": true,
    "image": "assets/images/projects/41.png",
    "shortDesc": "Designed a utility trailer chassis featuring longitudinal frame members, cross supports, wheel mounting arrangement and towing connection. Focused on structural layout and mechanical component positioning.",
    "specs": {
      "material": "Mild Steel rectangular hollow sections, Steel axle components, rubber tyres.",
      "process": "Tube cutting, welding, drilling, CNC machining and assembly.",
      "tolerances": "+/- 0.05 mm (ISO 2768-m General Precision)",
      "software": "SolidWorks 3D Assemblies & Top-Down Skeletons"
    },
    "challenge": "Engineering challenge for Utility Trailer Chassis Assembly: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Mild Steel rectangular hollow sections, Steel axle components, rubber tyres..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Utility Trailer Chassis Assembly Primary Structure",
        "material": "Mild Steel rectangular hollow sections",
        "process": "Tube cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Steel axle components",
        "process": "welding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Mild Steel rectangular hollow sections",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.05 mm (ISO 2768-m General Precision).",
    "cadDrawing": "assets/images/project-cad-39.svg"
  },
  {
    "id": "PROJ-40",
    "title": "Compact Bottle Product Design",
    "category": "product-design",
    "categoryLabel": "Product Design",
    "isReal": true,
    "image": "assets/images/projects/42.jpeg",
    "shortDesc": "Developed a compact bottle design with a rectangular body profile, integrated neck and closure arrangement. Focused on product proportions, exterior geometry and professional product visualization.",
    "specs": {
      "material": "PET or HDPE body, PP closure.",
      "process": "Injection molding or blow molding depending on the bottle geometry.",
      "tolerances": "+/- 0.08 mm (Tooling Draft & Parting Lines)",
      "software": "SolidWorks Surfacing & Keyshot Visualization"
    },
    "challenge": "Engineering challenge for Compact Bottle Product Design: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under PET or HDPE body, PP closure..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Compact Bottle Product Design Primary Structure",
        "material": "PET or HDPE body",
        "process": "Injection molding or blow molding depending on the bottle geometry.",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "PP closure.",
        "process": "Precision Laser Cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "PET or HDPE body",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.08 mm (Tooling Draft & Parting Lines).",
    "cadDrawing": "assets/images/project-cad-40.svg"
  },
  {
    "id": "PROJ-41",
    "title": "Mechanical Clamping Fixture",
    "category": "mechanisms",
    "categoryLabel": "Mechanisms",
    "isReal": true,
    "image": "assets/images/projects/43.jpeg",
    "shortDesc": "Created a compact mechanical fixture featuring a supporting base, clamping arrangement and manually operated adjustment components. Focused on component positioning, workholding geometry and mechanical assembly layout.",
    "specs": {
      "material": "Mild Steel base, Alloy Steel clamping components, Aluminium or Steel support parts.",
      "process": "CNC milling, turning, drilling, welding and assembly.",
      "tolerances": "+/- 0.03 mm (Kinematic Linkage Fit)",
      "software": "SolidWorks Kinematics & Assembly Mates"
    },
    "challenge": "Engineering challenge for Mechanical Clamping Fixture: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Mild Steel base, Alloy Steel clamping components, Aluminium or Steel support parts..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Mechanical Clamping Fixture Primary Structure",
        "material": "Mild Steel base",
        "process": "CNC milling",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Alloy Steel clamping components",
        "process": "turning",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Mild Steel base",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.03 mm (Kinematic Linkage Fit).",
    "cadDrawing": "assets/images/project-cad-41.svg"
  },
  {
    "id": "PROJ-42",
    "title": "Wireless Earbud Charging Case",
    "category": "sheet-metal",
    "categoryLabel": "Sheet Metal & Enclosures",
    "isReal": true,
    "image": "assets/images/projects/44.jpeg",
    "shortDesc": "Developed a compact wireless earbud charging case featuring a contoured outer shell, internal storage cavity and hinged opening arrangement. Focused on ergonomic product geometry, enclosure design and smooth surface transitions.",
    "specs": {
      "material": "ABS or PC-ABS outer housing, silicone or elastomeric internal supports.",
      "process": "Injection molding, precision assembly and surface finishing.",
      "tolerances": "+/- 0.15 mm (Bend Line Laser Cutting)",
      "software": "SolidWorks Sheet Metal & DXF Pre-Flight"
    },
    "challenge": "Engineering challenge for Wireless Earbud Charging Case: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under ABS or PC-ABS outer housing, silicone or elastomeric internal supports..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Wireless Earbud Charging Case Primary Structure",
        "material": "ABS or PC-ABS outer housing",
        "process": "Injection molding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "silicone or elastomeric internal supports.",
        "process": "precision assembly and surface finishing.",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "ABS or PC-ABS outer housing",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.15 mm (Bend Line Laser Cutting).",
    "cadDrawing": "assets/images/project-cad-42.svg"
  },
  {
    "id": "PROJ-43",
    "title": "Scissor-Lift Platform Mechanism",
    "category": "mechanisms",
    "categoryLabel": "Mechanisms",
    "isReal": true,
    "image": "assets/images/projects/45.jpeg",
    "shortDesc": "Designed a lifting platform assembly incorporating crossed support members, a movable platform, base structure and mechanical lifting arrangement. Focused on linkage geometry, structural positioning and assembly visualization.",
    "specs": {
      "material": "Structural Steel lifting arms, Mild Steel base, Alloy Steel pivot pins.",
      "process": "Laser cutting, CNC drilling, welding, machining and mechanical assembly.",
      "tolerances": "+/- 0.03 mm (Kinematic Linkage Fit)",
      "software": "SolidWorks Kinematics & Assembly Mates"
    },
    "challenge": "Engineering challenge for Scissor-Lift Platform Mechanism: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Structural Steel lifting arms, Mild Steel base, Alloy Steel pivot pins..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Scissor-Lift Platform Mechanism Primary Structure",
        "material": "Structural Steel lifting arms",
        "process": "Laser cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Mild Steel base",
        "process": "CNC drilling",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Structural Steel lifting arms",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.03 mm (Kinematic Linkage Fit).",
    "cadDrawing": "assets/images/project-cad-43.svg"
  },
  {
    "id": "PROJ-44",
    "title": "Industrial Conveyor Support Table",
    "category": "industrial",
    "categoryLabel": "Industrial Machinery",
    "isReal": true,
    "image": "assets/images/projects/46.jpeg",
    "shortDesc": "Developed an industrial support assembly featuring a rectangular working surface, structural frame, roller or drive components and integrated mounting provisions. Focused on equipment structure and mechanical layout.",
    "specs": {
      "material": "Mild Steel frame, Stainless Steel or Aluminium working surface, engineering polymer rollers.",
      "process": "Laser cutting, sheet-metal bending, welding, CNC machining and assembly.",
      "tolerances": "+/- 0.02 mm (Precision Dowels & Guides)",
      "software": "SolidWorks 3D CAD, Motion & Interference"
    },
    "challenge": "Engineering challenge for Industrial Conveyor Support Table: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Mild Steel frame, Stainless Steel or Aluminium working surface, engineering polymer rollers..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Industrial Conveyor Support Table Primary Structure",
        "material": "Mild Steel frame",
        "process": "Laser cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Stainless Steel or Aluminium working surface",
        "process": "sheet-metal bending",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Mild Steel frame",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.02 mm (Precision Dowels & Guides).",
    "cadDrawing": "assets/images/project-cad-44.svg"
  },
  {
    "id": "PROJ-45",
    "title": "Mechanical Press Mechanism",
    "category": "mechanisms",
    "categoryLabel": "Mechanisms",
    "isReal": true,
    "image": "assets/images/projects/47.jpeg",
    "shortDesc": "Created a mechanical press assembly featuring a supporting base, vertical operating mechanism, rotating components and adjustable working arrangement. Focused on mechanical component integration and assembly detailing.",
    "specs": {
      "material": "Cast Iron or Mild Steel base, Alloy Steel shaft and ram, hardened steel contact components.",
      "process": "Casting or fabrication, CNC turning, milling, drilling and heat treatment.",
      "tolerances": "+/- 0.03 mm (Kinematic Linkage Fit)",
      "software": "SolidWorks Kinematics & Assembly Mates"
    },
    "challenge": "Engineering challenge for Mechanical Press Mechanism: balancing strict dimensional packaging constraints, structural stiffness, and reliable shop-floor manufacturability under Cast Iron or Mild Steel base, Alloy Steel shaft and ram, hardened steel contact components..",
    "solution": "Constructed parametric top-down SolidWorks assembly with master skeleton sketches, validated tooling draft angles, zero dynamic interferences, and full 2D production documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Mechanical Press Mechanism Primary Structure",
        "material": "Cast Iron or Mild Steel base",
        "process": "Casting or fabrication",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "02",
        "name": "Core Sub-Assembly / Mounting Block",
        "material": "Alloy Steel shaft and ram",
        "process": "CNC turning",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Precision Fastening & Hardware Set",
        "material": "Stainless Steel 304 (DIN 912)",
        "process": "Cold Forming & Passivation",
        "qty": "4-12",
        "tol": "ISO 4762 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze Bushing / NBR",
        "process": "Precision Turning / Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Guard / Access Panel",
        "material": "Cast Iron or Mild Steel base",
        "process": "Laser Cut & Powder Coat",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary mounting reference plane held to 0.03 mm flatness; critical mating features held to +/- 0.03 mm (Kinematic Linkage Fit).",
    "cadDrawing": "assets/images/project-cad-45.svg"
  },
  {
    "id": "PROJ-46",
    "title": "Laptop Cooling Fan Assembly",
    "category": "mechanical-assemblies",
    "categoryLabel": "Mechanical Assemblies",
    "isReal": true,
    "image": "assets/images/projects/46.png",
    "shortDesc": "3D CAD design of a laptop cooling fan, focusing on the fan housing, blade geometry and central rotor arrangement.",
    "specs": {
      "material": "Engineering Polymer / PBT-GF30, Copper Windings",
      "process": "Precision Injection Molding, Micro-Assembly",
      "tolerances": "+/- 0.03 mm (Rotor Hub & Shroud Clearance)",
      "software": "SolidWorks 3D CAD, Surfacing & Motion"
    },
    "challenge": "Engineering challenge for Laptop Cooling Fan Assembly: balancing compact packaging, structural rigidity, and seamless shop-floor manufacturability under Engineering Polymer / PBT-GF30, Copper Windings.",
    "solution": "Constructed parametric SolidWorks 3D CAD models with verified parent-child relations, zero dynamic collision, and complete 2D manufacturing release documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Laptop Cooling Fan Assembly Primary Housing / Frame",
        "material": "Engineering Polymer / PBT-GF30",
        "process": "Precision Injection Molding",
        "qty": "1",
        "tol": "+/- 0.03 mm (Rotor Hub & Shroud Clearance)"
      },
      {
        "item": "02",
        "name": "Core Internal Mechanism / Sub-Assembly",
        "material": " Copper Windings",
        "process": " Micro-Assembly",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Fastener & Mounting Hardware Set",
        "material": "Stainless Steel 304 (ISO 4762)",
        "process": "Standardized Production Fasteners",
        "qty": "4-16",
        "tol": "DIN 912 Class 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze / Silicone Gasket",
        "process": "Precision Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Trim / Service Cover",
        "material": "Engineering Polymer / PBT-GF30",
        "process": "Surface Finish & Texturing",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary reference plane held to 0.03 mm; critical mating interfaces held to +/- 0.03 mm (Rotor Hub & Shroud Clearance).",
    "cadDrawing": "assets/images/project-cad-46.svg"
  },
  {
    "id": "PROJ-47",
    "title": "Industrial Thermal Processing System",
    "category": "industrial",
    "categoryLabel": "Industrial Machinery",
    "isReal": true,
    "image": "assets/images/projects/47.jpg",
    "shortDesc": "3D CAD layout of an industrial thermal processing system, featuring the main equipment units, connecting ductwork, access platforms and supporting structures.",
    "specs": {
      "material": "Structural Steel, Stainless Steel 316, Thermal Insulation",
      "process": "Heavy Fabrication, CNC Laser Cutting, ASME Section IX Welding",
      "tolerances": "+/- 0.50 mm (Large Structural Framework)",
      "software": "SolidWorks Weldments, Layout Drawings & BOM"
    },
    "challenge": "Engineering challenge for Industrial Thermal Processing System: balancing compact packaging, structural rigidity, and seamless shop-floor manufacturability under Structural Steel, Stainless Steel 316, Thermal Insulation.",
    "solution": "Constructed parametric SolidWorks 3D CAD models with verified parent-child relations, zero dynamic collision, and complete 2D manufacturing release documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Industrial Thermal Processing System Primary Housing / Frame",
        "material": "Structural Steel",
        "process": "Heavy Fabrication",
        "qty": "1",
        "tol": "+/- 0.50 mm (Large Structural Framework)"
      },
      {
        "item": "02",
        "name": "Core Internal Mechanism / Sub-Assembly",
        "material": " Stainless Steel 316",
        "process": " CNC Laser Cutting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Fastener & Mounting Hardware Set",
        "material": "Stainless Steel 304 (ISO 4762)",
        "process": "Standardized Production Fasteners",
        "qty": "4-16",
        "tol": "DIN 912 Class 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze / Silicone Gasket",
        "process": "Precision Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Trim / Service Cover",
        "material": "Structural Steel",
        "process": "Surface Finish & Texturing",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary reference plane held to 0.03 mm; critical mating interfaces held to +/- 0.50 mm (Large Structural Framework).",
    "cadDrawing": "assets/images/project-cad-47.svg"
  },
  {
    "id": "PROJ-48",
    "title": "Jet Engine Assembly",
    "category": "mechanical-assemblies",
    "categoryLabel": "Mechanical Assemblies",
    "isReal": true,
    "image": "assets/images/projects/48.jpg",
    "shortDesc": "Detailed 3D CAD modelling of a jet engine assembly, illustrating its major internal components, shaft arrangement and casing structure through an exploded view.",
    "specs": {
      "material": "Titanium Alloy Ti-6Al-4V, Nickel Superalloy Inconel 718",
      "process": "5-Axis CNC Milling, Precision Investment Casting, EDM",
      "tolerances": "+/- 0.010 mm (Shaft Bearing Lands & Blade Retainers)",
      "software": "SolidWorks Top-Down Assembly, Exploded Views & GD&T"
    },
    "challenge": "Engineering challenge for Jet Engine Assembly: balancing compact packaging, structural rigidity, and seamless shop-floor manufacturability under Titanium Alloy Ti-6Al-4V, Nickel Superalloy Inconel 718.",
    "solution": "Constructed parametric SolidWorks 3D CAD models with verified parent-child relations, zero dynamic collision, and complete 2D manufacturing release documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Jet Engine Assembly Primary Housing / Frame",
        "material": "Titanium Alloy Ti-6Al-4V",
        "process": "5-Axis CNC Milling",
        "qty": "1",
        "tol": "+/- 0.010 mm (Shaft Bearing Lands & Blade Retainers)"
      },
      {
        "item": "02",
        "name": "Core Internal Mechanism / Sub-Assembly",
        "material": " Nickel Superalloy Inconel 718",
        "process": " Precision Investment Casting",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Fastener & Mounting Hardware Set",
        "material": "Stainless Steel 304 (ISO 4762)",
        "process": "Standardized Production Fasteners",
        "qty": "4-16",
        "tol": "DIN 912 Class 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze / Silicone Gasket",
        "process": "Precision Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Trim / Service Cover",
        "material": "Titanium Alloy Ti-6Al-4V",
        "process": "Surface Finish & Texturing",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary reference plane held to 0.03 mm; critical mating interfaces held to +/- 0.010 mm (Shaft Bearing Lands & Blade Retainers).",
    "cadDrawing": "assets/images/project-cad-48.svg"
  },
  {
    "id": "PROJ-49",
    "title": "Handheld Seed Spreader",
    "category": "product-design",
    "categoryLabel": "Product Design",
    "isReal": true,
    "image": "assets/images/projects/49.png",
    "shortDesc": "Product design of a handheld seed spreader featuring a compact hopper, dispensing mechanism and ergonomic grip for controlled seed distribution.",
    "specs": {
      "material": "High-Density Polyethylene (HDPE), Polypropylene (PP)",
      "process": "Injection Molding, Rotational Hopper Molding",
      "tolerances": "+/- 0.10 mm (Snap Flanges & Gear Engagement)",
      "software": "SolidWorks Ergonomic Surfacing & Tooling DFM"
    },
    "challenge": "Engineering challenge for Handheld Seed Spreader: balancing compact packaging, structural rigidity, and seamless shop-floor manufacturability under High-Density Polyethylene (HDPE), Polypropylene (PP).",
    "solution": "Constructed parametric SolidWorks 3D CAD models with verified parent-child relations, zero dynamic collision, and complete 2D manufacturing release documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Handheld Seed Spreader Primary Housing / Frame",
        "material": "High-Density Polyethylene (HDPE)",
        "process": "Injection Molding",
        "qty": "1",
        "tol": "+/- 0.10 mm (Snap Flanges & Gear Engagement)"
      },
      {
        "item": "02",
        "name": "Core Internal Mechanism / Sub-Assembly",
        "material": " Polypropylene (PP)",
        "process": " Rotational Hopper Molding",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Fastener & Mounting Hardware Set",
        "material": "Stainless Steel 304 (ISO 4762)",
        "process": "Standardized Production Fasteners",
        "qty": "4-16",
        "tol": "DIN 912 Class 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze / Silicone Gasket",
        "process": "Precision Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Trim / Service Cover",
        "material": "High-Density Polyethylene (HDPE)",
        "process": "Surface Finish & Texturing",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary reference plane held to 0.03 mm; critical mating interfaces held to +/- 0.10 mm (Snap Flanges & Gear Engagement).",
    "cadDrawing": "assets/images/project-cad-49.svg"
  },
  {
    "id": "PROJ-50",
    "title": "Quadruped Robotic Dog",
    "category": "mechanical-assemblies",
    "categoryLabel": "Mechanical Assemblies",
    "isReal": true,
    "image": "assets/images/projects/50.png",
    "shortDesc": "3D CAD design of a quadruped robotic dog, focusing on the body enclosure, articulated legs, joint arrangements and overall mechanical structure.",
    "specs": {
      "material": "Carbon Fiber Plate, Aircraft Aluminum 7075-T6, Nylon SLS",
      "process": "CNC Waterjet / Milling, 3D Printing / SLS, Anodizing",
      "tolerances": "+/- 0.025 mm (Actuator Bearing Housings)",
      "software": "SolidWorks Kinematics, Multi-Body Part Modeling"
    },
    "challenge": "Engineering challenge for Quadruped Robotic Dog: balancing compact packaging, structural rigidity, and seamless shop-floor manufacturability under Carbon Fiber Plate, Aircraft Aluminum 7075-T6, Nylon SLS.",
    "solution": "Constructed parametric SolidWorks 3D CAD models with verified parent-child relations, zero dynamic collision, and complete 2D manufacturing release documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Quadruped Robotic Dog Primary Housing / Frame",
        "material": "Carbon Fiber Plate",
        "process": "CNC Waterjet / Milling",
        "qty": "1",
        "tol": "+/- 0.025 mm (Actuator Bearing Housings)"
      },
      {
        "item": "02",
        "name": "Core Internal Mechanism / Sub-Assembly",
        "material": " Aircraft Aluminum 7075-T6",
        "process": " 3D Printing / SLS",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Fastener & Mounting Hardware Set",
        "material": "Stainless Steel 304 (ISO 4762)",
        "process": "Standardized Production Fasteners",
        "qty": "4-16",
        "tol": "DIN 912 Class 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze / Silicone Gasket",
        "process": "Precision Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Trim / Service Cover",
        "material": "Carbon Fiber Plate",
        "process": "Surface Finish & Texturing",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary reference plane held to 0.03 mm; critical mating interfaces held to +/- 0.025 mm (Actuator Bearing Housings).",
    "cadDrawing": "assets/images/project-cad-50.svg"
  },
  {
    "id": "PROJ-51",
    "title": "Over-Ear Wireless Headphone Design",
    "category": "product-design",
    "categoryLabel": "Product Design",
    "isReal": true,
    "image": "assets/images/projects/51.jpg",
    "shortDesc": "3D product design of over-ear headphones, featuring cushioned earcups, adjustable headband and a compact enclosure design.",
    "specs": {
      "material": "Anodized Aluminum 6061, Polycarbonate/ABS Blend, Memory Foam",
      "process": "Precision Plastic Tooling, CNC Metal Trims, Ultrasonic Welding",
      "tolerances": "+/- 0.05 mm (Acoustic Chamber Gasket Fit)",
      "software": "SolidWorks Industrial Surfacing & KeyShot Visualization"
    },
    "challenge": "Engineering challenge for Over-Ear Wireless Headphone Design: balancing compact packaging, structural rigidity, and seamless shop-floor manufacturability under Anodized Aluminum 6061, Polycarbonate/ABS Blend, Memory Foam.",
    "solution": "Constructed parametric SolidWorks 3D CAD models with verified parent-child relations, zero dynamic collision, and complete 2D manufacturing release documentation.",
    "bom": [
      {
        "item": "01",
        "name": "Over-Ear Wireless Headphone Design Primary Housing / Frame",
        "material": "Anodized Aluminum 6061",
        "process": "Precision Plastic Tooling",
        "qty": "1",
        "tol": "+/- 0.05 mm (Acoustic Chamber Gasket Fit)"
      },
      {
        "item": "02",
        "name": "Core Internal Mechanism / Sub-Assembly",
        "material": " Polycarbonate/ABS Blend",
        "process": " CNC Metal Trims",
        "qty": "1",
        "tol": "+/- 0.05 mm"
      },
      {
        "item": "03",
        "name": "Fastener & Mounting Hardware Set",
        "material": "Stainless Steel 304 (ISO 4762)",
        "process": "Standardized Production Fasteners",
        "qty": "4-16",
        "tol": "DIN 912 Class 8.8"
      },
      {
        "item": "04",
        "name": "Functional Interface / Bearing / Seal",
        "material": "PTFE / Bronze / Silicone Gasket",
        "process": "Precision Molding",
        "qty": "2",
        "tol": "+/- 0.03 mm"
      },
      {
        "item": "05",
        "name": "Protective Trim / Service Cover",
        "material": "Anodized Aluminum 6061",
        "process": "Surface Finish & Texturing",
        "qty": "1",
        "tol": "+/- 0.10 mm"
      }
    ],
    "gdt": "Datum A on primary reference plane held to 0.03 mm; critical mating interfaces held to +/- 0.05 mm (Acoustic Chamber Gasket Fit).",
    "cadDrawing": "assets/images/project-cad-51.svg"
  }
];

// Filter & Pagination State
let currentFilter = "all";
let currentSearch = "";
let visibleProjectsCount = 12;
let activeModalProject = null;

// Helper: Filter Projects
function getFilteredProjects() {
  return DEMO_PROJECTS.filter(proj => {
    const matchesFilter = (currentFilter === "all" || proj.category === currentFilter);
    const q = currentSearch.toLowerCase().trim();
    const matchesSearch = !q || 
      proj.title.toLowerCase().includes(q) ||
      proj.shortDesc.toLowerCase().includes(q) ||
      (proj.specs && proj.specs.material && proj.specs.material.toLowerCase().includes(q)) ||
      (proj.specs && proj.specs.process && proj.specs.process.toLowerCase().includes(q));
    return matchesFilter && matchesSearch;
  });
}

// Update Filter Button Badges
function updateFilterCounts() {
  const allCount = DEMO_PROJECTS.length;
  const productCount = DEMO_PROJECTS.filter(p => p.category === "product-design").length;
  const mechanicalCount = DEMO_PROJECTS.filter(p => p.category === "mechanical-assemblies").length;
  const industrialCount = DEMO_PROJECTS.filter(p => p.category === "industrial").length;
  const sheetMetalCount = DEMO_PROJECTS.filter(p => p.category === "sheet-metal").length;
  const mechanismsCount = DEMO_PROJECTS.filter(p => p.category === "mechanisms").length;

  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setEl("countAll", allCount);
  setEl("countProduct", productCount);
  setEl("countMechanical", mechanicalCount);
  setEl("countIndustrial", industrialCount);
  setEl("countSheetMetal", sheetMetalCount);
  setEl("countMechanisms", mechanismsCount);

  const totalCountEl = document.getElementById("totalCount");
  if (totalCountEl) totalCountEl.textContent = allCount;
}

// Render Gallery Cards
function renderProjectCards(resetCount = false) {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  if (resetCount) {
    visibleProjectsCount = 12;
  }

  const allMatching = getFilteredProjects();
  container.innerHTML = "";

  const displayedCountEl = document.getElementById("displayedCount");
  const currentVisibleCountEl = document.getElementById("currentVisibleCount");
  const totalFilterCountEl = document.getElementById("totalFilterCount");
  const paginationControls = document.getElementById("projectsPagination");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const showAllBtn = document.getElementById("showAllBtn");

  if (displayedCountEl) displayedCountEl.textContent = allMatching.length;
  if (totalFilterCountEl) totalFilterCountEl.textContent = allMatching.length;

  if (allMatching.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: #FFFFFF; border: 1px dashed var(--border-color); border-radius: var(--radius-sm);">
        <p style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 8px;">No engineering projects found matching "${currentSearch}"</p>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">Try adjusting your keyword or switch to another engineering category.</p>
        <button class="btn btn-secondary btn-sm" onclick="clearProjectSearch()">Clear Filter</button>
      </div>
    `;
    if (paginationControls) paginationControls.style.display = "none";
    return;
  }

  const projectsToDisplay = allMatching.slice(0, visibleProjectsCount);
  if (currentVisibleCountEl) currentVisibleCountEl.textContent = projectsToDisplay.length;

  if (paginationControls) {
    paginationControls.style.display = "block";
    if (projectsToDisplay.length >= allMatching.length) {
      if (loadMoreBtn) loadMoreBtn.style.display = "none";
      if (showAllBtn) showAllBtn.style.display = "none";
    } else {
      if (loadMoreBtn) {
        loadMoreBtn.style.display = "inline-flex";
        const remaining = allMatching.length - projectsToDisplay.length;
        const nextBatch = Math.min(12, remaining);
        loadMoreBtn.textContent = `Load More Projects (+${nextBatch})`;
      }
      if (showAllBtn) {
        showAllBtn.style.display = "inline-flex";
        showAllBtn.textContent = `Show All ${allMatching.length} Projects`;
      }
    }
  }

  projectsToDisplay.forEach((proj) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-category", proj.category);

    const mat = (proj.specs && proj.specs.material) ? proj.specs.material : "Standard Engineering Alloy";
    const proc = (proj.specs && proj.specs.process) ? proj.specs.process : "CNC / Laser / Injection Mold";
    const soft = (proj.specs && proj.specs.software) ? proj.specs.software : "SolidWorks 3D CAD";

    card.innerHTML = `
      <div class="project-thumbnail-wrapper" onclick="openProjectModal('${proj.id}')" style="cursor: pointer;">
        <span class="project-id-badge">${proj.id}</span>
        <img src="${proj.image}" alt="${proj.title} CAD Preview" loading="lazy" />
      </div>
      <div class="project-content">
        <div class="project-header-meta">
          <span class="project-category-tag">${proj.categoryLabel}</span>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--status-emerald); font-weight: 600;">VERIFIED</span>
        </div>
        <h3 class="project-title" onclick="openProjectModal('${proj.id}')" style="cursor: pointer;">${proj.title}</h3>
        <p class="project-desc">${proj.shortDesc}</p>
        
        <div class="project-specs-table">
          <div class="spec-line">
            <span class="spec-label">Material:</span>
            <span class="spec-val">${mat.length > 28 ? mat.substring(0, 26) + '...' : mat}</span>
          </div>
          <div class="spec-line">
            <span class="spec-label">Process:</span>
            <span class="spec-val">${proc.length > 28 ? proc.substring(0, 26) + '...' : proc}</span>
          </div>
          <div class="spec-line">
            <span class="spec-label">CAD Tool:</span>
            <span class="spec-val">${soft.length > 28 ? soft.substring(0, 26) + '...' : soft}</span>
          </div>
        </div>

        <div class="project-card-footer">
          <span class="mono-tag" style="font-size: 0.75rem; color: var(--text-muted);">DFM &bull; ASME Y14.5</span>
          <button class="btn-inspect" onclick="openProjectModal('${proj.id}')">
            Inspect Case Study &rarr;
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

window.clearProjectSearch = function() {
  const input = document.getElementById("projectSearchInput");
  if (input) input.value = "";
  currentSearch = "";
  renderProjectCards(true);
};

// Filter Buttons Event Binding
function initFilterButtons() {
  const buttons = document.querySelectorAll("#projectFilters .filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderProjectCards(true);
    });
  });

  const searchInput = document.getElementById("projectSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderProjectCards(true);
    });
  }

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      visibleProjectsCount += 12;
      renderProjectCards(false);
    });
  }

  const showAllBtn = document.getElementById("showAllBtn");
  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      visibleProjectsCount = DEMO_PROJECTS.length;
      renderProjectCards(false);
    });
  }
}

// ==========================================================================
// 6. INDIVIDUAL PROJECT DETAILS / CASE STUDY MODAL
// ==========================================================================
window.openProjectModal = function (projectId) {
  const project = DEMO_PROJECTS.find((p) => p.id === projectId);
  if (!project) return;
  activeModalProject = project;

  const modalOverlay = document.getElementById("projectModal");
  if (!modalOverlay) return;

  // Title & Subtitle
  document.getElementById("modalProjectTitle").textContent = project.title;
  document.getElementById("modalProjectSubtitle").textContent = `${project.id} // ${project.categoryLabel} [VERIFIED PRODUCTION DELIVERABLE]`;

  // 1. Pane 1: Project Overview & Design Requirements
  const paneOverview = document.getElementById("paneOverview");
  paneOverview.innerHTML = `
    <div class="modal-image-showcase">
      <img src="${project.image}" alt="${project.title} Visual Showcase" />
    </div>

    <div class="case-study-section">
      <div class="case-study-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        Project Overview
      </div>
      <p class="case-study-text">${project.shortDesc}</p>
    </div>

    <div class="specs-grid-callout">
      <div class="callout-box">
        <h5>Design Requirements &amp; Scope</h5>
        <p>${project.challenge || 'Engineering requirement to achieve tight dimensional tolerance, rigid kinematic alignment, and mass optimization for serial fabrication.'}</p>
      </div>
      <div class="callout-box">
        <h5>Engineering Target Specifications</h5>
        <p><strong>Primary Material:</strong> ${project.specs ? project.specs.material : 'Specified in BOM'}<br />
           <strong>Manufacturing Process:</strong> ${project.specs ? project.specs.process : 'CNC / Laser'}<br />
           <strong>Tolerances:</strong> ${project.specs ? project.specs.tolerances : '+/- 0.05 mm'}<br />
           <strong>CAD Software:</strong> ${project.specs ? project.specs.software : 'SolidWorks 3D CAD'}</p>
      </div>
    </div>
  `;

  // 2. Pane 2: Design Approach & CAD Development
  const paneApproach = document.getElementById("paneApproach");
  paneApproach.innerHTML = `
    <div class="modal-image-showcase">
      <img src="${project.image}" alt="${project.title} CAD Development" />
    </div>

    <div class="case-study-section">
      <div class="case-study-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
        Design Approach &amp; CAD Strategy
      </div>
      <p class="case-study-text">${project.solution || 'Constructed parametric SolidWorks 3D master skeleton to drive inter-part mates, clearance envelopes, and fastener positioning without dynamic mating conflicts.'}</p>
    </div>

    <div class="specs-grid-callout">
      <div class="callout-box">
        <h5>Top-Down CAD Architecture</h5>
        <p>Parametric sketches reference global coordinate planes to ensure that modifications automatically cascade through all mating sub-components.</p>
      </div>
      <div class="callout-box">
        <h5>Interference &amp; Kinematic Verification</h5>
        <p>SolidWorks Collision &amp; Interference Detection executed across dynamic stroke ranges to ensure zero physical clashing.</p>
      </div>
    </div>
  `;

  // 3. Pane 3: Bill of Materials (BOM)
  const paneBOM = document.getElementById("paneBOM");
  let bomRows = "";
  if (project.bom && project.bom.length > 0) {
    bomRows = project.bom.map(b => `
      <tr>
        <td style="font-family: var(--font-mono); font-weight: 600;">${b.item}</td>
        <td style="font-weight: 600; color: var(--text-primary);">${b.name}</td>
        <td>${b.material}</td>
        <td>${b.process}</td>
        <td style="text-align: center; font-weight: 600;">${b.qty}</td>
        <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--accent-color);">${b.notes}</td>
      </tr>
    `).join("");
  } else {
    bomRows = `
      <tr>
        <td>01</td>
        <td style="font-weight: 600;">${project.title} Primary Structure</td>
        <td>${project.specs ? project.specs.material : 'Engineering Alloy'}</td>
        <td>${project.specs ? project.specs.process : 'CNC / Fabrication'}</td>
        <td style="text-align: center;">1</td>
        <td>Master CAD assembly component</td>
      </tr>
    `;
  }

  paneBOM.innerHTML = `
    <div class="case-study-section">
      <div class="case-study-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
        Hierarchical Bill of Materials (BOM)
      </div>
      <p class="case-study-text" style="margin-bottom: 16px;">Production-indexed parts list including material callouts, manufacturing methods, required quantities, and assembly hardware notes.</p>
      
      <div class="bom-table-wrapper">
        <table class="bom-table">
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PART NAME / SUB-ASSEMBLY</th>
              <th>MATERIAL SPEC</th>
              <th>MANUFACTURING METHOD</th>
              <th style="text-align: center;">QTY</th>
              <th>PROCUREMENT / NOTES</th>
            </tr>
          </thead>
          <tbody>
            ${bomRows}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // 4. Pane 4: Engineering Considerations & DFM
  const paneDFM = document.getElementById("paneDFM");
  let dfmHtml = "";
  if (project.dfmNotes && project.dfmNotes.length > 0) {
    dfmHtml = project.dfmNotes.map(d => `
      <div class="callout-box" style="margin-bottom: 12px;">
        <h5>${d.title}</h5>
        <p>${d.text}</p>
      </div>
    `).join("");
  } else {
    dfmHtml = `
      <div class="callout-box" style="margin-bottom: 12px;">
        <h5>Tooling Clearance &amp; Undercut Prevention</h5>
        <p>Corner radii dimensioned to match standard end-mill diameters. Tool access paths verified for 3-axis and 5-axis CNC fixtures.</p>
      </div>
      <div class="callout-box" style="margin-bottom: 12px;">
        <h5>Tolerance Allocation &amp; Assembly Stack-Up</h5>
        <p>Hole-to-pin clearance fits engineered per ISO standards with GD&amp;T datum references on primary contact faces.</p>
      </div>
    `;
  }

  paneDFM.innerHTML = `
    <div class="case-study-section">
      <div class="case-study-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Design for Manufacturing &amp; Assembly (DFM / DFA)
      </div>
      <p class="case-study-text" style="margin-bottom: 16px;">Pre-production engineering analysis applied to eliminate tooling bottlenecks, decrease scrap rates, and facilitate rapid workshop assembly.</p>
      ${dfmHtml}
    </div>
  `;

  // 5. Pane 5: Final Design & Deliverables
  const paneDeliverables = document.getElementById("paneDeliverables");
  paneDeliverables.innerHTML = `
    <div class="modal-image-showcase">
      <img src="${project.image}" alt="${project.title} Final Render" />
    </div>

    <div class="case-study-section">
      <div class="case-study-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Final Design &amp; Client Deliverables Package
      </div>
      <p class="case-study-text">${project.gdt || 'Complete engineering package delivered to the client, comprising native SolidWorks models, neutral STEP AP214 solids, flat-pattern laser DXFs, high-resolution STLs, and ASME Y14.5 fabrication drawings with GD&T.'}</p>
    </div>

    <div class="specs-grid-callout">
      <div class="callout-box">
        <h5>Included Production Files</h5>
        <p>&bull; Native SolidWorks (.SLDPRT, .SLDASM)<br />
           &bull; STEP AP214 / IGES neutral CAD<br />
           &bull; 2D PDF Engineering Drawings (BOM &amp; GD&amp;T)<br />
           &bull; DXF Flat Patterns for CNC Laser Cutting<br />
           &bull; High-Resolution 3D Printing STL / 3MF</p>
      </div>
      <div class="callout-box">
        <h5>Fabrication Verification</h5>
        <p>&bull; 100% Geometry Interference Check<br />
           &bull; Minimum Wall Thickness Audit<br />
           &bull; Standard Fastener Thread Compatibility (ISO/UNC)<br />
           &bull; ASME Y14.5 Toleranced Drawing Sheets</p>
      </div>
    </div>
  `;

  // Reset tab to overview
  switchModalTab("paneOverview");

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeProjectModal = function () {
  const modalOverlay = document.getElementById("projectModal");
  if (!modalOverlay) return;
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
};

function switchModalTab(targetPaneId) {
  document.querySelectorAll(".modal-tab-btn").forEach((btn) => {
    if (btn.getAttribute("data-target") === targetPaneId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  document.querySelectorAll(".modal-tab-pane").forEach((pane) => {
    if (pane.id === targetPaneId) {
      pane.classList.add("active");
    } else {
      pane.classList.remove("active");
    }
  });
}

function initModalHandlers() {
  const modalTabs = document.querySelectorAll(".modal-tab-btn");
  modalTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      switchModalTab(target);
    });
  });

  const modalOverlay = document.getElementById("projectModal");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeProjectModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
}

// Mobile Navigation Toggle
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const navMenu = document.getElementById("navMenu");
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isVisible = window.getComputedStyle(navMenu).display !== "none" && navMenu.classList.contains("mobile-open");
      if (isVisible) {
        navMenu.classList.remove("mobile-open");
        navMenu.style.display = "";
      } else {
        navMenu.classList.add("mobile-open");
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "72px";
        navMenu.style.left = "0";
        navMenu.style.width = "100%";
        navMenu.style.backgroundColor = "rgba(245, 245, 242, 0.98)";
        navMenu.style.backdropFilter = "blur(10px)";
        navMenu.style.borderBottom = "1px solid #E2E5E8";
        navMenu.style.padding = "20px 24px";
        navMenu.style.gap = "16px";
        navMenu.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
      }
    });

    // Close when clicking nav link
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 860) {
          navMenu.classList.remove("mobile-open");
          navMenu.style.display = "";
        }
      });
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        if (navMenu.classList.contains("mobile-open")) {
          navMenu.classList.remove("mobile-open");
          navMenu.style.display = "";
        }
      }
    });
  }
}

// Interactive ScrollSpy & Sticky Header Shadow
function initScrollSpy() {
  const header = document.getElementById("siteHeader");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const bottomNavLinks = document.querySelectorAll(".bottom-nav-item");
  const backToTop = document.getElementById("backToTop");

  function setActiveNav(id) {
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
    bottomNavLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("data-section") === id);
    });
  }

  bottomNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("data-section");
      if (targetId) setActiveNav(targetId);
    });
  });

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    // Header scrolled state
    if (header) {
      if (scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    // Back to top button visibility
    if (backToTop) {
      if (scrollY > 500) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    }

    // ScrollSpy active state
    let currentId = "";
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 130;
      const secHeight = sec.offsetHeight;
      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        currentId = sec.getAttribute("id");
      }
    });

    if (currentId) {
      setActiveNav(currentId);
    }
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// Strict Email Validation & Netlify Forms Submission
function isValidEmail(email) {
  const trimmed = (email || "").trim();
  if (!trimmed || trimmed.length > 254) return false;
  if (trimmed.includes("..")) return false;
  const parts = trimmed.split("@");
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  if (!local || local.startsWith(".") || local.endsWith(".")) return false;
  if (!domain || domain.startsWith("-") || domain.endsWith("-")) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
  if (!emailRegex.test(trimmed)) return false;
  const tld = domain.split(".").pop();
  return /^[a-zA-Z]{2,}$/.test(tld);
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const serviceInput = document.getElementById("contactService");
  const messageInput = document.getElementById("contactMessage");
  const submitBtn = document.getElementById("contactSubmitBtn");
  const statusEl = document.getElementById("formStatus");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  function setFieldState(input, errorEl, isValid, msg) {
    if (!input || !errorEl) return;
    if (isValid) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      errorEl.textContent = "";
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      errorEl.textContent = msg;
    }
  }

  function validateName() {
    const val = (nameInput.value || "").trim();
    const ok = val.length >= 2;
    setFieldState(nameInput, nameError, ok, ok ? "" : "Please enter your full name (at least 2 characters).");
    return ok;
  }

  function validateEmail() {
    const val = (emailInput.value || "").trim();
    const ok = isValidEmail(val);
    setFieldState(emailInput, emailError, ok, ok ? "" : "Please enter a valid email address (e.g. name@company.com).");
    return ok;
  }

  function validateMessage() {
    const val = (messageInput.value || "").trim();
    const ok = val.length >= 10;
    setFieldState(messageInput, messageError, ok, ok ? "" : "Please describe your project scope (at least 10 characters).");
    return ok;
  }

  nameInput.addEventListener("blur", validateName);
  emailInput.addEventListener("blur", validateEmail);
  emailInput.addEventListener("input", () => {
    if (emailInput.classList.contains("is-invalid") || emailInput.classList.contains("is-valid")) {
      validateEmail();
    }
  });
  messageInput.addEventListener("blur", validateMessage);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const okName = validateName();
    const okEmail = validateEmail();
    const okMsg = validateMessage();
    if (!okName || !okEmail || !okMsg) {
      statusEl.className = "form-status error";
      statusEl.textContent = "Please fix the highlighted fields above before submitting.";
      return;
    }

    const btnText = submitBtn.querySelector(".btn-text");
    submitBtn.disabled = true;
    if (btnText) btnText.textContent = "Sending Inquiry...";
    statusEl.className = "form-status loading";
    statusEl.textContent = "Submitting your project brief...";

    try {
      const formData = new FormData(form);
      formData.set("form-name", "contact");
      formData.set("name", nameInput.value.trim());
      formData.set("email", emailInput.value.trim());
      formData.set("service", serviceInput ? serviceInput.value : "");
      formData.set("message", messageInput.value.trim());

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        statusEl.className = "form-status success";
        statusEl.textContent = "Thank you! Your inquiry has been received. Muhammad Usman will reply to " + emailInput.value.trim() + " shortly.";
        form.reset();
        [nameInput, emailInput, messageInput].forEach(el => el.classList.remove("is-valid", "is-invalid"));
      } else {
        throw new Error("Server responded with status " + response.status);
      }
    } catch (err) {
      statusEl.className = "form-status error";
      statusEl.innerHTML = 'Unable to send automatically right now. Please email directly at <a href="mailto:musman898976@gmail.com">musman898976@gmail.com</a> or message on <a href="https://wa.me/923207451859" target="_blank" rel="noopener">WhatsApp (+92 320 7451859)</a>.';
    } finally {
      submitBtn.disabled = false;
      if (btnText) btnText.textContent = "Submit Project Inquiry";
    }
  });
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  updateFilterCounts();
  renderProjectCards(true);
  initFilterButtons();
  initModalHandlers();
  initMobileNav();
  initScrollSpy();
  initContactForm();
});
