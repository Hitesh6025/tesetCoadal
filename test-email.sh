#!/bin/bash

# Test Contact Form with Email Functionality
# Make sure your server is running: npm run dev

echo "🧪 Testing Contact Form Email Functionality..."
echo ""

# Test contact form submission
response=$(curl -s -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890", 
    "company": "Test Company Inc",
    "service": "Mobile App Development",
    "budget": "$25K - $50K",
    "description": "We need a mobile app for our e-commerce business. The app should support both iOS and Android platforms with features like user authentication, product catalog, shopping cart, and payment integration."
  }')

echo "📧 Contact Form Response:"
echo "$response" | jq . 2>/dev/null || echo "$response"
echo ""

# Extract submission ID if available
id=$(echo "$response" | jq -r '.id' 2>/dev/null)

if [ "$id" != "null" ] && [ "$id" != "" ]; then
    echo "✅ Form submitted successfully!"
    echo "📄 Submission ID: $id"
    
    # Check if emails were sent
    emailSent=$(echo "$response" | jq -r '.emailSent' 2>/dev/null)
    autoReplySent=$(echo "$response" | jq -r '.autoReplySent' 2>/dev/null)
    
    echo "📧 Admin Email: $emailSent"
    echo "📬 Auto-Reply: $autoReplySent"
    
    if [ "$emailSent" = "true" ]; then
        echo ""
        echo "🎉 Email functionality is working!"
        echo "📬 Check your inbox for the contact form details"
    else
        echo ""
        echo "⚠️  Email not sent - check your email configuration"
        echo "📖 See EMAIL_SETUP_GUIDE.md for setup instructions"
    fi
else
    echo "❌ Form submission failed"
    echo "🔍 Check server logs for errors"
fi

echo ""
echo "🔍 To verify the submission was saved to database:"
echo "curl http://localhost:3000/api/contact/list"
