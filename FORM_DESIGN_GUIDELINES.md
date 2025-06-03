# Form Design Anti-patterns and Solutions

This guide outlines common form design issues ("bad smells") and explains how the Form Input Detector plugin can help identify and resolve these problems.

## 1. Incorrect Input Type Usage 🚫

### Bad Smells:
- Using regular text inputs for specialized data (emails, phone numbers, dates)
- Not utilizing HTML5 input types for validation
- Missing type-specific features (password visibility, number steppers)

### How the Plugin Helps:
- Detects when a component should be a specialized input type
- Suggests appropriate input types based on labels and context
- Identifies missing type-specific features (e.g., password visibility toggle)

### Example:
```html
<!-- ❌ Bad Practice -->
<input type="text" placeholder="Enter your email">
<input type="text" placeholder="Enter your phone">

<!-- ✅ Good Practice (Plugin Suggestion) -->
<input type="email" placeholder="Enter your email">
<input type="tel" placeholder="Enter your phone">
```

## 2. Inconsistent Input Sizing 📏

### Bad Smells:
- Inputs with varying widths for similar data types
- Oversized inputs for limited data
- Undersized inputs for expected content

### How the Plugin Helps:
- Identifies inputs that deviate from standard dimensions
- Suggests appropriate sizes based on input type
- Maintains consistency across similar input types

### Recommended Sizes:
- Text/Email/Password: 200-250px
- Numbers: 120px
- Phone: 160px
- Dates: 200px
- Checkboxes/Radio: 20px

## 3. Poor Visual Hierarchy 🎯

### Bad Smells:
- Missing or unclear labels
- Inconsistent label placement
- Poor grouping of related inputs

### How the Plugin Helps:
- Checks for presence of labels
- Analyzes label-input relationships
- Suggests proper grouping of form elements

### Best Practices:
```
✅ Good Structure:
Label
[Input Field]
Helper Text
Error Message

❌ Bad Structure:
[Input Field]
Helper Text
Label
Error Message
```

## 4. Inadequate Input Affordance 🔍

### Bad Smells:
- Missing visual cues for input type
- Lack of icons for specialized inputs
- Unclear interactive elements

### How the Plugin Helps:
- Identifies missing type indicators
- Suggests appropriate icons for input types
- Checks for proper visual feedback elements

### Example Icons:
- 🔒 Password fields
- 📅 Date inputs
- 📎 File uploads
- 🔍 Search fields
- 📞 Phone numbers

## 5. Accessibility Issues ♿

### Bad Smells:
- Missing ARIA labels
- Poor keyboard navigation
- Insufficient color contrast
- Unclear error states

### How the Plugin Helps:
- Checks for accessibility attributes
- Suggests proper ARIA labels
- Identifies missing keyboard interactions

### Example:
```html
<!-- ❌ Bad Practice -->
<input type="password">

<!-- ✅ Good Practice (Plugin Suggestion) -->
<input 
  type="password"
  aria-label="Password"
  aria-describedby="password-requirements"
>
```

## 6. Validation Feedback Problems ⚠️

### Bad Smells:
- Missing validation states
- Unclear error messages
- Delayed feedback
- Inconsistent validation UI

### How the Plugin Helps:
- Identifies inputs requiring validation
- Suggests appropriate validation patterns
- Checks for proper error state handling

### Validation Patterns:
```
Email: user@domain.com
Phone: (XXX) XXX-XXXX
Password: Min 8 chars, 1 uppercase, 1 number
Date: YYYY-MM-DD
```

## 7. Mobile Responsiveness Issues 📱

### Bad Smells:
- Inputs too small for touch targets
- Poor input type for mobile keyboards
- Inadequate spacing between inputs

### How the Plugin Helps:
- Checks for mobile-friendly dimensions
- Suggests appropriate mobile input types
- Identifies spacing issues

### Mobile Guidelines:
- Minimum touch target: 44x44px
- Input spacing: 8-16px
- Clear tap states
- Appropriate mobile keyboard types

## 8. Form Layout Problems 📋

### Bad Smells:
- Too many inputs in one row
- Inconsistent alignment
- Poor use of white space
- Confusing field order

### How the Plugin Helps:
- Analyzes form layout patterns
- Suggests proper grouping
- Identifies alignment issues

### Layout Best Practices:
```
✅ Good Layout:
[First Name] [Last Name]
[Email Address       ]
[Phone Number       ]
[Submit Button      ]

❌ Bad Layout:
[First Name] [Phone] [Email]
[Last Name        ] [Submit]
```

## 9. Missing Context and Help 💭

### Bad Smells:
- No helper text
- Missing input requirements
- Unclear format expectations
- No placeholder text

### How the Plugin Helps:
- Identifies missing helper text
- Suggests appropriate placeholder content
- Checks for format indicators

### Example:
```html
<!-- ✅ Good Practice -->
<label for="password">Password</label>
<input 
  type="password"
  id="password"
  placeholder="Enter your password"
>
<span class="helper-text">
  Must be 8+ characters with number and symbol
</span>
```

## 10. Submission and Reset Issues 🔄

### Bad Smells:
- Unclear primary actions
- Confusing button labels
- Poor button hierarchy
- Dangerous reset buttons

### How the Plugin Helps:
- Identifies button type misuse
- Suggests clear action labels
- Checks for proper button hierarchy

### Button Guidelines:
- Primary action: Prominent style
- Secondary action: Less prominent
- Destructive action: Clear warning
- Reset: Use with caution

## Implementation Tips 💡

1. **Use the Plugin Early**
   - Run detection during initial design
   - Address issues before development
   - Maintain consistency from start

2. **Regular Audits**
   - Periodically check existing forms
   - Update to match new guidelines
   - Maintain design system compliance

3. **Team Collaboration**
   - Share plugin findings
   - Document decisions
   - Maintain consistent standards

## Resources 📚

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Material Design Form Guidelines](https://material.io/components/text-fields)
- [Nielsen Norman Group Form Design](https://www.nngroup.com/articles/web-form-design/)
- [Figma Form Components](https://www.figma.com/community/tag/forms) 