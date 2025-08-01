# 🎨 AI Code Generator - Frontend

A modern, responsive React application built with Next.js 14 for generating AI-powered React components. Features a clean, ChatGPT-inspired design with full authentication flow and real-time code generation.

## ✨ Features

- 🎯 **Modern UI/UX**: Clean, responsive design inspired by ChatGPT
- 🔐 **Authentication**: Complete auth flow with signup, login, and password reset
- 🤖 **AI Integration**: Real-time code generation using OpenRouter API
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🎨 **Live Preview**: Preview generated components instantly
- 📋 **Copy to Clipboard**: One-click code copying
- 📦 **Export Functionality**: Download components as ZIP files
- 🔔 **Toast Notifications**: User-friendly feedback system
- 🎭 **Loading States**: Smooth loading animations

## 🛠 Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Toast notifications
- **Lucide React** - Beautiful icons
- **clsx & tailwind-merge** - Conditional styling utilities

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.js            # Landing page
│   │   ├── login/             # Login page
│   │   ├── signup/            # Signup page
│   │   ├── generate/          # Code generation page
│   │   ├── forget-password/   # Forgot password page
│   │   ├── reset-password/    # Reset password page
│   │   ├── layout.js          # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── Button.js          # Custom button component
│   │   ├── Input.js           # Custom input component
│   │   └── AuthForm.js        # Authentication form
│   └── lib/                   # Utilities and configurations
│       ├── api.js             # API client configuration
│       └── auth.js            # Authentication utilities
├── public/                    # Static assets
├── package.json
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.mjs         # PostCSS configuration
└── next.config.mjs           # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend server running (see backend README)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CodeGenerator/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2563eb` (Blue-600)
- **Secondary Gray**: `#6b7280` (Gray-500)
- **Background**: `#f9fafb` (Gray-50)
- **Success**: `#10b981` (Emerald-500)
- **Error**: `#ef4444` (Red-500)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Font weight 600-700
- **Body**: Font weight 400-500

### Components

#### Button Component
```jsx
<Button 
  variant="primary" 
  size="md" 
  loading={false}
  fullWidth={false}
>
  Click me
</Button>
```

#### Input Component
```jsx
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error="Invalid email"
  helpText="We'll never share your email"
/>
```

## 📱 Pages Overview

### Landing Page (`/`)
- Hero section with call-to-action
- Feature highlights
- Testimonials section
- Footer with links

### Authentication Pages
- **Login** (`/login`): User login with email/password
- **Signup** (`/signup`): User registration
- **Forgot Password** (`/forget-password`): Password reset request
- **Reset Password** (`/reset-password`): OTP verification and new password

### Code Generation (`/generate`)
- Protected route requiring authentication
- AI prompt input
- Generated code display (JSX + CSS)
- Copy to clipboard functionality
- Download as ZIP option
- Live preview toggle

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configurations:

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // Custom colors and animations
    }
  },
  plugins: []
}
```

### API Configuration
API calls are configured in `src/lib/api.js`:

```javascript
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true
});
```

## 🎯 Key Features Implementation

### Authentication Flow
1. **Signup**: Email/password registration
2. **Login**: JWT-based authentication
3. **Session Management**: Redis-backed sessions
4. **Password Reset**: OTP-based reset flow

### AI Code Generation
1. **Prompt Input**: User describes desired component
2. **API Call**: Sends prompt to OpenRouter API
3. **Response Parsing**: Extracts JSX and CSS
4. **Display**: Shows formatted code with syntax highlighting
5. **Export**: Downloads as ZIP file

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible layouts using CSS Grid and Flexbox

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables for Production
```env
NEXT_PUBLIC_API_URL=https://your-backend-domain.com/api
```

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 🐛 Troubleshooting

### Common Issues

1. **Tailwind CSS not applying**
   - Clear `.next` cache: `rm -rf .next`
   - Restart development server

2. **API calls failing**
   - Check backend server is running
   - Verify `NEXT_PUBLIC_API_URL` environment variable
   - Check CORS configuration in backend

3. **Authentication issues**
   - Clear browser cookies
   - Check JWT token expiration
   - Verify Redis connection

## 📚 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
#   C o d e G e n e r a t o r - f r o n t e n d  
 #   C o d e G e n e r a t o r - f r o n t e n d  
 #   C o d e G e n e r a t o r - f r o n t e n d  
 