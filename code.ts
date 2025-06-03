// Import Figma types
import { SceneNode, TextNode } from '@figma/plugin-typings';

// This shows up as a type when compiled to JavaScript
declare var __html__: string;

// Input type definitions
interface InputTypeDefinition {
  name: string;
  characteristics: {
    shape?: string;
    size?: { width: number; height: number };
    commonIcons?: string[];
    commonLabels?: string[];
    specialTraits?: string[];
  };
}

const inputTypes: { [key: string]: InputTypeDefinition } = {
  text: {
    name: "Text Input",
    characteristics: {
      shape: "rectangle",
      size: { width: 200, height: 40 },
      commonLabels: ["name", "username", "text", "input", "field"]
    }
  },
  password: {
    name: "Password Input",
    characteristics: {
      shape: "rectangle",
      size: { width: 200, height: 40 },
      commonIcons: ["eye", "eye-slash", "lock", "key"],
      commonLabels: ["password", "pwd", "pass", "secret"]
    }
  },
  email: {
    name: "Email Input",
    characteristics: {
      shape: "rectangle",
      size: { width: 200, height: 40 },
      commonIcons: ["@", "envelope", "mail"],
      commonLabels: ["email", "e-mail", "mail", "contact"]
    }
  },
  number: {
    name: "Number Input",
    characteristics: {
      shape: "rectangle",
      size: { width: 120, height: 40 },
      commonLabels: ["number", "quantity", "amount", "age", "count"],
      specialTraits: ["spinner", "stepper"]
    }
  },
  checkbox: {
    name: "Checkbox Input",
    characteristics: {
      shape: "square",
      size: { width: 20, height: 20 },
      commonIcons: ["check", "tick"],
      commonLabels: ["checkbox", "check", "toggle", "accept", "agree"]
    }
  },
  radio: {
    name: "Radio Input",
    characteristics: {
      shape: "circle",
      size: { width: 20, height: 20 },
      commonLabels: ["radio", "option", "select", "choice"]
    }
  },
  color: {
    name: "Color Input",
    characteristics: {
      shape: "rectangle",
      size: { width: 40, height: 40 },
      commonIcons: ["palette", "color-picker"],
      commonLabels: ["color", "colour", "picker", "theme"]
    }
  },
  date: {
    name: "Date Input",
    characteristics: {
      shape: "rectangle",
      size: { width: 200, height: 40 },
      commonIcons: ["calendar", "date"],
      commonLabels: ["date", "day", "calendar", "schedule"]
    }
  },
  time: {
    name: "Time Input",
    characteristics: {
      shape: "rectangle",
      size: { width: 120, height: 40 },
      commonIcons: ["clock", "time", "watch"],
      commonLabels: ["time", "hour", "schedule"]
    }
  },
  file: {
    name: "File Input",
    characteristics: {
      shape: "rectangle",
      size: { width: 200, height: 40 },
      commonIcons: ["upload", "file", "attachment", "paperclip"],
      commonLabels: ["file", "upload", "attachment", "browse"]
    }
  },
  range: {
    name: "Range Input",
    characteristics: {
      shape: "rectangle",
      size: { width: 200, height: 20 },
      commonLabels: ["range", "slider", "scale"],
      specialTraits: ["slider", "track"]
    }
  },
  search: {
    name: "Search Input",
    characteristics: {
      shape: "rectangle",
      size: { width: 200, height: 40 },
      commonIcons: ["search", "magnifier", "find"],
      commonLabels: ["search", "find", "lookup"]
    }
  },
  tel: {
    name: "Telephone Input",
    characteristics: {
      shape: "rectangle",
      size: { width: 200, height: 40 },
      commonIcons: ["phone", "telephone"],
      commonLabels: ["tel", "telephone", "phone", "mobile"]
    }
  },
  url: {
    name: "URL Input",
    characteristics: {
      shape: "rectangle",
      size: { width: 250, height: 40 },
      commonIcons: ["link", "web", "globe"],
      commonLabels: ["url", "website", "link", "web"]
    }
  },
  button: {
    name: "Button Input",
    characteristics: {
      shape: "rectangle",
      size: { width: 100, height: 40 },
      commonLabels: ["button", "submit", "click", "action"]
    }
  },
  submit: {
    name: "Submit Button",
    characteristics: {
      shape: "rectangle",
      size: { width: 100, height: 40 },
      commonLabels: ["submit", "send", "save", "confirm"]
    }
  },
  reset: {
    name: "Reset Button",
    characteristics: {
      shape: "rectangle",
      size: { width: 100, height: 40 },
      commonLabels: ["reset", "clear", "cancel"]
    }
  }
};

// Function to detect input type based on characteristics
function detectInputType(node: FrameNode | GroupNode | InstanceNode): string | null {
  // Get all text nodes within the input component
  const textNodes = node.findAll((n) => n.type === "TEXT") as TextNode[];
  const labels = textNodes.map(n => n.characters.toLowerCase());

  // Get the node's dimensions for comparison
  let nodeWidth = 0;
  let nodeHeight = 0;
  if ('width' in node && 'height' in node) {
    nodeWidth = node.width;
    nodeHeight = node.height;
  }

  // Score-based detection system
  let bestMatch = { type: "text", score: 0 };

  Object.keys(inputTypes).forEach(type => {
    const definition = inputTypes[type];
    let score = 0;

    // Check labels
    const hasMatchingLabel = labels.some(label =>
      definition.characteristics.commonLabels?.some(commonLabel =>
        label.includes(commonLabel)
      )
    );
    if (hasMatchingLabel) score += 3;

    // Check icons
    if (definition.characteristics.commonIcons) {
      const hasMatchingIcon = node.findAll((n) => {
        if (n.name) {
          return definition.characteristics.commonIcons!.some(icon =>
            n.name.toLowerCase().includes(icon)
          );
        }
        return false;
      }).length > 0;
      if (hasMatchingIcon) score += 2;
    }

    // Check size similarity if dimensions are available
    if (nodeWidth && nodeHeight && definition.characteristics.size) {
      const widthDiff = Math.abs(nodeWidth - definition.characteristics.size.width);
      const heightDiff = Math.abs(nodeHeight - definition.characteristics.size.height);
      if (widthDiff < 50 && heightDiff < 20) score += 1;
    }

    // Check shape based on child nodes
    const rectangleNodes = node.findAll((n) => n.type === "RECTANGLE").length;
    const ellipseNodes = node.findAll((n) => n.type === "ELLIPSE").length;
    
    if (definition.characteristics.shape === "rectangle" && rectangleNodes > 0) {
      score += 1;
    } else if (definition.characteristics.shape === "circle" && ellipseNodes > 0) {
      score += 1;
    }

    if (score > bestMatch.score) {
      bestMatch = { type, score };
    }
  });

  return bestMatch.type;
}

// Main plugin code
figma.showUI(__html__, { width: 300, height: 400 });

figma.ui.onmessage = async (msg: { type: string }) => {
  if (msg.type === 'detect-inputs') {
    const selection = figma.currentPage.selection;
    const results: { node: SceneNode; type: string }[] = [];

    for (const node of selection) {
      if (node.type === "FRAME" || node.type === "GROUP" || node.type === "INSTANCE") {
        const inputType = detectInputType(node);
        if (inputType) {
          results.push({
            node: node,
            type: inputTypes[inputType].name
          });
        }
      }
    }

    // Send results back to UI
    figma.ui.postMessage({
      type: 'detection-results',
      results: results.map(r => ({
        name: r.node.name,
        type: r.type
      }))
    });
  }
}; 