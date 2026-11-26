import os

images_dir = r"E:\my portfolio\assets\images"
os.makedirs(images_dir, exist_ok=True)

# Generate 10 specialized SVG engineering drawings with blueprint style, dimension lines, and CAD aesthetics
svg_templates = [
    # 1. Sheet Metal Enclosure
    ("project-1.svg", "SHEET METAL 2U RACK ENCLOSURE", "DEMO-01 // SM-ENC-2U", [
        '<rect x="100" y="120" width="400" height="180" rx="4" fill="none" stroke="#38bdf8" stroke-width="2"/>',
        '<rect x="120" y="140" width="360" height="140" rx="2" fill="none" stroke="#2563eb" stroke-dasharray="4 2"/>',
        '<line x1="80" y1="140" x2="100" y2="140" stroke="#38bdf8" stroke-width="2"/>',
        '<line x1="80" y1="280" x2="100" y2="280" stroke="#38bdf8" stroke-width="2"/>',
        '<circle cx="90" cy="160" r="5" fill="none" stroke="#f59e0b" stroke-width="1.5"/>',
        '<circle cx="90" cy="260" r="5" fill="none" stroke="#f59e0b" stroke-width="1.5"/>',
        '<circle cx="510" cy="160" r="5" fill="none" stroke="#f59e0b" stroke-width="1.5"/>',
        '<circle cx="510" cy="260" r="5" fill="none" stroke="#f59e0b" stroke-width="1.5"/>',
        '<line x1="160" y1="160" x2="160" y2="260" stroke="#38bdf8" stroke-width="1"/>',
        '<line x1="190" y1="160" x2="190" y2="260" stroke="#38bdf8" stroke-width="1"/>',
        '<line x1="220" y1="160" x2="220" y2="260" stroke="#38bdf8" stroke-width="1"/>',
        '<text x="140" y="215" fill="#94a3b8" font-family="monospace" font-size="10">VENTILATION ARRAY [32 SLOTS]</text>',
        '<line x1="100" y1="90" x2="500" y2="90" stroke="#94a3b8" stroke-width="1"/>',
        '<text x="270" y="85" fill="#94a3b8" font-family="monospace" font-size="11">482.6 mm [19.00 IN]</text>',
        '<line x1="520" y1="120" x2="520" y2="300" stroke="#94a3b8" stroke-width="1"/>',
        '<text x="530" y="215" fill="#94a3b8" font-family="monospace" font-size="11">88.9 mm (2U)</text>'
    ]),

    # 2. Pick & Place Gantry
    ("project-2.svg", "3-AXIS PICK & PLACE GANTRY", "DEMO-02 // GANTRY-XYZ", [
        '<rect x="80" y="100" width="440" height="20" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>',
        '<rect x="80" y="280" width="440" height="20" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>',
        '<rect x="200" y="110" width="40" height="180" fill="none" stroke="#38bdf8" stroke-width="2"/>',
        '<circle cx="220" cy="200" r="18" fill="none" stroke="#f59e0b" stroke-width="2"/>',
        '<line x1="220" y1="170" x2="220" y2="250" stroke="#38bdf8" stroke-width="2"/>',
        '<rect x="210" y="240" width="20" height="30" fill="#2563eb" stroke="#38bdf8"/>',
        '<circle cx="215" cy="275" r="4" fill="#38bdf8"/>',
        '<circle cx="225" cy="275" r="4" fill="#38bdf8"/>',
        '<path d="M 120 110 L 140 110 L 130 95 Z" fill="#38bdf8"/>',
        '<text x="245" y="195" fill="#94a3b8" font-family="monospace" font-size="10">Z-HEAD ACTUATOR (+/- 0.02 mm)</text>',
        '<line x1="80" y1="75" x2="520" y2="75" stroke="#94a3b8" stroke-width="1"/>',
        '<text x="260" y="70" fill="#94a3b8" font-family="monospace" font-size="11">STROKE: 650 mm</text>'
    ]),

    # 3. Welded Skid
    ("project-3.svg", "STRUCTURAL STEEL HYDRAULIC SKID", "DEMO-03 // WELD-SKID-09", [
        '<rect x="90" y="240" width="420" height="30" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>',
        '<line x1="90" y1="240" x2="160" y2="130" stroke="#38bdf8" stroke-width="3"/>',
        '<line x1="510" y1="240" x2="440" y2="130" stroke="#38bdf8" stroke-width="3"/>',
        '<line x1="160" y1="130" x2="440" y2="130" stroke="#38bdf8" stroke-width="3"/>',
        '<line x1="300" y1="130" x2="300" y2="240" stroke="#38bdf8" stroke-width="2"/>',
        '<line x1="160" y1="130" x2="300" y2="240" stroke="#2563eb" stroke-dasharray="3 3"/>',
        '<line x1="440" y1="130" x2="300" y2="240" stroke="#2563eb" stroke-dasharray="3 3"/>',
        '<polygon points="90,240 115,240 90,215" fill="#f59e0b" opacity="0.8"/>',
        '<polygon points="510,240 485,240 510,215" fill="#f59e0b" opacity="0.8"/>',
        '<text x="120" y="210" fill="#f59e0b" font-family="monospace" font-size="9">GUSSET 8mm (TYP)</text>',
        '<text x="230" y="120" fill="#94a3b8" font-family="monospace" font-size="11">HSS 100x100x6.0 ASTM A500</text>'
    ]),

    # 4. Ergonomic Handheld Enclosure
    ("project-4.svg", "ERGONOMIC HANDHELD SENSOR HOUSING", "DEMO-04 // INJ-DEV-PRO", [
        '<path d="M 200 100 C 280 85, 360 85, 400 120 C 430 150, 410 220, 380 260 C 350 300, 270 310, 220 280 C 170 250, 160 180, 180 130 Z" fill="none" stroke="#38bdf8" stroke-width="2.5"/>',
        '<path d="M 220 120 C 280 110, 340 110, 370 140 C 390 160, 370 210, 350 240 C 330 270, 270 280, 240 260 C 200 230, 190 180, 205 145 Z" fill="none" stroke="#2563eb" stroke-dasharray="4 2"/>',
        '<ellipse cx="270" cy="160" rx="30" ry="20" fill="none" stroke="#f59e0b" stroke-width="1.5"/>',
        '<circle cx="340" cy="180" r="8" fill="none" stroke="#38bdf8"/>',
        '<circle cx="330" cy="210" r="6" fill="none" stroke="#38bdf8"/>',
        '<text x="235" y="165" fill="#94a3b8" font-family="monospace" font-size="9">OLED WINDOW</text>',
        '<text x="210" y="325" fill="#94a3b8" font-family="monospace" font-size="10">2.0 DEGREE TOOLING DRAFT / SABIC CYCOLOY ABS+PC</text>'
    ]),

    # 5. CNC Machined Bracket
    ("project-5.svg", "5-AXIS CNC AEROSPACE BELLCRANK", "DEMO-05 // CNC-BRKT-6061", [
        '<path d="M 140 220 L 220 140 L 360 140 L 460 240 L 380 260 L 220 260 Z" fill="none" stroke="#38bdf8" stroke-width="2"/>',
        '<circle cx="170" cy="220" r="22" fill="none" stroke="#38bdf8" stroke-width="2"/>',
        '<circle cx="170" cy="220" r="10" fill="none" stroke="#f59e0b" stroke-width="1.5"/>',
        '<circle cx="430" cy="230" r="20" fill="none" stroke="#38bdf8" stroke-width="2"/>',
        '<circle cx="430" cy="230" r="8" fill="none" stroke="#f59e0b" stroke-width="1.5"/>',
        '<circle cx="280" cy="190" r="30" fill="none" stroke="#2563eb" stroke-dasharray="3 3"/>',
        '<line x1="280" y1="150" x2="280" y2="230" stroke="#38bdf8" stroke-width="1"/>',
        '<line x1="240" y1="190" x2="320" y2="190" stroke="#38bdf8" stroke-width="1"/>',
        '<text x="230" y="280" fill="#94a3b8" font-family="monospace" font-size="10">WEIGHT POCKETING (R3.0 mm CORNERS)</text>',
        '<text x="180" y="115" fill="#94a3b8" font-family="monospace" font-size="11">ALUMINUM 7075-T651 // ANODIZE TYPE III</text>'
    ]),

    # 6. Rotary Indexing Fixture
    ("project-6.svg", "PNEUMATIC ROTARY INDEX FIXTURE", "DEMO-06 // JIG-ROT-400", [
        '<circle cx="300" cy="200" r="110" fill="none" stroke="#38bdf8" stroke-width="2"/>',
        '<circle cx="300" cy="200" r="85" fill="none" stroke="#2563eb" stroke-dasharray="4 2"/>',
        '<circle cx="300" cy="200" r="35" fill="none" stroke="#38bdf8" stroke-width="2"/>',
        '<circle cx="300" cy="200" r="15" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>',
        '<rect x="290" y="70" width="20" height="40" fill="#2563eb" stroke="#38bdf8"/>',
        '<rect x="290" y="290" width="20" height="40" fill="#2563eb" stroke="#38bdf8"/>',
        '<rect x="170" y="190" width="40" height="20" fill="#2563eb" stroke="#38bdf8"/>',
        '<rect x="390" y="190" width="40" height="20" fill="#2563eb" stroke="#38bdf8"/>',
        '<circle cx="300" cy="115" r="4" fill="#f59e0b"/>',
        '<circle cx="300" cy="285" r="4" fill="#f59e0b"/>',
        '<circle cx="215" cy="200" r="4" fill="#f59e0b"/>',
        '<circle cx="385" cy="200" r="4" fill="#f59e0b"/>',
        '<text x="210" y="340" fill="#94a3b8" font-family="monospace" font-size="10">4-POSITION INDEXING (+/- 0.005°)</text>'
    ]),

    # 7. Machine Guarding Frame
    ("project-7.svg", "MODULAR MACHINE CELL ENCLOSURE", "DEMO-07 // GUARD-4545", [
        '<rect x="120" y="90" width="360" height="220" fill="none" stroke="#38bdf8" stroke-width="2.5"/>',
        '<rect x="140" y="110" width="150" height="180" fill="none" stroke="#2563eb" stroke-width="1.5"/>',
        '<rect x="310" y="110" width="150" height="180" fill="none" stroke="#2563eb" stroke-width="1.5"/>',
        '<line x1="300" y1="90" x2="300" y2="310" stroke="#38bdf8" stroke-width="2"/>',
        '<line x1="120" y1="200" x2="480" y2="200" stroke="#38bdf8" stroke-width="1.5"/>',
        '<rect x="155" y="125" width="120" height="150" fill="rgba(56, 189, 248, 0.06)" stroke="#38bdf8" stroke-dasharray="2 2"/>',
        '<rect x="325" y="125" width="120" height="150" fill="rgba(56, 189, 248, 0.06)" stroke="#38bdf8" stroke-dasharray="2 2"/>',
        '<circle cx="280" cy="195" r="5" fill="#f59e0b"/>',
        '<text x="170" y="325" fill="#94a3b8" font-family="monospace" font-size="10">AL 45x45 PROFILE + 5mm POLYCARBONATE</text>'
    ]),

    # 8. Motorized Gearbox
    ("project-8.svg", "PLANETARY REDUCTION DRIVE ASSEMBLY", "DEMO-08 // GEAR-PL-10X", [
        '<circle cx="300" cy="200" r="100" fill="none" stroke="#38bdf8" stroke-width="2.5"/>',
        '<circle cx="300" cy="200" r="30" fill="none" stroke="#f59e0b" stroke-width="2"/>',
        '<circle cx="300" cy="200" r="10" fill="#38bdf8"/>',
        '<circle cx="300" cy="145" r="22" fill="none" stroke="#2563eb" stroke-width="1.5"/>',
        '<circle cx="250" cy="235" r="22" fill="none" stroke="#2563eb" stroke-width="1.5"/>',
        '<circle cx="350" cy="235" r="22" fill="none" stroke="#2563eb" stroke-width="1.5"/>',
        '<circle cx="300" cy="145" r="6" fill="#f59e0b"/>',
        '<circle cx="250" cy="235" r="6" fill="#f59e0b"/>',
        '<circle cx="350" cy="235" r="6" fill="#f59e0b"/>',
        '<text x="210" y="325" fill="#94a3b8" font-family="monospace" font-size="10">10:1 REDUCTION // 4140 HEAT TREATED GEARS</text>'
    ]),

    # 9. Waterproof Sensor Enclosure
    ("project-9.svg", "IP67 RUGGEDIZED TELEMETRY ENCLOSURE", "DEMO-09 // IP67-ENCL-AL", [
        '<rect x="140" y="100" width="320" height="200" rx="20" fill="none" stroke="#38bdf8" stroke-width="2.5"/>',
        '<rect x="155" y="115" width="290" height="170" rx="14" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 2"/>',
        '<circle cx="165" cy="125" r="5" fill="none" stroke="#38bdf8" stroke-width="1.5"/>',
        '<circle cx="435" cy="125" r="5" fill="none" stroke="#38bdf8" stroke-width="1.5"/>',
        '<circle cx="165" cy="275" r="5" fill="none" stroke="#38bdf8" stroke-width="1.5"/>',
        '<circle cx="435" cy="275" r="5" fill="none" stroke="#38bdf8" stroke-width="1.5"/>',
        '<circle cx="300" cy="200" r="35" fill="none" stroke="#2563eb" stroke-width="2"/>',
        '<circle cx="300" cy="200" r="15" fill="none" stroke="#38bdf8"/>',
        '<text x="180" y="320" fill="#94a3b8" font-family="monospace" font-size="10">O-RING SEAL CHANNEL (CONTINUOUS SILICONE)</text>'
    ]),

    # 10. Sheet Metal Robotic Chassis
    ("project-10.svg", "MONOCOQUE AMR ROBOTIC CHASSIS", "DEMO-10 // AMR-CHS-V2", [
        '<polygon points="120,240 180,130 420,130 480,240 440,280 160,280" fill="none" stroke="#38bdf8" stroke-width="2"/>',
        '<line x1="180" y1="130" x2="180" y2="280" stroke="#2563eb" stroke-dasharray="3 3"/>',
        '<line x1="420" y1="130" x2="420" y2="280" stroke="#2563eb" stroke-dasharray="3 3"/>',
        '<circle cx="160" cy="250" r="28" fill="none" stroke="#f59e0b" stroke-width="2"/>',
        '<circle cx="440" cy="250" r="28" fill="none" stroke="#f59e0b" stroke-width="2"/>',
        '<circle cx="300" cy="250" r="24" fill="none" stroke="#38bdf8" stroke-width="1.5"/>',
        '<rect x="230" y="160" width="140" height="70" fill="none" stroke="#38bdf8" stroke-dasharray="4 2"/>',
        '<text x="245" y="200" fill="#94a3b8" font-family="monospace" font-size="9">BATTERY BAY [48V 20Ah]</text>',
        '<text x="170" y="315" fill="#94a3b8" font-family="monospace" font-size="10">AL 5052-H32 // 2.5 mm BENT SHEET METAL</text>'
    ])
]

