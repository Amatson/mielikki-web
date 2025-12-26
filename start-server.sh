#!/bin/bash

# Quick Start Script for Mielikki Website
# This script helps you preview the website locally

echo "🏥 Mielikki Veterinary Clinic Website"
echo "======================================"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found"
    echo ""
    echo "🚀 Starting local web server..."
    echo "📱 Open your browser to: http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    cd "$(dirname "$0")"
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Python found"
    echo ""
    echo "🚀 Starting local web server..."
    echo "📱 Open your browser to: http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    cd "$(dirname "$0")"
    python -m SimpleHTTPServer 8000
else
    echo "❌ Python not found"
    echo ""
    echo "Please install Python or open index.html directly in your browser"
    echo ""
    echo "Alternatively, you can use:"
    echo "  - Node.js: npx http-server"
    echo "  - PHP: php -S localhost:8000"
    echo "  - Or just double-click index.html"
fi
