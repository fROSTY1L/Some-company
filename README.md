# React Boilerplate: FSD + TypeScript + Styled-Components + Ant Design  

🚀 **Modern React starter** with TypeScript, FSD architecture, styled-components, Ant Design, Netlify hosting (with serverless functions), and React Player for YouTube integration.  

## 📦 Features  

- **React 18** with TypeScript  
- **FSD (Feature-Sliced Design)** methodology for scalable architecture  
- **Styled-components** (with global styles setup)  
- **Ant Design** UI library (customizable theme)  
- **Netlify** hosting (including serverless functions)  
- **React Player** for YouTube/Vimeo embeds  
- **SEO-optimized** (React Helmet, meta tags)  
- **Performance-optimized** (code splitting, lazy loading)  

---

## 🛠 Setup  

### 1. Install dependencies  
```bash
npm install
# or
yarn
```

### 2. Environment variables  
Create `.env` file:  
```env
VITE_API_KEY=your_api_key  # If using Vite
# or
REACT_APP_API_KEY=your_api_key  # If using Create React App
```

### 3. Run locally  
```bash
npm run dev
# or
yarn dev
```

### 4. Build for production  
```bash
npm run build
# or
yarn build
```

---

## 🏗 Project Structure (FSD)  

```
src/
├── app/                 # App-wide config
├── pages/               # Page components
├── widgets/             # Reusable complex UI blocks
├── features/            # Feature-specific logic
├── shared/              # Shared utilities, UI components, styles
└── main.tsx             # Entry point
```

---

## 🎨 Styling  

### Global Styles  
- Uses **`styled-components`** with a global theme provider.   
- Global styles (CSS reset, fonts) in `app/styles/global.ts`.  

---

## 📡 Netlify Setup  

### 1. Hosting  
- Deploy via `netlify.toml`:  
  ```toml
  [build]
    command = "npm run build"
    publish = "dist"
  ```

### 2. Serverless Functions  
- Functions live in `/netlify/functions`.  
- Example (Node.js):  
  ```ts
  exports.handler = async (event) => {
    return { statusCode: 200, body: JSON.stringify({ data: "Hello" }) };
  };
  ```
- Test locally:  
  ```bash
  netlify dev
  ```

---

## 🎥 React Player (YouTube)  
Embed videos with:  
```tsx
import ReactPlayer from "react-player/youtube";

<ReactPlayer 
  url="https://youtu.be/..." 
  controls 
  width="100%"
  height="500px"
/>
```

---

## ⚡ Performance & SEO  

### Optimizations  
- **Code splitting** (React.lazy + Suspense).  
- **Lazy-load images** (`loading="lazy"`).  
- **Preconnect to CDNs** (Google Fonts, YouTube).  

### SEO  
- **React Helmet** for dynamic meta tags.  
- **Sitemap.xml** (auto-generated via `vite-plugin-sitemap`).  
- **OpenGraph tags** in `app/SEO.tsx`.  

---

## 🚀 Deployment  
[Permalink](https://incandescent-cuchufli-19c1ae.netlify.app/contact) 

---

## 🔧 Assumptions  
- Uses **Vite** (faster builds vs. CRA).  
- Ant Design icons are **tree-shaken**.  
- Netlify Functions are **Node.js** (AWS Lambda).  
- FSD layers are **strictly enforced** (no cross-imports).  

---
