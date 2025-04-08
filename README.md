# Angular Assignment App

This is a single-page Angular 18 application that demonstrates:
- Client-side routing
- Data fetching using Angular services and `HttpClient`
- Reactive forms with validation
- Deployment on Vercel

🔗 **Live Demo**: [View on Vercel](https://angular-assignment-gs7cwhjh8-ronils-projects-0b4c33e7.vercel.app)

---

## 📁 Project Structure

- **Home Page**: Static landing page with a welcome message.
- **API Data Page**: Consumes a public API and displays post data.
- **Form Page**: Includes a reactive contact form with validation.

---

## 🚀 Setup & Run

### Install Dependencies

```bash
npm install
Start Development Server
bash
Copy
Edit
ng serve
Visit: http://localhost:4200/

🛠 Build for Production
bash
Copy
Edit
ng build
Output will be in dist/browser/

🌐 Deployment (Vercel)
Vercel Configuration:
Framework Preset: Angular

Build Command: ng build

Output Directory: dist/browser

This app is deployed on Vercel and auto-builds on push.

✨ Technologies Used
Angular 18

RxJS & Observables

Angular Router

Reactive Forms

Angular Services & HTTP Client

Vercel Hosting