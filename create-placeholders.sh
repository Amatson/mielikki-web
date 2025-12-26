#!/bin/bash

# Script to create placeholder SVG images for the Mielikki website
# These placeholders should be replaced with actual images before production

cd "$(dirname "$0")/images"

# Create hero background
cat > hero-background.svg << 'EOF'
<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2c5f2d;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#97bc62;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#grad1)"/>
  <circle cx="960" cy="540" r="200" fill="#ffffff" opacity="0.1"/>
  <text x="960" y="560" font-family="Arial" font-size="48" fill="#ffffff" text-anchor="middle">Hero Background</text>
</svg>
EOF

# Create vaccination image
cat > vaccination.svg << 'EOF'
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" fill="#e3f2fd"/>
  <rect x="200" y="100" width="200" height="200" rx="20" fill="#ffffff" stroke="#2c5f2d" stroke-width="3"/>
  <line x1="280" y1="150" x2="320" y2="150" stroke="#2c5f2d" stroke-width="8" stroke-linecap="round"/>
  <line x1="300" y1="130" x2="300" y2="170" stroke="#2c5f2d" stroke-width="8" stroke-linecap="round"/>
  <text x="300" y="260" font-family="Arial" font-size="20" fill="#2c5f2d" text-anchor="middle">Vaccinations</text>
</svg>
EOF

# Create health check image
cat > health-check.svg << 'EOF'
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" fill="#f3e5f5"/>
  <circle cx="300" cy="200" r="80" fill="#ffffff" stroke="#2c5f2d" stroke-width="3"/>
  <path d="M 300 160 L 320 180 L 340 140" stroke="#2c5f2d" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="300" y="300" font-family="Arial" font-size="20" fill="#2c5f2d" text-anchor="middle">Health Check</text>
</svg>
EOF

# Create surgery image
cat > surgery.svg << 'EOF'
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" fill="#e8eaf6"/>
  <rect x="150" y="100" width="300" height="200" rx="10" fill="#ffffff" stroke="#2c5f2d" stroke-width="3"/>
  <line x1="280" y1="200" x2="320" y2="200" stroke="#ff6b35" stroke-width="6" stroke-linecap="round"/>
  <text x="300" y="330" font-family="Arial" font-size="20" fill="#2c5f2d" text-anchor="middle">Surgery</text>
</svg>
EOF

# Create dental image
cat > dental.svg << 'EOF'
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" fill="#e0f7fa"/>
  <ellipse cx="280" cy="200" rx="30" ry="50" fill="#ffffff" stroke="#2c5f2d" stroke-width="3"/>
  <ellipse cx="320" cy="200" rx="30" ry="50" fill="#ffffff" stroke="#2c5f2d" stroke-width="3"/>
  <text x="300" y="300" font-family="Arial" font-size="20" fill="#2c5f2d" text-anchor="middle">Dental Care</text>
</svg>
EOF

# Create emergency image
cat > emergency.svg << 'EOF'
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" fill="#ffebee"/>
  <circle cx="300" cy="200" r="80" fill="#ff6b35"/>
  <rect x="280" y="160" width="40" height="80" fill="#ffffff"/>
  <rect x="260" y="180" width="80" height="40" fill="#ffffff"/>
  <text x="300" y="320" font-family="Arial" font-size="20" fill="#2c5f2d" text-anchor="middle">Emergency Care</text>
</svg>
EOF

# Create laboratory image
cat > laboratory.svg << 'EOF'
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" fill="#f1f8e9"/>
  <path d="M 250 120 L 250 200 L 220 280 L 220 290 Q 220 300 230 300 L 370 300 Q 380 300 380 290 L 380 280 L 350 200 L 350 120 Z" fill="#ffffff" stroke="#2c5f2d" stroke-width="3"/>
  <rect x="240" y="240" width="120" height="40" fill="#97bc62" opacity="0.5"/>
  <text x="300" y="340" font-family="Arial" font-size="20" fill="#2c5f2d" text-anchor="middle">Laboratory</text>
</svg>
EOF

# Create clinic interior image
cat > clinic-interior.svg << 'EOF'
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#fafafa"/>
  <rect x="50" y="350" width="700" height="200" fill="#97bc62" opacity="0.3"/>
  <rect x="100" y="200" width="200" height="300" fill="#ffffff" stroke="#2c5f2d" stroke-width="2"/>
  <rect x="500" y="200" width="200" height="300" fill="#ffffff" stroke="#2c5f2d" stroke-width="2"/>
  <text x="400" y="100" font-family="Arial" font-size="32" fill="#2c5f2d" text-anchor="middle">Modern Clinic Interior</text>
</svg>
EOF

# Create blog placeholder images
for blog in "winter-care" "vaccination" "dental-care" "nutrition" "senior-care" "behavior"; do
  cat > "blog-${blog}.svg" << EOF
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" fill="#e8f5e9"/>
  <rect x="100" y="100" width="400" height="200" rx="10" fill="#ffffff" stroke="#2c5f2d" stroke-width="2"/>
  <text x="300" y="210" font-family="Arial" font-size="24" fill="#2c5f2d" text-anchor="middle">Blog: ${blog}</text>
</svg>
EOF
done

echo "Placeholder SVG images created successfully!"
echo "Remember to replace these with actual photos before production."