for filename, title, code, elements in svg_templates:
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" width="100%" height="100%">
  <defs>
    <pattern id="grid-{filename}" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.7"/>
    </pattern>
    <linearGradient id="hudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#111827" stop-opacity="0.95"/>
    </linearGradient>
  </defs>

  <!-- Background Canvas -->
  <rect width="600" height="380" fill="url(#hudGrad)"/>
  <rect width="600" height="380" fill="url(#grid-{filename})"/>

  <!-- CAD Viewport Overlay Frames -->
  <rect x="20" y="20" width="560" height="340" fill="none" stroke="#1e293b" stroke-width="1"/>
  <circle cx="20" cy="20" r="2" fill="#38bdf8"/>
  <circle cx="580" cy="20" r="2" fill="#38bdf8"/>
  <circle cx="20" cy="360" r="2" fill="#38bdf8"/>
  <circle cx="580" cy="360" r="2" fill="#38bdf8"/>

  <!-- Corner Reticles -->
  <path d="M 30 20 L 20 20 L 20 30" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <path d="M 570 20 L 580 20 L 580 30" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <path d="M 30 360 L 20 360 L 20 350" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <path d="M 570 360 L 580 360 L 580 350" fill="none" stroke="#38bdf8" stroke-width="2"/>

  <!-- Header HUD Tag -->
  <text x="35" y="42" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="10" letter-spacing="1.5">{code}</text>
  <text x="35" y="58" fill="#f8fafc" font-family="'Space Grotesk', sans-serif" font-weight="600" font-size="13">{title}</text>
  <text x="565" y="42" text-anchor="end" fill="#f59e0b" font-family="'JetBrains Mono', monospace" font-size="9" letter-spacing="1">DEMO SCHEMATIC // DRAFT</text>
  <line x1="35" y1="68" x2="565" y2="68" stroke="#1e293b" stroke-width="1"/>

  <!-- Main CAD Vector Graphic -->
  <g id="geometry">
    {''.join(elements)}
  </g>

  <!-- Engineering Coordinates & Scale Footer -->
  <line x1="35" y1="335" x2="565" y2="335" stroke="#1e293b" stroke-width="1"/>
  <text x="35" y="350" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="8">SCALE: 1:2.5 (METRIC) | PROJECTION: THIRD ANGLE | GD&amp;T: ASME Y14.5M</text>
  <text x="565" y="350" text-anchor="end" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="8">SYS: SOLIDWORKS 2024 SP3</text>
</svg>
'''
    filepath = os.path.join(images_dir, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(svg_content)

print(f"Generated {len(svg_templates)} SVG technical drawings in {images_dir}")
