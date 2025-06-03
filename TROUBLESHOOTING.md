# Form Input Detector - Troubleshooting Guide

This guide helps you resolve common issues you might encounter while using or developing the Form Input Detector plugin.

## For Users 👤

### 1. Plugin Not Detecting Inputs Correctly

#### Symptoms:
- Wrong input type detection
- Missing inputs
- Incorrect suggestions

#### Solutions:
1. **Check Component Structure**
   - Ensure inputs are frames, groups, or instances
   - Verify text labels are properly grouped
   - Check that icons are within the component

2. **Naming Conventions**
   - Use descriptive names (e.g., "email-input", "password-field")
   - Include type indicators in names
   - Keep naming consistent

3. **Component Organization**
   - Group related elements
   - Keep labels close to inputs
   - Maintain proper hierarchy

### 2. UI Issues

#### Symptoms:
- Plugin window too small/large
- Text overlapping
- Buttons not responding

#### Solutions:
1. **Window Size**
   - Resize plugin window
   - Collapse groups if needed
   - Scroll for more content

2. **Display Issues**
   - Refresh plugin
   - Clear plugin data
   - Restart Figma

3. **Interaction Problems**
   - Check selection before clicking detect
   - Ensure components are unlocked
   - Verify Figma permissions

### 3. Performance Issues

#### Symptoms:
- Slow detection
- Plugin freezing
- Figma becoming unresponsive

#### Solutions:
1. **Large Files**
   - Select fewer components at once
   - Work with smaller groups
   - Close unnecessary files

2. **Memory Usage**
   - Restart plugin
   - Clear cache
   - Restart Figma

3. **Selection Size**
   - Limit selection to 50 components
   - Split large forms into sections
   - Process one frame at a time

## For Developers 🛠️

### 1. Build Issues

#### Symptoms:
- Compilation errors
- Missing dependencies
- TypeScript errors

#### Solutions:
1. **TypeScript Errors**
   ```bash
   # Check TypeScript version
   npm list typescript

   # Clean and reinstall
   rm -rf node_modules
   npm install

   # Update TypeScript config
   npx tsc --init
   ```

2. **Missing Dependencies**
   ```bash
   # Install dev dependencies
   npm install --save-dev @figma/plugin-typings

   # Check for updates
   npm outdated
   ```

3. **Build Process**
   ```bash
   # Clean build
   rm -rf dist/
   npm run build

   # Debug build
   npm run build -- --debug
   ```

### 2. Development Environment Issues

#### Symptoms:
- Plugin not loading
- Changes not reflecting
- Console errors

#### Solutions:
1. **Plugin Registration**
   ```json
   // manifest.json
   {
     "name": "Form Input Detector",
     "id": "form-input-detector",
     "api": "1.0.0",
     // ... rest of config
   }
   ```

2. **Hot Reload Setup**
   ```json
   // package.json
   {
     "scripts": {
       "watch": "npm run build -- --watch",
       "dev": "npm run watch"
     }
   }
   ```

3. **Debug Mode**
   ```typescript
   // code.ts
   figma.showUI(__html__, { 
     width: 300, 
     height: 400,
     themeColors: true
   });

   // Enable console logging
   console.clear();
   console.log('Plugin started');
   ```

### 3. Type Detection Logic Issues

#### Symptoms:
- False positives
- Missed detections
- Incorrect scoring

#### Solutions:
1. **Score Calculation**
   ```typescript
   function adjustScoring(node: SceneNode): number {
     let score = 0;
     
     // Label matching
     if (hasMatchingLabel) score += 3;
     
     // Icon presence
     if (hasMatchingIcon) score += 2;
     
     // Size matching
     if (matchesDimensions) score += 1;
     
     return score;
   }
   ```

2. **Detection Rules**
   ```typescript
   // Add custom detection rules
   const customRules = {
     email: (node: SceneNode) => {
       return node.name.includes('email') || 
              hasEmailIcon(node) ||
              hasEmailLabel(node);
     },
     // Add more rules...
   };
   ```

3. **Debug Helpers**
   ```typescript
   function debugDetection(node: SceneNode) {
     console.group('Detection Debug');
     console.log('Node:', node.name);
     console.log('Type:', node.type);
     console.log('Score:', calculateScore(node));
     console.groupEnd();
   }
   ```

## Common Error Messages 🚨

### 1. Type Errors
```
Error: Type 'SceneNode' is not assignable to type 'FrameNode'
```
**Solution:**
```typescript
if (node.type === "FRAME") {
  const frameNode = node as FrameNode;
  // Process frame node
}
```

### 2. Plugin Loading Errors
```
Error: Plugin not found or invalid manifest
```
**Solution:**
- Verify manifest.json structure
- Check plugin ID matches
- Ensure all required files exist

### 3. UI Errors
```
Error: Failed to load UI
```
**Solution:**
- Check ui.html exists
- Verify HTML structure
- Ensure all assets are available

## Best Practices for Issue Prevention 🛡️

### 1. Component Structure
- Use consistent naming
- Maintain proper grouping
- Follow Figma's component guidelines

### 2. Code Organization
```typescript
// Separate concerns
/src
  /detection
    input-detection.ts
    scoring.ts
  /ui
    ui-handler.ts
  /utils
    helpers.ts
```

### 3. Error Handling
```typescript
try {
  const result = detectInputType(node);
  handleSuccess(result);
} catch (error) {
  handleError(error);
  figma.notify('Error: ' + error.message);
}
```

## Support Resources 📚

### Official Channels
- [Figma Plugin Forum](https://forum.figma.com/plugins)
- [Figma Plugin API Reference](https://www.figma.com/plugin-docs/api/reference)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Community Resources
- [Figma Plugin Developer Community](https://www.figma.com/community)
- [Stack Overflow - Figma Plugin Tags](https://stackoverflow.com/questions/tagged/figma-plugins)
- [GitHub Issues](https://github.com/your-repo/form-input-detector/issues)

### Contact Support
- Open an issue on GitHub
- Comment on the plugin page
- Join the Figma Community Discord

## Version-Specific Issues 🔄

### Version 1.0.0
- Initial release issues
- Basic detection limitations
- UI responsiveness

### Version 1.1.0
- Enhanced detection accuracy
- Performance improvements
- Additional input types

### Version 1.2.0 (Planned)
- Advanced validation
- Custom rules support
- Improved error handling 