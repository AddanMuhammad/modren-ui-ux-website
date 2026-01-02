import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const features = [
  {
    title: "AI Code Completion",
    description:
      "Leverage advanced AI algorithms to predict and complete your code snippets in real-time, boosting your productivity.",
    codeSnippet: `// AI-powered code completion
function calculateTotal(items) {
  return items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
}

// ✨ AI Suggestion:
// .reduce((sum, item) => sum + item.price * item.quantity, 0);`,
    imagePosition: "left",
  },
  {
    title: "Automated Testing",
    description:
      "Automatically run tests on your codebase to catch bugs early and ensure code quality.",
    codeSnippet: `// Automated test example
describe("calculateTotal", () => {
  it("calculates total price correctly", () => {
    const items = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 3 },
    ];

    expect(calculateTotal(items)).toBe(35);
  });
});`,
    imagePosition: "right",
  },
  {
    title: "Smart Debugging",
    description:
      "Identify and fix errors quickly with AI-powered debugging tools that analyze your code and suggest solutions.",
    codeSnippet: `// Bug detected: undefined value
function getUserName(user) {
  return user.profile.name;
}

// ❌ Runtime Error: Cannot read property 'name'
// ✅ AI Fix:
function getUserName(user) {
  return user?.profile?.name ?? "Guest";
}`,
    imagePosition: "left",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Your Complete Development
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {features.map((feature, key) => (
            <div
              key={key}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
                feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Code Section */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-b from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl transition-all duration-500" />
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border group-hover:border-blue-600/50 transition-all duration-300">
                    {/* IDE Interface */}
                    <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                        </div>
                        <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                          {feature.title}
                        </span>
                      </div>
                      <div>
                        <SyntaxHighlighter
                          language="javascript"
                          style={nightOwl}
                          customStyle={{
                            margin: 0,
                            background: "transparent",
                            borderRadius: "8px",
                            fontSize: "0.75rem",
                            lineHeight: "1.4",
                            height: "100%",
                          }}
                          wrapLines={true}
                        >
                          {feature.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Text Section */}
              <div className="flex-1 w-full">
                <div className="max-w-full mx-auto lg:mx-0 text-center lg:text-left">
                  <h3 className="text-6xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-xl sm:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
