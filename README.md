# DevScout

DevScout is a modern, lightweight job portal application built using React, Supabase, and Clerk. This project aims to provide an efficient and user-friendly platform for job seekers and recruiters to connect.

## Features

- **Authentication and Authorization**: Seamless user management powered by Clerk.
- **Database and Backend**: Supabase for real-time database and backend functionalities.
- **Job Listings**: 
  - Recruiters can post jobs with detailed descriptions.
  - Job seekers can view and apply for jobs.
- **User Roles**:
  - Separate dashboards for recruiters and job seekers.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **State Management**: Context API and local storage for efficient state management.

## Tech Stack

- **Frontend**: React, React Context API
- **Backend**: Supabase
- **Authentication**: Clerk
- **Styling**: CSS/ShadCn-UI/Tailwind css
- **Deployment**: Vercel/AWS

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

Follow these steps to set up and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/atharvams/DevScout.git
   ```

2. Navigate to the project directory:
   ```bash
   cd DevScout
   ```

3. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add your Supabase and Clerk credentials:

    ```bash
    VITE_SUPABASE_URL=
    VITE_CLERK_PUBLISHABLE_KEY=
    VITE_SUPABASE_ANON_KEY=
    ```

5. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```


## Deployment

1. Build the application:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Deploy the `build/` folder to your hosting service of choice (e.g., Vercel, Netlify).

## Contributing

We welcome contributions to improve DevScout! If you want to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your commit message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [React](https://reactjs.org/)
- [Supabase](https://supabase.io/)
- [Clerk](https://clerk.dev/)

## Contact

For any inquiries, feel free to reach out:

- **Author**: Atharva S
- **GitHub**: [atharvams](https://github.com/atharvams)
- **Email**: [atharvams009@gmail.com]

---

Happy coding!
