import { AiTemplate } from "@/types/ai-template";

export const AiToolsTemplate: AiTemplate[] = [
  {
    name: "Blog Title",
    desc: "Generate engaging and SEO-friendly titles for your blog posts with our intuitive Blog Title Generator.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Generate 5 blog topic ideas based on niche and outline and provide results in Rich Text Editor format.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        value: "",
        required: true,
      },
      {
        label: "Enter blog outline (Optional)",
        field: "textarea",
        name: "outline",
        value: "",
      },
    ],
    keywords: [
      "blog title generator",
      "SEO blog titles",
      "headline generator",
      "content creation tool",
    ],
  },
  {
    name: "Blog Content",
    desc: "Generate blog content based on a given topic and outline in a rich text editor format.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Generate blog content based on topic and outline in rich text editor format.",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        value: "",
        required: true,
      },
      {
        label: "Enter blog outline (Optional)",
        field: "textarea",
        value: "",
        name: "outline",
      },
    ],
    keywords: [
      "blog content generator",
      "AI content creation",
      "article generator",
      "blog writing tool",
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "Generate top 5 blog topic ideas based on niche in a bullet point format.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate top 5 blog topic ideas in bullet point format based on niche.",
    form: [
      {
        label: "Enter your niche",
        field: "input",
        name: "niche",
        value: "",
        required: true,
      },
    ],
    keywords: [
      "blog topic ideas",
      "topic generator",
      "content idea generator",
      "blog post ideas",
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "Generate SEO optimized YouTube video titles based on keywords and outline in HTML tags format.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Generate 5 SEO optimized title ideas based on keywords and outline in HTML tags format.",
    form: [
      {
        label: "Enter your YouTube video topic keywords",
        field: "input",
        name: "keywords",
        value: "",
        required: true,
      },
      {
        label: "Enter YouTube video description outline (Optional)",
        field: "textarea",
        name: "outline",
        value: "",
      },
    ],
    keywords: [
      "YouTube SEO title generator",
      "video title generator",
      "SEO for YouTube",
      "YouTube taglines",
    ],
  },
  {
    name: "Youtube Description",
    desc: "Generate YouTube video descriptions with emojis based on topic and outline in a rich text editor format.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate YouTube description with emojis under 4-5 lines based on topic and outline in rich text editor format.",
    form: [
      {
        label: "Enter your YouTube video topic/title",
        field: "input",
        name: "topic",
        value: "",
        required: true,
      },
      {
        label: "Enter YouTube video outline (Optional)",
        field: "textarea",
        name: "outline",
        value: "",
      },
    ],
    keywords: [
      "YouTube description generator",
      "video description tool",
      "YouTube content creator",
      "YouTube SEO",
    ],
  },
  {
    name: "Youtube Tags",
    desc: "Generate 10 YouTube tags based on title and outline in a bullet point format.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",
    aiPrompt:
      "Generate 10 YouTube tags in bullet point format based on title and outline.",
    form: [
      {
        label: "Enter your YouTube video title",
        field: "input",
        name: "title",
        value: "",
        required: true,
      },
      {
        label: "Enter YouTube video outline (Optional)",
        field: "textarea",
        name: "outline",
        value: "",
      },
    ],
    keywords: [
      "YouTube tag generator",
      "video tags",
      "YouTube SEO tags",
      "video metadata",
    ],
  },
  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Rewrite articles or blog posts while ensuring they are plagiarism-free and bypass AI detectors.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite the provided article or blog post without plagiarism in rich text editor format.",
    form: [
      {
        label: "Provide your article/blog post to rewrite",
        field: "textarea",
        name: "article",
        value: "",
        required: true,
      },
    ],
    keywords: [
      "article rewriter",
      "content rewriting tool",
      "plagiarism-free rewriting",
      "AI rewriting",
    ],
  },
  {
    name: "Text Improver",
    desc: "Refine your writing by eliminating errors and improving readability with comprehensive tone analysis and word choice suggestions.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Rewrite the provided text without any grammar mistakes and professionally in rich text editor format.",
    form: [
      {
        label: "Enter text to improve or rewrite",
        field: "textarea",
        name: "textToImprove",
        value: "",
        required: true,
      },
    ],
    keywords: [
      "text improver",
      "writing enhancement tool",
      "grammar checker",
      "proofreading tool",
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "Add emojis to your text to enhance expression and engagement, rewriting it in a rich text editor format.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "Blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add emojis to the provided text based on the outline and rewrite it in rich text editor format.",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        value: "",
        required: true,
      },
    ],
    keywords: [
      "emoji generator",
      "text emoji",
      "emoji tool",
      "text enhancement",
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "Generate Instagram posts based on provided keywords and output them in a rich text editor format.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "Instagram Tools",
    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram posts based on given keywords and output them in rich text editor format.",
    form: [
      {
        label: "Enter keywords for your Instagram post",
        field: "input",
        name: "keywords",
        value: "",
        required: true,
      },
    ],
    keywords: [
      "Instagram post generator",
      "social media post generator",
      "Instagram content creator",
      "post creator",
    ],
  },
  {
    name: "Instagram Hashtag Generator",
    desc: "Generate 15 Instagram hashtags based on provided keywords in a bullet point format.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "Instagram Tools",
    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Generate 15 Instagram hashtags in bullet point format based on given keywords.",
    form: [
      {
        label: "Enter keywords for your Instagram hashtags",
        field: "input",
        name: "keywords",
        value: "",
        required: true,
      },
    ],
    keywords: [
      "Instagram hashtag generator",
      "hashtag generator",
      "Instagram tags",
      "social media hashtags",
    ],
  },
  {
    name: "Instagram Post/Reel Idea Generator",
    desc: "Generate 5-10 Instagram post ideas based on niche with the latest trends in a rich text editor format.",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "Instagram Tools",
    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5-10 Instagram post ideas based on niche with the latest trends and output them in rich text editor format.",
    form: [
      {
        label: "Enter keywords or niche for your Instagram ideas",
        field: "input",
        name: "keywords",
        value: "",
        required: true,
      },
    ],
    keywords: [
      "Instagram post ideas",
      "post idea generator",
      "Instagram content ideas",
      "social media trends",
    ],
  },
  {
    name: "English Grammar Check",
    desc: "Correct your English grammar by providing the text for analysis and improvement.",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "English Tools",
    slug: "english-grammar-checker",
    aiPrompt:
      "Rewrite the provided text by correcting grammar mistakes and output the improved text in rich text editor format.",
    form: [
      {
        label: "Enter text to correct the grammar",
        field: "input",
        name: "inputText",
        value: "",
        required: true,
      },
    ],
    keywords: [
      "grammar checker",
      "English grammar tool",
      "grammar correction",
      "proofreading tool",
    ],
  },
  {
    name: "Write Code",
    desc: "Generate programming code in any language based on the provided code description in a code block format.",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding Tools",
    slug: "write-code",
    aiPrompt:
      "Write code based on the provided description along with the programming language and output it in rich text editor format within a code block.",
    form: [
      {
        label:
          "Enter the description of the code you want along with the programming language",
        field: "textarea",
        name: "codeDescription",
        value: "",
        required: true,
      },
    ],
    keywords: [
      "code generator",
      "programming code generator",
      "code writing tool",
      "coding assistant",
    ],
  },
  {
    name: "Explain Code",
    desc: "Explain programming code line by line based on the provided code description in a code block format.",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding Tools",
    slug: "explain-code",
    aiPrompt:
      "Explain the provided code line by line based on the provided code description and output it in rich text editor format within a code block.",
    form: [
      {
        label: "Enter the code you want to understand",
        field: "textarea",
        name: "codeDescription",
        value: "",
        required: true,
      },
    ],
    keywords: [
      "code explainer",
      "code understanding tool",
      "code explanation",
      "coding assistance",
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "Detect bugs in the provided code input and provide solutions and detailed alternatives in a code block format.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "Coding Tools",
    slug: "code-bug-detector",
    aiPrompt:
      "Detect bugs in the provided code input and provide solutions and detailed alternatives in rich text editor format within a code block.",
    form: [
      {
        label: "Enter the code you want to test for bugs",
        field: "textarea",
        name: "codeInput",
        value: "",
        required: true,
      },
    ],
    keywords: [
      "bug detector",
      "code debugger",
      "code issue finder",
      "coding problem solver",
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Generate catchy taglines for your business product based on the provided product name and outline in a rich text editor format.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketing Tools",
    slug: "tagline-generator",
    aiPrompt:
      "Generate catchy taglines for your business product based on the provided product name and outline and output them in rich text editor format.",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        value: "",
        required: true,
      },
      {
        label: "What are you selling / Marketing",
        field: "textarea",
        name: "outline",
        value: "",
        required: true,
      },
    ],
    keywords: [
      "tagline generator",
      "business taglines",
      "brand slogan generator",
      "product branding",
    ],
  },
  {
    name: "Product Description",
    desc: "Generate concise product descriptions for e-commerce based on the provided product name and details in a rich text editor format.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketing Tools",
    slug: "product-description",
    aiPrompt:
      "Generate concise product descriptions for e-commerce based on the provided product name and details and output them in rich text editor format.",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        value: "",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        value: "",
        required: true,
      },
    ],
    keywords: [
      "product description generator",
      "e-commerce descriptions",
      "product detail creator",
      "online sales",
    ],
  },
];
