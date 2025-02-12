# Donezo - Modern Task Management App

A sleek and intuitive task management application built with React and styled with Tailwind CSS. Donezo helps you stay organized with a clean, modern interface and smooth user experience.

![Donezo App Screenshot](./screenshot.png)

## Features

- 🔐 User Authentication (Frontend)
- ✨ Modern, Responsive UI
- ✅ Task Management
  - Create new tasks
  - Mark tasks as complete/incomplete
  - Delete tasks
  - View all tasks at a glance
- 🎨 Beautiful Animated Logo
- 📱 Mobile-Friendly Design

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Animations**: Custom CSS animations
- **State Management**: React Hooks
- **Form Validation**: Custom validation logic

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/donezo.git
```

2. Install dependencies:
```bash
cd donezo
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
donezo/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Dashboard.tsx   # Main task management interface
│   │   ├── LoginPage.tsx   # User authentication
│   │   ├── Logo.tsx       # Animated logo component
│   │   ├── TaskInput.tsx  # New task creation
│   │   └── TaskList.tsx   # Task display and management
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   └── index.tsx          # Application entry point
└── public/                # Static assets
```

## Design Choices

- **Color Scheme**: Emerald and teal gradients for a fresh, professional look
- **Animations**: Subtle animations for better user feedback
- **Typography**: Clean, readable fonts with appropriate hierarchy
- **Layout**: Responsive grid system for optimal viewing on all devices

## Future Enhancements

- [ ] Backend integration with Node.js and MongoDB
- [ ] User profiles and settings
- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Collaboration features
- [ ] Dark mode support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- Design inspiration from modern web applications
- Icons provided by Heroicons
- Built with Create React App
